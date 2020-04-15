import Vue from 'vue'
import VueRouter from 'vue-router'

import Main from '../views/Main.vue'
import Match from '../views/Match.vue'
import Strategy from '../views/Strategy.vue'
import Video from '../views/Video.vue'

// 视频
import VideoNew from '../view/video/VideoNew'            //最新
import VideoIsland from '../view/video/VideoIsland'     //荒岛
import VideoBoutique from '../view/video/VideoBoutique' //精品
import VideoMatch from '../view/video/VideoMatch'        //赛事
import VideoAdvanced from '../view/video/VideoAdvanced'   //进阶
import VideoNovice from '../view/video/VideoNovice'       //新手
import VideoGun from '../view/video/VideoGun'           //枪械


// 攻略
import StrategyGun from '../view/strategy/StrategyGun'  //枪械
import StrategyPvp from '../view/strategy/StrategyPvp'  //pvp
import StrategyPve from '../view/strategy/StrategyPve'  //pve
import StrategyAdvanced from '../view/strategy/StrategyAdvanced'   //进阶
import StrategyNovice from '../view/strategy/StrategyNovice'   //新手
import StrategyBoss from '../view/strategy/StrategyBoss'      //boss
import StrategyMap from '../view/strategy/StrategyMap'    //地图
import StrategyHdtx from '../view/strategy/StrategyHdtx'  //荒岛特训


// 赛事详情页
import MatchDetail from '../views/MatchDetail'
// 攻略详情页
import StrategyDetail from '../views/StrategyDetail'
// 新闻公告详情页
import NewDetail from '../views/NewDetail'



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/main'

  },

  {
    path: '/main',
    component: Main,

  },
  {
    path: '/new/detail/:id',
    component: NewDetail,
    props: true
  },
  {
    path: '/match',
    component: Match,

  },
  {
    path: '/match/detail/:id',
    component: MatchDetail,
    props: true

  },
  {
    path: '/strategy',
    component: Strategy,
    redirect: '/strategy/gun',
    children: [
      { path: '/strategy/gun', component: StrategyGun },
      { path: '/strategy/pvp', component: StrategyPvp },
      { path: '/strategy/pve', component: StrategyPve },
      { path: '/strategy/advanced', component: StrategyAdvanced },
      { path: '/strategy/novice', component: StrategyNovice },
      { path: '/strategy/boss', component: StrategyBoss },
      { path: '/strategy/map', component: StrategyMap },
      { path: '/strategy/hdtx', component: StrategyHdtx },

    ]

  },
  {
    path: '/strategy/detail/:id',
    component: StrategyDetail,
    props: true

  },
  {
    path: '/video',
    component: Video,
    redirect: '/video/new',
    children: [
      { path: '/video/new', component: VideoNew },
      { path: '/video/island', component: VideoIsland },
      { path: '/video/boutique', component: VideoBoutique },
      { path: '/video/match', component: VideoMatch },
      { path: '/video/advanced', component: VideoAdvanced },
      { path: '/video/novice', component: VideoNovice },
      { path: '/video/gun', component: VideoGun },
    ]
  },

]

const router = new VueRouter({
  routes,
  scrollBehavior (to, from, savedPosition) {    // eslint-disable-line no-unused-vars
    return { x: 0, y: 0}
  }
  
})

export default router