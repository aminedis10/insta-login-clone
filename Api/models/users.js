const mongoose = require("mongoose");
const schema = mongoose.Schema;
const userschema = new schema({
  token: { type: String },
  email: { type: String, required: true, unique: true },
  fullname: { type: String, required: true },
  username: { type: String, require: true, unique: true },
  password: {
    type: String,
    require: true,
  },
});

const user = mongoose.model("User", userschema);

module.exports = user;
