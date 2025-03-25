import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Checkbox from 'expo-checkbox';
import { useMutation } from '@tanstack/react-query';
import { useNavigation } from '@react-navigation/native';
import * as userService from '../../api/mutations/userService';
import InputWithLabel from '../../components/InputWithLabel';
import PasswordInput from '../../components/PasswordInput';
import { CustomButton } from '../../components/CustomButton';

// 이메일 유효성 검사 정규식
const isValidEmail = (email) => /\S+@\S+\.\S+/.test(email);
// 비밀번호 유효성 검사 (영문+숫자+특수문자 조합, 8~20자)
const isValidPassword = (password) => /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/.test(password);

export const RegisterScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [birth, setBirth] = useState('2000');
  const [gender, setGender] = useState('MAN');
  const [agreed, setAgreed] = useState(false);

  const [errors, setErrors] = useState({});

  const registerMutation = useMutation({
    mutationFn: userService.registerUser,
    onSuccess: () => navigation.navigate('CategorySelection'),
    onError: (error) => setErrors({ server: error.response?.data || '회원가입에 실패했습니다.' }),
  });

  const validateInputs = () => {
    let newErrors = {};
    if (!isValidEmail(email)) newErrors.email = '유효한 이메일을 입력해주세요.';
    if (!isValidPassword(password)) newErrors.password = '비밀번호는 영문, 숫자, 특수문자를 포함한 8~20자여야 합니다.';
    if (!name || name.length > 8) newErrors.name = '닉네임은 8자 이내여야 합니다.';
    if (!phone || !/^\d{10,11}$/.test(phone)) newErrors.phone = '유효한 전화번호를 입력해주세요.';
    if (!agreed) newErrors.agreed = '개인정보 동의가 필요합니다.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (!validateInputs()) return;
    const data = { email, password, name, phoneNumber: phone, birth, gender, memberCategories: [] };
    registerMutation.mutate(data);
  };

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
        <InputWithLabel label="이메일" value={email} onChangeText={setEmail} error={errors.email} />
        <PasswordInput label="비밀번호" value={password} onChangeText={setPassword} error={errors.password} />
        <InputWithLabel label="닉네임" value={name} onChangeText={setName} error={errors.name} />
        <InputWithLabel label="전화번호" value={phone} onChangeText={setPhone} keyboardType="phone-pad" error={errors.phone} />

        <Text style={styles.label}>성별</Text>
        <View style={styles.radioGroup}>
          <TouchableOpacity style={styles.radioButton} onPress={() => setGender('MAN')}>
            <View style={gender === 'MAN' ? styles.radioSelected : styles.radioUnselected} />
            <Text style={styles.radioText}>남성</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.radioButton} onPress={() => setGender('WOMAN')}>
            <View style={gender === 'WOMAN' ? styles.radioSelected : styles.radioUnselected} />
            <Text style={styles.radioText}>여성</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.label}>출생연도</Text>
        <Picker selectedValue={birth} onValueChange={setBirth}>
          {[...Array(35)].map((_, i) => {
            const year = 1990 + i;
            return <Picker.Item key={year} label={String(year)} value={String(year)} />;
          })}
        </Picker>

        <View style={styles.checkboxContainer}>
          <Checkbox value={agreed} onValueChange={setAgreed} />
          <Text style={styles.checkboxLabel}>개인정보 동의</Text>
        </View>
        {errors.agreed && <Text style={styles.errorText}>{errors.agreed}</Text>}

        {errors.server && <Text style={styles.errorText}>{errors.server}</Text>}

        <CustomButton title="회원가입 완료" onPress={handleSubmit} disabled={registerMutation.isLoading} />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: { padding: 16 },
  label: { fontSize: 16, fontWeight: 'bold', marginVertical: 8 },
  radioGroup: { flexDirection: 'row', alignItems: 'center', marginBottom: 10 },
  radioButton: { flexDirection: 'row', alignItems: 'center', marginRight: 15 },
  radioUnselected: { width: 20, height: 20, borderRadius: 10, borderWidth: 2, borderColor: '#999' },
  radioSelected: { width: 20, height: 20, borderRadius: 10, backgroundColor: '#007AFF' },
  radioText: { marginLeft: 5 },
  checkboxContainer: { flexDirection: 'row', alignItems: 'center', marginTop: 10 },
  checkboxLabel: { marginLeft: 8, fontSize: 14 },
  errorText: { color: 'red', fontSize: 12, marginTop: 5 },
});

export default RegisterScreen;
