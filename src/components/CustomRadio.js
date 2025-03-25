import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Pressable } from "react-native";

export default function CustomRadio() {
  const [isChecked, setChecked] = useState(false);
  const [selected, setSelected] = useState(null);
  const options = [
    { value: '택현' },
    { value: '호근' },
    { value: '현후' }
  ];

  const isButtonEnabled = selected && isChecked !== null;

  return (
    <View style={styles.checkContainer}>
      {/* 라디오 버튼 */}
      {options.map((option, index) => (
        <Pressable
          key={index}
          style={styles.radioButton}
          onPress={() => setSelected(option.value)}
        >
          <View style={styles.outerCircle}>
            {selected === option.value && (
              <View style={styles.innerCircle} />
            )}
          </View>
          <Text style={styles.label}>{option.value}</Text>
        </Pressable>
      ))}
      {/* 선택취소 버튼 */}
      <Pressable
      style={styles.cancelButton}
      onPress={() => setSelected(null)}
      >
        <Text style={styles.cancelText}>선택취소</Text>
      </Pressable>

      {/* 체크박스 */}
      <Pressable
        style={styles.checkboxContainer}
        onPress={() => setChecked(!isChecked)}
      >
        <View style={[styles.checkboxBase, isChecked && styles.checkboxChecked]}>
          {isChecked && <View style={styles.checkmark} />}
        </View>
        <Text style={styles.text}>{isChecked ? "Checked" : "Unchecked"}</Text>
      </Pressable>
      {/* 비활성화 버튼 생성 */}
      <View>
        <TouchableOpacity
        style={isButtonEnabled ? styles.enabled : styles.disabled}
        disabled={!isButtonEnabled}
        >
          <Text style={isButtonEnabled ? styles.enabledText : styles.disabledText}>
            {isButtonEnabled ? '활성화' : '비활성화'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  checkContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5"
  },
  radioButton: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10
  },
  outerCircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderColor: "black",
    borderWidth: 2,
    marginRight: 10,
    justifyContent: "center",
    alignItems: "center"
  },
  innerCircle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "black"
  },
  label: {
    fontSize: 18
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20
  },
  checkboxBase: {
    width: 24,
    height: 24,
    borderWidth: 2,
    borderColor: "black",
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center"
  },
  checkboxChecked: {
    backgroundColor: "black"
  },
  checkmark: {
    width: 12,
    height: 6,
    borderLeftWidth: 2,
    borderBottomWidth: 2,
    borderColor: "white",
    transform: [{ rotate: "-45deg" }]
  },
  text: {
    fontSize: 16,
    marginLeft: 10
  },
  enabled: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5
  },
  disabled: {
    backgroundColor: 'light-gray',
    padding: 10,
    borderRadius: 5
  },
  enabledText: {
    color: 'white'
  },
  disabledText: {
    color: 'dark-gray'
  }

});
