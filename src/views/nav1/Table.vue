<template>
  <section>
    <!--查询条件-->
    <el-col :span="24" class="toolbar" style="padding-bottom:0px;">
      <el-form :inline="true" :model="filters">
        <el-form-item label="姓名">
          <el-input v-model="filters.name" placeholder="姓名"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="getUsers">查询</el-button>
        </el-form-item>
      </el-form>
    </el-col>

    <!--列表-->
    <el-table :data="users" highlight-current-row v-loading="listLoading" 
    @selection-change="selsChange" style="width: 100%"
    >
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column type="index" :index="indexMethod" width="60"></el-table-column>
      <el-table-column prop="name" label="姓名" width="120" sortable></el-table-column>
      	<el-table-column prop="sex" label="性别" width="100" :formatter="formatSex" sortable>
			</el-table-column>
			<el-table-column prop="age" label="年龄" width="100" sortable>
			</el-table-column>
			<el-table-column prop="birth" label="生日" width="120" sortable>
			</el-table-column>
			<el-table-column prop="addr" label="地址" min-width="180" sortable>
			</el-table-column>
      <el-table-column label="操作" width="150">
        <template  slot-scope="props">
          <el-button type="primary" size="small" @click="handleEdit(props.$index, props.row)">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>

    <!--工具条/分页-->
    <el-col :span="24" class="toolbar">
      <el-pagination layout="prev, pager, next" @current-change="handleCurrentChange"
      :page-size="pageSize" :total="total" style="float:right;"></el-pagination>
    </el-col>
    <!--编辑界面-->
    <el-dialog title="编辑" :visible.sync="editFormVisible" :close-on-click-modal="false">
      <el-form :model="editForm" label-width="80px" :rules="editFormRules" ref="editForm">
        <el-form-item label="姓名" prop="name">
          <el-input v-model="editForm.name" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="性别">
          <el-radio-group v-model="editForm.sex">
            <el-radio class="radio" :label="1">男</el-radio>
            <el-radio class="radio" :label="0">女</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="年龄">
          <el-input-number v-model="editForm.age" :min="0" :max="200"></el-input-number>
        </el-form-item>
        <el-form-item label="生日">
          <el-date-picker type="date" placeholder="选择日期" v-model="editForm.birth"></el-date-picker>
        </el-form-item>
        <el-form-item label="地址">
          <el-input type="textarea" v-model="editForm.addr"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="default" @click.native="editFormVisible = false">取消</el-button>
        <el-button type="primary" @click.native="editSubmit" :loading="editLoading">提交</el-button>
      </div>
    </el-dialog>


  </section>
</template>

<script>
  import util from '../../common/js/util'

  import {getUserListPage, editUser} from '../../api/api';
  export default{
    data(){
      return{
        filters:{
          name: ''
        },
        users:[],
        total:0,
        page:1,
        pageSize:20,
        listLoading: false,
        sels:[],

        editFormVisible:false,//编辑界面是否显示
        editLoading:false,
        editFormRules:{
          name:[
            {required: true, message:'请输入姓名', trigger:'blur'}
          ]
        },
        //编辑界面数据
        editForm:{
          id:0,
          name:'',
          sex:-1,
          age:0,
          birth:'',
          addr:''
        }


      }
    },
    methods:{
      formatSex(row, column){
        return row.sex==1?'男':row.sex == 0 ? '女':'未知';
      },
      handleCurrentChange(val){
        this.page = val;
        this.getUsers();
      },
      getUsers(){
        let para = {
          page:this.page,
          name:this.filters.name
        };
        this.listLoading = false;
        
        getUserListPage(para).then((res) => {
          this.total = res.data.total;
          this.users = res.data.users;
          this.listLoading = false;
        });
      },
      //显示编辑界面
      handleEdit(index, row){
        console.log("enter handleEdit");
        this.editFormVisible = true;
        this.editForm = Object.assign({}, row);
			},
			editSubmit(){
				this.$refs.editForm.validate((valid) =>{
					if(valid){
						this.$confirm('确认提交吗?', '提示',{}).then(()=>{
							this.editLoading = true;
							let para = Object.assign({}, this.editForm);
							para.birth = (!para.birth || para.birth == '') ? '': util.formatDate.format(new Date(para.birth),'yyyy-MM-dd');
							editUser(para).then((res) =>{
								this.editLoading = false;
								this.$message({
									message :'提交成功',
									type:'success'
								});
								this.$refs['editForm'].resetFields();
								this.editFormVisible = false;
								this.getUsers();
							});
						});
					}
				});
			},
      selsChange(sels){
        this.sels = sels;
      },
      indexMethod(index){
        return (this.page-1)*this.pageSize+index+1;
      }
    },
    mounted(){
      this.getUsers();
    }
  }
</script>
