const router = require('express').Router()

const workersServices = require('./workers.services')

router.get('/', workersServices.getAllWorkers)

router.route('/:id')
    .get(workersServices.getWorkerById)
    .patch(workersServices.updateWorker)

router.post('/register',workersServices.createWorker)

module.exports = router