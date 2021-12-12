<template>
  <div class="shopBox">
    <div class="shopTop">
      <img :src="shop.shopLogo" alt="" srcset="">
      <span class="name">{{shop.name}}</span>
    </div>
    <div class="shopBottom">
      <div class="left">
        <div class="sellsCount">
          <div class="count">{{shop.cSells}}</div>
          <div class="name">总销量</div>
        </div>
        <div class="goodsCount">
          <div class="count">{{shop.cGoods}}</div>
          <div class="name">全部宝贝</div>
        </div>
      </div>
      <div class="right">
        <div class="scoresInfo" v-if="shop.score">
          <div class="scoresItem" v-for="item, index in shop.score" :key="index">
            <span class="name">{{item.name}}</span>
            <span class="score" :class="{better: item.isBetter}">{{item.score}}</span>
            <span class="real" :class="{better: item.isBetter}">{{item.isBetter ? '高' : '低'}}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="shopBottom">
      <div class="left">
        <div class="sellsCount">
          <div class="count">{{shop.cSells}}</div>
          <div class="name">总销量</div>
        </div>
        <div class="goodsCount">
          <div class="count">{{shop.cGoods}}</div>
          <div class="name">全部宝贝</div>
        </div>
      </div>
      <div class="right">
        <div class="scoresInfo" v-if="shop.score">
          <div class="scoresItem" v-for="item, index in shop.score" :key="index">
            <span class="name">{{item.name}}</span>
            <span class="score" :class="{better: item.isBetter}">{{item.score}}</span>
            <span class="real" :class="{better: item.isBetter}">{{item.isBetter ? '高' : '低'}}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="shopBottom">
      <div class="left">
        <div class="sellsCount">
          <div class="count">{{shop.cSells}}</div>
          <div class="name">总销量</div>
        </div>
        <div class="goodsCount">
          <div class="count">{{shop.cGoods}}</div>
          <div class="name">全部宝贝</div>
        </div>
      </div>
      <div class="right">
        <div class="scoresInfo" v-if="shop.score">
          <div class="scoresItem" v-for="item, index in shop.score" :key="index">
            <span class="name">{{item.name}}</span>
            <span class="score" :class="{better: item.isBetter}">{{item.score}}</span>
            <span class="real" :class="{better: item.isBetter}">{{item.isBetter ? '高' : '低'}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailShop',
  props: {
    shop: {
      type: Object,
      default () {
        return {}
      }
    }
  }
}
</script>

<style scoped>
.shopBox {
    padding: 20px;
}
.shopTop > img {
  width: 40px;
  vertical-align: middle;
  margin-right: 10px;
}
.shopTop .name {
  font-size: 14px;
}
.shopBottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.shopBottom .left,
.shopBottom .right {
  flex: 1;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
.sellsCount,
.goodsCount {
  text-align: center;
}
.sellsCount .count,
.goodsCount .count {
  font-size: 18px;
  margin-bottom: 8px;
}
.sellsCount .name,
.goodsCount .name {
  font-size: 13px;
}
.scoresItem {
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
}
.scoresItem .name,
.scoresItem .score,
.scoresItem .real {
  font-size: 13px;
  margin-right: 14px;
}
.scoresItem .score,
.scoresItem .real {
  color: #6bc16b;
}
.scoresItem .score.better,
.scoresItem .real.better {
  color: rgb(241, 62, 58);
} 
</style>