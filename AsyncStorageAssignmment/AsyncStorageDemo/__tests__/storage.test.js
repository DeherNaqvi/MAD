import AsyncStorage from '@react-native-async-storage/async-storage';

test('stores data in AsyncStorage', async () => {
  await AsyncStorage.setItem('user', 'Alice');
  expect(AsyncStorage.setItem).toHaveBeenCalledWith('user', 'Alice');
});
