!function(t,e){for(var n in e)t[n]=e[n]}(exports,function(t){var e={};function n(i){if(e[i])return e[i].exports;var r=e[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(i,r,function(e){return t[e]}.bind(null,r));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=16)}([function(t,e,n){var i=n(13);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var r=n(4).default;t.exports.__inject__=function(t){r("e88cbf8c",i,!0,t)}},function(t,e,n){var i=n(15);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var r=n(4).default;t.exports.__inject__=function(t){r("a602afd0",i,!0,t)}},function(t,e,n){var i=n(9),r=n(10),o=n(11);t.exports=function(t,e){return i(t)||r(t,e)||o()}},function(t,e){t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var n=function(t,e){var n=t[1]||"",i=t[3];if(!i)return n;if(e&&"function"==typeof btoa){var r=function(t){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */"}(i),o=i.sources.map(function(t){return"/*# sourceURL="+i.sourceRoot+t+" */"});return[n].concat(o).concat([r]).join("\n")}return[n].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var i={},r=0;r<this.length;r++){var o=this[r][0];"number"==typeof o&&(i[o]=!0)}for(r=0;r<t.length;r++){var s=t[r];"number"==typeof s[0]&&i[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),e.push(s))}},e}},function(t,e,n){"use strict";function i(t,e,n,i){if(i||"undefined"==typeof __VUE_SSR_CONTEXT__||(i=__VUE_SSR_CONTEXT__),i){i.hasOwnProperty("styles")||(Object.defineProperty(i,"styles",{enumerable:!0,get:function(){return r(i._styles)}}),i._renderStyles=r);var o=i._styles||(i._styles={});e=function(t,e){for(var n=[],i={},r=0;r<e.length;r++){var o=e[r],s=o[0],a={id:t+":"+r,css:o[1],media:o[2],sourceMap:o[3]};i[s]?i[s].parts.push(a):n.push(i[s]={id:s,parts:[a]})}return n}(t,e),n?function(t,e){for(var n=0;n<e.length;n++)for(var i=e[n].parts,r=0;r<i.length;r++){var o=i[r],s=o.media||"default",a=t[s];a?a.ids.indexOf(o.id)<0&&(a.ids.push(o.id),a.css+="\n"+o.css):t[s]={ids:[o.id],css:o.css,media:o.media}}}(o,e):function(t,e){for(var n=0;n<e.length;n++)for(var i=e[n].parts,r=0;r<i.length;r++){var o=i[r];t[o.id]={ids:[o.id],css:o.css,media:o.media}}}(o,e)}}function r(t){var e="";for(var n in t){var i=t[n];e+='<style data-vue-ssr-id="'+i.ids.join(" ")+'"'+(i.media?' media="'+i.media+'"':"")+">"+i.css+"</style>"}return e}n.r(e),n.d(e,"default",function(){return i})},function(t,e,n){var i=n(6),r=n(7),o=n(8);t.exports=function(t){return i(t)||r(t)||o()}},function(t,e){t.exports=function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}},function(t,e){t.exports=function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}},function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},function(t,e){t.exports=function(t){if(Array.isArray(t))return t}},function(t,e){t.exports=function(t,e){var n=[],i=!0,r=!1,o=void 0;try{for(var s,a=t[Symbol.iterator]();!(i=(s=a.next()).done)&&(n.push(s.value),!e||n.length!==e);i=!0);}catch(t){r=!0,o=t}finally{try{i||null==a.return||a.return()}finally{if(r)throw o}}return n}},function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}},function(t,e,n){"use strict";n.r(e);var i=n(0),r=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,function(){return i[t]})}(o);e.default=r.a},function(t,e,n){(e=t.exports=n(3)(!1)).push([t.i,'\n.r-switch-component_1dOk24{display:flex;position:relative;align-items:center;justify-content:space-between;height:2.14286rem;box-sizing:border-box;border:1px solid #ccc;border-radius:15px;width:5.71429rem;font-size:0.85714rem;overflow:hidden;background-color:#ccc;color:white;transition:border-color 0.3s ease\n}\n.r-switch-component_1dOk24.r-switch-on_2Y5Znj{border-color:#00aeff;background-color:#00aeff\n}\n.r-switch-component_1dOk24::before,.r-switch-component_1dOk24::after{line-height:2rem;flex:1;text-align:center\n}\n.r-switch-component_1dOk24::before{content:"OFF"\n}\n.r-switch-component_1dOk24::after{content:"ON"\n}\n.r-switch-block_2SOklC{display:block;position:absolute;box-sizing:border-box;top:0;transition:left 0.3s ease-out;height:2rem;width:3.21429rem;background-color:white;left:2.5rem;border-radius:18px\n}\n.r-switch-on_2Y5Znj .r-switch-block_2SOklC{left:0\n}\n',""]),e.locals={component:"r-switch-component_1dOk24",on:"r-switch-on_2Y5Znj",block:"r-switch-block_2SOklC"}},function(t,e,n){"use strict";n.r(e);var i=n(1),r=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,function(){return i[t]})}(o);e.default=r.a},function(t,e,n){(e=t.exports=n(3)(!1)).push([t.i,"\n.r-sign-pipeline-pen_3ftZtJ{width:2.85714rem;height:2.85714rem;display:flex\n}\n.r-sign-pipeline-pen_3ftZtJ svg{fill:currentColor;display:block;width:1.28571rem;margin:auto\n}\n.r-sign-pipeline-panel_3j-2uX{position:fixed;width:100%;height:100%;box-sizing:border-box;top:0;left:0;z-index:5;background-color:white;display:flex;flex-direction:column;align-items:stretch;justify-content:flex-start\n}\n.r-sign-pipeline-panel_3j-2uX h2{font-size:1rem;color:#999;margin:0.71429rem;font-weight:normal\n}\n.r-sign-pipeline-panel_3j-2uX h3{font:normal 1.28571rem '\\5B8B\\4F53';overflow:hidden;padding:0.71429rem 0;margin:0 0.71429rem;box-sizing:border-box;max-height:calc(100vh - 6.42857rem);overflow-y:auto\n}\n.r-sign-pipeline-panel_3j-2uX h3 span{display:inline-block;width:1.71429rem;height:1.71429rem;line-height:1.71429rem;text-align:center;float:left;margin:0 -1px\n}\n.r-sign-pipeline-panel_3j-2uX h3 .r-sign-pipeline-active_kRQBAz{color:#fd4b4b;font-weight:bold\n}\n.r-sign-pipeline-panel_3j-2uX h3 img{display:block;width:100%\n}\n.r-sign-pipeline-box_2cQcci{width:25.71429rem;height:25.71429rem;margin:auto;position:relative;overflow:hidden;z-index:0;border:1px solid #ddd\n}\n.r-sign-pipeline-box_2cQcci::before,.r-sign-pipeline-box_2cQcci::after{content:' ';position:absolute;top:50%;left:12.85714rem;border-top:1px dashed #eee;width:36.42857rem;z-index:-2\n}\n.r-sign-pipeline-box_2cQcci::before{-webkit-transform:translateX(-50%) rotate(45deg);transform:translateX(-50%) rotate(45deg)\n}\n.r-sign-pipeline-box_2cQcci::after{-webkit-transform:translateX(-50%) rotate(-45deg);transform:translateX(-50%) rotate(-45deg)\n}\n.r-sign-pipeline-box_2cQcci .r-sign-pipeline-placeholder_2Iizim{position:absolute;width:100%;height:100%;top:0;left:0;color:#ddd;font-size:11.42857rem;line-height:25.71429rem;text-align:center;font-family:'\\5B8B\\4F53';box-sizing:border-box;z-index:-1\n}\n.r-sign-pipeline-box_2cQcci .r-sign-pipeline-placeholder_2Iizim::before,.r-sign-pipeline-box_2cQcci .r-sign-pipeline-placeholder_2Iizim::after{content:' ';position:absolute;top:50%;left:12.85714rem;border-top:1px dashed #eee;width:25.71429rem;z-index:-2\n}\n.r-sign-pipeline-box_2cQcci .r-sign-pipeline-placeholder_2Iizim::before{-webkit-transform:translateX(-50%);transform:translateX(-50%)\n}\n.r-sign-pipeline-box_2cQcci .r-sign-pipeline-placeholder_2Iizim::after{-webkit-transform:translateX(-50%) rotate(90deg);transform:translateX(-50%) rotate(90deg)\n}\n.r-sign-pipeline-box_2cQcci canvas{width:100%;height:100%\n}\n.r-sign-pipeline-switch_gsJ9V6{display:flex;justify-content:center;align-items:center;color:#999;font-size:0.85714rem;height:2.14286rem;margin:0.57143rem 0.71429rem\n}\n.r-sign-pipeline-switch_gsJ9V6 .r-sign-pipeline-tips_1Uu3Vl{margin-right:0.71429rem\n}\n.r-sign-pipeline-bar_2mmI8I{display:flex;justify-content:center;align-items:center;padding:0.71429rem 0\n}\n.r-sign-pipeline-bar_2mmI8I button{border-radius:4px;border:1px solid #00aeff;text-align:center;box-sizing:border-box;padding-right:1.07143rem;padding-left:1.07143rem;outline:0 none;margin:0 0.57143rem;height:2.14286rem;font-size:1rem;background-color:#00aeff;color:#fff\n}\n.r-sign-pipeline-bar_2mmI8I button[disabled]{background-color:silver;border-color:silver\n}\n.r-sign-pipeline-bar_2mmI8I button.r-sign-pipeline-reverse_1Msoxf{border-color:#00aeff;background-color:transparent;color:#00aeff\n}\n.r-sign-pipeline-bar_2mmI8I button.r-sign-pipeline-reverse_1Msoxf[disabled]{background-color:transparent;border-color:silver;color:silver\n}\n.r-sign-pipeline-preview_1Q5S3N h3{box-shadow:0 0 5px rgba(0,0,0,0.15)\n}\n.r-sign-pipeline-preview_1Q5S3N h3 span{width:4.28571rem;height:4.28571rem\n}\n.r-sign-pipeline-preview_1Q5S3N .r-sign-pipeline-switch_gsJ9V6{margin-top:auto\n}\n",""]),e.locals={pen:"r-sign-pipeline-pen_3ftZtJ",panel:"r-sign-pipeline-panel_3j-2uX",active:"r-sign-pipeline-active_kRQBAz",box:"r-sign-pipeline-box_2cQcci",placeholder:"r-sign-pipeline-placeholder_2Iizim",switch:"r-sign-pipeline-switch_gsJ9V6",tips:"r-sign-pipeline-tips_1Uu3Vl",bar:"r-sign-pipeline-bar_2mmI8I",reverse:"r-sign-pipeline-reverse_1Msoxf",preview:"r-sign-pipeline-preview_1Q5S3N"}},function(t,e,n){"use strict";n.r(e);var i=n(5),r=n.n(i),o=n(2),s=n.n(o),a=function t(e,n){requestAnimationFrame(function(){var i=n();i?e(i):t(e,n)})};var c=function t(e,n){return function(t){return"[object Object]"==={}.toString.call(t)}(e)?(n=n||{},Object.keys(e).reduce(function(i,r){return i[r]=t(e[r],n[r]),i},{})):void 0===n?e:n},l={pen:{color:"#333",width:5,shadow:{enable:!0,color:"#555",width:3}},backgroundColor:"#fff",target:{wordsPerLine:20,quality:.6,punctuation:{list:"。？！，、；：“ ”‘ ’（ ）《 》〈 〉".split(""),nonHead:!0},word:{minSize:160,minWidth:"60%",minHeight:"60%",mass:{width:90,height:90}}}};Object.freeze(l);var h=l;function u(t,e,n,i,r,o,s,a){var c,l="function"==typeof t?t.options:t;if(e&&(l.render=e,l.staticRenderFns=n,l._compiled=!0),i&&(l.functional=!0),o&&(l._scopeId="data-v-"+o),s?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(s)},l._ssrRegister=c):r&&(c=a?function(){r.call(this,this.$root.$options.shadowRoot)}:r),c)if(l.functional){l._injectStyles=c;var h=l.render;l.render=function(t,e){return c.call(e),h(t,e)}}else{var u=l.beforeCreate;l.beforeCreate=u?[].concat(u,c):[c]}return{exports:t,options:l}}var p=u({name:"r-switch",model:{event:"toggle",prop:"value"},props:{value:Boolean},methods:{toggle:function(){this.$emit("toggle",!this.value)}}},function(){var t,e=this.$createElement;return(this._self._c||e)("span",{class:[this.css.component,(t={},t[this.css.on]=this.value,t)],on:{click:this.toggle}},[this._ssrNode("<i"+this._ssrClass(null,[this.css.block])+"></i>")])},[],!1,function(t){var e=n(12);e.__inject__&&e.__inject__(t),this.css=e.locals||e},null,"665da1c7");p.options.__file="r-switch.vue";var d=u({name:"sign-pipeline",components:{RSwitch:p.exports},props:{commit:{type:String,default:"本人已阅读保险条款、产品说明书和投保提示书，了解本产品的特点和保单利益的不确定性。"},switchTick:{type:Number,default:800},theme:{type:Object,default:{}}},data:function(){return{open:!1,anchor:null,context:null,switchId:null,autoSwitch:!0,images:[],points:[],activeIndex:0,config:c(h,this.theme)}},computed:{finish:function(){return this.activeIndex>=this.commit.length},deletable:function(){return this.images.length>0}},watch:{open:function(t){var e=this;t&&function(t){return new Promise(function(e){return a(e,t)})}(function(){return e.$refs.canvas}).then(function(t){t.width=t.parentNode.clientWidth,t.height=t.parentNode.clientHeight,e.context=t.getContext("2d"),e.anchor=e.calcOffset(t)})}},methods:{showPanel:function(){this.open=!0},cancel:function(){this.images=[],this.activeIndex=0,this.resetCanvas(),this.open=!1},backspace:function(){if(this.resetCanvas(),this.switchId)clearTimeout(this.switchId);else{var t=this.images;t.pop(),this.images=t,this.activeIndex>0&&(this.activeIndex-=1)}},confirm:function(){var t=this;this.finish&&this.merge().then(function(e){t.images=[],t.activeIndex=0,t.resetCanvas(),t.open=!1,t.$emit("sign",e)})},calcOffset:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.x,i=void 0===n?0:n,r=e.y,o=void 0===r?0:r;return t===this.$refs.panel?e:(i+=t.clientLeft+t.offsetLeft,o+=t.clientTop+t.offsetTop,this.calcOffset(t.parentNode,{x:i,y:o}))},onTouchStart:function(t){var e=this.context,n=this.config.pen;e.beginPath(),e.lineWidth=n.width,e.strokeStyle=n.color,n.shadow.enable&&(e.shadowColor=n.shadow.color,e.shadowBlur=n.shadow.width),e.lineCap="round",e.lineJoin="round"},onTouch:function(t){var e=this.context,n=this.anchor,i=t.changedTouches[0],r=[i.clientX-n.x,i.clientY-n.y];this.points.push([Math.floor(r[0]),Math.floor(r[1])]),e.lineTo.apply(e,r),e.stroke(),this.switchId&&(clearTimeout(this.switchId),this.switchId=null)},onTouchEnd:function(t){this.autoSwitch&&(this.switchId=setTimeout(this.nextWord,this.switchTick))},nextWord:function(){this.switchId&&(clearTimeout(this.switchId),this.switchId=null);var t=this.$refs.canvas,e=this.context,n=this.images,i=t.width,r=t.height;e.globalCompositeOperation="destination-over",e.shadowColor=this.config.backgroundColor,e.fillStyle=this.config.backgroundColor,e.fillRect(0,0,i,r);var o=this.calcSize(this.points),s=this.clip(o);n.push(s),this.images=n,this.activeIndex+=1,this.resetCanvas(),this.activeIndex>=this.commit.length&&this.autoSwitch&&this.confirm()},resetCanvas:function(){var t=this.$refs.canvas,e=this.context,n=t.width,i=t.height;e.clearRect(0,0,n,i),t.width=n,t.height=i,this.points=[]},calcSize:function(t){return t.reduce(function(t,e){if(t.length){var n=t,i=s()(n,2),r=i[0],o=i[1];t=[r=[Math.min(r[0],e[0]),Math.min(r[1],e[1])],o=[Math.max(o[0],e[0]),Math.max(o[1],e[1])]]}else t=[e,e];return t},[])},calcMinSize:function(t){var e=t.width,n=t.height,i=this.config.target.word,r=i.minSize,o=i.minWidth,s=i.minHeight,a=i.mass,c=/^\d+%$/;return o=c.test(o)?100*e/parseInt(o):e*a.width/o,s=c.test(s)?100*n/parseInt(s):n*a.height/s,Math.floor(Math.max(r,o,s))},clip:function(t){var e=s()(t,2),n=e[0],i=e[1],o=document.createElement("canvas"),a=o.getContext("2d"),c=this.$refs.canvas,l=this.context,h=this.config.target.punctuation.list.includes(this.commit[this.activeIndex]);n[0]=Math.max(0,n[0]-10),n[1]=Math.max(0,n[1]-10),i[0]=Math.min(c.width,i[0]+10),i[1]=Math.min(c.height,i[1]+10),h&&(n=[0,0],i=[c.width,c.height]);var u=i[0]-n[0],p=i[1]-n[1],d=l.getImageData.apply(l,r()(n).concat([u,p])),f=this.calcMinSize({width:u,height:p});f=Math.min(f,c.width,c.height),o.width=f,o.height=f,a.fillStyle=this.config.backgroundColor,a.fillRect(0,0,f,f);var g=[(f-u)/2,(f-p)/2];return a.putImageData(d,g[0],g[1],0,0,u,p),{image:o.toDataURL("image/jpeg",1),size:f,start:g,width:u,height:p,imageData:d}},getMergeMass:function(){var t=this.config.target.word.mass,e=this.config.target,n=e.wordsPerLine,i=e.punctuation,r=this.commit,o=r.length;if(i.nonHead)for(var s=0,a=0;s<o;s++,a++)i.list.includes(r[s])&&a%n==0&&(o++,a++);return{width:t.width*Math.min(n,o),height:t.height*Math.ceil(o/n)}},merge:function(){var t=this,e=this.config.target.word.mass,n=this.config.target,i=n.wordsPerLine,r=n.punctuation,o=this.images,s=this.commit,c=document.createElement("canvas"),l=this.getMergeMass();c.width=l.width,c.height=l.height;var h=c.getContext("2d");h.fillStyle=this.config.backgroundColor,h.fillRect(0,0,l.width,l.height);var u=0,p=o.map(function(t,n){var o=new Image;o.src=t.image,r.list.includes(s[n+1])&&r.list.includes(s[n+2])?(n+1+u)%i!=0&&(n+2+u)%i!=0||(u+=2):r.list.includes(s[n+1])&&(n+1+u)%i==0&&u++;var c={x:(n+u)%i*e.width,y:Math.floor((n+u)/i)*e.height};return function(t){return new Promise(function(e){a(e,function(){return t.naturalWidth>0&&t.naturalHeight>0&&t})})}(o).then(function(){h.drawImage(o,0,0,t.size,t.size,c.x,c.y,e.width,e.height)})});return Promise.all(p).then(function(){return c.toDataURL("image/jpeg",t.config.target.quality)})},toggleAutoSwitch:function(){this.autoSwitch&&this.points.length&&this.nextWord()}}},function(){var t,e=this,n=e.$createElement,i=e._self._c||n;return i("div",{class:e.css.component},[e._ssrNode('<button type="button"'+e._ssrClass(null,e.css.pen)+">","</button>",[e._t("btn",[i("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1000 1000"}},[i("path",{attrs:{d:"M919.7 87.5L847.5 10 73.9 779.5 35.1 889.2l115.1-32.3L919.7 87.5zM35.1 956.3h929.8V990H35.1v-33.7z"}})])])],2),e._ssrNode(" "),e._ssrNode("<div"+e._ssrClass(null,[e.css.panel,(t={},t[e.css.preview]=e.finish,t)])+e._ssrStyle(null,null,{display:e.open?"":"none"})+">","</div>",[e._ssrNode((e.finish?"<h2"+e._ssrClass(null,e.css.tips)+">签字内容预览：</h2>":"\x3c!----\x3e")+" <h3>"+e._ssrList(e.commit,function(t,n){return"<span"+e._ssrClass(null,((i={})[e.css.active]=n===e.activeIndex,i[e.css.preview]=e.finish,i))+">"+(e.activeIndex>n?"<img"+e._ssrAttr("src",e.images[n].image)+">":e._ssrEscape(e._s(t)))+"</span>";var i})+"</h3> <div"+e._ssrClass(null,e.css.box)+e._ssrStyle(null,null,{display:e.finish?"none":""})+"><span"+e._ssrClass(null,e.css.placeholder)+">"+e._ssrEscape(e._s(e.commit[e.activeIndex]))+"</span> <canvas></canvas></div> "),e._ssrNode("<div"+e._ssrClass(null,e.css.switch)+">","</div>",[e._ssrNode("<span>自动切换到下一字：</span> "),i("r-switch",{on:{toggle:e.toggleAutoSwitch},model:{value:e.autoSwitch,callback:function(t){e.autoSwitch=t},expression:"autoSwitch"}})],2),e._ssrNode(" <footer"+e._ssrClass(null,e.css.bar)+'><button type="button"'+e._ssrClass(null,e.css.reverse)+'>取消</button> <button type="button"'+e._ssrAttr("disabled",!e.deletable)+">删除</button> "+(e.autoSwitch?"\x3c!----\x3e":'<button type="button"'+e._ssrAttr("disabled",e.finish)+e._ssrClass(null,e.css.reverse)+">下一字</button>")+' <button type="button"'+e._ssrAttr("disabled",!e.finish)+">确定</button></footer>")],2)],2)},[],!1,function(t){var e=n(14);e.__inject__&&e.__inject__(t),this.css=e.locals||e},null,"8a1b2822");d.options.__file="r-sign-pipeline.vue";var f=d.exports;function g(t){var e=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).name,n=void 0===e?"SignPipeline":e;g.installed||(g.installed=!0,t.component(n,f))}n.d(e,"install",function(){return g});var m={install:g},v=null;"undefined"!=typeof window?v=window.Vue:"undefined"!=typeof global&&(v=global.Vue),v&&v.use(m);e.default=f}]));