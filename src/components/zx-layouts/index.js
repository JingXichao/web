module.exports = {
  webpackBarName: "vue-admin-beautiful",
  webpackBanner:
    " build: vue-admin-beautiful \n copyright: chuzhixin 1204505056@qq.com \n time: ",
  donationConsole() {
    const chalk = require("chalk");
    console.log(
      chalk.green(
        `* 欢迎使用vue-admin-beautiful（开源地址：https://github.com/chuzhixin/vue-admin-beautiful）`
      )
    );
    console.log(
      chalk.green(`* 使用中出现任何问题可加QQ群反馈（群号：972435319）`)
    );
    console.log(
      chalk.green(`* 商务合作、VIP文档、pro授权版（QQ：1204505056）`)
    );
    console.log(
      chalk.green(
        `* 捐赠（https://chu1204505056.gitee.io/byui-bookmarks/img/donation.png）`
      )
    );
    console.log(
      chalk.green(`*** 如果您不希望显示以上信息，可在设置中配置关闭 ***`)
    );
    console.log("\n");
  },
};
