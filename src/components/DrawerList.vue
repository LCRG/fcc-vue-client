<template>
  <v-expansion-panels>
    <v-expansion-panel v-for="(item, i) in superBlocks" :key="i">
      <v-expansion-panel-header>{{ item.superBlock }}</v-expansion-panel-header>
      <v-expansion-panel-content>
        <v-expansion-panels>
          <v-expansion-panel v-for="(block, i) in getBlocks(item)" :key="i">
            <v-expansion-panel-header>{{
              block.meta.name
            }}</v-expansion-panel-header>
            <v-expansion-panel-content
              v-for="(challenge, i) in block.challenges"
              :key="i"
            >
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title>{{ challenge.title }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
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
    }
  }
}
</script>

<style></style>
