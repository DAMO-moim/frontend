import React from 'react';
import { View, Text } from 'react-native';
import { commonStyles } from '../constants/styles';

function ProfileScreen() {
  return (
    <View style={commonStyles.container}>
      <Text style={commonStyles.text}>Profile~~ Screen!</Text>
    </View>
  );
}

export default ProfileScreen;
