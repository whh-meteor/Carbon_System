<template>
  <el-container>
    <el-header>
      <headtop></headtop>
    </el-header>
    <el-main>

      <splitpanes class="default-theme" horizontal :push-other-panes="false" style="height: 800px">
        <!-- <pane>
    <span>1</span>
  </pane> -->
        <pane>
          <splitpanes :push-other-panes="false">
            <pane>
              <span>2</span>
            </pane>
            <pane>
              <span>
                <BaseOlMap v-bind:geoserverData="BaseMapData" ></BaseOlMap>
              </span>
            </pane>
            <pane>
              <span>4</span>
            </pane>
          </splitpanes>
        </pane>
        <pane>
          <span>5</span>
        </pane>
      </splitpanes>

    </el-main>
  </el-container>
</template>

<script>
// In your Vue component.
import { Splitpanes, Pane } from 'splitpanes'
import 'splitpanes/dist/splitpanes.css'
import BaseOlMap from './Map.vue';
import headtop from "./HeadTop.vue"
export default {

  components: { Splitpanes, Pane, headtop, BaseOlMap },
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
    }

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

