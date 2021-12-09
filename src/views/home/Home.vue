<template>

  <div class="homeBox">
    <nav-bar class="nav-bar-home">
      <template #center>蘑菇街</template>
    </nav-bar>
    <scroll class="homeScroll"
            ref="homeScroll"
            :probe-type="3"
            :listen-scroll="true"
            :pullup="true"
            :content-data="currentGoodsList"
            @scroll="contentScroll"
            @pullupload="loadMore" >
      <home-swiper :banner="banner"></home-swiper>
      <home-recommend :recommend="recommend"></home-recommend>
      <home-feature></home-feature>
      <tab-control :titles="titles" @changeTab="changeTab"></tab-control>
      <goods-list :goods-list="currentGoodsList"></goods-list>
    </scroll>

    <back-top-btn @click.native="backTop" v-show="showBackTopBtn"></back-top-btn>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import Scroll from 'components/common/scroll/Scroll'
import TabControl from 'components/content/tabControl/TabControl'
import GoodsList from 'components/content/goodsList/GoodsList'
import BackTopBtn from 'components/content/backTopBtn/BackTopBtn'

import HomeSwiper from './childComponents/HomeSwiper'
import HomeRecommend from "./childComponents/HomeRecommend"
import HomeFeature from './childComponents/HomeFeature'


import { getHomeData } from 'network/home.js'
import { getGoodsData } from 'network/home.js'
import func from 'vue-editor-bridge'




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
      isrefresh: false,
      showBackTopBtn: false
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
    // 监听goodsItem中图片加载完成，因为是非父子组件传值，所以用的事件总线
    // 每一张图片加载完成都会触发一次这个事件，因此在此进行防抖处理
    this.$bus.$on('imgloaded', (e) => {
      console.log('dcccccccccccccccccccc')
      this.$refs.homeScroll.refresh()
    })
  },
  mounted () {
    // this.isrefresh = true
  },
  methods: {
    debounce (func, delay) {
      let timer = null
      return function (arguments) {
        if (timer) {
          clearTimeout(timer)
        }
        timer = setTimeout(() => {
          func.apply(this, arguments)
        }, delay)
      }
    },
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
      .catch(err => {

      })
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
    },
    contentScroll (pos) {
      console.log(pos)
      this.showBackTopBtn = Math.abs(pos.y) >= 1000 ? true : false
    },
    loadMore () {
      this.getGoodsData(this.currentType)
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
