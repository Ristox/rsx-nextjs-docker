import * as express from 'express';

const router = express.Router();

router.get('/delay/:ms', async (req:any, res:any) => {
  const delayFor = (milliseconds: number) => {
    return new Promise((resolve) =>
       setTimeout(() => resolve(), milliseconds)
    );
  };
  const { ms } = req.params;
  const delay = Math.min(7000, ms);
  
  await delayFor(delay);

  res.send(`Done delaying for ${delay} ms`);
});

router.get('/cpu-load-during/:ms', async (req:any, res:any) => {
  const { ms } = req.params;
  const delay = Math.min(9000, ms);

  console.time('cpu blocking...');
  for (let i = 1; i < (delay/1000) * 8e8 ; i++);
  console.timeEnd('cpu blocking...');

  res.send(`Done simulating CPU load for about ${(delay/1000).toFixed(0)} seconds`);
});

router.get('/hello', async (req:any, res:any) => {
  res.send('hello')
});


export default router;
