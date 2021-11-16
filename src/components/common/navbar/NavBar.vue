<template>
  <div class="nav-bar">
    <slot name="left"></slot>
    <slot name="center"></slot>
    <slot name="right"></slot>
  </div>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<style>
.nav-bar {
  display: flex;
  height: 44px;
  line-height: 44px;
}
.left,
.right {
  width: 60px;
}
.center {
  flex: 1;
}
</style>