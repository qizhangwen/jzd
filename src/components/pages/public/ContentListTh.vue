<template>
  <div>
    <ul class="customer-list">
      <li v-for="(item, index) in fileList" @click="openUrl(item.url)" :key="index">
        <p>
          <img :src="item.imageurl" :alt="item.name">
        </p>
      </li>
    </ul>
    <div class="align-cen">
      <el-pagination
        background
        layout="prev, pager, next"
        :current-page="currentPage"
        :page-size="30"
        :total="fileList.length">
      </el-pagination>
    </div>
  </div>
</template>

<script>
  import cooperateApi from '../../js/cooperate_api'

  export default {
    name: 'ContentListTh',
    props: ['tabIndex'],
    data() {
      return {
        currentPage: 1,
        fileList: []
      }
    },
    methods: {
      init() {
        let self = this;
        self.loadData();
      },
      openUrl(url){
        window.open(url);
      },
      loadData(){
        let self = this;
        cooperateApi.search_cooperate_list(self, {page: self.currentPage,size: 30}).then(function (res) {
          if(res.data.succ){
            self.fileList = res.data.data.list;
          }
        })
      },
    },
    mounted() {
      this.init();
    }
  }
</script>

<style scoped>

</style>
