import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import HomeView from '../views/HomeView.vue'

export default new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    // { path: '/user/:id', component: UserView },
    // { path: '/', redirect: '/top' }
    { path: '/', component: HomeView }
  ]
})
