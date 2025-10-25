// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth}from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAJpSUEvcgw9hda1drFk8-EoTZ59Sq7SOg",
  authDomain: "third-space-dd7de.firebaseapp.com",
  projectId: "third-space-dd7de",
  storageBucket: "third-space-dd7de.firebasestorage.app",
  messagingSenderId: "945562171535",
  appId: "1:945562171535:web:b389d1c6ab7410d42718fa",
  measurementId: "G-S7BKJGN592"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);