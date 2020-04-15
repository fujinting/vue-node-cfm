<template>
  <div class="about">
    <h1>{{id ? '编辑' : '新建'}}广告位</h1>
    <el-form label-width="120px" @submit.native.prevent="save">
      <el-form-item label="名称" style="width:40em" >
        <el-input v-model="model.name" required></el-input>
      </el-form-item>

      <el-form-item label="广告">
        <el-button size="small" @click="model.items.push({})">
          <i class="el-icon-plus"></i> 添加广告
        </el-button>

        <el-row>
          <el-col :md="24" v-for="(item, i) in model.items" :key="i">
            <el-card>
              <el-form-item label="跳转链接">
                <el-input v-model="item.url" style="width:40em" ></el-input>
              </el-form-item>
              <el-form-item label="轮播图片" style="margin-top: 1rem;">
                <el-upload
                  class="avatar-uploader"
                  :action="$http.defaults.baseURL + '/upload'"
                  :show-file-list="false"
                  :on-success="res => $set(item, 'image', res.url)"
                >
                  <img v-if="item.image" :src="item.image" class="image" />
                  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
              </el-form-item>

              <el-form-item>
                <el-button size="small" type="danger" @click="model.items.splice(i, 1)">删除</el-button>
              </el-form-item>
            </el-card>
          </el-col>
        </el-row>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" native-type="submit">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  props: {
    id: {}
  },
  data() {
    return {
      model: {
        items: []
      }
    };
  },
  methods: {
    async save() {
      let res; // eslint-disable-line no-unused-vars
      if (this.id) {
        res = await this.$http.put(`rest/ads/${this.id}`, this.model);
      } else {
        res = await this.$http.post("rest/ads", this.model);
      }
      this.$router.push("/ads/list");
      this.$message({
        type: "success",
        message: "保存成功"
      });
    },
    async fetch() {
      const res = await this.$http.get(`rest/ads/${this.id}`);
      this.model = Object.assign({}, this.model, res.data);
    }
  },
  created() {
    this.id && this.fetch();
  }
};
</script>
<style>

image {
  width: 28.8462rem;
  height: 13.3846rem;
  display: block;
}
</style>