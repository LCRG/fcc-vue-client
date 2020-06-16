import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentChallenge: {
      id: 0,
      title: 'Sample Challenge',
      tests: [
        {
          text: 'Sample automated unit test text goes here.'
        }
      ],
      description:
        '<section id="description">\n<p>This is a sample description section where some basic HTML, CSS and JavaScript principles are explained.  Sometimes there will be highlighted code examples like this: </p>\n<p><code>@media (max-width: 100px) { /* CSS Rules */ }</code></p>\n<p>The purpose of this section is to provide a brief overview of the concept you need to understand before trying to code the solution in the code editor.  Immediately following this section is the Instructions section where you are told specifically what to code to pass the automated tests.</p><p>At any time as you practice, you may click the "Run the Tests" button to see your progress.</p><p>You may also click the "Reset All Code" button to start over again in the code editor. </p><p>If you ever get stuck, try out the help links using the "Get Help" button.</p></section>',
      instructions:
        '<section id="instructions">\n<p>Sample Instructions: Enter your name in the code editor.</p></section>',
      files: [
        {
          ext: 'html',
          contents:
            '<p>\n   /* Only change code below this line */\n\n  /* Only change code above this line */\n</p>\n\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\n'
        }
      ],
      block: 'Sample Category'
    },
    challengeBundle: {}
  },
  mutations: {
    setCurrentChallenge(state, challenge) {
      state.currentChallenge = challenge
    },
    setChallengeBundle(state, bundle) {
      state.challengeBundle = bundle
    }
  },
  actions: {
    setCurrentChallenge(context, challenge) {
      context.commit('setCurrentChallenge', challenge)
    },
    setChallengeBundle(context, bundle) {
      context.commit('setChallengeBundle', bundle)
    }
  },
  getters: {
    getCurrentChallenge: state => {
      return state.currentChallenge
    },
    getChallengeBundle: state => {
      return state.challengeBundle
    }
  }
})
