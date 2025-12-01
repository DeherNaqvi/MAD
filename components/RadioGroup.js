import React from "react";
import { View, TouchableOpacity, Text } from "react-native";

export default function RadioGroup({ options, selected, onChange }) {
  return (
    <View style={{ marginBottom: 20 }}>
      {options.map((opt) => (
        <TouchableOpacity
          key={opt.value}
          onPress={() => onChange(opt.value)}
          style={{ flexDirection: "row", alignItems: "center", marginBottom: 10 }}
        >
          <View
            style={{
              height: 20,
              width: 20,
              borderRadius: 10,
              borderWidth: 2,
              borderColor: "#1e3a8a",
              alignItems: "center",
              justifyContent: "center",
              marginRight: 10,
            }}
          >
            {selected === opt.value && (
              <View
                style={{
                  height: 10,
                  width: 10,
                  backgroundColor: "#1e3a8a",
                  borderRadius: 5,
                }}
              />
            )}
          </View>
          <Text>{opt.label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}
