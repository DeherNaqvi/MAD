// frontend/components/BackgroundWrapper.js
import React from 'react';
import { ImageBackground, View, StyleSheet } from 'react-native';

export default function BackgroundWrapper({ children }) {
  return (
    <ImageBackground
      source={{
        uri: 'https://images.unsplash.com/photo-1503264116251-35a269479413?auto=format&fit=crop&w=800&q=60',
      }}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>{children}</View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(255,255,255,0.1)', // optional transparent layer
  },
});
