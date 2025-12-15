// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCNMDGkq4gyKEv_sZCwi37bexm3or1Avqs",
  authDomain: "spe-dseat.firebaseapp.com",
  projectId: "spe-dseat",
  storageBucket: "spe-dseat.firebasestorage.app",
  messagingSenderId: "97401861800",
  appId: "1:97401861800:web:011ad07d746e1a3835749d",
  measurementId: "G-8W4KFS4QTJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);