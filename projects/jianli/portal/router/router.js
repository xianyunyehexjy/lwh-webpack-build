import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);
import Home from '@portal/views/home/home.vue'
import Root from '@portal/views/root/root.vue'
import Page404 from '@portal/views/Page404/Page404.vue'

// meta: {
//     keepAlive: false // 不需要被缓存
// },
export default new VueRouter({
    mode: 'history',
    base: __dirname,
    routes: [
        {
            path: dev?'/portal':'/',
            redirect: function () {
                if(dev){
                    return '/portal/home'
                }else{
                    return '/home'
                }
            },
            name:'root',
            component: Root,
            children: [
                {
                    name:'home',
                    path: 'home',
                    component: () => import(/* webpackChunkName: "chunk/home" */'@portal/views/home/home.vue')
                },
                {
                    name: 'test',
                    path: 'test',
                    component: () => import(/* webpackChunkName: "chunk/test" */'@portal/views/test/test.vue')
                },
                {
                    name: 'player',
                    path: 'player',
                    component: () => import(/* webpackChunkName: "chunk/player" */'@portal/views/player/player.vue')
                }
            ]
        },
        {
            path: '*',
            name:'page404',
            component: Page404
        }
    ]
});






