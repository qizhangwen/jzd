<template>
  <div class="header">
    <div class="logo">
      <a href="">
        <img src="../../../static/images/jzdLogo.jpg" alt="logo">
      </a>
    </div>
    <div class="header-rt">
      <div class="nav">
        <div class="top-line">
          <div class="top-contact">
            <!--<p>-->
              <!--<img src="../../../static/images/mail.png" alt="office@jzdconsult.com">-->
              <!--<span>office@jzdconsult.com</span>-->
            <!--</p>-->
            <p>
              <img src="../../../static/images/tel_icon.png" alt="021-60483043">
              <span>021-60483043</span>
            </p>
          </div>
          <div class="login-registration">
            <!--<router-link tag="span" to="/">加入我们</router-link>-->
            <!--<router-link tag="span" to="/">联系我们</router-link>-->
            <span @click="loginShow">登录</span>
            <span @click="registrationShow">注册</span>
          </div>
        </div>
        <div class="header-link-box">
          <router-link :class="{'hov' : navActive === item.url}" :to="item.url" @click.native="jumpUrl(item.url)" v-for="item in navList">{{ item.title }}</router-link>
        </div>
      </div>
    </div>
    <!-- 蒙版 -->
    <div class="mask" @scroll.prevent v-show="maskShow"></div>
    <!-- 登录弹窗 -->
    <div class="login-dialog" v-show="loginDialog">
      <i class="el-icon-close" @click="onLoginCancel"></i>
      <el-form ref="loginForm" :model="loginForm" label-width="80px">
        <el-form-item label="用户名">
          <el-input v-model="loginForm.name"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="loginForm.password"></el-input>
        </el-form-item>
        <el-form-item class="align-cen">
          <el-button type="primary" @click="onLoginSubmit">登录</el-button>
          <el-button @click="onLoginCancel">取消</el-button>
        </el-form-item>
      </el-form>
    </div>
    <!-- 注册弹窗 -->
    <div class="registration-dialog" v-show="registrationDialog">
      <i class="el-icon-close" @click="onRegCancel"></i>
      <el-form ref="regForm" :model="regForm" label-width="80px">
        <el-form-item label="用户名">
          <el-input v-model="regForm.name"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="regForm.password"></el-input>
        </el-form-item>
        <el-form-item label="确认密码">
          <el-input v-model="regForm.affirmPassword"></el-input>
        </el-form-item>
        <el-form-item class="align-cen">
          <el-button type="primary" @click="onRegSubmit">注册</el-button>
          <el-button @click="onRegCancel">取消</el-button>
        </el-form-item>
      </el-form>

    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      maskShow: false,
      loginDialog: false,
      registrationDialog: false,
      loginForm: {},
      regForm: {},
      navActive: '/',
      navList: [
        {title: '首页', url: '/'},
        {title: '行业会议', url: '/tradesCouncil'},
        {title: '职业教育培训', url: '/talentTraining'},
        {title: '企业咨询', url: '/EnterpriseConsultation'},
        // {title: '经典案例', url: '/classicCase'},
        {title: '新闻资讯', url: '/newsInfor'},
        {title: '关于我们', url: '/aboutUs'}
      ]
    }
  },
  methods: {
    loginShow () {
      const mo = function (e) { e.preventDefault() }
      document.body.style.overflow = 'hidden'
      document.addEventListener('touchmove', mo, false)// 禁止页面滑动
      this.maskShow = true
      this.loginDialog = true
    },
    onLoginSubmit () {
      const mo = function (e) { e.preventDefault() }
      document.body.style.overflow = ''// 出现滚动条
      document.removeEventListener('touchmove', mo, false)
      this.maskShow = false
      this.loginDialog = false
    },
    onLoginCancel () {
      const mo = function (e) { e.preventDefault() }
      document.body.style.overflow = ''// 出现滚动条
      document.removeEventListener('touchmove', mo, false)
      this.maskShow = false
      this.loginDialog = false
    },
    registrationShow () {
      const mo = function (e) { e.preventDefault() }
      document.body.style.overflow = 'hidden'
      document.addEventListener('touchmove', mo, false)// 禁止页面滑动
      this.maskShow = true
      this.registrationDialog = true
    },
    onRegSubmit () {
      const mo = function (e) { e.preventDefault() }
      document.body.style.overflow = ''// 出现滚动条
      document.removeEventListener('touchmove', mo, false)
      this.maskShow = false
      this.registrationDialog = false
    },
    onRegCancel () {
      const mo = function (e) { e.preventDefault() }
      document.body.style.overflow = ''// 出现滚动条
      document.removeEventListener('touchmove', mo, false)
      this.maskShow = false
      this.registrationDialog = false
    },
    jumpUrl (url) {
      this.navActive = url
    }
  },
  mounted () {
  }
}
</script>

<style scoped>
  .header{position:relative;display:flex;justify-content: space-between; align-items: center; height:120px;padding:0 66px 0 50px;border-bottom: 1px solid #e5e5e5;}
  .header-rt{display:flex;justify-content:flex-end;flex:1;}
  .logo{width:300px;height:100px;}
  .logo img{display: block;width:100%;height: 100%;}
  .nav img{display: inline-block;width:100%;height: 100%;}
  .nav{width:840px;font-size:0;}
  .nav a{position:relative;margin:0 27px;font-size:16px;color:#333;}
  .nav a:hover,.nav a.hov{color:#003481;}
  .nav a:hover:after,.nav a.hov:after{position:absolute;bottom:-20px;left:0;content:'';width:100%;border-bottom:2px solid #003481;}
  .login-registration{display:flex;align-items:center;justify-content:center;height:40px;font-size:0;}
  .login-registration span{margin-right:10px;font-size:12px;color:#333;cursor:pointer;}
  .login-registration span:hover{color:#003481;}
  .login-dialog{position:fixed;top:50%;left:50%;z-index:9999;transform: translate(-50%,-50%);width:400px;height:250px;padding:50px 50px 0 0;background:rgba(255,255,255,.9);border-radius: 5px;box-sizing: border-box;}
  .registration-dialog{position:fixed;top:50%;left:50%;z-index:9999;transform: translate(-50%,-50%);width:400px;height:300px;padding:50px 50px 0 0;background:rgba(255,255,255,.9);border-radius: 5px;box-sizing: border-box;}
  .el-icon-close{position:absolute;top:8px;right:8px;cursor:pointer;}
  .top-line{display: flex;justify-content: flex-end;align-items: center;padding:10px 30px;box-sizing: border-box;margin-right: -11px;}
  .top-contact{display:flex;align-items:center;justify-content:center;height:40px;}
  .top-contact p{display:flex;align-items:center;margin-right:25px;font-weight:700;font-size:20px;color:#ffae00;}
  .top-contact p img{width:15px;height:19px;margin-right:5px;}
  .header-link-box{display:flex;justify-content: space-between;}
</style>
