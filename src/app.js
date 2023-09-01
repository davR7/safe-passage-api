require("./config/dotenv")
const port = 3030;
const app = require("express")()
const loaders = require("./loaders")
const routes = require("./routes")
const { notFoundRoute, errorHandler } = require('./middlewares')

loaders(app)
routes(app)
app.use(notFoundRoute)
app.use(errorHandler)

app.listen(port, () => {
  console.log(`
App running at port:
-> http://localhost:${port}`)
});
