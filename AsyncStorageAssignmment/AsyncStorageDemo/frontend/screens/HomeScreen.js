import React from 'react';
import { View, Text } from 'react-native';
import Header from '../components/Header/Header';
import { useTheme } from '../context/ThemeContext';
import styles from './HomeScreen.styles';

export default function HomeScreen() {
  const { colors } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Header title="Welcome" subtitle="AsyncStorage Demo" />
      <View style={[styles.card, { backgroundColor: colors.card }]}>
        <Text style={[styles.text, { color: colors.text }]}>
          Use the tabs below to explore AsyncStorage and toggle the theme.
        </Text>
      </View>
    </View>
  );
}
