import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Profile from '../views/Profile'
import CameraDetection from '../views/CameraDetection'
import DoneSellWasteItem from '../views/DoneSellWasteItem'
import RecyclerListToSellWasteItem from '../views/RecyclerListToSellWasteItem'
import SellWasteItemForm from '../views/SellWasteItemForm'
import ReviewAndGreeting from '../views/ReviewAndGreeting'
import Notification from '../views/Notification'
import SellRecycledItemForm from '../views/SellRecycledItemForm'
import ProductDetail from '../views/ProductDetail'
import Login from '../views/Login'
import SignUp from '../views/SignUp'
import WasteTypeDetail from '../views/WasteTypeDetail'
import Cart from '../views/Cart'
// import store from '../store/modules/auth'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/signup',
    name: 'sign up',
    component: SignUp
  },
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
  },
  {
    // path: '/sell-item/:sub-waste-category/thank-you',
    path: '/sell-item/thank-you',
    name: 'ReviewAndGreeting',
    component: ReviewAndGreeting
  },
  {
    path: '/notification',
    name: 'Notification',
    component: Notification
  },
  {
    path: '/sell-product/sell',
    name: 'SellRecycledItemForm',
    component: SellRecycledItemForm
  },
  {
    // path: '/sell-item/:sub-waste-category/sell/type',
    path: '/sell-item/sell/type',
    name: 'Waste Type Detail',
    component: WasteTypeDetail
  },
  {
    // path: '/product/:category/:productName',
    path: '/product',
    name: 'ProductDetail',
    component: ProductDetail
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
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

// router.beforeEach((to, from, next) => {
//   if (to.matched.some((record) => record.meta.requiresAuth)) {
//     if (store.getters.isAuthenticated) {
//       next()
//       return
//     }
//     next('/login')
//   } else {
//     next()
//   }
// })
//
// router.beforeEach((to, from, next) => {
//   if (to.matched.some((record) => record.meta.guest)) {
//     if (store.getters.isAuthenticated) {
//       next('/')
//       return
//     }
//     next()
//   } else {
//     next()
//   }
// })

export default router
