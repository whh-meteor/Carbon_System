<template>
  <div id="app">
    <!-- <head-top></head-top> -->

    <el-form :model="form" :rules="rules" ref="form">
      <el-table :data="form.datas" highlight-current-row style="width: 100%">
        <el-table-column prop="id" label="序号" width="60"></el-table-column>

        <el-table-column prop="name" label="标识符">
          <template slot-scope="scope">
            <template v-if="scope.row.action == 'view'">
              {{ scope.row.identifier }}
            </template>
            <template v-else>
              <el-form-item :prop="'datas.' + scope.$index + '.name'" :rules='rules.identifier'>
                <el-input size="mini" v-model.trim="scope.row.identifier" style="width: 320px;"></el-input>
              </el-form-item>
            </template>
          </template>
        </el-table-column>

        <el-table-column prop="name" label="标题">
          <template slot-scope="scope">
            <template v-if="scope.row.action == 'view'">
              {{ scope.row.title }}
            </template>
            <template v-else>
              <el-form-item :prop="'datas.' + scope.$index + '.title'" :rules='rules.title'>
                <el-input size="mini" v-model.number="scope.row.title" style="width: 60px;"></el-input>
              </el-form-item>
            </template>
          </template>
        </el-table-column>


        <el-table-column prop="name" label="描述地址">
          <template slot-scope="scope">
            <template v-if="scope.row.action == 'view'">
              <el-link type="success" :underline="false" :href="scope.row.abstract ">    {{ scope.row.abstract }}</el-link>
          
            </template>
            <template v-else>
              <el-form-item :prop="'datas.' + scope.$index + '.abstract'" :rules='rules.abstract'>
                <el-input size="mini" v-model.number="scope.row.abstract" style="width: 160px;"></el-input>
              </el-form-item>
            </template>
          </template>
        </el-table-column>

        <el-table-column prop="operation" label="操作">
          <template slot-scope="scope">
            <template v-if="scope.row.action == 'view'">
              <el-button size="mini" @click="click_edit(scope.row, scope.$index)">编辑</el-button>
              <el-button size="mini" @click="click_delete(scope.row, scope.$index)">删除</el-button>
            </template>
            <template v-else-if="scope.row.action == 'add'">
              <el-button size="mini" @click="click_add(scope.row, scope.$index)">新增</el-button>
              <el-button size="mini" @click="click_reset(scope.row, scope.$index)">重置</el-button>
            </template>
            <template v-else>
              <el-button size="mini" @click="click_save(scope.row, scope.$index)">保存</el-button>
              <el-button size="mini" @click="click_cancle(scope.row, scope.$index)">取消</el-button>
            </template>
          </template>
        </el-table-column>
      </el-table>
    </el-form>
  </div>
</template>
<script>



