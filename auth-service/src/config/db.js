const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB connected');
    mongoose.connection.on('error', (err) => {
      console.error("❌ Mongoose connection error:", err);
    });

    mongoose.connection.on('disconnected', () => {
      console.warn("⚠️ Mongoose disconnected");
    });
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
};

module.exports = connectDB;