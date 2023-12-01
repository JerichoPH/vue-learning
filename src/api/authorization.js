import api from '@/api/api';

const baseUrl = '/authorization';

// 登陆
export const loginAjax = params => {
    return api.post(`${baseUrl}/login`, params);
};