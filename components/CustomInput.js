import React from "react";
import { TextInput, View } from "react-native";

export default function CustomInput({ placeholder, onChangeText, onBlur, value }) {
  return (
    <View
      style={{
        backgroundColor: "#f1f5f9",
        borderRadius: 12,
        marginBottom: 15,
        paddingHorizontal: 15,
        paddingVertical: 10,
      }}
    >
      <TextInput
        placeholder={placeholder}
        style={{ fontSize: 16 }}
        onChangeText={onChangeText}
        onBlur={onBlur}
        value={value}
      />
    </View>
  );
}
