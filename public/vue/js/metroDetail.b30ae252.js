(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["metroDetail"],{"0c9c":function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"page-Detail"},[this.list.length>0?s("div",{staticClass:"list"},[s("div",{staticClass:"blank"}),t._l(t.list,function(e,i){return s("div",{key:i,staticClass:"item"},[t._m(0,!0),s("div",{staticClass:"item-bottom"},[s("p",{staticClass:"item-address"},[t._v(t._s(e.orderTitle))]),s("p",{staticClass:"item-time"},[t._v(t._s(e.payDate))])]),s("div",{staticClass:"item-right"},[s("div",{staticClass:"item-money"},[t._v(t._s(e.payAmount))]),s("div",{staticClass:"item-status"},[t._v(t._s(e.tradeState))])])])}),s("div",{attrs:{id:"blank"}}),s("loading",{attrs:{reachBtm:t.reachBtm,isWaiting:t.isWaiting},on:{loadMore:t.getListData}})],2):t._e(),s("no-message",{directives:[{name:"show",rawName:"v-show",value:t.noMessage,expression:"noMessage"}]})],1)},n=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"item-img"},[i("img",{attrs:{src:s("3630"),alt:""}})])}],r=s("ac2d"),a=s("8738"),o=s("8b3f"),l=s("69f4"),c={name:"metroDetail",components:{loading:o["a"],noMessage:l["a"]},data:function(){return{list:[],pageNumber:1,pageSize:10,flowId:"",reachBtm:!1,isWaiting:!0,noMessage:!1}},mounted:function(){var t=this;r["a"].setAppTitle({title:"交易明细"}),r["a"].noCallAppLoginGetInfo(function(e,s){s&&t.getListData()})},created:function(){},methods:{getListData:function(){var t=this;r["a"].showLoading(),this.reachBtm||(this.isWaiting=!0,a["a"].metro.bills({pageNumber:this.pageNumber,pageSize:this.pageSize,flowId:this.flowId},{hideLoading:!0}).then(function(e){console.log(e),1*e.code===0&&e.result.billDetails&&(t.list=t.list.concat(e.result.billDetails),t.flowId=e.result.flowId,t.isWaiting=!1),0===t.list.length&&(t.noMessage=!0)}).catch(function(e){0===t.list.length&&(t.noMessage=!0),t.isWaiting=!1,console.log(e)}))}}},d=c,u=(s("ad25"),s("2877")),h=Object(u["a"])(d,i,n,!1,null,"1ce52fdd",null);e["default"]=h.exports},"244d":function(t,e,s){"use strict";var i=s("d822"),n=s.n(i);n.a},3630:function(t,e,s){t.exports=s.p+"img/metroImg.094650b8.png"},"69f4":function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"emptyInfo",class:{isbrand:t.isbrand},style:{backgroundColor:t.bgColor}},[i("img",{attrs:{src:s("8711")}}),i("div",{staticClass:"tips"},[t._v(t._s(t.isZH?"暂无信息":"No information"))])])},n=[],r=(s("6762"),s("2fdb"),{name:"noMessage",props:{bgColor:{type:String,default:"#fff"}},computed:{isbrand:function(){return this.$route.path.includes("brand")}}}),a=r,o=(s("244d"),s("2877")),l=Object(o["a"])(a,i,n,!1,null,"17b9f0b2",null);e["a"]=l.exports},7092:function(t,e,s){},8711:function(t,e,s){t.exports=s.p+"img/no_message@3x.dace6754.png"},"8b3f":function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{directives:[{name:"show",rawName:"v-show",value:t.reachBtm&&t.needScroll,expression:"reachBtm && needScroll"}],ref:"wrapper",attrs:{id:"loading"}},[t._v(t._s(t.isBrand?"持续更新中":"- 已经到底了 -"))])},n=[];s("c5f6");function r(t){var e=getComputedStyle(t)["overflow-y"];return"scroll"===e||"auto"===e?t:t===document.documentElement?document:r(t.parentNode)}var a={name:"list-loading",props:{reachBtm:Boolean,isWaiting:Boolean,isBrand:Boolean,distance:{type:Number,default:parseInt(window.innerHeight/3)}},data:function(){return{parent:null,needScroll:!1,noMoreText:"- 已经到底了 -",continue:"持续更新中",observerConfig:{attributes:!1,childList:!0,subtree:!0},observer:null,scrollObserver:null,scrollObserverConfig:{attributes:!0,childList:!1,subtree:!1}}},mounted:function(){this.parent=r(this.$refs.wrapper),this.parent.addEventListener("scroll",this.handleScroll),this.checkNeedScroll();var t={attributes:!1,childList:!0,subtree:!0},e=new MutationObserver(this.checkNeedScroll);e.observe(this.parent===document?document.body:this.parent,t),this.observer=e;var s={attributes:!0,childList:!1,subtree:!1};this.scrollObserver=new MutationObserver(this.checkScrollStatus),this.scrollObserver.observe(this.parent,s)},methods:{loadMore:function(t){this.$emit("loadMore",t)},handleScroll:function(){if(!this.reachBtm&&!this.isWaiting){var t=0,e=0,s=0;this.parent===document?(t=window.pageYOffset,e=document.documentElement.offsetHeight,s=window.innerHeight):(t=this.parent.scrollTop,e=this.parent.scrollHeight,s=this.parent.clientHeight),t>0&&t+s+this.distance>=e&&this.$emit("loadMore")}},checkNeedScroll:function(t){var e=this;this.$nextTick(function(){e.parent===document?e.needScroll=window.innerHeight<document.documentElement.offsetHeight:e.needScroll=e.parent.clientHeight<e.parent.scrollHeight})},checkScrollStatus:function(){if(this.parent!==document){var t=r(this.$refs.wrapper);t!==this.parent&&(this.unbind(),this.parent=t,this.parent.addEventListener("scroll",this.handleScroll),this.observer.observe(this.parent===document?document.body:this.parent,this.observerConfig),this.parent!==document&&this.scrollObserver.observe(this.parent,this.scrollObserverConfig))}},unbind:function(){this.parent.removeEventListener("scroll",this.handleScroll),this.observer.disconnect(),this.scrollObserver.disconnect()}},beforeDestroy:function(){this.unbind()}},o=a,l=(s("ce09"),s("2877")),c=Object(l["a"])(o,i,n,!1,null,"7cd3b10d",null);e["a"]=c.exports},ad25:function(t,e,s){"use strict";var i=s("7092"),n=s.n(i);n.a},b1ce:function(t,e,s){},ce09:function(t,e,s){"use strict";var i=s("b1ce"),n=s.n(i);n.a},d822:function(t,e,s){}}]);