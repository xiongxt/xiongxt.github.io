<template lang="pug">
.page
    h1 Node
    p Node是所有图形的基类，通过这个基类我们实现了所有的图形类有一个统一的对外的接口
    h3 子类图形
    Table(border :columns="[{title:'类名',key:'name'},{title:'描述',key:'desc'}]" :data="subClass")
    h3 属性
    AttrTable(:data="attrs")
    h3 私有方法
    FuncTable(:data="funcs")
    h3 公有方法
    FuncTable(:data="funcs")
</template>

<script>
import Code from '../../../components/Code';
import FuncTable from '../../../components/FuncTable';
import AttrTable from '../../../components/AttrTable';
export default {
    data () {
        return {
            subClass: [
                {
                    name: 'Circle',
                    desc: '圆形'
                }, {
                    name: 'Collection',
                    desc: '图形集合，稍微会详细讲解'
                }, {
                    name: 'Font',
                    desc: '文字'
                }, {
                    name: 'Image',
                    desc: '图片'
                }, {
                    name: 'Line',
                    desc: '线'
                }, {
                    name: 'Rect',
                    desc: '方形'
                }, {
                    name: 'Sector',
                    desc: '扇形'
                }
            ],
            attrs: [
                {
                    name: 'style',
                    desc: '节点的样式, 查看后续的文档了解细节',
                    type: 'Node'
                }, {
                    name: 'attr',
                    desc: '节点的属性, 查看后续的文档了解细节',
                    type: 'Object'
                }, {
                    name: 'children',
                    desc: '子节点图形',
                    type: 'Array'
                }, {
                    name: 'parent',
                    desc: '父节点图形',
                    type: 'Node'
                }, {
                    name: 'isPointInPath',
                    desc: '鼠标是否在图形内',
                    type: 'boolean'
                }, {
                    name: 'mouseStatus',
                    desc: '用于记录鼠标的历史状态，用来识别mouseenter和mouseleave事件',
                    type: 'Array'
                }, {
                    name: 'offsetChangeAble',
                    desc: '是否锁定图形内鼠标的相对位置，当图形处于拖拽状态时才开启锁定',
                    type: 'boolean'
                }, {
                    name: 'mouseX',
                    desc: '鼠标相对于canvas的坐标',
                    type: 'number'
                }, {
                    name: 'mouseY',
                    desc: '鼠标相对于canvas的坐标',
                    type: 'number'
                }, {
                    name: 'offsetX',
                    desc: '鼠标相对于当前图形的坐标',
                    type: 'number'
                }, {
                    name: 'offsetY',
                    desc: '鼠标相对于当前图形的坐标',
                    type: 'number'
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
