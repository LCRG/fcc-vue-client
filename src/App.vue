<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" app width="440">
      <DrawerList v-bind:superBlocks="superBlocks"></DrawerList>
    </v-navigation-drawer>
    <v-app-bar app class="indigo" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>FreeCodeCamp Challenge Player</v-toolbar-title>
    </v-app-bar>

    <v-content>
      <ChallengePlayer v-bind:challenge="currentChallenge" />
    </v-content>
  </v-app>
</template>

<script>
import axios from 'axios'
import DrawerList from './components/DrawerList'
import ChallengePlayer from './components/ChallengePlayer.vue'

export default {
  name: 'App',

  components: {
    DrawerList,
    ChallengePlayer
  },

  data() {
    return {
      challengeBundle: {},
      drawer: null
    }
  },
  mounted() {
    axios
      .get('challenge-bundle.json')
      .then(response => {
        this.challengeBundle = response.data
        this.$store.dispatch('setChallengeBundle', this.challengeBundle)
      })
      .catch(error => {
        console.log(error)
      })
  },
  computed: {
    superBlocks() {
      let bundleKeys = Object.keys(this.challengeBundle)
      return bundleKeys.map(superBlock => this.challengeBundle[`${superBlock}`])
    },
    currentChallenge() {
      return this.$store.getters.getCurrentChallenge
    }
  },
  methods: {}
}
</script>
