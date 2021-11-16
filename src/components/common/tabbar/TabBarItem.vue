<template>
  <div class="tab-bar-item" @click="itemClick">
    <slot v-if="!isActive" name="icon"></slot>
    <slot v-else name="icon-active"></slot>
    <div  :style="activeTitleStyle" class="title">
      <slot name="title"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabBarItem',
  props: {
    path: String,
    activeColor: {
      type: String,
      default: '#B81C22'
    }
  },
  data () {
    return {
      // isActive: false
    }
  },
  computed: {
    isActive: {
      get () {
        return this.$route.path.indexOf(this.path) !== -1
      },
      set () {}
    },
    activeTitleStyle: {
      get () {
        return this.isActive ? { color: this.activeColor } : {}
      },
      set () {}
    }
  },
  methods: {
    itemClick () {
      console.log('被点击了---------', this.path)
      if (this.$route.path === this.path) {

      } else {
        this.$router.replace(this.path)
        this.isActive = true
      }
    }
  }
}
</script>

<style>
.tab-bar-item {
  flex: 1;
}
.tab-bar-item img {
  width: 24px;
  vertical-align: middle;
}
.tab-bar-item .title {
  font-size: 14px;
  color:#333;
}
.tab-bar-item .title.active  {
  color: #B81C22;
}
</style>
