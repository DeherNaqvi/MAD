// frontend/styles/GlobalStyles.js
import { StyleSheet } from 'react-native';

export const GlobalStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 18,
    backgroundColor: '#F7FAFF',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 14,
    marginVertical: 8,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 3,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 8,
  },
  label: {
    fontSize: 13,
    color: '#333',
    marginBottom: 6,
  },
  input: {
    borderWidth: 1,
    borderColor: '#E6E9EE',
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginBottom: 10,
    backgroundColor: '#fff',
  },
  row: { flexDirection: 'row', justifyContent: 'space-between', gap: 10 },
  button: {
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonPrimary: { backgroundColor: '#2E86FF' },
  buttonDanger: { backgroundColor: '#FF4D6D' },
  buttonText: { color: 'white', fontWeight: '600' },
  smallText: { fontSize: 12, color: '#666' },
});
