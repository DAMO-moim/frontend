import React, {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import AppNavigator from './src/navigation/AppNavigator';
import {  AuthProvider } from './src/contexts/AuthProvider';
import { View, Text } from 'react-native';
// import useResizeObserver from 'use-resize-observer';

const queryClient = new QueryClient();

function App() {

  // const [layout, setLayout] = useState({ width: 0, height: 0 });

  // const handleLayout = (event) => {
  //   const { width, height } = event.nativeEvent.layout;
  //   setLayout({ width, height });
  // };

  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <NavigationContainer>
          <AppNavigator />
          {/* <View onLayout={handleLayout} style={{ flex: 1 }}>
            <Text>Width: {layout.width}</Text>
            <Text>Height: {layout.height}</Text>
          </View> */}
          {/* <Stack.Screen name="Register" component={RegisterScreen} /> */}
        </NavigationContainer>
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;
