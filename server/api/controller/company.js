const model = require('../model/Company');
const Op = require('sequelize').Op;

class Company {
    constructor() {
        this.router = {
            "get:/company": this.company,
            "post:/company/save": this.companySave,
            "post:/company/update": this.companyUpdate,
            "post:/company/delete": this.companyDelete,
        }
    }

    async company(ctx) {
        let { keywords } = ctx.request.query;
        keywords = keywords ? keywords : '';
        let res = await model.all({
            where : {
                company_name: {
                    [Op.like]: `%${keywords}%`
                },
            }
        });
        ctx.body = {
            status: 1,
            data: res
        };
    }

    async companySave(ctx) {
        const query = ctx.request.body;
        await model.create(query);
        ctx.body = {
            status : 1,
            msg : '添加成功'
        }
    }

    async companyUpdate(ctx){
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


    async companyDelete(ctx){
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

module.exports = new Company;
