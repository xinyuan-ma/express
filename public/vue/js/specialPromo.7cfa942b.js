(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["specialPromo"],{"298c":function(i,t,e){"use strict";e.r(t);var a=function(){var i=this,t=i.$createElement,e=i._self._c||t;return e("div",{staticClass:"special_promo home-ios-12 home-ios-11"},[e("div",{staticClass:"box"},[e("header",{staticClass:"header-title"},[i._v("直供")]),e("div",{staticClass:"box-wraper"},[e("div",{directives:[{name:"fixBottom",rawName:"v-fixBottom"}],staticClass:"block"},[e("div",{staticClass:"container"},[e("hot-spot",{attrs:{cover:i.promoImg,map:i.spots},on:{detail:i.goNext}})],1),e("div",{staticClass:"placeholer"})])])])])},h=[],n=(e("b54a"),e("ac2d")),p=e("8ac4"),s=e("f121"),o=e("c1c9"),c=s["a"].ENV_URL,g=s["a"].HOTEL_URL,m=o.food,r={name:"specialPromo",data:function(){return{index:1,id:0,promoImg:"http://hhh.images.visitshanghai.com.cn/app/tehui.png",showTab:!0,foodTab:[{label:"经典中式",id:0},{label:"海派西式",id:1}],options:{activeColor:"#fff",activeBg:"#F24E5A"},swiperList:o.swiperList,dishini:o.dishini,foodList:m["0"],shopping:o.shopping,spots:[{area:"50,"+this.calc(273)+",250,"+this.calc(545),link:"https://mp.weixin.qq.com/s/9HEuHEPp-MLn_Rd5W7emtQ",id:2588},{area:"274,"+this.calc(273)+",475,"+this.calc(545),link:"https://mp.weixin.qq.com/s/9HEuHEPp-MLn_Rd5W7emtQ",id:2586},{area:"500,"+this.calc(273)+",700,"+this.calc(545),link:"https://mp.weixin.qq.com/s/9HEuHEPp-MLn_Rd5W7emtQ",id:2590},{area:"50,"+this.calc(575)+",250,"+this.calc(847),link:"https://mp.weixin.qq.com/s/9HEuHEPp-MLn_Rd5W7emtQ",id:2591},{area:"277,"+this.calc(575)+",477,"+this.calc(847),link:"https://mp.weixin.qq.com/s/9HEuHEPp-MLn_Rd5W7emtQ",id:2585},{area:"500,"+this.calc(575)+",700,"+this.calc(847),link:"https://mp.weixin.qq.com/s/9HEuHEPp-MLn_Rd5W7emtQ",id:2589},{area:"32,"+this.calc(1072)+",718,"+this.calc(1372),imgUrl:"http://hhh.images.visitshanghai.com.cn/app/6666.jpg",link:"/hotelbooking/hotel/index.html#/detail?innId=OTA_JJYSH000001&beginDate=1569340800000&endDate=1569427200000&country=0&early=0&primeFree=0&type=2",name:"迪士尼酒店",description:"",tag:"7.5折",type:"hotel"},{area:"32,"+this.calc(1412)+",718,"+this.calc(1712),imgUrl:"http://hhh.images.visitshanghai.com.cn/app/8888.jpg",link:"/hotelbooking/hotel/index.html#/detail?innId=OTA_JJYSH000002&beginDate=1569340800000&endDate=1569427200000&country=0&early=0&primeFree=0&type=2",name:"玩具总动员酒店",description:"",tag:"7.5折",type:"hotel"},{area:"32,"+this.calc(1862)+",718,"+this.calc(2162),id:2458,imgUrl:"http://hhh.images.visitshanghai.com.cn/app/2458.jpg",name:"第一百货  100里海派伴手礼体验店",description:"",tag:"满200减20",type:"shopping"},{area:"32,"+this.calc(2202)+",718,"+this.calc(2502),id:2454,imgUrl:"http://hhh.images.visitshanghai.com.cn/app/3000.jpg",name:"上海佛罗伦萨小镇名品奥特莱斯",description:"",tag:"满400减100购物卡",type:"shopping"},{area:"32,"+this.calc(2542)+",718,"+this.calc(2842),id:2546,imgUrl:"http://hhh.images.visitshanghai.com.cn/app/2546.jpg",name:"申活馆文化创意有限公司新天地店",description:"",tag:"9.5折优惠",type:"shopping"},{area:"32,"+this.calc(2882)+",718,"+this.calc(3182),id:2547,imgUrl:"http://hhh.images.visitshanghai.com.cn/app/2547.jpg",name:"申活馆文化创意有限公司威海路店",description:"",tag:"9.5折优惠",type:"shopping"},{area:"32,"+this.calc(3312)+",718,"+this.calc(3612),id:2543,imgUrl:"http://hhh.images.visitshanghai.com.cn/app/2543.jpg",name:"湖心亭茶楼",description:"二楼茶饮9折",type:"food"},{area:"32,"+this.calc(3652)+",718,"+this.calc(3952),id:2537,imgUrl:"http://hhh.images.visitshanghai.com.cn/app/2537.jpg",name:"松鹤楼",description:"赠送中式甜品",type:"food"},{area:"32,"+this.calc(3992)+",718,"+this.calc(4292),id:2536,imgUrl:"http://hhh.images.visitshanghai.com.cn/app/2536.jpg",name:"华懋荟",description:"特惠套餐",type:"food"},{area:"32,"+this.calc(4332)+",718,"+this.calc(4632),id:2539,imgUrl:"http://hhh.images.visitshanghai.com.cn/app/2539.jpg",name:"上只角餐室",description:"满200减30",type:"food"},{area:"32,"+this.calc(4672)+",718,"+this.calc(4972),id:2545,imgUrl:"http://hhh.images.visitshanghai.com.cn/app/2545.jpg",name:"食庐",description:"银联消费满500减100",type:"food"},{area:"32,"+this.calc(5012)+",718,"+this.calc(5312),id:2542,imgUrl:"http://hhh.images.visitshanghai.com.cn/app/2542.jpg",name:"醉东",description:"赠送酒类饮品",type:"food"},{area:"32,"+this.calc(5352)+",718,"+this.calc(5652),id:2552,imgUrl:"http://hhh.images.visitshanghai.com.cn/app/2552.jpg",name:"陆苑餐厅",description:"9.5折",type:"food"}]}},directives:{fixBottom:p["a"]},components:{},created:function(){navigator.geolocation.watchPosition(function(i){console.log("succ position",i)},function(i){console.log("err",i)},{enableHighAccuracy:!1,timeout:5e3,maximumAge:2e3})},methods:{ispop:function(i,t,e){var a="";i&&1*i.msgCode===100&&(a=i.result.valueContent),console.log(i.result.valueContent),"1"!==a&&(console.log("eeeeeeeeeeeeeeee"),console.log("1"!==a),this.$refs.coupon.show(t,e))},calc:function(i){return i-142},goNext:function(i){var t=i.item;console.log(t.id),this.toDetail(t)},toDetail:function(i){"hotel"===i.type?n["a"].openNewWebView({url:g+i.link,isFitWindow:!0}):n["a"].openNewWebView({url:"".concat(c,"/#/list-detail/").concat(i.id),isFitWindow:!1})},openBannerWebview:function(i){n["a"].openNewWebView({url:i,isFitWindow:!0})}}},l=r,d=(e("f611"),e("2877")),v=Object(d["a"])(l,a,h,!1,null,"655e4bfa",null);t["default"]=v.exports},"386b":function(i,t,e){var a=e("5ca1"),h=e("79e5"),n=e("be13"),p=/"/g,s=function(i,t,e,a){var h=String(n(i)),s="<"+t;return""!==e&&(s+=" "+e+'="'+String(a).replace(p,"&quot;")+'"'),s+">"+h+"</"+t+">"};i.exports=function(i,t){var e={};e[i]=t(s),a(a.P+a.F*h(function(){var t=""[i]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",e)}},"8ac4":function(i,t,e){"use strict";function a(){var i=this.scrollTop,t=this.scrollHeight,e=i+this.offsetHeight;0===i?this.scrollTop=1:e===t&&(this.scrollTop=i-1)}function h(i){this.offsetHeight<this.scrollHeight?i._isScroller=!0:i._isScroller=!1}function n(i){i.hasOwnProperty("_isScroller")&&!1===i._isScroller&&i.preventDefault()}t["a"]={inserted:function(i,t){var e=navigator.userAgent.indexOf("iPhone");if(-1!==e){var p=a.bind(i),s=h.bind(i);i.touchstart=p,i.touchmove=s,i.addEventListener("touchstart",p,!1),i.addEventListener("touchmove",s,!1),document.body.addEventListener("touchmove",n,!1)}},unbind:function(i){var t=navigator.userAgent.indexOf("iPhone");if(-1!==t){var e=i.touchstart,a=i.touchmove;i.touchstart=null,i.touchmove=null,i.removeEventListener("touchstart",e,!1),i.removeEventListener("touchmove",a,!1)}}}},b54a:function(i,t,e){"use strict";e("386b")("link",function(i){return function(t){return i(this,"a","href",t)}})},c1c9:function(i){i.exports={swiperList:[{imgUrl:"http://hhh.images.visitshanghai.com.cn/app/7777.jpg",url:"https://mp.weixin.qq.com/s/9HEuHEPp-MLn_Rd5W7emtQ",name:"79家文旅企业限时门票半价，2019上海旅游节重磅福利来了",simpleInfo:"活动时间为9月15日至9月21日"}],dishini:[{imgUrl:"http://hhh.images.visitshanghai.com.cn/app/6666.jpg",link:"/hotelbooking/hotel/index.html#/detail?innId=OTA_JJYSH000001&beginDate=1569340800000&endDate=1569427200000&country=0&early=0&primeFree=0&type=2",name:"迪士尼酒店",description:"",tag:"7.5折",type:"hotel"},{imgUrl:"http://hhh.images.visitshanghai.com.cn/app/8888.jpg",link:"/hotelbooking/hotel/index.html#/detail?innId=OTA_JJYSH000002&beginDate=1569340800000&endDate=1569427200000&country=0&early=0&primeFree=0&type=2",name:"玩具总动员酒店",description:"",tag:"7.5折",type:"hotel"}],food:{0:[{id:2543,imgUrl:"http://hhh.images.visitshanghai.com.cn/app/2543.jpg",name:"湖心亭茶楼",description:"二楼茶饮9折",type:"food"},{id:2545,imgUrl:"http://hhh.images.visitshanghai.com.cn/app/2545.jpg",name:"食庐",description:"银联消费满500减100",type:"food"},{id:2542,imgUrl:"http://hhh.images.visitshanghai.com.cn/app/2542.jpg",name:"醉东",description:"赠送酒类饮品",type:"food"},{id:2536,imgUrl:"http://hhh.images.visitshanghai.com.cn/app/2536.jpg",name:"华懋荟",description:"特惠套餐",type:"food"},{id:2537,imgUrl:"http://hhh.images.visitshanghai.com.cn/app/2537.jpg",name:"松鹤楼",description:"赠送中式甜品",type:"food"},{id:2539,imgUrl:"http://hhh.images.visitshanghai.com.cn/app/2539.jpg",name:"上只角餐室",description:"满200减30",type:"food"},{id:2552,imgUrl:"http://hhh.images.visitshanghai.com.cn/app/2552.jpg",name:"陆苑餐厅",description:"9.5折",type:"food"},{id:2555,imgUrl:"http://hhh.images.visitshanghai.com.cn/app/2555.jpg",name:"上海蜀公馆成都潮人火锅",description:"8.8折",type:"food"}],1:[{id:2530,imgUrl:"http://hhh.images.visitshanghai.com.cn/app/2530.jpg",name:"比利时啤酒餐厅",description:"8.5折",type:"food"},{id:2535,imgUrl:"http://hhh.images.visitshanghai.com.cn/app/2535.jpg",name:"Shanghai Brewery",description:"8.5折",type:"food"},{id:2528,imgUrl:"http://hhh.images.visitshanghai.com.cn/app/2528.jpg",name:"Drunken Hen Diner",description:"8.5折",type:"food"},{id:2529,imgUrl:"http://hhh.images.visitshanghai.com.cn/app/2529.jpg",name:"烧烤共和国",description:"8.5折",type:"food"},{id:2531,imgUrl:"http://hhh.images.visitshanghai.com.cn/app/2531.jpg",name:"TEQUILA LOCA疯狂龙舌兰墨西哥餐厅",description:"8.5折",type:"food"},{id:2532,imgUrl:"http://hhh.images.visitshanghai.com.cn/app/2532.jpg",name:"玻本厨房",description:"8.5折",type:"food"},{id:2533,imgUrl:"http://hhh.images.visitshanghai.com.cn/app/2533.jpg",name:"上海啤酒工坊",description:"8.5折",type:"food"},{id:2534,imgUrl:"http://hhh.images.visitshanghai.com.cn/app/2534.jpg",name:"德国乡村西餐厅",description:"8.5折",type:"food"},{id:2527,imgUrl:"http://hhh.images.visitshanghai.com.cn/app/2527.jpg",name:"上海老外街66音乐餐厅酒吧",description:"8折",type:"food"},{id:2544,imgUrl:"http://hhh.images.visitshanghai.com.cn/app/2544.jpg",name:"large eight",description:"送鸡尾酒",type:"food"},{id:2541,imgUrl:"http://hhh.images.visitshanghai.com.cn/app/2541.jpg",name:"Somekissy",description:"满200减50 满300减100",type:"food"},{id:2524,imgUrl:"http://hhh.images.visitshanghai.com.cn/app/2524.jpg",name:"郁锦香西餐厅",description:"8折",type:"food"},{id:2540,imgUrl:"http://hhh.images.visitshanghai.com.cn/app/2540.jpg",name:"Akimbo Cafe Lab",description:"赠送氮气咖啡",type:"food"},{id:2538,imgUrl:"http://hhh.images.visitshanghai.com.cn/app/2538.jpg",name:"珥玛厨房",description:"赠送酒类饮品",type:"food"},{id:2525,imgUrl:"http://hhh.images.visitshanghai.com.cn/app/2525.jpg",name:"古齐意大利餐厅",description:"8折",type:"food"},{id:2580,imgUrl:"http://hhh.images.visitshanghai.com.cn/app/2580.jpg",name:"悦衡厨房",description:"满100送甜品",type:"food"}]},shopping:[{id:2459,imgUrl:"http://hhh.images.visitshanghai.com.cn/app/2459.jpg",name:"江南丝绸馆",description:"",tag:"9折",type:"shopping"},{id:2461,imgUrl:"http://hhh.images.visitshanghai.com.cn/app/2461.jpg",name:"藏宝阁",description:"",tag:"9折",type:"shopping"},{id:2462,imgUrl:"http://hhh.images.visitshanghai.com.cn/app/2462.jpg",name:"天厚绸庄",description:"",tag:"9折"},{id:2455,imgUrl:"http://hhh.images.visitshanghai.com.cn/app/2455.jpg",name:"阿拉城",description:"",tag:"欢迎礼包",type:"shopping"},{id:2456,imgUrl:"http://hhh.images.visitshanghai.com.cn/app/2456.jpg",name:"老外街",description:"",tag:"欢迎礼包",type:"shopping"},{id:2463,imgUrl:"http://hhh.images.visitshanghai.com.cn/app/2463.jpg",name:"上海积美地毯",description:"",tag:"8.5折",type:"shopping"},{id:2458,imgUrl:"http://hhh.images.visitshanghai.com.cn/app/2458.jpg",name:"第一百货  100里海派伴手礼体验店",description:"",tag:"满200减20",type:"shopping"},{id:2546,imgUrl:"http://hhh.images.visitshanghai.com.cn/app/2546.jpg",name:"申活馆文化创意有限公司新天地店",description:"",tag:"9.5折优惠",type:"shopping"},{id:2547,imgUrl:"http://hhh.images.visitshanghai.com.cn/app/2547.jpg",name:"申活馆文化创意有限公司威海路店",description:"",tag:"9.5折优惠",type:"shopping"},{id:2454,imgUrl:"http://hhh.images.visitshanghai.com.cn/app/3000.jpg",name:"上海佛罗伦萨小镇名品奥特莱斯",description:"",tag:"满400减100购物卡",type:"shopping"}]}},e1dc:function(i,t,e){},f611:function(i,t,e){"use strict";var a=e("e1dc"),h=e.n(a);h.a}}]);