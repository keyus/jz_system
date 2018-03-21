const Sequelize = require('sequelize');
const sequelize = require('../config/database');

//其它收入支出名细
const PayDetail = sequelize.define('jz_pay_detail', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    type: Sequelize.TINYINT,
    money: Sequelize.DECIMAL,
    date: Sequelize.STRING,
    house_id: Sequelize.INTEGER,
    note: Sequelize.STRING,
}, {
    freezeTableName: true
});

module.exports = PayDetail;
