FROM node:18-alpine as builder
WORKDIR /app
COPY . .
RUN npm install

EXPOSE 5000

ENTRYPOINT ["node", "index.js"]