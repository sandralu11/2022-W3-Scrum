<template>
  <div class="mx-auto w-5/6 flex items-center pb-8 pt-20">
    <span class="px-2 text-primary font-nightshade text-3xl">01</span>
    <div class="w-full h-3 bg-gray-50 opacity-75 overflow-hidden ease-in-out">
      <div
        class="bg-primary h-3 transition-all duration-1000"
        :style="progress"
      ></div>
    </div>
    <span class="px-2 text-primary font-nightshade text-3xl">10</span>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const progress = computed(() => {
  const now = route.meta.progress;
  const full = 10;
  const percent = ((now / full) * 100).toString();
  return {
    width: percent + "%",
  };
});
</script>
