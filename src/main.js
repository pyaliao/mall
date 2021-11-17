import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
Vue.config.productionTip = false

new Vue({
  render: function (h) { return h(App) },
  router
}).$mount('#app')


// 测试axios
import request from 'network/requestTest.js'

request.axiosGet2.then(res => {
  console.log(res)
}).catch()
request.axiosGet3.then(res => {
  console.log(res)
}).catch()

// request.axiosPost.then(res => {
//   console.log(res.data)
// }).catch(err => {
//   console.log(err)
// })

// request.axiosAll.then((res) => {
//   console.log(res)
// }).catch(err => {
//   console.log(err)
// })

// request.axiosAll.then(
//   request.axios.spread((res1, res2) => {
//     console.log(res1, res2)
//   })
// ).catch(err => {
//   console.log(err)
// })
