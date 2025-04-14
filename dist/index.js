"use strict";var i=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var u=i(function(w,s){
var f=require('@stdlib/number-float64-base-to-float32/dist'),p=require('@stdlib/stats-base-snanvariancech/dist'),y=require('@stdlib/math-base-special-sqrt/dist');function x(e,r,a,t){return f(y(p(e,r,a,t)))}s.exports=x
});var q=i(function(z,v){
var j=require('@stdlib/number-float64-base-to-float32/dist'),m=require('@stdlib/stats-base-snanvariancech/dist').ndarray,F=require('@stdlib/math-base-special-sqrt/dist');function R(e,r,a,t,l){return j(F(m(e,r,a,t,l)))}v.exports=R
});var d=i(function(A,c){
var T=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),o=u(),_=q();T(o,"ndarray",_);c.exports=o
});var E=require("path").join,O=require('@stdlib/utils-try-require/dist'),b=require('@stdlib/assert-is-error/dist'),g=d(),n,h=O(E(__dirname,"./native.js"));b(h)?n=g:n=h;module.exports=n;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
