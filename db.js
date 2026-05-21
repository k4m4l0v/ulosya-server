const {Sequelize} = require('sequelize');

module.exports = new Sequelize(
    'ulosya',
    'ulosya',
    '1234',
    {
        dialect: 'postgres',
        host: '95.163.227.128',
        port: 5432,
    }
)
