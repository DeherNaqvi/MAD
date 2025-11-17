// frontend/screens/ProfileScreen.js
import React from 'react';
import { View, Text, Button } from 'react-native';
import { GlobalStyles } from '../styles/GlobalStyles';

export default function ProfileScreen({ navigation }) {
  return (
    <View style={GlobalStyles.container}>
      <Text style={GlobalStyles.titleText}>
        This is the Profile Screen
      </Text>
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
}
