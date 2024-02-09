var Ia=Object.create;var Ue=Object.defineProperty;var Oa=Object.getOwnPropertyDescriptor;var Ta=Object.getOwnPropertyNames;var La=Object.getPrototypeOf,Ea=Object.prototype.hasOwnProperty;var Ra=(l,f)=>()=>(l&&(f=l(l=0)),f);var Ce=(l,f)=>()=>(f||l((f={exports:{}}).exports,f),f.exports);var Aa=(l,f,d,u)=>{if(f&&typeof f=="object"||typeof f=="function")for(let s of Ta(f))!Ea.call(l,s)&&s!==d&&Ue(l,s,{get:()=>f[s],enumerable:!(u=Oa(f,s))||u.enumerable});return l};var Be=(l,f,d)=>(d=l!=null?Ia(La(l)):{},Aa(f||!l||!l.__esModule?Ue(d,"default",{value:l,enumerable:!0}):d,l));var R=Ra(()=>{});var He=Ce((Rt,te)=>{R();(function(l,f,d,u,s){if("customElements"in d)s();else{if(d.AWAITING_WEB_COMPONENTS_POLYFILL)return void d.AWAITING_WEB_COMPONENTS_POLYFILL.then(s);var n=d.AWAITING_WEB_COMPONENTS_POLYFILL=A();n.then(s);var m=d.WEB_COMPONENTS_POLYFILL||"//cdnjs.cloudflare.com/ajax/libs/webcomponentsjs/2.0.2/webcomponents-bundle.js",v=d.ES6_CORE_POLYFILL||"//cdnjs.cloudflare.com/ajax/libs/core-js/2.5.3/core.min.js";"Promise"in d?T(m).then(function(){n.isDone=!0,n.exec()}):T(v).then(function(){T(m).then(function(){n.isDone=!0,n.exec()})})}function A(){var _=[];return _.isDone=!1,_.exec=function(){_.splice(0).forEach(function(g){g()})},_.then=function(g){return _.isDone?g():_.push(g),_},_}function T(_){var g=A(),h=u.createElement("script");return h.type="text/javascript",h.readyState?h.onreadystatechange=function(){h.readyState!="loaded"&&h.readyState!="complete"||(h.onreadystatechange=null,g.isDone=!0,g.exec())}:h.onload=function(){g.isDone=!0,g.exec()},h.src=_,u.getElementsByTagName("head")[0].appendChild(h),h.then=g.then,h}})(0,0,window,document,function(){var l,f;l=window,f=function(){return function(d){var u={};function s(n){if(u[n])return u[n].exports;var m=u[n]={i:n,l:!1,exports:{}};return d[n].call(m.exports,m,m.exports,s),m.l=!0,m.exports}return s.m=d,s.c=u,s.d=function(n,m,v){s.o(n,m)||Object.defineProperty(n,m,{enumerable:!0,get:v})},s.r=function(n){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},s.t=function(n,m){if(1&m&&(n=s(n)),8&m||4&m&&typeof n=="object"&&n&&n.__esModule)return n;var v=Object.create(null);if(s.r(v),Object.defineProperty(v,"default",{enumerable:!0,value:n}),2&m&&typeof n!="string")for(var A in n)s.d(v,A,function(T){return n[T]}.bind(null,A));return v},s.n=function(n){var m=n&&n.__esModule?function(){return n.default}:function(){return n};return s.d(m,"a",m),m},s.o=function(n,m){return Object.prototype.hasOwnProperty.call(n,m)},s.p="",s(s.s=5)}([function(d,u){d.exports=function(s){var n=[];return n.toString=function(){return this.map(function(m){var v=function(A,T){var _,g=A[1]||"",h=A[3];if(!h)return g;if(T&&typeof btoa=="function"){var Q=(_=h,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(_))))+" */"),tt=h.sources.map(function(dt){return"/*# sourceURL="+h.sourceRoot+dt+" */"});return[g].concat(tt).concat([Q]).join(`
`)}return[g].join(`
`)}(m,s);return m[2]?"@media "+m[2]+"{"+v+"}":v}).join("")},n.i=function(m,v){typeof m=="string"&&(m=[[null,m,""]]);for(var A={},T=0;T<this.length;T++){var _=this[T][0];typeof _=="number"&&(A[_]=!0)}for(T=0;T<m.length;T++){var g=m[T];typeof g[0]=="number"&&A[g[0]]||(v&&!g[2]?g[2]=v:v&&(g[2]="("+g[2]+") and ("+v+")"),n.push(g))}},n}},function(d,u,s){var n=s(3);d.exports=typeof n=="string"?n:n.toString()},function(d,u,s){var n=s(4);d.exports=typeof n=="string"?n:n.toString()},function(d,u,s){(d.exports=s(0)(!1)).push([d.i,"@-webkit-keyframes spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}@keyframes spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}@-webkit-keyframes burst{0%{-webkit-transform:scale(1);transform:scale(1);opacity:1}90%{-webkit-transform:scale(1.5);transform:scale(1.5);opacity:0}}@keyframes burst{0%{-webkit-transform:scale(1);transform:scale(1);opacity:1}90%{-webkit-transform:scale(1.5);transform:scale(1.5);opacity:0}}@-webkit-keyframes flashing{0%{opacity:1}45%{opacity:0}90%{opacity:1}}@keyframes flashing{0%{opacity:1}45%{opacity:0}90%{opacity:1}}@-webkit-keyframes fade-left{0%{-webkit-transform:translateX(0);transform:translateX(0);opacity:1}75%{-webkit-transform:translateX(-20px);transform:translateX(-20px);opacity:0}}@keyframes fade-left{0%{-webkit-transform:translateX(0);transform:translateX(0);opacity:1}75%{-webkit-transform:translateX(-20px);transform:translateX(-20px);opacity:0}}@-webkit-keyframes fade-right{0%{-webkit-transform:translateX(0);transform:translateX(0);opacity:1}75%{-webkit-transform:translateX(20px);transform:translateX(20px);opacity:0}}@keyframes fade-right{0%{-webkit-transform:translateX(0);transform:translateX(0);opacity:1}75%{-webkit-transform:translateX(20px);transform:translateX(20px);opacity:0}}@-webkit-keyframes fade-up{0%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}75%{-webkit-transform:translateY(-20px);transform:translateY(-20px);opacity:0}}@keyframes fade-up{0%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}75%{-webkit-transform:translateY(-20px);transform:translateY(-20px);opacity:0}}@-webkit-keyframes fade-down{0%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}75%{-webkit-transform:translateY(20px);transform:translateY(20px);opacity:0}}@keyframes fade-down{0%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}75%{-webkit-transform:translateY(20px);transform:translateY(20px);opacity:0}}@-webkit-keyframes tada{0%{-webkit-transform:scaleX(1);transform:scaleX(1)}10%,20%{-webkit-transform:scale3d(.95,.95,.95) rotate(-10deg);transform:scale3d(.95,.95,.95) rotate(-10deg)}30%,50%,70%,90%{-webkit-transform:scaleX(1) rotate(10deg);transform:scaleX(1) rotate(10deg)}40%,60%,80%{-webkit-transform:scaleX(1) rotate(-10deg);transform:scaleX(1) rotate(-10deg)}to{-webkit-transform:scaleX(1);transform:scaleX(1)}}@keyframes tada{0%{-webkit-transform:scaleX(1);transform:scaleX(1)}10%,20%{-webkit-transform:scale3d(.95,.95,.95) rotate(-10deg);transform:scale3d(.95,.95,.95) rotate(-10deg)}30%,50%,70%,90%{-webkit-transform:scaleX(1) rotate(10deg);transform:scaleX(1) rotate(10deg)}40%,60%,80%{-webkit-transform:rotate(-10deg);transform:rotate(-10deg)}to{-webkit-transform:scaleX(1);transform:scaleX(1)}}.bx-spin,.bx-spin-hover:hover{-webkit-animation:spin 2s linear infinite;animation:spin 2s linear infinite}.bx-tada,.bx-tada-hover:hover{-webkit-animation:tada 1.5s ease infinite;animation:tada 1.5s ease infinite}.bx-flashing,.bx-flashing-hover:hover{-webkit-animation:flashing 1.5s infinite linear;animation:flashing 1.5s infinite linear}.bx-burst,.bx-burst-hover:hover{-webkit-animation:burst 1.5s infinite linear;animation:burst 1.5s infinite linear}.bx-fade-up,.bx-fade-up-hover:hover{-webkit-animation:fade-up 1.5s infinite linear;animation:fade-up 1.5s infinite linear}.bx-fade-down,.bx-fade-down-hover:hover{-webkit-animation:fade-down 1.5s infinite linear;animation:fade-down 1.5s infinite linear}.bx-fade-left,.bx-fade-left-hover:hover{-webkit-animation:fade-left 1.5s infinite linear;animation:fade-left 1.5s infinite linear}.bx-fade-right,.bx-fade-right-hover:hover{-webkit-animation:fade-right 1.5s infinite linear;animation:fade-right 1.5s infinite linear}",""])},function(d,u,s){(d.exports=s(0)(!1)).push([d.i,'.bx-rotate-90{transform:rotate(90deg);-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=1)"}.bx-rotate-180{transform:rotate(180deg);-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=2)"}.bx-rotate-270{transform:rotate(270deg);-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=3)"}.bx-flip-horizontal{transform:scaleX(-1);-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)"}.bx-flip-vertical{transform:scaleY(-1);-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)"}',""])},function(d,u,s){"use strict";s.r(u),s.d(u,"BoxIconElement",function(){return q});var n,m,v,A,T=s(1),_=s.n(T),g=s(2),h=s.n(g),Q=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(k){return typeof k}:function(k){return k&&typeof Symbol=="function"&&k.constructor===Symbol&&k!==Symbol.prototype?"symbol":typeof k},tt=function(){function k(L,a){for(var b=0;b<a.length;b++){var c=a[b];c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(L,c.key,c)}}return function(L,a,b){return a&&k(L.prototype,a),b&&k(L,b),L}}(),dt=(m=(n=Object).getPrototypeOf||function(k){return k.__proto__},v=n.setPrototypeOf||function(k,L){return k.__proto__=L,k},A=(typeof Reflect>"u"?"undefined":Q(Reflect))==="object"?Reflect.construct:function(k,L,a){var b,c=[null];return c.push.apply(c,L),b=k.bind.apply(k,c),v(new b,a.prototype)},function(k){var L=m(k);return v(k,v(function(){return A(L,arguments,m(this).constructor)},L))}),W=window,pt={},bt=document.createElement("template"),z=function(){return!!W.ShadyCSS};bt.innerHTML=`
<style>
:host {
  display: inline-block;
  font-size: initial;
  box-sizing: border-box;
  width: 24px;
  height: 24px;
}
:host([size=xs]) {
    width: 0.8rem;
    height: 0.8rem;
}
:host([size=sm]) {
    width: 1.55rem;
    height: 1.55rem;
}
:host([size=md]) {
    width: 2.25rem;
    height: 2.25rem;
}
:host([size=lg]) {
    width: 3.0rem;
    height: 3.0rem;
}

:host([size]:not([size=""]):not([size=xs]):not([size=sm]):not([size=md]):not([size=lg])) {
    width: auto;
    height: auto;
}
:host([pull=left]) #icon {
    float: left;
    margin-right: .3em!important;
}
:host([pull=right]) #icon {
    float: right;
    margin-left: .3em!important;
}
:host([border=square]) #icon {
    padding: .25em;
    border: .07em solid rgba(0,0,0,.1);
    border-radius: .25em;
}
:host([border=circle]) #icon {
    padding: .25em;
    border: .07em solid rgba(0,0,0,.1);
    border-radius: 50%;
}
#icon,
svg {
  width: 100%;
  height: 100%;
}
#icon {
    box-sizing: border-box;
} 
`+_.a+`
`+h.a+`
</style>
<div id="icon"></div>`;var q=dt(function(k){function L(){(function(b,c){if(!(b instanceof c))throw new TypeError("Cannot call a class as a function")})(this,L);var a=function(b,c){if(!b)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!c||typeof c!="object"&&typeof c!="function"?b:c}(this,(L.__proto__||Object.getPrototypeOf(L)).call(this));return a.$ui=a.attachShadow({mode:"open"}),a.$ui.appendChild(a.ownerDocument.importNode(bt.content,!0)),z()&&W.ShadyCSS.styleElement(a),a._state={$iconHolder:a.$ui.getElementById("icon"),type:a.getAttribute("type")},a}return function(a,b){if(typeof b!="function"&&b!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}(L,HTMLElement),tt(L,null,[{key:"getIconSvg",value:function(a,b){var c=this.cdnUrl+"/regular/bx-"+a+".svg";return b==="solid"?c=this.cdnUrl+"/solid/bxs-"+a+".svg":b==="logo"&&(c=this.cdnUrl+"/logos/bxl-"+a+".svg"),c&&pt[c]||(pt[c]=new Promise(function(B,P){var j=new XMLHttpRequest;j.addEventListener("load",function(){this.status<200||this.status>=300?P(new Error(this.status+" "+this.responseText)):B(this.responseText)}),j.onerror=P,j.onabort=P,j.open("GET",c),j.send()})),pt[c]}},{key:"define",value:function(a){a=a||this.tagName,z()&&W.ShadyCSS.prepareTemplate(bt,a),customElements.define(a,this)}},{key:"cdnUrl",get:function(){return"//unpkg.com/boxicons@2.1.4/svg"}},{key:"tagName",get:function(){return"box-icon"}},{key:"observedAttributes",get:function(){return["type","name","color","size","rotate","flip","animation","border","pull"]}}]),tt(L,[{key:"attributeChangedCallback",value:function(a,b,c){var B=this._state.$iconHolder;switch(a){case"type":(function(P,j,S){var x=P._state;x.$iconHolder.textContent="",x.type&&(x.type=null),x.type=!S||S!=="solid"&&S!=="logo"?"regular":S,x.currentName!==void 0&&P.constructor.getIconSvg(x.currentName,x.type).then(function($){x.type===S&&(x.$iconHolder.innerHTML=$)}).catch(function($){console.error("Failed to load icon: "+x.currentName+`
`+$)})})(this,0,c);break;case"name":(function(P,j,S){var x=P._state;x.currentName=S,x.$iconHolder.textContent="",S&&x.type!==void 0&&P.constructor.getIconSvg(S,x.type).then(function($){x.currentName===S&&(x.$iconHolder.innerHTML=$)}).catch(function($){console.error("Failed to load icon: "+S+`
`+$)})})(this,0,c);break;case"color":B.style.fill=c||"";break;case"size":(function(P,j,S){var x=P._state;x.size&&(x.$iconHolder.style.width=x.$iconHolder.style.height="",x.size=x.sizeType=null),S&&!/^(xs|sm|md|lg)$/.test(x.size)&&(x.size=S.trim(),x.$iconHolder.style.width=x.$iconHolder.style.height=x.size)})(this,0,c);break;case"rotate":b&&B.classList.remove("bx-rotate-"+b),c&&B.classList.add("bx-rotate-"+c);break;case"flip":b&&B.classList.remove("bx-flip-"+b),c&&B.classList.add("bx-flip-"+c);break;case"animation":b&&B.classList.remove("bx-"+b),c&&B.classList.add("bx-"+c)}}},{key:"connectedCallback",value:function(){z()&&W.ShadyCSS.styleElement(this)}}]),L}());u.default=q,q.define()}])},typeof Rt=="object"&&typeof te=="object"?te.exports=f():typeof define=="function"&&define.amd?define([],f):typeof Rt=="object"?Rt.BoxIconElement=f():l.BoxIconElement=f()})});var Fe=Ce((ee,ae)=>{R();(function(l,f){typeof ee=="object"&&typeof ae<"u"?ae.exports=f():typeof define=="function"&&define.amd?define(f):(l=typeof globalThis<"u"?globalThis:l||self,l.DOMPurify=f())})(ee,function(){"use strict";let{entries:l,setPrototypeOf:f,isFrozen:d,getPrototypeOf:u,getOwnPropertyDescriptor:s}=Object,{freeze:n,seal:m,create:v}=Object,{apply:A,construct:T}=typeof Reflect<"u"&&Reflect;n||(n=function(i){return i}),m||(m=function(i){return i}),A||(A=function(i,y,p){return i.apply(y,p)}),T||(T=function(i,y){return new i(...y)});let _=k(Array.prototype.forEach),g=k(Array.prototype.pop),h=k(Array.prototype.push),Q=k(String.prototype.toLowerCase),tt=k(String.prototype.toString),dt=k(String.prototype.match),W=k(String.prototype.replace),pt=k(String.prototype.indexOf),bt=k(String.prototype.trim),z=k(RegExp.prototype.test),q=L(TypeError);function k(w){return function(i){for(var y=arguments.length,p=new Array(y>1?y-1:0),U=1;U<y;U++)p[U-1]=arguments[U];return A(w,i,p)}}function L(w){return function(){for(var i=arguments.length,y=new Array(i),p=0;p<i;p++)y[p]=arguments[p];return T(w,y)}}function a(w,i){let y=arguments.length>2&&arguments[2]!==void 0?arguments[2]:Q;f&&f(w,null);let p=i.length;for(;p--;){let U=i[p];if(typeof U=="string"){let V=y(U);V!==U&&(d(i)||(i[p]=V),U=V)}w[U]=!0}return w}function b(w){for(let i=0;i<w.length;i++)s(w,i)===void 0&&(w[i]=null);return w}function c(w){let i=v(null);for(let[y,p]of l(w))s(w,y)!==void 0&&(Array.isArray(p)?i[y]=b(p):p&&typeof p=="object"&&p.constructor===Object?i[y]=c(p):i[y]=p);return i}function B(w,i){for(;w!==null;){let p=s(w,i);if(p){if(p.get)return k(p.get);if(typeof p.value=="function")return k(p.value)}w=u(w)}function y(p){return console.warn("fallback value for",p),null}return y}let P=n(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),j=n(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),S=n(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),x=n(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),$=n(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),$e=n(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),ne=n(["#text"]),re=n(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","xmlns","slot"]),At=n(["accent-height","accumulate","additive","alignment-baseline","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),ie=n(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),ht=n(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),We=m(/\{\{[\w\W]*|[\w\W]*\}\}/gm),Ge=m(/<%[\w\W]*|[\w\W]*%>/gm),qe=m(/\${[\w\W]*}/gm),Ve=m(/^data-[\-\w.\u00B7-\uFFFF]/),Ze=m(/^aria-[\-\w]+$/),oe=m(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),Ke=m(/^(?:\w+script|data):/i),Je=m(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),se=m(/^html$/i);var me=Object.freeze({__proto__:null,MUSTACHE_EXPR:We,ERB_EXPR:Ge,TMPLIT_EXPR:qe,DATA_ATTR:Ve,ARIA_ATTR:Ze,IS_ALLOWED_URI:oe,IS_SCRIPT_OR_DATA:Ke,ATTR_WHITESPACE:Je,DOCTYPE_NAME:se});let Qe=function(){return typeof window>"u"?null:window},ta=function(i,y){if(typeof i!="object"||typeof i.createPolicy!="function")return null;let p=null,U="data-tt-policy-suffix";y&&y.hasAttribute(U)&&(p=y.getAttribute(U));let V="dompurify"+(p?"#"+p:"");try{return i.createPolicy(V,{createHTML(rt){return rt},createScriptURL(rt){return rt}})}catch{return console.warn("TrustedTypes policy "+V+" could not be created."),null}};function le(){let w=arguments.length>0&&arguments[0]!==void 0?arguments[0]:Qe(),i=o=>le(o);if(i.version="3.0.8",i.removed=[],!w||!w.document||w.document.nodeType!==9)return i.isSupported=!1,i;let{document:y}=w,p=y,U=p.currentScript,{DocumentFragment:V,HTMLTemplateElement:rt,Node:St,Element:fe,NodeFilter:Dt,NamedNodeMap:aa=w.NamedNodeMap||w.MozNamedAttrMap,HTMLFormElement:na,DOMParser:ra,trustedTypes:xt}=w,_t=fe.prototype,ia=B(_t,"cloneNode"),oa=B(_t,"nextSibling"),sa=B(_t,"childNodes"),Xt=B(_t,"parentNode");if(typeof rt=="function"){let o=y.createElement("template");o.content&&o.content.ownerDocument&&(y=o.content.ownerDocument)}let C,ut="",{implementation:Yt,createNodeIterator:ma,createDocumentFragment:la,getElementsByTagName:fa}=y,{importNode:ca}=p,G={};i.isSupported=typeof l=="function"&&typeof Xt=="function"&&Yt&&Yt.createHTMLDocument!==void 0;let{MUSTACHE_EXPR:zt,ERB_EXPR:Mt,TMPLIT_EXPR:Nt,DATA_ATTR:da,ARIA_ATTR:pa,IS_SCRIPT_OR_DATA:ba,ATTR_WHITESPACE:ce}=me,{IS_ALLOWED_URI:de}=me,D=null,pe=a({},[...P,...j,...S,...$,...ne]),X=null,be=a({},[...re,...At,...ie,...ht]),E=Object.seal(v(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),kt=null,Ut=null,ue=!0,Ct=!0,ke=!1,we=!0,it=!1,et=!1,Bt=!1,Pt=!1,ot=!1,vt=!1,It=!1,ge=!0,ye=!1,ua="user-content-",Ht=!0,wt=!1,st={},mt=null,he=a({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]),xe=null,_e=a({},["audio","video","img","source","image","track"]),Ft=null,ve=a({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),Ot="http://www.w3.org/1998/Math/MathML",Tt="http://www.w3.org/2000/svg",Z="http://www.w3.org/1999/xhtml",lt=Z,jt=!1,$t=null,ka=a({},[Ot,Tt,Z],tt),gt=null,wa=["application/xhtml+xml","text/html"],ga="text/html",Y=null,ft=null,ya=y.createElement("form"),Ie=function(t){return t instanceof RegExp||t instanceof Function},Wt=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(!(ft&&ft===t)){if((!t||typeof t!="object")&&(t={}),t=c(t),gt=wa.indexOf(t.PARSER_MEDIA_TYPE)===-1?ga:t.PARSER_MEDIA_TYPE,Y=gt==="application/xhtml+xml"?tt:Q,D="ALLOWED_TAGS"in t?a({},t.ALLOWED_TAGS,Y):pe,X="ALLOWED_ATTR"in t?a({},t.ALLOWED_ATTR,Y):be,$t="ALLOWED_NAMESPACES"in t?a({},t.ALLOWED_NAMESPACES,tt):ka,Ft="ADD_URI_SAFE_ATTR"in t?a(c(ve),t.ADD_URI_SAFE_ATTR,Y):ve,xe="ADD_DATA_URI_TAGS"in t?a(c(_e),t.ADD_DATA_URI_TAGS,Y):_e,mt="FORBID_CONTENTS"in t?a({},t.FORBID_CONTENTS,Y):he,kt="FORBID_TAGS"in t?a({},t.FORBID_TAGS,Y):{},Ut="FORBID_ATTR"in t?a({},t.FORBID_ATTR,Y):{},st="USE_PROFILES"in t?t.USE_PROFILES:!1,ue=t.ALLOW_ARIA_ATTR!==!1,Ct=t.ALLOW_DATA_ATTR!==!1,ke=t.ALLOW_UNKNOWN_PROTOCOLS||!1,we=t.ALLOW_SELF_CLOSE_IN_ATTR!==!1,it=t.SAFE_FOR_TEMPLATES||!1,et=t.WHOLE_DOCUMENT||!1,ot=t.RETURN_DOM||!1,vt=t.RETURN_DOM_FRAGMENT||!1,It=t.RETURN_TRUSTED_TYPE||!1,Pt=t.FORCE_BODY||!1,ge=t.SANITIZE_DOM!==!1,ye=t.SANITIZE_NAMED_PROPS||!1,Ht=t.KEEP_CONTENT!==!1,wt=t.IN_PLACE||!1,de=t.ALLOWED_URI_REGEXP||oe,lt=t.NAMESPACE||Z,E=t.CUSTOM_ELEMENT_HANDLING||{},t.CUSTOM_ELEMENT_HANDLING&&Ie(t.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(E.tagNameCheck=t.CUSTOM_ELEMENT_HANDLING.tagNameCheck),t.CUSTOM_ELEMENT_HANDLING&&Ie(t.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(E.attributeNameCheck=t.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),t.CUSTOM_ELEMENT_HANDLING&&typeof t.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements=="boolean"&&(E.allowCustomizedBuiltInElements=t.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),it&&(Ct=!1),vt&&(ot=!0),st&&(D=a({},ne),X=[],st.html===!0&&(a(D,P),a(X,re)),st.svg===!0&&(a(D,j),a(X,At),a(X,ht)),st.svgFilters===!0&&(a(D,S),a(X,At),a(X,ht)),st.mathMl===!0&&(a(D,$),a(X,ie),a(X,ht))),t.ADD_TAGS&&(D===pe&&(D=c(D)),a(D,t.ADD_TAGS,Y)),t.ADD_ATTR&&(X===be&&(X=c(X)),a(X,t.ADD_ATTR,Y)),t.ADD_URI_SAFE_ATTR&&a(Ft,t.ADD_URI_SAFE_ATTR,Y),t.FORBID_CONTENTS&&(mt===he&&(mt=c(mt)),a(mt,t.FORBID_CONTENTS,Y)),Ht&&(D["#text"]=!0),et&&a(D,["html","head","body"]),D.table&&(a(D,["tbody"]),delete kt.tbody),t.TRUSTED_TYPES_POLICY){if(typeof t.TRUSTED_TYPES_POLICY.createHTML!="function")throw q('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if(typeof t.TRUSTED_TYPES_POLICY.createScriptURL!="function")throw q('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');C=t.TRUSTED_TYPES_POLICY,ut=C.createHTML("")}else C===void 0&&(C=ta(xt,U)),C!==null&&typeof ut=="string"&&(ut=C.createHTML(""));n&&n(t),ft=t}},Oe=a({},["mi","mo","mn","ms","mtext"]),Te=a({},["foreignobject","desc","title","annotation-xml"]),ha=a({},["title","style","font","a","script"]),Le=a({},[...j,...S,...x]),Ee=a({},[...$,...$e]),xa=function(t){let e=Xt(t);(!e||!e.tagName)&&(e={namespaceURI:lt,tagName:"template"});let r=Q(t.tagName),I=Q(e.tagName);return $t[t.namespaceURI]?t.namespaceURI===Tt?e.namespaceURI===Z?r==="svg":e.namespaceURI===Ot?r==="svg"&&(I==="annotation-xml"||Oe[I]):!!Le[r]:t.namespaceURI===Ot?e.namespaceURI===Z?r==="math":e.namespaceURI===Tt?r==="math"&&Te[I]:!!Ee[r]:t.namespaceURI===Z?e.namespaceURI===Tt&&!Te[I]||e.namespaceURI===Ot&&!Oe[I]?!1:!Ee[r]&&(ha[r]||!Le[r]):!!(gt==="application/xhtml+xml"&&$t[t.namespaceURI]):!1},at=function(t){h(i.removed,{element:t});try{t.parentNode.removeChild(t)}catch{t.remove()}},Gt=function(t,e){try{h(i.removed,{attribute:e.getAttributeNode(t),from:e})}catch{h(i.removed,{attribute:null,from:e})}if(e.removeAttribute(t),t==="is"&&!X[t])if(ot||vt)try{at(e)}catch{}else try{e.setAttribute(t,"")}catch{}},Re=function(t){let e=null,r=null;if(Pt)t="<remove></remove>"+t;else{let N=dt(t,/^[\r\n\t ]+/);r=N&&N[0]}gt==="application/xhtml+xml"&&lt===Z&&(t='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+t+"</body></html>");let I=C?C.createHTML(t):t;if(lt===Z)try{e=new ra().parseFromString(I,gt)}catch{}if(!e||!e.documentElement){e=Yt.createDocument(lt,"template",null);try{e.documentElement.innerHTML=jt?ut:I}catch{}}let M=e.body||e.documentElement;return t&&r&&M.insertBefore(y.createTextNode(r),M.childNodes[0]||null),lt===Z?fa.call(e,et?"html":"body")[0]:et?e.documentElement:M},Ae=function(t){return ma.call(t.ownerDocument||t,t,Dt.SHOW_ELEMENT|Dt.SHOW_COMMENT|Dt.SHOW_TEXT,null)},_a=function(t){return t instanceof na&&(typeof t.nodeName!="string"||typeof t.textContent!="string"||typeof t.removeChild!="function"||!(t.attributes instanceof aa)||typeof t.removeAttribute!="function"||typeof t.setAttribute!="function"||typeof t.namespaceURI!="string"||typeof t.insertBefore!="function"||typeof t.hasChildNodes!="function")},Se=function(t){return typeof St=="function"&&t instanceof St},K=function(t,e,r){G[t]&&_(G[t],I=>{I.call(i,e,r,ft)})},De=function(t){let e=null;if(K("beforeSanitizeElements",t,null),_a(t))return at(t),!0;let r=Y(t.nodeName);if(K("uponSanitizeElement",t,{tagName:r,allowedTags:D}),t.hasChildNodes()&&!Se(t.firstElementChild)&&z(/<[/\w]/g,t.innerHTML)&&z(/<[/\w]/g,t.textContent))return at(t),!0;if(!D[r]||kt[r]){if(!kt[r]&&Ye(r)&&(E.tagNameCheck instanceof RegExp&&z(E.tagNameCheck,r)||E.tagNameCheck instanceof Function&&E.tagNameCheck(r)))return!1;if(Ht&&!mt[r]){let I=Xt(t)||t.parentNode,M=sa(t)||t.childNodes;if(M&&I){let N=M.length;for(let H=N-1;H>=0;--H)I.insertBefore(ia(M[H],!0),oa(t))}}return at(t),!0}return t instanceof fe&&!xa(t)||(r==="noscript"||r==="noembed"||r==="noframes")&&z(/<\/no(script|embed|frames)/i,t.innerHTML)?(at(t),!0):(it&&t.nodeType===3&&(e=t.textContent,_([zt,Mt,Nt],I=>{e=W(e,I," ")}),t.textContent!==e&&(h(i.removed,{element:t.cloneNode()}),t.textContent=e)),K("afterSanitizeElements",t,null),!1)},Xe=function(t,e,r){if(ge&&(e==="id"||e==="name")&&(r in y||r in ya))return!1;if(!(Ct&&!Ut[e]&&z(da,e))){if(!(ue&&z(pa,e))){if(!X[e]||Ut[e]){if(!(Ye(t)&&(E.tagNameCheck instanceof RegExp&&z(E.tagNameCheck,t)||E.tagNameCheck instanceof Function&&E.tagNameCheck(t))&&(E.attributeNameCheck instanceof RegExp&&z(E.attributeNameCheck,e)||E.attributeNameCheck instanceof Function&&E.attributeNameCheck(e))||e==="is"&&E.allowCustomizedBuiltInElements&&(E.tagNameCheck instanceof RegExp&&z(E.tagNameCheck,r)||E.tagNameCheck instanceof Function&&E.tagNameCheck(r))))return!1}else if(!Ft[e]){if(!z(de,W(r,ce,""))){if(!((e==="src"||e==="xlink:href"||e==="href")&&t!=="script"&&pt(r,"data:")===0&&xe[t])){if(!(ke&&!z(ba,W(r,ce,"")))){if(r)return!1}}}}}}return!0},Ye=function(t){return t.indexOf("-")>0},ze=function(t){K("beforeSanitizeAttributes",t,null);let{attributes:e}=t;if(!e)return;let r={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:X},I=e.length;for(;I--;){let M=e[I],{name:N,namespaceURI:H,value:nt}=M,yt=Y(N),F=N==="value"?nt:bt(nt);if(r.attrName=yt,r.attrValue=F,r.keepAttr=!0,r.forceKeepAttr=void 0,K("uponSanitizeAttribute",t,r),F=r.attrValue,r.forceKeepAttr||(Gt(N,t),!r.keepAttr))continue;if(!we&&z(/\/>/i,F)){Gt(N,t);continue}it&&_([zt,Mt,Nt],Ne=>{F=W(F,Ne," ")});let Me=Y(t.nodeName);if(Xe(Me,yt,F)){if(ye&&(yt==="id"||yt==="name")&&(Gt(N,t),F=ua+F),C&&typeof xt=="object"&&typeof xt.getAttributeType=="function"&&!H)switch(xt.getAttributeType(Me,yt)){case"TrustedHTML":{F=C.createHTML(F);break}case"TrustedScriptURL":{F=C.createScriptURL(F);break}}try{H?t.setAttributeNS(H,N,F):t.setAttribute(N,F),g(i.removed)}catch{}}}K("afterSanitizeAttributes",t,null)},va=function o(t){let e=null,r=Ae(t);for(K("beforeSanitizeShadowDOM",t,null);e=r.nextNode();)K("uponSanitizeShadowNode",e,null),!De(e)&&(e.content instanceof V&&o(e.content),ze(e));K("afterSanitizeShadowDOM",t,null)};return i.sanitize=function(o){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=null,r=null,I=null,M=null;if(jt=!o,jt&&(o="<!-->"),typeof o!="string"&&!Se(o))if(typeof o.toString=="function"){if(o=o.toString(),typeof o!="string")throw q("dirty is not a string, aborting")}else throw q("toString is not a function");if(!i.isSupported)return o;if(Bt||Wt(t),i.removed=[],typeof o=="string"&&(wt=!1),wt){if(o.nodeName){let nt=Y(o.nodeName);if(!D[nt]||kt[nt])throw q("root node is forbidden and cannot be sanitized in-place")}}else if(o instanceof St)e=Re("<!---->"),r=e.ownerDocument.importNode(o,!0),r.nodeType===1&&r.nodeName==="BODY"||r.nodeName==="HTML"?e=r:e.appendChild(r);else{if(!ot&&!it&&!et&&o.indexOf("<")===-1)return C&&It?C.createHTML(o):o;if(e=Re(o),!e)return ot?null:It?ut:""}e&&Pt&&at(e.firstChild);let N=Ae(wt?o:e);for(;I=N.nextNode();)De(I)||(I.content instanceof V&&va(I.content),ze(I));if(wt)return o;if(ot){if(vt)for(M=la.call(e.ownerDocument);e.firstChild;)M.appendChild(e.firstChild);else M=e;return(X.shadowroot||X.shadowrootmode)&&(M=ca.call(p,M,!0)),M}let H=et?e.outerHTML:e.innerHTML;return et&&D["!doctype"]&&e.ownerDocument&&e.ownerDocument.doctype&&e.ownerDocument.doctype.name&&z(se,e.ownerDocument.doctype.name)&&(H="<!DOCTYPE "+e.ownerDocument.doctype.name+`>
`+H),it&&_([zt,Mt,Nt],nt=>{H=W(H,nt," ")}),C&&It?C.createHTML(H):H},i.setConfig=function(){let o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};Wt(o),Bt=!0},i.clearConfig=function(){ft=null,Bt=!1},i.isValidAttribute=function(o,t,e){ft||Wt({});let r=Y(o),I=Y(t);return Xe(r,I,e)},i.addHook=function(o,t){typeof t=="function"&&(G[o]=G[o]||[],h(G[o],t))},i.removeHook=function(o){if(G[o])return g(G[o])},i.removeHooks=function(o){G[o]&&(G[o]=[])},i.removeAllHooks=function(){G={}},i}var ea=le();return ea})});R();R();R();R();var O={home:"a",left:"e",hello:"_",logo:"g",about:"s",right:"I",skillset:"m",skills:"d","skill-list":"c",works:"n",list:"i",project:"l","left-arrow":"b","right-arrow":"p","contact-me":"k",box:"f","contact-right":"O","form-container":"u"};function qt(l){l.innerHTML=`
    <div class='${O.home} content'>
       <div class=${O.left}>
          <h1>Hi, I'm Example</h1>
          <p>I'm a Web Developer</p>
          <ul>
            <li>
               <a href='#0' class='bx bxl-facebook-circle'></a>
            </li>
            <li>
               <a href='#0' class='bx bxl-linkedin-square'></a>
            </li>
            <li>
               <a href='#0' class='bx bxl-github'></a>
            </li>
            <li>
               <a href='#0' class='bx bxl-discord-alt'></a>
            </li>
          </ul>
       </div>
       <div class=${O.right}>
          <img src='profile.png' alt='profile cat'/>
       </div>
    </div>
    <div class='${O.about} content'>
        <div class=${O.left}>
          <h3>About</h3>
          <p>
            &lt;p&gt; <br>
            <span class=${O.hello}> Hello! </span> <br>
            My name is [Your Name] and I specialize in web developement that utilizes HTML, CSS, JS, and REACT etc.
            I am a highly motivated individual and eternal optimist dedicated to writing clear, concise, robust code that works. Striving to never stop learning and improving.
            When I'm not coding, I am writing bolgs, reading, or picking up some new hands-on art project like photography.
            I like to have my perspective and belief systems challenged so that I see the world through new eyes.
            <br>
            &lt;/p&gt;
          </p>
        </div>
        <div class=${O.right}>
           <div class=${O.logo}>
              <img src='ts.png' alt='ts' />
           </div>
           <div class=${O.logo}>
              <img src='sass.png' alt='sass' />
           </div>
        </div>
    </div>
    <div class='${O.skillset} content'>
    <div class=${O.overlay}></div>
    <h2>My Skillset</h2>
         <div class=${O.skills}>
            <div class=${O["skill-list"]}>
               <h3>Front-End</h3>
               <ul>
                  <li>
                     <i class='bx bxl-javascript'></i> JavaScript
                  </li>
                  <li>
                     <i class='bx bxl-typescript'></i> TypeScript
                  </li>
                  <li>
                     <i class='bx bxl-react'></i> React
                  </li>
                  <li>
                     <i class='bx bxl-vuejs'></i> Vue
                  </li>
                  <li>
                     <i class='bx bxl-angular'></i> Angular
                  </li>
               </ul>
            </div>
            <div class=${O["skill-list"]}>
               <h3>Back-End</h3>
               <ul>
                  <li>
                     <i class='bx bxl-firebase'></i> Firebase
                  </li>
                  <li>
                     <i class='bx bxl-mongodb'></i> MongoDB
                  </li>
                  <li>
                     <i class='bx bxl-postgresql'></i> Postgres SQL
                  </li>
               </ul>
            </div>
         </div>
         <div class='${O.works}'>
            <h3>Work</h3>
            <p>
               My Recent Projects
            </p>
            <div class=${O.divider}></div>
            <p>
               I had the pleasure of working with these awesome projects.
            </p>
            <div class=${O.list}>
               <div class='${O["left-arrow"]}'>
                  <i class='bx bx-chevron-left'></i>
               </div>
               <div class='${O.project}'>
                  <img src='project1.png' alt='project1'/>
               </div>
               <div class='${O["right-arrow"]}'>
               <i class='bx bx-chevron-right'></i>
               </div>
            </div>
            <div class=${O["contact-me"]}>
               <div class=${O["contact-left"]}>
                  <form>
                     <div class=${O["form-container"]}>
                        <h3> Let's talk together </h3>
                        <div class=${O.box}>
                           <label for='email'>Email</label> 
                           <input type='email' name='email' id='email' placeholder='Email address' /> 
                           <label for='name'>Your name</label> 
                           <input type='text' name='name' id='name' placeholder='Your name' /> 
                           <label for='message'>Your message</label> 
                           <input type='text' name='message' id='message' placeholder='Your message' />
                           <button>Submit</button>
                        </div>
                     </div>
                  </form>
               </div>
               <div class=${O["contact-right"]}>
                  <img src='profile.png' alt='cat profile' />
               </div>
            </div>
         </div>
    </div>
  `}R();var Pe={container:"y"};function Vt(l){l.innerHTML=`
    <div class=${Pe.container}>
       <div>
       <h1>NotFound</h1>
       <p>It seems you've lost please return back <a href='/'>Home</a></p>
       </div>
    </div>
  `}R();var Lt=class{routes=[];constructor(f){this.routes=f,window.addEventListener("popstate",this.handlePopState.bind(this)),this.handlePopState()}handlePopState(){let f=window.location.pathname,d=this.findMatchingRoute(f,this.routes);if(d){let u=document.createElement("div");d.element(u)}else{let u=this.findMatchingRoute("*",this.routes);if(u){let s=document.createElement("div");u.element(s)}}}findMatchingRoute(f,d){for(let u of d){let s=u.path;if(s==="*")return u;{let m=[],v=s.replace(/:[^\s/]+/g,_=>(m.push(_.substring(1)),"([^\\s/]+)")),A=new RegExp(`^${v}(?:/|$)`),T=f.match(A);if(T){let _={};if(m.forEach((g,h)=>{_[g]=T[h+1]}),u.children){let g=f.slice(T[0].length),h=this.findMatchingRoute(g,u.children);if(h)return h.params=_,h}return{...u,params:_}}}}}navigate(f){history.pushState(null,"",f),this.handlePopState()}};function Zt(l){new Lt([{path:"/",element:()=>qt(l),errorElement:()=>{}},{path:"*",element:()=>Vt(l)}]).navigate("")}R();var Et={footer:"t",trademark:"x"};function Kt(l){l.innerHTML=`
    <div class='${Et.footer} content'>
      <h3>GET IN TOUCH</h3>
      <p>
      Elevating Creativity, Crafting Experiences - Discover the depth of my portfolio, showcasing a blend of innovation and artistry. Connect with me to collaborate on exciting projects or inquire about my services. Let's transform ideas into captivating realities together.
      </p>
      <ul class=${Et["social-list"]}>
        <li>
          <a href='#0' class='bx bxl-linkedin-square'></a>
        </li>
        <li>
          <a href='#0' class='bx bxl-facebook-square'></a>
        </li>
        <li>
          <a href='#0' class='bx bxl-discord-alt'></a>
        </li>
        <li>
          <a href='#0' class='bx bxl-twitter'></a>
        </li>
        <li>
          <a href='#0' class='bx bxl-instagram'></a>
        </li>
      </ul>
      <div class='${Et.trademark}'>&copy; Template TypeScript Basics 2024 &trade;</div>
    </div>
  `}R();var ct={navbar:"r",left:"v",right:"o",menubar:"w",collapse:"h",fadeInLeft:"X"};function Jt(l){l.innerHTML=`
    <div class=${ct.navbar}>
        <div class=${ct.left}>
            <h1>&lt;/TS&gt; Portfolio</h1>
        </div>  
        <div class='${ct.right}' id='right'>
            <ul>
                <li>
                    <a href='/'>Home</a>
                </li>
                <li>
                    <a href='/about'>About</a>
                </li>
                <li>
                    <a href='/skillset'>Skills</a>
                </li>
                <li>
                    <a href='/portfolio'>Portfolio</a>
                </li>
                <li>
                    <a href='/contact'>Hire me</a>
                </li>
            </ul>
        </div>  
        <button class='${ct.menubar}' id='menubar'>
            <i class='bx bx-menu'></i>
        </button>
    </div>
  `,document.getElementById("menubar").addEventListener("click",()=>{document.getElementById("right").classList.toggle(ct.collapse),console.log("clicked")})}function Qt(l){l.innerHTML=`
    <div>
        <nav id='navbar'></nav>
        <div id='router'></div>
        <footer id='footer'></footer>
    </div>
  `;let f=document.getElementById("navbar");Jt(f);let d=document.getElementById("router");Zt(d);let u=document.getElementById("footer");Kt(u)}var _n=Be(He(),1),je=Be(Fe(),1);document.addEventListener("DOMContentLoaded",()=>{let l=document.getElementById("app");if(l){let f=l.innerHTML,d=je.default.sanitize(f);l.innerHTML=d,Qt(l)}});
/*! Bundled license information:

dompurify/dist/purify.js:
  (*! @license DOMPurify 3.0.8 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.0.8/LICENSE *)
*/
