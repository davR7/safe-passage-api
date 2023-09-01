const userModel = require("../database/models/userSchema")

module.exports = {
  async findOneUser(obj) {
    return await userModel.findOne(obj)
  },
  async createUser(obj) {
    return await userModel.create(obj)
  }
}