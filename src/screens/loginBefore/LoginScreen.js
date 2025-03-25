import React, { useState, useContext } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import InputWithLabel from '../../components/InputWithLabel';
import PasswordInput from '../../components/PasswordInput';
import { CustomButton } from '../../components/CustomButton';
import { AuthContext } from '../../contexts/AuthProvider';
import { useUser } from '../../hooks/useUser';
import { commonBtn, commonStyles } from '../../constants/styles';
import { BLACK_COLOR } from '../../constants/colors';

const isValidEmail = (email) => /\S+@\S+\.\S+/.test(email);

export const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const { login } = useUser();
  const { setIsLoggedIn, setUser } = useContext(AuthContext);

  const handleSubmit = async () => {
    let hasError = false;
  
    if (!isValidEmail(email)) {
      setEmailError(true);
      hasError = true;
    } else {
      setEmailError(false);
    }
  
    if (password.length < 8 || password.length > 21) {
      setPasswordError(true);
      hasError = true;
    } else {
      setPasswordError(false);
    }
  
    if (hasError) return;
  
    try {
      const data = await login({ email, password });
      
      setIsLoggedIn(true); // 로그인 상태 업데이트
      setUser(data.user); // 사용자 정보 업데이트
      
      alert('로그인 성공!');
    } catch (error) {
      console.error('Login error:', error);
      
      if (error.message === '로그인 응답에 필요한 데이터가 없습니다.') {
        alert('서버에서 필요한 데이터를 반환하지 않았습니다.');
      } else {
        alert('로그인 실패!');
      }
    }
  };
  

  return (
    <View style={[commonStyles.container, styles.container]}>
      <Image source={require('../../../assets/images/loginLogo.png')} style={styles.image} />
      
      <InputWithLabel
        label="아이디"
        placeholder="이메일 형식으로 입력해주세요."
        value={email}
        onChangeText={(text) => setEmail(text)}
        error={emailError}
        description={emailError ? '이메일 형식을 잘못 입력했습니다.' : ''}
      />
      
      <PasswordInput
        label="비밀번호"
        placeholder="비밀번호를 입력해주세요"
        value={password}
        onChangeText={(text) => setPassword(text)}
        error={passwordError}
        description={passwordError ? '비밀번호 형식이 잘못되었습니다.' : ''}
      />

      <CustomButton 
        title="로그인"
        onPress={handleSubmit}
        disabled={email.length < 1 || password.length < 7 || password.length > 21} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderStyle: 'solid',
    borderColor: BLACK_COLOR,
    borderWidth: 1,
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  image: {
    width: '100%',
    height: 159,
    resizeMode: 'contain',
  },
});

export default LoginScreen;
