// src/navigation/AppNavigator.js

// Importing React to define the component
import React from 'react';
// Importing NavigationContainer which manages the navigation tree and state
import { NavigationContainer } from '@react-navigation/native';
// Importing createNativeStackNavigator for screen-based navigation
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Importing all the app screens to be used in navigation
import WelcomeScreen from '../screens/WelcomeScreen';
import HomeScreen from '../screens/HomeScreen';
import CategoryScreen from '../screens/CategoryScreen';
import ProductDetailScreen from '../screens/ProductDetailScreen';
import CartScreen from '../screens/CartScreen';

// Creating a Stack Navigator instance
// This will allow navigation between different screens in a stack-based manner
const Stack = createNativeStackNavigator();

// Functional component that defines the navigation structure of the app
export default function AppNavigator() {
  return (
    // NavigationContainer is the root component that holds all navigators
    // It must wrap the entire navigation structure of the app
    <NavigationContainer>

      {/* Stack.Navigator defines all the screens (routes) in the stack */}
      {/* 'initialRouteName' sets the first screen to open when the app starts */}
      {/* 'screenOptions' controls default screen settings (e.g., header visibility) */}
      <Stack.Navigator initialRouteName="Welcome" screenOptions={{ headerShown: false }}>
        
        {/* Each Stack.Screen defines one screen in the navigation stack */}
        {/* 'name' is the unique route name, 'component' is the actual screen */}
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Category" component={CategoryScreen}/>
        <Stack.Screen name="ProductDetail" component={ProductDetailScreen}/>
        <Stack.Screen name="Cart" component={CartScreen}/>
      </Stack.Navigator>

    </NavigationContainer>
  );
}
