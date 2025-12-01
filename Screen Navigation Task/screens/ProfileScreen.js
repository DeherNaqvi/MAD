import React from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';
import CustomButton from '../components/CustomButton'; 

export default function ProfileScreen({ navigation }) {
  return (
<View style={[styles.container, { gap: 10 }]}>
      <Text style={styles.title}> Profile Screen</Text>
      <Image
  source={require('./img1.jpg')}
  style={{ width: 100, height: 100, borderRadius: 50, marginBottom: 15 }}
/>

      <Text style={styles.text}>Name: Deher</Text>
      <Text style={styles.text}>Role: Developer</Text>
      <CustomButton title="Go to Settings" onPress={() => navigation.navigate('Settings')} />
      <CustomButton title="Go to Home" onPress={() => navigation.navigate('Home')} />
        
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 10 },
  text: { fontSize: 16, marginBottom: 5 },
});
