<template>
  <div class="min-h-screen bg-gray-100 flex flex-col">

    <!-- Hero Section -->
    <section class="bg-[#145DA0] text-white py-20 px-6 md:px-20 text-center">
      <h1 class="text-4xl md:text-5xl font-bold mb-4">Join SPE DSEAT</h1>
      <p class="text-lg md:text-xl max-w-3xl mx-auto">
        Register now to become part of a growing community of industry professionals and technology leaders.
        Fill out the form below to join.
      </p>
    </section>

    <!-- Registration Form -->
    <section class="flex-1 py-16 px-6 md:px-20 flex justify-center">
      <div class="bg-white rounded-2xl shadow-xl w-full max-w-5xl p-10 md:p-16">

        <h2 class="text-3xl font-bold text-[#145DA0] mb-6 text-center">
          Professional Registration
        </h2>

        <form @submit.prevent="submitForm" class="space-y-6">

          <!-- Name -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label class="block text-gray-700 mb-2">Surname *</label>
              <input v-model="surname" type="text"
                class="input" />
            </div>
            <div>
              <label class="block text-gray-700 mb-2">Name *</label>
              <input v-model="name" type="text"
                class="input" />
            </div>
          </div>

          <!-- Email & Phone -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label class="block text-gray-700 mb-2">Email Address *</label>
              <input v-model="email" type="email"
                class="input" />
            </div>
            <div>
              <label class="block text-gray-700 mb-2">Phone Number *</label>
              <input v-model="phone" type="text"
                class="input" />
            </div>
          </div>

          <!-- Country & SPE Section -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label class="block text-gray-700 mb-2">Country of Residence *</label>
              <select v-model="country" class="input">
                <option value="">Select your country</option>
                <option v-for="c in countries" :key="c" :value="c">
                  {{ c }}
                </option>
              </select>
            </div>
            <div>
              <label class="block text-gray-700 mb-2">SPE Section *</label>
              <input v-model="speSection" type="text"
                placeholder="e.g., SPE Lagos Section"
                class="input" />
            </div>
          </div>

          <!-- Category -->
          <div>
            <label class="block text-gray-700 mb-2">Professional Category *</label>
            <select v-model="category" class="input">
              <option value="">Select category</option>
              <option>Industry Professional</option>
              <option>Consultant</option>
              <option>Researcher</option>
              <option>Entrepreneur</option>
            </select>
          </div>

          <!-- Professional Details -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label class="block text-gray-700 mb-2">SPE Number</label>
              <input v-model="speNumber" type="text" class="input" />
            </div>
            <div>
              <label class="block text-gray-700 mb-2">Organization / Company *</label>
              <input v-model="affiliation" type="text"
                placeholder="Company or Organization Name"
                class="input" />
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label class="block text-gray-700 mb-2">Current Role *</label>
              <input v-model="role" type="text"
                placeholder="Your Job Title"
                class="input" />
            </div>
            <div>
              <label class="block text-gray-700 mb-2">Gender *</label>
              <select v-model="gender" class="input">
                <option value="">Select gender</option>
                <option>Male</option>
                <option>Female</option>
              </select>
            </div>
          </div>

          <!-- Membership -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label class="block text-gray-700 mb-2">
                Are you a member of SPE DSEAT? *
              </label>
              <select v-model="isMember" class="input">
                <option value="">Select</option>
                <option>Yes</option>
                <option>No</option>
              </select>
            </div>

            <div v-if="isMember === 'No'">
              <label class="block text-gray-700 mb-2">
                Would you like to join SPE DSEAT?
              </label>
              <select v-model="joinDseat" class="input">
                <option value="">Select</option>
                <option>Yes</option>
                <option>No</option>
              </select>
            </div>
          </div>

          <!-- Source -->
          <div>
            <label class="block text-gray-700 mb-2">
              How did you hear about this program? *
            </label>
            <select v-model="source" class="input">
              <option value="">Select one</option>
              <option>Email Announcement</option>
              <option>Social Media</option>
              <option>Friend or Colleague</option>
              <option>LinkedIn</option>
              <option>SPE Section</option>
              <option>Conference/Event</option>
              <option>Online Search</option>
            </select>
          </div>

          <!-- Alternate Email -->
          <div>
            <label class="block text-gray-700 mb-2">Alternate Email</label>
            <input v-model="alternateEmail" type="email" class="input" />
          </div>

          <!-- Submit -->
          <div class="text-center">
            <button
              type="submit"
              :disabled="loading"
              class="bg-[#145DA0] text-white font-bold px-8 py-3 rounded-lg hover:bg-[#0F3D6C] transition disabled:opacity-50"
            >
              <span v-if="!loading">Register</span>
              <span v-else>Submitting...</span>
            </button>
          </div>

          <!-- Messages -->
          <p v-if="success" class="text-green-600 text-center mt-2">
            {{ success }}
          </p>
          <p v-if="error" class="text-red-600 text-center mt-2">
            {{ error }}
          </p>

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
const isMember = ref('')
const joinDseat = ref('')
const source = ref('')
const alternateEmail = ref('')

const success = ref('')
const error = ref('')
const loading = ref(false)

const countries = ["Nigeria","Ghana","Kenya","South Africa","United Kingdom","United States"]

const submitForm = async () => {
  success.value = ''
  error.value = ''
  loading.value = true

  if (
    !surname.value || !name.value || !email.value || !phone.value ||
    !country.value || !speSection.value || !category.value ||
    !affiliation.value || !role.value || !gender.value ||
    !isMember.value || !source.value
  ) {
    error.value = 'Please fill all required fields'
    loading.value = false
    return
  }

  try {
    const { db } = useFirebase()
    if (!db) throw new Error('Firestore not initialized')

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
      isMember: isMember.value,
      joinDseat: joinDseat.value,
      source: source.value,
      alternateEmail: alternateEmail.value,
      timestamp: new Date()
    })

    success.value = 'Registration successful!'

    // reset
    surname.value = ''
    name.value = ''
    email.value = ''
    phone.value = ''
    country.value = ''
    speSection.value = ''
    category.value = ''
    speNumber.value = ''
    affiliation.value = ''
    role.value = ''
    gender.value = ''
    isMember.value = ''
    joinDseat.value = ''
    source.value = ''
    alternateEmail.value = ''

  } catch (err) {
    error.value = err.message
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
.input {
  @apply w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#145DA0];
}
</style>