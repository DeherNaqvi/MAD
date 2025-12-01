// src/components/ProductCard.js

// Importing React library to create the component
import React from 'react';
// Importing necessary React Native components
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
// Importing Ionicons for using the cart icon
import { Ionicons } from '@expo/vector-icons';

// Functional component 'ProductCard'
// - item: Object containing product details like title, price, and image
// - onPress: Function triggered when the user taps on the product card
// - onAdd: Function triggered when the user taps the "Add" button
export default function ProductCard({ item, onPress, onAdd }) {
  return (
    // TouchableOpacity makes the entire card clickable
    <TouchableOpacity style={styles.card} onPress={() => onPress && onPress(item)}>
      
      {/* Displaying the product image */}
      <Image source={item.image} style={styles.image} resizeMode="cover" />
      
      {/* Container for product info such as title and price */}
      <View style={styles.info}>
        
        {/* Product title (single line only using numberOfLines) */}
        <Text numberOfLines={1} style={styles.title}>{item.title}</Text>
        
        {/* Row to align price and 'Add to Cart' button horizontally */}
        <View style={styles.row}>
          
          {/* Display product price */}
          <Text style={styles.price}>Rs. {item.price}</Text>
          
          {/* Button for adding the product to cart */}
          <TouchableOpacity style={styles.addBtn} onPress={() => onAdd && onAdd(item)}>
            {/* Cart icon inside the Add button */}
            <Ionicons name="cart" size={16} color="#fff" />
            {/* "Add" text label */}
            <Text style={styles.addText}>Add</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
}

// Defining styles for the ProductCard component
const styles = StyleSheet.create({
  // Main card container with shadow and rounded corners
  card: { 
    backgroundColor: '#fff', 
    borderRadius: 12, 
    overflow: 'hidden', // Ensures image corners are rounded
    margin: 8, 
    width: 160, // Fixed card width
    elevation: 4 // Shadow effect for Android
  },

  // Product image styling
  image: { 
    width: '100%', 
    height: 120 
  },

  // Information section (title, price, button)
  info: { 
    padding: 10 
  },

  // Product title style
  title: { 
    fontSize: 14, 
    fontWeight: '600' 
  },

  // Horizontal layout for price and Add button
  row: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'space-between', 
    marginTop: 8 
  },

  // Product price text styling
  price: { 
    fontWeight: '700' 
  },

  // Styling for the "Add" button
  addBtn: { 
    flexDirection: 'row', // Icon and text side by side
    alignItems: 'center', 
    backgroundColor: '#3b5998', // Blue button color
    paddingHorizontal: 8, 
    paddingVertical: 6, 
    borderRadius: 8 
  },

  // Styling for text inside the "Add" button
  addText: { 
    color: '#fff', 
    marginLeft: 6, // Spacing between icon and text
    fontWeight: '700' 
  }
});
