# The premix
FROM node:20-buster

# Working directory
WORKDIR /diby

# Copy code into the Container [VM]
COPY . .

# Install dependencies
RUN npm i

# Start the server
CMD ["node", "server.js"]