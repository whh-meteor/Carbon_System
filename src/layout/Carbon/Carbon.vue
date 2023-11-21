<template>
  <el-container>
    <el-header>
      <headtop></headtop>
    </el-header>
    <el-main>

    <mainpane></mainpane>

    </el-main>
  </el-container>
</template>

<script>

import headtop from "./HeadTop.vue"
import mainpane from "./MainPane.vue"
export default {

  components: { headtop, mainpane },
  name: "MapContainer",
  data() {
    return {
      map: null,
      activeIndex2: '1',
      BaseMapData: {//传参给BaseMap
        //加载WMS输入参数
        workArea: '',
        layers: '',
        //发布TIF参数
        ws2: '',
        store_layer2: '',
        tifUrl2: '',
        //绘制交互参数
        drawInterration: '',
        drawInterrationBinary: '',
        T1: '',
        T2: '',
        RasterInfo: null,//栅格值
        layerStore: [],
        changeMapHeight:''

      },
    
    };
  },
  methods: {


    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    

  },
  mounted() {

  }
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
}

#map {
  height: 700px;
  width: 100%;
}
</style>

