const uuid = require('uuid')
const Workers = require('../models/workers.models')

const getAllWorkers = async() => {
    const data = await Workers.findAll({
        where: {
            status : 'activo'
        }
    })
    return data
}

const getAllWorkersInactive = async() => {
    const data = await Workers.findAll({
        where: {
            status : 'inactivo'
        }
    })
    return data
}

const getWorkerById = async(id) => {
    const data = await Workers.findOne({
        where: {
            id
        }
    })
    return data
} 

const createWorker = async(data) => {
    const newWorker = await Workers.create({
        id: uuid.v4(),
        firstName : data.firstName,
        lastName: data.lastName,
        dni:data.dni,
        email: data.email,
        phone: data.phone,
        birthday: data.birthday,
        age: data.age,
        typeContractId: data.typeContractId,
        areaId: data.areaId,
    }) 
    return newWorker
}

const updateWorker = async (id, data) =>{
    const result = await Workers.update(data, {
        where: {
            id
        }
    })
    return result
}

module.exports = {
    getAllWorkers,
    getAllWorkersInactive,
    getWorkerById,
    createWorker,
    updateWorker
}