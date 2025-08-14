const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Product DB connected');
  } catch (error) {
    console.error('Product DB connection error:', error);
    process.exit(1);
  }
};

module.exports = connectDB;
