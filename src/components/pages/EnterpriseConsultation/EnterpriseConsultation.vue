<template>
  <div>
    <div class="conference-img">
      <img src="../../../../static/images/nav_qyzx.jpg" alt="企业咨询">
      <p class="conference-img-title">企业咨询</p>
    </div>
    <div class="main pad0">
      <div class="wrapper">
        <div class="highlights-box">
          <h3>资讯项目</h3>
          <ul class="highlights-list information-item">
            <li>
              <div class="list-con">
                <img :src="image1" :alt="title1">
                <div class="txt">
                  <p class="title">{{title1}}</p>
                </div>
              </div>
            </li>
            <li>
              <div class="list-con">
                <img :src="image2" :alt="title2">
                <div class="txt">
                  <p class="title">{{title2}}</p>
                </div>
              </div>
            </li>
            <li>
              <div class="list-con">
                <img :src="image3" :alt="title3">
                <div class="txt">
                  <p class="title">{{title3}}</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- 流程 -->
    <div class="infor-flow">
      <div class="main pad0">
        <div class="wrapper">
          <h3>资讯流程</h3>
          <div class="flow-box">
            <div class="flow-arrow">
              <p class="flow-num">01</p>
              <p class="flow-title">资讯流程1</p>
              <p class="flow-details">流程简介流程简介流程简介流程简介流程简介流程简介流程简介流程简介流程简介</p>
            </div>
            <div class="flow-arrow">
              <p class="flow-num">02</p>
              <p class="flow-title">资讯流程2</p>
              <p class="flow-details">流程简介流程简介流程简介流程简介流程简介流程简介流程简介流程简介流程简介</p>
            </div>
            <div class="flow-arrow">
              <p class="flow-num">03</p>
              <p class="flow-title">资讯流程3</p>
              <p class="flow-details">流程简介流程简介流程简介流程简介流程简介流程简介流程简介流程简介流程简介</p>
            </div>
            <div>
              <p class="flow-num">04</p>
              <p class="flow-title">资讯流程4</p>
              <p class="flow-details">流程简介流程简介流程简介流程简介流程简介流程简介流程简介流程简介流程简介</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 原则 -->
    <div class="infor-tenet">
      <div class="main pad0">
        <div class="wrapper">
          <p class="tenet-title">咨询项目交付的原则</p>
          <div class="tenet-cont">
            <div>
              <p class="circle-box"><i class="circle-icon-01"></i></p>
              <p class="circle-title">共同设计</p>
              <p class="circle-intor">介绍介绍介绍介绍介绍介绍介绍介绍介绍</p>
            </div>
            <div>
              <p class="circle-box"><i class="circle-icon-02"></i></p>
              <p class="circle-title">迭代交付</p>
              <p class="circle-intor">介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍</p>
            </div>
            <div>
              <p class="circle-box"><i class="circle-icon-03"></i></p>
              <p class="circle-title">试点辅导</p>
              <p class="circle-intor">介绍介绍介绍介绍介绍介绍介绍介绍介绍</p>
            </div>
            <div>
              <p class="circle-box"><i class="circle-icon-04"></i></p>
              <p class="circle-title">持续关注</p>
              <p class="circle-intor">介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 经典案例 -->
    <div class="classic-case">
      <div class="main pad0">
        <div class="wrapper">
          <h3>精彩回顾</h3>
          <div class="ry-content">
            <p class="align-rt"><router-link class="more-review" to="/newsInfor/2">更多回顾</router-link></p>
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
  </div>
</template>

<script>
  import Swiper from 'swiper';
  import 'swiper/dist/css/swiper.min.css';
  import dictApi from '../../js/dict_api';
  import newsApi from '../../js/news_api';
  export default {
    data() {
      return {
        title1:'',
        image1:'',
        title2:'',
        image2:'',
        title3:'',
        image3:'',

        altitle1:'',
        alimage1:'',
        altitle2:'',
        alimage2:'',
        altitle3:'',
        alimage3:'',
        alinner1:'',
        alinner2:'',
        alinner3:'',
        backData:[],
      }
    },
    methods: {

    },
    mounted() {
      let self = this;
      const mySwiper = new Swiper ('.swiper-container', {
        autoplay: {
          delay: 3000,
          stopOnLastSlide: false,
          disableOnInteraction: true,
        },
        // loop: true, // 循环模式选项

        // 如果需要分页器
        pagination: {
        el: '.swiper-pagination',
        },
      });
      newsApi.search_news_list(self, {page: 1,size: 3, isanli: 1}).then(function (res) {
        if (res.data.succ) {
          self.backData = res.data.data.list;
        }
      });
      dictApi.search_dict(self,{guid: global.qyzxTitle1}).then(function (e) {
        if(e.data.succ){
          self.title1 = e.data.data.value;
        }
      });
      dictApi.search_dict(self,{guid: global.qyzxTitle2}).then(function (e) {
        if(e.data.succ){
          self.title2 = e.data.data.value;
        }
      });
      dictApi.search_dict(self,{guid: global.qyzxTitle3}).then(function (e) {
        if(e.data.succ){
          self.title3 = e.data.data.value;
        }
      });
      dictApi.search_dict(self,{guid: global.qyzxImage1}).then(function (e) {
        if(e.data.succ){
          self.image1 = e.data.data.value;
        }
      });
      dictApi.search_dict(self,{guid: global.qyzxImage2}).then(function (e) {
        if(e.data.succ){
          self.image2 = e.data.data.value;
        }
      });
      dictApi.search_dict(self,{guid: global.qyzxImage3}).then(function (e) {
        if(e.data.succ){
          self.image3 = e.data.data.value;
        }
      });

      // //案例
      // dictApi.search_dict(self,{guid: global.qyzxAlTitle1}).then(function (e) {
      //   if(e.data.succ){
      //     self.altitle1 = e.data.data.value;
      //   }
      // });
      // dictApi.search_dict(self,{guid: global.qyzxAlTitle2}).then(function (e) {
      //   if(e.data.succ){
      //     self.altitle2 = e.data.data.value;
      //   }
      // });
      // dictApi.search_dict(self,{guid: global.qyzxAlTitle3}).then(function (e) {
      //   if(e.data.succ){
      //     self.altitle3 = e.data.data.value;
      //   }
      // });
      // dictApi.search_dict(self,{guid: global.qyzxAlImage1}).then(function (e) {
      //   if(e.data.succ){
      //     self.alimage1 = e.data.data.value;
      //   }
      // });
      // dictApi.search_dict(self,{guid: global.qyzxAlImage2}).then(function (e) {
      //   if(e.data.succ){
      //     self.alimage2 = e.data.data.value;
      //   }
      // });
      // dictApi.search_dict(self,{guid: global.qyzxAlImage3}).then(function (e) {
      //   if(e.data.succ){
      //     self.alimage3 = e.data.data.value;
      //   }
      // });
      // dictApi.search_dict(self,{guid: global.qyzxAlInner1}).then(function (e) {
      //   if(e.data.succ){
      //     self.alinner1 = e.data.data.value;
      //   }
      // });
      // dictApi.search_dict(self,{guid: global.qyzxAlInner2}).then(function (e) {
      //   if(e.data.succ){
      //     self.alinner2 = e.data.data.value;
      //   }
      // });
      // dictApi.search_dict(self,{guid: global.qyzxAlInner3}).then(function (e) {
      //   if(e.data.succ){
      //     self.alinner3 = e.data.data.value;
      //   }
      // });
    }
  }
</script>

<style scoped>
  .highlights-list.information-item li .list-con img{height:160px;}
  .highlights-list li .list-con .txt{height: 80px;text-align: center;}
</style>
