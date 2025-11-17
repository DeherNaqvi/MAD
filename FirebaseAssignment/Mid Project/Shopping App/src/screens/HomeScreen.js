// src/screens/HomeScreen.js

// Importing React library
import React from "react";
// Importing essential React Native components
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  FlatList,
  ScrollView,
} from "react-native";
// Importing custom Header component for the top bar
import Header from "../components/Header";
// Importing categories and products data
import { categories, products } from "../data/products";
// Importing navigation hook for screen transitions
import { useNavigation } from "@react-navigation/native";

// Functional component for the Home screen
export default function HomeScreen() {
  // useNavigation hook gives access to navigation object
  const navigation = useNavigation();

  // ---------- Render Category Card ----------
  // This function defines how each category item will be displayed in FlatList
  const renderCategory = ({ item }) => (
    <TouchableOpacity
      style={styles.catCard}
      // When a category is tapped, navigate to CategoryScreen
      // Passing categoryId and title as parameters
      onPress={() =>
        navigation.navigate("Category", {
          categoryId: item.id,
          title: item.title,
        })
      }
    >
      {/* Category Image */}
      <Image source={item.image} style={styles.catImage} />
      {/* Overlay with title on top of image */}
      <View style={styles.overlay}>
        <Text style={styles.catTitle}>{item.title}</Text>
      </View>
    </TouchableOpacity>
  );

  // ---------- Sample Product Data ----------
  // Selecting some products to show under “Featured” and “Popular”
  const featured = products.slice(0, 4);
  const popular = products.slice(2, 6);

  return (
    // Parent container for the screen
    <View style={styles.container}>
      
      {/* Reusable Header component with title and cart icon */}
      <Header
        title="My Shopping App"
        onCartPress={() => navigation.navigate("Cart")} // Navigates to Cart Screen
        cartCount={0} // Placeholder for cart item count
      />

      {/* ScrollView allows vertical scrolling of all screen content */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 60 }}
      >
        {/* ---------- Categories Section ---------- */}
        <Text style={styles.heading}>Shop by Category</Text>
        <FlatList
          data={categories} // Source: imported from products.js
          renderItem={renderCategory} // Function to render each category card
          keyExtractor={(item) => item.id} // Unique key for performance
          numColumns={2} // Displays 2 items per row
          columnWrapperStyle={styles.row} // Custom row spacing
          scrollEnabled={false} // Prevent FlatList from scrolling (ScrollView handles it)
        />

        {/* ---------- Featured Section ---------- */}
        <Text style={styles.heading}>Featured Products</Text>
        <FlatList
          data={featured} // Limited product data
          horizontal // Horizontal scrolling
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 8 }}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.featureCard}
              onPress={() =>
                navigation.navigate("ProductDetail", { product: item }) // Navigate to ProductDetail screen
              }
            >
              <Image
                source={item.image}
                style={styles.featureImage}
                resizeMode="cover"
              />
              <Text style={styles.featureTitle}>{item.title}</Text>
              <Text style={styles.featurePrice}>Rs. {item.price}</Text>
            </TouchableOpacity>
          )}
        />

        {/* ---------- Popular Section ---------- */}
        <Text style={styles.heading}>Popular</Text>
        <FlatList
          data={popular}
          horizontal // Horizontal scrolling for popular items
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 8 }}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.popCard}
              onPress={() =>
                navigation.navigate("ProductDetail", { product: item }) // Navigate to ProductDetail screen
              }
            >
              <Image
                source={item.image}
                style={styles.popImage}
                resizeMode="cover"
              />
              <Text numberOfLines={1} style={styles.popTitle}>
                {item.title}
              </Text>
              <Text style={styles.popPrice}>Rs. {item.price}</Text>
            </TouchableOpacity>
          )}
        />
      </ScrollView>
    </View>
  );
}

// ------------------- STYLES -------------------
const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: "#f5f6fb", 
    paddingHorizontal: 10 // Horizontal padding for layout spacing
  },
  heading: {
    fontSize: 20,
    fontWeight: "700",
    marginVertical: 10,
    color: "#333",
  },
  row: {
    justifyContent: "space-between",
    marginBottom: 12,
  },

  // ---------- Category Card Styles ----------
  catCard: {
    backgroundColor: "#fff",
    borderRadius: 12,
    overflow: "hidden", // Ensures rounded image corners
    width: "48%", // Two items per row
    aspectRatio: 1, // Ensures square shape
    elevation: 3, // Shadow for Android
  },
  catImage: { width: "100%", height: "100%" },
  overlay: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgba(0,0,0,0.4)", // Dark overlay on image
    paddingVertical: 6,
    alignItems: "center",
  },
  catTitle: { color: "#fff", fontSize: 16, fontWeight: "700" },

  // ---------- Featured Product Styles ----------
  featureCard: {
    backgroundColor: "#fff",
    borderRadius: 12,
    marginRight: 12,
    width: 180,
    elevation: 3,
    overflow: "hidden",
  },
  featureImage: { width: "100%", height: 110 },
  featureTitle: { fontWeight: "700", paddingHorizontal: 8, marginTop: 4 },
  featurePrice: {
    color: "#555",
    fontWeight: "600",
    paddingHorizontal: 8,
    marginBottom: 6,
  },

  // ---------- Popular Product Styles ----------
  popCard: {
    backgroundColor: "#fff",
    borderRadius: 12,
    marginRight: 12,
    width: 130,
    elevation: 3,
    overflow: "hidden",
  },
  popImage: { width: "100%", height: 100 },
  popTitle: { paddingHorizontal: 6, fontSize: 13, marginTop: 4 },
  popPrice: {
    paddingHorizontal: 6,
    color: "#555",
    fontWeight: "700",
    marginBottom: 6,
  },
});
