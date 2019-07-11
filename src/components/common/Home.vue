<template>
  <div class="wrapper">
    <v-header></v-header>
    <div class="content">
      <transition>
        <router-view></router-view>
      </transition>
    </div>
    <v-footer></v-footer>
    <v-contact-way></v-contact-way>
  </div>
</template>

<script>
import vHeader from './Header.vue'
import vFooter from './Footer.vue'
import vContactWay from './ContactWay.vue'

export default {
  components: {
    vHeader, vFooter, vContactWay
  }
}
</script>
<style>
  .content{min-height:900px;}
</style>
