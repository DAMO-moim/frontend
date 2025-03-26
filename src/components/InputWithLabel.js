import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { commonInput } from '../constants/styles';
import { BLACK_COLOR, ERROR_COLOR, RED_COLOR } from '../constants/colors'; // 에러 시 사용할 색상

const InputWithLabel = ({ 
  label, 
  description, 
  value, 
  onChangeText, 
  placeholder, 
  error 
}) => {
  return (
    <View style={commonInput.container}>
      {label && <Text style={commonInput.label}>{label}</Text>}

      <TextInput
        style={[
          commonInput.input, 
          error && styles.errorBorder // 에러 시 테두리 색상 변경
        ]}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
      />

      {/* Description (오류 메시지일 경우 = error | 빨간색) */}
      {description && <Text style={[commonInput.description, error && styles.errorText]}>{description}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  errorBorder: {
    borderColor: ERROR_COLOR, 
    borderWidth: 1.5,
  },
  errorText: {
    color: ERROR_COLOR, 
  },
});

export default InputWithLabel;
