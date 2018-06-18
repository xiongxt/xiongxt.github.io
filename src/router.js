import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import XRenderIndex from './views/xrender/index';

Vue.use(Router);

export default new Router({
    routes: [{
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/xrender',
        name: 'xrender',
        component: XRenderIndex
    }
    ]
});
