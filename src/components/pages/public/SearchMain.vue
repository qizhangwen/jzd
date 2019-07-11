<template>
    <div>
        <div class="search-cont-box">
            <el-form :model="formInline" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                <el-row>
                    <el-col :span="6">
                        <el-form-item label="标题" prop="title">
                            <el-input v-model="formInline.title" placeholder="请输入会议标题"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="24">
                        <el-form-item>
                            <el-button size="mini" type="primary" @click="submitForm('ruleForm')">查询</el-button>
                            <el-button size="mini" type="info" @click="resetForm('ruleForm')">清空</el-button>
                            <el-button size="mini" type="primary" @click="createNew">新建</el-button>
                        </el-form-item>
                    </el-col>
                </el-row>
            </el-form>
        </div>
        <div style="margin-top: 10px;">
            <el-table border :data="tableData1">
                <el-table-column
                    type="selection">
                </el-table-column>
                <el-table-column
                    type="index"
                    :index="((currentPage-1)*pageSize+1)"
                    label="序号"
                    width="52px">
                </el-table-column>
                <el-table-column
                    prop="title"
                    label="标题">
                </el-table-column>
                <el-table-column
                    prop="showDate"
                    label="创建日期"
                    show-overflow-tooltip>
                </el-table-column>
                <el-table-column
                    prop="createuser"
                    label="作者"
                    show-overflow-tooltip>
                </el-table-column>
                <el-table-column
                    fixed="right"
                    prop="operate"
                    label="操作"
                    width="145px"
                    show-overflow-tooltip>
                    <template slot-scope="scope">
                        <el-button type="text"
                                   icon="el-icon-circle-check-outline"
                                   @click="changeTo(scope.row)">修改
                        </el-button>
                        <el-button type="text"
                                   icon="el-icon-circle-check-outline"
                                   @click="DEL(scope.row)">删除
                        </el-button>
                    </template>
                </el-table-column>
            </el-table>
            <div class="page" style="margin-top: 5px">
                <el-pagination
                    :current-page="currentPage"
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :page-sizes="[10, 15, 20, 50]"
                    :page-size="pageSize"
                    layout="total, sizes, prev, pager, next, jumper"
                    :total="totalCount">
                </el-pagination>
            </div>
        </div>
        <!-- 新增弹出框 -->
        <el-dialog title="问题来源 " :visible.sync="dialogFormVisible">
            <div class="pop_box">
                <el-form :model="newForm" ref="newForm1" >
                    <el-form-item label="标题" prop="title">
                        <el-input v-model="newForm.title"></el-input>
                    </el-form-item>
                  <el-form-item label="图片" prop="img">
                    <el-input v-model="newForm.img"></el-input>
                  </el-form-item>
                  <el-form-item label="描述" prop="discrib">
                    <el-input v-model="newForm.discrib"></el-input>
                  </el-form-item>
                    <el-form-item label="会议内容" prop="meeting">
                        <can-edit ref="edit"></can-edit>
                    </el-form-item>
                    <el-form-item label="作者" prop="createuser">
                        <el-input v-model="newForm.createuser"></el-input>
                    </el-form-item>
                </el-form>
            </div>
            <div slot="footer" class="dialog-footer">
                <el-button type="primary" @click="savetable('newForm1')">保存</el-button>
                <el-button type="success" @click="dialogFormVisible=false" >返回</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
import canEdit from './canEdit'
import searchApi from '../../js/search_api'

