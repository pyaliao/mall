<template>
  <div class="recommed">
    <div class="item" v-for="item in recommend" :key="item.acm">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div class="title">{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  props: {
    recommend: {
      type: Array,
      default () {
        return []
      }
    }
  }
}
</script>

<style scoped>
  .recommed {
      display: flex;
      justify-content: space-evenly;
      margin: 10px 0;
  }
  .item {
    width: 20%;
  }
  .recommed a {
    width: 100%;
    display: block;
  }
  .recommed a > img {
    width: 100%;
  }
  .recommed a .title {
    text-align: center;
    font-size: 14px;
    margin-top: 4px;
  }
</style>