import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { WHITE_COLOR } from '../constants/colors';
// bgColor -> MenuBar의 색깔(제일 왼쪽부분)
const MenuBar = ({ image, text, style }) => {
  return (
    <View style={[styles.container, style]}>
      <View style={styles.iconWrapper}>
      <Image source={image} style={styles.icon} />
      </View>
      <Text style={styles.myContent}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width:'100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 10,
    marginBottom: 15,
    borderRadius: 10,
    position: 'relative', // 그림자 배치를 위해 position 사용
    backgroundColor: WHITE_COLOR,
  },
  iconWrapper: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    marginRight: 10,
  },
  icon: {
    width: 24,
    height: 24,
  },
  myContent: {
    fontSize: 16,
    color: '#333',
  },
});

export default MenuBar;
