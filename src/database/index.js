const mongoose = require("mongoose");

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
};

mongoose
  .connect(process.env.MONGO_URL, options)
  .catch((err) => console.log(err));

module.exports = mongoose;
