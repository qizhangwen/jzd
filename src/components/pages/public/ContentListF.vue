<template>
  <div>
    <ul class="ul-eval2">
      <li v-for="item in 5">
        <div class="con">
          <div class="pic">
            <img src="../../../../static/images/base_0.jpg" alt="">
          </div>
          <div class="inner">
            <div class="tit">
              <h4>德赛集团</h4>
            </div>
            <div class="txt">
              <div class="desc">
                <p style="text-align: justify;">
                  公司对于研发的技术创新能力一直非常关注，近来年我们邀请老师对研发人员做了系列的培训，老师的专业知识都非常丰富，讲解深入，而且课程实用性很强，同事们反馈受益匪浅，带给他们很多启发，非常感谢老师们的付出！</p>
                <p style="text-align: right;">——德赛集团培训负责人</p>
              </div>
            </div>
          </div>
        </div>
      </li>
    </ul>
    <div class="align-cen">
      <el-pagination
        background
        layout="prev, pager, next"
        :current-page="currentPage"
        :page-size="100"
        :total="150">
      </el-pagination>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ContentListF",
    props: ['tabIndex'],
    data() {
      return {
        currentPage: 1,
      }
    }
  }
</script>

<style scoped>

</style>
