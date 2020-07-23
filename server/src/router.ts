import * as koaBody from 'koa-body';
import * as Router from 'koa-router';

export const router = new Router({
   prefix: '/api'
});


// set routes
// router.post('/uploadXml', multipartBody, uploadXml);
// router.get('/checkStatus', checkStatus);

router.get('/test', (ctx) => {
    console.log(`api/test: OK`);
    ctx.body = 'ok';
});
