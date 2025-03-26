import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import MenuBar from '../components/MenuBar';
import { BLACK_COLOR, WHITE_COLOR } from '../constants/colors';
 // MenuBar 컴포넌트 import

const MyPage = () => {
  return (
    <View style={styles.container}>
      {/* 유저 정보 */}
      <View style={styles.userInfo}>
        <Image
          source={require('../../assets/images/mypage/user.png')}
          style={styles.profileImage}
        />
        <View>
          <Text style={styles.userName}>닉네임</Text>
          <Text style={styles.userDetails}>이메일</Text>
          <Text style={styles.userDetails}>전화번호</Text>
        </View>
      </View>

      {/* 메뉴 항목 */}
      <View style={styles.menuContainer}>
        <MenuBar
          image={require('../../assets/images/mypage/mypageIcon1.png')}
          text="내 모임 조회"
          style={styles.menuBar}
        />
        <MenuBar
          image={require('../../assets/images/mypage/mypageIcon2.png')}
          text="내 게시글 조회"
          bgColor="#D4F1F4"
        />
        <MenuBar
          image={require('../../assets/images/mypage/mypageIcon3.png')}
          text="카테고리 수정"
          bgColor="#FADADD"
        />
        <MenuBar
          image={require('../../assets/images/mypage/mypageIcon4.png')}
          text="비밀번호 변경"
          bgColor="#E1D4F1"
        />
        <MenuBar
          image={require('../../assets/images/mypage/mypageIcon5.png')}
          text="회원탈퇴"
          bgColor="#F9D3D3"
        />
        <MenuBar
          image={require('../../assets/images/mypage/mypageIcon6.png')}
          text="로그아웃"
          bgColor="#C7F9CC"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width:'100%',
    flex: 1,
    // backgroundColor: '#F7F3FF',
    // paddingHorizontal: 20,
    // paddingVertical: 30,
  },
  menuBar:{
    borderWidth:1,
    borderColor:BLACK_COLOR,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    padding: 15,
    backgroundColor: WHITE_COLOR,
    borderRadius: 15,
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 15,
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  userDetails: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
  menuContainer: {
    flexGrow: 1,
    justifyContent: 'space-between',
  },
});

export default MyPage;
