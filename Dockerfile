# Use an official Node runtime as a parent image
FROM node:14

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json (or yarn.lock)
COPY package*.json ./

# Install any needed packages specified in package.json
RUN npm install

# Bundle your app's source code inside the Docker container
COPY . .

# Make your app’s port available to the outside world
EXPOSE 3000

# Define the command to run your app using CMD which defines your runtime
CMD ["node", "gateway.js"]