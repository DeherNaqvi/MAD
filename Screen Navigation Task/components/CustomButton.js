import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

export default function CustomButton({ title, onPress }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: '#16314fff',
        padding: 10,
        borderRadius: 10,
        marginVertical: 5,
      }}
    >
      <Text style={{ color: '#fff', fontSize: 16 }}>{title}</Text>
    </TouchableOpacity>
  );
}
