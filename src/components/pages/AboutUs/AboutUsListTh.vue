<template>
  <div>
    <ul class="honor-list">
      <li v-for="item in 9">
        <img src="../../../../static/images/base.jpg" alt="">
        <p class="tit">荣誉荣誉荣誉荣誉荣誉</p>
      </li>
    </ul>
    <div class="align-cen">
      <el-pagination
        background
        layout="prev, pager, next"
        :current-page="currentPage"
        :page-size="100"
        :total="150">
      </el-pagination>
    </div>
  </div>
</template>

<script>
  export default {
    name: "AboutUsListTh",
    data() {
      return {
        currentPage: 1,
      }
    }
  }
</script>

<style scoped>
  .honor-list{display:flex;justify-content: space-between;flex-wrap: wrap;}
  .honor-list li{width:30%;margin-bottom: 46px;}
  .honor-list li img{width:100%;height:280px;-webkit-transition:.5s;-o-transition:.5s;transition:.5s;}
  .honor-list .tit{padding-top:23px}
  .honor-list .tit {display:block;text-align:center;font-size:18px;color:#333;font-weight:400;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;-webkit-transition:.5s;-o-transition:.5s;transition:.5s}
  .honor-list li:hover img{-webkit-transform:scale(1.1,1.1);-ms-transform:scale(1.1,1.1);-o-transform:scale(1.1,1.1);transform:scale(1.1,1.1)}
  .honor-list li:hover .tit {color:#003481}
</style>
