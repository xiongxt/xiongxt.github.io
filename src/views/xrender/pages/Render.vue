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
    FuncTable(:data="xrenderFuncs")
    h3 属性
    AttrTable(:data="renderAttrs")
    h3 方法
    FuncTable(:data="renderFuncs")
</template>

<script>
import Code from '../../../components/Code';
import FuncTable from '../../../components/FuncTable';
import AttrTable from '../../../components/AttrTable';
export default {
    data () {
        return {
            renderAttrs: [
                {
                    name: 'root',
                    desc: 'Render对象下的根节点',
                    type: 'Node'
                }, {
                    name: 'envoParams',
                    desc: '画布的运行环境对象，包含canvas、context、scale、width、height等参数，并且每个Node都拥有此对象的参数',
                    type: 'Object'
                }
            ],
            renderFuncs: [
                {
                    name: 'render',
                    desc: '绘制图形到画布',
                    params: '无',
                    return: '无'
                }, {
                    name: 'addChild',
                    desc: '添加图形到画布内',
                    params: 'Node 需要添加的图形实例',
                    return: '无'
                }, {
                    name: 'delChild',
                    desc: '删除图形',
                    params: 'Node 需要删除的图形实例',
                    return: '无'
                }
            ],
            xrenderFuncs: [
                {
                    name: 'init',
                    desc: '初始化',
                    params: 'selector/dom 必选参数 | scale 可选参数，用来设置移动端的ppi',
                    return: 'Render对象'
                }
            ]
        };
    },
    components: {
        Code,
        FuncTable,
        AttrTable
    }
};
</script>
