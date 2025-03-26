import React, { createContext, useState, useEffect } from 'react';
import { View, Text } from 'react-native'; // Text 추가
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getCurrentUser } from '../api/queries/userService';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null); // 사용자 정보 상태 추가
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const token = await AsyncStorage.getItem('accessToken');
        if (token) {
          const userDataString = await AsyncStorage.getItem('user');
          const userData = userDataString ? JSON.parse(userDataString) : null;

          if (userData) {
            setUser(userData); // 사용자 정보 설정
            setIsLoggedIn(true); // 로그인 상태 업데이트
          } else {
            await AsyncStorage.multiRemove([
              'accessToken',
              'refreshToken',
              'user',
            ]);
          }
        }
      } catch (error) {
        console.error('Error checking login status:', error);
      } finally {
        setLoading(false);
      }
    };

    checkLoginStatus();
  }, []);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn, user, setUser }}>
      <View style={{ flex: 1 }}>{children}</View>
    </AuthContext.Provider>
  );
};
