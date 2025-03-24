import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { commonInput } from '../constants/styles';

const InputWithLabel = ({ label, description, value, onChangeText,placeholder }) => {
  return (
    <View style={commonInput.container}>
      {/* Label */}
     {label && <Text style={commonInput.label}>{label}</Text>}

      {/* Input Field */}
      <TextInput
        style={commonInput.input}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
      />

      {/* Description */}
      {description && <Text style={commonInput.description}>{description}</Text>}
    </View>
  );
};


export default InputWithLabel;
