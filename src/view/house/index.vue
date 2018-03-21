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
                        <el-input v-model="input" placeholder="业主姓名/房屋地址"></el-input>
                    </div>
                    <div class="fp-filter-item">
                        <el-select v-model="value" placeholder="所在地区">
                            <el-option
                                v-for="item in options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                            </el-option>
                        </el-select>
                    </div>
                    <div class="fp-filter-item">
                        <el-select v-model="value" placeholder="房屋面积">
                            <el-option
                                v-for="item in options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                            </el-option>
                        </el-select>
                    </div>
                    <div class="fp-filter-item">
                        <el-select v-model="value" placeholder="签约价">
                            <el-option
                                v-for="item in options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                            </el-option>
                        </el-select>
                    </div>
                    <div class="fp-filter-item">
                        <el-select v-model="value" placeholder="装修单位/个人">
                            <el-option
                                v-for="item in options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                            </el-option>
                        </el-select>
                    </div>
                    <div class="fp-filter-item">
                        <el-button type="primary">搜索</el-button>
                    </div>
                </div>
            </div>
        </div>


        <div class="card">
            <div class="card-block">

                <el-alert
                    title="房屋管理栏目提示"
                    type="info"
                    description="每一个房屋有只能关联一个公司单位或个人"
                    show-icon
                    style="margin-bottom: 15px"
                >
                </el-alert>

                <div>
                    <el-button type="primary" plain>添加房屋</el-button>
                </div>

                <el-table
                    :data="tableData"
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
                    </el-table-column>

                    <el-table-column
                        prop="name"
                        label="业主姓名"
                        width="100">
                    </el-table-column>
                    <el-table-column
                        prop="city"
                        width="100"
                        label="地区">
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
                        prop="company"
                        label="单位/个人">
                    </el-table-column>
                    <el-table-column
                        prop="progress"
                        width="100"
                        label="工程进度">
                        <template slot-scope="scope">
                            <el-progress :text-inside="true" :stroke-width="18" :percentage="70"
                                         status="success"></el-progress>
                        </template>
                    </el-table-column>
                    <el-table-column
                        prop="progress"
                        width="100"
                        label="业主付款">
                        <template slot-scope="scope">
                            <el-progress :text-inside="true" :stroke-width="18" :percentage="70"></el-progress>
                        </template>
                    </el-table-column>

                    <el-table-column
                        prop="stat"
                        label="盈亏统计">
                    </el-table-column>

                    <el-table-column
                        prop="endDate"
                        width="100"
                        label="完结日期">
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
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page="currentPage"
                    :page-sizes="[100, 200, 300, 400]"
                    :page-size="100"
                    layout="total, prev, pager, next"
                    :total="400">
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


                tableData: [{
                    id: 1,
                    name: '王学武',
                    startDate: '2018-12-20',
                    endDate: '2019-2-20',
                    city: '仁寿',
                    address: '仁寿北城时代',
                    size: '90',
                    price: '99800',
                    company: '美家装修公司',
                    progress: '1阶段',
                    company_shop_list: '',
                    stat: '--',
                }]
            }
        },
        methods: {
            handleSizeChange() {

            },
            handleCurrentChange() {

            }
        }
    }
</script>
