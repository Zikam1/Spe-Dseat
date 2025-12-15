import { initializeApp } from 'firebase/app'
import { getFirestore, Firestore } from 'firebase/firestore'

let db: Firestore | null = null

export const useFirebase = () => {
  if (!db) {
    const firebaseConfig = {
      apiKey: "AIzaSyCNMDGkq4gyKEv_sZCwi37bexm3or1Avqs",
      authDomain: "spe-dseat.firebaseapp.com",
      projectId: "spe-dseat",
      storageBucket: "spe-dseat.firebasestorage.app",
      messagingSenderId: "97401861800",
      appId: "1:97401861800:web:011ad07d746e1a3835749d",
      measurementId: "G-8W4KFS4QTJ"
    }

    try {
      const app = initializeApp(firebaseConfig)
      db = getFirestore(app)
      console.log('Firebase initialized successfully')
    } catch (error) {
      console.error('Failed to initialize Firebase:', error)
    }
  }

  return { db }
}
