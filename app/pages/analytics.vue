<template>
  <div class="min-h-screen p-6 md:p-12 bg-gray-100">
    <h1 class="text-4xl font-bold text-[#145DA0] mb-8 text-center">SPE DSEAT Analytics</h1>

    <!-- Summary Cards -->
    <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
      <div class="bg-white rounded-2xl shadow p-6 flex flex-col items-center">
        <div class="text-4xl text-[#145DA0] mb-2">👥</div>
        <p class="text-gray-500 mb-1">Total Registrations</p>
        <h2 class="text-2xl font-bold">{{ totalRegistrations }}</h2>
      </div>

      <div class="bg-white rounded-2xl shadow p-6 flex flex-col items-center">
        <div class="text-4xl text-[#145DA0] mb-2">🏫</div>
        <p class="text-gray-500 mb-1">Departments</p>
        <h2 class="text-2xl font-bold">{{ departmentCount }}</h2>
      </div>

      <div class="bg-white rounded-2xl shadow p-6 flex flex-col items-center">
        <div class="text-4xl text-[#145DA0] mb-2">📚</div>
        <p class="text-gray-500 mb-1">Years</p>
        <h2 class="text-2xl font-bold">{{ yearCount }}</h2>
      </div>

      <div class="bg-white rounded-2xl shadow p-6 flex flex-col items-center">
        <div class="text-4xl text-[#145DA0] mb-2">🎯</div>
        <p class="text-gray-500 mb-1">Categories</p>
        <h2 class="text-2xl font-bold">{{ categoryCount }}</h2>
      </div>
    </div>

    <!-- Bar Charts -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
      <div class="bg-white rounded-2xl shadow p-6">
        <h2 class="text-xl font-bold mb-4">Registrations by Department</h2>
        <client-only>
          <apexchart
            v-if="chartReady"
            type="bar"
            height="350"
            :options="deptChartOptions"
            :series="deptChartSeries"
          />
        </client-only>
      </div>

      <div class="bg-white rounded-2xl shadow p-6">
        <h2 class="text-xl font-bold mb-4">Registrations by Category</h2>
        <client-only>
          <apexchart
            v-if="chartReady"
            type="bar"
            height="350"
            :options="categoryChartOptions"
            :series="categoryChartSeries"
          />
        </client-only>
      </div>

      <div class="bg-white rounded-2xl shadow p-6">
        <h2 class="text-xl font-bold mb-4">Registrations by Gender</h2>
        <client-only>
          <apexchart
            v-if="chartReady"
            type="bar"
            height="350"
            :options="genderChartOptions"
            :series="genderChartSeries"
          />
        </client-only>
      </div>

      <div class="bg-white rounded-2xl shadow p-6">
        <h2 class="text-xl font-bold mb-4">Registrations by Age Group</h2>
        <client-only>
          <apexchart
            v-if="chartReady"
            type="bar"
            height="350"
            :options="ageChartOptions"
            :series="ageChartSeries"
          />
        </client-only>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useFirebase } from '~/composables/useFirebase'
import { collection, getDocs } from 'firebase/firestore'

const registrations = ref([])

const totalRegistrations = ref(0)
const departmentCount = ref(0)
const yearCount = ref(0)
const categoryCount = ref(0)

const deptChartSeries = ref([])
const deptChartOptions = ref({})

const categoryChartSeries = ref([])
const categoryChartOptions = ref({})

const genderChartSeries = ref([])
const genderChartOptions = ref({})

const ageChartSeries = ref([])
const ageChartOptions = ref({})

const chartReady = ref(false)

const { db } = useFirebase()

onMounted(async () => {
  try {
    if (!db) throw new Error('Firestore not initialized')

    // Fetch all registrations
    const snapshot = await getDocs(collection(db, 'registrations'))
    registrations.value = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))

    // Summary stats
    totalRegistrations.value = registrations.value.length

    const deptMap = {}
    const yearMap = {}
    const categoryMap = {}
    const genderMap = {}
    const ageMap = {}

    registrations.value.forEach(r => {
      deptMap[r.department] = (deptMap[r.department] || 0) + 1
      yearMap[r.year] = (yearMap[r.year] || 0) + 1
      categoryMap[r.category] = (categoryMap[r.category] || 0) + 1
      genderMap[r.gender] = (genderMap[r.gender] || 0) + 1
      ageMap[r.ageGroup] = (ageMap[r.ageGroup] || 0) + 1
    })

    departmentCount.value = Object.keys(deptMap).length
    yearCount.value = Object.keys(yearMap).length
    categoryCount.value = Object.keys(categoryMap).length

    // Load ApexCharts dynamically
    const ApexCharts = (await import('vue3-apexcharts')).default

    // Prepare chart data
    deptChartOptions.value = {
      chart: { id: 'dept-bar' },
      xaxis: { categories: Object.keys(deptMap) },
      dataLabels: { enabled: true }
    }
    deptChartSeries.value = [{ name: 'Registrations', data: Object.values(deptMap) }]

    categoryChartOptions.value = {
      chart: { id: 'category-bar' },
      xaxis: { categories: Object.keys(categoryMap) },
      dataLabels: { enabled: true }
    }
    categoryChartSeries.value = [{ name: 'Registrations', data: Object.values(categoryMap) }]

    genderChartOptions.value = {
      chart: { id: 'gender-bar' },
      xaxis: { categories: Object.keys(genderMap) },
      dataLabels: { enabled: true }
    }
    genderChartSeries.value = [{ name: 'Registrations', data: Object.values(genderMap) }]

    ageChartOptions.value = {
      chart: { id: 'age-bar' },
      xaxis: { categories: Object.keys(ageMap) },
      dataLabels: { enabled: true }
    }
    ageChartSeries.value = [{ name: 'Registrations', data: Object.values(ageMap) }]

    chartReady.value = true

  } catch (err) {
    console.error('Error loading analytics:', err)
  }
})
</script>

<style scoped>
/* Tailwind handles styling */
</style>