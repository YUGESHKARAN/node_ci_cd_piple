const Student = require("../models/schema");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "User email and password resuired" });
    }
    const user = await Student.findOne({ email });

    let isAuthenticate = bcrypt.compare(password, user.password);
    if (!isAuthenticate) {
      return res.status(401).json({ message: "Invalid password" });
    }

    const payload = {
      name: user.name,
      age: user.age,
      department: user.department,
    };

    const token = jwt.sign(payload, process.env.JWT_AUTH_KEY);

    res.status(200).json({ message:"Login Successfull",token });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = login
