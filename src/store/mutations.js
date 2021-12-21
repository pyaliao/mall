import { ADD_COUNT, ADD_CART } from './mutations-type'

export default {
  [ADD_COUNT] (state, payload) {
    payload.count += 1
  },
  [ADD_CART] (state, payload) {
    payload.count = 1
    payload.isChecked = true
    state.cartList.push(payload)
  }
}