<template>
  <div class="min-h-screen bg-gray-100 p-6 md:p-12">
    <h1 class="text-4xl font-bold text-[#145DA0] mb-8 text-center">SPE DSEAT Registrations</h1>

    <!-- Search Input -->
    <div class="max-w-md mx-auto mb-6">
      <input
        v-model="search"
        type="text"
        placeholder="Search by name, email, department..."
        class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#145DA0]"
      />
    </div>

    <!-- Registrations Table -->
    <div class="overflow-x-auto bg-white rounded-2xl shadow p-4">
      <table class="w-full table-auto border-collapse">
        <thead>
          <tr class="bg-[#145DA0] text-white">
            <th class="px-4 py-2 text-left">Name</th>
            <th class="px-4 py-2 text-left">Email</th>
            <th class="px-4 py-2 text-left">Department</th>
            <th class="px-4 py-2 text-left">Year</th>
            <th class="px-4 py-2 text-left">Timestamp</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="reg in filteredRegistrations"
            :key="reg.id"
            class="border-b hover:bg-gray-50 transition"
          >
            <td class="px-4 py-2">{{ reg.name }}</td>
            <td class="px-4 py-2">{{ reg.email }}</td>
            <td class="px-4 py-2">{{ reg.department }}</td>
            <td class="px-4 py-2">{{ reg.year }}</td>
            <td class="px-4 py-2">{{ formatDate(reg.timestamp) }}</td>
          </tr>
          <tr v-if="filteredRegistrations.length === 0">
            <td colspan="5" class="text-center py-4 text-gray-500">
              No registrations found.
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { useFirebase } from '~/composables/useFirebase'
import { collection, getDocs, query, orderBy } from 'firebase/firestore'

const registrations = ref([])
const search = ref('')

const { db } = useFirebase()

const fetchRegistrations = async () => {
  if (!db) return
  const q = query(collection(db, 'registrations'), orderBy('timestamp', 'desc'))
  const snapshot = await getDocs(q)
  registrations.value = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
}

onMounted(fetchRegistrations)

const filteredRegistrations = computed(() => {
  if (!search.value) return registrations.value
  const term = search.value.toLowerCase()
  return registrations.value.filter(r =>
    r.name.toLowerCase().includes(term) ||
    r.email.toLowerCase().includes(term) ||
    r.department.toLowerCase().includes(term) ||
    r.year.toLowerCase().includes(term)
  )
})

const formatDate = (timestamp) => {
  if (!timestamp) return ''
  return new Date(timestamp.seconds ? timestamp.seconds * 1000 : timestamp).toLocaleString()
}
</script>

<style scoped>
/* Tailwind handles most styling */
</style>