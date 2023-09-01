const { app } = require('./app')
const port = process.env.API_PORT

app.listen(port, () => {
  console.log(`
App running at port:
-> http://localhost:${port}`)
});