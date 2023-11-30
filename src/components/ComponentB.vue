<template>
    <h3>Component B</h3>
    <ComponentC v-for="(user, index) in users" :key="index" :username="user.username" :age="user.age" />
</template>

<script>
import ComponentC from './ComponentC.vue'
export default {
    data() { 
        return {}
    },
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
}
</script>