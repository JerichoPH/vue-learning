<template>
    <div v-for="item in userInfo">
        <p>{{ item }}</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            userInfo: {
                name: '张三',
                age: 18,
                gender: '男',
            }
        }
    }
}
</script>