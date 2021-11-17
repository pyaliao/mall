<template>
  <div>
    <nav-bar class="nav-bar">
      <template #center>蘑菇街</template>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue'

export default {
  components: { NavBar },

}
</script>

<style scoped>
.nav-bar {
  color: #fff;
  background: var(--color-tint);
}
</style>>
