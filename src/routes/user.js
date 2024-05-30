const router = require('express').Router()
const validate = require('../middlewares/validate')
const { authValidation } = require('../validations')
const { UserController } = require('../controllers')

const userController = new UserController()

router.get('/', userController.getUsers)

module.exports = router
