<template>
    <swiper :showIndicator="true" class="detail-swiper">
      <swiper-item 
            class="detail-swiper-item"
            v-for="image, index in images" 
            :key="index">
        <img :src="image" alt="" srcset="">
      </swiper-item>
    </swiper>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper"

export default {
  name: 'DetailSwiper',
  components: {
    Swiper,
    SwiperItem
  },
  props: {
    images: {
      type: Array,
      default () {
        return []
      }
    }
  }
}
</script>

<style scoped>
/* .detail-swiper {
  height: 280px;
  overflow: hidden;
} */

.detail-swiper-item  {
  height: 280px;
  overflow: hidden;
}
</style>