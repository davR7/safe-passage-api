require("./config/dotenv")
const app = require("express")()
const loaders = require("./loaders")
const routes = require("./routes")
const { notFoundRoute, errorHandler } = require('./middlewares')

loaders(app)
routes(app)
app.use(notFoundRoute)
app.use(errorHandler)

module.exports = { app }