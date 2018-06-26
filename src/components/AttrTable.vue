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
            ]
        };
    }
};
</script>
