import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

// 핸드폰 번호 포맷팅 함수
const formatPhoneNumber = (number) => {
  // 숫자만 남기고 제거 (특수문자, 공백 등)
  const cleaned = number.replace(/\D/g, '');

  // '010-1234-1234' 형식으로 포맷팅
  if (cleaned.length < 4) return cleaned;
  if (cleaned.length < 7) return cleaned.slice(0, 3) + '-' + cleaned.slice(3);
  return cleaned.slice(0, 3) + '-' + cleaned.slice(3, 7) + '-' + cleaned.slice(7, 11);
};

const PhoneInput = () => {
  const [phone, setPhone] = useState('');

  const handlePhoneChange = (text) => {
    // 숫자만 남기고 제거
    const cleanedText = text.replace(/\D/g, '');
    
    // 포맷팅을 위한 길이가 충분한지 체크
    const formattedPhone = formatPhoneNumber(cleanedText);
    
    // 상태 업데이트
    setPhone(formattedPhone);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>전화번호</Text>
      <TextInput
        style={styles.input}
        value={phone}
        onChangeText={handlePhoneChange}
        keyboardType="numeric"
        maxLength={13}
        placeholder="010-1234-1234"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 8,
  },
  input: {
    borderBottomWidth: 1,
    padding: 8,
    fontSize: 16,
  },
});

export default PhoneInput;
