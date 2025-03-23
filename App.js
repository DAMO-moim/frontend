// import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import AppNavigator from './src/navigation/AppNavigator';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <AppNavigator/>
      </NavigationContainer>
    </QueryClientProvider>
  );
}

{/* <View style={styles.container}>
          <Text>Open up App.js to start~~ working on your app!</Text>
          <StatusBar style="auto" />
        </View> */}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;



