<template>
	<div id="setting">
		<!-- <head-top></head-top> -->
		<div id="bg">
			<div id="form">
				<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
					<el-form-item label="数据类型" prop="datatype">
						<el-select
							v-model="ruleForm.datatype"
							filterable
							allow-create
							default-first-option
							@change="changeValue($event)"
							placeholder="请选择发布的数据类型"
						>
							<el-option v-for="item in pubtype" :key="item.value" :label="item.label" :value="item.value"> </el-option>
						</el-select>
						<el-button class="btnSetting" type="info" @click="drawers" icon="el-icon-setting" circle></el-button>
						<el-button class="btnPub" type="primary" @click="pubPostGIS">一键发布</el-button>
					</el-form-item>
					<el-form-item label="工作空间" prop="workspace">
						<el-select
							v-model="ruleForm.workspace"
							filterable
							allow-create
							default-first-option
							placeholder="请选择工作区"
							@change="changews($event)"
						>
							<el-option v-for="item in opws" :key="item.value" :label="item.label" :value="item.value"> </el-option>
						</el-select>
					</el-form-item>
					<el-form-item label="数据储存" prop="workspaces">
						<el-select
							v-model="ruleForm.datastore"
							filterable
							allow-create
							default-first-option
							placeholder="请选择数据储存"
							@change="addTCData($event)"
							:disabled="sjcc"
						>
							<el-option v-for="item in ds" :key="item.value" :label="item.label" :value="item.value"> </el-option>
						</el-select>
					</el-form-item>

					<!-- 文件上传 -->
					<el-form
						ref="dataForm"
						v-loading="formLoading"
						:model="temp"
						:inline="true"
						label-position="right"
						label-width="80px"
						style="width: 630px; margin-left: 100px"
						v-if="sjcc"
					>
						<el-form-item>
							<el-upload
								ref="upload"
								class="upload-files"
								action=""
								name="files"
								drag
								multiple
								:auto-upload="false"
								:file-list="fileList"
								:on-change="handleChange"
								style="display: inline; float: right"
							>
								<!-- <el-button slot="trigger" type="primary">选取文件</el-button> -->
								<i class="el-icon-upload"></i>
								<div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
								<div class="el-upload__tip" slot="tip">只能上传tiff文件，且不超过1000M</div>
							</el-upload>
						</el-form-item>
					</el-form>

					<el-table :data="tableData" style="width: 100%" max-height="500" v-if="tc">
						<el-table-column type="index" width="500"> </el-table-column>
						<el-table-column prop="layer" label="图层" width="250"> </el-table-column>

						<el-table-column fixed="right" label="操作" width="120">
							<template slot-scope="scope">
								<el-button @click.native.prevent="deleteRow(scope.$index, tableData)" type="text" size="small"> 删除 </el-button>
							</template>
						</el-table-column>
					</el-table>

					<el-drawer title="GeoServer连接配置" :visible.sync="drawer" :before-close="handleClose">
						<div id="demo-drawer__content" style="width: 95%">
							<el-form :model="ruleForm2" :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
								<el-form-item label="ip地址" prop="ip">
									<el-input v-model="ruleForm2.ip"></el-input>
								</el-form-item>
								<el-form-item label="port端口号" prop="port">
									<el-input v-model="ruleForm2.port"></el-input>
								</el-form-item>
								<el-form-item label="用户名称" prop="username">
									<el-input v-model="ruleForm2.username"></el-input>
								</el-form-item>
								<el-form-item label="密码" prop="password">
									<el-input type="password" v-model="ruleForm2.password" autocomplete="off"></el-input>
								</el-form-item>
								<el-form-item label="工作区" prop="workspace">
									<el-input type="workspace" v-model="ruleForm2.workspace" autocomplete="off"></el-input>
								</el-form-item>
								<el-form-item label="数据存储" prop="datastore">
									<el-input type="datastore" v-model="ruleForm2.datastore" autocomplete="off"></el-input>
								</el-form-item>
								<el-form-item>
									<el-button id="btn" type="primary" @click="submitForm1('ruleForm2')">保存</el-button>
								</el-form-item>
							</el-form>
						</div>
					</el-drawer>
				</el-form>

				<br />
			</div>
		</div>
	</div>
