const { signInSchema, signUpSchema } = require('../schemas')

const validateSignUp = async (req, res, next) => {
  try {
    await signUpSchema.validateAsync(req.body)
  } catch(e) {
    next(e)
  }
  next()
}

const validateSignIn = async (req, res, next) => {
  try {
    await signInSchema.validateAsync(req.body)
  } catch(e) {
    next(e)
  }
  next()
}

module.exports = {
  validateSignIn,
  validateSignUp
}