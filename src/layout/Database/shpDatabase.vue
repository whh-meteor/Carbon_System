<template>
	<div class="upload-container">
		<!-- <head-top></head-top> -->
		<div class="btn">
			<el-button class="btnSetting" type="info" @click="drawer = true" icon="el-icon-setting" circle></el-button>
			<el-button class="btnUpload" type="primary" @click="dataStorage">批量入库<i class="el-icon-upload el-icon--right"></i></el-button>
			<el-button class="btnUpload" type="primary" @click="clearData">清空数据<i class="el-icon-upload el-icon--right"></i></el-button>
		</div>
		<div class="upload">
			<el-upload
				ref="upload"
				class="upload-demo"
				:auto-upload="false"
				:on-remove="handleRemove"
				drag
				action=""
				multiple
				:file-list="fileList"
				:on-change="handleChange"
			>
				<i class="el-icon-upload"></i>
				<div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
				<!-- <div class="el-upload__tip" slot="tip">上传shapefile文件</div> -->
			</el-upload>
		</div>
		<el-drawer title="数据库连接配置" :visible.sync="drawer" :before-close="handleClose">
			<div id="demo-drawer__content" style="width: 95%">
				<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
					<el-form-item label="ip地址" prop="ip">
						<el-input v-model="ruleForm.ip"></el-input>
					</el-form-item>
					<el-form-item label="port端口号" prop="port">
						<el-input v-model="ruleForm.port"></el-input>
					</el-form-item>
					<el-form-item label="数据库名称" prop="database">
						<el-input v-model="ruleForm.database"></el-input>
					</el-form-item>
					<el-form-item label="scheme" prop="scheme">
						<el-input v-model="ruleForm.scheme"></el-input>
					</el-form-item>
					<el-form-item label="用户名称" prop="username">
						<el-input v-model="ruleForm.username"></el-input>
					</el-form-item>
					<el-form-item label="密码" prop="password">
						<el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
					</el-form-item>
					<el-form-item>
						<el-button id="btn" type="primary" @click="submitForm('ruleForm')">保存</el-button>
					</el-form-item>
				</el-form>
			</div>
		</el-drawer>
	</div>
</template>

<script>
import axios from 'axios';
// import headTop from "../../components/headTop";
export default {
	name: '',
	// components: {
	//     headTop,
	// },
	data() {
		return {
			fileList: [],
			drawer: false,
			tableData: [],
			tb: [],
			input: '',
			ruleForm: {
				ip: this.$cookies.get('ip'),
				port: this.$cookies.get('port'),
				database: this.$cookies.get('database'),
				scheme: this.$cookies.get('scheme'),
				username: this.$cookies.get('username'),
				password: this.$cookies.get('password'),
			},
			rules: {
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
				database: [
					{
						required: true,
						message: '数据库名称不能为空！',
						trigger: 'blur',
					},
				],
				scheme: [
					{
						required: true,
						message: 'scheme不能为空！',
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
			},
		};
	},
	methods: {
		deleteRow(index, rows) {
			rows.splice(index, 1);
		},
		handleClose() {
			this.drawer = false;
		},
		handleChange(file, fileList) {
			this.fileList = fileList;
		},
		handleRemove(file, fileList) {
			this.fileList = fileList;
		},
		clearData() {
			this.fileList = [];
		},
		//解析路径
		selectFlie() {
			axios
				.post('data/filesPath', this.input, {
					headers: {
						'Content-Type': 'text/plain',
					},
				})
				.then((res) => {
					this.tableData = [];
					this.tb = [];
					//解析文件路径，加入表中
					res.data.forEach((element) => {
						if (element.split('.')[1] == 'shp' && element.split('.').length == 2) {
							// console.log(element.split('.')[1]);
							this.tableData.push({ path: element });
							this.tb.push(element);
						}
					});
				})
				.catch((err) => {
					console.log(err);
				});
		},

		//批量存储
		dataStorage() {
			if (this.ruleForm.ip == null) {
				this.$message('请设置数据库连接!');
				return;
			}
			const formData = new FormData();
			this.$confirm('加入任务, 是否继续?', '提示', {
				confirmButtonText: '确定',
				cancelButtonText: '取消',
				type: 'warning',
			})
				.then(() => {
					this.$message(
						{
							type: 'success',
							message: '加入成功!',
						},

						this.fileList.forEach((item) => {
							formData.append('files', item.raw);
						}),
						(this.tb = []),
						this.fileList.forEach((item) => {
							this.tb.push(item.name);
						}),
						this.MultipartFile(formData), //后端上传接口
						axios
							.post(
								'data/store',
								{
									tb: this.tb,
									db: this.ruleForm,
								},
								{
									headers: {
										'Content-Type': 'application/json',
									},
								}
							)
							.then((res) => {
								this.$message({
									message: '批量入库成功',
									type: 'success',
								});
							})
							.catch((err) => {})
					);
				})
				.catch(() => {
					this.$message({
						type: 'info',
						message: '已取消',
					});
				});
		},
		MultipartFile(formData, type) {
			//首先上传数据
			axios
				.post('http://192.168.16.192:8086/file/upload2server', formData, {
					headers: { 'Content-Type': 'multipart/form-data' },
				})
				.then((resUpLoadFiles) => {
					// console.log(resUpLoadFiles);
					if (resUpLoadFiles.status == 200) {
						this.$message({
							message: '文件上传成功',
							type: 'success',
						});
					}
				})
				.catch((err) => {
					console.log('文件上传失败：' + err);
					// this.$message('文件上传失败：' + err);
				});
		},
		submitForm(formName) {
			this.$refs[formName].validate((valid) => {
				if (valid) {
					this.$cookies.remove('ip');
					this.$cookies.remove('port');
					this.$cookies.remove('database');
					this.$cookies.remove('scheme');
					this.$cookies.remove('username');
					this.$cookies.remove('password');
					this.$cookies.set('ip', this.ruleForm.ip, '0');
					this.$cookies.set('port', this.ruleForm.port, '0');
					this.$cookies.set('database', this.ruleForm.database, '0');
					this.$cookies.set('scheme', this.ruleForm.scheme, '0');
					this.$cookies.set('username', this.ruleForm.username, '0');
					this.$cookies.set('password', this.ruleForm.password, '0');
					this.$message('保存成功!');
				} else {
					console.log('error submit!!');
					return false;
				}
			});
		},
	},
};
</script>

<style scoped>
.upload-container {
	height: 100%;
	width: 100%;
}

.table {
	margin-top: 10px;
}
.btn {
	margin-top: 10px;
}
.input1 {
	width: 50%;
}
.btnSetting {
	float: right;
	margin-right: 10px;
}
.btnUpload {
	float: right;
	margin-right: 10px;
}
#btn {
	float: right;
}
.upload[data-v-91b46444] {
	height: 50%;
	width: 50%;
	margin-left: 30%;
}
</style>
