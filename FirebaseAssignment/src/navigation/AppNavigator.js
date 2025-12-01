import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import NotesScreen from '../screens/NotesScreen';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      
      <Stack.Screen
        name="Notes"
        component={NotesScreen}
        options={{ title: 'My Notes' }}
      />
    </Stack.Navigator>
  );
}
