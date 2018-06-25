<template lang="pug">
.page
    h1 Render
    p Render是xrender.init调用之后返回的对象的类，是整个画布绘制的核心对象。
    p
        router-link(to="/xrender/start")
            a 点击这里
        | 查看Render的Demo
    h3 xrender
    p xrender是整个库的唯一入口，通过调用init返回一个可以渲染的Render对象.
    Code.
        let render = xrender.init(selector, scale);
        render.addChild(new xrender.Circle(styles, attrs));
        render.render();
    Table(border :columns="[{title:'方法名'},{},{}]" :data="attrData")
    h3 方法
    h3 属性
    Table(border :columns="attrColumn" :data="attrData")
    h3 方法
    Table(border :columns="attrColumn" :data="attrData")
</template>

<script>
import Code from '../../../components/Code';
export default {
    data () {
        return {
            attrColumn: [
                {
                    title: '属性名',
                    key: 'name'
                }, {
                    title: '描述',
                    key: 'desc'
                }, {
                    title: '类型',
                    key: 'type'
                }
            ],
            attrData: [
                {
                    name: 'root',
                    desc: 'Render对象下的根节点',
                    type: 'Node'
                }, {
                    name: 'envoParams',
                    desc: '画布的运行环境对象，包含canvas、context、scale、width、height等参数，并且每个Node都拥有此对象的参数',
                    type: 'Object'
                }
            ]
        };
    },
    components: {
        Code
    }
};
</script>
