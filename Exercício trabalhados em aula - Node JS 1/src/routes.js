const { Router } = require('express')
const { createProductController } = require('../../controller/createProductController')

const routes = Router()

routes.post('/product', createProductController)

module.exports = routes