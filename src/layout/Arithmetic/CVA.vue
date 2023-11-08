<template>
	<div class="cvapage">
		<el-row :gutter="15">
			<el-col :span="8">
				<h2>WPS- CVA变化强度计算</h2>
				<el-divider></el-divider>
				<p>摘要：变化检测步骤之一，通过两期遥感影像进行变化强度计算。</p>
				<el-divider></el-divider>
				<el-collapse v-model="activeNames" accordion>
					<el-collapse-item title="Step1:  选择处理服务器； WebProcessingService" name="1">
						<el-autocomplete class="inline-input" v-model="state1" :fetch-suggestions="querySearch"
							placeholder="请输入内容" @select="handleSelect" style="width: 100%"></el-autocomplete>
					</el-collapse-item>
					<el-collapse-item title="Step2:   输入数据资源 Reference" name="2">
						<el-tabs type="border-card">
							<el-tab-pane label="引用数据">
								<p>前序影像</p>
								<el-input v-model="raster1" placeholder="请输入数据1"></el-input>
								<p>后序影像</p>
								<el-input v-model="raster2" placeholder="请输入数据2"></el-input>
							</el-tab-pane>
							<el-tab-pane label="上传数据">
								<el-upload class="upload-demo" drag action="https://jsonplaceholder.typicode.com/posts/"
									multiple>
									<i class="el-icon-upload"></i>
									<div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
									<div class="el-upload__tip" slot="tip">只能上传tif文件</div>
								</el-upload></el-tab-pane>
						</el-tabs>
					</el-collapse-item>

					<el-collapse-item title="Step3:  发布数据服务 DataService" name="3">
						<br />
						<!-- <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div> -->
						<el-switch v-model="value1" inactive-text="发布结果至地图："></el-switch>
					</el-collapse-item>
				</el-collapse>

				<el-divider></el-divider>
				<el-button type="primary" @click="Execute" :loading="fullscreenLoading">执行</el-button>

				<el-button @click="download">下载 </el-button>
			</el-col>

			<el-col :span="16">
				<el-tabs v-model="activeName" @tab-click="tabClick">
					<el-tab-pane label="地图显示" name="first">
						<div class="map">
							<base-ol-map v-bind:geoserverData="BaseMapData" @map="mapinfo"></base-ol-map>
						</div>
						<el-steps :active="2" align-center>
							<el-step title="数据准备" description="第一步，准备两期遥感影像，保持范空间围一致"></el-step>
							<el-step title="数据上传" description="第二步，将数据上传到服务器中，发布为数据服务"></el-step>
							<el-step title="服务执行" description="第三步，执行算法服务，计算两期图像变化强度"></el-step>
							<el-step title="结果显示" description="第四步，将结果发布为数据服务并显示在地图中"></el-step>
						</el-steps>
					</el-tab-pane>
					<el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>

					<el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
				</el-tabs>
			</el-col>
		</el-row>
	</div>
