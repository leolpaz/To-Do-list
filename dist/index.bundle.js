(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(81),i=n.n(r),o=n(645),a=n.n(o)()(i());a.push([e.id,".container {\r\n  list-style-type: none;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n.list-container {\r\n  list-style-type: none;\r\n  border: 1px solid #ccc;\r\n  box-shadow: 0 2px 10px rgb(160, 158, 158);\r\n  padding: 0;\r\n  width: 450px;\r\n}\r\n\r\n.list-item {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  margin: 4%;\r\n  align-items: center;\r\n}\r\n\r\n.list-input {\r\n  margin: 4%;\r\n  height: 20px;\r\n  border: none;\r\n  font-style: italic;\r\n  font-size: 18px;\r\n  width: 92%;\r\n}\r\n\r\n.title-container {\r\n  margin: 4%;\r\n  font-size: 20px;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.title-container img {\r\n  height: 23px;\r\n  width: 23px;\r\n  filter: invert(60%);\r\n}\r\n\r\n.list-item input {\r\n  margin-right: 20px;\r\n}\r\n\r\n.list-item img {\r\n  height: 23px;\r\n  width: 23px;\r\n  filter: invert(60%);\r\n}\r\n\r\n.list-button {\r\n  width: 100%;\r\n  margin: 0;\r\n  border: none;\r\n  border-top: 1px solid #ccc;\r\n  padding: 3%;\r\n  font-size: 18px;\r\n  color: rgb(150, 150, 150);\r\n}\r\n\r\n.list-box {\r\n  height: 18px;\r\n  width: 18px;\r\n}\r\n\r\n.list-label {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.description {\r\n  width: 100%;\r\n  font-size: 16px;\r\n  display: inline-flex;\r\n  align-self: end;\r\n  justify-content: space-between;\r\n}\r\n",""]);const s=a},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,i,o){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(a[c]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);r&&a[d[0]]||(void 0!==o&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=o),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),i&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=i):d[4]="".concat(i)),t.push(d))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var o={},a=[],s=0;s<e.length;s++){var c=e[s],l=r.base?c[0]+r.base:c[0],d=o[l]||0,p="".concat(l," ").concat(d);o[l]=d+1;var u=n(p),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)t[u].references++,t[u].updater(f);else{var m=i(f,r);r.byIndex=s,t.splice(s,0,{identifier:p,updater:m,references:1})}a.push(p)}return a}function i(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,i){var o=r(e=e||[],i=i||{});return function(e){e=e||[];for(var a=0;a<o.length;a++){var s=n(o[a]);t[s].references--}for(var c=r(e,i),l=0;l<o.length;l++){var d=n(o[l]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}o=c}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var i=void 0!==n.layer;i&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,i&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},469:(e,t,n)=>{e.exports=n.p+"d1a9a6e2426829731ad7.png"},851:(e,t,n)=>{e.exports=n.p+"f0eede3c3b90190e0f04.png"}},t={};function n(r){var i=t[r];if(void 0!==i)return i.exports;var o=t[r]={id:r,exports:{}};return e[r](o,o.exports,n),o.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),(()=>{var e=n(379),t=n.n(e),r=n(795),i=n.n(r),o=n(569),a=n.n(o),s=n(565),c=n.n(s),l=n(216),d=n.n(l),p=n(589),u=n.n(p),f=n(426),m={};m.styleTagTransform=u(),m.setAttributes=c(),m.insert=a().bind(null,"head"),m.domAPI=i(),m.insertStyleElement=d(),t()(f.Z,m),f.Z&&f.Z.locals&&f.Z.locals;var h=n(469),v=n(851);const g=document.getElementById("main-list"),b=new Image;b.src=h;const y=[{description:"Complete day 1 milestone",completed:!1,index:2},{description:"Wash the dishes",completed:!1,index:1},{description:"Wash the dishes",completed:!1,index:1}];!function(){y.sort(((e,t)=>e.index-t.index));const e=document.createElement("div"),t=document.createElement("p");e.classList.add("title-container"),t.classList.add("list-tittle"),t.innerHTML="Today's To Do",e.appendChild(t),e.appendChild(b);const n=document.createElement("input");n.classList.add("list-input"),n.setAttribute("placeholder","Add to your list..."),g.appendChild(e),g.appendChild(n),y.forEach(((e,t)=>{const n=new Image;n.src=v;const r=document.createElement("li");r.classList.add("list-item");const i=document.createElement("label");i.setAttribute("for",`element${t}`),i.classList.add("list-label");const o=document.createElement("input");o.setAttribute("id",`element${t}`),o.setAttribute("value",`${e.completed}`),o.setAttribute("type","checkbox"),o.classList.add("list-box");const a=document.createElement("div");a.classList.add("description"),a.innerHTML=`<p>${e.description}</p>`,i.appendChild(o),i.appendChild(a),r.appendChild(i),r.appendChild(n),g.appendChild(r)}));const r=document.createElement("button");r.setAttribute("type","button"),r.classList.add("list-button"),r.innerHTML="Clear all completed",g.appendChild(r)}()})()})();