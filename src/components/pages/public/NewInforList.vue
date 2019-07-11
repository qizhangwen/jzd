<template>
  <div>
    <div class="news-list-box">
      <div class="news-list" v-for="(item,index) in tableData1" :key="index">
        <div class="news-cont">
          <router-link tag="h2" :to="{path: '/newsInforList', query: {num: tabIndex,guid: item.guid }}">{{item.title}}</router-link>
          <span class="news-time"><i class="el-icon-time"></i>{{item.showDate}}</span>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{item.discrib}}</p>
          <div>
          <router-link class="read-more" tag="p" :to="{path: '/newsInforList', query: {num: tabIndex,guid: item.guid }}"><span>查看更多</span><i class="el-icon-view"></i></router-link>
          </div>
        </div>
        <router-link :to="{path: '/newsInforList', query: {num: tabIndex,guid: item.guid }}"><img :src="item.imageurl" alt=""></router-link>
      </div>
    </div>
    <div class="align-cen">
      <el-pagination
        background
        :current-page="currentPage"
        @current-change="loadData"
        :page-size="30"
        :total="totalCount">
      </el-pagination>
    </div>
  </div>
</template>

<script>
  import newsApi from '../../js/news_api'
  export default {
    name: "NewInforList",
    props: ['tabIndex'],
    data() {
      return {
        currentPage: 1,
        tableData1: [],
        totalCount:0,
      }
    },
    mounted(){
      this.currentPage=1;
      this.loadData();
    },
    methods:{
      DateToStr(date) {
        let str = date.getFullYear();
        str = str + '-' + (date.getMonth() + 1);
        str = str + '-' + date.getDate();
        return str
      },
      loadData(){
        let self = this;
        newsApi.search_news_list(self, {page: self.currentPage,size: 30, type: parseInt(self.tabIndex)}).then(function (res) {
          if (res.data.succ) {
            self.totalCount = res.data.data.totalRow;
            res.data.data.list.forEach(function (e) {
              let mycreatetime = new Date(e.createtime);
              e.showDate = self.DateToStr(mycreatetime);
            });
            self.tableData1 = res.data.data.list;
          }
        });
      },
    }
  }
</script>

<style scoped>
  .news-list-box{margin-bottom:30px;}
  .news-list{display:flex;justify-content:space-between;padding: 30px 0;border-bottom: 1px #e5e5e5 solid; position:relative;}
  .news-list img{display:block;width:450px;height:250px;}
  .news-cont{width:690px;}
  .news-list .news-cont h2 {height: 46px;padding-top: 6px;overflow: hidden;line-height: 40px;font-size: 20px;color: #333;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;cursor:pointer;}
  .news-list .news-cont .news-time {display: block;height: 31px;line-height: 31px;color: #666;}
  .news-list .news-cont .el-icon-time{margin-right:15px;}
  .news-list .news-cont .news-intro {padding-top: 13px;line-height: 24px;color: #666;overflow: hidden; text-overflow: ellipsis;display: -webkit-box;-webkit-line-clamp: 2;-webkit-box-orient: vertical;cursor:pointer;}
  .news-list .news-cont .read-more{position:absolute; display: inline-block;width: 150px;height: 40px;bottom: 30px;border: 1px #e5e5e5 solid;text-align:center;line-height: 40px;color: #666;cursor:pointer;transition:.5s;}
  .news-list .news-cont .read-more:hover{border-color:#003481;background-color:#003481;color:#fff}
  .news-list .news-cont .el-icon-view{margin-left:30px;}
</style>
