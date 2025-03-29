<template>
  <div class="projects w-screen h-full relative flex justify-center">
    <img
      class="background z-0 absolute h-full"
      alt="Background"
      src="@/assets/images/background.png"
    />
    <div class="overflow-hidden h-full text-white w-full sm:max-w-[1080px]">
      <Projects />
    </div>
  </div>
</template>

<script setup lang="ts">
import Projects from '@/components/Projects.vue'
</script>

<style />
