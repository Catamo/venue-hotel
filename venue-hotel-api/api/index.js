const jsonServer = require('json-server');

const realData = require("./real-data");
const mockData = require("./mock-data");

const server = jsonServer.create();
const middlewares = jsonServer.defaults();

const realDataRouter = jsonServer.router(realData);
const mockDataRouter = jsonServer.router(mockData);

server.use(middlewares);
server.use('/api', realDataRouter);
server.use('/mock-api', mockDataRouter);

const internalPort = 3100;

server.listen(internalPort, () => {
  console.log(`JSON Server is running on port ${internalPort} ...`);
});