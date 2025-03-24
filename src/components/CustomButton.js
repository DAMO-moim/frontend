import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { commonBtn } from '../constants/styles';

export const CustomButton = ({ title, onPress, style }) => {
  return (
    <TouchableOpacity style={[style.btnBox, style]} onPress={onPress}>
      <Text style={style.btnText}>{title}</Text>
    </TouchableOpacity>
  );
};