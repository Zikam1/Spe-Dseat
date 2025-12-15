<template>
  <div class="min-h-screen bg-gray-100 flex flex-col">

    <!-- Hero Section -->
    <section class="bg-[#145DA0] text-white py-20 px-6 md:px-20 text-center">
      <h1 class="text-4xl md:text-5xl font-bold mb-4">Join SPE DSEAT</h1>
      <p class="text-lg md:text-xl max-w-2xl mx-auto">
        Register now to become part of a growing community of engineering and technology students. Learn, collaborate, and innovate with us.
      </p>
    </section>

    <!-- Registration Form Section -->
    <section class="flex-1 py-16 px-6 md:px-20 flex justify-center">
      <div class="bg-white rounded-2xl shadow-xl w-full max-w-3xl p-10 md:p-16">
        <h2 class="text-3xl font-bold text-[#145DA0] mb-6 text-center">Register Now</h2>
        <p class="text-gray-600 mb-8 text-center">
          Fill out the form below to join SPE DSEAT and gain access to workshops, mentorship, and community events.
        </p>

        <form @submit.prevent="submitForm" class="space-y-6">

          <div>
            <label class="block text-gray-700 mb-2" for="name">Full Name</label>
            <input v-model="name" type="text" id="name" placeholder="Your Name"
              class="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#145DA0]" />
          </div>

          <div>
            <label class="block text-gray-700 mb-2" for="email">Email</label>
            <input v-model="email" type="email" id="email" placeholder="you@example.com"
              class="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#145DA0]" />
          </div>

          <div>
            <label class="block text-gray-700 mb-2" for="department">Department</label>
            <input v-model="department" type="text" id="department" placeholder="Your Department"
              class="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#145DA0]" />
          </div>

          <div>
            <label class="block text-gray-700 mb-2" for="year">Year of Study</label>
            <input v-model="year" type="text" id="year" placeholder="Your Year"
              class="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#145DA0]" />
          </div>

          <div class="text-center">
            <button
              type="submit"
              :disabled="loading"
              class="bg-[#145DA0] text-white font-bold px-8 py-3 rounded-lg hover:bg-[#0F3D6C] transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span v-if="!loading">Register</span>
              <span v-else>Submitting...</span>
            </button>
          </div>

          <!-- Success & Error Messages -->
          <p v-if="success" class="text-green-600 mt-2 text-center">{{ success }}</p>
          <p v-if="error" class="text-red-600 mt-2 text-center">{{ error }}</p>
        </form>
      </div>
    </section>

    <!-- Info Section -->
    <section class="bg-[#145DA0] text-white py-12 px-6 md:px-20 text-center">
      <h2 class="text-2xl md:text-3xl font-bold mb-3">Why Join SPE DSEAT?</h2>
      <p class="mb-4 max-w-2xl mx-auto">
        Gain access to workshops, mentorship programs, competitions, and a network of talented engineering students.
      </p>
      <button class="bg-white text-[#145DA0] font-bold px-6 py-2 rounded hover:bg-gray-100 transition">
        Learn More
      </button>
    </section>

  </div>
</template>

<script setup>
import { ref } from 'vue'

const name = ref('')
const email = ref('')
const department = ref('')
const year = ref('')
const success = ref('')
const error = ref('')
const loading = ref(false)


// Do not access client-only plugin at module-level (prevents undefined during SSR)

const submitForm = async () => {
  success.value = ''
  error.value = ''
  loading.value = true

  if (!name.value || !email.value || !department.value || !year.value) {
    error.value = 'Please fill all fields'
    loading.value = false
    return
  }

  try {
    const nuxtApp = useNuxtApp()
    
    const db = (nuxtApp && nuxtApp.$firebaseDb) || (typeof window !== 'undefined' && window.__FIREBASE_DB) || null
    console.log('Firestore DB instance (nuxtApp, window):', nuxtApp?.$firebaseDb, window?.__FIREBASE_DB)
    if (!db) throw new Error('Firestore is not initialized')

    const { collection, addDoc } = await import('firebase/firestore')

    await addDoc(collection(db, 'registrations'), {
      name: name.value,
      email: email.value,
      department: department.value,
      year: year.value,
      timestamp: new Date()
    })

    success.value = 'Registration successful!'
    name.value = ''
    email.value = ''
    department.value = ''
    year.value = ''
  } catch (err) {
    console.error('Firebase error:', err)
    error.value = `Error submitting form: ${err.message}`
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
/* Tailwind handles most styling */
</style>