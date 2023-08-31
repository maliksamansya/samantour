import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from './../components/LoginPage.vue'
import Home from './../components/Home.vue'
import DetailCardPage from '../components/DetailCardPage.vue'
import RegisterPage from './../components/RegisterPage.vue'
import PaymentPage from './../views/PaymentPage.vue'
import MyBookingPage from './../views/MyBookingPage.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/login',
      name: 'login',
      component: LoginPage
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterPage
    },
    {
      path: '/tours/:id',
      name: 'tourDetail',
      component: DetailCardPage
    },
    {
      path: '/bookings',
      name: 'Booking',
      component: MyBookingPage
    },
    {
      path: '/payment/:id',
      name: 'paymentDetail',
      component: PaymentPage
    }


  ]
})

// GOOD
router.beforeEach((to, from, next) => {
  if (to.name === 'login' && localStorage.accest_token) next({ name: 'home' })
  if (to.name === 'register' && localStorage.accest_token) next({ name: 'home' })
  if (to.name === 'Bookmark' && !localStorage.accest_token) next({ name: 'home' })
  else next()
})

export default router
