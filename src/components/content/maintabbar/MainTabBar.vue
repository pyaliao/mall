<template>
  <TabBar>
    <TabBarItem path="/home">
      <template v-slot:icon>
        <img src="~assets/img/tabbar/home.svg" alt="" srcset="" />
      </template>
      <template v-slot:icon-active>
        <img src="~assets/img/tabbar/home_active.svg" alt="" srcset="" />
      </template>
      <template v-slot:title>
        <div>首页</div>
      </template>
    </TabBarItem>
    <TabBarItem path="/category">
      <template v-slot:icon>
        <img src="~assets/img/tabbar/category.svg" alt="" srcset="" />
      </template>
      <template v-slot:icon-active>
        <img src="~assets/img/tabbar/category_active.svg" alt="" srcset="" />
      </template>
      <template v-slot:title>
        <div>分类</div>
      </template>
    </TabBarItem>
    <TabBarItem path="/cart">
      <template v-slot:icon>
        <img src="~assets/img/tabbar/shopcart.svg" alt="" srcset="" />
      </template>
      <template v-slot:icon-active>
        <img src="~assets/img/tabbar/shopcart_active.svg" alt="" srcset="" />
      </template>
      <template v-slot:title>
        <div>购物车</div>
      </template>
    </TabBarItem>
    <TabBarItem path="/profile">
      <template v-slot:icon>
        <img src="~assets/img/tabbar/profile.svg" alt="" srcset="" />
      </template>
      <template v-slot:icon-active>
        <img src="~assets/img/tabbar/profile_active.svg" alt="" srcset="" />
      </template>
      <template v-slot:title>
        <div>我</div>
      </template>
    </TabBarItem>
  </TabBar>
</template>

<script>
import TabBar from "components/common/tabbar/TabBar";
import TabBarItem from "components/common/tabbar/TabBarItem";
export default {
  name: "MainTabBar",
  components: {
    TabBar,
    TabBarItem,
  },
};
</script>

<style scoped>
</style>