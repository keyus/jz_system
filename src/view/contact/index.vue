<template>
    <div class="fp-index">
        <!--<subsider-navbar></subsider-navbar>-->

        <div class="card fp-page-title">
            <div class="card-block">
                <el-breadcrumb separator="/">
                    <el-breadcrumb-item :to="{ path: '/' }">控制台</el-breadcrumb-item>
                    <el-breadcrumb-item>联系人维护</el-breadcrumb-item>
                </el-breadcrumb>
                <div class="fp-filter">

                    <div class="fp-filter-text">过滤条件：</div>
                    <div class="fp-filter-item">
                        <el-input v-model="pagination.keywords" placeholder="姓名/电话"></el-input>
                    </div>

                    <div class="fp-filter-item">
                        <el-button type="primary" @click="init">搜索</el-button>
                    </div>
                </div>
            </div>
        </div>


        <div class="card">
            <div class="card-block">
                <div > <el-button type="primary" plain @click="openSave">新增联系人</el-button></div>
                <el-table
                    :data="list"
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
                        prop="phone"
                        label="电话"
                    >
                    </el-table-column>
                    <el-table-column
                        prop="work_type"
                        label="类型"
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
                            <el-button type="text" size="small" @click="openUpdate(scope)">修改</el-button>
                            <el-button type="text" size="small" @click="deleteItem(scope)">删除</el-button>
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

        <!--保存-->
        <contact-save :visible.sync="visible" @init="init"></contact-save>
        <contact-update :visible-update.sync="visibleUpdate" :current-update="currentUpdate" @init="init"></contact-update>

    </div>
</template>

<script>
    import save from './save'
    import update from './update'
    export default {
        components : {
            'contact-save': save,
            'contact-update': update,
        },
        data() {
            return {
                filter: {},
                input : '',
                options : [],
                value : '',
                currentPage : 1,

                list :[],
                visible : false,
                visibleUpdate : false,


                total : 0,
                pagination: {
                    page : 1,
                    size : 10,
                    keywords : ''
                }
                ,
                currentUpdate: false
            }
        },
        created () {
            this.init();
        },
        methods : {
            async init(){
                let list    = await this.$api.contactList(this.pagination);
                this.list   = list.data.data.rows;
                this.total  = list.data.data.count;
            },
            openSave(){
                this.visible = true;
            },
            openUpdate(it){
                this.visibleUpdate = true;
                this.currentUpdate = it.row;
            },
            handleCurrentChange(num){
                this.pagination.page = num;
                this.init();
            },
            async deleteItem(it){
                await this.$confirm('确认删除, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                });
                const id = it.row.id;
                await this.$api.contactDelete({id});
                this.list.splice(it.$index, 1);
            }
        }
    }
</script>
