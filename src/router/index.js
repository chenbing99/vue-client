import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
/* export default new VueRouter({
    routes:[]
}) */
import Home from '@/pages/Home'
import Register from '@/pages/Register'
import Search from '@/pages/Search'
import Login from '@/pages/Login'

const router = new VueRouter({
    routes:[
        {
            path:'/home',
            component:Home
        },
        {
            path:'/search',
            component:Search
        },
        {
            path:'/login',
            component:Login,
            meta:{
                // 路由的原配置项,我们可以在这个对象当中配置一些数据,在this.$route路由对象里面可以直接获取到
                isHide:true
            }
        },
        {
            path:'/register',
            component:Register,
            meta:{
                // 路由的原配置项,我们可以在这个对象当中配置一些数据,在this.$route路由对象里面可以直接获取到
                isHide:true
            }
        },
        {
            path:'/',
            redirect:'/home'
        }
    ]
})
export default router