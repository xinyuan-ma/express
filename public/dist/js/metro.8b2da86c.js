(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["metro"],{"0f48":function(t,i,e){"use strict";var n=e("4ce3"),o=e.n(n);o.a},"4ce3":function(t,i,e){},a2ca:function(t,i,e){"use strict";e.r(i);var n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"metro-page"},[e("img",{ref:"img",attrs:{src:"http://hhh.images.visitshanghai.com.cn/app/map_zh.jpg",alt:""}})])},o=[],s=e("ac2d");"function"!=typeof Object.assign&&Object.defineProperty(Object,"assign",{value:function(t,i){if(null==t)throw new TypeError("Cannot convert undefined or null to object");for(var e=Object(t),n=1;n<arguments.length;n++){var o=arguments[n];if(null!=o)for(var s in o)Object.prototype.hasOwnProperty.call(o,s)&&(e[s]=o[s])}return e},writable:!0,configurable:!0}),"function"!=typeof Array.from&&(Array.from=function(t){return[].slice.call(t)});var a=function(t){var i=document.implementation.createHTMLDocument("");return i.body.innerHTML=t,Array.from(i.body.children)[0]},h=function(t,i){var e=document.createEvent("HTMLEvents");e.initEvent(i,!0,!1),t.dispatchEvent(e)},r=function(){var t=function(t,i){this.el=t,this.zoomFactor=1,this.lastScale=1,this.offset={x:0,y:0},this.initialOffset={x:0,y:0},this.options=Object.assign({},this.defaults,i),this.setupMarkup(),this.bindEvents(),this.update(),this.isImageLoaded(this.el)&&(this.updateAspectRatio(),this.setupOffsets()),this.enable()},i=function(t,i){return t+i},e=function(t,i){return t>i-.01&&t<i+.01};t.prototype={defaults:{tapZoomFactor:2,zoomOutFactor:1.3,animationDuration:300,maxZoom:4,minZoom:.5,draggableUnzoomed:!0,lockDragAxis:!1,setOffsetsOnce:!1,use2d:!0,zoomStartEventName:"pz_zoomstart",zoomUpdateEventName:"pz_zoomupdate",zoomEndEventName:"pz_zoomend",dragStartEventName:"pz_dragstart",dragUpdateEventName:"pz_dragupdate",dragEndEventName:"pz_dragend",doubleTapEventName:"pz_doubletap",verticalPadding:0,horizontalPadding:0,onZoomStart:null,onZoomEnd:null,onZoomUpdate:null,onDragStart:null,onDragEnd:null,onDragUpdate:null,onDoubleTap:null},handleDragStart:function(t){h(this.el,this.options.dragStartEventName),"function"==typeof this.options.onDragStart&&this.options.onDragStart(this,t),this.stopAnimation(),this.lastDragPosition=!1,this.hasInteraction=!0,this.handleDrag(t)},handleDrag:function(t){var i=this.getTouches(t)[0];this.drag(i,this.lastDragPosition),this.offset=this.sanitizeOffset(this.offset),this.lastDragPosition=i},handleDragEnd:function(){h(this.el,this.options.dragEndEventName),"function"==typeof this.options.onDragEnd&&this.options.onDragEnd(this,event),this.end()},handleZoomStart:function(t){h(this.el,this.options.zoomStartEventName),"function"==typeof this.options.onZoomStart&&this.options.onZoomStart(this,t),this.stopAnimation(),this.lastScale=1,this.nthZoom=0,this.lastZoomCenter=!1,this.hasInteraction=!0},handleZoom:function(t,i){var e=this.getTouchCenter(this.getTouches(t)),n=i/this.lastScale;this.lastScale=i,this.nthZoom+=1,this.nthZoom>3&&(this.scale(n,e),this.drag(e,this.lastZoomCenter)),this.lastZoomCenter=e},handleZoomEnd:function(){h(this.el,this.options.zoomEndEventName),"function"==typeof this.options.onZoomEnd&&this.options.onZoomEnd(this,event),this.end()},handleDoubleTap:function(t){var i=this.getTouches(t)[0],e=this.zoomFactor>1?1:this.options.tapZoomFactor,n=this.zoomFactor,o=function(t){this.scaleTo(n+t*(e-n),i)}.bind(this);this.hasInteraction||(this.isDoubleTap=!0,n>e&&(i=this.getCurrentZoomCenter()),this.animate(this.options.animationDuration,o,this.swing),h(this.el,this.options.doubleTapEventName),"function"==typeof this.options.onDoubleTap&&this.options.onDoubleTap(this,t))},computeInitialOffset:function(){this.initialOffset={x:-Math.abs(this.el.offsetWidth*this.getInitialZoomFactor()-this.container.offsetWidth)/2,y:-Math.abs(this.el.offsetHeight*this.getInitialZoomFactor()-this.container.offsetHeight)/2}},resetOffset:function(){this.offset.x=this.initialOffset.x,this.offset.y=this.initialOffset.y},isImageLoaded:function(t){return"IMG"===t.nodeName?t.complete&&0!==t.naturalHeight:Array.from(t.querySelectorAll("img")).every(this.isImageLoaded)},setupOffsets:function(){this.options.setOffsetsOnce&&this._isOffsetsSet||(this._isOffsetsSet=!0,this.computeInitialOffset(),this.resetOffset())},sanitizeOffset:function(t){var i=this.el.offsetWidth*this.getInitialZoomFactor()*this.zoomFactor,e=this.el.offsetHeight*this.getInitialZoomFactor()*this.zoomFactor,n=i-this.getContainerX()+this.options.horizontalPadding,o=e-this.getContainerY()+this.options.verticalPadding,s=Math.max(n,0),a=Math.max(o,0),h=Math.min(n,0)-this.options.horizontalPadding,r=Math.min(o,0)-this.options.verticalPadding;return{x:Math.min(Math.max(t.x,h),s),y:Math.min(Math.max(t.y,r),a)}},scaleTo:function(t,i){this.scale(t/this.zoomFactor,i)},scale:function(t,i){t=this.scaleZoomFactor(t),this.addOffset({x:(t-1)*(i.x+this.offset.x),y:(t-1)*(i.y+this.offset.y)}),h(this.el,this.options.zoomUpdateEventName),"function"==typeof this.options.onZoomUpdate&&this.options.onZoomUpdate(this,event)},scaleZoomFactor:function(t){var i=this.zoomFactor;return this.zoomFactor*=t,this.zoomFactor=Math.min(this.options.maxZoom,Math.max(this.zoomFactor,this.options.minZoom)),this.zoomFactor/i},canDrag:function(){return this.options.draggableUnzoomed||!e(this.zoomFactor,1)},drag:function(t,i){i&&(this.options.lockDragAxis?Math.abs(t.x-i.x)>Math.abs(t.y-i.y)?this.addOffset({x:-(t.x-i.x),y:0}):this.addOffset({y:-(t.y-i.y),x:0}):this.addOffset({y:-(t.y-i.y),x:-(t.x-i.x)}),h(this.el,this.options.dragUpdateEventName),"function"==typeof this.options.onDragUpdate&&this.options.onDragUpdate(this,event))},getTouchCenter:function(t){return this.getVectorAvg(t)},getVectorAvg:function(t){return{x:t.map(function(t){return t.x}).reduce(i)/t.length,y:t.map(function(t){return t.y}).reduce(i)/t.length}},addOffset:function(t){this.offset={x:this.offset.x+t.x,y:this.offset.y+t.y}},sanitize:function(){this.zoomFactor<this.options.zoomOutFactor?this.zoomOutAnimation():this.isInsaneOffset(this.offset)&&this.sanitizeOffsetAnimation()},isInsaneOffset:function(t){var i=this.sanitizeOffset(t);return i.x!==t.x||i.y!==t.y},sanitizeOffsetAnimation:function(){var t=this.sanitizeOffset(this.offset),i={x:this.offset.x,y:this.offset.y},e=function(e){this.offset.x=i.x+e*(t.x-i.x),this.offset.y=i.y+e*(t.y-i.y),this.update()}.bind(this);this.animate(this.options.animationDuration,e,this.swing)},zoomOutAnimation:function(){if(1!==this.zoomFactor){var t=this.zoomFactor,i=1,e=this.getCurrentZoomCenter(),n=function(n){this.scaleTo(t+n*(i-t),e)}.bind(this);this.animate(this.options.animationDuration,n,this.swing)}},updateAspectRatio:function(){this.unsetContainerY(),this.setContainerY(this.container.parentElement.offsetHeight)},getInitialZoomFactor:function(){var t=this.container.offsetWidth/this.el.offsetWidth,i=this.container.offsetHeight/this.el.offsetHeight;return Math.min(t,i)},getAspectRatio:function(){return this.el.offsetWidth/this.el.offsetHeight},getCurrentZoomCenter:function(){var t=this.offset.x-this.initialOffset.x,i=-1*this.offset.x-t/(1/this.zoomFactor-1),e=this.offset.y-this.initialOffset.y,n=-1*this.offset.y-e/(1/this.zoomFactor-1);return{x:i,y:n}},getTouches:function(t){var i=this.container.getBoundingClientRect(),e=document.documentElement.scrollTop||document.body.scrollTop,n=document.documentElement.scrollLeft||document.body.scrollLeft,o=i.top+e,s=i.left+n;return Array.prototype.slice.call(t.touches).map(function(t){return{x:t.pageX-s,y:t.pageY-o}})},animate:function(t,i,e,n){var o=(new Date).getTime(),s=function(){if(this.inAnimation){var a=(new Date).getTime()-o,h=a/t;a>=t?(i(1),n&&n(),this.update(),this.stopAnimation(),this.update()):(e&&(h=e(h)),i(h),this.update(),requestAnimationFrame(s))}}.bind(this);this.inAnimation=!0,requestAnimationFrame(s)},stopAnimation:function(){this.inAnimation=!1},swing:function(t){return-Math.cos(t*Math.PI)/2+.5},getContainerX:function(){return this.container.offsetWidth},getContainerY:function(){return this.container.offsetHeight},setContainerY:function(t){return this.container.style.height=t+"px"},unsetContainerY:function(){this.container.style.height=null},setupMarkup:function(){this.container=a('<div class="pinch-zoom-container"></div>'),this.el.parentNode.insertBefore(this.container,this.el),this.container.appendChild(this.el),this.container.style.overflow="hidden",this.container.style.position="relative",this.el.style.webkitTransformOrigin="0% 0%",this.el.style.mozTransformOrigin="0% 0%",this.el.style.msTransformOrigin="0% 0%",this.el.style.oTransformOrigin="0% 0%",this.el.style.transformOrigin="0% 0%",this.el.style.position="absolute"},end:function(){this.hasInteraction=!1,this.sanitize(),this.update()},bindEvents:function(){var t=this;n(this.container,this),window.addEventListener("resize",this.update.bind(this)),Array.from(this.el.querySelectorAll("img")).forEach(function(i){i.addEventListener("load",t.update.bind(t))}),"IMG"===this.el.nodeName&&this.el.addEventListener("load",this.update.bind(this))},update:function(t){this.updatePlaned||(this.updatePlaned=!0,window.setTimeout(function(){this.updatePlaned=!1,t&&"resize"===t.type&&(this.updateAspectRatio(),this.setupOffsets()),t&&"load"===t.type&&(this.updateAspectRatio(),this.setupOffsets());var i=this.getInitialZoomFactor()*this.zoomFactor,e=-this.offset.x/i,n=-this.offset.y/i,o="scale3d("+i+", "+i+",1) translate3d("+e+"px,"+n+"px,0px)",s="scale("+i+", "+i+") translate("+e+"px,"+n+"px)",a=function(){this.clone&&(this.clone.parentNode.removeChild(this.clone),delete this.clone)}.bind(this);!this.options.use2d||this.hasInteraction||this.inAnimation?(this.is3d=!0,a(),this.el.style.webkitTransform=o,this.el.style.mozTransform=s,this.el.style.msTransform=s,this.el.style.oTransform=s,this.el.style.transform=o):(this.is3d&&(this.clone=this.el.cloneNode(!0),this.clone.style.pointerEvents="none",this.container.appendChild(this.clone),window.setTimeout(a,200)),this.el.style.webkitTransform=s,this.el.style.mozTransform=s,this.el.style.msTransform=s,this.el.style.oTransform=s,this.el.style.transform=s,this.is3d=!1)}.bind(this),0))},enable:function(){this.enabled=!0},disable:function(){this.enabled=!1}};var n=function(t,i){var e=null,n=0,o=null,s=null,a=function(t,n){if(e!==t){if(e&&!t)switch(e){case"zoom":i.handleZoomEnd(n);break;case"drag":i.handleDragEnd(n);break}switch(t){case"zoom":i.handleZoomStart(n);break;case"drag":i.handleDragStart(n);break}}e=t},h=function(t){2===n?a("zoom"):1===n&&i.canDrag()?a("drag",t):a(null,t)},r=function(t){return Array.from(t).map(function(t){return{x:t.pageX,y:t.pageY}})},f=function(t,i){var e,n;return e=t.x-i.x,n=t.y-i.y,Math.sqrt(e*e+n*n)},c=function(t,i){var e=f(t[0],t[1]),n=f(i[0],i[1]);return n/e},l=function(t){t.stopPropagation(),t.preventDefault()},u=function(t){var s=(new Date).getTime();if(n>1&&(o=null),s-o<300)switch(l(t),i.handleDoubleTap(t),e){case"zoom":i.handleZoomEnd(t);break;case"drag":i.handleDragEnd(t);break}else i.isDoubleTap=!1;1===n&&(o=s)},d=!0;t.addEventListener("touchstart",function(t){i.enabled&&(d=!0,n=t.touches.length,u(t))}),t.addEventListener("touchmove",function(t){if(i.enabled&&!i.isDoubleTap){if(d)h(t),e&&l(t),s=r(t.touches);else{switch(e){case"zoom":2==s.length&&2==t.touches.length&&i.handleZoom(t,c(s,r(t.touches)));break;case"drag":i.handleDrag(t);break}e&&(l(t),i.update())}d=!1}}),t.addEventListener("touchend",function(t){i.enabled&&(n=t.touches.length,h(t))})};return t},f=r(),c=f,l={name:"Metro",mounted:function(){var t=this;s["a"].setAppTitle({title:"地铁"});var i=3;this.$nextTick(function(){var e=new c(t.$refs.img,{tapZoomFactor:3,maxZoom:6});setTimeout(function(){e.options.tapZoomFactor=i/2,e.handleDoubleTap({touches:[{pageX:window.innerWidth/2,pageY:window.innerHeight/2}]}),e.options.tapZoomFactor=i},500)})}},u=l,d=(e("0f48"),e("2877")),m=Object(d["a"])(u,n,o,!1,null,"21b7ba1c",null);i["default"]=m.exports}}]);