# Use official Node.js image instead of Ubuntu + NVM
FROM node:21

# Set working directory
WORKDIR /app

# Copy package files first (for better caching)
COPY package.json package.json
COPY package-lock.json package-lock.json

# Install dependencies
RUN npm install

# Copy application files
COPY index.js index.js
COPY .env .env

# Expose port from .env (5000)
EXPOSE 5000

# Run the application
CMD ["node", "index.js"]



