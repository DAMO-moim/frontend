import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const SuccessFindIdScreen = ({ route }) => {
  const { email } = route.params; // 이전 화면에서 전달된 이메일 정보

  return (
    <View style={styles.container}>
      <Text style={styles.title}>아이디 찾기 성공!</Text>
      <Text style={styles.email}>회원님의 이메일은:</Text>
      <Text style={styles.emailValue}>{email}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  email: {
    fontSize: 18,
    marginBottom: 10,
  },
  emailValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#007BFF',
  },
});
