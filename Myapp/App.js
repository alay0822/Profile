import React from 'react';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import Avatar from './src/Components/Avatar';
import Settings from './src/Components/Settings';
import DarkMode from './src/Components/Darkmode';

export default function App() {
  const { isDarkMode, toggleDarkMode } = DarkMode(); 

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1, backgroundColor: isDarkMode ? '#2c2c2c' : '#fff' }}> 
        <Avatar isDarkMode={isDarkMode} />
        <Settings isDarkMode={isDarkMode} toggleSwitch={toggleDarkMode} /> 
      </SafeAreaView>
    </SafeAreaProvider>
  );
}