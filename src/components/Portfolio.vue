<template>
  <div class="portfolio w-full h-full relative flex justify-center">
    <img
      class="background z-0 absolute h-full"
      alt="Background"
      src="@/assets/images/background.png"
    />
    <div class="text-white w-full max-w-[1080px]">
      <ShortBio />
      <Skills />
      <Projects />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ShortBio from '@/components/ShortBio.vue'
import Skills from '@/components/Skills.vue'
import Projects from '@/components/Projects.vue'

export default defineComponent({
  name: 'Portfolio',
  components: { Projects, Skills, ShortBio },
})
</script>

<style>
.portfolio {
  color: #ffffff;
  min-width: 1080px;
}

.portfolio .rectangle-3 {
  background: linear-gradient(
    180deg,
    rgb(19.08, 3.87, 40.37) 7.29%,
    rgb(37.16, 15.9, 66.94) 34.38%,
    rgb(55.97, 17.78, 109.44) 56.77%,
    rgb(38.34, 16.4, 69.06) 84.9%,
    rgb(25.36, 6.29, 52.06) 100%
  );
  border-radius: 15px;
  box-shadow: 4px 7px 26px #0000001f;
  height: 193px;
  left: 22px;
  position: absolute;
  top: 7px;
  width: 570px;
}

.portfolio .featured-project {
  color: #9757d3;
  font-family: 'Poppins-SemiBold', Helvetica;
  font-size: 16px;
  font-weight: 600;
  height: 24px;
  left: 0;
  letter-spacing: 0.32px;
  line-height: normal;
  position: absolute;
  top: 0;
}

.portfolio .featured-project-2 {
  color: #9757d3;
  font-family: 'Poppins-SemiBold', Helvetica;
  font-size: 16px;
  font-weight: 600;
  height: 24px;
  left: 141px;
  letter-spacing: 0.32px;
  line-height: normal;
  position: absolute;
  top: 0;
}

.portfolio .img-wrapper {
  height: 31px;
  left: 596px;
  position: absolute;
  top: 298px;
  width: 31px;
}

.portfolio .text-wrapper-18 {
  color: #000000;
  font-family: 'Preahvihear-Regular', Helvetica;
  font-size: 22px;
  font-weight: 400;
  height: 40px;
  left: -3977px;
  letter-spacing: 0.44px;
  line-height: normal;
  position: absolute;
  top: 1065px;
}
</style>
