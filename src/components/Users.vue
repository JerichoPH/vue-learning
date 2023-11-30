<template></template>

<script>
import axios from 'axios';
import $ from 'jquery';
export default {
    name: 'Users',
    props: {},
    mounted() {
        this.fnInit();
    },
    methods: {
        fnInit() {
            $.ajax({
                type: 'get',
                url: 'http://localhost:10080/api/account',
                headers: {
                    'Accpet': 'application/json',
                    'Authorization': 'AU a2279d3b-72c9-4c75-8be7-05902eb4a74c'
                },
                success(res) {
                    console.log(res);
                },
                error(err) {
                    console.log(err);
                }
            });
        },
    },
}
</script>