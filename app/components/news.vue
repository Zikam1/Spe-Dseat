<template>
  <section class="py-20 bg-gray-100">
    <div class="max-w-7xl mx-auto px-6 lg:px-8">

      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto mb-16">
        <h2 class="text-3xl md:text-4xl font-extrabold text-gray-900">
          News
        </h2>
        <p class="mt-4 text-lg text-gray-600 leading-relaxed">
          Stay informed with the latest activities, programs, and milestones
          from SPE DSEAT throughout the year.
        </p>
      </div>

      <!-- News Cards -->
      <div class="grid gap-10 md:grid-cols-2 lg:grid-cols-3">

        <!-- Card 1 -->
        <div
          class="group rounded-2xl overflow-hidden border border-gray-200
                 hover:shadow-xl transition duration-300"
        >
          <!-- Image -->
          <div class="relative h-52 overflow-hidden">
            <!-- <img
              src="/assets/news1.jpg"
              alt="Workshop"
              class="w-full h-full object-cover group-hover:scale-105 transition duration-500"
            /> -->
            <div class="absolute inset-0 bg-[#145DA0]/20"></div>
          </div>

          <!-- Content -->
          <div class="p-6">
            <span class="text-sm font-semibold text-[#145DA0]">
              January 2025
            </span>
            <h3 class="mt-2 text-xl font-semibold text-gray-900">
              Technical Training Workshop
            </h3>
            <p class="mt-3 text-gray-600 leading-relaxed">
              SPE DSEAT hosted a hands-on technical workshop focused on
              petroleum engineering fundamentals and industry practices.
            </p>
          </div>
        </div>

        <!-- Card 2 -->
        <div
          class="group rounded-2xl overflow-hidden border border-gray-200
                 hover:shadow-xl transition duration-300"
        >
          <!-- Image -->
          <div class="relative h-52 overflow-hidden">
            <!-- <img
              src="/assets/news2.jpg"
              alt="Seminar"
              class="w-full h-full object-cover group-hover:scale-105 transition duration-500"
            /> -->
            <div class="absolute inset-0 bg-[#145DA0]/20"></div>
          </div>

          <!-- Content -->
          <div class="p-6">
            <span class="text-sm font-semibold text-[#145DA0]">
              March 2025
            </span>
            <h3 class="mt-2 text-xl font-semibold text-gray-900">
              Industry Seminar Series
            </h3>
            <p class="mt-3 text-gray-600 leading-relaxed">
              Professionals from the energy sector shared insights on
              innovation, sustainability, and career development.
            </p>
          </div>
        </div>

        <!-- Card 3 -->
        <div
          class="group rounded-2xl overflow-hidden border border-gray-200
                 hover:shadow-xl transition duration-300"
        >
          <!-- Image -->
          <div class="relative h-52 overflow-hidden">
            <!-- <img
              src="/assets/news3.jpg"
              alt="Conference"
              class="w-full h-full object-cover group-hover:scale-105 transition duration-500"
            /> -->
            <div class="absolute inset-0 bg-[#145DA0]/20"></div>
          </div>

          <!-- Content -->
          <div class="p-6">
            <span class="text-sm font-semibold text-[#145DA0]">
              June 2025
            </span>
            <h3 class="mt-2 text-xl font-semibold text-gray-900">
              Student Conference Participation
            </h3>
            <p class="mt-3 text-gray-600 leading-relaxed">
              Members represented SPE DSEAT at national and international
              conferences, strengthening global connections.
            </p>
          </div>
        </div>

      </div>
    </div>
  </section>

  <section class="w-full">
    <div class="grid lg:grid-cols-2">

      <!-- LEFT: Large Image -->
      <div class="relative h-80 md:h-[420px] lg:h-[480px]">
        <img
          src="/assets/hg.jpg"
          alt="SPE Awards"
          class="w-full h-full object-cover"
        />
        <!-- Subtle dark overlay for polish -->
        <div class="absolute inset-0 bg-black/20"></div>
      </div>

      <!-- RIGHT: Blue Background + Text -->
      <div class="flex items-center bg-[#145DA0] px-8 md:px-16">
        <div class="max-w-xl text-white">

          <span class="inline-block mb-4 text-sm font-semibold uppercase tracking-wider text-white/80">
            Recognition
          </span>

          <h2 class="text-3xl md:text-4xl font-extrabold leading-tight">
            Awards from Establishment
          </h2>

          <p class="mt-5 text-lg text-white/90 leading-relaxed">
            Since its establishment, SPE DSEAT has received notable awards
            recognizing excellence in leadership, academic impact, and
            contributions to petroleum engineering education and innovation.
          </p>

          <p class="mt-4 text-white/80 leading-relaxed">
            These recognitions reflect our commitment to professionalism,
            technical development, and continuous engagement with the
            global energy community.
          </p>

        </div>
      </div>

    </div>
  </section>

</template>