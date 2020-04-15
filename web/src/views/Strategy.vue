<template>
  <div>
    <swiper />

     <div class="d-flex ai-center text-center by-grey w-100 bg-grey-4" style="height:2.6429rem;">
      <router-link
        :to="`/strategy/${category.path}`"
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
        { title: "枪械", path: "gun" },
        { title: "PVP", path: "pvp" },
        { title: "PVE", path: "pve" },
        { title: "进阶", path: "advanced" },
        { title: "新手", path: "novice" },
        { title: "BOSS", path: "boss" },
        { title: "地图", path: "map" },
        { title: "特训", path: "hdtx" }

      ]
    };
  },
  components: {
    Swiper
  },
 
};
</script>

<style lang="">
</style>