<template>
  <div>
    <nav-bar class="nav-bar">
      <template #center>蘑菇街</template>
    </nav-bar>
    <home-swiper :banner="banner"></home-swiper>
    <home-recommend :recommend="recommend"></home-recommend>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue'
import HomeSwiper from 'views/home/childComponents/HomeSwiper.vue'
import HomeRecommend from "./childComponents/HomeRecommend.vue";

import { getHomeData } from 'network/home.js'

export default {
  components: { 
    NavBar,
    HomeSwiper,
    HomeRecommend
  },
  data () {
    return {
      banner: [],
      recommend: []
    }
  },
  created () {
    getHomeData()
    .then(res => {
      console.log(res)
      this.banner = res.data.banner.list
      this.recommend = res.data.recommend.list
    })
    .catch()
  }
}
</script>

<style scoped>
.nav-bar {
  color: #fff;
  background: var(--color-tint);
}
</style>>
