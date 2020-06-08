import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: { challengeBundle: {} },
  mutations: {
    seedChallengeBundle(state, bundle) {
      state.challengeBundle = bundle
    }
  },
  actions: {
    seedChallengeBundle(context, bundle) {
      context.commit('seedChallengeBundle', bundle)
    }
  },
  getters: {
    getBundle: state => {
      return state.challengeBundle
    }
  }
})
