(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["order-detail"],{"06ce":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAYAAADFw8lbAAAABGdBTUEAALGPC/xhBQAABYVJREFUWAnNmNtPXEUcx1luhRgTEoEiEAGL6cWKNVxDwpNaxfjYJkq1PmpbH6Q+qP+BfQEeKhgTXyo0Gnxt1laMJiSE64NttV5ouKihXfBNw5bb+vmennOYPbtny7JnK5PMzsxvfpfv/OY3vzOzoZw9Wpqamg4CrZt6gvplaK/hbG5ufn5ra0sAX6E6+Fby9wLQkydPFs7Nzb0Wi8XeB2RDEkzDDuIkc9knNTY2loZCobex9C4gKzwWY4yFLwbP4f/FowA8hPH3AHEagMUOQGhR+kO01/DsVzb9yvT09K8PFagZfwA0dzMCuIHi4uJPRkdHlzlInzvgaXvUN5mNueC6nZ2d+1ZWVl7HQ+fR+oypGXA3GfeVlZUNhsPhe5rr6OgoW11dXWQhRQx/nJmZOSZ61jyq+EP/O8vLy4q//TJmF8XeNWoPW6o2rgDynA0yh4VY3hRD4B5ta2s7vLGx4cSfvGIVjEYBMJifn987MTHxs0M3W3k/EoksQiuH/05dXV3N8PDwmngC8yjx9wJAzq+vr7+MXtcBGLxL7S8qKhpQ/MmoX8H7bzBXbs9fdEBqnBFQO/66lKCpcfGH7hsAVPwNOfFnA0jVaCe05au5ubmfmoy7AqqAj0ajZ/DAWW/8YeQbDPQSf9+ahh7UJ6aPo+uozXdpcnLyb1MmLaCtra1HFH8E/JsoNeNvlfFgQUFB7/j4+C3TQBp9ZQUVVMX67ne3f91Y2iYl9rRaPNWNgpeYdWWg3YHWD22ANLKSKLkziu0ApSrpvoKuV72Svh5V/LG1pxAQwKNUU/Y6MdRbW1t72Qx4kyGdPrukS4jlAOlNJut6x5lsb28vX1tbOwOws9CcE6hpfXPD1J6pqanvHP5MW0+Cv443n02m0/Uo6eVpwHUD8hRtXPwheAlaHwfkl2RKMqHpUBr23ATv1RkC4DFSywUmjpuTij/GF5UmvCfQ5Mukb4fXAkD3y16dkeC9evMqKyunID7nnUBwHgW50A9WVVXVVFdXP1pRUbG+tLT0j5d3t+OSkpK3sNFly18YGRn53k+Xtn6cesLLgALlNOsQ0XenyQD/MrjNQmZpZ9WyI7N4fhbP/8l4m9mV8u3oEFkJHhtxCd4rYR0m0sNTm5ub9TDXw1CPMatlXMe4wCvkN0ZO3/PfaD8knsN+fKJzlXsRXutSAv9n8OsC7Vusw8Ql4Xc4VOMKT4S8hYWFJ/CYtQhjAVrMkxhyD50E7XED7ccMUwJl3k3wXFQSErz0mSUhPZmTqfqACbW0tFTTHqDWs/X1LEghdIB6Dw8Vs5ikYaAbFpeXn+CDJRSGVw+5lMXyaEoOn0kbxB9Mq/4gNjJIDmA/oLtPi6DVXEIBpJvg0eObkkxBnerACiB1wKyicHH6ZqsLNeB0nVO5wcdj5H439W+gQAHgAlUo+JhWgrcedPAk/VwmkwsUaF5engtUces1qPc7i9GnWcF5t7S09LKXx28cKFCueH8BIGobSwA6Pz/fxQIqNA9ffxoX6pxAgWJcp/y2gCTzKHHrJPionibi22kJFKht1Nl+pSm36E3FoEEEFvHFg95PrqDdCRwoIBygj3DCH3cMQre8KZw7SfCOnNMGDhTF1tbLAIfLilMAHwJop2iEx1W/57Lm/UrgQAHieNSNU2h6XTpfwR0leC/gwIHqFuUYwYv1fKEeY3xaNADf5HOZ1uvU0RU40JqamkWUr8uAgHIrcxM8pB0neMmbJXCgPPY28dycjNAeoZ6zDUb0Z4RpPJ1+4EBt49b241FdvHeV4L2LyApQwLlxKoN4NVpYWJhWgn8oQDESB5Tx0NjYWMRrPJ1xVjyKB91cKjCMd32InMVkBSiJ3nzWXOXOqdt8RiUrQPUGw4tfg2yJ9qOMENrC/wG6E1+wys+8FAAAAABJRU5ErkJggg=="},"087a":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"order-detail-page"},[s("div",{staticClass:"space"}),s("div",{staticClass:"info"},[s("h2",{staticClass:"title"},[s("span",[t._v(t._s(t.orderData.productName))])]),s("div",{staticClass:"discount"},[s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:a("b0ed"),expression:"require(`@/static/image/promo_zh-CN.png`)"}]}),s("span",[t._v(t._s(t.orderData.productDesc))])]),s("div",{staticClass:"date"},[s("span",[t._v(t._s(t.$t("orderDetail.expiryDate"))+" ")]),s("span",[t._v(t._s(t.dateFormat(t.orderData.beginTime,"yyyy.mm.dd"))+"-"+t._s(t.dateFormat(t.orderData.endTime,"yyyy.mm.dd")))])]),s("div",{staticClass:"order-id"},[s("span",[t._v(t._s(t.$t("orderDetail.orderID"))+" ")]),s("span",[t._v(t._s(t.orderData.orderNo))])]),s("div",{staticClass:"adderss"},[s("img",{staticClass:"icon-location",attrs:{src:a("fd39")}}),s("div",{staticClass:"text",on:{click:function(e){return t.gotoMap(t.orderData)}}},[t._v(t._s(t.orderData.address))]),s("div",{staticClass:"icons"},[s("img",{staticClass:"icon-navigation",attrs:{src:a("06ce")},on:{click:function(e){return t.gotoMap(t.orderData)}}}),s("div",{staticClass:"line"}),s("img",{directives:[{name:"show",rawName:"v-show",value:t.orderData.telephone,expression:"orderData.telephone"}],staticClass:"icon-phone",attrs:{src:a("ad81")},on:{click:t.showActionsheet}})])])]),s("div",{staticClass:"space"}),s("div",{staticClass:"user-id"},[1==t.memberInfo.auditing?s("div",{staticClass:"name"},[s("span",[t._v(t._s(t.$t("orderDetail.dear"))+" ")]),s("span",[t._v(t._s(t.memberInfo.memberName))])]):t._e(),s("div",{staticClass:"tips"},[t._v(t._s(t.$t("orderDetail.tips")))]),s("img",{staticClass:"code",attrs:{src:a("8916")}}),s("div",{directives:[{name:"show",rawName:"v-show",value:t.isFromDetail,expression:"isFromDetail"}],staticClass:"notes"},[t._v(t._s(t.$t("orderDetail.notes")))])]),s("v-actionsheet",{attrs:{visible:t.isActionsheetVisible},on:{"update:visible":function(e){t.isActionsheetVisible=e}}},[s("div",{staticClass:"phone-list"},[s("ul",[s("li",{on:{click:function(e){return t.callPhone(t.orderData.telephone)}}},[t._v(t._s(t.orderData.telephone))])]),s("div",{staticClass:"space"}),s("div",{staticClass:"cancel-btn",on:{click:t.hideActionsheet}},[t._v(t._s(t.isZH?"取消":"Cancel"))])])])],1)},n=[],i=a("cebc"),o=a("c936"),r=a("62a2"),c=a("ac2d"),A={data:function(){return{orderData:{},isActionsheetVisible:!1,memberInfo:{},isOpenLocation:!1}},computed:{isFromDetail:function(){return"list-detail"===this.$route.query.from},isFromOredr:function(){return"order"===this.$route.query.from}},mounted:function(){var t=this;this.getDetail(),c["a"].setAppTitle({title:this.$t("goodsDetail.enjoyDiscount")}),setTimeout(function(){c["a"].noCallAppLoginGetInfo(function(e){t.memberInfo=t.getMemberInfo(e)}),c["a"].refreshPage(function(){c["a"].noCallAppLoginGetInfo(function(e){t.memberInfo=t.getMemberInfo(e)})})},200)},methods:Object(i["a"])({},r["a"],{getLocation:function(){var t=this;c["a"].gainLocation(function(e){100===e.msgCode&&e.result||(t.isOpenLocation=!0)},this)},gotoMap:function(t){this.openRouterMap(t)},getDetail:function(){var t=this;o["a"].getOrderDetail({orderId:this.$route.params.id}).then(function(e){t.orderData=e.data})},showActionsheet:function(){this.isActionsheetVisible=!0},hideActionsheet:function(){this.isActionsheetVisible=!1},callPhone:function(t){console.log(t),c["a"].callPhone({phoneNumber:t})}})},d=A,u=(a("48b9"),a("2877")),l=Object(u["a"])(d,s,n,!1,null,"650ae628",null);e["default"]=l.exports},"3b2b":function(t,e,a){var s=a("7726"),n=a("5dbc"),i=a("86cc").f,o=a("9093").f,r=a("aae3"),c=a("0bfb"),A=s.RegExp,d=A,u=A.prototype,l=/a/g,f=/a/g,g=new A(l)!==l;if(a("9e1e")&&(!g||a("79e5")(function(){return f[a("2b4c")("match")]=!1,A(l)!=l||A(f)==f||"/a/i"!=A(l,"i")}))){A=function(t,e){var a=this instanceof A,s=r(t),i=void 0===e;return!a&&s&&t.constructor===A&&i?t:n(g?new d(s&&!i?t.source:t,e):d((s=t instanceof A)?t.source:t,s&&i?c.call(t):e),a?this:u,A)};for(var b=function(t){t in A||i(A,t,{configurable:!0,get:function(){return d[t]},set:function(e){d[t]=e}})},p=o(d),v=0;p.length>v;)b(p[v++]);u.constructor=A,A.prototype=u,a("2aba")(s,"RegExp",A)}a("7a56")("RegExp")},"48b9":function(t,e,a){"use strict";var s=a("4b08"),n=a.n(s);n.a},"4b08":function(t,e,a){},"62a2":function(t,e,a){"use strict";a("456d"),a("ac6a"),a("3b2b"),a("a481");e["a"]={dateFormat:function(t,e){var a=new Date,s="日一二三四五六";t&&a.setTime(t),e=e||"yyyy-mm-dd";var n={"m+":a.getMonth()+1,"d+":a.getDate(),"w+":s.charAt(a.getDay()),"h+":a.getHours(),"M+":a.getMinutes(),"s+":a.getSeconds()};return/(y+)/.test(e)&&(e=e.replace(RegExp.$1,(a.getFullYear()+"").slice(-RegExp.$1.length))),Object.keys(n).forEach(function(t){new RegExp("(".concat(t,")")).test(e)&&(e=e.replace(RegExp.$1,1===RegExp.$1.length?n[t]:"00".concat(n[t]).slice((""+n[t]).length)))}),e}}},8916:function(t,e,a){t.exports=a.p+"img/user_code.c305b673.png"},ad81:function(t,e){t.exports="data:image/png;base64,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"},b0ed:function(t,e,a){t.exports=a.p+"img/promo_zh-CN.06c65a3f.png"},c936:function(t,e,a){"use strict";var s=a("da80"),n=a("8742");e["a"]={addOrder:function(t){return Object(s["a"])({method:"POST",url:n["a"].order.addOrder,data:t})},getOrderDetail:function(t){return Object(s["a"])({method:"POST",url:n["a"].order.getOrder,data:t})},getOrderList:function(t){return Object(s["a"])({method:"POST",url:n["a"].order.getList,data:t})}}},fd39:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAABGdBTUEAALGPC/xhBQAABVdJREFUaAXtmktoXFUYx2cmISShu2LHWtMuapCSZaWWxEkmyaqPjc2mWKUtLqLduOjCQkVBRHDhohsfq6ZQ+1h01WqRksnDpDihpUIJgqj4StOoy0bikJnx94U79M7l5J7HvXeQci9czuN7/f/fd3LPuTeTyaRXmoE0A2kG0gykGfjfZCDbKiSlUun5er2+I5fLbSfm017ch7Vabbmjo+OPQqHwQyuwJEZ4cXGxY2Vl5QAkDkH0IO0ODaGlbDb7FTpf5vP5m319fRWNvpM4dsJTU1PtVO0kaN7h3umEKpP5DbsPWA3nh4eH1x19KM1iJcyyHSXK51R0tzKa5SQV/wmT8ZGRkUlL003Vc5tKLAQQzE5OTp6h/ToushJefIlPz3csxYnsRJYwoK5wj1nkyFqVal/jPhp1iUeuMEQ/S5qsV+0xiWWdqYBBJMJU9ywgXg/4TGwosSRmlADOS3p2dnbf+vr6t4Bw9uECnGVdb29v3z84OLjgYu9UYSEJ2XMOZGWvvQzQj+X2+ks2wCPE3gjjVB2W1TH22oumQCE2zZ76brFY/EZlMz09XcDf+5ApquSqOXweY7u6pJKFzTkRZr+VpfximGNPVoXo2zxZpaLai0SehvhHKLbplCFchvB+nV5Qbk14Zmamp1qt/mq4nE+Njo5+GgwaNmbPfRP5J2E6IoNwva2tbdfQ0NDvOl2/3PpvmArI9qBNFICu2pIVYGIjtn6Qqr5gECwqWdicNWECFcIcerIaoM8Y6ClVPNuaUuibNMTis8hkrAljrXvrkeU2x9/tL02RLAZiKz4MTLRYgj6sCZPVZ4NOFGMTsAqzpqn5ppF6kDxh4j6ljv14luosPx659fDxQGdJ8rfpdIJy6wrj4O+gk+CYh8mW4Jzt2NDHX7Z+rQmT+R91QdB5Tqejk+Oj10BH3petLmvCLKNbugjoHOa29t3wK7bchxrjzVp0tFiCttagyPz1oBPFOM9x8TXFvNGUZ5vXKRtiaXKjPUA0aXsDTkNluvtUssYcYJZ5q9nLW43VA4y3sO28mNylevJ1M+xa4JBicrxt8mFdYbHmfKw9+glggF8vl8tbmyKGDERXbAzIGmFQhXIijKMvuH9WOfTPAXzv6urqXV4Kiv55VV90RFdsVHL/HKtHHlaCwfpyWtISBYDH2TomTCMCsgSZK3x0n6GKG3ssS/6ZSqUyhOwoshFTX6ywE5zGLpjq+/WcCQMwB+nbtNZ/R34Atn2SU4ZsP632rK3y7bqk5bwsLwhv4LSqcpzQXFViupIVTM6ExZhMf0fwc9JvxSWxJGaUWJEIS2BAvMdt9RLuAlhiSCwXW79NZMJk/BFATvmdJtGXGBIrqu/IhAUAQG4ASLs3u4IV3xLD1d5vFwthcQio0zT3/c5j6t/3fMfiznlbUkXnA98e9tg7yLpVcoe5f9irX+BD3fcOtkqT2Cos3gUYh4K3lJEcJsVXnGQFQqwVbnDiu/UEB5LjjbFLyzK+wHfnEy62YTaxVrgRqKenZ5y+0/9+PB8Lno+Gy9jaRAj39vb+29XVdYQqPbRFKjZiKz5sbU30EyEsgfv7+5dY1mN0bX6cUhEbsTUB76KTGGEBwwv6bRo5bxtdPKTGPRsjfRelRAkLIAicZ5l+qAMnOhwuJnR6UeWJPKWDoFimWV4lL9K+EpTJGLKXIPsqbV0lj3Mu8Qp7hOr82OwkhEpB8DLnyRInK7FbQlgCyS/ruru7X6Z7T8bedU/mkvrVXSOIv23JkvYHnJ+f37a2trbxv6fOzs6XBgYG/vTLn8j+3NzcTrmfSHIpqTQDaQbSDKQZSDNgnoH/ACe93aT9S+jDAAAAAElFTkSuQmCC"}}]);