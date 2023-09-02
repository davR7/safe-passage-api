const { findOneUser, createUser } = require('../services')
const { tokenGenerate, hashPassword, validatePassword } = require("../utils")

exports.signin = async (req, res, next) => {
  const { email, password } = req.body

  const user = await findOneUser({ email })
  if (!user)
    return res.status(400).json({ success: false, error: "Email is not registered" })

  const isMatch = await validatePassword(password, user.password)
  if (!isMatch)
    return res.status(400).json({ success: false, error: "Password is incorrect" })

  try {
    const token = await tokenGenerate({ id: user.id });
    return res.json({ success: true, token })
  } catch (err) {
    next(err)
  }
}

exports.signup = async (req, res, next) => {
  const { fullname, email, password } = req.body

  if (await findOneUser({ email }))
    return res.status(400).json({ success: false, error: "User already exists" })

  try {
    const hash = await hashPassword(password)
    const newUser = await createUser({ fullname, email, password: hash })
    return res.status(201).json({ success: true, user: newUser })
  } catch (err) {
    next(err)
  }
}

exports.readAuthUser = (req, res) => {
  const userId = req.user.id
  return res.json({ success: true, userId })
}
