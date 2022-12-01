// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e,r="function"==typeof Object.defineProperty?Object.defineProperty:null,t=Object.defineProperty,n=Object.prototype,o=n.toString,a=n.__defineGetter__,i=n.__defineSetter__,u=n.__lookupGetter__,l=n.__lookupSetter__;function f(e,r,t){var n,o,a,i,u,l,f;if(e<=0)return NaN;if(1===e||0===t)return r[0];for(f=n=t<0?(1-e)*t:0,a=0,u=0,l=0;l<e;l++)(o=r[n])==o&&(u+=1,a+=o),n+=t;if(0===u)return NaN;for(a/=u,i=0,n=f,l=0;l<e;l++)(o=r[n])==o&&(i+=o-a),n+=t;return a+i/u}return e=function(){try{return r({},"x",{}),!0}catch(e){return!1}}()?t:function(e,r,t){var f,c,p,_;if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((c="value"in t)&&(u.call(e,r)||l.call(e,r)?(f=e.__proto__,e.__proto__=n,delete e[r],e[r]=t.value,e.__proto__=f):e[r]=t.value),p="get"in t,_="set"in t,c&&(p||_))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&a&&a.call(e,r,t.get),_&&i&&i.call(e,r,t.set),e},e(f,"ndarray",{configurable:!1,enumerable:!1,writable:!1,value:function(e,r,t,n){var o,a,i,u,l,f;if(e<=0)return NaN;if(1===e||0===t)return r[n];for(o=n,i=0,l=0,f=0;f<e;f++)(a=r[o])==a&&(l+=1,i+=a),o+=t;if(0===l)return NaN;for(i/=l,o=n,u=0,f=0;f<e;f++)(a=r[o])==a&&(u+=a-i),o+=t;return i+u/l}}),f},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).dnanmeanpn=r();
//# sourceMappingURL=index.js.map
