<template>
    <el-dialog
        title="提示"
        :visible="visibleUpdate"
        @close="close"
        width="30%"
        >
        <el-form ref="form" :model="form" :rules="rules" label-width="80px">
            <el-form-item label="公司名称" prop="company_name">
                <el-input v-model="form.company_name"></el-input>
            </el-form-item>
            <el-form-item label="公司联系人" >
                <el-input v-model="form.company_contact"></el-input>
            </el-form-item>
            <el-form-item label="公司地址">
                <el-input v-model="form.company_address"></el-input>
            </el-form-item>
            <el-form-item label="联系电话">
                <el-input v-model="form.company_phone"></el-input>
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
                    company_name : '',
                    company_address : '',
                    company_contact : '',
                    company_phone : '',
                    note : '',
                },
                rules: {
                    company_name: [
                        { required: true, message: '请填写公司名称', trigger: 'blur' },
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
                        let res = await this.$api.companyUpdate(this.form);
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
