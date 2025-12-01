import { db } from "../config/firebase";
import { ref, set, push, onValue, remove } from "firebase/database";

// Save a note
export const saveNote = async (userId, noteText) => {
  const notesRef = ref(db, `users/${userId}/notes`);
  const newNoteRef = push(notesRef);
  await set(newNoteRef, {
    id: newNoteRef.key,
    note: noteText,
    createdAt: Date.now(),
  });
};

// Fetch notes
export const fetchNotes = (userId, setNotes) => {
  const notesRef = ref(db, `users/${userId}/notes`);
  onValue(notesRef, (snapshot) => {
    const data = snapshot.val();
    if (data) {
      const notesArray = Object.keys(data).map((key) => ({
        id: key,
        ...data[key],
      }));
      setNotes(notesArray);
    } else {
      setNotes([]);
    }
  });
};

// Delete a note
export const deleteNote = async (userId, noteId) => {
  const noteRef = ref(db, `users/${userId}/notes/${noteId}`);
  await remove(noteRef);
};
