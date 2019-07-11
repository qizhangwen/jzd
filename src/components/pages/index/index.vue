<template>
  <div>
    <!-- 轮播图 -->
    <div class="swiper-container">
      <div class="swiper-wrapper index-swiper">
        <div class="swiper-slide">
          <router-link to="/">
            <img src="../../../../static/images/index_qyzx.jpg" alt="行业会议">
            <div class="cont-text">
              <p class="text-title">行业会议</p>
              <p class="text-sub-title">技术交流 · 应用创新 · 上下游互联</p>
            </div>
          </router-link>
        </div>
        <div class="swiper-slide">
          <router-link to="/">
            <img src="../../../../static/images/index_zyjypx.jpg" alt="职业教育培训">
            <div class="cont-text">
              <p class="text-title">职业教育培训</p>
              <p class="text-sub-title">为化工材料行业培养杰出技术与管理人才</p>
            </div>
          </router-link>
        </div>
        <div class="swiper-slide">
          <router-link to="/">
            <img src="../../../../static/images/index_hyhy.jpg" alt="企业咨询">
            <div class="cont-text">
              <p class="text-title">企业咨询</p>
              <p class="text-sub-title">为化工材料企业提供专业战略管理咨询</p>
            </div>
          </router-link>
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
    </div>
    <!-- 内容 -->
    <div class="main">
      <h3>业务领域</h3>
      <p class="introduce"></p>
      <div class="business-list index-buiness-list">
        <router-link to="/tradesCouncil">
            <div>
                <div class="circle-icon-box">
                    <img src="../../../../static/images/hyhyxbt.png" class="image">
                </div>
                <div class="business-list-cont">
                  <span class="list-cont-title">行业会议</span>
                  <div class="bottom clearfix">
                    技术交流，应用创新，上下游互联
                  </div>
                </div>
                <div class="list-cont-introduce">
                  <p>行业技术交流会</p>
                  <p>企业家论坛</p>
                  <p>胶粘剂行业专业群友群聚会</p>
                  <p>新产品新技术推介会</p>
                </div>
            </div>
        </router-link>
        <router-link to="/talentTraining">
            <div class="circle-icon-box">
              <img src="../../../../static/images/zyjypxxbt.png" class="image">
            </div>
            <div class="business-list-cont">
              <span class="list-cont-title">职业教育培训</span>
              <div class="bottom clearfix">
                为化工材料行业培养杰出技术与管理人才
              </div>
            </div>
            <div class="list-cont-introduce">
              <p>创新产品设计</p>
              <p>研发流程管理</p>
              <p>生产与营销管理</p>
              <p>应用实践</p>
            </div>
        </router-link>
        <router-link to="/EnterpriseConsultation">
            <div class="circle-icon-box">
              <img src="../../../../static/images/qyzxxbt.png" class="image">
            </div>
            <div class="business-list-cont">
              <span class="list-cont-title">企业咨询</span>
              <div class="bottom clearfix">
                为化工材料企业提供专业战略管理咨询
              </div>
            </div>
            <div class="list-cont-introduce">
              <p>发展战略咨询</p>
              <p>研发体系建设咨询</p>
              <p>营销管理咨询</p>
              <p>企业研发管理内训</p>
              <p>其它</p>
            </div>
        </router-link>
        <router-link to="/talentTraining" v-show="!showcard2" onmouseout="showcard2 = true">
          <transition name="el-fade-in-linear">
            <el-card :body-style="{ padding: '0px',height: '300px' }" v-show="!showcard2">
              <div style="height: 50px;width: 50px;">
                <img src="../../../../static/images/zyjypxxbt.png" class="image">
              </div>
              <div style="padding: 14px;">
                <span>职业教育培训</span>
                <div class="bottom clearfix">
                  创新产品设计
                  研发流程管理
                  生产与营销管理
                  应用实践
                </div>
              </div>
            </el-card>
          </transition>
        </router-link>
        <router-link to="/EnterpriseConsultation" v-show="!showcard3" onmouseout="showcard3 = true">
          <transition name="el-fade-in-linear">
            <el-card :body-style="{ padding: '0px',height: '300px' }" v-show="!showcard3">
              <div style="height: 50px;width: 50px;">
                <img src="../../../../static/images/qyzxxbt.png" class="image">
              </div>
              <div style="padding: 14px;">
                <span>企业咨询</span>
                <div class="bottom clearfix">
                  发展战略咨询
                  研发体系建设咨询
                  营销管理咨询
                  企业研发管理内训
                  其它
                </div>
              </div>
            </el-card>
          </transition>
        </router-link>
      </div>
      <div class="wrapper">
        <h3>新闻资讯</h3>
        <div class="con">
          <div class="con-left">
            <p class="new-date">
              <span>{{newsItem.date}}</span>
              <span>{{newsItem.yearMonth}}</span>
            </p>
            <router-link :to="{path:'/newsInforList',query: {guid: newsItem.guid,num: newsItem.type}}">
              <img :src="newsItem.imageurl" alt="新闻图片">
              <p class="new-title">{{newsItem.title}}</p>
            </router-link>
          </div>
          <div class="con-right">
            <p class="new-more">
              <router-link to="/newsInfor">查看全部新闻</router-link>
            </p>
            <div class="new-list">
              <router-link :to="{path:'/newsInforList',query: {guid: item.guid,num: item.type}}" v-for="(item, index) in tableData1" :key="index">
                <span>{{item.title}}</span>
                <span>{{item.showDate}}</span>
              </router-link>
            </div>
          </div>
        </div>
        <h3>合作客户</h3>
        <p class="introduce"></p>
        <div class="swiper-container-02">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <div class="client-list">
                <router-link to="/toaboutUs/4" @click.native="changeEmit('/classicCase')" v-for="(item, index) in cooperateList" :key="index">
                  <img :src="item.imageurl" :alt="item.name">
                </router-link>
              </div>
            </div>
            <!--<div class="swiper-slide">-->
              <!--<div class="client-list">-->
                <!--<router-link to="/classicCase/4">-->
                  <!--<img src="../../../../static/images/Logo/gdkm.png" alt="广东科茂林产化工股份有限公司">-->
                <!--</router-link>-->
                <!--<router-link to="/classicCase/4">-->
                  <!--<img src="../../../../static/images/Logo/gdnh.jpg" alt="广东能辉新材料科技有限公司">-->
                <!--</router-link>-->
                <!--<router-link to="/classicCase/4">-->
                  <!--<img src="../../../../static/images/Logo/dhtbb.jpg" alt="德华兔宝宝装饰新材股份有限公司">-->
                <!--</router-link>-->
                <!--<router-link to="/classicCase/4">-->
                  <!--<img src="../../../../static/images/Logo/njabn.jpeg" alt="南京艾布纳密封技术股份有限公司">-->
                <!--</router-link>-->
                <!--<router-link to="/classicCase/4">-->
                  <!--<img src="../../../../static/images/Logo/zghd.jpg" alt="中广核达胜加速器技术有限公司">-->
                <!--</router-link>-->
                <!--<router-link to="/classicCase/4">-->
                  <!--<img src="../../../../static/images/Logo/zjdb.jpg" alt="浙江多邦化工有限公司">-->
                <!--</router-link>-->
                <!--<router-link to="/classicCase/4">-->
                  <!--<img src="../../../../static/images/Logo/njys.png" alt="南京夜视丽精细化工有限责任公司">-->
                <!--</router-link>-->
                <!--<router-link to="/classicCase/4">-->
                  <!--<img src="../../../../static/images/Logo/tyyc.jpg" alt="天元(宜昌)胶粘剂科技有限公司">-->
                <!--</router-link>-->
                <!--<router-link to="/classicCase/4">-->
                  <!--<img src="../../../../static/images/Logo/fjscd.jpg" alt="福建省昌德胶业科技有限公司">-->
                <!--</router-link>-->
                <!--<router-link to="/classicCase/4">-->
                  <!--<img src="../../../../static/images/Logo/szsmx.gif" alt="深圳市美信电子有限公司">-->
                <!--</router-link>-->
                <!--<router-link to="/classicCase/4">-->
                  <!--<img src="../../../../static/images/Logo/gsjd.jpg" alt="甘肃金盾化工有限责任公司">-->
                <!--</router-link>-->
                <!--<router-link to="/classicCase/4">-->
                  <!--<img src="../../../../static/images/Logo/jsry.png" alt="江苏瑞洋安泰新材料科技有限公司">-->
                <!--</router-link>-->
                <!--<router-link to="/classicCase/4">-->
                  <!--<img src="../../../../static/images/Logo/gzjx.jpg" alt="广州机械科学研究院有限公司">-->
                <!--</router-link>-->
                <!--<router-link to="/classicCase/4">-->
                  <!--<img src="../../../../static/images/Logo/jsgj.png" alt="江苏国胶化学科技有限公司">-->
                <!--</router-link>-->
                <!--<router-link to="/classicCase/4">-->
                  <!--<img src="../../../../static/images/Logo/zjhj.jpg" alt="浙江汇杰有机硅股份有限公司">-->
                <!--</router-link>-->
              <!--</div>-->
            <!--</div>-->
          </div>
        </div>
        <!-- 友情链接 -->
        <div class="friendly-link">
          <p class="friendly-link-title">
            <span>友情链接</span>
          </p>
          <p class="friendly-link-list">
            <a :href="item.url" v-for="item in friendlyLink" target="_blank">{{ item.name }}</a>
          </p>
          <!--<p class="more-link-box">-->
            <!--<router-link to="/">更多</router-link>-->
          <!--</p>-->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
