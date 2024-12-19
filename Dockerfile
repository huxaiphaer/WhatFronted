# Use node image as base
FROM node:18.18.2 AS development

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN yarn

# Copy the rest of the application
COPY . .

# Build the app
RUN yarn build

# Expose port
EXPOSE 3006

# Start the React app
CMD ["yarn", "start:dev"]
