<template>
  <div class="tabControl">
    <div
      class="tabControlItem"
      v-for="(title, index) in titles"
      :class="{ active: currentIndex === index }"
      :key="index"
      @click="clickItem(index)"
    >
      <span>{{ title }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  data() {
    return {
      currentIndex: 0,
    };
  },
  props: {
    titles: {
      type: Array,
      default() {
        return ["流行", "新款", "精选"];
      },
    },
  },
  methods: {
    clickItem(index) {
      this.currentIndex = index;
      this.$emit("changeTab", index);
    },
  },
};
</script>

<style scoped>
.tabControl {
  display: flex;
  align-items: center;
  height: 40px;
  line-height: 40px;
  font-size: 15px;
  text-align: center;
  position: relative;
  left: 0;
  top: 0;
  background: #fff;
  z-index: 1000;
}
.tabControlItem {
  flex: 1;
}
.tabControlItem > span {
  padding: 10px;
  position: relative;
}
.tabControlItem.active > span {
  color: var(--color-tint);
}
.tabControlItem.active > span::before {
  content: "";
  position: absolute;
  left: 50%;
  bottom: 0;
  width: 80%;
  height: 3px;
  transform: translateX(-50%);
  background-color: var(--color-tint);
}
</style>