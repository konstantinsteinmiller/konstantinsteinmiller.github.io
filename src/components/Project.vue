<script setup lang="ts">
import XButton from '@/components/atoms/XButton.vue'

defineProps({
  index: Number,
  project: {
    type: Object,
    default: () => ({}),
  },
})
const onLink = (url: string) => {
  window.open(url, '_blank')
}
</script>

<template>
  <div class="w-full">
    <div class="project relative flex justify-center items-center gap-6 w-full">
      <div
        class="glass card p-4 max-w-2/5 flex-shrink z-2"
        :class="{
          'translate-x-[-3rem]': index % 2 === 1,
          'translate-x-[3rem]': index % 2 === 0,
        }"
      >
        <h3 class="text-xl">
          <a
            :href="project.link"
            target="_blank"
            >{{ project.name }}</a
          >
        </h3>
        {{ project.description }}
        <div class="pt-2 flex gap-3">
          <XButton @click="onLink(project.link)">{{
            project.linkDescription ? project.linkDescription : 'Github'
          }}</XButton>
          <template v-if="project.demo">
            <XButton @click="onLink(project.demo)">Demo</XButton>
          </template>
        </div>
      </div>
      <div
        class="glass card max-w-2/5"
        :class="{
          '-order-1': index % 2 === 1,
        }"
      >
        <a
          :href="project.link"
          target="_blank"
        >
          <img
            class="rounded-xl max-w-[350px] max-h-[400px]"
            :src="project.img"
            alt="project image"
        /></a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.skills {
  height: 754px;
  width: 895px;
}
</style>
