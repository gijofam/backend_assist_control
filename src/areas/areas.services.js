const areaControllers = require('./areas.controllers')

const createArea = (req,res) => {
    const {name,sigla,description} = req.body
    if(name && sigla){
        areaControllers.createArea({name,sigla,description})
            .then(data => {
                res.status(201).json(data)
            })
            .catch(err => {
                res.status(400).json({message: err.message})
            })
    }else{
        res.status(400).json({message: 'fill in at least the name field', fields: {
            name: 'STRING',
            sigla: 'STRING',
            description: `STRING o ''` ,

       }})
    }
}

const getAllAreas = (req, res) => {
   areaControllers.getAllAreas()
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err => {
            res.status(400).json({message: err.message})
        })
}

module.exports = {
    createArea,
    getAllAreas
}