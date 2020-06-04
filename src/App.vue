<template>
  <v-app>
    <v-app-bar app color="primary" dark> </v-app-bar>

    <v-content>
      <ChallengePlayer />
    </v-content>
  </v-app>
</template>

<script>
import ChallengePlayer from "./components/ChallengePlayer.vue";

export default {
  name: "App",

  components: {
    ChallengePlayer
  },

  data: () => ({
    //
  })
}
</script>
