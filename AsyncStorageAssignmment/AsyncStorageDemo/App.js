import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import AppNavigator from './frontend/navigation/AppNavigator';
import { ThemeProvider } from './frontend/context/ThemeContext';
import Toast from 'react-native-toast-message';

export default function App() {
  return (
    <ThemeProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <AppNavigator />
        <Toast />
      </SafeAreaView>
    </ThemeProvider>
  );
}
