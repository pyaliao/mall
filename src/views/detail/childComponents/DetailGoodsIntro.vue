<template>
  <div class="goodsBox">
    <div class="title">{{goods.title}}</div>
    <div class="priceBox">
      <span>
        <span class="price">{{goods.realPrice}}<span class="oldPrice">{{goods.oldPrice}}</span></span>
      </span>
      <span class="discount" :style="{background: goods.discountBgColor}">{{goods.discount}}</span>
    </div>
    <div class="columns">
      <span class="columnsItem">{{goods.columns && goods.columns[0]}}</span>
      <span class="columnsItem">{{goods.columns && goods.columns[1]}}</span>
      <span class="columnsItem" v-if="goods.services">
        <img :src="goods.services[goods.services.length - 1].icon" /> 
        {{goods.services[goods.services.length - 1].name}}
      </span>
    </div>
    <div class="services" v-if="goods.services">
      <span class="serviceItem" v-for="index in goods.services.length - 1" :key="index">
        <img :src="goods.services[index - 1].icon" alt="" srcset="">{{goods.services[index - 1].name}}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailGoods',
  props: {
    goods: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  mounted () {
    console.log(this.goods)
  }
}
</script>

<style scoped>
.goodsBox {
    padding: 20px 20px 0;
}
.title {
    font-size: 18px;
    font-weight: 700;
    line-height: 1.2;
}
.priceBox {
  margin-top: 10px;
  display: flex;
}
.priceBox span {
  display: inline-block;
}
span.price {
    font-size: 24px;
    color: var(--color-tint);
}
span.oldPrice {
    font-size: 14px;
    text-decoration: line-through;
    margin-left: 10px;
    color: #999;
}
span.discount {
  font-size: 12px;
  height: 16px;
  line-height: 16px;
  background: var(--color-tint);
  border-radius: 100px;
  padding: 0 4px;
  color: #fff;
  margin-left: 10px;
  align-self: flex-start;
}
.columns,
.services  {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 26px 0 10px;
  position: relative;
}
.columns::before,
.services::before {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 1px;
  background: #efefef;
}
.columnsItem,
.serviceItem {
  font-size: 14px;
  color: #999;
  display: flex;
  align-items: center;
}
.columnsItem > img,
.serviceItem > img {
  width: 14px;
}
.services {
  padding: 15px 0;
}
</style>