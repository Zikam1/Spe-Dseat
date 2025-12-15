<!-- app/layouts/default.vue -->
<template>
  <div class="flex flex-col min-h-screen">
    <!-- Navbar will scroll with page -->
    <Navbar />

    <!-- Page content -->
    <main class="flex-1">
      <NuxtPage />
    </main>
    <!-- <Footer /> -->
  </div>
</template>

<script setup>
import Navbar from '~/components/Navbar.vue'
</script>
