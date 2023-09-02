const userCtl = require('../controllers/userController')
const passportJwt = require('../config/passportJwt')
const { validateSignIn, validateSignUp } = require('../middlewares/validateRequest')


module.exports = app => {
    app.route('/signin')
      .post(validateSignIn, userCtl.signin)
    
    app.route('/signup')
      .post(validateSignUp, userCtl.signup)

    //private route, access only with token
    app.route('/')
      .all(passportJwt)
      .get(userCtl.readAuthUser)
}