const Sequelize = require('sequelize');
const sequelize = require('../config/database');

const User = sequelize.define('jz_user', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    user: {
        type: Sequelize.STRING
    },
    password: {
        type: Sequelize.STRING
    },
    nick: {
        type: Sequelize.STRING
    },
    phone: {
        type: Sequelize.STRING
    },
    name: {
        type: Sequelize.STRING
    },
    auth: {
        type: Sequelize.TINYINT
    },
}, {
    freezeTableName: true
});

module.exports = User;
