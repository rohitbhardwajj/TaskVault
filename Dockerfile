# Step 1: Use node image
FROM node:18

# Step 2: Create app directory
WORKDIR /app

# Step 3: Copy package files and install
COPY package*.json ./
RUN npm install

# Step 4: Copy rest of the files and build
COPY . .
RUN npm run build

# Step 5: Install `serve` to serve build folder
RUN npm install -g serve

# Step 6: Serve the React build folder
CMD ["serve", "-s", "dist", "-l", "3000"]

EXPOSE 3000
