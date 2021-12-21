<template>
  <div class="toastBox">
    <div class="tips">{{tips}}</div>
  </div>
</template>

<script>
export default {
  name: 'Toast',
  props: {
    tips: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>
.tips {
  padding: 10px 20px;
  background: rgba(0,0,0,.7);
  color: #fff;
  border-radius: 30px;
  font-size: 16px;
}
</style>