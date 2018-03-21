<template>
    <div class="fp-index">
        <!--<subsider-navbar></subsider-navbar>-->

        <div class="card fp-page-title">
            <div class="card-block">
                <el-breadcrumb separator="/">
                    <el-breadcrumb-item :to="{ path: '/' }">控制台</el-breadcrumb-item>
                    <el-breadcrumb-item>工人开销</el-breadcrumb-item>
                </el-breadcrumb>

            </div>
        </div>


        <div class="card">
            <div class="card-block">
                <div > <el-button type="primary" plain>新增工人开销</el-button></div>
                <el-table
                    :data="tableData"
                    style="width: 100%">
                    <el-table-column
                        prop="id"
                        label="编号"
                        width="50">
                    </el-table-column>
                    <el-table-column
                        prop="pay_date"
                        label="付款时间"
                    >
                    </el-table-column>
                    <el-table-column
                        prop="house_name"
                        label="房屋名称"
                        >
                    </el-table-column>
                    <el-table-column
                        prop="worker_name"
                        label="工人员称"
                        >
                    </el-table-column>

                    <el-table-column
                        prop="item_name"
                        label="施工项目名"
                    >
                    </el-table-column>

                    <el-table-column
                        prop="item_money"
                        label="项目金额"
                    >
                    </el-table-column>

                    <el-table-column
                        prop="contact"
                        label="联系方式"
                    >
                    </el-table-column>

                    <el-table-column
                        prop="start_date"
                        label="开始时间"
                    >
                    </el-table-column>

                    <el-table-column
                        prop="end_date"
                        label="结束时间"
                    >
                    </el-table-column>

                    <el-table-column
                        prop="handle"
                        label="操作">
                        <template slot-scope="scope">
                            <el-button type="text" size="small">修改</el-button>
                            <el-button type="text" size="small">删除</el-button>
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
                input : '',
                options : [],
                value : '',
                currentPage : 1,


                tableData: [{
                    id: 1,
                    name: '成都',
                    stat: '--',
                }]
            }
        },
        methods : {
            handleSizeChange (){

            },
            handleCurrentChange(){

            }
        }
    }
</script>
