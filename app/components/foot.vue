<template>
  <div class="font-sans">

    <!-- =======================
         NEWSLETTER SECTION
         ======================= -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div
          class="relative overflow-hidden rounded-3xl border border-gray-200
                 bg-gradient-to-br from-white via-gray-50 to-gray-100 p-10 md:p-14"
        >
          <!-- Decorative Accent -->
          <div class="absolute -top-10 -right-10 w-40 h-40 bg-[#145DA0]/10 rounded-full blur-3xl"></div>
          <div class="absolute -bottom-10 -left-10 w-32 h-32 bg-[#145DA0]/10 rounded-full blur-3xl"></div>

          <div class="relative z-10 grid lg:grid-cols-2 gap-10 items-center">
            <!-- Text -->
            <div>
              <h2 class="text-3xl md:text-4xl font-extrabold text-gray-900">
                Subscribe to Our Newsletter
              </h2>
              <p class="mt-4 text-gray-600 leading-relaxed max-w-xl">
                Get the latest SPE DSEAT news, upcoming events, technical programs,
                and opportunities delivered directly to your inbox.
              </p>
            </div>

            <!-- Form -->
            <form class="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email address"
                class="flex-1 px-5 py-4 rounded-xl border border-gray-300
                       focus:outline-none focus:ring-2 focus:ring-[#145DA0]"
              />
              <button
                type="submit"
                class="px-8 py-4 rounded-xl bg-[#145DA0] text-white font-semibold
                       hover:bg-[#0B3C5D] transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>

    <!-- =======================
         FOOTER
         ======================= -->
    <footer class="bg-[#050a1e] text-white">
    <div class="max-w-7xl mx-auto px-6 lg:px-8 py-16">
      <div class="grid md:grid-cols-3 gap-12">

        <!-- Left: Logo & Description -->
        <div class="space-y-6">
          <div class="flex items-center gap-3">
            <img src="/assets/sspp.png" alt="SPE DSEAT Logo" class="h-10 w-auto" />
            <span class="text-xl font-bold">SPE DSEAT</span>
          </div>
          <p class="text-white/70 leading-relaxed">
            Advancing petroleum engineering education, leadership, and sustainable energy
            development through innovation, mentorship, and global collaboration.
          </p>
          <div class="flex gap-4 mt-2">
            <a href="#" class="p-2 rounded-full hover:bg-[#145DA0]/20 transition">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.28 4.28 0 0 0 1.88-2.37 8.48 8.48 0 0 1-2.71 1.03 4.24 4.24 0 0 0-7.24 3.86 12 12 0 0 1-8.73-4.43 4.23 4.23 0 0 0 1.31 5.66 4.2 4.2 0 0 1-1.92-.53v.05a4.25 4.25 0 0 0 3.4 4.16 4.28 4.28 0 0 1-1.91.07 4.26 4.26 0 0 0 3.97 2.96 8.5 8.5 0 0 1-5.28 1.82A8.73 8.73 0 0 1 2 19.54a12 12 0 0 0 6.29 1.84c7.55 0 11.68-6.26 11.68-11.69 0-.18-.01-.36-.02-.54A8.36 8.36 0 0 0 24 4.56a8.2 8.2 0 0 1-2.36.65z"/>
              </svg>
            </a>
            <a href="#" class="p-2 rounded-full hover:bg-[#145DA0]/20 transition">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.04c-5.5 0-9.96 4.46-9.96 9.96 0 4.41 3.59 9.96 9.96 9.96 5.41 0 9.96-5.55 9.96-9.96 0-5.5-4.55-9.96-9.96-9.96zm0 17.92a7.96 7.96 0 1 1 0-15.92 7.96 7.96 0 0 1 0 15.92zm-1.99-8.8v4.52h1.93v-2.9c.56-.21 1.16-.44 1.61-.88.45-.44.81-1.04.81-1.88 0-1.51-1.23-2.08-2.52-2.08-1.46 0-2.27.96-2.27 2.33h1.44c0-.36.03-.69.34-.69.31 0 .33.29.33.63z"/>
              </svg>
            </a>
            <a href="#" class="p-2 rounded-full hover:bg-[#145DA0]/20 transition">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14a5 5 0 0 0-5 5v14a5 5 0 0 0 5 5h14a5 5 0 0 0 5-5v-14a5 5 0 0 0-5-5zm-11 19h-3v-9h3v9zm-1.5-10.3a1.72 1.72 0 1 1 0-3.44 1.72 1.72 0 0 1 0 3.44zm13.5 10.3h-3v-4.5c0-1.07-.02-2.44-1.49-2.44-1.5 0-1.73 1.17-1.73 2.38v4.56h-3v-9h2.88v1.23h.04a3.15 3.15 0 0 1 2.84-1.56c3.03 0 3.59 1.99 3.59 4.57v5.76z"/>
              </svg>
            </a>
          </div>
        </div>

        <!-- Middle: Quick Links -->
        <div>
          <h4 class="text-lg font-semibold mb-6">Quick Links</h4>
          <ul class="space-y-4 text-white/80">
            <li><NuxtLink to="/" class="hover:text-[#145DA0] transition">Home</NuxtLink></li>
            <li><NuxtLink to="/about" class="hover:text-[#145DA0] transition">About</NuxtLink></li>
            <li><NuxtLink to="/research" class="hover:text-[#145DA0] transition">Membership</NuxtLink></li>
            <li><NuxtLink to="/contact" class="hover:text-[#145DA0] transition">Contact</NuxtLink></li>
          </ul>
        </div>

        <!-- Right: Contact -->
        <div>
          <h4 class="text-lg font-semibold mb-6">Contact</h4>
          <ul class="space-y-4 text-white/80">
            <li><span class="font-medium">Email:</span> info@spedseat.org</li>
            <li><span class="font-medium">Phone:</span> +234 XXX XXX XXXX</li>
            <li><span class="font-medium">Location:</span> Nigeria</li>
          </ul>
        </div>

      </div>

      <!-- Bottom -->
      <div class="border-t border-white/20 mt-16 pt-6 flex flex-col md:flex-row justify-between items-center text-white/70 text-sm gap-4">
        <p>© {{ new Date().getFullYear() }} SPE DSEAT. All rights reserved.</p>
        <div class="flex gap-4">
          <a href="#" class="hover:text-[#145DA0] transition">Facebook</a>
          <a href="#" class="hover:text-[#145DA0] transition">LinkedIn</a>
          <a href="#" class="hover:text-[#145DA0] transition">Twitter</a>
        </div>
      </div>
    </div>
  </footer>
  </div>
</template>