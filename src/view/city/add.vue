<template>
    <el-dialog
        title="提示"
        :visible="dialogVisible"
        @close="close"
        width="30%"
        >
        <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="地区名称">
                <el-input v-model="form.name"></el-input>
            </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
            <el-button @click="close">取 消</el-button>
            <el-button type="primary" @click="submit">确 定</el-button>
        </span>
    </el-dialog>
</template>

<script>

    export default {
        name: "add",
        props : {
            dialogVisible : {
                type : Boolean,
                default : false
            },
            item : {
                type : [Object,Boolean],
                default : false
            }
        },
        data (){
            return {
                form : {
                    name : ''
                }
            }
        },
        watch : {
           'item' (val) {
               if(typeof val === 'object'){
                   this.form = Object.assign({},val);
               }
               else{
                   this.form = {
                       name : ''
                   }
               }

           }
        },
        methods : {
            close (){
                this.$emit('update:dialogVisible' , false);
            },
            async submit(){
                let res ;
                if(this.form.id){
                    //修改
                    res = await this.$api.areaUpdate(this.form);
                    if(res.data.status){
                        this.$message.success('修改成功');
                        this.$emit('update-item',Object.assign({},this.form));
                        this.close();
                        return ;
                    }

                }else{
                    //添加
                    res = await this.$api.areaAdd(this.form);
                    if(!res.data.status){
                        this.$message.error(res.data.msg);
                        return ;
                    }else{
                        this.$message.success('添加成功');
                        this.$emit('update-list',res.data.data);
                        this.close();
                    }
                }

            }
        }
    }
</script>
