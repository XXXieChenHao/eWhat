<template>
  <div class="border">

    <van-nav-bar
      :title="$route.meta.title"
      fixed
      :left-arrow="$route.meta.back"
      @click-left="goBack"
    />

    <router-view></router-view>

    <div class="footer flex-row">
      <router-link to="/home">
        <van-icon size="30" :color="$route.from == 'home'? 'tomato': '#333'" name="wap-home-o" />
      </router-link>
      <router-link to="/menu">
        <van-icon size="30" :color="$route.name == 'menu'? 'tomato': '#333'" name="apps-o" />
      </router-link>
      <router-link to="/usercenter">
        <van-icon size="30" :color="$route.name == 'usercenter'? 'tomato': '#333'" name="user-circle-o" />
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  mounted () {
  },
  methods: {
    goBack: function () {
      this.$router.go(-1);
    },
  },
};
</script>

<style lang="less" scoped>
.border {
  padding: 45px 0;
}
.content {
  background: red;
}

.footer {
  position: fixed;
  z-index: 10;
  background: #fff;
  bottom: 0;
  width: 100%;
  height: 45px;
  text-align: center;
  box-shadow: 0 -1px 0 0px #f4f4f4;
}
</style>