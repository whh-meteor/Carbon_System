(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-69dfe8f1","chunk-2d21da50","chunk-2d0b64ba"],{"1d0a":function(t,e,s){"use strict";function o(t,e){let s=t.getDay(),o=Math.floor((t.getMonth()+3)/3).toString();const i={"Y+":t.getFullYear().toString(),"m+":(t.getMonth()+1).toString(),"d+":t.getDate().toString(),"H+":t.getHours().toString(),"M+":t.getMinutes().toString(),"S+":t.getSeconds().toString(),"q+":o},a={0:"日",1:"一",2:"二",3:"三",4:"四",5:"五",6:"六"},n={1:"一",2:"二",3:"三",4:"四"};/(W+)/.test(e)&&(e=e.replace(RegExp.$1,RegExp.$1.length>1?RegExp.$1.length>2?"星期"+a[s]:"周"+a[s]:a[s])),/(Q+)/.test(e)&&(e=e.replace(RegExp.$1,4==RegExp.$1.length?"第"+n[o]+"季度":n[o]));for(let r in i){let t=new RegExp("("+r+")").exec(e);t&&(e=e.replace(t[1],1==RegExp.$1.length?i[r]:i[r].padStart(RegExp.$1.length,"0")))}return e}function i(t,e="YYYY-mm-dd"){let s,i,a=(new Date).getTime();if(s=new Date(t).getTime(),a=Number.parseInt(a-s),a<1e4)return"刚刚";if(a<6e4&&a>=1e4)return i=Math.floor(a/1e3),i+"秒前";if(a<36e5&&a>=6e4)return i=Math.floor(a/6e4),i+"分钟前";if(a<864e5&&a>=36e5)return i=Math.floor(a/36e5),i+"小时前";if(a<2592e5&&a>=864e5)return i=Math.floor(a/864e5),i+"天前";{let s=new Date(t);return o(s,e)}}function a(t){let e=new Date(t).getHours();return e<6?"凌晨好":e<9?"早上好":e<12?"上午好":e<14?"中午好":e<17?"下午好":e<19?"傍晚好":e<22?"晚上好":"夜里好"}s.r(e),s.d(e,"formatDate",(function(){return o})),s.d(e,"formatPast",(function(){return i})),s.d(e,"formatAxis",(function(){return a}))},"9ed6":function(t,e,s){"use strict";s.r(e);var o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"login"},[s("div",{staticClass:"login-weaper"},[s("div",{staticClass:"login-left"},[s("div",{staticClass:"login-time"},[t._v(t._s(t.time.txt))]),s("div",{staticClass:"login-left-box"},[s("div",[s("div",{staticClass:"logo"},[t._v(t._s(t.getThemeConfig.globalViceTitle))]),s("h2",{staticClass:"title"},[t._v(t._s(t.getThemeConfig.globalViceDes))]),s("div",{staticClass:"msg"},[s("div",{staticClass:"msg-author"},[s("span",[t._v(t._s(t.quotations.name))]),s("span",[t._v(t._s(t.quotations.comeFrom))])]),s("div",{staticClass:"msg-txt"},[t._v(t._s(t.quotations.content))])])])])]),s("div",{staticClass:"login-right"},[s("div",{staticClass:"login-main"},[s("h4",{staticClass:"login-title"},[t._v(t._s(t.getThemeConfig.globalTitle))]),s("el-form",{staticClass:"el-form login-form"},[s("el-form-item",{staticStyle:{"margin-left":"0px"},attrs:{prop:"userName"}},[s("el-input",{attrs:{type:"text",placeholder:t.$t("message.login.placeholder1"),"prefix-icon":"el-icon-user",clearable:"",autocomplete:"off"},model:{value:t.ruleForm.userName,callback:function(e){t.$set(t.ruleForm,"userName",e)},expression:"ruleForm.userName"}})],1),s("el-form-item",{staticStyle:{"margin-left":"0px"},attrs:{prop:"password"}},[s("el-input",{attrs:{type:"password",placeholder:t.$t("message.login.placeholder2"),"prefix-icon":"el-icon-lock",autocomplete:"off","show-password":!0},model:{value:t.ruleForm.password,callback:function(e){t.$set(t.ruleForm,"password",e)},expression:"ruleForm.password"}})],1),s("el-form-item",{staticStyle:{"margin-left":"0px"},attrs:{prop:"code"}},[s("div",{staticClass:"el-row",attrs:{span:"24"}},[s("div",{staticClass:"el-col el-col-16"},[s("el-input",{attrs:{type:"text",maxlength:"4",placeholder:t.$t("message.login.placeholder3"),"prefix-icon":"el-icon-position",clearable:"",autocomplete:"off"},model:{value:t.ruleForm.code,callback:function(e){t.$set(t.ruleForm,"code",e)},expression:"ruleForm.code"}})],1),s("div",{staticClass:"el-col el-col-8"},[s("div",{staticClass:"login-code"},[s("span",{staticClass:"login-code-img"},[t._v("1234")])])])])]),s("el-form-item",{staticStyle:{margin:"40px 0px 0"}},[s("el-button",{staticClass:"login-submit",attrs:{type:"primary",loading:t.submit.loading},on:{click:t.submitForm}},[s("span",[t._v(t._s(t.$t("message.login.btnText")))])])],1)],1),s("div",{staticClass:"login-menu"},[s("a",{attrs:{href:"javascript:;"}},[t._v(t._s(t.$t("message.login.link.one1")))]),s("a",{attrs:{href:"javascript:;"}},[t._v(t._s(t.$t("message.login.link.one2")))])])],1)])]),s("div",{staticClass:"vue-particles"},[s("vue-particles",{staticStyle:{height:"100%"},attrs:{color:"#dedede",shapeType:"star",linesColor:"#dedede",hoverMode:"grab",clickMode:"push"}})],1)])},i=[],a=(s("14d9"),s("5d2d")),n=s("1d0a"),r=s("3908"),l=s("d1d1"),m={name:"login",data(){return{quotationsList:l["quotationsList"],quotations:{},isView:!1,submit:{loading:!1},ruleForm:{userName:"admin",password:"123456",code:"1234"},time:{txt:"",fun:null}}},computed:{currentTime(){return Object(n["formatAxis"])(new Date)},getThemeConfig(){return this.$store.state.themeConfig.themeConfig}},created(){this.initTime()},mounted(){this.initRandomQuotations()},methods:{initRandomQuotations(){this.quotations=this.quotationsList[Math.floor(Math.random()*this.quotationsList.length)]},initTime(){this.time.txt=Object(n["formatDate"])(new Date,"YYYY-mm-dd HH:MM:SS WWW QQQQ"),this.time.fun=setInterval(()=>{this.time.txt=Object(n["formatDate"])(new Date,"YYYY-mm-dd HH:MM:SS WWW QQQQ")},1e3)},submitForm(){this.submit.loading=!0,setTimeout(()=>{let t=[],e=[],s=["admin"],o=["btn.add","btn.del","btn.edit","btn.link"],i=["common"],n=["btn.add","btn.link"];"admin"===this.ruleForm.userName?(t=s,e=o):(t=i,e=n);const l={userName:"admin"===this.ruleForm.userName?"admin":"test",photo:"admin"===this.ruleForm.userName?"http://192.168.16.192:8085/gdsp/img/avator-whh.487b3073.jpg":"https://img2.baidu.com/it/u=2187913762,2708298335&fm=253&fmt=auto&app=138&f=JPEG?w=200&h=200",time:(new Date).getTime(),roles:t,authBtnList:e};a["Session"].set("token",Math.random().toString(36).substr(0)),a["Session"].set("userInfo",l),this.$store.dispatch("userInfos/setUserInfos",l),r["PrevLoading"].start(),this.$router.push("/"),setTimeout(()=>{this.$message.success(`${this.currentTime}，${this.$t("message.login.signInText")}`)},300)},300)}},destroyed(){clearInterval(this.time.fun)}},c=m,u=(s("da15"),s("2877")),d=Object(u["a"])(c,o,i,!1,null,"1ede14b0",null);e["default"]=d.exports},d1d1:function(t,e,s){"use strict";s.r(e),s.d(e,"quotationsList",(function(){return o}));const o=[{name:"颜渊",comeFrom:"论语",content:"自己不喜欢的，就不要强加给别人。饥寒是自己不喜欢的，不要把它强加给别人；耻辱是自己不喜欢的，也不要把它强加给别人。将心比心，推己及人，从自己的利与害想到对别人的利与害，多替别人着想，这是终生应该奉行的原则。"},{name:"荀子",comeFrom:"劝学",content:"木料经过木工用墨线（木工用具）划直线加工以后，就变直了；金属物品在磨刀石上磨砺后，就能锋利。人经过学习磨练，自我反省，就会变得聪慧明智，不犯错误，也越来越坚强。"},{name:"里仁",comeFrom:"论语",content:"见到贤人，就应该想着向他学习；看见不贤的人，便应该自己反省，对不如自己的人喜欢讥笑、轻视，因而沾沾自喜；对比自己强的人喜欢贬低，甚至嫉妒、畏惧退缩，害怕与他们交往：这都是不正确的态度。"},{name:"述而",comeFrom:"论语",content:"君子心地平坦宽广，小人却经常局促忧愁。君子襟怀坦白，安贫乐业，与人为善，知足常乐，所以能坦荡荡。小人欲念太多，患得患失，忧心忡忡，怨天尤人，局促不安，所以常心怀戚戚。"},{name:"老子",comeFrom:"第六十四章",content:"千里遥远的路程是从脚下第一步开始的。任何事情的成功都是从头开始，从小到大逐渐积累的。万事开头难，没有个开头就不会有结果。任何事情都要从一点一滴的小事开始做起。"},{name:"朱熹",comeFrom:"训学斋规",content:"读书有三到，谓心到，眼到，口到。心不在此，则眼看不仔细，心眼既不专一，却只漫浪诵读，决不能记，久也不能久也。三到之中，心到最急，心既到矣，眼口岂不到乎？"}]},da15:function(t,e,s){"use strict";s("ec10")},ec10:function(t,e,s){}}]);