// src/components/Header.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'; // For gradient background
import { Ionicons } from '@expo/vector-icons'; // For icons (home, cart)
import { useNavigation } from '@react-navigation/native'; // To navigate between screens

// Header component receives `title` and `onCartPress` props
export default function Header({ title, onCartPress }) {
  const navigation = useNavigation(); // Hook to access navigation object

  return (
    // Gradient background for header
    <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={styles.header}>
      
      {/* Centered title text */}
      <Text style={styles.title}>{title}</Text>

      {/* Container for right-side buttons (Home and Cart) */}
      <View style={styles.rightButtons}>
        
        {/* Home button */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Home')} // Navigate to Home screen
        >
          <Ionicons name="home-outline" size={22} color="#fff" />
        </TouchableOpacity>

        {/* Cart button */}
        <TouchableOpacity style={styles.button} onPress={onCartPress}>
          <Ionicons name="cart-outline" size={22} color="#fff" />
        </TouchableOpacity>

      </View>
    </LinearGradient>
  );
}

// Styles for the Header component
const styles = StyleSheet.create({
  header: {
    padding: 16, // General padding
    paddingTop: 24, // Extra padding at the top for status bar spacing
    flexDirection: 'row', // Layout children horizontally
    alignItems: 'center', // Vertically center items
    justifyContent: 'space-between', // Space between title and buttons
  },
  title: {
    color: '#fff', // White text color
    fontSize: 20, // Font size for the title
    fontWeight: '700', // Bold title
  },
  rightButtons: {
    flexDirection: 'row', // Place buttons side by side
  },
  button: {
    paddingHorizontal: 8, // Horizontal spacing for touch area
  },
});
