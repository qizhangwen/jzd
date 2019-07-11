<template>
  <ul class="highlights-list">
    <li v-for="item in 10">
      <div class="list-con">
        <img src="../../../../static/images/base.jpg" alt="图片">
        <div class="txt">
          <p class="title">标题标题标题标题标题标题标题标题标</p>
          <p class="date-details-box">
            <span>时间：2019年12月11日-13日</span>
            <router-link :to="tabIndex==='3' ? {path: '/listDetails', query: { num: tabIndex }} : {path: '/listDetailsT', query: { num: tabIndex }}">查看详情</router-link>
          </p>
        </div>
      </div>
    </li>
  </ul>
</template>

<script>
    export default {
        name: "ContentListT",
      props: ['tabIndex'],
      mounted() {
      },
    }
</script>

<style scoped>
  .highlights-list li .list-con .txt{height:140px;}
</style>
