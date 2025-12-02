# Use Node.js version 21 as the base image for all stages
FROM node:21 as base

# STAGE 1: Build
# Create a builder stage from the base image
FROM base AS builder
# Set the working directory inside the container
WORKDIR /home/build
# Copy package.json and package-lock.json to leverage Docker cache
COPY package*.json .
# Install dependencies (clean install for reproducible builds)
RUN npm ci
# Copy all source files to the container
COPY . .
# Build the production-ready static files
RUN npm run build

# STAGE 2: Serve with nginx (smaller image)
# Use lightweight nginx alpine image for serving static files
FROM nginx:alpine AS runner
# Copy the built static files from builder stage to nginx html directory
COPY --from=builder /home/build/dist /usr/share/nginx/html

# ALWAYS MAKE A USER TO RUN 
RUN addgroup --system --gid 001 frontend-user
RUN adduser --system -uid 1001 frontend-user

USER frontend-user

# Expose port 80 for HTTP traffic
EXPOSE 80

# Start nginx server in the foreground
CMD ["nginx", "-g", "daemon off;"]

