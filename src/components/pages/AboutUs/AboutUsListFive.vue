<template>
  <div>
    <div class="contact-box">
      <div style="display: flex;">
        <img src="../../../../static/images/gzh.jpg" alt="二维码">
        <div class="contact-details">
          <p>
            <i class="icon-address-01"></i>
            <span>手机/微信：17091319768 （王小姐）</span>
          </p>
          <p>
            <i class="icon-address-02"></i>
            <span>电话：     021-60483043</span>
          </p>
          <p @click="openUrl">
            <i class="icon-address-03"></i>
            <span>网址：     www.jzdconsult.com</span>
          </p>
          <p>
            <i class="icon-address-04"></i>
            <span>地址：     上海市杨浦区国伟路135号10号楼501室</span>
          </p>
        </div>
      </div>
    </div>
    <!-- 地图地址 -->
    <div class="map-address" id="map"></div>
  </div>
</template>

<script>
  export default {
    name: "AboutUsListFive",
    data() {
      return {
        map: null,
      }
    },
    methods: {
      //百度地图模块
      initMap() {
        let self = this;
        // 百度地图API功能
        // 创建Map实例
        self.map = new BMap.Map('map', {enableMapClick: false});
        // 初始化地图,设置中心点坐标和地图级别
        self.map.centerAndZoom(new BMap.Point(121.540964, 31.337321), 13);
        // 设置地图显示的城市 此项是必须设置的
        self.map.setCurrentCity("上海");
        // self.map.setMapType(BMAP_HYBRID_MAP);
        //开启鼠标滚轮缩放
        self.map.enableScrollWheelZoom(true);
        // self.map.addEventListener("click", self.showInfo);
        let marker;
        let pt = new BMap.Point(121.540964, 31.337321);
        marker = new BMap.Marker(pt);
        let infoWindow = new BMap.InfoWindow("<h2><strong>胶之道学院</strong></h2>" +
          "<p>地址：上海市杨浦区国伟路135号10号楼501室</p>",
          {enableCloseOnClick: false,offset: new BMap.Size(0,-20),width: 320});
        self.map.openInfoWindow(infoWindow, pt);
        self.map.addOverlay(marker);
        // setTimeout(function () {
        //   self.map.setViewport(pt);
        // },100);
      },
      openUrl() {
        window.open('http://www.jzdconsult.com');
      },
    },
    mounted() {
      this.initMap();
    },
  }
</script>

<style scoped>
  .map-address {
    width: 100%;
    height: 460px;
    background: #dedede;
  }

  .contact-box {
    display: flex;
    width: 100%;
    margin-bottom: 25px;
    justify-content: space-evenly;
  }

  .contact-details {
    padding-top: 30px;
    margin-left: 20px;
    font-size: 20px;
    color: #333;
  }

  .contact-details p {
    display: flex;
    align-items: center;
    margin-bottom: 30px;
  }

  .contact-details i {
    display: inline-block;
    margin-right: 15px;
  }

  .contact-details i.icon-address-01 {
    width: 20px;
    height: 20px;
    background: url("../../../../static/images/icon_about_01.png") no-repeat;
    background-size: cover;
  }

  .contact-details i.icon-address-02 {
    width: 20px;
    height: 20px;
    background: url("../../../../static/images/icon_about_02.png") no-repeat;
    background-size: cover;
  }

  .contact-details i.icon-address-03 {
    width: 20px;
    height: 20px;
    background: url("../../../../static/images/icon_about_03.png") no-repeat;
    background-size: cover;
  }

  .contact-details i.icon-address-04 {
    width: 20px;
    height: 30px;
    background: url("../../../../static/images/icon_about_04.png") no-repeat;
    background-size: cover;
  }
</style>
