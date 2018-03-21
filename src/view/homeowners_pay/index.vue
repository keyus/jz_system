<template>
    <div class="fp-index">
        <!--<subsider-navbar></subsider-navbar>-->

        <div class="card fp-page-title">
            <div class="card-block">
                <el-breadcrumb separator="/">
                    <el-breadcrumb-item :to="{ path: '/' }">控制台</el-breadcrumb-item>
                    <el-breadcrumb-item>业主付款至公司名细</el-breadcrumb-item>
                </el-breadcrumb>

                <div class="fp-filter">

                    <div class="fp-filter-text">过滤条件：</div>
                    <div class="fp-filter-item">
                        <el-input v-model="input" placeholder="业主姓名"></el-input>
                    </div>
                    <div class="fp-filter-item">
                        <el-select v-model="value" placeholder="房屋列表">
                            <el-option
                                v-for="item in options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                            </el-option>
                        </el-select>
                    </div>
                    <div class="fp-filter-item">
                        <el-select v-model="value" placeholder="收款方">
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
                <div><el-button type="primary" plain>新增业主付款记录</el-button></div>
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
                        label="业主姓名"
                        >
                    </el-table-column>

                    <el-table-column
                        prop="house_address"
                        label="房屋地址"
                    >
                    </el-table-column>

                    <el-table-column
                        prop="pay_nums"
                        label="付款金额"
                    >
                    </el-table-column>

                    <el-table-column
                        prop="pay_date"
                        label="付款日期"
                    >
                    </el-table-column>

                    <el-table-column
                        prop="pay_nums"
                        label="收款方"
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
