<template>
  <div class="goodsItem" @click="itemClick">
    <img :src="goodsItem.show.img"  @load="loadImg" alt="" srcset="">
    <div class="title">{{goodsItem.title}}</div>
    <div class="desp">
      <span class="price">{{goodsItem.price}}</span>
      <span class="collectionBox">
        <img src="~assets/img/common/collect.svg" alt="" srcset="">
        <span class="collection">{{goodsItem.cfav}}</span>
      </span>
    </div>
  </div>

</template>

<script>
export default {
  name: 'GoodsListItem',
  props: {
    goodsItem: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  methods:  {
    loadImg () {
      // 非父子组件通信，事件总线
      this.$bus.$emit('imgloaded')
    },
    itemClick () {
      // 点击跳转到详情页
      // 动态路由传参有两种方法
      // 1. 使用命名路由，params（使用path不起作用）：router.push({ name: 'user', params: { userId: '123' }})
      // 2. 使用带有完整参数的path，即拼接字符串即可：router.push({ path: `/user/${userId}`})
      this.$router.push(`/detail/${this.goodsItem.iid}`)
    }
  }
}
</script>

<style scoped>
.goodsItem {
  width: 50%;
  margin-bottom: 10px;
}
.goodsItem > img {
  display: block;
  width: 100%;
  border-radius: 4px;
}
.goodsItem .title {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 15px;
  line-height: 1.8;
}
.goodsItem:nth-child(odd) {
  padding-right: 5px;
}
.goodsItem:nth-child(even) {
  padding-left: 5px;
}
.desp {
    text-align: center;
    font-size: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
}
.goodsItem .collectionBox {
  display: flex;
  align-items: center;
  margin-left: 10px;
}
.goodsItem .collectionBox > img {
  width: 18px;
}
.goodsItem .price {
  color: var(--color-tint);
}
.goodsItem .collection {
  display: flex;
  align-items: center;
}

</style>>
