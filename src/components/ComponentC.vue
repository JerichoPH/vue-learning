<template>
    <h3>Component C</h3>
    <p>{{ username }}|{{ age }}</p>
    <button @click="fnSendMessage">发送数据（C组件）</button>
</template>

<script>
export default {
    data() {
        return {}
    },
    props: {
        username: {
            type: String,
            required: true,
            default: '',
        },
        age: {
            type: Number,
            required: true,
            default: 999,
        },
    },
    methods: {
        fnSendMessage() {
            this.$emit('onSendMessage', {
                username: this.username,
                age: this.age,
            });
        },
    }
}
</script>