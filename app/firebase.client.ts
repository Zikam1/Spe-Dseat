import { defineNuxtPlugin } from '#app'
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAnalytics } from 'firebase/analytics'

export default defineNuxtPlugin((nuxtApp) => {
  // Your Firebase config
  const firebaseConfig = {
    apiKey: "AIzaSyCNMDGkq4gyKEv_sZCwi37bexm3or1Avqs",
    authDomain: "spe-dseat.firebaseapp.com",
    projectId: "spe-dseat",
    storageBucket: "spe-dseat.firebasestorage.app",
    messagingSenderId: "97401861800",
    appId: "1:97401861800:web:011ad07d746e1a3835749d",
    measurementId: "G-8W4KFS4QTJ"
  }

  // Initialize Firebase
  const app = initializeApp(firebaseConfig)

  // Optional: initialize analytics
  if (typeof window !== 'undefined') {
    getAnalytics(app)
  }

  // Initialize Firestore
  const db = getFirestore(app)

  // Provide Firestore instance globally
  return {
    provide: {
      firebaseDb: db
    }
  }
})

