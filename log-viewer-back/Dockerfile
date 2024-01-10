FROM node:18-alpine as builder
WORKDIR /app
COPY . .
RUN npm install

EXPOSE 5500

ENTRYPOINT ["node", "index.js"]