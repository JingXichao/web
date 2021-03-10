<template>
  <div>
    <el-table
      ref="myFbTable"
      :data="newTableData"
      :border="border"
      stripe
      style="width: 100%"
      :height="height || 'auto'"
      :highlight-current-row="highlightCurrentRow"
      :row-class-name="highlightCurrentRow ? 'my_row_clasee' : ''"
      @current-change="currentRow"
      @selection-change="selectionChange"
      @sort-change="sortChange"
    >
      <el-table-column
        v-if="btnGroup.isBtnShow"
        align="center"
        header-align="center"
        label="操作"
        fixed
        :width="36 * btnGroup.btnArr.length + 20"
      >
        <template slot-scope="scope">
          <el-button
            v-for="(item, index) in btnGroup.btnArr"
            :key="index"
            type="text"
            size="small"
            @click="benEvent(item.eventName, scope)"
          >
            {{ item.text }}
          </el-button>
        </template>
      </el-table-column>
      <el-table-column
        v-for="(item, index) in columns"
        :key="index"
        :prop="item.prop"
        :fixed="item.fixed"
        :label="item.label"
        :type="item.type"
        :width="item.width"
        :align="item.align || 'left'"
        :sortable="item.sortable || false"
        header-align="center"
        :show-overflow-tooltip="item.tooltip === '0' ? false : true"
      ></el-table-column>
    </el-table>
    <el-pagination
      v-if="tableData.total"
      :current-page="paginationData.Index || 1"
      :page-sizes="paginationData.pageSizes || [10, 20, 50, 100]"
      :page-size="paginationData.Size || 10"
      layout="total, sizes, prev, pager, next, jumper"
      :total="tableData.total"
      style="text-align: right"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    ></el-pagination>
  </div>
</template>

<script>
  export default {
    name: "FbTabel",
    props: {
      border: {
        type: Boolean,
        default: true,
      },
      highlightCurrentRow: {
        type: Boolean,
        default: false,
      },
      height: {
        type: [String, Number],
        default: "calc(100vh - 270px)",
      },
      btnGroup: {
        type: Object,
        default: () => {
          return {
            isBtnShow: false,
            btnArr: [],
          };
        },
      },
      tableData: {
        type: Object,
        default: () => {
          return {
            dataList: [],
          };
        },
      },
      columns: {
        type: Array,
        default: () => {
          return [];
        },
      },
      paginationData: {
        type: Object,
        default: () => {
          return {};
        },
      },
    },
    data() {
      return {};
    },
    computed: {
      newTableData() {
        let data = [];
        this.columns.forEach((column) => {
          if (column.isBoolean) {
            this.tableData.dataList.forEach((item) => {
              const newItem = item;
              for (let key in newItem) {
                if (key === column.prop) {
                  newItem[key] = newItem[key] ? "是" : "否";
                }
              }
              data.push(newItem);
            });
          }
        });
        if (data.length === 0) {
          data = this.tableData.dataList;
        }
        return data;
      },
    },
    created() {},
    mounted() {},
    methods: {
      benEvent(eventName, value) {
        this.$emit(eventName, value);
      },
      sortChange(val) {
        this.$emit("sortChange", val);
      },
      handleSizeChange(val) {
        this.$emit("handleSizeChange", val);
      },
      setCurrent(row) {
        this.$refs.myFbTable.setCurrentRow(row);
      },
      currentRow(val) {
        this.$emit("currentRow", val);
      },
      selectionChange(selection) {
        this.$emit("selectionChange", selection);
      },
      handleCurrentChange(val) {
        this.$emit("handleCurrentChange", val);
      },
    },
  };
</script>
<style lang="scss">
  .my_row_clasee {
    cursor: pointer;
  }
</style>
