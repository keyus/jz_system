<template>
    <el-dialog
        title="提示"
        :visible="dialogVisible"
        @close="close"
        width="30%"
        >
        <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="原密码">
                <el-input v-model="form.password" type="password"></el-input>
            </el-form-item>
            <el-form-item label="新密码">
                <el-input v-model="form.newPassword" type="password"></el-input>
            </el-form-item>
            <el-form-item label="姓名">
                <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="电话">
                <el-input v-model="form.phone"></el-input>
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
                    name : '',
                    phone : '',
                    password : '',
                    newPassword :'',
                }
            }
        },
        watch : {
            dialogVisible(val){
                if(!val){
                    this.form.password = '';
                    this.form.newPassword = '';
                }
            },
            item (val) {
               if(typeof val === 'object'){
                   this.form.name = val.name;
                   this.form.phone = val.phone;
               }
           }
        },
        methods : {
            close (){
                this.$emit('update:dialogVisible' , false);
            },
            async submit(){
                let res = await this.$api.updateUser(this.form);
                //更新
                if(!res.data.status){
                    this.$message.error(res.data.msg);
                    return ;
                }else{
                    this.$message.success('修改成功');
                    this.$emit('update-item',res.data.data);
                    this.close();
                }

            }
        }
    }
</script>
