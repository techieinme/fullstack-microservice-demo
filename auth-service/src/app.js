
const express = require('express');
const app = express();
const cors = require('cors');
const helmet = require('helmet');
const connectDB = require('./config/db');
const authRoutes = require('./routes/auth.routes');
const errorHandler = require('./middleware/errorHandler');
const rateLimiter = require('./middleware/rateLimiter');

require('dotenv').config();
connectDB();

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(rateLimiter);

app.use('/api/auth', authRoutes);
app.use(errorHandler);

module.exports = app;


