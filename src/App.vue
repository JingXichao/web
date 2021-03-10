<template>
  <div id="vue-admin-beautiful">
    <router-view v-if="isRouter" />
  </div>
</template>

<script>
  import { mapGetters } from "vuex";
  export default {
    name: "App",
    provide() {
      return {
        reload: this.reload,
        closePage: this.closePage,
      };
    },
    data() {
      return {
        isRouter: true,
      };
    },
    computed: {
      ...mapGetters({
        visitedRoutes: "tagsBar/visitedRoutes",
      }),
    },
    mounted() {},
    methods: {
      reload() {
        this.isRouter = false;
        this.$nextTick(() => {
          this.isRouter = true;
        });
      },
      async closePage(path) {
        let view = path || this.$route.path;
        this.visitedRoutes.forEach((item, index) => {
          if (view == item.path) {
            view = item;
          }
        });
        const { visitedRoutes } = await this.$store.dispatch(
          "tagsBar/delRoute",
          view
        );
        const latestView = visitedRoutes.slice(-1)[0];
        if (latestView) {
          this.$router.push(latestView);
        } else {
          this.$router.push("/");
        }
      },
    },
  };
</script>
<style lang="scss">
  html body .el-submenu__title i {
    color: #fff !important;
  }

  .my_title {
    padding: 12px 0;
    font-size: 15px;
    font-weight: bold;
    color: #000;
  }

  .my_crad {
    width: 100%;
    margin-bottom: 5px;
    background-color: #fff;
    border-top: 4px solid #039;
    border-radius: 3px;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);

    .box_header {
      padding: 5px 10px;
      font-size: 15px;
      font-weight: bold;
      color: #000;
      border-color: #c5d0dc;
      border-style: solid;
      border-width: 0 1px 1px 1px;
    }

    .content {
      padding: 5px 10px;
      color: #333;
      border-color: #c5d0dc;
      border-style: solid;
      border-width: 0 1px 1px 1px;
      border-top-left-radius: 0;
      border-top-right-radius: 0;
      border-bottom-right-radius: 3px;
      border-bottom-left-radius: 3px;

      .my_label {
        font-weight: bold;
        color: #000;
      }
    }
  }

  .my_query_box {
    position: absolute;
    top: 90px;
    left: 1px;
    z-index: 9;
    width: calc(100% - 2px);
    overflow: hidden;
    border-radius: 3px;
    box-shadow: 0 8px 8px 0 rgba(0, 0, 0, 0.1);

    .my_qurery {
      padding: 8px;
      background-color: #fff;
    }
  }

  .pa-0 {
    padding: 0 !important;
  }

  .pl-15 {
    padding-left: 10px !important;
  }

  .pl-20 {
    padding-left: 20px !important;
  }

  .ma-0 {
    margin: 0 !important;
  }

  .conter-max-height {
    max-height: calc(100vh - 170px);
  }

  .conter-min-height {
    min-height: calc(100vh - 170px);
  }

  .text-truncate {
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .fb-operating-btn {
    position: absolute;
    bottom: 10px;
    width: calc(100% - 20px);
    text-align: right;
  }

  .addprod {
    float: right;
    width: 20px;
    text-align: right;
    cursor: pointer;
  }

  .addproduct {
    width: 20px;
    margin-top: -4px;
    margin-left: 10px;
    text-align: right;
    cursor: pointer;
  }
</style>
