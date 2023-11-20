<template>
    <h3>Component B</h3>
    <p>{{ msg }}</p>
</template>

<script>
export default {
    data() {
        return {}
    },
    props: {
        msg: {
            type: String,
            required: true,
            default: '',
        }
    },
}
</script>