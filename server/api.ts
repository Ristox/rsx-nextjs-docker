import express from 'express';

import { Actions } from './actions';
import { trackingClient } from './tracking';

const actions = new Actions();

const api = express.Router();

api.get('/delay/:ms', async (req:any, res:any) => {
  const { ms } = req.params;

  trackingClient.trackEvent({name: 'Delay - Request (ms)', properties: {requestDelay: ms}});
  const delay = await actions.delayFor(ms);
  trackingClient.trackEvent({name: 'Delay - Actual (ms)', properties: {delay}});

  res.send(`Done delaying for ${delay} ms`);
});

api.get('/cpu-load-during/:ms', async (req:any, res:any) => {
  const { ms } = req.params;

  trackingClient.trackEvent({name: 'CPU Load - Request Delay (ms)', properties: {requestDelay: ms}});
  const delay = await actions.cpuLoadFor(ms);
  trackingClient.trackEvent({name: 'CPU Load - Actual Delay (ms)', properties: {actualDelay: delay}});

  res.send(`Done simulating CPU load for ${delay} milliseconds`);
});

api.get('/hello', async (req:any, res:any) => {
  const response = await actions.hello();
  trackingClient.trackEvent({name: 'Hello Call - Response', properties: {response}});

  res.send(response);
});

export { api };
