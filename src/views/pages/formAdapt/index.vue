<template>
	<div class="form-adapt-container">
		<el-card shadow="hover" header="水利算法服务发布">
			<el-form :model="form" size="small" :rules="rules" ref="form" label-width="100px">
				<el-row :gutter="35">
					<el-col :xs="24" :sm="12" :md="8" :lg="6" :xl="4" class="mb20">
						<el-form-item label="服务名称" prop="name">
							<el-input v-model="form.name" placeholder="请输入名称" clearable></el-input>
						</el-form-item>
					</el-col>
					<el-col :xs="24" :sm="12" :md="8" :lg="6" :xl="4" class="mb20">
						<el-form-item label="算法类型">
							<el-select v-model="form.type" placeholder="请选择类型">
								<el-option label="MATLAB" value="1"></el-option>
								<el-option label="Python" value="2"></el-option>
							</el-select>
						</el-form-item>
					</el-col>
					<el-col :xs="24" :sm="12" :md="8" :lg="6" :xl="4" class="mb20">
						<el-form-item label="服务状态">
							<el-select v-model="form.staus" placeholder="请选择状态">
								<el-option label="公有" value="1"></el-option>
								<el-option label="私有" value="2"></el-option>
							</el-select>
						</el-form-item>
					</el-col>
				</el-row>
				<el-row :gutter="35">
					<el-col :xs="24" :sm="12" :md="8" :lg="12" :xl="4" class="mb20">
						<el-form-item label="服务器" prop="">
							<!-- <el-input v-model="form.field" placeholder="请输入行业名称" clearable></el-input> -->
							<el-autocomplete class="inline-input" v-model="state1" :fetch-suggestions="querySearch"
								placeholder="请输入内容" @select="handleSelect" style="width: 100%"></el-autocomplete>
						</el-form-item>
					</el-col>

				</el-row>
				<el-row :gutter="35">
					<el-col :xs="24" :sm="12" :md="8" :lg="16" :xl="4" class="mb20">
						<!-- <el-form-item label="算法上传">
							<el-upload class="upload-demo" ref="upload" drag
								action="https://jsonplaceholder.typicode.com/posts/" :auto-upload="false" :limit="1"
								:on-error="handError" :before-upload="handleBeforeUpload" :on-success="handleBeforeUpload">
								<i class="el-icon-upload"></i>
								<div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
						 
							</el-upload>
						</el-form-item> -->
						<el-form-item label="算法上传">
							<el-upload class="upload-demo" ref="upload"
								action="http://192.168.16.192:8086/file/upload2server" :on-preview="handlePreview"
								:on-remove="handleRemove" :on-change="handleChange" :file-list="fileList"
								:auto-upload="false">
								<el-button slot="trigger" size="small" type="primary">选取文件</el-button>
								<el-button style="margin-left: 10px;" size="small" type="success"
									@click="submitUpload">上传到服务器</el-button>
								<el-button style="margin-left: 10px;" size="small" type="info"
									@click="downloadexample">下载示例</el-button>
								<div slot="tip" class="el-upload__tip">只能上传.jar/.py文件</div>
							</el-upload>
						</el-form-item>
					</el-col>


				</el-row>
				<el-row :gutter="35">
					<el-col :xs="24" :sm="12" :md="8" :lg="16" :xl="4" class="mb20">
						<el-form-item label="参数配置">


							<el-tabs v-model="activeName" @tab-click="handleClick" tab-position="right" type="border-card">
								<el-tab-pane label="文件参数" name="first">
									<el-form :model="dynamicValidateForm" ref="dynamicValidateForm" label-width="100px"
										class="demo-dynamic">
										<el-form-item label="方法名">
											<el-input v-model="dynamicValidateForm.methodsName"></el-input>
										</el-form-item>
										<el-form-item v-for="(domain, index) in dynamicValidateForm.domains"
											:label="'文件' + index" :key="domain.key" :prop="'domains.' + index + '.value'"
											:rules="{
												required: true, message: '·', trigger: 'blur'
											}">
											<el-input v-model="domain.value"></el-input><el-button
												@click.prevent="removeDomain(domain)" size="mini">删除</el-button>
										</el-form-item>
										<el-form-item>
											<el-button type="primary"
												@click="submitForm('dynamicValidateForm')">提交</el-button>
											<el-button @click="addDomain">新增</el-button>
											<el-button @click="resetForm('dynamicValidateForm')">重置</el-button>
										</el-form-item>
									</el-form>

								</el-tab-pane>
								<el-tab-pane label="数值参数" name="second">
									<el-form :model="dynamicValidateForm2" ref="dynamicValidateForm2" label-width="100px"
										class="demo-dynamic">

										<el-form-item v-for="(domain, index) in dynamicValidateForm2.domains"
											:label="'参数' + index" :key="domain.key" :prop="'domains.' + index + '.value'"
											:rules="{
												required: true, message: '·', trigger: 'blur'
											}">
											<el-input v-model="domain.value"></el-input><el-button
												@click.prevent="removeDomain2(domain)" size="mini">删除</el-button>
										</el-form-item>
										<!-- <el-form-item  label="输出路径" >
											<el-input v-model="dynamicValidateForm.outpath"></el-input>
										</el-form-item> -->
										<el-form-item>
											<el-button type="primary"
												@click="submitForm('dynamicValidateForm2')">提交</el-button>
											<el-button @click="addDomain2">新增</el-button>
											<el-button @click="resetForm('dynamicValidateForm2')">重置</el-button>
										</el-form-item>
									</el-form>

								</el-tab-pane>
								<el-tab-pane label="配置参数" name="fourth">

									<el-form :model="dynamicValidateForm3" ref="dynamicValidateForm" label-width="100px"
										class="demo-dynamic">
										<el-form-item label="算法名称">
											<el-input v-model="dynamicValidateForm3.algorithmName"></el-input>
										</el-form-item>
										<el-form-item label="方法名称">
											<el-input v-model="dynamicValidateForm3.methodName"></el-input>
										</el-form-item>
										<el-form-item label="算法路径">
											<el-input v-model="dynamicValidateForm3.algorithmPath"></el-input>
										</el-form-item>
										<el-form-item label="数据路径">
											<el-input v-model="dynamicValidateForm3.dataPath"></el-input>
										</el-form-item>
										<el-form-item label="响应路径">
											<el-input v-model="dynamicValidateForm3.responsePath"></el-input>
										</el-form-item>

									</el-form>

								</el-tab-pane>

							</el-tabs>


						</el-form-item>

					</el-col>


				</el-row>
				<el-row :gutter="35">
					<el-col :xs="24" :sm="12" :md="8" :lg="16" :xl="4" class="mb20">
						<el-form-item label="描述信息">
							<el-input type="textarea" v-model="form.description" placeholder="请输入描述信息" clearable></el-input>
						</el-form-item>
					</el-col>
				</el-row>
				<el-row :gutter="35">
					<el-col :xs="24" :sm="12" :md="8" :lg="12" :xl="4" class="mb30">
						<el-form-item label="关键字">
							<el-input v-model="form.keywords" placeholder="请输入关键字" clearable></el-input>
						</el-form-item>
					</el-col>
				</el-row>
				<el-row :gutter="35">
					<el-col :span="22" :offset="20">
						<el-button type="primary" class="btnPub" @click="publish('form')"> 服务发布 </el-button>
						<el-button   class="btnPub" @click="downloadResult()"> 下载结果 </el-button>
					</el-col>
				</el-row>
			</el-form>
		</el-card>
	</div>
