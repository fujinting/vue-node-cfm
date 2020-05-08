import request from './network.js'

//主页轮播图
export function getMainBannes() {
  return request({
    url: '/web/api/main/ads'
  })
}

// 主页新闻
export function getMainNews() {
  return request({
    url: '/web/api/main/news'
  })
}

//主页视频
export function getMainVideos(type, page) {
  return request({
    url: '/web/api/main/videos'
  })
}

// 主页攻略
export function getMainStrategies(type, page) {
  return request({
    url: '/web/api/main/strategies'
  })
}
