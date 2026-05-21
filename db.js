const {Sequelize} = require('sequelize');

module.exports = new Sequelize(
    'ulosya',
    'ulosya',
    '1234',
    {
        dialect: 'postgres',
        host: 'localhost',
        port: 5432,
    }
)
