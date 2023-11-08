import Axios from "axios"


import TileArcGISRest from 'ol/source/TileArcGISRest'
import OSM from "ol/source/OSM"
import XYZ from 'ol/source/XYZ'

import Image from 'ol/layer/Image'
import ImageWMS from 'ol/source/ImageWMS'
import TileLayer from "ol/layer/Tile"
import { TileWMS } from 'ol/source'

import Draw, {
    createBox,
    createRegularPolygon,
} from 'ol/interaction/Draw';
import Map from 'ol/Map';
import Polygon from 'ol/geom/Polygon';
import View from 'ol/View';
import { Vector as VectorSource } from 'ol/source';

import { getRenderPixel } from 'ol/render';
/**
 * 地图加载函数
 * @returns 
 */
let maptype = 2 //0表示部署的离线瓦片地图，1表示OSM,2表示使用Arcgis在线午夜蓝地图服务
var streetmap = function(maptype) {
    var maplayer = null;
    switch (maptype) {
        case 0:
            maplayer = new TileLayer({
                name: "天地图",
                source: new XYZ({
                    url: 'https://t0.tianditu.gov.cn/DataServer?T=img_w&x={x}&y={y}&l={z}&tk=d6539c1747bf5296bfe35b02151d761a'

                })
            })
            break;
        case 1:
            maplayer = new TileLayer({
                name: 'OSM底图',
                source: new OSM()
            })
            break;
        case 2:
            maplayer = new TileLayer({
                name: "ArcGIS底图",
                source: new TileArcGISRest({
                    url: 'https://map.geoq.cn/ArcGIS/rest/services/ChinaOnlineCommunity/MapServer'
                })
            })
            break;


        case 6:
            maplayer = new TileLayer({
                name: '天地图注记',
                source: new XYZ({
                    crossOrigin: 'anonymous',
                    url: 'https://t0.tianditu.gov.cn/DataServer?T=cia_w&x={x}&y={y}&l={z}&tk=d6539c1747bf5296bfe35b02151d761a'
                })

            })

            break;


    }
    return [maplayer];
};


/**
 * 天地图注记
 */
var TianMapZJ = function() {

    var untiled = new TileLayer({
        name: '天地图注记',
        source: new XYZ({
            crossOrigin: 'anonymous',
            url: 'https://t0.tianditu.gov.cn/DataServer?T=cia_w&x={x}&y={y}&l={z}&tk=d6539c1747bf5296bfe35b02151d761a'
        })

    })

    return untiled

};
/**
 * 数据服务发布---执行后台发布程序
 * @param {工作区名} ws  
 * @param {存储图层名} store_layer   
 * @param {本地tif路径} tifUrl 
 */
var GeoDataPublish = function(ws, store_layer, tifUrl) {

    Axios.post("/wps/geoserver/pubtif?ws=" + ws + "&store_name=" + store_layer + "&fileName=" + tifUrl + "")
        .then(res => {
            console.log('数据服务发布成功！');

        })
        .catch(function(error) {
            alert('数据服务发布失败！');
        });

};


/**
 * 加载发布的tif图层
 * @param {工作区} workArea 
 * @param {图层：图层名} layers 
 * @returns 
 */
var LoadGeoserverLayer = function(workArea, layers) {
    console.log(layers)
    var layername;
    if (layers.indexOf("Strect") != -1) {
        //console.log('包含');
        layername = "二值图" + layers
    } else {
        layername = "WMS";
    }
    //输出结果：包含

    var baseurl = "http://192.168.16.162:7072/geoserver/"
    console.log(baseurl + workArea + "/wms");
    console.log(layers)
    var serverUrl = baseurl + workArea + "/wms";
    var untiled = new Image({
        name: layername,
        source: new ImageWMS({
            url: serverUrl,
            params: { 'LAYERS': layers, 'TILED': true },
            ratio: 1,
            FORMAT: "image/png",
            serverType: 'geoserver'
        })
    })
    console.log(untiled)
    return untiled

};

 
 
 
var mapconfig = {
    x: 115.064839, //中心点经度和纬度
    y: 25.548857,
    zoom: 6, //地图缩放级别
    streetmap: streetmap,
    TianMapZJ: TianMapZJ,
    GeoDataPublish: GeoDataPublish,
    LoadGeoserverLayer: LoadGeoserverLayer,
    

};

export default mapconfig