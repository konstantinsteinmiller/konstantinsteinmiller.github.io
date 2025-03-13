<script setup lang="ts"></script>

<template>
  <div class="relative flex sm:flex-row flex-col items-center pt-4 pb-12 w-full">
    <div class="picture relative p-12 pt-16">
      <p class="absolute sm:-right-52 sm:top-0 -top-2 flex justify-center items-center">
        <span class="pr-2">Hello! I am</span>
        <span class="violet text-2xl">Konstantin Steinmiller</span>
      </p>
      <img
        class="avatar z-10 relative"
        alt="avatar"
        src="@/assets/images/avatar-stylized.png"
      />
      <div class="avatar-gradient absolute left-8 top-12 w-72 h-72 z-0"></div>
      <img
        class="absolute left-1/2 top-5"
        alt="Arrow"
        src="@/assets/images/arrow.png"
      />
    </div>
    <div class="sm:max-w-1/2 sm:pt-12 relative">
      <div class="inline text-3xl pb-4 vue-text w-auto">I&#39;m a Senior Software Engineer and Game Developer.|</div>
      <div class="h-4" />
      <p class="bio mt-4 glass card p-4">
        As a web frontend specialist with more than 8 years of professional experience I develop. modern, user-friendly
        and performant SPA and SSR apps. My expertise spans across various industrial sectors such as: fintech/banking,
        platforms, B2B + B2C web shops in the agricultural sector and vehicle sales, tool sales and health insurance.
        Therefore teamwork, independent work and objective driven cooperation is my top priority.
      </p>
    </div>
  </div>
</template>

<style scoped lang="sass">
.violet
  color: #7127ba
  letter-spacing: -0.1px
.avatar
  height: 259px
  width: 258px
.avatar-gradient
  background: radial-gradient(circle at center, #763CAC 0%, #320F85 70%, #11071f 100%)
  mask: radial-gradient(circle at center, white 0%, white 30%, transparent 78%)
  //border-radius: 50%
</style>
