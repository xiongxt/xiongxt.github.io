import 'layui-src/release/zip/layui-v2.3.0/layui/layui.all';
import 'layui-src/release/zip/layui-v2.3.0/layui/css/layui.css';

export default {
    install (Vue) {
        /* eslint-disable no-undef */
        Vue.prototype.layui = layui;
    }
};
