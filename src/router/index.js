import Vue from 'vue';
import Router from 'vue-router';

const login = () => import('@/components/login');
const index = () => import('@/components/index');
const shopcar = () => import('@/components/shopcar');
const chinamap = () => import('@/components/chinamap');
const tree = () => import('@/components/tree');
const mobile = () => import('@/components/mobile');
const snake = () => import('@/components/snake');

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'login',
            component: login,
        },
        {
            path: '/index',
            name: 'index',
            redirect: '/shopcar',
            component: index,
            children: [
                {
                    path: '/shopcar',
                    name: '购物车',
                    component: shopcar,
                },
                {
                    path: '/chinamap',
                    name: '中国地图',
                    component: chinamap,
                },
                {
                    path: '/tree',
                    name: '树状图',
                    component: tree,
                },
                {
                    path: '/mobile',
                    name: '手机端管理',
                    component: mobile
                },
                {
                    path: '/snake',
                    name: '贪吃蛇游戏',
                    component: snake
                }
            ]
        },
    ]
})