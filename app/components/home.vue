<template>
  <div class="bg-slate-950 text-slate-100 font-sans">
    <!-- HERO SECTION -->
    <section
      class="relative h-[85vh] flex items-center justify-center
             bg-[url('/assets/ref.jpg')] bg-cover bg-center"
    >
      <!-- Tory Blue Overlay -->
      <div
        class="absolute inset-0
               bg-gradient-to-br from-[#072A3D]/90 via-[#0B3C5D]/70 to-[#145DA0]/50"
      ></div>

      <!-- Curved Bottom Separator -->
      <div class="absolute bottom-0 w-full overflow-hidden leading-[0] rotate-180">
        <svg
          class="relative block w-full h-20 md:h-28"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
        >
          <path
            d="M321.39,56.9C161.16,77,0,119.5,0,119.5V0H1200V119.5s-161.16-42.5-321.39-62.6C720.92,36.4,600,67.2,479.08,67.2,358.16,67.2,321.39,56.9,321.39,56.9Z"
            fill="#020617"
          />
        </svg>
      </div>

      <!-- Content Card -->
      <div
        class="relative z-10 max-w-3xl text-center px-6 sm:px-12 py-10 rounded-3xl
               backdrop-blur-xl bg-white/5 border border-white/10 shadow-2xl"
      >
        <!-- Badge -->
        <span
          class="inline-block mb-4 px-4 py-1.5 rounded-full text-sm font-medium"
          style="
            color:#FFFFFF;
            background:rgba(30,122,203,0.1);
            border:1px solid rgba(30,122,203,0.35);
          "
        >
          Society of Petroleum Engineers
        </span>

        <!-- Heading -->
        <h1
          class="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight"
        >
          SPE <span style="color:#1E7ACB">DSEAT</span>
        </h1>

        <!-- Subtitle -->
        <p class="mt-5 text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto">
          Advancing petroleum engineering knowledge, innovation, leadership,
          and sustainable energy solutions through research, training, and
          industry collaboration.
        </p>
      </div>
    </section>
  </div>
</template>
