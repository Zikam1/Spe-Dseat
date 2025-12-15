<template>
  <section class="py-24 bg-white text-gray-900">
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <div class="grid lg:grid-cols-2 gap-16 items-center">

        <!-- Left: Text Content -->
        <div>
          <h2 class="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            Who We Are
          </h2>
          <p class="text-gray-700 mb-4 leading-relaxed">
            SPE DSEAT is the Society of Petroleum Engineers’ student chapter
            committed to developing future leaders in energy. We provide
            students and professionals with technical knowledge, mentorship,
            and opportunities to connect with the global energy industry.
          </p>
          <p class="text-gray-600 leading-relaxed">
            Our activities include workshops, research collaborations, technical
            training, and community engagement programs. We bridge the gap
            between academia and industry while promoting sustainability and
            ethical leadership in the energy sector.
          </p>
        </div>

        <!-- Right: Map Image with Floating Markers -->
        <div class="flex justify-center">
          <div class="relative max-w-sm w-full rounded-3xl overflow-hidden shadow-2xl border border-gray-200">
            <!-- Map Image -->
            <img
              src="/assets/map1.png"
              alt="World Map"
              class="w-full h-auto object-cover"
            />
            
            <!-- Gradient overlay for depth -->
            <div class="absolute inset-0 bg-gradient-to-b from-transparent to-white/20 pointer-events-none rounded-3xl"></div>

            <!-- Floating markers -->
            <div class="absolute top-12 left-1/4 w-4 h-4 bg-[#1E7ACB] rounded-full shadow-lg animate-bounce"></div>
            <div class="absolute top-28 right-1/3 w-4 h-4 bg-[#1E7ACB] rounded-full shadow-lg animate-bounce delay-150"></div>
            <div class="absolute bottom-12 left-1/2 w-4 h-4 bg-[#1E7ACB] rounded-full shadow-lg animate-bounce delay-300"></div>
          </div>
        </div>

      </div>
    </div>
  </section>


  <section class="relative py-20 bg-[#050a1e] overflow-hidden">
    <!-- Background Image -->
    <div
      class="absolute inset-0 bg-[url('/assets/df.jpg')] bg-cover bg-center"
    ></div>

    <!-- Dark overlay -->
    <div class="absolute inset-0 bg-black/70"></div>

    <!-- Tory Blue overlay -->
    <div
      class="absolute inset-0 bg-gradient-to-br
             from-[#072A3D]/70 via-[#0B3C5D]/60 to-[#145DA0]/50"
    ></div>

    <!-- Content -->
    <div class="relative max-w-7xl mx-auto px-6 lg:px-8">
      <div class="grid lg:grid-cols-2 gap-14 items-center">

        <!-- LEFT: Foreground Image -->
        <div class="relative">
          <img
            src="/assets/ool.png"
            alt="SPE Mission"
            class="w-full max-w-md h-72 object-cover rounded-3xl
                   shadow-2xl border border-white/10
                   transform transition duration-500 hover:scale-105"
          />

          <!-- Soft blue accent -->
          <div class="absolute -bottom-6 -right-6 w-32 h-32 bg-[#145DA0]/30 rounded-full blur-3xl"></div>
        </div>

        <!-- RIGHT: Mission Text -->
        <div class="space-y-6 text-white">
          <h2
            class="text-3xl md:text-4xl lg:text-5xl font-extrabold
                   transition-colors duration-300 hover:text-[#145DA0]"
          >
            Mission
          </h2>

          <p class="text-white/90 text-lg leading-relaxed max-w-xl">
            Our mission is to empower students and professionals in petroleum engineering
            with technical knowledge, leadership skills, and access to global industry networks.
          </p>

          <p class="text-white/80 text-lg leading-relaxed max-w-xl">
            We foster innovation, ethical leadership, and sustainable energy solutions
            through workshops, mentorship programs, research collaborations,
            and community engagement.
          </p>

          <NuxtLink
            to="/join"
            class="inline-block mt-4 px-6 py-3 rounded-xl
                   bg-[#145DA0] text-white font-semibold
                   hover:bg-[#0B3C5D] transition shadow-lg"
          >
            Join SPE DSEAT
          </NuxtLink>
        </div>

      </div>
    </div>
  </section>


<section class="relative py-20 bg-white">
    <div class="max-w-7xl mx-auto px-6 lg:px-8">

      <!-- Center Title -->
      <div class="text-center max-w-3xl mx-auto mb-16">
        <h2 class="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900">
          Member Benefits
        </h2>
        <p class="mt-4 text-gray-600 text-lg leading-relaxed">
          Becoming a member of SPE DSEAT connects you to a strong professional
          community, hands-on industry exposure, and opportunities that shape
          your future in the energy sector.
        </p>
      </div>

      <!-- Benefits Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

        <!-- Benefit 1 -->
        <div
          class="flex items-center justify-between gap-6 p-8 rounded-2xl
                 bg-white border border-gray-200 shadow-sm
                 hover:shadow-lg hover:border-[#145DA0]/50 transition duration-300"
        >
          <div>
            <h3 class="text-xl font-semibold text-gray-900 mb-2">
              Strong Community
            </h3>
            <p class="text-gray-600 leading-relaxed">
              Connect with like-minded students, professionals, and mentors
              within the global petroleum engineering community.
            </p>
          </div>

          <!-- Icon -->
          <div
            class="flex items-center justify-center w-14 h-14 rounded-xl
                   bg-[#145DA0]/10 text-[#145DA0]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-7 h-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17 20h5v-2a4 4 0 00-5-3.87M9 20H4v-2a4 4 0 015-3.87m8-4a4 4 0 11-8 0 4 4 0 018 0zm-8 0a4 4 0 10-8 0 4 4 0 008 0z"
              />
            </svg>
          </div>
        </div>

        <!-- Benefit 2 -->
        <div
          class="flex items-center justify-between gap-6 p-8 rounded-2xl
                 bg-white border border-gray-200 shadow-sm
                 hover:shadow-lg hover:border-[#145DA0]/50 transition duration-300"
        >
          <div>
            <h3 class="text-xl font-semibold text-gray-900 mb-2">
              Career Development
            </h3>
            <p class="text-gray-600 leading-relaxed">
              Access workshops, technical training, mentorship programs,
              and career resources that prepare you for industry success.
            </p>
          </div>

          <!-- Icon -->
          <div
            class="flex items-center justify-center w-14 h-14 rounded-xl
                   bg-[#145DA0]/10 text-[#145DA0]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-7 h-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 17v-6a3 3 0 013-3h6M9 17H7a2 2 0 01-2-2v-4a2 2 0 012-2h2"
              />
            </svg>
          </div>
        </div>

        <!-- Benefit 3 -->
        <div
          class="flex items-center justify-between gap-6 p-8 rounded-2xl
                 bg-white border border-gray-200 shadow-sm
                 hover:shadow-lg hover:border-[#145DA0]/50 transition duration-300"
        >
          <div>
            <h3 class="text-xl font-semibold text-gray-900 mb-2">
              Global Exposure
            </h3>
            <p class="text-gray-600 leading-relaxed">
              Participate in international SPE programs, conferences,
              and research collaborations across the globe.
            </p>
          </div>

          <!-- Icon -->
          <div
            class="flex items-center justify-center w-14 h-14 rounded-xl
                   bg-[#145DA0]/10 text-[#145DA0]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-7 h-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
        </div>

      </div>
    </div>
  </section>


</template>