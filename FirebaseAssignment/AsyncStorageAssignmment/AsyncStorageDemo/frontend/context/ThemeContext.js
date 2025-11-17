import React, { createContext, useState, useContext, useEffect } from 'react';
import { Appearance } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const system = Appearance.getColorScheme();
  const [theme, setTheme] = useState(system || 'light');

  useEffect(() => {
    (async () => {
      const saved = await AsyncStorage.getItem('@theme');
      if (saved) setTheme(saved);
    })();
  }, []);

  const toggleTheme = async () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    await AsyncStorage.setItem('@theme', newTheme);
  };

  const colors =
    theme === 'light'
      ? { background: '#F7FAFF', card: '#FFFFFF', text: '#111', accent: '#0078FF' }
      : { background: '#0E141B', card: '#1C2430', text: '#EAEAEA', accent: '#00C6FF' };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, colors }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
