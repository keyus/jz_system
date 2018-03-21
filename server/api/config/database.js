const Sequelize = require('sequelize');
const config = {
    database : 'jz_system',
    user : 'root',
    password : 'root',
    host : 'localhost',
    type : 'mysql',
};

const sequelize = new Sequelize(config.database, config.user, config.password, {
    host: config.host,
    dialect: config.type,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    // 请参考 Querying - 查询 操作符 章节
    // operatorsAliases: false
});

module.exports = sequelize;
