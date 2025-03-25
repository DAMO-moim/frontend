import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { commonInput, passwordInput } from '../constants/styles';
import { ERROR_COLOR } from '../constants/colors';

const PasswordInput = ({ label, description, value, onChangeText, placeholder, error }) => {
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  const toggleSecureEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  return (
    <View style={passwordInput.container}>
      {/* Label */}
      {label && <Text style={commonInput.label}>{label}</Text>}

      {/* Input Field with Icon */}
      <View style={[passwordInput.inputContainer, error && styles.errorBorder]}>
        <TextInput
          style={passwordInput.input }
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          secureTextEntry={secureTextEntry}
        />
        <TouchableOpacity onPress={toggleSecureEntry}>
          <Icon
            name={secureTextEntry ? 'eye-off' : 'eye'}
            size={24}
            color="gray"
          />
        </TouchableOpacity>
      </View>

      {/* Description */}
      {description && <Text style={[commonInput.description, error && styles.errorText ]}>{description}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  errorBorder: {
    borderColor: ERROR_COLOR, // 빨간색 테두리
    borderWidth: 1.5, // 테두리 두께
  },
  errorText: {
    color: ERROR_COLOR, // 빨간색 텍스트
  },
});

export default PasswordInput;
