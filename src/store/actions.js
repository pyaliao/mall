import { ADD_COUNT, ADD_CART } from './mutations-type'

export default {
  addToCart({ state, commit }, payload) {
    // 1. 查找当前购物车列表中是否有该商品
    // ES6语法，箭头函数函数体如果有大括号，则需要手动return，如果没有大括号，即只有一条语句，则默认自动return
    const existedGoods = state.cartList.find(item => item.iid === payload.iid)
    // 2. 如果该商品存在，就将其数量加1；否则将其添加的购物车商品列表
    if (existedGoods) {
      commit(ADD_COUNT, existedGoods)
    } else {
      commit(ADD_CART, payload)
    }
  }
}