<template>
  <div>
    <swiper />

    <div class="bg-black-1 w-100 by-grey d-flex flex-wrap" style="height:5.6929rem">
      <router-link
        tag="div"
        :to="`/match/${category.path}`"
        v-for="category in categories"
        :key="category.title"
        class="text-white ml-2 mx-1 mt-3 text-center"
        style="width:30%"
        
      >
        <img
          class="text-center fs-xl"
          width="110px"
          height="46px"
          src="../assets/img/match_nav_bg.jpg"
        />
        <div style="margin-top:-40px">{{category.title}}</div>
      </router-link>

    </div>

    <div class="main_matchs text-grey-1 py-1 w-100">
      <div class="main_matchs_title my-3">
        <div class="vertical ml-3"></div>
        <div class="fs-xl ml-4" style="font-weight:700">赛事新闻</div>
      </div>

      <div class="main_matchs_list d-flex flex-column w-100 pl-1">
        <router-link
          :to="`/match/detail/${match._id}`"
         
          tag="div"
          class="mx-2 mt-3 mb-1 d-flex flex-wrap pb-3 bb-grey"
          v-for="match in matchs"
          :key="match._id"
        >
          <span style="width:19.7857rem">{{match.title}}</span>
          <img :src="match.icon" width="46.875px" height="25.78px" class="ml-4" />
          <div class="text-grey fs-sm">发布时间：{{match.date | date}}</div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import dayjs from "dayjs";

import Swiper from "../components/Swiper";

export default {
  data() {
    return {
      matchs: [],
      categories: [
        { title: "CFML", path: "gun" },
        { title: "公开赛", path: "pvp" },
        { title: "百城联赛", path: "pve" }
      ]
    };
  },
  components: {
    Swiper
  },
  methods: {
    async fetchMatchs() {
      const res = await this.$http.get("/match/matchlist"); // eslint-disable-line no-unused-vars
      this.matchs = res.data.reverse(); //reverse(),videos数组逆序
    }
  },
  created() {
    this.fetchMatchs();
  },
  filters: {
    date(val) {
      return dayjs(val).format("MM/DD");
    }
  }
};
</script>

<style lang="scss">
.main_matchs {
  height: 34.5rem;

  .main_matchs_title {
    .vertical {
      background: url("../assets/img/index_sprite.png") no-repeat 62.893%
        25.806%;
      width: 5px;
      height: 25px;
      transform: scale(0.7);
      float: left;
    }
  }
}
</style>