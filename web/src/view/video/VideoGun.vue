<template>
 <div class="main_videos text-grey-1 py-1 w-100">
      <div class="main_videos_title mt-3">
        <div class="vertical ml-3"></div>
        <div class="fs-xl ml-4" style="font-weight:700">焦点视频</div>
      </div>

      <div class="main_videos_list d-flex flex-wrap w-100 pl-1">
        <div
        
          class="mx-2 mt-3 mb-2"
          v-for="video in videos"
          :key="video._id"
        >
          
          <video width="166" height="120" controls="controls" x5-video-player-fullscreen="true" :poster="video.icon" >
            <source :src="video.link" type="video/mp4" />
          </video>

          <div style="width:11.8571rem; height:4.5rem">{{video.title}}</div>
          <!-- <div class="text-grey fs-sm">发布时间：{{video.date|changeTime}}</div> -->
          <div class="text-grey fs-sm">发布时间：</div>
        </div>
      </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      videos: [] //视频
    };
  },
   methods: {
    async fetchVideosDetail() {
      const res = await this.$http.get("/video/枪械"); // eslint-disable-line no-unused-vars
      this.videos = res.data.reverse(); //reverse(),videos数组逆序
    }
  },
  created() {
      this.fetchVideosDetail()
  },
};
</script>