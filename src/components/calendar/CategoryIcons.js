import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const categoryIcons = {
    1: require('../../../assets/images/loopimg/left/1.png'),
    6: require('../../../assets/images/loopimg/left/6.png'),
    4: require('../../../assets/images/loopimg/left/4.png'),
  };
  

const CategoryIcons = ({ categories }) => {
  return (
    <View style={styles.iconContainer}>
      {categories.map((category) => (
        <Image
          key={category.categoryId}
          source={categoryIcons[category.categoryId]}
          style={styles.icon}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10,
  },
  icon: {
    width: 50,
    height: 50,
    marginHorizontal: 10,
  },
});

export default CategoryIcons;
