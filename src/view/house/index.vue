<template>
    <div class="fp-index">
        <!--<subsider-navbar></subsider-navbar>-->

        <div class="card fp-page-title">
            <div class="card-block">


                <el-breadcrumb separator="/">
                    <el-breadcrumb-item :to="{ path: '/' }">控制台</el-breadcrumb-item>
                    <el-breadcrumb-item>房屋管理</el-breadcrumb-item>
                </el-breadcrumb>



                <div class="fp-filter">

                    <div class="fp-filter-text">过滤条件：</div>
                    <div class="fp-filter-item">
                        <el-input v-model="pagination.keywords" style="width: 260px" placeholder="业主姓名/房屋地址/房屋面积"></el-input>
                    </div>
                    <div class="fp-filter-item">
                        <el-select v-model="pagination.area_id" placeholder="所在地区">
                            <el-option
                                :key="0"
                                label="全部"
                                :value="0">
                            </el-option>
                            <el-option
                                v-for="item in areaList"
                                :key="item.id"
                                :label="item.name"
                                :value="item.id">
                            </el-option>
                        </el-select>
                    </div>

                    <div class="fp-filter-item">
                        <el-select v-model="pagination.company_id" placeholder="装修单位/个人">
                            <el-option
                                :key="0"
                                label="全部"
                                :value="0">
                            </el-option>
                            <el-option
                                v-for="item in companyList"
                                :key="item.id"
                                :label="item.company_name"
                                :value="item.id">
                            </el-option>
                        </el-select>
                    </div>
                    <div class="fp-filter-item">
                        <el-button type="primary" @click="init">搜索</el-button>
                    </div>
                </div>
            </div>
        </div>

        <div class="card">
            <div class="card-block">

                <div>
                    <el-button type="primary" plain>添加房屋</el-button>
                </div>

                <el-table
                    :data="list"
                    style="width: 100%">
                    <el-table-column
                        prop="id"
                        label="编号"
                        width="50">
                    </el-table-column>
                    <el-table-column
                        prop="startDate"
                        label="开工日期"
                        width="100">
                        <template slot-scope="scope">
                            <template v-if="scope.row.startDate">
                                {{scope.row.startDate}}
                            </template>
                            <template v-else>
                                <el-tag type="warning">未开工</el-tag>
                            </template>
                        </template>
                    </el-table-column>

                    <el-table-column
                        prop="name"
                        label="业主姓名"
                        width="100">
                    </el-table-column>
                    <el-table-column
                        prop="area_id"
                        width="100"
                        :formatter="formatArea"
                        label="所在地">
                    </el-table-column>
                    <el-table-column
                        prop="address"
                        label="房屋住址">
                    </el-table-column>
                    <el-table-column
                        prop="size"
                        width="100"
                        label="面积(㎡)">
                    </el-table-column>
                    <el-table-column
                        prop="price"
                        label="签约价(元)">
                    </el-table-column>
                    <el-table-column
                        prop="company_id"
                        :formatter="formatCompany"
                        label="单位/个人">
                    </el-table-column>
                    <el-table-column
                        prop="work_rate"
                        width="100"
                        label="工程进度">
                        <template slot-scope="scope">
                            <el-progress :text-inside="true" :stroke-width="18" :percentage="scope.row.work_rate"
                                         status="success"></el-progress>
                        </template>
                    </el-table-column>
                    <el-table-column
                        prop="house_pay_rate"
                        width="100"
                        label="业主付款">
                        <template slot-scope="scope">
                            <el-progress :text-inside="true" :stroke-width="18" :percentage="scope.row.house_pay_rate"></el-progress>
                        </template>
                    </el-table-column>

                    <el-table-column
                        prop="company_pay_rate"
                        width="100"
                        label="公司付款">
                        <template slot-scope="scope">
                            <el-progress :text-inside="true" :stroke-width="18" :percentage="scope.row.company_pay_rate"></el-progress>
                        </template>
                    </el-table-column>

                    <el-table-column
                        prop="stat"
                        label="盈亏统计">
                    </el-table-column>

                    <el-table-column
                        width="100"
                        label="完结日期">
                        <template slot-scope="scope">
                            <template v-if="scope.row.end_date">
                                <el-tooltip class="item" effect="dark" :content="'完工日期：'+scope.row.end_date" placement="top">
                                    <el-tag type="success">已完工</el-tag>
                                </el-tooltip>
                            </template>
                            <template v-else>
                                <el-tag type="danger">未完工</el-tag>
                            </template>
                        </template>
                    </el-table-column>

                    <el-table-column
                        prop="handle"
                        width="200"
                        label="操作">
                        <template slot-scope="scope">
                            <el-button type="text" size="small">修改</el-button>
                            <el-button type="text" size="small" style="margin-right: 10px">删除</el-button>
                            <el-dropdown size="mini" split-button type="primary">
                                业务
                                <el-dropdown-menu slot="dropdown">
                                    <el-dropdown-item>公司发货单</el-dropdown-item>
                                    <el-dropdown-item>收支名细</el-dropdown-item>
                                    <el-dropdown-item>用工开销</el-dropdown-item>
                                    <el-dropdown-item>业主付款至公司名细</el-dropdown-item>
                                    <el-dropdown-item>单位工程款支付名细</el-dropdown-item>
                                </el-dropdown-menu>
                            </el-dropdown>

                        </template>
                    </el-table-column>
                </el-table>

                <el-pagination
                    background
                    @current-change="handleCurrentChange"
                    :current-page="pagination.page"
                    :page-size="pagination.size"
                    layout="total, prev, pager, next"
                    :total="total">
                </el-pagination>
            </div>
        </div>


    </div>
</template>

<script>
    export default {
        data() {
            return {
                filter: {},
                input: '',
                options: [],
                value: '',
                currentPage: 1,

                total : 0,
                pagination: {
                    page : 1,
                    size : 10,
                    keywords : '',
                    area_id: '',
                    company_id: '',
                },

                areaList :[],
                companyList :[],

                list : []

            }
        },
        created(){
            this.init();
        },
        methods: {
            async init(){
                let list    = await this.$api.houseList(this.pagination);
                this.list   = list.data.data.rows;
                this.total  = list.data.data.count;
                (!this.areaList.length || !this.companyList.length) && this.initAreaAndCompany();
            },

            async initAreaAndCompany(){
                let [area,company] = await Promise.all([this.$api.areaList(),this.$api.companyList()]);
                this.areaList = area.data;
                this.companyList = company.data.data;
            },
            formatArea({area_id}){
                let res =  this.areaList.find(it=>it.id === area_id);
                if(res){
                    return res.name;
                };
                return '--';
            },

            formatCompany({company_id}){
                let res =  this.companyList.find(it=>it.id === company_id);
                if(res){
                    return res.company_name;
                };
                return '--';
            },

            handleCurrentChange() {

            }
        }
    }
</script>
