// server.js
require('dotenv').config();
const app = require('./src/app');

const PORT = process.env.PORT || 4000;

// Global error handlers
process.on('uncaughtException', (err) => {
  console.error('🛑 Uncaught Exception:', err);
  process.exit(1);
});

process.on('unhandledRejection', (err) => {
  console.error('🛑 Unhandled Rejection:', err);
  process.exit(1);
});

// Start the server
app.listen(PORT, () => {
  console.log(`✅ Auth Service is running on port ${PORT}`);
});

