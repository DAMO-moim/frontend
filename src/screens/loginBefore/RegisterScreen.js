import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import Checkbox from 'expo-checkbox';
import { useMutation } from '@tanstack/react-query';
import { useNavigation } from '@react-navigation/native';
import * as userService from '../../api/mutations/userService';
import InputWithLabel from '../../components/InputWithLabel';
import PasswordInput from '../../components/PasswordInput';
import { CustomButton } from '../../components/CustomButton';
import { BLACK_COLOR, WHITE_COLOR } from '../../constants/colors';
import RNPickerSelect from 'react-native-picker-select';
import { commonRadio, commonStyles } from '../../constants/styles';
import { CommonRadio } from '../../components/CommonRadio';

// 이메일 유효성 검사 정규식
const isValidEmail = (email) => /\S+@\S+\.\S+/.test(email);
// 비밀번호 유효성 검사 (영문+숫자+특수문자 조합, 8~20자)
const isValidPassword = (password) => /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/.test(password);
// 전화번호 포맷팅 함수
const formatPhoneNumber = (number) => {
  const cleaned = number.replace(/\D/g, '');
  if (cleaned.length < 4) return cleaned;
  if (cleaned.length < 7) return cleaned.slice(0, 3) + '-' + cleaned.slice(3);
  return cleaned.slice(0, 3) + '-' + cleaned.slice(3, 7) + '-' + cleaned.slice(7, 11);
};

export const RegisterScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [birth, setBirth] = useState('2000');
  const [gender, setGender] = useState('MAN');
  const [agreed, setAgreed] = useState(false);
  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false); // 폼 유효성 상태 추가

  useEffect(() => {
    if (confirmPassword && password !== confirmPassword) {
      setPasswordError('비밀번호가 일치하지 않습니다.');
    } else {
      setPasswordError('');
    }
  }, [password, confirmPassword]);

  useEffect(() => {
    // 🔹 모든 입력이 올바르면 `true`, 하나라도 틀리면 `false`
    const isValid =
      isValidEmail(email) &&
      isValidPassword(password) &&
      password === confirmPassword &&
      name.length > 0 &&
      name.length <= 8 &&
      /^\d{10,11}$/.test(phone.replace(/-/g, '')) &&
      agreed;

    setIsFormValid(isValid);
  }, [email, password, confirmPassword, name, phone, agreed]);

  const genderOptions = [
    { label: "남성", value: "MAN" },
    { label: "여성", value: "WOMAN" },
  ];

  const registerMutation = useMutation({
    mutationFn: userService.registerUser,
    onSuccess: () => navigation.navigate('SelectCategories'),
    onError: (error) => setErrors({ server: error.response?.data || '회원가입에 실패했습니다.' }),
  });

  // const handleSubmit = () => {
  //   if (!isFormValid) return;
  //   const data = { email, password, name, phoneNumber: phone, birth, gender, memberCategories: [] };
  //   registerMutation.mutate(data);
  // };

  const handleSubmit = () => {
    if (!isFormValid) return;
  
    // Prepare initial registration data
    const initialData = {
      email,
      password,
      name,
      phoneNumber: phone,
      birth,
      gender,
      memberCategories: [], // Empty initially, will be updated in SelectCategories
    };
  
    // Navigate to SelectCategories and pass initialData
    navigation.navigate('SelectCategories', { initialData });
  };
  
  
  

  const handlePhoneChange = (text) => {
    const formattedPhone = formatPhoneNumber(text);
    setPhone(formattedPhone);
  };

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={[styles.container, commonStyles.container]} keyboardShouldPersistTaps="handled">
        <InputWithLabel
          label="닉네임"
          value={name}
          onChangeText={setName}
          error={errors.name}
          description={errors.name ? errors.name : ''}
        />
        <InputWithLabel
          label="이메일"
          value={email}
          onChangeText={setEmail}
          error={errors.email}
          description={errors.email ? errors.email : ''}
        />
        <PasswordInput
          label="비밀번호"
          value={password}
          onChangeText={setPassword}
          error={errors.password}
          description={errors.password ? errors.password : ''}
        />
        <PasswordInput
          label="비밀번호 확인"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          error={passwordError}
          description={passwordError}
        />
        <InputWithLabel
          label="전화번호"
          value={phone}
          onChangeText={handlePhoneChange}
          keyboardType="phone-pad"
          error={errors.phone}
          description={errors.phone ? errors.phone : ''}
        />

        <View style={styles.selectBox}>
          <View style={commonRadio.container}>
            <CommonRadio value={gender} onChange={setGender} options={genderOptions} />
          </View>
          <RNPickerSelect
            onValueChange={setBirth}
            value={birth}
            style={pickerStyle}
            items={[...Array(35)].map((_, i) => {
              const year = 1990 + i;
              return { label: String(year), value: String(year) };
            })}
          />
        </View>

        <View style={styles.checkboxContainer}>
          <Checkbox value={agreed} onValueChange={setAgreed} />
          <Text style={styles.checkboxLabel}>개인정보 동의</Text>
        </View>
        {errors.agreed && <Text style={styles.errorText}>{errors.agreed}</Text>}
        {errors.server && (
  <Text style={styles.errorText}>
    {typeof errors.server === 'object' ? JSON.stringify(errors.server) : errors.server}
  </Text>
)}

        <CustomButton title="회원가입 완료" onPress={handleSubmit} disabled={!isFormValid || registerMutation.isLoading} />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const pickerStyle = StyleSheet.create({
  viewContainer: {
    borderWidth: 1,
    borderColor: BLACK_COLOR,
    borderRadius: 12,
    backgroundColor: 'white',
    width: 140,
  },
  inputAndroid: {
    height: 50,
    color: '#333',
    fontSize: 14,
    paddingLeft: 10,
    paddingRight: 10,
  },
  inputIOS: {
    height: 50,
    color: '#333',
    fontSize: 14,
    paddingLeft: 10,
    paddingRight: 10,
  },
  iconContainer: {
    top: 12,
    right: 12,
  },
});

const styles = StyleSheet.create({
  container: { paddingVertical: 32, display: 'flex', flexDirection: 'column', gap: 16 },
  checkboxContainer: {  width:'100%',flexDirection: 'row', alignItems: 'center', marginTop: 10 },
  checkboxLabel: { marginLeft: 8, fontSize: 14 },
  errorText: { color: 'red', fontSize: 12, marginTop: 5 },
  selectBox: { width:'100%', flexDirection: 'row', justifyContent: 'space-between' },
});

export default RegisterScreen;
