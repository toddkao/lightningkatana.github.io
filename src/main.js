// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/en'
import Vuetify from 'vuetify'
import 'element-ui/lib/theme-chalk/index.css'
import('../node_modules/vuetify/dist/vuetify.min.css')

Vue.use(Vuetify)
Vue.use(ElementUI, { locale })
require('@/assets/style/style.css')
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
