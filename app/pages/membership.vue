<template>
  <section class="bg-white text-gray-900">

    <!-- Header -->
    <header class="bg-[#145DA0] py-20 px-6">
      <div class="max-w-6xl mx-auto text-white">
        <h1 class="text-4xl md:text-5xl font-bold mb-4">
          Membership & Professional Engagement
        </h1>
        <p class="max-w-3xl text-lg text-blue-100">
          Join the Society of Petroleum Engineers – Department of Systems Engineering
          and Applied Technology (SPE DSEAT) professional network.
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
          Membership with SPE DSEAT provides industry professionals with access
          to technical programs, industry forums, leadership initiatives,
          executive training, conferences, and strategic networking opportunities
          across the global energy ecosystem.
        </p>

        <ul class="list-disc pl-6 text-gray-800 space-y-2">
          <li>Participation in industry events and technical sessions</li>
          <li>Access to professional development and certification programs</li>
          <li>Leadership and committee engagement opportunities</li>
          <li>Strategic industry networking and collaboration</li>
        </ul>
      </section>

      <!-- Registration Section -->
      <section>
        <h2 class="text-2xl font-semibold text-[#145DA0] mb-6">
          Membership Registration
        </h2>

        <p class="max-w-4xl leading-relaxed text-gray-800 mb-10">
          Prospective members are invited to complete the registration form below.
          Upon successful registration, members will gain access to SPE DSEAT
          programs, professional engagements, and industry collaboration initiatives.
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
            <label class="block font-medium mb-2">Professional Email</label>
            <input
              v-model="form.email"
              type="email"
              placeholder="name@company.com"
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

          <!-- Organization -->
          <div>
            <label class="block font-medium mb-2">Organization / Company</label>
            <input
              v-model="form.organization"
              type="text"
              placeholder="Your organization or company"
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
              <option>Associate Member</option>
              <option>Professional Member</option>
              <option>Corporate Member</option>
              <option>Executive Member</option>
            </select>
          </div>

          <!-- Engagement Interests -->
          <div class="md:col-span-2">
            <label class="block font-medium mb-2">Areas of Professional Interest</label>

            <div class="space-y-2">
              <div
                class="flex items-center"
                v-for="area in participationAreas"
                :key="area"
              >
                <input
                  type="checkbox"
                  :id="area"
                  :value="area"
                  v-model="form.selectedAreas"
                  class="h-4 w-4 text-[#145DA0] border-gray-300 rounded"
                />
                <label :for="area" class="ml-2 text-gray-700">
                  {{ area }}
                </label>
              </div>
            </div>

            <p class="text-sm text-gray-600 mt-2">
              Select the engagement areas aligned with your professional interests.
            </p>
          </div>

          <!-- Submit -->
          <div class="md:col-span-2">
            <button
              type="submit"
              :disabled="loading"
              class="bg-[#145DA0] text-white px-8 py-3 font-semibold hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span v-if="!loading">Complete Membership Registration</span>
              <span v-else>Submitting...</span>
            </button>

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
  organization: '',
  membershipType: '',
  selectedAreas: []
})

const participationAreas = [
  "Industry Conferences & Forums",
  "Technical Training & Certification",
  "Leadership & Committee Participation",
  "Research & Innovation Collaboration"
]

const loading = ref(false)
const success = ref('')
const error = ref('')

const submitForm = async () => {
  success.value = ''
  error.value = ''

  if (!form.value.name || !form.value.email || !form.value.organization || !form.value.membershipType) {
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
      organization: '',
      membershipType: '',
      selectedAreas: []
    }

  } catch (err) {
    console.error(err)
    error.value = `Error submitting form: ${err.message}`
  } finally {
    loading.value = false
  }
}
</script>