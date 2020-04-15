<template>
  <div>
    <div class="new_detail w-100 my-3 d-flex flex-column px-3">
      <div class="new_detail_title fs-xl text-grey-5 ml-5">{{detail.title}}</div>
      <div class="new_detail_date fs-sm text-grey-6 ml-5">穿越火线官方手游运营团队/{{detail.date | shiftItem}}</div>

      <div class="new_detail_body text-grey-5" v-html="detail.body"></div>
      <div class="return" @click="$router.go(-1)"></div>
      <br />
      <br />
      <br />
      <br />
    </div>
  </div>
</template>
<script>
export default {
  props: {
    id: {}
  },
  data() {
    return {
      detail: {
        title: {},
        date: {},
        body: {}
      }
    };
  },
  methods: {
    async fetchNewDetail() {
      const res = await this.$http.get(`new/detail/${this.id}`); // eslint-disable-line no-unused-vars

      this.detail = res.data;
    }
  },
  created() {
    this.id && this.fetchNewDetail();
  },
  filters: {
    shiftItem(val) {
      return String(val || "")
        .split(" ")
        .shift();
    }
  }
};
</script>
<style lang="scss">
.new_detail {
  height: 6.4286rem;
  .new_detail_title {
    width: 87%;
    font-weight: 700;
    line-height: 2rem;
  }
  .new_detail_date {
    width: 80%;
  }
  .new_detail_body {
    img {
      max-width: 100%;
      height: auto;
    }
  }
  .return {
    background: url("../assets/img/index_sprite.png") no-repeat -600px -400px;
    width: 92px;
    height: 66px;
    position: fixed;
    transform: scale(0.6);
    left: -1.4286rem;
    top: 4.43rem;
  }
}
</style>
