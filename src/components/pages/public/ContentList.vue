<template>
  <ul class="highlights-list">
    <li v-for="(item, index) in newsList" :key="index" @click="jumpTo(item)">
      <div class="list-con">
        <img :src="item.imageurl" alt="图片">
        <div class="txt">
          <p class="title">{{item.title}}</p>
          <router-link :to="{path:'/newsInforList',query: {guid: item.guid,num: item.type}}">查看详情</router-link>
        </div>
      </div>
    </li>
  </ul>
</template>

<script>
  export default {
    name: "ContentList",
    props: ['tabIndex','newsList'],
    methods:{
      jumpTo(item){
        this.$router.push({path:'/newsInforList',query: {guid: item.guid,num: item.type}});
      }
    }
  }
</script>

<style scoped>

</style>