export default {
  data () {
    return {
      formInline: {
        title: null,
        isback: null
      },
      rules: {

      },
      deptId: '',
      deptName: '',
      ly: [],
      jd: [],
      sq: [],
      wg: [],
      bm: [],
      dicts: [],
      dialogFormVisible: true,
      tableData1: [],
      changeType: 0,
      input: null,
      newData: [],
      defaultProps: {
        children: 'children',
        label: 'label'
      },
      dialogForm: {
        orgGuid: null,
        name: null,
        account: null,
        pi: null,
        ps: null
      },
      questionform: [],
      deptform: [],
      newForm: {
        userguid: null,
        updateTypeGuid: null,
        questionFrom: null,
        isback : 0
      },
      activeName: 'first',
      totalCount: 0,
      tableData2: [],
      currentPage: 1,
      pageSize: 10,
      allPeople: [],
      doneUserid: '',
      doneUserName: '',
      operateReason: null
    }
  },
  methods: {
    init () {
      let self = this
      self.dialogFormVisible=false;
      self.submitForm(`ruleForm`)
    },
    circleWtly (item, chil) {
      let self = this
      let childrem = []
      if (item.children) {
        item.children.forEach(function (b) {
          let child = {
            id: b.code,
            label: b.name
          }
          childrem.push(child)
          self.circleWtly(b, child)
        })
        if (childrem.length !== 0) {
          chil['children'] = childrem
        }
        return chil
      }
    },
    getThisTime (row, column, cellValue, index) {
      if (cellValue) {
        let date = new Date(parseInt(cellValue))
        return this.DateToStr(date)
      } else {
        return ''
      }
    },
    DateToStr (date) {
      let str = date.getFullYear()
      str = str + '-' + (date.getMonth() + 1)
      str = str + '-' + date.getDate()
      str = str + ' ' + date.getHours()
      str = str + ':' + date.getMinutes()
      str = str + ':' + date.getSeconds()
      return str
    },
    changeJD (val) {
      if (val !== true) {
        let self = this
        self.formInline.sssq = []
        self.formInline.sswg = []
        self.sq = []
        self.wg = []
        self.dicts.forEach(function (d) {
          for (let i = 0; i < val.length; i++) {
            if (d.parentCode === val[i]) {
              self.sq.push(d)
            }
          }
        })
      }
    },
    changeSQ (val) {
      if (val !== true) {
        let self = this
        self.formInline.sswg = []
        self.wg = []
        self.dicts.forEach(function (e) {
          for (let i = 0; i < val.length; i++) {
            if (e.parentCode === val[i]) {
              self.wg.push(e)
            }
          }
        })
      }
    },
    createNew () {
      this.dialogFormVisible = true;
      this.newForm = {};
      this.$refs.edit.content = ''
    },
    submitForm (formName) {
      let self = this

      let data = {
        page: self.currentPage,
        size: self.pageSize,
        isback: self.formInline.isback,
        title: self.formInline.title
      }
      this.$refs[formName].validate((valid) => {
        if (valid) {
          self.searchData(data)
        } else {
          return false
        }
      })
    },
    searchData (data) {
      let self = this;
      searchApi.search_meeting_list(self,data).then(function (res) {
        if(res.data.succ){
          self.totalCount = res.data.data.totalRow;
          res.data.data.list.forEach(function (e) {
            e.showDate = self.DateToStr(new Date(e.createtime));
          });
          self.tableData1=res.data.data.list;
        }
      });
    },
    resetForm (formName) {
      this.$refs[formName].resetFields();
    },
    handleNodeClick (a, b, c) {
      this.dialogForm.orgGuid = a.id
      this.searchData()
    },
    loadData () {
      this.submitForm('ruleForm')
    },
    changeTree (a) {
      this.$refs.tree.filter(a)
    },
    changeTo (row) {
      let self = this;
      searchApi.search_meeting(self,{
        guid: row.guid,
      }).then(function (item) {
        if(item.data.succ){
          self.newForm = item.data.data;
          self.$refs.edit.content = item.data.data.meeting;
          self.dialogFormVisible = true
        }
      });
    },
    DEL (row) {
      this.$confirm('此操作将永久删除该数据, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        let self = this;
        searchApi.del_meeting(self,row).then(function (e) {
          if(e.data.succ){
            self.showSuccess("删除成功");
            self.submitForm(`ruleForm`);
          }else {
            self.showWarning("删除失败");
          }
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    },
    handleSelectionChange (val) {
      this.allPeople = val
    },
    filterNode (value, data, node) {
      if (value) {
        return (data.label.indexOf(value) != -1)
      } else {
        return true
      }
    },
    savetable (formname) {
      let self = this;
      self.newForm.isback = 0;
      self.newForm.meeting = self.$refs.edit.content;
      let data = Object.assign({}, self.newForm);
      console.log(self.newForm.guid);
      if(self.newForm.guid){
        searchApi.change_meeting(self,data).then(function (res) {
          if (res.data.succ) {
            if (res.data.data != '0') {
              self.showSuccess('修改成功')
            } else {
              self.showWarning('修改失败')
            }
          } else {
            self.showError('服务器报错')
          }
          self.dialogFormVisible=false;
          self.submitForm(`ruleForm`);
        })
      }else {
        searchApi.add_meeting(self, data).then(function (res) {
          if (res.data.succ) {
            if (res.data.data != '0') {
              self.showSuccess('添加成功')
            } else {
              self.showWarning('添加失败')
            }
          } else {
            self.showError('服务器报错')
          }
          self.dialogFormVisible=false;
          self.submitForm(`ruleForm`);
        })
      }
    },
    showWarning (message) {
      this.$message({
        showClose: true,
        message: message,
        type: 'warning'
      })
    },
    showSuccess (message) {
      this.$message({
        showClose: true,
        message: message,
        type: 'success'
      })
    },
    showError (message) {
      this.$message({
        showClose: true,
        message: message,
        type: 'error'
      })
    },
    handleSizeChange (size) {
      let self = this
      self.pageSize = size
      self.loadData()
    },
    handleCurrentChange (val) {
      let self = this
      self.currentPage = val
      self.loadData()
    }
  },
  mounted () {
    this.init();
  },
  components: {
    canEdit
  }
}
</script>

<style>
    .el-col-wtly .vue-treeselect__placeholder{line-height: 40px;}
    .search-cont-box .el-row{margin-bottom:3px;}
    .search-cont-box .el-form-item__label{font-size:13px;}
    .search-cont-box .el-form-item__label,.search-cont-box .el-form-item__content,.search-cont-box .el-input__inner{height:30px!important;line-height: 30px;}
    .search-cont-box .el-select{width: 100%;}
    .search-cont-box .el-form-item{margin-bottom:0!important;}
    .search-cont-box .el-date-editor.el-input, .search-cont-box .el-date-editor.el-input__inner,.search-cont-box .vue-treeselect__control{width: 100%;height:30px;line-height: 30px;}
    .search-cont-box .el-date-editor.el-input__inner{padding: 3px 0 3px 10px;}
    .search-cont-box .el-date-editor .el-range-input{width:46%;}
    .search-cont-box .el-form-item{margin-bottom:10px;}
    .search-cont-box .el-date-editor .el-range__icon,.search-cont-box .el-date-editor .el-range-separator{line-height:22px;}
    .search-cont-box .vue-treeselect,.search-cont-box .vue-treeselect__control{line-height: 22px;}
    .search-cont-box .el-icon-circle-close{position:absolute;top:0;right:20px;}
    .search-cont-box .el-input__icon{line-height:28px;}
    .search-cont-box .vue-treeselect__multi-value-item-container,.search-cont-box .vue-treeselect__limit-tip{padding:0;}
    .search-cont-box .vue-treeselect--has-value .vue-treeselect__multi-value{height:28px;margin-bottom: 0;}
    .search-cont-box .vue-treeselect__placeholder{line-height:30px;}
    .search-cont-box .vue-treeselect--open-below .vue-treeselect__menu{height:111px;}
</style>

<style scoped>

    .el-select{width: 100%;}
    .el-date-editor.el-input, .el-date-editor.el-input__inner{width: 100%;}
    @media (max-width:1366px) {
        .search-cont-box{overflow-x: auto;}
        .demo-ruleForm{width:150%;}
    }
</style>
