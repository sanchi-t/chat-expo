import { initializeApp } from 'firebase/app';
import { initializeAuth, getReactNativePersistence, getAuth } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from "firebase/storage";
import Constants from 'expo-constants';
// Firebase config
const firebaseConfig = {
    apiKey: Constants.expoConfig.extra.apiKey,
    authDomain: Constants.expoConfig.extra.authDomain,
    projectId: Constants.expoConfig.extra.projectId,
    storageBucket: Constants.expoConfig.extra.storageBucket,
    messagingSenderId: Constants.expoConfig.extra.messagingSenderId,
    appId: Constants.expoConfig.extra.appId,
    databaseURL: Constants.expoConfig.extra.databaseURL,
    measurementId: Constants.expoConfig.extra.measurementId
};
// console.log(firebaseConfig);
// initialize firebase
const app = initializeApp(firebaseConfig);

// initialize auth with AsyncStorage for persistence
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
});
// export const auth = getAuth();
export const database = getFirestore();
export const storage = getStorage(app);