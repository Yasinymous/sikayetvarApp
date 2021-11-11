import { createRouter, createWebHistory } from 'vue-router'
//Post
import PostList from '../views/post/post.vue'
import PostDetail from '../views/post/post.detail.vue'
// Profile
import Profile from '../views/profile/profile.vue'
// Auth
import AuthPage from '../views/auth/auth.vue'


const routes = [
  //auth
  {
    path: '/accounts/',
    name: 'Auth',
    component: AuthPage
  },
  //profile
  {
    path: '/profile/:id',
    name: 'Profile',
    component: Profile
  },
  // post
  {
    path: '/',
    name: 'Posts',
    component: PostList
  },
  {
    path: '/post/:id',
    name: 'Post Detail',
    component: PostDetail
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
