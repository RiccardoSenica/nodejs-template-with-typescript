# Build the Node.js app
FROM node:18 as builder

WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock) to the container
COPY package*.json ./

# Install project dependencies
RUN yarn install

# Copy the rest of the application code to the container
COPY . .

# Expose the port that your Node.js app is running on (change 3000 to your desired port)
EXPOSE 3000

# Define the command to start your Node.js application
CMD ["bash", "-c", "yarn db:generate && yarn db:migrate && yarn dev"]
