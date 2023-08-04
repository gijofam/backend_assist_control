const router = require('express').Router()

const areaServices = require('./areas.services')

router.get('/', areaServices.getAllAreas )
router.post('/register', areaServices.createArea)

module.exports = router