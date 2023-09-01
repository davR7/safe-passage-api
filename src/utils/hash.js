const bcript = require("bcrypt")

exports.validatePassword = async (candidatePassword, hash) => {
  return await bcript.compare(candidatePassword, hash)
};

exports.hashPassword = async (password) => {
  const hash = await bcript.hash(password, 10)
  return hash
};
