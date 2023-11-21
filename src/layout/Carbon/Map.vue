<template>
    <div>
      <div id="map" ref="rootmap" :style="mapStyle">
        <div class="swipebox">
          <!-- <input id="swipe" type="range" /> -->
        </div>
      </div>
    </div>
  </template>
   
  <script>
  import "ol/ol.css"
  import { Map, View } from "ol"
  import mapconfig from '@/api/mapconfig'
  import { getRenderPixel } from 'ol/render';
  import { Tile as TileLayer, Vector as VectorLayer } from 'ol/layer';
  import { OSM, Vector as VectorSource } from 'ol/source';
  import { Circle as CircleStyle, Fill, Stroke, Style } from 'ol/style';
  import GeoJSON from 'ol/format/GeoJSON';
  import Draw, {
    createBox,
    createRegularPolygon,
  } from 'ol/interaction/Draw';
  
  //添加绘制矩形图层
  
  
  import TileWMS from "ol/source/TileWMS";
  
  import { defaults as defaultControls } from "ol/control";
  import ZoomSlider from "ol/control/ZoomSlider";
  
  import Geometry from 'ol/geom/Geometry';
  import WFS from 'ol/format/WFS'
  
  import { intersects } from 'ol/format/filter';
  
  import { equalTo } from 'ol/format/filter';
  
  import OlExtLayerSwitcher from 'ol-ext/control/LayerSwitcher'
