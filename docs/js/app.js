(function(e){function t(t){for(var l,s,a=t[0],r=t[1],c=t[2],g=0,p=[];g<a.length;g++)s=a[g],i[s]&&p.push(i[s][0]),i[s]=0;for(l in r)Object.prototype.hasOwnProperty.call(r,l)&&(e[l]=r[l]);d&&d(t);while(p.length)p.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],l=!0,a=1;a<n.length;a++){var r=n[a];0!==i[r]&&(l=!1)}l&&(o.splice(t--,1),e=s(s.s=n[0]))}return e}var l={},i={app:0},o=[];function s(t){if(l[t])return l[t].exports;var n=l[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=l,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)s.d(n,l,function(t){return e[t]}.bind(null,l));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],r=a.push.bind(a);a.push=t,a=a.slice();for(var c=0;c<a.length;c++)t(a[c]);var d=r;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var l=n("e876"),i=n.n(l);i.a},"56d7":function(e,t,n){"use strict";n.r(t);n("7f7f"),n("cadf"),n("551c"),n("f751"),n("097d");var l=n("2b0e"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[e._m(0),n("div",{staticClass:"demos"},[n("usage"),n("hr"),n("component-demo",{staticStyle:{float:"left"}}),n("directive-demo",{staticStyle:{float:"right"}})],1),n("hr")])},o=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h1",{staticStyle:{float:"left"}},[n("span",[e._v("vue-ellipsis")]),n("small",[e._v("Customize ellipsis-like support for Vue2. ")])]),n("div",{staticStyle:{float:"right","margin-top":"25px"}},[n("a",{attrs:{href:"https://github.com/hyjiacan/vue-ellipsis"}},[e._v("Github")]),n("a",{attrs:{href:"https://gitee.com/hyjiacan/vue-ellipsis"}},[e._v("Gitee")]),n("a",{attrs:{href:"https://www.npmjs.com/package/@hyjiacan/vue-ellipsis"}},[e._v("NPM")])])])}],s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"demo"},[n("h2",[e._v("组件示例/Use component")]),n("code",[e._v('\n    <ellipsis position="start|middle|end" show-title="always|none|auto" :rows="1" scale fill="###"/>\n  ')]),n("h3",[e._v("自动缩小文字")]),n("ellipsis",{staticClass:"sample-item",attrs:{scale:""}},[e._v("|这里有一些文字这里有一些文字这里有一些文字字这里有一些文字字这里有一些文字|")]),n("code",[e._v("scale")]),n("h3",[e._v("左边")]),n("ellipsis",{staticClass:"sample-item",staticStyle:{color:"red"},attrs:{position:"start",rows:e.rows,title:"自定义title"}},[e._v("\n    很长很long long long long long long lo长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长long long long long\n    long long lo的文字，"+e._s(e.timeout)+"秒后显示所有文字\n  ")]),n("code",[e._v('position="start" :rows="rows"')]),n("ellipsis",{staticClass:"sample-item",staticStyle:{"font-size":"24px"},attrs:{position:"start"}},[e._v("\n    这段文字很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长，会显示 title 提示框\n  ")]),n("code",[e._v('position="start"')]),n("ellipsis",{staticClass:"sample-item",staticStyle:{"font-size":"40px"},attrs:{position:"start",delay:"",fill:"------"}},[e._v("\n    很长很长long long long long long long lo很长很long long long long long long lo长很长很长很长很长long long long long long\n    long lo很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长的文字\n  ")]),n("code",[e._v('position="start" delay fill="------"')]),n("ellipsis",{staticClass:"sample-item",attrs:{position:"start",rows:2,fill:"------"}},[e._v("long long long long long long long\n    long long\n    long\n    long long long\n    long long long long long long long long long long text\n  ")]),n("code",[e._v('position="start" :rows="2" fill="------"')]),n("h3",[e._v("中间")]),n("ellipsis",{staticClass:"sample-item",attrs:{position:"middle"}},[e._v("\n    这段文字很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长，但是并不会显示 title 提示框\n  ")]),n("code",[e._v('position="middle"')]),n("ellipsis",{staticClass:"sample-item",attrs:{position:"middle"}},[e._v("long long long long long long long long long long long long long\n    long long long long long long long long long long text\n  ")]),n("code",[e._v('position="middle"')]),n("ellipsis",{staticClass:"sample-item",attrs:{position:"middle","show-title":"none",fill:"------"}},[e._v("\n    这段文字不会显示 中间的填充数据中间的填充数据中间的填充数据 title\n  ")]),n("code",[e._v('position="middle" show-title="none" fill="------"')]),n("h3",[e._v("右边")]),n("ellipsis",{staticClass:"sample-item",attrs:{position:"end"}},[e._v("\n    "+e._s(e.text)+"\n  ")]),n("code",[e._v('position="end"')]),n("ellipsis",{staticClass:"sample-item",attrs:{position:"end",showTitle:"always"}},[e._v("\n    这段文字始终显示 title\n  ")]),n("code",[e._v('position="end" showTitle="always"')]),n("ellipsis",{staticClass:"sample-item",attrs:{position:"end",fill:"------"}},[e._v("\n    "+e._s(e.text)+"\n  ")]),n("code",[e._v('position="end" fill="------"')]),n("ellipsis",{staticClass:"sample-item",attrs:{position:"end",rows:3,fill:"------"}},[e._v("long long long long long\n    long long\n    "),n("span",[e._v("long")]),n("b",[e._v("long long long long long")]),n("div",[e._v("long long long long long long long long long long text")]),e._v("\n    long long long long long long long long long long text\n    long long long long long long long long long long text\n    long long long long long long long long long long text\n  ")]),n("code",[e._v('position="end" :rows="3" fill="------"')])],1)},a=[],r={name:"ComponentDemo",data:function(){return{rows:1,text:"很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长的文字",timeout:10}},mounted:function(){var e=this,t=setInterval(function(){e.timeout--,e.timeout>0||(clearInterval(t),e.rows=0,e.text="不长不长不长不长不长不长不长不长不长不长不长不长不长不长不长不长不长不长不长不长不长不长不长不长不长不长不长不长的文字")},1e3)}},c=r,d=n("0c7c"),g=Object(d["a"])(c,s,a,!1,null,null,null),p=g.exports,v=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"demo"},[n("h2",[e._v("指令示例/Use directive")]),n("code",[e._v('\n    <div v-ellipsis.[start|middle|end].[always|none|auto].scale="1" data-ellipsis="###"/>\n  ')]),n("h3",[e._v("自动缩小文字")]),n("div",{directives:[{name:"ellipsis",rawName:"v-ellipsis.scale",modifiers:{scale:!0}}],staticClass:"sample-item"},[e._v("\n    |这里有一些文字这里有一些文字这里有一些文字字这里有一些文字字这里有一些文字|\n  ")]),n("code",[e._v("v-ellipsis.scale")]),n("h3",[e._v("左边")]),n("div",{directives:[{name:"ellipsis",rawName:"v-ellipsis.start",value:e.rows,expression:"rows",modifiers:{start:!0}}],staticClass:"sample-item",staticStyle:{color:"red"},attrs:{title:"自定义title"}},[e._v("\n    很长很long long long long long long lo长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长long long long long\n    long long lo的文字，"+e._s(e.timeout)+"秒后显示所有文字\n  ")]),n("code",[e._v('v-ellipsis.start="rows"')]),n("div",{directives:[{name:"ellipsis",rawName:"v-ellipsis.start",modifiers:{start:!0}}],staticClass:"sample-item",staticStyle:{"font-size":"24px"}},[e._v("\n    这段文字很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长，会显示 title 提示框\n  ")]),n("code",[e._v("v-ellipsis.start")]),n("div",{directives:[{name:"ellipsis",rawName:"v-ellipsis.delay.start",modifiers:{delay:!0,start:!0}}],staticClass:"sample-item",staticStyle:{"font-size":"40px"},attrs:{"data-ellipsis":"------"}},[e._v("\n    很长很长long long long long long long lo很长很long long long long long long lo长很长很长很长很长long long long long long\n    long lo很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长的文字\n  ")]),n("code",[e._v('v-ellipsis.delay.start data-ellipsis="------"')]),n("div",{directives:[{name:"ellipsis",rawName:"v-ellipsis.start",value:2,expression:"2",modifiers:{start:!0}}],staticClass:"sample-item",attrs:{"data-ellipsis":"------"}},[e._v("long long long long long long long\n    long long\n    long\n    long long long\n    long long long long long long long long long long text\n  ")]),n("code",[e._v('v-ellipsis.start="2" data-ellipsis="------"')]),n("h3",[e._v("中间")]),n("div",{directives:[{name:"ellipsis",rawName:"v-ellipsis.middle",modifiers:{middle:!0}}],staticClass:"sample-item"},[e._v("\n    这段文字很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长，但是并不会显示 title 提示框\n  ")]),n("code",[e._v("v-ellipsis.middle")]),n("div",{directives:[{name:"ellipsis",rawName:"v-ellipsis.middle",modifiers:{middle:!0}}],staticClass:"sample-item"},[e._v("long long long long long long long long long long long long long\n    long long long long long long long long long long text\n  ")]),n("code",[e._v("v-ellipsis.middle")]),n("div",{directives:[{name:"ellipsis",rawName:"v-ellipsis.middle.none",modifiers:{middle:!0,none:!0}}],staticClass:"sample-item",attrs:{"data-ellipsis":"------"}},[e._v("\n    这段文字不会显示 中间的填充数据中间的填充数据中间的填充数据 title\n  ")]),n("code",[e._v('v-ellipsis.middle.none data-ellipsis="------"')]),n("h3",[e._v("右边")]),n("div",{directives:[{name:"ellipsis",rawName:"v-ellipsis.end",modifiers:{end:!0}}],staticClass:"sample-item"},[e._v("\n    "+e._s(e.text)+"\n  ")]),n("code",[e._v("v-ellipsis.end")]),n("div",{directives:[{name:"ellipsis",rawName:"v-ellipsis.end.always",modifiers:{end:!0,always:!0}}],staticClass:"sample-item"},[e._v("\n    这段文字始终显示 title\n  ")]),n("code",[e._v("v-ellipsis.end.always")]),n("div",{directives:[{name:"ellipsis",rawName:"v-ellipsis.end",modifiers:{end:!0}}],staticClass:"sample-item",attrs:{"data-ellipsis":"------"}},[e._v("\n    "+e._s(e.text)+"\n  ")]),n("code",[e._v('v-ellipsis.end data-ellipsis="------"')]),n("div",{directives:[{name:"ellipsis",rawName:"v-ellipsis.end",value:3,expression:"3",modifiers:{end:!0}}],staticClass:"sample-item",attrs:{"data-ellipsis":"------"}},[e._v("long long long long long\n    long long\n    "),n("span",[e._v("long")]),n("b",[e._v("long long long long long")]),n("div",[e._v("long long long long long long long long long long text")]),e._v("\n    long long long long long long long long long long text\n    long long long long long long long long long long text\n  ")]),n("code",[e._v('v-ellipsis.end="3" data-ellipsis="------"')])])},u=[],f={name:"DirectiveDemo",data:function(){return{rows:1,text:"很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长的文字",timeout:10}},mounted:function(){var e=this,t=setInterval(function(){e.timeout--,e.timeout>0||(clearInterval(t),e.rows=0,e.text="不长不长不长不长不长不长不长不长不长不长不长不长不长不长不长不长不长不长不长不长不长不长不长不长不长不长不长不长的文字")},1e3)}},m=f,h=Object(d["a"])(m,v,u,!1,null,null,null),y=h.exports,w=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},_=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h2",[e._v("安装")]),n("code",[e._v("yarn add @hyjiacan/vue-ellipsis")]),n("p",[e._v("或")]),n("code",[e._v("npm install @hyjiacan/vue-ellipsis")]),n("h2",[e._v("使用")]),n("code",[e._v("import ellipsis from '@hyjican/vue-ellipsis'")]),n("code",[e._v("Vue.use(ellipsis)")]),n("p",[e._v("或")]),n("code",[e._v("import {ellipsisDirective, ellipsisComponent} from '@hyjiacan/vue-ellipsis'")]),n("code",[e._v("Vue.directive(ellipsisDirective.name, ellipsisDirective)")]),n("code",[e._v("Vue.component(ellipsisComponent.name, ellipsisComponent)")])])}],x={name:"Usage"},b=x,S=Object(d["a"])(b,w,_,!1,null,"401bf62d",null),C=S.exports,W={name:"app",components:{Usage:C,ComponentDemo:p,DirectiveDemo:y}},P=W,k=(n("034f"),Object(d["a"])(P,i,o,!1,null,null,null)),j=k.exports,O=n("768b"),M=(n("ac6a"),n("456d"),n("9ec8"),n("a481"),n("6c7b"),n("5df3"),n("f400"),new Map),N=document.querySelector("#vue-ellipsis-proxy"),T={init:function(){N||(N=T.createProxy(document.body),N.id="vue-ellipsis-proxy",N.style.top="-99999px",N.style.left="0",N.style.position="fixed",N.style.visibility="hidden")},validate:function(e,t,n){return-1===["start","middle","end"].indexOf(t)?(console.warn('Invalid ellipse position value "'.concat(t,'", available: start, middle, end')),!1):e>1&&"middle"===t?(console.warn('Ellipsis accept single row while position is "middle", got value "'.concat(e,'"')),!1):!(e>1&&n)||(console.warn('Ellipsis accept single row while "scale" enabled, got value "'.concat(e,'"')),!1)},destroy:function(e){if(M.has(e)){var t=M.get(e),n=t.contentProxy,l=t.fillProxy,i=t.wordProxy;N.removeChild(n),N.removeChild(l),N.removeChild(i),M.delete(e)}},createProxy:function(e,t,n){var l=document.createElement("div");return t&&l.setAttribute("data-proxy-id",t),n&&l.setAttribute("data-proxy-type",n),e.appendChild(l),l},getProxy:function(e,t){return M.has(t)?M.get(t):(M.set(t,{contentProxy:T.createProxy(N,t,"content"),fillProxy:T.createProxy(N,t,"fill"),wordProxy:T.createProxy(N,t,"word")}),M.get(t))},setProxyStyle:function(e,t){e.style.fontSize=t.fontSize,e.style.fontWeight=t.fontWeight,e.style.letterSpacing=t.letterSpacing,e.style.wordSpacing=t.wordSpacing,e.style.wordWrap=t.wordWrap,e.style.fontFamily=t.fontFamily,e.style.transform=t.transform,e.style.whiteSpace="nowrap",e.style.wordBreak="keep-all",e.style.top="-99999px",e.style.left="0",e.style.position="fixed"},getStyle:function(e){return window.getComputedStyle(e)},isAlphabet:function(e){return/^[a-zA-Z']$/.test(e)},isNumeric:function(e){return/^[0-9]$/.test(e)},isSeparator:function(e){return/[\s\t\r\n,.+=\-_:;"/<>!@#$%^&*()|`~\\[\]{}]/.test(e)},getPrevWord:function(e,t){if(T.isSeparator(e[t]))return e[t];for(var n=[];t>=0;t--){var l=e[t];if(T.isSeparator(l))break;if(n.unshift(l),!T.isNumeric(l)&&!T.isAlphabet(l))break}return n.join("")},getNextWord:function(e,t){if(T.isSeparator(e[t]))return e[t];for(var n=[];t<e.length;t++){var l=e[t];if(T.isSeparator(l))break;if(n.push(l),!T.isNumeric(l)&&!T.isAlphabet(l))break}return n.join("")},getWordWidth:function(e,t){return e.innerHTML=" "===t?"&nbsp;":t,parseFloat(window.getComputedStyle(e).width)},getMeta:function(e,t,n){var l=n.content,i=n.fill;if(!e)return{};var o=T.getProxy(e,t),s=o.wordProxy,a=o.contentProxy,r=o.fillProxy;a.innerHTML=l;var c=T.getStyle(e);T.setProxyStyle(s,c),T.setProxyStyle(a,c);var d=0;i.length&&(r.innerHTML=i,T.setProxyStyle(r,c),d=parseFloat(T.getStyle(r).width));var g=parseFloat(T.getStyle(a).width),p=parseFloat(c.width),v=parseFloat(c.maxWidth),u="break-all"===c.wordBreak;if(!p&&!v)throw new Error('You should specify "width" or "max-width" for ellipsis');return p||(p=v),{fillWidth:d,contentWidth:g,containerWidth:p,containerWordbreak:u,containerMaxWidth:v,contentProxy:a,containerStyle:c,wordProxy:s}},clearContent:function(e){return e.replace(/[\r\n]/g," ").replace(/\s+/g," ").trim()},getScaleInfo:function(e){var t=e.containerWidth,n=e.contentProxy,l=e.contentWidth,i=e.containerStyle,o={height:parseFloat(T.getStyle(n).height),rate:t/l,fontsize:parseFloat(i.fontSize)};return o.viewBox="0 -".concat(o.height/2,"0 ").concat(t," ").concat(o.height),o.scale=o.fontsize*o.rate,o.scaled=Math.round(o.fontsize)>Math.round(o.scale),o},makeLeft:function(e,t){for(var n=e.containerWidth,l=e.fillWidth,i=e.wordProxy,o=e.containerWordbreak,s=t.content,a=t.fill,r=t.rows,c="",d=s.length-1,g=r;g>=1;g--)for(var p=1===g?n-l:n;d>=0;){var v=o?s[d]:T.getPrevWord(s,d);if(d-=v.length,p-=T.getWordWidth(i,v),p<0)break;c=v+c}return"".concat(a).concat(c)},makeCenter:function(e,t){for(var n=e.containerWidth,l=e.fillWidth,i=e.wordProxy,o=t.content,s=t.fill,a=n-l,r=o.length,c="",d="",g=0;g<r;g++){var p=o[g];if(a-=T.getWordWidth(i,p),a<0)break;if(c+=p,p=o[r-1-g],a-=T.getWordWidth(i,p),a<0)break;d=p+d}return"".concat(c).concat(s).concat(d)},makeRight:function(e,t){for(var n=e.containerWidth,l=e.fillWidth,i=e.wordProxy,o=e.containerWordbreak,s=t.content,a=t.fill,r=t.rows,c=s.length,d="",g=0,p=0;p<r;p++)for(var v=p===r-1?n-l:n;g<c;){var u=o?s[g]:T.getNextWord(s,g);if(g+=u.length,v-=T.getWordWidth(i,u),v<0)break;if(d+=u,g===c)return d}return"".concat(d).concat(a)},make:function(e,t){if(e.contentWidth<=e.containerWidth||e.contentWidth+e.fillWidth<=e.containerWidth)return[!1,t.content];switch(t.position){case"start":return[!0,T.makeLeft(e,t)];case"middle":return[!0,T.makeCenter(e,t)];case"end":return[!0,T.makeRight(e,t)];default:return[!1,t.content]}},newId:function(){return"".concat((new Date).getTime()).concat(Math.round(1e3*Math.random()))}};T.init();var z=T;function $(e,t,n,l,i){var o=e.dataset.ellipsis;o=o||"...";var s=z.newId();e.classList.add("vue-ellipsis"),e.setAttribute("data-ellipsis-id",s);var a={content:t,fill:o,rows:l,position:n},r=z.getMeta(e,s,a);if(0!==l&&Object.keys(r).length){var c,d;if(i.scale){var g=I(r,a),p=Object(O["a"])(g,2);c=p[0],d=p[1]}else{var v=z.make(r,a),u=Object(O["a"])(v,2);c=u[0],d=u[1]}E(e,c,t,d,i,s)}else E(e,!1,t,t,i,s)}function E(e,t,n,l,i,o){z.destroy(o),e.innerHTML=l,i.always?e.title=n:t&&!i.none&&(e.title=n)}function I(e,t){var n=t.content,l=z.getScaleInfo(e),i=l.height,o=l.viewBox,s=l.scale,a=l.scaled;return[a,'<svg viewBox="'.concat(o,'" height="').concat(i,'px"><text x="0" y="0" style="font-size: ').concat(s,'px;">').concat(n,"</text></svg>")]}function D(e){var t=[];return e.children.forEach(function(e){t.push(e.text),e.children&&e.children.length&&t.push(D(e))}),t.join("")}function F(e,t,n){var l=t.modifiers,i=t.value,o="end";if(l.start?o="start":l.middle?o="middle":l.end&&(o="end"),z.validate(a,o,l.scale)){var s=D(n);if(s)if(0!==i){var a=i||1;s=z.clearContent(s),z.validate(a,o,l.scale)&&(e.dataset.delay&&"0"!==e.dataset.delay?setTimeout(function(){$(e,s,o,a,l)},parseInt(e.dataset.delay)||200):$(e,s,o,a,l))}else e.innerHTML=s}}function B(e){z.destroy(e)}var L={inserted:F,update:F,unbind:B,name:"ellipsis"},A=(n("c5f6"),{name:"Ellipsis",props:{fill:{type:String,default:"..."},position:{type:String,default:"end"},showTitle:{type:String,default:""},rows:{type:Number,default:1},scale:{type:Boolean,default:!1},content:{type:String}},data:function(){return{id:z.newId()}},mounted:function(){z.validate(this.rows,this.position,this.scale),this.content||this.$forceUpdate()},render:function(e){var t,n,l=z.clearContent(this.content||this.getText()),i={content:l,fill:this.fill,rows:this.rows,position:this.position},o=z.getMeta(this.$el,this.id,i);if(0===this.rows||!Object.keys(o).length)return this.doRender(e,!1,l,l);if(this.scale){var s=this.makeSvg(e,o,i),a=Object(O["a"])(s,2);t=a[0],n=a[1]}else{var r=z.make(o,i),c=Object(O["a"])(r,2);t=c[0],n=c[1]}return this.doRender(e,t,l,n)},methods:{doRender:function(e,t,n,l){z.destroy(this.id);var i=void 0;return("always"===this.showTitle||t&&"none"!==this.showTitle)&&(i=n),e("div",{attrs:{class:"vue-ellipsis","data-ellipsis-id":this.id,title:i}},[l])},getText:function(){var e=this.$slots.default;return e&&0!==e.length?e.map(function(e){return e.text}).join(""):""},makeSvg:function(e,t,n){var l=n.content,i=z.getScaleInfo(t),o=i.height,s=i.viewBox,a=i.scale,r=i.scaled;return[r,e("svg",{attrs:{viewBox:s,height:"".concat(o,"px")}},[e("text",{attrs:{x:"0",y:"0",style:"font-size: ".concat(a,"px;")}},l)])]}},beforeDestroy:function(){z.destroy(this.id)}});l["a"].config.productionTip=!1,l["a"].directive(L.name,L),l["a"].component(A.name,A),new l["a"]({render:function(e){return e(j)}}).$mount("#app")},e876:function(e,t,n){}});