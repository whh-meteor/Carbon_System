<template>
  <div :style="defaultHeightSide" class="pane">
    <splitpanes class="default-theme" horizontal :push-other-panes="false" :style="contentHeight" @resize="resize">

      <pane size="90">
        <splitpanes :push-other-panes="false" @resize="resize">
          <pane size="25">
   
            <collapse></collapse>

            <el-divider></el-divider>
      <el-button @click="hidePane2 = !hidePane2">{{ hidePane2 ? 'Show' : 'Hide' }} Pane 2</el-button>
            <el-button @click="hidePane3 = !hidePane3">{{ hidePane3 ? 'Show' : 'Hide' }} Pane 3</el-button>
          
          </pane>
          <pane size="50">
            <span>
              <BaseOlMap v-bind:geoserverData="BaseMapData"></BaseOlMap>
            </span>
          </pane>
          <pane size="25" v-if="!hidePane2">
            <span>
              <div class="sidebar">
                2022年逐月平均NPP
              </div>
              <div class="barcharts3d">
                <charts3dbar></charts3dbar>
              </div>
              <el-divider></el-divider>
              <div class="sidebar">
                反演结果与采样植被固碳量对比
              </div>
              
           <div>  <LineCharts></LineCharts></div>
            </span>
          </pane>
        </splitpanes>
      </pane>
      <pane size="10"  v-if="!hidePane3">
        <!-- <div class="sidebar">
                时间轴折线图
              </div> -->
<TimeChart></TimeChart>
      </pane>
     
    </splitpanes>

 



  </div>
</template>
<script>

// In your Vue component.
import { Splitpanes, Pane } from 'splitpanes'
import 'splitpanes/dist/splitpanes.css'
import BaseOlMap from './Map.vue';
import charts3dbar from "./3dCharts.vue"
import LineCharts from "./LineChats.vue"
import TimeChart from "./TimeCharts.vue"
import collapse from "./CollapseInteraction.vue"
export default {
  components: { Splitpanes, Pane, BaseOlMap, charts3dbar, collapse,LineCharts ,TimeChart},
  data() {
    return {

      baseurl: "http://172.31.41.229:8080",//data url


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
        changeMapHeight: '',
        GL30CHangeType: '',//选择变化类型


      },


      contentHeight: {
        height: '800px',
      },

      defaultHeightSide:'',
      hidePane2:'',
      hidePane3:''
    }
  },
  computed: {

  },
  mounted() { },
  created() {
    window.addEventListener('resize', this.getHeight)
    this.getHeight()
    //注册算法
    this.$axios.get("/wps/matlabalgorithm/getAll")
  },
  watch: {
    //监听折叠面板传值变化
    activeKey(key) {
      // console.log(key);
    },
    //当变化强度图像完成后执行 图像分割
    intensityExecuteFinish() {
      if (this.intensityExecuteFinish) {
        //  console.log("变化强度图像结果产生！执行下一步图像分割");
        this.ConsoleController("变化强度图像结果产生！执行下一步图像分割")
        //变化强度结果路径转为web url路径
        var intensityResultImageUrl4http = this.intensityResultImageUrl
        console.log(intensityResultImageUrl4http)
        //获取图像分割方法- identifier
        var ChangeIdentifier = this.changeName
        //获取XML 图像分割
        var ChangeXML = this.MakeChangeXML(ChangeIdentifier, intensityResultImageUrl4http)
        this.RequestAxios(ChangeXML)
      }

      this.intensityExecuteFinish = false

    },
    changeExecuteFinish() {
      if (this.changeExecuteFinish) {
        // console.log("图像分割结果产生！执行下一步图像拉伸2%");
        this.ConsoleController("图像分割结果产生！执行下一步图像拉伸2%")
        var changeResultImageUrl4http = this.changeResultImageUrl
        var StretchingIdentifier = "matlab.Stretching"
        var StretchingXML = this.MakeChangeXML(StretchingIdentifier, changeResultImageUrl4http)

        this.RequestAxios(StretchingXML)

        this.changeExecuteFinish = false
      }


    },
    ReductionExecuteFinish() {


      if (this.ReductionExecuteFinish) {
        //console.log("地表覆盖处理结果产生！执行下一步图像拉伸2%");
        this.ConsoleController("地表覆盖处理结果产生！执行下一步图像拉伸2%")
        var StretchingIdentifier = "matlab.Stretching"
        var StretchingXML = this.MakeChangeXML(StretchingIdentifier, this.ReductionResultImageUrl)

        this.RequestAxios(StretchingXML)
      }


      this.ReductionExecuteFinish = false


    }

  },
  methods: {


    getHeight() {
      this.defaultHeightSide.height = window.innerHeight + 'px'
      console.log("页面高度：" + this.defaultHeightSide.height)
    },

    resize() {
      this.contentHeight.height = window.innerHeight - 64 + 'px'
      console.log("操作台高度：" + this.contentHeight.height)


      this.BaseMapData.changeMapHeight = Math.random() / 1000000 + window.innerHeight - 64 + "px"

    },


    mapinfo(map) {

      //在父组件中设置图层列表

    },

  }



}

