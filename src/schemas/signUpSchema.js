const Joi = require('joi')

const signUpSchema = Joi.object({
  fullname: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().required(),
  passwordConfirm: Joi.string().equal(Joi.ref('password'))
})

module.exports = signUpSchema