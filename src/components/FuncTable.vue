<template lang="pug">
.comp
    Table(border :columns="column" :data="data")
</template>

<script>
export default {
    props: {
        data: {
            type: Array,
            default () {
                return [];
            }
        }
    },
    data () {
        return {
            column: [
                {title: '方法名', key: 'name'},
                {title: '描述', key: 'desc'},
                {title: '参数', key: 'params'},
                {title: '返回值', key: 'return'}
            ]
        };
    }
};
</script>
