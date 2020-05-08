<template>
  <div id="app" class="login">
    <div class="login-c">
      <div class="login-b">
        <el-form :model="formInline" label-width="100px" class="demo-ruleForm">
          <el-form-item label="账号">
            <el-input type="password" v-model="formInline.user" clearable autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="密码">
            <el-input
              type="password"
              v-model="formInline.password"
              show-password
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="login()">登录</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      formInline: {
        user: "",
        password: ""
      }
    };
  },
  methods: {
    login: function() {
      this.$router.push({ path: "index" });
    }
  }
};
</script>


<style lang="scss">
@import "../scss/theme.scss";
</style>
