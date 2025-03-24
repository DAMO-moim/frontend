import React from 'react';
import { View, Text } from 'react-native';
import { commonStyles } from '../../constants/styles';


function MainScreen({ navigation }) {
  return (
    <View style={commonStyles.container}>
      <Text style={commonStyles.text}>Main Screen</Text>
    </View>
  );
}

export default MainScreen;
