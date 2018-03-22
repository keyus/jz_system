const model = require('../model/House');
const Op = require('sequelize').Op;

class House {
    constructor() {
        this.router = {
            "get:/house": this.house,
        }
    }

    async house(ctx) {
        ctx.request.body = ctx.request.query ? ctx.request.query : {
            page: 1,
            size: 10
        };
        let {page, size, keywords, area_id,company_id} = ctx.request.query;
        size = Number(size);
        let offset = page === 1 ? 0 : (page-1) * size;
        let area_where=null ,company_where=null;        //关联地区,关联公司
        if(area_id && area_id>0){
            area_where = {
                [Op.and]: [
                    {
                        area_id:{
                            [Op.eq]: area_id
                        }
                    }
                ]
            }
        }
        if(company_id && company_id>0){
            company_where = {
                [Op.and]: [
                    {
                        company_id:{
                            [Op.eq]: company_id
                        }
                    }
                ]
            }
        }

        let res = await model.findAndCount({
            offset ,
            limit: size,
            where : {
                [Op.or]: [
                    {
                        name: {
                            [Op.like]: `%${keywords}%`
                        }
                    },
                    {
                        address: {
                            [Op.like]: `%${keywords}%`
                        }
                    },
                    {
                        size: {
                            [Op.like]: `%${keywords}%`
                        }
                    },
                ],
                ...area_where,
                ...company_where
            }
        });
        ctx.body = {
            status: 1,
            data: res
        };
    }
}

module.exports = new House;
