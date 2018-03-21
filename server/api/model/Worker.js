const Sequelize = require('sequelize');
const sequelize = require('../config/database');

//工人开销
const Worker = sequelize.define('jz_worker', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    pay_date: Sequelize.STRING,
    house_id: Sequelize.INTEGER,
    worker_name: Sequelize.STRING,      //工作名
    item_name: Sequelize.STRING,        //施工项目名
    item_money: Sequelize.DECIMAL,      //项目金额
    phone: Sequelize.STRING,
    start_date: Sequelize.STRING,
    end_date: Sequelize.STRING,
    item_state: Sequelize.TINYINT,      //施工状态
}, {
    freezeTableName: true
});

module.exports = Worker;
