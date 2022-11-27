<template>
  <div
    class="bg-[url('./assets/bg-start.png')] h-screen bg-no-repeat bg-contain bg-center bg-main"
  >
    <main class="max-w-6xl mx-auto h-screen">
      <Progressbar />
      <router-view />
    </main>
  </div>
</template>

<script setup>
import Progressbar from "./components/progressbar.vue";
</script>

<style>
#app {
  height: 100vh;
}
</style>
