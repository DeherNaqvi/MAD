import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: "AIzaSyBmK0nmZ4Lpn7qPI7ZWd_b4HM5vy4x5eug",
  authDomain: "fir-app-d3d25.firebaseapp.com",
  databaseURL: "https://fir-app-d3d25-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "fir-app-d3d25",
  storageBucket: "fir-app-d3d25.appspot.com",
  messagingSenderId: "958978332172",
  appId: "1:958978332172:web:9a093ebcc56aad2f078029",
};

const app = initializeApp(firebaseConfig);

// Auth with AsyncStorage persistence
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

// Realtime Database
export const db = getDatabase(app);
