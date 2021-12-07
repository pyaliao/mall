<template>
  <div>
    <nav-bar class="nav-bar">
      <template #center>蘑菇街</template>
    </nav-bar>
    <home-swiper :banner="banner"></home-swiper>
    <home-recommend :recommend="recommend"></home-recommend>
    <home-feature></home-feature>
    <tab-control :titles="titles"></tab-control>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue'
import TabControl from 'components/content/tabControl/TabControl.vue'


import HomeSwiper from './childComponents/HomeSwiper.vue'
import HomeRecommend from "./childComponents/HomeRecommend.vue"
import HomeFeature from './childComponents/HomeFeature.vue'


import { getHomeData } from 'network/home.js'
import { getGoodsData } from 'network/home.js'


export default {
  components: {
    NavBar,
    TabControl,
    HomeSwiper,
    HomeRecommend,
    HomeFeature,
  },
  data () {
    return {
      banner: [],
      recommend: [],
      titles: ['流行', '新款', '精选'],
      goods: {
        pop: {
          page: 0,
          list: []
        },
        new: {
          page: 0,
          list: []
        },
        quality:  {
          page: 0,
          list: []
        }
      }
    }
  },
  created () {
    this.getHomeData()
    this.getGoodsData('pop')
    this.getGoodsData('new')
    this.getGoodsData('quality')
  },
  methods: {
    getHomeData () {
      getHomeData()
      .then(res => {
        console.log(res)
        this.banner = res.data.banner.list
        this.recommend = res.data.recommend.list
      })
      .catch()
    },
    getGoodsData (type) {
      const page = this.goods[type].page + 1
      getGoodsData(type, page)
      .then(res => {
        console.log(res)
        
      })
      .catch()
    }
  }
}
</script>

<style scoped>
.nav-bar {
  color: #fff;
  background: var(--color-tint);
}
</style>>
