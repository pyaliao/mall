<template>
  <div class="bottomTabBar">
    <div class="leftBox">
      <div class="item">
        <div class="custServ"></div>
        <span class="name">客服</span>
      </div>
      <div class="item">
        <div class="store"></div>
        <span class="name">店铺</span>
      </div>
      <div class="item">
        <div class="collection"></div>
        <span class="name"><span>收藏</span></span>
      </div>
    </div>
    <div class="toCart">加入购物车</div>
    <div class="purchase"><span>购买</span></div>
  </div>
</template>

<script>
export default {
  name: 'DetailBottomBar'
}
</script>

<style scoped>
.bottomTabBar {
    position: relative;
    bottom: 0;
    height: 60px;
    background: #fff;
    left: 0;
    display: flex;
    /* padding: 10px 0; */
    align-items: center;
}
.leftBox {
  width: 50%;
  display: flex;
  justify-content: space-evenly;
}
.leftBox .item {
  flex: 1;
  text-align: center;
}
.leftBox .item .custServ,
.leftBox .item .store,
.leftBox .item .collection {
  width: 25px;
  height: 25px;

  background-size: 100%;
  margin: 0 auto;
}
.leftBox .item .custServ {
  background-position: 0 110px;
}
.leftBox .item .store {
  background-position: 0 59px;
}
.leftBox .item .collection {
  background-position: 0 172px;
}
.leftBox .item .name {
  font-size: 14px;
}
.toCart,
.purchase {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  height: 100%;
}
.toCart {
  background: #f2ea07ad;
}
.purchase {
  background: var(--color-tint);
  color: #fff;
}
.custServ,
.store,
.collection {
  background-image: url(~assets/img/detail/detail_bottom.png);
}
</style>