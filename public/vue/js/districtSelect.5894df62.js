(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["districtSelect"],{"0a49":function(t,i,n){var r=n("9b43"),e=n("626a"),a=n("4bf8"),c=n("9def"),o=n("cd1c");t.exports=function(t,i){var n=1==t,s=2==t,u=3==t,f=4==t,h=6==t,l=5==t||h,d=i||o;return function(i,o,g){for(var v,p,m=a(i),y=e(m),b=r(o,g,3),A=c(y.length),w=0,I=n?d(i,A):s?d(i,0):void 0;A>w;w++)if((l||w in y)&&(v=y[w],p=b(v,w,m),t))if(n)I[w]=p;else if(p)switch(t){case 3:return!0;case 5:return v;case 6:return w;case 2:I.push(v)}else if(f)return!1;return h?-1:u||f?f:I}}},1169:function(t,i,n){var r=n("2d95");t.exports=Array.isArray||function(t){return"Array"==r(t)}},"1af6":function(t,i,n){var r=n("63b6");r(r.S,"Array",{isArray:n("9003")})},"20d6":function(t,i,n){"use strict";var r=n("5ca1"),e=n("0a49")(6),a="findIndex",c=!0;a in[]&&Array(1)[a](function(){c=!1}),r(r.P+r.F*c,"Array",{findIndex:function(t){return e(this,t,arguments.length>1?arguments[1]:void 0)}}),n("9c6c")(a)},"20fd":function(t,i,n){"use strict";var r=n("d9f6"),e=n("aebd");t.exports=function(t,i,n){i in t?r.f(t,i,e(0,n)):t[i]=n}},"2f21":function(t,i,n){"use strict";var r=n("79e5");t.exports=function(t,i){return!!t&&r(function(){i?t.call(null,function(){},1):t.call(null)})}},3086:function(t,i,n){},3702:function(t,i,n){var r=n("481b"),e=n("5168")("iterator"),a=Array.prototype;t.exports=function(t){return void 0!==t&&(r.Array===t||a[e]===t)}},"37c8":function(t,i,n){i.f=n("2b4c")},"3a72":function(t,i,n){var r=n("7726"),e=n("8378"),a=n("2d00"),c=n("37c8"),o=n("86cc").f;t.exports=function(t){var i=e.Symbol||(e.Symbol=a?{}:r.Symbol||{});"_"==t.charAt(0)||t in i||o(i,t,{value:c.f(t)})}},"40c3":function(t,i,n){var r=n("6b4c"),e=n("5168")("toStringTag"),a="Arguments"==r(function(){return arguments}()),c=function(t,i){try{return t[i]}catch(n){}};t.exports=function(t){var i,n,o;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=c(i=Object(t),e))?n:a?r(i):"Object"==(o=r(i))&&"function"==typeof i.callee?"Arguments":o}},"4ee1":function(t,i,n){var r=n("5168")("iterator"),e=!1;try{var a=[7][r]();a["return"]=function(){e=!0},Array.from(a,function(){throw 2})}catch(c){}t.exports=function(t,i){if(!i&&!e)return!1;var n=!1;try{var a=[7],o=a[r]();o.next=function(){return{done:n=!0}},a[r]=function(){return o},t(a)}catch(c){}return n}},"549b":function(t,i,n){"use strict";var r=n("d864"),e=n("63b6"),a=n("241e"),c=n("b0dc"),o=n("3702"),s=n("b447"),u=n("20fd"),f=n("7cd6");e(e.S+e.F*!n("4ee1")(function(t){Array.from(t)}),"Array",{from:function(t){var i,n,e,h,l=a(t),d="function"==typeof this?this:Array,g=arguments.length,v=g>1?arguments[1]:void 0,p=void 0!==v,m=0,y=f(l);if(p&&(v=r(v,g>2?arguments[2]:void 0,2)),void 0==y||d==Array&&o(y))for(i=s(l.length),n=new d(i);i>m;m++)u(n,m,p?v(l[m],m):l[m]);else for(h=y.call(l),n=new d;!(e=h.next()).done;m++)u(n,m,p?c(h,v,[e.value,m],!0):e.value);return n.length=m,n}})},"54a1":function(t,i,n){n("6c1c"),n("1654"),t.exports=n("95d5")},"55dd":function(t,i,n){"use strict";var r=n("5ca1"),e=n("d8e8"),a=n("4bf8"),c=n("79e5"),o=[].sort,s=[1,2,3];r(r.P+r.F*(c(function(){s.sort(void 0)})||!c(function(){s.sort(null)})||!n("2f21")(o)),"Array",{sort:function(t){return void 0===t?o.call(a(this)):o.call(a(this),e(t))}})},"67ab":function(t,i,n){var r=n("ca5a")("meta"),e=n("d3f4"),a=n("69a8"),c=n("86cc").f,o=0,s=Object.isExtensible||function(){return!0},u=!n("79e5")(function(){return s(Object.preventExtensions({}))}),f=function(t){c(t,r,{value:{i:"O"+ ++o,w:{}}})},h=function(t,i){if(!e(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!a(t,r)){if(!s(t))return"F";if(!i)return"E";f(t)}return t[r].i},l=function(t,i){if(!a(t,r)){if(!s(t))return!0;if(!i)return!1;f(t)}return t[r].w},d=function(t){return u&&g.NEED&&s(t)&&!a(t,r)&&f(t),t},g=t.exports={KEY:r,NEED:!1,fastKey:h,getWeak:l,onFreeze:d}},7514:function(t,i,n){"use strict";var r=n("5ca1"),e=n("0a49")(5),a="find",c=!0;a in[]&&Array(1)[a](function(){c=!1}),r(r.P+r.F*c,"Array",{find:function(t){return e(this,t,arguments.length>1?arguments[1]:void 0)}}),n("9c6c")(a)},"75fc":function(t,i,n){"use strict";var r=n("a745"),e=n.n(r);function a(t){if(e()(t)){for(var i=0,n=new Array(t.length);i<t.length;i++)n[i]=t[i];return n}}var c=n("774e"),o=n.n(c),s=n("c8bb"),u=n.n(s);function f(t){if(u()(Object(t))||"[object Arguments]"===Object.prototype.toString.call(t))return o()(t)}function h(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function l(t){return a(t)||f(t)||h()}n.d(i,"a",function(){return l})},"774e":function(t,i,n){t.exports=n("d2d5")},"7bbc9":function(t,i,n){var r=n("6821"),e=n("9093").f,a={}.toString,c="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],o=function(t){try{return e(t)}catch(i){return c.slice()}};t.exports.f=function(t){return c&&"[object Window]"==a.call(t)?o(t):e(r(t))}},"7cd6":function(t,i,n){var r=n("40c3"),e=n("5168")("iterator"),a=n("481b");t.exports=n("584a").getIteratorMethod=function(t){if(void 0!=t)return t[e]||t["@@iterator"]||a[r(t)]}},"8a81":function(t,i,n){"use strict";var r=n("7726"),e=n("69a8"),a=n("9e1e"),c=n("5ca1"),o=n("2aba"),s=n("67ab").KEY,u=n("79e5"),f=n("5537"),h=n("7f20"),l=n("ca5a"),d=n("2b4c"),g=n("37c8"),v=n("3a72"),p=n("d4c0"),m=n("1169"),y=n("cb7c"),b=n("d3f4"),A=n("4bf8"),w=n("6821"),I=n("6a99"),j=n("4630"),D=n("2aeb"),S=n("7bbc9"),O=n("11e9"),k=n("2621"),x=n("86cc"),_=n("0d58"),N=O.f,C=x.f,E=S.f,F=r.Symbol,J=r.JSON,P=J&&J.stringify,U="prototype",H=d("_hidden"),T=d("toPrimitive"),W={}.propertyIsEnumerable,Q=f("symbol-registry"),Y=f("symbols"),V=f("op-symbols"),q=Object[U],L="function"==typeof F&&!!k.f,z=r.QObject,G=!z||!z[U]||!z[U].findChild,K=a&&u(function(){return 7!=D(C({},"a",{get:function(){return C(this,"a",{value:7}).a}})).a})?function(t,i,n){var r=N(q,i);r&&delete q[i],C(t,i,n),r&&t!==q&&C(q,i,r)}:C,R=function(t){var i=Y[t]=D(F[U]);return i._k=t,i},B=L&&"symbol"==typeof F.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof F},X=function(t,i,n){return t===q&&X(V,i,n),y(t),i=I(i,!0),y(n),e(Y,i)?(n.enumerable?(e(t,H)&&t[H][i]&&(t[H][i]=!1),n=D(n,{enumerable:j(0,!1)})):(e(t,H)||C(t,H,j(1,{})),t[H][i]=!0),K(t,i,n)):C(t,i,n)},Z=function(t,i){y(t);var n,r=p(i=w(i)),e=0,a=r.length;while(a>e)X(t,n=r[e++],i[n]);return t},M=function(t,i){return void 0===i?D(t):Z(D(t),i)},$=function(t){var i=W.call(this,t=I(t,!0));return!(this===q&&e(Y,t)&&!e(V,t))&&(!(i||!e(this,t)||!e(Y,t)||e(this,H)&&this[H][t])||i)},tt=function(t,i){if(t=w(t),i=I(i,!0),t!==q||!e(Y,i)||e(V,i)){var n=N(t,i);return!n||!e(Y,i)||e(t,H)&&t[H][i]||(n.enumerable=!0),n}},it=function(t){var i,n=E(w(t)),r=[],a=0;while(n.length>a)e(Y,i=n[a++])||i==H||i==s||r.push(i);return r},nt=function(t){var i,n=t===q,r=E(n?V:w(t)),a=[],c=0;while(r.length>c)!e(Y,i=r[c++])||n&&!e(q,i)||a.push(Y[i]);return a};L||(F=function(){if(this instanceof F)throw TypeError("Symbol is not a constructor!");var t=l(arguments.length>0?arguments[0]:void 0),i=function(n){this===q&&i.call(V,n),e(this,H)&&e(this[H],t)&&(this[H][t]=!1),K(this,t,j(1,n))};return a&&G&&K(q,t,{configurable:!0,set:i}),R(t)},o(F[U],"toString",function(){return this._k}),O.f=tt,x.f=X,n("9093").f=S.f=it,n("52a7").f=$,k.f=nt,a&&!n("2d00")&&o(q,"propertyIsEnumerable",$,!0),g.f=function(t){return R(d(t))}),c(c.G+c.W+c.F*!L,{Symbol:F});for(var rt="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),et=0;rt.length>et;)d(rt[et++]);for(var at=_(d.store),ct=0;at.length>ct;)v(at[ct++]);c(c.S+c.F*!L,"Symbol",{for:function(t){return e(Q,t+="")?Q[t]:Q[t]=F(t)},keyFor:function(t){if(!B(t))throw TypeError(t+" is not a symbol!");for(var i in Q)if(Q[i]===t)return i},useSetter:function(){G=!0},useSimple:function(){G=!1}}),c(c.S+c.F*!L,"Object",{create:M,defineProperty:X,defineProperties:Z,getOwnPropertyDescriptor:tt,getOwnPropertyNames:it,getOwnPropertySymbols:nt});var ot=u(function(){k.f(1)});c(c.S+c.F*ot,"Object",{getOwnPropertySymbols:function(t){return k.f(A(t))}}),J&&c(c.S+c.F*(!L||u(function(){var t=F();return"[null]"!=P([t])||"{}"!=P({a:t})||"{}"!=P(Object(t))})),"JSON",{stringify:function(t){var i,n,r=[t],e=1;while(arguments.length>e)r.push(arguments[e++]);if(n=i=r[1],(b(i)||void 0!==t)&&!B(t))return m(i)||(i=function(t,i){if("function"==typeof n&&(i=n.call(this,t,i)),!B(i))return i}),r[1]=i,P.apply(J,r)}}),F[U][T]||n("32e9")(F[U],T,F[U].valueOf),h(F,"Symbol"),h(Math,"Math",!0),h(r.JSON,"JSON",!0)},9511:function(t,i,n){"use strict";n.r(i);var r=function(){var t=this,i=t.$createElement,r=t._self._c||i;return r("div",{attrs:{id:"district"}},[r("div",{directives:[{name:"show",rawName:"v-show",value:t.historyData.length>0,expression:"historyData.length > 0"}],staticClass:"title"},[t._v("历史浏览\n\t\t"),r("div",{attrs:{id:"clear"},on:{click:t.removeHistory}},[r("img",{attrs:{src:n("bb1c")}}),r("span",[t._v("清空")])])]),r("div",{directives:[{name:"show",rawName:"v-show",value:t.historyData.length>0,expression:"historyData.length > 0"}],staticClass:"list",attrs:{id:"history"}},t._l(t.visibleHistoryData,function(i,n){return r("div",{key:"history"+n,staticClass:"item",class:{"item-3":n%3===2,"item-4":n%4===3},on:{click:function(n){return t.selectDistrict(i)}}},[t._v(t._s(i.name))])}),0),r("div",{staticClass:"title",attrs:{id:"district-title"}},[t._v("行政区域")]),r("div",{staticClass:"area-list",attrs:{id:"districts"}},[t._l(t.allDistrictsData,function(i,n){return r("div",{key:"district"+n,staticClass:"item-wrap",on:{click:function(n){return t.selectDistrict(i)}}},[r("div",{directives:[{name:"lazy",rawName:"v-lazy:background-image",value:i.tagImg,expression:"item.tagImg",arg:"background-image"}],staticClass:"tag-img"}),r("span",[t._v(t._s(i.name))])])}),r("div",{staticClass:"item-wrap"})],2)])},e=[],a=(n("a481"),n("75fc")),c=(n("20d6"),n("28a5"),n("ac4d"),n("8a81"),n("ac6a"),n("55dd"),n("7f7f"),n("7514"),n("ac2d")),o=n("90e9"),s=n("90fe"),u=n("f121"),f=n("d6a0"),h=u["a"].ENV_URL,l="WH_district_10001",d={name:"district-select",data:function(){var t="选择区域",i=Object(s["h"])(f["c"]);return i=i?JSON.parse(i):[],{title:t,historyData:i,allDistrictsData:[]}},computed:{visibleHistoryData:function(){return this.historyData.slice(0,10)}},created:function(){c["a"].setAppTitle({title:this.title}),this.getDistrictsData()},mounted:function(){this.removeHeight()},methods:{getDistrictsData:function(){var t=this;Object(o["b"])().then(function(i){var n=i.find(function(t){return 14===+t.categoryId}).id;t.allDistrictsData=i.filter(function(t){if(+t.parentId===n&&t.categoryId){var r=t.id,e=null,a=null,c=null,o=null,s=null,u=null,f=!0,h=!1,l=void 0;try{for(var d,g=i[Symbol.iterator]();!(f=(d=g.next()).done);f=!0){var v=d.value;if(t!==v){var p=v.parentId,m=v.categoryId,y=v.name,b=m.split("-").slice(-1)[0];e||+p===r&&"1"===b&&(e=v),a||+p===r&&"2"===b&&(a=v),c||+p===r&&"3"===b&&(c=v),o||+p===r&&"活动"===y.trim()&&(o=v),s||+p===r&&"banner"===y.trim()&&(s=v),u||+p===r&&y&&"vr"===y.toLowerCase()&&(u=v)}}}catch(w){h=!0,l=w}finally{try{f||null==g.return||g.return()}finally{if(h)throw l}}if(!e)return;if(t.detailId=e.categoryId,a&&(t.videoId=a.categoryId,t.videoImage=a.imageUrl),c){var A=i.filter(function(t){if(+t.parentId===+c.id&&"VR游静安"!==t.name&&"下架"!==t.detail)return t.children=i.filter(function(i){return+i.parentId===+t.id}),!0});A.sort(function(t,i){return t.weight-i.weight}),t.blocks=A}return o&&(t.activityImageUrl=o.imageUrl,t.activityUrl=o.url,t.activityName=o.detail),s&&(t.bannerImageUrl=s.imageUrl,t.bannerUrl=s.url),u&&(t.vrInfo=u),t.imageUrl=e.imageUrl,!0}return!1}),t.allDistrictsData.sort(function(t,i){return t.weight-i.weight}),t.allDistrictsData.forEach(function(t){switch(t.name){case"浦东新区":t.tagImg="http://hhh.images.visitshanghai.com.cn/district_pudong.jpg";break;case"黄浦区":t.tagImg="http://hhh.images.visitshanghai.com.cn/district_huangpu.jpg";break;case"静安区":t.tagImg="http://hhh.images.visitshanghai.com.cn/district_jingan.jpg";break;case"徐汇区":t.tagImg="http://hhh.images.visitshanghai.com.cn/district_xuhui.jpg";break;case"长宁区":t.tagImg="http://hhh.images.visitshanghai.com.cn/district_changning.jpg";break;case"普陀区":t.tagImg="http://hhh.images.visitshanghai.com.cn/district_putuo.jpg";break;case"虹口区":t.tagImg="http://hhh.images.visitshanghai.com.cn/district_hongkou.jpg";break;case"杨浦区":t.tagImg="http://hhh.images.visitshanghai.com.cn/district_yangpu.jpg";break;case"宝山区":t.tagImg="http://hhh.images.visitshanghai.com.cn/district_baoshan.jpg";break;case"闵行区":t.tagImg="http://hhh.images.visitshanghai.com.cn/district_minhang.jpg";break;case"嘉定区":t.tagImg="http://hhh.images.visitshanghai.com.cn/district_jiading.jpg";break;case"金山区":t.tagImg="http://hhh.images.visitshanghai.com.cn/district_jinshan.jpg";break;case"松江区":t.tagImg="http://hhh.images.visitshanghai.com.cn/district_songjiang.jpg";break;case"青浦区":t.tagImg="http://hhh.images.visitshanghai.com.cn/district_qingpu.jpg";break;case"奉贤区":t.tagImg="http://hhh.images.visitshanghai.com.cn/district_fengxian.jpg";break;case"崇明区":t.tagImg="http://hhh.images.visitshanghai.com.cn/district_chongming.jpg";break;default:t=""}}),t.updateHistoryData()})},updateHistoryData:function(){var t=this;this.historyData.length>0&&this.historyData.forEach(function(i,n){var r=i.id,e=t.allDistrictsData.find(function(t){return+t.id===+r});e&&t.historyData.splice(n,1,e)})},selectDistrict:function(t){this.saveHistory(t),this.toDistrictDetail(t)},saveHistory:function(t){var i=this,n=t.id,r=this.historyData.findIndex(function(t){return+t.id===+n}),e=Object(a["a"])(this.historyData);r>=0?(e.splice(r,1),e.unshift(t)):e.unshift(t),this._isApp&&setTimeout(function(){i.historyData=e},200),Object(s["j"])(f["c"],JSON.stringify(e))},toDistrictDetail:function(t){this.$uweb.trackEvent(t.name+"点击率"+l,"点击"),Object(f["e"])(t),localStorage.setItem(f["b"],JSON.stringify(t));var i="district-detail-old",n=i,r=!0,e=t.url;e&&(e=e.trim().replace(/^\//,""),e&&(n=e,r=r===i)),c["a"].openNewWebView({url:"".concat(h,"/#/").concat(n),isFitWindow:r})},removeHistory:function(){this.historyData=[],Object(s["i"])(f["c"])}},beforeDestroy:function(){this.resetHeight()}},g=d,v=(n("d875"),n("2877")),p=Object(v["a"])(g,r,e,!1,null,"5340fc9c",null);i["default"]=p.exports},"95d5":function(t,i,n){var r=n("40c3"),e=n("5168")("iterator"),a=n("481b");t.exports=n("584a").isIterable=function(t){var i=Object(t);return void 0!==i[e]||"@@iterator"in i||a.hasOwnProperty(r(i))}},a745:function(t,i,n){t.exports=n("f410")},ac4d:function(t,i,n){n("3a72")("asyncIterator")},b0dc:function(t,i,n){var r=n("e4ae");t.exports=function(t,i,n,e){try{return e?i(r(n)[0],n[1]):i(n)}catch(c){var a=t["return"];throw void 0!==a&&r(a.call(t)),c}}},bb1c:function(t,i){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAnJJREFUaAXtWUFLAlEQXk1B6QcYCkHehDrZrbN/IPoNekjwFh09RXQTDNHfEJ26de4i3Qq61UnB7qGwoc3Ie8tsu9LbmUcWPi/73sw3M9/MvN196/M893MV2OwKpCTpN5vNA9/3y+Ajy/TjZ7PZ1263+8S099gJ1Ov101QqdcQNTO0Wi8XDYDC4pjLTcdoUSHFYeVvk0S/6Qp80huk4YwqkOLVsliII/gIVfKF60zHYVsC2gnjlM/FSYiUA8YI1j+T7/f6NKWmKazQaJzBfJkB9UsxPY9YS+snpb+pdAr9Z7bhYkcdoq9UqzGazcwAX4gzWKJvkcrnLTqczoRwiS2g6nR7+QfLIuaC4Uf5eJIF8Pv8IiFCWIYv1TSaKW4hBZAmFtGSiHnnHSnTLfXQSl6Eh13+kAyGv/2Dy7xPgvokjvWm325nxeHyWTqf34O0MK6yP91LwgyVyCFuHxnw+fysWi1eA/wyUgoG1DoxGozIQ3Afy28CnFsOphjrEIDZGzxJZSwAqH3QTSAZjzYrKKFbruVdrCXAJSO1cAtIKSu1dB6QVlNq7DkgrKLV3HZBWUGrvOiCtoNTedUBaQam9tQ7APj/Y38O2ORhrglRGsVrPvVpLoFQqvQLJZ9g2fwCZ+xhC96hDDGJj9CxRZN/O8gJG6gvrYpW9+kILfaWtwiaRW+tAkqA2sS4Bm9Xk+EpyD/g6ANyMFfVHlBaJr+gTbnDtJ4ilBauuxgngYRycoiz9QCA8lNAHE6t8J5IT8h7GMjXeMgUOh8P3arW6A5XaNbXh4CCRh16vd2dqa/zfqHZo4WhVu/p+FR+5fnfo5q4Cm1CBL5rJslwGLPEnAAAAAElFTkSuQmCC"},c8bb:function(t,i,n){t.exports=n("54a1")},cd1c:function(t,i,n){var r=n("e853");t.exports=function(t,i){return new(r(t))(i)}},d2d5:function(t,i,n){n("1654"),n("549b"),t.exports=n("584a").Array.from},d4c0:function(t,i,n){var r=n("0d58"),e=n("2621"),a=n("52a7");t.exports=function(t){var i=r(t),n=e.f;if(n){var c,o=n(t),s=a.f,u=0;while(o.length>u)s.call(t,c=o[u++])&&i.push(c)}return i}},d6a0:function(t,i,n){"use strict";n.d(i,"c",function(){return r}),n.d(i,"b",function(){return e}),n.d(i,"d",function(){return a}),n.d(i,"a",function(){return c}),n.d(i,"e",function(){return o});var r="district_search",e="district_active",a="district_video",c=null,o=function(t){c=t}},d875:function(t,i,n){"use strict";var r=n("3086"),e=n.n(r);e.a},e853:function(t,i,n){var r=n("d3f4"),e=n("1169"),a=n("2b4c")("species");t.exports=function(t){var i;return e(t)&&(i=t.constructor,"function"!=typeof i||i!==Array&&!e(i.prototype)||(i=void 0),r(i)&&(i=i[a],null===i&&(i=void 0))),void 0===i?Array:i}},f410:function(t,i,n){n("1af6"),t.exports=n("584a").Array.isArray}}]);