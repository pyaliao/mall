<template>
  <div class="cartBox">
    <nav-bar class="cartNavBar">
      <template #center>
        购物车({{cartListLen}})
      </template>
    </nav-bar>
    <scroll class="cartScroll"
            ref="cartScroll">
      <cart-list></cart-list>
    </scroll>
    <cart-bottom-bar></cart-bottom-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import Scroll from 'components/common/scroll/Scroll'

import CartBottomBar from './childComponents/CartBottomBar'
import CartList from './childComponents/CartList'

import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      savedY: 0
    }
  },
  computed: {
    // 使用mapGetters辅助函数将store中的getter映射到局部计算属性
    ...mapGetters(['cartListLen'])
  },
  components: {
    NavBar,
    Scroll,
    CartList,
    CartBottomBar
  },
  activated () { // 被keep-alive缓存的组件激活时调用
    // 组件激活时滚动到保存的距离，然后刷新better-scroll
    this.$refs.cartScroll.scrollTo()
    this.$refs.cartScroll.refresh()
  },
  deactivated () { // 被keep-alive缓存的组件失活时调用
    // 组件失活时保存页面滚动的距离
    this.savedY = this.$refs.cartScroll.getScrollY()
  }
}
</script>

<style scoped>
.cartBox {
  height: 100vh;
}
.cartNavBar {
  background-color: var(--color-tint);
  color: #fff;
  font-size: 16px;
  font-weight: 700;
}
.cartScroll {
  position: relative;
  overflow: hidden;
  /* better-scroll的必须给定一个确定的高度 */
  height: calc(100% - 93px - 44px);
  /* 当触控事件发生在元素上时，不进行任何操作 */
  touch-action: none;
}
</style>