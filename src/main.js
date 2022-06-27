import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import store from './store/index.js'
// 加载全局样式
import './styles/index.less'

// 加载vant组件库
import Vant from 'vant'

// 加载vant全局样式
import 'vant/lib/index.css'

// 注册使用vant组件库
Vue.use(Vant)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
