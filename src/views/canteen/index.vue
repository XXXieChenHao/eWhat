<template>
  <div class="canteen">
    <van-cell
      :title="item.title"
      :value="getTime(item.time)"
      size="large"
      :label="item.label + item.amount + '家美食'"
      v-for="item in list"
      :key="item.id"
    />

    <van-button class="addFan" @click="handleFanClick" type="info" round
      >添加更多饭圈</van-button
    >
  </div>
</template>

<script>
import { formatTime } from "@/utils/time";
export default {
  name: "canteen",
  components: {},
  props: {},
  data() {
    return {
      list: [
        {
          id: 1,
          title: "家附近",
          label: "丰台七里庄",
          amount: 12,
          time: "1606135092733",
        },
        {
          id: 2,
          title: "公司楼下",
          label: "辉煌国际附近",
          amount: 22,
          time: "1606135092733",
        },
        {
          id: 3,
          title: "家",
          label: "朱辛庄附近",
          amount: 7,
          time: "1606135944595",
        },
      ],
    };
  },
  computed: {
    getTime: function () {
      return function (data) {
        return formatTime(data);
      };
    },
  },
  watch: {},
  created() {},
  mounted() {},
  methods: {
    handleFanClick() {
      this.$router.push({name: 'addFood'})
    },
  },
};
</script>

<style scoped lang="less">
.canteen {
  margin-bottom: 80px;
  .addFan {
    position: fixed;
    bottom: 60px;
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>
