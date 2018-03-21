<template>
    <div class="fp-index">
        <!--<subsider-navbar></subsider-navbar>-->

        <div class="card fp-page-title">
            <div class="card-block">
                <el-breadcrumb separator="/">
                    <el-breadcrumb-item :to="{ path: '/' }">控制台</el-breadcrumb-item>
                    <el-breadcrumb-item>地区维护</el-breadcrumb-item>
                </el-breadcrumb>
            </div>
        </div>


        <div class="card">
            <div class="card-block">
                <div >
                    <el-button type="primary" plain @click="openAdd('add')">新增地区</el-button></div>
                <el-table
                    :data="areaList"
                    style="width: 100%">
                    <el-table-column
                        prop="id"
                        label="编号"
                        width="50">
                    </el-table-column>
                    <el-table-column
                        prop="name"
                        label="城市名"
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

            </div>
        </div>

        <add-city :dialog-visible.sync="dialogVisible" @update-list="updateList" @update-item="updateItem" :item="currentItem"></add-city>
    </div>
</template>

<script>
    import Add from './add';
    export default {
        components: {
            "add-city": Add
        },
        data() {
            return {
                filter: {},
                input : '',
                options : [],
                value : '',

                areaList : [],
                dialogVisible : false,

                currentItem : false
            }
        },
        created() {
            this.init();
        },
        methods : {
            async init(){
                let list = await this.$api.areaList();
                this.areaList = list.data;
            },
            openAdd(type){
                this.dialogVisible = true;
                type === 'add' && (this.currentItem = false);
            },
            updateList(options){
                this.areaList.unshift(options);
            },

            updateItem(options){
                this.currentItem.name  = options.name;
            },
            //删除项目
            async deleteItem(item){
                await this.$confirm('确认删除, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                });
                await this.$api.areaDelete(item.row.id);
                this.areaList.splice(item.$index, 1);
            },

            //更新项目
            async openUpdate(item){
                this.currentItem = item.row;
                this.openAdd();
            }


        }
    }
</script>
