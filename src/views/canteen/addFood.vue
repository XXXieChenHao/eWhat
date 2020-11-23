<template>
  <div class="addFood">
    <div class="add_top">
      <div class="map" id="container"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: "",
  components: {},
  props: {},
  data() {
    return {};
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {
    var map = new BMap.Map("container", {
      minZoom: 15,
      maxZoom: 25,
    });
    var point = new BMap.Point(116.331398, 39.897445);
    map.centerAndZoom(point, 12);
    var geolocation = new BMap.Geolocation();
    geolocation.getCurrentPosition(
      function (r) {
        if (this.getStatus() == BMAP_STATUS_SUCCESS) {
          var mk = new BMap.Marker(r.point);
          map.addOverlay(mk);
          map.panTo(r.point);
          point = new BMap.Point(r.point.lng, r.point.lat);
          map.centerAndZoom(point, 15);
        } else {
          this.$notify({ type: 'warning', message: '获取位置信息失败' })
        }
      },
      { enableHighAccuracy: true }
    );

    map.centerAndZoom(point, 15);
    var marker = new BMap.Marker(point, {
      enableDragging: true,
    });
    map.addOverlay(marker);



      // 添加带有定位的导航控件
  var navigationControl = new BMap.NavigationControl({
    enableGeolocation: true
  });
  map.addControl(navigationControl);
  // 添加定位控件
  var geolocationControl = new BMap.GeolocationControl();
  geolocationControl.addEventListener("locationSuccess", function(e){
    // alert("当前定位地址为：" + address);
  });
  geolocationControl.addEventListener("locationError",function(e){
    // 定位失败事件
    this.$notify({ type: 'warning', message: e.message })
  });
  map.addControl(geolocationControl);
  },
  methods: {},
};
</script>

<style scoped lang="less">
.addFood {
  .add_top {
    height: 5rem;
    width: 100%;
    position: relative;
    .map {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
