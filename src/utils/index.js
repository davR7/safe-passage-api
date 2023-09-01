const { tokenGenerate } = require("./token")
const { passIsMatch, generateHash } = require("./hash")

module.exports = {
  tokenGenerate,
  generateHash,
  passIsMatch,
};
