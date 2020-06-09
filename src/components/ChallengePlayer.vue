<template>
  <v-container class="grey lighten-4" fluid>
    <v-row dense>
      <v-col cols="6">
        <h2 class="text-center ma-2 title font-weight-bold">
          {{ challenge.block }} : {{ challenge.title }}
        </h2>
        <span v-html="challenge.description"></span>
        <hr />
        <span class="ma-4 title" v-html="challenge.instructions"> </span>
        <hr />
        <v-btn class="my-2 grey lighten-1 title" outlined block color="indigo"
          >Run the Tests</v-btn
        >
        <v-btn class="my-2 grey lighten-1 title" outlined block color="indigo"
          >Reset All Code</v-btn
        >
        <v-overflow-btn
          class="my-2"
          :items="dropdownItems"
          label="Get Help"
          outlined
          block
          type="button"
        ></v-overflow-btn>

        <v-list class="grey lighten-2 pa-4">
          <v-list-item v-for="(item, i) in challenge.tests" :key="i">
            <v-list-item-icon>
              <v-icon large>mdi-flask</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-subtitle
                v-html="item.text"
                white-space="wrap"
              ></v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-col>
      <v-col cols="6">
        <MonacoEditor
          theme="vs-dark"
          :language="codeLanguage"
          :value="codeValue"
          @change="onChange"
        ></MonacoEditor>
        <v-divider></v-divider>
        <section id="">
          <pre>
// running tests
You should create a // style comment that contains at least five letters.
You should create a /* */ style comment that contains at least five letters.
// tests completed</pre
          >
        </section>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import MonacoEditor from 'monaco-editor-vue'

export default {
  name: 'ChallengePlayer',
  props: ['challenge'],
  components: {
    MonacoEditor
  },
  data() {
    return {
      dropdownItems: ['Get a Hint', 'Watch a Video', 'Ask for Help'],
      code: 'Sample code',
      language: 'javascript'
    }
  },
  computed: {
    codeValue: function() {
      return this.challenge.files[0].contents
    },
    codeLanguage: function() {
      return this.challenge.files[0].ext
    }
  },
  methods: {
    onChange: function(value) {
      console.log(`Someone typed ${value} in the Monaco Editor`)
    }
  }
}
</script>
<style scoped>
#description {
  font-size: larger;
}
</style>
