import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";

export default function CustomDropdown({ options, value, onSelect }) {
  const [open, setOpen] = useState(false);

  return (
    <View style={{ marginBottom: 20 }}>
      <TouchableOpacity
        onPress={() => setOpen(!open)}
        style={{
          backgroundColor: "#f1f5f9",
          padding: 12,
          borderRadius: 12,
        }}
      >
        <Text>{value || "Select your country"}</Text>
      </TouchableOpacity>

      {open && (
        <View
          style={{
            backgroundColor: "white",
            marginTop: 5,
            padding: 10,
            borderRadius: 10,
            elevation: 4,
          }}
        >
          {options.map((opt) => (
            <TouchableOpacity
              key={opt}
              onPress={() => {
                onSelect(opt);
                setOpen(false);
              }}
              style={{ paddingVertical: 8 }}
            >
              <Text>{opt}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
}
