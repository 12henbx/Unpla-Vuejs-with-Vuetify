import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('../views/Home.vue')
const Profile = () => import('../views/Profile')
// const RecyclerProfile = () => import('../components/tab/RecyclerProfile')
// const UserProfile = () => import('../components/tab/UserProfile')
const CameraDetection = () => import('../views/CameraDetection')
const SelectWasteCategory = () => import('../components/modal/SelectWasteCategory')
// const DoneSellWasteItem = () => import('../views/DoneSellWasteItem')
const RecyclerListToSellWasteItem = () => import('../views/RecyclerListToSellWasteItem')
const SellWasteItemForm = () => import('../views/SellWasteItemForm')
const ReviewAndGreeting = () => import('../views/ReviewAndGreeting')
const Notification = () => import('../views/Notification')
const SellRecycledItemForm = () => import('../views/SellRecycledItemForm')
const ProductDetail = () => import('../views/ProductDetail')
const Login = () => import('../views/Login')
const SignUp = () => import('../views/SignUp')
const Cart = () => import('../views/Cart')
const ProductBuy = () => import('../views/ProductBuy')

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
    // children: [
    //   {
    //     path: 'blabla',
    //     name: 'UserProfile',
    //     component: UserProfile
    //   },
    //   {
    //     path: 'blublu',
    //     name: 'RecyclerProfile',
    //     component: RecyclerProfile
    //   }
    // ]
  },
  {
    path: '/sell-item/camera',
    name: 'Camera Detection',
    component: CameraDetection,
    children: [
      {
        // path: ':wasteId',
        // path: '/set',
        path: '/sell-item/camera/:mainWaste',
        name: 'Select Waste Category',
        component: SelectWasteCategory,
        props: { mainWaste: '', plusImage: '' }
      }
    ]
  },
  // {
  //   path: '/sell-item/:id/success',
  //   name: 'Done Sell Waste Item',
  //   component: DoneSellWasteItem
  // },
  {
    path: '/waste-item/list-recycler/:mainWaste',
    name: 'RecyclerListToSellWaste',
    component: RecyclerListToSellWasteItem,
    props: { plusImage: '' }
  },
  {
    path: '/waste-item/:subwcategory/sell',
    name: 'SellWasteItemForm',
    component: SellWasteItemForm,
    props: { recycler: '', plusImage: '' }
  },
  {
    // path: '/waste-item/:sub-waste-category/thank-you',
    path: '/waste-item/thank-you',
    name: 'ReviewAndGreeting',
    component: ReviewAndGreeting,
    props: { sellItem: '' }
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
  // {
  //   // path: '/sell-item/:sub-waste-category/sell/type',
  //   path: '/sell-item/sell/type',
  //   name: 'Waste Type Detail',
  //   component: WasteTypeDetail
  // },
  {
    path: '/:recycler/:productName',
    // path: '/product',
    name: 'ProductDetail',
    component: ProductDetail
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },
  {
    path: '/product/buy',
    name: 'ProductBuy',
    component: ProductBuy
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
