import React, { useState, useContext } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import InputWithLabel from '../../components/InputWithLabel';
import PasswordInput from '../../components/PasswordInput';
import { CustomButton } from '../../components/CustomButton';
import { AuthContext } from '../../contexts/AuthProvider';
import { useUser } from '../../hooks/useUser';
import { commonBtn, commonStyles } from '../../constants/styles';

export const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useUser(); // 로그인 함수 가져오기
  const { setIsLoggedIn } = useContext(AuthContext); // AuthContext 사용

  const handleSubmit = async () => {
    try {
      await login({ email, password });
      setIsLoggedIn(true); // 로그인 성공 시 상태 업데이트
      alert('로그인 성공!');
    } catch (error) {
      alert('로그인 실패!');
    }
  };

  return (
    <View style={commonStyles.container}>
      <Image source={require('../../../assets/images/loginLogo.png')} style={styles.image} />
      <InputWithLabel
        label="아이디"
        placeholder="아이디를 입력해주세요"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <PasswordInput
        label="비밀번호"
        placeholder="비밀번호를 입력해주세요"
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <CustomButton style={commonBtn} title="로그인" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  image: {
    width: '100%',
    height: 180,
    resizeMode: 'cover',
  },
});
