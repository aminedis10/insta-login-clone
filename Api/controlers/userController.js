const user = require("../models/users");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const signup = async (req, res) => {
  try {
    const { email, fullname, username, password } = req.body;
    const hashp = await bcrypt.hash(password, 10);
    const newUser = new user({
      email,
      fullname,
      username,
      password: hashp,
    });
    await newUser.save();
    res.status(201).json({ message: "user created" });
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
};

const getusers = async (req, res) => {
  try {
    const users = await user.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    // check if email exist
    const exist = await user.findOne({ email });
    if (!exist) {
      return res.status(401).json({ message: "invalid email or password" });
    }
    // check if pass correct
    const passvalid = await bcrypt.compare(password, exist.password);
    if (!passvalid) {
      return res.status(401).json({ message: "invalid email or password" });
    }
    // generate token
    const token = jwt.sign(
      { email: exist.email, id: exist._id },
      process.env.SECRET,
      {
        expiresIn: "1h",
      }
    );
    res.json({ token });
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
};

module.exports = {
  signup,
  getusers,
  login,
};
