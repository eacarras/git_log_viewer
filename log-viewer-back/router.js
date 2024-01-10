const express = require('express')
const controllers = require('./controllers')

const router = express.Router()


router.get('/repo/logs/', controllers.getLogs)

module.exports = router
