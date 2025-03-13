# Stage 1: Build
FROM node:18 AS builder

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY . .
RUN npm run build

# Stage 2: Run
FROM nginx:alpine

WORKDIR /usr/share/nginx/html

COPY --from=builder /app/dist ./
COPY --from=builder /app/node_modules ./node_modules

# Expose port
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
