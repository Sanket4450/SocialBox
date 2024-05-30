const router = require('express').Router()
const validate = require('../middlewares/validate')
const { authValidation } = require('../validations')
const { AuthController } = require('../controllers')

const authController = new AuthController()

router.post(
  '/register',
  validate(authValidation.register),
  authController.registerUser
)

module.exports = router