//   import { controls } from "./controls.js";
  export default {
  
    props: ['geoserverData'],
    data () {
      return {
        map: null,
        mapStyle: {
          height: '500px',
          width: '100%',
  
        },
        wmsLayer: null,
        baseimageLayer: null,
        gl30: null,
        a: 1,
        draw: null,
        layerbox: '',
        getinfolayer: null,
        M1: null,
        M2: null,
        T1: null,
        T2: null
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
      this.map.addLayer(mapconfig.TianMapZJ())
    //   this.map.addLayer(mapconfig.LoadGlobeLand30To2020());
      //图层管理器
      const ctrl = new OlExtLayerSwitcher({
        collapsed: true,
        trash: true,
      });
      this.map.addControl(ctrl);
      this.map2Parent()
      //设置显示两个滑动地图
    //   controls.swipe.addLayer(mapconfig.LoadGlobeLand30To2020());
    //   controls.swipe.addLayer(mapconfig.LoadGlobeLand30To2000(), true);
    },
    created () {
  
  
  
    },
    watch: {
      //监听geoserver传值变化
      geoserverData: {
        deep: true,  // 深度监听
        handler (newVal, oldVal) {
  
  
          if (newVal.workArea) {
            //加载底图
            if (this.a == 1) {
              this.baseimageLayer = mapconfig.LoadGeoserverLayer(newVal.workArea, newVal.layers);//执行加载WMS图层并返回layer
              this.map.addLayer(this.baseimageLayer);//在地图容器中装在layers
              this.a = 2;
            }
            //加载卷帘图
            if (this.a == 2) {
              this.wmsLayer = mapconfig.LoadGeoserverLayer(newVal.workArea, newVal.layers);//执行加载WMS图层并返回layer
              this.map.addLayer(this.wmsLayer);//在地图容器中装在layers
  
            }
  
            this.map2Parent()
            /**
             * 参数：卷积图层
             */
            //  this.SwipeMap(this.wmsLayer)
          }
          //发布到geoserver
          if (newVal.ws2 != '' && newVal.store_layer2 != '' && newVal.tifUrl2 != '') {
  
            mapconfig.GeoDataPublish(newVal.ws2, newVal.store_layer2, newVal.tifUrl2);//执行TIF 发布并返回状态
          }
          //绘制监听
          if (newVal.drawInterrationBinary) {
  
            if (this.T1 != null && this.T2 != null) { this.drawbox("GuiZhou") } else {
              this.$message.error('请选择时间！');
  
            }
          }
          //绘制监听
          if (newVal.drawInterration) {
  
  
            if (this.T1 != null && this.T2 != null) {
              this.drawbox(newVal.GL30CHangeType)
  
            } else {
              this.$message.error('请选择时间！');
  
            }
  
  
          }
          //时间-T1-T2
          if (newVal.T1 != '' && newVal.T2 != "") {
            this.T1 = newVal.T1;
            this.T2 = newVal.T2;
          }
          //时间-T1-T2
          if (newVal.T1 != '' && newVal.T2 != "") {
            this.T1 = newVal.T1;
            this.T2 = newVal.T2;
          }
          //改变地图宽高
          if (newVal.changeMapHeight) {
  
            this.mapStyle.height = newVal.changeMapHeight
            // console.log("地图容器高度" + this.mapStyle.height)
            //更新地图大小 撑满div容器
            this.map.updateSize()
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
      SwipeMap (uplayers) {
        let _this = this;
  
        const swipe = document.getElementById('swipe');
        var wms = uplayers;//上层图像
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
      },
      //绘制矩形
      drawbox (area) {
        this.layerbox = new VectorLayer({
          name: "区域选择",
          source: new VectorSource(),
          style: new Style({
            stroke: new Stroke({
              color: "red",
              width: 2,
            }),
            fill: new Fill({
              color: "rgba(255, 255, 255, 0.8)",
            }),
          }),
        })
        //this.map.addLayer(this.layerbox);// 绘制的矩形框layers
        var draw = this.draw
        draw = new Draw({
          source: this.layerbox.getSource(),
          type: 'Circle',//矩形绘制
          // type: 'Polygon',//多边形绘制
          geometryFunction: createBox()
        });
  
        this.map.addInteraction(draw)
        var _map = this.map
        let that = this
        draw.on('drawend', function (e) {
  
          // var geom = e.feature.getGeometry();//拿到绘制图形的geometry
          _map.removeInteraction(draw);//移除绘制状态，一次只绘制一个图形						
          let featureGeoJson = JSON.parse(new GeoJSON().writeFeature(e.feature));//将绘制图层转为geojson
          // console.log(featureGeoJson.geometry.coordinates[0]);
          //计算矩形框的中心坐标
          var coorX = (featureGeoJson.geometry.coordinates[0][0][0] + featureGeoJson.geometry.coordinates[0][2][0]) / 2;
          var coorY = (featureGeoJson.geometry.coordinates[0][0][1] + featureGeoJson.geometry.coordinates[0][2][1]) / 2;
          //console.log(coorX + "," + coorY)
          //单个栅格属性值查询
          // var coordinate = [coorX, coorY]
          // that.getwmsinfo(coordinate)
          /**
                  * 查询wfs
                  * 
                  */
          var feature = e.feature;
          var extent = feature.getGeometry().getExtent();
          var polygon = null;
          if (extent && extent.length > 0) {
            //构造polygon
            polygon = '';
            polygon += extent[0] + ',' + extent[1] + ' ';
            polygon += extent[0] + ',' + extent[3] + ' ';
            polygon += extent[2] + ',' + extent[3] + ' ';
            polygon += extent[2] + ',' + extent[1] + ' ';
            polygon += extent[0] + ',' + extent[1] + ' ';
          }
  
          that.quertwfs(polygon, feature, area)
          _map.removeLayer(this.layerbox)
        })
  
      },
  
      quertwfs (polygon, feature, area) {
        const vectorSource = new VectorSource();
        const vector = new VectorLayer({
          source: vectorSource,
          name: "渔网索引",
          style: new Style({
            stroke: new Stroke({
              color: 'rgba(0, 0, 255, 1.0)',
              width: 2,
            }),
          }),
        });
        var workspace = 'GL30ZheJiangShp'
        var LayerName = 'GL30ZheJiangShp'
        if (area == "GuiZhou") {
          workspace = 'GL30GuiZhouShp'
          LayerName = 'GL30GuiZhouShp'
        } else if (area == "Artifical") {
          workspace = 'GL30ZheJiangShp'
          LayerName = 'GL30ZheJiangShp'
        }
  
        var featureRequest = new WFS().writeGetFeature({
          srsName: 'EPSG:4326',//坐标系
          // 注意这个值必须为创建工作区时的命名空间URI---！！！！此处为geoserver定义的值 ip不修改！！！！
          featureNS: 'http://localhost/' + workspace,
          featurePrefix: workspace,//工作区的名称
          featureTypes: [LayerName],//所要访问的图层
          maxFeatures: 5000,
          outputFormat: 'application/json',
          filter: intersects('the_geom', feature.getGeometry())
        });
  
  
  
  
        var that = this
        fetch('http://172.31.41.229:8089/geoserver/wfs', {
          method: 'POST',
          body: new XMLSerializer().serializeToString(featureRequest),
        })
          .then(function (response) {
            console.log(response)
            return response.json()
  
          })
          .then(function (json) {
  
            const features = new GeoJSON().readFeatures(json);
            vectorSource.addFeatures(features);
            that.map.getView().fit(vectorSource.getExtent());
  
            that.map.addLayer(vector)
  
            that.AddMoreWmsLayers(features, area)
          }).catch(function (e) {
            that.$emit('consoleInfoMap', "ERROR:该区域无数据！")
          });
      },
      AddMoreWmsLayers (features, area) {
  
        var selectNumer = [];
        var downloadName = [];
        for (var i = 0; i < features.length; i++) {
          var selctIndex = features[i].values_.select
  
  
          var wmscount = features.length
  
          console.log(selctIndex)
  
          if (area == "GuiZhou") {
  
  
            selctIndex = selctIndex - 520
  
            selectNumer[i] = selctIndex
  
            this.map.addLayer(mapconfig.GL30GuiZhou(this.T1, this.T2, selctIndex));//在地图容器中装在layers
  
            downloadName[i] = "guizhou_" + this.T1 + "_" + this.T2 + "_binaryS_" + selctIndex + ".tif"
  
            // this.SwipeMap(mapconfig.GL30GuiZhou(this.T2, selctIndex))
  
  
          }
          else if (area == 'Artifical') {
  
  
  
            selctIndex = selctIndex - 330
  
            selectNumer[i] = selctIndex
            this.map.addLayer(mapconfig.GL30Articial(this.T1, selctIndex));//在地图容器中装在layers
  
            this.map.addLayer(mapconfig.GL30Articial(this.T2, selctIndex));//在地图容器中装在layers
          }
          else {
            selctIndex = selctIndex - 330
  
            selectNumer[i] = selctIndex
  
            this.map.addLayer(mapconfig.GL30ZheJiang(this.T1, selctIndex));//在地图容器中装在layers
  
            this.map.addLayer(mapconfig.GL30ZheJiang(this.T2, selctIndex));//在地图容器中装在layers
            // this.SwipeMap(mapconfig.GL30ZheJiang(this.T2, selctIndex))
  
  
          }
          var info = [wmscount, selectNumer]
  
          this.$emit('getRasterInfo', info)
  
  
  
        }
        // var info = [wmscount, selectNumer]
  
        // this.$emit('getRasterInfo', info)
  
        var DownLoadLayer = []
        DownLoadLayer[i] = downloadName
        this.$emit('downBinartTif', DownLoadLayer)
  
      },
      getwmsinfo (coordinate) {
  
        var that = this
        //获得哪个图层的info
        this.getinfolayer = mapconfig.GL30ZheJiangIndex()
        // this.map.on("singleclick", (e) => {
        var viewResolution = this.map.getView().getResolution();
  
        var url = this.getinfolayer
          .getSource()
          .getFeatureInfoUrl(coordinate, viewResolution, "EPSG:4326", {
            // INFO_FORMAT: "text/html", //输出为HTML字符串
            INFO_FORMAT: "application/json", //输出为json字符串
          });
  
        if (url) {
          fetch(url)
            .then(function (res) {
              return res.text(); //返回Promise
            })
            .then((data) => {
              let objData = JSON.parse(data);
  
  
              var value = objData.features[0].properties.GRAY_INDEX;
              this.$emit('getRasterInfo', value - 330)
              //如果属性存在 加载地图  （模拟查询）--单个瓦片查询
              //浙江省-330 区别省份
              // that.M1 = mapconfig.GL30ZheJiang(this.T1, value - 330)
              // that.map.addLayer(that.M1);//在地图容器中装在layers
              // that.M2 = mapconfig.GL30ZheJiang(this.T2, value - 330)
              // that.map.addLayer(that.M2);//在地图容器中装在layers
              // that.SwipeMap(that.M2)
  
            });
        }
        // });
  
      },
  
  
  
    }
  };
  </script>
   
  <style>
  /* #map {
    height: 500px;
    width: 100%;
  } */
  /*隐藏ol的一些自带元素*/
  .ol-attribution,
  .ol-zoom {
    display: block;
  }
  .swipebox {
    position: absolute;
    top: 550px;
    right: 0px;
    z-index: 999;
  }
  </style>