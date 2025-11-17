import React from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { GlobalStyles } from './GlobalStyles';

export default function FancyScreen() {
  return (
    <View style={GlobalStyles.container}>
      <LinearGradient
        colors={['#0EA5E9', '#6366F1', '#0F172A']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={GlobalStyles.gradientBackground}
      />

      <View style={GlobalStyles.card}>
        <Text style={GlobalStyles.titleText}>Welcome to Neon UI ⚡</Text>
        <Text style={GlobalStyles.subtitleText}>
          Sleek. Modern. Eye-catching.
        </Text>

        <TextInput placeholder="Enter your email" placeholderTextColor="#94A3B8" style={GlobalStyles.input} />

        <View style={GlobalStyles.glowDivider} />

        <TouchableOpacity style={GlobalStyles.button}>
          <Text style={GlobalStyles.buttonText}>Join Now 🚀</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
