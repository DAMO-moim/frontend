import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useMutation } from '@tanstack/react-query';
import { useNavigation } from '@react-navigation/native';
import * as userService from '../../api/mutations/userService';
import InputWithLabel from '../../components/InputWithLabel';
import PasswordInput from '../../components/PasswordInput';
import { commonBtn, commonInput, commonStyles } from '../../constants/styles';
import { CustomButton } from '../../components/CustomButton';
// import * as userService from '../api/queries/userService';

export const RegisterScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const registerMutation = useMutation({
    mutationFn: userService.registerUser,
    onSuccess: (data) => {
      console.log("Registration successful:", data);
      alert("회원가입이 완료되었습니다. 로그인해주세요.");
      navigation.navigate('Login');
    },
    onError: (error) => {
      console.error("회원가입 실패:", error.response?.data || error.message);
      alert("회원가입 실패! 다시 시도해주세요.");
    },
  });

  const handleSubmit = () => {
    const data = { email, password, name, phone };
    console.log("Submitting data:", data);
    registerMutation.mutate(data);
  };

  return (
    <View style={commonStyles.container}>
      {/* <TextInput
        style={styles.input}
        placeholder="이메일"
        value={email}
        onChangeText={(text) => setEmail(text)}
      /> */}
      <InputWithLabel
        label="이메일"
        // description="info message"
        placeholder="이메일을 입력해주세요"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
       <PasswordInput
        label="비밀번호"
        // description="info message"
        placeholder="비밀번호를 입력해주세요"
        secureTextEntry={true}
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <InputWithLabel
        label="닉네임"
        // description="info message"
        placeholder="닉네임을 입력해주세요"
        value={name}
        onChangeText={(text) => setName(text)}
      />
     <InputWithLabel
        label="전화번호"
        // description="info message"
        placeholder="전화번호를 입력해주세요"
        value={phone}
        onChangeText={(text) => setPhone(text)}
      />
      <CustomButton style={commonBtn} title="회원가입" onPress={handleSubmit} />
      {/* <Button style={commonBtn.btnBox} title="회원가입" onPress={handleSubmit} /> */}
    </View>
  );
};


