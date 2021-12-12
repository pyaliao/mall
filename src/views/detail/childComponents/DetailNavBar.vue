<template>
  <div class="detail-nav-bar">
    <nav-bar>
      <template #left>
        <div class="back" @click="back">
          <img src="~assets/img/common/back.svg" 
            alt="" srcset="">
        </div>
      </template>
      <template #center>
        <div class="center-nav-bar">
          <div class="item" 
              v-for="title, index in titles"  
              :key="title"
              :class="{active: currentIndex === index}"
              @click="clickNavItem(index)">
              {{title}}
          </div>
        </div>
      </template>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue'
export default {
  name: 'DetailNavBar',
  components: {
    NavBar
  },
  data () {
    return {
      titles: ['商品', '参数', '评论', '推荐'],
      currentIndex: 0
    }
  },
  methods: {
    clickNavItem (index) {
      console.log(index)
      this.currentIndex = index
    },
    back () {
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped>
.lefy {
  display: flex;
  align-items: center;
  justify-content: center;
}
.back img {
  width: 18px;
  vertical-align: middle;
}
.detail-nav-bar {
  box-shadow: 0 0px 10px 1px rgba(0, 0, 0, .1);
  font-size: 14px;
}
.center-nav-bar {
    display: flex;
    justify-content: space-evenly;
}
.item.active {
  color: var(--color-tint);
}
</style>
