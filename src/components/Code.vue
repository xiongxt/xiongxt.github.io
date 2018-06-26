<template lang="pug">
.comp
    pre(class="code")
        slot
</template>

<style lang="scss" scoped>
.comp {
    .code {
        position: relative;
        margin: 10px 0;
        padding: 15px;
        line-height: 22px;
        border: 1px solid #ddd;
        border-left-width: 6px;
        background-color: #f2f2f2;
        color: #666;
        font-family: Courier New;
        font-size: 14px;
    }
}
</style>
