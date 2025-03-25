import React, { createContext, useState, useEffect } from 'react';
import { View } from 'react-native'; // 추가
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getCurrentUser } from '../api/queries/userService';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkLoginStatus = async () => {
      const token = await AsyncStorage.getItem('accessToken');
      if (token) {
        const user = await getCurrentUser();
        if (user) {
          setIsLoggedIn(true);
        } else {
          await AsyncStorage.multiRemove(["accessToken", "userId", "userEmail", "refreshToken"]);
        }
      }
      setLoading(false);
    };

    checkLoginStatus();
  }, []);

  if (loading) return <View />; // 로딩 중일 때 빈 View 반환

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      <View style={{ flex: 1 }}>{children}</View> {/* children을 감싸줌 */}
    </AuthContext.Provider>
  );
};



// import React, { createContext, useState } from 'react';

// export const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   return (
//     <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };
