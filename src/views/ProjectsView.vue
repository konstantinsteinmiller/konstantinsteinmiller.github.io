<template>
  <div class="projects w-full h-full relative flex justify-center">
    <img
      class="background z-0 absolute h-full"
      alt="Background"
      src="@/assets/images/background.png"
    />
    <div class="text-white w-full max-w-[1080px]">
      <Projects />
    </div>
  </div>
</template>

<script setup lang="ts">
import Projects from '@/components/Projects.vue'
</script>

<style />
