<template lang="pug">
.module
    Header(class="header") xrender使用手册
    Layout(class="main")
        Sider(hide-trigger class="aside")
            Menu(theme="dark" width="auto")
                MenuGroup(title="开始")
                    MenuItem()
                        Icon(type="document-text")
                        | 安装
                    MenuItem()
                        Icon(type="document-text")
                        | 介绍
                MenuGroup(title="对象")
                    MenuItem()
                        Icon(type="document-text")
                        | Render
                    MenuItem()
                        Icon(type="document-text")
                        | Node
                MenuItem()
                    Icon(type="document-text")
                    | 事件
                MenuGroup(title="图形")
                    MenuItem()
                        Icon(type="document-text")
                        | circle
                    MenuItem()
                        Icon(type="document-text")
                        | rect
                    MenuItem()
                        Icon(type="document-text")
                        | line
                    MenuItem()
                        Icon(type="document-text")
                        | sector
                MenuGroup(title="属性")
                    MenuItem()
                        Icon(type="document-text")
                        | style
                    MenuItem()
                        Icon(type="document-text")
                        | attribute

        Content Content
</template>

<script>
export default {

};
</script>

<style lang="scss" scoped>
.module {
    height: 100%;
    .header {
        background-color: #1c2438;
        color: #fff;
        font-size: 16px;
    }
    .main {
        height: calc(100% - 64px);
        .aside {
            height: 100%;
        }
    }
}
</style>
