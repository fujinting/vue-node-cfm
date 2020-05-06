import Vue from 'vue'
import VueRouter from 'vue-router'

import Main from '../views/Main.vue'
import Login from '../views/Login.vue'

// 进入时的页面
import HomePic from '../views/HomePic.vue'

// 新闻部分
import NewEdit from '../views/NewEdit'
import NewList from '../views/NewList'


// 视频部分
import VideoEdit from '../views/VideoEdit'
import VideoList from '../views/VideoList'

// 攻略部分
import StrategyEdit from '../views/StrategyEdit'
import StrategyList from '../views/StrategyList'

// 赛事部分
import MatchEdit from '../views/MatchEdit'
import MatchList from '../views/MatchList'

// 广告位部分
import AdEdit from '../views/AdEdit'
import AdList from '../views/AdList'

// 管理员部分
import AdminUserEdit from '../views/AdminUserEdit'
import AdminUserList from '../views/AdminUserList'


Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: { isPublic: true }
  },
  {
    path: '/',
    name: 'main',
    redirect:'/home',
    component: Main,
    children: [
      { path: '/home', component: HomePic },

      { path: '/news/create', component: NewEdit },
      { path: '/news/edit/:id', component: NewEdit, props: true },
      { path: '/news/list', component: NewList },

      { path: '/videos/create', component: VideoEdit },
      { path: '/videos/edit/:id', component: VideoEdit, props: true },
      { path: '/videos/list', component: VideoList },

      { path: '/strategies/create', component: StrategyEdit },
      { path: '/strategies/edit/:id', component: StrategyEdit, props: true },
      { path: '/strategies/list', component: StrategyList },

      { path: '/matchs/create', component: MatchEdit },
      { path: '/matchs/edit/:id', component: MatchEdit, props: true },
      { path: '/matchs/list', component: MatchList },

      { path: '/ads/create', component: AdEdit },
      { path: '/ads/edit/:id', component: AdEdit, props: true },
      { path: '/ads/list', component: AdList },

      { path: '/admin_users/create', component: AdminUserEdit },
      { path: '/admin_users/edit/:id', component: AdminUserEdit, props: true },
      { path: '/admin_users/list', component: AdminUserList },

    ]
  }

]

const router = new VueRouter({
  routes
})


// 导航守卫
router.beforeEach((to, from, next) => {
  if (!to.meta.isPublic && !localStorage.token) {
    return next('/login')
  }
  next()
})


export default router