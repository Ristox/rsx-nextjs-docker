import * as express from 'express';

import { Actions } from './actions/Actions';

const actions = new Actions();

const api = express.Router();

api.get('/delay/:ms', async (req:any, res:any) => {
  const { ms } = req.params;

  const delay = await actions.delayFor(ms);

  res.send(`Done delaying for ${delay} ms`);
});

api.get('/cpu-load-during/:ms', async (req:any, res:any) => {
  const { ms } = req.params;

  const delay = await actions.cpuLoadFor(ms);

  res.send(`Done simulating CPU load for about ${delay} seconds`);
});

api.get('/hello', async (req:any, res:any) => {
  const response = await actions.hello();

  res.send(response);
});

export { api };
