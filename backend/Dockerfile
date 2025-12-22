# 1️⃣ Base image
FROM node:18-alpine

# 2️⃣ App directory
WORKDIR /app

# 3️⃣ Package files copy
COPY package*.json ./

# 4️⃣ Dependencies install
RUN npm install

# 5️⃣ Baaki code copy
COPY . .

# 6️⃣ Port expose
EXPOSE 3000

# 7️⃣ App run
CMD ["node", "server.js"]

