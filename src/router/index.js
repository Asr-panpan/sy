import Vue from 'vue'
import VueRouter from 'vue-router'
import index from '../components/index.vue';
import gywm1 from '../components/gywm1.vue';
import about from '../components/test.vue'

Vue.use(VueRouter)

const routes = [
  {
    path:'/',redirect:'/index'
  },
  {path:'/index',component:index},
  {path:'/gywm1',component:gywm1,redirect:'/about',children:[
    {path:'/about',component:about}
  ]},
  
]

const router = new VueRouter({
  routes
})

export default router
