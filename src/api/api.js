import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:18080/api',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
    },
});

api.interceptors.request.use(config => {
    if (localStorage.getItem('token')){
        config.headers.Authorization = `JWT ${ localStorage.getItem('token')}`;
    }
    return config;
});

api.interceptors.response.use(data => {
    return {
        raw:data.data.content,
        jsonStr:JSON.stringify(data.data.content),
    };
});

export default api;