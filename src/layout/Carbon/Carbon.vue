<template>
  <div id="root">
    <div id="map" ref="map"></div>
  </div>
</template>

<script>
import "ol/ol.css";
import {
  Map,
  View
} from "ol";
import {
  defaults as defaultControls,
  FullScreen,
  ScaleLine,
  ZoomSlider
} from "ol/control";
import TileLayer from "ol/layer/Tile";
import * as olProj from "ol/proj";
import XYZ from "ol/source/XYZ";

export default {
  components: {},
  name: "MapContainer",
  data() {
    return {
      map: null
    };
  },
  methods: {
    /**
     * 初始化一个 openlayers 地图
     */
    initMap() {
      this.map = new Map({
        target: "map", //绑定dom元素进行渲染
        layers: [
          new TileLayer({
            source: new XYZ({
              url: "https://wprd0{1-4}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&style=7&x={x}&y={y}&z={z}",
            }),
          }),

        ], //配置地图数据源
        view: new View({
          center: olProj.fromLonLat([108.945951, 34.465262]),
          zoom: 10,
        }), //配置地图显示的options配置（坐标系，中心点，缩放级别等）
        controls: defaultControls({
          zoom: true
        }).extend([])
      });
      this.map.addControl(new FullScreen());
      this.map.addControl(new ScaleLine());
      this.map.addControl(new ZoomSlider());
    },

  },
  mounted() {
    this.initMap();
  }
};
</script>

<style>
#map {
  height: 700px;
  width: 100%;
}
</style>

