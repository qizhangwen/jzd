<template>
  <div>
    <div class="footer-top">
      <div class="footer-top-cont">
        <div class="footer-lf">
          <ul class="footer-list">
            <li @click="jumpTo('/tradesCouncil')">行业会议</li>
            <li v-for="item in listO">
              <router-link :to="item.url">{{ item.name }}</router-link>
            </li>
          </ul>
          <ul class="footer-list">
            <li @click="jumpTo('/talentTraining')">人才培训 </li>
            <li v-for="item in listT">
              <router-link :to="item.url">{{ item.name }}</router-link>
            </li>
          </ul>
          <ul class="footer-list">
            <li @click="jumpTo('/EnterpriseConsultation')">企业咨询</li>
            <li v-for="item in listTh">
              <router-link :to="item.url">{{ item.name }}</router-link>
            </li>
          </ul>
          <ul class="footer-list">
            <li @click="jumpTo('/newsInfor')">新闻资讯</li>
            <li>
              <router-link to=""></router-link>
            </li>
          </ul>
          <ul class="footer-list">
            <li @click="jumpTo('/aboutUs')">关于我们</li>
            <li v-for="item in listFive">
              <router-link :to="item.url">{{ item.name }}</router-link>
            </li>
          </ul>
        </div>
        <div class="footer-rt">
          <p class="footer-logo">
            <a href="/">
              <img src="../../../static/images/nullLogo.png" alt="logo">
            </a>
          </p>
          <div class="footer-text">
            <p>地址：上海市杨浦区国伟路135号10号楼501室</p>
            <p>手机：王小姐 17091319768（同微信号）</p>
            <p></p>
            <p></p>
          </div>
          <div class="footer-ft">
              <div class="footer-wx">
                <i class="icon-kf"></i>
                <p class="">
                  <img src="../../../static/images/wxh.jpg" alt="微信二维码">
                </p>
              </div>
              <div class="footer-wx">
                <i class="icon-kf-wx"></i>
                <p class="">
                  <img src="../../../static/images/gzh.jpg" alt="微信公众号二维码">
                </p>
              </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer">
      Copyright ©2005 - 2013 胶之道 <router-link to="/">粤ICP备15026320号-1</router-link> 44030502001253
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
      listO: [
        {'name': 'UV/EB研讨会', 'url': ''},
        {'name': '轨道交通研讨会', 'url': ''},
        {'name': '硅烷改性聚合物研讨会', 'url': ''},
        {'name': 'PUR创新论坛', 'url': ''}
      ],
      listT: [
        {'name': '创新产品设计', 'url': ''},
        {'name': '研发流程管理', 'url': ''},
        {'name': '生产与营销管理', 'url': ''},
        {'name': '应用实践', 'url': ''}
      ],
      listTh: [
        {'name': '发展战略', 'url': ''},
        {'name': '研发体系建设', 'url': ''},
        {'name': '企业研发管理内训', 'url': ''}
      ],
      listFour: [],
      listFive: [
        {'name': '公司介绍', 'url': '/toaboutUs/0'},
        {'name': '专家库', 'url': '/toaboutUs/1'},
        {'name': '理事会', 'url': '/toaboutUs/2'},
        {'name': '教学指导委员会', 'url': '/toaboutUs/3'},
        {'name': '加入我们', 'url': '/toaboutUs/5'},
        {'name': '联系我们', 'url': '/toaboutUs/6'}
      ]

    }
  },
  methods:{
    jumpTo(value){
      this.$router.push({path: value});
    }
  }
}
</script>

<style scoped>
  .footer-top{width:100%;padding:60px 0;background: #262626;}
  .footer-top-cont{display:flex;width:1200px;margin:0 auto;}
  .footer-lf{display:flex;justify-content:space-between;width:850px;padding: 0 70px;box-sizing: border-box;}
  .footer-lf .footer-list{}
  .footer-lf .footer-list li{margin-bottom:8px;}
  .footer-lf .footer-list li:first-child{margin-bottom:18px;font-size:16px;color:#fff;}
  .footer-lf .footer-list li a{line-height: 24px;font-size:14px;color:#a2a2a2;transition: .5s;}
  .footer-lf .footer-list li a:hover{color:#fff;}

  .footer-rt{width:350px;padding:0 20px 0 50px;border-left:1px solid #3c3c3c;box-sizing: border-box;}
  .footer-rt .footer-logo{width:215px;margin-bottom:22px;}
  .footer-rt .footer-logo img{display: block;width:100%;}
  .footer-text p{font-size:14px;line-height: 32px;color:#a2a2a2;}
  .footer-ft{display: flex}
  .footer-ft .footer-wx{position: relative;margin-right:10px;cursor:pointer;}
  .footer-ft i{display:inline-block;width:36px;height:36px;}
  .footer-ft i.icon-kf{background: url("../../../static/images/kf_icon.png")}
  .footer-ft i.icon-kf-wx{background: url("../../../static/images/kf_wx.png")}
  .footer-ft .footer-wx p{display: none;position: absolute;bottom: 45px;left: 50%;width: 100px;height: 100px;padding:5px;margin-left: -50px;background: #fff;box-sizing: border-box;}
  .footer-ft .footer-wx:hover p{display: block;}
  .footer-ft .footer-wx img{width:100%;height:100%;}

  .footer{width:100%;padding: 18px 0;line-height: 24px;text-align: center;font-size: 14px;color: #666;background-color: #1a1a1a;}
  .footer a{color:#444;}
</style>