</script>
  <script>
 import { getRegisWPS } from "@/api/getData";
  // import headTop from '@/components/headTop'
    export default {
    //     components: {
    //     headTop
    // },
      data() {
        return {
          form: {
            datas: [
              { id: 1, name: "CVA", age:20,abstract:'变化强度计算'},
              { id: 2, name: "OTSU", age:32 ,abstract:'阈值分割'},
            ],
          },
  
          //表单验证规则
          rules: {
            name: [{
              type: 'string',
              required: true,
              trigger: 'blur',
              message: '请输入Identifer',
            }],
            abstract: {
              type: 'string',
              required: false,
              trigger: 'blur',
              message: '请输入摘要',
            },
            age: [{
              type: 'String',
              required: true,
              trigger: 'blur',
              message: '请输入年龄',
            },




            
            {
              type: 'number',
              trigger: 'blur',
              min: 0,
              max: 120,
              message: '年龄最小0，最大120',
            }],
          }
        }
      },
  
      created() {
        //处理数据，为已有数据添加action:'view'
        this.form.datas.map(item => {
          this.$set(item,"action","view")
          return item;
        });
  
        //再插入一条添加操作的数据
        this.form.datas.unshift({
          id:undefined,
          name:undefined,
          age:undefined,
          action: "add"
        });
      },
  mounted(){
this.getWPS()

  },
      methods: {
       async getWPS(){

        const WpsList =   await getRegisWPS();
        // console.log(WpsList.data)
        var xml  = WpsList.data

        // const xml = `<wps:Capabilities>...</wps:Capabilities>`; // XML字符串

const parser = new DOMParser();
const doc = parser.parseFromString(xml, 'application/xml');

 

// 获取命名空间映射
const namespaces = doc.documentElement.attributes;
const wpsNamespace = namespaces.getNamedItem('xmlns:wps').value;
const owsNamespace = namespaces.getNamedItem('xmlns:ows').value; 

// 在查询选择器中使用完整命名空间
// const processes = doc.querySelectorAll(`${wpsNamespace}:Process`);
const processes = doc.getElementsByTagNameNS(wpsNamespace, 'Process');
let identifiers=[]
let id = 0;
for(let process of processes) {

  const identifier = process.getElementsByTagNameNS(owsNamespace, 'Identifier');
  const Title = process.getElementsByTagNameNS(owsNamespace, 'Title');
  if(id === 0 ){
    identifiers.push({
    id: 0,
    identifier:'',  
    title:'',
    abstract:'',
    action:'add'
  });
 }else {
  identifiers.push({
    id: id,
    // identifier:identifier[0].textContent.replace(/^org\.n52\.wps\.server\.algorithm\./, ''),  
    identifier:identifier[0].textContent,
    title: Title[0].textContent.replace(/^org\.n52\.wps\.server\.algorithm\./, ''),
    abstract:'http://192.168.16.192:8085/wps/WebProcessingService?service=WPS&version=1.0.0&request=DescribeProcess&identifier='+identifier[0].textContent,
    action:'view'
  });
 }

  id++;
 
}

const json = JSON.stringify(identifiers);

const obj = JSON.parse(json)

console.log(obj);

this.form.datas = obj

        },

        //对部分表单字段进行校验
        validateField(form,index){
          let result = true;
          for (let item of this.$refs[form].fields) {
            if(item.prop.split(".")[1] == index){
              this.$refs[form].validateField(item.prop,(error)=>{
                if(error!=""){
                  result = false;
                }
              });
            }
            if(!result) break;
          }
          return result;
        },
        
        //对部分表单字段进行重置
        resetField(form,index){
          this.$refs[form].fields.forEach(item=>{
            if(item.prop.split(".")[1] == index){
              item.resetField();
            }
          })
        },
        
        //新增操作
        click_add(item,index) {
          if( !this.validateField('form',index) ) return;
          //模拟新增一条数据
          let itemClone = JSON.parse(JSON.stringify(item));
          itemClone.id = this.form.datas.length;
          itemClone.action = "view";
          this.form.datas.push(itemClone);
          this.resetField('form',index);
        },
        
        //新增-重置操作
        click_reset(item,index) {
          this.resetField('form',index);
        },
        
        //编辑-保存操作
        click_save(item,index) {
          if( !this.validateField('form',index) ) return;
          item.action = "view";
        },
        
        //编辑-取消操作
        click_cancle(item,index) {
          this.resetField('form',index);
          item.action = "view";
        },
        
        //编辑操作
        click_edit(item,index) {
          item.action = "edit";
        },
  
        //删除操作
        click_delete(item,index) {
          this.$confirm("确定删除该条数据(ID" + item.id + ")吗?", "提示", {
              confirmButtonText: "确定",
              cancelButtonText: "取消",
              type: "warning"
            })
            .then(() => {
              //模拟删除一条数据
              this.form.datas.splice(index,1);
            })
            .catch(() => {});
        },
  
      },
    }
  </script>
  
  
<style>
.el-table .cell {
  overflow: visible;
}

.el-form-item {
  margin-bottom: 0;
}

.el-form-item__error {
  padding-top: 0;
  margin-top: -3px;
}
</style>