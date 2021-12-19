module.exports = {
  // 链式配置适用于webpack2-4
  // 配置resolve中的别名
  chainWebpack: config => {
    config.resolve.alias
      .set('assets', '@/assets')
      .set('common', '@/common')
      .set('components', '@/components')
      .set('network', '@/network')
      .set('router', '@/router')
      .set('store', '@/store')
      .set('views', '@/views')
  }
}
