import Vue from 'vue'
import App from './App.vue'
import router from 'router/index'
import store from 'store/index'
import toast from 'components/common/toast'

Vue.config.productionTip = false
// 创建事件总线
Vue.prototype.$bus = new Vue()

// 注册toast组件
Vue.use(toast)

new Vue({
  render: function (h) { return h(App) },
  router,
  store
}).$mount('#app')
