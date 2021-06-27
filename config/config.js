require('dotenv').config({
    path: process.env.NODE_ENV.trim() === 'test' ? '.env.test' : process.env.NODE_ENV.trim() === 'development' ? '.env' : '.env.prod'
})

module.exports = {
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    storage: process.env.DB_STORAGE
}