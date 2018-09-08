import Vue from 'vue'
import App from './App'
import './reset.scss'

Vue.config.productionTip = false
const TestBox = new Vue({
  name: 'App',
  components: {
    App
  },
  template: `<App/>`
})

TestBox.$mount('#App')
