const userModel = require("../database/models/userSchema")
const { tokenGenerate, hashPassword, validatePassword } = require("../utils")

exports.signin = async (req, res, next) => {
  const { email, password } = req.body

  if (!email && password) {
    return res.status(400).send({ error: "Email is required" })
  } else if (email && !password) {
    return res.status(400).send({ error: "Password is required" })
  } else if (!email && !password) {
    return res.status(400).send({ error: "Email and Password is required" })
  }

  const user = await userModel.findOne({ email })
  if (!user)
    return res
      .status(400)
      .json({ success: false, error: "Email is not registered" })

  const isMatch = await validatePassword(password, user.password)
  if (!isMatch)
    return res
      .status(400)
      .json({ success: false, error: "Password is incorrect" })

  try {
    const token = await tokenGenerate({ id: user.id });
    return res.json({ success: true, token })
  } catch (err) {
    next(err)
  }
};

exports.signup = async (req, res, next) => {
  const { email, password, ...rest } = req.body

  if (await userModel.findOne({ email }))
    return res
      .status(400)
      .json({ success: false, error: "User already exists" })

  try {
    const hash = await hashPassword(password)
    const newUser = await userModel.create({ ...rest, email, password: hash })
    return res.status(201).json({ success: true, user: newUser })
  } catch (err) {
    next(err)
  }
};

exports.msgLogin = (req, res) => {
  const userId = req.user.id
  return res.json({ success: true, userId })
};
