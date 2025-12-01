import React from 'react';
import { View, Text, Linking } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import Header from '../components/Header/Header';
import styles from './AboutScreen.styles';

export default function AboutScreen() {
  const { colors } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Header title="About" subtitle="Project Information" />
      <View style={[styles.card, { backgroundColor: colors.card }]}>
        <Text style={[styles.text, { color: colors.text }]}>
          This mobile app demonstrates:
        </Text>
        <Text style={[styles.list, { color: colors.text }]}>
          • Storing, fetching, and removing data with AsyncStorage{"\n"}
          • Persistent dark/light theme{"\n"}
          • Multi-screen navigation
        </Text>
        <Text
          onPress={() => Linking.openURL('https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://codingcops.com/react-native-asyncstorage/&ved=2ahUKEwia_Lmk-dOQAxXHExAIHRy6DaAQFnoECB0QAQ&usg=AOvVaw2nM7L40Lw0BJFxTMy3hrPe')}
          style={[styles.link, { color: colors.accent }]}
        >
          Learn more about AsyncStorage →
        </Text>
      </View>
    </View>
  );
}
