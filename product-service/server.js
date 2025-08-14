const app = require('./src/app');

process.on('uncaughtException', (err) => {
  console.error('Uncaught Exception:', err);
  process.exit(1);
});

process.on('unhandledRejection', (err) => {
  console.error('🛑 Unhandled Rejection:', err);
  process.exit(1);
});

app.listen(process.env.PORT || 5000, () => {
  console.log(`Product Service running on port ${process.env.PORT || 5000}`);
});
