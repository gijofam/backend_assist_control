const db = require('../utils/database')
const {DataTypes} = require('sequelize')

const Cargos = db.define('cargos',{
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: null,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: true
    }
})

module.exports = Cargos