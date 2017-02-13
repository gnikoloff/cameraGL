/*! modernizr 3.3.1 (Custom Build) | MIT *
 * https://modernizr.com/download/?-canvas-flexbox-getusermedia-mediaqueries-video-webgl-setclasses !*/
!function(e,n,t){function r(e,n){return typeof e===n}function o(){var e,n,t,o,a,i,s;for(var l in C)if(C.hasOwnProperty(l)){if(e=[],n=C[l],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(t=0;t<n.options.aliases.length;t++)e.push(n.options.aliases[t].toLowerCase());for(o=r(n.fn,"function")?n.fn():n.fn,a=0;a<e.length;a++)i=e[a],s=i.split("."),1===s.length?Modernizr[s[0]]=o:(!Modernizr[s[0]]||Modernizr[s[0]]instanceof Boolean||(Modernizr[s[0]]=new Boolean(Modernizr[s[0]])),Modernizr[s[0]][s[1]]=o),h.push((o?"":"no-")+s.join("-"))}}function a(e){var n=b.className,t=Modernizr._config.classPrefix||"";if(w&&(n=n.baseVal),Modernizr._config.enableJSClass){var r=new RegExp("(^|\\s)"+t+"no-js(\\s|$)");n=n.replace(r,"$1"+t+"js$2")}Modernizr._config.enableClasses&&(n+=" "+t+e.join(" "+t),w?b.className.baseVal=n:b.className=n)}function i(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):w?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)}function s(e){return e.replace(/([a-z])-([a-z])/g,function(e,n,t){return n+t.toUpperCase()}).replace(/^-/,"")}function l(){var e=n.body;return e||(e=i(w?"svg":"body"),e.fake=!0),e}function u(e,t,r,o){var a,s,u,f,p="modernizr",c=i("div"),d=l();if(parseInt(r,10))for(;r--;)u=i("div"),u.id=o?o[r]:p+(r+1),c.appendChild(u);return a=i("style"),a.type="text/css",a.id="s"+p,(d.fake?d:c).appendChild(a),d.appendChild(c),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(n.createTextNode(e)),c.id=p,d.fake&&(d.style.background="",d.style.overflow="hidden",f=b.style.overflow,b.style.overflow="hidden",b.appendChild(d)),s=t(c,e),d.fake?(d.parentNode.removeChild(d),b.style.overflow=f,b.offsetHeight):c.parentNode.removeChild(c),!!s}function f(e,n){return!!~(""+e).indexOf(n)}function p(e,n){return function(){return e.apply(n,arguments)}}function c(e,n,t){var o;for(var a in e)if(e[a]in n)return t===!1?e[a]:(o=n[e[a]],r(o,"function")?p(o,t||n):o);return!1}function d(e){return e.replace(/([A-Z])/g,function(e,n){return"-"+n.toLowerCase()}).replace(/^ms-/,"-ms-")}function v(n,r){var o=n.length;if("CSS"in e&&"supports"in e.CSS){for(;o--;)if(e.CSS.supports(d(n[o]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var a=[];o--;)a.push("("+d(n[o])+":"+r+")");return a=a.join(" or "),u("@supports ("+a+") { #modernizr { position: absolute; } }",function(e){return"absolute"==getComputedStyle(e,null).position})}return t}function m(e,n,o,a){function l(){p&&(delete L.style,delete L.modElem)}if(a=r(a,"undefined")?!1:a,!r(o,"undefined")){var u=v(e,o);if(!r(u,"undefined"))return u}for(var p,c,d,m,y,g=["modernizr","tspan","samp"];!L.style&&g.length;)p=!0,L.modElem=i(g.shift()),L.style=L.modElem.style;for(d=e.length,c=0;d>c;c++)if(m=e[c],y=L.style[m],f(m,"-")&&(m=s(m)),L.style[m]!==t){if(a||r(o,"undefined"))return l(),"pfx"==n?m:!0;try{L.style[m]=o}catch(h){}if(L.style[m]!=y)return l(),"pfx"==n?m:!0}return l(),!1}function y(e,n,t,o,a){var i=e.charAt(0).toUpperCase()+e.slice(1),s=(e+" "+T.join(i+" ")+i).split(" ");return r(n,"string")||r(n,"undefined")?m(s,n,o,a):(s=(e+" "+E.join(i+" ")+i).split(" "),c(s,n,t))}function g(e,n,r){return y(e,t,t,n,r)}var h=[],C=[],x={_version:"3.3.1",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var t=this;setTimeout(function(){n(t[e])},0)},addTest:function(e,n,t){C.push({name:e,fn:n,options:t})},addAsyncTest:function(e){C.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=x,Modernizr=new Modernizr;var b=n.documentElement,w="svg"===b.nodeName.toLowerCase();Modernizr.addTest("canvas",function(){var e=i("canvas");return!(!e.getContext||!e.getContext("2d"))}),Modernizr.addTest("video",function(){var e=i("video"),n=!1;try{(n=!!e.canPlayType)&&(n=new Boolean(n),n.ogg=e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),n.h264=e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),n.webm=e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,""),n.vp9=e.canPlayType('video/webm; codecs="vp9"').replace(/^no$/,""),n.hls=e.canPlayType('application/x-mpegURL; codecs="avc1.42E01E"').replace(/^no$/,""))}catch(t){}return n}),Modernizr.addTest("webgl",function(){var n=i("canvas"),t="probablySupportsContext"in n?"probablySupportsContext":"supportsContext";return t in n?n[t]("webgl")||n[t]("experimental-webgl"):"WebGLRenderingContext"in e});var S=function(){var n=e.matchMedia||e.msMatchMedia;return n?function(e){var t=n(e);return t&&t.matches||!1}:function(n){var t=!1;return u("@media "+n+" { #modernizr { position: absolute; } }",function(n){t="absolute"==(e.getComputedStyle?e.getComputedStyle(n,null):n.currentStyle).position}),t}}();x.mq=S,Modernizr.addTest("mediaqueries",S("only all"));var _="Moz O ms Webkit",T=x._config.usePrefixes?_.split(" "):[];x._cssomPrefixes=T;var P=function(n){var r,o=prefixes.length,a=e.CSSRule;if("undefined"==typeof a)return t;if(!n)return!1;if(n=n.replace(/^@/,""),r=n.replace(/-/g,"_").toUpperCase()+"_RULE",r in a)return"@"+n;for(var i=0;o>i;i++){var s=prefixes[i],l=s.toUpperCase()+"_"+r;if(l in a)return"@-"+s.toLowerCase()+"-"+n}return!1};x.atRule=P;var E=x._config.usePrefixes?_.toLowerCase().split(" "):[];x._domPrefixes=E;var z={elem:i("modernizr")};Modernizr._q.push(function(){delete z.elem});var L={style:z.elem.style};Modernizr._q.unshift(function(){delete L.style}),x.testAllProps=y;var N=x.prefixed=function(e,n,t){return 0===e.indexOf("@")?P(e):(-1!=e.indexOf("-")&&(e=s(e)),n?y(e,n,t):y(e,"pfx"))};Modernizr.addTest("getusermedia",!!N("getUserMedia",navigator)),x.testAllProps=g,Modernizr.addTest("flexbox",g("flexBasis","1px",!0)),o(),a(h),delete x.addTest,delete x.addAsyncTest;for(var R=0;R<Modernizr._q.length;R++)Modernizr._q[R]();e.Modernizr=Modernizr}(window,document);