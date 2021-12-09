<template>
  <div class="goodsList">
    <goods-list-item
      v-for="goodsItem, index in goodsList"
      :goods-item="goodsItem"
      :key="index">
    </goods-list-item>
  </div>
</template>

<script>
import GoodsListItem from './GoodsListItem'

export default {
  name: 'GoodsList',
  components: {
    GoodsListItem
  },
  props: {
    goodsList: {
      type: Array,
      default () {
        return []
      }
    }
  }
}
</script>

<style scoped>
.goodsList {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 10px;
}
</style>