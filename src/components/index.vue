<template>
  <div id="app">
    <el-container style="height: 500px; ">
      <el-header style="text-align: right; font-size: 12px">
        <el-col :span="4">
          <h1>
            后台管理系统模板
          </h1>
        </el-col>
        <el-col :span="20">
          <el-dropdown>
            <span class="el-dropdown-link">
              <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
              <span>王小虎</span>
              <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <!-- <el-dropdown-item>登录</el-dropdown-item> -->
              <el-dropdown-item>退出</el-dropdown-item>
              <el-dropdown-item>设置</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-col>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <el-menu
            :default-active="defaultUrl"
            router
            unique-opened
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
            :collapse="isCollapse"
          >
            <template v-for="(item, index) in routerarr">
              <el-menu-item :index="item.path" :key="index">{{item.name}}</el-menu-item>
            </template>
          </el-menu>
        </el-aside>
        <el-main>
          <keep-alive>
            <router-view></router-view>
          </keep-alive>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import router from "../router/index";
export default {
  name: "index",
  data() {
    return {
      isCollapse: false,
      routerarr: "",
      path: "",
      defaultUrl: "/shopcar"
    };
  },
  created() {
    this.routerarr = router.options.routes[1].children;
  },
  mounted() {
    let href = window.location.href;
    this.defaultUrl = href;
  },
  watch: {
    $route: "getPath"
  },
  methods: {
    getPath() {
      this.defaultUrl = this.$route.path;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../scss/index.scss";
</style>