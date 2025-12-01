import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import CustomButton from '../components/CustomButton'; 
export default function ContactScreen({ navigation }) {
  return (
<View style={[styles.container, { gap: 15 }]}>
      <Text style={styles.title}>Contact Screen</Text>
      <Text style={styles.text}>Email: dehernaqvi@gmail.com</Text>
      <Text style={styles.text}>Phone: +92 300 1234567</Text>
      <CustomButton title="Go to Profile" onPress={() => navigation.navigate('Profile')} />
      <CustomButton title="Go to Home" onPress={() => navigation.navigate('Home')} />

    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 10 },
  text: { fontSize: 16, marginBottom: 5 },
});
