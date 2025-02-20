FROM node:16

WORKDIR /app

# Install dependencies
COPY package.json .
RUN npm install

# Copy app files
COPY . .

# Expose port
EXPOSE 5000

# Start app
CMD ["npm", "start"]
