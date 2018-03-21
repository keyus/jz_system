const Sequelize = require('sequelize');
const sequelize = require('../config/database');

//单位工程款支付名细
const CompanyPay = sequelize.define('jz_company_pay', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    pay_nums: Sequelize.DECIMAL,    //支付金额
    pay_date: Sequelize.STRING,    //支付日期
    house_id: Sequelize.INTEGER,    //房屋ID
    note: Sequelize.STRING,    //备注
}, {
    freezeTableName: true
});

module.exports = CompanyPay;
