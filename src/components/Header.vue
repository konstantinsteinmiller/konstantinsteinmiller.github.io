<script setup lang="ts"></script>

<template>
  <div class="relative text-white flex justify-between w-full h-16">
    <img
      class="header absolute w-full h-20"
      alt="Header"
      src="@/assets/images/header.png"
    />
    <nav class="w-full text-white text-2xl z-1 flex gap-4 justify-end items-center p-4 px-8">
      <RouterLink to="/">About Me</RouterLink>
      <RouterLink to="/projects">Projects</RouterLink>
    </nav>
  </div>
</template>

<style scoped lang="sass">
.router-link-active
  color: #7f39ca
</style>
