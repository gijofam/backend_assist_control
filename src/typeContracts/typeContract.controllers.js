const uuid = require('uuid')

const TypeContracts = require('../models/typeContracts.models')

const createTypeContract = async (data) =>{
    const newTypeContract = await TypeContracts.create({
        id : uuid.v4(),
        name: data.name,
        description: data.description
    })    
    return newTypeContract
}

const getAllTypeContract = async () => {
    const data = await TypeContracts.findAll()
    return data
}


module.exports = {
    createTypeContract,
    getAllTypeContract
}