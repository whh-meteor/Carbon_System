<template>
    <div>
      <div id="map" ref="rootmap"></div>
      <input id="swipe" type="range" style="width: 100%" />
    </div>
  </template>
   
  <script>
  import "ol/ol.css"
  import { Map, View } from "ol"
  import mapconfig from '@/api/mapconfig'
  import { getRenderPixel } from 'ol/render';
  
  export default {
  
    props: ['geoserverData'],
    data () {
      return {
        map: null,
        wmsLayer: null,
        baseimageLayer: null,
        a: 1
      };
    },
    mounted () {
  
      var mapcontainer = this.$refs.rootmap;
      this.map = new Map({
        target: mapcontainer,
        layers: mapconfig.streetmap(0),
        view: new View({
          projection: "EPSG:4326",    //使用这个坐标系
          center: [mapconfig.x, mapconfig.y],  //深圳
          zoom: mapconfig.zoom
        })
      });
  
      this.map2Parent()
  
  
    },
    created () {
  
    },
    watch: {
      //监听geoserver传值变化
      geoserverData: {
        deep: true,  // 深度监听
        handler (newVal, oldVal) {
  
          if (newVal.workArea) {
  
            if (this.a == 1) {
              this.baseimageLayer = mapconfig.LoadGeoserverLayer(newVal.workArea, newVal.layers);//执行加载WMS图层并返回layer
              this.map.addLayer(this.baseimageLayer);//在地图容器中装在layers
              this.a = 2;
            }
            if (this.a == 2) {
              this.wmsLayer = mapconfig.LoadGeoserverLayer(newVal.workArea, newVal.layers);//执行加载WMS图层并返回layer
              this.map.addLayer(this.wmsLayer);//在地图容器中装在layers
  
            }
  
            this.map2Parent()
            this.SwipeMap()
          }
  
          if (newVal.ws2 != '' && newVal.store_layer2 != '' && newVal.tifUrl2 != '') {
  
            mapconfig.GeoDataPublish(newVal.ws2, newVal.store_layer2, newVal.tifUrl2);//执行TIF 发布并返回状态
          }
  
        }
      }
    },
    methods: {
      map2Parent () {
        // 向父组件传递map
        this.$emit("map", this.map);
      },
      //卷帘
      SwipeMap () {
        let _this = this;
        const swipe = document.getElementById('swipe');
        var wms = this.wmsLayer;
        wms.on('prerender', function (event) {
          const ctx = event.context;
          const mapSize = _this.map.getSize();
          const width = mapSize[0] * (swipe.value / 100);
          const tl = getRenderPixel(event, [width, 0]);
          const tr = getRenderPixel(event, [mapSize[0], 0]);
          const bl = getRenderPixel(event, [width, mapSize[1]]);
          const br = getRenderPixel(event, mapSize);
  
          ctx.save();
          ctx.beginPath();
          ctx.moveTo(tl[0], tl[1]);
          ctx.lineTo(bl[0], bl[1]);
          ctx.lineTo(br[0], br[1]);
          ctx.lineTo(tr[0], tr[1]);
          ctx.closePath();
          ctx.clip();
        });
        wms.on('postrender', function (event) {
          const ctx = event.context;
          ctx.restore();
        });
  
        const listener = function () {
          _this.map.render();
        };
        swipe.addEventListener('input', listener);
        swipe.addEventListener('change', listener);
      }
    }
  };    
  </script>
   
  <style>
  #map {
    height: 400px;
    width: 100%;
  }
  /*隐藏ol的一些自带元素*/
  .ol-attribution,
  .ol-zoom {
    display: block;
  }
  </style>