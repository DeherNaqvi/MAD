import React from 'react';
import { View, Text, Switch } from 'react-native';
import Header from '../components/Header/Header';
import { useTheme } from '../context/ThemeContext';
import styles from './SettingsScreen.styles';

export default function SettingsScreen() {
  const { theme, toggleTheme, colors } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Header title="Settings" subtitle="App Preferences" />
      <View style={[styles.card, { backgroundColor: colors.card }]}>
        <Text style={[styles.label, { color: colors.text }]}>Dark Mode</Text>
        <Switch
          value={theme === 'dark'}
          onValueChange={toggleTheme}
          thumbColor={theme === 'dark' ? colors.accent : '#ccc'}
        />
      </View>
    </View>
  );
}
