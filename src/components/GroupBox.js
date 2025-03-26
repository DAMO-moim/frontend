import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const GroupBox = ({ image, title, text }) => {
  return (
    <View style={styles.card}>
      {/* 이미지 섹션 */}
      <View style={styles.imageContainer}>
        <Image
          source={require('../../assets/images/groups/Sports.png')} // 로컬 이미지 경로
          style={styles.image} // 스타일 이름 수정
        />
      </View>

      {/* 텍스트 섹션 */}
      <View style={styles.textContainer}>
        <Text style={styles.title}>Title</Text>
        <Text style={styles.subtitle}>15/20</Text>
        <Text style={styles.description}>Text</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width:'100%',
    flexDirection: 'row', // 가로 배치
    backgroundColor: '#f8f8f8',
    borderRadius: 10,
    padding: 10,
    margin: 10,
    boxShadow: '4px 4px 0 0 rgba(0,0,0,0.9)',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    alignItems: 'center', // 세로 중앙 정렬
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 70, // 이미지 너비
    height: 70, // 이미지 높이
    borderRadius: 35, // 원형으로 만들기 위해 너비/높이의 절반 설정
  },
  textContainer: {
    flex: 1,
    marginLeft: 15, // 이미지와 텍스트 간격 조정
    justifyContent: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
  description: {
    fontSize: 12,
    color: '#999',
  },
});

export default GroupBox;
