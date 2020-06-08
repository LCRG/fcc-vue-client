<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" app>
      <DrawerList v-bind:superBlocks="superBlocks"></DrawerList>
    </v-navigation-drawer>
    <v-app-bar app color="primary" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>FreeCodeCamp Challenge Player</v-toolbar-title>
    </v-app-bar>

    <v-content>
      <ChallengePlayer v-bind:challengeBundle="challengeBundle" />
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
      })
      .catch(error => {
        console.log(error)
      })
  },
  computed: {
    superBlocks() {
      let bundleKeys = Object.keys(this.challengeBundle)
      return bundleKeys.map(superBlock => this.challengeBundle[`${superBlock}`])
    }
  }
}
</script>
