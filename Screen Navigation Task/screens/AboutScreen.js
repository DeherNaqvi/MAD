import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import CustomButton from '../components/CustomButton'; 

export default function AboutScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}> About Screen</Text>
      <Text style={styles.text}>This app demonstrates basic navigation setup in React Native using Expo.</Text>
      <CustomButton title="Go Back Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 20 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 10 },
  text: { fontSize: 16, textAlign: 'center', marginBottom: 20 },
});
