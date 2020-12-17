import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Profile from '../views/Profile'
import CameraDetection from '../views/CameraDetection'
import DoneSellWasteItem from '../views/DoneSellWasteItem'
import RecyclerListToSellWasteItem from '../views/RecyclerListToSellWasteItem'
import SellWasteItemForm from '../views/SellWasteItemForm'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/sell-item/camera',
    name: 'Camera Detection',
    component: CameraDetection
  },
  {
    path: '/sell-item/:id/success',
    name: 'Done Sell Waste Item',
    component: DoneSellWasteItem
  },
  {
    // path: '/sell-item/:sub-waste-category/list-recycler',
    path: '/sell-item/list-recycler',
    name: 'Recyclers Sell Waste Item',
    component: RecyclerListToSellWasteItem
  },
  {
    // path: '/sell-item/:sub-waste-category/sell',
    path: '/sell-item/sell',
    name: 'Sell Waste Item Form',
    component: SellWasteItemForm
  }
  // {
  // path: '/about',
  // name: 'About',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
