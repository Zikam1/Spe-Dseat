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
        <form class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
          <!-- Full Name -->
          <div>
            <label class="block font-medium mb-2">Full Name</label>
            <input
              type="text"
              placeholder="Enter your full name"
              class="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:border-[#145DA0]"
            />
          </div>

          <!-- Email -->
          <div>
            <label class="block font-medium mb-2">Email Address</label>
            <input
              type="email"
              placeholder="example@email.com"
              class="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:border-[#145DA0]"
            />
          </div>

          <!-- Phone -->
          <div>
            <label class="block font-medium mb-2">Phone Number</label>
            <input
              type="tel"
              placeholder="+234..."
              class="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:border-[#145DA0]"
            />
          </div>

          <!-- Department -->
          <div>
            <label class="block font-medium mb-2">Department / Institution</label>
            <input
              type="text"
              placeholder="Your department or institution"
              class="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:border-[#145DA0]"
            />
          </div>

          <!-- Membership Type -->
          <div>
            <label class="block font-medium mb-2">Membership Category</label>
            <select
              class="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:border-[#145DA0]"
            >
              <option>Student Member</option>
              <option>Graduate Member</option>
              <option>Professional Member</option>
            </select>
          </div>

          <!-- Participation Interests (Checkboxes) -->
          <div class="md:col-span-2">
            <label class="block font-medium mb-2">Areas of Participation</label>
            <div class="space-y-2">
              <div class="flex items-center">
                <input type="checkbox" id="competitions" value="Competitions" v-model="selectedAreas" class="h-4 w-4 text-[#145DA0] border-gray-300 rounded">
                <label for="competitions" class="ml-2 text-gray-700">Competitions</label>
              </div>

              <div class="flex items-center">
                <input type="checkbox" id="conferences" value="Conferences & Seminars" v-model="selectedAreas" class="h-4 w-4 text-[#145DA0] border-gray-300 rounded">
                <label for="conferences" class="ml-2 text-gray-700">Conferences & Seminars</label>
              </div>

              <div class="flex items-center">
                <input type="checkbox" id="workshops" value="Workshops & Training" v-model="selectedAreas" class="h-4 w-4 text-[#145DA0] border-gray-300 rounded">
                <label for="workshops" class="ml-2 text-gray-700">Workshops & Training</label>
              </div>

              <div class="flex items-center">
                <input type="checkbox" id="leadership" value="Leadership & Volunteering" v-model="selectedAreas" class="h-4 w-4 text-[#145DA0] border-gray-300 rounded">
                <label for="leadership" class="ml-2 text-gray-700">Leadership & Volunteering</label>
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
              class="bg-[#145DA0] text-white px-8 py-3 font-semibold hover:bg-blue-700 transition"
            >
              Register as a Member
            </button>
          </div>
        </form>
      </section>

    </main>
  </section>
</template>

<script setup>
import { ref } from 'vue'

// Reactive array for selected participation areas
const selectedAreas = ref([])

// You can later handle form submission here and include selectedAreas
</script>