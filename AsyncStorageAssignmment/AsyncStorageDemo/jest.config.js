// jest.config.js
module.exports = {
  preset: 'jest-expo',

  setupFilesAfterEnv: [
    '@testing-library/jest-native/extend-expect',
    '<rootDir>/jest.setup.js',
  ],

  // 👇 Include "expo-winter" and "expo" here to make Jest transpile those files
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?react-native|@react-native|@react-navigation|react-native-reanimated|expo(nent)?|@expo(nent)?/.*|expo-modules-core|react-native-gesture-handler|expo-winter|expo)/',
  ],

  transform: {
    '^.+\\.[jt]sx?$': [
      'babel-jest',
      {
        presets: ['babel-preset-expo'],
      },
    ],
  },

  // 👇 Stop Jest from executing any native code paths inside Expo
  moduleNameMapper: {
    '^expo$': '<rootDir>/__mocks__/expoMock.js',
    '^expo/(.*)$': '<rootDir>/__mocks__/expoMock.js',
  },
};
