<template>
    <h2>{{ a }}</h2>
    <h3>{{ b }}</h3>
    <h3>{{ c }}</h3>
</template>
<script>
export default {
    data() {
        return {
            a: "hello vue3"
            b: true,
            c: false,
        }
    }
}
</script>