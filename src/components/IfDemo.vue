<template>
<h3>If demo</h3>
<p v-if="ifDemo">hahaha</p>
</template>

<script>
export default {
    data(){
        return{
            ifDemo:true
        }
    }
}
</script>