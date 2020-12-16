import express from 'express';

import next from 'next';

import { api } from './server';
import { trackingClient } from "./server/tracking";
import { AddressInfo } from "net";


trackingClient.trackEvent({name: 'Startup...'});
const dev = process.env.NODE_ENV !== 'production';
const nextApp = next({ dev });

const startServer = () => {
  const port = process.env.PORT || 3000;

  const server = express();
  server.use('/api', api);
  server.get('/p/:id', (req, res) => nextApp.render(req, res, '/post', req.params));
  const nextRequestHandler = nextApp.getRequestHandler();
  server.get('*', (req, res) => nextRequestHandler(req, res));

  const instance = server.listen(port, () => {
    const addr = instance.address() as AddressInfo;
    console.log(`Server ready at ${addr.address}:${process.env.SERVICE_PORT || addr.port}`);
    console.log(`Using AppInsights Tracking: ${JSON.stringify(trackingClient.config)}`);
    trackingClient.trackEvent({name: 'Startup Complete.'});
  });
};

nextApp.prepare()
  .then(startServer)
  .catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
  })
