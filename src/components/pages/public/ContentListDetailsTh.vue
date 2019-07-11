<template>
  <div>
    <div class="case-bg">
      <h3 class="case-title">新闻资讯</h3>
    </div>
    <!--<div class="case-tab-box">-->
      <!--<div class="case-tab-list">-->
        <!--<span :class="showActive == index ? 'hov' : ''" v-for="(item, index) in titleList">{{ item }}</span>-->
      <!--</div>-->
    <!--</div>-->
    <div class="case-tab-cont details-cont">
      <div class="details-lt">
        <h1>{{thisNew.title}}</h1>
        <div class="sub-title">
          <span>{{'日期：'+thisNew.showDate}}</span>
        </div>
        <div class="con">
          <can-read ref="read"></can-read>
        </div>
        <div class="details-foot">
          <div>
            <p @click="reloadthis(thisNew.lastnews.guid)">
              <span>上一篇：</span>
              <router-link tag="span" to="">
                {{"《"+thisNew.lastnews.title+"》"}}</router-link>
            </p>
            <p @click="reloadthis(thisNew.nextnews.guid)">
              <span>下一篇：</span>
              <router-link tag="span" to="">
                {{"《"+thisNew.nextnews.title+"》"}}</router-link>
            </p>
          </div>
          <router-link class="return-list" to="/newsInfor">返回列表</router-link>
        </div>
      </div>
      <!--<div class="details-rt">-->
        <!--<div class="hot-list-box">-->
          <!--<h3>热门公开课现场</h3>-->
          <!--<ul class="hot-list">-->
            <!--<router-link tag="li" to="/" v-for="item in 7">-->
              <!--<img src="../../../../static/images/base.jpg" alt="">-->
              <!--<h4>《标题标题标题标题标题标题标题标题标题》</h4>-->
            <!--</router-link>-->
          <!--</ul>-->
        <!--</div>-->
      <!--</div>-->
    </div>
  </div>
</template>

<script>
  import canRead from '../public/canRead'
  import newsApi from '../../js/news_api'

  export default {
    name: 'ContentListDetailsTh',
    components: {canRead},
    data() {
      return {
        activeName: 'first',
        showActive: 1,
        titleList: ['公司新闻', '市场活动', '案例解读', '人物专栏'],
        thisNew:{
          lastnews:{},
          nextnews:{},
        },
      }
    },
    methods: {
      DateToStr(date) {
        let str = date.getFullYear();
        str = str + '-' + (date.getMonth() + 1);
        str = str + '-' + date.getDate();
        return str
      },
      reloadthis(value){
        if(value==null||value=='null'){

        }else {
          this.$router.push({path: '/tonewsInforList',query: {num: 0,guid: value}});
        }
      },
    },
    mounted() {
      this.showActive = this.$route.query.num;
      let self = this;
      newsApi.search_news(self, {guid: self.$route.query.guid}).then(function (e) {
        e.data.data.showDate = self.DateToStr(new Date(e.data.data.createtime));
        self.thisNew = e.data.data;
        self.$refs.read.content=e.data.data.inner;
      });
    }
  }
</script>

<style scoped>
  .details-cont {
    display: flex;
    justify-content: space-between;
    padding: 0;
  }

  .details-cont h1 {
    margin-bottom: 18px;
    line-height: 40px;
    text-align: center;
    font-size: 30px;
    font-weight: 400;
    color: #333;
  }

  .details-cont .sub-title {
    text-align: center;
    font-size: 14px;
    color: #888;
  }

  .details-cont .con {
    padding: 51px 0 58px;
    line-height: 32px;
    font-size: 15px;
    color: #868c96;
    overflow: hidden;
  }

  .details-cont .con .item {
    margin-bottom: 26px;
  }

  .details-cont .con h4 {
    padding: 12px 40px;
    margin-bottom: 22px;
    line-height: 26px;
    font-size: 16px;
    color: #4e668a;
    background-color: #eee;
  }

  .details-cont .con .text-cont p {
    text-indent: 2em;
    text-align: justify;
  }

  .details-cont .con .text-cont img {
    max-width: 800px;
  }

  .details-cont .return-list {
    display: block;
    width: 136px;
    height: 50px;
    margin: 0 auto;
    line-height: 48px;
    border: 1px solid #d2d2d2;
    text-align: center;
    transition: .5s
  }

  .details-cont .return-list:hover {
    border-color: #003481;
    background-color: #003481;
    color: #fff
  }

  .details-lt {
    width: 100%;
  }

  .details-rt {
    width: 300px;
  }

  .hot-list-box {
    padding: 19px 19px 26px;
    border: 1px solid #e5e5e5;
  }

  .hot-list-box h3 {
    padding-bottom: 16px;
    margin-bottom: 20px;
    line-height: 28px;
    font-size: 18px;
    color: #333;
    border-bottom: 1px solid #e5e5e5;
  }

  .hot-list li {
    position: relative;
    height: 160px;
    margin-bottom: 22px;
  }

  .hot-list li img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .hot-list li h4 {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 40px;
    line-height: 40px;
    font-size: 14px;
    color: #fff;
    font-weight: 400;
    background: rgba(0, 0, 0, .5);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .details-foot {
    display: flex;
    justify-content: space-between;
  }

  .details-foot p {
    line-height: 32px;
    font-size: 16px;
    color: #666;
  }

  .details-foot p span:last-child {
    cursor: pointer;
    transition: .5s;
  }

  .details-foot p span:last-child:hover {
    color: #003481;
  }

  .details-cont .details-foot .return-list {
    margin: 0;
  }
</style>
