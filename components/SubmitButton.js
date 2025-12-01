import React from "react";
import { TouchableOpacity, Text } from "react-native";

export default function SubmitButton({ title, onPress }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: "#1e3a8a",
        paddingVertical: 14,
        borderRadius: 12,
        marginTop: 10,
      }}
    >
      <Text style={{ color: "white", textAlign: "center", fontSize: 17, fontWeight: "600" }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}
