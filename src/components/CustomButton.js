import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { commonBtn } from '../constants/styles';
import { GRAY_COLOR, WHITE_COLOR } from '../constants/colors'; // 비활성화 스타일용 색상

export const CustomButton = ({ title, onPress, style, disabled }) => {
  return (
    <TouchableOpacity
      style={[
        commonBtn.btnBox, 
        style, 
        disabled && commonBtn.disabledBtn // 비활성화 상태 적용
      ]}
      onPress={!disabled ? onPress : null} // 비활성화 시 클릭 방지
      activeOpacity={disabled ? 1 : 0.7} // 비활성화일 때 클릭 애니메이션 제거
    >
      <Text style={[commonBtn.btnText, disabled && commonBtn.disabledText]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};
