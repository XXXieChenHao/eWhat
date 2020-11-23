<template>
  <div class="usercenter">
    <div class="bgWhite user_title">
      <div class="user_nav clear-fix">
        <van-image
          class="headimg fl"
          round
          width="1.5rem"
          height="1.5rem"
          :src="headimg"
        />
        <div class="flex-column user-text fl">
          <span class="username">{{ username }}</span>
          <span class="userlabel">{{ userlabel }}</span>
        </div>
      </div>
    </div>

    <div class="bgWhite grid">
      <van-cell title="我的食堂" to="canteen" icon="smile-o"/>
      <van-cell title="周围店铺" to="round" icon="location-o"/>
    </div>

    <div class="bgWhite user_banner">
      <van-cell title="个人信息" to="userInfo" icon="user-o"/>
      <van-cell title="安全中心" to="safe" icon="warning-o"/>
      <van-cell title="功能反馈" to="feedback" icon="chat-o" />
      <van-cell title="联系客服" to="servicer" icon="phone-circle-o" />
      <van-cell title="用户设置" to="setting" icon="setting-o" />
    </div>
  </div>
</template>

<script>
export default {
  name: "usercenter",
  components: {},
  props: {},
  data() {
    return {
      headimg: require("@/assets/imgs/headimg.jpg"), // 头像
      username: "汐潮的用户名", // 用户名
      userlabel: "苦逼的程序员都不知道中午吃什么", // 个性签名
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    target: function (name) {
      console.log(name);
    },
  },
};
</script>

<style scoped lang="less">
.usercenter {
  padding: 0 0 10px;
  background: #f4f4f4;
  .user_title {
    position: relative;
    height: 3rem;
    border-bottom: 3px dashed #f4f4f4;
    margin-bottom: 8px;
    .user_nav {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      padding: 20px;
      .headimg {
        margin-right: 20px;
      }

      .user-text {
        width: 6rem;
        height: 1.5rem;
        align-items: baseline;

        .username {
          font-weight: bold;
          font-size: 16px;
        }

        .userlabel {
          width: 100%;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          font-size: 14px;
          color: #999;
          display: inline-block;
        }
      }
    }
  }
  .grid {
    border-bottom: 3px dashed #f4f4f4;
    margin-bottom: 8px;
  }
  .user_banner {
    border-bottom: 3px dashed #f4f4f4;
  }
}
</style>
