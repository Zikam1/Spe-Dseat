<template>
  <!-- <section class="py-24 bg-gray-50 text-gray-900"> -->
    <!-- <div class="max-w-7xl mx-auto px-6 lg:px-8"> -->
      <!-- <div class="grid lg:grid-cols-2 gap-16 items-center"> -->

        <!-- Left: Text Content -->
        <!-- <div>
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
        </div> -->

        <!-- Right: Map Image with Floating Markers -->
        <!-- <div class="flex justify-center"> -->
          <!-- <div class="relative max-w-sm w-full rounded-3xl overflow-hidden shadow-2xl border border-gray-200"> -->
            <!-- Map Image -->
            <!-- <img
              src="/assets/map1.png"
              alt="World Map"
              class="w-full h-auto object-cover"
            /> -->
            
            <!-- Gradient overlay for depth -->
            <!-- <div class="absolute inset-0 bg-gradient-to-b from-transparent to-white/20 pointer-events-none rounded-3xl"></div> -->

            <!-- Floating markers -->
            <!-- <div class="absolute top-12 left-1/4 w-4 h-4 bg-[#1E7ACB] rounded-full shadow-lg animate-bounce"></div>
            <div class="absolute top-28 right-1/3 w-4 h-4 bg-[#1E7ACB] rounded-full shadow-lg animate-bounce delay-150"></div>
            <div class="absolute bottom-12 left-1/2 w-4 h-4 bg-[#1E7ACB] rounded-full shadow-lg animate-bounce delay-300"></div> -->
          <!-- </div> -->
        <!-- </div> -->

      <!-- </div> -->
    <!-- </div> -->
  <!-- </section> -->


   <section class="bg-white p-6 md:p-12 rounded-2xl shadow-lg max-w-7xl mx-auto my-12">
    <!-- Title -->
    <h2 class="text-2xl md:text-3xl font-bold text-[#0B3C8A] mb-4">
      What DSEATS Delivers
    </h2>

    <!-- Description -->
    <p class="text-gray-700 mb-8 text-sm md:text-base">
      DSEATS is a knowledge-sharing and learning forum that bridges analytics with engineering execution—supporting SPE disciplines with practical, scalable approaches to data, models, and digital transformation.
    </p>

    <!-- Cards -->
    <div class="grid gap-6 md:grid-cols-3">
      <!-- Knowledge Exchange -->
      <div class="p-4 rounded-xl border border-gray-200 bg-gray-50 hover:shadow-lg transition duration-300">
        <h3 class="font-semibold text-[#0B3C8A] mb-2">Knowledge Exchange</h3>
        <p class="text-gray-600 text-sm">
          Workshops, webinars, and community discussions that connect practitioners across domains.
        </p>
      </div>

      <!-- Best Practices -->
      <div class="p-4 rounded-xl border border-gray-200 bg-gray-50 hover:shadow-lg transition duration-300">
        <h3 class="font-semibold text-[#0B3C8A] mb-2">Best Practices</h3>
        <p class="text-gray-600 text-sm">
          Patterns for data readiness, governance, and robust model deployment in operational environments.
        </p>
      </div>

      <!-- Collaboration -->
      <div class="p-4 rounded-xl border border-gray-200 bg-gray-50 hover:shadow-lg transition duration-300">
        <h3 class="font-semibold text-[#0B3C8A] mb-2">Collaboration</h3>
        <p class="text-gray-600 text-sm">
          Hub-and-spoke collaboration with SPE sections, universities, and industry partners globally.
        </p>
      </div>
    </div>
  </section>


  <section class="bg-white p-6 md:p-12 rounded-2xl shadow-lg max-w-7xl mx-auto my-12">
    <!-- Title -->
    <div class="flex flex-col md:flex-row md:justify-between items-start md:items-center mb-6">
      <h2 class="text-2xl md:text-3xl font-bold text-[#0B3C8A]">
        AI4Energy Series
      </h2>
      <!-- Optional Logo on the right -->
      <!-- <img src="/assets/ai4energy-logo.png" alt="AI4Energy Logo" class="w-32 mt-4 md:mt-0" /> -->
    </div>

    <!-- Description -->
    <p class="text-gray-700 mb-8 text-sm md:text-base">
      A regional workshop series convening executives, AI leaders, domain experts, and students to share practical applications, identify barriers, and accelerate responsible adoption of AI across energy.
    </p>

    <!-- Cards Grid -->
    <div class="grid gap-6 md:grid-cols-2">
      <!-- Africa Workshop -->
      <div class="p-4 rounded-xl border border-gray-200 bg-gray-50 hover:shadow-lg transition duration-300">
        <h3 class="font-semibold text-blue-700 mb-2">AI4Energy Africa Workshop</h3>
        <p class="text-gray-600 text-sm mb-2">
          <strong>Theme:</strong> Harnessing AI for Sustainable Energy Solutions in Africa—Opportunities, Challenges, and Regional Impact
        </p>
        <ul class="text-gray-600 text-sm mb-2 list-disc list-inside">
          <li><strong>Date:</strong> April 15, 2026</li>
          <li><strong>Location:</strong> Nairobi Innovation Hub, Nairobi, Kenya</li>
          <li><strong>Format:</strong> One-day workshop (keynote + themed talks + panel + breakouts)</li>
        </ul>
        <div class="flex flex-wrap gap-2 mt-2">
          <span class="px-3 py-1.5 text-xs rounded-full bg-blue-100 text-blue-800">AI for Energy</span>
          <span class="px-3 py-1.5 text-xs rounded-full bg-blue-100 text-blue-800">Sustainability</span>
          <span class="px-3 py-1.5 text-xs rounded-full bg-blue-100 text-blue-800">Responsible AI</span>
        </div>
        <button class="mt-3 px-4 py-1.5 rounded bg-blue-50 text-blue-700 text-xs hover:bg-blue-100 transition">Registration & Details</button>
      </div>

      <!-- Africa Leadership -->
      <div class="p-4 rounded-xl border border-gray-200 bg-gray-50 hover:shadow-lg transition duration-300">
        <h3 class="font-semibold text-blue-700 mb-2">AI4Energy Africa Leadership</h3>
        <p class="text-gray-600 text-sm mb-2">
          <strong>2026 (in development):</strong> Build regional energy leadership by catalyzing AI4Energy efforts and Technical Section growth across Africa.
        </p>
        <ul class="text-gray-600 text-sm mb-2 list-disc list-inside">
          <li><strong>Focus:</strong> Regional leadership, talent pipeline, and cross-sector collaboration</li>
          <li><strong>Status:</strong> Program concept development (details to be announced)</li>
          <li><strong>Planned:</strong> 2026</li>
        </ul>
        <div class="flex flex-wrap gap-2 mt-2">
          <span class="px-3 py-1.5 text-xs rounded-full bg-blue-100 text-blue-800">Regional Growth</span>
          <span class="px-3 py-1.5 text-xs rounded-full bg-blue-100 text-blue-800">Academia/Industry</span>
          <span class="px-3 py-1.5 text-xs rounded-full bg-blue-100 text-blue-800">Capacity Building</span>
        </div>
        <button class="mt-3 px-4 py-1.5 rounded bg-blue-50 text-blue-700 text-xs hover:bg-blue-100 transition">Help Shape Africa Program</button>
      </div>

      <!-- Africa Collaboration -->
      <div class="p-4 rounded-xl border border-gray-200 bg-gray-50 hover:shadow-lg transition duration-300">
        <h3 class="font-semibold text-blue-700 mb-2">Africa Regional Collaboration</h3>
        <p class="text-gray-600 text-sm mb-2">
          Collaborating with local partners and SPE sections to focus on practical AI applications and knowledge exchange across the continent.
        </p>
        <ul class="text-gray-600 text-sm mb-2 list-disc list-inside">
          <li><strong>Region:</strong> Africa (multi-country collaboration)</li>
          <li><strong>Format:</strong> One-day workshops and networking sessions</li>
          <li><strong>Partners:</strong> Local SPE sections and energy organizations</li>
        </ul>
        <div class="flex flex-wrap gap-2 mt-2">
          <span class="px-3 py-1.5 text-xs rounded-full bg-blue-100 text-blue-800">Practical AI</span>
          <span class="px-3 py-1.5 text-xs rounded-full bg-blue-100 text-blue-800">Community Exchange</span>
          <span class="px-3 py-1.5 text-xs rounded-full bg-blue-100 text-blue-800">Regional Partners</span>
        </div>
        <button class="mt-3 px-4 py-1.5 rounded bg-blue-50 text-blue-700 text-xs hover:bg-blue-100 transition">Event Page</button>
      </div>

      <!-- Next Regions -->
      <div class="p-4 rounded-xl border border-gray-200 bg-gray-50 hover:shadow-lg transition duration-300">
        <h3 class="font-semibold text-blue-700 mb-2">Next Regions</h3>
        <p class="text-gray-600 text-sm mb-2">
          The AI4Energy Africa series will continue expanding across other African regions as local teams form. If you’d like to lead a regional edition, reach out.
        </p>
        <ul class="text-gray-600 text-sm mb-2 list-disc list-inside">
          <li><strong>Looking for:</strong> Organizers, speakers, sponsors, and academic partners</li>
          <li><strong>Goal:</strong> Repeatable workshop playbook with regional customization</li>
        </ul>
        <div class="flex flex-wrap gap-2 mt-2">
          <span class="px-3 py-1.5 text-xs rounded-full bg-blue-100 text-blue-800">Volunteer Leadership</span>
          <span class="px-3 py-1.5 text-xs rounded-full bg-blue-100 text-blue-800">Playbook</span>
          <span class="px-3 py-1.5 text-xs rounded-full bg-blue-100 text-blue-800">Scale</span>
        </div>
        <button class="mt-3 px-4 py-1.5 rounded bg-blue-50 text-blue-700 text-xs hover:bg-blue-100 transition">Contact DSEATS</button>
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
            to="/register"
            class="inline-block mt-4 px-6 py-3 rounded-xl
                   bg-[#145DA0] text-white font-semibold
                   hover:bg-[#0B3C5D] transition shadow-lg"
          >
            Join DSEATs Africa
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