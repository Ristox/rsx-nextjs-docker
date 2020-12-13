import * as dotenv from 'dotenv';
import * as express from 'express';

import * as next from 'next';
import * as appInsights from 'applicationinsights';

import api from './api';

dotenv.config();
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare()
.then(() => {
  const server = express();

  server.use('/api', api);

  server.get('/p/:id', (req, res) => {
    const actualPage = '/post'
    const queryParams = { id: req.params.id }
    app.render(req, res, actualPage, queryParams)
  });

  server.get('*', (req, res) => {
    return handle(req, res)
  });

  server.listen(process.env.PORT || 3000, (err) => {
    if (err) {
       throw err;
    }
    console.log(`> Ready on http://localhost:${process.env.PORT || 3000}`);

    console.log(`Using AppInsights: ${process.env.APP_INSIGHTS}`);
    appInsights.setup(process.env.APP_INSIGHTS).start();
  });
})
.catch((ex:any) => {
  console.error(ex.stack)
  process.exit(1)
})
