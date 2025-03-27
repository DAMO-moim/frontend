import React from "react";
import { View, Text, StyleSheet, TouchableWithoutFeedback  } from "react-native";
import Checkbox from 'expo-checkbox';
import { BLACK_COLOR, WHITE_COLOR } from "../constants/colors";

/** -- 사용방법 (에러 메세지 필요할 경우)
const [agreed, setAgreed] = useState(false);
  const [errors, setErrors] = useState({
    agreed: false,
    errorMessage: '',
  });

  const handler = () => {
    if (!agreed) {
      setErrors({
        agreed: true,
        errorMessage: '개인정보 동의가 필요합니다.',
      });
      return;
    }

    console.log('회원가입 성공!');
  };

///////////////////////////////////////////////////////

 <CommonCheckBox
  label="개인정보 동의"
  value={agreed}
  onValueChange={(value) => {
    setAgreed(value);
    setErrors({ agreed: false, errorMessage: '' }); // 에러 초기화
  }}
  error={errors.agreed}
  errorMessage={errors.errorMessage}
/>
<Button title="회원가입" onPress={handler} />

 */

const CommonCheckBox = ({ label, value, onValueChange, error, errorMessage }) => {
  const handlePress = () => {
    onValueChange(!value); 
  };

  return (
    <TouchableWithoutFeedback onPress={handlePress} >
      <View style={styles.checkboxContainer}>
      <Checkbox
          value={value}
          onValueChange={onValueChange}
          color={BLACK_COLOR}
        />
        <Text style={styles.checkboxLabel}>{label}</Text>
        {error && typeof errorMessage === 'string' && (
          <Text style={styles.errorText}>{errorMessage}</Text>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  checkboxContainer: {
    width: 'auto',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  // checkbox:{
  //   backgroundColor: BLACK_COLOR, // 체크된 상태 배경색
  //   borderWidth: 1,
  //   borderColor: BLACK_COLOR, // 체크된 상태 테두리 색상
  // },
  // checkedCheckbox: {
  //   backgroundColor: BLACK_COLOR, // 체크된 상태 배경색
  //   borderWidth: 1,
  //   borderColor: BLACK_COLOR, // 체크된 상태 테두리 색상
  // },
  // uncheckedCheckbox: {
  //   backgroundColor: WHITE_COLOR, // 체크되지 않은 상태 배경색
  //   borderWidth: 1,
  //   borderColor: BLACK_COLOR, // 체크되지 않은 상태 테두리 색상
  // },
  checkboxLabel: {
    marginLeft: 8,
    fontSize: 14,
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginTop: 5,
  },
});

export default CommonCheckBox;
