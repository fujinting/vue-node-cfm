<template>
  <div>
    <swiper />

    <div class="d-flex ai-center by-grey text-center w-100 bg-grey-4" style="height:2.6429rem;">
      <router-link
        :to="`/video/${category.path}`"
        class="text-white"
        style="width:3.8571rem"
        tag="div"
        v-for="category in categories"
        :key="category.title"
      >{{category.title}}</router-link>
    </div>
    <div>
      <router-view></router-view>
    </div>

  
  </div>
</template>

<script>
import Swiper from "../components/Swiper";

export default {
  data() {
    return {
      categories: [
        { title: "最新", path: "new" },
        { title: "荒岛", path: "island" },
        { title: "精品", path: "boutique" },
        { title: "赛事", path: "match" },
        { title: "进阶", path: "advanced" },
        { title: "新手", path: "novice" },
        { title: "枪械", path: "gun" }
      ]
    };
  },
  components: {
    Swiper
  }
};
</script>

<style lang="">
</style>