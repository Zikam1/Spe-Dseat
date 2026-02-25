<template>
  <div class="bg-slate-100 p-4">
    <section
      class="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#0B3C8A] via-[#0A3A7A] to-[#072A5E] text-white"
    >
      <!-- Background image -->
      <div
        class="absolute inset-0 bg-[url('/assets/ref.jpg')] bg-cover bg-center opacity-20"
      ></div>

      <!-- Glow effect -->
      <div class="absolute -top-20 -right-20 w-72 h-72 bg-blue-400/20 blur-3xl rounded-full"></div>

      <div class="relative z-10 grid lg:grid-cols-2 gap-6 items-center px-6 py-8 md:px-10 md:py-10">
        <!-- LEFT CONTENT -->
        <div>
          <h1 class="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight">
            SPE Data Science & Engineering Analytics Africa
            <span class="text-blue-300">(DSEATS Africa)</span>
          </h1>

          <p class="mt-3 text-blue-100 max-w-xl text-sm md:text-base">
            DSEATS Africa is a professional community empowering engineers, data scientists, and analytics professionals across Africa’s energy sector. We connect advanced analytics, AI/ML, automation, and engineering expertise to optimize performance, enhance reliability, and drive sustainable outcomes.
          </p>

          <!-- Pill Areas of Focus -->
          <div class="mt-5 flex flex-wrap gap-2">
            <span class="px-3 py-1.5 rounded-full text-xs md:text-sm font-medium bg-white/10 border border-white/30 backdrop-blur hover:bg-white/20 transition">
              AI & Machine Learning
            </span>
            <span class="px-3 py-1.5 rounded-full text-xs md:text-sm font-medium bg-white/10 border border-white/30 backdrop-blur hover:bg-white/20 transition">
              Generative AI
            </span>
            <span class="px-3 py-1.5 rounded-full text-xs md:text-sm font-medium bg-white/10 border border-white/30 backdrop-blur hover:bg-white/20 transition">
              Data Governance
            </span>
            <span class="px-3 py-1.5 rounded-full text-xs md:text-sm font-medium bg-white/10 border border-white/30 backdrop-blur hover:bg-white/20 transition">
              Responsible AI
            </span>
            <span class="px-3 py-1.5 rounded-full text-xs md:text-sm font-medium bg-white/10 border border-white/30 backdrop-blur hover:bg-white/20 transition">
              Decision Intelligence
            </span>
          </div>

          <!-- Buttons -->
          <div class="mt-6 flex flex-wrap gap-3">
            <NuxtLink
              to="/register"
              class="px-5 py-2.5 rounded-lg bg-white text-[#0B3C8A] font-semibold shadow-lg hover:scale-105 hover:shadow-xl transition duration-300"
            >
              Join DSEATS Africa
            </NuxtLink>

            <NuxtLink
              to="/board"
              class="px-5 py-2.5 rounded-lg bg-white/10 border border-white/30 backdrop-blur font-semibold hover:bg-white/20 transition duration-300"
            >
              Meet the Leadership
            </NuxtLink>
          </div>
        </div>

        <!-- RIGHT LOGO -->
        <div class="flex justify-end mt-6 lg:mt-0">
          <div
            class="relative w-24 h-24 sm:w-32 sm:h-32 md:w-44 md:h-44 lg:w-72 lg:h-72 rounded-full flex items-center justify-center"
          >
            <!-- Gradient border (scales with container) -->
            <div class="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-400 to-cyan-300 blur-md opacity-40"></div>

            <!-- Image -->
            <div class="relative w-full h-full rounded-full overflow-hidden bg-white shadow-2xl">
              <img src="/assets/ref.jpg" alt="SPE DSEATS Africa Logo" class="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>