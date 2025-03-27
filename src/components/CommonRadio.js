import React from "react";
import { View, StyleSheet } from "react-native";
import { RadioGroup, RadioButton } from 'react-native-ui-lib';
import { commonRadio } from "../constants/styles";
import { BLACK_COLOR } from "../constants/colors";


export const CommonRadio = ({ value, onChange, options = [] }) => {
  return (
    <View style={commonRadio.container}>
      <RadioGroup initialValue={value} onValueChange={onChange} style={commonRadio.radioGroup}>
        {options.map((option) => (
          <RadioButton
            key={option.value}
            label={option.label}
            value={option.value}
            style={commonRadio.radioBtn}
            containerStyle={commonRadio.radioButtonContainer}
            labelStyle={commonRadio.radioLabel}
            selectedColor={BLACK_COLOR}
            color={BLACK_COLOR}
            size={20}
          />
        ))}
      </RadioGroup>
    </View>
  );
};