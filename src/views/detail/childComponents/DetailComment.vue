<template>
  <div class="commentWrapper" >
    <div class="top">
      <div class="title">用户评价</div>
      <div class="more">更多</div>
    </div>
    <div class="commentContBox"  v-if="comment.info">
      <div class="userInfo">
        <img :src="comment.info.user && comment.info.user.avatar" alt="" srcset="">
        <span class="userName">{{comment.info.user && comment.info.user.uname}}</span>
      </div>
      <div class="comment">
        {{comment.info.content}}
      </div>
      <div class="dateTime">
        <span>{{comment.info.created | processTime}}</span>
        <span>{{comment.info.style}}</span>
      </div>
      <div class="images" v-if="comment.info.images">
        <img  v-for="img, index in comment.info.images"
              :key="index"
              :src="img" alt="" srcset="">
      </div>
    </div>
  </div>
</template>

<script>
import { formatDate } from 'common/utils.js'
export default {
  name: 'DetailComment',
  props: {
    comment: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  mounted () {

  },
  filters: {
    processTime (value) {
      if (!value) {
        return ''
      }
      return formatDate(new Date(value * 1000), 'yyyy-MM-dd hh:mm:ss')
    }
  },
  watch: {
    comment () {
    }
  }
}
</script>

<style scoped>
.commentWrapper {
  padding: 20px;
}
.top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 14px;
    padding: 15px 0;
    border: 1px solid #efefef;
    border-left: none;
    border-right: none;
}
.commentContBox {
  margin-top: 15px;
}
.userInfo {
  display: flex;
  align-items: center;
}
.userInfo img {
  width: 45px;
  border-radius: 50%;
  margin-right: 20px;
}
.userName {
  font-size: 14px;
}
.comment {
  margin: 15px 0;
  font-size: 14px;
}
.images {
  display: flex;
  flex-wrap: wrap;
  margin-top: 15px;
}
.images  > img {
  width: 24%;
  margin-right: 10px;
  object-fit: cover;
}
.dateTime {
  font-size: 12px;
  color: #aaa;
}
.dateTime span {
  margin-right: 10px;
}
</style>