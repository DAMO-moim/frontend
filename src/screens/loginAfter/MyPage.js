import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { BLACK_COLOR, ERROR_COLOR, G_DARKER_COLOR, WHITE_COLOR } from '../constants/colors';

const GroupBox = ({ image, title, text, isLeader, currentCount, maxCount }) => {
  return (
    <View style={styles.card}>
      {/* 이미지 섹션 */}
      <View style={styles.imageBox}>
        <Image source={image} style={styles.image} />
      </View>

      {/* 텍스트 섹션 */}
      <View style={styles.gTextContainer}>
        <View style={styles.textContainer}>
          <View style={styles.titleRow}>
            <Text style={styles.title}>{title}</Text>
            {isLeader && <Text style={styles.leaderTag}>모임장</Text>}
          </View>
          <Text style={styles.subtitle}>
            {currentCount}/{maxCount}
          </Text>
        </View>
        <Text style={styles.description}>{text}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row', // 가로 배치
    alignItems: 'center',
    backgroundColor: WHITE_COLOR,
    borderRadius: 15,
    padding: 15,
    marginVertical: 10,
    marginHorizontal: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  imageBox: {
    width: 70,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35, // 원형으로 만들기 위해 너비/높이의 절반 설정
    marginRight: 15,
  },
  gTextContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
    color: BLACK_COLOR,
  },
  leaderTag: {
    fontSize: 12,
    color: G_DARKER_COLOR,
    marginLeft: 4,
  },
  subtitle: {
    fontSize: 12,
    color: BLACK_COLOR,
  },
  description: {
    fontSize: 12,
    color: '#999',
    marginTop: 8,
  },
});

export default GroupBox;
