<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import ZoraImg from '@/assets/images/zora.jpg'
import LegendOfAhssunImg from '@/assets/images/legend-of-ahssun.jpg'
import RodentRaceImg from '@/assets/images/rodent-race.jpg'
import TwentyFourtyEightImg from '@/assets/images/2048.jpg'
import ShipmentTrackImg from '@/assets/images/shipment-track.jpg'
import LingLingImg from '@/assets/images/lingling.jpg'
import EigthDamesImg from '@/assets/images/8-dames.jpg'
import GalaxyImg from '@/assets/images/galaxy.jpg'
import RouletteImg from '@/assets/images/roulette-simulator.jpg'
import WebLeagueImg from '@/assets/images/web-league.jpg'
import IsometricRPGImg from '@/assets/images/isometric-rpg.jpg'
import TinderCloneImg from '@/assets/images/tinder-clone.jpg'
import ZoraGameOverImg from '@/assets/images/detail-image/game-over.jpg'
import LoaCardsImg from '@/assets/images/detail-image/loa-cards.jpg'
import LoaFooterImg from '@/assets/images/detail-image/loa-footer.jpg'
import LoaImagesImg from '@/assets/images/detail-image/LoA-legend-of-ahssun-images.jpg'
import LoaRotatingCardsImg from '@/assets/images/detail-image/rotating-cards.jpg'
import FishyGameImg from '@/assets/images/detail-image/fishy-game.jpg'
import ZoraFleeAndPowerUpsImg from '@/assets/images/detail-image/flee-and-power-ups.jpg'

const container = ref<HTMLElement | null>(null)
let imageCounter = 0
const imageSourcesList = [
  LegendOfAhssunImg,
  ZoraGameOverImg,
  RodentRaceImg,
  FishyGameImg,
  TwentyFourtyEightImg,
  ShipmentTrackImg,
  LingLingImg,
  ZoraImg,
  EigthDamesImg,
  GalaxyImg,
  LoaImagesImg,
  RouletteImg,
  LoaCardsImg,
  WebLeagueImg,
  IsometricRPGImg,
  LoaFooterImg,
  TinderCloneImg,
  LoaRotatingCardsImg,
  ZoraFleeAndPowerUpsImg,
]
const images = ref<HTMLElement[]>([])
let lastMouseX = 0
let lastMouseY = 0
let lastScrollY = 0

const createImage = (x: number, y: number) => {
  if (!container.value) return

  const imageIndex = imageCounter % imageSourcesList.length
  if (imageCounter >= imageSourcesList.length) return

  const img = document.createElement('img')
  img.src = imageSourcesList[imageIndex]
  img.style.position = 'absolute'
  img.style.left = `${x}px`
  img.style.top = `${y}px`
  img.style.width = `300px`
  img.style.height = `200px`
  img.style.borderRadius = `12px`
  img.style.zIndex = `50`
  img.style.transform = 'translate(-50%, -50%)'
  img.style.transition = 'opacity 1s ease-in-out, transform 5s linear'
  img.style.opacity = '1'

  container.value.appendChild(img)
  images.value.push(img)
  imageCounter++

  setTimeout(() => {
    img.style.transform = `translate(-50%, -50%) translateY(300vh)`
    img.style.opacity = '0.2'
    setTimeout(() => {
      img.remove()
      images.value = images.value.filter(el => el !== img)
    }, 2000)
  }, 500)
}

const handleMouseMove = (event: MouseEvent) => {
  const deltaX = event.clientX - lastMouseX
  const deltaY = event.clientY - lastMouseY
  const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY)

  if (distance > 100) {
    createImage(event.clientX, event.clientY)
    lastMouseX = event.clientX
    lastMouseY = event.clientY
  }
}

const handleScroll = () => {
  if (!container.value) return

  const currentScrollY = window.scrollY
  const deltaScrollY = currentScrollY - lastScrollY
  const distance = Math.abs(deltaScrollY)

  if (distance > 50) {
    const x = Math.min(Math.max(Math.random() * window.innerWidth, 200), window.innerWidth - 200)
    createImage(x, currentScrollY + 350)
    lastScrollY = currentScrollY
  }
}

onMounted(() => {
  if (container.value) {
    lastMouseX = container.value.clientWidth / 2
    lastMouseY = container.value.clientHeight / 2
    lastScrollY = window.scrollY
  }

  window.addEventListener('mousemove', handleMouseMove)
  window.addEventListener('mouseover', handleMouseMove)
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('mousemove', handleMouseMove)
  window.removeEventListener('mouseover', handleMouseMove)
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <div
    ref="container"
    class=""
  ></div>
</template>

<style scoped lang="sass"></style>
