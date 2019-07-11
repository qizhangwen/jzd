<template>
  <div>
    <div class="case-bg">
      <h3 class="case-title">关于我们</h3>
    </div>
    <div class="case-tab-box">
      <div class="case-tab-list">
        <span class="hov">专家库</span>
      </div>
    </div>
    <div class="experts-cont">
      <div class="experts-personal">
        <img :src="user.image" alt="">
        <div class="experts-personal-rt">
          <p class="experts-name">{{user.name}}</p>
          <p>{{'工作单位：'+user.unit}}</p>
          <p>
            <span>{{'职务：'+user.position}}</span>
            <span>{{'职称：'+user.worktitle}}</span>
          </p>
          <!--<span class="btn-experts-details">点击查看详情</span>-->
        </div>
      </div>
      <div class="experts-line">
        <can-read :content="user.introduce"></can-read>
      </div>
    </div>
  </div>
</template>

<script>
  import expertLibraryApi from '../../js/expert_library_api'
  import CanRead from "../public/canReadNew";

  export default {
    name: "expertsDetails",
    components: {CanRead},
    data() {
      return {
        user: {},
      }
    },
    mounted() {
      let self = this;
      expertLibraryApi.search_expert_library(self, {guid: self.$route.query.guid}).then(function (res) {
        if (res.data.succ) {
          self.user = res.data.data;
        }
      })
    }
  }
</script>

<style scoped>
  .experts-cont {
    width: 1200px;
    margin: 50px auto 70px;
  }

  .experts-personal {
    display: flex;
    margin-bottom: 20px;
  }

  .experts-personal img {
    width: 130px;
    height: 130px;
    padding: 2px;
    border: 1px solid #ccc;
    border-radius: 50%;
    box-sizing: border-box;
  }

  .experts-personal-rt {
    flex: 1;
    margin-left: 30px;
  }

  .experts-personal-rt p {
    height: 30px;
    padding-left: 20px;
    line-height: 30px;
  }

  .experts-personal-rt p.experts-name {
    height: 35px;
    line-height: 35px;
    font-size: 20px;
    font-weight: bold;
    border-bottom: 1px dashed #ccc;
  }

  .experts-personal-rt p span {
    margin-right: 20px;
  }

  .btn-experts-details {
    height: 30px;
    line-height: 30px;
    margin-left: 20px;
    cursor: pointer;
  }

  .btn-experts-details:hover {
    color: #003481;
  }

  .experts-line {
    margin-bottom: 20px;
  }

  .experts-line p {
    line-height: 2;
  }

  .experts-line p.experts-label {
    height: 35px;
    margin-bottom: 20px;
    line-height: 35px;
    font-size: 20px;
    font-weight: bold;
    border-bottom: 1px dashed #554681
  }
</style>
