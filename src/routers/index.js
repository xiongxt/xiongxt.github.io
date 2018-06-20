import Vue from 'vue';
import Router from 'vue-router';
import Home from '../views/Home.vue';
import xrenderRouter from './xrender';

Vue.use(Router);

export default new Router({
    routes: [{
        path: '/',
        name: 'home',
        component: Home
    },
    xrenderRouter
    ]
});
