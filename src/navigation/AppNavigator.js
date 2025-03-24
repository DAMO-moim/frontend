import React, { useContext } from 'react';
import { StyleSheet, TouchableOpacity,Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/loginBefore/HomeScreen';
import CustomTabBar from './CustomTabBar';
import { BORDER_COLOR, NAV_BAR_COLOR, PRIMARY_BACK_COLOR } from '../constants/colors';
import IconButton from '../components/IconButton';
import { commonStyles } from '../constants/styles';
import { RegisterScreen } from '../screens/loginBefore/RegisterScreen';
import { LoginScreen } from '../screens/loginBefore/LoginScreen';
import { AuthContext } from '../contexts/AuthProvider';
import MainScreen from '../screens/loginAfter/MainScreen';
import ProfileScreen from '../screens/loginAfter/ProfileScreen';
import SettingsScreen from '../screens/loginAfter/SettingsScreen';
import HelpScreen from '../screens/loginAfter/HelpScreen';

const Tab = createBottomTabNavigator();

function AppNavigator() {

  const { isLoggedIn } = useContext(AuthContext);

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
          >
            {/* <Text style={styles.backButtonText}>뒤로</Text> */}
            <IconButton onPress={() => navigation.goBack()} name={"arrow-back"} size={30} color={BORDER_COLOR}/>
          </TouchableOpacity>
        ),
      })} >
       {isLoggedIn ? (
        <>
          <Tab.Screen name="Main" component={MainScreen} />
          <Tab.Screen name="Profile" component={ProfileScreen} />
          <Tab.Screen name="Settings" component={SettingsScreen} />
          <Tab.Screen name="Help" component={HelpScreen} />
        </>
      ) : (
        <>
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Login" component={LoginScreen} />
          <Tab.Screen name="Register" component={RegisterScreen} />
        </>
      )}
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
