<template lang="pug">
Menu(theme="dark" width="auto" @on-select="selectMenu")
    MenuGroup(:title="group.title" v-for="(group, groupIndex) in data" :key="group.title")
        MenuItem(v-for="(item, itemIndex) in group.items" :key="item.name" :name="groupIndex+'-'+itemIndex")
            Icon(:type="item.icon")
            | {{item.name}}
</template>

<script>
export default {
    data () {
        return {
            data: [
                {
                    title: '基础',
                    items: [
                        {
                            icon: 'document-text',
                            name: 'Getting Started'
                        }, {
                            icon: 'document-text',
                            name: 'Render对象'
                        }
                    ]
                }, {
                    title: '图形',
                    items: [
                        {
                            icon: 'document-text',
                            name: 'Node'
                        }, {
                            icon: 'document-text',
                            name: 'Circle'
                        }, {
                            icon: 'document-text',
                            name: 'Rect'
                        }, {
                            icon: 'document-text',
                            name: 'Line'
                        }, {
                            icon: 'document-text',
                            name: 'Sector'
                        }, {
                            icon: 'document-text',
                            name: 'Image'
                        }, {
                            icon: 'document-text',
                            name: 'Collection'
                        }
                    ]
                }, {
                    title: '效果',
                    items: [
                        {
                            icon: 'document-text',
                            name: 'style'
                        }, {
                            icon: 'document-text',
                            name: 'attribute'
                        }, {
                            icon: 'document-text',
                            name: 'event'
                        }
                    ]
                }
            ]
        };
    },
    methods: {
        selectMenu (name) {
            let indexs = name.split('-').map(index => parseInt(index));
            debugger;
            let item = this.data[indexs[0]].items[indexs[1]];
            console.log(item);
        }
    }
};
</script>
