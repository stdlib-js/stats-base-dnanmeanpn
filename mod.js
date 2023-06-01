// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e,t=Object.defineProperty,n=Object.prototype,o=n.toString,a=n.__defineGetter__,i=n.__defineSetter__,u=n.__lookupGetter__,l=n.__lookupSetter__;function c(r,e,t){var n,o,a,i,u,l,c;if(r<=0)return NaN;if(1===r||0===t)return e[0];for(c=n=t<0?(1-r)*t:0,a=0,u=0,l=0;l<r;l++)(o=e[n])==o&&(u+=1,a+=o),n+=t;if(0===u)return NaN;for(a/=u,i=0,n=c,l=0;l<r;l++)(o=e[n])==o&&(i+=o-a),n+=t;return a+i/u}function f(r,e,t,n){var o,a,i,u,l,c;if(r<=0)return NaN;if(1===r||0===t)return e[n];for(o=n,i=0,l=0,c=0;c<r;c++)(a=e[o])==a&&(l+=1,i+=a),o+=t;if(0===l)return NaN;for(i/=l,o=n,u=0,c=0;c<r;c++)(a=e[o])==a&&(u+=a-i),o+=t;return i+u/l}e=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?t:function(r,e,t){var c,f,_,p;if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((f="value"in t)&&(u.call(r,e)||l.call(r,e)?(c=r.__proto__,r.__proto__=n,delete r[e],r[e]=t.value,r.__proto__=c):r[e]=t.value),_="get"in t,p="set"in t,f&&(_||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return _&&a&&a.call(r,e,t.get),p&&i&&i.call(r,e,t.set),r},e(c,"ndarray",{configurable:!1,enumerable:!1,writable:!1,value:f});export{c as default,f as ndarray};
//# sourceMappingURL=mod.js.map