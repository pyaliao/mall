<template>
  <div class="cartListItem" @click="clickItem">
    <div class="checkBtnBox">
      <check-btn :is-checked="product.isChecked"></check-btn>
    </div>
    <div class="contBox">
      <img :src="product.image" alt="" srcset="">
      <div class="infos">
        <div class="title">{{product.title}}</div>
        <div class="desc">{{product.desc}}</div>
        <div class="countBox">
          <span style="color:var(--color-tint);">¥{{product.price}}</span>
          <span>x{{product.count}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CheckBtn from 'components/content/checkBtn/CheckBtn'

export default {
  name: 'CartListItem',
  data () {
    return {

    }
  },
  components: {
    CheckBtn
  },
  props: {
    product: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  methods: {
    clickItem () {
      this.product.isChecked = !this.product.isChecked
    }
  }
}
</script>

<style scoped>
.cartListItem {
  padding: 10px;
  border-bottom: 1px solid #efefef;
  display: flex;
}
.checkBtnBox {
  display: flex;
  align-items: center;
  margin-right: 10px;
}
.contBox {
  display: flex;
  align-items: center;
  overflow: hidden;
}
.contBox img {
  display: block;
  width: 80px;
  border-radius: 4px;
}
.infos {
  flex: 1;
  overflow: hidden;
  margin-left: 20px;
  position: relative;
  min-height: 120px;
}
.title,
.desc {
  font-size: 16px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.desc {
  margin-top: 20px;
}
.countBox {
  position: absolute;
  left: 0;
  bottom: 10px;
  width: 100%;
  display: flex;
  justify-content: space-between;
}
</style>