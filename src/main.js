import Vue from 'vue';
import App from './App.vue';
import router from './routers';
import store from './store';
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import './styles/common.scss';
import './registerServiceWorker';

Vue.config.productionTip = false;
Vue.use(iView);
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
