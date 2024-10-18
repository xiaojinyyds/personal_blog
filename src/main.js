import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'echarts'
import VueECharts from 'vue-echarts'

Vue.component('ECharts', VueECharts)

Vue.use(ElementUI)
Vue.use(VueECharts)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
