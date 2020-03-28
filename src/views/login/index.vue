<template>
  <div class="login-container">
    <el-form
      class="login-form"
      autocomplete="on"
      :model="loginForm"
      :rules="loginRules"
      ref="loginForm"
      label-position="left"
    >
      <h3 class="title">
        
        vue-admin-tool
      </h3>
      <el-form-item prop="username">
        <span class="svg-container svg-container_login">
          <svg-icon icon-class="user"/>
        </span>
        <el-input
          name="username"
          type="text"
          v-model="loginForm.username"
          autocomplete="on"
          placeholder="请填写用户名"
        />
      </el-form-item>
      <el-form-item prop="password">
        <span class="svg-container">
          <svg-icon icon-class="password"></svg-icon>
        </span>
        <el-input
          name="password"
          :type="pwdType"
          @keyup.enter.native="handleLogin"
          v-model="loginForm.password"
          autocomplete="on"
          placeholder="请填写密码"
        ></el-input>
        <span class="show-pwd" @click="showPwd">
          <svg-icon icon-class="eye"/>
        </span>
      </el-form-item>
      <el-form-item prop="captcha">
        <div class="verify-box flex-box">
          <el-input
            class="verify-input"
            name="captcha"
            @keyup.enter.native="handleLogin"
            v-model="loginForm.captcha"
            placeholder="请填写验证码"
          ></el-input>
       
        </div>
      </el-form-item>
      <el-form-item>
        <el-button
          type="primary"
          style="width:100%;height:44px;"
          :loading="loading"
          @click.native.prevent="handleLogin"
        >登录</el-button>
      </el-form-item>
    
    </el-form>
  </div>
</template>

<script>
// import {isvalidUsername} from '@/utils/validate'
export default {
  name: "login",
  data() {
    const validateUsername = (rule, value, callback) => {
      callback();
    };
    const validatePass = (rule, value, callback) => {
      if (value.length < 5) {
        callback(new Error("密码不能小于5位"));
      } else {
        callback();
      }
    };
    return {
      loginForm: {
        username: "",
        password: "",
        captcha: ""
      },
      loginRules: {
        username: [
          { required: true, trigger: "blur", validator: validateUsername }
        ],
        password: [
          { required: true, trigger: "blur", validator: validatePass }
        ],
        captcha: [{ required: true, trigger: "blur", message: "请填写验证码" }]
      },
      loading: false,
      pwdType: "password",
      img_str: ""
    };
  },
  mounted() {
    this.getVerifyCode();
  },
  methods: {
    getVerifyCode() {
      let now_time = new Date().getTime();
      let img_str = process.env.BASE_API + "/api/captcha?time=" + now_time;
      this.img_str = img_str;
    },
    showPwd() {
      if (this.pwdType === "password") {
        this.pwdType = "";
      } else {
        this.pwdType = "password";
      }
    },
    handleLogin() {
      this.commonRouterChange({
        name: 'Dashbord'
      })
      // this.$refs.loginForm.validate(valid => {
      //   if (valid) {
      //     this.loading = true;
      //     this.$store
      //       .dispatch("Login", this.loginForm)
      //       .then(() => {
      //         this.loading = false;
      //         this.$router.push({ path: "/" });
      //         setTimeout(() => {
      //           location.reload();
      //         }, 500);
      //       })
      //       .catch(() => {
      //         this.getVerifyCode();
      //         this.loading = false;
      //       });
      //   } else {
      //     // eslint-disable-next-line
      //     console.log("error submit!!");
      //     return false;
      //   }
      // });
    }
  }
};
</script>

<style lang="less">
@bg: #2d3a4b;
@light_gray: #eee;
/* reset element-ui css */
.login-container {
    .title{
        display: flex;
        align-items: center;
        justify-content: center;
        img{
            width: 50px;
            margin-right: 20px;
        }
    }
  .el-input {
    display: inline-block;
    height: 47px;
    width: 85%;
    input {
      background: transparent;
      border: 0px;
      -webkit-appearance: none;
      border-radius: 0px;
      padding: 12px 5px 12px 15px;
      color: @light_gray;
      height: 47px;
      &:-webkit-autofill {
        -webkit-box-shadow: 0 0 0px 1000px @bg inset !important;
        -webkit-text-fill-color: #fff !important;
      }
    }
  }
  .el-form-item {
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    color: #454545;
  }
}
</style>

<style lang="less" scoped>
@bg: #2d3a4b;
@dark_gray: #889aa4;
@light_gray: #eee;
.login-container {
  position: fixed;
  height: 100%;
  width: 100%;
  background: url("https://res.shiyin.net/shiyin/cps2/login_bg.png") no-repeat
    center;
  background-size: cover;
  .login-form {
    position: absolute;
    left: 0;
    right: 0;
    width: 520px;
    padding: 35px 35px 15px 35px;
    margin: 120px auto;
  }
  .tips {
    font-size: 14px;
    color: #fff;
    margin-bottom: 10px;
    span {
      &:first-of-type {
        margin-right: 16px;
      }
    }
  }
  .svg-container {
    padding: 6px 5px 6px 15px;
    color: @dark_gray;
    vertical-align: middle;
    width: 30px;
    display: inline-block;
    &_login {
      font-size: 20px;
    }
  }
  .title {
    font-size: 26px;
    font-weight: 400;
    color: @light_gray;
    margin: 0px auto 40px auto;
    text-align: center;
    font-weight: bold;
  }
  .show-pwd {
    position: absolute;
    right: 10px;
    top: 7px;
    font-size: 16px;
    color: @dark_gray;
    cursor: pointer;
    user-select: none;
  }
}
.verify-input {
  width: 60%;
}
.verify-code {
  width: 100px;
  height: 50px;
  display: inline-block;
  img {
    width: 100%;
    height: 100%;
  }
}
</style>