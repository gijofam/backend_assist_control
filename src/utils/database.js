const {Sequelize} = require('sequelize')
const config = require('../config')

const db = new Sequelize({
    dialect: 'mysql',
    host: config.db.host, //? Variable de entorno del host
    username: config.db.username, //? Variable de entorno del usuario
    password: config.db.password, //? Variable de entorno de la contraseña
    database: config.db.dbName,
    port: config.db.dbPort, //? Variable de entorno de la base de datos
    // timezone: 'America/Lima' //registra en la BD con la fecha y hora de Peru-Lima
})

module.exports = db
