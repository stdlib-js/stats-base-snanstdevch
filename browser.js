// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t,e;t=this,e=function(){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null,e=Object.defineProperty,r=Object.prototype,n=r.toString,o=r.__defineGetter__,a=r.__defineSetter__,u=r.__lookupGetter__,i=r.__lookupSetter__,l=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?e:function(t,e,l){var f,c,y,p;if("object"!=typeof t||null===t||"[object Array]"===n.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof l||null===l||"[object Array]"===n.call(l))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+l+"`.");if((c="value"in l)&&(u.call(t,e)||i.call(t,e)?(f=t.__proto__,t.__proto__=r,delete t[e],t[e]=l.value,t.__proto__=f):t[e]=l.value),y="get"in l,p="set"in l,c&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&o&&o.call(t,e,l.get),p&&a&&a.call(t,e,l.set),t};function f(t,e,r){l(t,e,{configurable:!1,enumerable:!1,writable:!1,value:r})}var c="function"==typeof Math.fround?Math.fround:null,y="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),p=Object.prototype.toString,b=Object.prototype.hasOwnProperty,d="function"==typeof Symbol?Symbol.toStringTag:"",_=y&&"symbol"==typeof Symbol.toStringTag?function(t){var e,r,n,o,a;if(null==t)return p.call(t);r=t[d],a=d,e=null!=(o=t)&&b.call(o,a);try{t[d]=void 0}catch(e){return p.call(t)}return n=p.call(t),e?t[d]=r:delete t[d],n}:function(t){return p.call(t)},s="function"==typeof Float32Array,m=Number.POSITIVE_INFINITY,v="function"==typeof Float32Array?Float32Array:null,N="function"==typeof Float32Array?Float32Array:void 0,h=new(function(){var t,e,r;if("function"!=typeof v)return!1;try{e=new v([1,3.14,-3.14,5e40]),r=e,t=(s&&r instanceof Float32Array||"[object Float32Array]"===_(r))&&1===e[0]&&3.140000104904175===e[1]&&-3.140000104904175===e[2]&&e[3]===m}catch(e){t=!1}return t}()?N:function(){throw new Error("not implemented")})(1),g="function"==typeof c?c:function(t){return h[0]=t,h[0]};function j(t,e,r,n){var o,a,u,i,l,f,c,y,p;if(t<=0)return NaN;if(1===t||0===n)return(c=r[0])==c&&t-e>0?0:NaN;for(a=n<0?(1-t)*n:0,p=0;p<t;p++){if((c=r[a])==c){o=c;break}a+=n}if(p===t)return NaN;for(a+=n,p+=1,u=0,l=0,y=1;p<t;p++)(c=r[a])==c&&(f=g(c-o),u=g(u+g(f*f)),l=g(l+f),y+=1),a+=n;return(i=y-e)<=0?NaN:g(g(u/i)-g(g(l/y)*g(l/i)))}function w(t,e,r,n,o){var a,u,i,l,f,c,y,p,b;if(t<=0)return NaN;if(1===t||0===n)return(y=r[o])==y&&t-e>0?0:NaN;for(u=o,b=0;b<t;b++){if((y=r[u])==y){a=y;break}u+=n}if(b===t)return NaN;for(u+=n,b+=1,i=0,f=0,p=1;b<t;b++)(y=r[u])==y&&(c=g(y-a),i=g(i+g(c*c)),f=g(f+c),p+=1),u+=n;return(l=p-e)<=0?NaN:g(g(i/l)-g(g(f/p)*g(f/l)))}f(j,"ndarray",w);var S=Math.sqrt;function A(t,e,r,n){return g(S(j(t,e,r,n)))}return f(A,"ndarray",(function(t,e,r,n,o){return g(S(w(t,e,r,n,o)))})),A},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).snanstdevch=e();
//# sourceMappingURL=browser.js.map
