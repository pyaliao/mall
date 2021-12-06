<template>
  <TabBar>
      <TabBarItem path="/home" >
        <template v-slot:icon>
          <img  src="~assets/img/tabbar/msy_right01.png" alt="" srcset="">
        </template>
        <template v-slot:icon-active>
          <img  src="~assets/img/tabbar/msy_right01a.png" alt="" srcset="">
        </template>
        <template v-slot:title>
          <div>首页</div>
        </template>
      </TabBarItem>
      <TabBarItem path="/category">
        <template v-slot:icon>
          <img  src="~assets/img/tabbar/msy_right02.png" alt="" srcset="">
        </template>
        <template v-slot:icon-active>
          <img  src="~assets/img/tabbar/msy_right02a.png" alt="" srcset="">
        </template>
        <template v-slot:title>
          <div>分类</div>
        </template>
      </TabBarItem>
      <TabBarItem path="/cart">
        <template v-slot:icon>
          <img  src="~assets/img/tabbar/msy_right03.png" alt="" srcset="">
        </template>
        <template v-slot:icon-active>
          <img  src="~assets/img/tabbar/msy_right03a.png" alt="" srcset="">
        </template>
        <template v-slot:title>
          <div>购物车</div>
        </template>
      </TabBarItem>
      <TabBarItem path="/profile">
        <template v-slot:icon>
          <img  src="~assets/img/tabbar/msy_right04.png" alt="" srcset="">
        </template>
        <template v-slot:icon-active>
          <img  src="~assets/img/tabbar/msy_right04a.png" alt="" srcset="">
        </template>
        <template v-slot:title>
          <div>我</div>
        </template>
      </TabBarItem>
    </TabBar>
</template>

<script>
import TabBar from 'components/common/tabbar/TabBar'
import TabBarItem from 'components/common/tabbar/TabBarItem'
export default {
  name: 'MainTabBar',
  components: {
    TabBar,
    TabBarItem
  }
}
</script>

<style>

</style>