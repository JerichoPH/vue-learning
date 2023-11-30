<template></template>

<script>
import axios from 'axios';
export default {
    name: 'Users',
    props: {},
    mounted() {
        this.fnInit();
    },
    methods: {
        fnInit() {
            axios.get('http://baidu.com')
                .headers({
                    'Accpet': 'application/json',
                    'Authorization': 'AU a2279d3b-72c9-4c75-8be7-05902eb4a74c'
                })
                .then(res => {
                    console.log(res);
                })
                .catch(err => {
                    console.log(err);
                });
        },
    },
}
</script>