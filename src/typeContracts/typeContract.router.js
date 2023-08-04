const router = require('express').Router()

const typeContractServices = require('./typeContract.services')

router.get('/', typeContractServices.getAllTypeContract)
router.post('/register', typeContractServices.createTypeContract)

module.exports = router
