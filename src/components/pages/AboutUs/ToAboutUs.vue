<template>
  <div>
    <div class="case-bg">
      <h3 class="case-title">关于我们</h3>
    </div>
    <div class="case-tab-box">
      <div class="case-tab-list">
        <span :class="showActive == index ? 'hov' : ''" v-for="(item, index) in titleList" @click="tabShow(index)">{{ item }}</span>
      </div>
    </div>
    <div class="case-tab-cont" v-show="showActive == 0">
      <v-about-us-list tabIndex="0"></v-about-us-list>
    </div>
    <div class="case-tab-cont" v-show="showActive == 1">
      <v-about-us-list-t tabIndex="1"></v-about-us-list-t>
    </div>
    <div class="case-tab-cont" v-show="showActive == 2">
      <v-about-us-list-t-o tabIndex="2"></v-about-us-list-t-o>
    </div>
    <div class="case-tab-cont" v-show="showActive == 3">

    </div>
    <div class="case-tab-cont" v-show="showActive == 4">
      <v-content-list-th tabIndex="4"></v-content-list-th>
    </div>
    <div class="case-tab-cont" v-show="showActive == 5">
      <v-about-us-list-four tabIndex="5"></v-about-us-list-four>
    </div>
    <div class="case-tab-cont" v-if="showActive == 6">
      <v-about-us-list-five tabIndex="6"></v-about-us-list-five>
    </div>
  </div>
</template>

<script>
  import VAboutUsList from './AboutUsList'
  import VAboutUsListT from './AboutUsListT'
  import VAboutUsListTO from './AboutUsListTo'
  import VAboutUsListTh from './AboutUsListTh'
  import VAboutUsListFour from './AboutUsListFour'
  import VAboutUsListFive from './AboutUsListFive'
  import VContentListTh from '../public/ContentListTh.vue'

  export default {
    name: "AboutUs",
    components: {
      VAboutUsList, VAboutUsListT, VAboutUsListTh, VAboutUsListFour, VAboutUsListFive, VAboutUsListTO, VContentListTh
    },
    data() {
      return {
        activeName: 'first',
        showActive: 0,
        titleList: ['关于我们', '专家库', '理事会', '教学指导委员会', '合作客户', '加入我们', '联系我们']
      }
    },
    methods: {
      tabShow(index) {
        this.showActive = index;
      }
    },
    mounted () {
      let self = this;
      if (self.$route.params.page) {
        self.$router.push({path: '/aboutUs/'+self.$route.params.page})
      }
    }
  }
</script>

<style scoped>

</style>
