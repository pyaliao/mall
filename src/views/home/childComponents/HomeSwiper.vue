<template>
  <swiper>
      <swiper-item v-for="item in banner" :key="item.acm">
        <a :href="item.link">
          <img :src="item.image" alt="" srcset="">
        </a>
      </swiper-item>
    </swiper>
</template>

<script>
import { Swiper, SwiperItem } from 'components/common/swiper/swiper.js'
export default {
  name: 'HomeSwiper',
  components: {
    Swiper,
    SwiperItem
  },
  props: {
    banner: {
      type: Array,
      default () {
        return []
      }
    }
  }
}
</script>

<style>

</style>