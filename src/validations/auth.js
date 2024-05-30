const joi = require('joi')
const {
  stringReqValidation,
  emailValidation,
  passwordValidation,
} = require('./common')

const register = joi.object({
  fullName: stringReqValidation.min(3),
  userName: stringReqValidation.min(8),
  email: emailValidation,
  password: passwordValidation,
  gender: stringReqValidation.valid('male', 'female', 'other'),
})

module.exports = {
  register,
}
