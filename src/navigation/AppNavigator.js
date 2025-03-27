// import React, { useContext } from 'react';
// import { TouchableOpacity, Text } from 'react-native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { createStackNavigator } from '@react-navigation/stack';
// import HomeScreen from '../screens/loginBefore/HomeScreen';
// import LoginScreen from '../screens/loginBefore/LoginScreen';
// import RegisterScreen from '../screens/loginBefore/RegisterScreen';
// import MainScreen from '../screens/loginAfter/MainScreen';
// import ProfileScreen from '../screens/loginAfter/ProfileScreen';
// import SettingsScreen from '../screens/loginAfter/SettingsScreen';
// import HelpScreen from '../screens/loginAfter/HelpScreen';
// import SelectCategories from '../screens/loginBefore/SelectCategories';
// import { AuthContext } from '../contexts/AuthProvider';
// import { commonStyles } from '../constants/styles';
// import IconButton from '../components/IconButton';
// import { BORDER_COLOR } from '../constants/colors';
// import CustomTabBar from './CustomTabBar';

// const Tab = createBottomTabNavigator();
// const Stack = createStackNavigator();

// function TabNavigator() {
//   const { isLoggedIn } = useContext(AuthContext);

//   return (
//     <Tab.Navigator tabBar={(props) => <CustomTabBar {...props} />}  
//         screenOptions={({ route, navigation }) => ({
//         headerShown: true,
//         headerStyle: commonStyles.header,
//         headerTitleAlign: 'center',
//         headerTitle: () => (
//           <Text style={commonStyles.headerTitle}>{route.name}</Text>
//         ),
//         headerLeft: () => (
//           <TouchableOpacity
//             style={commonStyles.backButton}
//           >
//             {/* <Text style={styles.backButtonText}>뒤로</Text> */}
//             <IconButton   
//               onPress={() => {
//                 if (navigation.canGoBack()) {
//                   navigation.goBack();
//                 }
//               }}  
//               name={"arrow-back"} size={30} color={BORDER_COLOR}/>
//           </TouchableOpacity>
//         ),
//       })} >
//       {isLoggedIn ? (
//         <>
//           <Tab.Screen name="Main" component={MainScreen} />
//           <Tab.Screen name="Profile" component={ProfileScreen} />
//           <Tab.Screen name="Settings" component={SettingsScreen} />
//           <Tab.Screen name="Help" component={HelpScreen} />
//         </>
//       ) : (
//         <>
//           <Tab.Screen name="Home" component={HomeScreen} />
//           <Tab.Screen name="Login" component={LoginScreen} />
//           <Tab.Screen name="Register" component={RegisterScreen} />
//         </>
//       )}
//     </Tab.Navigator>
//   );
// }

// export default function AppNavigator() {
//   return (
//     <Stack.Navigator  tabBar={(props) => <CustomTabBar {...props} />}  
//         screenOptions={({ route, navigation }) => ({
//         headerShown: true,
//         headerStyle: commonStyles.header,
//         headerTitleAlign: 'center',
//         headerTitle: () => (
//           <Text style={commonStyles.headerTitle}>{route.name}</Text>
//         ),
//         headerLeft: () => (
//           <TouchableOpacity
//             style={commonStyles.backButton}
//           >
//             {/* <Text style={styles.backButtonText}>뒤로</Text> */}
//             <IconButton   
//               onPress={() => {
//                 if (navigation.canGoBack()) {
//                   navigation.goBack();
//                 }
//               }}  
//               name={"arrow-back"} size={30} color={BORDER_COLOR}/>
//           </TouchableOpacity>
//         ),
//       })} >
//       {/* Add SelectCategories to the stack */}
//       <Stack.Screen
//         name="SelectCategories"
//         component={SelectCategories}
//         options={{
//           headerShown: true, // Show header if needed
//         }}
//       />
//       {/* Include Tab Navigator */}
//       <Stack.Screen
//         name="MainTabs"
//         component={TabNavigator}
//         options={{
//           headerShown: false, // Hide header for tabs
//         }}
//       />
//     </Stack.Navigator>
//   );
// }

