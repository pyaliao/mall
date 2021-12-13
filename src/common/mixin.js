import { debounce } from "common/utils"

export const mixin = {
  data() {
    return {
      imgLoadedHandler: null,
    }
  },
  mounted() {
    // 监听goodsItem中图片加载完成，因为是非父子组件传值，所以用的事件总线
    // 每一张图片加载完成都会触发一次这个事件，因此在此进行防抖处理
    const refreshBS = debounce(this.$refs[this.scrollName].refresh, 200)
    this.imgLoadedHandler = () => {
      // console.log(this.msg)
      refreshBS()
    }
    this.$bus.$on('imgLoaded', this.imgLoadedHandler)
  },
}