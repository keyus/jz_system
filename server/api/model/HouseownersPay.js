const Sequelize = require('sequelize');
const sequelize = require('../config/database');

//业主付款
const HouseownersPay = sequelize.define('jz_houseowners_pay', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: Sequelize.STRING,
    house_id: Sequelize.INTEGER,
    pay_nums: Sequelize.DECIMAL,    //支付金额
    pay_date: Sequelize.STRING,    //支付日期
    receive: Sequelize.STRING,    //收款方
    note: Sequelize.STRING,    //备注
}, {
    freezeTableName: true
});

module.exports = HouseownersPay;
