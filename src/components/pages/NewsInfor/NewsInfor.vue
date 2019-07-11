<template>
  <div>
    <div class="case-bg">
      <h3 class="case-title">新闻资讯</h3>
    </div>
    <div class="case-tab-box">
      <div class="case-tab-list">
        <span :class="showActive == index ? 'hov' : ''" v-for="(item, index) in titleList" @click="tabShow(index)">{{ item }}</span>
      </div>
    </div>
    <div class="case-tab-cont" v-show="showActive == 0">
      <v-new-infor-list tabIndex="0"></v-new-infor-list>
    </div>
    <div class="case-tab-cont" v-show="showActive == 1">
      <v-new-infor-list tabIndex="1"></v-new-infor-list>
    </div>
    <div class="case-tab-cont" v-show="showActive == 2">
      <v-new-infor-list tabIndex="2"></v-new-infor-list>
    </div>
  </div>
</template>

<script>
  import VNewInforList from '../public/NewInforList.vue'
  export default {
    name: "NewsInfor",
    components: {
      VNewInforList
    },
    data() {
      return {
        activeName: 'first',
        showActive: 0,
        titleList: ['行业会议', '职业教育培训', '企业咨询']
      }
    },
    methods: {
      tabShow(index) {
        this.showActive = index;
      }
    },
    mounted () {
      if (this.$route.params.page) {
        this.tabShow(this.$route.params.page)
      }
    }
  }
</script>

<style scoped>

</style>
