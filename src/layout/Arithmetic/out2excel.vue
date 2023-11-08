<template>
  <el-form ref="form" :model="form" label-width="80px">
    <el-form-item label="算法名称">
      <el-input v-model="form.name"></el-input>
      
    </el-form-item>
    <el-form-item label="算法区域">
      <el-input type="textarea" :rows="2" disabled placeholder="请输入内容" :autosize="{ minRows: 2, maxRows: 6 }"
        v-model="form.textarea">
      </el-input>
      <!-- <el-select v-model="form.region" placeholder="请选择算法区域">
        <el-option label="区域一" value="shanghai"></el-option>
        <el-option label="区域二" value="beijing"></el-option>
      </el-select> -->
    </el-form-item>
    <el-form-item label="文件上传">
      <el-upload class="upload-demo" ref="upload" action="http://192.168.16.192:8086/file/upload2server"
        :on-preview="handlePreview" :on-remove="handleRemove" :on-change="handleChange" :file-list="fileList"
        :auto-upload="false">
        <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
        <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
        <el-button style="margin-left: 10px;" size="small" type="info" @click="downloadexample">下载示例数据</el-button>
        <div slot="tip" class="el-upload__tip">只能上传out文件b</div>
      </el-upload>
    </el-form-item>


    <el-form-item label="文件路径">
      <el-input placeholder="请输入文件名" v-model="form.desc">
        <template slot="prepend">UploadPath://</template>
      </el-input>

    </el-form-item>
    <el-form-item label="下载结果">
      <el-switch v-model="form.delivery"></el-switch>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">立即创建</el-button>
      <el-button>取消</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
import axios from 'axios';
import { download } from '@/api/getData.js'
import { verifyUrl } from '@/utils/toolsValidate';
export default {
  data() {
    return {
      form: {
        name: '用python解析SWMM的.OUT输出文件',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: '',
        textarea: 'SWMM中.OUT输出文件为二进制文件，用记事本打开会呈现如下图所示的乱码状态。但是.OUT文件中有很多重要结果信息（例如：节点全模拟时段水深、侧向来水、出口总流量等数据），用官方提供的pyswmm库对.OUT文件进行解析。将二进制数据输出为Excel。文件主要包括三种类型数据，节点类型数据、管道类型数据、汇水区类型数据。节点类型包括检查井、排口、调蓄池、分流器；管道类型包括管道、泵、孔口、堰、出口；汇水区包括汇水分区。节点输出数据包括：水深、水头、拦截容积、侧入流量、节点总入流量、节点溢流量及污染物，7个输出数据；管道输出数据包括：流量、水深、流速、Froude数、过流能力及污染物，6个输出数据；子汇水区输出数据包括：降雨量、积雪深度、蒸发量、入渗量、地表径流量、地下水径流量、地下水位、土壤含水量及污染物浓度，9个输出数据。'
        , xlsx: [
          "_sub.xlsx", "_nodes.xlsx", "_links.xlsx"

        ]
      },
      fileList: [
      ]
      ,
      file: null,
      uploadname: ''

    }
  },
  methods: {
    onSubmit() {
      console.log('submit!');
      this.Execute()
    },

    submitUpload() {
      if(this.fileList==''){
        this.$message({
          message: '请选择上传数据',
          type: 'warning'
        });
      }else{
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


    async downloadres() {



      var res = "";
      const params = {
        filePath: "/opt/upload/",
        fileName: this.form.xlsx,

      };
      //  res =  await download(params)
      //  console.log(res)
      for (var i = 0; i < 3; i++) {

        alert("开始下载：" + params.fileName[i])
        window.open('http://192.168.16.192:8086/file/download2client?filePath=' + params.filePath + '&fileName=' + params.fileName[i]);

      }



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
            this.form.desc = resUpLoadFiles.data.files[0].name

          }
        })
        .catch((err) => {
          console.log('文件上传失败：' + err);
          // this.$message('文件上传失败：' + err);
        });
    },
    Execute() {

      var xml = this.MakeIntensityXML('org.n52.wps.server.algorithm.Swmm2Excel', '/opt/upload/' + this.form.desc, '/opt/upload/')
      this.RequestAxios(xml)
    },
    //请求算法
    RequestAxios(xml) {
      const hidemsg = this.$message('服务执行中..')

      var requestxml = xml;

      const _this = this
      axios.post("http://192.168.16.192:8085/wps/WebProcessingService", requestxml,//直接将xml放到此处
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


            _this.open("pyswmm执行成功", "算法执行成功，结果保存在服务器文件中" + res.data[2].fileurl + "执行代码：" + res.data[1].exitCode)
            if(this.form.delivery==true){
              this.downloadres()
            }

       

          }
          // _this.ProcessImagePub(res.data[1].filename); //发布处理结果为wms服务


        })
        .catch(function (error) {

          console.log(error)


        });
    },
    
    MakeIntensityXML(Identifier, urlA, urlB) {
      // var url = '"' + urlA + '" '
      // var url2 = '"' + urlB + '" '
      var requestxml = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>' +
        '<wps:Execute service="WPS" version="1.0.0" xmlns:wps="http://www.opengis.net/wps/1.0.0" xmlns:ows="http://www.opengis.net/ows/1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.opengis.net/wps/1.0.0 http://schemas.opengis.net/wps/1.0.0/wpsExecute_request.xsd">' +
        '<ows:Identifier>' + Identifier + '</ows:Identifier>' +
        '<wps:DataInputs>' +
        '<wps:Input>' +
        '<ows:Identifier>literalInput</ows:Identifier>' +
        '<wps:Data>' +
        '<wps:LiteralData>' +
        urlA +
        '</wps:LiteralData>' +
        '</wps:Data>' +
        '</wps:Input>' +
        '<wps:Input>' +
        '<ows:Identifier>literalInput2</ows:Identifier>' +
        '<wps:Data>' +
        '<wps:LiteralData>' +
        urlB +
        '</wps:LiteralData>' +
        '</wps:Data>' +
        '</wps:Input>' +
        '</wps:DataInputs><wps:ResponseForm><wps:RawDataOutput  asReference="false" >' +
        '<ows:Identifier>literalOutput</ows:Identifier>' +
        '</wps:RawDataOutput>' +
        '</wps:ResponseForm>' +
        '</wps:Execute>'
      return requestxml
    }, open(title, content) {
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
    downloadexample(){
      window.open('http://192.168.16.192:8086/file/download2client?filePath=/opt/upload/&fileName=WarnerParkVariableModel.out');

    }
  }
}
</script>