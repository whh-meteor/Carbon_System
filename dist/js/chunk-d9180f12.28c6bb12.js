(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d9180f12","chunk-2d0aa53d","chunk-3d5ad3e0","chunk-2d0b64ba","chunk-2d21a084","chunk-2d0ea116","chunk-2d0e51e1","chunk-2d0be65d"],{1118:function(t,e,i){"use strict";i.r(e),i.d(e,"recommendList",(function(){return s})),i.d(e,"chartsRightList",(function(){return a})),i.d(e,"newsInfoList",(function(){return o})),i.d(e,"dailyMessage",(function(){return n}));const s=[{title:"优惠券",msg:"现金券、折扣券、营销必备",icon:"el-icon-food",bg:"#48D18D",iconColor:"#64d89d"},{title:"多人拼团",msg:"社交电商、开辟流量",icon:"el-icon-shopping-bag-1",bg:"#F95959",iconColor:"#F86C6B"},{title:"分销中心",msg:"轻松招募分销员，成功推广奖励",icon:"el-icon-school",bg:"#8595F4",iconColor:"#92A1F4"},{title:"秒杀",msg:"超低价抢购引导更多销量",icon:"el-icon-alarm-clock",bg:"#FEBB50",iconColor:"#FDC566"}],a=[{title:"距离60分钟订单数量",num:188,icon:"el-icon-document",iconBg:"#C3E9FE",color:"#1890FF"},{title:"距离30分钟订单数量",num:15,icon:"el-icon-tickets",iconBg:"#F1EBC5",color:"#FDB850"},{title:"已超时数量",num:6,icon:"el-icon-document-delete",iconBg:"#F2D7C4",color:"#F8958C"}],o=[{title:"[发布] 2021年02月28日发布基于 vue3.x + vite v1.0.0 版本",date:"02/28",link:"https://gitee.com/lyt-top/vue-next-admin"},{title:"[发布] 2021年04月15日发布 vue2.x + webpack 重构版本",date:"04/15",link:"https://gitee.com/lyt-top/vue-next-admin/tree/vue-prev-admin/"},{title:"[重构] 2021年04月10日 重构 vue2.x + webpack v1.0.0 版本",date:"04/10",link:"https://gitee.com/lyt-top/vue-next-admin/tree/vue-prev-admin/"},{title:"[预览] 2020年12月08日，基于 vue3.x 版本后台模板的预览",date:"12/08",link:"http://lyt-top.gitee.io/vue-next-admin-preview/#/login"},{title:"[预览] 2020年11月15日，基于 vue2.x 版本后台模板的预览",date:"11/15",link:"https://lyt-top.gitee.io/vue-prev-admin-preview/#/login"}],n=["祝你开心每一天！","忙碌了一周，停一停脚步！","世间美好，与你环环相扣！","永远相信美好的事情即将发生！","每一天，遇见更好的自己！","保持热爱，奔赴山海！","生活明朗，万物可爱！","愿每一天醒来都是美好的开始！","没有希望的地方，就没有奋斗！","我最珍贵的时光都行走在路上！","成功，往往住在失败的隔壁！","人只要不失去方向，就不会失去自己！","每条堵住的路，都有一个出口！","没有谁能击垮你，除非你自甘堕落！","微笑着的人并非没有痛苦！","生活变的再糟糕，也不妨碍我变得更好！","你要悄悄努力，然后惊艳众人！"]},"1d0a":function(t,e,i){"use strict";function s(t,e){let i=t.getDay(),s=Math.floor((t.getMonth()+3)/3).toString();const a={"Y+":t.getFullYear().toString(),"m+":(t.getMonth()+1).toString(),"d+":t.getDate().toString(),"H+":t.getHours().toString(),"M+":t.getMinutes().toString(),"S+":t.getSeconds().toString(),"q+":s},o={0:"日",1:"一",2:"二",3:"三",4:"四",5:"五",6:"六"},n={1:"一",2:"二",3:"三",4:"四"};/(W+)/.test(e)&&(e=e.replace(RegExp.$1,RegExp.$1.length>1?RegExp.$1.length>2?"星期"+o[i]:"周"+o[i]:o[i])),/(Q+)/.test(e)&&(e=e.replace(RegExp.$1,4==RegExp.$1.length?"第"+n[s]+"季度":n[s]));for(let r in a){let t=new RegExp("("+r+")").exec(e);t&&(e=e.replace(t[1],1==RegExp.$1.length?a[r]:a[r].padStart(RegExp.$1.length,"0")))}return e}function a(t,e="YYYY-mm-dd"){let i,a,o=(new Date).getTime();if(i=new Date(t).getTime(),o=Number.parseInt(o-i),o<1e4)return"刚刚";if(o<6e4&&o>=1e4)return a=Math.floor(o/1e3),a+"秒前";if(o<36e5&&o>=6e4)return a=Math.floor(o/6e4),a+"分钟前";if(o<864e5&&o>=36e5)return a=Math.floor(o/36e5),a+"小时前";if(o<2592e5&&o>=864e5)return a=Math.floor(o/864e5),a+"天前";{let i=new Date(t);return s(i,e)}}function o(t){let e=new Date(t).getHours();return e<6?"凌晨好":e<9?"早上好":e<12?"上午好":e<14?"中午好":e<17?"下午好":e<19?"傍晚好":e<22?"晚上好":"夜里好"}i.r(e),i.d(e,"formatDate",(function(){return s})),i.d(e,"formatPast",(function(){return a})),i.d(e,"formatAxis",(function(){return o}))},"2fa4":function(t,e,i){t.exports=i.p+"img/pca-kmeans.2e2e382f.jpg"},"6b36":function(t,e,i){"use strict";i("9545")},"78ad":function(t,e,i){"use strict";i("e9cc")},"7abe":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"home"},[i("el-row",{attrs:{gutter:15}},[i("el-col",{staticClass:"mb15",attrs:{md:24,lg:16,xl:16}},[i("el-card",{attrs:{shadow:"hover"}},[i("div",{attrs:{slot:"header"},slot:"header"},[i("span",[t._v(t._s(t.$t("message.card.title1")))])]),i("div",{staticClass:"user-item"},[i("div",{staticClass:"user-item-left"},[i("img",{attrs:{src:t.getUserInfos.photo}})]),i("div",{staticClass:"user-item-right overflow"},[i("el-row",[i("el-col",{staticClass:"right-title mb15 one-text-overflow",attrs:{span:24}},[t._v(t._s(t.currentTime)+"，"+t._s(t.getUserInfos.userName)+"，"+t._s(t.dailyMessage)+" ")]),i("el-col",{attrs:{span:24}},[i("el-col",{staticClass:"right-l-v",attrs:{xs:12,sm:12,md:8}},[i("div",{staticClass:"right-label"},[t._v("昵称：")]),i("div",{staticClass:"right-value"},[t._v("王海航")])]),i("el-col",{staticClass:"right-l-v",attrs:{xs:12,sm:12,md:16}},[i("div",{staticClass:"right-label"},[t._v("身份：")]),i("div",{staticClass:"right-value"},[t._v(t._s("admin"===t.userInfo.userName?"超级管理":"普通用户"))])])],1),i("el-col",{staticClass:"mt5",attrs:{span:24}},[i("el-col",{staticClass:"right-l-v",attrs:{xs:12,sm:12,md:8}},[i("div",{staticClass:"right-label one-text-overflow"},[t._v("IP：")]),i("div",{staticClass:"right-value one-text-overflow"},[t._v("192.168.1.1")])]),i("el-col",{staticClass:"right-l-v",attrs:{xs:12,sm:12,md:16}},[i("div",{staticClass:"right-label one-text-overflow"},[t._v("时间：")]),i("div",{staticClass:"right-value one-text-overflow"},[t._v(t._s(t.userInfo.time))])])],1),i("el-col",{staticClass:"mt15",attrs:{span:24}},[i("el-button",{attrs:{size:"small",icon:"el-icon-edit-outline"}},[t._v("修改信息 ")]),i("el-button",{attrs:{size:"small",icon:"el-icon-position",type:"primary"}},[t._v("发布活动")])],1)],1)],1)])])],1),i("el-col",{staticClass:"mb15",attrs:{md:24,lg:8,xl:8}},[i("el-card",{attrs:{shadow:"hover"}},[i("div",{attrs:{slot:"header"},slot:"header"},[i("span",[t._v(t._s(t.$t("message.card.title2")))]),i("el-button",{staticClass:"home-card-more",attrs:{type:"text"},on:{click:t.onOpenGitee}},[t._v(t._s(t.$t("message.card.title3")))])],1),i("div",{staticClass:"info"},[i("Scroll",{staticClass:"info-scroll",attrs:{data:t.newsInfoList,"class-option":t.optionSingleHeight}},[i("ul",{staticClass:"info-ul"},t._l(t.newsInfoList,(function(e,s){return i("li",{key:s,staticClass:"info-item",on:{click:function(i){return t.onNewsInfoListClick(e)}}},[i("div",{staticClass:"info-item-left",domProps:{textContent:t._s(e.title)}}),i("div",{staticClass:"info-item-right",domProps:{textContent:t._s(e.date)}})])})),0)])],1)])],1)],1),i("el-card",{attrs:{shadow:"hover"}},[i("div",{attrs:{slot:"header"},slot:"header"},[i("span",[t._v(t._s(t.$t("message.card.title4")))]),i("el-button",{staticClass:"home-card-more",attrs:{type:"text"},on:{click:t.onOpenGitee}},[t._v(t._s(t.$t("message.card.title5")))])],1),i("AlgorithmCard")],1),i("el-row",{staticClass:"mt15",attrs:{gutter:15}},[i("el-col",{staticClass:"mb15",attrs:{md:24,lg:8,xl:8}},[i("el-card",{attrs:{shadow:"hover"}},[i("div",{attrs:{slot:"header"},slot:"header"},[i("span",[t._v(t._s(t.$t("message.card.title6")))])]),i("div",{staticClass:"charts"},[i("div",{staticClass:"charts-right"},[i("div",{ref:"homeStockRef",staticClass:"h100"})])])])],1),i("el-col",{staticClass:"mb15",attrs:{md:24,lg:16,xl:16}},[i("el-card",{attrs:{shadow:"hover"}},[i("div",{attrs:{slot:"header"},slot:"header"},[i("span",[t._v(t._s(t.$t("message.card.title7")))])]),i("div",{staticClass:"charts"},[i("div",{staticClass:"charts-left mr7"},[i("div",{ref:"homeLaboratoryRef",staticClass:"h100"})])])])],1)],1),i("el-row",{attrs:{gutter:15}},[i("el-col",{staticClass:"home-lg",attrs:{md:24,lg:16,xl:16}},[i("el-card",{attrs:{shadow:"hover"}},[i("div",{attrs:{slot:"header"},slot:"header"},[i("span",[t._v(t._s(t.$t("message.card.title8")))])]),i("div",{staticClass:"charts"},[i("div",{staticClass:"charts-left mr7"},[i("div",{ref:"homeOvertimeRef",staticClass:"h100"})])])])],1),i("el-col",{attrs:{md:24,lg:8,xl:8}},[i("el-card",{attrs:{shadow:"hover"}},[i("div",{attrs:{slot:"header"},slot:"header"},[i("span",[t._v(t._s(t.$t("message.card.title9")))])]),i("div",{staticClass:"home-charts"},t._l(t.chartsRightList,(function(e,s){return i("div",{key:s,staticClass:"home-charts-item"},[i("div",{staticClass:"home-charts-item-left"},[i("div",{staticClass:"home-charts-item-title"},[t._v(t._s(e.title))]),i("div",{staticClass:"home-charts-item-num",style:{color:e.color},attrs:{id:"titleNum"+(s+1)}})]),i("div",{staticClass:"home-charts-item-right"},[i("i",{class:e.icon,style:{"background-color":e.iconBg,color:e.color}})])])})),0)])],1)],1)],1)},a=[],o=i("e81e"),n=i("313e"),r=i("a939"),l=i.n(r),h=function(){return(h=Object.assign||function(t){for(var e,i=1,s=arguments.length;i<s;i++)for(var a in e=arguments[i])Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t}).apply(this,arguments)},c=function(){function t(t,e,i){var s=this;this.target=t,this.endVal=e,this.options=i,this.version="2.0.8",this.defaults={startVal:0,decimalPlaces:0,duration:2,useEasing:!0,useGrouping:!0,smartEasingThreshold:999,smartEasingAmount:333,separator:",",decimal:".",prefix:"",suffix:""},this.finalEndVal=null,this.useEasing=!0,this.countDown=!1,this.error="",this.startVal=0,this.paused=!0,this.count=function(t){s.startTime||(s.startTime=t);var e=t-s.startTime;s.remaining=s.duration-e,s.useEasing?s.countDown?s.frameVal=s.startVal-s.easingFn(e,0,s.startVal-s.endVal,s.duration):s.frameVal=s.easingFn(e,s.startVal,s.endVal-s.startVal,s.duration):s.countDown?s.frameVal=s.startVal-(s.startVal-s.endVal)*(e/s.duration):s.frameVal=s.startVal+(s.endVal-s.startVal)*(e/s.duration),s.countDown?s.frameVal=s.frameVal<s.endVal?s.endVal:s.frameVal:s.frameVal=s.frameVal>s.endVal?s.endVal:s.frameVal,s.frameVal=Number(s.frameVal.toFixed(s.options.decimalPlaces)),s.printValue(s.frameVal),e<s.duration?s.rAF=requestAnimationFrame(s.count):null!==s.finalEndVal?s.update(s.finalEndVal):s.callback&&s.callback()},this.formatNumber=function(t){var e,i,a,o,n=t<0?"-":"";e=Math.abs(t).toFixed(s.options.decimalPlaces);var r=(e+="").split(".");if(i=r[0],a=r.length>1?s.options.decimal+r[1]:"",s.options.useGrouping){o="";for(var l=0,h=i.length;l<h;++l)0!==l&&l%3==0&&(o=s.options.separator+o),o=i[h-l-1]+o;i=o}return s.options.numerals&&s.options.numerals.length&&(i=i.replace(/[0-9]/g,(function(t){return s.options.numerals[+t]})),a=a.replace(/[0-9]/g,(function(t){return s.options.numerals[+t]}))),n+s.options.prefix+i+a+s.options.suffix},this.easeOutExpo=function(t,e,i,s){return i*(1-Math.pow(2,-10*t/s))*1024/1023+e},this.options=h(h({},this.defaults),i),this.formattingFn=this.options.formattingFn?this.options.formattingFn:this.formatNumber,this.easingFn=this.options.easingFn?this.options.easingFn:this.easeOutExpo,this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.endVal=this.validateValue(e),this.options.decimalPlaces=Math.max(this.options.decimalPlaces),this.resetDuration(),this.options.separator=String(this.options.separator),this.useEasing=this.options.useEasing,""===this.options.separator&&(this.options.useGrouping=!1),this.el="string"==typeof t?document.getElementById(t):t,this.el?this.printValue(this.startVal):this.error="[CountUp] target is null or undefined"}return t.prototype.determineDirectionAndSmartEasing=function(){var t=this.finalEndVal?this.finalEndVal:this.endVal;this.countDown=this.startVal>t;var e=t-this.startVal;if(Math.abs(e)>this.options.smartEasingThreshold){this.finalEndVal=t;var i=this.countDown?1:-1;this.endVal=t+i*this.options.smartEasingAmount,this.duration=this.duration/2}else this.endVal=t,this.finalEndVal=null;this.finalEndVal?this.useEasing=!1:this.useEasing=this.options.useEasing},t.prototype.start=function(t){this.error||(this.callback=t,this.duration>0?(this.determineDirectionAndSmartEasing(),this.paused=!1,this.rAF=requestAnimationFrame(this.count)):this.printValue(this.endVal))},t.prototype.pauseResume=function(){this.paused?(this.startTime=null,this.duration=this.remaining,this.startVal=this.frameVal,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count)):cancelAnimationFrame(this.rAF),this.paused=!this.paused},t.prototype.reset=function(){cancelAnimationFrame(this.rAF),this.paused=!0,this.resetDuration(),this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.printValue(this.startVal)},t.prototype.update=function(t){cancelAnimationFrame(this.rAF),this.startTime=null,this.endVal=this.validateValue(t),this.endVal!==this.frameVal&&(this.startVal=this.frameVal,this.finalEndVal||this.resetDuration(),this.finalEndVal=null,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count))},t.prototype.printValue=function(t){var e=this.formattingFn(t);"INPUT"===this.el.tagName?this.el.value=e:"text"===this.el.tagName||"tspan"===this.el.tagName?this.el.textContent=e:this.el.innerHTML=e},t.prototype.ensureNumber=function(t){return"number"==typeof t&&!isNaN(t)},t.prototype.validateValue=function(t){var e=Number(t);return this.ensureNumber(e)?e:(this.error="[CountUp] invalid start or end value: "+t,null)},t.prototype.resetDuration=function(){this.startTime=null,this.duration=1e3*Number(this.options.duration),this.remaining=this.duration},t}(),u=i("5d2d"),d=i("1d0a"),m=i("1118"),f={name:"home",components:{Scroll:l.a,AlgorithmCard:o["default"]},data(){return{recommendList:m["recommendList"],chartsRightList:m["chartsRightList"],newsInfoList:m["newsInfoList"],userInfo:{},dailyMessage:{},charts:{theme:"",bgColor:""},global:{homeChartOne:null,homeChartTwo:null,homeCharThree:null,dispose:[null,"",void 0]}}},created(){this.initUserInfo(),this.initDailyMessage()},computed:{currentTime(){return Object(d["formatAxis"])(new Date)},optionSingleHeight(){return{singleHeight:28,limitMoveNum:8,waitTime:2e3}},getUserInfos(){return this.$store.state.userInfos.userInfos}},mounted(){this.initHomeStock(),this.initHomeLaboratory(),this.initHomeOvertime(),this.initNumCountUp()},methods:{initNumCountUp(){this.$nextTick(()=>{new c("titleNum1",1e5*Math.random()).start(),new c("titleNum2",1e5*Math.random()).start(),new c("titleNum3",1e5*Math.random()).start()})},initHomeStock(){this.global.dispose.some(t=>t===this.global.homeChartOne)||this.global.homeChartOne.dispose(),this.global.homeChartOne=n["a"](this.$refs.homeStockRef,this.charts.theme);const t={backgroundColor:this.charts.bgColor,grid:{top:50,right:20,bottom:30,left:30},tooltip:{trigger:"item"},legend:{left:"center"},series:[{name:"邮件营销",type:"pie",radius:["40%","70%"],avoidLabelOverlap:!1,itemStyle:{borderRadius:10,borderColor:"#fff",borderWidth:2},data:[{value:580,name:"邮件营销"},{value:300,name:"视频广告"},{value:230,name:"联盟广告"}],top:30}]};this.global.homeChartOne.setOption(t),window.addEventListener("resize",()=>{this.global.homeChartOne.resize()})},initHomeLaboratory(){this.global.dispose.some(t=>t===this.global.homeChartTwo)||this.global.homeChartTwo.dispose(),this.global.homeChartTwo=n["a"](this.$refs.homeLaboratoryRef,this.charts.theme);const t={backgroundColor:this.charts.bgColor,grid:{top:50,right:20,bottom:30,left:30},tooltip:{trigger:"axis"},legend:{data:["预购队列","最新成交价"],right:13},xAxis:{data:["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]},yAxis:[{type:"value",name:"价格"}],series:[{name:"预购队列",type:"bar",data:[5,20,36,10,10,20]},{name:"最新成交价",type:"line",data:[15,20,16,20,30,8]}]};this.global.homeChartTwo.setOption(t),window.addEventListener("resize",()=>{this.global.homeChartTwo.resize()})},initHomeOvertime(){this.global.dispose.some(t=>t===this.global.homeCharThree)||this.global.homeCharThree.dispose(),this.global.homeCharThree=n["a"](this.$refs.homeOvertimeRef,this.charts.theme);const t={backgroundColor:this.charts.bgColor,grid:{top:50,right:20,bottom:30,left:30},tooltip:{trigger:"axis"},legend:{data:["订单数量","超时数量","在线数量","预警数量"],right:13},xAxis:{data:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"]},yAxis:[{type:"value",name:"数量"}],series:[{name:"订单数量",type:"bar",data:[5,20,36,10,10,20,11,13,10,9,17,19]},{name:"超时数量",type:"bar",data:[15,12,26,15,11,16,31,13,5,16,13,15]},{name:"在线数量",type:"line",data:[15,20,16,20,30,8,16,19,12,18,19,14]},{name:"预警数量",type:"line",data:[10,10,13,12,15,18,19,10,12,15,11,17]}]};this.global.homeCharThree.setOption(t),window.addEventListener("resize",()=>{this.global.homeCharThree.resize()})},initDailyMessage(){this.dailyMessage=m["dailyMessage"][Math.floor(Math.random()*m["dailyMessage"].length)]},initUserInfo(){if(!u["Session"].get("userInfo"))return!1;this.userInfo=u["Session"].get("userInfo"),this.userInfo.time=Object(d["formatDate"])(new Date(this.userInfo.time),"YYYY-mm-dd HH:MM:SS")},onNewsInfoListClick(t){window.open(t.link)},onOpenGitee(){window.open("https://gitee.com/")}},watch:{"$store.state.themeConfig.themeConfig.isIsDark":{handler(t){this.$nextTick(()=>{this.charts.theme=t?"dark":"",this.charts.bgColor=t?"transparent":"",setTimeout(()=>{this.initHomeStock()},500),setTimeout(()=>{this.initHomeLaboratory()},700),setTimeout(()=>{this.initHomeOvertime()},1e3)})},deep:!0,immediate:!0}}},p=f,g=(i("6b36"),i("2877")),v=Object(g["a"])(p,s,a,!1,null,"6bb48124",null);e["default"]=v.exports},"8fe7":function(t,e,i){t.exports=i.p+"img/excel.eee9ffc6.jpg"},"92b4":function(t,e,i){t.exports=i.p+"img/k.fc1a4c84.jpg"},9545:function(t,e,i){},a939:function(t,e,i){!function(e,i){t.exports=i()}("undefined"!=typeof self&&self,(function(){return function(t){function e(s){if(i[s])return i[s].exports;var a=i[s]={i:s,l:!1,exports:{}};return t[s].call(a.exports,a,a.exports,e),a.l=!0,a.exports}var i={};return e.m=t,e.c=i,e.d=function(t,i,s){e.o(t,i)||Object.defineProperty(t,i,{configurable:!1,enumerable:!0,get:s})},e.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(i,"a",i),i},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=1)}([function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),i(4)();var s=i(5),a=i(6);e.default={name:"vue-seamless-scroll",data:function(){return{xPos:0,yPos:0,delay:0,copyHtml:"",height:0,width:0,realBoxWidth:0}},props:{data:{type:Array,default:function(){return[]}},classOption:{type:Object,default:function(){return{}}}},computed:{leftSwitchState:function(){return this.xPos<0},rightSwitchState:function(){return Math.abs(this.xPos)<this.realBoxWidth-this.width},leftSwitchClass:function(){return this.leftSwitchState?"":this.options.switchDisabledClass},rightSwitchClass:function(){return this.rightSwitchState?"":this.options.switchDisabledClass},leftSwitch:function(){return{position:"absolute",margin:this.height/2+"px 0 0 -"+this.options.switchOffset+"px",transform:"translate(-100%,-50%)"}},rightSwitch:function(){return{position:"absolute",margin:this.height/2+"px 0 0 "+(this.width+this.options.switchOffset)+"px",transform:"translateY(-50%)"}},float:function(){return this.isHorizontal?{float:"left",overflow:"hidden"}:{overflow:"hidden"}},pos:function(){return{transform:"translate("+this.xPos+"px,"+this.yPos+"px)",transition:"all "+this.ease+" "+this.delay+"ms",overflow:"hidden"}},defaultOption:function(){return{step:1,limitMoveNum:5,hoverStop:!0,direction:1,openTouch:!0,singleHeight:0,singleWidth:0,waitTime:1e3,switchOffset:30,autoPlay:!0,navigation:!1,switchSingleStep:134,switchDelay:400,switchDisabledClass:"disabled",isSingleRemUnit:!1}},options:function(){return a({},this.defaultOption,this.classOption)},navigation:function(){return this.options.navigation},autoPlay:function(){return!this.navigation&&this.options.autoPlay},scrollSwitch:function(){return this.data.length>=this.options.limitMoveNum},hoverStopSwitch:function(){return this.options.hoverStop&&this.autoPlay&&this.scrollSwitch},canTouchScroll:function(){return this.options.openTouch},isHorizontal:function(){return this.options.direction>1},baseFontSize:function(){return this.options.isSingleRemUnit?parseInt(window.getComputedStyle(document.documentElement,null).fontSize):1},realSingleStopWidth:function(){return this.options.singleWidth*this.baseFontSize},realSingleStopHeight:function(){return this.options.singleHeight*this.baseFontSize},step:function(){var t=this.options.step;return this.isHorizontal?this.realSingleStopWidth:this.realSingleStopHeight,t}},methods:{reset:function(){this._cancle(),this._initMove()},leftSwitchClick:function(){if(this.leftSwitchState)return Math.abs(this.xPos)<this.options.switchSingleStep?void(this.xPos=0):void(this.xPos+=this.options.switchSingleStep)},rightSwitchClick:function(){if(this.rightSwitchState)return this.realBoxWidth-this.width+this.xPos<this.options.switchSingleStep?void(this.xPos=this.width-this.realBoxWidth):void(this.xPos-=this.options.switchSingleStep)},_cancle:function(){cancelAnimationFrame(this.reqFrame||"")},touchStart:function(t){var e=this;if(this.canTouchScroll){var i=void 0,s=t.targetTouches[0],a=this.options,o=a.waitTime,n=a.singleHeight,r=a.singleWidth;this.startPos={x:s.pageX,y:s.pageY},this.startPosY=this.yPos,this.startPosX=this.xPos,n&&r?(i&&clearTimeout(i),i=setTimeout((function(){e._cancle()}),o+20)):this._cancle()}},touchMove:function(t){if(!(!this.canTouchScroll||t.targetTouches.length>1||t.scale&&1!==t.scale)){var e=t.targetTouches[0],i=this.options.direction;this.endPos={x:e.pageX-this.startPos.x,y:e.pageY-this.startPos.y},event.preventDefault();var s=Math.abs(this.endPos.x)<Math.abs(this.endPos.y)?1:0;1===s&&i<2?this.yPos=this.startPosY+this.endPos.y:0===s&&i>1&&(this.xPos=this.startPosX+this.endPos.x)}},touchEnd:function(){var t=this;if(this.canTouchScroll){var e=void 0,i=this.options.direction;if(this.delay=50,1===i)this.yPos>0&&(this.yPos=0);else if(0===i){var s=this.realBoxHeight/2*-1;this.yPos<s&&(this.yPos=s)}else if(2===i)this.xPos>0&&(this.xPos=0);else if(3===i){var a=-1*this.realBoxWidth;this.xPos<a&&(this.xPos=a)}e&&clearTimeout(e),e=setTimeout((function(){t.delay=0,t._move()}),this.delay)}},enter:function(){this.hoverStopSwitch&&this._stopMove()},leave:function(){this.hoverStopSwitch&&this._startMove()},_move:function(){this.isHover||(this._cancle(),this.reqFrame=requestAnimationFrame(function(){var t=this,e=this.realBoxHeight/2,i=this.realBoxWidth/2,s=this.options,a=s.direction,o=s.waitTime,n=this.step;1===a?(Math.abs(this.yPos)>=e&&(this.$emit("ScrollEnd"),this.yPos=0),this.yPos-=n):0===a?(this.yPos>=0&&(this.$emit("ScrollEnd"),this.yPos=-1*e),this.yPos+=n):2===a?(Math.abs(this.xPos)>=i&&(this.$emit("ScrollEnd"),this.xPos=0),this.xPos-=n):3===a&&(this.xPos>=0&&(this.$emit("ScrollEnd"),this.xPos=-1*i),this.xPos+=n),this.singleWaitTime&&clearTimeout(this.singleWaitTime),this.realSingleStopHeight?Math.abs(this.yPos)%this.realSingleStopHeight<n?this.singleWaitTime=setTimeout((function(){t._move()}),o):this._move():this.realSingleStopWidth&&Math.abs(this.xPos)%this.realSingleStopWidth<n?this.singleWaitTime=setTimeout((function(){t._move()}),o):this._move()}.bind(this)))},_initMove:function(){var t=this;this.$nextTick((function(){var e=t.options.switchDelay,i=t.autoPlay,s=t.isHorizontal;if(t._dataWarm(t.data),t.copyHtml="",s){t.height=t.$refs.wrap.offsetHeight,t.width=t.$refs.wrap.offsetWidth;var a=t.$refs.slotList.offsetWidth;i&&(a=2*a+1),t.$refs.realBox.style.width=a+"px",t.realBoxWidth=a}if(!i)return t.ease="linear",void(t.delay=e);t.ease="ease-in",t.delay=0,t.scrollSwitch?(t.copyHtml=t.$refs.slotList.innerHTML,setTimeout((function(){t.realBoxHeight=t.$refs.realBox.offsetHeight,t._move()}),0)):(t._cancle(),t.yPos=t.xPos=0)}))},_dataWarm:function(t){t.length},_startMove:function(){this.isHover=!1,this._move()},_stopMove:function(){this.isHover=!0,this.singleWaitTime&&clearTimeout(this.singleWaitTime),this._cancle()}},mounted:function(){this._initMove()},watch:{data:function(t,e){this._dataWarm(t),s(t,e)||this.reset()},autoPlay:function(t){t?this.reset():this._stopMove()}},beforeCreate:function(){this.reqFrame=null,this.singleWaitTime=null,this.isHover=!1,this.ease="ease-in"},beforeDestroy:function(){this._cancle(),clearTimeout(this.singleWaitTime)}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i(2),a=function(t){return t&&t.__esModule?t:{default:t}}(s);a.default.install=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};t.component(e.componentName||a.default.name,a.default)},"undefined"!=typeof window&&window.Vue&&Vue.component(a.default.name,a.default),e.default=a.default},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i(0),a=i.n(s);for(var o in s)"default"!==o&&function(t){i.d(e,t,(function(){return s[t]}))}(o);var n=i(7),r=i(3),l=r(a.a,n.a,!1,null,null,null);e.default=l.exports},function(t,e){t.exports=function(t,e,i,s,a,o){var n,r=t=t||{},l=typeof t.default;"object"!==l&&"function"!==l||(n=t,r=t.default);var h,c="function"==typeof r?r.options:r;if(e&&(c.render=e.render,c.staticRenderFns=e.staticRenderFns,c._compiled=!0),i&&(c.functional=!0),a&&(c._scopeId=a),o?(h=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),s&&s.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},c._ssrRegister=h):s&&(h=s),h){var u=c.functional,d=u?c.render:c.beforeCreate;u?(c._injectStyles=h,c.render=function(t,e){return h.call(e),d(t,e)}):c.beforeCreate=d?[].concat(d,h):[h]}return{esModule:n,exports:r,options:c}}},function(t,e){var i=function(){window.cancelAnimationFrame=function(){return window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||window.oCancelAnimationFrame||window.msCancelAnimationFrame||function(t){return window.clearTimeout(t)}}(),window.requestAnimationFrame=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(t){return window.setTimeout(t,1e3/60)}}()};t.exports=i},function(t,e){var i=function(t,e){if(t===e)return!0;if(t.length!==e.length)return!1;for(var i=0;i<t.length;++i)if(t[i]!==e[i])return!1;return!0};t.exports=i},function(t,e){function i(){Array.isArray||(Array.isArray=function(t){return"[object Array]"===Object.prototype.toString.call(t)});var t=void 0,e=void 0,a=void 0,o=void 0,n=void 0,r=void 0,l=1,h=arguments[0]||{},c=!1,u=arguments.length;if("boolean"==typeof h&&(c=h,h=arguments[1]||{},l++),"object"!==(void 0===h?"undefined":s(h))&&"function"!=typeof h&&(h={}),l===u)return h;for(;l<u;l++)if(null!=(e=arguments[l]))for(t in e)a=h[t],o=e[t],n=Array.isArray(o),c&&o&&("object"===(void 0===o?"undefined":s(o))||n)?(n?(n=!1,r=a&&Array.isArray(a)?a:[]):r=a&&"object"===(void 0===a?"undefined":s(a))?a:{},h[t]=i(c,r,o)):void 0!==o&&(h[t]=o);return h}var s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};t.exports=i},function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"wrap"},[t.navigation?i("div",{class:t.leftSwitchClass,style:t.leftSwitch,on:{click:t.leftSwitchClick}},[t._t("left-switch")],2):t._e(),t._v(" "),t.navigation?i("div",{class:t.rightSwitchClass,style:t.rightSwitch,on:{click:t.rightSwitchClick}},[t._t("right-switch")],2):t._e(),t._v(" "),i("div",{ref:"realBox",style:t.pos,on:{mouseenter:t.enter,mouseleave:t.leave,touchstart:t.touchStart,touchmove:t.touchMove,touchend:t.touchEnd}},[i("div",{ref:"slotList",style:t.float},[t._t("default")],2),t._v(" "),i("div",{style:t.float,domProps:{innerHTML:t._s(t.copyHtml)}})])])},a=[],o={render:s,staticRenderFns:a};e.a=o}]).default}))},ba7f:function(t,e,i){t.exports=i.p+"img/carbon.9bcb9f1f.jpg"},e81e:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticStyle:{"margin-left":"5%"}},[s("el-row",[s("el-col",{attrs:{span:7}},[s("el-card",{staticClass:"elcard",attrs:{"body-style":{padding:"0px"}}},[s("div",{on:{click:t.CVA}},[s("img",{staticClass:"image",attrs:{src:i("2fa4")}}),s("div",{staticStyle:{padding:"14px"}},[s("span",[t._v("CVA变化强度计算")]),s("div",{staticClass:"bottom clearfix"},[s("time",{staticClass:"time"},[t._v("变化检测步骤之一，计算两期影像变化强度图像")]),s("el-button",{staticClass:"button",attrs:{type:"text"}},[s("el-link",[t._v("查看"),s("i",{staticClass:"el-icon-view el-icon--right"})])],1)],1)])])])],1),s("el-col",{staticStyle:{"margin-left":"20px"},attrs:{span:7}},[s("el-card",{staticClass:"elcard",attrs:{"body-style":{padding:"0px"}}},[s("div",{on:{click:t.SoilErosionK}},[s("img",{staticClass:"image",attrs:{src:i("92b4")}}),s("div",{staticStyle:{padding:"14px"}},[s("span",[t._v("土壤侵蚀度计算")]),s("div",{staticClass:"bottom clearfix"},[s("time",{staticClass:"time"},[t._v("入参TIF数据包含四个：砂、粉砂、粘土和有机碳。")]),s("el-button",{staticClass:"button",attrs:{type:"text"}},[s("el-link",[t._v("查看"),s("i",{staticClass:"el-icon-view el-icon--right"})])],1)],1)])])])],1),s("el-col",{staticStyle:{"margin-left":"20px"},attrs:{span:7}},[s("el-card",{staticClass:"elcard",attrs:{"body-style":{padding:"0px"}}},[s("div",{on:{click:t.out2excel}},[s("img",{staticClass:"image",attrs:{src:i("8fe7")}}),s("div",{staticStyle:{padding:"14px"}},[s("span",[t._v("解析SWMM模型out文件")]),s("div",{staticClass:"bottom clearfix"},[s("time",{staticClass:"time"},[t._v("二进制文件转xlsx")]),s("el-button",{staticClass:"button",attrs:{type:"text"}},[s("el-link",[t._v("查看"),s("i",{staticClass:"el-icon-view el-icon--right"})])],1)],1)])])])],1),s("el-col",{staticStyle:{"margin-left":"20px"},attrs:{span:7}},[s("el-card",{staticClass:"elcard",attrs:{"body-style":{padding:"0px"}}},[s("div",{on:{click:t.Carbon}},[s("img",{staticClass:"image",attrs:{src:i("ba7f")}}),s("div",{staticStyle:{padding:"14px"}},[s("span",[t._v("碳源汇在线处理服务")]),s("div",{staticClass:"bottom clearfix"},[s("time",{staticClass:"time"},[t._v("碳源汇在线处理")]),s("el-button",{staticClass:"button",attrs:{type:"text"}},[s("el-link",[t._v("查看"),s("i",{staticClass:"el-icon-view el-icon--right"})])],1)],1)])])])],1)],1)],1)},a=[],o=(i("14d9"),{data(){return{currentDate:new Date}},methods:{CVA(){this.$router.push("/CVA")},SoilErosionK(){this.$router.push("/SoilErosionK")},out2excel(){this.$router.push("/out2excel")},Carbon(){this.$router.push("/Carbon")}}}),n=o,r=(i("78ad"),i("2877")),l=Object(r["a"])(n,s,a,!1,null,"f152bbc4",null);e["default"]=l.exports},e9cc:function(t,e,i){}}]);