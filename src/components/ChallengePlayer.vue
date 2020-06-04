<template>
  <v-container class="grey lighten-4" fluid>
    <v-row dense>
      <v-col cols="6">
        <h2 class="text-center ma-2 title font-weight-bold">
          Basic JavaScript: Comment Your JavaScript Code
        </h2>
        <Description></Description>
        <hr />
        <section id="instructions" class="ma-4 title">
          <p>Try creating one of each type of comment.</p>
        </section>
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
        <section id="test-instructions" class="headline grey lighten-2 pa-4">
          <v-list>
            <v-list-item v-for="(item, i) in items" :key="i">
              <v-list-item-icon>
                <v-icon large>mdi-flask</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title v-text="item.text"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
          <v-icon large>mdi-flask</v-icon>
          You should create a <code>//</code> style comment that contains at
          least five letters.
        </section>
        <section id="test-instructions" class="headline grey lighten-2 pa-4">
          <v-icon large>mdi-flask</v-icon>
          You should create a <code>/* */</code> style comment that contains at
          least five letters.
        </section>
      </v-col>
      <v-col cols="6">
        <MonacoEditor
          theme="vs-dark"
          language="javascript"
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
xjkk
<script>
import MonacoEditor from 'monaco-editor-vue'
import Description from './Description'

export default {
  name: 'ChallengePlayer',
  components: {
    MonacoEditor,
  },

  data: () => ({
    dropdownItems: ['Get a Hint', 'Watch a Video', 'Ask for Help'],
    items: [
      { text: 'You should not change code above the specified comment.' },
      { text: '<code>a</code> should have a value of 7.' },
      { text: 'b should have a value of 7.' },
      { text: 'a should be assigned to b with =.' },
    ],
  }),
}
</script>
<style scoped>
#description {
  font-size: larger;
}
</style>
