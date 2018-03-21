const Sequelize = require('sequelize');
const sequelize = require('../config/database');

//公司发货材料单
const CompanySendShop = sequelize.define('jz_company_send_shop', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    shop_name: Sequelize.STRING,    //货品名
    house_id: Sequelize.INTEGER,    //房屋ID
    send_date: Sequelize.STRING,    //发货日期
    receive_date: Sequelize.STRING,    //收货日期
    receive_person: Sequelize.STRING,    //收货人
    note: Sequelize.STRING,    //备注
}, {
    freezeTableName: true
});

module.exports = CompanySendShop;
