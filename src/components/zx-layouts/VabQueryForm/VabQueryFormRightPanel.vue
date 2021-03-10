<template>
  <el-col :xs="span" :sm="span" :md="span" :lg="span" :xl="span">
    <div class="right-panel">
      <slot></slot>
    </div>
  </el-col>
</template>

<script>
  export default {
    name: "VabQueryFormRightPanel",
    props: {
      span: {
        type: Number,
        default: 10,
      },
    },
    data() {
      return {};
    },
    created() {},
    mounted() {},
    methods: {},
  };
</script>
