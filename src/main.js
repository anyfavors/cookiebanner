import 'core-js/stable'
import Vue from 'vue'
import App from './App.vue'
import CoreuiVue from '@coreui/vue'
import ToggleButton from 'vue-js-toggle-button'

Vue.config.productionTip = false
Vue.config.performance = true
Vue.use(CoreuiVue)
Vue.use(ToggleButton)

new Vue({
  render: h => h(App),
}).$mount('#app')
