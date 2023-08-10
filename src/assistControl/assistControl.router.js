const assistControlService = require('./assistControl.services')

const router = require('express').Router()

router.get('/', assistControlService.getAllAssistControl)

router.get('/id', assistControlService.getByIdAssistControl)

router.get('/register', assistControlService.registrarAssistControl)

module.exports = router