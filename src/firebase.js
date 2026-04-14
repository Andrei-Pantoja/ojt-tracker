import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAqWVa3qC1nu04x7g3gegj3jtX8rlRofpY",
  authDomain: "ojt-tracker-1076f.firebaseapp.com",
  projectId: "ojt-tracker-1076f",
  storageBucket: "ojt-tracker-1076f.firebasestorage.app",
  messagingSenderId: "857762541284",
  appId: "1:857762541284:web:2efcd7834bfcdbd23786f1",
  measurementId: "G-6WVD9H4D43"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
