/* eslint-disable @typescript-eslint/no-unused-vars */
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { GoogleAuthProvider, getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
  apiKey: 'AIzaSyAu0WEPLtbRhGnJdL6pSh7i7pYj01agdiA',
  authDomain: 'mailme-6938e.firebaseapp.com',
  projectId: 'mailme-6938e',
  storageBucket: 'mailme-6938e.firebasestorage.app',
  messagingSenderId: '659935827452',
  appId: '1:659935827452:web:28a8f94c8a7f7d30898e79',
  measurementId: 'G-931F7CKLZP',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app); // Pass the app instance to getAuth
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider();
