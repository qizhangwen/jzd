<template>
  <div class="join-us">
    <div class="m-joing1">
      <div class="txt">
        <h3>真诚期待您的加入！</h3>
        <p>为了更好的提供咨询服务，胶之道诚意征求以下人才，如果你想一展身手，请速与我们取得联系。<br>
          有意者请发简历到胶之道人力资源部：<a href="#">office@jzdconsult.com</a>。我公司会尽快给予答复，择优录取。</p>
      </div>
      <div class="pic"><img src="../../../../static/images/g-pic8.png" alt=""></div>
    </div>
    <div class="table-list">
      <el-table

        :data="tableData"
        style="width: 100%"
        ref="mytable"
        @row-click="showthisRow">
        <el-table-column type="expand">
          <template slot-scope="props">
            <el-form label-position="left" inline class="demo-table-expand">
              <el-form-item label="">
                <can-read ref="read" :content="props.row.content"></can-read>
              </el-form-item>
            </el-form>
          </template>
        </el-table-column>
        <el-table-column
          label="职位"
          prop="work">
        </el-table-column>
        <el-table-column
          label="工作地点"
          prop="workplace">
        </el-table-column>
        <el-table-column
          label="人数"
          prop="peoplenum">
        </el-table-column>
        <el-table-column
          label="发布时间"
          prop="showDate">
        </el-table-column>
      </el-table>
    </div>
    <div class="align-cen">
      <el-pagination
        background
        layout="prev, pager, next"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-size="20"
        :total="totalCount">
      </el-pagination>
    </div>
  </div>
</template>

<script>
  import CanRead from "../public/canReadNew";
  import joinusApi from '../../js/joinus_api'
  export default {
    name: "AboutUsListF",
    components: {CanRead},
    data() {
      return {
        tableData: [],
        currentPage: 1,
        totalCount: 0,
      }
    },
    methods: {
      showthisRow(row, c, e) {
        this.$refs.mytable.toggleRowExpansion(row);
      },
      loadData(){
        let self = this;
        joinusApi.search_join_us_list(self, {page: self.currentPage, size: 20}).then(function (res) {
          if(res.data.succ){
            res.data.data.list.forEach(function (e) {
              let mycreatetime = new Date(e.createtime);
              e.showDate = self.DateToStr(mycreatetime);
            });
            self.tableData = res.data.data.list;
            self.totalCount = res.data.data.totalRow;
          }
        })
      },
      DateToStr(date) {
        let str = date.getFullYear();
        str = str + '-' + (date.getMonth() + 1);
        str = str + '-' + date.getDate();
        return str
      },
      handleCurrentChange(){
        this.loadData();
      }
    },
    mounted(){
      this.loadData();
    }
  }
</script>

<style scoped>
  .m-joing1 {
    padding: 49px 50px 47px;
    margin-top: 59px;
    border: 1px solid #e5e5e5;
    overflow: hidden
  }

  .m-joing1 .txt {
    float: left;
    width: 900px;
    font-size: 16px;
    color: #666;
    line-height: 30px;
    padding-top: 11px
  }

  .m-joing1 .pic {
    float: right;
    width: 142px;
    height: 142px;
    border-radius: 50%;
    overflow: hidden
  }

  .m-joing1 .pic img {
    display: block;
    width: 100%;
    height: 100%
  }

  .m-joing1 .txt h3 {
    font-size: 26px;
    color: #333;
    line-height: 36px;
    margin-bottom: 20px;
    font-weight: 400
  }

  .m-joing1 .txt a {
    color: #cf0b0b;
    font-weight: 700;
    -webkit-transition: .5s;
    -o-transition: .5s;
    transition: .5s
  }

  .m-joing1 .txt a:hover {
    opacity: .8;
    filter: alpha(opacity=80)
  }

  .m-sog1 {
    margin-top: 12px;
    padding: 22px 22px 23px;
    border: 1px solid #e5e5e5;
    text-align: center;
    font-size: 0
  }

  .m-sog1 .m-formg2, .m-sog1 .tit {
    display: inline-block;
    vertical-align: middle
  }

  .m-sog1 .tit {
    font-size: 16px;
    color: #666;
    line-height: 42px;
    margin-right: 16px
  }

  .m-formg2 {
    height: 42px;
    line-height: 40px;
    padding-right: 141px;
    border: 1px solid #e5e5e5;
    position: relative
  }

  .m-formg2 .inp {
    display: block;
    outline: 0;
    border: none;
    width: 372px;
    height: 40px;
    line-height: 40px;
    padding: 0 15px;
    font-size: 14px;
    color: #888
  }

  .m-formg2 .btn {
    outline: 0;
    border: none;
    position: absolute;
    right: 0;
    top: -1px;
    bottom: -1px;
    width: 141px;
    background-color: #003481;
    text-align: center;
    font-size: 16px;
    color: #fff;
    -webkit-transition: .5s;
    -o-transition: .5s;
    transition: .5s;
    cursor: pointer;
  }

  .m-formg2 .btn:hover {
    opacity: .8;
    filter: alpha(opacity=80)
  }

  .table-list {
    margin: 30px 0;
    border: 1px solid #e1e1e1;
  }

  .demo-table-expand {
    font-size: 0;
  }

  .demo-table-expand label {
    width: 90px;
    color: #99a9bf;
  }
</style>
<style>
  .demo-table-expand .el-form-item {
    width: 50%;
    margin: 0;
  }
</style>
