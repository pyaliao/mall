<template>
  <div class="toastBox" v-show="showToast">
    <div class="tips">{{tips}}</div>
  </div>
</template>

<script>
export default {
  name: 'Toast',
  data () {
    return {
      showToast: false,
      tips:''
    }
  },
  // props: {
  //   tips: {
  //     type: String,
  //     default: ''
  //   },
  //   showToast:{
  //     type:Boolean,
  //     default: false
  //   }
  // },
  methods: {
    show (tips, duration=2000) {
      this.tips = tips
      this.showToast = true
      setTimeout(() => {
        this.tips = ''
        this.showToast = false
      }, duration);
    }
  }
}
</script>

<style scoped>
.toastBox {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
}
.tips {
  padding: 10px 20px;
  background: rgba(0,0,0,.8);
  color: #fff;
  border-radius: 30px;
  font-size: 16px;
}
</style>