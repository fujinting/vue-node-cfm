<template>
  <div>
    <h1>赛事列表</h1>
    <el-table :data="items">
      <el-table-column prop="_id" label="ID" width="230"></el-table-column>
      <el-table-column prop="title" label="标题"></el-table-column>
      <el-table-column prop="date" label="时间"></el-table-column>
      <el-table-column fixed="right" label="操作" width="180">
        <template  slot-scope="scope">
          <el-button
            type="text"
            size="small"
            @click="$router.push(`/matchs/edit/${scope.row._id}`)"
          >编辑</el-button>
          <el-button type="text" size="small" @click="remove(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: []
    };
  },
  methods: {
    async fetch() {
      const res = await this.$http.get("rest/matchs");
      this.items = res.data;
    },
    async remove(row){
       this.$confirm(`是否确定要删除此赛事新闻?"${row.title}"`, '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        })
        .then(async() => {
          const res =await this.$http.delete(`rest/matchs/${row._id}`)      // eslint-disable-line no-unused-vars
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
          this.fetch()
        })
    }
  },
  created() {
    this.fetch()
  }
};
</script>


<style>
</style>