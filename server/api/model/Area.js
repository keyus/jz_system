const Sequelize = require('sequelize');
const sequelize = require('../config/database');

//地区表模型
const Area = sequelize.define('jz_area', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING
    },
    parent_id: {
        type: Sequelize.INTEGER
    },
}, {
    freezeTableName: true
});

module.exports = Area;
