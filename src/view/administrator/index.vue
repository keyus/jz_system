<template>
    <div class="fp-index">
        <!--<subsider-navbar></subsider-navbar>-->

        <div class="card fp-page-title">
            <div class="card-block">
                <el-breadcrumb separator="/">
                    <el-breadcrumb-item :to="{ path: '/' }">控制台</el-breadcrumb-item>
                    <el-breadcrumb-item>管理员</el-breadcrumb-item>
                </el-breadcrumb>
            </div>
        </div>


        <div class="card">
            <div class="card-block">
                <el-table
                    :data="userList"
                    style="width: 100%">
                    <el-table-column
                        prop="id"
                        label="编号"
                        width="50">
                    </el-table-column>
                    <el-table-column
                        prop="user"
                        label="登录名"
                        >
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
                        prop="auth"
                        :formatter="userType"
                        label="类型"
                    >
                    </el-table-column>

                    <el-table-column
                        prop="handle"
                        label="操作">
                        <template slot-scope="scope">
                            <el-button type="text" size="small" @click="openUpdate(scope)">修改</el-button>
                        </template>
                    </el-table-column>
                </el-table>


            </div>
        </div>

        <edit-user :dialog-visible.sync="dialogVisible" :item="currentUpdate" @update-item="updateItem"></edit-user>
    </div>
</template>

<script>
    import edit from './edit';
    export default {
        components: {
            "edit-user": edit
        },
        data() {
            return {
                userList : [],
                dialogVisible : false,
                currentUpdate : false,
            }
        },
        created(){
            this.init();
        },
        methods : {
            async init(){
                let list = await this.$api.userList();
                this.userList = list.data;
            },
            userType(type){
                if(type ===1) return '超级管理员';
                else return '管理员';
            },
            openUpdate(item){
                this.dialogVisible = true;
                this.currentUpdate = item.row;
            },
            updateItem(options){

            }
        },
    }
</script>
