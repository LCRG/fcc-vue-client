<template>
  <v-expansion-panels hover accordion tile>
    <v-expansion-panel
      v-for="(item, i) in superBlocks"
      :key="i"
      :class="{
        'indigo white--text font-weight-bold': i % 2 === 0,
        'indigo darken-2 white--text font-weight-bold': i % 2 !== 0
      }"
    >
      <v-expansion-panel-header>{{
        item.superBlock | noHypensAllCaps
      }}</v-expansion-panel-header>
      <v-expansion-panel-content>
        <v-expansion-panels hover accordion>
          <v-expansion-panel
            v-for="(block, i) in getBlocks(item)"
            :key="i"
            :class="{
              'indigo lighten-3 font-weight-bold': i % 2 === 0,
              'indigo lighten-4 font-weight-bold': i % 2 !== 0
            }"
          >
            <v-expansion-panel-header>{{
              block.meta.name
            }}</v-expansion-panel-header>
            <v-expansion-panel-content>
              <v-list shaped dense min-width="200">
                <v-list-item-group>
                  <v-list-item
                    v-for="(challenge, i) in block.challenges"
                    :key="i"
                    :class="{
                      'indigo lighten-5': i % 2 === 0,
                      white: i % 2 !== 0
                    }"
                    @click="setChallenge(challenge)"
                  >
                    <v-list-item-content>
                      <v-list-item-subtitle>{{
                        challenge.title
                      }}</v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                </v-list-item-group>
              </v-list>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script>
export default {
  name: 'DrawerList',
  props: ['superBlocks'],
  methods: {
    getBlocks(superBlock) {
      let blockKeys = Object.keys(superBlock.blocks)
      return blockKeys.map(blockKey => {
        return superBlock.blocks[`${blockKey}`]
      })
    },
    setChallenge(challenge) {
      //console.log(challenge)
      //this.$emit('select-challenge', challenge)
      this.$store.dispatch('setCurrentChallenge', challenge)
    }
  }
}
</script>

<style></style>
