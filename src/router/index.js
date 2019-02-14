import Vue from 'vue'
import Router from 'vue-router'
import chart from '@/components/index.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'chart',
      component: chart
    }
  ]
})
