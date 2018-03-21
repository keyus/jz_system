const Sequelize = require('sequelize');
const sequelize = require('../config/database');

//联系人表模型
const Contact = sequelize.define('jz_contact', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: Sequelize.STRING,
    phone: Sequelize.STRING,
    work_type: Sequelize.STRING,
    note: Sequelize.STRING,

}, {
    freezeTableName: true
});

module.exports = Contact;
