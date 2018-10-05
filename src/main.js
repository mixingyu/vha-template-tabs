import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import vhaComponents from 'vha-components'
Vue.use(vhaComponents)
import vhaNative from 'vha-native'
Vue.use(vhaNative)

Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')