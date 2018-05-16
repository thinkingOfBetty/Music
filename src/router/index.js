import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import Ranking from '@/pages/ranking/Ranking'

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
    }
  ]
})
