<template>
  <section class="py-24 bg-gradient-to-b from-white to-slate-100">
    <div class="max-w-7xl mx-auto px-6">

      <!-- Header -->
      <div class="text-center mb-20">
        <h2 class="text-4xl md:text-5xl font-bold text-slate-900">
          Board Members
        </h2>
        <div class="w-20 h-1 bg-[#145DA0] mx-auto mt-4 rounded-full"></div>
        <p class="text-slate-500 mt-6 max-w-2xl mx-auto">
          Meet the experienced professionals guiding our organization with vision, integrity, and leadership.
        </p>
      </div>

      <!-- Members Grid -->
      <div class="grid md:grid-cols-3 gap-10">

        <div
          v-for="member in members"
          :key="member.name"
          class="group relative bg-white rounded-3xl p-8 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition duration-500 flex flex-col items-center text-center"
        >

          <!-- Top Accent -->
          <div class="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#145DA0] to-[#145DA0] rounded-t-3xl"></div>

          <!-- Image -->
          <div class="flex justify-center">
            <img
              :src="member.image"
              class="w-32 h-32 object-cover rounded-full border-4 border-white shadow-lg group-hover:scale-105 transition duration-500"
            />
          </div>

          <!-- Content -->
          <div class="mt-6 flex flex-col items-center text-center">
            <h3 class="text-xl font-semibold text-slate-800">
              {{ member.name }}
            </h3>

            <p class="text-slate-600 text-sm leading-relaxed mt-2">
              {{ member.bio }}
            </p>

            <div class="w-10 h-1 bg-slate-200 my-4 rounded"></div>

            <p class="text-[#145DA0] text-sm font-medium">
              {{ member.role }}
            </p>
          </div>
        </div>

      </div>

      <!-- Bottom Text -->
      <div class="mt-20 text-center max-w-3xl mx-auto">
        <p class="text-slate-600">
          Our board combines decades of leadership across multiple industries,
          ensuring innovation, accountability, and sustainable growth.
        </p>
      </div>

    </div>
  </section>
</template>

<script setup>
const members = [
  { name: "Elias Arochukwu", role: "Chairman", image: "/assets/Elias.png", bio: "Geoscience Discipline Manager, Shell Petroleum Development Company" },
  { name: "Chijoke Ibeh", role: "Co-Chairman", image: "/assets/Chijioke.png", bio: "Technical Mentor, Chevron" },
  { name: "Stella Egwim-Ogbodu", role: "Board Member", image: "/assets/Stella.png", bio: "Senior Petrophysicist, Shell Petroleum Development Company" },
  { name: "Joy Ugoyah", role: "Board Member", image: "/assets/Joy.png", bio: "Project Development, Total Energies (Deep Offshore)" },
  { name: "Michael Aku", role: "Board Member", image: "/assets/Michael.png", bio: "Artificial Intelligence (AI) Researcher, University College London" },
  { name: "Alex O. Mensah", role: "Board Member", image: "/assets/Alex.png", bio: "Geologist, Schlumberger" },
  { name: "Olatunde Mosobalaje", role: "Board Member", image: "/assets/Olatunde.png", bio: "Senior Lecturer, Covenant University" },
  { name: "Anita Badagawa Mpora", role: "Board Member", image: "/assets/Anita.png", bio: "Upstream Cost Monitoring Officer, Petroleum Authority Uganda" },
  { name: "Michelle Boit", role: "Board Member", image: "/assets/Michelle.png", bio: "Operations Manager, Amazon" }
]
</script>