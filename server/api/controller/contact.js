const model = require('../model/Contact');
const Op = require('sequelize').Op;

class Contact {
    constructor() {
        this.router = {
            "get:/contact": this.contact,
            "post:/contact/save": this.contactSave,
            "post:/contact/update": this.contactUpdate,
            "post:/contact/delete": this.contactDelete,
        }
    }

    async contact(ctx) {
        ctx.request.body = ctx.request.query ? ctx.request.query : {
            page: 1,
            size: 10
        };
        let {page, size, keywords} = ctx.request.query;
        size = Number(size);
        let offset = page === 1 ? 0 : (page-1) * size;
        let res = await model.findAndCount({
            offset ,
            limit: size,
            where : {
                [Op.or] : {
                    name: {
                        [Op.like]: `%${keywords}%`
                    },
                    phone: {
                        [Op.like]: `%${keywords}%`
                    },
                },
            }
        });
        ctx.body = {
            status: 1,
            data: res
        };
    }

    //添加
    async contactSave(ctx) {
        const query = ctx.request.body;
        await model.create(query);
        ctx.body = {
            status : 1,
            msg : '添加成功'
        }
    }

    //更新联系人
    async contactUpdate(ctx){
        const query = ctx.request.body;
        if(!query.hasOwnProperty('id')){
            ctx.body={
                status : 0 ,
                msg : '错误的请求'
            }
            return ;
        }

        await model.update(query,{
            where : {
                id : {
                    [Op.eq] : query.id
                }
            }
        })
        ctx.body = {
            status : 1,
            msg : '更新成功'
        }

    }


    //删除联系人
    async contactDelete(ctx){
        let { id } = ctx.request.body;
        let res    = await model.destroy({
            where : {
                id : {
                    [Op.eq] : id
                }
            }
        });
        if(res){
            ctx.body = {
                status : 1 ,
                msg : '删除成功'
            }
        }else{
            ctx.body = {
                status : 0 ,
                msg : '资源不存在，或参数错误'
            }
        }

    }
}

module.exports = new Contact;
