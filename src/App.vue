<template>
    <button v-bind="btn1">aaa</button>
</template>

<style>
.c1 {
    color: red;
}
</style>

<script>
export default {
    data() {
        return {
            btn1: {
                id: "btn1",
                class: "c1",
                disabled: true,
            }
        }
    }
}
</script>