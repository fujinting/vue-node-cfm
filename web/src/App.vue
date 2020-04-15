<template>
  <div id="app">
    <div class="topbar bg-black py-1 px-2 d-flex ai-center">
      <img src="./assets/img/logo.png" height="47.2188px" />
      <div class="px-2 flex-1 pb-1">
        <div class="text-white pt-2" style=" font-weight:700">穿越火线:枪战王者</div>
        <div class="text-grey fs-xs" style="line-height:15px">原汁原味，CF正版FPS手游</div>
      </div>

      <router-link to="www.baidu.com" tag="div">
        <img src="./assets/img/topbar_btn.png" class="mt-2" height="35px" width="90px" />
      </router-link>
    </div>

    <router-view></router-view>

    <div class="bottombar bg-grey-3 d-flex ai-center w-100">
      <router-link to="/main" tag="div" class="text-center">
        <i class="bottombtn1"></i>
        <div class="text-grey-1">首页</div>
      </router-link>

      <router-link to="/video" tag="div" class="text-center">
        <i class="bottombtn2"></i>
        <div class="text-grey-1">视频</div>
      </router-link>

      <router-link to="/strategy" tag="div" class="text-center">
        <i class="bottombtn3"></i>
        <div class="text-grey-1">攻略</div>
      </router-link>

      <router-link to="/match" tag="div" class="text-center">
        <i class="bottombtn4"></i>
        <div class="text-grey-1">赛事</div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {}
};
</script>

<style lang="scss">
#app {
  height: 135rem;
}
.topbar {
  position: sticky;
  top: 0;
  z-index: 999;
}
.bottombar {
  position: fixed;
  bottom: 0;
  z-index: 999;
}
.bottombar > div {
  width: 25%;
}

// 精灵图

.bottombtn1 {
  background: url("./assets/img/index_sprite.png") no-repeat 0 -400px;
  display: inline-block;
  width: 2.7143rem;
  height: 2.5rem;
  transform: scale(0.65);
}

.bottombtn2 {
  background: url("./assets/img/index_sprite.png") no-repeat -100px -400px;
  display: inline-block;
  width: 2.2857rem;
  height: 2.6429rem;
  transform: scale(0.65);
}
.bottombtn3 {
  background: url("./assets/img/index_sprite.png") no-repeat -200px -401px;
  display: inline-block;
  width: 2.3571rem;
  height: 2.5714rem;
  transform: scale(0.65);
}
.bottombtn4 {
  background: url("./assets/img/index_sprite.png") no-repeat -302px -401px;
  display: inline-block;
  width: 2.5714rem;
  height: 2.5714rem;
  transform: scale(0.65);
}
</style>
