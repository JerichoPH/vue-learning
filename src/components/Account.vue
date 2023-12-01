<template>
    <h4>用户账号：{{ username }}</h4>
    <h4>用户昵称：{{ nickname }}</h4>
    <h4>用户编号：{{ uuid }}</h4>
    <button @click="fnClickAccount">选择</button>
</template>

<script>
export default {
    name: 'Account',
    data() {
        return {};
    },
    emits: ['clickAccount'],
    props: {
        username: {
            type: String,
            default: '',
            required: true,
        },
        nickname: {
            type: String,
            default: '',
            required: true,
        },
        uuid: {
            type: String,
            default: '',
            required: true,
        }
    },
    methods: {
        fnClickAccount() {
            this.$emit('clickAccount', {
                username: this.username,
                nickname: this.nickname,
                uuid: this.uuid
            });
        }
    }
}
</script>