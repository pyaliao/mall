import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'

// 1. 注册vuex
Vue.use(Vuex)

// 2. 创建store实例
const state = {
  cartList: []
}
const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})

// 3. 导出store示例，然后在根组件注入，以便所有子组件可以访问
export default store