const {Sequelize} = require('sequelize');

module.exports = new Sequelize(
    'ulosya',
    'ulosya',
    process.env.DB_PASSWORD,
    {
        dialect: 'postgres',
        host: 'localhost',
        port: 5432,
    }
)
