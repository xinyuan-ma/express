(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["completeUserInfo"],{"0471":function(t,e,n){"use strict";var i=n("d495"),a=n.n(i);a.a},"0795":function(t,e,n){},"0825":function(t,e,n){"use strict";var i=n("0795"),a=n.n(i);a.a},1471:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"input-wrap"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.inputValue,expression:"inputValue"}],staticClass:"input-cls",attrs:{type:"text",placeholder:t.placeholder},domProps:{value:t.inputValue},on:{blur:function(e){return t.inputShowClear(1)},focus:function(e){return t.inputShowClear(2)},input:[function(e){e.target.composing||(t.inputValue=e.target.value)},function(e){return t.inputChange(e,t.name)}]}}),t.isShowClear?n("i",{directives:[{name:"show",rawName:"v-show",value:t.showClear,expression:"showClear"}],staticClass:"clear iconfont iconicon_delete",on:{click:function(e){return t.clearInputValue(t.name)}}}):t._e()])},a=[],r=(n("a481"),{props:{isShowClear:{type:Boolean,default:!0},selectValue:{type:String},placeholder:{type:String,default:""},name:{type:String}},name:"InputComponent",data:function(){return{showClear:0,inputValue:""}},methods:{inputShowClear:function(t){var e=this,n=0;2===t?n=this.inputValue?1:0:this.$emit("inputBlur"),setTimeout(function(){e.showClear=n},10)},inputChange:function(t,e){var n=this,i=t.target.value.replace(/\s+/g,"");clearTimeout(this.timer),this.timer=setTimeout(function(){n.inputValue=i,n.showClear=i?1:0,n.$emit("inputHandler",{name:e,value:n.inputValue})},100)},clearInputValue:function(t){this.inputValue="",this.showClear=0,this.$emit("inputClearHandler",t)}}}),s=r,o=(n("0825"),n("2877")),c=Object(o["a"])(s,i,a,!1,null,"7904d7e8",null);e["a"]=c.exports},2029:function(t,e,n){t.exports=n.p+"img/jiankang1.f96a0ba2.png"},4307:function(t,e,n){},"4e3c":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"btn-group clearfix"},[t._l(t.btns,function(e,i){return[n("button",{key:i,staticClass:"submit-btn",class:{cancel:"default"==e.style,disabled:e.disabled},style:{"background-color":e.bgColor},on:{click:e.eventHandler}},[t._v("\n\t\t\t"+t._s(e.text)+"\n\t\t")])]})],2)},a=[],r={name:"index",data:function(){return{}},props:{btns:{type:Array,default:function(){return[]}}}},s=r,o=(n("6f9f"),n("2877")),c=Object(o["a"])(s,i,a,!1,null,"4180dcc7",null);e["a"]=c.exports},"66a2":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"complete-userinfo-wrap"},[t._m(0),n("div",{staticClass:"complete-user"},[n("div",{staticClass:"flex-w"},[n("p",{staticClass:"f-left"},[t._v("姓名")]),n("p",{staticClass:"flex-1"},[n("n-input",{attrs:{placeholder:"请输入您的姓名",name:"user"},on:{inputHandler:t.inputHandler,inputBlur:t.inputBlur,inputClearHandler:t.inputClearHandler}})],1)]),n("div",{staticClass:"flex-w"},[n("p",{staticClass:"f-left"},[t._v("身份证号")]),n("p",{staticClass:"flex-1"},[n("n-input",{attrs:{placeholder:"请输入您的证件号码",name:"card"},on:{inputHandler:t.inputHandler,inputBlur:t.inputBlur,inputClearHandler:t.inputClearHandler}})],1)])]),n("div",{staticClass:"complete-user mobile"},[n("div",{staticClass:"flex-w"},[n("p",{staticClass:"f-left"},[t._v("手机号码")]),t.showEdit?n("p",{staticClass:"flex-1"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.mobile,expression:"formData.mobile"}],staticClass:"placeholder",style:!t.hiddenSmsCodeField&&"pointer-events: auto",attrs:{placeholder:"请输入您的手机号码"},domProps:{value:t.formData.mobile},on:{input:[function(e){e.target.composing||t.$set(t.formData,"mobile",e.target.value)},function(e){return t.inputChange(e,"mobile")}]}}),n("span",{staticClass:"iconfont iconbianji right-icon",on:{click:t.editMobile}})]):t._e(),t.showEdit?t._e():n("p",{staticClass:"flex-1"},[n("n-input",{attrs:{placeholder:"请输入您的手机号码",name:"mobile"},on:{inputHandler:t.inputHandler,inputBlur:t.inputBlur,inputClearHandler:t.inputClearHandler}})],1)]),n("div",{directives:[{name:"show",rawName:"v-show",value:!t.hiddenSmsCodeField,expression:"!hiddenSmsCodeField"}],staticClass:"flex-w"},[n("p",{staticClass:"f-left"},[t._v("验证码")]),n("p",{staticClass:"flex-1"},[n("n-input",{staticClass:"sms",attrs:{placeholder:"请输入验证码",name:"verifyCode"},on:{inputHandler:t.inputHandler,inputBlur:t.inputBlur,inputClearHandler:t.inputClearHandler}}),n("span",{staticClass:"smsCode right-icon",class:{active:t.smsActive},on:{click:t.sendSmsCode}},[t._v(t._s(t.smsText))])],1)])]),n("nButton",{attrs:{btns:t.buttons}})],1)},a=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"complete-header"},[i("img",{staticClass:"healthy-img",attrs:{src:n("2029")}}),i("p",{staticClass:"health-text"},[t._v("为了方便您挂号和查询检查报告需要您提供姓名及身份证信息")])])}],r=(n("ac6a"),n("456d"),n("7f7f"),n("a481"),n("ac2d")),s=n("1471"),o=n("ed08"),c=n("8738"),u=n("4e3c"),l={phone:{regexp:/^(1)\d{10}$/i},required:function(t){return 0===t||"0"===t||("string"===typeof t?!(!t||!t.trim()):!!t)},_test:function(t,e){return"function"==typeof this[t]?this[t](e):this[t].regexp.test(e)},checkError:function(t,e,n){var i=this,a=function(e,a,r){return"function"===typeof a.type?!!a.type(t,r)&&(n.$toast({content:a.message}),!0):!i._test(a.type,e)&&(n.$toast({content:a.message}),!0)};for(var r in e)if(e[r]instanceof Array){for(var s=0;s<e[r].length;s++)if(a(t[r],e[r][s],r))return!0}else if(a(t[r],e[r],r))return!0;return!1}},d=n("f121"),p=d["a"].ENV_URL,f={name:"componentUserInfo",components:{"n-input":s["a"],nButton:u["a"]},data:function(){var t=this;return{loading:!1,smsText:"获取验证码",smsActive:!1,hiddenSmsCodeField:!0,showEdit:!0,formData:{user:"",card:"",mobile:"",verifyCode:""},buttons:[{text:"提交",disabled:!0,style:"primary",bgColor:"#F24E5A",eventHandler:function(){t.completeHandler()}}],isActive:!1,isClick:!0}},watch:{isActive:function(t){this.buttons[0].disabled=!t}},created:function(){r["a"].getStore({keyName:"_token"},function(t){100===t.msgCode&&t.result.valueContent&&window.localStorage.setItem("token",t.result.valueContent)}),"add"===this.$route.query.from&&(this.hiddenSmsCodeField=!1,this.showEdit=!1)},mounted:function(){var t=this;r["a"].setAppTitle({title:"完善信息"}),"add"!==this.$route.query.from&&"detail"!==this.$route.query.from&&(r["a"].noCallAppLoginGetInfo(function(e){t.formData["mobile"]=e&&e.mobile||"13393982186"}),r["a"].refreshPage(function(){r["a"].noCallAppLoginGetInfo(function(e){t.formData["mobile"]=e&&e.mobile||"13393982186"})})),"detail"===this.$route.query.from&&(this.formData["mobile"]=this.$route.query.mobile)},methods:{inputChange:function(t,e){var n=t.target.value.replace(/\s+/g,"");this.inputHandler({name:e,value:n})},editMobile:function(){this.hiddenSmsCodeField=!1;var t=document.getElementsByClassName("placeholder")[0];t.focus()},sendSmsCode:function(){var t=this;if(!l.checkError(this.formData,{mobile:[{type:"required",message:"请输入手机号码"},{type:"phone",message:"请输入11位手机号码"}]},this)){if(this.loading)return;this.loading=!0,this.$axios.member.sendBindMobile({mobile:this.formData.mobile}).then(function(e){if(0===+e.code){t.$toast({content:"验证码已发送成功"}),t.loading=!1;var n,i=60;t.smsText=i+"秒后重发",t.smsActive=!0,n=setInterval(function(){i--,i<=0?(clearInterval(n),t.smsText="重新发送",t.smsActive=!1):(t.smsText=i+"秒后重发",t.smsActive=!0)},1e3)}}).catch(function(e){t.loading=!1,t.$toast({content:e.msg})})}},inputHandler:function(t){var e=this;this.formData[t.name]=t.value,this.isActive=Object.keys(this.formData).every(function(t){return!(!e.hiddenSmsCodeField||"mobile"!==t&&"verifyCode"!==t)||!!e.formData[t]})},inputClearHandler:function(t){this.formData[t]="",this.isActive=!1},inputBlur:function(){document.querySelector("#app").scrollIntoView(!0)},completeHandler:function(){if(this.isActive){var t=Object(o["i"])(this.formData["card"]);t.msg===this.formData["card"]?l.checkError(this.formData,{mobile:[{type:"required",message:"请输入手机号码"},{type:"phone",message:"请输入11位手机号码"}]},this)||this.createUser():this.$toast({content:t.msg,duration:1500})}},getAuthCode:function(){var t=this,e=parseInt(this.$route.query.type),n=this.$route.query.from;this.isClick=!1,this.$toast({content:"身份已验证！",duration:1e3}),setTimeout(function(){r["a"].closeWebView(),c["a"].member.medicalFamilyList().then(function(i){i.result=i.result||[],0===i.result.length?r["a"].openNewWebView({url:"".concat(p,"/#/complete-userinfo?type=").concat(e,"&real=2&from=").concat(n),isFitWindow:!0}):"add"!==n&&r["a"].openNewWebView({url:"".concat(p,"/#/user-list/").concat(e),isFitWindow:!0}),t.isClick=!0}).catch(function(){t.isClick=!0})},1e3)},checkUser:function(t){var e=this,n=parseInt(this.$route.query.type),i=this.$route.query.from;c["a"].userinfo.userCheckFamily({mobile:this.formData["mobile"]}).then(function(a){var r=a.result;r.vip&&r.real?e.getAuthCode():e.$router.replace("/complete-userinfo?type=".concat(n,"&real=1&from=").concat(i,"&fid=").concat(t))}).catch(function(t){console.log(t)})},createUser:function(){var t=this,e={name:this.formData["user"],identity_card:this.formData["card"],mobile:this.formData["mobile"],verifyCode:this.formData["verifyCode"],edit:this.hiddenSmsCodeField?0:1},n=parseInt(this.$route.query.type),i=parseInt(this.$route.query.real),a=this.$route.query.from;this.isClick&&(this.isClick=!1,2===i?c["a"].userinfo.userCreate(e).then(function(e){e.result&&t.getAuthCode()}).catch(function(i){return 40000107===i.code?(t.$toast({content:i.msg,duration:1500}),void(t.isClick=!0)):40000101===i.code?(i.result&&(e["fid"]=i.result.fid),t.checkUser(e["fid"]),void(t.isClick=!0)):(t.$toast({content:i.msg,duration:1500}),40000104===i.code&&(i.result&&(e["fid"]=i.result.fid),t.$router.replace("/complete-userinfo?type=".concat(n,"&real=1&from=").concat(a,"&fid=").concat(e["fid"]))),void(t.isClick=!0))}):(e["fid"]=this.$route.query.fid,c["a"].userinfo.userUpdate(e).then(function(e){e.result&&t.getAuthCode()}).catch(function(n){if(40000101===n.code)return n.result&&(e["fid"]=n.result.fid),t.checkUser(e["fid"]),void(t.isClick=!0);t.$toast({content:n.msg,duration:1500}),t.isClick=!0})))}}},m=f,h=(n("0471"),n("2877")),v=Object(h["a"])(m,i,a,!1,null,"158b072f",null);e["default"]=v.exports},"6f9f":function(t,e,n){"use strict";var i=n("4307"),a=n.n(i);a.a},d495:function(t,e,n){},ed08:function(t,e,n){"use strict";n.d(e,"d",function(){return s}),n.d(e,"a",function(){return o}),n.d(e,"g",function(){return c}),n.d(e,"c",function(){return u}),n.d(e,"f",function(){return l}),n.d(e,"j",function(){return m}),n.d(e,"h",function(){return C}),n.d(e,"b",function(){return g}),n.d(e,"e",function(){return b}),n.d(e,"i",function(){return y});var i=n("f121"),a=n("f76d"),r=i["a"].ENV_URL,s=function(t){return"".concat(r,"/#").concat(t)},o=function(){return new Promise(function(t,e){if(window.AMap)t(window.AMap);else{var n=document.createElement("script");n.type="text/javascript",n.async=!0,n.src="http://webapi.amap.com/maps?v=1.4.14&callback=initAMap&key=555c914c29cb33d914437914f1b79b49",n.onerror=e,document.head.appendChild(n)}window.initAMap=function(){t(window.AMap)}})};function c(t,e){"string"===typeof e?localStorage.setItem(t,e):localStorage.setItem(t,JSON.stringify(e))}function u(t){var e=localStorage.getItem(t);if("string"===typeof e)try{return JSON.parse(e)}catch(n){return e}}var l={appScheme:"metro://",downloadAppUrl:"http://anijue.bangdao-tech.com/p/q/jhbvw8xg/pages/share/index.html",packageName:"com.app.shanghai.metro",otherAppPage:"metro://qrcode"},d=Object(a["a"])(),p="",f="";"iOS"===d?(p="https://itunes.apple.com/cn/app/id1395725438",f="saicpassenger://"):p="https://marketing.saicmobility.com/mis-h5/app-download";var m={appScheme:"saicpassenger://",downloadAppUrl:p,packageName:"com.saicmobility.user",otherAppPage:f},h="",v="";"iOS"===d?(h="https://apps.apple.com/cn/app/id732618720",v="shiminyun://"):h="http://m.eshimin.com/";var C={appScheme:"shiminyun://",downloadAppUrl:h,packageName:"mobi.w3studio.apps.android.shsmy.phone",otherAppPage:v},g=["1、打开微信“乘车码”小程序，点击“开通乘车码”","2、选择优先扣费方式，并开通免密支付","3、开通成功后，日常使用“游上海”APP公交乘车码即可快捷乘车"],b=["1、下载Metro大都会App，并注册登录",'2、进入底部菜单栏"乘车"页面后，点击 “立即开通”(需要打开蓝牙)',"3、开通成功后，日常使用游上海App地铁乘车码即可快捷乘车"],y=function(t){t="string"===typeof t?t:String(t);var e=/^[\d]{17}[0-9|X|x]{1}$/;if(e.test(t)){var n=[7,9,10,5,8,4,2,1,6,3,7,9,10,5,8,4,2],i=t.slice(0,17),a=t.slice(17,18);a=isNaN(parseInt(a))?a.toLowerCase():parseInt(a);for(var r=0,s=0;s<17;s++)r=(r+=parseInt(i.charAt(s))*n[s])%11;var o=[1,0,"X",9,8,7,6,5,4,3,2],c="X"===o[r]?o[r].toLowerCase():o[r];return a===c?{code:0,msg:t}:{code:0,msg:"你输入的身份证号码格式不对!"}}return{code:0,msg:"你输入的身份证号码格式不对,请重新输入!"}}}}]);