</template>

<script>
import axios from 'axios';
export default {
	name: 'pagesFormAdapt',
	data() {
		return {
			form: {
				type: '1',
				staus: '1',
			},
			dialogImageUrl: '',
			dialogVisible: false,
			rules: {
				name: [
					{
						required: true,
						message: '服务名称不能为空！',
						trigger: 'blur',
					},
				],server: [
					{
						required: true,
						message: '服务器地址不能为空！',
						trigger: 'blur',
					},
				],
			},
			activeName: 'first',
			dynamicValidateForm: {
				domains: [{
					value: ''
				}],
				methodsName: 'org.n52.wps.server.algorithm.SelfAdaptation'
			},
			dynamicValidateForm2: {
				domains: [{
					value: ''
				}],
				outpath: '/opt/upload/'
			},
			dynamicValidateForm3: {

				algorithmName: '',
				methodName: '',
				algorithmPath: '',
				dataPath: '/usr/local/apache-tomcat-9.0.34/webapps/ILCSData/',
				responsePath: 'http://192.168.16.192:8085/ILCSData/'
			},
			dynamicValidateForm4: {
				domains: [{
					value: ''
				}]
			},
			state1: '',
			WebProcessingService: [],
			fileList: [
			],
			selectedService: '',
			resname:''
		};
	},
	mounted() {
		this.WebProcessingService = this.loadAll();
	},
	methods: {
		removeSuffix(inputString) {
			// 使用正则表达式将 "k_.jar" 后缀替换为空字符串
			return inputString.replace(/.jar$/, '');
		},

		submitForm(formName) {
			this.$refs[formName].validate((valid) => {
				if (valid) {
					alert('submit!');

				} else {
					console.log('error submit!!');
					return false;
				}
			});
		},
		resetForm(formName) {
			this.$refs[formName].resetFields();
		},
		removeDomain(item) {
			console.log(item)
			var index = this.dynamicValidateForm.domains.indexOf(item)
			if (index !== -1) {
				this.dynamicValidateForm.domains.splice(index, 1)
			}
		},
		removeDomain2(item) {
			console.log(item)
			var index = this.dynamicValidateForm2.domains.indexOf(item)
			if (index !== -1) {
				this.dynamicValidateForm2.domains.splice(index, 1)
			}
		},
		addDomain() {
			this.dynamicValidateForm.domains.push({
				value: '',
				key: Date.now()
			});
		},
		addDomain2() {
			this.dynamicValidateForm2.domains.push({
				value: '',
				key: Date.now()
			});
		},
		addDomain3() {
			this.dynamicValidateForm3.domains.push({
				value: '',
				key: Date.now()
			});
		},

		publish(formName) {
			this.$refs[formName].validate((valid) => {
				if (valid) {
					// this.$refs.upload.submit();

					var xml = this.MakeIntensityXML(this.dynamicValidateForm, this.dynamicValidateForm2, this.dynamicValidateForm3)
					this.RequestAxios(xml)


				}
			});
		},
		MakeIntensityXML(fileParams, LiteralParams, configParams) {
			var requestxml = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>' +
				'<wps:Execute service="WPS" version="1.0.0" xmlns:wps="http://www.opengis.net/wps/1.0.0" xmlns:ows="http://www.opengis.net/ows/1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.opengis.net/wps/1.0.0 http://schemas.opengis.net/wps/1.0.0/wpsExecute_request.xsd">' +
				'<ows:Identifier>' + fileParams.methodsName + '</ows:Identifier>' +
				'<wps:DataInputs>' +
				this.makeFilePathXml(fileParams) +
				this.makeLiteralXML(LiteralParams) +
				this.markCongigXML(configParams) +
				'</wps:DataInputs>' +
				'<wps:ResponseForm><wps:RawDataOutput  asReference="false" >' +
				'<ows:Identifier>literalOutput</ows:Identifier>' +
				'</wps:RawDataOutput>' +
				'</wps:ResponseForm>' +
				'</wps:Execute>'
			return requestxml
		},

		makeFilePathXml(fileParams) {
			console.log()
			var xml = '';
			for (var i = 0; i < fileParams.domains.length; i++) {
				var mimeType = "image/tiff"
				xml += '<wps:Input>' +
					'<ows:Identifier xmlns:ns1="http://www.opengis.net/ows/1.1">source</ows:Identifier>' +
					'<wps:Reference xlink:href="' + fileParams.domains[i].value + '" mimeType="' + mimeType + '" />' +
					'</wps:Input>';
			}
			return xml;
		},
		makeLiteralXML(LiteralParams) {
			var xml = '';
			for (var i = 0; i < LiteralParams.domains.length; i++) {

				xml += '<wps:Input>' +
					'<ows:Identifier>literalInput</ows:Identifier>' +
					'<wps:Data>' +
					'<wps:LiteralData >' + LiteralParams.domains[i].value + '</wps:LiteralData>' +
					'</wps:Data>' +
					'</wps:Input>';
			}
			return xml;
		},
		markCongigXML(configParams) {

			var xml = '';
			for (const key in configParams) {
				const value = configParams[key];
				console.log(`属性 ${key} 的值为: ${value}`);
				xml += '<wps:Input>' +
					'<ows:Identifier>config</ows:Identifier>' +
					'<wps:Data>' +
					'<wps:LiteralData>' + value + '</wps:LiteralData>' +
					'</wps:Data>' +
					'</wps:Input>';
			}
			return xml;
		},
		open(title, content) {
      this.$alert(content, title, {
        confirmButtonText: '确定',
        callback: action => {
          this.$message({
            type: 'info',
            message: `action: ${action}`
          });
        }
      });
    },
		//请求算法
		RequestAxios(xml) {
			const hidemsg = this.$message('服务执行中..')

			var requestxml = xml;

			const _this = this
			axios.post(this.selectedService, requestxml,//直接将xml放到此处
				{
					headers: {
						//根据接扣文档需要加的请求头
						"Content-Type": "application/x-www-form-urlencoded"
					},
				}
			)
				.then(res => {

					console.log(res)
					if (res.data[0].code == 200) {


						_this.open("算法发布/执行成果", "算法执行成功，结果保存在服务器文件中" + res.data[2].fileurl)
						_this.resname = res.data[1].filename;

					}
					// _this.ProcessImagePub(res.data[1].filename); //发布处理结果为wms服务

				})
				.catch(function (error) {

					console.log(error)


				});
		},



		handleBeforeUpload(file) {
			// 在这里可以获取还未上传文件的名字
			const fileName = file.name;
			console.log(fileName);
			// 你可以在这里进行一些处理，例如验证文件类型或大小等
		},
		handError(err, file, fileList) {
			console.log(err);
		},
		querySearch(queryString, cb) {
			var WebProcessingService = this.WebProcessingService;
			var results = queryString ? WebProcessingService.filter(this.createFilter(queryString)) : WebProcessingService;
			// 调用 callback 返回建议列表的数据
			cb(results);
		},
		handleSelect(item) {
			console.log(item);
			this.selectedService = item.value;
		},
		loadAll() {
			return [
				{ value: 'http://192.168.16.192:8085/wps/WebProcessingService', name: '山东水设服务器部署' },
				{ value: 'http://10.211.55.3:8083/wps/WebProcessingService', name: '虚拟机-项目启动' },
			];
		},
		handleRemove(file, fileList) {
			console.log(file, fileList);
		},
		handlePreview(file) {
			console.log(file);

		},
		// methods方法
		handleChange(file, fileList) {
			console.log(file, fileList);
			this.fileList = fileList;
		},
		submitUpload() {
			if (this.fileList == '') {
				this.$message({
					message: '请选择上传数据',
					type: 'warning'
				});
			} else {
				const formData = new FormData();
				this.fileList.forEach((item) => {
					formData.append('files', item.raw);
					console.log(item.raw, item);
				});
				console.log(formData);
				this.MultipartFile(formData); //后端上传接口

				//  this.$refs.upload.submit();
			}

		},
		downloadexample() {
			window.open('http://192.168.16.192:8086/file/download2client?filePath=/opt/lib/&fileName=k_.jar');
		},
		downloadResult(){
			window.open('http://192.168.16.192:8085/ILCSData/'+this.resname);
		},
		handleClick(tab, event) {
			console.log(tab, event);
		},

		MultipartFile(formData, type) {

			//首先上传数据
			axios
				.post('http://192.168.16.192:8086/file/upload2server', formData, {
					headers: { 'Content-Type': 'multipart/form-data' },
				})
				.then((resUpLoadFiles) => {
					console.log(resUpLoadFiles)
					if (resUpLoadFiles.status == 200) {
						this.$message({
							message: '文件上传成功',
							type: 'success',
						});
						this.dynamicValidateForm3.algorithmPath = resUpLoadFiles.data.files[0].fullpath
						this.dynamicValidateForm3.methodName = this.removeSuffix(resUpLoadFiles.data.files[0].name)
						this.dynamicValidateForm3.algorithmName = 'matlab.' + this.removeSuffix(resUpLoadFiles.data.files[0].name)
					}
				})
				.catch((err) => {
					console.log('文件上传失败：' + err);
					// this.$message('文件上传失败：' + err);
				});
		},

	},
};
</script>
<style scoped lang="scss"></style>
