<template lang="pug">
Menu(theme="dark" width="auto" @on-select="selectMenu" :active-name="activeName")
    MenuGroup(:title="group.title" v-for="(group, groupIndex) in data" :key="group.title")
        MenuItem(v-for="(item, itemIndex) in group.items" :key="item.name" :name="item.path")
            Icon(:type="item.icon")
            | {{item.name}}
</template>

<script>
export default {
    data () {
        return {
            activeName: '',
            data: [
                {
                    title: '基础',
                    items: [
                        {
                            icon: 'document-text',
                            name: 'Getting Started',
                            path: 'start'
                        }, {
                            icon: 'document-text',
                            name: 'Render对象',
                            path: 'render'
                        }
                    ]
                }, {
                    title: '图形',
                    items: [
                        {
                            icon: 'document-text',
                            name: 'Node',
                            path: 'node'
                        }, {
                            icon: 'document-text',
                            name: 'Circle',
                            path: 'circle'
                        }, {
                            icon: 'document-text',
                            name: 'Rect',
                            path: 'rect'
                        }, {
                            icon: 'document-text',
                            name: 'Line',
                            path: 'line'
                        }, {
                            icon: 'document-text',
                            name: 'Sector',
                            path: 'sector'
                        }, {
                            icon: 'document-text',
                            name: 'Image',
                            path: 'image'
                        }, {
                            icon: 'document-text',
                            name: 'Collection',
                            path: 'collection'
                        }
                    ]
                }, {
                    title: '效果',
                    items: [
                        {
                            icon: 'document-text',
                            name: 'style',
                            path: 'style'
                        }, {
                            icon: 'document-text',
                            name: 'attribute',
                            path: 'attribute'
                        }, {
                            icon: 'document-text',
                            name: 'event',
                            path: 'event'
                        }
                    ]
                }
            ]
        };
    },
    methods: {
        selectMenu (name) {
            console.log(this);
            this.$router.push('/xrender/' + name);
        }
    },
    mounted () {
        this.activeName = this.$route.name;
    }
};
</script>
