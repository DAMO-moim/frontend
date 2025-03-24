import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { commonInput, passwordInput } from '../constants/styles';

const PasswordInput = ({ label, description, value, onChangeText, placeholder }) => {
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  const toggleSecureEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  return (
    <View style={passwordInput.container}>
      {/* Label */}
      {label && <Text style={commonInput.label}>{label}</Text>}

      {/* Input Field with Icon */}
      <View style={passwordInput.inputContainer}>
        <TextInput
          style={passwordInput.input}
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
      {description && <Text style={commonInput.description}>{description}</Text>}
    </View>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     marginBottom: 20,
//   },
 
// });

export default PasswordInput;
