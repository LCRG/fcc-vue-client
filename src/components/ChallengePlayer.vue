/* eslint-disable @typescript-eslint/no-explicit-any */
<template>
  <v-container fluid>
    <v-row dense>
      <v-col cols="6" class="grey lighten-4">
        <h2 class="text-center ma-2 title font-weight-bold">Basic JavaScript: Comment Your JavaScript Code</h2>
        <section id="description"><p>Comments are lines of code that JavaScript will intentionally ignore. Comments are a great way to leave notes to yourself and to other people who will later need to figure out what that code does.</p><p>There are two ways to write comments in JavaScript:</p><p>Using <code>//</code> will tell JavaScript to ignore the remainder of the text on the current line:</p><p><pre><code class="language-js">// This is an in-line comment.</code></pre></p><p>You can make a multi-line comment beginning with <code>/*</code> and ending with <code>*/</code>:</p><p><pre><code class="language-js">/* This is amulti-line comment */</code></pre></p><p><strong>Best Practice</strong><br>As you write code, you should regularly add comments to clarify the function of parts of your code. Good commenting can help communicate the intent of your code—both for others <em>and</em> for your future self.</p></section>
        <hr/>
        <section id="instructions" class="ma-4 title"><p>Try creating one of each type of comment.</p></section>
        <hr/>
        <v-btn class="my-2" outlined block color="indigo">Run the Tests</v-btn>
        <v-btn class="my-2" outlined block color="indigo">Reset All Code</v-btn>
        <v-overflow-btn
          class="my-2"
          :items="dropdownItems"
          label="Get Help"
          outlined
          block
          type="button"
        ></v-overflow-btn>
        <section id="test-instructions" class="headline grey lighten-2 pa-4">You should create a <code>//</code> style comment that contains at least five letters.</section>
        <section id="test-instructions" class="headline grey lighten-2 pa-4">You should create a <code>/* */</code> style comment that contains at least five letters.</section>
      </v-col>
      <v-col cols="6">
        <MonacoEditor
      width="800"
      height="500"
      theme="vs-dark"
      language="javascript"
      :options="options"
      @change="onChange"
    ></MonacoEditor>
      </v-col>
    </v-row>
  </v-container>
</template>
xjkk
<script lang="ts">
import Vue from "vue"
import MonacoEditor from 'monaco-editor-vue'

export default Vue.extend({
  name: "ChallengePlayer",
  components: {
    MonacoEditor
  },

  data: () => ({
    dropdownItems: ['Get a Hint', 'Watch a Video', 'Ask for Help'],
    methods: {
      onChange(value: any) {
        console.log(value)
      }
    },
    }),
  })

</script>
