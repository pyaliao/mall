<template>

  <div class="homeBox">
    <nav-bar class="nav-bar-home">
      <template #center>蘑菇街</template>
    </nav-bar>
    <tab-control :titles="titles" 
                class="topTabControl" 
                @changeTab="changeTab" 
                ref="topTabControl"
                v-show="isFixed" >
    </tab-control>
    <scroll class="homeScroll"
            ref="homeScroll"
            :probe-type="3"
            :listen-scroll="true"
            :pullup="true"
            :content-data="currentGoodsList"
            @scroll="contentScroll"
            @pullupload="loadMore"
            >
      
      <home-swiper :banner="banner" @swiperImgLoad="swiperImgLoad" ></home-swiper>
      <home-recommend :recommend="recommend"></home-recommend>
      <home-feature></home-feature>
      <tab-control :titles="titles" @changeTab="changeTab" ref="tabControl"></tab-control>
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


import { getHomeData } from 'network/home'
import { getGoodsData } from 'network/home'
import { mixin } from 'common/mixin'



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
  mixins: [mixin],
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
      showBackTopBtn: false,
      tabControlOffsetTop: 0,
      isFixed: false,
      savedY: 0,
      scrollName: 'homeScroll',
      msg: '首页加载图片监听---------'
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
  activated () {  // 被keep-alive缓存的组件激活时调用
    // 组件激活时滚动到保存的距离，然后刷新better-scroll
    this.$refs.homeScroll.scrollTo(0, this.savedY, 0)
    this.$refs.homeScroll.refresh()
  },
  deactivated () { // 被keep-alive缓存的组件失活时调用
    // 组件失活时保存页面滚动的距离
    this.savedY = this.$refs.homeScroll.getScrollY()
    // 组件失活时解除事件监听
    this.$bus.$off('imgLoaded', this.imgLoadedHandler)
  },
  methods: {
    getHomeData () {
      getHomeData()
      .then(res => {
        // console.log(res)
        this.banner = res.data.banner.list
        this.recommend = res.data.recommend.list
      })
      .catch()
    },
    getGoodsData (type) {
      const page = this.goods[type].page + 1
      getGoodsData(type, page)
      .then(res => {
        // console.log(res)
        this.goods[type].list.push(...res.data.list)
        this.goods[type].page = page
      })
      .catch(err => {

      })
    },
    changeTab (index) {
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
      this.$refs.topTabControl.currentIndex = index
      this.$refs.tabControl.currentIndex = index
    },
    backTop () {
      this.$refs.homeScroll.scrollTo(0, 0, 300)
    },
    contentScroll (pos) {

      // 1. 显示或者隐藏返回顶部按钮
      this.showBackTopBtn = Math.abs(pos.y) >= 1000 ? true : false

      // 2. 滚动距离大于一定距离就让tabControl吸顶
      this.isFixed = Math.abs(pos.y) >= this.tabControlOffsetTop ? true : false

    },
    loadMore () {
      this.getGoodsData(this.currentType)
    },
    getTabControlOffsetTop () {
      this.tabControlOffsetTop = this.$refs.tabControl.$el.offsetTop
      console.log(this.tabControlOffsetTop)
    },
    swiperImgLoad () {
      console.log('jinlail')
      this.getTabControlOffsetTop()
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
  /* 当触控事件发生在元素上时，不进行任何操作 */
  touch-action: none;
}
.nav-bar-home {
  color: #fff;
  background: var(--color-tint);
  position: sticky;
  top: 0;
  left: 0;
  z-index: 1000;
}
.topTabControl {
  position: fixed;
  width: 100%;
  top: 44px;
  left: 0;
}
</style>>
