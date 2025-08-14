# Base image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy all source code
COPY . .

# Set environment variables (override via .env or Docker Compose)
ENV NODE_ENV=production
ENV PORT=6001

# Expose the port the app runs on
EXPOSE 6001

# Start the application
CMD ["node", "server.js"]
