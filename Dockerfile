FROM node:17-alpine

WORKDIR /node

COPY package*.json ./

RUN npm install && npm cache clean --force

WORKDIR /node/app