import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

Vue.filter('noHypensAllCaps', function(value) {
  if (!value) return ''
  value = value.toString().toUpperCase()
  return value.replace(/-/g, ' ')
})

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
