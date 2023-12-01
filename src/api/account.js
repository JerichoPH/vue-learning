import api from '@/api/api';

const baseUrl = '/account';

// 用户列表
export const listAjax = params => {
    return api.get(`${baseUrl}`, { params });
};

// 用户详情
export const detailAjax = uuid => {
    return api.get(`${baseUrl}/${uuid}`);
};