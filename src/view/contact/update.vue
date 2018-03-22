<template>
    <el-dialog
        title="提示"
        :visible="visibleUpdate"
        @close="close"
        width="30%"
        >
        <el-form ref="form" :model="form" :rules="rules" label-width="80px">
            <el-form-item label="姓名" prop="name">
                <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="电话" prop="phone">
                <el-input v-model="form.phone"></el-input>
            </el-form-item>
            <el-form-item label="工作类型">
                <el-input v-model="form.work_type"></el-input>
            </el-form-item>
            <el-form-item label="备注">
                <el-input v-model="form.note"></el-input>
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
            visibleUpdate : {
                type : Boolean,
                default : false
            },
            currentUpdate : {
                type : [Object,Boolean],
                default :false
            }
        },
        data (){
            return {
                form : {
                    name : '',
                    phone : '',
                    work_type : '',
                    note : '',
                },
                rules: {
                    name: [
                        { required: true, message: '请填写联系人姓名', trigger: 'blur' },
                    ],
                    phone: [
                        { required: true, message: '请填写电话', trigger: 'change' }
                    ],
                }
            }
        },

        watch : {
            visible(val){
                val && this.$nextTick(()=>{
                    this.$refs.form.resetFields();
                })
            },
            currentUpdate(val){
                if(typeof val ==='object'){
                    this.form = Object.assign({},val);
                }
            }
        },
        methods : {
            close (){
                this.$emit('update:visibleUpdate' , false);
            },
            submit(){
                this.$refs.form.validate(async (valid) => {
                    if (valid) {
                        let res = await this.$api.contactUpdate(this.form);
                        if(res.data.status){
                            this.$emit('init');
                            this.close();
                            this.$message.success('修改成功');
                        }
                    }
                });
            }
        }
    }
</script>
