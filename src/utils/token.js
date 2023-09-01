const jwt = require("jsonwebtoken")
const secret = require("../config/secretKey")

exports.tokenGenerate = (params = {}) => {
  return jwt.sign(params, secret.key, { expiresIn: 86400 })
};
