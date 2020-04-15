<template>
  <swiper :options="swiperOptions">
    <swiper-slide v-for="item in ads.items" :key="item._id">
      <a :href="item.url">
        <img :src="item.image" class="swiper-pic" />
      </a>
    </swiper-slide>

    <div class="swiper-pagination text-right pt-1" @click="swiper" slot="pagination"></div>
  </swiper>
</template>
<script>
import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";
import "swiper/css/swiper.css";

export default {
  data() {
    return {
      swiperOptions: {
        pagination: {
          el: ".swiper-pagination"
        }
      },
      ads: {
        items: []
      }
    };
  },
  components: {
    Swiper,
    SwiperSlide
  },
  directives: {
    swiper: directive
  },
  methods: {
    swiper() {
      this.swiper.slideTo(3, 1000, false);
    },
    async fetchAds() {
      const res = await this.$http.get("/main/ads"); // eslint-disable-line no-unused-vars
      this.ads = res.data.shift();
    }
  },
  created() {
    this.fetchAds();
  }
};
</script>
<style lang='scss'>
.swiper-pic {
  height: 12.43rem;
  width: 100%;
}
.swiper-pagination {
  width: 100%;
  height: 31.3px;
  background-color: rgba(17, 17, 17, 0.6);
  bottom: 1px !important;
  .swiper-pagination-bullet {
    opacity: 1;
    background-color: #fff;
    &.swiper-pagination-bullet-active {
      transform: scale(1.5);
      background-color: #d85906;
    }
  }
}
</style>