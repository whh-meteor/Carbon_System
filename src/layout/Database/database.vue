<template>
	<div class="upload-container">
		<!-- <head-top></head-top> -->
		<div class="btn">
			<el-input placeholder="请输入SHP数据存放文件夹路径" v-model="input" class="input1">
				<template slot="prepend">路径</template>
			</el-input>
			<el-button class="btnSelect" type="primary" @click="selectFlie">解析文件<i class="el-icon-folder-add el-icon--right"></i></el-button>
			<el-button class="btnSetting" type="info" @click="drawer = true" icon="el-icon-setting" circle></el-button>
			<el-button class="btnUpload" type="primary" @click="dataStorage">批量入库<i class="el-icon-upload el-icon--right"></i></el-button>
		</div>

		<div class="table">
			<el-table :data="tableData" style="width: 100%" max-height="500">
				<el-table-column type="index" width="50"> </el-table-column>
				<el-table-column prop="path" label="文件地址" width="1000"> </el-table-column>

				<el-table-column fixed="right" label="操作" width="120">
					<template slot-scope="scope">
						<el-button @click.native.prevent="deleteRow(scope.$index, tableData)" type="text" size="small"> 移除 </el-button>
					</template>
				</el-table-column>
			</el-table>
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
							console.log(element.split('.')[1]);
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
			if (this.tableData.length == 0) {
				this.$message('请输入数据!');
				return;
			}
			if (this.ruleForm.ip == null) {
				this.$message('请设置数据库连接!');
				return;
			}
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
							.then((res) => {})
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
</style>
