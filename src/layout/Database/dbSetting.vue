<template>
  <div id="setting">
    <!-- <head-top></head-top> -->
    <div id="tabs" >
      <el-tabs v-model="activeName" type="card" >
      <el-tab-pane label="数据库配置" name="first">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm" >
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
              <el-form-item id="bt">
                  <el-button id="btn" type="primary" @click="submitForm('ruleForm')">保存</el-button>
              </el-form-item>
          </el-form>
      </el-tab-pane>
      <el-tab-pane label="GeoServer配置" name="second">
        <el-form :model="ruleForm2" :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm" >
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
                  <el-button id="btn" type="primary" @click="submitForm2('ruleForm2')">保存</el-button>
              </el-form-item>
          </el-form>
      </el-tab-pane>
  </el-tabs>
    </div>
  </div>
    
</template>

<script>
    // import headTop from '../../components/headTop'
export default {
  name: '',
      
  // components: {
  //   		headTop,
  //   	},
  data () {
    return {
      activeName: 'first',
      ruleForm:{
          ip: this.$cookies.get("ip"),
          port: this.$cookies.get("port"),
          database: this.$cookies.get("database"),
          scheme: this.$cookies.get("scheme"),
          username: this.$cookies.get("username"),
          password: this.$cookies.get("password"),
      },
      ruleForm2:{
          ip: this.$cookies.get("gs_ip"),
          port: this.$cookies.get("gs_port"),
          workspace: this.$cookies.get("gs_workspace"),
          datastore: this.$cookies.get("gs_datastore"),
          username: this.$cookies.get("gs_username"),
          password: this.$cookies.get("gs_password"),
      },
      rules: {
        ip: [
          { required: true, message: 'ip地址不能为空！', trigger: 'blur' },
        ],
        port: [
          { required: true, message: '端口号不能为空！', trigger: 'blur' },
        ],
        database: [
          { required: true, message: '数据库名称不能为空！', trigger: 'blur' },
        ],
        scheme: [
          { required: true, message: 'scheme不能为空！', trigger: 'blur' },
        ],
        username: [
          { required: true, message: '用户名称不能为空！', trigger: 'blur' },
        ],
        password: [
          { required: true, message: '密码不能为空！', trigger: 'blur' },
        ],
      },
      rules2: {
          ip: [
            { required: true, message: 'ip地址不能为空！', trigger: 'blur' },
          ],
          port: [
            { required: true, message: '端口号不能为空！', trigger: 'blur' },
          ],
          username: [
            { required: true, message: '用户名称不能为空！', trigger: 'blur' },
          ],
          password: [
            { required: true, message: '密码不能为空！', trigger: 'blur' },
          ],
          workspace: [
            { required: true, message: '工作区不能为空！', trigger: 'blur' },
          ],
          datastore: [
            { required: true, message: '数据存储不能为空！', trigger: 'blur' },
          ],
        }
    }
    
  },
  methods: {
    submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$cookies.remove("ip");
            this.$cookies.remove("port");
            this.$cookies.remove("database");
            this.$cookies.remove("scheme")
            this.$cookies.remove("username");
            this.$cookies.remove("password")
            this.$cookies.set("ip",this.ruleForm.ip,"0");
            this.$cookies.set("port",this.ruleForm.port,"0");
            this.$cookies.set("database",this.ruleForm.database,"0");
            this.$cookies.set("scheme",this.ruleForm.scheme,"0")
            this.$cookies.set("username",this.ruleForm.username,"0");
            this.$cookies.set("password",this.ruleForm.password,"0")
            this.$message('保存成功!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      //保存
      submitForm2(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$cookies.remove("gs_ip");
            this.$cookies.remove("gs_port");
            this.$cookies.remove("gs_username");
            this.$cookies.remove("gs_password")
            this.$cookies.remove("gs_workspace")
            this.$cookies.remove("gs_datastore")
    
            this.$cookies.set("gs_ip",this.ruleForm2.ip,"0");
            this.$cookies.set("gs_port",this.ruleForm2.port,"0");
            this.$cookies.set("gs_username",this.ruleForm2.username,"0");
            this.$cookies.set("gs_password",this.ruleForm2.password,"0")
            this.$cookies.set("gs_workspace",this.ruleForm2.workspace,"0");
            this.$cookies.set("gs_datastore",this.ruleForm2.datastore,"0")

            this.$message('保存成功!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
  }
}
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
    margin-left: 4%;
  
}
.el-input {
  width: 90%;
}
#tabs {
  margin-top: 10px;
  background-color: white;
}
.el-button {
    margin-left: 80%;
}
</style>