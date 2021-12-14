<template>
  <div class="detailBox">
    <detail-nav-bar @navItemClick="navItemClick" ref="detailNavBar"></detail-nav-bar>
    <scroll
      class="detailScroll"
      ref="detailScroll"
      :listenScroll="true"
      @scroll="scroll"
      :probe-type="3"
    >
      <detail-swiper ref="swiper" :images="topSwiperImages"></detail-swiper>
      <detail-goods-intro :goods="goods"></detail-goods-intro>
      <detail-shop :shop="shop"></detail-shop>
      <detail-goods-detail
        :detail="detail"
        @imgLoad="goodsDetailImgLoad"
      ></detail-goods-detail>
      <detail-goods-params ref="params" :params="params"></detail-goods-params>
      <detail-comment ref="comment" :comment="comment"></detail-comment>
      <goods-list ref="recommend" :goods-list="recommend"></goods-list>
    </scroll>
    <detail-bottom-bar></detail-bottom-bar>
    <back-top-btn @click.native="backTop" v-show="showBackTopBtn"></back-top-btn>
  </div>
</template>

<script>
import Scroll from "components/common/scroll/Scroll"
import GoodsList from "components/content/goodsList/GoodsList"

import DetailNavBar from "./childComponents/DetailNavBar"
import DetailSwiper from "./childComponents/DetailSwiper"
import DetailGoodsIntro from "./childComponents/DetailGoodsIntro"
import DetailShop from "./childComponents/DetailShop"
import DetailGoodsDetail from "./childComponents/DetailGoodsDetail"
import DetailGoodsParams from "./childComponents/DetailParams"
import DetailComment from "./childComponents/DetailComment"
import DetailBottomBar from './childComponents/DetailBottomBar'

import {
  getDetailData,
  getDetailRecommend,
  Goods,
  Shop,
  GoodsDetail,
  GoodsParams,
  GoodsComment,
} from "network/detail"

import { mixin, backTopMixin } from "common/mixin"
import { debounce } from "common/utils"
import { BACK_TO_POSITION } from 'common/const'

export default {
  name: "Detail",
  components: {
    Scroll,
    GoodsList,
    DetailNavBar,
    DetailSwiper,
    DetailGoodsIntro,
    DetailShop,
    DetailGoodsDetail,
    DetailGoodsParams,
    DetailComment,
    DetailBottomBar,
  },
  mixins: [mixin, backTopMixin],
  data() {
    return {
      topSwiperImages: [],
      goods: {},
      shop: {},
      detail: {},
      params: {},
      comment: {},
      recommend: [],
      navOffsetTops: [],
      scrollName: "detailScroll",
      getOffsetTops: null,
      currentIndex: 0,
      msg: "-------在详情页监听加载事件",
    };
  },
  props: {
    iid: {
      type: String,
      default: "",
    },
  },
  created() {
    // 获取详情数据
    this.getDetailData(this.iid);
    // 获取推荐数据
    this.getDetailRecommend();
    // 防抖处理
    this.getOffsetTops = debounce(() => {
      this.navOffsetTops[0] = this.$refs.swiper.$el.offsetTop;
      this.navOffsetTops[1] = this.$refs.params.$el.offsetTop;
      this.navOffsetTops[2] = this.$refs.comment.$el.offsetTop;
      this.navOffsetTops[3] = this.$refs.recommend.$el.offsetTop;
    });
  },
  mounted() {},
  // 因为detail组件没有keep-alive，因此使用destroy钩子取消事件监听
  destroyed() {
    // 组件失活时解除事件监听
    this.$bus.$off("imgLoaded", this.imgLoadedHandler);
  },
  methods: {
    getDetailData(iid) {
      getDetailData(iid)
        .then((res) => {
          // console.log(res)
          const data = res.result;
          // 1. 获取顶部轮播图数据
          this.topSwiperImages = data.itemInfo.topImages;

          // 2. 获取商品信息
          this.goods = new Goods(
            data.itemInfo,
            data.columns,
            data.shopInfo.services
          );

          // 3. 获取商家信息
          this.shop = new Shop(data.shopInfo);

          // 4. 获取商品详情
          this.detail = new GoodsDetail(data.detailInfo);

          // 4. 获取商品参数信息
          this.params = new GoodsParams(
            data.itemParams.info,
            data.itemParams.rule
          );

          // 6. 获取用户评论信息
          this.comment = new GoodsComment(data.rate);
        })
        .catch();
    },
    getDetailRecommend() {
      getDetailRecommend()
        .then((res) => {
          // console.log(res)
          this.recommend = res.data.list;
        })
        .catch();
    },
    goodsDetailImgLoad() {
      // 当所有图片加载完成，再刷新better-scroll
      this.$refs.detailScroll.refresh();
      // 1. 在下次 DOM 更新循环结束之后执行延迟回调。在修改数据之后立即使用这个方法，获取更新后的 DOM。
      // 放在数据修改之后求值依然有问题，因为虽然dom渲染完成，但是图片还没有加载完成，因此内容没有完全撑开，导致计算结果出错
      // this.$nextTick(() => {
      //   this.navOffsetTops[0] = this.$refs.swiper.$el.offsetTop
      //   this.navOffsetTops[1] = this.$refs.params.$el.offsetTop
      //   this.navOffsetTops[2] = this.$refs.comment.$el.offsetTop
      //   this.navOffsetTops[3] = this.$refs.recommend.$el.offsetTop
      //   console.log(this.navOffsetTops)
      // })
      // 2. 因为事件频繁触发，因此做了防抖处理
      this.getOffsetTops();
    },
    navItemClick(index) {
      this.$refs.detailScroll.scrollTo(0, -this.navOffsetTops[index], 200);
    },
    scroll(pos) {
      // 每次滚动都会触发，每次触发都会遍历一遍
      // 1. 获取滚动值，通过判断选择相应的标签
      const scrollY = -pos.y;
      const len = this.navOffsetTops.length;
      for (let i = 0; i < len; i++) {
        if (
          (this.currentIndex !== i) &&
          (i < len - 1 &&
            scrollY >= this.navOffsetTops[i] &&
            scrollY < this.navOffsetTops[i + 1]) ||
          (i === len - 1 && scrollY >= this.navOffsetTops[i])
        ) {
          this.currentIndex = i;
          this.$refs.detailNavBar.currentIndex = this.currentIndex
        }
      }
      // 2. 显示或者隐藏返回顶部按钮
      this.listenShowBackTopBtn(pos)
    },
  },
};
</script>

<style scoped>
.detailBox {
  height: 100vh;
  position: relative;
  z-index: 1000;
  background: #fff;
}
.detailScroll {
  /* better-scroll必须定位 */
  position: relative;
  overflow: hidden;
  /* better-scroll的必须给定一个确定的高度 */
  height: calc(100% - 44px - 60px);
  /* 当触控事件发生在元素上时，不进行任何操作 */
  touch-action: none;
}
</style>