</template>
<script>
import BaseOlMap from '@/components/olmap.vue';
import mapconfg from '@/api/mapconfig.js';
import axios from 'axios';
import { getimage, postGeoData } from '@/api/getData.js';
export default {
	components: {
		BaseOlMap,
	},
	data() {
		return {
			labelPosition: 'left',
			formLabelAlign: {
				name: '',
				region: '',
				type: '',
			},
			geoserver: {
				ip: this.$cookies.get('gs_ip'),
				port: this.$cookies.get('gs_port'),
				workspace: this.$cookies.get('gs_workspace'),
				datastore: this.$cookies.get('gs_datastore'),
				username: this.$cookies.get('gs_username'),
				password: this.$cookies.get('gs_password'),
			},
			activeName: 'first',
			raster1: 'http://192.168.16.162:8080/ILCSData/aa.tif',
			raster2: 'http://192.168.16.162:8080/ILCSData/bb.tif',
			fullscreenLoading: false,
			resname: '',
			resurl: '',
			BaseMapData: {
				//传参给BaseMap
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
				RasterInfo: null, //栅格值
				layerStore: [],
			},
			activeNames: ['1'],
			WebProcessingService: [],
			state1: '',
			selectedService: '',
			value1: true,
		};
	},

	mounted() {
		this.WebProcessingService = this.loadAll();
		// this.InvokeProcessImage()
	},
	methods: {
		InvokeProcessImage(layers) {
			//改变传给BaseMap的值
			this.BaseMapData.workArea = 'GDSP';
			this.BaseMapData.layers = 'GDSP:' + this.removeSuffix(layers,'.tif');
		},
		removeSuffix(str, suffix) {
			if (str.endsWith(suffix)) {
				return str.slice(0, -suffix.length);
			}
			return str;
		},

		mapinfo(map) {
			//在父组件中设置图层列表
		},
		async PublishRes(ws, store_name, fileName) {
			var localpath = '/usr/local/apache-tomcat-9.0.34/webapps/ILCSData/' + fileName;
			// var localpath = '/Users/wanghaihang/Desktop/11114.tif'
			console.log(localpath);
			var res = '';
			const params = {
				ws: ws,
				store_name: store_name,
				fileName: localpath,
			};
			console.log(params);
			axios
				.post(
					'http://192.168.16.192:8086/geoserver/pubtif',
					{ geoserver: this.geoserver, path: localpath },
					{
						headers: {
							'Content-Type': 'application/json',
						},
					}
				)
				.then((res) => {
					console.log(res.data);
					this.InvokeProcessImage(fileName);
				});
			// res = await postGeoData(params);

			// console.log(res);
			// if (res.code == '0') {
			// 	this.$message(res.data);
			// 	this.InvokeProcessImage(fileName);
			// } else {
			// 	this.$message(res.data + ';' + res.type);
			// }
		},
		Execute() {
			this.openFullScreen1();
			var xml = this.MakeIntensityXML('org.n52.wps.server.algorithm.test.ImageProcess', this.raster1, this.raster2);
			this.RequestAxios(xml);
		},
		//请求算法
		RequestAxios(xml) {
			const hidemsg = this.$message('服务执行中..');

			var requestxml = xml;

			const _this = this;
			axios
				.post(
					this.selectedService,
					requestxml, //直接将xml放到此处
					{
						headers: {
							//根据接扣文档需要加的请求头
							'Content-Type': 'application/xml',
						},
					}
				)
				.then((res) => {
					console.log(res);
					if (res.data[0].code == 200) {
						_this.fullscreenLoading = false;

						_this.open('执行成功', '算法执行成功，结果保存在服务器文件中，输出结果：' + res.data[2].fileurl + res.data[1].filename);
						_this.resname = res.data[1].filename;
						_this.resurl = res.data[2].fileurl;

						if (_this.value1 == true) {
							_this.PublishRes('GDSP', _this.resname, _this.resname);
						}
					}
					// _this.ProcessImagePub(res.data[1].filename); //发布处理结果为wms服务
				})
				.catch(function (error) {
					setTimeout(hidemsg, 500); //关闭loadding
					console.log(error);
					// _this.$message.error(error.toString());
				});
		},
		MakeIntensityXML(Identifier, urlA, urlB) {
			var url = '"' + urlA + '" ';
			var url2 = '"' + urlB + '" ';
			var requestxml =
				'<?xml version="1.0" encoding="UTF-8" standalone="yes"?>' +
				'<wps:Execute service="WPS" version="1.0.0" xmlns:wps="http://www.opengis.net/wps/1.0.0" xmlns:ows="http://www.opengis.net/ows/1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.opengis.net/wps/1.0.0http://schemas.opengis.net/wps/1.0.0/wpsExecute_request.xsd">' +
				'<ows:Identifier>' +
				Identifier +
				'</ows:Identifier>' +
				'<wps:DataInputs>' +
				'<wps:Input>' +
				'<ows:Identifier xmlns:ns1="http://www.opengis.net/ows/1.1">source</ows:Identifier>' +
				'<wps:Reference xlink:href=' +
				url +
				'mimeType="image/tiff" />' +
				'</wps:Input>' +
				'<wps:Input>' +
				'<ows:Identifier xmlns:ns1="http://www.opengis.net/ows/1.1">source</ows:Identifier>' +
				'<wps:Reference xlink:href=' +
				url2 +
				'mimeType="image/tiff" />' +
				'</wps:Input>' +
				'</wps:DataInputs><wps:ResponseForm><wps:RawDataOutput  asReference="false" >' +
				'<ows:Identifier>literalOutput</ows:Identifier>' +
				'</wps:RawDataOutput>' +
				'</wps:ResponseForm>' +
				'</wps:Execute>';
			return requestxml;
		},

		openFullScreen1() {
			this.fullscreenLoading = true;
		},
		async download() {
			window.open('http://192.168.16.192:8085/ILCSData/'+this.resname);
		},
		open(title, content) {
			this.$alert(content, title, {
				confirmButtonText: '确定',
				callback: (action) => {
					this.$message({
						type: 'info',
						message: `action: ${action}`,
					});
				},
			});
		},
		tabClick(tab, event) {
			console.log(tab, event);
		},
		loadAll() {
			return [
				{ value: 'http://192.168.16.192:8085/wps/WebProcessingService', name: '山东水设服务器部署' },
				{ value: 'http://10.211.55.3:8083/wps/WebProcessingService', name: '虚拟机-项目启动' },
			];
		},
		querySearch(queryString, cb) {
			var WebProcessingService = this.WebProcessingService;
			var results = queryString ? WebProcessingService.filter(this.createFilter(queryString)) : WebProcessingService;
			// 调用 callback 返回建议列表的数据
			cb(results);
		},
		createFilter(queryString) {
			return (WebProcessingService) => {
				return WebProcessingService.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0;
			};
		},
		handleSelect(item) {
			console.log(item);
			this.selectedService = item.value;
		},
	},
};
</script>

<style>
.cvapage {
	margin: 2% 2% 2% 2%;
}
</style>
