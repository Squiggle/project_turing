const Koa = require('koa');
const Router = require('@koa/router');

const app = new Koa();
const router = new Router();

router.get('/weather', (ctx, next) => {
  ctx.body = {
    rainfall: 10,
    daylight: 'daytime'
  };
})
  .post('/security', async (ctx, next) => {
    await new Promise(resolve => setTimeout(resolve, 2000));
    ctx.body = {
      enabled: false
    };
  });

const port = 8080;
console.log(`API listening on port ${port}`);
app
  .use(router.routes())
  .use(router.allowedMethods())
  .listen(8080);