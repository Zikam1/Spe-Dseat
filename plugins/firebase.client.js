import { defineNuxtPlugin } from '#app'
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAnalytics } from 'firebase/analytics'

export default defineNuxtPlugin((nuxtApp) => {
  const firebaseConfig = {
    apiKey: "AIzaSyCNMDGkq4gyKEv_sZCwi37bexm3or1Avqs",
    authDomain: "spe-dseat.firebaseapp.com",
    projectId: "spe-dseat",
    storageBucket: "spe-dseat.firebasestorage.app",
    messagingSenderId: "97401861800",
    appId: "1:97401861800:web:011ad07d746e1a3835749d",
    measurementId: "G-8W4KFS4QTJ"
  }

  const app = initializeApp(firebaseConfig)

  if (typeof window !== 'undefined') {
    try {
      getAnalytics(app)
    } catch (e) {
      // ignore analytics errors in environments without support
      console.warn('Analytics init failed', e)
    }
  }

  const db = getFirestore(app)

  // Provide via nuxtApp and also expose for debugging on window
  try {
    nuxtApp.provide('firebaseDb', db)
  } catch (e) {
    // fallback to return-style provide
    return { provide: { firebaseDb: db } }
  }

  if (typeof window !== 'undefined') {
    // expose for debugging in browser console
    window.__FIREBASE_DB = db
  }
})
