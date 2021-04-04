import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Home from './components/Home.vue'
import marketplace from './components/marketplace.vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/app.scss'
Vue.use(VueRouter)
Vue.use(BootstrapVue)

Vue.config.productionTip = false

const routes = [
  { path: '/marketplace', component: marketplace },
  { path: '/', component: Home },
  
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  el: '#app',
  router,
  render: h => h(App),
})
