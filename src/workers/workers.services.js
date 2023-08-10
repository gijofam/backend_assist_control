const workersControllers = require('./workers.controllers')

const getAllWorkers = ( _ , res) => {
    workersControllers.getAllWorkers()
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err => {
            res.status(400).json({message : err.message})
        })
}

const getWorkerById = (req, res) => {
    const idWorker = req.params.idWorker
    workersControllers.getWorkerById(idWorker)
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err => {
            res.status(400).json({message: err.message})
        })
}

const createWorker = (req, res) => {
    const {firstName, lastName, email,dni, phone, birthday, age, typeContractId, areaId} = req.body
    if(firstName && lastName && email && dni && phone && birthday && age && typeContractId && areaId){
        workersControllers.createWorker({firstName, lastName, dni, email, phone, birthday, age, typeContractId, areaId})
        .then(data => {
            res.status(201).json(data)
        })
        .catch(err => {
            res.status(400).json({message: err.message})
        })
    }else{
        res.status(400).json({message: 'All Fields must be completed', fields: {
            firsName: 'string',
            lastName: 'string',
            dni: 'number',
            email: 'example@example.com',
            phone: 999999999,
            birthday: 'YYYY/MM/DD',
            age: 'number',
            typeContractId: 'uuid',
            areaId: 'uuid',
        }})
    }      
}
const updateWorker = (req, res) => {
    const idWorker = req.params.idWorker
    const {email, phone, status,typeContractId, areaId} = req.body
    workersControllers.updateWorker(idWorker, {email, phone, status,typeContractId, areaId})
        .then(data => {
            if(data[0]){
                res.status(200).json({message: `Worker with ID ${idWorker} edited succesfully`})
            }else{
                res.status(400).json(`Invalid ID`)
            }
        })
        .catch(err => {
            res.status(400).json({message: err.message})
        })
}

module.exports = {
    getAllWorkers,
    getWorkerById,
    createWorker,
    updateWorker
}
