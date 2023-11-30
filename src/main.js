import { createApp } from 'vue';
import  axios  from 'axios';
import App from './App.vue';
import jquery from 'jquery';

const app = createApp(App);
app.config.globalProperties.$axios = axios;
app.config.globalProperties.$ = jquery;
app.mount('#app')
