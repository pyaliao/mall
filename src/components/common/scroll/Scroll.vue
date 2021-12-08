<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from '@better-scroll/core'

export default {
  name: 'Scroll',
  props: {
    height: {
      type: String,
      default () {
        return '200px'
      }
    }
  },
  mounted () {
    const bs = new BScroll(this.$refs.wrapper, {
      scrollY: true,
      click: true,
      probeType: 3
    })
  }
}
</script>

<style scoped>

</style>