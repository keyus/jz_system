const model = require('../model/User');
const Op = require('sequelize').Op;

class User {
    constructor() {
        this.router = {
            "get:/user": this.user,
            "post:/user/update": this.userUpdate,
        }
    }

    async user(ctx) {
        let user = await model.findAll({
            attributes: ['id', 'user', 'nick', 'phone', 'name']
        });
        ctx.body = user;
    }

    async userUpdate(ctx) {
        let {password, newPassword, name, phone} = ctx.request.body;
        let find = await model.findById(1);
        if (find.dataValues.password === password) {
            await model.update(
                {
                    name,
                    phone,
                    password: newPassword
                },
                {
                    where: {
                        id: {
                            [Op.eq]: 1
                        }
                    }
                });
            ctx.body = {
                status: 1,
                msg: '修改成功'
            };
            return;
        }
        ctx.body = {
            status: 0,
            msg: '原始密码错误'
        };

    }
}

module.exports = new User;
