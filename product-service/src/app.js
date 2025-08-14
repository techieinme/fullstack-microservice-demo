const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimiter = require('./middleware/rateLimiter');
const connectDB = require('./config/db');
const productRoutes = require('./routes/product.routes');
const errorHandler = require('./middleware/errorHandler');

require('dotenv').config();
connectDB();

const app = express();
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(rateLimiter);

app.use('/api/products', productRoutes);
app.use(errorHandler);

module.exports = app;
