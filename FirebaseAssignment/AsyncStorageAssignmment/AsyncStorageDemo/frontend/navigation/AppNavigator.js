import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from '../screens/HomeScreen';
import AsyncStorageScreen from '../screens/AsyncStorageScreen';
import SettingsScreen from '../screens/SettingsScreen';
import AboutScreen from "../screens/AboutScreen";
import { useTheme } from '../context/ThemeContext';

const Tab = createBottomTabNavigator();

export default function AppNavigator() {
  const { theme, colors } = useTheme();

  return (
    <NavigationContainer theme={theme === 'light' ? DefaultTheme : DarkTheme}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarStyle: { backgroundColor: colors.card },
          tabBarActiveTintColor: colors.accent,
          tabBarInactiveTintColor: 'gray',
          tabBarIcon: ({ color, size }) => {
            const icons = { Home: 'home', AsyncStorage: 'folder', Settings: 'settings', About: 'information-circle'};
            return <Ionicons name={icons[route.name]} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="AsyncStorage" component={AsyncStorageScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
        <Tab.Screen name="About" component={AboutScreen} />

      </Tab.Navigator>
    </NavigationContainer>
  );
}
