import Vue from 'vue';
import App from './App.vue';
import router from './routers';
import store from './store';
import iView from 'iview';
import layui from './lib/layui';
import xrender from './lib/xrender';
import 'iview/dist/styles/iview.css';
import './styles/common.scss';
import './registerServiceWorker';

Vue.config.productionTip = false;
Vue.use(iView);
Vue.use(layui);
Vue.use(xrender);
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
