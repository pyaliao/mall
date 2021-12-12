import { request } from './request'

// 请求详情页所有数据
export function getDetailData(iid) {
  return request({
    url: '/detail',
    params: {
      iid
    }
  })
}

// 处理商品信息
export class Goods {
  constructor (itemInfo, columns, services) {
    this.title = itemInfo.title
    this.desc = itemInfo.desc
    this.newPrice = itemInfo.price
    this.oldPrice = itemInfo.oldPrice
    this.realPrice = itemInfo.lowNowPrice
    this.discount = itemInfo.discountDesc
    this.discountBgColor = itemInfo.discountBgColor
    this.columns = columns
    this.services = services
  }
}

// 处理商家信息
export class Shop {
  constructor (shopInfo) {
    this.name = shopInfo.name
    this.shopLogo = shopInfo.shopLogo
    this.cFans = shopInfo.cFans
    this.cGoods = shopInfo.cGoods
    this.cSells = shopInfo.cSells
    this.score = shopInfo.score
  }
}

// 处理商品详情信息
export class GoodsDetail {
  constructor (detailInfo) {
    this.desc = detailInfo.desc
    this.detailImage = detailInfo.detailImage
  }
}

// 处理商品参数信息
export class GoodsParams {
  constructor (info, rule) {
    this.image = info.images ? info.images[0] : ''
    this.info = info.set
    this.rule = rule.tables
  }
}