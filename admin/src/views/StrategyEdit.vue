<template>
  <div>
    <h1>{{id?'编辑':'新建'}}攻略</h1>
    <el-form label-width="120px" @submit.native.prevent="save">
      <el-form-item label="所属">
        <el-select v-model="model.categories">
          <el-option label="枪械" value="枪械"></el-option>
          <el-option label="PVP" value="PVP"></el-option>
          <el-option label="PVE" value="PVE"></el-option>
          <el-option label="进阶" value="进阶"></el-option>
          <el-option label="新手" value="新手"></el-option>
          <el-option label="BOSS" value="BOSS"></el-option>
          <el-option label="地图" value="地图"></el-option>
          <el-option label="特训" value="特训"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="标题" style="width:40em" >
        <el-input v-model="model.title" required></el-input>
      </el-form-item>

      <el-form-item label="时间">
        <el-date-picker
          v-model="model.date"
          type="datetime"
          value-format="yyyy-MM-dd HH:mm:ss"
          placeholder="选择日期时间"
        ></el-date-picker>
      </el-form-item>

      <el-form-item label="封面">
        <el-upload
          class="avatar-uploader"
          :action="$http.defaults.baseURL+'/upload'"
          :show-file-list="false"
          :on-success="afterUpload"
        >
          <img v-if="model.icon" :src="model.icon" class="icon" />
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
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
      model: {
        categories:'',
        title:'',
        date:'',
        icon:'',
        body:''

      }
    };
  },
  components: {
    VueEditor
  },
  methods: {
    async save() {
      let res; // eslint-disable-line no-unused-vars
      if (this.id) {
        res = await this.$http.put(`rest/strategies/${this.id}`, this.model);
      } else {
        res = await this.$http.post("rest/strategies", this.model);
      }

      this.$router.push("/strategies/list");

      this.$message({
        type: "success",
        message: "保存成功"
      });
    },
    async fetch() {
      const res = await this.$http.get(`rest/strategies/${this.id}`); // eslint-disable-line no-unused-vars

      this.model = res.data;
    },
    // 富文本编辑器
    async handleImageAdded(file, Editor, cursorLocation, resetUploader) {
      const formData = new FormData();
      formData.append("file", file);

      const res = await this.$http.post("upload", formData);
      Editor.insertEmbed(cursorLocation, "image", res.data.url);
      resetUploader();
    },
    afterUpload(res) {
      // this.$set(this.model,'avatar',res.url)   //vue提供的：显示赋值(赋值主体，赋值属性，赋值内容)
      this.model.icon = res.url;
    },
  },
  created() {
    this.id && this.fetch();
  }
};
</script>

<style >
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 10rem;
  height: 10rem;
  line-height: 5rem;
  text-align: center;
}
.icon {
  width: 12.8462rem;
  height: 7.2308rem;
  display: block;
}
</style>