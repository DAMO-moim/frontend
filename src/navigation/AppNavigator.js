import React from 'react';
import { StyleSheet, TouchableOpacity,Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import CustomTabBar from './CustomTabBar';
import { BORDER_COLOR, NAV_BAR_COLOR, PRIMARY_BACK_COLOR } from '../constants/colors';
import IconButton from '../components/IconButton';
import { commonStyles } from '../constants/styles';

const Tab = createBottomTabNavigator();

function AppNavigator() {
  return (
      <Tab.Navigator tabBar={(props) => <CustomTabBar {...props} />}  
        screenOptions={({ route, navigation }) => ({
        headerShown: true,
        headerStyle: commonStyles.header,
        headerTitleAlign: 'center',
        headerTitle: () => (
          <Text style={commonStyles.headerTitle}>{route.name}</Text>
        ),
        headerLeft: () => (
          <TouchableOpacity
            style={commonStyles.backButton}
            onPress={() => navigation.goBack()}
          >
            {/* <Text style={styles.backButtonText}>뒤로</Text> */}
            <IconButton name={"arrow-back"} size={30} color={BORDER_COLOR}/>
          </TouchableOpacity>
        ),
      })} >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
  );
}

export default AppNavigator;



 // <Tab.Screen
        //     name="Home"
        //     component={HomeScreen}
        //     options={{
        //     tabBarLabel: '홈',
        //     headerShown: true,
        // }}
        // />
        // <Tab.Screen
        //     name="Profile"
        //     component={ProfileScreen}
        //     options={{
        //     tabBarLabel: '프로필',
        //     headerShown: true,
        //     }}
        // />
