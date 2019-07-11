<template>
  <div>
    <div class="conference-img">
      <img src="../../../../static/images/nav_zyjypx.jpg" alt="职业教育培训">
      <p class="conference-img-title">职业教育培训</p>
    </div>
    <div class="main pad0">
      <div class="wrapper">
        <div class="business-list conference-list">
          <router-link :to="{path:'/talentTrainingD',query: {name: item.guid}}" v-for="(item, index) in tableData1" :key="index" style="width: 579px;flex: none;">
            <img :src="item.img!=null?item.img:'../../../../static/images/base.jpg'" :alt="item.title">
            <p>{{item.title}}</p>
          </router-link>
        </div>
        <div class="product-introduction">
          <div class="pic">
            <img :src="imageUrl" alt="图片">
          </div>
          <div class="txt">
            <h3 class="tit">{{title}}</h3>
            <p class="desc">{{inner}}</p>
          </div>
        </div>
        <h3>精彩回顾</h3>
        <div class="ry-content">
          <p class="align-rt"><router-link class="more-review" to="/newsInfor/1">更多回顾</router-link></p>
          <div class="swiper-container-03">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <div class="client-list">
                  <router-link :to="{path:'/newsInforList',query: {guid: item.guid,num: item.type}}" v-for="(item, index) in backData" :key="index">
                    <div class="client-cont-box">
                      <img :src="item.imageurl" alt="">
                      <p>{{item.title}}</p>
                    </div>
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Swiper from 'swiper';
  import 'swiper/dist/css/swiper.min.css';
  import searchApi from '../../js/search_api'
  import newsApi from '../../js/news_api'
  import dictApi from '../../js/dict_api'
  export default {
    data() {
      return {
        tableData1: [],
        backData:[],
        imageUrl:'',
        title:'',
        inner:'',
      }
    },
    methods: {

    },
    mounted() {
      // const mySwiperT = new Swiper('.swiper-container-03', {
      //   autoplay: {
      //     delay: 5000,
      //     stopOnLastSlide: false,
      //     disableOnInteraction: false
      //   },
      //   loop: false // 循环模式选项
      // });
      let self = this;
      searchApi.search_meeting_list(self,{
        page: 1,
        size: 4,
        title: null,
        isback: 1
      }).then(function (res) {
        if(res.data.succ){
          self.tableData1=res.data.data.list;
        }
      });
      newsApi.search_news_list(self, {page: 1,size: 4, haslink: true, type: 1}).then(function (res) {
        if (res.data.succ) {
          self.backData = res.data.data.list;
        }
      });
      dictApi.search_dict(self,{guid: global.jyCpgsImg}).then(function (e) {
        if(e.data.succ){
          self.imageUrl = e.data.data.value;
        }
      });
      dictApi.search_dict(self,{guid: global.jyCpgsTitle}).then(function (e) {
        if(e.data.succ){
          self.title = e.data.data.value;
        }
      });
      dictApi.search_dict(self,{guid: global.jyCpgsInner}).then(function (e) {
        if(e.data.succ){
          self.inner = e.data.data.value;
        }
      });
    }
  }
</script>

<style scoped>
  .main .business-list.conference-list{justify-content: space-between;}
</style>
