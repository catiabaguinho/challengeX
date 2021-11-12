# syntax=docker/dockerfile:1
FROM node:16
EXPOSE 80 8080

WORKDIR /node/app

COPY package.json /node/app/
COPY package-lock.json /node/app/
RUN npm ci

COPY . /node/app

CMD ["npm", "start"]

