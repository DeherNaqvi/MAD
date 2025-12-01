// frontend/screens/HomeScreen.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { GlobalStyles } from '../styles/GlobalStyles';

export default function HomeScreen({ navigation }) {
  return (
    <View style={GlobalStyles.container}>
      <Text style={GlobalStyles.titleText}>Welcome to My App!</Text>
      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate('Profile')}
      />
    </View>
  );
}
