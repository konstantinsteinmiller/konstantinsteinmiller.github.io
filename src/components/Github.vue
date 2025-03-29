<script setup lang="ts">
import GithubImg from '@/assets/documentation/github-activity.png'
</script>

<template>
  <div class="projects relative flex flex-col justify-between items-center w-full h-auto sm:pt-8 pt-12 pb-8">
    <h3 class="inline text-3xl pb-4 vue-text">Github</h3>

    <div class="flex justify-center pb-4 px-2 w-full">
      <img
        :src="GithubImg"
        class="rounded-lg"
        alt="github activity"
      />
    </div>
  </div>
</template>

<style scoped lang="sass"></style>
