// ✅ Mock AsyncStorage
import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';
jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage);

// ✅ Mock Reanimated (needed for most RN projects)
jest.mock('react-native-reanimated', () => require('react-native-reanimated/mock'));

// ✅ Mock Expo’s new “winter” runtime (to stop that error)
jest.mock('expo/src/winter/installGlobal', () => ({
  __esModule: true,
  default: {},
}));
