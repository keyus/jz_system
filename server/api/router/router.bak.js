const router = require('koa-router')();
const fs = require('fs');
// const User = require('../user');

const baseUrlBase = '/api/v1/';
router.get(`${baseUrlBase}user`,User.user);                 //用户列表
router.post(`${baseUrlBase}user/update`,User.userUpdate);          //更新用户

module.exports = router;
