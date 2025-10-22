// src/screens/CategoryScreen.js

// Importing React to create the component
import React from 'react';
// Importing core React Native components
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
// Importing custom Header component for consistent top bar design
import Header from '../components/Header';
// Importing product data from local data file
import { products } from '../data/products';
// Importing ProductCard component to display each product neatly
import ProductCard from '../components/ProductCard';
// Importing navigation hooks for screen transitions and route parameters
import { useNavigation, useRoute } from '@react-navigation/native';

// Functional component for CategoryScreen
export default function CategoryScreen() {
  // useNavigation hook gives access to navigation object for moving between screens
  const navigation = useNavigation();

  // useRoute hook provides access to route parameters passed from previous screen
  const route = useRoute();

  // Destructure parameters received from route (categoryId and title)
  const { categoryId, title } = route.params || {};

  // Filter products based on selected category
  // If category is 'sale', only products with onSale = true are shown
  const filtered = products.filter(
    p => p.category === categoryId || (categoryId === 'sale' && p.onSale)
  );

  return (
    // Parent container view
    <View style={{ flex: 1, backgroundColor: '#f5f6fb' }}>
      
      {/* Header component with dynamic title (category name) */}
      {/* When cart icon is pressed, navigate to the Cart screen */}
      <Header 
        title={title || 'Category'} 
        onCartPress={() => navigation.navigate('Cart')} 
      />

      {/* FlatList is used for efficient scrolling and rendering of products */}
      <FlatList
        data={filtered}                       // List of filtered products
        keyExtractor={i => i.id}              // Unique key for each product
        numColumns={2}                        // Display products in 2 columns
        renderItem={({ item }) => (           // Render each product using ProductCard
          <ProductCard
            item={item}                       // Product details passed as prop
            onPress={(p) => 
              navigation.navigate('ProductDetail', { product: p }) // Navigate to product details
            }
            onAdd={(p) => alert(`${p.title} added`)} // Simple alert when item is added to cart
          />
        )}
        contentContainerStyle={{ padding: 8 }} // Padding around grid
      />
    </View>
  );
}