</template>

<script>
import axios from 'axios';
// import headTop from "../../components/headTop";
import { getGeoserverList, postGeoData, postshpData } from '@/api/getData';

export default {
	name: '',
	// components: {
	//     headTop,
	// },
	data() {
		return {
			//  header: { Authorization: token },
			uploading: false,
			formLoading: false,
			drawer: false,
			sjcc: true, //数据储存
			tc: false,
			updata: true,
			fileList: [],
			tb: [],
			temp: {
				id: void 0,
				fileName: '',
				fileType: void 0,
			},
			pubtype: [
				{
					value: 'TIFF',
					label: 'TIFF',
				},
				{
					value: 'Shapefile',
					label: 'Shapefile',
				},
				{
					value: 'PostGIS',
					label: 'PostGIS',
				},
			],
			opws: [
				{
					value: '',
					label: '',
				},
			],
			opdt: [
				{
					value: '',
					label: '',
				},
			],
			ruleForm: {
				path: '/Volumes/CrucialX8/11-实习/FileTest/',
				workspace: '',
				datastore: '',
				datatype: '',
			},
			ruleForm2: {
				ip: this.$cookies.get('gs_ip'),
				port: this.$cookies.get('gs_port'),
				workspace: this.$cookies.get('gs_workspace'),
				datastore: this.$cookies.get('gs_datastore'),
				username: this.$cookies.get('gs_username'),
				password: this.$cookies.get('gs_password'),
			},
			postgisForm: {
				ip: this.$cookies.get('ip'),
				port: this.$cookies.get('port'),
				database: this.$cookies.get('database'),
				scheme: this.$cookies.get('scheme'),
				username: this.$cookies.get('username'),
				password: this.$cookies.get('password'),
			},
			rules: {
				path: [
					{
						required: true,
						message: '文件路径不能为空！',
						trigger: 'blur',
					},
				],
				workspace: [
					{
						required: true,
						message: '工作区不能为空！',
						trigger: 'blur',
					},
				],
				datastore: [
					{
						required: true,
						message: '数据储存不能为空！',
						trigger: 'blur',
					},
				],
				datatype: [
					{
						required: true,
						message: '数据类型不能为空！',
						trigger: 'blur',
					},
				],
			},
			rules2: {
				ip: [
					{
						required: true,
						message: 'ip地址不能为空！',
						trigger: 'blur',
					},
				],
				port: [
					{
						required: true,
						message: '端口号不能为空！',
						trigger: 'blur',
					},
				],
				username: [
					{
						required: true,
						message: '用户名称不能为空！',
						trigger: 'blur',
					},
				],
				password: [
					{
						required: true,
						message: '密码不能为空！',
						trigger: 'blur',
					},
				],
				workspace: [
					{
						required: true,
						message: '工作区不能为空！',
						trigger: 'blur',
					},
				],
				datastore: [
					{
						required: true,
						message: '数据存储不能为空！',
						trigger: 'blur',
					},
				],
			},

			tableData: [],
			ds: [],
			foucs: '',
		};
	},
	created() {
		this.initData();
	},
	mounted() {
		if (this.$cookies.get('ip') == null) {
			this.$message({
				type: 'info',
				message: '请设置数据库连接!',
			});
		}
		if (this.$cookies.get('gs_ip') == null) {
			this.$message({
				type: 'info',
				message: '请设置geoserver连接!',
			});
		}
	},
	methods: {
		handleClose() {
			this.drawer = false;
		},
		//数据类型改变事件
		changeValue(value) {
			this.foucs = value;
			if (value == 'PostGIS') {
				this.sjcc = false;
				this.tc = true;
			} else {
				this.sjcc = true;
				this.tc = false;
			}
		},
		//一键发布
		async pubPostGIS() {
			// console.log(this.tb);
			if (this.foucs == 'PostGIS') {
				axios
					.post(
						'data/pubPostGIS',
						{ path: this.tb },
						{
							headers: {
								'Content-Type': 'application/json',
							},
						}
					)
					.then((res) => {
						this.$message({
							type: 'info',
							message: '发布成功!',
						});
					});
			} else {
				this.submitUpload();
			}
		},
		//选择数据储存，自动加载未发布的图层
		async addTCData(value) {
			this.$cookies.remove('gs_datastore');
			this.$cookies.set('gs_datastore', value, '0');
			this.ruleForm2 = {
				ip: this.$cookies.get('gs_ip'),
				port: this.$cookies.get('gs_port'),
				workspace: this.$cookies.get('gs_workspace'),
				datastore: value,
				username: this.$cookies.get('gs_username'),
				password: this.$cookies.get('gs_password'),
			};
			axios
				.post('data/changeDS', this.ruleForm2, {
					headers: {
						'Content-Type': 'application/json',
					},
				})
				.then((res) => {})
				.catch((err) => {
					this.$message.error(err);
				});
			axios
				.post('data/getTables', this.postgisForm, {
					headers: {
						'Content-Type': 'application/json',
					},
				})
				.then((res) => {
					this.tableData = [];
					this.tb = [];
					if (res.data.code == '0') {
						res.data.data.forEach((element) => {
							this.tableData.push({ layer: element });
							this.tb.push(element);
						});
					} else if (res.data.code == '500') {
						this.$message.error(res.data.msg);
					}
				})
				.catch((err) => {
					this.$message.error(err);
				});
		},
		async initData() {
			this.getwks();
			this.getdataStores();
		},
		drawers() {
			this.drawer = true;
		},
		async getwks() {
			try {
				axios
					.post('geoserver/getlist', this.ruleForm2, {
						headers: {
							'Content-Type': 'application/json',
						},
					})
					.then((res) => {
						console.log(res.data);
						if (res.data.code == '0') {
							let temp = [];
							temp = res.data.data.map((item) => {
								return { value: item, label: item };
							});
							this.opws = temp;
						} else if (res.data.code == '500') {
							this.$message.error(res.data.msg);
						}
					})
					.catch((err) => {
						console.log(err);
					});
			} catch (err) {
				console.log(err.message);
			}
		},
		getdataStores() {
			axios
				.post('data/getDataStores', this.ruleForm2, {
					headers: {
						'Content-Type': 'application/json',
					},
				})
				.then((res) => {
					console.log(res.data);
					if (res.data.code == '0') {
						let temp = [];
						temp = res.data.data.data.map((item) => {
							return { value: item, label: item };
						});
						this.ds = temp;
					} else if (res.data.code == '500') {
						this.$message.error(res.data.msg);
					}
				})
				.catch((err) => {
					console.log(err);
				});
		},
		//解析路径
		selectFlie() {
			axios
				.post('data/filesPath', this.ruleForm.path, {
					headers: {
						'Content-Type': 'text/plain',
					},
				})
				.then((res) => {
					this.tableData = [];
					this.tb = [];
					//解析文件路径，加入表中
					res.data.forEach((element) => {
						if (element.split('.')[1] == 'tif' && element.split('.').length == 2) {
							// console.log(element.split('.')[1])
							this.tableData.push({ path: element });
							this.tb.push(element);
						}
					});
				})
				.catch((err) => {
					console.log(err);
				});
		},
		changews(value) {
			this.$cookies.remove('gs_workspace');
			this.$cookies.set('gs_workspace', value, '0');
			this.ruleForm2 = {
				ip: this.$cookies.get('gs_ip'),
				port: this.$cookies.get('gs_port'),
				workspace: this.$cookies.get('gs_workspace'),
				datastore: this.$cookies.get('gs_datastore'),
				username: this.$cookies.get('gs_username'),
				password: this.$cookies.get('gs_password'),
			};
		},
		deleteRow(index, rows) {
			rows.splice(index, 1);
			this.tb.splice(index, 1);
		},
		submitForm(formName) {
			this.$refs[formName].validate((valid) => {
				if (valid) {
					//上传文件
					this.submitUpload();
				} else {
					console.log('error submit!!');
					return false;
				}
			});
		},
		submitForm1(formName) {
			this.$refs[formName].validate((valid) => {
				if (valid) {
					this.$cookies.remove('gs_ip');
					this.$cookies.remove('gs_port');
					this.$cookies.remove('gs_username');
					this.$cookies.remove('gs_password');
					this.$cookies.remove('gs_workspace');
					this.$cookies.remove('gs_datastore');
					this.$cookies.set('gs_ip', this.ruleForm2.ip, '0');
					this.$cookies.set('gs_port', this.ruleForm2.port, '0');
					this.$cookies.set('gs_username', this.ruleForm2.username, '0');
					this.$cookies.set('gs_password', this.ruleForm2.password, '0');
					this.$cookies.set('gs_workspace', this.ruleForm2.workspace, '0');
					this.$cookies.set('gs_datastore', this.ruleForm2.datastore, '0');

					this.$message({
						type: 'info',
						message: '保存成功!',
					});
					this.drawer = false;
					this.getwks()


				} else {
					console.log('error submit!!');
					return false;
				}
			});
		},
		postdata(res, type) {
			if (res.data.files.length == 0) {
				this.$message({
					message: '没有可以发布的文件',
					type: 'warning',
				});
			} else {
				this.$message('上传数量为：' + res.data.files.length + '个');
				for (var i = 0; i < res.data.files.length; i++) {
					var geoserver = this.ruleForm2;
					var path = res.data.files[i].fullpath;
					if (type == 'TIFF') {
						axios
							.post(
								'geoserver/pubtif',
								{ geoserver: geoserver, path: path },
								{
									headers: {
										'Content-Type': 'application/json',
									},
								}
							)
							.then((res) => {
								console.log('......................');
								console.log(res.data);
							});
					} else if (type == 'Shapefile') {
						axios
							.post(
								'publishSHP',
								{ geoserver: geoserver, path: path },
								{
									headers: {
										'Content-Type': 'application/json',
									},
								}
							)
							.then((res) => {});
					}
				}
			}
		},
		async makeparam(type, ws, store_name, fileName) {
			var res = '';
			const params = {
				ws: ws,
				store_name: store_name,
				fileName: fileName,
			};
			console.log(params);
			if (type == 'TIFF') {
				res = await postGeoData(params);
			} else if (type == 'Shapefile') {
				this.$message('shapefile');
				res = await postshpData(params);
			}

			console.log(res);
			if (res.code == '0') {
				this.$message(res.data);
			} else {
				this.$message(res.data + ';' + res.type);
				// throw new Error(res.type)
			}
		},
		// methods方法
		handleChange(file, fileList) {
			console.log(file, fileList);
			this.fileList = fileList;
		},
		submitUpload() {
			const formData = new FormData();
			this.fileList.forEach((item) => {
				formData.append('files', item.raw);
				console.log(item.raw, item);
			});

			this.MultipartFile(formData, this.ruleForm.datatype); //后端上传接口
		},
		MultipartFile(formData, type) {
			//首先上传数据
			axios
				.post('http://192.168.16.192:8086/file/upload2server', formData, {
					headers: { 'Content-Type': 'multipart/form-data' },
				})
				.then((resUpLoadFiles) => {
					if (resUpLoadFiles.status == 200) {
						this.$message({
							message: '文件上传成功',
							type: 'success',
						});
						this.postdata(resUpLoadFiles, type);
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

<style scoped>
#setting {
	height: 100%;
	width: 100%;
}

#bg {
	height: 90%;
	width: 99%;
	background-color: rgba(255, 255, 255, 0.952);
}

#form {
	height: 97%;
	width: 100%;
	margin-top: 10px;
	/* margin-left: 1%; */
}

.el-input {
	width: 60%;
}

.el-select {
	width: 30%;
}

.upload-container {
	height: 100px;
}

.table {
	margin-top: 10px;
}

.btnSetting {
	float: right;
	margin-right: 10px;
}
.btnPub {
	float: right;
	margin-right: 10px;
}
.el-input[data-v-3710ade4] {
	width: 100%;
}
</style>
