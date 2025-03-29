import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { BLACK_COLOR, WHITE_COLOR } from '../constants/colors';

const GroupBox = ({ image, title, text, isLeader, currentCount, maxCount, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
    <View style={styles.card}>
      {/* 이미지 섹션 */}
          <Image source={image} style={styles.image} />
      {/* 텍스트 섹션 */}
      <View style={styles.textContainer}>
      <View style={styles.titleRow}>
      <View style={styles.leftSection}>
            <View style={styles.circle}></View> {/* Circle 추가 */}
            <Text style={styles.title}>{title}</Text>
            {isLeader && <Text style={styles.leaderTag}>모임장</Text>}
          </View>
          <Text style={styles.count}>
            {currentCount}/{maxCount}
          </Text>
        </View>
        <Text style={styles.description} numberOfLines={2} ellipsizeMode="tail">
          {text}
          </Text>
      </View>
    </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: WHITE_COLOR,
    borderRadius: 15,
    padding: 15,
    marginTop: 15,
    // marginVertical: 15, // 상하여백
    // marginHorizontal: 10, // 좌우여백
    width: '100%',
    alignSelf: 'center' // 중앙정렬
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35, // 원형 이미지
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', // 제목과 인원 수를 양쪽 끝에 배치
    marginBottom: 5,
  },
  leftSection: {
    flexDirection: 'row', // Circle과 Title을 가로로 배치
    alignItems: 'center',
  },
  circle: {
    width: 8, // 동그라미 크기
    height: 8,
    borderRadius: 4, // 원형으로 만들기 위해 너비/높이의 절반 설정
    backgroundColor: '#66D3A5', // 동그라미 색상 일단 초록색으로 해뒀고 원 안에 원 말고 원 하나만 해뒀습니다 ~
    marginRight: 8,
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
    color: BLACK_COLOR,
    marginRight: 8,
  },
  leaderTag: {
    fontSize: 12, 
    color: '#666',
    marginLeft: 'auto', // 제목과 모임장 사이 간격
  },
  count: {
    fontSize: 12,
    color: BLACK_COLOR,
  },
  description: {
    fontSize: 12,
    color: BLACK_COLOR,
    marginTop: -5, // 설명 텍스트 위치 조정
    overflow:'hidden', 
    textOverflow:'ellipsis' 
  },
});

export default GroupBox;
