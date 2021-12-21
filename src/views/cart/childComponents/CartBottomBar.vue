<template>
  <div class="cartBottomBar">
    <div class="left">
      <div class="selectAll" @click="selectAll">
        <check-btn class="checkBox" :is-checked="isAllSelected"></check-btn>
        <span>全选</span>
      </div>
      <div class="sum">
        <span>合计：</span>
        <span>¥{{sum}}</span>
      </div>
    </div>
    <div class="right" @click="goAfford">
      去结算({{count}})
    </div>
  </div>
</template>

<script>
import CheckBtn from 'components/content/checkBtn/CheckBtn'
import { mapGetters } from 'vuex'

export default {
  name: 'CartBottomBar',
  components: {
    CheckBtn
  },
  data () {
    return {
      isChecked: false,
    }
  },
  computed: {
    ...mapGetters(['cartList']),
    len () {
      // 计算cartList的长度
      return this.cartList.length
    },
    sum () {
      return this.cartList.filter((item) => {
        return item.isChecked
      }).reduce((previous, current) => {
        return previous + current.price * current.count
      }, 0).toFixed(2)
    },
    count () {
      // 计算被选中的商品的数量
      return this.cartList.filter((item) => {
        return item.isChecked
      }).length
    },
    isAllSelected () {
      // 如果被选中的商品数量与加入购物车的商品数量一致且选中的商品数量不为0，则表明所有商品被选中
      return this.count === this.len && this.count ? true : false
    }
  },
  methods: {
    selectAll () {
      // cartList是计算属性，但是此处修改的是cartList内部元素的属性
      // 直接修改cartList需要使用setter
      if (this.isAllSelected) {
        this.cartList.forEach(item => {
          item.isChecked = false
        })
      } else {
        this.cartList.forEach(item => {
          item.isChecked = true
        })
      }
    },
    goAfford () {
      if (!this.isAllSelected) {
        // 直接调用toast插件
        this.$toast.show('请选择所有商品')
      } else {
        this.$toast.show('已经选择所有商品')
      }
    }
  }
}
</script>

<style scoped>
.cartBottomBar {
  height: 44px;
  display: flex;
  background: #dedede;
  justify-content: space-between;
  align-items: center;
}
.left,
.right {
  padding: 0 10px;
}
.left {
  display: flex;
  align-items: center;
}
.right {
  height: 44px;
  line-height: 44px;
  background: var(--color-tint);
  color: #fff;
}
.checkBox {
  margin-right: 4px;
}
.selectAll {
  display: flex;
  align-items: center;
  margin-right: 40px;
}
</style>