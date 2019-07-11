<template>
  <div>
    <div class="conference-img">
      <img src="../../../../static/images/nav_zyjypx.jpg" alt="职业教育培训">
      <p class="conference-img-title">职业教育培训</p>
    </div>
    <div class="main pad0">
      <div class="wrapper">
        <div class="apply-box">
          <p class="apply-btn">
              <img :src="alimage1" alt="立即报名">
          </p>
        </div>
        <div class="meet-details-box">
          <can-read ref="read"></can-read>
        </div>
        <div class="highlights-box">
          <h3>精彩回顾</h3>
          <p class="align-rt"><router-link class="more-review" to="/">更多回顾</router-link></p>
          <v-content-list :news-list="meeting.news"></v-content-list>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import VContentList from '../public/ContentList.vue'
  import canRead from '../public/canRead'
  import searchApi from '../../js/search_api'
  import dictApi from '../../js/dict_api'
  export default {
    components: {
      canRead,
      VContentList
    },
    data(){
      return {
        meeting:{},
        alimage1:'',
      };
    },
    method:{

    },
    mounted(){
      let self = this;
      searchApi.search_meeting(self,{
        guid:self.$route.query.name
      }).then(function (item) {
        if(item.data.succ){
          self.meeting=item.data.data;
          self.$refs.read.content = item.data.data.meeting;
        }
      });
      dictApi.search_dict(self,{guid: global.qyzxAlImage1}).then(function (e) {
        if(e.data.succ){
          self.alimage1 = e.data.data.value;
        }
      });
    },
  }
</script>

<style scoped>

</style>
