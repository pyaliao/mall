<template>
  <div class="checkBtn" :class="{checked: isChecked}">
    <img src="~assets/img/cart/tick.svg" alt="">
  </div>
</template>

<script>
export default {
  name: 'CheckBtn',
  props: {
    isChecked: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    bgColor () {
      // 一定要注意拼写，background拼写错误找了半天
      return this.isChecked ? {background: 'var(--color-tint)'} : {background: '#fff'}
    }
  },
  methods: {
    clickBtn () {
      this.isChecked = !this.isChecked
      console.log(this.bgColor);
    }
  }
}
</script>

<style scoped>
.checkBtn {
  display: flex;
  border-radius: 50%;
  background: #fff;
  border: 1px solid #dedede;
  height: auto;
}
.checkBtn.checked {
  background: var(--color-tint);
  border-color: var(--color-tint);
}
.checkBtn img {
  width: 20px;
  flex-basis: 1;
  padding: 4px;
}
</style>