import React, { useContext } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/loginBefore/HomeScreen';
import LoginScreen from '../screens/loginBefore/LoginScreen';
import RegisterScreen from '../screens/loginBefore/RegisterScreen';
import MainScreen from '../screens/loginAfter/MainScreen';
import ProfileScreen from '../screens/loginAfter/ProfileScreen';
import SettingsScreen from '../screens/loginAfter/SettingsScreen';
import HelpScreen from '../screens/loginAfter/HelpScreen';
import SelectCategories from '../screens/loginBefore/SelectCategories';
import { AuthContext } from '../contexts/AuthProvider';
import { commonStyles } from '../constants/styles';
import IconButton from '../components/IconButton';
import { BORDER_COLOR } from '../constants/colors';
import CustomTabBar from './CustomTabBar';
import { FindIdScreen } from '../screens/loginBefore/FindIdScreen';
import { SuccessFindIdScreen } from '../screens/loginBefore/SuccessFindId';
import MyPageScreen from '../screens/loginAfter/MyPageScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function TabNavigator() {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <Tab.Navigator
      tabBar={(props) => <CustomTabBar {...props} />}
      screenOptions={({ route, navigation }) => ({
        headerShown: true,
        headerStyle: commonStyles.header,
        headerTitleAlign: 'center',
        headerTitle: () => (
          <Text style={commonStyles.headerTitle}>{route.name}</Text>
        ),
        headerLeft: () => (
          <TouchableOpacity style={commonStyles.backButton}>
            <IconButton
              onPress={() => {
                if (navigation.canGoBack()) {
                  navigation.goBack();
                }
              }}
              name={'arrow-back'}
              size={30}
              color={BORDER_COLOR}
            />
          </TouchableOpacity>
        ),
      })}
    >
      {isLoggedIn ? (
        // 로그인 후 화면
        <>
          <Tab.Screen name="Main" component={MainScreen} />
          <Tab.Screen name="Profile" component={ProfileScreen} />
          <Tab.Screen name="Help" component={HelpScreen} />
          <Tab.Screen name="MyPage" component={MyPageScreen} />
        </>
      ) : (
        // 로그인 전 화면
        <>
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Login" component={LoginScreen} />
          <Tab.Screen name="Register" component={RegisterScreen} />
        </>
      )}
    </Tab.Navigator>
  );
}

export default function AppNavigator() {
  const { isLoggedIn, isCategorySelected } = useContext(AuthContext);

  return (
    <Stack.Navigator
      screenOptions={({ route, navigation }) => ({
        headerShown: true,
        headerStyle: commonStyles.header,
        headerTitleAlign: 'center',
        headerTitle: () => (
          <Text style={commonStyles.headerTitle}>{route.name}</Text>
        ),
        headerLeft: () => (
          <TouchableOpacity style={commonStyles.backButton}>
            <IconButton
              onPress={() => {
                if (navigation.canGoBack()) {
                  navigation.goBack();
                }
              }}
              name={'arrow-back'}
              size={30}
              color={BORDER_COLOR}
            />
          </TouchableOpacity>
        ),
      })}
    >
      {!isLoggedIn ? (
        // 로그인 전 스택
        <>
          <Stack.Screen
            name="MainTabs"
            component={TabNavigator}
            options={{
              headerShown: false, // 탭 네비게이터의 헤더 숨김
            }}
          />
          <Stack.Screen name="Register" component={RegisterScreen} options={{
              headerShown: true,
            }}/>
          <Stack.Screen name='FindId' component={FindIdScreen}  options={{
              headerShown: true,
            }}/>
            <Stack.Screen name='SuccessFindId' component={SuccessFindIdScreen}  options={{
              headerShown: true,
            }}/>
            <Stack.Screen name='Login' component={LoginScreen}  options={{
              headerShown: true,
            }}/>
          {/* 회원가입 완료 후 카테고리 선택 */}
          <Stack.Screen
            name="SelectCategories"
            component={SelectCategories}
            options={{
              headerShown: true,
            }}
          />
        </>
      ) : (
        // 로그인 후 스택
        <>
          {!isCategorySelected && (
            // 카테고리 선택이 안 된 경우
            <Stack.Screen
              name="SelectCategories"
              component={SelectCategories}
              options={{
                headerShown: true,
              }}
            />
          )}
          {/* 로그인 후 메인 탭 */}
          <Stack.Screen
            name="MainTabs"
            component={TabNavigator}
            options={{
              headerShown: false,
            }}
          />
        </>
      )}
    </Stack.Navigator>
  );
}
