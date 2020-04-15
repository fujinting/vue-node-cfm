<template>
  <div>
    <h1>{{id?'编辑':'新建'}}新闻</h1>
    <el-form label-width="120px" @submit.native.prevent="save">
      <el-form-item label="所属">
        <el-select v-model="model.categories">
          <el-option label="公告" value="公告"></el-option>
          <el-option label="活动" value="活动"></el-option>
          <el-option label="概率" value="概率"></el-option>
          <el-option label="新闻" value="新闻"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="标题" style="width:40em" >
        <el-input v-model="model.title" required></el-input>
      </el-form-item>

      <el-form-item label="时间">
        <el-date-picker
          v-model="model.date"
          type="date"
          value-format="yyyy-MM-dd"
          placeholder="选择日期"
        ></el-date-picker>
      </el-form-item>

      <el-form-item label="内容">
        <vue-editor v-model="model.body" useCustomImageHandler @image-added="handleImageAdded"></vue-editor>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" native-type="submit">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { VueEditor } from "vue2-editor";

export default {
  props: {
    id: {}
  },
  data() {
    return {
      model: {}
    };
  },
  components: {
    VueEditor
  },
  methods: {
    async save() {
      let res; // eslint-disable-line no-unused-vars
      if (this.id) {
        res = await this.$http.put(`rest/news/${this.id}`, this.model);
      } else {
        res = await this.$http.post("rest/news", this.model);
      }

      this.$router.push("/news/list");

      this.$message({
        type: "success",
        message: "保存成功"
      });
    },
    async fetch() {
      const res = await this.$http.get(`rest/news/${this.id}`); // eslint-disable-line no-unused-vars

      this.model = res.data;
    },
    // 富文本编辑器
    async handleImageAdded(file, Editor, cursorLocation, resetUploader) {
      const formData = new FormData();
      formData.append("file", file);

      const res = await this.$http.post("upload", formData);
      Editor.insertEmbed(cursorLocation, "image", res.data.url);
      resetUploader();
    }
  },
  created() {
    this.id && this.fetch();
  }
};
</script>

<style >
</style>