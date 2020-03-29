FROM node:10-alpine

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package.json package.json
# Docker caches this, so NPM Instal is run only when needed
# It works because I copy the package.json file first
RUN yarn install

COPY . .

RUN yarn build

CMD yarn start