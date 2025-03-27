import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const MenuBar = ({ image, text, style, iconWrapperStyle, onPress }) => {
  return (
    <TouchableOpacity 
      style={[styles.container, style]} 
      onPress={onPress} // ✅ TouchableOpacity에서 onPress 실행
      activeOpacity={0.7} // ✅ 터치 시 약간 투명 효과 추가
    >
      <View style={[styles.iconWrapper, iconWrapperStyle]}>
        <Image source={image} style={styles.icon} />
      </View>
      <Text style={styles.myContent}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderRadius: 10,
    backgroundColor: '#fff',
    marginBottom: 10,
  },
  iconWrapper: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  icon: {
    width: 24,
    height: 24,
  },
  myContent: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
  },
});

export default MenuBar;
