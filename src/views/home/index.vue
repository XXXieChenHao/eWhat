<template>
  <div class="home">
    <div class="content">
      <div class="tips">
        今天<span>{{ time }}</span
        >吃<span class="food">{{ what }}</span>
      </div>
      <div class="start_box">
        <van-button class="start_btn" @click="render" round>{{
          button
        }}</van-button>
      </div>
    </div>
    <div class="background"></div>
    <div class="temp_food" id="tempTip"></div>
  </div>
</template>

<script>
export default {
  name: "",
  components: {},
  props: {},
  data() {
    return {
      button: "开始",
      what: "金牌刀削面金牌刀削面",
      timer: "",
      foodList: [
        "地锅鸡",
        "谷雨轩",
        "黄焖鸡",
        "金牌刀削面",
        "拌面自助",
        "麻辣烫",
        "淮南牛肉汤",
        "十笼九包",
        "驴肉火烧",
        "薛姐饼店",
        "空勤灶",
        "湘菜馆",
        "饺子",
        "小碗菜",
        "烤肉拌饭",
        "犟骨饭",
      ],
    };
  },
  computed: {
    time: function () {
      var time = new Date();
      switch (true) {
        case time.getHours() < 9:
          return "早饭";
          break;
        case time.getHours() < 14:
          return "午饭";
          break;
        case time.getHours() < 20:
          return "晚饭";
          break;
        case time.getHours() < 24:
          return "夜宵";
          break;
      }
    },
  },
  watch: {},
  created() {},
  mounted() {},
  methods: {
    render: function () {
      if (this.button == "开始" || this.button == "换一个") {
        this.button = "停";
        var len = this.foodList.length;
        this.timer = setInterval(() => {
          this.what = this.foodList[Math.floor(Math.random() * len)];
        }, 50);
      } else {
        this.button = "换一个";
        clearInterval(this.timer);
      }
    },
  },
};
</script>

<style scoped lang="less">
.content {
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  z-index: 9;

  .start_box {
    margin-top: 0px;
    background: rgba(0, 0, 0, 0.1);
    border-radius: 40px;
    padding: 3px;
    -webkit-box-shadow: inset 0 2px 3px rgba(0, 0, 0, 0.07),
      0 1px rgba(255, 255, 255, 0.5);
    box-shadow: inset 0 2px 3px rgba(0, 0, 0, 0.07),
      0 1px rgba(255, 255, 255, 0.5);
    display: inline-block;
    cursor: pointer;

    .start_btn {
      width: 180px;
      height: 60px;
      font-size: 32px;
      background: linear-gradient(to bottom, #ffba30, #ff911e);
      color: #fff;
    }
  }
  .tips {
    width: 90%;
    margin: 0 auto 30px;
    padding: 0;
    font-weight: 400;
    font-size: 32px;
    cursor: pointer;
    color: #333;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    .food {
      font-weight: 700;
      color: #111;
    }
  }
}
.temp_food{
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 3;
}
.background {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: #f4f4f4;
}
</style>
