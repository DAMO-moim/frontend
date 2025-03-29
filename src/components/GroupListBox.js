import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { BLACK_COLOR, BORDER_COLOR, G_DARK_COLOR, G_LIGHT_COLOR, PRIMARY_BACK_COLOR, WHITE_COLOR } from '../constants/colors';
import CommonTag from './CommonTag';
import { commonShadow } from '../constants/styles';

const GroupListBox = ({ image, title, text, currentCount, maxCount, subCategory, tags = [] }) => {
  return (
    <View style={[styles.card, commonShadow.mainShadow]}>
      {/* 이미지 섹션 */}
      <Image source={image} style={styles.image} />
      {/* 텍스트 섹션 */}
      <View style={styles.textContainer}>
        <View style={styles.titleRow}>
          <View style={styles.leftSection}>
            <View style={styles.circle}></View>
            <Text style={styles.title}>{title}</Text>
          </View>
          <Text style={styles.count}>
            {currentCount}/{maxCount}
          </Text>
        </View>
        <Text style={styles.description} numberOfLines={2} ellipsizeMode="tail">
          {text}
        </Text>
        <View style={styles.tagContainer}>
          {subCategory && (
            <CommonTag
              name={subCategory}
              size={10}
              color={BLACK_COLOR}
              customTagStyle={true}
              showCloseButton={false}
              containerStyle={{ backgroundColor: '#EEE333', borderColor: BLACK_COLOR, borderWidth: 1}}
            />
          )}
          {tags && tags.map((tag, index) => (
            <CommonTag
              key={index}
              name={tag}
              size={10}
              color={BLACK_COLOR}
              showCloseButton={false}
              containerStyle={{ backgroundColor: '#E6E6FA' }} 
            />
          ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '100%',
    flexDirection: 'row',
    alignSelf: 'center', 
    backgroundColor: WHITE_COLOR,
    borderRadius: 15,
    padding: 10,
    marginVertical: 10,
    marginHorizontal: 20,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35, // 원형 이미지
    marginRight: 15,
  },
  textContainer: {
    flexGrow: 1,    
    flexShrink: 1,   
    justifyContent: 'center',
    minWidth: 0,
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
    marginHorizontal: 8
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
    color: BLACK_COLOR,
    marginRight: 8,
  },
  count: {
    fontSize: 12,
    color: BLACK_COLOR,
  },
  description: {
    fontSize: 13,
    color: BLACK_COLOR,
    marginBottom: 8,
    lineHeight: 18,
  },
  tagContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default GroupListBox;
