(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["healthcare"],{"181e":function(t,e,i){"use strict";var n=i("f4ed"),a=i.n(n);a.a},"1af6":function(t,e,i){var n=i("63b6");n(n.S,"Array",{isArray:i("9003")})},"20fd":function(t,e,i){"use strict";var n=i("d9f6"),a=i("aebd");t.exports=function(t,e,i){e in t?n.f(t,e,a(0,i)):t[e]=i}},3702:function(t,e,i){var n=i("481b"),a=i("5168")("iterator"),o=Array.prototype;t.exports=function(t){return void 0!==t&&(n.Array===t||o[a]===t)}},4058:function(t,e,i){"use strict";var n=i("ee3d"),a=i.n(n);a.a},"40c3":function(t,e,i){var n=i("6b4c"),a=i("5168")("toStringTag"),o="Arguments"==n(function(){return arguments}()),r=function(t,e){try{return t[e]}catch(i){}};t.exports=function(t){var e,i,s;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(i=r(e=Object(t),a))?i:o?n(e):"Object"==(s=n(e))&&"function"==typeof e.callee?"Arguments":s}},"4ee1":function(t,e,i){var n=i("5168")("iterator"),a=!1;try{var o=[7][n]();o["return"]=function(){a=!0},Array.from(o,function(){throw 2})}catch(r){}t.exports=function(t,e){if(!e&&!a)return!1;var i=!1;try{var o=[7],s=o[n]();s.next=function(){return{done:i=!0}},o[n]=function(){return s},t(o)}catch(r){}return i}},5186:function(t,e,i){},"549b":function(t,e,i){"use strict";var n=i("d864"),a=i("63b6"),o=i("241e"),r=i("b0dc"),s=i("3702"),c=i("b447"),l=i("20fd"),u=i("7cd6");a(a.S+a.F*!i("4ee1")(function(t){Array.from(t)}),"Array",{from:function(t){var e,i,a,d,f=o(t),p="function"==typeof this?this:Array,h=arguments.length,v=h>1?arguments[1]:void 0,g=void 0!==v,m=0,b=u(f);if(g&&(v=n(v,h>2?arguments[2]:void 0,2)),void 0==b||p==Array&&s(b))for(e=c(f.length),i=new p(e);e>m;m++)l(i,m,g?v(f[m],m):f[m]);else for(d=b.call(f),i=new p;!(a=d.next()).done;m++)l(i,m,g?r(d,v,[a.value,m],!0):a.value);return i.length=m,i}})},"54a1":function(t,e,i){i("6c1c"),i("1654"),t.exports=i("95d5")},"75fc":function(t,e,i){"use strict";var n=i("a745"),a=i.n(n);function o(t){if(a()(t)){for(var e=0,i=new Array(t.length);e<t.length;e++)i[e]=t[e];return i}}var r=i("774e"),s=i.n(r),c=i("c8bb"),l=i.n(c);function u(t){if(l()(Object(t))||"[object Arguments]"===Object.prototype.toString.call(t))return s()(t)}function d(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function f(t){return o(t)||u(t)||d()}i.d(e,"a",function(){return f})},"774e":function(t,e,i){t.exports=i("d2d5")},"7b7b":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAYCAYAAAD3Va0xAAAB2UlEQVQ4jZWVucrCQBSFTwZ3cAFxRxAsBO0EG0W00jfwIX0EW5fCXqwUxN3CxgWx8ecMRCaZ5FcPRMZ7z/0cTzJqvF6vF2za7/dYLBY4HA643++yGQqFkE6nUSwWkclk7COwgC6XC4bDIXa7nWZUlc1m0Ww2EQ6HddDpdMJgMMDj8fgXYioQCKDT6SCZTMqK4Mv1ev0JQtHLGc6+QaPRyBXCbHi5wThLeRjoZrPRTPl8HvV6/Z0D85tMJliv1xYfZ8kQy+VSgxQKBXS7XUuYXLPGnl1kCN5qVUIINBoN12zYo0cVGeJ2u1mK0WgUwWDQFcQeParIEHa63+93hbh5yBDxeNxSPJ/PH0F2Dxkil8tZis/nE/P53BXCHj2qyBClUgkej8fSmE6nWK1WGoQ19lRxlgx5RMbjseMu+EmpVEquj8cjttut5imXy/J5kyA+of1+X9vyJ/l8PvR6PXnu5C3jolqt/gShOMNZmGeNqlQqSCQSX0Po5YypN8gwDLRaLS14J9FDL2c0EBWLxVCr1T6C6KFXlbCbuF2ng2mKPfUrOe7IFLcdiUS0OmvsOckR5PV65c8ob68prllj72sQxQza7bYMlBfX9lxUOf4dqZrNZvKtUy5vAfgDyR67rdYND+UAAAAASUVORK5CYII="},"7cd6":function(t,e,i){var n=i("40c3"),a=i("5168")("iterator"),o=i("481b");t.exports=i("584a").getIteratorMethod=function(t){if(void 0!=t)return t[a]||t["@@iterator"]||o[n(t)]}},"809f":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-dialog",{attrs:{visible:t.visible},on:{"update:visible":function(e){t.visible=e}}},[n("div",{staticClass:"service-dialog"},[n("div",{staticClass:"introduction-icon"},[n("img",{staticClass:"icon",attrs:{src:i("e1bc"),alt:""}})]),n("div",{staticClass:"gap"},[t._v("建设中")]),n("p",{staticClass:"tips"},[t._v("- 敬请期待 -")]),n("div",{staticClass:"confrim-btn",on:{click:t.hideDialog}},[t._v("我知道了")])])])},a=[],o={props:{isDialogVisible:{type:Boolean}},methods:{hideDialog:function(){this.$emit("hideDialog",!1)}},computed:{visible:{get:function(){return this.isDialogVisible},set:function(t){console.log(111),!t&&this.$emit("hideDialog",!1)}}}},r=o,s=(i("181e"),i("2877")),c=Object(s["a"])(r,n,a,!1,null,"184cedd7",null);e["a"]=c.exports},"8ac4":function(t,e,i){"use strict";function n(){var t=this.scrollTop,e=this.scrollHeight,i=t+this.offsetHeight;0===t?this.scrollTop=1:i===e&&(this.scrollTop=t-1)}function a(t){this.offsetHeight<this.scrollHeight?t._isScroller=!0:t._isScroller=!1}function o(t){t.hasOwnProperty("_isScroller")&&!1===t._isScroller&&t.preventDefault()}e["a"]={inserted:function(t,e){var i=navigator.userAgent.indexOf("iPhone");if(-1!==i){var r=n.bind(t),s=a.bind(t);t.touchstart=r,t.touchmove=s,t.addEventListener("touchstart",r,!1),t.addEventListener("touchmove",s,!1),document.body.addEventListener("touchmove",o,!1)}},unbind:function(t){var e=navigator.userAgent.indexOf("iPhone");if(-1!==e){var i=t.touchstart,n=t.touchmove;t.touchstart=null,t.touchmove=null,t.removeEventListener("touchstart",i,!1),t.removeEventListener("touchmove",n,!1)}}}},"93cc":function(t,e,i){"use strict";var n=i("5186"),a=i.n(n);a.a},"95d5":function(t,e,i){var n=i("40c3"),a=i("5168")("iterator"),o=i("481b");t.exports=i("584a").isIterable=function(t){var e=Object(t);return void 0!==e[a]||"@@iterator"in e||o.hasOwnProperty(n(e))}},a220:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAgCAYAAAAFQMh/AAAABGdBTUEAALGPC/xhBQAAAqlJREFUSA3Flr2LE0EUwG+TdDFopwblQAMiiiAxSXNIbKJNtPJqFdTCwzP+ARIRsfOuU2z9Ki0CsVAsDfkqtDgstBM/8AiBREIkH/5eyOZml9lsbtecA495M/Pe+82btzu7xsIOt1QqtTcUCgWNneICjPd6vRy8ZWQzOE9wPp8PtNvtbDQafTIYDO7DOoEI8/1cMs5kMuFGo3FpOBzeAhJDLC0YDJ77p2CO8wCZrSDXIe2x0LYGG7Va7Xhoa+xdSyaTp/r9fg5ZJku3mGuGYbgaOe5G6lcoFM4TRICnxRCoo/144VckEnkm+raPOp1O72q1WpfxXUUOS5BZG5u8yzHnxd7tWCYxE4nEQTJaAXqNSaf6Tew1SpeH6pE57woGmACYQy4irvZmYHtPts/L5fJPc14bSOpXLBYvULvbPKFLprGfnk2vq/6WGo/rd4XdrWJ4SDX0oxPvDbXNqDFGGUv9yOwm9bvK4m6gqo1vHfBDexAjHo+vs3DDT/3sQW3j0YUBw5JNAKOzc4QuBAIBScwClY2FeKFPdjqdYxx1jA2MhPkYxqLvEyMfbTMcDj/V+VseLruBXPbNZjNmbor1GCKXxhEkiri1e/V6/Y7OaCpY5yBzPBf76b45rY/nu3zwF9V3V7WXGm+7kcV3nH5Pc6RUL5yg4ucJPAZ+mQbmerRcGHZbz2Ay+mwPZo5Ze0u2H82xrvcMJpgjmLU1HUyd8wyekvGnarX6WoXodD9gbY25MEZ/GDqYOucZzJdLd9SbvELaC0OFiu4ZnM1mv+LfVQOS7eNSqdRR55x0TxeIGYyLZAP96Hj8B/Ai9f1hrk/rPWcsQW0P2MtZoeLrC4z/pM5cGK6vkADN5gusZPyuUql8MIPO0mv/uWZxFBu+Wq+An+Hz+WBWn/9u9xcncO8E6HizLAAAAABJRU5ErkJggg=="},a745:function(t,e,i){t.exports=i("f410")},b0dc:function(t,e,i){var n=i("e4ae");t.exports=function(t,e,i,a){try{return a?e(n(i)[0],i[1]):e(i)}catch(r){var o=t["return"];throw void 0!==o&&n(o.call(t)),r}}},c8bb:function(t,e,i){t.exports=i("54a1")},c8f4:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"fixBottom",rawName:"v-fixBottom"}],ref:"page",staticClass:"healthcare-page",on:{scroll:t.handleScroll}},[n("banner-video-btn",{attrs:{imgUrl:t.imgUrl,title:t.detailTitle,videoUrl:t.detailUrl,isVideo:!1}}),n("div",{attrs:{id:"main"}},[n("div",{staticClass:"healthcare_type flex-between"},[n("div",{staticClass:"healthcare_option first_option",on:{click:function(e){return t.openUrl(1)}}},[n("p",{staticClass:"healthcare_title"},[t._v("预约挂号")]),n("p",{staticClass:"healthcare_detail"},[t._v("前往预约")])]),n("div",{staticClass:"healthcare_option second_option",on:{click:function(e){return t.openUrl(2)}}},[n("p",{staticClass:"healthcare_title"},[t._v("健康档案")]),n("p",{staticClass:"healthcare_detail"},[t._v("立即查询")])])]),n("div",{attrs:{id:"title"}},[t._v(t._s(t.listTitle))]),n("ul",{staticClass:"list"},t._l(t.list,function(e,a){return n("li",{key:e.id,class:{last:a===t.list.length-1},on:{click:function(i){return t.toDetail(e.id)}}},[n("div",{directives:[{name:"lazy",rawName:"v-lazy:background-image",value:t.cropImageUrl(e.medias[0].url,160,160),expression:"cropImageUrl(item.medias[0].url, 160, 160)",arg:"background-image"}],staticClass:"banner"}),n("div",{staticClass:"info"},[n("p",{staticClass:"title"},[t._v(t._s(e.title))]),e.simpleInfo?n("p",{staticClass:"health_simpleInfo"},[t._v(t._s(e.simpleInfo))]):t._e(),n("p",{directives:[{name:"show",rawName:"v-show",value:e.address,expression:"item.address"}],staticClass:"location"},[t._v(t._s(e.address))]),n("div",{directives:[{name:"show",rawName:"v-show",value:Number(e.dis)<1e5,expression:"Number(item.dis) < 100000"}],staticClass:"distance"},[n("img",{attrs:{src:i("7b7b")}}),n("span",[t._v("距您"+t._s(t.distanceFormat(e.dis))+"km")]),n("div",{staticClass:"go-to",on:{click:function(i){return i.stopPropagation(),t.openRouterMap(e)}}},[n("img",{attrs:{src:i("a220")}}),n("span",[t._v("去这里")])])])])])}),0),n("build-dialog",{attrs:{isDialogVisible:t.isDialogVisible},on:{hideDialog:t.hideDialog}}),t.isLoaded?n("div",{staticClass:"no-more"},[t._v("- 已经到底了 -")]):t._e()],1)],1)},a=[],o=(i("a481"),i("ac6a"),i("75fc")),r=(i("c5f6"),i("ac2d")),s=i("fd95"),c=i("90e9"),l=i("e163"),u=i("809f"),d=i("8ac4"),f=i("f121"),p=i("ed08"),h=i("e69e"),v=c["a"].queryContentByOrganize,g="12",m=f["a"].ENV_URL,b={mixins:[s["a"],h["a"]],components:{BannerVideoBtn:l["a"],buildDialog:u["a"]},directives:{fixBottom:d["a"]},data:function(){var t="医疗",e="精选医院",i="健康上海",n=Object(p["d"])("/list-detail/2970"),a="http://hhh.images.visitshanghai.com.cn/app/healthcare_top_new.jpg";return{isDialogVisible:!1,title:t,listTitle:e,detailTitle:i,detailUrl:n,imgUrl:a,start:0,offset:10,total:-1,list:[],isLoaded:!1,isFinishPullUp:!1,lat:"31.233049",lon:"121.489647",isClick:!0}},mounted:function(){var t=this;r["a"].setAppTitle({title:this.title}),r["a"].sourceType()?r["a"].gainLocation(function(e){e.result&&e.result.gdLatitude&&e.result.gdLongitude&&(t.lat=e.result.gdLatitude,t.lon=e.result.gdLongitude,t.onPullUp(function(){t.list.length!==t.total?(t.start+=t.offset,t.loadList()):t.isLoaded=!0}),t.loadList())},this):(this.onPullUp(function(){t.list.length!==t.total?(t.start+=t.offset,t.loadList()):t.isLoaded=!0}),this.loadList())},methods:{hideDialog:function(){this.isDialogVisible=!1},handleScroll:function(t){this.onScroll(t.target,50)},loadList:function(){var t=this,e={start:this.start,offset:this.offset,lat:this.lat,lon:this.lon,categoryId:g,channel:1,city:4,language:7,topFlag:!0};v(e,{hideLoading:this.start>0}).then(function(e){0===Number(e.code)&&e.data.result.length&&(t.list=[].concat(Object(o["a"])(t.list),Object(o["a"])(e.data.result)),t.list.forEach(function(e,i){e.simpleInfo&&(e.simpleInfo=e.simpleInfo.replace(/，/g,"、").replace(/ /g,"、"),console.log(t.list[i].simpleInfo))}),t.total=e.data.totalRowNum,t.finishPullUp())})},distanceFormat:function(t){return t?(Number(t)/1e3).toFixed(1):""},openRouterMap:function(t){var e={lat:t.lat,lng:t.lon,chainName:t.title,address:t.address,routerType:t.dis&&t.dis>1e3?1:3};r["a"].openRouterMap(e)},openUrl:function(t){var e=this;this.trackEvent(t),r["a"].callAppLogin(function(i){i.token&&e.isClick&&(e.isClick=!1,e.$axios.member.medicalFamilyList().then(function(i){i.result=i.result||[],0===i.result.length?r["a"].openNewWebView({url:"".concat(m,"/#/complete-userinfo?type=").concat(t,"&real=2"),isFitWindow:!0}):r["a"].openNewWebView({url:"".concat(m,"/#/user-list/").concat(t),isFitWindow:!0}),e.isClick=!0}).catch(function(){e.isClick=!0}))})}}},A=b,y=(i("93cc"),i("2877")),w=Object(y["a"])(A,n,a,!1,null,"22031012",null);e["default"]=w.exports},d2d5:function(t,e,i){i("1654"),i("549b"),t.exports=i("584a").Array.from},e163:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"top-banner"},[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.imgUrl,expression:"imgUrl"}],staticClass:"bg"}),t.videoUrl&&t.title&&!t.titleName?i("div",{staticClass:"video-btn",staticStyle:{zIndex:"2"},on:{click:t.goView}},[i("span",{staticClass:"title"},[t._v(t._s(t.title))]),t.isVideo?i("i",{staticClass:"iconfont iconicon_bofang"}):i("i",{staticClass:"iconfont iconicon_zhenxuanmeishi"})]):t._e(),t.videoUrl&&t.title&&t.titleName?i("div",{staticClass:"video-btn-center",staticStyle:{zIndex:"2"},on:{click:t.goView}},[i("p",{staticClass:"title-name"},[t._v(t._s(t.titleName))]),i("span",{staticClass:"title"},[t._v(t._s(t.title))]),t.isVideo?i("i",{staticClass:"iconfont iconicon_bofang"}):i("i",{staticClass:"iconfont iconicon_zhenxuanmeishi"})]):t._e()])},a=[],o=i("ac2d"),r={props:{title:{type:String,default:""},imgUrl:{type:String,default:""},videoUrl:{type:String,default:""},titleName:{type:String,default:""},isVideo:{type:Boolean,default:!0}},methods:{goPage:function(){o["a"].openNewWebView({url:this.videoUrl,isFitWindow:!1})},goVideo:function(){o["a"].openVideo({videoURL:this.videoUrl})},goView:function(){this.videoUrl&&(this.isVideo?this.goVideo():this.goPage())}}},s=r,c=(i("4058"),i("2877")),l=Object(c["a"])(s,n,a,!1,null,"2cd2eac4",null);e["a"]=l.exports},e69e:function(t,e,i){"use strict";e["a"]={methods:{trackEvent:function(t){var e="",i="";1===t?(e="预约挂号",i="WH_jiuyi_10002"):(e="健康档案",i="WH_jiuyi_10003"),this.$uweb.trackEvent(e+i,"点击")}}}},ed08:function(t,e,i){"use strict";i.d(e,"d",function(){return r}),i.d(e,"a",function(){return s}),i.d(e,"g",function(){return c}),i.d(e,"c",function(){return l}),i.d(e,"f",function(){return u}),i.d(e,"j",function(){return h}),i.d(e,"h",function(){return m}),i.d(e,"b",function(){return b}),i.d(e,"e",function(){return A}),i.d(e,"i",function(){return y});var n=i("f121"),a=i("f76d"),o=n["a"].ENV_URL,r=function(t){return"".concat(o,"/#").concat(t)},s=function(){return new Promise(function(t,e){if(window.AMap)t(window.AMap);else{var i=document.createElement("script");i.type="text/javascript",i.async=!0,i.src="http://webapi.amap.com/maps?v=1.4.14&callback=initAMap&key=555c914c29cb33d914437914f1b79b49",i.onerror=e,document.head.appendChild(i)}window.initAMap=function(){t(window.AMap)}})};function c(t,e){"string"===typeof e?localStorage.setItem(t,e):localStorage.setItem(t,JSON.stringify(e))}function l(t){var e=localStorage.getItem(t);if("string"===typeof e)try{return JSON.parse(e)}catch(i){return e}}var u={appScheme:"metro://",downloadAppUrl:"http://anijue.bangdao-tech.com/p/q/jhbvw8xg/pages/share/index.html",packageName:"com.app.shanghai.metro",otherAppPage:"metro://qrcode"},d=Object(a["a"])(),f="",p="";"iOS"===d?(f="https://itunes.apple.com/cn/app/id1395725438",p="saicpassenger://"):f="https://marketing.saicmobility.com/mis-h5/app-download";var h={appScheme:"saicpassenger://",downloadAppUrl:f,packageName:"com.saicmobility.user",otherAppPage:p},v="",g="";"iOS"===d?(v="https://apps.apple.com/cn/app/id732618720",g="shiminyun://"):v="http://m.eshimin.com/";var m={appScheme:"shiminyun://",downloadAppUrl:v,packageName:"mobi.w3studio.apps.android.shsmy.phone",otherAppPage:g},b=["1、打开微信“乘车码”小程序，点击“开通乘车码”","2、选择优先扣费方式，并开通免密支付","3、开通成功后，日常使用“游上海”APP公交乘车码即可快捷乘车"],A=["1、下载Metro大都会App，并注册登录",'2、进入底部菜单栏"乘车"页面后，点击 “立即开通”(需要打开蓝牙)',"3、开通成功后，日常使用游上海App地铁乘车码即可快捷乘车"],y=function(t){t="string"===typeof t?t:String(t);var e=/^[\d]{17}[0-9|X|x]{1}$/;if(e.test(t)){var i=[7,9,10,5,8,4,2,1,6,3,7,9,10,5,8,4,2],n=t.slice(0,17),a=t.slice(17,18);a=isNaN(parseInt(a))?a.toLowerCase():parseInt(a);for(var o=0,r=0;r<17;r++)o=(o+=parseInt(n.charAt(r))*i[r])%11;var s=[1,0,"X",9,8,7,6,5,4,3,2],c="X"===s[o]?s[o].toLowerCase():s[o];return a===c?{code:0,msg:t}:{code:0,msg:"你输入的身份证号码格式不对!"}}return{code:0,msg:"你输入的身份证号码格式不对,请重新输入!"}}},ee3d:function(t,e,i){},f410:function(t,e,i){i("1af6"),t.exports=i("584a").Array.isArray},f4ed:function(t,e,i){},fd95:function(t,e,i){"use strict";i("6762"),i("2fdb");var n=i("ac2d"),a=i("a599"),o=i("ed08");e["a"]={methods:{setHeader:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:150,i=this.$refs.header;i.style.display=t.scrollTop>0?"flex":"none",i.style.opacity=t.scrollTop/e>1?1:t.scrollTop/e},onScroll:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;if(!this.isFinishPullUp){var i=t.scrollHeight,n=t.scrollTop+document.documentElement.clientHeight;n>=i-e&&(this.isFinishPullUp=!0,a["a"].$emit("_pullingUp"))}},onPullUp:function(t){a["a"].$on("_pullingUp",function(){t&&t()})},finishPullUp:function(){this.isFinishPullUp=!1},toDetail:function(t){n["a"].openNewWebView({url:Object(o["d"])("/list-detail/".concat(t)),isFitWindow:!1})},cropImageUrl:function(t,e,i){return t.includes("?")?"".concat(t,"&imageView2/1/w/").concat(e,"/h/").concat(i):"".concat(t,"?imageView2/1/w/").concat(e,"/h/").concat(i)}}}}}]);