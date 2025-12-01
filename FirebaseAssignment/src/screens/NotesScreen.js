import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  Switch,
} from "react-native";
import { auth } from "../config/firebase";
import { saveNote, fetchNotes, deleteNote } from "../utils/firebaseNotes";

export default function NotesScreen({ navigation }) {
  const [noteText, setNoteText] = useState("");
  const [notes, setNotes] = useState([]);
  const [saving, setSaving] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  const user = auth.currentUser;

  // Load notes and theme on mount
  useEffect(() => {
    if (!user) {
      navigation.replace("Login");
      return;
    }

    fetchNotes(user.uid, setNotes);
    loadTheme();
  }, []);

  // Load theme from AsyncStorage
  const loadTheme = async () => {
    try {
      const storedMode = await AsyncStorage.getItem('darkMode');
      if (storedMode !== null) {
        setDarkMode(storedMode === 'true'); // stored as string
      }
    } catch (error) {
      console.log("Error loading theme:", error);
    }
  };

  // Save theme to AsyncStorage when changed
  const toggleTheme = async (value) => {
    setDarkMode(value);
    try {
      await AsyncStorage.setItem('darkMode', value.toString());
    } catch (error) {
      console.log("Error saving theme:", error);
    }
  };

  const handleSave = async () => {
    if (!noteText.trim()) return;
    setSaving(true);
    try {
      await saveNote(user.uid, noteText);
      setNoteText("");
    } catch (error) {
      alert(error.message);
    }
    setSaving(false);
  };

  const handleDelete = async (noteId) => {
    try {
      await deleteNote(user.uid, noteId);
    } catch (error) {
      alert(error.message);
    }
  };

  const handleLogout = async () => {
    try {
      await auth.signOut();
      navigation.replace("Login");
    } catch (error) {
      alert(error.message);
    }
  };

  const themeStyles = {
    backgroundColor: darkMode ? "#111" : "#fff",
    inputBg: darkMode ? "#222" : "#eee",
    textColor: darkMode ? "#fff" : "#111",
    noteBg: darkMode ? "#222" : "#f2f2f2",
    timeColor: darkMode ? "#888" : "#555",
    buttonColor: "#3f85beff",
  };

  return (
    <View style={[styles.container, { backgroundColor: themeStyles.backgroundColor }]}>
      <View style={styles.header}>
        <Text style={[styles.title, { color: themeStyles.textColor }]}>Your Notes</Text>
        <Switch value={darkMode} onValueChange={toggleTheme} />
      </View>

      <View>
        <TextInput
          style={[styles.input, { backgroundColor: themeStyles.inputBg, color: themeStyles.textColor }]}
          placeholder="Write a note..."
          placeholderTextColor="#aaa"
          value={noteText}
          onChangeText={setNoteText}
        />

        {saving ? (
          <ActivityIndicator size="large" color={themeStyles.buttonColor} style={styles.centered} />
        ) : (
          <TouchableOpacity style={[styles.button, styles.centeredButton, { backgroundColor: themeStyles.buttonColor }]} onPress={handleSave}>
            <Text style={styles.buttonText}>Save Note</Text>
          </TouchableOpacity>
        )}
      </View>

      <FlatList
        style={{ marginTop: 10, flex: 1 }}
        data={notes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={[styles.noteBox, { backgroundColor: themeStyles.noteBg }]}>
            <Text style={[styles.noteText, { color: themeStyles.textColor }]}>{item.note}</Text>
            <Text style={[styles.time, { color: themeStyles.timeColor }]}>
              {new Date(item.createdAt).toLocaleString()}
            </Text>
            <TouchableOpacity onPress={() => handleDelete(item.id)}>
              <Text style={{ color: "#FF4136", marginTop: 5 }}>Delete</Text>
            </TouchableOpacity>
          </View>
        )}
      />

      <TouchableOpacity style={[styles.logoutButton, styles.centeredButton, { backgroundColor: themeStyles.buttonColor }]} onPress={handleLogout}>
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 40 },
  header: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
  title: { fontSize: 26, fontWeight: "bold" },
  input: { padding: 12, borderRadius: 8, marginBottom: 10 },
  button: { padding: 14, borderRadius: 8, marginBottom: 10 },
  centeredButton: { width: 200, alignSelf: "center" },
  centered: { alignSelf: "center", marginTop: 10 },
  buttonText: { color: "#fff", textAlign: "center", fontSize: 18 },
  noteBox: { padding: 12, borderRadius: 8, marginTop: 10 },
  noteText: { fontSize: 16 },
  time: { fontSize: 12, marginTop: 5 },
  logoutButton: { padding: 14, borderRadius: 8, marginTop: 15 },
  logoutText: { color: "#fff", textAlign: "center", fontSize: 16, fontWeight: "bold" },
});
