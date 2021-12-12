<template>
  <div class="goodsParamsBox">
    <div class="ruleList" v-if="params.rule">
      <div class="item" v-for="item, index in params.rule[0]" :key="index">
              <div class="key">{{item[0]}}</div>
              <div class="valueBox" >
                <template v-for="subIndex in item.length - 1">
                  <template v-if="subIndex > 0">
                    <div class="value" :key="subIndex">{{item[subIndex]}}</div>
                  </template>
                </template>
              </div>
      </div>
    </div> 
    <div class="paramsList" v-if="params.info">
      <div class="item" v-for="item, index in params.info" :key="index">
        <div class="key">{{item.key}}</div>
        <div class="value">{{item.value}}</div>
      </div>
      <img v-if="params.image" :src="params.image" alt="" srcset="">
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailGoodsParams',
  props: {
    params: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  watch: {
    params () {
      const len = this.params.rule.length
      if (len > 1) {
        for (let i = 1; i < len; i++) {
          for (let j = 0; j < len; j++) {
            this.params.rule[0][j] = this.params.rule[0][j].concat(this.params.rule[i][j].slice(1))
          }
        }
      } 
    }
  }
}
</script>

<style scoped>
.paramsList {
  padding: 20px;
}
.paramsList .item {
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  padding: 14px 0;
  border-bottom: 1px solid #efefef;
}
.paramsList .item .value {
  color: var(--color-tint);
  flex: 1;
}
.paramsList .item .key {
    min-width: 8em;
}
.paramsList > img {
  width: 100%;
  display: block;
}
.ruleList {
  padding: 20px;
  border-bottom: 1px solid #efefef;
}
.ruleList .item {
  display: flex;
  padding: 10px 0;
  font-size: 14px;
}
.ruleList .item .valueBox {
  flex: 1;
  display: flex;
  justify-content: flex-start;
}
.ruleList .value {
  margin-right: 15px;
  text-align: left;
  min-width: 30px;
}
.ruleList .key {
  min-width: 40px;
  margin-right: 20px;
}
</style>