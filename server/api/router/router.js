const router = require('koa-router')();
const fs     = require('fs');
const path   = require('path');

const baseUrlBase = '/api/v1';

const files = fs.readdirSync(path.resolve(__dirname,"../",'controller'));
const controllerFiles = files.filter(it => it.endsWith('.js'));

for (let file of controllerFiles){
    let controller = require(path.resolve(__dirname,'../controller', file));
    Object.keys(controller.router).forEach(it=>{
        let methods = it.split(':');
        if(methods[0] === 'get'){
            router.get(`${baseUrlBase}${methods[1]}`,controller.router[it]);
        }
        if(methods[0] === 'post'){
            router.post(`${baseUrlBase}${methods[1]}`,controller.router[it]);
        }
    })
}
module.exports = router;
