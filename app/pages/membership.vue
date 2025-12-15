<template>
  <section class="bg-white text-gray-900">
    <!-- Header -->
    <header class="bg-[#145DA0] py-20 px-6">
      <div class="max-w-6xl mx-auto text-white">
        <h1 class="text-4xl md:text-5xl font-bold mb-4">
          Membership & Participation
        </h1>
        <p class="max-w-3xl text-lg text-blue-100">
          Join the Society of Petroleum Engineers – Department of Systems Engineering
          and Applied Technology (SPE DSEAT)
        </p>
      </div>
    </header>

    <!-- Main Content -->
    <main class="max-w-6xl mx-auto px-6 py-20 space-y-24">

      <!-- About Membership -->
      <section>
        <h2 class="text-2xl font-semibold text-[#145DA0] mb-6">
          SPE DSEAT Membership
        </h2>
        <p class="max-w-4xl leading-relaxed text-gray-800 mb-6">
          Membership of SPE DSEAT provides students and professionals with access
          to technical programmes, competitions, leadership development initiatives,
          workshops, conferences, and professional networking opportunities.
        </p>

        <ul class="list-disc pl-6 text-gray-800 space-y-2">
          <li>Eligibility to participate in SPE DSEAT competitions</li>
          <li>Access to academic and professional events</li>
          <li>Leadership and volunteer opportunities</li>
          <li>Industry exposure and technical development</li>
        </ul>
      </section>

      <!-- Registration Section -->
      <section>
        <h2 class="text-2xl font-semibold text-[#145DA0] mb-6">
          Membership Registration
        </h2>

        <p class="max-w-4xl leading-relaxed text-gray-800 mb-10">
          Prospective members are required to complete the registration form below.
          Upon successful registration, members may participate in competitions,
          workshops, and other SPE DSEAT programmes.
        </p>

        <!-- Registration Form -->
        <form @submit.prevent="submitForm" class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
          <!-- Full Name -->
          <div>
            <label class="block font-medium mb-2">Full Name</label>
            <input
              v-model="form.name"
              type="text"
              placeholder="Enter your full name"
              class="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:border-[#145DA0]"
            />
          </div>

          <!-- Email -->
          <div>
            <label class="block font-medium mb-2">Email Address</label>
            <input
              v-model="form.email"
              type="email"
              placeholder="example@email.com"
              class="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:border-[#145DA0]"
            />
          </div>

          <!-- Phone -->
          <div>
            <label class="block font-medium mb-2">Phone Number</label>
            <input
              v-model="form.phone"
              type="tel"
              placeholder="+234..."
              class="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:border-[#145DA0]"
            />
          </div>

          <!-- Department -->
          <div>
            <label class="block font-medium mb-2">Department / Institution</label>
            <input
              v-model="form.department"
              type="text"
              placeholder="Your department or institution"
              class="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:border-[#145DA0]"
            />
          </div>

          <!-- Membership Type -->
          <div>
            <label class="block font-medium mb-2">Membership Category</label>
            <select
              v-model="form.membershipType"
              class="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:border-[#145DA0]"
            >
              <option disabled value="">Select category</option>
              <option>Student Member</option>
              <option>Graduate Member</option>
              <option>Professional Member</option>
            </select>
          </div>

          <!-- Participation Interests (Checkboxes) -->
          <div class="md:col-span-2">
            <label class="block font-medium mb-2">Areas of Participation</label>
            <div class="space-y-2">
              <div class="flex items-center" v-for="area in participationAreas" :key="area">
                <input type="checkbox" :id="area" :value="area" v-model="form.selectedAreas"
                       class="h-4 w-4 text-[#145DA0] border-gray-300 rounded">
                <label :for="area" class="ml-2 text-gray-700">{{ area }}</label>
              </div>
            </div>
            <p class="text-sm text-gray-600 mt-2">
              Select any activities you wish to participate in. You may leave all unchecked if undecided.
            </p>
          </div>

          <!-- Submit Button -->
          <div class="md:col-span-2">
            <button
              type="submit"
              :disabled="loading"
              class="bg-[#145DA0] text-white px-8 py-3 font-semibold hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span v-if="!loading">Register as a Member</span>
              <span v-else>Submitting...</span>
            </button>

            <!-- Success & Error Messages -->
            <p v-if="success" class="text-green-600 mt-2">{{ success }}</p>
            <p v-if="error" class="text-red-600 mt-2">{{ error }}</p>
          </div>
        </form>
      </section>

    </main>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { useFirebase } from '~/composables/useFirebase'
import { collection, addDoc } from 'firebase/firestore'

const form = ref({
  name: '',
  email: '',
  phone: '',
  department: '',
  membershipType: '',
  selectedAreas: []
})

const participationAreas = [
  "Competitions",
  "Conferences & Seminars",
  "Workshops & Training",
  "Leadership & Volunteering"
]

const loading = ref(false)
const success = ref('')
const error = ref('')

const submitForm = async () => {
  success.value = ''
  error.value = ''

  // Basic validation
  if (!form.value.name || !form.value.email || !form.value.department || !form.value.membershipType) {
    error.value = 'Please fill all required fields'
    return
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(form.value.email)) {
    error.value = 'Please enter a valid email'
    return
  }

  loading.value = true

  try {
    const { db } = useFirebase()
    if (!db) throw new Error('Firestore is not initialized')

    // Add timeout for write operation
    const addDocPromise = addDoc(collection(db, 'memberships'), {
      ...form.value,
      timestamp: new Date()
    })

    const timeoutPromise = new Promise((_, reject) =>
      setTimeout(() => reject(new Error('Write operation timed out. Check Firestore rules.')), 10000)
    )

    await Promise.race([addDocPromise, timeoutPromise])

    success.value = 'Registration successful!'
    form.value = {
      name: '',
      email: '',
      phone: '',
      department: '',
      membershipType: '',
      selectedAreas: []
    }
  } catch (err) {
    console.error('Error submitting form:', err)
    error.value = `Error submitting form: ${err.message}`
  } finally {
    loading.value = false
  }
}
</script>
