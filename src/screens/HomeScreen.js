import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { PRIMARY_COLOR } from '../constants/colors';
import { commonStyles } from '../constants/styles';
import IconButton from '../components/IconButton';

function HomeScreen({ navigation }) {
  return (
    <View style={commonStyles.container}>
      <Text style={commonStyles.text}>Home Screen</Text>
    </View>
  );
}

export default HomeScreen;

//   const [title, setTitle] = React.useState('홈 화면');
//   React.useEffect(() => {
//     navigation.setOptions({
//       headerTitle: () => (
//         <Text style={commonStyles.headerTitle}>{title}</Text>
//       ),
//       headerLeft: () => (
//         <IconButton
//           name="chevron-left"
//           size={30}
//           color="#333"
//           onPress={() => setTitle('뒤로 가기 클릭됨')}
//           style={{ marginLeft: 10 }}
//         />
//       ),
//     });
//   }, [navigation, title]);
