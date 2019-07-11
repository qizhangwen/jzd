<template>
  <div>
    <div class="conference-img">
      <img src="../../../../static/images/base.jpg" alt="会议图片">
    </div>
    <div class="main pad0">
      <div class="wrapper">
        <div class="business-list conference-list">
          <router-link class="hov" to="/tradesCouncilT">
            <img src="../../../../static/images/base.jpg" alt="UV/UE研讨会">
            <p>UV/UE研讨会</p>
          </router-link>
          <router-link to="/">
            <img src="../../../../static/images/base.jpg" alt="轨道交通研讨会">
            <p>轨道交通研讨会</p>
          </router-link>
          <router-link to="/">
            <img src="../../../../static/images/base.jpg" alt="硅烷改性聚合物研讨会">
            <p>硅烷改性聚合物研讨会</p>
          </router-link>
          <router-link to="/">
            <img src="../../../../static/images/base.jpg" alt="PUR创新论坛">
            <p>PUR创新论坛</p>
          </router-link>
        </div>
        <div class="product-introduction">
          <div class="pic">
            <img src="../../../../static/images/base.jpg" alt="图片">
          </div>
          <div class="txt">
            <h3 class="tit">产品概述</h3>
            <p class="desc">产品概述产品概述产品概述产品概述产品概述产品概述产品概述产品概述产品概述产品概述产品概述产品概述产品概述产品概述产品<br/>概述产品概述产品概述产品概述产品概述产品概述产品概述产品概述产品概述产品概述产品概述产品概述产品概述产品概述</p>
          </div>
        </div>
        <h3>精彩回顾</h3>
        <div class="ry-content">
          <div class="swiper-container ry-swiper" id="rySwiper">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <router-link to="/" href="javascript:;" class="ry-item">
                  <dl>
                    <dt>
                      <img src="../../../../static/images/base.jpg" class="ry-cert" />
                    </dt>
                  </dl>
                </router-link>
              </div>
              <div class="swiper-slide">
                <router-link to="/" href="javascript:;" class="ry-item">
                  <dl>
                    <dt>
                      <img src="../../../../static/images/base.jpg" class="ry-cert" />
                    </dt>
                  </dl>
                </router-link>
              </div>
              <div class="swiper-slide">
                <router-link to="/" href="javascript:;" class="ry-item">
                  <dl>
                    <dt>
                      <img src="../../../../static/images/base.jpg" class="ry-cert" />
                    </dt>
                  </dl>
                </router-link>
              </div>
              <div class="swiper-slide">
                <router-link to="/" href="javascript:;" class="ry-item">
                  <dl>
                    <dt>
                      <img src="../../../../static/images/base.jpg"  class="ry-cert" />
                    </dt>
                  </dl>
                </router-link>
              </div>
            </div>
            <div class="swiper-pagination ry-pagination"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Swiper from 'swiper';
  import 'swiper/dist/css/swiper.min.css';
  export default {
    data() {
      return {}
    },
    methods: {

    },
    mounted() {
      const mySwiper = new Swiper('#rySwiper', {
        pagination: '.swiper-pagination',
        autoplay: {
          delay: 3000,
          stopOnLastSlide: false,
          disableOnInteraction: true,
        },
        loop: true,
        slidesPerView: 'auto',
        centeredSlides: true,
      });
    }
  }
</script>

<style scoped>

</style>
