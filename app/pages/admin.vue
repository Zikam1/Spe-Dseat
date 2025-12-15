<template>
  <div class="min-h-screen bg-gray-100 p-6 md:p-12">
    <h1 class="text-4xl font-bold text-[#145DA0] mb-8 text-center">SPE DSEAT Registrations</h1>

    <!-- Search Input -->
    <div class="max-w-2xl mx-auto mb-6">
      <input
        v-model="search"
        type="text"
        placeholder="Search by name, surname, email, department, SPE section..."
        class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#145DA0]"
      />
    </div>

    <!-- Registrations Table -->
    <div class="overflow-x-auto bg-white rounded-2xl shadow p-4">
      <table class="w-full table-auto border-collapse text-sm md:text-base">
        <thead>
          <tr class="bg-[#145DA0] text-white">
            <th class="px-3 py-2">Surname</th>
            <th class="px-3 py-2">Name</th>
            <th class="px-3 py-2">Email</th>
            <th class="px-3 py-2">Phone</th>
            <th class="px-3 py-2">Country</th>
            <th class="px-3 py-2">SPE Section</th>
            <th class="px-3 py-2">Category</th>
            <th class="px-3 py-2">SPE Number</th>
            <th class="px-3 py-2">Affiliation</th>
            <th class="px-3 py-2">Role</th>
            <th class="px-3 py-2">Gender</th>
            <th class="px-3 py-2">Age Group</th>
            <th class="px-3 py-2">Discipline</th>
            <th class="px-3 py-2">Member?</th>
            <th class="px-3 py-2">Join DSEAT?</th>
            <th class="px-3 py-2">Source</th>
            <th class="px-3 py-2">Alt Email</th>
            <th class="px-3 py-2">Timestamp</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="reg in filteredRegistrations"
            :key="reg.id"
            class="border-b hover:bg-gray-50 transition"
          >
            <td class="px-3 py-2">{{ reg.surname }}</td>
            <td class="px-3 py-2">{{ reg.name }}</td>
            <td class="px-3 py-2">{{ reg.email }}</td>
            <td class="px-3 py-2">{{ reg.phone }}</td>
            <td class="px-3 py-2">{{ reg.country }}</td>
            <td class="px-3 py-2">{{ reg.speSection }}</td>
            <td class="px-3 py-2">{{ reg.category }}</td>
            <td class="px-3 py-2">{{ reg.speNumber || '-' }}</td>
            <td class="px-3 py-2">{{ reg.affiliation || '-' }}</td>
            <td class="px-3 py-2">{{ reg.role || '-' }}</td>
            <td class="px-3 py-2">{{ reg.gender }}</td>
            <td class="px-3 py-2">{{ reg.ageGroup }}</td>
            <td class="px-3 py-2">{{ reg.discipline }}</td>
            <td class="px-3 py-2">{{ reg.isMember }}</td>
            <td class="px-3 py-2">{{ reg.joinDseat || '-' }}</td>
            <td class="px-3 py-2">{{ reg.source }}</td>
            <td class="px-3 py-2">{{ reg.alternateEmail || '-' }}</td>
            <td class="px-3 py-2">{{ formatDate(reg.timestamp) }}</td>
          </tr>
          <tr v-if="filteredRegistrations.length === 0">
            <td colspan="18" class="text-center py-4 text-gray-500">
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
  try {
    const q = query(collection(db, 'registrations'), orderBy('timestamp', 'desc'))
    const snapshot = await getDocs(q)
    registrations.value = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
  } catch (err) {
    console.error('Error fetching registrations:', err)
  }
}

onMounted(fetchRegistrations)

const filteredRegistrations = computed(() => {
  if (!search.value) return registrations.value
  const term = search.value.toLowerCase()
  return registrations.value.filter(r =>
    (r.name && r.name.toLowerCase().includes(term)) ||
    (r.surname && r.surname.toLowerCase().includes(term)) ||
    (r.email && r.email.toLowerCase().includes(term)) ||
    (r.phone && r.phone.toLowerCase().includes(term)) ||
    (r.department && r.department.toLowerCase().includes(term)) ||
    (r.speSection && r.speSection.toLowerCase().includes(term))
  )
})

const formatDate = (timestamp) => {
  if (!timestamp) return ''
  return new Date(timestamp.seconds ? timestamp.seconds * 1000 : timestamp).toLocaleString()
}
</script>