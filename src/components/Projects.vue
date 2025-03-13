<script setup lang="ts">
import Project from '@/components/Project.vue'
import LegendOfAhssunImg from '@/assets/images/legend-of-ahssun.jpg'
import ZoraImg from '@/assets/images/zora.jpg'
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

interface Project {
  name: string
  description: string
  img: string
  link: string
  demo?: string
  linkDescription?: string
}
const projectsList: Project[] = [
  {
    name: 'Zora',
    description:
      'a fantasy game revolving around 3d fairy battles in an arena. Implementing pathfinding, visual effects(vfx) and physics + collision with rapier3d.js + three.js',
    img: ZoraImg,
    link: 'https://github.com/konstantinsteinmiller/zora',
    demo: 'https://konstantinsteinmiller.github.io/zora',
  },
  {
    name: 'Legend of Ahssûn website',
    description:
      'The OnePager was created by me for the game release in 2018. Legend of Ahssûn features 100+ gameplay hours for RPG fans and is a project a actively developed as a scripter and in several other roles.',
    img: LegendOfAhssunImg,
    link: 'https://github.com/konstantinsteinmiller/legend-of-ahssun',
    demo: 'http://legendofahssun.worldofgothic.com',
  },
  {
    name: 'rodent race',
    description:
      'A chess-inspired turn-based strategy game. Collect acorns in the middle of the island and eliminate enemy pieces along the way - PvE (Campaign and AI game) - PvP (Compete online against other players) - Campaign with progressively greater challenges - Leaderboard',
    img: RodentRaceImg,
    link: 'https://store.steampowered.com/app/3393800/rodent_race',
    linkDescription: 'Steam',
  },
  {
    name: '2048',
    description: 'A reimplementation of the popular 2048 game in TypeScript for desktop pc',
    img: TwentyFourtyEightImg,
    link: 'https://github.com/konstantinsteinmiller/2048',
    demo: 'https://konstantinsteinmiller.github.io/2048',
  },
  {
    name: 'Code Competition winner: ShipmentTrack',
    description:
      'Shipment tracking via a tracking number. Shows the current status and the history of the whereabouts of the shipment. You can send in new shipping request via the administration ui and update the status with the update status ui UI is just available in english. Internalization was left out. Fully responsive design.',
    img: ShipmentTrackImg,
    link: 'https://github.com/konstantinsteinmiller/shipment-tracking',
  },
  {
    name: 'Innohacks 2017 winner - Alexa skill: lexiq/Lingling',
    description:
      'Learn languages by repeating words and phrases. The skill is available in the Amazon Alexa store. The app will put unknown and known words into sentences for you to repeat and therefore train your desired language.',
    img: LingLingImg,
    link: 'https://github.com/konstantinsteinmiller/innohacks2017',
  },
  {
    name: 'Code Competition: 8 dames problem',
    description:
      'The app is able to solve the computer science problem 8 dames and finds all possible solutions to the problem. It was developed for a code competition with a 500€ price reward.',
    img: EigthDamesImg,
    link: 'https://github.com/konstantinsteinmiller/8-queens-problem',
  },
  {
    name: 'Galaxy generator',
    description:
      'A galaxy generator that creates a galaxy with stars and planets. The galaxy is generated with a seed and can be saved and loaded. The galaxy is generated with a seed and can be saved and loaded.',
    img: GalaxyImg,
    link: 'https://github.com/konstantinsteinmiller/3d-galaxy-generator',
    demo: 'http://3d-galaxy-generator.surge.sh',
  },
  {
    name: 'Roulette Strategy Simulator',
    description:
      'The goal was to beat roulette by using progressive betting strategies. The simulator is able to simulate the betting strategies and shows the results in a graph. Unfortunately no strategy was able to beat the randomness of this game in the long run.',
    img: RouletteImg,
    link: 'https://github.com/konstantinsteinmiller/roulette-simulator',
  },
  {
    name: 'Tinder clone',
    description: 'mobile app designed to allow tinder like swiping and interactions.',
    img: TinderCloneImg,
    link: 'https://github.com/konstantinsteinmiller/tinder-clone',
  },
  {
    name: 'Web league UI',
    description:
      'The web league UI project was a task given at a job interview to create a server and a UI that correctly sorts displays a leaderboard and team matches.',
    img: WebLeagueImg,
    link: 'https://github.com/konstantinsteinmiller/web-league-ui',
  },
  {
    name: 'Isometric RPG',
    description: 'WIP: creating a isometric rpg in the styles of Buldurs Gate.',
    img: IsometricRPGImg,
    link: 'https://github.com/konstantinsteinmiller/isometric-rpg',
  },
]
</script>

<template>
  <div class="projects relative flex flex-col justify-between items-center w-full h-auto">
    <h3 class="glass text-2xl pb-4">My projects</h3>

    <div
      v-for="(project, index) in projectsList"
      :key="project.name"
      class="flex justify-center pb-4"
    >
      <Project
        :index="index"
        :project="project"
      />
    </div>
  </div>
</template>

<style scoped lang="sass"></style>
