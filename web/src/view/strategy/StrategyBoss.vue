<template>
  <div class="main_strategies text-grey-1 py-1 w-100">
    <div class="main_strategies_title my-3">
      <div class="vertical ml-3"></div>
      <div class="fs-xl ml-4" style="font-weight:700">精品攻略</div>
    </div>

    <div class="main_strategies_list d-flex flex-column w-100 pl-1">
      <router-link
        :to="`/strategy/detail/${strategy._id}`"
        tag="div"
        class="mx-2 mt-3 mb-1 d-flex flex-wrap pb-3 bb-grey"
        v-for="strategy in strategies"
        :key="strategy._id"
      >
        <span style="width:19.7857rem">{{strategy.title}}</span>
        <img :src="strategy.icon" width="46.875px" height="25.78px" class="ml-4" />
        <div class="text-grey fs-sm">发布时间：{{strategy.date | date}}</div>
      </router-link>
    </div>
  </div>
</template>
<script>
import dayjs from "dayjs";

export default {
  data() {
    return {
      strategies: []
    };
  },
  methods: {
    async fetchStrategies() {
      const res = await this.$http.get("/strategy/BOSS"); // eslint-disable-line no-unused-vars
      this.strategies = res.data.reverse(); //reverse(),videos数组逆序
    }
  },
  created() {
    this.fetchStrategies();
  },
  filters: {
     date(val) {
      return dayjs(val).format("MM-DD");
    },
  }
};
</script>