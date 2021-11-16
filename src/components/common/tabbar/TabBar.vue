<template>
  <div class="tab-bar">
    <slot></slot>
  </div>
</template>

<script>

export default {
  name: 'TabBar',
  components: {

  }
}
</script>

<style>
.tab-bar {
  height: 49px;
  text-align: center;
  display: flex;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, .04);
  box-shadow: 0 0px 10px 1px rgba(0, 0, 0, .1);
  align-items: center;
}

</style>
