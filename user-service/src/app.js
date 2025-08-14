const express = require('express');
const app = express();
const cors = require('cors');
const helmet = require('helmet');

const connectDB = require('./config/db')
const rateLimiter = require('./middleware/rateLimiter');
const errorHandler = require('./middleware/errorHandler');
const verifyToken = require('./middleware/verifyToken');
const userRoute  = require('./routes/user.routes')



require('dotenv').config();
connectDB();

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(rateLimiter);
app.use('/api/users',userRoute)
app.use(errorHandler);

module.exports = app;

