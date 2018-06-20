<template lang="pug">
.module
    Header(class="header")
        | xrender使用手册
        a(href="https://github.com/xiongxt/xrender" target="blank") github
    Layout(class="main")
        Sider(hide-trigger class="aside")
            Menu
        Content
            router-view
</template>

<script>
import Menu from './components/Menu';
import './styles/common.scss';
export default {
    components: {
        Menu
    }
};
</script>

<style lang="scss" scoped>
.module {
    height: 100%;
    .header {
        background-color: #1c2438;
        color: #fff;
        font-size: 16px;
        a {
            float: right;
        }
    }
    .main {
        height: calc(100% - 64px);
        .aside {
            height: 100%;
        }
    }
}
</style>
