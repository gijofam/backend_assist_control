const db = require('../utils/database')
const {Sequelize, DataTypes} = require('sequelize')
const Workers = require('./workers.models')
const Users = require('./users.models')

const AssistControl = db.define('assist_control', {
    id:{
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false
    },
    workerId:{
        type: DataTypes.UUID,
        allowNull: false,
        field: 'worker_id',
        references: {
            key: 'id',
            model: Workers
        }
    },
    userId:{
        type: DataTypes.UUID,
        allowNull:false,
        field: 'user_id',
        references: {
            key:'id',
            model: Users
        }
    },
    turno:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
        get() {
            // Esta función se llama cuando obtienes el valor del campo
            const rawValue = this.getDataValue('date');
            return rawValue ? rawValue.toLocaleString() : null;
        },
    }
})

module.exports = AssistControl
