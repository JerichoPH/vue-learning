<template>
    <div v-if="userContentIsNotEmpty" v-for="(item, idx) in userInfo.content" :key="idx">
        <p>{{ item }}</p>
    </div>
    <div>{{ userContentIsNotEmptyText }}</div>
    <div>
        <input type="text" v-model.trim="aaa">
    {{ aaa }}
    </div>
</template>

<script>
export default {
    data() {
        return {
            userInfo: {
                name: '张三',
                content: ['a', 'b', 'c'],
            },
            aaa: 0,
        }
    },
    watch: {
        aaa(newVal, oldVal) {
            console.log({ newVal, oldVal });
        }
    },
    computed: {
        userContentIsNotEmpty() {
            return this.userInfo.content.length > 0;
        },
        userContentIsNotEmptyText() {
            return this.userContentIsNotEmpty ? '用户内容不为空' : '用户内容为空';
        },
    }
}
</script>