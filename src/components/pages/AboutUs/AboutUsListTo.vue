<template>
  <div class="main">
    <div class="wrapper">
      <div class="product-introduction">
        <div class="pic">
          <img :src="imageUrl" alt="图片">
        </div>
        <div class="txt">
          <h3 class="tit">{{title}}</h3>
          <p class="desc">{{inner}}</p>
        </div>
      </div>
    </div>
    <h3>理事单位</h3>
    <ul class="unit-list">
      <li v-for="(item, index) in council" :key="index">
        <router-link tag="p" :to="{path: '/unitDetails',query: {guid: item.guid}}">{{item.name}}</router-link>
      </li>
    </ul>
    <div class="align-cen">
      <el-pagination
        background
        layout="prev, pager, next"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-size="10"
        :total="totalCount">
      </el-pagination>
    </div>
  </div>
</template>

<script>
  import dictApi from '../../js/dict_api'
  import councilApi from '../../js/Council_api'
    export default {
        name: "AboutUsListTo",
        data() {
          return {
            imageUrl:'',
            title:'',
            inner:'',
            currentPage: 1,
            totalCount: 0,
            council:[],
          }
        },
        mounted(){
          let self = this;
          dictApi.search_dict(self,{guid: global.zyjyImage1}).then(function (e) {
            if(e.data.succ){
              self.imageUrl = e.data.data.value;
            }
          });
          dictApi.search_dict(self,{guid: global.zyjyTitle1}).then(function (e) {
            if(e.data.succ){
              self.title = e.data.data.value;
            }
          });
          dictApi.search_dict(self,{guid: global.zyjyInner1}).then(function (e) {
            if(e.data.succ){
              self.inner = e.data.data.value;
            }
          });
          self.loadData();
        },
      methods:{
          loadData(){
            let self = this;
            councilApi.search_council_list(self, {page: self.currentPage,size: 10}).then(function (res) {
              if(res.data.succ){
                self.totalCount = res.data.data.totalRow;
                self.council = res.data.data.list;
              }
            })
          },
        handleCurrentChange(){
            this.loadData();
        }
      }
    }
</script>

<style scoped>
  .main{padding-top:0;}
  .main .wrapper{margin:0 auto;}
  .main .product-introduction{padding:0 0 30px;}
  .unit-list{width:100%;margin:20px 0 30px;}
  .unit-list li{display:flex;align-items:center;height:60px;padding-left:10px;line-height: 60px;font-size:16px;border-bottom:1px dashed #dedede;}
  .unit-list li:before{content:'';display:inline-block;width:28px;height:28px;background: url("../../../../static/images/icon_dw.png") no-repeat;background-size: cover;}
  .unit-list li p{margin-left:10px;cursor:pointer;}
</style>
