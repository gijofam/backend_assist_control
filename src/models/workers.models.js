const db = require('../utils/database')
const {DataTypes} = require('sequelize')
const TypeContracts = require('./typeContracts.models')
const Areas = require('./areas.models')

const Workers = db.define('workers',{
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false
    },
    firstName:{
        type: DataTypes.STRING,
        allowNull: false,
        field: 'first_name'
    },
    lastName: {
        type:DataTypes.STRING,
        allowNull: false,
        field: 'last_name'
    },
    dni:{
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    phone:{
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    birthday: {
        type: DataTypes.DATEONLY,
        allowNull: false,
    },
    age: {
        type: DataTypes.INTEGER,
        allowNull:false,
    },
    typeContractId:{
        type: DataTypes.UUID,
        allowNull:false,
        field: 'type_contract_id',
        references: {
            key: 'id',
            model: TypeContracts
        }
    },
    areaId: {
        type: DataTypes.UUID,
        allowNull: false,
        field: 'area_id',
        references: {
            key: 'id',
            model: Areas
        }
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'activo'
    }
})

module.exports = Workers