(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["build-detail"],{"23ee":function(t,e,i){"use strict";var a=i("d6d0"),s=i.n(a);s.a},"2e46":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"build-detail"},[i("detail",{attrs:{data:t.detailData,toBottom:t.toBottom,isRow:!0,headerImage:t.headerImage,nearByBuilds:t.nearByBuilds,type:t.type},on:{control:t.control,resetAudio:t.resetAudio}}),t.detailData.audioUrl?i("audio-comp",{ref:"audioComp"}):t._e()],1)},s=[],o=i("cebc"),n=i("62a2"),r=i("ac2d"),d=i("9135"),u=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"wrapper",staticClass:"audio-box",style:t.paddingBottom,on:{touchmove:function(t){t.preventDefault()}}},[i("audio",{ref:"audio"},[i("source",{attrs:{loop:t.cycle,type:"audio/mp3"}})]),i("div",{staticClass:"item-title"},[t._v("\n\t\t语音导览\n\t")]),i("div",{staticClass:"progress-box"},[i("div",{ref:"progressBar",staticClass:"progressBar",on:{touchstart:t.justifyProgress}},[i("div",{staticClass:"progress",style:{width:t.progressBarWidth}}),i("div",{staticClass:"progressDot",style:{left:t.progressDotLeft},attrs:{id:"progressDot"}})]),i("div",{staticClass:"audio-time"},[i("span",{staticClass:"audio-current"},[t._v(t._s(t.currentTime))]),i("span",{staticClass:"audio-total"},[t._v(t._s(t.totalTime))])])]),i("div",{staticClass:"control-box"},[i("div",{staticClass:"cycle",on:{click:t.setCycle}},[i("i",{staticClass:"iconfont",class:{iconxunhuanx:t.cycle,iconxunhuanstop:!t.cycle}})]),i("div",{staticClass:"left-speed",on:{click:t.prevAudio}},[i("i",{staticClass:"iconfont iconhoutuix"})]),i("div",{staticClass:"play",attrs:{id:"audioPlayer"},on:{click:t.playPlayer}},[i("i",{staticClass:"iconfont",class:{iconplay:t.paused,iconstop:!t.paused}})]),i("div",{staticClass:"right-speed",on:{click:t.nextAudio}},[i("i",{staticClass:"iconfont iconqianjinx"})]),i("div",{staticClass:"volume",on:{click:t.setMuted}},[i("i",{staticClass:"iconfont",class:{iconno_volcex:t.muted,iconvolcex:!t.muted}})])])])},c=[],l=i("90fe"),f={name:"audio-comp",data:function(){return{cycle:!0,muted:!1,paused:!0,progressBarWidth:"",progressDotLeft:"",currentTime:"00.00",totalTime:"00.00",currentUrl:"http://hhh.images.visitshanghai.com.cn/FqVkdpkYIqTu5J1XnXyJyedBpIis?e=1563765817&token=JT9hop2MntCNMNz8O7UqTb4scQYpASy7sK2q11su:X6d_VOf9EdZPQDLcMJ-Jw9cq_Po=",paddingBottom:{}}},props:{source:{type:String,default:""},play:{type:Boolean,default:!1}},created:function(){var t=this;this._isiOS&&this._isApp&&this.getClientInfo().then(function(e){var i=e.navigationBarH;i=Math.max(10,i),t.paddingBottom={paddingBottom:"".concat(i,"px")},t.$nextTick(function(){var e=document.querySelector(".service-box"),i=t.$refs.wrapper;e.style.bottom="".concat(i.offsetHeight,"px")})})},mounted:function(){var t=this.$refs.audio;t.load();var e=this;t.addEventListener("canplay",function(){e.totalTime=e.transTime(t.duration)}),t.addEventListener("timeupdate",function(i){e.updateProgress(t)},!1),t.addEventListener("ended",function(){e.audioEnded(),e.cycle&&(t.currentTime=0,e.paused=!1,t.play())},!1),t.addEventListener("onloadedmetadata",function(){e.totalTime=e.transTime(t.duration)},!1),this.dragProgressDotEvent(t)},methods:{setCycle:function(){this.cycle=!this.cycle},setMuted:function(){this.muted=!this.muted;var t=this.$refs.audio;t.muted=this.muted},prevAudio:function(){if(!this.paused){var t=this.$refs.audio,e=t.currentTime-10;t.currentTime=e<0?0:e}},nextAudio:function(){if(!this.paused){var t=this.$refs.audio,e=t.currentTime+10;t.currentTime=e<t.duration?e:t.duration}},justifyProgress:function(t){var e=this.$refs.audio;if(!e.paused||0!==e.currentTime){var i=parseFloat(getComputedStyle(document.getElementsByClassName("audio-box")[0]).paddingLeft),a=this.$refs.progressBar.offsetWidth,s=(t.touches[0].clientX-i)/a;e.currentTime=e.duration*s,this.updateProgress(e)}},updateProgress:function(t){var e=t.currentTime/t.duration;this.progressBarWidth=100*e+"%",this.progressDotLeft=100*e+"%",this.currentTime=this.transTime(t.currentTime)},audioEnded:function(){this.progressBarWidth=0,this.progressDotLeft=0,this.paused=!0},transTime:function(t){var e="",i=parseInt(t/3600);t%=3600;var a=parseInt(t/60),s=parseInt(t%60);return e=i>0?Object(l["d"])(i+":"+a+":"+s):Object(l["d"])(a+":"+s),e},playPlayer:function(){var t=this.$refs.audio;t.src?t.paused?(t.play(),this.paused=!1):(t.pause(),this.paused=!0):this.$toast({content:"音频链接不存在"})},dragProgressDotEvent:function(t){var e=this,i=document.getElementById("progressDot"),a={oriOffestLeft:0,oriX:0,maxLeft:0,maxRight:0},s=!1;function o(o){t.paused&&0===t.currentTime||(s=!0,a.oriOffestLeft=i.offsetLeft,a.oriX=o.touches?o.touches[0].clientX:o.clientX,a.maxLeft=a.oriOffestLeft,a.maxRight=e.$refs.progressBar.offsetWidth-a.oriOffestLeft,o&&o.preventDefault?o.preventDefault():o.returnValue=!1,o&&o.stopPropagation?o.stopPropagation():window.event.cancelBubble=!0)}function n(i){if(s){var o=i.touches?i.touches[0].clientX:i.clientX,n=o-a.oriX;n>a.maxRight?n=a.maxRight:n<-a.maxLeft&&(n=-a.maxLeft);var r=e.$refs.progressBar.offsetWidth,d=(a.oriOffestLeft+n)/r;t.currentTime=t.duration*d,e.updateProgress(t)}}function r(){s=!1}i.addEventListener("touchstart",o,!1),document.addEventListener("touchmove",n,!1),document.addEventListener("touchend",r,!1)}}},p=f,h=(i("ec8f"),i("2877")),m=Object(h["a"])(p,u,c,!1,null,"44c6b898",null),v=m.exports,g=i("a21f"),y={name:"build-detail",data:function(){return{toBottom:"",from:this.$route.query.from,id:this.$route.params.id,headerImage:{list:[""],originList:[],videoList:[]},showTitleHeight:200,detailData:{title:"",serviceCenters:[],manuals:[]},nearByBuilds:[],showTitle:!1,location:{lat:"31.233013",lon:"121.489157"},type:"build"}},components:{Detail:d["a"],AudioComp:v},mounted:function(){var t=this;r["a"].sourceType()?Object(g["b"])({vm:this}).then(function(e){t.location.lat=e.gdLatitude,t.location.lon=e.gdLongitude,t.loadDetail()}):this.loadDetail()},methods:Object(o["a"])({control:function(){this.$refs.audioComp&&this.$refs.audioComp.$el.children[0].pause(),this.$refs.audioComp&&(this.$refs.audioComp.paused=!0)},resetAudio:function(){this.$refs.audioComp.$el.children[0].src=""}},n["a"],{loadDetail:function(){var t=this,e=Object(o["a"])({id:this.$route.params.id},this.location);this.$axios.content.queryBuildDetailById(e).then(function(e){e.data=e.data||{},t.headerImage=t.getImgList(e.data.medias,750,500),t.detailData=e.data,t.detailData.addr=t.isZH?e.data.addrZh:e.data.addrEn,t.detailData.productName=e.data.title,t.detailData.audioUrl&&t.$nextTick(function(){t.$refs.audioComp.$el.children[0].src=t.detailData.audioUrl}),t.loadNearBuild()})},loadNearBuild:function(){var t=this,e=Object(o["a"])({keyword:"",appName:"BGSH_OVERSEA"},this.location,{dis:1e3});this.$axios.content.queryBuildList(e).then(function(e){t.nearByBuilds=e.data.result||[],t.detailData.id&&(t.nearByBuilds=t.nearByBuilds.filter(function(e){return e.medias[0].url=t.imgCover(e.medias[0].url,284,200),e.id!==t.detailData.id}))})},openWebviewVideo:function(t,e){r["a"].openNewWebView({url:t,isFitWindow:e})},goBack:function(){r["a"].closeWebView()}}),beforeRouteLeave:function(t,e,i){this.detailData.audioUrl&&(this.$refs.audioComp.$el.children[0].src=""),i()},destroyed:function(){this.detailData.audioUrl&&(this.$refs.audioComp.$el.children[0].src="")}},B=y,C=(i("23ee"),Object(h["a"])(B,a,s,!1,null,null,null));e["default"]=C.exports},a2b7:function(t,e,i){},d6d0:function(t,e,i){},ec8f:function(t,e,i){"use strict";var a=i("a2b7"),s=i.n(a);s.a}}]);