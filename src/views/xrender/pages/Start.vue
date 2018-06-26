<template lang="pug">
.page
    h1 开始
    p xrender，是一个使用canvas绘图，并模拟dom操作方式的库。支持通过css、event、animate来控制canvas内的图形。
    h3 安装
    Code npm install xrender -S

    h3 使用
    Code
        | import xrender from 'xrender';
        | let render = xrender.init(selector);

    h3 DEMO
    .render(ref="renderDom")
    Code.
        this.render = this.xrender.init(this.$refs.renderDom);
        this.circle = new this.xrender.Circle({
            center: {
                x: 300,
                y: 200
            },
            radius: 100,
            fill: true,
            stroke: false,
            'z-index': 1,
            cursor: 'pointer',
            'background-color': 'red'
        }, {
            draggable: true
        });
        this.circle.on('mouseenter', () => {
            this.circle.setStyle({
                'background-color': 'blue'
            });
        });
        this.circle.on('mouseleave', () => {
            this.circle.animate({
                'background-color': 'red'
            });
        });
        this.render.addChild(this.circle);
        this.render.render();
</template>

<script>
import Code from '../../../components/Code';
import FuncTable from '../../../components/FuncTable';
export default {
    data () {
        return {
            render: null,
            circle: null
        };
    },
    components: {
        Code,
        FuncTable
    },
    mounted () {
        this.render = this.xrender.init(this.$refs.renderDom);
        this.circle = new this.xrender.Circle({
            center: {
                x: 300,
                y: 200
            },
            radius: 100,
            fill: true,
            stroke: false,
            'z-index': 1,
            cursor: 'move',
            'background-color': 'red'
        }, {
            draggable: true
        });
        this.circle.on('mouseenter', () => {
            this.circle.setStyle({
                'background-color': 'blue'
            });
        });
        this.circle.on('mouseleave', () => {
            this.circle.animate({
                'background-color': 'red'
            });
        });
        this.render.addChild(this.circle);
        this.render.render();
    }
};
</script>
