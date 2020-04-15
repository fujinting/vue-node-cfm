<template>
  <div>
    <swiper />
    <div class="main_content">
      <div class="main_clearfix bg-black-1 d-flex px-2 fs-xl text-center w-100">
        <router-link to="/main" tag="div" style="width:20%;height:70px" v-for="category in categories" :key='category.name'>
          <div class="cricle">
            <div :class="category.icon"></div>
            <div class="mt-3 text-white">{{category.name}}</div>
          </div>
        </router-link>
      </div>
    </div>
    <!-- 热点新闻 -->
    <div class="main_news text-grey-1 py-1 w-100">
      <div class="main_news_title mt-3">
        <div class="vertical ml-3"></div>
        <div class="fs-xl ml-4" style="font-weight:700">热点新闻</div>
      </div>

      <div class="main_news_list d-flex flex-column my-3 px-2 w-100">
        <router-link
          :to="`/new/detail/${item._id}`"
          tag="div"
          class="main_news_item px-1"
          v-for="item in items"
          :key="item._id"
        >
          {{item.categories | ellipsis}} | {{item.title | ellipsis}}
          <span
            class="fs-md text-grey mr-0"
            style="float:right"
          >{{item.date | date}}</span>
        </router-link>
      </div>
    </div>

    <!-- 焦点视频 -->
    <div class="main_videos text-grey-1 py-1 w-100">
      <div class="main_videos_title mt-3">
        <div class="vertical ml-3"></div>
        <div class="fs-xl ml-4" style="font-weight:700">焦点视频</div>
      </div>

      <div class="main_videos_list d-flex flex-wrap w-100 pl-1">
        <div class="mx-2 mt-3 mb-2" v-for="video in videos" :key="video._id">
          <video
            width="166"
            height="120"
            controls="controls"
            
            :poster="video.icon"
          >
            <source :src="video.link" type="video/mp4" />
          </video>

          <div style="width:11.8571rem; height:4.5rem ">{{video.title}}</div>
          <!-- <div class="text-grey fs-sm">发布时间：{{video.date|changeTime}}</div> -->
          <div class="text-grey fs-sm">发布时间：</div>
        </div>
      </div>
    </div>

    <!-- 精品攻略 -->
    <div class="main_strategies text-grey-1 py-1 w-100">
      <div class="main_strategies_title mt-3">
        <div class="vertical ml-3"></div>
        <div class="fs-xl ml-4" style="font-weight:700">精品攻略</div>
      </div>

      <div class="main_strategies_list d-flex flex-column w-100 pl-1">
        <router-link
          :to="`/strategy/detail/${strategy._id}`"
          tag="div"
          class="mx-2 mt-3 mb-2 d-flex flex-wrap pb-3 bb-grey"
          v-for="strategy in strategies"
          :key="strategy._id"
        >
          <div style="width:19.7857rem">{{strategy.title}}</div>
          <img :src="strategy.icon" width="46.875px" height="25.78px" class="ml-4" />
          <div class="text-grey fs-sm">发布时间：{{strategy.date | shiftItem}}</div>
        </router-link>
      </div>
    </div>

    <!-- 火线大本营 -->

    <div class="main_firehomes text-grey-1 py-1 w-100">
      <div class="main_firehomes_title mt-3">
        <div class="vertical ml-3"></div>
        <div class="fs-xl ml-4" style="font-weight:700">火线大本营</div>
      </div>
      <div class="d-flex flex-column w-100 py-3">
        <router-link
          to="`/#/${item._id}`"
          tag="div"
          class="fire_item w-100 bg-black-2 by-grey mb-1 py-3 d-flex ai-center"
          v-for="fire in fires"
          :key="fire._id"
        >
          <div :class="fire.icon "></div>
          <div>{{fire.title}}</div>
        </router-link>
      </div>
    </div>

    <!-- 合作伙伴 -->

    <div class="main_partners text-grey-1 py-1 w-100 pl-1">
      <div class="main_partners_title mt-3">
        <div class="vertical ml-3"></div>
        <div class="fs-xl ml-4" style="font-weight:700">合作伙伴</div>
      </div>
      <div class="d-flex flex-wrap py-3 w-100">
        <div
          :class="partner.icon"
          v-for="partner in partners"
          :key="partner.icon"
          style="background-color:#2f2d2c; "
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
import dayjs from "dayjs";
import Swiper from "../components/Swiper";
import timeago from "timeago.js";

export default {
  data() {
    return {
      categories:[
        {name:"枪械",icon:'gun'},
        {name:"活动",icon:'activity'},
        {name:"社区",icon:'community'},
        {name:"CDKey",icon:'cdkey'},
        {name:"周边商城",icon:'mall'},


      ],
      items: [], //新闻
      videos: [], //视频
      strategies: [], //攻略
      fires: [
        { title: "进入穿越火线官方FPS手游玩家社区", icon: "community" },
        { title: "关注穿越火线手Q兴趣部落", icon: "tribe" },
        { title: "搜索微信公众号“穿越火线官方FPS手游”", icon: "official" }
      ],
      partners: [
        { icon: "penguin" },
        { icon: "fish" },
        { icon: "inter" },
        { icon: "tentacles" },
        { icon: "tiger" },
        { icon: "forum" }
      ]
    };
  },
  components: {
    Swiper
  },
  methods: {
    async fetchNews() {
      const res = await this.$http.get("/main/news"); // eslint-disable-line no-unused-vars
      this.items = res.data.reverse(); //reverse(),items数组逆序
    },
    async fetchVideos() {
      const res = await this.$http.get("/main/videos"); // eslint-disable-line no-unused-vars
      this.videos = res.data.reverse(); //reverse(),videos数组逆序
    },
    async fetchStrategies() {
      const res = await this.$http.get("/main/strategies"); // eslint-disable-line no-unused-vars
      this.strategies = res.data.reverse(); //reverse(),videos数组逆序
    }
  },
  created() {
    this.fetchNews();
    this.fetchVideos();
    this.fetchStrategies();
  },
  filters: {
    ellipsis(value) {
      if (!value) return "";
      if (value.length > 18) {
        return value.slice(0, 18) + "...";
      }
      return value;
    },
    date(val) {
      return dayjs(val).format("MM/DD");
    },
    changeTime(val) {
      let time = new Date(val);

      return new timeago().format(time, "zh_CN");
    },
    shiftItem(val) {
      return String(val || "")
        .split(" ")
        .shift();
    }
  }
};
</script>

<style lang="scss">
@import "../assets/scss/main.scss";
</style>