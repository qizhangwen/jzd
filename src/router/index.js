import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  base: '/jzd/',
  mode: 'history',
  routes: [
    // router的懒加载resolve
    {
      path: '/',
      name: 'index',
      component: resolve => require(['../components/common/Home.vue'], resolve),
      children: [
        {
          path: '/',
          component: resolve => require(['../components/pages/index/index.vue'], resolve) // 首页
        },
        {
          path: '/tradesCouncil',
          component: resolve => require(['../components/pages/TradesCouncil/TradesCouncil.vue'], resolve) // 行业会议
        },
        {
          path: '/tradesCouncilT',
          component: resolve => require(['../components/pages/TradesCouncil/TradesCouncilT.vue'], resolve) // 行业会议-三级
        },
        {
          path: '/tradesCouncilD',
          component: resolve => require(['../components/pages/TradesCouncil/TradesCouncilDetail.vue'], resolve) // 行业会议-详情
        },
        {
          path: '/talentTraining',
          component: resolve => require(['../components/pages/TalentTraining/TalentTraining.vue'], resolve) // 职业教育培训
        },
        {
          path: '/talentTrainingT',
          component: resolve => require(['../components/pages/TalentTraining/TalentTrainingT.vue'], resolve) // 职业教育培训-三级
        },
        {
          path: '/talentTrainingD',
          component: resolve => require(['../components/pages/TalentTraining/TalentTrainingDetail.vue'], resolve) // 职业教育培训-详情
        },
        {
          path: '/enterpriseConsultation',
          component: resolve => require(['../components/pages/EnterpriseConsultation/EnterpriseConsultation.vue'], resolve) // 企业咨询
        },
        {
          path: '/classicCase',
          component: resolve => require(['../components/pages/ClassicCase/ClassicCase.vue'], resolve) // 经典案例
        },
        {
          path: '/classicCase/:page',
          component: resolve => require(['../components/pages/ClassicCase/ClassicCase.vue'], resolve) // 经典案例
        },
        {
          path: '/listDetails',
          component: resolve => require(['../components/pages/public/ContentListDetails.vue'], resolve) // 经典案例-详情
        },
        {
          path: '/listDetailsT',
          component: resolve => require(['../components/pages/public/ContentListDetailsT.vue'], resolve) // 经典案例-详情
        },
        {
          path: '/newsInfor',
          component: resolve => require(['../components/pages/NewsInfor/NewsInfor.vue'], resolve) // 新闻资讯
        },
        {
          path: '/newsInfor/:page',
          component: resolve => require(['../components/pages/NewsInfor/NewsInfor.vue'], resolve) // 新闻资讯
        },
        {
          path: '/newsInforList',
          component: resolve => require(['../components/pages/public/ContentListDetailsTh.vue'], resolve) // 新闻资讯-详情
        },
        {
          path: '/tonewsInforList',
          component: resolve => require(['../components/pages/public/ToContentListDetailsTh.vue'], resolve) // 新闻资讯-详情
        },
        {
          path: '/aboutUs',
          component: resolve => require(['../components/pages/AboutUs/AboutUs.vue'], resolve) // 关于我们
        },
        {
          path: '/aboutUs/:page',
          component: resolve => require(['../components/pages/AboutUs/AboutUs.vue'], resolve) // 关于我们
        },
        {
          path: '/toaboutUs/:page',
          component: resolve => require(['../components/pages/AboutUs/ToAboutUs.vue'], resolve) // 关于我们
        },
        {
          path: '/unitDetails',
          component: resolve => require(['../components/pages/AboutUs/UnitDetails.vue'], resolve) // 理事单位-详情
        },
        {
          path: '/expertsDetails',
          component: resolve => require(['../components/pages/AboutUs/ExpertsDetails.vue'], resolve) // 专家介绍-详情
        },
        {
          path: '/editMeeting',
          component: resolve => require(['../components/pages/public/SearchMain.vue'], resolve) // 经典案例
        }
      ]
    }
  ]
})
