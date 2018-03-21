const model = require('../model/User');
const Op = require('sequelize').Op;

class User {
    constructor(){
        this.router = {
            "get:/user"             : this.user,
            "post:/user/update"     : this.userUpdate,
        }
    }
    async user(ctx){
        let user = await model.findAll();
        ctx.body = user;
    }
    async userUpdate(ctx){
        let res = await model.update(
            ctx.request.body,{
                where : {
                    id : {
                        [Op.eq] : 1
                    }
                }
            });
        ctx.body = res;
    }
}

module.exports = new User;
