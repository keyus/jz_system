<template>
    <div class="fp-index">
        <!--<subsider-navbar></subsider-navbar>-->

        <div class="card fp-page-title">
            <div class="card-block">
                <el-breadcrumb separator="/">
                    <el-breadcrumb-item :to="{ path: '/' }">控制台</el-breadcrumb-item>
                    <el-breadcrumb-item>联系人维护</el-breadcrumb-item>
                </el-breadcrumb>


            </div>
        </div>


        <div class="card">
            <div class="card-block">
                <div > <el-button type="primary" plain>新增联系人</el-button></div>
                <el-table
                    :data="tableData"
                    style="width: 100%">
                    <el-table-column
                        prop="id"
                        label="编号"
                        width="50">
                    </el-table-column>
                    <el-table-column
                        prop="name"


                        label="姓名"
                        >
                    </el-table-column>
                    <el-table-column
                        prop="type"
                        label="电话"
                    >
                    </el-table-column>
                    <el-table-column
                        prop="phone"
                        label="电话"
                    >
                    </el-table-column>
                    <el-table-column
                        prop="note"
                        label="备注"
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
                    name: '李三',
                    type: '木工',
                    phone: '15802815150',
                    note: '',
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
