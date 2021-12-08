<template>
  
  <div class="homeBox">
    <nav-bar class="nav-bar-home">
      <template #center>蘑菇街</template>
    </nav-bar>
    <scroll class="homeScroll" ref="homeScroll"> 
      <home-swiper :banner="banner"></home-swiper>
      <home-recommend :recommend="recommend"></home-recommend>
      <home-feature></home-feature>
      <tab-control :titles="titles" @changeTab="changeTab"></tab-control>
      <goods-list :goods-list="currentGoodsList"></goods-list>
    </scroll>
    
    <back-top-btn @click.native="backTop" ></back-top-btn>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue'
import Scroll from 'components/common/scroll/Scroll.vue'
import TabControl from 'components/content/tabControl/TabControl.vue'
import GoodsList from 'components/content/goodsList/GoodsList.vue'
import BackTopBtn from 'components/content/backTopBtn/BackTopBtn.vue'

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
    BackTopBtn,
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
      currentType: 'pop',
      isrefresh: false
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
    // this.isrefresh = true
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
        // this.goods[type].list = this.goods[type].list.concat(res.data.list)
        this.goods[type].list.push(...res.data.list)
        this.goods[type].page = page
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
    },
    backTop () {
      this.$refs.homeScroll.scrollTo(0, 0, 300)
    }
  }
}
</script>

<style scoped>
.homeBox {
  height: 100vh;
}
.homeScroll {
  /* better-scroll必须定位 */
  position: relative;
  overflow: hidden;
  /* better-scroll的必须给定一个确定的高度 */
  height: calc(100% - 93px);
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
