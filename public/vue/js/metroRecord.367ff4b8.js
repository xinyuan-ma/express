(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["metroRecord"],{"244d":function(t,e,i){"use strict";var n=i("d822"),s=i.n(n);s.a},"544a":function(t,e,i){},"69f4":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"emptyInfo",class:{isbrand:t.isbrand},style:{backgroundColor:t.bgColor}},[n("img",{attrs:{src:i("8711")}}),n("div",{staticClass:"tips"},[t._v(t._s(t.isZH?"暂无信息":"No information"))])])},s=[],r=(i("6762"),i("2fdb"),{name:"noMessage",props:{bgColor:{type:String,default:"#fff"}},computed:{isbrand:function(){return this.$route.path.includes("brand")}}}),a=r,o=(i("244d"),i("2877")),c=Object(o["a"])(a,n,s,!1,null,"17b9f0b2",null);e["a"]=c.exports},8348:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"page-record"},[this.list.length>0?i("div",{staticClass:"list"},[i("div",{staticClass:"blank"}),t._l(t.list,function(e,n){return i("div",{key:n,staticClass:"item"},[i("div",{staticClass:"item-type",class:{"enter-bg":"1"===e.inOrOut||"IN_STATION"===e.inOrOut}},[t._v(t._s("1"===e.inOrOut||"IN_STATION"===e.inOrOut?"进":"出"))]),i("div",{staticClass:"item-right"},[i("p",{staticClass:"item-address"},[t._v(t._s(e.stationName))]),i("p",{staticClass:"item-time"},[t._v(t._s(e.time))])])])}),i("loading",{attrs:{reachBtm:t.reachBtm,isWaiting:t.isWaiting},on:{loadMore:t.getListData}})],2):t._e(),i("no-message",{directives:[{name:"show",rawName:"v-show",value:t.noMessage,expression:"noMessage"}]})],1)},s=[],r=i("ac2d"),a=i("8738"),o=i("8b3f"),c=i("69f4"),l={name:"metroRecord",components:{loading:o["a"],NoMessage:c["a"]},data:function(){return{list:[],pageNumber:1,pageSize:10,reachBtm:!1,isWaiting:!0,noMessage:!1}},mounted:function(){var t=this;r["a"].setAppTitle({title:"乘车记录"}),r["a"].noCallAppLoginGetInfo(function(e,i){i&&t.getListData()})},created:function(){},methods:{getListData:function(){var t=this;r["a"].showLoading(),this.reachBtm||(this.isWaiting=!0,a["a"].metro.inOutStationRecords({pageNumber:this.pageNumber,pageSize:this.pageSize},{hideloading:!0}).then(function(e){console.log(e),1*e.code===0&&e.result.inOutStationDetails!==[]&&(t.list=t.list.concat(e.result.inOutStationDetails),t.pageNumber+=1,t.reachBtm=e.result.total===t.list.length,t.isWaiting=!1,t.$emit("data-loaded")),0===t.list.length&&(t.noMessage=!0)}).catch(function(e){console.log(e),0===t.list.length&&(t.noMessage=!0),t.isWaiting=!1}))}}},u=l,d=(i("bf66"),i("2877")),h=Object(d["a"])(u,n,s,!1,null,"71b78440",null);e["default"]=h.exports},8711:function(t,e,i){t.exports=i.p+"img/no_message@3x.dace6754.png"},"8b3f":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{directives:[{name:"show",rawName:"v-show",value:t.reachBtm&&t.needScroll,expression:"reachBtm && needScroll"}],ref:"wrapper",attrs:{id:"loading"}},[t._v(t._s(t.isBrand?"持续更新中":"- 已经到底了 -"))])},s=[];i("c5f6");function r(t){var e=getComputedStyle(t)["overflow-y"];return"scroll"===e||"auto"===e?t:t===document.documentElement?document:r(t.parentNode)}var a={name:"list-loading",props:{reachBtm:Boolean,isWaiting:Boolean,isBrand:Boolean,distance:{type:Number,default:parseInt(window.innerHeight/3)}},data:function(){return{parent:null,needScroll:!1,noMoreText:"- 已经到底了 -",continue:"持续更新中",observerConfig:{attributes:!1,childList:!0,subtree:!0},observer:null,scrollObserver:null,scrollObserverConfig:{attributes:!0,childList:!1,subtree:!1}}},mounted:function(){this.parent=r(this.$refs.wrapper),this.parent.addEventListener("scroll",this.handleScroll),this.checkNeedScroll();var t={attributes:!1,childList:!0,subtree:!0},e=new MutationObserver(this.checkNeedScroll);e.observe(this.parent===document?document.body:this.parent,t),this.observer=e;var i={attributes:!0,childList:!1,subtree:!1};this.scrollObserver=new MutationObserver(this.checkScrollStatus),this.scrollObserver.observe(this.parent,i)},methods:{loadMore:function(t){this.$emit("loadMore",t)},handleScroll:function(){if(!this.reachBtm&&!this.isWaiting){var t=0,e=0,i=0;this.parent===document?(t=window.pageYOffset,e=document.documentElement.offsetHeight,i=window.innerHeight):(t=this.parent.scrollTop,e=this.parent.scrollHeight,i=this.parent.clientHeight),t>0&&t+i+this.distance>=e&&this.$emit("loadMore")}},checkNeedScroll:function(t){var e=this;this.$nextTick(function(){e.parent===document?e.needScroll=window.innerHeight<document.documentElement.offsetHeight:e.needScroll=e.parent.clientHeight<e.parent.scrollHeight})},checkScrollStatus:function(){if(this.parent!==document){var t=r(this.$refs.wrapper);t!==this.parent&&(this.unbind(),this.parent=t,this.parent.addEventListener("scroll",this.handleScroll),this.observer.observe(this.parent===document?document.body:this.parent,this.observerConfig),this.parent!==document&&this.scrollObserver.observe(this.parent,this.scrollObserverConfig))}},unbind:function(){this.parent.removeEventListener("scroll",this.handleScroll),this.observer.disconnect(),this.scrollObserver.disconnect()}},beforeDestroy:function(){this.unbind()}},o=a,c=(i("ce09"),i("2877")),l=Object(c["a"])(o,n,s,!1,null,"7cd3b10d",null);e["a"]=l.exports},b1ce:function(t,e,i){},bf66:function(t,e,i){"use strict";var n=i("544a"),s=i.n(n);s.a},ce09:function(t,e,i){"use strict";var n=i("b1ce"),s=i.n(n);s.a},d822:function(t,e,i){}}]);