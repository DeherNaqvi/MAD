import React from 'react';
import { View, Text, Button, StyleSheet, Switch } from 'react-native';
import CustomButton from '../components/CustomButton'; 

export default function SettingsScreen({ navigation }) {
  const [isEnabled, setIsEnabled] = React.useState(false);

  return (
<View style={[styles.container, { gap: 15 }]}>
      <Text style={styles.title}> Settings Screen</Text>
      <Text style={styles.text}>Dark Mode</Text>
      <Switch value={isEnabled} onValueChange={() => setIsEnabled(!isEnabled)} />
      <CustomButton title="Back to Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20 },
  text: { fontSize: 16, marginBottom: 10 },
});
