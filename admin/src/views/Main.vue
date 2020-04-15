<template>
    <el-container style="height: 100vh;">

  <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
    <el-menu :default-openeds="['1', '2']" router>
      <el-submenu index="1">
        <template slot="title"><i class="el-icon-edit"></i>内容管理</template>

        <el-menu-item-group>
          <template slot="title">热点新闻</template>
          <el-menu-item index="/news/create">新建新闻</el-menu-item>
          <el-menu-item index="/news/list">新闻列表</el-menu-item>
        </el-menu-item-group>

         <el-menu-item-group>
          <template slot="title">焦点视频</template>
          <el-menu-item index="/videos/create">新建视频</el-menu-item>
          <el-menu-item index="/videos/list">视频列表</el-menu-item>
        </el-menu-item-group>

         <el-menu-item-group>
          <template slot="title">精品攻略</template>
          <el-menu-item index="/strategies/create">新建攻略</el-menu-item>
          <el-menu-item index="/strategies/list">攻略列表</el-menu-item>
        </el-menu-item-group>

        <el-menu-item-group>
          <template slot="title">赛事新闻</template>
          <el-menu-item index="/matchs/create">新建赛事</el-menu-item>
          <el-menu-item index="/matchs/list">赛事列表</el-menu-item>
        </el-menu-item-group>

         
    </el-submenu>
        
      <el-submenu index="2">
        <template slot="title"><i class="el-icon-setting"></i>系统设置</template>

        <el-menu-item-group>
          <template slot="title">广告</template>
          <el-menu-item index="/ads/create">新建广告位</el-menu-item>
          <el-menu-item index="/ads/list">广告位列表</el-menu-item>
        </el-menu-item-group>

        <el-menu-item-group>
          <template slot="title">管理员</template>
          <el-menu-item index="/admin_users/create">新建账户</el-menu-item>
          <el-menu-item index="/admin_users/list">账户管理</el-menu-item>
        </el-menu-item-group>
    
      </el-submenu>
      
    </el-menu>
  </el-aside>
  
  <el-container>
    <el-header style="text-align: right; font-size: 12px">
      <el-dropdown>
        <i class="el-icon-user" style="margin-right: 15px"></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>查看</el-dropdown-item>
          <el-dropdown-item>新增</el-dropdown-item>
          <el-dropdown-item>删除</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <span>CFM后台管理</span>
    </el-header>
    
    <el-main>
      <router-view :key="$route.path"></router-view>
    </el-main>
  </el-container>
</el-container>
</template>

<style>
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
  
  .el-aside {
    color: #333;
  }
</style>

<script>
  export default {
   
  };
</script>

<style >
    
</style>