import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'

/**
 * 注意：
 * 当componeents下，vue文件与js文件同名的时候，引入的compoent一定要加.vue后缀，否则将加载js文件！
 * 在npm run dev状态下，同时有同名js在，删除这个后缀，不会报错，但下次重启或者build的时候，会报错！
**/

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home,
      children: [
        
      ]
    }
  ]
})
