<template>
    <h3>Component A</h3>
    <ComponentB :users="users" @onSendMessage="fnReceiveSendMessage" />
</template>

<script>
import ComponentB from './ComponentB.vue'
export default {
    data() {
        return {
            users: [{
                username: '张三',
                age: 18,
            }, {
                username: '李四',
                age: 19,
            }, {
                username: '王五',
                age: 20,
            }],
        }
    },
    components: {
        ComponentB,
    },
    methods: {
        fnReceiveSendMessage(data) {
            console.log('接收来自B组件的消息：', data);
        },
    },
}
</script>