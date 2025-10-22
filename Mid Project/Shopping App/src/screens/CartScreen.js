// src/screens/CartScreen.js

// Importing React to create the screen component
import React from 'react';
// Importing necessary components from React Native
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
// Importing custom Header component for the top navigation bar
import Header from '../components/Header';
// Importing useNavigation hook to enable navigation actions
import { useNavigation } from '@react-navigation/native';

// Functional component representing the Cart Screen
export default function CartScreen() {
  // Hook to access navigation object for screen navigation
  const navigation = useNavigation();

  return (
    // Parent View acts as a container taking full screen height
    <View style={{ flex: 1 }}>
      
      {/* Custom Header component */}
      {/* Title displayed as "Your Cart" */}
      {/* onCartPress is an empty function here (not needed on this screen) */}
      {/* cartCount is set to 0 — can be dynamically updated later */}
      <Header title="Your Cart" onCartPress />

      {/* Main body content of the cart screen */}
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        
        {/* Placeholder text (can be replaced later with actual cart items list) */}
        <Text style={{ fontSize: 18 }}>Cart UI — items shown here </Text>

        {/* Checkout button */}
        {/* TouchableOpacity makes the button clickable */}
        <TouchableOpacity 
          style={styles.checkout} 
          onPress={() => alert('Checkout ')} // Shows an alert when pressed
        >
          {/* Button text */}
          <Text style={{ color: '#fff', fontWeight: '700' }}>Checkout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

// Styles for the cart screen
const styles = StyleSheet.create({
  // Checkout button styling
  checkout: { 
    marginTop: 16,                 // Space above the button
    backgroundColor: '#ff5252',    // Red background for visibility
    padding: 12,                   // Inner spacing
    borderRadius: 8                // Rounded corners for a smooth look
  }
});
