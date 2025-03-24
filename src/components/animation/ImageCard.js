import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import Animated from 'react-native-reanimated';
import { categoryIcon } from '../../constants/styles';

export default function ImageCard({ image }) {
  return (
    <Animated.View style={categoryIcon.container}>
      <Image
         source={image} // src 대신 source 사용
         style={categoryIcon.image}
      />
    </Animated.View>
  );
}