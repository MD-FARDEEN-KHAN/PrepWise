// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyATSMgaVs5ZnnIxofSh36AaOI8Mu-bDJBU",
  authDomain: "prepwise-pro.firebaseapp.com",
  projectId: "prepwise-pro",
  storageBucket: "prepwise-pro.firebasestorage.app",
  messagingSenderId: "497136077833",
  appId: "1:497136077833:web:41a1694903cbaacb71fcd8",
  measurementId: "G-2T02TJ8RQ6"
};

const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();
export const auth = getAuth(app);
export const db = getFirestore(app);