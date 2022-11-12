import Vue from 'vue'
import VueRouter from 'vue-router'

// import NotFound from './views/404.vue';
import Home from './views/HomeMain';

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/form',
        name: 'Form',
        component: () => import('./views/FormMain.vue')
    },
    {
        path: '/transportation-form',
        name: 'Transport',
        component: () => import('./views/FormTransport.vue')
    },
    {
        path: '/about',
        name: 'About',
        component: () => import('./views/pages/AboutPage')
    },
    {
        path: '/contact',
        name: 'Contact',
        component: () => import('./views/pages/ContactUs')
    },
    {
        name: 'NotFound',
        path: '**',
        component: Home
    }
]


const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
