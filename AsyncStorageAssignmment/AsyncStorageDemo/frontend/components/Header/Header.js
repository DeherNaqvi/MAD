import React from 'react';
import { View, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './Header.styles';

export default function Header({ title, subtitle }) {
  return (
    <LinearGradient colors={['#0078FF', '#00C6FF']} style={styles.gradient}>
      <SafeAreaView>
        <View style={styles.content}>
          <Text style={styles.title}>{title}</Text>
          {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}
