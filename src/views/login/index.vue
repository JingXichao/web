<template>
  <div class="login-container">
    <el-row>
      <el-col :xs="24" :sm="24" :md="12" :lg="16" :xl="16">
        <div style="color: transparent">占位符</div>
      </el-col>
      <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="8">
        <el-form
          ref="form"
          :model="form"
          class="login-form"
          label-position="left"
        >
          <div class="title">
            {{ title }}
          </div>
          <!-- <div class="title-tips">欢迎来到{{ title }}！</div> -->
          <el-tabs v-model="activeName">
            <el-tab-pane
              v-if="isProd == 'true' && isProd"
              label="账号密码登录"
              name="account"
            >
              <el-form-item style="margin-top: 40px">
                <span class="svg-container svg-container-admin">
                  <vab-icon :icon="['fas', 'user']" />
                </span>
                <el-input
                  v-model.trim="form.value"
                  placeholder="请输入用户名"
                />
              </el-form-item>
              <el-button
                :loading="loading"
                class="login-btn"
                type="primary"
                @click="handleLogin"
              >
                登录
              </el-button>
            </el-tab-pane>
            <el-tab-pane label="域登录" name="region">
              <el-button
                class="login-btn"
                type="primary"
                @click="handleDomainLogin"
              >
                登录
              </el-button>
            </el-tab-pane>
            <el-tab-pane label="企业微信登录" name="weChat">
              <div id="wx_reg" style="text-align: center">&nbsp;</div>
            </el-tab-pane>
          </el-tabs>
        </el-form>
      </el-col>
      <!-- <el-col :xs="12" :sm="12" :md="6" :lg="8" :xl="8">
        <div style="color: transparent;">占位符</div>
      </el-col> -->
    </el-row>
  </div>
</template>

<script>
  import { getWeChatInfo } from "@/api/user";
  import { domainLoginbaseURL } from "@/config/settings";
  export default {
    name: "Login",
    data() {
      return {
        nodeEnv: process.env.NODE_ENV,
        title: this.$baseTitle,
        form: {
          value: "",
        },
        loading: false,
        activeName: "region",
        code: "",
        user: "",
        redirect: "",
        isProd: process.env.VUE_APP_PREVIEW,
      };
    },
    watch: {
      activeName(val) {
        if (val === "weChat") this.getWeChatInfo(0);
      },
      $route: {
        handler(route) {
          this.redirect = (route.query && route.query.redirect) || "/";
        },
        immediate: true,
      },
    },
    mounted() {
      if ("production" !== this.NODE_ENV) this.form.value = "global\\zhoul9";
      else this.form.value = "global\\";
      this.redirect_uri = window.location.href;
      this.code = this.$getQueryString("code") || "";
      if (this.code) {
        this.weChatLogin();
      }
      this.user = this.$getQueryString("user") || "";
      if (this.user) {
        this.domainLogin();
      }
    },
    methods: {
      async domainLogin() {
        const param = {
          value: this.user,
        };
        await this.$store.dispatch("user/domainLogin", param);
        await this.$router.push(this.redirect).catch(() => {});
      },
      handleDomainLogin() {
        console.log(this.redirect_uri);
        const url = encodeURIComponent(this.redirect_uri);
        console.log(url);
        // const url = window.location.origin + "/tsc/web/login";
        window.location.href = `${domainLoginbaseURL}domain/Login.aspx?ReturnUrl=${url}`;
      },
      async weChatLogin() {
        const param = {
          value: this.code,
        };
        await this.$store.dispatch("user/weChatLogin", param);
        await this.$router.push(this.redirect).catch(() => {});
      },
      async getWeChatInfo() {
        const { data } = await getWeChatInfo();
        window.WwLogin({
          id: "wx_reg",
          appid: data.appId,
          agentid: data.agentId,
          redirect_uri: this.redirect_uri,
          state: data.state,
        });
      },
      async handleLogin() {
        this.loading = true;
        await this.$store.dispatch("user/login", this.form).catch(() => {
          this.loading = false;
        });
        await this.$router.push(this.redirect).catch(() => {});
        this.loading = false;
      },
    },
  };
</script>

<style lang="scss" scoped>
  .login-container {
    height: 100vh;
    min-height: 600px;
    background: url("~@/assets/login_images/background.jpg") center center fixed
      no-repeat;
    // background: url("~@/assets/SideBar.png") center center fixed no-repeat;
    background-size: cover;

    .title {
      font-size: 54px;
      font-weight: 500;
      color: rgba(14, 18, 26, 1);
    }

    .title-tips {
      margin-top: 29px;
      font-size: 26px;
      font-weight: 400;
      color: rgba(14, 18, 26, 1);
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .login-btn {
      display: inherit;
      width: 220px;
      height: 60px;
      margin-top: 5px;
      border: 0;

      &:hover {
        opacity: 0.9;
      }
    }

    .login-form {
      position: relative;
      max-width: 100%;
      margin: calc((100vh - 425px) / 2) 10% 10%;
      overflow: hidden;

      .forget-password {
        width: 100%;
        margin-top: 40px;
        text-align: left;

        .forget-pass {
          width: 129px;
          height: 19px;
          font-size: 20px;
          font-weight: 400;
          color: rgba(92, 102, 240, 1);
        }
      }
    }

    .tips {
      margin-bottom: 10px;
      font-size: $base-font-size-default;
      color: $base-color-white;

      span {
        &:first-of-type {
          margin-right: 16px;
        }
      }
    }

    .title-container {
      position: relative;

      .title {
        margin: 0 auto 40px auto;
        font-size: 34px;
        font-weight: bold;
        color: $base-color-blue;
        text-align: center;
      }
    }

    .svg-container {
      position: absolute;
      top: 14px;
      left: 15px;
      z-index: $base-z-index;
      font-size: 16px;
      color: #d7dee3;
      cursor: pointer;
      user-select: none;
    }

    .show-password {
      position: absolute;
      top: 14px;
      right: 25px;
      font-size: 16px;
      color: #d7dee3;
      cursor: pointer;
      user-select: none;
    }

    ::v-deep {
      .el-form-item {
        padding-right: 0;
        margin: 20px 0;
        color: #454545;
        background: transparent;
        border: 1px solid transparent;
        border-radius: 2px;

        &__content {
          min-height: $base-input-height;
          line-height: $base-input-height;
        }

        &__error {
          position: absolute;
          top: 100%;
          left: 18px;
          font-size: $base-font-size-small;
          line-height: 18px;
          color: $base-color-red;
        }
      }

      .el-input {
        box-sizing: border-box;

        input {
          height: 58px;
          padding-left: 45px;
          font-size: $base-font-size-default;
          line-height: 58px;
          color: $base-font-color;
          background: #f6f4fc;
          border: 0;
          caret-color: $base-font-color;
        }
      }
    }
  }
</style>
