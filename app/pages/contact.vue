<template>
  <section class="bg-white text-gray-900">
    <!-- Header -->
    <header class="bg-[#145DA0] py-20 px-6">
      <div class="max-w-6xl mx-auto text-white">
        <h1 class="text-4xl md:text-5xl font-bold mb-4">
          Contact & Participation
        </h1>
        <p class="max-w-3xl text-lg text-blue-100">
          Society of Petroleum Engineers – Department of Systems Engineering
          and Applied Technology (SPE DSEAT)
        </p>
      </div>
    </header>

    <!-- Main Content -->
    <main class="max-w-6xl mx-auto px-6 py-20 space-y-20">
      
      <!-- Official Communication -->
      <section>
        <h2 class="text-2xl font-semibold text-[#145DA0] mb-6">
          Official Communication
        </h2>

        <p class="text-gray-800 leading-relaxed max-w-4xl mb-10">
          SPE DSEAT coordinates academic programmes, technical competitions,
          conferences, and professional development initiatives. Students,
          industry professionals, and partner organisations are encouraged
          to engage through the official channels listed below.
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h3 class="font-semibold mb-2">Office Address</h3>
            <p>
              Department of Systems Engineering and Applied Technology<br />
              University Campus, Nigeria
            </p>
          </div>

          <div>
            <h3 class="font-semibold mb-2">Email</h3>
            <p>info@spedseat.org</p>
          </div>

          <div>
            <h3 class="font-semibold mb-2">Telephone</h3>
            <p>+234 800 000 0000</p>
          </div>

          <div>
            <h3 class="font-semibold mb-2">Office Hours</h3>
            <p>
              Monday – Friday<br />
              9:00 AM – 4:00 PM
            </p>
          </div>
        </div>
      </section>

      <!-- Participation & Registration -->
      <section>
        <h2 class="text-2xl font-semibold text-[#145DA0] mb-6">
          Programmes & Registration
        </h2>

        <p class="text-gray-800 leading-relaxed max-w-4xl mb-12">
          Interested participants may register for SPE DSEAT competitions,
          conferences, seminars, and professional training programmes
          through the official registration pages below.
        </p>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Competitions -->
          <div class="border border-gray-200 p-6">
            <h3 class="font-semibold mb-3">Student Competitions</h3>
            <p class="text-sm text-gray-700 mb-4">
              Technical and innovation-based competitions organised by SPE DSEAT.
            </p>
            <NuxtLink
              to="/competitions"
              class="inline-block text-[#145DA0] font-medium hover:underline"
            >
              View & Register →
            </NuxtLink>
          </div>

          <!-- Events -->
          <div class="border border-gray-200 p-6">
            <h3 class="font-semibold mb-3">Conferences & Seminars</h3>
            <p class="text-sm text-gray-700 mb-4">
              Academic conferences, guest lectures, and professional seminars.
            </p>
            <NuxtLink
              to="/events"
              class="inline-block text-[#145DA0] font-medium hover:underline"
            >
              View & Register →
            </NuxtLink>
          </div>

          <!-- Workshops -->
          <div class="border border-gray-200 p-6">
            <h3 class="font-semibold mb-3">Workshops & Training</h3>
            <p class="text-sm text-gray-700 mb-4">
              Skills development and technical training programmes.
            </p>
            <NuxtLink
              to="/workshops"
              class="inline-block text-[#145DA0] font-medium hover:underline"
            >
              View & Register →
            </NuxtLink>
          </div>
        </div>
      </section>
    </main>
  </section>
</template>

<script setup>
// Static institutional page
</script>