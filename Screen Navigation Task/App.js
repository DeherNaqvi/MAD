import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import AppNavigator from './navigation/AppNavigator'; //  import your navigator

export default function App() { 
  return (
    <View style={styles.container}>
      <AppNavigator />   {/*  all screens and navigation */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
