const Sequelize = require('sequelize');
const sequelize = require('../config/database');

//房屋模型
const House = sequelize.define('jz_house', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    startDate: Sequelize.DATE,
    name: Sequelize.STRING,
    area_id: Sequelize.STRING,
    address: Sequelize.STRING,
    size: Sequelize.DECIMAL,     //面积
    price: Sequelize.DECIMAL,     //价格
    company_id: Sequelize.INTEGER,  //公司ID
    work_rate: Sequelize.INTEGER,   //工作进度
    house_pay_rate: Sequelize.INTEGER,   //业主付款进度
    company_pay_rate: Sequelize.INTEGER,   //公司付款进度
    income: Sequelize.DECIMAL,   //盈亏
    end_date: Sequelize.DATE,   //完工日期

}, {
    freezeTableName: true
});

module.exports = House;
