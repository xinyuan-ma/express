(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["openMetro"],{"10eb":function(t,a,i){"use strict";i.r(a);var n=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"page-pay"},[t._m(0),n("div",{staticClass:"btn-box"},[n("button",{staticClass:"next-btn",on:{click:t.nextStep}},[t._v("下一步")])]),n("v-dialog",{attrs:{visible:t.isDialogVisible},on:{"update:visible":function(a){t.isDialogVisible=a}}},[n("div",{staticClass:"service-dialog"},[n("div",{staticClass:"introduction-icon"},[n("img",{staticClass:"icon1",attrs:{src:i("d1bf"),alt:""}})]),n("p",{staticClass:"content-dialog"},[t._v("您还没有安装支付宝APP"),n("br"),t._v("开通上海地铁需先安装支付宝APP")]),n("div",{staticClass:"confrim-btn",on:{click:t.hideDialog}},[t._v("知道了")])])])],1)},s=[function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"pay-top"},[i("div",{staticClass:"pay-text"},[i("span",{staticClass:"pay-icon pay-bg1"}),t._v("\n\t\t\t签约支付宝开通上海乘车码\n\t\t")]),i("div",{staticClass:"pay-text"},[i("span",{staticClass:"pay-icon pay-bg2"}),t._v("\n\t\t\t完成开通上海地铁乘车码\n\t\t")])])}],o=i("ac2d"),e={name:"openMetro",data:function(){return{isDialogVisible:!1}},created:function(){o["a"].setAppTitle({title:"开通上海地铁"})},mounted:function(){o["a"].noCallAppLoginGetInfo(function(t,a){}),o["a"].watchAppBackBtn(this.goBackMetro)},methods:{hideDialog:function(){this.isDialogVisible=!1},goBackMetro:function(){o["a"].openMetro(function(t){})},nextStep:function(){var t=this,a={};this.$axios.metro.openAndSign(a).then(function(a){var i=a.code,n=a.result;if(0===+i)if(1*n.status===1){var s=n.signUrl;s&&t.openThirdApplication(s)}else t.$toast({content:"授权失败"});else t.$toast({content:"授权失败"})}).catch(function(a){a?t.$toast({content:a.msg||"服务失败"}):t.$toast({content:"暂时无法获取网络，请检查您的网络设置。"})})},openThirdApplication:function(t){var a=this,i=this._isiOS?"https://apps.apple.com/cn/app/id333206289":"https://a.app.qq.com/o/simple.jsp?pkgname=com.eg.android.AlipayGphone&fromcase=40002",n={appScheme:"alipay://",downloadAppUrl:i,packageName:"com.eg.android.AlipayGphone",otherAppPage:"alipays://platformapi/startapp?appId=60000157&appClearTop=false&startMultApp=YES&sign_params=".concat(t)};o["a"].isAppInstalled(n,function(t){100===t.msgCode?o["a"].openThirdApp(n,function(t){console.log(t)}):a.isDialogVisible=!0})}}},p=e,c=(i("8602"),i("2877")),l=Object(c["a"])(p,n,s,!1,null,"208fd661",null);a["default"]=l.exports},"3b3a":function(t,a,i){},8602:function(t,a,i){"use strict";var n=i("3b3a"),s=i.n(n);s.a},d1bf:function(t,a,i){t.exports=i.p+"img/icon_notice.2bdef19a.png"}}]);