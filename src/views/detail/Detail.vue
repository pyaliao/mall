<template>
  <div class="detailBox">
    <detail-nav-bar></detail-nav-bar>
    <scroll
          class="detailScroll"
          ref="detailScroll">
      <detail-swiper :images="topSwiperImages"></detail-swiper>
      <detail-goods-intro :goods="goods"></detail-goods-intro>
      <detail-shop :shop="shop"></detail-shop>
      <detail-goods-detail :detail="detail" @imgLoad="goodsDetailImgLoad"></detail-goods-detail>
      <detail-goods-params :params="params"></detail-goods-params>
      <detail-comment :comment="comment"></detail-comment>
    </scroll>
  </div>
</template>

<script>
import Scroll from 'components/common/scroll/Scroll'

import DetailNavBar from './childComponents/DetailNavBar'
import DetailSwiper from './childComponents/DetailSwiper'
import DetailGoodsIntro from './childComponents/DetailGoodsIntro'
import DetailShop from './childComponents/DetailShop'
import DetailGoodsDetail from './childComponents/DetailGoodsDetail'
import DetailGoodsParams from './childComponents/DetailParams'
import DetailComment from './childComponents/DetailComment'

import { getDetailData, Goods, Shop, GoodsDetail, GoodsParams, GoodsComment } from 'network/detail'

export default {
  name: 'Detail',
  components: {
    Scroll,
    DetailNavBar,
    DetailSwiper,
    DetailGoodsIntro,
    DetailShop,
    DetailGoodsDetail,
    DetailGoodsParams,
    DetailComment
  },
  data () {
    return {
      topSwiperImages: [],
      goods: {},
      shop: {},
      detail: {},
      params: {},
      comment: {}
    }
  },
  props: {
    iid: {
      type: String,
      default: ''
    }
  },
  created () {
    // 获取
    this.getDetailData(this.iid)
  },
  methods: {
    getDetailData (iid) {
      getDetailData(iid)
      .then(res => {
        console.log(res)
        const data = res.result
        // 1. 获取顶部轮播图数据
        this.topSwiperImages = data.itemInfo.topImages

        // 2. 获取商品信息
        this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)

        // 3. 获取商家信息
        this.shop = new Shop(data.shopInfo)

        // 4. 获取商品详情
        this.detail = new GoodsDetail(data.detailInfo)

        // 4. 获取商品参数信息
        this.params = new GoodsParams(data.itemParams.info, data.itemParams.rule)

        // 6. 获取用户评论信息
        this.comment = new GoodsComment(data.rate)
      })
      .catch()
    },
    goodsDetailImgLoad () {
      // 当所有图片加载完成，再刷新better-scroll
      this.$refs.detailScroll.refresh()
    }
  }
}
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
  height: calc(100% - 44px);
}
</style>