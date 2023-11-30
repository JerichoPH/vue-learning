<template>
    <h3>Component B</h3>
    <ComponentC v-for="(user, index) in users" :key="index" :username="user.username" :age="user.age" @sendMessage="fnReceiveSendMessage"/>
    <button @click="fnSendMessage">发送消息（B组件）</button>
</template>

<script>
import ComponentC from './ComponentC.vue'
export default {
    data() { 
        return {}
    },
    emits: ['sendMessage'],
    props: {
        users: {
            type: Array,
            required: true,
            default: [],
        },
    },
    components: {
        ComponentC,
    },
    methods:{
        fnReceiveSendMessage(data){
            console.log('接收来自组件C的数据：', data);
        },
        fnSendMessage(){
            this.$emit('sendMessage', {
                msg:'这里是B组件',
            });
        },
    },
}
</script>