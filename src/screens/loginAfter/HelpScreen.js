import React from 'react';
import { View, Text } from 'react-native';
import { commonStyles } from '../../constants/styles';


function HelpScreen({ navigation }) {
  return (
    <View style={commonStyles.container}>
      <Text style={commonStyles.text}>Help Screen</Text>
    </View>
  );
}

export default HelpScreen;
