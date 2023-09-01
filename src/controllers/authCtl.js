const bcript = require("bcrypt");
const userModel = require("../database/models/userSchema");
const { tokenGenerate } = require("../utils");

exports.signin = async (req, res, next) => {
  const { email, password } = req.body;

  if (!email && password) {
    return res.status(400).send({ error: "Email is required" });
  } else if (email && !password) {
    return res.status(400).send({ error: "Password is required" });
  } else if (!email && !password) {
    return res.status(400).send({ error: "Email and Password is required" });
  }

  const dtUser = await userModel.findOne({ email });
  if (!dtUser)
    return res.status(400).json({ error: "Email is not registered" });

  const passIsMatch = await bcript.compare(password, dtUser.password);
  if (!passIsMatch)
    return res.status(400).json({ error: "Password is invalid" });

  const token = tokenGenerate({ id: dtUser.id });
  return res.json({ success: true, token });
};

exports.signup = async (req, res, next) => {
  const user = { ...req.body };

  if (await userModel.findOne({ email: user.email }))
    return res
      .status(400)
      .json({ success: false, error: "User already exists" });

  try {
    const newUser = await userModel.create(user);
    return res.status(201).json({ success: true, user: newUser });
  } catch (err) {
    next(err);
  }
};

exports.msgLogin = (req, res, next) => {
  return res.json({ msg: "You are logged in. :)" });
};
