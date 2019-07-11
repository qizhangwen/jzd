<template>
    <div>
      <div class="case-bg">
        <h3 class="case-title">经典案例</h3>
      </div>
      <div class="case-tab-box">
        <div class="case-tab-list">
          <span :class="showActive == index ? 'hov' : ''" v-for="(item, index) in titleList" @click="tabShow(index)">{{ item }}</span>
        </div>
      </div>
      <div class="case-tab-cont" v-show="showActive == 0">
        <v-content-list tabIndex="0"></v-content-list>
      </div>
      <div class="case-tab-cont" v-show="showActive == 1">
        <v-content-list tabIndex="1"></v-content-list>
      </div>
      <div class="case-tab-cont" v-show="showActive == 2">
        <v-content-list-t tabIndex="2"></v-content-list-t>
      </div>
      <div class="case-tab-cont" v-show="showActive == 3">
        <v-content-list-t tabIndex="3"></v-content-list-t>
      </div>
      <div class="case-tab-cont" v-show="showActive == 4">
        <v-content-list-th tabIndex="4"></v-content-list-th>
      </div>
      <div class="case-tab-cont" v-show="showActive == 5">
        <v-content-list-f tabIndex="5"></v-content-list-f>
      </div>
    </div>
</template>

<script>
import VContentList from '../public/ContentList.vue'
import VContentListT from '../public/ContentListT.vue'
import VContentListTh from '../public/ContentListTh.vue'
import VContentListF from '../public/ContentListF.vue'
export default {
  name: 'ClassicCase',
  components: {
    VContentList, VContentListT, VContentListTh, VContentListF
  },
  data () {
    return {
      activeName: 'first',
      showActive: 0,
      titleList: ['资讯案例', '特训营案例', '公开课现场', '客户来信', '服务客户', '客户评价']
    }
  },
  methods: {
    tabShow (index) {
      this.showActive = index
    }
  },
  mounted () {
    if (this.$route.params.page) {
      this.tabShow(this.$route.params.page)
    }
  }
}
</script>

<style scoped>

</style>
