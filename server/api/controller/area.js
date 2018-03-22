const model = require('../model/Area');
const Op = require('sequelize').Op;

class Area {
    constructor(){
        this.router = {
            "get:/area"          : this.area,
            "post:/area/add"     : this.areaAdd,
            "post:/area/delete"  : this.areaDelete,
            "post:/area/update"  : this.areaUpdate,
        }
    }
    async area(ctx){
        let list = await model.all({
            order : [
                ['id','DESC']
            ]
        });
        ctx.body = list;
    }
    async areaAdd(ctx){
        let isRepeat = await model.find({
            where : {
                name : {
                    [Op.eq] : ctx.request.body.name
                }
            }
        });
        if(isRepeat){
            return ctx.body = {
                status : 0,
                msg : '该地区名称已存在'
            }
        }
        let res     = await model.create(ctx.request.body);
        ctx.body = {
            status : 1,
            data : res
        };
    }
    async areaDelete(ctx){
        let id = ctx.request.body.id;
        if(Number(id)){
            let res = await model.destroy({
                where : {
                    id : {
                        [Op.eq] : id
                    }
                }
            });
            if(res){
                return ctx.body ={
                    status : 1,
                    msg : '删除成功'
                };
            }
            return ctx.body ={
                status : 0,
                msg : '删除错误，记录不存在'
            };
        }

        return ctx.body = {
            status : 0 ,
            msg : '参数错误'
        }

    }

    //修改
    async areaUpdate (ctx){
        let id = ctx.request.body.id;
        console.log(id);
        let res = await model.update(ctx.request.body,{
            where : {
                id : {
                    [Op.eq] : id
                }
            }
        });
        if(res){
            return ctx.body ={
                status : 1,
                msg : '修改成功'
            };
        }else{
            return ctx.body ={
                status : 0,
                msg : res
            };
        }

    }
}

module.exports = new Area;
