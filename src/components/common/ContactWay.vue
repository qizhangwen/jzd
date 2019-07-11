<template>
  <div class="xl_kfbar">
    <div class="xl_kftel_item xl_kf_item">
      <div class="xl_kftel_hover">
        <div class="xl_kfitem_con">
          <span class="icon"></span>
          <span class="txt">17091319768</span>
        </div>
      </div>
    </div>
    <div class="xl_kfuser_item xl_kf_item">
      <div class="xl_kfuser_hover" style="width: 180px;">
        <div class="xl_kfitem_con">
          <span class="icon"></span>
          <ul>
            <li><span class="lt">17091319768</span><a href="#"><img src="../../../static/images/wx.png" /><span class="kfewm"><img src="../../../static/images/wxh.jpg" /></span></a></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="xl_kfwx_item xl_kf_item">
      <div class="xl_kfwx_hover">
        <img src="../../../static/images/gzh.jpg" />
      </div>
    </div>
    <div @click="turnToTop" class="xl_kftop_item xl_kf_item"></div>
  </div>
</template>

<script>
export default {
  name: 'ContactWay',
  data () {
    return {
      timer: null
    }
  },
  methods: {
    turnToTop () {
      let self = this
      cancelAnimationFrame(self.timer)
      self.timer = requestAnimationFrame(function fn () {
        let oTop = document.body.scrollTop || document.documentElement.scrollTop
        if (oTop > 0) {
          document.body.scrollTop = document.documentElement.scrollTop = oTop - 50
          self.timer = requestAnimationFrame(fn)
        } else {
          cancelAnimationFrame(self.timer)
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
