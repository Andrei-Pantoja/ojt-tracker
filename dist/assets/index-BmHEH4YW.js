(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function e0(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var ey={exports:{}},Kl={},ty={exports:{}},ee={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vo=Symbol.for("react.element"),t0=Symbol.for("react.portal"),n0=Symbol.for("react.fragment"),r0=Symbol.for("react.strict_mode"),i0=Symbol.for("react.profiler"),s0=Symbol.for("react.provider"),o0=Symbol.for("react.context"),a0=Symbol.for("react.forward_ref"),l0=Symbol.for("react.suspense"),u0=Symbol.for("react.memo"),c0=Symbol.for("react.lazy"),Pp=Symbol.iterator;function h0(t){return t===null||typeof t!="object"?null:(t=Pp&&t[Pp]||t["@@iterator"],typeof t=="function"?t:null)}var ny={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ry=Object.assign,iy={};function Ji(t,e,n){this.props=t,this.context=e,this.refs=iy,this.updater=n||ny}Ji.prototype.isReactComponent={};Ji.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ji.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function sy(){}sy.prototype=Ji.prototype;function Qh(t,e,n){this.props=t,this.context=e,this.refs=iy,this.updater=n||ny}var Yh=Qh.prototype=new sy;Yh.constructor=Qh;ry(Yh,Ji.prototype);Yh.isPureReactComponent=!0;var Cp=Array.isArray,oy=Object.prototype.hasOwnProperty,Xh={current:null},ay={key:!0,ref:!0,__self:!0,__source:!0};function ly(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)oy.call(e,r)&&!ay.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var u=Array(l),h=0;h<l;h++)u[h]=arguments[h+2];i.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Vo,type:t,key:s,ref:o,props:i,_owner:Xh.current}}function d0(t,e){return{$$typeof:Vo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Jh(t){return typeof t=="object"&&t!==null&&t.$$typeof===Vo}function f0(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var kp=/\/+/g;function Gu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?f0(""+t.key):e.toString(36)}function Ua(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Vo:case t0:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Gu(o,0):r,Cp(i)?(n="",t!=null&&(n=t.replace(kp,"$&/")+"/"),Ua(i,e,n,"",function(h){return h})):i!=null&&(Jh(i)&&(i=d0(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(kp,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Cp(t))for(var l=0;l<t.length;l++){s=t[l];var u=r+Gu(s,l);o+=Ua(s,e,n,u,i)}else if(u=h0(t),typeof u=="function")for(t=u.call(t),l=0;!(s=t.next()).done;)s=s.value,u=r+Gu(s,l++),o+=Ua(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function ya(t,e,n){if(t==null)return t;var r=[],i=0;return Ua(t,r,"","",function(s){return e.call(n,s,i++)}),r}function p0(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var ft={current:null},ja={transition:null},m0={ReactCurrentDispatcher:ft,ReactCurrentBatchConfig:ja,ReactCurrentOwner:Xh};function uy(){throw Error("act(...) is not supported in production builds of React.")}ee.Children={map:ya,forEach:function(t,e,n){ya(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return ya(t,function(){e++}),e},toArray:function(t){return ya(t,function(e){return e})||[]},only:function(t){if(!Jh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ee.Component=Ji;ee.Fragment=n0;ee.Profiler=i0;ee.PureComponent=Qh;ee.StrictMode=r0;ee.Suspense=l0;ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=m0;ee.act=uy;ee.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=ry({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Xh.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)oy.call(e,u)&&!ay.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var h=0;h<u;h++)l[h]=arguments[h+2];r.children=l}return{$$typeof:Vo,type:t.type,key:i,ref:s,props:r,_owner:o}};ee.createContext=function(t){return t={$$typeof:o0,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:s0,_context:t},t.Consumer=t};ee.createElement=ly;ee.createFactory=function(t){var e=ly.bind(null,t);return e.type=t,e};ee.createRef=function(){return{current:null}};ee.forwardRef=function(t){return{$$typeof:a0,render:t}};ee.isValidElement=Jh;ee.lazy=function(t){return{$$typeof:c0,_payload:{_status:-1,_result:t},_init:p0}};ee.memo=function(t,e){return{$$typeof:u0,type:t,compare:e===void 0?null:e}};ee.startTransition=function(t){var e=ja.transition;ja.transition={};try{t()}finally{ja.transition=e}};ee.unstable_act=uy;ee.useCallback=function(t,e){return ft.current.useCallback(t,e)};ee.useContext=function(t){return ft.current.useContext(t)};ee.useDebugValue=function(){};ee.useDeferredValue=function(t){return ft.current.useDeferredValue(t)};ee.useEffect=function(t,e){return ft.current.useEffect(t,e)};ee.useId=function(){return ft.current.useId()};ee.useImperativeHandle=function(t,e,n){return ft.current.useImperativeHandle(t,e,n)};ee.useInsertionEffect=function(t,e){return ft.current.useInsertionEffect(t,e)};ee.useLayoutEffect=function(t,e){return ft.current.useLayoutEffect(t,e)};ee.useMemo=function(t,e){return ft.current.useMemo(t,e)};ee.useReducer=function(t,e,n){return ft.current.useReducer(t,e,n)};ee.useRef=function(t){return ft.current.useRef(t)};ee.useState=function(t){return ft.current.useState(t)};ee.useSyncExternalStore=function(t,e,n){return ft.current.useSyncExternalStore(t,e,n)};ee.useTransition=function(){return ft.current.useTransition()};ee.version="18.3.1";ty.exports=ee;var oe=ty.exports;const g0=e0(oe);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var y0=oe,_0=Symbol.for("react.element"),v0=Symbol.for("react.fragment"),E0=Object.prototype.hasOwnProperty,w0=y0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,T0={key:!0,ref:!0,__self:!0,__source:!0};function cy(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)E0.call(e,r)&&!T0.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:_0,type:t,key:s,ref:o,props:i,_owner:w0.current}}Kl.Fragment=v0;Kl.jsx=cy;Kl.jsxs=cy;ey.exports=Kl;var I=ey.exports,xc={},hy={exports:{}},Ct={},dy={exports:{}},fy={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(B,K){var Q=B.length;B.push(K);e:for(;0<Q;){var pe=Q-1>>>1,re=B[pe];if(0<i(re,K))B[pe]=K,B[Q]=re,Q=pe;else break e}}function n(B){return B.length===0?null:B[0]}function r(B){if(B.length===0)return null;var K=B[0],Q=B.pop();if(Q!==K){B[0]=Q;e:for(var pe=0,re=B.length,we=re>>>1;pe<we;){var Nt=2*(pe+1)-1,jt=B[Nt],xt=Nt+1,Dt=B[xt];if(0>i(jt,Q))xt<re&&0>i(Dt,jt)?(B[pe]=Dt,B[xt]=Q,pe=xt):(B[pe]=jt,B[Nt]=Q,pe=Nt);else if(xt<re&&0>i(Dt,Q))B[pe]=Dt,B[xt]=Q,pe=xt;else break e}}return K}function i(B,K){var Q=B.sortIndex-K.sortIndex;return Q!==0?Q:B.id-K.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],h=[],f=1,g=null,y=3,P=!1,k=!1,D=!1,L=typeof setTimeout=="function"?setTimeout:null,S=typeof clearTimeout=="function"?clearTimeout:null,E=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function A(B){for(var K=n(h);K!==null;){if(K.callback===null)r(h);else if(K.startTime<=B)r(h),K.sortIndex=K.expirationTime,e(u,K);else break;K=n(h)}}function O(B){if(D=!1,A(B),!k)if(n(u)!==null)k=!0,fn(j);else{var K=n(h);K!==null&&Ee(O,K.startTime-B)}}function j(B,K){k=!1,D&&(D=!1,S(m),m=-1),P=!0;var Q=y;try{for(A(K),g=n(u);g!==null&&(!(g.expirationTime>K)||B&&!R());){var pe=g.callback;if(typeof pe=="function"){g.callback=null,y=g.priorityLevel;var re=pe(g.expirationTime<=K);K=t.unstable_now(),typeof re=="function"?g.callback=re:g===n(u)&&r(u),A(K)}else r(u);g=n(u)}if(g!==null)var we=!0;else{var Nt=n(h);Nt!==null&&Ee(O,Nt.startTime-K),we=!1}return we}finally{g=null,y=Q,P=!1}}var U=!1,_=null,m=-1,v=5,w=-1;function R(){return!(t.unstable_now()-w<v)}function C(){if(_!==null){var B=t.unstable_now();w=B;var K=!0;try{K=_(!0,B)}finally{K?T():(U=!1,_=null)}}else U=!1}var T;if(typeof E=="function")T=function(){E(C)};else if(typeof MessageChannel<"u"){var Ue=new MessageChannel,Jt=Ue.port2;Ue.port1.onmessage=C,T=function(){Jt.postMessage(null)}}else T=function(){L(C,0)};function fn(B){_=B,U||(U=!0,T())}function Ee(B,K){m=L(function(){B(t.unstable_now())},K)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(B){B.callback=null},t.unstable_continueExecution=function(){k||P||(k=!0,fn(j))},t.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):v=0<B?Math.floor(1e3/B):5},t.unstable_getCurrentPriorityLevel=function(){return y},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(B){switch(y){case 1:case 2:case 3:var K=3;break;default:K=y}var Q=y;y=K;try{return B()}finally{y=Q}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(B,K){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var Q=y;y=B;try{return K()}finally{y=Q}},t.unstable_scheduleCallback=function(B,K,Q){var pe=t.unstable_now();switch(typeof Q=="object"&&Q!==null?(Q=Q.delay,Q=typeof Q=="number"&&0<Q?pe+Q:pe):Q=pe,B){case 1:var re=-1;break;case 2:re=250;break;case 5:re=1073741823;break;case 4:re=1e4;break;default:re=5e3}return re=Q+re,B={id:f++,callback:K,priorityLevel:B,startTime:Q,expirationTime:re,sortIndex:-1},Q>pe?(B.sortIndex=Q,e(h,B),n(u)===null&&B===n(h)&&(D?(S(m),m=-1):D=!0,Ee(O,Q-pe))):(B.sortIndex=re,e(u,B),k||P||(k=!0,fn(j))),B},t.unstable_shouldYield=R,t.unstable_wrapCallback=function(B){var K=y;return function(){var Q=y;y=K;try{return B.apply(this,arguments)}finally{y=Q}}}})(fy);dy.exports=fy;var I0=dy.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var S0=oe,Pt=I0;function F(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var py=new Set,so={};function Jr(t,e){bi(t,e),bi(t+"Capture",e)}function bi(t,e){for(so[t]=e,t=0;t<e.length;t++)py.add(e[t])}var Cn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Dc=Object.prototype.hasOwnProperty,A0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Np={},xp={};function R0(t){return Dc.call(xp,t)?!0:Dc.call(Np,t)?!1:A0.test(t)?xp[t]=!0:(Np[t]=!0,!1)}function P0(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function C0(t,e,n,r){if(e===null||typeof e>"u"||P0(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function pt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Xe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Xe[t]=new pt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Xe[e]=new pt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Xe[t]=new pt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Xe[t]=new pt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Xe[t]=new pt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Xe[t]=new pt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Xe[t]=new pt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Xe[t]=new pt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Xe[t]=new pt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Zh=/[\-:]([a-z])/g;function ed(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Zh,ed);Xe[e]=new pt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Zh,ed);Xe[e]=new pt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Zh,ed);Xe[e]=new pt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Xe[t]=new pt(t,1,!1,t.toLowerCase(),null,!1,!1)});Xe.xlinkHref=new pt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Xe[t]=new pt(t,1,!1,t.toLowerCase(),null,!0,!0)});function td(t,e,n,r){var i=Xe.hasOwnProperty(e)?Xe[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(C0(e,n,i,r)&&(n=null),r||i===null?R0(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Mn=S0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,_a=Symbol.for("react.element"),pi=Symbol.for("react.portal"),mi=Symbol.for("react.fragment"),nd=Symbol.for("react.strict_mode"),Vc=Symbol.for("react.profiler"),my=Symbol.for("react.provider"),gy=Symbol.for("react.context"),rd=Symbol.for("react.forward_ref"),Oc=Symbol.for("react.suspense"),Lc=Symbol.for("react.suspense_list"),id=Symbol.for("react.memo"),Hn=Symbol.for("react.lazy"),yy=Symbol.for("react.offscreen"),Dp=Symbol.iterator;function Ss(t){return t===null||typeof t!="object"?null:(t=Dp&&t[Dp]||t["@@iterator"],typeof t=="function"?t:null)}var Re=Object.assign,Qu;function Os(t){if(Qu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Qu=e&&e[1]||""}return`
`+Qu+t}var Yu=!1;function Xu(t,e){if(!t||Yu)return"";Yu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(h){var r=h}Reflect.construct(t,[],e)}else{try{e.call()}catch(h){r=h}t.call(e.prototype)}else{try{throw Error()}catch(h){r=h}t()}}catch(h){if(h&&r&&typeof h.stack=="string"){for(var i=h.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{Yu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Os(t):""}function k0(t){switch(t.tag){case 5:return Os(t.type);case 16:return Os("Lazy");case 13:return Os("Suspense");case 19:return Os("SuspenseList");case 0:case 2:case 15:return t=Xu(t.type,!1),t;case 11:return t=Xu(t.type.render,!1),t;case 1:return t=Xu(t.type,!0),t;default:return""}}function Mc(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case mi:return"Fragment";case pi:return"Portal";case Vc:return"Profiler";case nd:return"StrictMode";case Oc:return"Suspense";case Lc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case gy:return(t.displayName||"Context")+".Consumer";case my:return(t._context.displayName||"Context")+".Provider";case rd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case id:return e=t.displayName||null,e!==null?e:Mc(t.type)||"Memo";case Hn:e=t._payload,t=t._init;try{return Mc(t(e))}catch{}}return null}function N0(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Mc(e);case 8:return e===nd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function pr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function _y(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function x0(t){var e=_y(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function va(t){t._valueTracker||(t._valueTracker=x0(t))}function vy(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=_y(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function ol(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function bc(t,e){var n=e.checked;return Re({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Vp(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=pr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Ey(t,e){e=e.checked,e!=null&&td(t,"checked",e,!1)}function Fc(t,e){Ey(t,e);var n=pr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Uc(t,e.type,n):e.hasOwnProperty("defaultValue")&&Uc(t,e.type,pr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Op(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Uc(t,e,n){(e!=="number"||ol(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ls=Array.isArray;function Pi(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+pr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function jc(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(F(91));return Re({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Lp(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(F(92));if(Ls(n)){if(1<n.length)throw Error(F(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:pr(n)}}function wy(t,e){var n=pr(e.value),r=pr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Mp(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Ty(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function zc(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Ty(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ea,Iy=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ea=Ea||document.createElement("div"),Ea.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ea.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function oo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ws={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},D0=["Webkit","ms","Moz","O"];Object.keys(Ws).forEach(function(t){D0.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ws[e]=Ws[t]})});function Sy(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ws.hasOwnProperty(t)&&Ws[t]?(""+e).trim():e+"px"}function Ay(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Sy(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var V0=Re({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Bc(t,e){if(e){if(V0[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(F(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(F(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(F(61))}if(e.style!=null&&typeof e.style!="object")throw Error(F(62))}}function $c(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Wc=null;function sd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Hc=null,Ci=null,ki=null;function bp(t){if(t=Mo(t)){if(typeof Hc!="function")throw Error(F(280));var e=t.stateNode;e&&(e=Jl(e),Hc(t.stateNode,t.type,e))}}function Ry(t){Ci?ki?ki.push(t):ki=[t]:Ci=t}function Py(){if(Ci){var t=Ci,e=ki;if(ki=Ci=null,bp(t),e)for(t=0;t<e.length;t++)bp(e[t])}}function Cy(t,e){return t(e)}function ky(){}var Ju=!1;function Ny(t,e,n){if(Ju)return t(e,n);Ju=!0;try{return Cy(t,e,n)}finally{Ju=!1,(Ci!==null||ki!==null)&&(ky(),Py())}}function ao(t,e){var n=t.stateNode;if(n===null)return null;var r=Jl(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(F(231,e,typeof n));return n}var qc=!1;if(Cn)try{var As={};Object.defineProperty(As,"passive",{get:function(){qc=!0}}),window.addEventListener("test",As,As),window.removeEventListener("test",As,As)}catch{qc=!1}function O0(t,e,n,r,i,s,o,l,u){var h=Array.prototype.slice.call(arguments,3);try{e.apply(n,h)}catch(f){this.onError(f)}}var Hs=!1,al=null,ll=!1,Kc=null,L0={onError:function(t){Hs=!0,al=t}};function M0(t,e,n,r,i,s,o,l,u){Hs=!1,al=null,O0.apply(L0,arguments)}function b0(t,e,n,r,i,s,o,l,u){if(M0.apply(this,arguments),Hs){if(Hs){var h=al;Hs=!1,al=null}else throw Error(F(198));ll||(ll=!0,Kc=h)}}function Zr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function xy(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Fp(t){if(Zr(t)!==t)throw Error(F(188))}function F0(t){var e=t.alternate;if(!e){if(e=Zr(t),e===null)throw Error(F(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Fp(i),t;if(s===r)return Fp(i),e;s=s.sibling}throw Error(F(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(F(189))}}if(n.alternate!==r)throw Error(F(190))}if(n.tag!==3)throw Error(F(188));return n.stateNode.current===n?t:e}function Dy(t){return t=F0(t),t!==null?Vy(t):null}function Vy(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Vy(t);if(e!==null)return e;t=t.sibling}return null}var Oy=Pt.unstable_scheduleCallback,Up=Pt.unstable_cancelCallback,U0=Pt.unstable_shouldYield,j0=Pt.unstable_requestPaint,xe=Pt.unstable_now,z0=Pt.unstable_getCurrentPriorityLevel,od=Pt.unstable_ImmediatePriority,Ly=Pt.unstable_UserBlockingPriority,ul=Pt.unstable_NormalPriority,B0=Pt.unstable_LowPriority,My=Pt.unstable_IdlePriority,Gl=null,on=null;function $0(t){if(on&&typeof on.onCommitFiberRoot=="function")try{on.onCommitFiberRoot(Gl,t,void 0,(t.current.flags&128)===128)}catch{}}var qt=Math.clz32?Math.clz32:q0,W0=Math.log,H0=Math.LN2;function q0(t){return t>>>=0,t===0?32:31-(W0(t)/H0|0)|0}var wa=64,Ta=4194304;function Ms(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function cl(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=Ms(l):(s&=o,s!==0&&(r=Ms(s)))}else o=n&~i,o!==0?r=Ms(o):s!==0&&(r=Ms(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-qt(e),i=1<<n,r|=t[n],e&=~i;return r}function K0(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function G0(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-qt(s),l=1<<o,u=i[o];u===-1?(!(l&n)||l&r)&&(i[o]=K0(l,e)):u<=e&&(t.expiredLanes|=l),s&=~l}}function Gc(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function by(){var t=wa;return wa<<=1,!(wa&4194240)&&(wa=64),t}function Zu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Oo(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-qt(e),t[e]=n}function Q0(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-qt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function ad(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-qt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var he=0;function Fy(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Uy,ld,jy,zy,By,Qc=!1,Ia=[],nr=null,rr=null,ir=null,lo=new Map,uo=new Map,Kn=[],Y0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function jp(t,e){switch(t){case"focusin":case"focusout":nr=null;break;case"dragenter":case"dragleave":rr=null;break;case"mouseover":case"mouseout":ir=null;break;case"pointerover":case"pointerout":lo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":uo.delete(e.pointerId)}}function Rs(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Mo(e),e!==null&&ld(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function X0(t,e,n,r,i){switch(e){case"focusin":return nr=Rs(nr,t,e,n,r,i),!0;case"dragenter":return rr=Rs(rr,t,e,n,r,i),!0;case"mouseover":return ir=Rs(ir,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return lo.set(s,Rs(lo.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,uo.set(s,Rs(uo.get(s)||null,t,e,n,r,i)),!0}return!1}function $y(t){var e=Or(t.target);if(e!==null){var n=Zr(e);if(n!==null){if(e=n.tag,e===13){if(e=xy(n),e!==null){t.blockedOn=e,By(t.priority,function(){jy(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function za(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Yc(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Wc=r,n.target.dispatchEvent(r),Wc=null}else return e=Mo(n),e!==null&&ld(e),t.blockedOn=n,!1;e.shift()}return!0}function zp(t,e,n){za(t)&&n.delete(e)}function J0(){Qc=!1,nr!==null&&za(nr)&&(nr=null),rr!==null&&za(rr)&&(rr=null),ir!==null&&za(ir)&&(ir=null),lo.forEach(zp),uo.forEach(zp)}function Ps(t,e){t.blockedOn===e&&(t.blockedOn=null,Qc||(Qc=!0,Pt.unstable_scheduleCallback(Pt.unstable_NormalPriority,J0)))}function co(t){function e(i){return Ps(i,t)}if(0<Ia.length){Ps(Ia[0],t);for(var n=1;n<Ia.length;n++){var r=Ia[n];r.blockedOn===t&&(r.blockedOn=null)}}for(nr!==null&&Ps(nr,t),rr!==null&&Ps(rr,t),ir!==null&&Ps(ir,t),lo.forEach(e),uo.forEach(e),n=0;n<Kn.length;n++)r=Kn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Kn.length&&(n=Kn[0],n.blockedOn===null);)$y(n),n.blockedOn===null&&Kn.shift()}var Ni=Mn.ReactCurrentBatchConfig,hl=!0;function Z0(t,e,n,r){var i=he,s=Ni.transition;Ni.transition=null;try{he=1,ud(t,e,n,r)}finally{he=i,Ni.transition=s}}function eT(t,e,n,r){var i=he,s=Ni.transition;Ni.transition=null;try{he=4,ud(t,e,n,r)}finally{he=i,Ni.transition=s}}function ud(t,e,n,r){if(hl){var i=Yc(t,e,n,r);if(i===null)uc(t,e,r,dl,n),jp(t,r);else if(X0(i,t,e,n,r))r.stopPropagation();else if(jp(t,r),e&4&&-1<Y0.indexOf(t)){for(;i!==null;){var s=Mo(i);if(s!==null&&Uy(s),s=Yc(t,e,n,r),s===null&&uc(t,e,r,dl,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else uc(t,e,r,null,n)}}var dl=null;function Yc(t,e,n,r){if(dl=null,t=sd(r),t=Or(t),t!==null)if(e=Zr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=xy(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return dl=t,null}function Wy(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(z0()){case od:return 1;case Ly:return 4;case ul:case B0:return 16;case My:return 536870912;default:return 16}default:return 16}}var Zn=null,cd=null,Ba=null;function Hy(){if(Ba)return Ba;var t,e=cd,n=e.length,r,i="value"in Zn?Zn.value:Zn.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Ba=i.slice(t,1<r?1-r:void 0)}function $a(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Sa(){return!0}function Bp(){return!1}function kt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Sa:Bp,this.isPropagationStopped=Bp,this}return Re(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Sa)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Sa)},persist:function(){},isPersistent:Sa}),e}var Zi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},hd=kt(Zi),Lo=Re({},Zi,{view:0,detail:0}),tT=kt(Lo),ec,tc,Cs,Ql=Re({},Lo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:dd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Cs&&(Cs&&t.type==="mousemove"?(ec=t.screenX-Cs.screenX,tc=t.screenY-Cs.screenY):tc=ec=0,Cs=t),ec)},movementY:function(t){return"movementY"in t?t.movementY:tc}}),$p=kt(Ql),nT=Re({},Ql,{dataTransfer:0}),rT=kt(nT),iT=Re({},Lo,{relatedTarget:0}),nc=kt(iT),sT=Re({},Zi,{animationName:0,elapsedTime:0,pseudoElement:0}),oT=kt(sT),aT=Re({},Zi,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),lT=kt(aT),uT=Re({},Zi,{data:0}),Wp=kt(uT),cT={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},hT={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},dT={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function fT(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=dT[t])?!!e[t]:!1}function dd(){return fT}var pT=Re({},Lo,{key:function(t){if(t.key){var e=cT[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=$a(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?hT[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:dd,charCode:function(t){return t.type==="keypress"?$a(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?$a(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),mT=kt(pT),gT=Re({},Ql,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Hp=kt(gT),yT=Re({},Lo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:dd}),_T=kt(yT),vT=Re({},Zi,{propertyName:0,elapsedTime:0,pseudoElement:0}),ET=kt(vT),wT=Re({},Ql,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),TT=kt(wT),IT=[9,13,27,32],fd=Cn&&"CompositionEvent"in window,qs=null;Cn&&"documentMode"in document&&(qs=document.documentMode);var ST=Cn&&"TextEvent"in window&&!qs,qy=Cn&&(!fd||qs&&8<qs&&11>=qs),qp=" ",Kp=!1;function Ky(t,e){switch(t){case"keyup":return IT.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Gy(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var gi=!1;function AT(t,e){switch(t){case"compositionend":return Gy(e);case"keypress":return e.which!==32?null:(Kp=!0,qp);case"textInput":return t=e.data,t===qp&&Kp?null:t;default:return null}}function RT(t,e){if(gi)return t==="compositionend"||!fd&&Ky(t,e)?(t=Hy(),Ba=cd=Zn=null,gi=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return qy&&e.locale!=="ko"?null:e.data;default:return null}}var PT={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Gp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!PT[t.type]:e==="textarea"}function Qy(t,e,n,r){Ry(r),e=fl(e,"onChange"),0<e.length&&(n=new hd("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Ks=null,ho=null;function CT(t){o_(t,0)}function Yl(t){var e=vi(t);if(vy(e))return t}function kT(t,e){if(t==="change")return e}var Yy=!1;if(Cn){var rc;if(Cn){var ic="oninput"in document;if(!ic){var Qp=document.createElement("div");Qp.setAttribute("oninput","return;"),ic=typeof Qp.oninput=="function"}rc=ic}else rc=!1;Yy=rc&&(!document.documentMode||9<document.documentMode)}function Yp(){Ks&&(Ks.detachEvent("onpropertychange",Xy),ho=Ks=null)}function Xy(t){if(t.propertyName==="value"&&Yl(ho)){var e=[];Qy(e,ho,t,sd(t)),Ny(CT,e)}}function NT(t,e,n){t==="focusin"?(Yp(),Ks=e,ho=n,Ks.attachEvent("onpropertychange",Xy)):t==="focusout"&&Yp()}function xT(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Yl(ho)}function DT(t,e){if(t==="click")return Yl(e)}function VT(t,e){if(t==="input"||t==="change")return Yl(e)}function OT(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Gt=typeof Object.is=="function"?Object.is:OT;function fo(t,e){if(Gt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Dc.call(e,i)||!Gt(t[i],e[i]))return!1}return!0}function Xp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Jp(t,e){var n=Xp(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Xp(n)}}function Jy(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Jy(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Zy(){for(var t=window,e=ol();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=ol(t.document)}return e}function pd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function LT(t){var e=Zy(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Jy(n.ownerDocument.documentElement,n)){if(r!==null&&pd(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Jp(n,s);var o=Jp(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var MT=Cn&&"documentMode"in document&&11>=document.documentMode,yi=null,Xc=null,Gs=null,Jc=!1;function Zp(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Jc||yi==null||yi!==ol(r)||(r=yi,"selectionStart"in r&&pd(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Gs&&fo(Gs,r)||(Gs=r,r=fl(Xc,"onSelect"),0<r.length&&(e=new hd("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=yi)))}function Aa(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var _i={animationend:Aa("Animation","AnimationEnd"),animationiteration:Aa("Animation","AnimationIteration"),animationstart:Aa("Animation","AnimationStart"),transitionend:Aa("Transition","TransitionEnd")},sc={},e_={};Cn&&(e_=document.createElement("div").style,"AnimationEvent"in window||(delete _i.animationend.animation,delete _i.animationiteration.animation,delete _i.animationstart.animation),"TransitionEvent"in window||delete _i.transitionend.transition);function Xl(t){if(sc[t])return sc[t];if(!_i[t])return t;var e=_i[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in e_)return sc[t]=e[n];return t}var t_=Xl("animationend"),n_=Xl("animationiteration"),r_=Xl("animationstart"),i_=Xl("transitionend"),s_=new Map,em="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function vr(t,e){s_.set(t,e),Jr(e,[t])}for(var oc=0;oc<em.length;oc++){var ac=em[oc],bT=ac.toLowerCase(),FT=ac[0].toUpperCase()+ac.slice(1);vr(bT,"on"+FT)}vr(t_,"onAnimationEnd");vr(n_,"onAnimationIteration");vr(r_,"onAnimationStart");vr("dblclick","onDoubleClick");vr("focusin","onFocus");vr("focusout","onBlur");vr(i_,"onTransitionEnd");bi("onMouseEnter",["mouseout","mouseover"]);bi("onMouseLeave",["mouseout","mouseover"]);bi("onPointerEnter",["pointerout","pointerover"]);bi("onPointerLeave",["pointerout","pointerover"]);Jr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Jr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Jr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Jr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Jr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Jr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var bs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),UT=new Set("cancel close invalid load scroll toggle".split(" ").concat(bs));function tm(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,b0(r,e,void 0,t),t.currentTarget=null}function o_(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,h=l.currentTarget;if(l=l.listener,u!==s&&i.isPropagationStopped())break e;tm(i,l,h),s=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,h=l.currentTarget,l=l.listener,u!==s&&i.isPropagationStopped())break e;tm(i,l,h),s=u}}}if(ll)throw t=Kc,ll=!1,Kc=null,t}function ye(t,e){var n=e[rh];n===void 0&&(n=e[rh]=new Set);var r=t+"__bubble";n.has(r)||(a_(e,t,2,!1),n.add(r))}function lc(t,e,n){var r=0;e&&(r|=4),a_(n,t,r,e)}var Ra="_reactListening"+Math.random().toString(36).slice(2);function po(t){if(!t[Ra]){t[Ra]=!0,py.forEach(function(n){n!=="selectionchange"&&(UT.has(n)||lc(n,!1,t),lc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ra]||(e[Ra]=!0,lc("selectionchange",!1,e))}}function a_(t,e,n,r){switch(Wy(e)){case 1:var i=Z0;break;case 4:i=eT;break;default:i=ud}n=i.bind(null,e,n,t),i=void 0,!qc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function uc(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;l!==null;){if(o=Or(l),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}l=l.parentNode}}r=r.return}Ny(function(){var h=s,f=sd(n),g=[];e:{var y=s_.get(t);if(y!==void 0){var P=hd,k=t;switch(t){case"keypress":if($a(n)===0)break e;case"keydown":case"keyup":P=mT;break;case"focusin":k="focus",P=nc;break;case"focusout":k="blur",P=nc;break;case"beforeblur":case"afterblur":P=nc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":P=$p;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":P=rT;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":P=_T;break;case t_:case n_:case r_:P=oT;break;case i_:P=ET;break;case"scroll":P=tT;break;case"wheel":P=TT;break;case"copy":case"cut":case"paste":P=lT;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":P=Hp}var D=(e&4)!==0,L=!D&&t==="scroll",S=D?y!==null?y+"Capture":null:y;D=[];for(var E=h,A;E!==null;){A=E;var O=A.stateNode;if(A.tag===5&&O!==null&&(A=O,S!==null&&(O=ao(E,S),O!=null&&D.push(mo(E,O,A)))),L)break;E=E.return}0<D.length&&(y=new P(y,k,null,n,f),g.push({event:y,listeners:D}))}}if(!(e&7)){e:{if(y=t==="mouseover"||t==="pointerover",P=t==="mouseout"||t==="pointerout",y&&n!==Wc&&(k=n.relatedTarget||n.fromElement)&&(Or(k)||k[kn]))break e;if((P||y)&&(y=f.window===f?f:(y=f.ownerDocument)?y.defaultView||y.parentWindow:window,P?(k=n.relatedTarget||n.toElement,P=h,k=k?Or(k):null,k!==null&&(L=Zr(k),k!==L||k.tag!==5&&k.tag!==6)&&(k=null)):(P=null,k=h),P!==k)){if(D=$p,O="onMouseLeave",S="onMouseEnter",E="mouse",(t==="pointerout"||t==="pointerover")&&(D=Hp,O="onPointerLeave",S="onPointerEnter",E="pointer"),L=P==null?y:vi(P),A=k==null?y:vi(k),y=new D(O,E+"leave",P,n,f),y.target=L,y.relatedTarget=A,O=null,Or(f)===h&&(D=new D(S,E+"enter",k,n,f),D.target=A,D.relatedTarget=L,O=D),L=O,P&&k)t:{for(D=P,S=k,E=0,A=D;A;A=ci(A))E++;for(A=0,O=S;O;O=ci(O))A++;for(;0<E-A;)D=ci(D),E--;for(;0<A-E;)S=ci(S),A--;for(;E--;){if(D===S||S!==null&&D===S.alternate)break t;D=ci(D),S=ci(S)}D=null}else D=null;P!==null&&nm(g,y,P,D,!1),k!==null&&L!==null&&nm(g,L,k,D,!0)}}e:{if(y=h?vi(h):window,P=y.nodeName&&y.nodeName.toLowerCase(),P==="select"||P==="input"&&y.type==="file")var j=kT;else if(Gp(y))if(Yy)j=VT;else{j=xT;var U=NT}else(P=y.nodeName)&&P.toLowerCase()==="input"&&(y.type==="checkbox"||y.type==="radio")&&(j=DT);if(j&&(j=j(t,h))){Qy(g,j,n,f);break e}U&&U(t,y,h),t==="focusout"&&(U=y._wrapperState)&&U.controlled&&y.type==="number"&&Uc(y,"number",y.value)}switch(U=h?vi(h):window,t){case"focusin":(Gp(U)||U.contentEditable==="true")&&(yi=U,Xc=h,Gs=null);break;case"focusout":Gs=Xc=yi=null;break;case"mousedown":Jc=!0;break;case"contextmenu":case"mouseup":case"dragend":Jc=!1,Zp(g,n,f);break;case"selectionchange":if(MT)break;case"keydown":case"keyup":Zp(g,n,f)}var _;if(fd)e:{switch(t){case"compositionstart":var m="onCompositionStart";break e;case"compositionend":m="onCompositionEnd";break e;case"compositionupdate":m="onCompositionUpdate";break e}m=void 0}else gi?Ky(t,n)&&(m="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(m="onCompositionStart");m&&(qy&&n.locale!=="ko"&&(gi||m!=="onCompositionStart"?m==="onCompositionEnd"&&gi&&(_=Hy()):(Zn=f,cd="value"in Zn?Zn.value:Zn.textContent,gi=!0)),U=fl(h,m),0<U.length&&(m=new Wp(m,t,null,n,f),g.push({event:m,listeners:U}),_?m.data=_:(_=Gy(n),_!==null&&(m.data=_)))),(_=ST?AT(t,n):RT(t,n))&&(h=fl(h,"onBeforeInput"),0<h.length&&(f=new Wp("onBeforeInput","beforeinput",null,n,f),g.push({event:f,listeners:h}),f.data=_))}o_(g,e)})}function mo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function fl(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=ao(t,n),s!=null&&r.unshift(mo(t,s,i)),s=ao(t,e),s!=null&&r.push(mo(t,s,i))),t=t.return}return r}function ci(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function nm(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,h=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&h!==null&&(l=h,i?(u=ao(n,s),u!=null&&o.unshift(mo(n,u,l))):i||(u=ao(n,s),u!=null&&o.push(mo(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var jT=/\r\n?/g,zT=/\u0000|\uFFFD/g;function rm(t){return(typeof t=="string"?t:""+t).replace(jT,`
`).replace(zT,"")}function Pa(t,e,n){if(e=rm(e),rm(t)!==e&&n)throw Error(F(425))}function pl(){}var Zc=null,eh=null;function th(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var nh=typeof setTimeout=="function"?setTimeout:void 0,BT=typeof clearTimeout=="function"?clearTimeout:void 0,im=typeof Promise=="function"?Promise:void 0,$T=typeof queueMicrotask=="function"?queueMicrotask:typeof im<"u"?function(t){return im.resolve(null).then(t).catch(WT)}:nh;function WT(t){setTimeout(function(){throw t})}function cc(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),co(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);co(e)}function sr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function sm(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var es=Math.random().toString(36).slice(2),rn="__reactFiber$"+es,go="__reactProps$"+es,kn="__reactContainer$"+es,rh="__reactEvents$"+es,HT="__reactListeners$"+es,qT="__reactHandles$"+es;function Or(t){var e=t[rn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[kn]||n[rn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=sm(t);t!==null;){if(n=t[rn])return n;t=sm(t)}return e}t=n,n=t.parentNode}return null}function Mo(t){return t=t[rn]||t[kn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function vi(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(F(33))}function Jl(t){return t[go]||null}var ih=[],Ei=-1;function Er(t){return{current:t}}function ve(t){0>Ei||(t.current=ih[Ei],ih[Ei]=null,Ei--)}function me(t,e){Ei++,ih[Ei]=t.current,t.current=e}var mr={},at=Er(mr),vt=Er(!1),zr=mr;function Fi(t,e){var n=t.type.contextTypes;if(!n)return mr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Et(t){return t=t.childContextTypes,t!=null}function ml(){ve(vt),ve(at)}function om(t,e,n){if(at.current!==mr)throw Error(F(168));me(at,e),me(vt,n)}function l_(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(F(108,N0(t)||"Unknown",i));return Re({},n,r)}function gl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||mr,zr=at.current,me(at,t),me(vt,vt.current),!0}function am(t,e,n){var r=t.stateNode;if(!r)throw Error(F(169));n?(t=l_(t,e,zr),r.__reactInternalMemoizedMergedChildContext=t,ve(vt),ve(at),me(at,t)):ve(vt),me(vt,n)}var _n=null,Zl=!1,hc=!1;function u_(t){_n===null?_n=[t]:_n.push(t)}function KT(t){Zl=!0,u_(t)}function wr(){if(!hc&&_n!==null){hc=!0;var t=0,e=he;try{var n=_n;for(he=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}_n=null,Zl=!1}catch(i){throw _n!==null&&(_n=_n.slice(t+1)),Oy(od,wr),i}finally{he=e,hc=!1}}return null}var wi=[],Ti=0,yl=null,_l=0,Vt=[],Ot=0,Br=null,En=1,wn="";function xr(t,e){wi[Ti++]=_l,wi[Ti++]=yl,yl=t,_l=e}function c_(t,e,n){Vt[Ot++]=En,Vt[Ot++]=wn,Vt[Ot++]=Br,Br=t;var r=En;t=wn;var i=32-qt(r)-1;r&=~(1<<i),n+=1;var s=32-qt(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,En=1<<32-qt(e)+i|n<<i|r,wn=s+t}else En=1<<s|n<<i|r,wn=t}function md(t){t.return!==null&&(xr(t,1),c_(t,1,0))}function gd(t){for(;t===yl;)yl=wi[--Ti],wi[Ti]=null,_l=wi[--Ti],wi[Ti]=null;for(;t===Br;)Br=Vt[--Ot],Vt[Ot]=null,wn=Vt[--Ot],Vt[Ot]=null,En=Vt[--Ot],Vt[Ot]=null}var Rt=null,St=null,Te=!1,Ht=null;function h_(t,e){var n=Lt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function lm(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Rt=t,St=sr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Rt=t,St=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Br!==null?{id:En,overflow:wn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Lt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Rt=t,St=null,!0):!1;default:return!1}}function sh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function oh(t){if(Te){var e=St;if(e){var n=e;if(!lm(t,e)){if(sh(t))throw Error(F(418));e=sr(n.nextSibling);var r=Rt;e&&lm(t,e)?h_(r,n):(t.flags=t.flags&-4097|2,Te=!1,Rt=t)}}else{if(sh(t))throw Error(F(418));t.flags=t.flags&-4097|2,Te=!1,Rt=t}}}function um(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Rt=t}function Ca(t){if(t!==Rt)return!1;if(!Te)return um(t),Te=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!th(t.type,t.memoizedProps)),e&&(e=St)){if(sh(t))throw d_(),Error(F(418));for(;e;)h_(t,e),e=sr(e.nextSibling)}if(um(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(F(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){St=sr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}St=null}}else St=Rt?sr(t.stateNode.nextSibling):null;return!0}function d_(){for(var t=St;t;)t=sr(t.nextSibling)}function Ui(){St=Rt=null,Te=!1}function yd(t){Ht===null?Ht=[t]:Ht.push(t)}var GT=Mn.ReactCurrentBatchConfig;function ks(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(F(309));var r=n.stateNode}if(!r)throw Error(F(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(F(284));if(!n._owner)throw Error(F(290,t))}return t}function ka(t,e){throw t=Object.prototype.toString.call(e),Error(F(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function cm(t){var e=t._init;return e(t._payload)}function f_(t){function e(S,E){if(t){var A=S.deletions;A===null?(S.deletions=[E],S.flags|=16):A.push(E)}}function n(S,E){if(!t)return null;for(;E!==null;)e(S,E),E=E.sibling;return null}function r(S,E){for(S=new Map;E!==null;)E.key!==null?S.set(E.key,E):S.set(E.index,E),E=E.sibling;return S}function i(S,E){return S=ur(S,E),S.index=0,S.sibling=null,S}function s(S,E,A){return S.index=A,t?(A=S.alternate,A!==null?(A=A.index,A<E?(S.flags|=2,E):A):(S.flags|=2,E)):(S.flags|=1048576,E)}function o(S){return t&&S.alternate===null&&(S.flags|=2),S}function l(S,E,A,O){return E===null||E.tag!==6?(E=_c(A,S.mode,O),E.return=S,E):(E=i(E,A),E.return=S,E)}function u(S,E,A,O){var j=A.type;return j===mi?f(S,E,A.props.children,O,A.key):E!==null&&(E.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===Hn&&cm(j)===E.type)?(O=i(E,A.props),O.ref=ks(S,E,A),O.return=S,O):(O=Ya(A.type,A.key,A.props,null,S.mode,O),O.ref=ks(S,E,A),O.return=S,O)}function h(S,E,A,O){return E===null||E.tag!==4||E.stateNode.containerInfo!==A.containerInfo||E.stateNode.implementation!==A.implementation?(E=vc(A,S.mode,O),E.return=S,E):(E=i(E,A.children||[]),E.return=S,E)}function f(S,E,A,O,j){return E===null||E.tag!==7?(E=Ur(A,S.mode,O,j),E.return=S,E):(E=i(E,A),E.return=S,E)}function g(S,E,A){if(typeof E=="string"&&E!==""||typeof E=="number")return E=_c(""+E,S.mode,A),E.return=S,E;if(typeof E=="object"&&E!==null){switch(E.$$typeof){case _a:return A=Ya(E.type,E.key,E.props,null,S.mode,A),A.ref=ks(S,null,E),A.return=S,A;case pi:return E=vc(E,S.mode,A),E.return=S,E;case Hn:var O=E._init;return g(S,O(E._payload),A)}if(Ls(E)||Ss(E))return E=Ur(E,S.mode,A,null),E.return=S,E;ka(S,E)}return null}function y(S,E,A,O){var j=E!==null?E.key:null;if(typeof A=="string"&&A!==""||typeof A=="number")return j!==null?null:l(S,E,""+A,O);if(typeof A=="object"&&A!==null){switch(A.$$typeof){case _a:return A.key===j?u(S,E,A,O):null;case pi:return A.key===j?h(S,E,A,O):null;case Hn:return j=A._init,y(S,E,j(A._payload),O)}if(Ls(A)||Ss(A))return j!==null?null:f(S,E,A,O,null);ka(S,A)}return null}function P(S,E,A,O,j){if(typeof O=="string"&&O!==""||typeof O=="number")return S=S.get(A)||null,l(E,S,""+O,j);if(typeof O=="object"&&O!==null){switch(O.$$typeof){case _a:return S=S.get(O.key===null?A:O.key)||null,u(E,S,O,j);case pi:return S=S.get(O.key===null?A:O.key)||null,h(E,S,O,j);case Hn:var U=O._init;return P(S,E,A,U(O._payload),j)}if(Ls(O)||Ss(O))return S=S.get(A)||null,f(E,S,O,j,null);ka(E,O)}return null}function k(S,E,A,O){for(var j=null,U=null,_=E,m=E=0,v=null;_!==null&&m<A.length;m++){_.index>m?(v=_,_=null):v=_.sibling;var w=y(S,_,A[m],O);if(w===null){_===null&&(_=v);break}t&&_&&w.alternate===null&&e(S,_),E=s(w,E,m),U===null?j=w:U.sibling=w,U=w,_=v}if(m===A.length)return n(S,_),Te&&xr(S,m),j;if(_===null){for(;m<A.length;m++)_=g(S,A[m],O),_!==null&&(E=s(_,E,m),U===null?j=_:U.sibling=_,U=_);return Te&&xr(S,m),j}for(_=r(S,_);m<A.length;m++)v=P(_,S,m,A[m],O),v!==null&&(t&&v.alternate!==null&&_.delete(v.key===null?m:v.key),E=s(v,E,m),U===null?j=v:U.sibling=v,U=v);return t&&_.forEach(function(R){return e(S,R)}),Te&&xr(S,m),j}function D(S,E,A,O){var j=Ss(A);if(typeof j!="function")throw Error(F(150));if(A=j.call(A),A==null)throw Error(F(151));for(var U=j=null,_=E,m=E=0,v=null,w=A.next();_!==null&&!w.done;m++,w=A.next()){_.index>m?(v=_,_=null):v=_.sibling;var R=y(S,_,w.value,O);if(R===null){_===null&&(_=v);break}t&&_&&R.alternate===null&&e(S,_),E=s(R,E,m),U===null?j=R:U.sibling=R,U=R,_=v}if(w.done)return n(S,_),Te&&xr(S,m),j;if(_===null){for(;!w.done;m++,w=A.next())w=g(S,w.value,O),w!==null&&(E=s(w,E,m),U===null?j=w:U.sibling=w,U=w);return Te&&xr(S,m),j}for(_=r(S,_);!w.done;m++,w=A.next())w=P(_,S,m,w.value,O),w!==null&&(t&&w.alternate!==null&&_.delete(w.key===null?m:w.key),E=s(w,E,m),U===null?j=w:U.sibling=w,U=w);return t&&_.forEach(function(C){return e(S,C)}),Te&&xr(S,m),j}function L(S,E,A,O){if(typeof A=="object"&&A!==null&&A.type===mi&&A.key===null&&(A=A.props.children),typeof A=="object"&&A!==null){switch(A.$$typeof){case _a:e:{for(var j=A.key,U=E;U!==null;){if(U.key===j){if(j=A.type,j===mi){if(U.tag===7){n(S,U.sibling),E=i(U,A.props.children),E.return=S,S=E;break e}}else if(U.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===Hn&&cm(j)===U.type){n(S,U.sibling),E=i(U,A.props),E.ref=ks(S,U,A),E.return=S,S=E;break e}n(S,U);break}else e(S,U);U=U.sibling}A.type===mi?(E=Ur(A.props.children,S.mode,O,A.key),E.return=S,S=E):(O=Ya(A.type,A.key,A.props,null,S.mode,O),O.ref=ks(S,E,A),O.return=S,S=O)}return o(S);case pi:e:{for(U=A.key;E!==null;){if(E.key===U)if(E.tag===4&&E.stateNode.containerInfo===A.containerInfo&&E.stateNode.implementation===A.implementation){n(S,E.sibling),E=i(E,A.children||[]),E.return=S,S=E;break e}else{n(S,E);break}else e(S,E);E=E.sibling}E=vc(A,S.mode,O),E.return=S,S=E}return o(S);case Hn:return U=A._init,L(S,E,U(A._payload),O)}if(Ls(A))return k(S,E,A,O);if(Ss(A))return D(S,E,A,O);ka(S,A)}return typeof A=="string"&&A!==""||typeof A=="number"?(A=""+A,E!==null&&E.tag===6?(n(S,E.sibling),E=i(E,A),E.return=S,S=E):(n(S,E),E=_c(A,S.mode,O),E.return=S,S=E),o(S)):n(S,E)}return L}var ji=f_(!0),p_=f_(!1),vl=Er(null),El=null,Ii=null,_d=null;function vd(){_d=Ii=El=null}function Ed(t){var e=vl.current;ve(vl),t._currentValue=e}function ah(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function xi(t,e){El=t,_d=Ii=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(_t=!0),t.firstContext=null)}function Ft(t){var e=t._currentValue;if(_d!==t)if(t={context:t,memoizedValue:e,next:null},Ii===null){if(El===null)throw Error(F(308));Ii=t,El.dependencies={lanes:0,firstContext:t}}else Ii=Ii.next=t;return e}var Lr=null;function wd(t){Lr===null?Lr=[t]:Lr.push(t)}function m_(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,wd(e)):(n.next=i.next,i.next=n),e.interleaved=n,Nn(t,r)}function Nn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var qn=!1;function Td(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function g_(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function An(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function or(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ae&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Nn(t,n)}return i=r.interleaved,i===null?(e.next=e,wd(r)):(e.next=i.next,i.next=e),r.interleaved=e,Nn(t,n)}function Wa(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,ad(t,n)}}function hm(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function wl(t,e,n,r){var i=t.updateQueue;qn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,h=u.next;u.next=null,o===null?s=h:o.next=h,o=u;var f=t.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==o&&(l===null?f.firstBaseUpdate=h:l.next=h,f.lastBaseUpdate=u))}if(s!==null){var g=i.baseState;o=0,f=h=u=null,l=s;do{var y=l.lane,P=l.eventTime;if((r&y)===y){f!==null&&(f=f.next={eventTime:P,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var k=t,D=l;switch(y=e,P=n,D.tag){case 1:if(k=D.payload,typeof k=="function"){g=k.call(P,g,y);break e}g=k;break e;case 3:k.flags=k.flags&-65537|128;case 0:if(k=D.payload,y=typeof k=="function"?k.call(P,g,y):k,y==null)break e;g=Re({},g,y);break e;case 2:qn=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,y=i.effects,y===null?i.effects=[l]:y.push(l))}else P={eventTime:P,lane:y,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(h=f=P,u=g):f=f.next=P,o|=y;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;y=l,l=y.next,y.next=null,i.lastBaseUpdate=y,i.shared.pending=null}}while(!0);if(f===null&&(u=g),i.baseState=u,i.firstBaseUpdate=h,i.lastBaseUpdate=f,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Wr|=o,t.lanes=o,t.memoizedState=g}}function dm(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(F(191,i));i.call(r)}}}var bo={},an=Er(bo),yo=Er(bo),_o=Er(bo);function Mr(t){if(t===bo)throw Error(F(174));return t}function Id(t,e){switch(me(_o,e),me(yo,t),me(an,bo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:zc(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=zc(e,t)}ve(an),me(an,e)}function zi(){ve(an),ve(yo),ve(_o)}function y_(t){Mr(_o.current);var e=Mr(an.current),n=zc(e,t.type);e!==n&&(me(yo,t),me(an,n))}function Sd(t){yo.current===t&&(ve(an),ve(yo))}var Se=Er(0);function Tl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var dc=[];function Ad(){for(var t=0;t<dc.length;t++)dc[t]._workInProgressVersionPrimary=null;dc.length=0}var Ha=Mn.ReactCurrentDispatcher,fc=Mn.ReactCurrentBatchConfig,$r=0,Ae=null,Me=null,Be=null,Il=!1,Qs=!1,vo=0,QT=0;function tt(){throw Error(F(321))}function Rd(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Gt(t[n],e[n]))return!1;return!0}function Pd(t,e,n,r,i,s){if($r=s,Ae=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ha.current=t===null||t.memoizedState===null?ZT:eI,t=n(r,i),Qs){s=0;do{if(Qs=!1,vo=0,25<=s)throw Error(F(301));s+=1,Be=Me=null,e.updateQueue=null,Ha.current=tI,t=n(r,i)}while(Qs)}if(Ha.current=Sl,e=Me!==null&&Me.next!==null,$r=0,Be=Me=Ae=null,Il=!1,e)throw Error(F(300));return t}function Cd(){var t=vo!==0;return vo=0,t}function tn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Be===null?Ae.memoizedState=Be=t:Be=Be.next=t,Be}function Ut(){if(Me===null){var t=Ae.alternate;t=t!==null?t.memoizedState:null}else t=Me.next;var e=Be===null?Ae.memoizedState:Be.next;if(e!==null)Be=e,Me=t;else{if(t===null)throw Error(F(310));Me=t,t={memoizedState:Me.memoizedState,baseState:Me.baseState,baseQueue:Me.baseQueue,queue:Me.queue,next:null},Be===null?Ae.memoizedState=Be=t:Be=Be.next=t}return Be}function Eo(t,e){return typeof e=="function"?e(t):e}function pc(t){var e=Ut(),n=e.queue;if(n===null)throw Error(F(311));n.lastRenderedReducer=t;var r=Me,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,u=null,h=s;do{var f=h.lane;if(($r&f)===f)u!==null&&(u=u.next={lane:0,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null}),r=h.hasEagerState?h.eagerState:t(r,h.action);else{var g={lane:f,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null};u===null?(l=u=g,o=r):u=u.next=g,Ae.lanes|=f,Wr|=f}h=h.next}while(h!==null&&h!==s);u===null?o=r:u.next=l,Gt(r,e.memoizedState)||(_t=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Ae.lanes|=s,Wr|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function mc(t){var e=Ut(),n=e.queue;if(n===null)throw Error(F(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Gt(s,e.memoizedState)||(_t=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function __(){}function v_(t,e){var n=Ae,r=Ut(),i=e(),s=!Gt(r.memoizedState,i);if(s&&(r.memoizedState=i,_t=!0),r=r.queue,kd(T_.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Be!==null&&Be.memoizedState.tag&1){if(n.flags|=2048,wo(9,w_.bind(null,n,r,i,e),void 0,null),$e===null)throw Error(F(349));$r&30||E_(n,e,i)}return i}function E_(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Ae.updateQueue,e===null?(e={lastEffect:null,stores:null},Ae.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function w_(t,e,n,r){e.value=n,e.getSnapshot=r,I_(e)&&S_(t)}function T_(t,e,n){return n(function(){I_(e)&&S_(t)})}function I_(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Gt(t,n)}catch{return!0}}function S_(t){var e=Nn(t,1);e!==null&&Kt(e,t,1,-1)}function fm(t){var e=tn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Eo,lastRenderedState:t},e.queue=t,t=t.dispatch=JT.bind(null,Ae,t),[e.memoizedState,t]}function wo(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Ae.updateQueue,e===null?(e={lastEffect:null,stores:null},Ae.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function A_(){return Ut().memoizedState}function qa(t,e,n,r){var i=tn();Ae.flags|=t,i.memoizedState=wo(1|e,n,void 0,r===void 0?null:r)}function eu(t,e,n,r){var i=Ut();r=r===void 0?null:r;var s=void 0;if(Me!==null){var o=Me.memoizedState;if(s=o.destroy,r!==null&&Rd(r,o.deps)){i.memoizedState=wo(e,n,s,r);return}}Ae.flags|=t,i.memoizedState=wo(1|e,n,s,r)}function pm(t,e){return qa(8390656,8,t,e)}function kd(t,e){return eu(2048,8,t,e)}function R_(t,e){return eu(4,2,t,e)}function P_(t,e){return eu(4,4,t,e)}function C_(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function k_(t,e,n){return n=n!=null?n.concat([t]):null,eu(4,4,C_.bind(null,e,t),n)}function Nd(){}function N_(t,e){var n=Ut();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Rd(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function x_(t,e){var n=Ut();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Rd(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function D_(t,e,n){return $r&21?(Gt(n,e)||(n=by(),Ae.lanes|=n,Wr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,_t=!0),t.memoizedState=n)}function YT(t,e){var n=he;he=n!==0&&4>n?n:4,t(!0);var r=fc.transition;fc.transition={};try{t(!1),e()}finally{he=n,fc.transition=r}}function V_(){return Ut().memoizedState}function XT(t,e,n){var r=lr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},O_(t))L_(e,n);else if(n=m_(t,e,n,r),n!==null){var i=ht();Kt(n,t,r,i),M_(n,e,r)}}function JT(t,e,n){var r=lr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(O_(t))L_(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,Gt(l,o)){var u=e.interleaved;u===null?(i.next=i,wd(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=m_(t,e,i,r),n!==null&&(i=ht(),Kt(n,t,r,i),M_(n,e,r))}}function O_(t){var e=t.alternate;return t===Ae||e!==null&&e===Ae}function L_(t,e){Qs=Il=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function M_(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,ad(t,n)}}var Sl={readContext:Ft,useCallback:tt,useContext:tt,useEffect:tt,useImperativeHandle:tt,useInsertionEffect:tt,useLayoutEffect:tt,useMemo:tt,useReducer:tt,useRef:tt,useState:tt,useDebugValue:tt,useDeferredValue:tt,useTransition:tt,useMutableSource:tt,useSyncExternalStore:tt,useId:tt,unstable_isNewReconciler:!1},ZT={readContext:Ft,useCallback:function(t,e){return tn().memoizedState=[t,e===void 0?null:e],t},useContext:Ft,useEffect:pm,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,qa(4194308,4,C_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return qa(4194308,4,t,e)},useInsertionEffect:function(t,e){return qa(4,2,t,e)},useMemo:function(t,e){var n=tn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=tn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=XT.bind(null,Ae,t),[r.memoizedState,t]},useRef:function(t){var e=tn();return t={current:t},e.memoizedState=t},useState:fm,useDebugValue:Nd,useDeferredValue:function(t){return tn().memoizedState=t},useTransition:function(){var t=fm(!1),e=t[0];return t=YT.bind(null,t[1]),tn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Ae,i=tn();if(Te){if(n===void 0)throw Error(F(407));n=n()}else{if(n=e(),$e===null)throw Error(F(349));$r&30||E_(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,pm(T_.bind(null,r,s,t),[t]),r.flags|=2048,wo(9,w_.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=tn(),e=$e.identifierPrefix;if(Te){var n=wn,r=En;n=(r&~(1<<32-qt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=vo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=QT++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},eI={readContext:Ft,useCallback:N_,useContext:Ft,useEffect:kd,useImperativeHandle:k_,useInsertionEffect:R_,useLayoutEffect:P_,useMemo:x_,useReducer:pc,useRef:A_,useState:function(){return pc(Eo)},useDebugValue:Nd,useDeferredValue:function(t){var e=Ut();return D_(e,Me.memoizedState,t)},useTransition:function(){var t=pc(Eo)[0],e=Ut().memoizedState;return[t,e]},useMutableSource:__,useSyncExternalStore:v_,useId:V_,unstable_isNewReconciler:!1},tI={readContext:Ft,useCallback:N_,useContext:Ft,useEffect:kd,useImperativeHandle:k_,useInsertionEffect:R_,useLayoutEffect:P_,useMemo:x_,useReducer:mc,useRef:A_,useState:function(){return mc(Eo)},useDebugValue:Nd,useDeferredValue:function(t){var e=Ut();return Me===null?e.memoizedState=t:D_(e,Me.memoizedState,t)},useTransition:function(){var t=mc(Eo)[0],e=Ut().memoizedState;return[t,e]},useMutableSource:__,useSyncExternalStore:v_,useId:V_,unstable_isNewReconciler:!1};function $t(t,e){if(t&&t.defaultProps){e=Re({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function lh(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Re({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var tu={isMounted:function(t){return(t=t._reactInternals)?Zr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=ht(),i=lr(t),s=An(r,i);s.payload=e,n!=null&&(s.callback=n),e=or(t,s,i),e!==null&&(Kt(e,t,i,r),Wa(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=ht(),i=lr(t),s=An(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=or(t,s,i),e!==null&&(Kt(e,t,i,r),Wa(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=ht(),r=lr(t),i=An(n,r);i.tag=2,e!=null&&(i.callback=e),e=or(t,i,r),e!==null&&(Kt(e,t,r,n),Wa(e,t,r))}};function mm(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!fo(n,r)||!fo(i,s):!0}function b_(t,e,n){var r=!1,i=mr,s=e.contextType;return typeof s=="object"&&s!==null?s=Ft(s):(i=Et(e)?zr:at.current,r=e.contextTypes,s=(r=r!=null)?Fi(t,i):mr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=tu,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function gm(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&tu.enqueueReplaceState(e,e.state,null)}function uh(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},Td(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Ft(s):(s=Et(e)?zr:at.current,i.context=Fi(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(lh(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&tu.enqueueReplaceState(i,i.state,null),wl(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Bi(t,e){try{var n="",r=e;do n+=k0(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function gc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function ch(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var nI=typeof WeakMap=="function"?WeakMap:Map;function F_(t,e,n){n=An(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Rl||(Rl=!0,Eh=r),ch(t,e)},n}function U_(t,e,n){n=An(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){ch(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){ch(t,e),typeof r!="function"&&(ar===null?ar=new Set([this]):ar.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function ym(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new nI;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=gI.bind(null,t,e,n),e.then(t,t))}function _m(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function vm(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=An(-1,1),e.tag=2,or(n,e,1))),n.lanes|=1),t)}var rI=Mn.ReactCurrentOwner,_t=!1;function ct(t,e,n,r){e.child=t===null?p_(e,null,n,r):ji(e,t.child,n,r)}function Em(t,e,n,r,i){n=n.render;var s=e.ref;return xi(e,i),r=Pd(t,e,n,r,s,i),n=Cd(),t!==null&&!_t?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,xn(t,e,i)):(Te&&n&&md(e),e.flags|=1,ct(t,e,r,i),e.child)}function wm(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Fd(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,j_(t,e,s,r,i)):(t=Ya(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:fo,n(o,r)&&t.ref===e.ref)return xn(t,e,i)}return e.flags|=1,t=ur(s,r),t.ref=e.ref,t.return=e,e.child=t}function j_(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(fo(s,r)&&t.ref===e.ref)if(_t=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(_t=!0);else return e.lanes=t.lanes,xn(t,e,i)}return hh(t,e,n,r,i)}function z_(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},me(Ai,It),It|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,me(Ai,It),It|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,me(Ai,It),It|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,me(Ai,It),It|=r;return ct(t,e,i,n),e.child}function B_(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function hh(t,e,n,r,i){var s=Et(n)?zr:at.current;return s=Fi(e,s),xi(e,i),n=Pd(t,e,n,r,s,i),r=Cd(),t!==null&&!_t?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,xn(t,e,i)):(Te&&r&&md(e),e.flags|=1,ct(t,e,n,i),e.child)}function Tm(t,e,n,r,i){if(Et(n)){var s=!0;gl(e)}else s=!1;if(xi(e,i),e.stateNode===null)Ka(t,e),b_(e,n,r),uh(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,h=n.contextType;typeof h=="object"&&h!==null?h=Ft(h):(h=Et(n)?zr:at.current,h=Fi(e,h));var f=n.getDerivedStateFromProps,g=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";g||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==h)&&gm(e,o,r,h),qn=!1;var y=e.memoizedState;o.state=y,wl(e,r,o,i),u=e.memoizedState,l!==r||y!==u||vt.current||qn?(typeof f=="function"&&(lh(e,n,f,r),u=e.memoizedState),(l=qn||mm(e,n,l,r,y,u,h))?(g||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=h,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,g_(t,e),l=e.memoizedProps,h=e.type===e.elementType?l:$t(e.type,l),o.props=h,g=e.pendingProps,y=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=Ft(u):(u=Et(n)?zr:at.current,u=Fi(e,u));var P=n.getDerivedStateFromProps;(f=typeof P=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==g||y!==u)&&gm(e,o,r,u),qn=!1,y=e.memoizedState,o.state=y,wl(e,r,o,i);var k=e.memoizedState;l!==g||y!==k||vt.current||qn?(typeof P=="function"&&(lh(e,n,P,r),k=e.memoizedState),(h=qn||mm(e,n,h,r,y,k,u)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,k,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,k,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&y===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&y===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=k),o.props=r,o.state=k,o.context=u,r=h):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&y===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&y===t.memoizedState||(e.flags|=1024),r=!1)}return dh(t,e,n,r,s,i)}function dh(t,e,n,r,i,s){B_(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&am(e,n,!1),xn(t,e,s);r=e.stateNode,rI.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=ji(e,t.child,null,s),e.child=ji(e,null,l,s)):ct(t,e,l,s),e.memoizedState=r.state,i&&am(e,n,!0),e.child}function $_(t){var e=t.stateNode;e.pendingContext?om(t,e.pendingContext,e.pendingContext!==e.context):e.context&&om(t,e.context,!1),Id(t,e.containerInfo)}function Im(t,e,n,r,i){return Ui(),yd(i),e.flags|=256,ct(t,e,n,r),e.child}var fh={dehydrated:null,treeContext:null,retryLane:0};function ph(t){return{baseLanes:t,cachePool:null,transitions:null}}function W_(t,e,n){var r=e.pendingProps,i=Se.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),me(Se,i&1),t===null)return oh(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=iu(o,r,0,null),t=Ur(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=ph(n),e.memoizedState=fh,t):xd(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return iI(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=ur(i,u),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=ur(l,s):(s=Ur(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?ph(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=fh,r}return s=t.child,t=s.sibling,r=ur(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function xd(t,e){return e=iu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Na(t,e,n,r){return r!==null&&yd(r),ji(e,t.child,null,n),t=xd(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function iI(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=gc(Error(F(422))),Na(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=iu({mode:"visible",children:r.children},i,0,null),s=Ur(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&ji(e,t.child,null,o),e.child.memoizedState=ph(o),e.memoizedState=fh,s);if(!(e.mode&1))return Na(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(F(419)),r=gc(s,r,void 0),Na(t,e,o,r)}if(l=(o&t.childLanes)!==0,_t||l){if(r=$e,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Nn(t,i),Kt(r,t,i,-1))}return bd(),r=gc(Error(F(421))),Na(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=yI.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,St=sr(i.nextSibling),Rt=e,Te=!0,Ht=null,t!==null&&(Vt[Ot++]=En,Vt[Ot++]=wn,Vt[Ot++]=Br,En=t.id,wn=t.overflow,Br=e),e=xd(e,r.children),e.flags|=4096,e)}function Sm(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),ah(t.return,e,n)}function yc(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function H_(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(ct(t,e,r.children,n),r=Se.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Sm(t,n,e);else if(t.tag===19)Sm(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(me(Se,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Tl(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),yc(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Tl(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}yc(e,!0,n,null,s);break;case"together":yc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ka(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function xn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Wr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(F(153));if(e.child!==null){for(t=e.child,n=ur(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=ur(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function sI(t,e,n){switch(e.tag){case 3:$_(e),Ui();break;case 5:y_(e);break;case 1:Et(e.type)&&gl(e);break;case 4:Id(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;me(vl,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(me(Se,Se.current&1),e.flags|=128,null):n&e.child.childLanes?W_(t,e,n):(me(Se,Se.current&1),t=xn(t,e,n),t!==null?t.sibling:null);me(Se,Se.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return H_(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),me(Se,Se.current),r)break;return null;case 22:case 23:return e.lanes=0,z_(t,e,n)}return xn(t,e,n)}var q_,mh,K_,G_;q_=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};mh=function(){};K_=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Mr(an.current);var s=null;switch(n){case"input":i=bc(t,i),r=bc(t,r),s=[];break;case"select":i=Re({},i,{value:void 0}),r=Re({},r,{value:void 0}),s=[];break;case"textarea":i=jc(t,i),r=jc(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=pl)}Bc(n,r);var o;n=null;for(h in i)if(!r.hasOwnProperty(h)&&i.hasOwnProperty(h)&&i[h]!=null)if(h==="style"){var l=i[h];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else h!=="dangerouslySetInnerHTML"&&h!=="children"&&h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(so.hasOwnProperty(h)?s||(s=[]):(s=s||[]).push(h,null));for(h in r){var u=r[h];if(l=i!=null?i[h]:void 0,r.hasOwnProperty(h)&&u!==l&&(u!=null||l!=null))if(h==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(h,n)),n=u;else h==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(s=s||[]).push(h,u)):h==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(h,""+u):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&(so.hasOwnProperty(h)?(u!=null&&h==="onScroll"&&ye("scroll",t),s||l===u||(s=[])):(s=s||[]).push(h,u))}n&&(s=s||[]).push("style",n);var h=s;(e.updateQueue=h)&&(e.flags|=4)}};G_=function(t,e,n,r){n!==r&&(e.flags|=4)};function Ns(t,e){if(!Te)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function nt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function oI(t,e,n){var r=e.pendingProps;switch(gd(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return nt(e),null;case 1:return Et(e.type)&&ml(),nt(e),null;case 3:return r=e.stateNode,zi(),ve(vt),ve(at),Ad(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Ca(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Ht!==null&&(Ih(Ht),Ht=null))),mh(t,e),nt(e),null;case 5:Sd(e);var i=Mr(_o.current);if(n=e.type,t!==null&&e.stateNode!=null)K_(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(F(166));return nt(e),null}if(t=Mr(an.current),Ca(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[rn]=e,r[go]=s,t=(e.mode&1)!==0,n){case"dialog":ye("cancel",r),ye("close",r);break;case"iframe":case"object":case"embed":ye("load",r);break;case"video":case"audio":for(i=0;i<bs.length;i++)ye(bs[i],r);break;case"source":ye("error",r);break;case"img":case"image":case"link":ye("error",r),ye("load",r);break;case"details":ye("toggle",r);break;case"input":Vp(r,s),ye("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},ye("invalid",r);break;case"textarea":Lp(r,s),ye("invalid",r)}Bc(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&Pa(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&Pa(r.textContent,l,t),i=["children",""+l]):so.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&ye("scroll",r)}switch(n){case"input":va(r),Op(r,s,!0);break;case"textarea":va(r),Mp(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=pl)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Ty(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[rn]=e,t[go]=r,q_(t,e,!1,!1),e.stateNode=t;e:{switch(o=$c(n,r),n){case"dialog":ye("cancel",t),ye("close",t),i=r;break;case"iframe":case"object":case"embed":ye("load",t),i=r;break;case"video":case"audio":for(i=0;i<bs.length;i++)ye(bs[i],t);i=r;break;case"source":ye("error",t),i=r;break;case"img":case"image":case"link":ye("error",t),ye("load",t),i=r;break;case"details":ye("toggle",t),i=r;break;case"input":Vp(t,r),i=bc(t,r),ye("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Re({},r,{value:void 0}),ye("invalid",t);break;case"textarea":Lp(t,r),i=jc(t,r),ye("invalid",t);break;default:i=r}Bc(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var u=l[s];s==="style"?Ay(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Iy(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&oo(t,u):typeof u=="number"&&oo(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(so.hasOwnProperty(s)?u!=null&&s==="onScroll"&&ye("scroll",t):u!=null&&td(t,s,u,o))}switch(n){case"input":va(t),Op(t,r,!1);break;case"textarea":va(t),Mp(t);break;case"option":r.value!=null&&t.setAttribute("value",""+pr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Pi(t,!!r.multiple,s,!1):r.defaultValue!=null&&Pi(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=pl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return nt(e),null;case 6:if(t&&e.stateNode!=null)G_(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(F(166));if(n=Mr(_o.current),Mr(an.current),Ca(e)){if(r=e.stateNode,n=e.memoizedProps,r[rn]=e,(s=r.nodeValue!==n)&&(t=Rt,t!==null))switch(t.tag){case 3:Pa(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Pa(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[rn]=e,e.stateNode=r}return nt(e),null;case 13:if(ve(Se),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Te&&St!==null&&e.mode&1&&!(e.flags&128))d_(),Ui(),e.flags|=98560,s=!1;else if(s=Ca(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(F(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(F(317));s[rn]=e}else Ui(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;nt(e),s=!1}else Ht!==null&&(Ih(Ht),Ht=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Se.current&1?be===0&&(be=3):bd())),e.updateQueue!==null&&(e.flags|=4),nt(e),null);case 4:return zi(),mh(t,e),t===null&&po(e.stateNode.containerInfo),nt(e),null;case 10:return Ed(e.type._context),nt(e),null;case 17:return Et(e.type)&&ml(),nt(e),null;case 19:if(ve(Se),s=e.memoizedState,s===null)return nt(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Ns(s,!1);else{if(be!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Tl(t),o!==null){for(e.flags|=128,Ns(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return me(Se,Se.current&1|2),e.child}t=t.sibling}s.tail!==null&&xe()>$i&&(e.flags|=128,r=!0,Ns(s,!1),e.lanes=4194304)}else{if(!r)if(t=Tl(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ns(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Te)return nt(e),null}else 2*xe()-s.renderingStartTime>$i&&n!==1073741824&&(e.flags|=128,r=!0,Ns(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=xe(),e.sibling=null,n=Se.current,me(Se,r?n&1|2:n&1),e):(nt(e),null);case 22:case 23:return Md(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?It&1073741824&&(nt(e),e.subtreeFlags&6&&(e.flags|=8192)):nt(e),null;case 24:return null;case 25:return null}throw Error(F(156,e.tag))}function aI(t,e){switch(gd(e),e.tag){case 1:return Et(e.type)&&ml(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return zi(),ve(vt),ve(at),Ad(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Sd(e),null;case 13:if(ve(Se),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(F(340));Ui()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ve(Se),null;case 4:return zi(),null;case 10:return Ed(e.type._context),null;case 22:case 23:return Md(),null;case 24:return null;default:return null}}var xa=!1,st=!1,lI=typeof WeakSet=="function"?WeakSet:Set,$=null;function Si(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ke(t,e,r)}else n.current=null}function gh(t,e,n){try{n()}catch(r){ke(t,e,r)}}var Am=!1;function uI(t,e){if(Zc=hl,t=Zy(),pd(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,h=0,f=0,g=t,y=null;t:for(;;){for(var P;g!==n||i!==0&&g.nodeType!==3||(l=o+i),g!==s||r!==0&&g.nodeType!==3||(u=o+r),g.nodeType===3&&(o+=g.nodeValue.length),(P=g.firstChild)!==null;)y=g,g=P;for(;;){if(g===t)break t;if(y===n&&++h===i&&(l=o),y===s&&++f===r&&(u=o),(P=g.nextSibling)!==null)break;g=y,y=g.parentNode}g=P}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(eh={focusedElem:t,selectionRange:n},hl=!1,$=e;$!==null;)if(e=$,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,$=t;else for(;$!==null;){e=$;try{var k=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(k!==null){var D=k.memoizedProps,L=k.memoizedState,S=e.stateNode,E=S.getSnapshotBeforeUpdate(e.elementType===e.type?D:$t(e.type,D),L);S.__reactInternalSnapshotBeforeUpdate=E}break;case 3:var A=e.stateNode.containerInfo;A.nodeType===1?A.textContent="":A.nodeType===9&&A.documentElement&&A.removeChild(A.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(F(163))}}catch(O){ke(e,e.return,O)}if(t=e.sibling,t!==null){t.return=e.return,$=t;break}$=e.return}return k=Am,Am=!1,k}function Ys(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&gh(e,n,s)}i=i.next}while(i!==r)}}function nu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function yh(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Q_(t){var e=t.alternate;e!==null&&(t.alternate=null,Q_(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[rn],delete e[go],delete e[rh],delete e[HT],delete e[qT])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Y_(t){return t.tag===5||t.tag===3||t.tag===4}function Rm(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Y_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function _h(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=pl));else if(r!==4&&(t=t.child,t!==null))for(_h(t,e,n),t=t.sibling;t!==null;)_h(t,e,n),t=t.sibling}function vh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(vh(t,e,n),t=t.sibling;t!==null;)vh(t,e,n),t=t.sibling}var qe=null,Wt=!1;function $n(t,e,n){for(n=n.child;n!==null;)X_(t,e,n),n=n.sibling}function X_(t,e,n){if(on&&typeof on.onCommitFiberUnmount=="function")try{on.onCommitFiberUnmount(Gl,n)}catch{}switch(n.tag){case 5:st||Si(n,e);case 6:var r=qe,i=Wt;qe=null,$n(t,e,n),qe=r,Wt=i,qe!==null&&(Wt?(t=qe,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):qe.removeChild(n.stateNode));break;case 18:qe!==null&&(Wt?(t=qe,n=n.stateNode,t.nodeType===8?cc(t.parentNode,n):t.nodeType===1&&cc(t,n),co(t)):cc(qe,n.stateNode));break;case 4:r=qe,i=Wt,qe=n.stateNode.containerInfo,Wt=!0,$n(t,e,n),qe=r,Wt=i;break;case 0:case 11:case 14:case 15:if(!st&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&gh(n,e,o),i=i.next}while(i!==r)}$n(t,e,n);break;case 1:if(!st&&(Si(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){ke(n,e,l)}$n(t,e,n);break;case 21:$n(t,e,n);break;case 22:n.mode&1?(st=(r=st)||n.memoizedState!==null,$n(t,e,n),st=r):$n(t,e,n);break;default:$n(t,e,n)}}function Pm(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new lI),e.forEach(function(r){var i=_I.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Bt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:qe=l.stateNode,Wt=!1;break e;case 3:qe=l.stateNode.containerInfo,Wt=!0;break e;case 4:qe=l.stateNode.containerInfo,Wt=!0;break e}l=l.return}if(qe===null)throw Error(F(160));X_(s,o,i),qe=null,Wt=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(h){ke(i,e,h)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)J_(e,t),e=e.sibling}function J_(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Bt(e,t),en(t),r&4){try{Ys(3,t,t.return),nu(3,t)}catch(D){ke(t,t.return,D)}try{Ys(5,t,t.return)}catch(D){ke(t,t.return,D)}}break;case 1:Bt(e,t),en(t),r&512&&n!==null&&Si(n,n.return);break;case 5:if(Bt(e,t),en(t),r&512&&n!==null&&Si(n,n.return),t.flags&32){var i=t.stateNode;try{oo(i,"")}catch(D){ke(t,t.return,D)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&Ey(i,s),$c(l,o);var h=$c(l,s);for(o=0;o<u.length;o+=2){var f=u[o],g=u[o+1];f==="style"?Ay(i,g):f==="dangerouslySetInnerHTML"?Iy(i,g):f==="children"?oo(i,g):td(i,f,g,h)}switch(l){case"input":Fc(i,s);break;case"textarea":wy(i,s);break;case"select":var y=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var P=s.value;P!=null?Pi(i,!!s.multiple,P,!1):y!==!!s.multiple&&(s.defaultValue!=null?Pi(i,!!s.multiple,s.defaultValue,!0):Pi(i,!!s.multiple,s.multiple?[]:"",!1))}i[go]=s}catch(D){ke(t,t.return,D)}}break;case 6:if(Bt(e,t),en(t),r&4){if(t.stateNode===null)throw Error(F(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(D){ke(t,t.return,D)}}break;case 3:if(Bt(e,t),en(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{co(e.containerInfo)}catch(D){ke(t,t.return,D)}break;case 4:Bt(e,t),en(t);break;case 13:Bt(e,t),en(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Od=xe())),r&4&&Pm(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(st=(h=st)||f,Bt(e,t),st=h):Bt(e,t),en(t),r&8192){if(h=t.memoizedState!==null,(t.stateNode.isHidden=h)&&!f&&t.mode&1)for($=t,f=t.child;f!==null;){for(g=$=f;$!==null;){switch(y=$,P=y.child,y.tag){case 0:case 11:case 14:case 15:Ys(4,y,y.return);break;case 1:Si(y,y.return);var k=y.stateNode;if(typeof k.componentWillUnmount=="function"){r=y,n=y.return;try{e=r,k.props=e.memoizedProps,k.state=e.memoizedState,k.componentWillUnmount()}catch(D){ke(r,n,D)}}break;case 5:Si(y,y.return);break;case 22:if(y.memoizedState!==null){km(g);continue}}P!==null?(P.return=y,$=P):km(g)}f=f.sibling}e:for(f=null,g=t;;){if(g.tag===5){if(f===null){f=g;try{i=g.stateNode,h?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=g.stateNode,u=g.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=Sy("display",o))}catch(D){ke(t,t.return,D)}}}else if(g.tag===6){if(f===null)try{g.stateNode.nodeValue=h?"":g.memoizedProps}catch(D){ke(t,t.return,D)}}else if((g.tag!==22&&g.tag!==23||g.memoizedState===null||g===t)&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===t)break e;for(;g.sibling===null;){if(g.return===null||g.return===t)break e;f===g&&(f=null),g=g.return}f===g&&(f=null),g.sibling.return=g.return,g=g.sibling}}break;case 19:Bt(e,t),en(t),r&4&&Pm(t);break;case 21:break;default:Bt(e,t),en(t)}}function en(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Y_(n)){var r=n;break e}n=n.return}throw Error(F(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(oo(i,""),r.flags&=-33);var s=Rm(t);vh(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=Rm(t);_h(t,l,o);break;default:throw Error(F(161))}}catch(u){ke(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function cI(t,e,n){$=t,Z_(t)}function Z_(t,e,n){for(var r=(t.mode&1)!==0;$!==null;){var i=$,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||xa;if(!o){var l=i.alternate,u=l!==null&&l.memoizedState!==null||st;l=xa;var h=st;if(xa=o,(st=u)&&!h)for($=i;$!==null;)o=$,u=o.child,o.tag===22&&o.memoizedState!==null?Nm(i):u!==null?(u.return=o,$=u):Nm(i);for(;s!==null;)$=s,Z_(s),s=s.sibling;$=i,xa=l,st=h}Cm(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,$=s):Cm(t)}}function Cm(t){for(;$!==null;){var e=$;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:st||nu(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!st)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:$t(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&dm(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}dm(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var h=e.alternate;if(h!==null){var f=h.memoizedState;if(f!==null){var g=f.dehydrated;g!==null&&co(g)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(F(163))}st||e.flags&512&&yh(e)}catch(y){ke(e,e.return,y)}}if(e===t){$=null;break}if(n=e.sibling,n!==null){n.return=e.return,$=n;break}$=e.return}}function km(t){for(;$!==null;){var e=$;if(e===t){$=null;break}var n=e.sibling;if(n!==null){n.return=e.return,$=n;break}$=e.return}}function Nm(t){for(;$!==null;){var e=$;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{nu(4,e)}catch(u){ke(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){ke(e,i,u)}}var s=e.return;try{yh(e)}catch(u){ke(e,s,u)}break;case 5:var o=e.return;try{yh(e)}catch(u){ke(e,o,u)}}}catch(u){ke(e,e.return,u)}if(e===t){$=null;break}var l=e.sibling;if(l!==null){l.return=e.return,$=l;break}$=e.return}}var hI=Math.ceil,Al=Mn.ReactCurrentDispatcher,Dd=Mn.ReactCurrentOwner,Mt=Mn.ReactCurrentBatchConfig,ae=0,$e=null,Oe=null,Qe=0,It=0,Ai=Er(0),be=0,To=null,Wr=0,ru=0,Vd=0,Xs=null,gt=null,Od=0,$i=1/0,yn=null,Rl=!1,Eh=null,ar=null,Da=!1,er=null,Pl=0,Js=0,wh=null,Ga=-1,Qa=0;function ht(){return ae&6?xe():Ga!==-1?Ga:Ga=xe()}function lr(t){return t.mode&1?ae&2&&Qe!==0?Qe&-Qe:GT.transition!==null?(Qa===0&&(Qa=by()),Qa):(t=he,t!==0||(t=window.event,t=t===void 0?16:Wy(t.type)),t):1}function Kt(t,e,n,r){if(50<Js)throw Js=0,wh=null,Error(F(185));Oo(t,n,r),(!(ae&2)||t!==$e)&&(t===$e&&(!(ae&2)&&(ru|=n),be===4&&Gn(t,Qe)),wt(t,r),n===1&&ae===0&&!(e.mode&1)&&($i=xe()+500,Zl&&wr()))}function wt(t,e){var n=t.callbackNode;G0(t,e);var r=cl(t,t===$e?Qe:0);if(r===0)n!==null&&Up(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Up(n),e===1)t.tag===0?KT(xm.bind(null,t)):u_(xm.bind(null,t)),$T(function(){!(ae&6)&&wr()}),n=null;else{switch(Fy(r)){case 1:n=od;break;case 4:n=Ly;break;case 16:n=ul;break;case 536870912:n=My;break;default:n=ul}n=av(n,ev.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function ev(t,e){if(Ga=-1,Qa=0,ae&6)throw Error(F(327));var n=t.callbackNode;if(Di()&&t.callbackNode!==n)return null;var r=cl(t,t===$e?Qe:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Cl(t,r);else{e=r;var i=ae;ae|=2;var s=nv();($e!==t||Qe!==e)&&(yn=null,$i=xe()+500,Fr(t,e));do try{pI();break}catch(l){tv(t,l)}while(!0);vd(),Al.current=s,ae=i,Oe!==null?e=0:($e=null,Qe=0,e=be)}if(e!==0){if(e===2&&(i=Gc(t),i!==0&&(r=i,e=Th(t,i))),e===1)throw n=To,Fr(t,0),Gn(t,r),wt(t,xe()),n;if(e===6)Gn(t,r);else{if(i=t.current.alternate,!(r&30)&&!dI(i)&&(e=Cl(t,r),e===2&&(s=Gc(t),s!==0&&(r=s,e=Th(t,s))),e===1))throw n=To,Fr(t,0),Gn(t,r),wt(t,xe()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(F(345));case 2:Dr(t,gt,yn);break;case 3:if(Gn(t,r),(r&130023424)===r&&(e=Od+500-xe(),10<e)){if(cl(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){ht(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=nh(Dr.bind(null,t,gt,yn),e);break}Dr(t,gt,yn);break;case 4:if(Gn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-qt(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=xe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*hI(r/1960))-r,10<r){t.timeoutHandle=nh(Dr.bind(null,t,gt,yn),r);break}Dr(t,gt,yn);break;case 5:Dr(t,gt,yn);break;default:throw Error(F(329))}}}return wt(t,xe()),t.callbackNode===n?ev.bind(null,t):null}function Th(t,e){var n=Xs;return t.current.memoizedState.isDehydrated&&(Fr(t,e).flags|=256),t=Cl(t,e),t!==2&&(e=gt,gt=n,e!==null&&Ih(e)),t}function Ih(t){gt===null?gt=t:gt.push.apply(gt,t)}function dI(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Gt(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Gn(t,e){for(e&=~Vd,e&=~ru,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-qt(e),r=1<<n;t[n]=-1,e&=~r}}function xm(t){if(ae&6)throw Error(F(327));Di();var e=cl(t,0);if(!(e&1))return wt(t,xe()),null;var n=Cl(t,e);if(t.tag!==0&&n===2){var r=Gc(t);r!==0&&(e=r,n=Th(t,r))}if(n===1)throw n=To,Fr(t,0),Gn(t,e),wt(t,xe()),n;if(n===6)throw Error(F(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Dr(t,gt,yn),wt(t,xe()),null}function Ld(t,e){var n=ae;ae|=1;try{return t(e)}finally{ae=n,ae===0&&($i=xe()+500,Zl&&wr())}}function Hr(t){er!==null&&er.tag===0&&!(ae&6)&&Di();var e=ae;ae|=1;var n=Mt.transition,r=he;try{if(Mt.transition=null,he=1,t)return t()}finally{he=r,Mt.transition=n,ae=e,!(ae&6)&&wr()}}function Md(){It=Ai.current,ve(Ai)}function Fr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,BT(n)),Oe!==null)for(n=Oe.return;n!==null;){var r=n;switch(gd(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ml();break;case 3:zi(),ve(vt),ve(at),Ad();break;case 5:Sd(r);break;case 4:zi();break;case 13:ve(Se);break;case 19:ve(Se);break;case 10:Ed(r.type._context);break;case 22:case 23:Md()}n=n.return}if($e=t,Oe=t=ur(t.current,null),Qe=It=e,be=0,To=null,Vd=ru=Wr=0,gt=Xs=null,Lr!==null){for(e=0;e<Lr.length;e++)if(n=Lr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Lr=null}return t}function tv(t,e){do{var n=Oe;try{if(vd(),Ha.current=Sl,Il){for(var r=Ae.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Il=!1}if($r=0,Be=Me=Ae=null,Qs=!1,vo=0,Dd.current=null,n===null||n.return===null){be=1,To=e,Oe=null;break}e:{var s=t,o=n.return,l=n,u=e;if(e=Qe,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var h=u,f=l,g=f.tag;if(!(f.mode&1)&&(g===0||g===11||g===15)){var y=f.alternate;y?(f.updateQueue=y.updateQueue,f.memoizedState=y.memoizedState,f.lanes=y.lanes):(f.updateQueue=null,f.memoizedState=null)}var P=_m(o);if(P!==null){P.flags&=-257,vm(P,o,l,s,e),P.mode&1&&ym(s,h,e),e=P,u=h;var k=e.updateQueue;if(k===null){var D=new Set;D.add(u),e.updateQueue=D}else k.add(u);break e}else{if(!(e&1)){ym(s,h,e),bd();break e}u=Error(F(426))}}else if(Te&&l.mode&1){var L=_m(o);if(L!==null){!(L.flags&65536)&&(L.flags|=256),vm(L,o,l,s,e),yd(Bi(u,l));break e}}s=u=Bi(u,l),be!==4&&(be=2),Xs===null?Xs=[s]:Xs.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var S=F_(s,u,e);hm(s,S);break e;case 1:l=u;var E=s.type,A=s.stateNode;if(!(s.flags&128)&&(typeof E.getDerivedStateFromError=="function"||A!==null&&typeof A.componentDidCatch=="function"&&(ar===null||!ar.has(A)))){s.flags|=65536,e&=-e,s.lanes|=e;var O=U_(s,l,e);hm(s,O);break e}}s=s.return}while(s!==null)}iv(n)}catch(j){e=j,Oe===n&&n!==null&&(Oe=n=n.return);continue}break}while(!0)}function nv(){var t=Al.current;return Al.current=Sl,t===null?Sl:t}function bd(){(be===0||be===3||be===2)&&(be=4),$e===null||!(Wr&268435455)&&!(ru&268435455)||Gn($e,Qe)}function Cl(t,e){var n=ae;ae|=2;var r=nv();($e!==t||Qe!==e)&&(yn=null,Fr(t,e));do try{fI();break}catch(i){tv(t,i)}while(!0);if(vd(),ae=n,Al.current=r,Oe!==null)throw Error(F(261));return $e=null,Qe=0,be}function fI(){for(;Oe!==null;)rv(Oe)}function pI(){for(;Oe!==null&&!U0();)rv(Oe)}function rv(t){var e=ov(t.alternate,t,It);t.memoizedProps=t.pendingProps,e===null?iv(t):Oe=e,Dd.current=null}function iv(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=aI(n,e),n!==null){n.flags&=32767,Oe=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{be=6,Oe=null;return}}else if(n=oI(n,e,It),n!==null){Oe=n;return}if(e=e.sibling,e!==null){Oe=e;return}Oe=e=t}while(e!==null);be===0&&(be=5)}function Dr(t,e,n){var r=he,i=Mt.transition;try{Mt.transition=null,he=1,mI(t,e,n,r)}finally{Mt.transition=i,he=r}return null}function mI(t,e,n,r){do Di();while(er!==null);if(ae&6)throw Error(F(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(F(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(Q0(t,s),t===$e&&(Oe=$e=null,Qe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Da||(Da=!0,av(ul,function(){return Di(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Mt.transition,Mt.transition=null;var o=he;he=1;var l=ae;ae|=4,Dd.current=null,uI(t,n),J_(n,t),LT(eh),hl=!!Zc,eh=Zc=null,t.current=n,cI(n),j0(),ae=l,he=o,Mt.transition=s}else t.current=n;if(Da&&(Da=!1,er=t,Pl=i),s=t.pendingLanes,s===0&&(ar=null),$0(n.stateNode),wt(t,xe()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Rl)throw Rl=!1,t=Eh,Eh=null,t;return Pl&1&&t.tag!==0&&Di(),s=t.pendingLanes,s&1?t===wh?Js++:(Js=0,wh=t):Js=0,wr(),null}function Di(){if(er!==null){var t=Fy(Pl),e=Mt.transition,n=he;try{if(Mt.transition=null,he=16>t?16:t,er===null)var r=!1;else{if(t=er,er=null,Pl=0,ae&6)throw Error(F(331));var i=ae;for(ae|=4,$=t.current;$!==null;){var s=$,o=s.child;if($.flags&16){var l=s.deletions;if(l!==null){for(var u=0;u<l.length;u++){var h=l[u];for($=h;$!==null;){var f=$;switch(f.tag){case 0:case 11:case 15:Ys(8,f,s)}var g=f.child;if(g!==null)g.return=f,$=g;else for(;$!==null;){f=$;var y=f.sibling,P=f.return;if(Q_(f),f===h){$=null;break}if(y!==null){y.return=P,$=y;break}$=P}}}var k=s.alternate;if(k!==null){var D=k.child;if(D!==null){k.child=null;do{var L=D.sibling;D.sibling=null,D=L}while(D!==null)}}$=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,$=o;else e:for(;$!==null;){if(s=$,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Ys(9,s,s.return)}var S=s.sibling;if(S!==null){S.return=s.return,$=S;break e}$=s.return}}var E=t.current;for($=E;$!==null;){o=$;var A=o.child;if(o.subtreeFlags&2064&&A!==null)A.return=o,$=A;else e:for(o=E;$!==null;){if(l=$,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:nu(9,l)}}catch(j){ke(l,l.return,j)}if(l===o){$=null;break e}var O=l.sibling;if(O!==null){O.return=l.return,$=O;break e}$=l.return}}if(ae=i,wr(),on&&typeof on.onPostCommitFiberRoot=="function")try{on.onPostCommitFiberRoot(Gl,t)}catch{}r=!0}return r}finally{he=n,Mt.transition=e}}return!1}function Dm(t,e,n){e=Bi(n,e),e=F_(t,e,1),t=or(t,e,1),e=ht(),t!==null&&(Oo(t,1,e),wt(t,e))}function ke(t,e,n){if(t.tag===3)Dm(t,t,n);else for(;e!==null;){if(e.tag===3){Dm(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ar===null||!ar.has(r))){t=Bi(n,t),t=U_(e,t,1),e=or(e,t,1),t=ht(),e!==null&&(Oo(e,1,t),wt(e,t));break}}e=e.return}}function gI(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=ht(),t.pingedLanes|=t.suspendedLanes&n,$e===t&&(Qe&n)===n&&(be===4||be===3&&(Qe&130023424)===Qe&&500>xe()-Od?Fr(t,0):Vd|=n),wt(t,e)}function sv(t,e){e===0&&(t.mode&1?(e=Ta,Ta<<=1,!(Ta&130023424)&&(Ta=4194304)):e=1);var n=ht();t=Nn(t,e),t!==null&&(Oo(t,e,n),wt(t,n))}function yI(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),sv(t,n)}function _I(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(F(314))}r!==null&&r.delete(e),sv(t,n)}var ov;ov=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||vt.current)_t=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return _t=!1,sI(t,e,n);_t=!!(t.flags&131072)}else _t=!1,Te&&e.flags&1048576&&c_(e,_l,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Ka(t,e),t=e.pendingProps;var i=Fi(e,at.current);xi(e,n),i=Pd(null,e,r,t,i,n);var s=Cd();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Et(r)?(s=!0,gl(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Td(e),i.updater=tu,e.stateNode=i,i._reactInternals=e,uh(e,r,t,n),e=dh(null,e,r,!0,s,n)):(e.tag=0,Te&&s&&md(e),ct(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Ka(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=EI(r),t=$t(r,t),i){case 0:e=hh(null,e,r,t,n);break e;case 1:e=Tm(null,e,r,t,n);break e;case 11:e=Em(null,e,r,t,n);break e;case 14:e=wm(null,e,r,$t(r.type,t),n);break e}throw Error(F(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:$t(r,i),hh(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:$t(r,i),Tm(t,e,r,i,n);case 3:e:{if($_(e),t===null)throw Error(F(387));r=e.pendingProps,s=e.memoizedState,i=s.element,g_(t,e),wl(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Bi(Error(F(423)),e),e=Im(t,e,r,n,i);break e}else if(r!==i){i=Bi(Error(F(424)),e),e=Im(t,e,r,n,i);break e}else for(St=sr(e.stateNode.containerInfo.firstChild),Rt=e,Te=!0,Ht=null,n=p_(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ui(),r===i){e=xn(t,e,n);break e}ct(t,e,r,n)}e=e.child}return e;case 5:return y_(e),t===null&&oh(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,th(r,i)?o=null:s!==null&&th(r,s)&&(e.flags|=32),B_(t,e),ct(t,e,o,n),e.child;case 6:return t===null&&oh(e),null;case 13:return W_(t,e,n);case 4:return Id(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=ji(e,null,r,n):ct(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:$t(r,i),Em(t,e,r,i,n);case 7:return ct(t,e,e.pendingProps,n),e.child;case 8:return ct(t,e,e.pendingProps.children,n),e.child;case 12:return ct(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,me(vl,r._currentValue),r._currentValue=o,s!==null)if(Gt(s.value,o)){if(s.children===i.children&&!vt.current){e=xn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=An(-1,n&-n),u.tag=2;var h=s.updateQueue;if(h!==null){h=h.shared;var f=h.pending;f===null?u.next=u:(u.next=f.next,f.next=u),h.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),ah(s.return,n,e),l.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(F(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),ah(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}ct(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,xi(e,n),i=Ft(i),r=r(i),e.flags|=1,ct(t,e,r,n),e.child;case 14:return r=e.type,i=$t(r,e.pendingProps),i=$t(r.type,i),wm(t,e,r,i,n);case 15:return j_(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:$t(r,i),Ka(t,e),e.tag=1,Et(r)?(t=!0,gl(e)):t=!1,xi(e,n),b_(e,r,i),uh(e,r,i,n),dh(null,e,r,!0,t,n);case 19:return H_(t,e,n);case 22:return z_(t,e,n)}throw Error(F(156,e.tag))};function av(t,e){return Oy(t,e)}function vI(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Lt(t,e,n,r){return new vI(t,e,n,r)}function Fd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function EI(t){if(typeof t=="function")return Fd(t)?1:0;if(t!=null){if(t=t.$$typeof,t===rd)return 11;if(t===id)return 14}return 2}function ur(t,e){var n=t.alternate;return n===null?(n=Lt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Ya(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Fd(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case mi:return Ur(n.children,i,s,e);case nd:o=8,i|=8;break;case Vc:return t=Lt(12,n,e,i|2),t.elementType=Vc,t.lanes=s,t;case Oc:return t=Lt(13,n,e,i),t.elementType=Oc,t.lanes=s,t;case Lc:return t=Lt(19,n,e,i),t.elementType=Lc,t.lanes=s,t;case yy:return iu(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case my:o=10;break e;case gy:o=9;break e;case rd:o=11;break e;case id:o=14;break e;case Hn:o=16,r=null;break e}throw Error(F(130,t==null?t:typeof t,""))}return e=Lt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Ur(t,e,n,r){return t=Lt(7,t,r,e),t.lanes=n,t}function iu(t,e,n,r){return t=Lt(22,t,r,e),t.elementType=yy,t.lanes=n,t.stateNode={isHidden:!1},t}function _c(t,e,n){return t=Lt(6,t,null,e),t.lanes=n,t}function vc(t,e,n){return e=Lt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function wI(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Zu(0),this.expirationTimes=Zu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Zu(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Ud(t,e,n,r,i,s,o,l,u){return t=new wI(t,e,n,l,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Lt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Td(s),t}function TI(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:pi,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function lv(t){if(!t)return mr;t=t._reactInternals;e:{if(Zr(t)!==t||t.tag!==1)throw Error(F(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Et(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(F(171))}if(t.tag===1){var n=t.type;if(Et(n))return l_(t,n,e)}return e}function uv(t,e,n,r,i,s,o,l,u){return t=Ud(n,r,!0,t,i,s,o,l,u),t.context=lv(null),n=t.current,r=ht(),i=lr(n),s=An(r,i),s.callback=e??null,or(n,s,i),t.current.lanes=i,Oo(t,i,r),wt(t,r),t}function su(t,e,n,r){var i=e.current,s=ht(),o=lr(i);return n=lv(n),e.context===null?e.context=n:e.pendingContext=n,e=An(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=or(i,e,o),t!==null&&(Kt(t,i,o,s),Wa(t,i,o)),o}function kl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Vm(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function jd(t,e){Vm(t,e),(t=t.alternate)&&Vm(t,e)}function II(){return null}var cv=typeof reportError=="function"?reportError:function(t){console.error(t)};function zd(t){this._internalRoot=t}ou.prototype.render=zd.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(F(409));su(t,e,null,null)};ou.prototype.unmount=zd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Hr(function(){su(null,t,null,null)}),e[kn]=null}};function ou(t){this._internalRoot=t}ou.prototype.unstable_scheduleHydration=function(t){if(t){var e=zy();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Kn.length&&e!==0&&e<Kn[n].priority;n++);Kn.splice(n,0,t),n===0&&$y(t)}};function Bd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function au(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Om(){}function SI(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var h=kl(o);s.call(h)}}var o=uv(e,r,t,0,null,!1,!1,"",Om);return t._reactRootContainer=o,t[kn]=o.current,po(t.nodeType===8?t.parentNode:t),Hr(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var h=kl(u);l.call(h)}}var u=Ud(t,0,!1,null,null,!1,!1,"",Om);return t._reactRootContainer=u,t[kn]=u.current,po(t.nodeType===8?t.parentNode:t),Hr(function(){su(e,u,n,r)}),u}function lu(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var u=kl(o);l.call(u)}}su(e,o,t,i)}else o=SI(n,e,t,i,r);return kl(o)}Uy=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ms(e.pendingLanes);n!==0&&(ad(e,n|1),wt(e,xe()),!(ae&6)&&($i=xe()+500,wr()))}break;case 13:Hr(function(){var r=Nn(t,1);if(r!==null){var i=ht();Kt(r,t,1,i)}}),jd(t,1)}};ld=function(t){if(t.tag===13){var e=Nn(t,134217728);if(e!==null){var n=ht();Kt(e,t,134217728,n)}jd(t,134217728)}};jy=function(t){if(t.tag===13){var e=lr(t),n=Nn(t,e);if(n!==null){var r=ht();Kt(n,t,e,r)}jd(t,e)}};zy=function(){return he};By=function(t,e){var n=he;try{return he=t,e()}finally{he=n}};Hc=function(t,e,n){switch(e){case"input":if(Fc(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Jl(r);if(!i)throw Error(F(90));vy(r),Fc(r,i)}}}break;case"textarea":wy(t,n);break;case"select":e=n.value,e!=null&&Pi(t,!!n.multiple,e,!1)}};Cy=Ld;ky=Hr;var AI={usingClientEntryPoint:!1,Events:[Mo,vi,Jl,Ry,Py,Ld]},xs={findFiberByHostInstance:Or,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},RI={bundleType:xs.bundleType,version:xs.version,rendererPackageName:xs.rendererPackageName,rendererConfig:xs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Mn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Dy(t),t===null?null:t.stateNode},findFiberByHostInstance:xs.findFiberByHostInstance||II,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Va=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Va.isDisabled&&Va.supportsFiber)try{Gl=Va.inject(RI),on=Va}catch{}}Ct.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=AI;Ct.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Bd(e))throw Error(F(200));return TI(t,e,null,n)};Ct.createRoot=function(t,e){if(!Bd(t))throw Error(F(299));var n=!1,r="",i=cv;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Ud(t,1,!1,null,null,n,!1,r,i),t[kn]=e.current,po(t.nodeType===8?t.parentNode:t),new zd(e)};Ct.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(F(188)):(t=Object.keys(t).join(","),Error(F(268,t)));return t=Dy(e),t=t===null?null:t.stateNode,t};Ct.flushSync=function(t){return Hr(t)};Ct.hydrate=function(t,e,n){if(!au(e))throw Error(F(200));return lu(null,t,e,!0,n)};Ct.hydrateRoot=function(t,e,n){if(!Bd(t))throw Error(F(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=cv;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=uv(e,null,t,1,n??null,i,!1,s,o),t[kn]=e.current,po(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new ou(e)};Ct.render=function(t,e,n){if(!au(e))throw Error(F(200));return lu(null,t,e,!1,n)};Ct.unmountComponentAtNode=function(t){if(!au(t))throw Error(F(40));return t._reactRootContainer?(Hr(function(){lu(null,null,t,!1,function(){t._reactRootContainer=null,t[kn]=null})}),!0):!1};Ct.unstable_batchedUpdates=Ld;Ct.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!au(n))throw Error(F(200));if(t==null||t._reactInternals===void 0)throw Error(F(38));return lu(t,e,n,!1,r)};Ct.version="18.3.1-next-f1338f8080-20240426";function hv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(hv)}catch(t){console.error(t)}}hv(),hy.exports=Ct;var PI=hy.exports,Lm=PI;xc.createRoot=Lm.createRoot,xc.hydrateRoot=Lm.hydrateRoot;var Mm={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dv=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},CI=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},fv={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,u=i+2<t.length,h=u?t[i+2]:0,f=s>>2,g=(s&3)<<4|l>>4;let y=(l&15)<<2|h>>6,P=h&63;u||(P=64,o||(y=64)),r.push(n[f],n[g],n[y],n[P])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(dv(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):CI(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const h=i<t.length?n[t.charAt(i)]:64;++i;const g=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||h==null||g==null)throw new kI;const y=s<<2|l>>4;if(r.push(y),h!==64){const P=l<<4&240|h>>2;if(r.push(P),g!==64){const k=h<<6&192|g;r.push(k)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class kI extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const NI=function(t){const e=dv(t);return fv.encodeByteArray(e,!0)},Nl=function(t){return NI(t).replace(/\./g,"")},pv=function(t){try{return fv.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xI(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DI=()=>xI().__FIREBASE_DEFAULTS__,VI=()=>{if(typeof process>"u"||typeof Mm>"u")return;const t=Mm.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},OI=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&pv(t[1]);return e&&JSON.parse(e)},uu=()=>{try{return DI()||VI()||OI()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},mv=t=>{var e,n;return(n=(e=uu())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},LI=t=>{const e=mv(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},gv=()=>{var t;return(t=uu())===null||t===void 0?void 0:t.config},yv=t=>{var e;return(e=uu())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MI{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bI(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Nl(JSON.stringify(n)),Nl(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function FI(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(lt())}function UI(){var t;const e=(t=uu())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function jI(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function zI(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function BI(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function $I(){const t=lt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function WI(){return!UI()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function HI(){try{return typeof indexedDB=="object"}catch{return!1}}function qI(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KI="FirebaseError";class bn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=KI,Object.setPrototypeOf(this,bn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Fo.prototype.create)}}class Fo{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?GI(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new bn(i,l,r)}}function GI(t,e){return t.replace(QI,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const QI=/\{\$([^}]+)}/g;function YI(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function xl(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(bm(s)&&bm(o)){if(!xl(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function bm(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uo(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Fs(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Us(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function XI(t,e){const n=new JI(t,e);return n.subscribe.bind(n)}class JI{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");ZI(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Ec),i.error===void 0&&(i.error=Ec),i.complete===void 0&&(i.complete=Ec);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function ZI(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Ec(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function We(t){return t&&t._delegate?t._delegate:t}class qr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eS{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new MI;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(nS(e))try{this.getOrInitializeService({instanceIdentifier:Vr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Vr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Vr){return this.instances.has(e)}getOptions(e=Vr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:tS(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Vr){return this.component?this.component.multipleInstances?e:Vr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function tS(t){return t===Vr?void 0:t}function nS(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rS{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new eS(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ie;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ie||(ie={}));const iS={debug:ie.DEBUG,verbose:ie.VERBOSE,info:ie.INFO,warn:ie.WARN,error:ie.ERROR,silent:ie.SILENT},sS=ie.INFO,oS={[ie.DEBUG]:"log",[ie.VERBOSE]:"log",[ie.INFO]:"info",[ie.WARN]:"warn",[ie.ERROR]:"error"},aS=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=oS[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class $d{constructor(e){this.name=e,this._logLevel=sS,this._logHandler=aS,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ie))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?iS[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ie.DEBUG,...e),this._logHandler(this,ie.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ie.VERBOSE,...e),this._logHandler(this,ie.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ie.INFO,...e),this._logHandler(this,ie.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ie.WARN,...e),this._logHandler(this,ie.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ie.ERROR,...e),this._logHandler(this,ie.ERROR,...e)}}const lS=(t,e)=>e.some(n=>t instanceof n);let Fm,Um;function uS(){return Fm||(Fm=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function cS(){return Um||(Um=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const _v=new WeakMap,Sh=new WeakMap,vv=new WeakMap,wc=new WeakMap,Wd=new WeakMap;function hS(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(cr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&_v.set(n,t)}).catch(()=>{}),Wd.set(e,t),e}function dS(t){if(Sh.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Sh.set(t,e)}let Ah={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Sh.get(t);if(e==="objectStoreNames")return t.objectStoreNames||vv.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return cr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function fS(t){Ah=t(Ah)}function pS(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Tc(this),e,...n);return vv.set(r,e.sort?e.sort():[e]),cr(r)}:cS().includes(t)?function(...e){return t.apply(Tc(this),e),cr(_v.get(this))}:function(...e){return cr(t.apply(Tc(this),e))}}function mS(t){return typeof t=="function"?pS(t):(t instanceof IDBTransaction&&dS(t),lS(t,uS())?new Proxy(t,Ah):t)}function cr(t){if(t instanceof IDBRequest)return hS(t);if(wc.has(t))return wc.get(t);const e=mS(t);return e!==t&&(wc.set(t,e),Wd.set(e,t)),e}const Tc=t=>Wd.get(t);function gS(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=cr(o);return r&&o.addEventListener("upgradeneeded",u=>{r(cr(o.result),u.oldVersion,u.newVersion,cr(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",h=>i(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const yS=["get","getKey","getAll","getAllKeys","count"],_S=["put","add","delete","clear"],Ic=new Map;function jm(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ic.get(e))return Ic.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=_S.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||yS.includes(n)))return;const s=async function(o,...l){const u=this.transaction(o,i?"readwrite":"readonly");let h=u.store;return r&&(h=h.index(l.shift())),(await Promise.all([h[n](...l),i&&u.done]))[0]};return Ic.set(e,s),s}fS(t=>({...t,get:(e,n,r)=>jm(e,n)||t.get(e,n,r),has:(e,n)=>!!jm(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vS{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(ES(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function ES(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Rh="@firebase/app",zm="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dn=new $d("@firebase/app"),wS="@firebase/app-compat",TS="@firebase/analytics-compat",IS="@firebase/analytics",SS="@firebase/app-check-compat",AS="@firebase/app-check",RS="@firebase/auth",PS="@firebase/auth-compat",CS="@firebase/database",kS="@firebase/data-connect",NS="@firebase/database-compat",xS="@firebase/functions",DS="@firebase/functions-compat",VS="@firebase/installations",OS="@firebase/installations-compat",LS="@firebase/messaging",MS="@firebase/messaging-compat",bS="@firebase/performance",FS="@firebase/performance-compat",US="@firebase/remote-config",jS="@firebase/remote-config-compat",zS="@firebase/storage",BS="@firebase/storage-compat",$S="@firebase/firestore",WS="@firebase/vertexai-preview",HS="@firebase/firestore-compat",qS="firebase",KS="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ph="[DEFAULT]",GS={[Rh]:"fire-core",[wS]:"fire-core-compat",[IS]:"fire-analytics",[TS]:"fire-analytics-compat",[AS]:"fire-app-check",[SS]:"fire-app-check-compat",[RS]:"fire-auth",[PS]:"fire-auth-compat",[CS]:"fire-rtdb",[kS]:"fire-data-connect",[NS]:"fire-rtdb-compat",[xS]:"fire-fn",[DS]:"fire-fn-compat",[VS]:"fire-iid",[OS]:"fire-iid-compat",[LS]:"fire-fcm",[MS]:"fire-fcm-compat",[bS]:"fire-perf",[FS]:"fire-perf-compat",[US]:"fire-rc",[jS]:"fire-rc-compat",[zS]:"fire-gcs",[BS]:"fire-gcs-compat",[$S]:"fire-fst",[HS]:"fire-fst-compat",[WS]:"fire-vertex","fire-js":"fire-js",[qS]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dl=new Map,QS=new Map,Ch=new Map;function Bm(t,e){try{t.container.addComponent(e)}catch(n){Dn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Wi(t){const e=t.name;if(Ch.has(e))return Dn.debug(`There were multiple attempts to register component ${e}.`),!1;Ch.set(e,t);for(const n of Dl.values())Bm(n,t);for(const n of QS.values())Bm(n,t);return!0}function Hd(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function sn(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YS={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},hr=new Fo("app","Firebase",YS);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XS{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new qr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw hr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ts=KS;function Ev(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Ph,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw hr.create("bad-app-name",{appName:String(i)});if(n||(n=gv()),!n)throw hr.create("no-options");const s=Dl.get(i);if(s){if(xl(n,s.options)&&xl(r,s.config))return s;throw hr.create("duplicate-app",{appName:i})}const o=new rS(i);for(const u of Ch.values())o.addComponent(u);const l=new XS(n,r,o);return Dl.set(i,l),l}function wv(t=Ph){const e=Dl.get(t);if(!e&&t===Ph&&gv())return Ev();if(!e)throw hr.create("no-app",{appName:t});return e}function dr(t,e,n){var r;let i=(r=GS[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Dn.warn(l.join(" "));return}Wi(new qr(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JS="firebase-heartbeat-database",ZS=1,Io="firebase-heartbeat-store";let Sc=null;function Tv(){return Sc||(Sc=gS(JS,ZS,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Io)}catch(n){console.warn(n)}}}}).catch(t=>{throw hr.create("idb-open",{originalErrorMessage:t.message})})),Sc}async function eA(t){try{const n=(await Tv()).transaction(Io),r=await n.objectStore(Io).get(Iv(t));return await n.done,r}catch(e){if(e instanceof bn)Dn.warn(e.message);else{const n=hr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Dn.warn(n.message)}}}async function $m(t,e){try{const r=(await Tv()).transaction(Io,"readwrite");await r.objectStore(Io).put(e,Iv(t)),await r.done}catch(n){if(n instanceof bn)Dn.warn(n.message);else{const r=hr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Dn.warn(r.message)}}}function Iv(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tA=1024,nA=30*24*60*60*1e3;class rA{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new sA(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Wm();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=nA}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Dn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Wm(),{heartbeatsToSend:r,unsentEntries:i}=iA(this._heartbeatsCache.heartbeats),s=Nl(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return Dn.warn(n),""}}}function Wm(){return new Date().toISOString().substring(0,10)}function iA(t,e=tA){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Hm(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Hm(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class sA{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return HI()?qI().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await eA(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return $m(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return $m(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Hm(t){return Nl(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oA(t){Wi(new qr("platform-logger",e=>new vS(e),"PRIVATE")),Wi(new qr("heartbeat",e=>new rA(e),"PRIVATE")),dr(Rh,zm,t),dr(Rh,zm,"esm2017"),dr("fire-js","")}oA("");var qm=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var jr,Sv;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(_,m){function v(){}v.prototype=m.prototype,_.D=m.prototype,_.prototype=new v,_.prototype.constructor=_,_.C=function(w,R,C){for(var T=Array(arguments.length-2),Ue=2;Ue<arguments.length;Ue++)T[Ue-2]=arguments[Ue];return m.prototype[R].apply(w,T)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(_,m,v){v||(v=0);var w=Array(16);if(typeof m=="string")for(var R=0;16>R;++R)w[R]=m.charCodeAt(v++)|m.charCodeAt(v++)<<8|m.charCodeAt(v++)<<16|m.charCodeAt(v++)<<24;else for(R=0;16>R;++R)w[R]=m[v++]|m[v++]<<8|m[v++]<<16|m[v++]<<24;m=_.g[0],v=_.g[1],R=_.g[2];var C=_.g[3],T=m+(C^v&(R^C))+w[0]+3614090360&4294967295;m=v+(T<<7&4294967295|T>>>25),T=C+(R^m&(v^R))+w[1]+3905402710&4294967295,C=m+(T<<12&4294967295|T>>>20),T=R+(v^C&(m^v))+w[2]+606105819&4294967295,R=C+(T<<17&4294967295|T>>>15),T=v+(m^R&(C^m))+w[3]+3250441966&4294967295,v=R+(T<<22&4294967295|T>>>10),T=m+(C^v&(R^C))+w[4]+4118548399&4294967295,m=v+(T<<7&4294967295|T>>>25),T=C+(R^m&(v^R))+w[5]+1200080426&4294967295,C=m+(T<<12&4294967295|T>>>20),T=R+(v^C&(m^v))+w[6]+2821735955&4294967295,R=C+(T<<17&4294967295|T>>>15),T=v+(m^R&(C^m))+w[7]+4249261313&4294967295,v=R+(T<<22&4294967295|T>>>10),T=m+(C^v&(R^C))+w[8]+1770035416&4294967295,m=v+(T<<7&4294967295|T>>>25),T=C+(R^m&(v^R))+w[9]+2336552879&4294967295,C=m+(T<<12&4294967295|T>>>20),T=R+(v^C&(m^v))+w[10]+4294925233&4294967295,R=C+(T<<17&4294967295|T>>>15),T=v+(m^R&(C^m))+w[11]+2304563134&4294967295,v=R+(T<<22&4294967295|T>>>10),T=m+(C^v&(R^C))+w[12]+1804603682&4294967295,m=v+(T<<7&4294967295|T>>>25),T=C+(R^m&(v^R))+w[13]+4254626195&4294967295,C=m+(T<<12&4294967295|T>>>20),T=R+(v^C&(m^v))+w[14]+2792965006&4294967295,R=C+(T<<17&4294967295|T>>>15),T=v+(m^R&(C^m))+w[15]+1236535329&4294967295,v=R+(T<<22&4294967295|T>>>10),T=m+(R^C&(v^R))+w[1]+4129170786&4294967295,m=v+(T<<5&4294967295|T>>>27),T=C+(v^R&(m^v))+w[6]+3225465664&4294967295,C=m+(T<<9&4294967295|T>>>23),T=R+(m^v&(C^m))+w[11]+643717713&4294967295,R=C+(T<<14&4294967295|T>>>18),T=v+(C^m&(R^C))+w[0]+3921069994&4294967295,v=R+(T<<20&4294967295|T>>>12),T=m+(R^C&(v^R))+w[5]+3593408605&4294967295,m=v+(T<<5&4294967295|T>>>27),T=C+(v^R&(m^v))+w[10]+38016083&4294967295,C=m+(T<<9&4294967295|T>>>23),T=R+(m^v&(C^m))+w[15]+3634488961&4294967295,R=C+(T<<14&4294967295|T>>>18),T=v+(C^m&(R^C))+w[4]+3889429448&4294967295,v=R+(T<<20&4294967295|T>>>12),T=m+(R^C&(v^R))+w[9]+568446438&4294967295,m=v+(T<<5&4294967295|T>>>27),T=C+(v^R&(m^v))+w[14]+3275163606&4294967295,C=m+(T<<9&4294967295|T>>>23),T=R+(m^v&(C^m))+w[3]+4107603335&4294967295,R=C+(T<<14&4294967295|T>>>18),T=v+(C^m&(R^C))+w[8]+1163531501&4294967295,v=R+(T<<20&4294967295|T>>>12),T=m+(R^C&(v^R))+w[13]+2850285829&4294967295,m=v+(T<<5&4294967295|T>>>27),T=C+(v^R&(m^v))+w[2]+4243563512&4294967295,C=m+(T<<9&4294967295|T>>>23),T=R+(m^v&(C^m))+w[7]+1735328473&4294967295,R=C+(T<<14&4294967295|T>>>18),T=v+(C^m&(R^C))+w[12]+2368359562&4294967295,v=R+(T<<20&4294967295|T>>>12),T=m+(v^R^C)+w[5]+4294588738&4294967295,m=v+(T<<4&4294967295|T>>>28),T=C+(m^v^R)+w[8]+2272392833&4294967295,C=m+(T<<11&4294967295|T>>>21),T=R+(C^m^v)+w[11]+1839030562&4294967295,R=C+(T<<16&4294967295|T>>>16),T=v+(R^C^m)+w[14]+4259657740&4294967295,v=R+(T<<23&4294967295|T>>>9),T=m+(v^R^C)+w[1]+2763975236&4294967295,m=v+(T<<4&4294967295|T>>>28),T=C+(m^v^R)+w[4]+1272893353&4294967295,C=m+(T<<11&4294967295|T>>>21),T=R+(C^m^v)+w[7]+4139469664&4294967295,R=C+(T<<16&4294967295|T>>>16),T=v+(R^C^m)+w[10]+3200236656&4294967295,v=R+(T<<23&4294967295|T>>>9),T=m+(v^R^C)+w[13]+681279174&4294967295,m=v+(T<<4&4294967295|T>>>28),T=C+(m^v^R)+w[0]+3936430074&4294967295,C=m+(T<<11&4294967295|T>>>21),T=R+(C^m^v)+w[3]+3572445317&4294967295,R=C+(T<<16&4294967295|T>>>16),T=v+(R^C^m)+w[6]+76029189&4294967295,v=R+(T<<23&4294967295|T>>>9),T=m+(v^R^C)+w[9]+3654602809&4294967295,m=v+(T<<4&4294967295|T>>>28),T=C+(m^v^R)+w[12]+3873151461&4294967295,C=m+(T<<11&4294967295|T>>>21),T=R+(C^m^v)+w[15]+530742520&4294967295,R=C+(T<<16&4294967295|T>>>16),T=v+(R^C^m)+w[2]+3299628645&4294967295,v=R+(T<<23&4294967295|T>>>9),T=m+(R^(v|~C))+w[0]+4096336452&4294967295,m=v+(T<<6&4294967295|T>>>26),T=C+(v^(m|~R))+w[7]+1126891415&4294967295,C=m+(T<<10&4294967295|T>>>22),T=R+(m^(C|~v))+w[14]+2878612391&4294967295,R=C+(T<<15&4294967295|T>>>17),T=v+(C^(R|~m))+w[5]+4237533241&4294967295,v=R+(T<<21&4294967295|T>>>11),T=m+(R^(v|~C))+w[12]+1700485571&4294967295,m=v+(T<<6&4294967295|T>>>26),T=C+(v^(m|~R))+w[3]+2399980690&4294967295,C=m+(T<<10&4294967295|T>>>22),T=R+(m^(C|~v))+w[10]+4293915773&4294967295,R=C+(T<<15&4294967295|T>>>17),T=v+(C^(R|~m))+w[1]+2240044497&4294967295,v=R+(T<<21&4294967295|T>>>11),T=m+(R^(v|~C))+w[8]+1873313359&4294967295,m=v+(T<<6&4294967295|T>>>26),T=C+(v^(m|~R))+w[15]+4264355552&4294967295,C=m+(T<<10&4294967295|T>>>22),T=R+(m^(C|~v))+w[6]+2734768916&4294967295,R=C+(T<<15&4294967295|T>>>17),T=v+(C^(R|~m))+w[13]+1309151649&4294967295,v=R+(T<<21&4294967295|T>>>11),T=m+(R^(v|~C))+w[4]+4149444226&4294967295,m=v+(T<<6&4294967295|T>>>26),T=C+(v^(m|~R))+w[11]+3174756917&4294967295,C=m+(T<<10&4294967295|T>>>22),T=R+(m^(C|~v))+w[2]+718787259&4294967295,R=C+(T<<15&4294967295|T>>>17),T=v+(C^(R|~m))+w[9]+3951481745&4294967295,_.g[0]=_.g[0]+m&4294967295,_.g[1]=_.g[1]+(R+(T<<21&4294967295|T>>>11))&4294967295,_.g[2]=_.g[2]+R&4294967295,_.g[3]=_.g[3]+C&4294967295}r.prototype.u=function(_,m){m===void 0&&(m=_.length);for(var v=m-this.blockSize,w=this.B,R=this.h,C=0;C<m;){if(R==0)for(;C<=v;)i(this,_,C),C+=this.blockSize;if(typeof _=="string"){for(;C<m;)if(w[R++]=_.charCodeAt(C++),R==this.blockSize){i(this,w),R=0;break}}else for(;C<m;)if(w[R++]=_[C++],R==this.blockSize){i(this,w),R=0;break}}this.h=R,this.o+=m},r.prototype.v=function(){var _=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);_[0]=128;for(var m=1;m<_.length-8;++m)_[m]=0;var v=8*this.o;for(m=_.length-8;m<_.length;++m)_[m]=v&255,v/=256;for(this.u(_),_=Array(16),m=v=0;4>m;++m)for(var w=0;32>w;w+=8)_[v++]=this.g[m]>>>w&255;return _};function s(_,m){var v=l;return Object.prototype.hasOwnProperty.call(v,_)?v[_]:v[_]=m(_)}function o(_,m){this.h=m;for(var v=[],w=!0,R=_.length-1;0<=R;R--){var C=_[R]|0;w&&C==m||(v[R]=C,w=!1)}this.g=v}var l={};function u(_){return-128<=_&&128>_?s(_,function(m){return new o([m|0],0>m?-1:0)}):new o([_|0],0>_?-1:0)}function h(_){if(isNaN(_)||!isFinite(_))return g;if(0>_)return L(h(-_));for(var m=[],v=1,w=0;_>=v;w++)m[w]=_/v|0,v*=4294967296;return new o(m,0)}function f(_,m){if(_.length==0)throw Error("number format error: empty string");if(m=m||10,2>m||36<m)throw Error("radix out of range: "+m);if(_.charAt(0)=="-")return L(f(_.substring(1),m));if(0<=_.indexOf("-"))throw Error('number format error: interior "-" character');for(var v=h(Math.pow(m,8)),w=g,R=0;R<_.length;R+=8){var C=Math.min(8,_.length-R),T=parseInt(_.substring(R,R+C),m);8>C?(C=h(Math.pow(m,C)),w=w.j(C).add(h(T))):(w=w.j(v),w=w.add(h(T)))}return w}var g=u(0),y=u(1),P=u(16777216);t=o.prototype,t.m=function(){if(D(this))return-L(this).m();for(var _=0,m=1,v=0;v<this.g.length;v++){var w=this.i(v);_+=(0<=w?w:4294967296+w)*m,m*=4294967296}return _},t.toString=function(_){if(_=_||10,2>_||36<_)throw Error("radix out of range: "+_);if(k(this))return"0";if(D(this))return"-"+L(this).toString(_);for(var m=h(Math.pow(_,6)),v=this,w="";;){var R=O(v,m).g;v=S(v,R.j(m));var C=((0<v.g.length?v.g[0]:v.h)>>>0).toString(_);if(v=R,k(v))return C+w;for(;6>C.length;)C="0"+C;w=C+w}},t.i=function(_){return 0>_?0:_<this.g.length?this.g[_]:this.h};function k(_){if(_.h!=0)return!1;for(var m=0;m<_.g.length;m++)if(_.g[m]!=0)return!1;return!0}function D(_){return _.h==-1}t.l=function(_){return _=S(this,_),D(_)?-1:k(_)?0:1};function L(_){for(var m=_.g.length,v=[],w=0;w<m;w++)v[w]=~_.g[w];return new o(v,~_.h).add(y)}t.abs=function(){return D(this)?L(this):this},t.add=function(_){for(var m=Math.max(this.g.length,_.g.length),v=[],w=0,R=0;R<=m;R++){var C=w+(this.i(R)&65535)+(_.i(R)&65535),T=(C>>>16)+(this.i(R)>>>16)+(_.i(R)>>>16);w=T>>>16,C&=65535,T&=65535,v[R]=T<<16|C}return new o(v,v[v.length-1]&-2147483648?-1:0)};function S(_,m){return _.add(L(m))}t.j=function(_){if(k(this)||k(_))return g;if(D(this))return D(_)?L(this).j(L(_)):L(L(this).j(_));if(D(_))return L(this.j(L(_)));if(0>this.l(P)&&0>_.l(P))return h(this.m()*_.m());for(var m=this.g.length+_.g.length,v=[],w=0;w<2*m;w++)v[w]=0;for(w=0;w<this.g.length;w++)for(var R=0;R<_.g.length;R++){var C=this.i(w)>>>16,T=this.i(w)&65535,Ue=_.i(R)>>>16,Jt=_.i(R)&65535;v[2*w+2*R]+=T*Jt,E(v,2*w+2*R),v[2*w+2*R+1]+=C*Jt,E(v,2*w+2*R+1),v[2*w+2*R+1]+=T*Ue,E(v,2*w+2*R+1),v[2*w+2*R+2]+=C*Ue,E(v,2*w+2*R+2)}for(w=0;w<m;w++)v[w]=v[2*w+1]<<16|v[2*w];for(w=m;w<2*m;w++)v[w]=0;return new o(v,0)};function E(_,m){for(;(_[m]&65535)!=_[m];)_[m+1]+=_[m]>>>16,_[m]&=65535,m++}function A(_,m){this.g=_,this.h=m}function O(_,m){if(k(m))throw Error("division by zero");if(k(_))return new A(g,g);if(D(_))return m=O(L(_),m),new A(L(m.g),L(m.h));if(D(m))return m=O(_,L(m)),new A(L(m.g),m.h);if(30<_.g.length){if(D(_)||D(m))throw Error("slowDivide_ only works with positive integers.");for(var v=y,w=m;0>=w.l(_);)v=j(v),w=j(w);var R=U(v,1),C=U(w,1);for(w=U(w,2),v=U(v,2);!k(w);){var T=C.add(w);0>=T.l(_)&&(R=R.add(v),C=T),w=U(w,1),v=U(v,1)}return m=S(_,R.j(m)),new A(R,m)}for(R=g;0<=_.l(m);){for(v=Math.max(1,Math.floor(_.m()/m.m())),w=Math.ceil(Math.log(v)/Math.LN2),w=48>=w?1:Math.pow(2,w-48),C=h(v),T=C.j(m);D(T)||0<T.l(_);)v-=w,C=h(v),T=C.j(m);k(C)&&(C=y),R=R.add(C),_=S(_,T)}return new A(R,_)}t.A=function(_){return O(this,_).h},t.and=function(_){for(var m=Math.max(this.g.length,_.g.length),v=[],w=0;w<m;w++)v[w]=this.i(w)&_.i(w);return new o(v,this.h&_.h)},t.or=function(_){for(var m=Math.max(this.g.length,_.g.length),v=[],w=0;w<m;w++)v[w]=this.i(w)|_.i(w);return new o(v,this.h|_.h)},t.xor=function(_){for(var m=Math.max(this.g.length,_.g.length),v=[],w=0;w<m;w++)v[w]=this.i(w)^_.i(w);return new o(v,this.h^_.h)};function j(_){for(var m=_.g.length+1,v=[],w=0;w<m;w++)v[w]=_.i(w)<<1|_.i(w-1)>>>31;return new o(v,_.h)}function U(_,m){var v=m>>5;m%=32;for(var w=_.g.length-v,R=[],C=0;C<w;C++)R[C]=0<m?_.i(C+v)>>>m|_.i(C+v+1)<<32-m:_.i(C+v);return new o(R,_.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Sv=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=f,jr=o}).apply(typeof qm<"u"?qm:typeof self<"u"?self:typeof window<"u"?window:{});var Oa=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Av,js,Rv,Xa,kh,Pv,Cv,kv;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,c,d){return a==Array.prototype||a==Object.prototype||(a[c]=d.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Oa=="object"&&Oa];for(var c=0;c<a.length;++c){var d=a[c];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function i(a,c){if(c)e:{var d=r;a=a.split(".");for(var p=0;p<a.length-1;p++){var N=a[p];if(!(N in d))break e;d=d[N]}a=a[a.length-1],p=d[a],c=c(p),c!=p&&c!=null&&e(d,a,{configurable:!0,writable:!0,value:c})}}function s(a,c){a instanceof String&&(a+="");var d=0,p=!1,N={next:function(){if(!p&&d<a.length){var x=d++;return{value:c(x,a[x]),done:!1}}return p=!0,{done:!0,value:void 0}}};return N[Symbol.iterator]=function(){return N},N}i("Array.prototype.values",function(a){return a||function(){return s(this,function(c,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function u(a){var c=typeof a;return c=c!="object"?c:a?Array.isArray(a)?"array":c:"null",c=="array"||c=="object"&&typeof a.length=="number"}function h(a){var c=typeof a;return c=="object"&&a!=null||c=="function"}function f(a,c,d){return a.call.apply(a.bind,arguments)}function g(a,c,d){if(!a)throw Error();if(2<arguments.length){var p=Array.prototype.slice.call(arguments,2);return function(){var N=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(N,p),a.apply(c,N)}}return function(){return a.apply(c,arguments)}}function y(a,c,d){return y=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:g,y.apply(null,arguments)}function P(a,c){var d=Array.prototype.slice.call(arguments,1);return function(){var p=d.slice();return p.push.apply(p,arguments),a.apply(this,p)}}function k(a,c){function d(){}d.prototype=c.prototype,a.aa=c.prototype,a.prototype=new d,a.prototype.constructor=a,a.Qb=function(p,N,x){for(var z=Array(arguments.length-2),fe=2;fe<arguments.length;fe++)z[fe-2]=arguments[fe];return c.prototype[N].apply(p,z)}}function D(a){const c=a.length;if(0<c){const d=Array(c);for(let p=0;p<c;p++)d[p]=a[p];return d}return[]}function L(a,c){for(let d=1;d<arguments.length;d++){const p=arguments[d];if(u(p)){const N=a.length||0,x=p.length||0;a.length=N+x;for(let z=0;z<x;z++)a[N+z]=p[z]}else a.push(p)}}class S{constructor(c,d){this.i=c,this.j=d,this.h=0,this.g=null}get(){let c;return 0<this.h?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function E(a){return/^[\s\xa0]*$/.test(a)}function A(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function O(a){return O[" "](a),a}O[" "]=function(){};var j=A().indexOf("Gecko")!=-1&&!(A().toLowerCase().indexOf("webkit")!=-1&&A().indexOf("Edge")==-1)&&!(A().indexOf("Trident")!=-1||A().indexOf("MSIE")!=-1)&&A().indexOf("Edge")==-1;function U(a,c,d){for(const p in a)c.call(d,a[p],p,a)}function _(a,c){for(const d in a)c.call(void 0,a[d],d,a)}function m(a){const c={};for(const d in a)c[d]=a[d];return c}const v="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function w(a,c){let d,p;for(let N=1;N<arguments.length;N++){p=arguments[N];for(d in p)a[d]=p[d];for(let x=0;x<v.length;x++)d=v[x],Object.prototype.hasOwnProperty.call(p,d)&&(a[d]=p[d])}}function R(a){var c=1;a=a.split(":");const d=[];for(;0<c&&a.length;)d.push(a.shift()),c--;return a.length&&d.push(a.join(":")),d}function C(a){l.setTimeout(()=>{throw a},0)}function T(){var a=K;let c=null;return a.g&&(c=a.g,a.g=a.g.next,a.g||(a.h=null),c.next=null),c}class Ue{constructor(){this.h=this.g=null}add(c,d){const p=Jt.get();p.set(c,d),this.h?this.h.next=p:this.g=p,this.h=p}}var Jt=new S(()=>new fn,a=>a.reset());class fn{constructor(){this.next=this.g=this.h=null}set(c,d){this.h=c,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let Ee,B=!1,K=new Ue,Q=()=>{const a=l.Promise.resolve(void 0);Ee=()=>{a.then(pe)}};var pe=()=>{for(var a;a=T();){try{a.h.call(a.g)}catch(d){C(d)}var c=Jt;c.j(a),100>c.h&&(c.h++,a.next=c.g,c.g=a)}B=!1};function re(){this.s=this.s,this.C=this.C}re.prototype.s=!1,re.prototype.ma=function(){this.s||(this.s=!0,this.N())},re.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function we(a,c){this.type=a,this.g=this.target=c,this.defaultPrevented=!1}we.prototype.h=function(){this.defaultPrevented=!0};var Nt=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,c=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};l.addEventListener("test",d,c),l.removeEventListener("test",d,c)}catch{}return a}();function jt(a,c){if(we.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var d=this.type=a.type,p=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=c,c=a.relatedTarget){if(j){e:{try{O(c.nodeName);var N=!0;break e}catch{}N=!1}N||(c=null)}}else d=="mouseover"?c=a.fromElement:d=="mouseout"&&(c=a.toElement);this.relatedTarget=c,p?(this.clientX=p.clientX!==void 0?p.clientX:p.pageX,this.clientY=p.clientY!==void 0?p.clientY:p.pageY,this.screenX=p.screenX||0,this.screenY=p.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:xt[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&jt.aa.h.call(this)}}k(jt,we);var xt={2:"touch",3:"pen",4:"mouse"};jt.prototype.h=function(){jt.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var Dt="closure_listenable_"+(1e6*Math.random()|0),Jo=0;function Nu(a,c,d,p,N){this.listener=a,this.proxy=null,this.src=c,this.type=d,this.capture=!!p,this.ha=N,this.key=++Jo,this.da=this.fa=!1}function Sr(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Ar(a){this.src=a,this.g={},this.h=0}Ar.prototype.add=function(a,c,d,p,N){var x=a.toString();a=this.g[x],a||(a=this.g[x]=[],this.h++);var z=ri(a,c,p,N);return-1<z?(c=a[z],d||(c.fa=!1)):(c=new Nu(c,this.src,x,!!p,N),c.fa=d,a.push(c)),c};function as(a,c){var d=c.type;if(d in a.g){var p=a.g[d],N=Array.prototype.indexOf.call(p,c,void 0),x;(x=0<=N)&&Array.prototype.splice.call(p,N,1),x&&(Sr(c),a.g[d].length==0&&(delete a.g[d],a.h--))}}function ri(a,c,d,p){for(var N=0;N<a.length;++N){var x=a[N];if(!x.da&&x.listener==c&&x.capture==!!d&&x.ha==p)return N}return-1}var Zt="closure_lm_"+(1e6*Math.random()|0),ii={};function ls(a,c,d,p,N){if(Array.isArray(c)){for(var x=0;x<c.length;x++)ls(a,c[x],d,p,N);return null}return d=ta(d),a&&a[Dt]?a.K(c,d,h(p)?!!p.capture:!1,N):pn(a,c,d,!1,p,N)}function pn(a,c,d,p,N,x){if(!c)throw Error("Invalid event type");var z=h(N)?!!N.capture:!!N,fe=cs(a);if(fe||(a[Zt]=fe=new Ar(a)),d=fe.add(c,d,p,z,x),d.proxy)return d;if(p=si(),d.proxy=p,p.src=a,p.listener=d,a.addEventListener)Nt||(N=z),N===void 0&&(N=!1),a.addEventListener(c.toString(),p,N);else if(a.attachEvent)a.attachEvent(ea(c.toString()),p);else if(a.addListener&&a.removeListener)a.addListener(p);else throw Error("addEventListener and attachEvent are unavailable.");return d}function si(){function a(d){return c.call(a.src,a.listener,d)}const c=xu;return a}function Zo(a,c,d,p,N){if(Array.isArray(c))for(var x=0;x<c.length;x++)Zo(a,c[x],d,p,N);else p=h(p)?!!p.capture:!!p,d=ta(d),a&&a[Dt]?(a=a.i,c=String(c).toString(),c in a.g&&(x=a.g[c],d=ri(x,d,p,N),-1<d&&(Sr(x[d]),Array.prototype.splice.call(x,d,1),x.length==0&&(delete a.g[c],a.h--)))):a&&(a=cs(a))&&(c=a.g[c.toString()],a=-1,c&&(a=ri(c,d,p,N)),(d=-1<a?c[a]:null)&&us(d))}function us(a){if(typeof a!="number"&&a&&!a.da){var c=a.src;if(c&&c[Dt])as(c.i,a);else{var d=a.type,p=a.proxy;c.removeEventListener?c.removeEventListener(d,p,a.capture):c.detachEvent?c.detachEvent(ea(d),p):c.addListener&&c.removeListener&&c.removeListener(p),(d=cs(c))?(as(d,a),d.h==0&&(d.src=null,c[Zt]=null)):Sr(a)}}}function ea(a){return a in ii?ii[a]:ii[a]="on"+a}function xu(a,c){if(a.da)a=!0;else{c=new jt(c,this);var d=a.listener,p=a.ha||a.src;a.fa&&us(a),a=d.call(p,c)}return a}function cs(a){return a=a[Zt],a instanceof Ar?a:null}var hs="__closure_events_fn_"+(1e9*Math.random()>>>0);function ta(a){return typeof a=="function"?a:(a[hs]||(a[hs]=function(c){return a.handleEvent(c)}),a[hs])}function je(){re.call(this),this.i=new Ar(this),this.M=this,this.F=null}k(je,re),je.prototype[Dt]=!0,je.prototype.removeEventListener=function(a,c,d,p){Zo(this,a,c,d,p)};function V(a,c){var d,p=a.F;if(p)for(d=[];p;p=p.F)d.push(p);if(a=a.M,p=c.type||c,typeof c=="string")c=new we(c,a);else if(c instanceof we)c.target=c.target||a;else{var N=c;c=new we(p,a),w(c,N)}if(N=!0,d)for(var x=d.length-1;0<=x;x--){var z=c.g=d[x];N=Y(z,p,!0,c)&&N}if(z=c.g=a,N=Y(z,p,!0,c)&&N,N=Y(z,p,!1,c)&&N,d)for(x=0;x<d.length;x++)z=c.g=d[x],N=Y(z,p,!1,c)&&N}je.prototype.N=function(){if(je.aa.N.call(this),this.i){var a=this.i,c;for(c in a.g){for(var d=a.g[c],p=0;p<d.length;p++)Sr(d[p]);delete a.g[c],a.h--}}this.F=null},je.prototype.K=function(a,c,d,p){return this.i.add(String(a),c,!1,d,p)},je.prototype.L=function(a,c,d,p){return this.i.add(String(a),c,!0,d,p)};function Y(a,c,d,p){if(c=a.i.g[String(c)],!c)return!0;c=c.concat();for(var N=!0,x=0;x<c.length;++x){var z=c[x];if(z&&!z.da&&z.capture==d){var fe=z.listener,He=z.ha||z.src;z.fa&&as(a.i,z),N=fe.call(He,p)!==!1&&N}}return N&&!p.defaultPrevented}function te(a,c,d){if(typeof a=="function")d&&(a=y(a,d));else if(a&&typeof a.handleEvent=="function")a=y(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(c)?-1:l.setTimeout(a,c||0)}function Ie(a){a.g=te(()=>{a.g=null,a.i&&(a.i=!1,Ie(a))},a.l);const c=a.h;a.h=null,a.m.apply(null,c)}class De extends re{constructor(c,d){super(),this.m=c,this.l=d,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:Ie(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ce(a){re.call(this),this.h=a,this.g={}}k(ce,re);var mt=[];function Rr(a){U(a.g,function(c,d){this.g.hasOwnProperty(d)&&us(c)},a),a.g={}}ce.prototype.N=function(){ce.aa.N.call(this),Rr(this)},ce.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Du=l.JSON.stringify,kw=l.JSON.parse,Nw=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function Vu(){}Vu.prototype.h=null;function Mf(a){return a.h||(a.h=a.i())}function bf(){}var ds={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Ou(){we.call(this,"d")}k(Ou,we);function Lu(){we.call(this,"c")}k(Lu,we);var Pr={},Ff=null;function na(){return Ff=Ff||new je}Pr.La="serverreachability";function Uf(a){we.call(this,Pr.La,a)}k(Uf,we);function fs(a){const c=na();V(c,new Uf(c))}Pr.STAT_EVENT="statevent";function jf(a,c){we.call(this,Pr.STAT_EVENT,a),this.stat=c}k(jf,we);function ut(a){const c=na();V(c,new jf(c,a))}Pr.Ma="timingevent";function zf(a,c){we.call(this,Pr.Ma,a),this.size=c}k(zf,we);function ps(a,c){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},c)}function ms(){this.g=!0}ms.prototype.xa=function(){this.g=!1};function xw(a,c,d,p,N,x){a.info(function(){if(a.g)if(x)for(var z="",fe=x.split("&"),He=0;He<fe.length;He++){var le=fe[He].split("=");if(1<le.length){var Ze=le[0];le=le[1];var et=Ze.split("_");z=2<=et.length&&et[1]=="type"?z+(Ze+"="+le+"&"):z+(Ze+"=redacted&")}}else z=null;else z=x;return"XMLHTTP REQ ("+p+") [attempt "+N+"]: "+c+`
`+d+`
`+z})}function Dw(a,c,d,p,N,x,z){a.info(function(){return"XMLHTTP RESP ("+p+") [ attempt "+N+"]: "+c+`
`+d+`
`+x+" "+z})}function oi(a,c,d,p){a.info(function(){return"XMLHTTP TEXT ("+c+"): "+Ow(a,d)+(p?" "+p:"")})}function Vw(a,c){a.info(function(){return"TIMEOUT: "+c})}ms.prototype.info=function(){};function Ow(a,c){if(!a.g)return c;if(!c)return null;try{var d=JSON.parse(c);if(d){for(a=0;a<d.length;a++)if(Array.isArray(d[a])){var p=d[a];if(!(2>p.length)){var N=p[1];if(Array.isArray(N)&&!(1>N.length)){var x=N[0];if(x!="noop"&&x!="stop"&&x!="close")for(var z=1;z<N.length;z++)N[z]=""}}}}return Du(d)}catch{return c}}var ra={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Bf={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Mu;function ia(){}k(ia,Vu),ia.prototype.g=function(){return new XMLHttpRequest},ia.prototype.i=function(){return{}},Mu=new ia;function jn(a,c,d,p){this.j=a,this.i=c,this.l=d,this.R=p||1,this.U=new ce(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new $f}function $f(){this.i=null,this.g="",this.h=!1}var Wf={},bu={};function Fu(a,c,d){a.L=1,a.v=la(mn(c)),a.m=d,a.P=!0,Hf(a,null)}function Hf(a,c){a.F=Date.now(),sa(a),a.A=mn(a.v);var d=a.A,p=a.R;Array.isArray(p)||(p=[String(p)]),sp(d.i,"t",p),a.C=0,d=a.j.J,a.h=new $f,a.g=Ip(a.j,d?c:null,!a.m),0<a.O&&(a.M=new De(y(a.Y,a,a.g),a.O)),c=a.U,d=a.g,p=a.ca;var N="readystatechange";Array.isArray(N)||(N&&(mt[0]=N.toString()),N=mt);for(var x=0;x<N.length;x++){var z=ls(d,N[x],p||c.handleEvent,!1,c.h||c);if(!z)break;c.g[z.key]=z}c=a.H?m(a.H):{},a.m?(a.u||(a.u="POST"),c["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,c)):(a.u="GET",a.g.ea(a.A,a.u,null,c)),fs(),xw(a.i,a.u,a.A,a.l,a.R,a.m)}jn.prototype.ca=function(a){a=a.target;const c=this.M;c&&gn(a)==3?c.j():this.Y(a)},jn.prototype.Y=function(a){try{if(a==this.g)e:{const et=gn(this.g);var c=this.g.Ba();const ui=this.g.Z();if(!(3>et)&&(et!=3||this.g&&(this.h.h||this.g.oa()||dp(this.g)))){this.J||et!=4||c==7||(c==8||0>=ui?fs(3):fs(2)),Uu(this);var d=this.g.Z();this.X=d;t:if(qf(this)){var p=dp(this.g);a="";var N=p.length,x=gn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Cr(this),gs(this);var z="";break t}this.h.i=new l.TextDecoder}for(c=0;c<N;c++)this.h.h=!0,a+=this.h.i.decode(p[c],{stream:!(x&&c==N-1)});p.length=0,this.h.g+=a,this.C=0,z=this.h.g}else z=this.g.oa();if(this.o=d==200,Dw(this.i,this.u,this.A,this.l,this.R,et,d),this.o){if(this.T&&!this.K){t:{if(this.g){var fe,He=this.g;if((fe=He.g?He.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!E(fe)){var le=fe;break t}}le=null}if(d=le)oi(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ju(this,d);else{this.o=!1,this.s=3,ut(12),Cr(this),gs(this);break e}}if(this.P){d=!0;let zt;for(;!this.J&&this.C<z.length;)if(zt=Lw(this,z),zt==bu){et==4&&(this.s=4,ut(14),d=!1),oi(this.i,this.l,null,"[Incomplete Response]");break}else if(zt==Wf){this.s=4,ut(15),oi(this.i,this.l,z,"[Invalid Chunk]"),d=!1;break}else oi(this.i,this.l,zt,null),ju(this,zt);if(qf(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),et!=4||z.length!=0||this.h.h||(this.s=1,ut(16),d=!1),this.o=this.o&&d,!d)oi(this.i,this.l,z,"[Invalid Chunked Response]"),Cr(this),gs(this);else if(0<z.length&&!this.W){this.W=!0;var Ze=this.j;Ze.g==this&&Ze.ba&&!Ze.M&&(Ze.j.info("Great, no buffering proxy detected. Bytes received: "+z.length),qu(Ze),Ze.M=!0,ut(11))}}else oi(this.i,this.l,z,null),ju(this,z);et==4&&Cr(this),this.o&&!this.J&&(et==4?vp(this.j,this):(this.o=!1,sa(this)))}else Jw(this.g),d==400&&0<z.indexOf("Unknown SID")?(this.s=3,ut(12)):(this.s=0,ut(13)),Cr(this),gs(this)}}}catch{}finally{}};function qf(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function Lw(a,c){var d=a.C,p=c.indexOf(`
`,d);return p==-1?bu:(d=Number(c.substring(d,p)),isNaN(d)?Wf:(p+=1,p+d>c.length?bu:(c=c.slice(p,p+d),a.C=p+d,c)))}jn.prototype.cancel=function(){this.J=!0,Cr(this)};function sa(a){a.S=Date.now()+a.I,Kf(a,a.I)}function Kf(a,c){if(a.B!=null)throw Error("WatchDog timer not null");a.B=ps(y(a.ba,a),c)}function Uu(a){a.B&&(l.clearTimeout(a.B),a.B=null)}jn.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(Vw(this.i,this.A),this.L!=2&&(fs(),ut(17)),Cr(this),this.s=2,gs(this)):Kf(this,this.S-a)};function gs(a){a.j.G==0||a.J||vp(a.j,a)}function Cr(a){Uu(a);var c=a.M;c&&typeof c.ma=="function"&&c.ma(),a.M=null,Rr(a.U),a.g&&(c=a.g,a.g=null,c.abort(),c.ma())}function ju(a,c){try{var d=a.j;if(d.G!=0&&(d.g==a||zu(d.h,a))){if(!a.K&&zu(d.h,a)&&d.G==3){try{var p=d.Da.g.parse(c)}catch{p=null}if(Array.isArray(p)&&p.length==3){var N=p;if(N[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<a.F)pa(d),da(d);else break e;Hu(d),ut(18)}}else d.za=N[1],0<d.za-d.T&&37500>N[2]&&d.F&&d.v==0&&!d.C&&(d.C=ps(y(d.Za,d),6e3));if(1>=Yf(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else Nr(d,11)}else if((a.K||d.g==a)&&pa(d),!E(c))for(N=d.Da.g.parse(c),c=0;c<N.length;c++){let le=N[c];if(d.T=le[0],le=le[1],d.G==2)if(le[0]=="c"){d.K=le[1],d.ia=le[2];const Ze=le[3];Ze!=null&&(d.la=Ze,d.j.info("VER="+d.la));const et=le[4];et!=null&&(d.Aa=et,d.j.info("SVER="+d.Aa));const ui=le[5];ui!=null&&typeof ui=="number"&&0<ui&&(p=1.5*ui,d.L=p,d.j.info("backChannelRequestTimeoutMs_="+p)),p=d;const zt=a.g;if(zt){const ga=zt.g?zt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ga){var x=p.h;x.g||ga.indexOf("spdy")==-1&&ga.indexOf("quic")==-1&&ga.indexOf("h2")==-1||(x.j=x.l,x.g=new Set,x.h&&(Bu(x,x.h),x.h=null))}if(p.D){const Ku=zt.g?zt.g.getResponseHeader("X-HTTP-Session-Id"):null;Ku&&(p.ya=Ku,ge(p.I,p.D,Ku))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-a.F,d.j.info("Handshake RTT: "+d.R+"ms")),p=d;var z=a;if(p.qa=Tp(p,p.J?p.ia:null,p.W),z.K){Xf(p.h,z);var fe=z,He=p.L;He&&(fe.I=He),fe.B&&(Uu(fe),sa(fe)),p.g=z}else yp(p);0<d.i.length&&fa(d)}else le[0]!="stop"&&le[0]!="close"||Nr(d,7);else d.G==3&&(le[0]=="stop"||le[0]=="close"?le[0]=="stop"?Nr(d,7):Wu(d):le[0]!="noop"&&d.l&&d.l.ta(le),d.v=0)}}fs(4)}catch{}}var Mw=class{constructor(a,c){this.g=a,this.map=c}};function Gf(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Qf(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Yf(a){return a.h?1:a.g?a.g.size:0}function zu(a,c){return a.h?a.h==c:a.g?a.g.has(c):!1}function Bu(a,c){a.g?a.g.add(c):a.h=c}function Xf(a,c){a.h&&a.h==c?a.h=null:a.g&&a.g.has(c)&&a.g.delete(c)}Gf.prototype.cancel=function(){if(this.i=Jf(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Jf(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let c=a.i;for(const d of a.g.values())c=c.concat(d.D);return c}return D(a.i)}function bw(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(u(a)){for(var c=[],d=a.length,p=0;p<d;p++)c.push(a[p]);return c}c=[],d=0;for(p in a)c[d++]=a[p];return c}function Fw(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(u(a)||typeof a=="string"){var c=[];a=a.length;for(var d=0;d<a;d++)c.push(d);return c}c=[],d=0;for(const p in a)c[d++]=p;return c}}}function Zf(a,c){if(a.forEach&&typeof a.forEach=="function")a.forEach(c,void 0);else if(u(a)||typeof a=="string")Array.prototype.forEach.call(a,c,void 0);else for(var d=Fw(a),p=bw(a),N=p.length,x=0;x<N;x++)c.call(void 0,p[x],d&&d[x],a)}var ep=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Uw(a,c){if(a){a=a.split("&");for(var d=0;d<a.length;d++){var p=a[d].indexOf("="),N=null;if(0<=p){var x=a[d].substring(0,p);N=a[d].substring(p+1)}else x=a[d];c(x,N?decodeURIComponent(N.replace(/\+/g," ")):"")}}}function kr(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof kr){this.h=a.h,oa(this,a.j),this.o=a.o,this.g=a.g,aa(this,a.s),this.l=a.l;var c=a.i,d=new vs;d.i=c.i,c.g&&(d.g=new Map(c.g),d.h=c.h),tp(this,d),this.m=a.m}else a&&(c=String(a).match(ep))?(this.h=!1,oa(this,c[1]||"",!0),this.o=ys(c[2]||""),this.g=ys(c[3]||"",!0),aa(this,c[4]),this.l=ys(c[5]||"",!0),tp(this,c[6]||"",!0),this.m=ys(c[7]||"")):(this.h=!1,this.i=new vs(null,this.h))}kr.prototype.toString=function(){var a=[],c=this.j;c&&a.push(_s(c,np,!0),":");var d=this.g;return(d||c=="file")&&(a.push("//"),(c=this.o)&&a.push(_s(c,np,!0),"@"),a.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&a.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(_s(d,d.charAt(0)=="/"?Bw:zw,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",_s(d,Ww)),a.join("")};function mn(a){return new kr(a)}function oa(a,c,d){a.j=d?ys(c,!0):c,a.j&&(a.j=a.j.replace(/:$/,""))}function aa(a,c){if(c){if(c=Number(c),isNaN(c)||0>c)throw Error("Bad port number "+c);a.s=c}else a.s=null}function tp(a,c,d){c instanceof vs?(a.i=c,Hw(a.i,a.h)):(d||(c=_s(c,$w)),a.i=new vs(c,a.h))}function ge(a,c,d){a.i.set(c,d)}function la(a){return ge(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function ys(a,c){return a?c?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function _s(a,c,d){return typeof a=="string"?(a=encodeURI(a).replace(c,jw),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function jw(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var np=/[#\/\?@]/g,zw=/[#\?:]/g,Bw=/[#\?]/g,$w=/[#\?@]/g,Ww=/#/g;function vs(a,c){this.h=this.g=null,this.i=a||null,this.j=!!c}function zn(a){a.g||(a.g=new Map,a.h=0,a.i&&Uw(a.i,function(c,d){a.add(decodeURIComponent(c.replace(/\+/g," ")),d)}))}t=vs.prototype,t.add=function(a,c){zn(this),this.i=null,a=ai(this,a);var d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(c),this.h+=1,this};function rp(a,c){zn(a),c=ai(a,c),a.g.has(c)&&(a.i=null,a.h-=a.g.get(c).length,a.g.delete(c))}function ip(a,c){return zn(a),c=ai(a,c),a.g.has(c)}t.forEach=function(a,c){zn(this),this.g.forEach(function(d,p){d.forEach(function(N){a.call(c,N,p,this)},this)},this)},t.na=function(){zn(this);const a=Array.from(this.g.values()),c=Array.from(this.g.keys()),d=[];for(let p=0;p<c.length;p++){const N=a[p];for(let x=0;x<N.length;x++)d.push(c[p])}return d},t.V=function(a){zn(this);let c=[];if(typeof a=="string")ip(this,a)&&(c=c.concat(this.g.get(ai(this,a))));else{a=Array.from(this.g.values());for(let d=0;d<a.length;d++)c=c.concat(a[d])}return c},t.set=function(a,c){return zn(this),this.i=null,a=ai(this,a),ip(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[c]),this.h+=1,this},t.get=function(a,c){return a?(a=this.V(a),0<a.length?String(a[0]):c):c};function sp(a,c,d){rp(a,c),0<d.length&&(a.i=null,a.g.set(ai(a,c),D(d)),a.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],c=Array.from(this.g.keys());for(var d=0;d<c.length;d++){var p=c[d];const x=encodeURIComponent(String(p)),z=this.V(p);for(p=0;p<z.length;p++){var N=x;z[p]!==""&&(N+="="+encodeURIComponent(String(z[p]))),a.push(N)}}return this.i=a.join("&")};function ai(a,c){return c=String(c),a.j&&(c=c.toLowerCase()),c}function Hw(a,c){c&&!a.j&&(zn(a),a.i=null,a.g.forEach(function(d,p){var N=p.toLowerCase();p!=N&&(rp(this,p),sp(this,N,d))},a)),a.j=c}function qw(a,c){const d=new ms;if(l.Image){const p=new Image;p.onload=P(Bn,d,"TestLoadImage: loaded",!0,c,p),p.onerror=P(Bn,d,"TestLoadImage: error",!1,c,p),p.onabort=P(Bn,d,"TestLoadImage: abort",!1,c,p),p.ontimeout=P(Bn,d,"TestLoadImage: timeout",!1,c,p),l.setTimeout(function(){p.ontimeout&&p.ontimeout()},1e4),p.src=a}else c(!1)}function Kw(a,c){const d=new ms,p=new AbortController,N=setTimeout(()=>{p.abort(),Bn(d,"TestPingServer: timeout",!1,c)},1e4);fetch(a,{signal:p.signal}).then(x=>{clearTimeout(N),x.ok?Bn(d,"TestPingServer: ok",!0,c):Bn(d,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(N),Bn(d,"TestPingServer: error",!1,c)})}function Bn(a,c,d,p,N){try{N&&(N.onload=null,N.onerror=null,N.onabort=null,N.ontimeout=null),p(d)}catch{}}function Gw(){this.g=new Nw}function Qw(a,c,d){const p=d||"";try{Zf(a,function(N,x){let z=N;h(N)&&(z=Du(N)),c.push(p+x+"="+encodeURIComponent(z))})}catch(N){throw c.push(p+"type="+encodeURIComponent("_badmap")),N}}function ua(a){this.l=a.Ub||null,this.j=a.eb||!1}k(ua,Vu),ua.prototype.g=function(){return new ca(this.l,this.j)},ua.prototype.i=function(a){return function(){return a}}({});function ca(a,c){je.call(this),this.D=a,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}k(ca,je),t=ca.prototype,t.open=function(a,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=c,this.readyState=1,ws(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const c={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(c.body=a),(this.D||l).fetch(new Request(this.A,c)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Es(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,ws(this)),this.g&&(this.readyState=3,ws(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;op(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function op(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var c=a.value?a.value:new Uint8Array(0);(c=this.v.decode(c,{stream:!a.done}))&&(this.response=this.responseText+=c)}a.done?Es(this):ws(this),this.readyState==3&&op(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,Es(this))},t.Qa=function(a){this.g&&(this.response=a,Es(this))},t.ga=function(){this.g&&Es(this)};function Es(a){a.readyState=4,a.l=null,a.j=null,a.v=null,ws(a)}t.setRequestHeader=function(a,c){this.u.append(a,c)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],c=this.h.entries();for(var d=c.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=c.next();return a.join(`\r
`)};function ws(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(ca.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function ap(a){let c="";return U(a,function(d,p){c+=p,c+=":",c+=d,c+=`\r
`}),c}function $u(a,c,d){e:{for(p in d){var p=!1;break e}p=!0}p||(d=ap(d),typeof a=="string"?d!=null&&encodeURIComponent(String(d)):ge(a,c,d))}function Ce(a){je.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}k(Ce,je);var Yw=/^https?$/i,Xw=["POST","PUT"];t=Ce.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,c,d,p){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);c=c?c.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Mu.g(),this.v=this.o?Mf(this.o):Mf(Mu),this.g.onreadystatechange=y(this.Ea,this);try{this.B=!0,this.g.open(c,String(a),!0),this.B=!1}catch(x){lp(this,x);return}if(a=d||"",d=new Map(this.headers),p)if(Object.getPrototypeOf(p)===Object.prototype)for(var N in p)d.set(N,p[N]);else if(typeof p.keys=="function"&&typeof p.get=="function")for(const x of p.keys())d.set(x,p.get(x));else throw Error("Unknown input type for opt_headers: "+String(p));p=Array.from(d.keys()).find(x=>x.toLowerCase()=="content-type"),N=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(Xw,c,void 0))||p||N||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[x,z]of d)this.g.setRequestHeader(x,z);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{hp(this),this.u=!0,this.g.send(a),this.u=!1}catch(x){lp(this,x)}};function lp(a,c){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=c,a.m=5,up(a),ha(a)}function up(a){a.A||(a.A=!0,V(a,"complete"),V(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,V(this,"complete"),V(this,"abort"),ha(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ha(this,!0)),Ce.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?cp(this):this.bb())},t.bb=function(){cp(this)};function cp(a){if(a.h&&typeof o<"u"&&(!a.v[1]||gn(a)!=4||a.Z()!=2)){if(a.u&&gn(a)==4)te(a.Ea,0,a);else if(V(a,"readystatechange"),gn(a)==4){a.h=!1;try{const z=a.Z();e:switch(z){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var d;if(!(d=c)){var p;if(p=z===0){var N=String(a.D).match(ep)[1]||null;!N&&l.self&&l.self.location&&(N=l.self.location.protocol.slice(0,-1)),p=!Yw.test(N?N.toLowerCase():"")}d=p}if(d)V(a,"complete"),V(a,"success");else{a.m=6;try{var x=2<gn(a)?a.g.statusText:""}catch{x=""}a.l=x+" ["+a.Z()+"]",up(a)}}finally{ha(a)}}}}function ha(a,c){if(a.g){hp(a);const d=a.g,p=a.v[0]?()=>{}:null;a.g=null,a.v=null,c||V(a,"ready");try{d.onreadystatechange=p}catch{}}}function hp(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function gn(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<gn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var c=this.g.responseText;return a&&c.indexOf(a)==0&&(c=c.substring(a.length)),kw(c)}};function dp(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function Jw(a){const c={};a=(a.g&&2<=gn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let p=0;p<a.length;p++){if(E(a[p]))continue;var d=R(a[p]);const N=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const x=c[N]||[];c[N]=x,x.push(d)}_(c,function(p){return p.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ts(a,c,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||c}function fp(a){this.Aa=0,this.i=[],this.j=new ms,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Ts("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Ts("baseRetryDelayMs",5e3,a),this.cb=Ts("retryDelaySeedMs",1e4,a),this.Wa=Ts("forwardChannelMaxRetries",2,a),this.wa=Ts("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Gf(a&&a.concurrentRequestLimit),this.Da=new Gw,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=fp.prototype,t.la=8,t.G=1,t.connect=function(a,c,d,p){ut(0),this.W=a,this.H=c||{},d&&p!==void 0&&(this.H.OSID=d,this.H.OAID=p),this.F=this.X,this.I=Tp(this,null,this.W),fa(this)};function Wu(a){if(pp(a),a.G==3){var c=a.U++,d=mn(a.I);if(ge(d,"SID",a.K),ge(d,"RID",c),ge(d,"TYPE","terminate"),Is(a,d),c=new jn(a,a.j,c),c.L=2,c.v=la(mn(d)),d=!1,l.navigator&&l.navigator.sendBeacon)try{d=l.navigator.sendBeacon(c.v.toString(),"")}catch{}!d&&l.Image&&(new Image().src=c.v,d=!0),d||(c.g=Ip(c.j,null),c.g.ea(c.v)),c.F=Date.now(),sa(c)}wp(a)}function da(a){a.g&&(qu(a),a.g.cancel(),a.g=null)}function pp(a){da(a),a.u&&(l.clearTimeout(a.u),a.u=null),pa(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function fa(a){if(!Qf(a.h)&&!a.s){a.s=!0;var c=a.Ga;Ee||Q(),B||(Ee(),B=!0),K.add(c,a),a.B=0}}function Zw(a,c){return Yf(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=c.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=ps(y(a.Ga,a,c),Ep(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const N=new jn(this,this.j,a);let x=this.o;if(this.S&&(x?(x=m(x),w(x,this.S)):x=this.S),this.m!==null||this.O||(N.H=x,x=null),this.P)e:{for(var c=0,d=0;d<this.i.length;d++){t:{var p=this.i[d];if("__data__"in p.map&&(p=p.map.__data__,typeof p=="string")){p=p.length;break t}p=void 0}if(p===void 0)break;if(c+=p,4096<c){c=d;break e}if(c===4096||d===this.i.length-1){c=d+1;break e}}c=1e3}else c=1e3;c=gp(this,N,c),d=mn(this.I),ge(d,"RID",a),ge(d,"CVER",22),this.D&&ge(d,"X-HTTP-Session-Id",this.D),Is(this,d),x&&(this.O?c="headers="+encodeURIComponent(String(ap(x)))+"&"+c:this.m&&$u(d,this.m,x)),Bu(this.h,N),this.Ua&&ge(d,"TYPE","init"),this.P?(ge(d,"$req",c),ge(d,"SID","null"),N.T=!0,Fu(N,d,null)):Fu(N,d,c),this.G=2}}else this.G==3&&(a?mp(this,a):this.i.length==0||Qf(this.h)||mp(this))};function mp(a,c){var d;c?d=c.l:d=a.U++;const p=mn(a.I);ge(p,"SID",a.K),ge(p,"RID",d),ge(p,"AID",a.T),Is(a,p),a.m&&a.o&&$u(p,a.m,a.o),d=new jn(a,a.j,d,a.B+1),a.m===null&&(d.H=a.o),c&&(a.i=c.D.concat(a.i)),c=gp(a,d,1e3),d.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),Bu(a.h,d),Fu(d,p,c)}function Is(a,c){a.H&&U(a.H,function(d,p){ge(c,p,d)}),a.l&&Zf({},function(d,p){ge(c,p,d)})}function gp(a,c,d){d=Math.min(a.i.length,d);var p=a.l?y(a.l.Na,a.l,a):null;e:{var N=a.i;let x=-1;for(;;){const z=["count="+d];x==-1?0<d?(x=N[0].g,z.push("ofs="+x)):x=0:z.push("ofs="+x);let fe=!0;for(let He=0;He<d;He++){let le=N[He].g;const Ze=N[He].map;if(le-=x,0>le)x=Math.max(0,N[He].g-100),fe=!1;else try{Qw(Ze,z,"req"+le+"_")}catch{p&&p(Ze)}}if(fe){p=z.join("&");break e}}}return a=a.i.splice(0,d),c.D=a,p}function yp(a){if(!a.g&&!a.u){a.Y=1;var c=a.Fa;Ee||Q(),B||(Ee(),B=!0),K.add(c,a),a.v=0}}function Hu(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=ps(y(a.Fa,a),Ep(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,_p(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=ps(y(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ut(10),da(this),_p(this))};function qu(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function _p(a){a.g=new jn(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var c=mn(a.qa);ge(c,"RID","rpc"),ge(c,"SID",a.K),ge(c,"AID",a.T),ge(c,"CI",a.F?"0":"1"),!a.F&&a.ja&&ge(c,"TO",a.ja),ge(c,"TYPE","xmlhttp"),Is(a,c),a.m&&a.o&&$u(c,a.m,a.o),a.L&&(a.g.I=a.L);var d=a.g;a=a.ia,d.L=1,d.v=la(mn(c)),d.m=null,d.P=!0,Hf(d,a)}t.Za=function(){this.C!=null&&(this.C=null,da(this),Hu(this),ut(19))};function pa(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function vp(a,c){var d=null;if(a.g==c){pa(a),qu(a),a.g=null;var p=2}else if(zu(a.h,c))d=c.D,Xf(a.h,c),p=1;else return;if(a.G!=0){if(c.o)if(p==1){d=c.m?c.m.length:0,c=Date.now()-c.F;var N=a.B;p=na(),V(p,new zf(p,d)),fa(a)}else yp(a);else if(N=c.s,N==3||N==0&&0<c.X||!(p==1&&Zw(a,c)||p==2&&Hu(a)))switch(d&&0<d.length&&(c=a.h,c.i=c.i.concat(d)),N){case 1:Nr(a,5);break;case 4:Nr(a,10);break;case 3:Nr(a,6);break;default:Nr(a,2)}}}function Ep(a,c){let d=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(d*=2),d*c}function Nr(a,c){if(a.j.info("Error code "+c),c==2){var d=y(a.fb,a),p=a.Xa;const N=!p;p=new kr(p||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||oa(p,"https"),la(p),N?qw(p.toString(),d):Kw(p.toString(),d)}else ut(2);a.G=0,a.l&&a.l.sa(c),wp(a),pp(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),ut(2)):(this.j.info("Failed to ping google.com"),ut(1))};function wp(a){if(a.G=0,a.ka=[],a.l){const c=Jf(a.h);(c.length!=0||a.i.length!=0)&&(L(a.ka,c),L(a.ka,a.i),a.h.i.length=0,D(a.i),a.i.length=0),a.l.ra()}}function Tp(a,c,d){var p=d instanceof kr?mn(d):new kr(d);if(p.g!="")c&&(p.g=c+"."+p.g),aa(p,p.s);else{var N=l.location;p=N.protocol,c=c?c+"."+N.hostname:N.hostname,N=+N.port;var x=new kr(null);p&&oa(x,p),c&&(x.g=c),N&&aa(x,N),d&&(x.l=d),p=x}return d=a.D,c=a.ya,d&&c&&ge(p,d,c),ge(p,"VER",a.la),Is(a,p),p}function Ip(a,c,d){if(c&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return c=a.Ca&&!a.pa?new Ce(new ua({eb:d})):new Ce(a.pa),c.Ha(a.J),c}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Sp(){}t=Sp.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function ma(){}ma.prototype.g=function(a,c){return new Tt(a,c)};function Tt(a,c){je.call(this),this.g=new fp(c),this.l=a,this.h=c&&c.messageUrlParams||null,a=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(a?a["X-WebChannel-Content-Type"]=c.messageContentType:a={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.va&&(a?a["X-WebChannel-Client-Profile"]=c.va:a={"X-WebChannel-Client-Profile":c.va}),this.g.S=a,(a=c&&c.Sb)&&!E(a)&&(this.g.m=a),this.v=c&&c.supportsCrossDomainXhr||!1,this.u=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!E(c)&&(this.g.D=c,a=this.h,a!==null&&c in a&&(a=this.h,c in a&&delete a[c])),this.j=new li(this)}k(Tt,je),Tt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Tt.prototype.close=function(){Wu(this.g)},Tt.prototype.o=function(a){var c=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.u&&(d={},d.__data__=Du(a),a=d);c.i.push(new Mw(c.Ya++,a)),c.G==3&&fa(c)},Tt.prototype.N=function(){this.g.l=null,delete this.j,Wu(this.g),delete this.g,Tt.aa.N.call(this)};function Ap(a){Ou.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var c=a.__sm__;if(c){e:{for(const d in c){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,c=c!==null&&a in c?c[a]:void 0),this.data=c}else this.data=a}k(Ap,Ou);function Rp(){Lu.call(this),this.status=1}k(Rp,Lu);function li(a){this.g=a}k(li,Sp),li.prototype.ua=function(){V(this.g,"a")},li.prototype.ta=function(a){V(this.g,new Ap(a))},li.prototype.sa=function(a){V(this.g,new Rp)},li.prototype.ra=function(){V(this.g,"b")},ma.prototype.createWebChannel=ma.prototype.g,Tt.prototype.send=Tt.prototype.o,Tt.prototype.open=Tt.prototype.m,Tt.prototype.close=Tt.prototype.close,kv=function(){return new ma},Cv=function(){return na()},Pv=Pr,kh={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},ra.NO_ERROR=0,ra.TIMEOUT=8,ra.HTTP_ERROR=6,Xa=ra,Bf.COMPLETE="complete",Rv=Bf,bf.EventType=ds,ds.OPEN="a",ds.CLOSE="b",ds.ERROR="c",ds.MESSAGE="d",je.prototype.listen=je.prototype.K,js=bf,Ce.prototype.listenOnce=Ce.prototype.L,Ce.prototype.getLastError=Ce.prototype.Ka,Ce.prototype.getLastErrorCode=Ce.prototype.Ba,Ce.prototype.getStatus=Ce.prototype.Z,Ce.prototype.getResponseJson=Ce.prototype.Oa,Ce.prototype.getResponseText=Ce.prototype.oa,Ce.prototype.send=Ce.prototype.ea,Ce.prototype.setWithCredentials=Ce.prototype.Ha,Av=Ce}).apply(typeof Oa<"u"?Oa:typeof self<"u"?self:typeof window<"u"?window:{});const Km="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}it.UNAUTHENTICATED=new it(null),it.GOOGLE_CREDENTIALS=new it("google-credentials-uid"),it.FIRST_PARTY=new it("first-party-uid"),it.MOCK_USER=new it("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ns="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kr=new $d("@firebase/firestore");function Ds(){return Kr.logLevel}function H(t,...e){if(Kr.logLevel<=ie.DEBUG){const n=e.map(qd);Kr.debug(`Firestore (${ns}): ${t}`,...n)}}function Vn(t,...e){if(Kr.logLevel<=ie.ERROR){const n=e.map(qd);Kr.error(`Firestore (${ns}): ${t}`,...n)}}function Hi(t,...e){if(Kr.logLevel<=ie.WARN){const n=e.map(qd);Kr.warn(`Firestore (${ns}): ${t}`,...n)}}function qd(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X(t="Unexpected state"){const e=`FIRESTORE (${ns}) INTERNAL ASSERTION FAILED: `+t;throw Vn(e),new Error(e)}function de(t,e){t||X()}function Z(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class W extends bn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nv{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class aA{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(it.UNAUTHENTICATED))}shutdown(){}}class lA{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class uA{constructor(e){this.t=e,this.currentUser=it.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){de(this.o===void 0);let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new Rn;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Rn,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{H("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(H("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Rn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(H("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(de(typeof r.accessToken=="string"),new Nv(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return de(e===null||typeof e=="string"),new it(e)}}class cA{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=it.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class hA{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new cA(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(it.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class dA{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class fA{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){de(this.o===void 0);const r=s=>{s.error!=null&&H("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,H("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{H("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):H("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(de(typeof n.token=="string"),this.R=n.token,new dA(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pA(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xv{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=pA(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function ue(t,e){return t<e?-1:t>e?1:0}function qi(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new W(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new W(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new W(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new W(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Fe.fromMillis(Date.now())}static fromDate(e){return Fe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Fe(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ue(this.nanoseconds,e.nanoseconds):ue(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(e){this.timestamp=e}static fromTimestamp(e){return new J(e)}static min(){return new J(new Fe(0,0))}static max(){return new J(new Fe(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class So{constructor(e,n,r){n===void 0?n=0:n>e.length&&X(),r===void 0?r=e.length-n:r>e.length-n&&X(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return So.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof So?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class _e extends So{construct(e,n,r){return new _e(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new W(M.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new _e(n)}static emptyPath(){return new _e([])}}const mA=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ge extends So{construct(e,n,r){return new Ge(e,n,r)}static isValidIdentifier(e){return mA.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ge.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ge(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new W(M.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new W(M.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new W(M.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else l==="`"?(o=!o,i++):l!=="."||o?(r+=l,i++):(s(),i++)}if(s(),o)throw new W(M.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ge(n)}static emptyPath(){return new Ge([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{constructor(e){this.path=e}static fromPath(e){return new q(_e.fromString(e))}static fromName(e){return new q(_e.fromString(e).popFirst(5))}static empty(){return new q(_e.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&_e.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return _e.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new q(new _e(e.slice()))}}function gA(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=J.fromTimestamp(r===1e9?new Fe(n+1,0):new Fe(n,r));return new gr(i,q.empty(),e)}function yA(t){return new gr(t.readTime,t.key,-1)}class gr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new gr(J.min(),q.empty(),-1)}static max(){return new gr(J.max(),q.empty(),-1)}}function _A(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=q.comparator(t.documentKey,e.documentKey),n!==0?n:ue(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vA="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class EA{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jo(t){if(t.code!==M.FAILED_PRECONDITION||t.message!==vA)throw t;H("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&X(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new b((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof b?n:b.resolve(n)}catch(n){return b.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):b.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):b.reject(n)}static resolve(e){return new b((n,r)=>{n(e)})}static reject(e){return new b((n,r)=>{r(e)})}static waitFor(e){return new b((n,r)=>{let i=0,s=0,o=!1;e.forEach(l=>{++i,l.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=b.resolve(!1);for(const r of e)n=n.next(i=>i?b.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new b((r,i)=>{const s=e.length,o=new Array(s);let l=0;for(let u=0;u<s;u++){const h=u;n(e[h]).next(f=>{o[h]=f,++l,l===s&&r(o)},f=>i(f))}})}static doWhile(e,n){return new b((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function wA(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function zo(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kd{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Kd.oe=-1;function cu(t){return t==null}function Vl(t){return t===0&&1/t==-1/0}function TA(t){return typeof t=="number"&&Number.isInteger(t)&&!Vl(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gm(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ei(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Dv(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pe{constructor(e,n){this.comparator=e,this.root=n||Ke.EMPTY}insert(e,n){return new Pe(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ke.BLACK,null,null))}remove(e){return new Pe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ke.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new La(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new La(this.root,e,this.comparator,!1)}getReverseIterator(){return new La(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new La(this.root,e,this.comparator,!0)}}class La{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ke{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Ke.RED,this.left=i??Ke.EMPTY,this.right=s??Ke.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Ke(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Ke.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Ke.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ke.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ke.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw X();const e=this.left.check();if(e!==this.right.check())throw X();return e+(this.isRed()?0:1)}}Ke.EMPTY=null,Ke.RED=!0,Ke.BLACK=!1;Ke.EMPTY=new class{constructor(){this.size=0}get key(){throw X()}get value(){throw X()}get color(){throw X()}get left(){throw X()}get right(){throw X()}copy(e,n,r,i,s){return this}insert(e,n,r){return new Ke(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye{constructor(e){this.comparator=e,this.data=new Pe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Qm(this.data.getIterator())}getIteratorFrom(e){return new Qm(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Ye)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Ye(this.comparator);return n.data=e,n}}class Qm{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(e){this.fields=e,e.sort(Ge.comparator)}static empty(){return new At([])}unionWith(e){let n=new Ye(Ge.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new At(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return qi(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vv extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new Vv("Invalid base64 string: "+s):s}}(e);return new Je(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new Je(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ue(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Je.EMPTY_BYTE_STRING=new Je("");const IA=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function yr(t){if(de(!!t),typeof t=="string"){let e=0;const n=IA.exec(t);if(de(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ne(t.seconds),nanos:Ne(t.nanos)}}function Ne(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Gr(t){return typeof t=="string"?Je.fromBase64String(t):Je.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gd(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Qd(t){const e=t.mapValue.fields.__previous_value__;return Gd(e)?Qd(e):e}function Ao(t){const e=yr(t.mapValue.fields.__local_write_time__.timestampValue);return new Fe(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SA{constructor(e,n,r,i,s,o,l,u,h){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=h}}class Ro{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Ro("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Ro&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ma={mapValue:{}};function Qr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Gd(t)?4:RA(t)?9007199254740991:AA(t)?10:11:X()}function dn(t,e){if(t===e)return!0;const n=Qr(t);if(n!==Qr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ao(t).isEqual(Ao(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=yr(i.timestampValue),l=yr(s.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Gr(i.bytesValue).isEqual(Gr(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Ne(i.geoPointValue.latitude)===Ne(s.geoPointValue.latitude)&&Ne(i.geoPointValue.longitude)===Ne(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Ne(i.integerValue)===Ne(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Ne(i.doubleValue),l=Ne(s.doubleValue);return o===l?Vl(o)===Vl(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return qi(t.arrayValue.values||[],e.arrayValue.values||[],dn);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},l=s.mapValue.fields||{};if(Gm(o)!==Gm(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!dn(o[u],l[u])))return!1;return!0}(t,e);default:return X()}}function Po(t,e){return(t.values||[]).find(n=>dn(n,e))!==void 0}function Ki(t,e){if(t===e)return 0;const n=Qr(t),r=Qr(e);if(n!==r)return ue(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ue(t.booleanValue,e.booleanValue);case 2:return function(s,o){const l=Ne(s.integerValue||s.doubleValue),u=Ne(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return Ym(t.timestampValue,e.timestampValue);case 4:return Ym(Ao(t),Ao(e));case 5:return ue(t.stringValue,e.stringValue);case 6:return function(s,o){const l=Gr(s),u=Gr(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const l=s.split("/"),u=o.split("/");for(let h=0;h<l.length&&h<u.length;h++){const f=ue(l[h],u[h]);if(f!==0)return f}return ue(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const l=ue(Ne(s.latitude),Ne(o.latitude));return l!==0?l:ue(Ne(s.longitude),Ne(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Xm(t.arrayValue,e.arrayValue);case 10:return function(s,o){var l,u,h,f;const g=s.fields||{},y=o.fields||{},P=(l=g.value)===null||l===void 0?void 0:l.arrayValue,k=(u=y.value)===null||u===void 0?void 0:u.arrayValue,D=ue(((h=P==null?void 0:P.values)===null||h===void 0?void 0:h.length)||0,((f=k==null?void 0:k.values)===null||f===void 0?void 0:f.length)||0);return D!==0?D:Xm(P,k)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===Ma.mapValue&&o===Ma.mapValue)return 0;if(s===Ma.mapValue)return 1;if(o===Ma.mapValue)return-1;const l=s.fields||{},u=Object.keys(l),h=o.fields||{},f=Object.keys(h);u.sort(),f.sort();for(let g=0;g<u.length&&g<f.length;++g){const y=ue(u[g],f[g]);if(y!==0)return y;const P=Ki(l[u[g]],h[f[g]]);if(P!==0)return P}return ue(u.length,f.length)}(t.mapValue,e.mapValue);default:throw X()}}function Ym(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ue(t,e);const n=yr(t),r=yr(e),i=ue(n.seconds,r.seconds);return i!==0?i:ue(n.nanos,r.nanos)}function Xm(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=Ki(n[i],r[i]);if(s)return s}return ue(n.length,r.length)}function Gi(t){return Nh(t)}function Nh(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=yr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Gr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return q.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=Nh(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Nh(n.fields[o])}`;return i+"}"}(t.mapValue):X()}function Jm(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function xh(t){return!!t&&"integerValue"in t}function Yd(t){return!!t&&"arrayValue"in t}function Zm(t){return!!t&&"nullValue"in t}function eg(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Ja(t){return!!t&&"mapValue"in t}function AA(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function Zs(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return ei(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Zs(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Zs(t.arrayValue.values[n]);return e}return Object.assign({},t)}function RA(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt{constructor(e){this.value=e}static empty(){return new yt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Ja(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Zs(n)}setAll(e){let n=Ge.emptyPath(),r={},i=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=l.popLast()}o?r[l.lastSegment()]=Zs(o):i.push(l.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Ja(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return dn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Ja(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){ei(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new yt(Zs(this.value))}}function Ov(t){const e=[];return ei(t.fields,(n,r)=>{const i=new Ge([n]);if(Ja(r)){const s=Ov(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new At(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(e,n,r,i,s,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=l}static newInvalidDocument(e){return new ot(e,0,J.min(),J.min(),J.min(),yt.empty(),0)}static newFoundDocument(e,n,r,i){return new ot(e,1,n,J.min(),r,i,0)}static newNoDocument(e,n){return new ot(e,2,n,J.min(),J.min(),yt.empty(),0)}static newUnknownDocument(e,n){return new ot(e,3,n,J.min(),J.min(),yt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(J.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=yt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=yt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=J.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ot&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ot(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ol{constructor(e,n){this.position=e,this.inclusive=n}}function tg(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=q.comparator(q.fromName(o.referenceValue),n.key):r=Ki(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function ng(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!dn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ll{constructor(e,n="asc"){this.field=e,this.dir=n}}function PA(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lv{}class Le extends Lv{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new kA(e,n,r):n==="array-contains"?new DA(e,r):n==="in"?new VA(e,r):n==="not-in"?new OA(e,r):n==="array-contains-any"?new LA(e,r):new Le(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new NA(e,r):new xA(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Ki(n,this.value)):n!==null&&Qr(this.value)===Qr(n)&&this.matchesComparison(Ki(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return X()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Qt extends Lv{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new Qt(e,n)}matches(e){return Mv(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Mv(t){return t.op==="and"}function bv(t){return CA(t)&&Mv(t)}function CA(t){for(const e of t.filters)if(e instanceof Qt)return!1;return!0}function Dh(t){if(t instanceof Le)return t.field.canonicalString()+t.op.toString()+Gi(t.value);if(bv(t))return t.filters.map(e=>Dh(e)).join(",");{const e=t.filters.map(n=>Dh(n)).join(",");return`${t.op}(${e})`}}function Fv(t,e){return t instanceof Le?function(r,i){return i instanceof Le&&r.op===i.op&&r.field.isEqual(i.field)&&dn(r.value,i.value)}(t,e):t instanceof Qt?function(r,i){return i instanceof Qt&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,l)=>s&&Fv(o,i.filters[l]),!0):!1}(t,e):void X()}function Uv(t){return t instanceof Le?function(n){return`${n.field.canonicalString()} ${n.op} ${Gi(n.value)}`}(t):t instanceof Qt?function(n){return n.op.toString()+" {"+n.getFilters().map(Uv).join(" ,")+"}"}(t):"Filter"}class kA extends Le{constructor(e,n,r){super(e,n,r),this.key=q.fromName(r.referenceValue)}matches(e){const n=q.comparator(e.key,this.key);return this.matchesComparison(n)}}class NA extends Le{constructor(e,n){super(e,"in",n),this.keys=jv("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class xA extends Le{constructor(e,n){super(e,"not-in",n),this.keys=jv("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function jv(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>q.fromName(r.referenceValue))}class DA extends Le{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Yd(n)&&Po(n.arrayValue,this.value)}}class VA extends Le{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Po(this.value.arrayValue,n)}}class OA extends Le{constructor(e,n){super(e,"not-in",n)}matches(e){if(Po(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Po(this.value.arrayValue,n)}}class LA extends Le{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Yd(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Po(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MA{constructor(e,n=null,r=[],i=[],s=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=l,this.ue=null}}function rg(t,e=null,n=[],r=[],i=null,s=null,o=null){return new MA(t,e,n,r,i,s,o)}function Xd(t){const e=Z(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Dh(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),cu(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Gi(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Gi(r)).join(",")),e.ue=n}return e.ue}function Jd(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!PA(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Fv(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!ng(t.startAt,e.startAt)&&ng(t.endAt,e.endAt)}function Vh(t){return q.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bo{constructor(e,n=null,r=[],i=[],s=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=l,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function bA(t,e,n,r,i,s,o,l){return new Bo(t,e,n,r,i,s,o,l)}function Zd(t){return new Bo(t)}function ig(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function zv(t){return t.collectionGroup!==null}function eo(t){const e=Z(t);if(e.ce===null){e.ce=[];const n=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new Ye(Ge.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(h=>{h.isInequality()&&(l=l.add(h.field))})}),l})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new Ll(s,r))}),n.has(Ge.keyField().canonicalString())||e.ce.push(new Ll(Ge.keyField(),r))}return e.ce}function ln(t){const e=Z(t);return e.le||(e.le=FA(e,eo(t))),e.le}function FA(t,e){if(t.limitType==="F")return rg(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Ll(i.field,s)});const n=t.endAt?new Ol(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Ol(t.startAt.position,t.startAt.inclusive):null;return rg(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Oh(t,e){const n=t.filters.concat([e]);return new Bo(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Lh(t,e,n){return new Bo(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function hu(t,e){return Jd(ln(t),ln(e))&&t.limitType===e.limitType}function Bv(t){return`${Xd(ln(t))}|lt:${t.limitType}`}function hi(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>Uv(i)).join(", ")}]`),cu(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Gi(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Gi(i)).join(",")),`Target(${r})`}(ln(t))}; limitType=${t.limitType})`}function du(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):q.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of eo(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,l,u){const h=tg(o,l,u);return o.inclusive?h<=0:h<0}(r.startAt,eo(r),i)||r.endAt&&!function(o,l,u){const h=tg(o,l,u);return o.inclusive?h>=0:h>0}(r.endAt,eo(r),i))}(t,e)}function UA(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function $v(t){return(e,n)=>{let r=!1;for(const i of eo(t)){const s=jA(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function jA(t,e,n){const r=t.field.isKeyField()?q.comparator(e.key,n.key):function(s,o,l){const u=o.data.field(s),h=l.data.field(s);return u!==null&&h!==null?Ki(u,h):X()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return X()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rs{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){ei(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return Dv(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zA=new Pe(q.comparator);function On(){return zA}const Wv=new Pe(q.comparator);function zs(...t){let e=Wv;for(const n of t)e=e.insert(n.key,n);return e}function Hv(t){let e=Wv;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function br(){return to()}function qv(){return to()}function to(){return new rs(t=>t.toString(),(t,e)=>t.isEqual(e))}const BA=new Pe(q.comparator),$A=new Ye(q.comparator);function ne(...t){let e=$A;for(const n of t)e=e.add(n);return e}const WA=new Ye(ue);function HA(){return WA}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ef(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Vl(e)?"-0":e}}function Kv(t){return{integerValue:""+t}}function qA(t,e){return TA(e)?Kv(e):ef(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fu{constructor(){this._=void 0}}function KA(t,e,n){return t instanceof Co?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Gd(s)&&(s=Qd(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof ko?Qv(t,e):t instanceof No?Yv(t,e):function(i,s){const o=Gv(i,s),l=sg(o)+sg(i.Pe);return xh(o)&&xh(i.Pe)?Kv(l):ef(i.serializer,l)}(t,e)}function GA(t,e,n){return t instanceof ko?Qv(t,e):t instanceof No?Yv(t,e):n}function Gv(t,e){return t instanceof Ml?function(r){return xh(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Co extends fu{}class ko extends fu{constructor(e){super(),this.elements=e}}function Qv(t,e){const n=Xv(e);for(const r of t.elements)n.some(i=>dn(i,r))||n.push(r);return{arrayValue:{values:n}}}class No extends fu{constructor(e){super(),this.elements=e}}function Yv(t,e){let n=Xv(e);for(const r of t.elements)n=n.filter(i=>!dn(i,r));return{arrayValue:{values:n}}}class Ml extends fu{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function sg(t){return Ne(t.integerValue||t.doubleValue)}function Xv(t){return Yd(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QA{constructor(e,n){this.field=e,this.transform=n}}function YA(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof ko&&i instanceof ko||r instanceof No&&i instanceof No?qi(r.elements,i.elements,dn):r instanceof Ml&&i instanceof Ml?dn(r.Pe,i.Pe):r instanceof Co&&i instanceof Co}(t.transform,e.transform)}class XA{constructor(e,n){this.version=e,this.transformResults=n}}class bt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new bt}static exists(e){return new bt(void 0,e)}static updateTime(e){return new bt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Za(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class pu{}function Jv(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new tf(t.key,bt.none()):new $o(t.key,t.data,bt.none());{const n=t.data,r=yt.empty();let i=new Ye(Ge.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Tr(t.key,r,new At(i.toArray()),bt.none())}}function JA(t,e,n){t instanceof $o?function(i,s,o){const l=i.value.clone(),u=ag(i.fieldTransforms,s,o.transformResults);l.setAll(u),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof Tr?function(i,s,o){if(!Za(i.precondition,s))return void s.convertToUnknownDocument(o.version);const l=ag(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(Zv(i)),u.setAll(l),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function no(t,e,n,r){return t instanceof $o?function(s,o,l,u){if(!Za(s.precondition,o))return l;const h=s.value.clone(),f=lg(s.fieldTransforms,u,o);return h.setAll(f),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null}(t,e,n,r):t instanceof Tr?function(s,o,l,u){if(!Za(s.precondition,o))return l;const h=lg(s.fieldTransforms,u,o),f=o.data;return f.setAll(Zv(s)),f.setAll(h),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(g=>g.field))}(t,e,n,r):function(s,o,l){return Za(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function ZA(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=Gv(r.transform,i||null);s!=null&&(n===null&&(n=yt.empty()),n.set(r.field,s))}return n||null}function og(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&qi(r,i,(s,o)=>YA(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class $o extends pu{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Tr extends pu{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function Zv(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function ag(t,e,n){const r=new Map;de(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,l=e.data.field(s.field);r.set(s.field,GA(o,l,n[i]))}return r}function lg(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,KA(s,o,e))}return r}class tf extends pu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class eR extends pu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tR{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&JA(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=no(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=no(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=qv();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let l=this.applyToLocalView(o,s.mutatedFields);l=n.has(i.key)?null:l;const u=Jv(o,l);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(J.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ne())}isEqual(e){return this.batchId===e.batchId&&qi(this.mutations,e.mutations,(n,r)=>og(n,r))&&qi(this.baseMutations,e.baseMutations,(n,r)=>og(n,r))}}class nf{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){de(e.mutations.length===r.length);let i=function(){return BA}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new nf(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nR{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rR{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ve,se;function iR(t){switch(t){default:return X();case M.CANCELLED:case M.UNKNOWN:case M.DEADLINE_EXCEEDED:case M.RESOURCE_EXHAUSTED:case M.INTERNAL:case M.UNAVAILABLE:case M.UNAUTHENTICATED:return!1;case M.INVALID_ARGUMENT:case M.NOT_FOUND:case M.ALREADY_EXISTS:case M.PERMISSION_DENIED:case M.FAILED_PRECONDITION:case M.ABORTED:case M.OUT_OF_RANGE:case M.UNIMPLEMENTED:case M.DATA_LOSS:return!0}}function eE(t){if(t===void 0)return Vn("GRPC error has no .code"),M.UNKNOWN;switch(t){case Ve.OK:return M.OK;case Ve.CANCELLED:return M.CANCELLED;case Ve.UNKNOWN:return M.UNKNOWN;case Ve.DEADLINE_EXCEEDED:return M.DEADLINE_EXCEEDED;case Ve.RESOURCE_EXHAUSTED:return M.RESOURCE_EXHAUSTED;case Ve.INTERNAL:return M.INTERNAL;case Ve.UNAVAILABLE:return M.UNAVAILABLE;case Ve.UNAUTHENTICATED:return M.UNAUTHENTICATED;case Ve.INVALID_ARGUMENT:return M.INVALID_ARGUMENT;case Ve.NOT_FOUND:return M.NOT_FOUND;case Ve.ALREADY_EXISTS:return M.ALREADY_EXISTS;case Ve.PERMISSION_DENIED:return M.PERMISSION_DENIED;case Ve.FAILED_PRECONDITION:return M.FAILED_PRECONDITION;case Ve.ABORTED:return M.ABORTED;case Ve.OUT_OF_RANGE:return M.OUT_OF_RANGE;case Ve.UNIMPLEMENTED:return M.UNIMPLEMENTED;case Ve.DATA_LOSS:return M.DATA_LOSS;default:return X()}}(se=Ve||(Ve={}))[se.OK=0]="OK",se[se.CANCELLED=1]="CANCELLED",se[se.UNKNOWN=2]="UNKNOWN",se[se.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",se[se.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",se[se.NOT_FOUND=5]="NOT_FOUND",se[se.ALREADY_EXISTS=6]="ALREADY_EXISTS",se[se.PERMISSION_DENIED=7]="PERMISSION_DENIED",se[se.UNAUTHENTICATED=16]="UNAUTHENTICATED",se[se.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",se[se.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",se[se.ABORTED=10]="ABORTED",se[se.OUT_OF_RANGE=11]="OUT_OF_RANGE",se[se.UNIMPLEMENTED=12]="UNIMPLEMENTED",se[se.INTERNAL=13]="INTERNAL",se[se.UNAVAILABLE=14]="UNAVAILABLE",se[se.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sR(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oR=new jr([4294967295,4294967295],0);function ug(t){const e=sR().encode(t),n=new Sv;return n.update(e),new Uint8Array(n.digest())}function cg(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new jr([n,r],0),new jr([i,s],0)]}class rf{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Bs(`Invalid padding: ${n}`);if(r<0)throw new Bs(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Bs(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Bs(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=jr.fromNumber(this.Ie)}Ee(e,n,r){let i=e.add(n.multiply(jr.fromNumber(r)));return i.compare(oR)===1&&(i=new jr([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=ug(e),[r,i]=cg(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);if(!this.de(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new rf(s,i,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.Ie===0)return;const n=ug(e),[r,i]=cg(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Bs extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mu{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Wo.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new mu(J.min(),i,new Pe(ue),On(),ne())}}class Wo{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Wo(r,n,ne(),ne(),ne())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class el{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class tE{constructor(e,n){this.targetId=e,this.me=n}}class nE{constructor(e,n,r=Je.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class hg{constructor(){this.fe=0,this.ge=fg(),this.pe=Je.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=ne(),n=ne(),r=ne();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:X()}}),new Wo(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=fg()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,de(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class aR{constructor(e){this.Le=e,this.Be=new Map,this.ke=On(),this.qe=dg(),this.Qe=new Pe(ue)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:X()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.ze(i)&&n(i)})}He(e){const n=e.targetId,r=e.me.count,i=this.Je(n);if(i){const s=i.target;if(Vh(s))if(r===0){const o=new q(s.path);this.Ue(n,o,ot.newNoDocument(o,J.min()))}else de(r===1);else{const o=this.Ye(n);if(o!==r){const l=this.Ze(e),u=l?this.Xe(l,e,o):1;if(u!==0){this.je(n);const h=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,h)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,l;try{o=Gr(r).toUint8Array()}catch(u){if(u instanceof Vv)return Hi("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new rf(o,i,s)}catch(u){return Hi(u instanceof Bs?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.Ie===0?null:l}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.tt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.Ue(n,s,null),i++)}),i}rt(e){const n=new Map;this.Be.forEach((s,o)=>{const l=this.Je(o);if(l){if(s.current&&Vh(l.target)){const u=new q(l.target.path);this.ke.get(u)!==null||this.it(o,u)||this.Ue(o,u,ot.newNoDocument(u,e))}s.be&&(n.set(o,s.ve()),s.Ce())}});let r=ne();this.qe.forEach((s,o)=>{let l=!0;o.forEachWhile(u=>{const h=this.Je(u);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const i=new mu(e,n,this.Qe,this.ke,r);return this.ke=On(),this.qe=dg(),this.Qe=new Pe(ue),i}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,n)?i.Fe(n,1):i.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new hg,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new Ye(ue),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||H("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new hg),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function dg(){return new Pe(q.comparator)}function fg(){return new Pe(q.comparator)}const lR={asc:"ASCENDING",desc:"DESCENDING"},uR={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},cR={and:"AND",or:"OR"};class hR{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Mh(t,e){return t.useProto3Json||cu(e)?e:{value:e}}function bl(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function rE(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function dR(t,e){return bl(t,e.toTimestamp())}function un(t){return de(!!t),J.fromTimestamp(function(n){const r=yr(n);return new Fe(r.seconds,r.nanos)}(t))}function sf(t,e){return bh(t,e).canonicalString()}function bh(t,e){const n=function(i){return new _e(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function iE(t){const e=_e.fromString(t);return de(uE(e)),e}function Fh(t,e){return sf(t.databaseId,e.path)}function Ac(t,e){const n=iE(e);if(n.get(1)!==t.databaseId.projectId)throw new W(M.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new W(M.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new q(oE(n))}function sE(t,e){return sf(t.databaseId,e)}function fR(t){const e=iE(t);return e.length===4?_e.emptyPath():oE(e)}function Uh(t){return new _e(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function oE(t){return de(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function pg(t,e,n){return{name:Fh(t,e),fields:n.value.mapValue.fields}}function pR(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:X()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(h,f){return h.useProto3Json?(de(f===void 0||typeof f=="string"),Je.fromBase64String(f||"")):(de(f===void 0||f instanceof Buffer||f instanceof Uint8Array),Je.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(h){const f=h.code===void 0?M.UNKNOWN:eE(h.code);return new W(f,h.message||"")}(o);n=new nE(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Ac(t,r.document.name),s=un(r.document.updateTime),o=r.document.createTime?un(r.document.createTime):J.min(),l=new yt({mapValue:{fields:r.document.fields}}),u=ot.newFoundDocument(i,s,o,l),h=r.targetIds||[],f=r.removedTargetIds||[];n=new el(h,f,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Ac(t,r.document),s=r.readTime?un(r.readTime):J.min(),o=ot.newNoDocument(i,s),l=r.removedTargetIds||[];n=new el([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Ac(t,r.document),s=r.removedTargetIds||[];n=new el([],s,i,null)}else{if(!("filter"in e))return X();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new rR(i,s),l=r.targetId;n=new tE(l,o)}}return n}function mR(t,e){let n;if(e instanceof $o)n={update:pg(t,e.key,e.value)};else if(e instanceof tf)n={delete:Fh(t,e.key)};else if(e instanceof Tr)n={update:pg(t,e.key,e.data),updateMask:SR(e.fieldMask)};else{if(!(e instanceof eR))return X();n={verify:Fh(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const l=o.transform;if(l instanceof Co)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof ko)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof No)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Ml)return{fieldPath:o.field.canonicalString(),increment:l.Pe};throw X()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:dR(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:X()}(t,e.precondition)),n}function gR(t,e){return t&&t.length>0?(de(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?un(i.updateTime):un(s);return o.isEqual(J.min())&&(o=un(s)),new XA(o,i.transformResults||[])}(n,e))):[]}function yR(t,e){return{documents:[sE(t,e.path)]}}function _R(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=sE(t,i);const s=function(h){if(h.length!==0)return lE(Qt.create(h,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(h){if(h.length!==0)return h.map(f=>function(y){return{field:di(y.field),direction:wR(y.dir)}}(f))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=Mh(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{_t:n,parent:i}}function vR(t){let e=fR(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){de(r===1);const f=n.from[0];f.allDescendants?i=f.collectionId:e=e.child(f.collectionId)}let s=[];n.where&&(s=function(g){const y=aE(g);return y instanceof Qt&&bv(y)?y.getFilters():[y]}(n.where));let o=[];n.orderBy&&(o=function(g){return g.map(y=>function(k){return new Ll(fi(k.field),function(L){switch(L){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(k.direction))}(y))}(n.orderBy));let l=null;n.limit&&(l=function(g){let y;return y=typeof g=="object"?g.value:g,cu(y)?null:y}(n.limit));let u=null;n.startAt&&(u=function(g){const y=!!g.before,P=g.values||[];return new Ol(P,y)}(n.startAt));let h=null;return n.endAt&&(h=function(g){const y=!g.before,P=g.values||[];return new Ol(P,y)}(n.endAt)),bA(e,i,o,s,l,"F",u,h)}function ER(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return X()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function aE(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=fi(n.unaryFilter.field);return Le.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=fi(n.unaryFilter.field);return Le.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=fi(n.unaryFilter.field);return Le.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=fi(n.unaryFilter.field);return Le.create(o,"!=",{nullValue:"NULL_VALUE"});default:return X()}}(t):t.fieldFilter!==void 0?function(n){return Le.create(fi(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return X()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Qt.create(n.compositeFilter.filters.map(r=>aE(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return X()}}(n.compositeFilter.op))}(t):X()}function wR(t){return lR[t]}function TR(t){return uR[t]}function IR(t){return cR[t]}function di(t){return{fieldPath:t.canonicalString()}}function fi(t){return Ge.fromServerFormat(t.fieldPath)}function lE(t){return t instanceof Le?function(n){if(n.op==="=="){if(eg(n.value))return{unaryFilter:{field:di(n.field),op:"IS_NAN"}};if(Zm(n.value))return{unaryFilter:{field:di(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(eg(n.value))return{unaryFilter:{field:di(n.field),op:"IS_NOT_NAN"}};if(Zm(n.value))return{unaryFilter:{field:di(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:di(n.field),op:TR(n.op),value:n.value}}}(t):t instanceof Qt?function(n){const r=n.getFilters().map(i=>lE(i));return r.length===1?r[0]:{compositeFilter:{op:IR(n.op),filters:r}}}(t):X()}function SR(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function uE(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tr{constructor(e,n,r,i,s=J.min(),o=J.min(),l=Je.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new tr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new tr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new tr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new tr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AR{constructor(e){this.ct=e}}function RR(t){const e=vR({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Lh(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PR{constructor(){this.un=new CR}addToCollectionParentIndex(e,n){return this.un.add(n),b.resolve()}getCollectionParents(e,n){return b.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return b.resolve()}deleteFieldIndex(e,n){return b.resolve()}deleteAllFieldIndexes(e){return b.resolve()}createTargetIndexes(e,n){return b.resolve()}getDocumentsMatchingTarget(e,n){return b.resolve(null)}getIndexType(e,n){return b.resolve(0)}getFieldIndexes(e,n){return b.resolve([])}getNextCollectionGroupToUpdate(e){return b.resolve(null)}getMinOffset(e,n){return b.resolve(gr.min())}getMinOffsetFromCollectionGroup(e,n){return b.resolve(gr.min())}updateCollectionGroup(e,n,r){return b.resolve()}updateIndexEntries(e,n){return b.resolve()}}class CR{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Ye(_e.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Ye(_e.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qi{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new Qi(0)}static kn(){return new Qi(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kR{constructor(){this.changes=new rs(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,ot.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?b.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NR{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xR{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&no(r.mutation,i,At.empty(),Fe.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ne()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ne()){const i=br();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=zs();return s.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=br();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ne()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,i){let s=On();const o=to(),l=function(){return to()}();return n.forEach((u,h)=>{const f=r.get(h.key);i.has(h.key)&&(f===void 0||f.mutation instanceof Tr)?s=s.insert(h.key,h):f!==void 0?(o.set(h.key,f.mutation.getFieldMask()),no(f.mutation,h,f.mutation.getFieldMask(),Fe.now())):o.set(h.key,At.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((h,f)=>o.set(h,f)),n.forEach((h,f)=>{var g;return l.set(h,new NR(f,(g=o.get(h))!==null&&g!==void 0?g:null))}),l))}recalculateAndSaveOverlays(e,n){const r=to();let i=new Pe((o,l)=>o-l),s=ne();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const h=n.get(u);if(h===null)return;let f=r.get(u)||At.empty();f=l.applyToLocalView(h,f),r.set(u,f);const g=(i.get(l.batchId)||ne()).add(u);i=i.insert(l.batchId,g)})}).next(()=>{const o=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),h=u.key,f=u.value,g=qv();f.forEach(y=>{if(!s.has(y)){const P=Jv(n.get(y),r.get(y));P!==null&&g.set(y,P),s=s.add(y)}}),o.push(this.documentOverlayCache.saveOverlays(e,h,g))}return b.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return q.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):zv(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):b.resolve(br());let l=-1,u=s;return o.next(h=>b.forEach(h,(f,g)=>(l<g.largestBatchId&&(l=g.largestBatchId),s.get(f)?b.resolve():this.remoteDocumentCache.getEntry(e,f).next(y=>{u=u.insert(f,y)}))).next(()=>this.populateOverlays(e,h,s)).next(()=>this.computeViews(e,u,h,ne())).next(f=>({batchId:l,changes:Hv(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new q(n)).next(r=>{let i=zs();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=zs();return this.indexManager.getCollectionParents(e,s).next(l=>b.forEach(l,u=>{const h=function(g,y){return new Bo(y,null,g.explicitOrderBy.slice(),g.filters.slice(),g.limit,g.limitType,g.startAt,g.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,h,r,i).next(f=>{f.forEach((g,y)=>{o=o.insert(g,y)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,h)=>{const f=h.getKey();o.get(f)===null&&(o=o.insert(f,ot.newInvalidDocument(f)))});let l=zs();return o.forEach((u,h)=>{const f=s.get(u);f!==void 0&&no(f.mutation,h,At.empty(),Fe.now()),du(n,h)&&(l=l.insert(u,h))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DR{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return b.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:un(i.createTime)}}(n)),b.resolve()}getNamedQuery(e,n){return b.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(i){return{name:i.name,query:RR(i.bundledQuery),readTime:un(i.readTime)}}(n)),b.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VR{constructor(){this.overlays=new Pe(q.comparator),this.Ir=new Map}getOverlay(e,n){return b.resolve(this.overlays.get(n))}getOverlays(e,n){const r=br();return b.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),b.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Ir.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Ir.delete(r)),b.resolve()}getOverlaysForCollection(e,n,r){const i=br(),s=n.length+1,o=new q(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,h=u.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return b.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Pe((h,f)=>h-f);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let f=s.get(h.largestBatchId);f===null&&(f=br(),s=s.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const l=br(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((h,f)=>l.set(h,f)),!(l.size()>=i)););return b.resolve(l)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Ir.get(i.largestBatchId).delete(r.key);this.Ir.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new nR(n,r));let s=this.Ir.get(n);s===void 0&&(s=ne(),this.Ir.set(n,s)),this.Ir.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OR{constructor(){this.sessionToken=Je.EMPTY_BYTE_STRING}getSessionToken(e){return b.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,b.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class of{constructor(){this.Tr=new Ye(ze.Er),this.dr=new Ye(ze.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new ze(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new ze(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new q(new _e([])),r=new ze(n,e),i=new ze(n,e+1),s=[];return this.dr.forEachInRange([r,i],o=>{this.Vr(o),s.push(o.key)}),s}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new q(new _e([])),r=new ze(n,e),i=new ze(n,e+1);let s=ne();return this.dr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new ze(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class ze{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return q.comparator(e.key,n.key)||ue(e.wr,n.wr)}static Ar(e,n){return ue(e.wr,n.wr)||q.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LR{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new Ye(ze.Er)}checkEmpty(e){return b.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new tR(s,n,r,i);this.mutationQueue.push(o);for(const l of i)this.br=this.br.add(new ze(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return b.resolve(o)}lookupMutationBatch(e,n){return b.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.vr(r),s=i<0?0:i;return b.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return b.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return b.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new ze(n,0),i=new ze(n,Number.POSITIVE_INFINITY),s=[];return this.br.forEachInRange([r,i],o=>{const l=this.Dr(o.wr);s.push(l)}),b.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Ye(ue);return n.forEach(i=>{const s=new ze(i,0),o=new ze(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([s,o],l=>{r=r.add(l.wr)})}),b.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;q.isDocumentKey(s)||(s=s.child(""));const o=new ze(new q(s),0);let l=new Ye(ue);return this.br.forEachWhile(u=>{const h=u.key.path;return!!r.isPrefixOf(h)&&(h.length===i&&(l=l.add(u.wr)),!0)},o),b.resolve(this.Cr(l))}Cr(e){const n=[];return e.forEach(r=>{const i=this.Dr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){de(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return b.forEach(n.mutations,i=>{const s=new ze(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new ze(n,0),i=this.br.firstAfterOrEqual(r);return b.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,b.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MR{constructor(e){this.Mr=e,this.docs=function(){return new Pe(q.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return b.resolve(r?r.document.mutableCopy():ot.newInvalidDocument(n))}getEntries(e,n){let r=On();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():ot.newInvalidDocument(i))}),b.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=On();const o=n.path,l=new q(o.child("")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:h,value:{document:f}}=u.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||_A(yA(f),r)<=0||(i.has(f.key)||du(n,f))&&(s=s.insert(f.key,f.mutableCopy()))}return b.resolve(s)}getAllFromCollectionGroup(e,n,r,i){X()}Or(e,n){return b.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new bR(this)}getSize(e){return b.resolve(this.size)}}class bR extends kR{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.cr.addEntry(e,i)):this.cr.removeEntry(r)}),b.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FR{constructor(e){this.persistence=e,this.Nr=new rs(n=>Xd(n),Jd),this.lastRemoteSnapshotVersion=J.min(),this.highestTargetId=0,this.Lr=0,this.Br=new of,this.targetCount=0,this.kr=Qi.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,i)=>n(i)),b.resolve()}getLastRemoteSnapshotVersion(e){return b.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return b.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),b.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),b.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new Qi(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,b.resolve()}updateTargetData(e,n){return this.Kn(n),b.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,b.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Nr.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Nr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),b.waitFor(s).next(()=>i)}getTargetCount(e){return b.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return b.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),b.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),b.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),b.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return b.resolve(r)}containsKey(e,n){return b.resolve(this.Br.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UR{constructor(e,n){this.qr={},this.overlays={},this.Qr=new Kd(0),this.Kr=!1,this.Kr=!0,this.$r=new OR,this.referenceDelegate=e(this),this.Ur=new FR(this),this.indexManager=new PR,this.remoteDocumentCache=function(i){return new MR(i)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new AR(n),this.Gr=new DR(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new VR,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new LR(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){H("MemoryPersistence","Starting transaction:",e);const i=new jR(this.Qr.next());return this.referenceDelegate.zr(),r(i).next(s=>this.referenceDelegate.jr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Hr(e,n){return b.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class jR extends EA{constructor(e){super(),this.currentSequenceNumber=e}}class af{constructor(e){this.persistence=e,this.Jr=new of,this.Yr=null}static Zr(e){return new af(e)}get Xr(){if(this.Yr)return this.Yr;throw X()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),b.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),b.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),b.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(i=>this.Xr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Xr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return b.forEach(this.Xr,r=>{const i=q.fromPath(r);return this.ei(e,i).next(s=>{s||n.removeEntry(i,J.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return b.or([()=>b.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lf{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=i}static Wi(e,n){let r=ne(),i=ne();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new lf(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zR{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BR{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return WI()?8:wA(lt())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.Yi(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Zi(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new zR;return this.Xi(e,n,o).next(l=>{if(s.result=l,this.zi)return this.es(e,n,o,l.size)})}).next(()=>s.result)}es(e,n,r,i){return r.documentReadCount<this.ji?(Ds()<=ie.DEBUG&&H("QueryEngine","SDK will not create cache indexes for query:",hi(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),b.resolve()):(Ds()<=ie.DEBUG&&H("QueryEngine","Query:",hi(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Hi*i?(Ds()<=ie.DEBUG&&H("QueryEngine","The SDK decides to create cache indexes for query:",hi(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,ln(n))):b.resolve())}Yi(e,n){if(ig(n))return b.resolve(null);let r=ln(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Lh(n,null,"F"),r=ln(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=ne(...s);return this.Ji.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const h=this.ts(n,l);return this.ns(n,h,o,u.readTime)?this.Yi(e,Lh(n,null,"F")):this.rs(e,h,n,u)}))})))}Zi(e,n,r,i){return ig(n)||i.isEqual(J.min())?b.resolve(null):this.Ji.getDocuments(e,r).next(s=>{const o=this.ts(n,s);return this.ns(n,o,r,i)?b.resolve(null):(Ds()<=ie.DEBUG&&H("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),hi(n)),this.rs(e,o,n,gA(i,-1)).next(l=>l))})}ts(e,n){let r=new Ye($v(e));return n.forEach((i,s)=>{du(e,s)&&(r=r.add(s))}),r}ns(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Xi(e,n,r){return Ds()<=ie.DEBUG&&H("QueryEngine","Using full collection scan to execute query:",hi(n)),this.Ji.getDocumentsMatchingQuery(e,n,gr.min(),r)}rs(e,n,r,i){return this.Ji.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $R{constructor(e,n,r,i){this.persistence=e,this.ss=n,this.serializer=i,this.os=new Pe(ue),this._s=new rs(s=>Xd(s),Jd),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new xR(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function WR(t,e,n,r){return new $R(t,e,n,r)}async function cE(t,e){const n=Z(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],l=[];let u=ne();for(const h of i){o.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}for(const h of s){l.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}return n.localDocuments.getDocuments(r,u).next(h=>({hs:h,removedBatchIds:o,addedBatchIds:l}))})})}function HR(t,e){const n=Z(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.cs.newChangeBuffer({trackRemovals:!0});return function(l,u,h,f){const g=h.batch,y=g.keys();let P=b.resolve();return y.forEach(k=>{P=P.next(()=>f.getEntry(u,k)).next(D=>{const L=h.docVersions.get(k);de(L!==null),D.version.compareTo(L)<0&&(g.applyToRemoteDocument(D,h),D.isValidDocument()&&(D.setReadTime(h.commitVersion),f.addEntry(D)))})}),P.next(()=>l.mutationQueue.removeMutationBatch(u,g))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=ne();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(u=u.add(l.batch.mutations[h].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function hE(t){const e=Z(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function qR(t,e){const n=Z(t),r=e.snapshotVersion;let i=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});i=n.os;const l=[];e.targetChanges.forEach((f,g)=>{const y=i.get(g);if(!y)return;l.push(n.Ur.removeMatchingKeys(s,f.removedDocuments,g).next(()=>n.Ur.addMatchingKeys(s,f.addedDocuments,g)));let P=y.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(g)!==null?P=P.withResumeToken(Je.EMPTY_BYTE_STRING,J.min()).withLastLimboFreeSnapshotVersion(J.min()):f.resumeToken.approximateByteSize()>0&&(P=P.withResumeToken(f.resumeToken,r)),i=i.insert(g,P),function(D,L,S){return D.resumeToken.approximateByteSize()===0||L.snapshotVersion.toMicroseconds()-D.snapshotVersion.toMicroseconds()>=3e8?!0:S.addedDocuments.size+S.modifiedDocuments.size+S.removedDocuments.size>0}(y,P,f)&&l.push(n.Ur.updateTargetData(s,P))});let u=On(),h=ne();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(s,f))}),l.push(KR(s,o,e.documentUpdates).next(f=>{u=f.Ps,h=f.Is})),!r.isEqual(J.min())){const f=n.Ur.getLastRemoteSnapshotVersion(s).next(g=>n.Ur.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(f)}return b.waitFor(l).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,h)).next(()=>u)}).then(s=>(n.os=i,s))}function KR(t,e,n){let r=ne(),i=ne();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=On();return n.forEach((l,u)=>{const h=s.get(l);u.isFoundDocument()!==h.isFoundDocument()&&(i=i.add(l)),u.isNoDocument()&&u.version.isEqual(J.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!h.isValidDocument()||u.version.compareTo(h.version)>0||u.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):H("LocalStore","Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",u.version)}),{Ps:o,Is:i}})}function GR(t,e){const n=Z(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function QR(t,e){const n=Z(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Ur.getTargetData(r,e).next(s=>s?(i=s,b.resolve(i)):n.Ur.allocateTargetId(r).next(o=>(i=new tr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.os.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function jh(t,e,n){const r=Z(t),i=r.os.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!zo(o))throw o;H("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(i.target)}function mg(t,e,n){const r=Z(t);let i=J.min(),s=ne();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,h,f){const g=Z(u),y=g._s.get(f);return y!==void 0?b.resolve(g.os.get(y)):g.Ur.getTargetData(h,f)}(r,o,ln(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,l.targetId).next(u=>{s=u})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,n?i:J.min(),n?s:ne())).next(l=>(YR(r,UA(e),l),{documents:l,Ts:s})))}function YR(t,e,n){let r=t.us.get(e)||J.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.us.set(e,r)}class gg{constructor(){this.activeTargetIds=HA()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class XR{constructor(){this.so=new gg,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new gg,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JR{_o(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yg{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){H("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){H("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ba=null;function Rc(){return ba===null?ba=function(){return 268435456+Math.round(2147483648*Math.random())}():ba++,"0x"+ba.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZR={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eP{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rt="WebChannelConnection";class tP extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${i}/databases/${s}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Fo(){return!1}Mo(n,r,i,s,o){const l=Rc(),u=this.xo(n,r.toUriEncodedString());H("RestConnection",`Sending RPC '${n}' ${l}:`,u,i);const h={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(h,s,o),this.No(n,u,h,i).then(f=>(H("RestConnection",`Received RPC '${n}' ${l}: `,f),f),f=>{throw Hi("RestConnection",`RPC '${n}' ${l} failed with error: `,f,"url: ",u,"request:",i),f})}Lo(n,r,i,s,o,l){return this.Mo(n,r,i,s,o)}Oo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ns}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}xo(n,r){const i=ZR[n];return`${this.Do}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,i){const s=Rc();return new Promise((o,l)=>{const u=new Av;u.setWithCredentials(!0),u.listenOnce(Rv.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case Xa.NO_ERROR:const f=u.getResponseJson();H(rt,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(f)),o(f);break;case Xa.TIMEOUT:H(rt,`RPC '${e}' ${s} timed out`),l(new W(M.DEADLINE_EXCEEDED,"Request time out"));break;case Xa.HTTP_ERROR:const g=u.getStatus();if(H(rt,`RPC '${e}' ${s} failed with status:`,g,"response text:",u.getResponseText()),g>0){let y=u.getResponseJson();Array.isArray(y)&&(y=y[0]);const P=y==null?void 0:y.error;if(P&&P.status&&P.message){const k=function(L){const S=L.toLowerCase().replace(/_/g,"-");return Object.values(M).indexOf(S)>=0?S:M.UNKNOWN}(P.status);l(new W(k,P.message))}else l(new W(M.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new W(M.UNAVAILABLE,"Connection failed."));break;default:X()}}finally{H(rt,`RPC '${e}' ${s} completed.`)}});const h=JSON.stringify(i);H(rt,`RPC '${e}' ${s} sending request:`,i),u.send(n,"POST",h,r,15)})}Bo(e,n,r){const i=Rc(),s=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=kv(),l=Cv(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(u.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Oo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const f=s.join("");H(rt,`Creating RPC '${e}' stream ${i}: ${f}`,u);const g=o.createWebChannel(f,u);let y=!1,P=!1;const k=new eP({Io:L=>{P?H(rt,`Not sending because RPC '${e}' stream ${i} is closed:`,L):(y||(H(rt,`Opening RPC '${e}' stream ${i} transport.`),g.open(),y=!0),H(rt,`RPC '${e}' stream ${i} sending:`,L),g.send(L))},To:()=>g.close()}),D=(L,S,E)=>{L.listen(S,A=>{try{E(A)}catch(O){setTimeout(()=>{throw O},0)}})};return D(g,js.EventType.OPEN,()=>{P||(H(rt,`RPC '${e}' stream ${i} transport opened.`),k.yo())}),D(g,js.EventType.CLOSE,()=>{P||(P=!0,H(rt,`RPC '${e}' stream ${i} transport closed`),k.So())}),D(g,js.EventType.ERROR,L=>{P||(P=!0,Hi(rt,`RPC '${e}' stream ${i} transport errored:`,L),k.So(new W(M.UNAVAILABLE,"The operation could not be completed")))}),D(g,js.EventType.MESSAGE,L=>{var S;if(!P){const E=L.data[0];de(!!E);const A=E,O=A.error||((S=A[0])===null||S===void 0?void 0:S.error);if(O){H(rt,`RPC '${e}' stream ${i} received error:`,O);const j=O.status;let U=function(v){const w=Ve[v];if(w!==void 0)return eE(w)}(j),_=O.message;U===void 0&&(U=M.INTERNAL,_="Unknown error status: "+j+" with message "+O.message),P=!0,k.So(new W(U,_)),g.close()}else H(rt,`RPC '${e}' stream ${i} received:`,E),k.bo(E)}}),D(l,Pv.STAT_EVENT,L=>{L.stat===kh.PROXY?H(rt,`RPC '${e}' stream ${i} detected buffering proxy`):L.stat===kh.NOPROXY&&H(rt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{k.wo()},0),k}}function Pc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gu(t){return new hR(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dE{constructor(e,n,r=1e3,i=1.5,s=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=i,this.Qo=s,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,n-r);i>0&&H("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fE{constructor(e,n,r,i,s,o,l,u){this.ui=e,this.Ho=r,this.Jo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new dE(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===M.RESOURCE_EXHAUSTED?(Vn(n.toString()),Vn("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===M.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Yo===n&&this.P_(r,i)},r=>{e(()=>{const i=new W(M.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(i)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{r(()=>this.I_(i))}),this.stream.onMessage(i=>{r(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return H("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(H("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class nP extends fE{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=pR(this.serializer,e),r=function(s){if(!("targetChange"in s))return J.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?J.min():o.readTime?un(o.readTime):J.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=Uh(this.serializer),n.addTarget=function(s,o){let l;const u=o.target;if(l=Vh(u)?{documents:yR(s,u)}:{query:_R(s,u)._t},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=rE(s,o.resumeToken);const h=Mh(s,o.expectedCount);h!==null&&(l.expectedCount=h)}else if(o.snapshotVersion.compareTo(J.min())>0){l.readTime=bl(s,o.snapshotVersion.toTimestamp());const h=Mh(s,o.expectedCount);h!==null&&(l.expectedCount=h)}return l}(this.serializer,e);const r=ER(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=Uh(this.serializer),n.removeTarget=e,this.a_(n)}}class rP extends fE{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return de(!!e.streamToken),this.lastStreamToken=e.streamToken,de(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){de(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=gR(e.writeResults,e.commitTime),r=un(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=Uh(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>mR(this.serializer,r))};this.a_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iP extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new W(M.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Mo(e,bh(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new W(M.UNKNOWN,s.toString())})}Lo(e,n,r,i,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Lo(e,bh(n,r),i,o,l,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new W(M.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class sP{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Vn(n),this.D_=!1):H("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oP{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=s,this.k_._o(o=>{r.enqueueAndForget(async()=>{ti(this)&&(H("RemoteStore","Restarting streams for network reachability change."),await async function(u){const h=Z(u);h.L_.add(4),await Ho(h),h.q_.set("Unknown"),h.L_.delete(4),await yu(h)}(this))})}),this.q_=new sP(r,i)}}async function yu(t){if(ti(t))for(const e of t.B_)await e(!0)}async function Ho(t){for(const e of t.B_)await e(!1)}function pE(t,e){const n=Z(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),df(n)?hf(n):is(n).r_()&&cf(n,e))}function uf(t,e){const n=Z(t),r=is(n);n.N_.delete(e),r.r_()&&mE(n,e),n.N_.size===0&&(r.r_()?r.o_():ti(n)&&n.q_.set("Unknown"))}function cf(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(J.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}is(t).A_(e)}function mE(t,e){t.Q_.xe(e),is(t).R_(e)}function hf(t){t.Q_=new aR({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),is(t).start(),t.q_.v_()}function df(t){return ti(t)&&!is(t).n_()&&t.N_.size>0}function ti(t){return Z(t).L_.size===0}function gE(t){t.Q_=void 0}async function aP(t){t.q_.set("Online")}async function lP(t){t.N_.forEach((e,n)=>{cf(t,e)})}async function uP(t,e){gE(t),df(t)?(t.q_.M_(e),hf(t)):t.q_.set("Unknown")}async function cP(t,e,n){if(t.q_.set("Online"),e instanceof nE&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const l of s.targetIds)i.N_.has(l)&&(await i.remoteSyncer.rejectListen(l,o),i.N_.delete(l),i.Q_.removeTarget(l))}(t,e)}catch(r){H("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Fl(t,r)}else if(e instanceof el?t.Q_.Ke(e):e instanceof tE?t.Q_.He(e):t.Q_.We(e),!n.isEqual(J.min()))try{const r=await hE(t.localStore);n.compareTo(r)>=0&&await function(s,o){const l=s.Q_.rt(o);return l.targetChanges.forEach((u,h)=>{if(u.resumeToken.approximateByteSize()>0){const f=s.N_.get(h);f&&s.N_.set(h,f.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,h)=>{const f=s.N_.get(u);if(!f)return;s.N_.set(u,f.withResumeToken(Je.EMPTY_BYTE_STRING,f.snapshotVersion)),mE(s,u);const g=new tr(f.target,u,h,f.sequenceNumber);cf(s,g)}),s.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){H("RemoteStore","Failed to raise snapshot:",r),await Fl(t,r)}}async function Fl(t,e,n){if(!zo(e))throw e;t.L_.add(1),await Ho(t),t.q_.set("Offline"),n||(n=()=>hE(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{H("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await yu(t)})}function yE(t,e){return e().catch(n=>Fl(t,n,e))}async function _u(t){const e=Z(t),n=_r(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;hP(e);)try{const i=await GR(e.localStore,r);if(i===null){e.O_.length===0&&n.o_();break}r=i.batchId,dP(e,i)}catch(i){await Fl(e,i)}_E(e)&&vE(e)}function hP(t){return ti(t)&&t.O_.length<10}function dP(t,e){t.O_.push(e);const n=_r(t);n.r_()&&n.V_&&n.m_(e.mutations)}function _E(t){return ti(t)&&!_r(t).n_()&&t.O_.length>0}function vE(t){_r(t).start()}async function fP(t){_r(t).p_()}async function pP(t){const e=_r(t);for(const n of t.O_)e.m_(n.mutations)}async function mP(t,e,n){const r=t.O_.shift(),i=nf.from(r,e,n);await yE(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await _u(t)}async function gP(t,e){e&&_r(t).V_&&await async function(r,i){if(function(o){return iR(o)&&o!==M.ABORTED}(i.code)){const s=r.O_.shift();_r(r).s_(),await yE(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await _u(r)}}(t,e),_E(t)&&vE(t)}async function _g(t,e){const n=Z(t);n.asyncQueue.verifyOperationInProgress(),H("RemoteStore","RemoteStore received new credentials");const r=ti(n);n.L_.add(3),await Ho(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await yu(n)}async function yP(t,e){const n=Z(t);e?(n.L_.delete(2),await yu(n)):e||(n.L_.add(2),await Ho(n),n.q_.set("Unknown"))}function is(t){return t.K_||(t.K_=function(n,r,i){const s=Z(n);return s.w_(),new nP(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:aP.bind(null,t),Ro:lP.bind(null,t),mo:uP.bind(null,t),d_:cP.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),df(t)?hf(t):t.q_.set("Unknown")):(await t.K_.stop(),gE(t))})),t.K_}function _r(t){return t.U_||(t.U_=function(n,r,i){const s=Z(n);return s.w_(),new rP(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:fP.bind(null,t),mo:gP.bind(null,t),f_:pP.bind(null,t),g_:mP.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await _u(t)):(await t.U_.stop(),t.O_.length>0&&(H("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ff{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Rn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,l=new ff(e,n,o,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new W(M.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function pf(t,e){if(Vn("AsyncQueue",`${e}: ${t}`),zo(t))return new W(M.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vi{constructor(e){this.comparator=e?(n,r)=>e(n,r)||q.comparator(n.key,r.key):(n,r)=>q.comparator(n.key,r.key),this.keyedMap=zs(),this.sortedSet=new Pe(this.comparator)}static emptySet(e){return new Vi(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Vi)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Vi;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vg{constructor(){this.W_=new Pe(q.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):X():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Yi{constructor(e,n,r,i,s,o,l,u,h){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=h}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new Yi(e,n,Vi.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&hu(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _P{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class vP{constructor(){this.queries=Eg(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const i=Z(n),s=i.queries;i.queries=Eg(),s.forEach((o,l)=>{for(const u of l.j_)u.onError(r)})})(this,new W(M.ABORTED,"Firestore shutting down"))}}function Eg(){return new rs(t=>Bv(t),hu)}async function EE(t,e){const n=Z(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.H_()&&e.J_()&&(r=2):(s=new _P,r=e.J_()?0:1);try{switch(r){case 0:s.z_=await n.onListen(i,!0);break;case 1:s.z_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const l=pf(o,`Initialization of query '${hi(e.query)}' failed`);return void e.onError(l)}n.queries.set(i,s),s.j_.push(e),e.Z_(n.onlineState),s.z_&&e.X_(s.z_)&&mf(n)}async function wE(t,e){const n=Z(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.j_.indexOf(e);o>=0&&(s.j_.splice(o,1),s.j_.length===0?i=e.J_()?0:1:!s.H_()&&e.J_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function EP(t,e){const n=Z(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const l of o.j_)l.X_(i)&&(r=!0);o.z_=i}}r&&mf(n)}function wP(t,e,n){const r=Z(t),i=r.queries.get(e);if(i)for(const s of i.j_)s.onError(n);r.queries.delete(e)}function mf(t){t.Y_.forEach(e=>{e.next()})}var zh,wg;(wg=zh||(zh={})).ea="default",wg.Cache="cache";class TE{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Yi(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=Yi.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==zh.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IE{constructor(e){this.key=e}}class SE{constructor(e){this.key=e}}class TP{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=ne(),this.mutatedKeys=ne(),this.Aa=$v(e),this.Ra=new Vi(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new vg,i=n?n.Ra:this.Ra;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,l=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,h=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((f,g)=>{const y=i.get(f),P=du(this.query,g)?g:null,k=!!y&&this.mutatedKeys.has(y.key),D=!!P&&(P.hasLocalMutations||this.mutatedKeys.has(P.key)&&P.hasCommittedMutations);let L=!1;y&&P?y.data.isEqual(P.data)?k!==D&&(r.track({type:3,doc:P}),L=!0):this.ga(y,P)||(r.track({type:2,doc:P}),L=!0,(u&&this.Aa(P,u)>0||h&&this.Aa(P,h)<0)&&(l=!0)):!y&&P?(r.track({type:0,doc:P}),L=!0):y&&!P&&(r.track({type:1,doc:y}),L=!0,(u||h)&&(l=!0)),L&&(P?(o=o.add(P),s=D?s.add(f):s.delete(f)):(o=o.delete(f),s=s.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),s=s.delete(f.key),r.track({type:1,doc:f})}return{Ra:o,fa:r,ns:l,mutatedKeys:s}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((f,g)=>function(P,k){const D=L=>{switch(L){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return X()}};return D(P)-D(k)}(f.type,g.type)||this.Aa(f.doc,g.doc)),this.pa(r),i=i!=null&&i;const l=n&&!i?this.ya():[],u=this.da.size===0&&this.current&&!i?1:0,h=u!==this.Ea;return this.Ea=u,o.length!==0||h?{snapshot:new Yi(this.query,e.Ra,s,o,e.mutatedKeys,u===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:l}:{wa:l}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new vg,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=ne(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new SE(r))}),this.da.forEach(r=>{e.has(r)||n.push(new IE(r))}),n}ba(e){this.Ta=e.Ts,this.da=ne();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return Yi.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class IP{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class SP{constructor(e){this.key=e,this.va=!1}}class AP{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new rs(l=>Bv(l),hu),this.Ma=new Map,this.xa=new Set,this.Oa=new Pe(q.comparator),this.Na=new Map,this.La=new of,this.Ba={},this.ka=new Map,this.qa=Qi.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function RP(t,e,n=!0){const r=NE(t);let i;const s=r.Fa.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Da()):i=await AE(r,e,n,!0),i}async function PP(t,e){const n=NE(t);await AE(n,e,!0,!1)}async function AE(t,e,n,r){const i=await QR(t.localStore,ln(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let l;return r&&(l=await CP(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&pE(t.remoteStore,i),l}async function CP(t,e,n,r,i){t.Ka=(g,y,P)=>async function(D,L,S,E){let A=L.view.ma(S);A.ns&&(A=await mg(D.localStore,L.query,!1).then(({documents:_})=>L.view.ma(_,A)));const O=E&&E.targetChanges.get(L.targetId),j=E&&E.targetMismatches.get(L.targetId)!=null,U=L.view.applyChanges(A,D.isPrimaryClient,O,j);return Ig(D,L.targetId,U.wa),U.snapshot}(t,g,y,P);const s=await mg(t.localStore,e,!0),o=new TP(e,s.Ts),l=o.ma(s.documents),u=Wo.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),h=o.applyChanges(l,t.isPrimaryClient,u);Ig(t,n,h.wa);const f=new IP(e,n,o);return t.Fa.set(e,f),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),h.snapshot}async function kP(t,e,n){const r=Z(t),i=r.Fa.get(e),s=r.Ma.get(i.targetId);if(s.length>1)return r.Ma.set(i.targetId,s.filter(o=>!hu(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await jh(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&uf(r.remoteStore,i.targetId),Bh(r,i.targetId)}).catch(jo)):(Bh(r,i.targetId),await jh(r.localStore,i.targetId,!0))}async function NP(t,e){const n=Z(t),r=n.Fa.get(e),i=n.Ma.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),uf(n.remoteStore,r.targetId))}async function xP(t,e,n){const r=FP(t);try{const i=await function(o,l){const u=Z(o),h=Fe.now(),f=l.reduce((P,k)=>P.add(k.key),ne());let g,y;return u.persistence.runTransaction("Locally write mutations","readwrite",P=>{let k=On(),D=ne();return u.cs.getEntries(P,f).next(L=>{k=L,k.forEach((S,E)=>{E.isValidDocument()||(D=D.add(S))})}).next(()=>u.localDocuments.getOverlayedDocuments(P,k)).next(L=>{g=L;const S=[];for(const E of l){const A=ZA(E,g.get(E.key).overlayedDocument);A!=null&&S.push(new Tr(E.key,A,Ov(A.value.mapValue),bt.exists(!0)))}return u.mutationQueue.addMutationBatch(P,h,S,l)}).next(L=>{y=L;const S=L.applyToLocalDocumentSet(g,D);return u.documentOverlayCache.saveOverlays(P,L.batchId,S)})}).then(()=>({batchId:y.batchId,changes:Hv(g)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,l,u){let h=o.Ba[o.currentUser.toKey()];h||(h=new Pe(ue)),h=h.insert(l,u),o.Ba[o.currentUser.toKey()]=h}(r,i.batchId,n),await qo(r,i.changes),await _u(r.remoteStore)}catch(i){const s=pf(i,"Failed to persist write");n.reject(s)}}async function RE(t,e){const n=Z(t);try{const r=await qR(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Na.get(s);o&&(de(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.va=!0:i.modifiedDocuments.size>0?de(o.va):i.removedDocuments.size>0&&(de(o.va),o.va=!1))}),await qo(n,r,e)}catch(r){await jo(r)}}function Tg(t,e,n){const r=Z(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Fa.forEach((s,o)=>{const l=o.view.Z_(e);l.snapshot&&i.push(l.snapshot)}),function(o,l){const u=Z(o);u.onlineState=l;let h=!1;u.queries.forEach((f,g)=>{for(const y of g.j_)y.Z_(l)&&(h=!0)}),h&&mf(u)}(r.eventManager,e),i.length&&r.Ca.d_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function DP(t,e,n){const r=Z(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Na.get(e),s=i&&i.key;if(s){let o=new Pe(q.comparator);o=o.insert(s,ot.newNoDocument(s,J.min()));const l=ne().add(s),u=new mu(J.min(),new Map,new Pe(ue),o,l);await RE(r,u),r.Oa=r.Oa.remove(s),r.Na.delete(e),gf(r)}else await jh(r.localStore,e,!1).then(()=>Bh(r,e,n)).catch(jo)}async function VP(t,e){const n=Z(t),r=e.batch.batchId;try{const i=await HR(n.localStore,e);CE(n,r,null),PE(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await qo(n,i)}catch(i){await jo(i)}}async function OP(t,e,n){const r=Z(t);try{const i=await function(o,l){const u=Z(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let f;return u.mutationQueue.lookupMutationBatch(h,l).next(g=>(de(g!==null),f=g.keys(),u.mutationQueue.removeMutationBatch(h,g))).next(()=>u.mutationQueue.performConsistencyCheck(h)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(h,f,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f)).next(()=>u.localDocuments.getDocuments(h,f))})}(r.localStore,e);CE(r,e,n),PE(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await qo(r,i)}catch(i){await jo(i)}}function PE(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function CE(t,e,n){const r=Z(t);let i=r.Ba[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Ba[r.currentUser.toKey()]=i}}function Bh(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||kE(t,r)})}function kE(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(uf(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),gf(t))}function Ig(t,e,n){for(const r of n)r instanceof IE?(t.La.addReference(r.key,e),LP(t,r)):r instanceof SE?(H("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||kE(t,r.key)):X()}function LP(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(H("SyncEngine","New document in limbo: "+n),t.xa.add(r),gf(t))}function gf(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new q(_e.fromString(e)),r=t.qa.next();t.Na.set(r,new SP(n)),t.Oa=t.Oa.insert(n,r),pE(t.remoteStore,new tr(ln(Zd(n.path)),r,"TargetPurposeLimboResolution",Kd.oe))}}async function qo(t,e,n){const r=Z(t),i=[],s=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((l,u)=>{o.push(r.Ka(u,e,n).then(h=>{var f;if((h||n)&&r.isPrimaryClient){const g=h?!h.fromCache:(f=n==null?void 0:n.targetChanges.get(u.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(u.targetId,g?"current":"not-current")}if(h){i.push(h);const g=lf.Wi(u.targetId,h);s.push(g)}}))}),await Promise.all(o),r.Ca.d_(i),await async function(u,h){const f=Z(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",g=>b.forEach(h,y=>b.forEach(y.$i,P=>f.persistence.referenceDelegate.addReference(g,y.targetId,P)).next(()=>b.forEach(y.Ui,P=>f.persistence.referenceDelegate.removeReference(g,y.targetId,P)))))}catch(g){if(!zo(g))throw g;H("LocalStore","Failed to update sequence numbers: "+g)}for(const g of h){const y=g.targetId;if(!g.fromCache){const P=f.os.get(y),k=P.snapshotVersion,D=P.withLastLimboFreeSnapshotVersion(k);f.os=f.os.insert(y,D)}}}(r.localStore,s))}async function MP(t,e){const n=Z(t);if(!n.currentUser.isEqual(e)){H("SyncEngine","User change. New user:",e.toKey());const r=await cE(n.localStore,e);n.currentUser=e,function(s,o){s.ka.forEach(l=>{l.forEach(u=>{u.reject(new W(M.CANCELLED,o))})}),s.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await qo(n,r.hs)}}function bP(t,e){const n=Z(t),r=n.Na.get(e);if(r&&r.va)return ne().add(r.key);{let i=ne();const s=n.Ma.get(e);if(!s)return i;for(const o of s){const l=n.Fa.get(o);i=i.unionWith(l.view.Va)}return i}}function NE(t){const e=Z(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=RE.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=bP.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=DP.bind(null,e),e.Ca.d_=EP.bind(null,e.eventManager),e.Ca.$a=wP.bind(null,e.eventManager),e}function FP(t){const e=Z(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=VP.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=OP.bind(null,e),e}class Ul{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=gu(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return WR(this.persistence,new BR,e.initialUser,this.serializer)}Ga(e){return new UR(af.Zr,this.serializer)}Wa(e){return new XR}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Ul.provider={build:()=>new Ul};class $h{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Tg(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=MP.bind(null,this.syncEngine),await yP(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new vP}()}createDatastore(e){const n=gu(e.databaseInfo.databaseId),r=function(s){return new tP(s)}(e.databaseInfo);return function(s,o,l,u){return new iP(s,o,l,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,l){return new oP(r,i,s,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>Tg(this.syncEngine,n,0),function(){return yg.D()?new yg:new JR}())}createSyncEngine(e,n){return function(i,s,o,l,u,h,f){const g=new AP(i,s,o,l,u,h);return f&&(g.Qa=!0),g}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=Z(i);H("RemoteStore","RemoteStore shutting down."),s.L_.add(5),await Ho(s),s.k_.shutdown(),s.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}$h.provider={build:()=>new $h};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xE{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):Vn("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UP{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=it.UNAUTHENTICATED,this.clientId=xv.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{H("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(H("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Rn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=pf(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Cc(t,e){t.asyncQueue.verifyOperationInProgress(),H("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await cE(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Sg(t,e){t.asyncQueue.verifyOperationInProgress();const n=await jP(t);H("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>_g(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>_g(e.remoteStore,i)),t._onlineComponents=e}async function jP(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){H("FirestoreClient","Using user provided OfflineComponentProvider");try{await Cc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===M.FAILED_PRECONDITION||i.code===M.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;Hi("Error using user provided cache. Falling back to memory cache: "+n),await Cc(t,new Ul)}}else H("FirestoreClient","Using default OfflineComponentProvider"),await Cc(t,new Ul);return t._offlineComponents}async function DE(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(H("FirestoreClient","Using user provided OnlineComponentProvider"),await Sg(t,t._uninitializedComponentsProvider._online)):(H("FirestoreClient","Using default OnlineComponentProvider"),await Sg(t,new $h))),t._onlineComponents}function zP(t){return DE(t).then(e=>e.syncEngine)}async function VE(t){const e=await DE(t),n=e.eventManager;return n.onListen=RP.bind(null,e.syncEngine),n.onUnlisten=kP.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=PP.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=NP.bind(null,e.syncEngine),n}function BP(t,e,n={}){const r=new Rn;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,u,h){const f=new xE({next:y=>{f.Za(),o.enqueueAndForget(()=>wE(s,g));const P=y.docs.has(l);!P&&y.fromCache?h.reject(new W(M.UNAVAILABLE,"Failed to get document because the client is offline.")):P&&y.fromCache&&u&&u.source==="server"?h.reject(new W(M.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(y)},error:y=>h.reject(y)}),g=new TE(Zd(l.path),f,{includeMetadataChanges:!0,_a:!0});return EE(s,g)}(await VE(t),t.asyncQueue,e,n,r)),r.promise}function $P(t,e,n={}){const r=new Rn;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,u,h){const f=new xE({next:y=>{f.Za(),o.enqueueAndForget(()=>wE(s,g)),y.fromCache&&u.source==="server"?h.reject(new W(M.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(y)},error:y=>h.reject(y)}),g=new TE(l,f,{includeMetadataChanges:!0,_a:!0});return EE(s,g)}(await VE(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OE(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ag=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LE(t,e,n){if(!n)throw new W(M.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function WP(t,e,n,r){if(e===!0&&r===!0)throw new W(M.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Rg(t){if(!q.isDocumentKey(t))throw new W(M.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Pg(t){if(q.isDocumentKey(t))throw new W(M.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function vu(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":X()}function Yt(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new W(M.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=vu(t);throw new W(M.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cg{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new W(M.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new W(M.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}WP("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=OE((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new W(M.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new W(M.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new W(M.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Eu{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Cg({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new W(M.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new W(M.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Cg(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new aA;switch(r.type){case"firstParty":return new hA(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new W(M.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Ag.get(n);r&&(H("ComponentProvider","Removing Datastore"),Ag.delete(n),r.terminate())}(this),Promise.resolve()}}function HP(t,e,n,r={}){var i;const s=(t=Yt(t,Eu))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&Hi("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let l,u;if(typeof r.mockUserToken=="string")l=r.mockUserToken,u=it.MOCK_USER;else{l=bI(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const h=r.mockUserToken.sub||r.mockUserToken.user_id;if(!h)throw new W(M.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new it(h)}t._authCredentials=new lA(new Nv(l,u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ss{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new ss(this.firestore,e,this._query)}}class dt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new fr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new dt(this.firestore,e,this._key)}}class fr extends ss{constructor(e,n,r){super(e,n,Zd(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new dt(this.firestore,null,new q(e))}withConverter(e){return new fr(this.firestore,e,this._path)}}function kg(t,e,...n){if(t=We(t),LE("collection","path",e),t instanceof Eu){const r=_e.fromString(e,...n);return Pg(r),new fr(t,null,r)}{if(!(t instanceof dt||t instanceof fr))throw new W(M.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(_e.fromString(e,...n));return Pg(r),new fr(t.firestore,null,r)}}function vn(t,e,...n){if(t=We(t),arguments.length===1&&(e=xv.newId()),LE("doc","path",e),t instanceof Eu){const r=_e.fromString(e,...n);return Rg(r),new dt(t,null,new q(r))}{if(!(t instanceof dt||t instanceof fr))throw new W(M.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(_e.fromString(e,...n));return Rg(r),new dt(t.firestore,t instanceof fr?t.converter:null,new q(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ng{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new dE(this,"async_queue_retry"),this.Vu=()=>{const r=Pc();r&&H("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=Pc();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=Pc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new Rn;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!zo(e))throw e;H("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const i=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(r);throw Vn("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const i=ff.createAndSchedule(this,e,n,r,s=>this.yu(s));return this.Tu.push(i),i}fu(){this.Eu&&X()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}class ni extends Eu{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new Ng,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Ng(e),this._firestoreClient=void 0,await e}}}function qP(t,e){const n=typeof t=="object"?t:wv(),r=typeof t=="string"?t:"(default)",i=Hd(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=LI("firestore");s&&HP(i,...s)}return i}function yf(t){if(t._terminated)throw new W(M.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||KP(t),t._firestoreClient}function KP(t){var e,n,r;const i=t._freezeSettings(),s=function(l,u,h,f){return new SA(l,u,h,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,OE(f.experimentalLongPollingOptions),f.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._componentsProvider||!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),t._firestoreClient=new UP(t._authCredentials,t._appCheckCredentials,t._queue,s,t._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xi{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Xi(Je.fromBase64String(e))}catch(n){throw new W(M.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Xi(Je.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wu{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new W(M.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ge(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tu{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _f{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new W(M.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new W(M.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ue(this._lat,e._lat)||ue(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vf{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GP=/^__.*__$/;class QP{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Tr(e,this.data,this.fieldMask,n,this.fieldTransforms):new $o(e,this.data,n,this.fieldTransforms)}}class ME{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Tr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function bE(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw X()}}class Ef{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.vu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new Ef(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.Ou(e),i}Nu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.vu(),i}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return jl(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(bE(this.Cu)&&GP.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class YP{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||gu(e)}Qu(e,n,r,i=!1){return new Ef({Cu:e,methodName:n,qu:r,path:Ge.emptyPath(),xu:!1,ku:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Iu(t){const e=t._freezeSettings(),n=gu(t._databaseId);return new YP(t._databaseId,!!e.ignoreUndefinedProperties,n)}function FE(t,e,n,r,i,s={}){const o=t.Qu(s.merge||s.mergeFields?2:0,e,n,i);Tf("Data must be an object, but it was:",o,r);const l=UE(r,o);let u,h;if(s.merge)u=new At(o.fieldMask),h=o.fieldTransforms;else if(s.mergeFields){const f=[];for(const g of s.mergeFields){const y=Wh(e,g,n);if(!o.contains(y))throw new W(M.INVALID_ARGUMENT,`Field '${y}' is specified in your field mask but missing from your input data.`);zE(f,y)||f.push(y)}u=new At(f),h=o.fieldTransforms.filter(g=>u.covers(g.field))}else u=null,h=o.fieldTransforms;return new QP(new yt(l),u,h)}class Su extends Tu{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Su}}class wf extends Tu{_toFieldTransform(e){return new QA(e.path,new Co)}isEqual(e){return e instanceof wf}}function XP(t,e,n,r){const i=t.Qu(1,e,n);Tf("Data must be an object, but it was:",i,r);const s=[],o=yt.empty();ei(r,(u,h)=>{const f=If(e,u,n);h=We(h);const g=i.Nu(f);if(h instanceof Su)s.push(f);else{const y=Ko(h,g);y!=null&&(s.push(f),o.set(f,y))}});const l=new At(s);return new ME(o,l,i.fieldTransforms)}function JP(t,e,n,r,i,s){const o=t.Qu(1,e,n),l=[Wh(e,r,n)],u=[i];if(s.length%2!=0)throw new W(M.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let y=0;y<s.length;y+=2)l.push(Wh(e,s[y])),u.push(s[y+1]);const h=[],f=yt.empty();for(let y=l.length-1;y>=0;--y)if(!zE(h,l[y])){const P=l[y];let k=u[y];k=We(k);const D=o.Nu(P);if(k instanceof Su)h.push(P);else{const L=Ko(k,D);L!=null&&(h.push(P),f.set(P,L))}}const g=new At(h);return new ME(f,g,o.fieldTransforms)}function ZP(t,e,n,r=!1){return Ko(n,t.Qu(r?4:3,e))}function Ko(t,e){if(jE(t=We(t)))return Tf("Unsupported field value:",e,t),UE(t,e);if(t instanceof Tu)return function(r,i){if(!bE(i.Cu))throw i.Bu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Bu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const l of r){let u=Ko(l,i.Lu(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=We(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return qA(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Fe.fromDate(r);return{timestampValue:bl(i.serializer,s)}}if(r instanceof Fe){const s=new Fe(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:bl(i.serializer,s)}}if(r instanceof _f)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Xi)return{bytesValue:rE(i.serializer,r._byteString)};if(r instanceof dt){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:sf(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof vf)return function(o,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw l.Bu("VectorValues must only contain numeric values.");return ef(l.serializer,u)})}}}}}}(r,i);throw i.Bu(`Unsupported field value: ${vu(r)}`)}(t,e)}function UE(t,e){const n={};return Dv(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ei(t,(r,i)=>{const s=Ko(i,e.Mu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function jE(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Fe||t instanceof _f||t instanceof Xi||t instanceof dt||t instanceof Tu||t instanceof vf)}function Tf(t,e,n){if(!jE(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=vu(n);throw r==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}}function Wh(t,e,n){if((e=We(e))instanceof wu)return e._internalPath;if(typeof e=="string")return If(t,e);throw jl("Field path arguments must be of type string or ",t,!1,void 0,n)}const eC=new RegExp("[~\\*/\\[\\]]");function If(t,e,n){if(e.search(eC)>=0)throw jl(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new wu(...e.split("."))._internalPath}catch{throw jl(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function jl(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new W(M.INVALID_ARGUMENT,l+t+u)}function zE(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BE{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new dt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new tC(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Sf("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class tC extends BE{data(){return super.data()}}function Sf(t,e){return typeof e=="string"?If(t,e):e instanceof wu?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nC(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new W(M.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Af{}class rC extends Af{}function iC(t,e,...n){let r=[];e instanceof Af&&r.push(e),r=r.concat(n),function(s){const o=s.filter(u=>u instanceof Rf).length,l=s.filter(u=>u instanceof Au).length;if(o>1||o>0&&l>0)throw new W(M.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class Au extends rC{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Au(e,n,r)}_apply(e){const n=this._parse(e);return $E(e._query,n),new ss(e.firestore,e.converter,Oh(e._query,n))}_parse(e){const n=Iu(e.firestore);return function(s,o,l,u,h,f,g){let y;if(h.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new W(M.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){Dg(g,f);const P=[];for(const k of g)P.push(xg(u,s,k));y={arrayValue:{values:P}}}else y=xg(u,s,g)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||Dg(g,f),y=ZP(l,o,g,f==="in"||f==="not-in");return Le.create(h,f,y)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function sC(t,e,n){const r=e,i=Sf("where",t);return Au._create(i,r,n)}class Rf extends Af{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Rf(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Qt.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const l=s.getFlattenedFilters();for(const u of l)$E(o,u),o=Oh(o,u)}(e._query,n),new ss(e.firestore,e.converter,Oh(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function xg(t,e,n){if(typeof(n=We(n))=="string"){if(n==="")throw new W(M.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!zv(e)&&n.indexOf("/")!==-1)throw new W(M.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(_e.fromString(n));if(!q.isDocumentKey(r))throw new W(M.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Jm(t,new q(r))}if(n instanceof dt)return Jm(t,n._key);throw new W(M.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${vu(n)}.`)}function Dg(t,e){if(!Array.isArray(t)||t.length===0)throw new W(M.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function $E(t,e){const n=function(i,s){for(const o of i)for(const l of o.getFlattenedFilters())if(s.indexOf(l.op)>=0)return l.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new W(M.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new W(M.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class oC{convertValue(e,n="none"){switch(Qr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ne(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Gr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw X()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return ei(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var n,r,i;const s=(i=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(o=>Ne(o.doubleValue));return new vf(s)}convertGeoPoint(e){return new _f(Ne(e.latitude),Ne(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Qd(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Ao(e));default:return null}}convertTimestamp(e){const n=yr(e);return new Fe(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=_e.fromString(e);de(uE(r));const i=new Ro(r.get(1),r.get(3)),s=new q(r.popFirst(5));return i.isEqual(n)||Vn(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WE(t,e,n){let r;return r=t?t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $s{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class HE extends BE{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new tl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Sf("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class tl extends HE{data(e={}){return super.data(e)}}class aC{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new $s(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new tl(this._firestore,this._userDataWriter,r.key,r,new $s(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new W(M.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(l=>{const u=new tl(i._firestore,i._userDataWriter,l.doc.key,l.doc,new $s(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const u=new tl(i._firestore,i._userDataWriter,l.doc.key,l.doc,new $s(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let h=-1,f=-1;return l.type!==0&&(h=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),f=o.indexOf(l.doc.key)),{type:lC(l.type),doc:u,oldIndex:h,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function lC(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return X()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hh(t){t=Yt(t,dt);const e=Yt(t.firestore,ni);return BP(yf(e),t._key).then(n=>dC(e,t,n))}class qE extends oC{constructor(e){super(),this.firestore=e}convertBytes(e){return new Xi(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new dt(this.firestore,null,n)}}function uC(t){t=Yt(t,ss);const e=Yt(t.firestore,ni),n=yf(e),r=new qE(e);return nC(t._query),$P(n,t._query).then(i=>new aC(e,r,t,i))}function KE(t,e,n){t=Yt(t,dt);const r=Yt(t.firestore,ni),i=WE(t.converter,e);return Ru(r,[FE(Iu(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,bt.none())])}function cC(t,e,n,...r){t=Yt(t,dt);const i=Yt(t.firestore,ni),s=Iu(i);let o;return o=typeof(e=We(e))=="string"||e instanceof wu?JP(s,"updateDoc",t._key,e,n,r):XP(s,"updateDoc",t._key,e),Ru(i,[o.toMutation(t._key,bt.exists(!0))])}function Vg(t){return Ru(Yt(t.firestore,ni),[new tf(t._key,bt.none())])}function hC(t,e){const n=Yt(t.firestore,ni),r=vn(t),i=WE(t.converter,e);return Ru(n,[FE(Iu(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,bt.exists(!1))]).then(()=>r)}function Ru(t,e){return function(r,i){const s=new Rn;return r.asyncQueue.enqueueAndForget(async()=>xP(await zP(r),i,s)),s.promise}(yf(t),e)}function dC(t,e,n){const r=n.docs.get(e._key),i=new qE(t);return new HE(t,i,e._key,r,new $s(n.hasPendingWrites,n.fromCache),e.converter)}function fC(){return new wf("serverTimestamp")}(function(e,n=!0){(function(i){ns=i})(ts),Wi(new qr("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),l=new ni(new uA(r.getProvider("auth-internal")),new fA(r.getProvider("app-check-internal")),function(h,f){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new W(M.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ro(h.options.projectId,f)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),dr(Km,"4.7.3",e),dr(Km,"4.7.3","esm2017")})();var pC="firebase",mC="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */dr(pC,mC,"app");function Pf(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function GE(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const gC=GE,QE=new Fo("auth","Firebase",GE());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zl=new $d("@firebase/auth");function yC(t,...e){zl.logLevel<=ie.WARN&&zl.warn(`Auth (${ts}): ${t}`,...e)}function nl(t,...e){zl.logLevel<=ie.ERROR&&zl.error(`Auth (${ts}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xt(t,...e){throw Cf(t,...e)}function cn(t,...e){return Cf(t,...e)}function YE(t,e,n){const r=Object.assign(Object.assign({},gC()),{[e]:n});return new Fo("auth","Firebase",r).create(e,{appName:t.name})}function Pn(t){return YE(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Cf(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return QE.create(t,...e)}function G(t,e,...n){if(!t)throw Cf(e,...n)}function Tn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw nl(e),new Error(e)}function Ln(t,e){t||Tn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qh(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function _C(){return Og()==="http:"||Og()==="https:"}function Og(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vC(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(_C()||zI()||"connection"in navigator)?navigator.onLine:!0}function EC(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Go{constructor(e,n){this.shortDelay=e,this.longDelay=n,Ln(n>e,"Short delay should be less than long delay!"),this.isMobile=FI()||BI()}get(){return vC()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kf(t,e){Ln(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XE{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Tn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Tn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Tn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wC={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TC=new Go(3e4,6e4);function Fn(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Un(t,e,n,r,i={}){return JE(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=Uo(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const h=Object.assign({method:e,headers:u},s);return jI()||(h.referrerPolicy="no-referrer"),XE.fetch()(ZE(t,t.config.apiHost,n,l),h)})}async function JE(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},wC),e);try{const i=new SC(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Fa(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[u,h]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Fa(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw Fa(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw Fa(t,"user-disabled",o);const f=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw YE(t,f,h);Xt(t,f)}}catch(i){if(i instanceof bn)throw i;Xt(t,"network-request-failed",{message:String(i)})}}async function Qo(t,e,n,r,i={}){const s=await Un(t,e,n,r,i);return"mfaPendingCredential"in s&&Xt(t,"multi-factor-auth-required",{_serverResponse:s}),s}function ZE(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?kf(t.config,i):`${t.config.apiScheme}://${i}`}function IC(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class SC{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(cn(this.auth,"network-request-failed")),TC.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Fa(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=cn(t,e,r);return i.customData._tokenResponse=n,i}function Lg(t){return t!==void 0&&t.enterprise!==void 0}class AC{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return IC(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function RC(t,e){return Un(t,"GET","/v2/recaptchaConfig",Fn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function PC(t,e){return Un(t,"POST","/v1/accounts:delete",e)}async function ew(t,e){return Un(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ro(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function CC(t,e=!1){const n=We(t),r=await n.getIdToken(e),i=Nf(r);G(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:ro(kc(i.auth_time)),issuedAtTime:ro(kc(i.iat)),expirationTime:ro(kc(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function kc(t){return Number(t)*1e3}function Nf(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return nl("JWT malformed, contained fewer than 3 sections"),null;try{const i=pv(n);return i?JSON.parse(i):(nl("Failed to decode base64 JWT payload"),null)}catch(i){return nl("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Mg(t){const e=Nf(t);return G(e,"internal-error"),G(typeof e.exp<"u","internal-error"),G(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xo(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof bn&&kC(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function kC({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NC{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kh{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ro(this.lastLoginAt),this.creationTime=ro(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bl(t){var e;const n=t.auth,r=await t.getIdToken(),i=await xo(t,ew(n,{idToken:r}));G(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?tw(s.providerUserInfo):[],l=DC(t.providerData,o),u=t.isAnonymous,h=!(t.email&&s.passwordHash)&&!(l!=null&&l.length),f=u?h:!1,g={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new Kh(s.createdAt,s.lastLoginAt),isAnonymous:f};Object.assign(t,g)}async function xC(t){const e=We(t);await Bl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function DC(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function tw(t){return t.map(e=>{var{providerId:n}=e,r=Pf(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function VC(t,e){const n=await JE(t,{},async()=>{const r=Uo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=ZE(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",XE.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function OC(t,e){return Un(t,"POST","/v2/accounts:revokeToken",Fn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){G(e.idToken,"internal-error"),G(typeof e.idToken<"u","internal-error"),G(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Mg(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){G(e.length!==0,"internal-error");const n=Mg(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(G(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await VC(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Oi;return r&&(G(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(G(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(G(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Oi,this.toJSON())}_performRefresh(){return Tn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wn(t,e){G(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class In{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Pf(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new NC(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Kh(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await xo(this,this.stsTokenManager.getToken(this.auth,e));return G(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return CC(this,e)}reload(){return xC(this)}_assign(e){this!==e&&(G(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new In(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){G(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Bl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(sn(this.auth.app))return Promise.reject(Pn(this.auth));const e=await this.getIdToken();return await xo(this,PC(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,l,u,h,f;const g=(r=n.displayName)!==null&&r!==void 0?r:void 0,y=(i=n.email)!==null&&i!==void 0?i:void 0,P=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,k=(o=n.photoURL)!==null&&o!==void 0?o:void 0,D=(l=n.tenantId)!==null&&l!==void 0?l:void 0,L=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,S=(h=n.createdAt)!==null&&h!==void 0?h:void 0,E=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:A,emailVerified:O,isAnonymous:j,providerData:U,stsTokenManager:_}=n;G(A&&_,e,"internal-error");const m=Oi.fromJSON(this.name,_);G(typeof A=="string",e,"internal-error"),Wn(g,e.name),Wn(y,e.name),G(typeof O=="boolean",e,"internal-error"),G(typeof j=="boolean",e,"internal-error"),Wn(P,e.name),Wn(k,e.name),Wn(D,e.name),Wn(L,e.name),Wn(S,e.name),Wn(E,e.name);const v=new In({uid:A,auth:e,email:y,emailVerified:O,displayName:g,isAnonymous:j,photoURL:k,phoneNumber:P,tenantId:D,stsTokenManager:m,createdAt:S,lastLoginAt:E});return U&&Array.isArray(U)&&(v.providerData=U.map(w=>Object.assign({},w))),L&&(v._redirectEventId=L),v}static async _fromIdTokenResponse(e,n,r=!1){const i=new Oi;i.updateFromServerResponse(n);const s=new In({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Bl(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];G(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?tw(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new Oi;l.updateFromIdToken(r);const u=new In({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Kh(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,h),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bg=new Map;function Sn(t){Ln(t instanceof Function,"Expected a class definition");let e=bg.get(t);return e?(Ln(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,bg.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nw{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}nw.type="NONE";const Fg=nw;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rl(t,e,n){return`firebase:${t}:${e}:${n}`}class Li{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=rl(this.userKey,i.apiKey,s),this.fullPersistenceKey=rl("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?In._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Li(Sn(Fg),e,r);const i=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let s=i[0]||Sn(Fg);const o=rl(r,e.config.apiKey,e.name);let l=null;for(const h of n)try{const f=await h._get(o);if(f){const g=In._fromJSON(e,f);h!==s&&(l=g),s=h;break}}catch{}const u=i.filter(h=>h._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new Li(s,e,r):(s=u[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async h=>{if(h!==s)try{await h._remove(o)}catch{}})),new Li(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ug(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(ow(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(rw(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(lw(e))return"Blackberry";if(uw(e))return"Webos";if(iw(e))return"Safari";if((e.includes("chrome/")||sw(e))&&!e.includes("edge/"))return"Chrome";if(aw(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function rw(t=lt()){return/firefox\//i.test(t)}function iw(t=lt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function sw(t=lt()){return/crios\//i.test(t)}function ow(t=lt()){return/iemobile/i.test(t)}function aw(t=lt()){return/android/i.test(t)}function lw(t=lt()){return/blackberry/i.test(t)}function uw(t=lt()){return/webos/i.test(t)}function xf(t=lt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function LC(t=lt()){var e;return xf(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function MC(){return $I()&&document.documentMode===10}function cw(t=lt()){return xf(t)||aw(t)||uw(t)||lw(t)||/windows phone/i.test(t)||ow(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hw(t,e=[]){let n;switch(t){case"Browser":n=Ug(lt());break;case"Worker":n=`${Ug(lt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ts}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bC{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const u=e(s);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function FC(t,e={}){return Un(t,"GET","/v2/passwordPolicy",Fn(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UC=6;class jC{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:UC,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,l;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(l=u.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zC{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new jg(this),this.idTokenSubscription=new jg(this),this.beforeStateQueue=new bC(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=QE,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Sn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Li.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await ew(this,{idToken:e}),r=await In._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(sn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return G(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Bl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=EC()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(sn(this.app))return Promise.reject(Pn(this));const n=e?We(e):null;return n&&G(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&G(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return sn(this.app)?Promise.reject(Pn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return sn(this.app)?Promise.reject(Pn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Sn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await FC(this),n=new jC(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Fo("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await OC(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Sn(e)||this._popupRedirectResolver;G(n,this,"argument-error"),this.redirectPersistenceManager=await Li.create(this,[Sn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(G(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return G(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=hw(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&yC(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Ir(t){return We(t)}class jg{constructor(e){this.auth=e,this.observer=null,this.addObserver=XI(n=>this.observer=n)}get next(){return G(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Pu={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function BC(t){Pu=t}function dw(t){return Pu.loadJS(t)}function $C(){return Pu.recaptchaEnterpriseScript}function WC(){return Pu.gapiScript}function HC(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const qC="recaptcha-enterprise",KC="NO_RECAPTCHA";class GC{constructor(e){this.type=qC,this.auth=Ir(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,l)=>{RC(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const h=new AC(u);return s.tenantId==null?s._agentRecaptchaConfig=h:s._tenantRecaptchaConfigs[s.tenantId]=h,o(h.siteKey)}}).catch(u=>{l(u)})})}function i(s,o,l){const u=window.grecaptcha;Lg(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(h=>{o(h)}).catch(()=>{o(KC)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(l=>{if(!n&&Lg(window.grecaptcha))i(l,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=$C();u.length!==0&&(u+=l),dw(u).then(()=>{i(l,s,o)}).catch(h=>{o(h)})}}).catch(l=>{o(l)})})}}async function zg(t,e,n,r=!1){const i=new GC(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function $l(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await zg(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await zg(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QC(t,e){const n=Hd(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(xl(s,e??{}))return i;Xt(i,"already-initialized")}return n.initialize({options:e})}function YC(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Sn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function XC(t,e,n){const r=Ir(t);G(r._canInitEmulator,r,"emulator-config-failed"),G(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=fw(e),{host:o,port:l}=JC(e),u=l===null?"":`:${l}`;r.config.emulator={url:`${s}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),ZC()}function fw(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function JC(t){const e=fw(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Bg(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Bg(o)}}}function Bg(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function ZC(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Df{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Tn("not implemented")}_getIdTokenResponse(e){return Tn("not implemented")}_linkToIdToken(e,n){return Tn("not implemented")}_getReauthenticationResolver(e){return Tn("not implemented")}}async function ek(t,e){return Un(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tk(t,e){return Qo(t,"POST","/v1/accounts:signInWithPassword",Fn(t,e))}async function nk(t,e){return Un(t,"POST","/v1/accounts:sendOobCode",Fn(t,e))}async function rk(t,e){return nk(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ik(t,e){return Qo(t,"POST","/v1/accounts:signInWithEmailLink",Fn(t,e))}async function sk(t,e){return Qo(t,"POST","/v1/accounts:signInWithEmailLink",Fn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Do extends Df{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Do(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Do(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return $l(e,n,"signInWithPassword",tk);case"emailLink":return ik(e,{email:this._email,oobCode:this._password});default:Xt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return $l(e,r,"signUpPassword",ek);case"emailLink":return sk(e,{idToken:n,email:this._email,oobCode:this._password});default:Xt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mi(t,e){return Qo(t,"POST","/v1/accounts:signInWithIdp",Fn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ok="http://localhost";class Yr extends Df{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Yr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Xt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Pf(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Yr(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Mi(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Mi(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Mi(e,n)}buildRequest(){const e={requestUri:ok,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Uo(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ak(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function lk(t){const e=Fs(Us(t)).link,n=e?Fs(Us(e)).deep_link_id:null,r=Fs(Us(t)).deep_link_id;return(r?Fs(Us(r)).link:null)||r||n||e||t}class Vf{constructor(e){var n,r,i,s,o,l;const u=Fs(Us(e)),h=(n=u.apiKey)!==null&&n!==void 0?n:null,f=(r=u.oobCode)!==null&&r!==void 0?r:null,g=ak((i=u.mode)!==null&&i!==void 0?i:null);G(h&&f&&g,"argument-error"),this.apiKey=h,this.operation=g,this.code=f,this.continueUrl=(s=u.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=u.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(l=u.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=lk(e);try{return new Vf(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class os{constructor(){this.providerId=os.PROVIDER_ID}static credential(e,n){return Do._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Vf.parseLink(n);return G(r,"argument-error"),Do._fromEmailAndCode(e,r.code,r.tenantId)}}os.PROVIDER_ID="password";os.EMAIL_PASSWORD_SIGN_IN_METHOD="password";os.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pw{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yo extends pw{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn extends Yo{constructor(){super("facebook.com")}static credential(e){return Yr._fromParams({providerId:Qn.PROVIDER_ID,signInMethod:Qn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Qn.credentialFromTaggedObject(e)}static credentialFromError(e){return Qn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Qn.credential(e.oauthAccessToken)}catch{return null}}}Qn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Qn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn extends Yo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Yr._fromParams({providerId:Yn.PROVIDER_ID,signInMethod:Yn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Yn.credentialFromTaggedObject(e)}static credentialFromError(e){return Yn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Yn.credential(n,r)}catch{return null}}}Yn.GOOGLE_SIGN_IN_METHOD="google.com";Yn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn extends Yo{constructor(){super("github.com")}static credential(e){return Yr._fromParams({providerId:Xn.PROVIDER_ID,signInMethod:Xn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Xn.credentialFromTaggedObject(e)}static credentialFromError(e){return Xn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Xn.credential(e.oauthAccessToken)}catch{return null}}}Xn.GITHUB_SIGN_IN_METHOD="github.com";Xn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn extends Yo{constructor(){super("twitter.com")}static credential(e,n){return Yr._fromParams({providerId:Jn.PROVIDER_ID,signInMethod:Jn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Jn.credentialFromTaggedObject(e)}static credentialFromError(e){return Jn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Jn.credential(n,r)}catch{return null}}}Jn.TWITTER_SIGN_IN_METHOD="twitter.com";Jn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uk(t,e){return Qo(t,"POST","/v1/accounts:signUp",Fn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await In._fromIdTokenResponse(e,r,i),o=$g(r);return new Xr({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=$g(r);return new Xr({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function $g(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wl extends bn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Wl.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Wl(e,n,r,i)}}function mw(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Wl._fromErrorAndOperation(t,s,e,r):s})}async function ck(t,e,n=!1){const r=await xo(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Xr._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hk(t,e,n=!1){const{auth:r}=t;if(sn(r.app))return Promise.reject(Pn(r));const i="reauthenticate";try{const s=await xo(t,mw(r,i,e,t),n);G(s.idToken,r,"internal-error");const o=Nf(s.idToken);G(o,r,"internal-error");const{sub:l}=o;return G(t.uid===l,r,"user-mismatch"),Xr._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Xt(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gw(t,e,n=!1){if(sn(t.app))return Promise.reject(Pn(t));const r="signIn",i=await mw(t,r,e),s=await Xr._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function dk(t,e){return gw(Ir(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yw(t){const e=Ir(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function fk(t,e,n){const r=Ir(t);await $l(r,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",rk)}async function pk(t,e,n){if(sn(t.app))return Promise.reject(Pn(t));const r=Ir(t),o=await $l(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",uk).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&yw(t),u}),l=await Xr._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function mk(t,e,n){return sn(t.app)?Promise.reject(Pn(t)):dk(We(t),os.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&yw(t),r})}function gk(t,e,n,r){return We(t).onIdTokenChanged(e,n,r)}function yk(t,e,n){return We(t).beforeAuthStateChanged(e,n)}function _k(t,e,n,r){return We(t).onAuthStateChanged(e,n,r)}function vk(t){return We(t).signOut()}const Hl="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _w{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Hl,"1"),this.storage.removeItem(Hl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ek=1e3,wk=10;class vw extends _w{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=cw(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);MC()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,wk):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Ek)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}vw.type="LOCAL";const Tk=vw;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ew extends _w{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Ew.type="SESSION";const ww=Ew;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ik(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cu{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Cu(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async h=>h(n.origin,s)),u=await Ik(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Cu.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Of(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sk{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,u)=>{const h=Of("",20);i.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(g){const y=g;if(y.data.eventId===h)switch(y.data.status){case"ack":clearTimeout(f),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(y.data.response);break;default:clearTimeout(f),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hn(){return window}function Ak(t){hn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tw(){return typeof hn().WorkerGlobalScope<"u"&&typeof hn().importScripts=="function"}async function Rk(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Pk(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Ck(){return Tw()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iw="firebaseLocalStorageDb",kk=1,ql="firebaseLocalStorage",Sw="fbase_key";class Xo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ku(t,e){return t.transaction([ql],e?"readwrite":"readonly").objectStore(ql)}function Nk(){const t=indexedDB.deleteDatabase(Iw);return new Xo(t).toPromise()}function Gh(){const t=indexedDB.open(Iw,kk);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(ql,{keyPath:Sw})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(ql)?e(r):(r.close(),await Nk(),e(await Gh()))})})}async function Wg(t,e,n){const r=ku(t,!0).put({[Sw]:e,value:n});return new Xo(r).toPromise()}async function xk(t,e){const n=ku(t,!1).get(e),r=await new Xo(n).toPromise();return r===void 0?null:r.value}function Hg(t,e){const n=ku(t,!0).delete(e);return new Xo(n).toPromise()}const Dk=800,Vk=3;class Aw{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Gh(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Vk)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Tw()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Cu._getInstance(Ck()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Rk(),!this.activeServiceWorker)return;this.sender=new Sk(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Pk()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Gh();return await Wg(e,Hl,"1"),await Hg(e,Hl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Wg(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>xk(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Hg(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=ku(i,!1).getAll();return new Xo(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Dk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Aw.type="LOCAL";const Ok=Aw;new Go(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lk(t,e){return e?Sn(e):(G(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lf extends Df{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Mi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Mi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Mi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Mk(t){return gw(t.auth,new Lf(t),t.bypassAuthState)}function bk(t){const{auth:e,user:n}=t;return G(n,e,"internal-error"),hk(n,new Lf(t),t.bypassAuthState)}async function Fk(t){const{auth:e,user:n}=t;return G(n,e,"internal-error"),ck(n,new Lf(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rw{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Mk;case"linkViaPopup":case"linkViaRedirect":return Fk;case"reauthViaPopup":case"reauthViaRedirect":return bk;default:Xt(this.auth,"internal-error")}}resolve(e){Ln(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ln(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uk=new Go(2e3,1e4);class Ri extends Rw{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Ri.currentPopupAction&&Ri.currentPopupAction.cancel(),Ri.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return G(e,this.auth,"internal-error"),e}async onExecution(){Ln(this.filter.length===1,"Popup operations only handle one event");const e=Of();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(cn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(cn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ri.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(cn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Uk.get())};e()}}Ri.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jk="pendingRedirect",il=new Map;class zk extends Rw{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=il.get(this.auth._key());if(!e){try{const r=await Bk(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}il.set(this.auth._key(),e)}return this.bypassAuthState||il.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Bk(t,e){const n=Hk(e),r=Wk(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function $k(t,e){il.set(t._key(),e)}function Wk(t){return Sn(t._redirectPersistence)}function Hk(t){return rl(jk,t.config.apiKey,t.name)}async function qk(t,e,n=!1){if(sn(t.app))return Promise.reject(Pn(t));const r=Ir(t),i=Lk(r,e),o=await new zk(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kk=10*60*1e3;class Gk{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Qk(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Pw(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(cn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Kk&&this.cachedEventUids.clear(),this.cachedEventUids.has(qg(e))}saveEventToCache(e){this.cachedEventUids.add(qg(e)),this.lastProcessedEventTime=Date.now()}}function qg(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Pw({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Qk(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Pw(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yk(t,e={}){return Un(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xk=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Jk=/^https?/;async function Zk(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Yk(t);for(const n of e)try{if(e1(n))return}catch{}Xt(t,"unauthorized-domain")}function e1(t){const e=qh(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!Jk.test(n))return!1;if(Xk.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const t1=new Go(3e4,6e4);function Kg(){const t=hn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function n1(t){return new Promise((e,n)=>{var r,i,s;function o(){Kg(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Kg(),n(cn(t,"network-request-failed"))},timeout:t1.get()})}if(!((i=(r=hn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=hn().gapi)===null||s===void 0)&&s.load)o();else{const l=HC("iframefcb");return hn()[l]=()=>{gapi.load?o():n(cn(t,"network-request-failed"))},dw(`${WC()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw sl=null,e})}let sl=null;function r1(t){return sl=sl||n1(t),sl}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i1=new Go(5e3,15e3),s1="__/auth/iframe",o1="emulator/auth/iframe",a1={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},l1=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function u1(t){const e=t.config;G(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?kf(e,o1):`https://${t.config.authDomain}/${s1}`,r={apiKey:e.apiKey,appName:t.name,v:ts},i=l1.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Uo(r).slice(1)}`}async function c1(t){const e=await r1(t),n=hn().gapi;return G(n,t,"internal-error"),e.open({where:document.body,url:u1(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:a1,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=cn(t,"network-request-failed"),l=hn().setTimeout(()=>{s(o)},i1.get());function u(){hn().clearTimeout(l),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h1={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},d1=500,f1=600,p1="_blank",m1="http://localhost";class Gg{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function g1(t,e,n,r=d1,i=f1){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u=Object.assign(Object.assign({},h1),{width:r.toString(),height:i.toString(),top:s,left:o}),h=lt().toLowerCase();n&&(l=sw(h)?p1:n),rw(h)&&(e=e||m1,u.scrollbars="yes");const f=Object.entries(u).reduce((y,[P,k])=>`${y}${P}=${k},`,"");if(LC(h)&&l!=="_self")return y1(e||"",l),new Gg(null);const g=window.open(e||"",l,f);G(g,t,"popup-blocked");try{g.focus()}catch{}return new Gg(g)}function y1(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _1="__/auth/handler",v1="emulator/auth/handler",E1=encodeURIComponent("fac");async function Qg(t,e,n,r,i,s){G(t.config.authDomain,t,"auth-domain-config-required"),G(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ts,eventId:i};if(e instanceof pw){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",YI(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,g]of Object.entries({}))o[f]=g}if(e instanceof Yo){const f=e.getScopes().filter(g=>g!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const u=await t._getAppCheckToken(),h=u?`#${E1}=${encodeURIComponent(u)}`:"";return`${w1(t)}?${Uo(l).slice(1)}${h}`}function w1({config:t}){return t.emulator?kf(t,v1):`https://${t.authDomain}/${_1}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nc="webStorageSupport";class T1{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ww,this._completeRedirectFn=qk,this._overrideRedirectResult=$k}async _openPopup(e,n,r,i){var s;Ln((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Qg(e,n,r,qh(),i);return g1(e,o,Of())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Qg(e,n,r,qh(),i);return Ak(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Ln(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await c1(e),r=new Gk(e);return n.register("authEvent",i=>(G(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Nc,{type:Nc},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Nc];o!==void 0&&n(!!o),Xt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Zk(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return cw()||iw()||xf()}}const I1=T1;var Yg="@firebase/auth",Xg="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S1{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){G(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A1(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function R1(t){Wi(new qr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;G(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:hw(t)},h=new zC(r,i,s,u);return YC(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Wi(new qr("auth-internal",e=>{const n=Ir(e.getProvider("auth").getImmediate());return(r=>new S1(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),dr(Yg,Xg,A1(t)),dr(Yg,Xg,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P1=5*60,C1=yv("authIdTokenMaxAge")||P1;let Jg=null;const k1=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>C1)return;const i=n==null?void 0:n.token;Jg!==i&&(Jg=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function N1(t=wv()){const e=Hd(t,"auth");if(e.isInitialized())return e.getImmediate();const n=QC(t,{popupRedirectResolver:I1,persistence:[Ok,Tk,ww]}),r=yv("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=k1(s.toString());yk(n,o,()=>o(n.currentUser)),gk(n,l=>o(l))}}const i=mv("auth");return i&&XC(n,`http://${i}`),n}function x1(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}BC({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=cn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",x1().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});R1("Browser");const D1={apiKey:"AIzaSyAqWVa3qC1nu04x7g3gegj3jtX8rlRofpY",authDomain:"ojt-tracker-1076f.firebaseapp.com",projectId:"ojt-tracker-1076f",storageBucket:"ojt-tracker-1076f.firebasestorage.app",messagingSenderId:"857762541284",appId:"1:857762541284:web:2efcd7834bfcdbd23786f1",measurementId:"G-6WVD9H4D43"},Cw=Ev(D1),nn=qP(Cw),io=N1(Cw);function V1({onLogin:t}){const[e,n]=oe.useState("login"),[r,i]=oe.useState(""),[s,o]=oe.useState(""),[l,u]=oe.useState(""),[h,f]=oe.useState(""),[g,y]=oe.useState(!1),[P,k]=oe.useState(""),[D,L]=oe.useState(""),[S,E]=oe.useState(!1);async function A(){if(k(""),L(""),!r||!s)return k("Please enter both email and password.");E(!0);try{const _=await mk(io,r,s),m=vn(nn,"accounts",_.user.uid),v=await Hh(m);if(!v.exists())return k("Account record not found. Please register first.");const w=v.data();L(`Welcome back, ${w.fullName||_.user.email}`),t==null||t({uid:_.user.uid,email:_.user.email,fullName:w.fullName||""})}catch(_){console.error(_);const m=_.code||"";k(m==="auth/configuration-not-found"?"Firebase auth is not configured for this app. Enable Email/Password sign-in and add localhost to authorized domains.":_.message||"Sign in failed.")}finally{E(!1)}}async function O(){if(k(""),L(""),!h||!r||!s||!l)return k("Please complete all registration fields.");if(s!==l)return k("Passwords do not match.");E(!0);try{const _=await pk(io,r,s);await KE(vn(nn,"accounts",_.user.uid),{fullName:h,email:_.user.email,createdAt:fC()}),L(`Account created. Welcome, ${h}!`),t==null||t({uid:_.user.uid,email:_.user.email,fullName:h})}catch(_){console.error(_);const m=_.code||"";k(m==="auth/configuration-not-found"?"Firebase auth is not not configured for this app. Enable Email/Password sign-in and add localhost to authorized domains.":_.message||"Registration failed.")}finally{E(!1)}}async function j(){if(k(""),L(""),!r)return k("Please enter your email address.");E(!0);try{await fk(io,r),L("Password reset email sent. Check your inbox.")}catch(_){console.error(_);const m=_.code||"";k(m==="auth/configuration-not-found"?"Firebase auth is not configured for this app. Enable Email/Password sign-in and add localhost to authorized domains.":_.message||"Unable to send reset email.")}finally{E(!1)}}function U(_){_.preventDefault(),g?j():e==="login"?A():O()}return I.jsx("div",{className:"login-page",children:I.jsxs("div",{className:"login-card",children:[I.jsxs("div",{className:"login-header",children:[I.jsx("div",{className:"brand-icon",children:"OJT"}),I.jsxs("div",{children:[I.jsx("h1",{children:g?"Reset Password":e==="login"?"Sign In":"Register"}),I.jsx("p",{children:g?"Enter your email and we will send a reset link.":e==="login"?"Access your internship tracker account":"Create your internship tracker account"})]})]}),I.jsxs("form",{className:"login-form",onSubmit:U,children:[e==="register"&&I.jsxs("div",{className:"field",children:[I.jsx("label",{children:"Full Name"}),I.jsx("input",{type:"text",value:h,onChange:_=>f(_.target.value),placeholder:"Juan Dela Cruz"})]}),I.jsxs("div",{className:"field",children:[I.jsx("label",{children:"Email address"}),I.jsx("input",{type:"email",value:r,onChange:_=>i(_.target.value),placeholder:"you@example.com"})]}),!g&&I.jsxs("div",{className:"field",children:[I.jsx("label",{children:"Password"}),I.jsx("input",{type:"password",value:s,onChange:_=>o(_.target.value),placeholder:"Enter your password"})]}),!g&&e==="register"&&I.jsxs("div",{className:"field",children:[I.jsx("label",{children:"Confirm Password"}),I.jsx("input",{type:"password",value:l,onChange:_=>u(_.target.value),placeholder:"Confirm password"})]}),P&&I.jsx("p",{className:"form-error",children:P}),D&&I.jsx("p",{className:"form-success",children:D}),I.jsx("div",{className:"panel-footer",children:I.jsx("button",{type:"submit",className:"btn btn-primary",disabled:S,children:g?"Reset Password":e==="login"?"Sign In":"Register"})}),I.jsx("div",{className:"login-switch",children:g?I.jsxs("p",{children:["Remembered it?"," ",I.jsx("button",{type:"button",className:"btn-link",onClick:()=>y(!1),children:"Back to Sign In"})]}):e==="login"?I.jsxs(I.Fragment,{children:[I.jsxs("p",{children:["Don’t have an account?"," ",I.jsx("button",{type:"button",className:"btn-link",onClick:()=>n("register"),children:"Register"})]}),I.jsx("p",{children:I.jsx("button",{type:"button",className:"btn-link",onClick:()=>y(!0),children:"Forgot password?"})})]}):I.jsxs("p",{children:["Already have an account?"," ",I.jsx("button",{type:"button",className:"btn-link",onClick:()=>n("login"),children:"Sign In"})]})})]})]})})}const Zg="settings",Vs="ojt_entries";function O1(){const[t,e]=oe.useState([]),[n,r]=oe.useState(!0),[i,s]=oe.useState(!1),[o,l]=oe.useState(null),[u,h]=oe.useState(!0),[f,g]=oe.useState(null),[y,P]=oe.useState(""),[k,D]=oe.useState(""),[L,S]=oe.useState(""),[E,A]=oe.useState(""),[O,j]=oe.useState(!1),U=new Date().toISOString().split("T")[0],[_,m]=oe.useState(U),[v,w]=oe.useState(""),[R,C]=oe.useState(""),[T,Ue]=oe.useState(0),[Jt,fn]=oe.useState(0),[Ee,B]=oe.useState("present"),[K,Q]=oe.useState(""),[pe,re]=oe.useState(""),[we,Nt]=oe.useState(null);async function jt(V){e([]),D(""),S(""),A(""),P((V==null?void 0:V.fullName)||"");try{if(V!=null&&V.uid){const Y=await Hh(vn(nn,Zg,V.uid));if(Y.exists()){const ce=Y.data();D(ce.school||""),S(ce.course||""),A(ce.requiredHours||""),V.fullName||P(ce.name||"")}const te=iC(kg(nn,Vs),sC("userId","==",V.uid)),De=(await uC(te)).docs.map(ce=>({id:ce.id,...ce.data()}));e(De.sort((ce,mt)=>ce.date.localeCompare(mt.date)))}}catch(Y){console.error("Error loading data:",Y)}finally{r(!1)}}oe.useEffect(()=>_k(io,async Y=>{if(h(!0),r(!0),!Y){l(null),e([]),P(""),D(""),S(""),A(""),r(!1),h(!1);return}try{const te=await Hh(vn(nn,"accounts",Y.uid)),Ie=te.exists()?{uid:Y.uid,email:Y.email,fullName:te.data().fullName||""}:{uid:Y.uid,email:Y.email,fullName:""};l(Ie),Ie.fullName&&P(Ie.fullName),await jt(Ie)}catch(te){console.error("Auth load error:",te),r(!1)}finally{h(!1)}}),[]);function xt(V,Y,te=0){if(!V||!Y)return 0;const[Ie,De]=V.split(":").map(Number),[ce,mt]=Y.split(":").map(Number),Rr=ce*60+mt-(Ie*60+De)-te;return Rr>0?Math.round(Rr/60*100)/100:0}function Dt(V){if(!V)return"—";const[Y,te]=V.split(":"),Ie=parseInt(Y),De=Ie>=12?"PM":"AM";return`${Ie%12||12}:${te} ${De}`}function Jo(V){return V?new Date(V+"T00:00:00").toLocaleDateString("en-PH",{weekday:"short",year:"numeric",month:"short",day:"numeric"}):""}oe.useEffect(()=>{if(Ee==="present"&&v&&R){const V=xt(v,R,T);Nt(V>0?V:null)}else Nt(null)},[v,R,T,Ee]);function Nu(V){const Y=new Date(V+"T00:00:00"),Ie=(Y.getDay()+6)%7,De=new Date(Y);return De.setDate(Y.getDate()-Ie),De.toISOString().slice(0,10)}const Sr=t.reduce((V,Y)=>{const te=Nu(Y.date);return V[te]||(V[te]=[]),V[te].push(Y),V},{}),Ar=Object.keys(Sr).sort().map((V,Y)=>{const te=Sr[V],Ie=te.reduce((ce,mt)=>ce+(mt.hours||0),0),De=te.reduce((ce,mt)=>ce+(mt.overtimeMinutes||0)/60,0);return{weekStart:V,weekLabel:`Week ${Y+1} (${Jo(V).replace(/, \d{4}$/,"")})`,totalHours:Ie+De,baseHours:Ie,overtimeHours:De,days:te.length}}),as=t.reduce((V,Y)=>V+(Y.hours||0),0),ri=t.reduce((V,Y)=>V+(Y.overtimeMinutes||0)/60,0),Zt=as+ri,ii=t.filter(V=>V.status==="present").length,ls=t.filter(V=>V.status==="absent").length,pn=parseFloat(E)||0,si=Math.max(0,pn-Zt),Zo=pn>0?Math.min(100,Zt/pn*100):0,us=Ar.length;async function ea(){s(!0);try{if(!(o!=null&&o.uid))throw new Error("No authenticated user available.");const V=vn(nn,Zg,o.uid);await KE(V,{name:o.fullName||y,school:k,course:L,requiredHours:E}),j(!0),setTimeout(()=>j(!1),2e3)}catch(V){console.error("Save error:",V)}finally{s(!1)}}async function xu(){if(re(""),!_)return re("Please select a date.");const V=Ee==="absent"?0:xt(v,R,T);if(Ee==="present"&&V<=0)return re("Time Out must be after Time In.");if(!(o!=null&&o.uid))return s(!1),re("Unable to save entry without an authenticated account.");const Y={date:_,timeIn:Ee==="absent"?"":v,timeOut:Ee==="absent"?"":R,breakMinutes:Ee==="absent"?0:T,overtimeMinutes:Ee==="absent"?0:Jt,hours:V,status:Ee,remarks:K,userId:o.uid};s(!0);try{if(f){const te=vn(nn,Vs,f);await cC(te,Y),e(Ie=>[...Ie].map(De=>De.id===f?{id:f,...Y}:De).sort((De,ce)=>De.date.localeCompare(ce.date)))}else{const te=t.find(ce=>ce.date===_);if(te){if(!window.confirm("An entry for this date already exists. Replace it?")){s(!1);return}await Vg(vn(nn,Vs,te.id)),e(ce=>ce.filter(mt=>mt.id!==te.id))}const De={id:(await hC(kg(nn,Vs),Y)).id,...Y};e(ce=>[...ce,De].sort((mt,Rr)=>mt.date.localeCompare(Rr.date)))}m(U),w(""),C(""),Ue(0),fn(0),B("present"),Q(""),g(null)}catch(te){re("Failed to save. Check your Firebase connection."),console.error(te)}finally{s(!1)}}function cs(V){g(V.id),m(V.date||U),B(V.status||"present"),w(V.timeIn||""),C(V.timeOut||""),Ue(V.breakMinutes||0),fn(V.overtimeMinutes||0),Q(V.remarks||""),re("")}async function hs(V){if(window.confirm("Delete this entry?"))try{await Vg(vn(nn,Vs,V.id)),e(Y=>Y.filter(te=>te.id!==V.id))}catch(Y){console.error("Delete error:",Y)}}async function ta(){try{await vk(io),l(null),r(!1)}catch(V){console.error("Sign out error:",V)}}function je(){window.print()}return u||o&&n?I.jsxs("div",{className:"loading-screen",children:[I.jsx("div",{className:"spinner"}),I.jsx("p",{children:"Loading your records..."})]}):!o&&!u?I.jsx(V1,{onLogin:V=>l(V)}):I.jsxs("div",{className:"app",children:[I.jsx("header",{className:"app-header no-print",children:I.jsxs("div",{className:"header-inner",children:[I.jsxs("div",{className:"header-brand",children:[I.jsx("div",{className:"brand-icon",children:"OJT"}),I.jsxs("div",{children:[I.jsx("h1",{children:"OJT Hour Tracker"}),I.jsx("p",{className:"header-sub",children:"On-the-Job Training Daily Log by Andrei D. Pantoja"})]})]}),I.jsxs("button",{className:"btn btn-print",onClick:je,children:[I.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[I.jsx("polyline",{points:"6 9 6 2 18 2 18 9"}),I.jsx("path",{d:"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"}),I.jsx("rect",{x:"6",y:"14",width:"12",height:"8"})]}),"Print / Export PDF"]}),o&&I.jsx("button",{className:"btn btn-print",onClick:ta,children:"Sign Out"})]})}),I.jsxs("div",{className:"print-header print-only",children:[I.jsx("h1",{children:"OJT Internship Daily Time Record"}),I.jsxs("div",{className:"print-info-grid",children:[I.jsxs("div",{children:[I.jsx("span",{children:"Name:"})," ",y||"—"]}),I.jsxs("div",{children:[I.jsx("span",{children:"School:"})," ",k||"—"]}),I.jsxs("div",{children:[I.jsx("span",{children:"Course:"})," ",L||"—"]}),I.jsxs("div",{children:[I.jsx("span",{children:"Required Hours:"})," ",pn||"—"]}),I.jsxs("div",{children:[I.jsx("span",{children:"Total Rendered:"})," ",Zt.toFixed(2)," hrs"]}),I.jsxs("div",{children:[I.jsx("span",{children:"Remaining:"})," ",si.toFixed(2)," hrs"]}),I.jsxs("div",{children:[I.jsx("span",{children:"Weeks:"})," ",us]})]}),I.jsxs("div",{className:"print-meta-area",children:[I.jsx("div",{className:"print-week-grid",children:Ar.map(V=>I.jsxs("div",{className:"week-card",children:[I.jsx("div",{className:"week-row",children:I.jsx("strong",{children:V.weekLabel})}),I.jsxs("div",{className:"week-row",children:["Days: ",V.days]}),I.jsxs("div",{className:"week-row",children:["Base: ",V.baseHours.toFixed(2)," hrs"]}),I.jsxs("div",{className:"week-row",children:["OT: ",V.overtimeHours.toFixed(2)," hrs"]}),I.jsx("div",{className:"week-row",children:I.jsxs("strong",{children:["Total: ",V.totalHours.toFixed(2)," hrs"]})})]},V.weekStart))}),I.jsxs("div",{className:"print-signature-box",children:[I.jsxs("div",{children:[I.jsx("div",{className:"signature-line"}),I.jsx("div",{children:"Supervisor / Mentor Signature"})]}),I.jsxs("div",{children:[I.jsx("div",{className:"signature-line"}),I.jsx("div",{children:"Intern Signature"})]}),I.jsxs("div",{children:[I.jsx("div",{className:"signature-line"}),I.jsx("div",{children:"Date"})]})]})]})]}),I.jsxs("main",{className:"main",children:[I.jsxs("section",{className:"summary-grid",children:[I.jsxs("div",{className:"stat-card",children:[I.jsx("div",{className:"stat-label",children:"Required Hours"}),I.jsx("div",{className:"stat-value",children:pn||"—"})]}),I.jsxs("div",{className:"stat-card accent-blue",children:[I.jsx("div",{className:"stat-label",children:"Hours Rendered"}),I.jsx("div",{className:"stat-value",children:Zt.toFixed(2)})]}),I.jsxs("div",{className:"stat-card accent-green",children:[I.jsx("div",{className:"stat-label",children:"Days Present"}),I.jsx("div",{className:"stat-value",children:ii})]}),I.jsxs("div",{className:"stat-card accent-red",children:[I.jsx("div",{className:"stat-label",children:"Days Absent"}),I.jsx("div",{className:"stat-value",children:ls})]})]}),pn>0&&I.jsxs("section",{className:"progress-section no-print",children:[I.jsxs("div",{className:"progress-labels",children:[I.jsxs("span",{children:[Zt.toFixed(2)," / ",pn," hrs"]}),I.jsx("span",{className:si===0?"done":"",children:si===0?"✓ Completed!":`${si.toFixed(2)} hrs remaining`})]}),I.jsx("div",{className:"progress-bar",children:I.jsx("div",{className:"progress-fill",style:{width:`${Zo}%`}})})]}),I.jsxs("section",{className:"panel no-print",children:[I.jsx("h2",{className:"panel-title",children:"Intern Information"}),I.jsxs("div",{className:"info-grid",children:[I.jsxs("div",{className:"field",children:[I.jsxs("label",{children:["Full Name",o!=null&&o.fullName?" (from account)":""]}),I.jsx("input",{value:y,onChange:V=>P(V.target.value),placeholder:"e.g. Juan dela Cruz",disabled:!!(o!=null&&o.fullName)})]}),I.jsxs("div",{className:"field",children:[I.jsx("label",{children:"School / University"}),I.jsx("input",{value:k,onChange:V=>D(V.target.value),placeholder:"e.g. PLM Manila"})]}),I.jsxs("div",{className:"field",children:[I.jsx("label",{children:"Course / Program"}),I.jsx("input",{value:L,onChange:V=>S(V.target.value),placeholder:"e.g. BS Information Technology"})]}),I.jsxs("div",{className:"field",children:[I.jsx("label",{children:"Required Hours"}),I.jsx("input",{type:"number",min:"0",value:E,onChange:V=>A(V.target.value),placeholder:"e.g. 600"})]})]}),I.jsx("div",{className:"panel-footer",children:I.jsx("button",{className:"btn btn-primary",onClick:ea,disabled:i,children:i?"Saving...":O?"✓ Saved!":"Save Info"})})]}),I.jsxs("section",{className:"panel no-print",children:[I.jsx("h2",{className:"panel-title",children:"Log Daily Entry"}),I.jsxs("div",{className:"form-grid",children:[I.jsxs("div",{className:"field",children:[I.jsx("label",{children:"Date"}),I.jsx("input",{type:"date",value:_,onChange:V=>m(V.target.value)})]}),I.jsxs("div",{className:"field",children:[I.jsx("label",{children:"Status"}),I.jsxs("select",{value:Ee,onChange:V=>{B(V.target.value),w(""),C(""),Ue(0)},children:[I.jsx("option",{value:"present",children:"Present"}),I.jsx("option",{value:"absent",children:"Absent"})]})]}),I.jsxs("div",{className:"field",children:[I.jsx("label",{children:"Time In"}),I.jsx("input",{type:"time",value:v,disabled:Ee==="absent",onChange:V=>w(V.target.value)})]}),I.jsxs("div",{className:"field",children:[I.jsxs("label",{children:["Time Out"," ",we!==null&&I.jsxs("span",{className:"preview-badge",children:[we," hrs"]})]}),I.jsx("input",{type:"time",value:R,disabled:Ee==="absent",onChange:V=>C(V.target.value)})]}),I.jsxs("div",{className:"field",children:[I.jsx("label",{children:"Break Time"}),I.jsxs("select",{value:T,disabled:Ee==="absent",onChange:V=>Ue(Number(V.target.value)),children:[I.jsx("option",{value:0,children:"0:00"}),I.jsx("option",{value:30,children:"30 mins"}),I.jsx("option",{value:60,children:"1 hr"})]})]}),I.jsxs("div",{className:"field",children:[I.jsx("label",{children:"Overtime"}),I.jsxs("select",{value:Jt,disabled:Ee==="absent",onChange:V=>fn(Number(V.target.value)),children:[I.jsx("option",{value:0,children:"0:00"}),I.jsx("option",{value:15,children:"15 mins"}),I.jsx("option",{value:30,children:"30 mins"}),I.jsx("option",{value:45,children:"45 mins"}),I.jsx("option",{value:60,children:"1 hr"}),I.jsx("option",{value:90,children:"1 hr 30 mins"}),I.jsx("option",{value:120,children:"2 hrs"})]})]}),I.jsxs("div",{className:"field field-wide",children:[I.jsx("label",{children:"Remarks (optional)"}),I.jsx("input",{value:K,onChange:V=>Q(V.target.value),placeholder:"e.g. Field work, holiday, etc."})]})]}),pe&&I.jsx("p",{className:"form-error",children:pe}),I.jsxs("div",{className:"panel-footer",children:[I.jsx("button",{className:"btn btn-primary",onClick:xu,disabled:i,children:i?"Saving...":f?"Update Entry":"+ Add Entry"}),f&&I.jsx("button",{type:"button",className:"btn btn-link",onClick:()=>{g(null),m(U),w(""),C(""),Ue(0),B("present"),Q(""),re("")},children:"Cancel"})]})]}),I.jsxs("section",{className:"panel",children:[I.jsxs("div",{className:"panel-head",children:[I.jsx("h2",{className:"panel-title",children:"Daily Log"}),I.jsxs("span",{className:"entry-count no-print",children:[t.length," entries"]})]}),t.length===0?I.jsxs("div",{className:"empty-state",children:[I.jsx("div",{className:"empty-icon",children:"📋"}),I.jsx("p",{children:"No entries yet. Add your first entry above."})]}):I.jsx("div",{className:"table-wrapper",children:I.jsxs("table",{children:[I.jsx("thead",{children:I.jsxs("tr",{children:[I.jsx("th",{children:"#"}),I.jsx("th",{children:"Date"}),I.jsx("th",{children:"Time In"}),I.jsx("th",{children:"Time Out"}),I.jsx("th",{children:"Break"}),I.jsx("th",{children:"Overtime"}),I.jsx("th",{children:"Total"}),I.jsx("th",{children:"Status"}),I.jsx("th",{children:"Remarks"}),I.jsx("th",{className:"no-print",children:"Action"})]})}),I.jsx("tbody",{children:t.map((V,Y)=>{const te=(V.overtimeMinutes||0)/60,Ie=(V.hours||0)+te;return I.jsxs("tr",{className:V.status==="absent"?"row-absent":"",children:[I.jsx("td",{className:"td-num",children:Y+1}),I.jsx("td",{children:Jo(V.date)}),I.jsx("td",{children:V.status==="absent"?"—":Dt(V.timeIn)}),I.jsx("td",{children:V.status==="absent"?"—":Dt(V.timeOut)}),I.jsx("td",{children:V.status==="absent"?"—":V.breakMinutes===60?"1 hr":V.breakMinutes===30?"30 mins":"0:00"}),I.jsx("td",{children:V.status==="absent"?"—":te?`${te.toFixed(2)} hrs`:"0:00"}),I.jsx("td",{className:"td-hours",children:V.status==="absent"?"—":`${Ie.toFixed(2)} hrs`}),I.jsx("td",{children:I.jsx("span",{className:`badge ${V.status==="absent"?"badge-absent":"badge-present"}`,children:V.status==="absent"?"Absent":"Present"})}),I.jsx("td",{className:"td-remarks",children:V.remarks||"—"}),I.jsxs("td",{className:"no-print",children:[I.jsx("button",{className:"btn btn-primary",type:"button",onClick:()=>cs(V),children:"Edit"}),I.jsx("button",{className:"btn-del",type:"button",onClick:()=>hs(V),children:"Delete"})]})]},V.id)})}),I.jsx("tfoot",{children:I.jsxs("tr",{children:[I.jsx("td",{colSpan:"5",className:"foot-label",children:"Total Rendered"}),I.jsxs("td",{className:"foot-total",children:[ri.toFixed(2)," hrs OT"]}),I.jsxs("td",{className:"foot-total",children:[Zt.toFixed(2)," hrs"]}),I.jsxs("td",{colSpan:"3",className:"foot-summary",children:["Present: ",ii,"  |  Absent: ",ls]})]})})]})})]})]}),I.jsx("footer",{className:"app-footer no-print",children:I.jsx("p",{children:"OJT Tracker — Data saved to Firebase Firestore"})})]})}xc.createRoot(document.getElementById("root")).render(I.jsx(g0.StrictMode,{children:I.jsx(O1,{})}));
