import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import Ranking from '@/pages/ranking/Ranking'
import Singer from '@/pages/singer/Singer'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }, {
      path: '/ranking',
      name: 'Ranking',
      component: Ranking
    }, {
      path: '/singer',
      name: 'Singer',
      component: Singer
    }
  ]
})
