<template>
  <div class="min-h-screen bg-gray-100 p-6 md:p-12">
    <h1 class="text-4xl font-bold text-[#145DA0] mb-10 text-center">
      SPE DSEAT Analytics Dashboard
    </h1>

    <!-- Summary Cards -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
      <div class="bg-white rounded-2xl shadow p-6 text-center">
        <p class="text-gray-500 text-sm">Total Registrations</p>
        <p class="text-4xl font-bold text-[#145DA0] mt-2">
          {{ registrations.length }}
        </p>
      </div>

      <div class="bg-white rounded-2xl shadow p-6 text-center">
        <p class="text-gray-500 text-sm">Countries Represented</p>
        <p class="text-4xl font-bold text-[#145DA0] mt-2">
          {{ Object.keys(countryStats).length }}
        </p>
      </div>

      <div class="bg-white rounded-2xl shadow p-6 text-center">
        <p class="text-gray-500 text-sm">SPE Sections</p>
        <p class="text-4xl font-bold text-[#145DA0] mt-2">
          {{ Object.keys(sectionStats).length }}
        </p>
      </div>
    </div>

    <!-- Analytics Tables -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">

      <!-- By Country -->
      <div class="bg-white rounded-2xl shadow p-6">
        <h2 class="text-xl font-semibold text-[#145DA0] mb-4">
          Registrations by Country
        </h2>
        <table class="w-full text-sm">
          <tbody>
            <tr
              v-for="(count, country) in countryStats"
              :key="country"
              class="border-b last:border-none"
            >
              <td class="py-2">{{ country }}</td>
              <td class="py-2 text-right font-semibold">{{ count }}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- By Gender -->
      <div class="bg-white rounded-2xl shadow p-6">
        <h2 class="text-xl font-semibold text-[#145DA0] mb-4">
          Registrations by Gender
        </h2>
        <table class="w-full text-sm">
          <tbody>
            <tr
              v-for="(count, gender) in genderStats"
              :key="gender"
              class="border-b last:border-none"
            >
              <td class="py-2">{{ gender }}</td>
              <td class="py-2 text-right font-semibold">{{ count }}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- By SPE Section -->
      <div class="bg-white rounded-2xl shadow p-6">
        <h2 class="text-xl font-semibold text-[#145DA0] mb-4">
          Registrations by SPE Section
        </h2>
        <table class="w-full text-sm">
          <tbody>
            <tr
              v-for="(count, section) in sectionStats"
              :key="section"
              class="border-b last:border-none"
            >
              <td class="py-2">{{ section }}</td>
              <td class="py-2 text-right font-semibold">{{ count }}</td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { useFirebase } from '~/composables/useFirebase'
import { collection, getDocs } from 'firebase/firestore'

const registrations = ref([])
const { db } = useFirebase()

const fetchRegistrations = async () => {
  if (!db) return
  const snapshot = await getDocs(collection(db, 'registrations'))
  registrations.value = snapshot.docs.map(doc => doc.data())
}

onMounted(fetchRegistrations)

/* ---- Analytics Computations ---- */

const countryStats = computed(() => {
  const stats = {}
  registrations.value.forEach(r => {
    const key = r.country || 'Unknown'
    stats[key] = (stats[key] || 0) + 1
  })
  return stats
})

const genderStats = computed(() => {
  const stats = {}
  registrations.value.forEach(r => {
    const key = r.gender || 'Not Specified'
    stats[key] = (stats[key] || 0) + 1
  })
  return stats
})

const sectionStats = computed(() => {
  const stats = {}
  registrations.value.forEach(r => {
    const key = r.speSection || 'Unknown'
    stats[key] = (stats[key] || 0) + 1
  })
  return stats
})
</script>