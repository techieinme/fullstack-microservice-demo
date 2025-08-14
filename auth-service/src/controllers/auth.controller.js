const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/User');

exports.register = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: `Email ${email} already registered` });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ name, email, password: hashedPassword });
    const userObj = user.toObject(); 
    delete userObj.password;
    res.status(201).json({ message: 'User registered successfully', user:userObj });
  } catch (error) {
    next(error);
  }
};

exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(401).json({ message: 'Invalid credentials' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ message: 'Invalid credentials' });

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: '1h'
    });
    res.json({ token });
  } catch (error) {
    next(error);
  }
};

exports.verifyToken =  (req, res) => {
  const token = req.headers.authorization;
  console.log("auth token",token);
  
  if (!token) return res.status(401).json({ valid: false });

  try {
    const user = jwt.verify(token, process.env.JWT_SECRET);
    res.json({ valid: true, user });
  } catch (err) {
    res.status(401).json({ valid: false });
  }
}
