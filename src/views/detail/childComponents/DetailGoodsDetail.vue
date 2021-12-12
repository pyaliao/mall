<template>
  <div class="goodsDetailBox">
    <div class="desc">{{detail.desc}}</div>
    <template v-if="detail.detailImage">
      <div class="item" v-for="item, index in detail.detailImage" :key="index">
        <div class="desc">{{item.key}}</div>
        <img v-for="img, index in item.list" 
            :src="img" 
            :key="index"
            @load="imgLoad"
            alt="" srcset="" >
      </div>
    </template>
  </div>  
</template>

<script>
export default {
  name: 'DetailGoodsDetail',
  data () {
    return {
      imgCount: 0,
      counter: 0
    }
  },
  props: {
    detail: {
      type: Object,
      default () {
        return {}
      }
    },
  },
  watch: {
    detail () {
      const detailImage = this.detail.detailImage
      const len = this.detail.detailImage.len
      let sum = detailImage[0].list.length
      if (len > 1) {
        for (let index = 1; index < len; index++) {
          sum += detailImage[index].list.length
        }
      }
      this.imgCount = sum
    }
  },
  methods: {
    imgLoad () {
      // 此处没有直接传递事件到父组件进行防抖处理
      // 在此判断所有图片都加载完成再触发事件
      if (++this.counter === this.imgCount) {
        this.$emit('imgLoad')
      }     
    }
  }
}
</script>

<style scoped>
.goodsDetailBox {
  box-shadow: 0px 0px 10px -6px;
}
.goodsDetailBox .desc {
  padding: 20px;
  font-size: 16px;
  line-height: 1.4;
}
.goodsDetailBox .item > img {
    display: block;
    width: 100%;
}
</style>