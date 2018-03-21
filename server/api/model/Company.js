const Sequelize = require('sequelize');
const sequelize = require('../config/database');

//公司表模型
const Company = sequelize.define('jz_company', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    company_name: {
        type: Sequelize.STRING
    },
    company_address: {
        type: Sequelize.STRING
    },
    company_contact: {
        type: Sequelize.STRING
    },
    company_phone: {
        type: Sequelize.STRING
    },
    note: {
        type: Sequelize.STRING
    },
}, {
    freezeTableName: true
});

module.exports = Company;
