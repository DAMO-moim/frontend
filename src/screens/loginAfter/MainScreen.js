import React from 'react';
import { View, Text } from 'react-native';
import { commonStyles } from '../../constants/styles';
import { CustomButton } from '../../components/CustomButton'; // CustomButton 가져오기
import { useUser } from '../../hooks/useUser'; // useUser 훅 가져오기

function MainScreen({ navigation }) {
  const { logout } = useUser(); // 로그아웃 함수 가져오기

  const handleLogout = async () => {
    try {
      await logout(); // 로그아웃 실행
      navigation.navigate('Login'); // 로그아웃 후 로그인 화면으로 이동
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <View style={commonStyles.container}>
      <Text style={commonStyles.text}>Main Screen</Text>

      {/* 로그아웃 버튼 */}
      <CustomButton
        title="로그아웃"
        onPress={handleLogout}
        style={{ marginTop: 20 }} // 버튼 스타일 추가
      />
    </View>
  );
}

export default MainScreen;
