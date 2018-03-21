const koa = require('koa');
const bodyParser = require('koa-bodyparser');
const cors  = require('koa2-cors');
const router = require('./api/router/router');
const app = new koa();
app.use(cors({
    credentials : true  //开启跨域请求
}));
app.use(bodyParser());
app.use(router.routes());


app.listen('9000');
console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>');
console.log('run start...http://localhost:9000');
