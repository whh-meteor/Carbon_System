<template>
    <div class="collapse">
        <el-collapse v-model="activeNames" @change="handleChange">
    <el-collapse-item   name="1">
        <template slot="title">
            <i class="header-icon el-icon-document-copy"></i>    数据(Data)
    </template>
      <div></div>
    </el-collapse-item>
    <el-collapse-item  name="2">
        <template slot="title">
            <i class="header-icon el-icon-more"></i>     服务(Service)
    </template>
      <div></div>
      <div></div>
    </el-collapse-item>
    <el-collapse-item   name="3">
        <template slot="title">
            <i class="header-icon el-icon-stopwatch"></i> 执行(Execute)
    </template>
      <div></div>
      <div></div>
      <div></div>
    </el-collapse-item>
    <el-collapse-item  name="4">
        <template slot="title">
            <i class="header-icon el-icon-pie-chart"></i> 结果(Results)
    </template>
      <div></div>
      <div></div>
    </el-collapse-item>
  </el-collapse>
    </div>
</template>
  <script>
    export default {
      data() {
        return {
          activeNames: ['1']
        };
      },
      methods: {
        handleChange(val) {
          console.log(val);
        }
      }
    }
  </script>

  <style>
.collapse {
    margin: 5px 5px 5px 5px;
}
</style>