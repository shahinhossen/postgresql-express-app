# 1. Base image
FROM node:20-alpine

# 2. Set working directory
WORKDIR /app

# 3. Copy package files first (better layer caching)
COPY package*.json ./

# 4. Install dependencies
RUN npm install

# 5. Copy rest of the project
COPY . .

# 6. Generate Prisma client (inside container)
RUN npx prisma generate

# 7. Expose app port
EXPOSE 3000

# 8. Start the app
CMD ["npm", "start"]
