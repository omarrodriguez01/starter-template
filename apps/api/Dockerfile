FROM node:18-alpine as builder
WORKDIR /app
COPY package.json ./
RUN npm i -g @nestjs/cli
RUN npm i
COPY . .
RUN npm run build

# Start the application
CMD [ "node", "dist/main.js" ]