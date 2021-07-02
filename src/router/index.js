import Vue from 'vue'
import VueRouter from 'vue-router'
import Portfolio from '../views/Portfolio';
Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Portfolio
    },
    {
        path: '/trip',
        name: 'Trip',
        component: () =>
            import ('../views/Trip.vue')
    },
    {
        path: '/three',
        name: 'Three',
        component: () =>
            import ('../views/Three.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router