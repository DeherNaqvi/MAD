// src/screens/ProductDetailScreen.js

// Importing React library
import React from 'react';
// Importing React Native components
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
// Importing reusable Header component
import Header from '../components/Header';
// Importing hooks to access route parameters and navigation
import { useRoute, useNavigation } from '@react-navigation/native';

// Functional component for Product Detail screen
export default function ProductDetailScreen() {
  // Hook to get navigation object for screen transitions
  const navigation = useNavigation();
  // Hook to get route parameters passed from previous screen
  const route = useRoute();
  // Destructuring product object from route params
  const { product } = route.params;

  return (
    // Parent container for the screen
    <View style={{ flex:1, backgroundColor:'#fff' }}>
      
      {/* Header with title and cart icon */}
      <Header 
        title="Product" 
        onCartPress={()=>navigation.navigate('Cart')} // Navigate to Cart screen
      />

      {/* ScrollView allows content to scroll vertically */}
      <ScrollView>
        {/* Product Image */}
        <Image source={product.image} style={{ width:'100%', height:300 }} />

        {/* Product Information */}
        <View style={{ padding:16 }}>
          {/* Product Title */}
          <Text style={{ fontSize:22, fontWeight:'700' }}>{product.title}</Text>
          {/* Product Price */}
          <Text style={{ fontSize:18, color:'#333', marginTop:8 }}>Rs. {product.price}</Text>
          {/* Product Description / Instructions */}
          <Text style={{ marginTop:12, color:'#666' }}>
            keep out of direct sunlight
          </Text>
          
          {/* Add to Cart Button */}
          <TouchableOpacity 
            style={styles.addButton} 
            onPress={() => alert('Added to cart ')} // Shows alert when tapped
          >
            <Text style={styles.addText}>Add to Cart</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

// ------------------- STYLES -------------------
const styles = StyleSheet.create({
  // Add to Cart button styling
  addButton: { 
    backgroundColor:'#3b5998', // Blue button
    padding:14, 
    borderRadius:10, 
    marginTop:16, 
    alignItems:'center' // Center the text horizontally
  },
  // Text inside Add to Cart button
  addText: { 
    color:'#fff', 
    fontWeight:'700' 
  }
});
