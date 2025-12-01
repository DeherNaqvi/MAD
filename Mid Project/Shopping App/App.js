// App.js

// Importing React library
import React from 'react';
// Importing the main app navigator which handles all screen navigation
import AppNavigator from './src/navigation/AppNavigator';
// Importing SafeAreaProvider to handle safe areas on iOS and Android devices
import { SafeAreaProvider } from 'react-native-safe-area-context';

// Root component of the application
export default function App() {
  return (
    // SafeAreaProvider ensures UI elements do not overlap with notches, status bars, or home indicators
    <SafeAreaProvider>
      {/* AppNavigator handles all screen navigation and routes */}
      <AppNavigator />
    </SafeAreaProvider>
  );
}
