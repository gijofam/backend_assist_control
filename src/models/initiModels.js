const Users = require('./users.models')
const Areas = require('./areas.models')
const AssistControl = require('./assistControl.models')
const TypeContracts = require('./typeContracts.models')
const Workers = require('./workers.models')
const Cargos = require('./cargos.models')

const initModels = () => {
    Areas.hasMany(Workers)
    Workers.belongsTo(Areas)

    Users.hasMany(AssistControl)
    AssistControl.belongsTo(Users)

    Workers.hasMany(AssistControl)
    AssistControl.belongsTo(Workers)

    TypeContracts.hasMany(Workers)
    Workers.belongsTo(TypeContracts)
    
    Cargos.hasMany(Workers)
    Workers.belongsTo(Cargos)


}

module.exports = initModels