(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["busMetro"],{"1e6b":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"bus_metro"},[i("banner-video-btn",{attrs:{title:t.bannerVideo.title,videoUrl:t.bannerVideo.videoUrl,isVideo:t.bannerVideo.isVideo,imgUrl:t.bannerVideo.imgUrl}}),i("div",{staticClass:"box"},[t._m(0),i("div",{staticClass:"list"},t._l(t.list,function(e,n){return i("div",{directives:[{name:"lazy",rawName:"v-lazy:background-image",value:e.url,expression:"data.url",arg:"background-image"}],key:n,staticClass:"list-item",on:{click:function(i){return t.openApp(e)}}},[t._v(t._s(e.text1)+"\n\t\t\t")])}),0)])],1)},a=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"choosen"},[i("div",{staticClass:"title"},[i("span",[t._v("出行方式")])])])}],o=i("ac2d"),s=i("e163"),r=i("ed08"),c={name:"busMetro",data:function(){return{bannerVideo:{title:"",imgUrl:"http://hhh.images.visitshanghai.com.cn/app/bus_metro.jpg?random="+1*new Date+"imageView2/1/w/750/h/330",isVideo:!1,videoUrl:""},list:[{id:1,url:"http://hhh.images.visitshanghai.com.cn/app/metro.jpg?random="+1*new Date,text:"上海地铁乘车码"},{id:2,url:"http://hhh.images.visitshanghai.com.cn/app/bus.jpg?random="+1*new Date,text:"上海公共交通乘车码",path:'/pages/qrcode/index?city_code=310000&ykt_id=10000101&extra={"app_name":"游上海","app_logo":"http://hhh.images.visitshanghai.com.cn/logo_new_flavor.png","parameter":"游上海","text":"游上海"}'}]}},created:function(){o["a"].setAppTitle({title:"公交地铁"})},components:{BannerVideoBtn:s["a"]},methods:{openApp:function(t){switch(console.log(t),t.id){case 1:this.openThirdApplication(r["f"]);break;case 2:this.openMiniProgramNews(t.path);break}},openMiniProgramNews:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e="gh_3cf62f4f1d52";o["a"].openMiniprogram({url:t,miniProgramId:e},function(t){console.log(t)})},openThirdApplication:function(t){o["a"].openThirdApp(t,function(t){console.log(t)})}}},p=c,l=(i("d174"),i("2877")),d=Object(l["a"])(p,n,a,!1,null,"f006d7d2",null);e["default"]=d.exports},4058:function(t,e,i){"use strict";var n=i("ee3d"),a=i.n(n);a.a},"539b":function(t,e,i){},d174:function(t,e,i){"use strict";var n=i("539b"),a=i.n(n);a.a},e163:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"top-banner"},[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.imgUrl,expression:"imgUrl"}],staticClass:"bg"}),t.videoUrl&&t.title&&!t.titleName?i("div",{staticClass:"video-btn",staticStyle:{zIndex:"2"},on:{click:t.goView}},[i("span",{staticClass:"title"},[t._v(t._s(t.title))]),t.isVideo?i("i",{staticClass:"iconfont iconicon_bofang"}):i("i",{staticClass:"iconfont iconicon_zhenxuanmeishi"})]):t._e(),t.videoUrl&&t.title&&t.titleName?i("div",{staticClass:"video-btn-center",staticStyle:{zIndex:"2"},on:{click:t.goView}},[i("p",{staticClass:"title-name"},[t._v(t._s(t.titleName))]),i("span",{staticClass:"title"},[t._v(t._s(t.title))]),t.isVideo?i("i",{staticClass:"iconfont iconicon_bofang"}):i("i",{staticClass:"iconfont iconicon_zhenxuanmeishi"})]):t._e()])},a=[],o=i("ac2d"),s={props:{title:{type:String,default:""},imgUrl:{type:String,default:""},videoUrl:{type:String,default:""},titleName:{type:String,default:""},isVideo:{type:Boolean,default:!0}},methods:{goPage:function(){o["a"].openNewWebView({url:this.videoUrl,isFitWindow:!1})},goVideo:function(){o["a"].openVideo({videoURL:this.videoUrl})},goView:function(){this.videoUrl&&(this.isVideo?this.goVideo():this.goPage())}}},r=s,c=(i("4058"),i("2877")),p=Object(c["a"])(r,n,a,!1,null,"2cd2eac4",null);e["a"]=p.exports},ed08:function(t,e,i){"use strict";i.d(e,"d",function(){return s}),i.d(e,"a",function(){return r}),i.d(e,"g",function(){return c}),i.d(e,"c",function(){return p}),i.d(e,"f",function(){return l}),i.d(e,"j",function(){return h}),i.d(e,"h",function(){return v}),i.d(e,"b",function(){return b}),i.d(e,"e",function(){return w}),i.d(e,"i",function(){return _});var n=i("f121"),a=i("f76d"),o=n["a"].ENV_URL,s=function(t){return"".concat(o,"/#").concat(t)},r=function(){return new Promise(function(t,e){if(window.AMap)t(window.AMap);else{var i=document.createElement("script");i.type="text/javascript",i.async=!0,i.src="http://webapi.amap.com/maps?v=1.4.14&callback=initAMap&key=555c914c29cb33d914437914f1b79b49",i.onerror=e,document.head.appendChild(i)}window.initAMap=function(){t(window.AMap)}})};function c(t,e){"string"===typeof e?localStorage.setItem(t,e):localStorage.setItem(t,JSON.stringify(e))}function p(t){var e=localStorage.getItem(t);if("string"===typeof e)try{return JSON.parse(e)}catch(i){return e}}var l={appScheme:"metro://",downloadAppUrl:"http://anijue.bangdao-tech.com/p/q/jhbvw8xg/pages/share/index.html",packageName:"com.app.shanghai.metro",otherAppPage:"metro://qrcode"},d=Object(a["a"])(),u="",m="";"iOS"===d?(u="https://itunes.apple.com/cn/app/id1395725438",m="saicpassenger://"):u="https://marketing.saicmobility.com/mis-h5/app-download";var h={appScheme:"saicpassenger://",downloadAppUrl:u,packageName:"com.saicmobility.user",otherAppPage:m},g="",f="";"iOS"===d?(g="https://apps.apple.com/cn/app/id732618720",f="shiminyun://"):g="http://m.eshimin.com/";var v={appScheme:"shiminyun://",downloadAppUrl:g,packageName:"mobi.w3studio.apps.android.shsmy.phone",otherAppPage:f},b=["1、打开微信“乘车码”小程序，点击“开通乘车码”","2、选择优先扣费方式，并开通免密支付","3、开通成功后，日常使用“游上海”APP公交乘车码即可快捷乘车"],w=["1、下载Metro大都会App，并注册登录",'2、进入底部菜单栏"乘车"页面后，点击 “立即开通”(需要打开蓝牙)',"3、开通成功后，日常使用游上海App地铁乘车码即可快捷乘车"],_=function(t){t="string"===typeof t?t:String(t);var e=/^[\d]{17}[0-9|X|x]{1}$/;if(e.test(t)){var i=[7,9,10,5,8,4,2,1,6,3,7,9,10,5,8,4,2],n=t.slice(0,17),a=t.slice(17,18);a=isNaN(parseInt(a))?a.toLowerCase():parseInt(a);for(var o=0,s=0;s<17;s++)o=(o+=parseInt(n.charAt(s))*i[s])%11;var r=[1,0,"X",9,8,7,6,5,4,3,2],c="X"===r[o]?r[o].toLowerCase():r[o];return a===c?{code:0,msg:t}:{code:0,msg:"你输入的身份证号码格式不对!"}}return{code:0,msg:"你输入的身份证号码格式不对,请重新输入!"}}},ee3d:function(t,e,i){}}]);