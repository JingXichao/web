<template>
  <div>
    <el-dialog
      :close-on-click-modal="false"
      :close-on-press-escape="false"
      :visible.sync="addProtoDialogVis"
      width="900px"
      top="10vh"
      @close="closeAddProtoDialogVis"
    >
      <div>11111</div>
      <div slot="footer" class="dialog-footer">
        <el-button @click="closeAddProtoDialogVis">关 闭</el-button>
        <el-button type="primary">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  export default {
    name: "ProtoDialog",
    data() {
      return {
        addProtoDialogVis: false,
      };
    },
    methods: {
      dialogShow() {
        this.addProtoDialogVis = true;
      },
      closeAddProtoDialogVis() {
        this.addProtoDialogVis = false;
      },
    },
  };
</script>

<style lang="scss" scoped></style>
