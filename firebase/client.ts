// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


const firebaseConfig = {
  apiKey: "AIzaSyAmw-aYHNLN-VJFPqifojN6u3H6i3_F29w",
  authDomain: "prepwise-d95f2.firebaseapp.com",
  projectId: "prepwise-d95f2",
  storageBucket: "prepwise-d95f2.firebasestorage.app",
  messagingSenderId: "593152820179",
  appId: "1:593152820179:web:5523956010dab1a59da526",
  measurementId: "G-N44NQWM0YZ"
};
// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);  