FROM node:10-alpine

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY . .

RUN npm install -g json-server
RUN npm install

CMD ["json-server", "src/mock-generator.js"]
