<template>
  <div class="min-h-screen bg-gray-100 flex flex-col">

    <!-- Hero Section -->
    <section class="bg-[#145DA0] text-white py-20 px-6 md:px-20 text-center">
      <h1 class="text-4xl md:text-5xl font-bold mb-4">Join SPE DSEAT</h1>
      <p class="text-lg md:text-xl max-w-3xl mx-auto">
        Register now to become part of a growing community of engineering and technology students. Fill out the form below.
      </p>
    </section>

    <!-- Registration Form Section -->
    <section class="flex-1 py-16 px-6 md:px-20 flex justify-center">
      <div class="bg-white rounded-2xl shadow-xl w-full max-w-5xl p-10 md:p-16">
        <h2 class="text-3xl font-bold text-[#145DA0] mb-6 text-center">Register Now</h2>
        <form @submit.prevent="submitForm" class="space-y-6">

          <!-- Name Fields -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label class="block text-gray-700 mb-2">Surname *</label>
              <input v-model="surname" type="text" placeholder="Your Surname"
                class="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#145DA0]" />
            </div>
            <div>
              <label class="block text-gray-700 mb-2">Name *</label>
              <input v-model="name" type="text" placeholder="Your Name"
                class="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#145DA0]" />
            </div>
          </div>

          <!-- Email & Phone -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label class="block text-gray-700 mb-2">Email Address *</label>
              <input v-model="email" type="email" placeholder="you@example.com"
                class="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#145DA0]" />
            </div>
            <div>
              <label class="block text-gray-700 mb-2">Phone Number *</label>
              <input v-model="phone" type="text" placeholder="+233..." 
                class="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#145DA0]" />
            </div>
          </div>

          <!-- Country & SPE Section -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label class="block text-gray-700 mb-2">Country of Residence *</label>
              <input v-model="country" type="text" placeholder="Your Country"
                class="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#145DA0]" />
            </div>
            <div>
              <label class="block text-gray-700 mb-2">SPE Section *</label>
              <input v-model="speSection" type="text" placeholder="SPE Nairobi Section"
                class="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#145DA0]" />
            </div>
          </div>

          <!-- Category -->
          <div>
            <label class="block text-gray-700 mb-2">Category *</label>
            <select v-model="category"
              class="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#145DA0]">
              <option value="">Select category</option>
              <option>Student Professional</option>
              <option>Young Professional</option>
              <option>Industry Professional (36 years and above)</option>
            </select>
          </div>

          <!-- Additional Fields -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label class="block text-gray-700 mb-2">SPE Number</label>
              <input v-model="speNumber" type="text" placeholder="Optional"
                class="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#145DA0]" />
            </div>
            <div>
              <label class="block text-gray-700 mb-2">Affiliation</label>
              <input v-model="affiliation" type="text" placeholder="Industry / University / Organization"
                class="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#145DA0]" />
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label class="block text-gray-700 mb-2">Current Role</label>
              <input v-model="role" type="text" placeholder="Your current role"
                class="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#145DA0]" />
            </div>
            <div>
              <label class="block text-gray-700 mb-2">Gender *</label>
              <select v-model="gender"
                class="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#145DA0]">
                <option value="">Select gender</option>
                <option>Male</option>
                <option>Female</option>
              </select>
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label class="block text-gray-700 mb-2">Age Group *</label>
              <select v-model="ageGroup"
                class="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#145DA0]">
                <option value="">Select age group</option>
                <option>16-20</option>
                <option>21-25</option>
                <option>26-30</option>
                <option>31-35</option>
                <option>36-40</option>
                <option>41 and above</option>
              </select>
            </div>
            <div>
              <label class="block text-gray-700 mb-2">Current Discipline *</label>
              <input v-model="discipline" type="text" placeholder="Petroleum Engineer, Data Scientist..."
                class="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#145DA0]" />
            </div>
          </div>

          <!-- Membership -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label class="block text-gray-700 mb-2">Are you a member of SPE DSEAT? *</label>
              <select v-model="isMember"
                class="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#145DA0]">
                <option value="">Select</option>
                <option>Yes</option>
                <option>No</option>
              </select>
            </div>
            <div>
              <label class="block text-gray-700 mb-2">If No, would you like to join SPE DSEAT?</label>
              <select v-model="joinDseat"
                class="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#145DA0]">
                <option value="">Select</option>
                <option>Yes</option>
                <option>No</option>
              </select>
            </div>
          </div>

          <!-- How did you hear -->
          <div>
            <label class="block text-gray-700 mb-2">How did you hear about this competition? *</label>
            <select v-model="source"
              class="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#145DA0]">
              <option value="">Select one</option>
              <option>WhatsApp Group</option>
              <option>Email Announcement</option>
              <option>Social Media</option>
              <option>Church Announcement</option>
              <option>Friend or Colleague</option>
              <option>Alumni Network</option>
              <option>LinkedIn</option>
              <option>University Department/Faculty</option>
              <option>Mentor or Lecturer</option>
              <option>Telegram Channel</option>
              <option>Online Search</option>
              <option>Previous Participant</option>
              <option>Poster/Flyer</option>
              <option>SPE Section</option>
            </select>
          </div>

          <!-- Alternate Email -->
          <div>
            <label class="block text-gray-700 mb-2">Provide alternate email address</label>
            <input v-model="alternateEmail" type="email" placeholder="Optional"
              class="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#145DA0]" />
          </div>

          <!-- Submit Button -->
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

  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useFirebase } from '~/composables/useFirebase'

const surname = ref('')
const name = ref('')
const email = ref('')
const phone = ref('')
const country = ref('')
const speSection = ref('')
const category = ref('')
const speNumber = ref('')
const affiliation = ref('')
const role = ref('')
const gender = ref('')
const ageGroup = ref('')
const discipline = ref('')
const isMember = ref('')
const joinDseat = ref('')
const source = ref('')
const alternateEmail = ref('')

const success = ref('')
const error = ref('')
const loading = ref(false)

const submitForm = async () => {
  success.value = ''
  error.value = ''
  loading.value = true

  // basic validation
  if (!surname.value || !name.value || !email.value || !phone.value || !country.value || !speSection.value || !category.value || !gender.value || !ageGroup.value || !discipline.value || !isMember.value || !source.value) {
    error.value = 'Please fill all required fields'
    loading.value = false
    return
  }

  try {
    const { db } = useFirebase()
    if (!db) throw new Error('Firestore is not initialized')

    const { collection, addDoc } = await import('firebase/firestore')

    await addDoc(collection(db, 'registrations'), {
      surname: surname.value,
      name: name.value,
      email: email.value,
      phone: phone.value,
      country: country.value,
      speSection: speSection.value,
      category: category.value,
      speNumber: speNumber.value,
      affiliation: affiliation.value,
      role: role.value,
      gender: gender.value,
      ageGroup: ageGroup.value,
      discipline: discipline.value,
      isMember: isMember.value,
      joinDseat: joinDseat.value,
      source: source.value,
      alternateEmail: alternateEmail.value,
      timestamp: new Date()
    })

    success.value = 'Registration successful!'

    // reset all fields
    surname.value = name.value = email.value = phone.value = country.value = speSection.value = ''
    category.value = speNumber.value = affiliation.value = role.value = gender.value = ageGroup.value = discipline.value = ''
    isMember.value = joinDseat.value = source.value = alternateEmail.value = ''

  } catch (err) {
    console.error(err)
    error.value = `Error submitting form: ${err.message}`
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
/* Tailwind handles styling */
</style>
