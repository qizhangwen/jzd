<template>
  <div class="main">
    <h3>专家介绍</h3>
    <ul class="unit-list">
      <router-link tag="li" :to="{path:'/expertsDetails',query: {guid: item.guid}}" v-for="(item, index) in expert"
                   :key="index">
        <p class="experts-photo">
          <img :src="item.image" alt="">
        </p>
        <p class="experts-name">{{item.name}}</p>
      </router-link>
    </ul>
    <div class="align-cen">
      <el-pagination
        background
        layout="prev, pager, next"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-size="12"
        :total="totalCount">
      </el-pagination>
    </div>
  </div>
</template>

<script>
  import expertLibraryApi from '../../js/expert_library_api'

  export default {
    name: "AboutUsListT",
    data() {
      return {
        expert: [],
        currentPage: 1,
        totalCount: 0,
      }
    },
    mounted() {
      let self = this;
      expertLibraryApi.search_expert_library_list(self, {page: 1, size: 12}).then(function (e) {
        if (e.data.succ) {
          self.totalCount = e.data.data.totalRow;
          self.expert = e.data.data.list;
        }
      })
    },
    methods: {
      handleCurrentChange() {
        let self = this;
        expertLibraryApi.search_expert_library_list(self, {page: self.currentPage, size: 12}).then(function (e) {
          if (e.data.succ) {
            self.totalCount = e.data.data.totalRow;
            self.expert = e.data.data.list;
          }
        })
      }
    }
  }
</script>

<style scoped>
  .main {
    padding-top: 0;
  }

  .unit-list {
    display: flex;
    flex-wrap: wrap;
    margin: 50px 0 60px;
  }

  .unit-list li {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 290px;
    margin-bottom: 30px;
    box-sizing: border-box;
    cursor: pointer;
    transition: all .5s;
  }

  .unit-list li:hover {
    transform: scale(1.1);
  }

  .experts-photo {
    padding: 5px;
    border: 1px solid #ebeef5;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .1);
  }

  .experts-photo img {
    width: 180px;
    height: 220px;
  }

  .experts-name {
    margin-top: 15px;
    font-size: 18px;
  }

</style>
