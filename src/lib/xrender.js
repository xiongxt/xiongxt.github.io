import xrender from 'xrender';

export default {
    install (Vue) {
        Vue.prototype.xrender = xrender;
    }
};
