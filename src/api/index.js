import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:9000/api/v1';
axios.defaults.withCredentials = true;

//登录
export const login = (data) => {
    return axios.post('/login.do', data);
}

//管理员列表
export const userList = () => {
    return axios.get('/user');
}

export const updateUser = (data) => {
    return axios.post('/user/update',data);
}

export const areaList = () => {
    return axios.get('/area');
}

export const areaAdd = (data) => {
    return axios.post('/area/add',data);
}

export const areaDelete = (id) => {
    return axios.post('/area/delete',{id});
}
export const areaUpdate = (data) => {
    return axios.post('/area/update',data);
}
