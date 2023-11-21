(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d2304ee"],{ec71:function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"form-adapt-container"},[a("el-card",{attrs:{shadow:"hover",header:"水利算法服务发布"}},[a("el-form",{ref:"form",attrs:{model:e.form,size:"small",rules:e.rules,"label-width":"100px"}},[a("el-row",{attrs:{gutter:35}},[a("el-col",{staticClass:"mb20",attrs:{xs:24,sm:12,md:8,lg:6,xl:4}},[a("el-form-item",{attrs:{label:"服务名称",prop:"name"}},[a("el-input",{attrs:{placeholder:"请输入名称",clearable:""},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1)],1),a("el-col",{staticClass:"mb20",attrs:{xs:24,sm:12,md:8,lg:6,xl:4}},[a("el-form-item",{attrs:{label:"算法类型"}},[a("el-select",{attrs:{placeholder:"请选择类型"},model:{value:e.form.type,callback:function(t){e.$set(e.form,"type",t)},expression:"form.type"}},[a("el-option",{attrs:{label:"MATLAB",value:"1"}}),a("el-option",{attrs:{label:"Python",value:"2"}})],1)],1)],1),a("el-col",{staticClass:"mb20",attrs:{xs:24,sm:12,md:8,lg:6,xl:4}},[a("el-form-item",{attrs:{label:"服务状态"}},[a("el-select",{attrs:{placeholder:"请选择状态"},model:{value:e.form.staus,callback:function(t){e.$set(e.form,"staus",t)},expression:"form.staus"}},[a("el-option",{attrs:{label:"公有",value:"1"}}),a("el-option",{attrs:{label:"私有",value:"2"}})],1)],1)],1)],1),a("el-row",{attrs:{gutter:35}},[a("el-col",{staticClass:"mb20",attrs:{xs:24,sm:12,md:8,lg:12,xl:4}},[a("el-form-item",{attrs:{label:"服务器",prop:""}},[a("el-autocomplete",{staticClass:"inline-input",staticStyle:{width:"100%"},attrs:{"fetch-suggestions":e.querySearch,placeholder:"请输入内容"},on:{select:e.handleSelect},model:{value:e.state1,callback:function(t){e.state1=t},expression:"state1"}})],1)],1)],1),a("el-row",{attrs:{gutter:35}},[a("el-col",{staticClass:"mb20",attrs:{xs:24,sm:12,md:8,lg:16,xl:4}},[a("el-form-item",{attrs:{label:"算法上传"}},[a("el-upload",{ref:"upload",staticClass:"upload-demo",attrs:{action:"http://192.168.16.192:8086/file/upload2server","on-preview":e.handlePreview,"on-remove":e.handleRemove,"on-change":e.handleChange,"file-list":e.fileList,"auto-upload":!1}},[a("el-button",{attrs:{slot:"trigger",size:"small",type:"primary"},slot:"trigger"},[e._v("选取文件")]),a("el-button",{staticStyle:{"margin-left":"10px"},attrs:{size:"small",type:"success"},on:{click:e.submitUpload}},[e._v("上传到服务器")]),a("el-button",{staticStyle:{"margin-left":"10px"},attrs:{size:"small",type:"info"},on:{click:e.downloadexample}},[e._v("下载示例")]),a("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[e._v("只能上传.jar/.py文件")])],1)],1)],1)],1),a("el-row",{attrs:{gutter:35}},[a("el-col",{staticClass:"mb20",attrs:{xs:24,sm:12,md:8,lg:16,xl:4}},[a("el-form-item",{attrs:{label:"参数配置"}},[a("el-tabs",{attrs:{"tab-position":"right",type:"border-card"},on:{"tab-click":e.handleClick},model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},[a("el-tab-pane",{attrs:{label:"文件参数",name:"first"}},[a("el-form",{ref:"dynamicValidateForm",staticClass:"demo-dynamic",attrs:{model:e.dynamicValidateForm,"label-width":"100px"}},[a("el-form-item",{attrs:{label:"方法名"}},[a("el-input",{model:{value:e.dynamicValidateForm.methodsName,callback:function(t){e.$set(e.dynamicValidateForm,"methodsName",t)},expression:"dynamicValidateForm.methodsName"}})],1),e._l(e.dynamicValidateForm.domains,(function(t,l){return a("el-form-item",{key:t.key,attrs:{label:"文件"+l,prop:"domains."+l+".value",rules:{required:!0,message:"·",trigger:"blur"}}},[a("el-input",{model:{value:t.value,callback:function(a){e.$set(t,"value",a)},expression:"domain.value"}}),a("el-button",{attrs:{size:"mini"},on:{click:function(a){return a.preventDefault(),e.removeDomain(t)}}},[e._v("删除")])],1)})),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.submitForm("dynamicValidateForm")}}},[e._v("提交")]),a("el-button",{on:{click:e.addDomain}},[e._v("新增")]),a("el-button",{on:{click:function(t){return e.resetForm("dynamicValidateForm")}}},[e._v("重置")])],1)],2)],1),a("el-tab-pane",{attrs:{label:"数值参数",name:"second"}},[a("el-form",{ref:"dynamicValidateForm2",staticClass:"demo-dynamic",attrs:{model:e.dynamicValidateForm2,"label-width":"100px"}},[e._l(e.dynamicValidateForm2.domains,(function(t,l){return a("el-form-item",{key:t.key,attrs:{label:"参数"+l,prop:"domains."+l+".value",rules:{required:!0,message:"·",trigger:"blur"}}},[a("el-input",{model:{value:t.value,callback:function(a){e.$set(t,"value",a)},expression:"domain.value"}}),a("el-button",{attrs:{size:"mini"},on:{click:function(a){return a.preventDefault(),e.removeDomain2(t)}}},[e._v("删除")])],1)})),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.submitForm("dynamicValidateForm2")}}},[e._v("提交")]),a("el-button",{on:{click:e.addDomain2}},[e._v("新增")]),a("el-button",{on:{click:function(t){return e.resetForm("dynamicValidateForm2")}}},[e._v("重置")])],1)],2)],1),a("el-tab-pane",{attrs:{label:"配置参数",name:"fourth"}},[a("el-form",{ref:"dynamicValidateForm",staticClass:"demo-dynamic",attrs:{model:e.dynamicValidateForm3,"label-width":"100px"}},[a("el-form-item",{attrs:{label:"算法名称"}},[a("el-input",{model:{value:e.dynamicValidateForm3.algorithmName,callback:function(t){e.$set(e.dynamicValidateForm3,"algorithmName",t)},expression:"dynamicValidateForm3.algorithmName"}})],1),a("el-form-item",{attrs:{label:"方法名称"}},[a("el-input",{model:{value:e.dynamicValidateForm3.methodName,callback:function(t){e.$set(e.dynamicValidateForm3,"methodName",t)},expression:"dynamicValidateForm3.methodName"}})],1),a("el-form-item",{attrs:{label:"算法路径"}},[a("el-input",{model:{value:e.dynamicValidateForm3.algorithmPath,callback:function(t){e.$set(e.dynamicValidateForm3,"algorithmPath",t)},expression:"dynamicValidateForm3.algorithmPath"}})],1),a("el-form-item",{attrs:{label:"数据路径"}},[a("el-input",{model:{value:e.dynamicValidateForm3.dataPath,callback:function(t){e.$set(e.dynamicValidateForm3,"dataPath",t)},expression:"dynamicValidateForm3.dataPath"}})],1),a("el-form-item",{attrs:{label:"响应路径"}},[a("el-input",{model:{value:e.dynamicValidateForm3.responsePath,callback:function(t){e.$set(e.dynamicValidateForm3,"responsePath",t)},expression:"dynamicValidateForm3.responsePath"}})],1)],1)],1)],1)],1)],1)],1),a("el-row",{attrs:{gutter:35}},[a("el-col",{staticClass:"mb20",attrs:{xs:24,sm:12,md:8,lg:16,xl:4}},[a("el-form-item",{attrs:{label:"描述信息"}},[a("el-input",{attrs:{type:"textarea",placeholder:"请输入描述信息",clearable:""},model:{value:e.form.description,callback:function(t){e.$set(e.form,"description",t)},expression:"form.description"}})],1)],1)],1),a("el-row",{attrs:{gutter:35}},[a("el-col",{staticClass:"mb30",attrs:{xs:24,sm:12,md:8,lg:12,xl:4}},[a("el-form-item",{attrs:{label:"关键字"}},[a("el-input",{attrs:{placeholder:"请输入关键字",clearable:""},model:{value:e.form.keywords,callback:function(t){e.$set(e.form,"keywords",t)},expression:"form.keywords"}})],1)],1)],1),a("el-row",{attrs:{gutter:35}},[a("el-col",{attrs:{span:22,offset:20}},[a("el-button",{staticClass:"btnPub",attrs:{type:"primary"},on:{click:function(t){return e.publish("form")}}},[e._v(" 服务发布 ")]),a("el-button",{staticClass:"btnPub",on:{click:function(t){return e.downloadResult()}}},[e._v(" 下载结果 ")])],1)],1)],1)],1)],1)},s=[],i=(a("14d9"),a("bc3a")),o=a.n(i),r={name:"pagesFormAdapt",data(){return{form:{type:"1",staus:"1"},dialogImageUrl:"",dialogVisible:!1,rules:{name:[{required:!0,message:"服务名称不能为空！",trigger:"blur"}],server:[{required:!0,message:"服务器地址不能为空！",trigger:"blur"}]},activeName:"first",dynamicValidateForm:{domains:[{value:""}],methodsName:"org.n52.wps.server.algorithm.SelfAdaptation"},dynamicValidateForm2:{domains:[{value:""}],outpath:"/opt/upload/"},dynamicValidateForm3:{algorithmName:"",methodName:"",algorithmPath:"",dataPath:"/usr/local/apache-tomcat-9.0.34/webapps/ILCSData/",responsePath:"http://192.168.16.192:8085/ILCSData/"},dynamicValidateForm4:{domains:[{value:""}]},state1:"",WebProcessingService:[],fileList:[],selectedService:"",resname:""}},mounted(){this.WebProcessingService=this.loadAll()},methods:{removeSuffix(e){return e.replace(/.jar$/,"")},submitForm(e){this.$refs[e].validate(e=>{if(!e)return console.log("error submit!!"),!1;alert("submit!")})},resetForm(e){this.$refs[e].resetFields()},removeDomain(e){console.log(e);var t=this.dynamicValidateForm.domains.indexOf(e);-1!==t&&this.dynamicValidateForm.domains.splice(t,1)},removeDomain2(e){console.log(e);var t=this.dynamicValidateForm2.domains.indexOf(e);-1!==t&&this.dynamicValidateForm2.domains.splice(t,1)},addDomain(){this.dynamicValidateForm.domains.push({value:"",key:Date.now()})},addDomain2(){this.dynamicValidateForm2.domains.push({value:"",key:Date.now()})},addDomain3(){this.dynamicValidateForm3.domains.push({value:"",key:Date.now()})},publish(e){this.$refs[e].validate(e=>{if(e){var t=this.MakeIntensityXML(this.dynamicValidateForm,this.dynamicValidateForm2,this.dynamicValidateForm3);this.RequestAxios(t)}})},MakeIntensityXML(e,t,a){var l='<?xml version="1.0" encoding="UTF-8" standalone="yes"?><wps:Execute service="WPS" version="1.0.0" xmlns:wps="http://www.opengis.net/wps/1.0.0" xmlns:ows="http://www.opengis.net/ows/1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.opengis.net/wps/1.0.0 http://schemas.opengis.net/wps/1.0.0/wpsExecute_request.xsd"><ows:Identifier>'+e.methodsName+"</ows:Identifier><wps:DataInputs>"+this.makeFilePathXml(e)+this.makeLiteralXML(t)+this.markCongigXML(a)+'</wps:DataInputs><wps:ResponseForm><wps:RawDataOutput  asReference="false" ><ows:Identifier>literalOutput</ows:Identifier></wps:RawDataOutput></wps:ResponseForm></wps:Execute>';return l},makeFilePathXml(e){console.log();for(var t="",a=0;a<e.domains.length;a++){var l="image/tiff";t+='<wps:Input><ows:Identifier xmlns:ns1="http://www.opengis.net/ows/1.1">source</ows:Identifier><wps:Reference xlink:href="'+e.domains[a].value+'" mimeType="'+l+'" /></wps:Input>'}return t},makeLiteralXML(e){for(var t="",a=0;a<e.domains.length;a++)t+="<wps:Input><ows:Identifier>literalInput</ows:Identifier><wps:Data><wps:LiteralData >"+e.domains[a].value+"</wps:LiteralData></wps:Data></wps:Input>";return t},markCongigXML(e){var t="";for(const a in e){const l=e[a];console.log(`属性 ${a} 的值为: ${l}`),t+="<wps:Input><ows:Identifier>config</ows:Identifier><wps:Data><wps:LiteralData>"+l+"</wps:LiteralData></wps:Data></wps:Input>"}return t},open(e,t){this.$alert(t,e,{confirmButtonText:"确定",callback:e=>{this.$message({type:"info",message:"action: "+e})}})},RequestAxios(e){this.$message("服务执行中..");var t=e;const a=this;o.a.post(this.selectedService,t,{headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then(e=>{console.log(e),200==e.data[0].code&&(a.open("算法发布/执行成果","算法执行成功，结果保存在服务器文件中"+e.data[2].fileurl),a.resname=e.data[1].filename)}).catch((function(e){console.log(e)}))},handleBeforeUpload(e){const t=e.name;console.log(t)},handError(e,t,a){console.log(e)},querySearch(e,t){var a=this.WebProcessingService,l=e?a.filter(this.createFilter(e)):a;t(l)},handleSelect(e){console.log(e),this.selectedService=e.value},loadAll(){return[{value:"http://192.168.16.192:8085/wps/WebProcessingService",name:"山东水设服务器部署"},{value:"http://10.211.55.3:8083/wps/WebProcessingService",name:"虚拟机-项目启动"}]},handleRemove(e,t){console.log(e,t)},handlePreview(e){console.log(e)},handleChange(e,t){console.log(e,t),this.fileList=t},submitUpload(){if(""==this.fileList)this.$message({message:"请选择上传数据",type:"warning"});else{const e=new FormData;this.fileList.forEach(t=>{e.append("files",t.raw),console.log(t.raw,t)}),console.log(e),this.MultipartFile(e)}},downloadexample(){window.open("http://192.168.16.192:8086/file/download2client?filePath=/opt/lib/&fileName=k_.jar")},downloadResult(){window.open("http://192.168.16.192:8085/ILCSData/"+this.resname)},handleClick(e,t){console.log(e,t)},MultipartFile(e,t){o.a.post("http://192.168.16.192:8086/file/upload2server",e,{headers:{"Content-Type":"multipart/form-data"}}).then(e=>{console.log(e),200==e.status&&(this.$message({message:"文件上传成功",type:"success"}),this.dynamicValidateForm3.algorithmPath=e.data.files[0].fullpath,this.dynamicValidateForm3.methodName=this.removeSuffix(e.data.files[0].name),this.dynamicValidateForm3.algorithmName="matlab."+this.removeSuffix(e.data.files[0].name))}).catch(e=>{console.log("文件上传失败："+e)})}}},n=r,m=a("2877"),d=Object(m["a"])(n,l,s,!1,null,"28bcc14d",null);t["default"]=d.exports}}]);