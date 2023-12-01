<template>
    <Account v-if="accounts.length > 0" v-for="(account, index) of accounts" :key="index" :username="account.username"
        :nickname="account.nickname" :uuid="account.uuid" @clickAccount="fnReceiveClickAccount" />
</template>

<script>
import { loginAjax } from '@/api/authorization';
import { listAjax, detailAjax } from '@/api/account';
import Account from '@/components/Account.vue';
export default {
    name: 'Accounts',
    components: { Account },
    data() {
        return {
            accounts: [],
        };
    },
    mounted() {
        this.fnInit();
    },
    methods: {
        fnInit() {
            loginAjax({
                username: 'admin',
                password: '123123',
            })
                .then(res => {
                    let { raw } = res;
                    localStorage.setItem('token', raw.token);
                });

            listAjax({})
                .then(res => {
                    let { raw } = res;
                    this.accounts = raw.accounts;
                });
        },
        fnReceiveClickAccount(data) {
            detailAjax(data.uuid)
                .then(res => {
                    let { raw } = res;
                    console.log('获取用户详情', raw.account);
                });
        },
    },
}
</script>