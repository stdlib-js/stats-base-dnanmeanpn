"use strict";var s=function(n,e){return function(){return e||n((e={exports:{}}).exports,e),e.exports}};var m=s(function(w,q){
function R(n,e,u){var i,r,a,t,f,v,o;if(n<=0)return NaN;if(n===1||u===0)return e[0];for(u<0?i=(1-n)*u:i=0,o=i,a=0,f=0,v=0;v<n;v++)r=e[i],r===r&&(f+=1,a+=r),i+=u;if(f===0)return NaN;for(a/=f,t=0,i=o,v=0;v<n;v++)r=e[i],r===r&&(t+=r-a),i+=u;return a+t/f}q.exports=R
});var y=s(function(z,c){
function _(n,e,u,i){var r,a,t,f,v,o;if(n<=0)return NaN;if(n===1||u===0)return e[i];for(r=i,t=0,v=0,o=0;o<n;o++)a=e[r],a===a&&(v+=1,t+=a),r+=u;if(v===0)return NaN;for(t/=v,r=i,f=0,o=0;o<n;o++)a=e[r],a===a&&(f+=a-t),r+=u;return t+f/v}c.exports=_
});var d=s(function(A,l){
var E=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),j=m(),N=y();E(j,"ndarray",N);l.exports=j
});var O=require("path").join,b=require('@stdlib/utils-try-require/dist'),g=require('@stdlib/assert-is-error/dist'),h=d(),p,x=b(O(__dirname,"./native.js"));g(x)?p=h:p=x;module.exports=p;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
