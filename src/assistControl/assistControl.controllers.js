const AssistControl = require('../models/assistControl.models')
const uuid = require('uuid')

const getAllAssistControl = async () => {
    const data = await AssistControl.findAll()
    return data
}

const getByIdAssistControl = async (id) => {
    const data = await AssistControl.findOne({
            where: {
                id
            }
        })
    return data
}

const registerAssistControl = async (data) => {
    const result = await AssistControl.create({
        id: uuid.v4(),
        workerId : data.workerId,
        userId: data.userId,
        turno: data.turno,
    }) 

    return result
}


const updateAssistControl = () => {

}

module.exports = {
    getAllAssistControl,
    getByIdAssistControl,
    registerAssistControl
}


