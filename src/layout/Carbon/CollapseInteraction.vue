<template>
  <div class="collapse">
    <div class="sidebar"> &nbsp; &nbsp;欢迎使用碳源汇在线服务!
      <div>
CASA模型是一种光能利用率概念模型，其主要考虑植被净初级产力是由植被所吸收的光合有效辐射和光能利用率两个驱动变量所决定。
</div></div>
<el-divider></el-divider>
    <el-collapse v-model="activeNames" @change="handleChange">
      <el-collapse-item name="1">
        <template slot="title">
          &nbsp; &nbsp;
          <i class="header-icon el-icon-document-copy"></i>&nbsp; 数据(Data)
        </template>
        <div>
          <div style="margin: 20px;"></div>
          <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
            <el-form-item label="NDVI">
              <div>
                <FIleDataUpload></FIleDataUpload>
              </div>

            </el-form-item>
            <el-form-item label="Landuse">
              <FIleDataUpload></FIleDataUpload>
              <el-input v-model="formLabelAlign.LandUseID" placeholder="请输入字段名"></el-input>
            </el-form-item>
            <el-form-item label="FPAR">
              <el-input v-model="formLabelAlign.type" placeholder="请输入FPARmin"></el-input>
              <el-input v-model="formLabelAlign.type" placeholder="请输入FPARmax"></el-input>
            </el-form-item>
            <el-form-item label="SOL(srad)">
              <FIleDataUpload></FIleDataUpload>
            </el-form-item>
            <el-form-item label="Tem">
              <FIleDataUpload></FIleDataUpload>
            </el-form-item>
            <el-form-item label="Ea">
              <FIleDataUpload></FIleDataUpload>
            </el-form-item>
            <el-form-item label="ε Max">
              <FIleDataUpload></FIleDataUpload>
            </el-form-item>
            <el-form-item label="Pre">
              <FIleDataUpload></FIleDataUpload>
            </el-form-item>
          </el-form>
        </div>
      </el-collapse-item>
      <el-collapse-item name="2">
        <template slot="title">
          &nbsp; &nbsp;
          <i class="header-icon el-icon-more"></i> &nbsp;服务(Service)
        </template>
        <ServicesChain></ServicesChain>
        <div></div>
      </el-collapse-item>
      <el-collapse-item name="3">
        <template slot="title">
          &nbsp; &nbsp;
          <i class="header-icon el-icon-stopwatch"></i> &nbsp;执行(Execute)
        </template>

        <el-progress type="circle" :percentage="25" width="100"></el-progress>
        <el-progress type="circle" :percentage="100" status="success" width="100"></el-progress>
        <el-progress type="circle" :percentage="70" status="warning" width="100"></el-progress>
        <el-progress type="circle" :percentage="50" status="exception" width="100"></el-progress>
        <div></div>
        <div></div>
      </el-collapse-item>
      <el-collapse-item name="4">
        <template slot="title">
          &nbsp; &nbsp;
          <i class="header-icon el-icon-pie-chart"></i> &nbsp;结果(Results)
        </template>
        <div> <el-result icon="success" title="执行成功" subTitle="">
            <template slot="extra">
              <el-button type="primary" size="medium">下载结果</el-button>
              <el-button type="" size="medium">结果分析</el-button>

            </template>
          </el-result></div>
        <div></div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>
<script>
import FIleDataUpload from './FIleDataUpload.vue';
import ServicesChain from './ServicesChain.vue';


export default {
  components: { ServicesChain, FIleDataUpload },
  data() {
    return {
      activeNames: ['0'],
      labelPosition: 'right',
      formLabelAlign: {
        name: '',
        region: '',
        type: ''
      }
    };
  },
  methods: {
    handleChange(val) {
      console.log(val);
    }
  },

}
</script>

<style>
.collapse {
  margin: 5px 5px 5px 5px;
}


.sidebar {
  position: relative;
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 10px;
  border-radius: 5px;
  background-color: #f8f9fa;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
.el-collapse-item__header{
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background-color: #f8f9fa;
  border-radius: 5px;
}
</style>