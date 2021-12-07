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
      padding: 10px 0 30px;
      position: relative;
  }
  .recommed::before {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 10px;
    background-color: #e7e7e7;
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