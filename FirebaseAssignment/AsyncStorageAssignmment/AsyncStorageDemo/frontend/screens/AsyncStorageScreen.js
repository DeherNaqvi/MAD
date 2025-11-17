import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  Keyboard,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { GlobalStyles } from '../styles/GlobalStyles';
import PrimaryButton from '../components/Primary Button/PrimaryButton';
import Header from '../components/Header/Header';
import Toast from 'react-native-toast-message';
import styles from './AsyncStorageScreen.styles';

export default function AsyncStorageScreen() {
  const [keyInput, setKeyInput] = useState('');
  const [valueInput, setValueInput] = useState('');
  const [fetchedValue, setFetchedValue] = useState(null);
  const [lastFetchedKey, setLastFetchedKey] = useState(null);
  const [allItems, setAllItems] = useState([]);
  const [loading, setLoading] = useState(false);

  const showToast = (type, text1, text2) =>
    Toast.show({ type, text1, text2, position: 'bottom', visibilityTime: 1800 });

  useEffect(() => {
    (async () => {
      try {
        const lastKey = await AsyncStorage.getItem('@lastFetchedKey');
        if (lastKey) {
          const val = await AsyncStorage.getItem(lastKey);
          if (val !== null) {
            setFetchedValue(val);
            setLastFetchedKey(lastKey);
          }
        }
      } catch (e) {
        console.log('Error auto-loading last key:', e);
      }
    })();
  }, []);

  const handleSave = async () => {
    if (!keyInput.trim()) return showToast('error', 'Validation', 'Please enter a key');
    try {
      setLoading(true);
      await AsyncStorage.setItem(keyInput.trim(), valueInput);
      showToast('success', 'Saved', 'Data stored successfully!');
      Keyboard.dismiss();
    } catch {
      showToast('error', 'Error', 'Failed to save data');
    } finally {
      setLoading(false);
    }
  };

  const handleFetch = async () => {
    if (!keyInput.trim()) return showToast('error', 'Validation', 'Please enter a key');
    try {
      setLoading(true);
      const data = await AsyncStorage.getItem(keyInput.trim());
      if (data !== null) {
        setFetchedValue(data);
        showToast('success', 'Fetched', 'Value loaded from storage');
        await AsyncStorage.setItem('@lastFetchedKey', keyInput.trim());
        setLastFetchedKey(keyInput.trim());
      } else {
        setFetchedValue(null);
        showToast('info', 'No data', 'Nothing found for this key');
      }
    } catch {
      showToast('error', 'Error', 'Failed to fetch data');
    } finally {
      setLoading(false);
      Keyboard.dismiss();
    }
  };

  const handleRemove = async () => {
    if (!keyInput.trim()) return showToast('error', 'Validation', 'Please enter a key');
    try {
      setLoading(true);
      await AsyncStorage.removeItem(keyInput.trim());
      setFetchedValue(null);
      showToast('success', 'Removed', 'Key deleted from storage');
    } catch {
      showToast('error', 'Error', 'Failed to remove data');
    } finally {
      setLoading(false);
    }
  };

  const handleViewAll = async () => {
    try {
      setLoading(true);
      const keys = await AsyncStorage.getAllKeys();
      const entries = await AsyncStorage.multiGet(keys);
      setAllItems(entries);
      showToast('success', 'All Data Loaded', 'Fetched all stored items');
    } catch {
      showToast('error', 'Error', 'Failed to load all data');
    } finally {
      setLoading(false);
    }
  };

  const handleClearAll = async () => {
    try {
      setLoading(true);
      await AsyncStorage.clear();
      setAllItems([]);
      setFetchedValue(null);
      setLastFetchedKey(null);
      showToast('success', 'Cleared', 'All AsyncStorage data removed');
    } catch {
      showToast('error', 'Error', 'Failed to clear data');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <Header title="Async Storage" subtitle="Store, Fetch & Remove Data" />
      <ScrollView style={[GlobalStyles.container, { marginTop: 6 }]}>
        <View style={GlobalStyles.card}>
          <Text style={GlobalStyles.label}>Storage Key</Text>
          <TextInput
            placeholder="Enter key (e.g. userToken)"
            value={keyInput}
            onChangeText={setKeyInput}
            style={GlobalStyles.input}
          />

          <Text style={GlobalStyles.label}>Value</Text>
          <TextInput
            placeholder="Enter value to store"
            value={valueInput}
            onChangeText={setValueInput}
            style={GlobalStyles.input}
          />

          <View style={{ marginTop: 10, alignItems: 'center' }}>
            <PrimaryButton
              title=" Save Data"
              onPress={handleSave}
              loading={loading}
              style={[styles.narrowButton, { backgroundColor: '#60c7eaff' }]}
            />
            <PrimaryButton
              title=" Fetch Data"
              onPress={handleFetch}
              loading={loading}
              style={[styles.narrowButton, { backgroundColor: '#60c7eaff' }]}
            />
            <PrimaryButton
              title=" Remove Data"
              onPress={handleRemove}
              loading={loading}
              style={[styles.narrowButton, { backgroundColor: '#60c7eaff' }]}
            />
            <PrimaryButton
              title=" View All"
              onPress={handleViewAll}
              loading={loading}
              style={[styles.narrowButton, { backgroundColor: '#60c7eaff' }]}
            />
            <PrimaryButton
              title=" Clear All"
              onPress={handleClearAll}
              loading={loading}
              style={[styles.narrowButton, { backgroundColor: '#60c7eaff' }]}
            />
          </View>
        </View>

        <View style={GlobalStyles.card}>
          {lastFetchedKey && (
            <Text style={[GlobalStyles.smallText, { color: '#0078FF', marginBottom: 6 }]}>
              Last fetched key: <Text style={{ fontWeight: 'bold' }}>{lastFetchedKey}</Text>
            </Text>
          )}
          <Text style={GlobalStyles.title}>Fetched Result</Text>
          {fetchedValue ? (
            <Text style={styles.valueText}>{fetchedValue}</Text>
          ) : (
            <Text style={GlobalStyles.smallText}>No data fetched yet</Text>
          )}
        </View>

        {allItems.length > 0 && (
          <View style={GlobalStyles.card}>
            <Text style={GlobalStyles.title}>All Stored Items</Text>
            {allItems.map(([k, v]) => (
              <Text key={k} style={{ marginTop: 4, color: '#333' }}>
                {k}: {v}
              </Text>
            ))}
          </View>
        )}
      </ScrollView>
    </View>
  );
}
