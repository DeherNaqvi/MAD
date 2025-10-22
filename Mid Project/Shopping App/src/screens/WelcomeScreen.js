// src/screens/WelcomeScreen.js

// Importing React library
import React from 'react';
// Importing core React Native components
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
// Importing navigation hook to navigate between screens
import { useNavigation } from '@react-navigation/native';

// Functional component for the Welcome / Splash screen
export default function WelcomeScreen() {
  // Hook to access navigation object
  const navigation = useNavigation();

  return (
    // ImageBackground component displays a full-screen background image
    <ImageBackground
      source={require('../../assets/images/background.jpg')} // Local background image
      style={styles.background}
      blurRadius={6} // Adds blur effect to the background
    >
      {/* Overlay container with semi-transparent background for readability */}
      <View style={styles.overlay}>
        {/* App welcome title */}
        <Text style={styles.title}>Welcome to ShoppingApp!</Text>
        {/* Subtitle / description */}
        <Text style={styles.subtitle}>Shop your favorite products easily.</Text>

        {/* Button to start shopping */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Home')} // Navigate to HomeScreen
        >
          <Text style={styles.buttonText}>Start Shopping!</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

// ------------------- STYLES -------------------
const styles = StyleSheet.create({
  // Background image container styling
  background: {
    flex: 1,                 // Full screen height
    resizeMode: 'cover',     // Cover entire screen
    justifyContent: 'center',// Center content vertically
    alignItems: 'center',    // Center content horizontally
  },
  // Overlay styling for semi-transparent background
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.4)', // Dark transparent overlay
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    padding: 20,
  },
  // Main title styling
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'white',
  },
  // Subtitle styling
  subtitle: {
    fontSize: 16,
    marginBottom: 40,
    color: '#f0f0f0',
    textAlign: 'center',
  },
  // Button styling
  button: {
    backgroundColor: '#4c669f',
    padding: 15,
    borderRadius: 10,
    width: '60%',
    alignItems: 'center',
  },
  // Button text styling
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});
