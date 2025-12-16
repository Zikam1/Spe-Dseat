<template>
  <div class="min-h-screen bg-gray-100 p-6 md:p-12">
    <h1 class="text-4xl font-bold text-[#145DA0] mb-8 text-center">
      SPE DSEAT Analytics Dashboard
    </h1>

    <!-- Export Buttons -->
    <div class="flex flex-wrap gap-4 justify-center mb-10">
      <button
        @click="exportToExcel"
        class="px-6 py-3 bg-[#145DA0] text-white rounded-lg shadow hover:bg-blue-800 transition"
      >
        Export to Excel
      </button>

      <button
        @click="exportToCSV"
        class="px-6 py-3 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition"
      >
        Export to Google Sheets (CSV)
      </button>
    </div>

    <!-- Summary Cards -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
      <div class="bg-white rounded-2xl shadow p-6 text-center">
        <p class="text-gray-500 text-sm">Total Registrations</p>
        <p class="text-4xl font-bold text-[#145DA0] mt-2">
          {{ filteredRegistrations.length }}
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
import { collection, getDocs, query, orderBy } from 'firebase/firestore'
import * as XLSX from 'xlsx'

const registrations = ref([])
const search = ref('')
const { db } = useFirebase()

/* ===== Fetch Registrations ===== */
const fetchRegistrations = async () => {
  if (!db) return
  try {
    const q = query(collection(db, 'registrations'), orderBy('timestamp', 'desc'))
    const snapshot = await getDocs(q)
    registrations.value = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
  } catch (err) {
    console.error('Error fetching registrations:', err)
  }
}

onMounted(fetchRegistrations)

/* ===== Computed Filtered Registrations ===== */
const filteredRegistrations = computed(() => {
  if (!search.value) return registrations.value
  const term = search.value.toLowerCase()
  return registrations.value.filter(r =>
    Object.values(r).some(v => v && v.toString().toLowerCase().includes(term))
  )
})

/* ===== Analytics Computations ===== */
const countryStats = computed(() => {
  const stats = {}
  filteredRegistrations.value.forEach(r => {
    const key = r.country || 'Unknown'
    stats[key] = (stats[key] || 0) + 1
  })
  return stats
})

const genderStats = computed(() => {
  const stats = {}
  filteredRegistrations.value.forEach(r => {
    const key = r.gender || 'Not Specified'
    stats[key] = (stats[key] || 0) + 1
  })
  return stats
})

const sectionStats = computed(() => {
  const stats = {}
  filteredRegistrations.value.forEach(r => {
    const key = r.speSection || 'Unknown'
    stats[key] = (stats[key] || 0) + 1
  })
  return stats
})

/* ===== Export Functions ===== */
const formatExportData = () => {
  return filteredRegistrations.value.map((r, index) => ({
    SN: index + 1,
    Surname: r.surname || '',
    Name: r.name || '',
    Email: r.email || '',
    Phone: r.phone || '',
    Country: r.country || '',
    'SPE Section': r.speSection || '',
    Category: r.category || '',
    'SPE Number': r.speNumber || '',
    Affiliation: r.affiliation || '',
    Role: r.role || '',
    Gender: r.gender || '',
    'Age Group': r.ageGroup || '',
    Discipline: r.discipline || '',
    'SPE Member': r.isMember || '',
    'Join DSEAT': r.joinDseat || '',
    Source: r.source || '',
    'Alternate Email': r.alternateEmail || '',
    Timestamp: r.timestamp?.seconds
      ? new Date(r.timestamp.seconds * 1000).toLocaleString()
      : ''
  }))
}

const exportToExcel = () => {
  const worksheet = XLSX.utils.json_to_sheet(formatExportData())
  const workbook = XLSX.utils.book_new()
  XLSX.utils.book_append_sheet(workbook, worksheet, 'Registrations')
  XLSX.writeFile(workbook, 'SPE_DSEAT_Registrations.xlsx')
}

const exportToCSV = () => {
  const worksheet = XLSX.utils.json_to_sheet(formatExportData())
  const csv = XLSX.utils.sheet_to_csv(worksheet)
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' })
  const link = document.createElement('a')
  link.href = URL.createObjectURL(blob)
  link.setAttribute('download', 'SPE_DSEAT_Registrations.csv')
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}
</script>