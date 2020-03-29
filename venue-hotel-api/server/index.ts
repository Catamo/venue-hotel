import 'module-alias/register';

import express from 'express';
import bodyParser from 'body-parser';
import MiddlewaresRegistry from './middlewares/middlewares-registry';
import GlobalHttpConfig from './concrete-domain/http-methods/global-http-config';

const app: express.Application = express();
app.use(bodyParser.json());

// temporary, while moving assets to CDN or something similar
app.use('/static', express.static(__dirname + '/../../api/mock-data/assets'));

const globalConfig: any = GlobalHttpConfig.getInstance();
globalConfig.setBaseUrl('http://localhost:3100');

const middlewareRegistry: any = new MiddlewaresRegistry();
middlewareRegistry.registerRoutesToApp(app);

const port: any = process.env.PORT ? process.env.PORT : 4000;
app.listen(port, () => {
  console.log(`Express Server is running on port ${port} ...`);
});