import React from 'react';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Avatar from './src/Components/Avatar';
import SettingsCardComponent from './src/Components/SettingsCardComponent'; 
import DarkMode from './src/Components/Darkmode';
import Register from './src/LoginRegister/Register'; 
import Login from './src/LoginRegister/Login';
import ForgotPassword from './src/LoginRegister/ForgotPassword';
import profile from './src/pages/profile.js';

const Stack = createStackNavigator();

function Home() {
  const { isDarkMode, toggleDarkMode } = DarkMode();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: isDarkMode ? '#2c2c2c' : '#fff' }}>
      <Avatar isDarkMode={isDarkMode} />
      <SettingsCardComponent isDarkMode={isDarkMode} toggleSwitch={toggleDarkMode} />
    </SafeAreaView>
  );
}

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Register" screenOptions={{ headerShown: false }}> 
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="ForgotPassword" component={ForgotPassword} /> 
          <Stack.Screen name="Home" component={Home} /> 
          <Stack.Screen name="profile" component={profile} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}