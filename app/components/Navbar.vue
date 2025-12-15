<template>
  <header class="w-full bg-white/95 backdrop-blur shadow-sm sticky top-0 z-50">
    <nav class="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">

      <!-- Logo (Increased Size) -->
      <NuxtLink to="/" class="flex items-center gap-3">
        <img
          src="/assets/sspp.png"
          alt="SPE DSEAT Logo"
          class="h-12 md:h-14 w-auto"
        />
      </NuxtLink>

      <!-- Desktop Menu -->
      <ul class="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">
        <li>
          <NuxtLink to="/" class="hover:text-[#145DA0] transition">
            Home
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/about" class="hover:text-[#145DA0] transition">
            About
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/research" class="hover:text-[#145DA0] transition">
            Membership
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/contact" class="hover:text-[#145DA0] transition">
            Contact
          </NuxtLink>
        </li>
      </ul>

      <!-- CTA -->
      <NuxtLink
        to="/register"
        class="hidden md:inline-flex items-center rounded-xl px-5 py-2 text-sm font-semibold text-white transition hover:opacity-90"
        style="background:#145DA0"
      >
        Register
      </NuxtLink>

      <!-- Mobile Menu Button -->
      <button
        @click="isOpen = !isOpen"
        class="md:hidden inline-flex items-center justify-center rounded-lg border border-gray-200 p-2 text-gray-700"
        aria-label="Open Menu"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
          viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </nav>

    <!-- Mobile Menu -->
    <div v-if="isOpen" class="md:hidden bg-white border-t">
      <ul class="flex flex-col px-4 py-4 gap-4 text-sm font-medium text-gray-700">
        <li><NuxtLink to="/" @click="close">Home</NuxtLink></li>
        <li><NuxtLink to="/about" @click="close">About</NuxtLink></li>
        <li><NuxtLink to="/research" @click="close">Membership</NuxtLink></li>
        <li><NuxtLink to="/contact" @click="close">Contact</NuxtLink></li>

        <li class="pt-2">
          <NuxtLink
            to="/join"
            class="flex w-full justify-center rounded-xl px-5 py-2 text-white transition"
            style="background:#145DA0"
            @click="close"
          >
            Register
          </NuxtLink>
        </li>
      </ul>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'

const isOpen = ref(false)
const close = () => {
  isOpen.value = false
}
</script>
