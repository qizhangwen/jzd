<template>
  <div>
    <div class="case-bg">
      <h3 class="case-title">关于我们</h3>
    </div>
    <div class="case-tab-box">
      <div class="case-tab-list">
        <span class="hov">理事会</span>
      </div>
    </div>
    <div class="unit-cont">
      <h3>{{item.name}}</h3>
      <p class="unit-time">
        <span>{{'发布时间：'+item.showDate}}</span>
        <!--<span>访问次数：4709</span>-->
      </p>
      <p class="unit-line">
        <span class="unit-label">团体委员会职务：</span>
        <span>{{item.position}}</span>
      </p>
      <p class="unit-line">
        <span class="unit-label">公司简介：</span>
        <can-read-new :content="item.introduce"></can-read-new>
      </p>
      <p class="unit-line">
        <span class="unit-label">地址：</span>
        <span class="mar-rt-30">{{item.place}}</span>
        <span class="unit-label">邮编：</span>
        <span>{{item.postnum}}</span>
      </p>
      <p class="unit-line">
        <span class="unit-label">电话：</span>
        <span class="mar-rt-30">{{item.phonenum}}</span>
        <span class="unit-label">传真：</span>
        <span>{{item.printpostnum}}</span>
      </p>
      <p class="unit-line">
        <span class="unit-label">网址：</span>
        <span><a :href="item.interneturl" target="_blank">{{item.interneturl}}</a></span>
      </p>
      <!--<p class="unit-source">来源：未知</p>-->
    </div>
  </div>
</template>

<script>
  import councilApi from '../../js/Council_api'
  import CanReadNew from "../public/canReadNew";
    export default {
        name: "UnitDetails",
      components: {CanReadNew},
      data(){
          return {
            item:{}
          }
        },
      mounted(){
          let self = this;
          councilApi.search_council(self, {guid: self.$route.query.guid}).then(function (res) {
            if(res.data.succ){
              self.item = res.data.data;
              self.item.showDate = self.DateToStr(new Date(self.item.createtime))
            }
          })
      },
      methods:{
        DateToStr (date) {
          let str = date.getFullYear();
          str = str + '/' + (date.getMonth() + 1);
          str = str + '/' + date.getDate();
          return str
        },
      }
    }
</script>

<style scoped>
  h3{font-size: 24px;text-align: center;font-weight: bold;}
  .unit-cont{width:1200px;margin:50px auto;}
  .unit-time{display:flex;height:50px;margin-top:20px;line-height: 50px;border-bottom:1px solid #dedede;}
  .unit-time span{margin-right:30px;}
  .unit-line{margin-top:20px;line-height:2;}
  .unit-line .unit-label{font-weight: bold;}
  .mar-rt-30{margin-right:30px;}
  .unit-line a{color:#003481}
  .unit-source{margin-top:40px;text-align: right;}
</style>
