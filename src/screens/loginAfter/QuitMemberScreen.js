import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import InputWithLabel from "../../components/InputWithLabel";
import PasswordInput from "../../components/PasswordInput";
import { CustomButton } from "../../components/CustomButton";
import CommonCheckBox from "../../components/CommonCheckBox";
import Info from "../../components/Info";
import { BLACK_COLOR } from "../../constants/colors";
import { commonStyles } from "../../constants/styles";

const QuitMemberScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [agreed, setAgreed] = useState(false); // 개인정보 동의 상태

  // 비밀번호 확인 로직
  useEffect(() => {
    if (confirmPassword && password !== confirmPassword) {
      setPasswordError("비밀번호가 일치하지 않습니다.");
    } else {
      setPasswordError("");
    }
  }, [password, confirmPassword]);

  // 이메일 입력 핸들러
  const handleEmailChange = (text) => {
    setEmail(text);
  };

  // 비밀번호 입력 핸들러
  const handlePasswordChange = (text) => {
    setPassword(text);
  };

  // 회원 탈퇴 버튼 핸들러
  const handleQuitMember = () => {
    if (!agreed) {
      alert("개인정보 동의가 필요합니다.");
      return;
    }
    console.log("회원 탈퇴 성공!");
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={commonStyles.container}>
        {/* 이메일 입력 */}
        <InputWithLabel
          label="아이디 (이메일)"
          value={email}
          onChangeText={handleEmailChange}
          placeholder="아이디를 입력해주세요."
        />

        {/* 비밀번호 입력 */}
        <PasswordInput
          label="비밀번호"
          value={password}
          onChangeText={handlePasswordChange}
          placeholder="비밀번호를 입력해주세요."
        />

        {/* 비밀번호 확인 */}
        <PasswordInput
          label="비밀번호 확인"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          placeholder="비밀번호 확인을 위해 입력해주세요."
          error={passwordError}
        />

        {/* 안내사항 */}
        {!agreed && ( // 체크박스가 선택되지 않았을 때만 안내사항 표시
          <View style={styles.infoContainer}>
            <Info 
              title="• 안내사항 1" 
              content="안내사항 첫번째 내용입니다." 
            />
            <Info 
              title="• 안내사항 2" 
              content="안내사항 두번째 내용입니다." 
            />
            <Info 
              title="• 안내사항 3" 
              content="안내사항 세번째 내용입니다." 
            />
          </View>
        )}

        {/* 개인정보 동의 */}
        <View style={styles.checkboxWrapper}>
  <CommonCheckBox 
    label="개인정보 동의"
    value={agreed}
    onValueChange={(value) => setAgreed(value)}
  />
</View>

        {/* 회원 탈퇴 버튼 */}
        <CustomButton 
          title="회원 탈퇴"
          style={[
            styles.buttonStyle,
            { backgroundColor: email && password && confirmPassword && agreed && !passwordError ? "#FF6B6B" : "#CCCCCC" }, // 활성화 여부에 따라 색상 변경
          ]}
          disabled={!email || !password || !confirmPassword || passwordError !== "" || !agreed} // 버튼 활성화 조건
          onPress={handleQuitMember}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
  },
  infoContainer: {
    marginTop: 16,
    marginBottom: 16,
    alignItems: 'flex-start',
    width: '100%',
  },
  checkboxWrapper: {
    flexDirection: "row", // 가로 배치
    width: '100%',
    justifyContent: "flex-start", // 좌측 정렬
    alignItems: "center", // 세로 중앙 정렬
    marginTop: 16,
    marginBottom: 16,
  },
  buttonStyle: {
    alignSelf: "center",
    marginTop: 16,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginBottom: 16, // 화면 하단 여백 추가
    shadowColor: BLACK_COLOR,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
});

export default QuitMemberScreen;
