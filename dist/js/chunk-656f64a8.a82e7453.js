(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-656f64a8","chunk-06ca5c03","chunk-2d2091ea"],{"99a3":function(t,s,o){},a0cb:function(t,s,o){"use strict";o.r(s);var i=function(){var t=this,s=t.$createElement,o=t._self._c||s;return o("div",{staticClass:"page-content",on:{mousedown:function(s){return t.startNodesBus(s)},mousemove:function(s){return t.moveNodesBus(s)},mouseup:function(s){return t.endNodesBus(s)}}},[o("DAGBoard",{attrs:{DataAll:t.DataAll},on:{updateDAG:t.updateDAG,editNodeDetails:t.editNodeDetails,doSthPersonal:t.doSthPersonal,getCoorXY:t.getCoorXYCon}})],1)},e=[],_=(o("14d9"),o("a863")),d={data(){return{DataAll:{edges:[{dst_input_idx:0,dst_node_id:2,id:1,src_node_id:1,src_output_idx:0},{dst_input_idx:0,dst_node_id:3,id:2,src_node_id:2,src_output_idx:0},{dst_input_idx:0,dst_node_id:4,id:3,src_node_id:3,src_output_idx:0}],nodes:[{id:1,in_ports:[0],name:"CVA变化向量检测",out_ports:[0],pos_x:50.33333333333334,pos_y:50.33333333333334,type:"Variable",iconClassName:"el-icon-link",rightClickEvent:[{label:"do some thing1",eventName:"eventOfDoSomeThingFirst"},{label:"do some thing2",eventName:"evnetOfDoSomeThingSecond"}],detail:[{label:"time",value:"2018"}]},{id:2,in_ports:[0],name:"K-Means聚类均值",iconClassName:"el-icon-cpu",out_ports:[0],pos_x:300,pos_y:50,rightClickEvent:[{label:"do some thing3",eventName:"eventOfDoSomeThingThird"},{label:"do some thing4",eventName:"evnetOfDoSomeThing4"}],type:"Variable"},{id:3,in_ports:[0],name:"Linear stretch 2%",iconClassName:"el-icon-cpu",out_ports:[0],pos_x:550,pos_y:50,type:"Variable"},{id:4,in_ports:[0],name:"Linear stretch 2%",iconClassName:"el-icon-cpu",out_ports:[0],pos_x:800,pos_y:50,type:"Variable"}]},clockOfAnimation:null,currentAnimate:0,maxAnimateFrames:0,animationArr:[],jsonshow:!1,getCoorXY:""}},created(){this.makeSomeAnimation()},props:["BeginPlay"],watch:{BeginPlay:{deep:!0,handler(t,s){1==t&&this.makeSomeAnimation()}}},methods:{backToExe(){this.$emit("backToExe",!0)},getCoorXYCon(t){this.getCoorXY=t},startNodesBus(t){let s=null;if(sessionStorage["dragDes"]&&(s=JSON.parse(sessionStorage["dragDes"])),s&&s.drag){const o=t.pageX,i=t.pageY;this.busValue=Object.assign({},this.busValue,{pos_x:o,pos_y:i,value:s.name}),this.dragBus=!0}},moveNodesBus(t){if(this.dragBus){const s=t.pageX,o=t.pageY;this.busValue=Object.assign({},this.busValue,{pos_x:s,pos_y:o})}},endNodesBus(t){let s=null;if(sessionStorage["dragDes"]&&(s=JSON.parse(sessionStorage["dragDes"])),s&&s.drag&&"svgContent"===t.toElement.id){const{model_id:o,type:i}=s,e=(t.offsetX-90-(sessionStorage["svg_left"]||0))/(sessionStorage["svgScale"]||1),_=(t.offsetY-15-(sessionStorage["svg_top"]||0))/(sessionStorage["svgScale"]||1),d={model_id:sessionStorage["newGraph"],desp:{type:i,pos_x:e,pos_y:_,name:this.busValue.value}};this.DataAll.nodes.push({...d.desp,id:this.DataAll.nodes.length+100,in_ports:[0],out_ports:[0]})}window.sessionStorage["dragDes"]=null,this.dragBus=!1},updateDAG(t,s){this.DataAll=t,this.jsonEditor=JSON.stringify(this.DataAll,null,4),console.log("actionName",t,s)},editNodeDetails(t){alert(`edit id ${t.id} , info : ${JSON.stringify(t.detail,null,4)} `)},doSthPersonal(t,s){alert(`edit personal things like ${t}, the id is ${s}, current node detail is ${JSON.stringify(this.DataAll.nodes.find(t=>t.id===s))}`)},makeSomeAnimation(){this.currentAnimate=0,this.animationArr.length||(this.animationArr=_["animationJSON1"]),this.maxAnimateFrames=this.animationArr.length,this.play()},play(){if(console.log("当前帧",this.currentAnimate,"最大帧",this.maxAnimateFrames),this.currentAnimate>=this.maxAnimateFrames)return!1;this.DataAll=this.animationArr[this.currentAnimate],this.jsonEditor=JSON.stringify(this.DataAll,null,4),this.currentAnimate++,setTimeout(()=>{this.play()},1500)}}},n=d,p=(o("bdda"),o("2877")),a=Object(p["a"])(n,i,e,!1,null,null,null);s["default"]=a.exports},a863:function(t,s,o){"use strict";o.r(s),o.d(s,"simple_example_data",(function(){return i})),o.d(s,"simple_r_click_data",(function(){return e})),o.d(s,"edges_example_data",(function(){return _})),o.d(s,"nodes_example_data",(function(){return d})),o.d(s,"text_example_data",(function(){return n})),o.d(s,"ports_example_data",(function(){return p})),o.d(s,"complex_example_data",(function(){return a})),o.d(s,"leads",(function(){return r})),o.d(s,"animationJSON1",(function(){return N}));const i={edges:[{dst_input_idx:0,dst_node_id:2,id:1,src_node_id:1,src_output_idx:0,edgesText:"running into subnode"}],nodes:[{id:1,in_ports:[0],name:"NODE_PARENT",out_ports:[0],pos_x:157,pos_y:120,type:"Variable",iconClassName:"el-icon-link",detail:[{label:"time",value:"2018"}]},{id:2,in_ports:[0],name:"NODE_CHILD",iconClassName:"el-icon-cpu",out_ports:[0],pos_x:459,pos_y:457,type:"Variable"}]},e={edges:[{dst_input_idx:0,dst_node_id:2,id:1,src_node_id:1,src_output_idx:0}],nodes:[{id:1,in_ports:[0],name:"NODE_PARENT",out_ports:[0],pos_x:157,pos_y:120,type:"Variable",iconClassName:"el-icon-link",rightClickEvent:[{label:"do some thing1",eventName:"eventOfDoSomeThingFirst"},{label:"do some thing2",eventName:"evnetOfDoSomeThingSecond"}],detail:[{label:"time",value:"2018"}]},{id:2,in_ports:[0],name:"NODE_CHILD",iconClassName:"el-icon-cpu",out_ports:[0],pos_x:459,pos_y:257,rightClickEvent:[{label:"do some thing3",eventName:"eventOfDoSomeThingThird"},{label:"do some thing4",eventName:"evnetOfDoSomeThing4"}],type:"Variable"}]},_={rectEdges:[{dst_input_idx:0,dst_node_id:2,id:1,src_node_id:1,src_output_idx:0,style:{"stroke-width":"4px",stroke:"red",animation:"none","stroke-dasharray":"0px"}}],nodes:[{id:1,in_ports:[0],name:"NODE_PARENT",out_ports:[0],pos_x:157,pos_y:120,type:"Variable"},{id:2,in_ports:[0],name:"NODE_CHILD",out_ports:[0],pos_x:459,pos_y:247,type:"Variable"}]},d={edges:[{dst_input_idx:0,dst_node_id:2,id:1,src_node_id:1,src_output_idx:0,type:"active"}],nodes:[{id:1,in_ports:[0],name:"NODE_PARENT",out_ports:[0],pos_x:157,pos_y:120,type:"Variable",nodeStyle:{border:"2px solid orange"},iconStyle:{background:"orange"}},{id:2,in_ports:[0],name:"NODE_CHILD",out_ports:[0],pos_x:459,pos_y:257,type:"Variable",nodeStyle:{border:"2px solid greenYellow"},iconStyle:{background:"red"}}]},n={edges:[{dst_input_idx:0,dst_node_id:2,id:1,src_node_id:1,src_output_idx:3,edgesText:"example text"},{dst_input_idx:1,dst_node_id:3,id:2,src_node_id:1,src_output_idx:1,edgesText:"personal style",textStyle:{fontSize:"12px",stroke:"yellow"}},{dst_input_idx:2,dst_node_id:3,id:3,src_node_id:1,src_output_idx:2}],nodes:[{id:1,in_ports:[0,1,2],name:"NODE_PARENT",out_ports:[0,1,2,3],pos_x:157,pos_y:120},{id:2,in_ports:[0,1,2],name:"NODE_CHILD",out_ports:[0,1],pos_x:459,pos_y:257},{id:3,in_ports:[0,1,2,3,4],name:"NODE_CHILD",out_ports:[0,1,2,3],pos_x:50,pos_y:400}]},p={edges:[{dst_input_idx:0,dst_node_id:2,id:1,src_node_id:1,src_output_idx:3},{dst_input_idx:1,dst_node_id:3,id:2,src_node_id:1,src_output_idx:1},{dst_input_idx:2,dst_node_id:3,id:3,src_node_id:1,src_output_idx:2}],nodes:[{id:1,in_ports:[0,1,2],name:"NODE_PARENT",out_ports:[0,1,2,3],pos_x:157,pos_y:120},{id:2,in_ports:[0,1,2],name:"NODE_CHILD",out_ports:[0,1],pos_x:459,pos_y:257},{id:3,in_ports:[0,1,2,3,4],name:"NODE_CHILD",out_ports:[0,1,2,3],pos_x:50,pos_y:400}]},a={edges:[{dst_input_idx:0,dst_node_id:1,id:2,src_node_id:0,src_output_idx:0,type:"active"},{dst_input_idx:0,dst_node_id:4,id:5,src_node_id:3,src_output_idx:0,type:"active"},{dst_input_idx:0,dst_node_id:7,id:8,src_node_id:6,src_output_idx:0,type:"active"},{dst_input_idx:0,dst_node_id:12,id:15,src_node_id:9,src_output_idx:0,type:"active"},{dst_input_idx:1,dst_node_id:12,id:16,src_node_id:1,src_output_idx:0,type:"active"},{dst_input_idx:0,dst_node_id:13,id:17,src_node_id:10,src_output_idx:0,type:"active"},{dst_input_idx:1,dst_node_id:13,id:18,src_node_id:4,src_output_idx:0},{dst_input_idx:0,dst_node_id:14,id:19,src_node_id:11,src_output_idx:0},{dst_input_idx:1,dst_node_id:14,id:20,src_node_id:7,src_output_idx:0},{dst_input_idx:0,dst_node_id:21,id:23,src_node_id:12,src_output_idx:0},{dst_input_idx:1,dst_node_id:21,id:24,src_node_id:13,src_output_idx:0},{dst_input_idx:2,dst_node_id:21,id:25,src_node_id:14,src_output_idx:0},{dst_input_idx:0,dst_node_id:22,id:26,src_node_id:21,src_output_idx:0},{dst_input_idx:0,dst_node_id:28,id:29,src_node_id:27,src_output_idx:0},{dst_input_idx:0,dst_node_id:31,id:32,src_node_id:30,src_output_idx:0},{dst_input_idx:0,dst_node_id:34,id:35,src_node_id:33,src_output_idx:0},{dst_input_idx:0,dst_node_id:37,id:38,src_node_id:36,src_output_idx:0},{dst_input_idx:0,dst_node_id:44,id:49,src_node_id:40,src_output_idx:0},{dst_input_idx:1,dst_node_id:44,id:50,src_node_id:37,src_output_idx:0},{dst_input_idx:0,dst_node_id:45,id:51,src_node_id:41,src_output_idx:0},{dst_input_idx:1,dst_node_id:45,id:52,src_node_id:28,src_output_idx:0},{dst_input_idx:0,dst_node_id:46,id:53,src_node_id:42,src_output_idx:0},{dst_input_idx:1,dst_node_id:46,id:54,src_node_id:31,src_output_idx:0},{dst_input_idx:0,dst_node_id:47,id:55,src_node_id:43,src_output_idx:0},{dst_input_idx:1,dst_node_id:47,id:56,src_node_id:34,src_output_idx:0},{dst_input_idx:0,dst_node_id:48,id:57,src_node_id:39,src_output_idx:0},{dst_input_idx:1,dst_node_id:48,id:58,src_node_id:21,src_output_idx:1},{dst_input_idx:0,dst_node_id:59,id:61,src_node_id:48,src_output_idx:0},{dst_input_idx:1,dst_node_id:59,id:62,src_node_id:46,src_output_idx:0},{dst_input_idx:2,dst_node_id:59,id:63,src_node_id:45,src_output_idx:0},{dst_input_idx:3,dst_node_id:59,id:64,src_node_id:44,src_output_idx:0},{dst_input_idx:4,dst_node_id:59,id:65,src_node_id:47,src_output_idx:0},{dst_input_idx:0,dst_node_id:60,id:66,src_node_id:59,src_output_idx:0}],nodes:[{id:0,in_ports:[],name:"X_SUB_PD0_V01",out_ports:[0,1,2,3,4],pos_x:295,pos_y:205,type:"Variable"},{id:1,in_ports:[0,1,2,3,4],name:"XGBoostOp",out_ports:[0,1,2,3,4],pos_x:108,pos_y:382,type:"XGBoostOp"},{id:3,in_ports:[],name:"X_SUB_PD0_V02",out_ports:[0,1,2,3,4],pos_x:513,pos_y:226,type:"Variable"},{id:4,in_ports:[0,1,2,3,4],name:"XGBoostOp",out_ports:[0,1,2,3,4],pos_x:374,pos_y:325,type:"XGBoostOp"},{id:6,in_ports:[],name:"X_SUB_PD0_V03",out_ports:[0,1,2,3,4],pos_x:803,pos_y:345,type:"Variable"},{id:7,in_ports:[0,1,2,3,4],name:"RandomForestClassifierOp",out_ports:[0,1,2,3,4],pos_x:608,pos_y:422,type:"RandomForestClassifierOp"},{id:9,in_ports:[],name:"Constant",out_ports:[0,1,2,3,4],pos_x:-5,pos_y:598,type:"Constant"},{id:10,in_ports:[],name:"Constant",out_ports:[0,1,2,3,4],pos_x:145,pos_y:469,type:"Constant"},{id:11,in_ports:[],name:"Constant",out_ports:[0,1,2,3,4],pos_x:407,pos_y:405,type:"Constant"},{id:12,in_ports:[0,1,2,3,4],name:"Multiply",out_ports:[0,1,2,3,4],pos_x:45,pos_y:734,type:"Multiply"},{id:13,in_ports:[0,1,2,3,4],name:"Multiply",out_ports:[0,1,2,3,4],pos_x:160,pos_y:619,type:"Multiply"},{id:14,in_ports:[0,1,2,3,4],name:"Multiply",out_ports:[0,1,2,3,4],pos_x:371,pos_y:506,type:"Multiply"},{id:21,in_ports:[0,1,2,3,4],name:"Add",out_ports:[0,1,2,3,4],pos_x:157,pos_y:856,type:"Add"},{id:22,in_ports:[0],name:"Output",out_ports:[],pos_x:5,pos_y:932,type:"Output"},{id:27,in_ports:[],name:"X_SUB_169",out_ports:[0,1,2,3,4],pos_x:1301,pos_y:330,type:"Variable"},{id:28,in_ports:[0,1,2,3,4],name:"XGBoostOp",out_ports:[0,1,2,3,4],pos_x:897,pos_y:692,type:"XGBoostOp"},{id:30,in_ports:[],name:"X_SUB_PD1",out_ports:[0,1,2,3,4],pos_x:1025,pos_y:334,type:"Variable"},{id:31,in_ports:[0,1,2,3,4],name:"XGBoostOp",out_ports:[0,1,2,3,4],pos_x:637,pos_y:570,type:"XGBoostOp"},{id:33,in_ports:[],name:"X_SUB_111_V01",out_ports:[0,1,2,3,4],pos_x:2067,pos_y:350,type:"Variable"},{id:34,in_ports:[0,1,2,3,4],name:"XGBoostOp",out_ports:[0,1,2,3,4],pos_x:1861,pos_y:664,type:"XGBoostOp"},{id:36,in_ports:[],name:"X_SUB_PD0_HISTORY",out_ports:[0,1,2,3,4],pos_x:1643,pos_y:330,type:"Variable"},{id:37,in_ports:[0,1,2,3,4],name:"XGBoostOp",out_ports:[0,1,2,3,4],pos_x:1197,pos_y:696,type:"XGBoostOp"},{id:39,in_ports:[],name:"Constant",out_ports:[0,1,2,3,4],pos_x:8,pos_y:1003,type:"Constant"},{id:40,in_ports:[],name:"Constant",out_ports:[0,1,2,3,4],pos_x:917,pos_y:792,type:"Constant"},{id:41,in_ports:[],name:"Constant",out_ports:[0,1,2,3,4],pos_x:629,pos_y:674,type:"Constant"},{id:42,in_ports:[],name:"Constant",out_ports:[0,1,2,3,4],pos_x:413,pos_y:574,type:"Constant"},{id:43,in_ports:[],name:"Constant",out_ports:[0,1,2,3,4],pos_x:1643,pos_y:662,type:"Constant"},{id:44,in_ports:[0,1,2,3,4],name:"Multiply",out_ports:[0,1,2,3,4],pos_x:997,pos_y:954,type:"Multiply"},{id:45,in_ports:[0,1,2,3,4],name:"Multiply",out_ports:[0,1,2,3,4],pos_x:671,pos_y:788,type:"Multiply"},{id:46,in_ports:[0,1,2,3,4],name:"Multiply",out_ports:[0,1,2,3,4],pos_x:371,pos_y:790,type:"Multiply"},{id:47,in_ports:[0,1,2,3,4],name:"Multiply",out_ports:[0,1,2,3,4],pos_x:1495,pos_y:942,type:"Multiply"},{id:48,in_ports:[0,1,2,3,4],name:"Multiply",out_ports:[0,1,2,3,4],pos_x:303,pos_y:1122,type:"Multiply"},{id:59,in_ports:[0,1,2,3,4],name:"Add",out_ports:[0,1,2,3,4],pos_x:887,pos_y:1180,type:"Add"},{id:60,in_ports:[0],name:"Output2",out_ports:[],pos_x:881,pos_y:1266,type:"Output"}]},r=[{label:"simple example",children:[{label:"basic",value:i},{label:"expend edges",value:_},{label:"expend nodes",value:d},{label:"add ports",value:p},{label:"edge text",value:n},{label:"personal r_click",value:e}]},{label:"complex example",children:[{label:"basic",value:a}]}],u={id:1,in_ports:[],name:"数据载入",out_ports:[0],iconClassName:"el-icon-loading",pos_x:554.3142857142857,pos_y:24.838095238095207},l={pos_x:104.66666666666666,pos_y:125.33333333333334,name:"PCA",id:202,in_ports:[0],out_ports:[0]},c={pos_x:104.66666666666666,pos_y:125.33333333333334,name:"PCA",id:202,iconClassName:"el-icon-loading",in_ports:[0],out_ports:[0]},x={pos_x:424.6666666666667,pos_y:113.33333333333333,name:"CVA",id:201,in_ports:[0],out_ports:[0]},m={pos_x:724.6666666666666,pos_y:125.33333333333334,name:"MAD",id:203,in_ports:[0],out_ports:[0]},y={pos_x:1024.6666666666667,pos_y:125.33333333333334,name:"IRMAD",id:204,in_ports:[0],out_ports:[0]},g={pos_x:442,pos_y:237.66666666666666,name:"K-Means聚类均值",id:301,in_ports:[0],out_ports:[0]},h={pos_x:442,pos_y:237.66666666666666,name:"K-Means聚类均值",id:301,iconClassName:"el-icon-loading",in_ports:[0],out_ports:[0,1]},v={pos_x:742,pos_y:237.66666666666666,name:" OTSU",id:302,in_ports:[0],out_ports:[0]},b={pos_x:663.6666666666667,pos_y:374.3333333333333,name:"Linear stretch 2%",id:401,in_ports:[0],out_ports:[0]},C={pos_x:663.6666666666667,pos_y:374.3333333333333,name:"Linear stretch 2%",id:401,iconClassName:"el-icon-loading",in_ports:[0],out_ports:[0]},N=[{edges:[],nodes:[u]},{edges:[],nodes:[u,x,l,m,y]},{edges:[{src_node_id:1,src_output_idx:0,dst_node_id:202,dst_input_idx:0,id:10}],nodes:[u,x,l,m,y]},{edges:[{src_node_id:1,src_output_idx:0,dst_node_id:202,dst_input_idx:0,id:10}],nodes:[u,x,m,y,l,g,v]},{edges:[{src_node_id:1,src_output_idx:0,dst_node_id:202,dst_input_idx:0,id:10},{src_node_id:202,src_output_idx:0,dst_node_id:301,dst_input_idx:0,id:11}],nodes:[u,x,m,y,c,g,v]},{edges:[{src_node_id:1,src_output_idx:0,dst_node_id:202,dst_input_idx:0,id:10},{src_node_id:202,src_output_idx:0,dst_node_id:301,dst_input_idx:0,id:11}],nodes:[u,x,m,y,c,g,v,b]},{edges:[{src_node_id:1,src_output_idx:0,dst_node_id:202,dst_input_idx:0,id:10},{src_node_id:202,src_output_idx:0,dst_node_id:301,dst_input_idx:0,id:11},{src_node_id:301,src_output_idx:0,dst_node_id:401,dst_input_idx:0,id:13}],nodes:[u,x,m,y,c,h,v,C]}]},b9c2:function(t,s,o){"use strict";o("cdc8")},bdda:function(t,s,o){"use strict";o("99a3")},c4bb:function(t,s,o){"use strict";o.r(s);var i=function(){var t=this,s=t.$createElement,o=t._self._c||s;return o("div",{staticClass:"collapse"},[o("el-collapse",{on:{change:t.handleChange},model:{value:t.activeNames,callback:function(s){t.activeNames=s},expression:"activeNames"}},[o("el-collapse-item",{attrs:{name:"1"}},[o("template",{slot:"title"},[o("i",{staticClass:"header-icon el-icon-document-copy"}),t._v(" 数据(Data) ")]),o("div")],2),o("el-collapse-item",{attrs:{name:"2"}},[o("template",{slot:"title"},[o("i",{staticClass:"header-icon el-icon-more"}),t._v(" 服务(Service) ")]),o("ServicesChain"),o("div")],2),o("el-collapse-item",{attrs:{name:"3"}},[o("template",{slot:"title"},[o("i",{staticClass:"header-icon el-icon-stopwatch"}),t._v(" 执行(Execute) ")]),o("div"),o("div"),o("div")],2),o("el-collapse-item",{attrs:{name:"4"}},[o("template",{slot:"title"},[o("i",{staticClass:"header-icon el-icon-pie-chart"}),t._v(" 结果(Results) ")]),o("div"),o("div")],2)],1)],1)},e=[],_=o("a0cb"),d={data(){return{activeNames:["2"]}},methods:{handleChange(t){console.log(t)}},components:{ServicesChain:_["default"]}},n=d,p=(o("b9c2"),o("2877")),a=Object(p["a"])(n,i,e,!1,null,null,null);s["default"]=a.exports},cdc8:function(t,s,o){}}]);