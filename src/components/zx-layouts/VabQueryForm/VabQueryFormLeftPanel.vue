<template>
  <el-col :xs="span" :sm="span" :md="span" :lg="span" :xl="span">
    <div class="left-panel">
      <slot></slot>
    </div>
  </el-col>
</template>

<script>
  export default {
    name: "VabQueryFormLeftPanel",
    props: {
      span: {
        type: Number,
        default: 14,
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
