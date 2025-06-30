# Step 1: Build React App using Vite
FROM node:18-alpine as build

WORKDIR /app

# Copy package files and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy the rest of the source code
COPY . .

# Build the app using Vite
RUN npm run build

# Step 2: Serve with NGINX
FROM nginx:alpine

# Remove default nginx static files
RUN rm -rf /usr/share/nginx/html/*

# Copy Vite's build output (dist folder) to NGINX web root
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80 for web traffic
EXPOSE 80

# Run NGINX in foreground
CMD ["nginx", "-g", "daemon off;"]
