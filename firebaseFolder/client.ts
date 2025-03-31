// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyATo1j8gB_Fu0vtCMcbXwZrtgxiOVgWbfo",
  authDomain: "hr-bot-ae565.firebaseapp.com",
  projectId: "hr-bot-ae565",
  storageBucket: "hr-bot-ae565.firebasestorage.app",
  messagingSenderId: "988331043524",
  appId: "1:988331043524:web:407db07cda475d1e7bf791",
  measurementId: "G-96PT0G8PV8",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

const db = getFirestore(app);
const auth = getAuth(app);

export { auth, db };
