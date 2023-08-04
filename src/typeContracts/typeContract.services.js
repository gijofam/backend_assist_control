const typeContractsControllers = require('./typeContract.controllers')

const createTypeContract = (req,res) => {
    const {name, description} = req.body
    if(name){
        typeContractsControllers.createTypeContract({name, description})
            .then(data => {
                res.status(201).json(data)
            })
            .catch(err => {
                res.status(400).json({message: err.message})
            })
    }else{
        res.status(400).json({message: 'fill in at least the name field', fields : {
            name: 'STRING',
            description: `STRING o ''`
        }})
    }
}

const getAllTypeContract = (req, res) => {
    typeContractsControllers.getAllTypeContract()
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err => {
            res.status(400).json({message : err.message})
        })
}

module.exports = {
    createTypeContract,
    getAllTypeContract
}