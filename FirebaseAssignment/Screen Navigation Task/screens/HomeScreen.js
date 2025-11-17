import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
<View style={[styles.container, { gap: 15 }]}>
      <Text style={styles.title}> Home Screen</Text>
      <Button title="Go to About" onPress={() => navigation.navigate('About')} />
      <Button title="Go to Contact" onPress={() => navigation.navigate('Contact')} />
      <Button title="Go to Profile" onPress={() => navigation.navigate('Profile')} />
      <Button title="Go to Settings" onPress={() => navigation.navigate('Settings')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20 },
});
