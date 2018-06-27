<template lang="pug">
.page
    h1 Node
    p Node是所有图形的基类，通过这个基类我们实现了所有的图形类有一个统一的对外的接口
    h3 子类图形
    Table(border :columns="[{title:'类名',key:'name'},{title:'描述',key:'desc'}]" :data="subClass")
    h3 属性
    AttrTable(:data="attrs")
    h3 私有方法
    FuncTable(:data="privateFuncs")
    h3 公有方法
    FuncTable(:data="publicFuncs")
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
                    name: 'envoParams',
                    desc: '运行环境变量，可查看render章节了解细节，通过mixin(node,envoParams), 将所有变量的值直接赋值给node',
                    type: 'number'
                }, {
                    name: 'events',
                    desc: '保存图形绑定的所有事件',
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
            privateFuncs: [
                {
                    name: '_setMouseLocation',
                    desc: '记录当前鼠标相对于canvas的坐标，也就是mouseX和mouseY，并调用_setOffsetPosition',
                    params: 'x:number|y:number ',
                    return: '无'
                }, {
                    name: '_setOffsetPosition',
                    desc: '根据mouseX和mouseY，计算offsetX和offsetY，在实现拖拽时，这个方法非常重要，自定义图形时应该重写该方法',
                    params: '无',
                    return: '无'
                }, {
                    name: '_setDraggingPos',
                    desc: '当拖拽进行时，根据mouseX、mouseY、offsetX、offsetY，去计算当前图形应该所处的位置，自定义图形时应该重写该方法',
                    params: '无',
                    return: '无'
                }, {
                    name: '_checkPointInPath',
                    desc: '检查当前鼠标是否再图形内',
                    params: '无',
                    return: '无'
                }, {
                    name: '_renderSelf',
                    desc: '绘制自己, 具体由各个图形去实现',
                    params: '无',
                    return: '无'
                }, {
                    name: '_renderChildren',
                    desc: '绘制自己的子图形，子图形的绘制顺序由图形的style[z-index]决定',
                    params: '无',
                    return: '无'
                }, {
                    name: '_setEnvo',
                    desc: '设置每个图形的运行环境变量envoParams, 可查看 render 章节来详细了解envoParams',
                    params: '无',
                    return: '无'
                }, {
                    name: '_checkCursor',
                    desc: '检查图形的style是否修改了默认cursor的值，如果是则通过mouseenter和mouseleave事件来模拟hover状态下鼠标图形修改',
                    params: '无',
                    return: '无'
                }
            ],
            publicFuncs: [
                {
                    name: 'render',
                    desc: '渲染图形，首先渲染自己，然后渲染子图形',
                    params: '无',
                    return: '无'
                }, {
                    name: 'lockOffset',
                    desc: '设置offsetChangeAble为false，锁定图形的offsetX和offsetY',
                    params: '无',
                    return: '无'
                }, {
                    name: 'unlockOffset',
                    desc: '和上面的方法相反',
                    params: '无',
                    return: '无'
                }, {
                    name: 'setStyle',
                    desc: '设置图形的style对象，并且默认会触发重绘',
                    params: 'style:object, repaint:boolean @default=true',
                    return: '无'
                }, {
                    name: 'setAttr',
                    desc: '设置图形的attr对象，并默认不会触发重绘',
                    params: 'attr:object, repaint:boolean @default=false',
                    return: '无'
                }, {
                    name: 'addChild',
                    desc: '新增子图形',
                    params: 'node:Node',
                    return: '无'
                }, {
                    name: 'delChild',
                    desc: '删除子图形',
                    params: 'node:Node',
                    return: '无'
                }, {
                    name: 'setParent',
                    desc: '设置父图形',
                    params: 'node:Node',
                    return: '无'
                }, {
                    name: 'on',
                    desc: '绑定事件',
                    params: 'name:string, callback:function',
                    return: '无'
                }, {
                    name: 'off',
                    desc: '取消事件,如果callback为空，则取消该事件名下的所有事件',
                    params: 'name:string, callback:function',
                    return: '无'
                }, {
                    name: 'fireEvent',
                    desc: '触发事件',
                    params: 'name:string, data:object 传递给回掉的参数',
                    return: '无'
                }, {
                    name: 'fireMouseMoveEvents',
                    desc: '触发mousemove事件，并通过mouseStatus计算是否出发mouseenter事件',
                    params: '无',
                    return: '无'
                }, {
                    name: 'fireMouseLeaveEvents',
                    desc: '通过mouseStatus计算，是否真正触发mouseleave',
                    params: '无',
                    return: '无'
                }, {
                    name: 'fireClickEvents',
                    desc: '触发click事件',
                    params: '',
                    return: ''
                }, {
                    name: 'fireMoveNotInPath'
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
