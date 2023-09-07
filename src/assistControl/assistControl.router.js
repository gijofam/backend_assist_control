const assistControlService = require('./assistControl.services')

const router = require('express').Router()

router.get('/', assistControlService.getAllAssistControl)

router.get('/:id', assistControlService.getByIdAssistControl)

router.post('/register', assistControlService.registrarAssistControl)

module.exports = router