const passportJwt = require('../config/passportJwt')
const userCtl = require('../controllers/userController')


module.exports = app => {
    app.route('/signin')
      .post(userCtl.signin)
    
    app.route('/signup')
      .post(userCtl.signup)

    //private route, access only with token
    app.route('/')
      .all(passportJwt)
      .get(userCtl.msgLogin)
}