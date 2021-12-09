<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
  name: 'Scroll',
  props: {
    /**
     * 1 滚动的时候会派发scroll事件，会截流。
     * 2 滚动的时候实时派发scroll事件，不会截流。
     * 3 除了实时派发scroll事件，在swipe的情况下仍然能实时派发scroll事件
     */
    probeType: {
      type: Number,
      default: 1
    },
    /**
     * 点击列表是否派发click事件
     */
    click: {
      type: Boolean,
      default: true
    },
    /**
     * 是否开启横向滚动
     */
    scrollX: {
      type: Boolean,
      default: false
    },
    /**
     * 是否要重新刷新better-scroll
     */
    isrefresh: {
      type: Boolean,
      default: false
    },
    /**
     * 是否派发scroll事件
     */
    listenScroll: {
      type: Boolean,
      default: false
    },
    /**
     * 列表的数据库
     */
    contentData: {
      type: Array,
      default () {
        return []
      }
    },
    /**
     * 是否派发顶部下拉事件，用来下拉刷新
     */
    pulldown: {
      type: Boolean,
      default: false
    },
    /**
     * 是否派发滚动到底部的事件，用来上拉加载
     */
    pullup: {
      type: Boolean,
      default: false
    },
    /**
     * 是否派发列表滚动开始的事件
     */
    beforeScroll: {
      type: Boolean,
      default: false
    },
    /**
     * 数据更新在之后，刷新better-scroll的时延
     */
    refreshDelay: {
      type: Number,
      default: 200
    },

  },
  mounted () {
    // 保证在DOM渲染完毕后初始化better-scroll
    setTimeout(() => {
      this._initScroll()
    }, 500)

  },
  methods: {
    _initScroll () {
      if (!this.$refs.wrapper) {
          return
      }
      // better-scroll的初始化
      this.scroll = new BScroll(this.$refs.wrapper, {
        probeType: this.probeType,
        click: this.click,
        scrollX: this.scrollX,
        pullDownRefresh: this.pulldown,
        pullUpLoad: this.pullup
      })
      // 是否派发滚动事件
      if (this.listenScroll) {
        this.scroll.on('scroll', (pos) => {
          this.$emit('scroll', pos)
        })
      }
      // 是否派发滚动到底部事件，用于上拉加载
      // 不使用pullup插件
      if (this.pullup) {
        this.scroll.on('scrollEnd', () => {
          if (this.scroll.y <= (this.scroll.maxScrollY + 50)) {
            this.$emit('pullupload')
          }
        })
      }
      //是否派发顶部下拉事件，用于下拉刷新
      // 不使用pulldown插件
      if (this.pulldown) {
        this.scroll.on('touchEnd', (pos) => {
          if (pos.y > 50) {
            this.$emit('pulldownRefresh')
          }
        })
      }
    },
    scrollTo() {
      // 代理better-scroll的scrollTo方法
      this.scroll && this.scroll.scrollTo.apply(this.scroll, arguments)
    },
    refresh() {
      // 代理better-scroll的refresh方法
      this.scroll && this.scroll.refresh()
    },
  },
  watch: {
    contentData () {
      setTimeout(() => {
        this.refresh()
      }, this.refreshDelay)
    }
  }
}
</script>

<style scoped>

</style>