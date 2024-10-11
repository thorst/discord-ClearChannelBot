# Use Node.js image
FROM node:20

# Create app directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy bot source code
COPY . .

# Start the bot
CMD [ "node", "index.js" ]
