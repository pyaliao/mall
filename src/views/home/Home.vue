<template>
  <div class="homeBox">
    <nav-bar class="nav-bar-home">
      <template #center>蘑菇街</template>
    </nav-bar>
    <scroll class="homeScroll">
      <home-swiper :banner="banner"></home-swiper>
      <home-recommend :recommend="recommend"></home-recommend>
      <home-feature></home-feature>
      <tab-control :titles="titles" @changeTab="changeTab"></tab-control>
        <goods-list :goods-list="currentGoodsList"></goods-list>
    </scroll>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue'
import Scroll from 'components/common/scroll/Scroll.vue'
import TabControl from 'components/content/tabControl/TabControl.vue'
import GoodsList from 'components/content/goodsList/GoodsList.vue'

import HomeSwiper from './childComponents/HomeSwiper.vue'
import HomeRecommend from "./childComponents/HomeRecommend.vue"
import HomeFeature from './childComponents/HomeFeature.vue'


import { getHomeData } from 'network/home.js'
import { getGoodsData } from 'network/home.js'




export default {
  components: {
    NavBar,
    Scroll,
    TabControl,
    GoodsList,
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
        sell:  {
          page: 0,
          list: []
        }
      },
      currentType: 'pop'
    }
  },
  computed: {
    currentGoodsList () {
      return this.goods[this.currentType].list
    }
  },
  created () {
    this.getHomeData()
    this.getGoodsData('pop')
    this.getGoodsData('new')
    this.getGoodsData('sell')

  },
  mounted () {

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
        this.goods[type].list = res.data.list
      })
      .catch()
    },
    changeTab (index) {
      console.log(index)
      switch (index) {
        case 0:
          this.currentType = 'pop'
          break;
        case 1:
          this.currentType = 'new'
          break
        case 2:
          this.currentType = 'sell'
          break
        default:
          break;
      }
    }
  }
}
</script>

<style scoped>
.homeBox {
  /* height: 100%; */
}
.homeScroll {
  /* height: calc(100% - 93px); */
  /* overflow: auto; */
}
.nav-bar-home {
  color: #fff;
  background: var(--color-tint);
  position: sticky;
  top: 0;
  left: 0;
  z-index: 1000;
}
</style>>