import newsApi from '../../js/news_api'
import cooperateApi from '../../js/cooperate_api'
import linkApi from '../../js/link_api'
export default {
  data () {
    return {
      showcard1: true,
      showcard2: true,
      showcard3: true,
      showcard4: true,
      showcard5: true,
      showcard6: true,
      tableData1: [],
      newsItem: {},
      mySwiper: {},
      mySwiperT: {},
      cooperateList: [],
      friendlyLink: [
        {'name': '林中祥胶粘剂技术信息网', 'url': 'http://adhesive-lin.com/'},
        {'name': '北京粘接学会', 'url': 'http://www.adhesionsociety.org.cn/'},
        {'name': '浙江省粘接技术协会', 'url': 'http://www.zj-adhesion.com/'},
        {'name': '河北省粘接与涂料协会', 'url': 'http://www.coating168.com/'},
        {'name': '宁波市胶粘剂与制品行业协会', 'url': 'http://www.nbjnj.net/'},
        {'name': '济南胶粘剂与涂料学会', 'url': 'http://www.naca53.com/'},
        {'name': '胶粘剂与密封剂工业(ASI)', 'url': 'https://www.adhesivesmag.com/'},
        {'name': '日本接着剤工業会', 'url': 'http://www.jaia.gr.jp/'},
        {'name': '韩国粘接及表面学会', 'url': 'http://adhesion-interface.org/'},
        {'name': '中国胶粘剂与胶粘带工业协会', 'url': 'http://www.cnaia.org/chinain/'},
        {'name': '《中国胶粘剂》', 'url': 'http://www.gxlj.cbpt.cnki.net/WKB2/WebPublication/index.aspx?mid=gxlj'},
        {'name': '《粘接》', 'url': 'http://www.zhanjie.com.cn/index.asp'},
        {'name': '《化学与粘合》', 'url': 'http://navi.cnki.net/knavi/JournalDetail?pcode=CJFD&pykm=HXYZ'},
        {'name': '《涂料与胶粘剂》', 'url': 'http://navi.cnki.net/knavi/JournalDetail?pcode=CJFD&pykm=TLJN'},
        {'name': '《胶体与聚合物》', 'url': 'http://jtjh.cbpt.cnki.net/WKB2/WebPublication/index.aspx?mid=JTJH'},
      ],
    }
  },
  methods: {
    showListCard (item1, item2) {
      item1 = !item1
      setTimeout(function (e) {
        item2 = !item2
      }, 500)
    },
    changeEmit(){

    },
    DateToStr(date) {
      let str = date.getMonth() + 1;
      str = str + '-' + date.getDate();
      return str
    },
  },
  mounted () {
    this.mySwiper = new Swiper('.swiper-container', {
      autoplay: {
        delay: 8000,
        stopOnLastSlide: false,
        disableOnInteraction: false
      },
      loop: true, // 循环模式选项

      // 如果需要分页器
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      }
    });
    this.mySwiperT = new Swiper('.swiper-container-02', {
      autoplay: {
        delay: 3000,
        stopOnLastSlide: false,
        disableOnInteraction: false
      },
      loop: false // 循环模式选项
    });
    let self = this;
    newsApi.search_news_list(self, {page: 1,size: 8}).then(function (res) {
      if (res.data.succ) {
        res.data.data.list.forEach(function (e) {
          let mycreatetime = new Date(e.createtime);
          e.showDate = self.DateToStr(mycreatetime);
          if(e.isimage==1){
            e.yearMonth = mycreatetime.getFullYear() + '-' +(mycreatetime.getMonth()+1);
            e.date = mycreatetime.getDate();
            self.newsItem=e;
          }
        });
        self.tableData1 = res.data.data.list;
      }
    });
    cooperateApi.search_cooperate_list(self, {page: 1,size: 15}).then(function (res) {
      if(res.data.succ){
        self.cooperateList = res.data.data.list;
      }
    });
    linkApi.search_friendlyLink_list(self,{page: 1,size: 100}).then(function (res) {
      if(res.data.succ){
        self.friendlyLink = res.data.data.list;
      }
    })
  },
}
</script>

<style scoped>
.swiper-container{width:100%;}
.swiper-container img{width:100%;}
</style>
