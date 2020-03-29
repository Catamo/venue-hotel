FROM node:10-alpine

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package.json package.json

RUN yarn install

COPY . .

RUN yarn build

CMD yarn start