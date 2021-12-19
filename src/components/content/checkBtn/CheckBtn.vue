<template>
  <div class="checkBtn" :class="{checked: isChecked}" @click="clickBtn">
    <img src="~assets/img/cart/tick.svg" alt="">
  </div>
</template>

<script>
export default {
  name: 'CheckBtn',
  props: {
    isChecked: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    bg () {
     console.log('-----', this.isChecked);
      return this.isChecked ? {backgound: 'var(--color-tint)'} : {backgound: '#fff'}
    }
  },
  methods: {
    clickBtn () {
      this.isChecked = !this.isChecked
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