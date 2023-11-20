<template>
    <h3>Component A</h3>
    <ComponentB :msg="message" />
</template>

<script>
import ComponentB from './ComponentB.vue'
export default {
    data() {
        return {
            message: 'Hello from Component A',
        }
    },
    components: {
        ComponentB,
    }
}
</script>