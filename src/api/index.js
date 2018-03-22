import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:9000/api/v1';
axios.defaults.withCredentials = true;

//登录
export const login = (data) => {
    return axios.post('/login.do', data);
}

/**----管理员-----*/

export const userList = () => {
    return axios.get('/user');
}

export const updateUser = (data) => {
    return axios.post('/user/update',data);
}

/**----地区-----*/

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

/**----联系人-----*/

export const contactList = (data) => {
    return axios.get('/contact',{params : data});
}

export const contactSave = (data) => {
    return axios.post('/contact/save',data);
}

export const contactUpdate = (data) => {
    return axios.post('/contact/update',data);
}

export const contactDelete = (data) => {
    return axios.post('/contact/delete', data);
}

/**----公司-----*/

export const companyList = (data) => {
    return axios.get('/company',{params : data});
}

export const companySave = (data) => {
    return axios.post('/company/save',data);
}

export const companyUpdate = (data) => {
    return axios.post('/company/update',data);
}

export const companyDelete = (data) => {
    return axios.post('/company/delete', data);
}

/**----房屋-----*/

export const houseList = (data) => {
    return axios.get('/house',{params : data});
}
