import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../components/Main.vue'
import Contacts from '../components/layuot/Contacts.vue'
import Develop from '../components/layuot/Develop.vue'
import Video from '../components/layuot/Video.vue'
import Vacancy from '../components/layuot/Vacancy.vue'
import UxUi from '../components/layuot/UxUi.vue'
import Design from '../components/layuot/Design.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main
  },

  {
    path: '/design',
    name: 'Design',
    component: Design,

  },

  {
    path: '/uxui',
    name: 'UxUi',
    component: UxUi,

  },
  {
    path: '/develop',
    name: 'Develop',
    component: Develop,

  },

  {
    path: '/video',
    name: 'Video',
    component: Video,
 
  },

  {
    path: '/vacancy',
    name: 'Vacancy',
    component: Vacancy,

  },

  {
    path: '/contacts',
    name: 'Contacts',
    component: Contacts,
  }

]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
