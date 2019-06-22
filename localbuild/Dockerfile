FROM node:10-alpine

COPY ./package.json /app

COPY ./yarn.lock /app

WORKDIR /app

RUN yarn install
