<template>
    <h3>Component C</h3>
    <p>{{ username }}|{{ age }}</p>
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
        age:{
            type: Number,
            required: true,
            default: 999,
        },
    },
}
</script>