</script>
  
<style scoped>



.ant-layout {
  background: #fff;
}

.ant-layout-sider {
  background: #fff;
}

.textDivider {
  font-size: 10px !important;
  padding: 0px 2px !important;
}

.textDivider ::before {
  width: 100% !important;
  border-top: 2px solid #7a7676 !important;
}

.title-block {
  border-left: 6px solid #1890ff;
  background: #1890ff;
  padding: 4px;
  font-size: 14px;
  color: aliceblue;
  letter-spacing: 1px;
  height: 30px;
}

.sub-tit {
  font-size: 12px;
  padding: 2px 2px 2px 2px;
  margin-left: 5px;
}

.ant-layout-sider-children {
  /* height: 100%; */
  margin-top: -0.1px;
  padding-top: 0.1px;
  width: max-content !important;
}

.ant-layout-footer {
  padding: 10px 10px 10px 10px !important;
  font-size: 14px;
  background: #001529;
}

.foottext {
  text-align: center;
  color: aliceblue;
  font-size: 17px;
}

.ant-layout-footer {
  padding: 0 0 0 0 !important;
}

.ant-menu-dark.ant-menu-horizontal>.ant-menu-item,
.ant-menu-dark.ant-menu-horizontal>.ant-menu-submenu {
  top: 0;
  margin-top: 0;
  border-color: #001529;
  border-bottom: 0;
}

.ant-menu-dark .ant-menu-item,
.ant-menu-dark .ant-menu-item-group-title,
.ant-menu-dark .ant-menu-item>a {
  color: rgba(255, 255, 255, 1);
}

.ant-menu-item-active {
  background-color: rgb(24, 144, 255) !important;
}

/**左侧tab */
.tab-box {
  /* border: 1px solid #1890ff; */
  margin: 10px 20px 10px 20px;
  padding: 5px 20px 5px 20px;
  height: 135px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}

.tab-box>.ant-tabs-nav {
  padding-left: 30px !important;
}

.iconsa {
  margin-right: 6px;
  font-size: 20px;
}

.elformcard {
  margin: 10px 20px 10px 20px;
  padding-left: 30px;
  padding-top: 20px;

  box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.1);
}


.sidebar {
  margin-left: 5px;
  position: relative;
  margin-top: 20px;

  padding: 10px;
  border-radius: 5px;
  background-color: #f8f9fa;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.barcharts3d{
/* margin-top:-50px; */
margin-left: 20px;
}

.splitpanes__pane{
  overflow-y: scroll;
  
}
/**
**隐藏pane滚动条
**/
.splitpanes__pane::-webkit-scrollbar {
	display: none;
}
</style>