<template>
  <div class="newApplyfor-container">
    <div class="newApplyfor-box">
      <el-form
        ref="applyforForm"
        :model="applyforForm"
        label-width="100px"
        label-position="left"
      >
        <div class="my_crad">
          <div class="box_header">申请信息</div>
          <div class="content">
            <el-row :gutter="20">
              <el-col :span="8">
                <el-form-item label="申请人">张三</el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="申请日期">2021-03-10</el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="申请单编号">提交后自动生成</el-form-item>
              </el-col>
            </el-row>
            <el-row :gutter="20">
              <el-col :span="8">
                <el-form-item label="预计寄回日期">
                  <el-date-picker
                    v-model="applyforForm.date"
                    type="date"
                    value-format="yyyy-MM-dd"
                    format="yyyy-MM-dd"
                    placeholder="选择日期"
                  ></el-date-picker>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row :gutter="20">
              <el-col :span="24">
                <el-form-item label="备注">
                  <el-input
                    v-model="applyforForm.remack"
                    type="textarea"
                    placeholder="请填写备注"
                  ></el-input>
                </el-form-item>
              </el-col>
            </el-row>
          </div>
        </div>
        <div class="my_crad">
          <div class="box_header">收货信息</div>
          <div class="content">
            <el-row :gutter="20">
              <el-col :span="8">
                <el-form-item label="目的地省份" prop="transferType">
                  <el-select
                    v-model="applyforForm.shenfen"
                    placeholder="请选择目的地省份"
                  >
                    <el-option
                      v-for="item in optionData"
                      :key="item.key"
                      :label="item.value"
                      :value="item.key"
                    ></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="目的地城市" prop="transferType">
                  <el-select
                    v-model="applyforForm.city"
                    placeholder="请选择目的地城市"
                  >
                    <el-option
                      v-for="item in optionData"
                      :key="item.key"
                      :label="item.value"
                      :value="item.key"
                    ></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="详细地址">
                  <el-input
                    v-model="applyforForm.address"
                    placeholder="请输入详细地址"
                  ></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row :gutter="20">
              <el-col :span="8">
                <el-form-item label="收件人姓名">
                  <el-input
                    v-model="applyforForm.address"
                    placeholder="请输入收件人姓名"
                  ></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="联系方式">
                  <el-input
                    v-model="applyforForm.address"
                    placeholder="请输入收件人联系方式"
                  ></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="预计到货日期">2021-03-13</el-form-item>
              </el-col>
            </el-row>
          </div>
        </div>
        <div class="my_crad">
          <div class="box_header">
            <span style="margin-right: 20px">样机明细</span>
            <span @click="$refs.protoDialog.dialogShow()">
              <el-button type="primary" size="mini">添加样机</el-button>
            </span>
          </div>
          <div class="content pa-0">
            <el-table
              ref="yangjiTable"
              :data="dataList"
              stripe
              border
              style="width: 100%"
            >
              <el-table-column
                align="left"
                header-align="center"
                label="操作"
                :width="56"
              >
                <template>
                  <!-- <template slot-scope="scope"> -->
                  <el-button type="text" size="small">删除</el-button>
                </template>
              </el-table-column>
              <el-table-column
                align="left"
                header-align="center"
                label="机器型号"
                prop="name"
              ></el-table-column>
              <el-table-column
                align="left"
                header-align="center"
                label="机器类型"
                prop="name"
              ></el-table-column>
              <el-table-column
                align="left"
                header-align="center"
                label="序列号"
                prop="name"
              ></el-table-column>
              <el-table-column
                align="left"
                header-align="center"
                label="预计到货日期"
                prop="name"
              ></el-table-column>
              <el-table-column
                align="left"
                header-align="center"
                label="用途"
                prop="name"
              ></el-table-column>
            </el-table>
          </div>
        </div>
      </el-form>
      <div class="fb-operating-btn">
        <el-button type="primary" small>保存</el-button>
        <el-button type="primary" small>提交</el-button>
      </div>
    </div>
    <proto-dialog ref="protoDialog" />
  </div>
</template>

<script>
  import protoDialog from "./compontent/protoDialog.vue";
  export default {
    name: "NewApplyfor",
    components: { protoDialog },
    data() {
      return {
        optionData: [],
        applyforForm: { remack: "", shenfen: "", city: "", address: "" },
        dataList: [],
      };
    },
  };
</script>

<style lang="scss" scoped></style>
