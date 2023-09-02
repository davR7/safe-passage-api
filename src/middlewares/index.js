const notFoundRoute = require('./notFoundRoute')
const errorHandler = require('./errorHandler')
const validateRequest = require('./validateRequest')

module.exports = {
  errorHandler,
  notFoundRoute,
  validateRequest,
}