const uuid = require('uuid')
const Areas = require('../models/areas.models')

const createArea = async (data) => {
    const newArea = await Areas.create({
        id: uuid.v4(),
        name: data.name,
        sigla: data.sigla,
        description: data.description
    })
    return newArea
}

const getAllAreas = async () => {
    const data = await Areas.findAll()
    return data
}

module.exports = {
    createArea,
    getAllAreas
}