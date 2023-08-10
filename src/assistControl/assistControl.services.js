const assistControlController = require('./assistControl.controllers')

const getAllAssistControl =  (req, res) => {
    assistControlController.getAllAssistControl()
    .then(data => {
        res.status(200).json(data)
    })
    .catch(err => {
        res.status(400).json({message: err.message})
    })
}

const getByIdAssistControl =  (req, res) => {
    const id = req.params
    assistControlController.getByIdAssistControl(id)
       .then(data => {
           res.status(200).json(data)
       })
       .catch(err => {
           res.status(400).json({message: err.message})
       })
   }

const registrarAssistControl = async (req, res) => {
    const {workerId, userId, turno, date } = req.body 
    if(workerId && userId && turno && date){
    assistControlController.registerAssistControl({workerId, userId, turno, date })
        .then(data => {
            res.status(201).json(data)
        })
        .catch(err => {
            res.status(400).json({message: err.message})
        })
    }else{
        res.status(404).json({message: `All fields must be completed`, fields: {
            workerId : 'UUID',
            userId: 'UUID',
            turno: 'STRING',
            date: 'YYYY/MM/DD'
        }})
    }
}

module.exports = {
    getAllAssistControl,
    getByIdAssistControl,
    registrarAssistControl
}