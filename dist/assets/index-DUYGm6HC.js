function Wf(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const s in r)if(s!=="default"&&!(s in e)){const l=Object.getOwnPropertyDescriptor(r,s);l&&Object.defineProperty(e,s,l.get?l:{enumerable:!0,get:()=>r[s]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const l of s)if(l.type==="childList")for(const o of l.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const l={};return s.integrity&&(l.integrity=s.integrity),s.referrerPolicy&&(l.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?l.credentials="include":s.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(s){if(s.ep)return;s.ep=!0;const l=n(s);fetch(s.href,l)}})();function Vf(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var zd={exports:{}},hl={},Fd={exports:{}},I={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kr=Symbol.for("react.element"),qf=Symbol.for("react.portal"),Qf=Symbol.for("react.fragment"),Kf=Symbol.for("react.strict_mode"),Gf=Symbol.for("react.profiler"),Jf=Symbol.for("react.provider"),Yf=Symbol.for("react.context"),Xf=Symbol.for("react.forward_ref"),Zf=Symbol.for("react.suspense"),eh=Symbol.for("react.memo"),th=Symbol.for("react.lazy"),Ca=Symbol.iterator;function nh(e){return e===null||typeof e!="object"?null:(e=Ca&&e[Ca]||e["@@iterator"],typeof e=="function"?e:null)}var Ud={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Hd=Object.assign,$d={};function Qn(e,t,n){this.props=e,this.context=t,this.refs=$d,this.updater=n||Ud}Qn.prototype.isReactComponent={};Qn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Qn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Wd(){}Wd.prototype=Qn.prototype;function gi(e,t,n){this.props=e,this.context=t,this.refs=$d,this.updater=n||Ud}var xi=gi.prototype=new Wd;xi.constructor=gi;Hd(xi,Qn.prototype);xi.isPureReactComponent=!0;var Ea=Array.isArray,Vd=Object.prototype.hasOwnProperty,yi={current:null},qd={key:!0,ref:!0,__self:!0,__source:!0};function Qd(e,t,n){var r,s={},l=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(l=""+t.key),t)Vd.call(t,r)&&!qd.hasOwnProperty(r)&&(s[r]=t[r]);var a=arguments.length-2;if(a===1)s.children=n;else if(1<a){for(var c=Array(a),d=0;d<a;d++)c[d]=arguments[d+2];s.children=c}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)s[r]===void 0&&(s[r]=a[r]);return{$$typeof:Kr,type:e,key:l,ref:o,props:s,_owner:yi.current}}function rh(e,t){return{$$typeof:Kr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function vi(e){return typeof e=="object"&&e!==null&&e.$$typeof===Kr}function sh(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Na=/\/+/g;function Dl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?sh(""+e.key):t.toString(36)}function ks(e,t,n,r,s){var l=typeof e;(l==="undefined"||l==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(l){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case Kr:case qf:o=!0}}if(o)return o=e,s=s(o),e=r===""?"."+Dl(o,0):r,Ea(s)?(n="",e!=null&&(n=e.replace(Na,"$&/")+"/"),ks(s,t,n,"",function(d){return d})):s!=null&&(vi(s)&&(s=rh(s,n+(!s.key||o&&o.key===s.key?"":(""+s.key).replace(Na,"$&/")+"/")+e)),t.push(s)),1;if(o=0,r=r===""?".":r+":",Ea(e))for(var a=0;a<e.length;a++){l=e[a];var c=r+Dl(l,a);o+=ks(l,t,n,c,s)}else if(c=nh(e),typeof c=="function")for(e=c.call(e),a=0;!(l=e.next()).done;)l=l.value,c=r+Dl(l,a++),o+=ks(l,t,n,c,s);else if(l==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function ls(e,t,n){if(e==null)return e;var r=[],s=0;return ks(e,r,"","",function(l){return t.call(n,l,s++)}),r}function lh(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ke={current:null},Cs={transition:null},oh={ReactCurrentDispatcher:ke,ReactCurrentBatchConfig:Cs,ReactCurrentOwner:yi};function Kd(){throw Error("act(...) is not supported in production builds of React.")}I.Children={map:ls,forEach:function(e,t,n){ls(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ls(e,function(){t++}),t},toArray:function(e){return ls(e,function(t){return t})||[]},only:function(e){if(!vi(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};I.Component=Qn;I.Fragment=Qf;I.Profiler=Gf;I.PureComponent=gi;I.StrictMode=Kf;I.Suspense=Zf;I.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=oh;I.act=Kd;I.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Hd({},e.props),s=e.key,l=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(l=t.ref,o=yi.current),t.key!==void 0&&(s=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(c in t)Vd.call(t,c)&&!qd.hasOwnProperty(c)&&(r[c]=t[c]===void 0&&a!==void 0?a[c]:t[c])}var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){a=Array(c);for(var d=0;d<c;d++)a[d]=arguments[d+2];r.children=a}return{$$typeof:Kr,type:e.type,key:s,ref:l,props:r,_owner:o}};I.createContext=function(e){return e={$$typeof:Yf,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Jf,_context:e},e.Consumer=e};I.createElement=Qd;I.createFactory=function(e){var t=Qd.bind(null,e);return t.type=e,t};I.createRef=function(){return{current:null}};I.forwardRef=function(e){return{$$typeof:Xf,render:e}};I.isValidElement=vi;I.lazy=function(e){return{$$typeof:th,_payload:{_status:-1,_result:e},_init:lh}};I.memo=function(e,t){return{$$typeof:eh,type:e,compare:t===void 0?null:t}};I.startTransition=function(e){var t=Cs.transition;Cs.transition={};try{e()}finally{Cs.transition=t}};I.unstable_act=Kd;I.useCallback=function(e,t){return ke.current.useCallback(e,t)};I.useContext=function(e){return ke.current.useContext(e)};I.useDebugValue=function(){};I.useDeferredValue=function(e){return ke.current.useDeferredValue(e)};I.useEffect=function(e,t){return ke.current.useEffect(e,t)};I.useId=function(){return ke.current.useId()};I.useImperativeHandle=function(e,t,n){return ke.current.useImperativeHandle(e,t,n)};I.useInsertionEffect=function(e,t){return ke.current.useInsertionEffect(e,t)};I.useLayoutEffect=function(e,t){return ke.current.useLayoutEffect(e,t)};I.useMemo=function(e,t){return ke.current.useMemo(e,t)};I.useReducer=function(e,t,n){return ke.current.useReducer(e,t,n)};I.useRef=function(e){return ke.current.useRef(e)};I.useState=function(e){return ke.current.useState(e)};I.useSyncExternalStore=function(e,t,n){return ke.current.useSyncExternalStore(e,t,n)};I.useTransition=function(){return ke.current.useTransition()};I.version="18.3.1";Fd.exports=I;var v=Fd.exports;const ih=Vf(v),ah=Wf({__proto__:null,default:ih},[v]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ch=v,dh=Symbol.for("react.element"),uh=Symbol.for("react.fragment"),ph=Object.prototype.hasOwnProperty,fh=ch.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,hh={key:!0,ref:!0,__self:!0,__source:!0};function Gd(e,t,n){var r,s={},l=null,o=null;n!==void 0&&(l=""+n),t.key!==void 0&&(l=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)ph.call(t,r)&&!hh.hasOwnProperty(r)&&(s[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)s[r]===void 0&&(s[r]=t[r]);return{$$typeof:dh,type:e,key:l,ref:o,props:s,_owner:fh.current}}hl.Fragment=uh;hl.jsx=Gd;hl.jsxs=Gd;zd.exports=hl;var i=zd.exports,xo={},Jd={exports:{}},Be={},Yd={exports:{}},Xd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(R,O){var D=R.length;R.push(O);e:for(;0<D;){var W=D-1>>>1,B=R[W];if(0<s(B,O))R[W]=O,R[D]=B,D=W;else break e}}function n(R){return R.length===0?null:R[0]}function r(R){if(R.length===0)return null;var O=R[0],D=R.pop();if(D!==O){R[0]=D;e:for(var W=0,B=R.length,Fe=B>>>1;W<Fe;){var Ee=2*(W+1)-1,ft=R[Ee],st=Ee+1,z=R[st];if(0>s(ft,D))st<B&&0>s(z,ft)?(R[W]=z,R[st]=D,W=st):(R[W]=ft,R[Ee]=D,W=Ee);else if(st<B&&0>s(z,D))R[W]=z,R[st]=D,W=st;else break e}}return O}function s(R,O){var D=R.sortIndex-O.sortIndex;return D!==0?D:R.id-O.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;e.unstable_now=function(){return l.now()}}else{var o=Date,a=o.now();e.unstable_now=function(){return o.now()-a}}var c=[],d=[],h=1,p=null,g=3,b=!1,y=!1,S=!1,C=typeof setTimeout=="function"?setTimeout:null,u=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(R){for(var O=n(d);O!==null;){if(O.callback===null)r(d);else if(O.startTime<=R)r(d),O.sortIndex=O.expirationTime,t(c,O);else break;O=n(d)}}function w(R){if(S=!1,m(R),!y)if(n(c)!==null)y=!0,tr(k);else{var O=n(d);O!==null&&pt(w,O.startTime-R)}}function k(R,O){y=!1,S&&(S=!1,u(_),_=-1),b=!0;var D=g;try{for(m(O),p=n(c);p!==null&&(!(p.expirationTime>O)||R&&!le());){var W=p.callback;if(typeof W=="function"){p.callback=null,g=p.priorityLevel;var B=W(p.expirationTime<=O);O=e.unstable_now(),typeof B=="function"?p.callback=B:p===n(c)&&r(c),m(O)}else r(c);p=n(c)}if(p!==null)var Fe=!0;else{var Ee=n(d);Ee!==null&&pt(w,Ee.startTime-O),Fe=!1}return Fe}finally{p=null,g=D,b=!1}}var P=!1,E=null,_=-1,V=5,A=-1;function le(){return!(e.unstable_now()-A<V)}function rt(){if(E!==null){var R=e.unstable_now();A=R;var O=!0;try{O=E(!0,R)}finally{O?ut():(P=!1,E=null)}}else P=!1}var ut;if(typeof f=="function")ut=function(){f(rt)};else if(typeof MessageChannel<"u"){var Ae=new MessageChannel,vn=Ae.port2;Ae.port1.onmessage=rt,ut=function(){vn.postMessage(null)}}else ut=function(){C(rt,0)};function tr(R){E=R,P||(P=!0,ut())}function pt(R,O){_=C(function(){R(e.unstable_now())},O)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(R){R.callback=null},e.unstable_continueExecution=function(){y||b||(y=!0,tr(k))},e.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):V=0<R?Math.floor(1e3/R):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(R){switch(g){case 1:case 2:case 3:var O=3;break;default:O=g}var D=g;g=O;try{return R()}finally{g=D}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(R,O){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var D=g;g=R;try{return O()}finally{g=D}},e.unstable_scheduleCallback=function(R,O,D){var W=e.unstable_now();switch(typeof D=="object"&&D!==null?(D=D.delay,D=typeof D=="number"&&0<D?W+D:W):D=W,R){case 1:var B=-1;break;case 2:B=250;break;case 5:B=1073741823;break;case 4:B=1e4;break;default:B=5e3}return B=D+B,R={id:h++,callback:O,priorityLevel:R,startTime:D,expirationTime:B,sortIndex:-1},D>W?(R.sortIndex=D,t(d,R),n(c)===null&&R===n(d)&&(S?(u(_),_=-1):S=!0,pt(w,D-W))):(R.sortIndex=B,t(c,R),y||b||(y=!0,tr(k))),R},e.unstable_shouldYield=le,e.unstable_wrapCallback=function(R){var O=g;return function(){var D=g;g=O;try{return R.apply(this,arguments)}finally{g=D}}}})(Xd);Yd.exports=Xd;var mh=Yd.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gh=v,Ie=mh;function j(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Zd=new Set,Nr={};function xn(e,t){Fn(e,t),Fn(e+"Capture",t)}function Fn(e,t){for(Nr[e]=t,e=0;e<t.length;e++)Zd.add(t[e])}var St=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),yo=Object.prototype.hasOwnProperty,xh=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Pa={},Ra={};function yh(e){return yo.call(Ra,e)?!0:yo.call(Pa,e)?!1:xh.test(e)?Ra[e]=!0:(Pa[e]=!0,!1)}function vh(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function wh(e,t,n,r){if(t===null||typeof t>"u"||vh(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ce(e,t,n,r,s,l,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=s,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=l,this.removeEmptyString=o}var he={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){he[e]=new Ce(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];he[t]=new Ce(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){he[e]=new Ce(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){he[e]=new Ce(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){he[e]=new Ce(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){he[e]=new Ce(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){he[e]=new Ce(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){he[e]=new Ce(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){he[e]=new Ce(e,5,!1,e.toLowerCase(),null,!1,!1)});var wi=/[\-:]([a-z])/g;function bi(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(wi,bi);he[t]=new Ce(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(wi,bi);he[t]=new Ce(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(wi,bi);he[t]=new Ce(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){he[e]=new Ce(e,1,!1,e.toLowerCase(),null,!1,!1)});he.xlinkHref=new Ce("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){he[e]=new Ce(e,1,!1,e.toLowerCase(),null,!0,!0)});function Si(e,t,n,r){var s=he.hasOwnProperty(t)?he[t]:null;(s!==null?s.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(wh(t,n,s,r)&&(n=null),r||s===null?yh(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):s.mustUseProperty?e[s.propertyName]=n===null?s.type===3?!1:"":n:(t=s.attributeName,r=s.attributeNamespace,n===null?e.removeAttribute(t):(s=s.type,n=s===3||s===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Et=gh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,os=Symbol.for("react.element"),Sn=Symbol.for("react.portal"),jn=Symbol.for("react.fragment"),ji=Symbol.for("react.strict_mode"),vo=Symbol.for("react.profiler"),eu=Symbol.for("react.provider"),tu=Symbol.for("react.context"),ki=Symbol.for("react.forward_ref"),wo=Symbol.for("react.suspense"),bo=Symbol.for("react.suspense_list"),Ci=Symbol.for("react.memo"),Rt=Symbol.for("react.lazy"),nu=Symbol.for("react.offscreen"),Ta=Symbol.iterator;function rr(e){return e===null||typeof e!="object"?null:(e=Ta&&e[Ta]||e["@@iterator"],typeof e=="function"?e:null)}var Z=Object.assign,Il;function hr(e){if(Il===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Il=t&&t[1]||""}return`
`+Il+e}var Bl=!1;function zl(e,t){if(!e||Bl)return"";Bl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(d){var r=d}Reflect.construct(e,[],t)}else{try{t.call()}catch(d){r=d}e.call(t.prototype)}else{try{throw Error()}catch(d){r=d}e()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var s=d.stack.split(`
`),l=r.stack.split(`
`),o=s.length-1,a=l.length-1;1<=o&&0<=a&&s[o]!==l[a];)a--;for(;1<=o&&0<=a;o--,a--)if(s[o]!==l[a]){if(o!==1||a!==1)do if(o--,a--,0>a||s[o]!==l[a]){var c=`
`+s[o].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=o&&0<=a);break}}}finally{Bl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?hr(e):""}function bh(e){switch(e.tag){case 5:return hr(e.type);case 16:return hr("Lazy");case 13:return hr("Suspense");case 19:return hr("SuspenseList");case 0:case 2:case 15:return e=zl(e.type,!1),e;case 11:return e=zl(e.type.render,!1),e;case 1:return e=zl(e.type,!0),e;default:return""}}function So(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case jn:return"Fragment";case Sn:return"Portal";case vo:return"Profiler";case ji:return"StrictMode";case wo:return"Suspense";case bo:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case tu:return(e.displayName||"Context")+".Consumer";case eu:return(e._context.displayName||"Context")+".Provider";case ki:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ci:return t=e.displayName||null,t!==null?t:So(e.type)||"Memo";case Rt:t=e._payload,e=e._init;try{return So(e(t))}catch{}}return null}function Sh(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return So(t);case 8:return t===ji?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Vt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ru(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function jh(e){var t=ru(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var s=n.get,l=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return s.call(this)},set:function(o){r=""+o,l.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function is(e){e._valueTracker||(e._valueTracker=jh(e))}function su(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=ru(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Fs(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function jo(e,t){var n=t.checked;return Z({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function _a(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Vt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function lu(e,t){t=t.checked,t!=null&&Si(e,"checked",t,!1)}function ko(e,t){lu(e,t);var n=Vt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Co(e,t.type,n):t.hasOwnProperty("defaultValue")&&Co(e,t.type,Vt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Ma(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Co(e,t,n){(t!=="number"||Fs(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var mr=Array.isArray;function On(e,t,n,r){if(e=e.options,t){t={};for(var s=0;s<n.length;s++)t["$"+n[s]]=!0;for(n=0;n<e.length;n++)s=t.hasOwnProperty("$"+e[n].value),e[n].selected!==s&&(e[n].selected=s),s&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Vt(n),t=null,s=0;s<e.length;s++){if(e[s].value===n){e[s].selected=!0,r&&(e[s].defaultSelected=!0);return}t!==null||e[s].disabled||(t=e[s])}t!==null&&(t.selected=!0)}}function Eo(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(j(91));return Z({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Aa(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(j(92));if(mr(n)){if(1<n.length)throw Error(j(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Vt(n)}}function ou(e,t){var n=Vt(t.value),r=Vt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Oa(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function iu(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function No(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?iu(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var as,au=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,s){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,s)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(as=as||document.createElement("div"),as.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=as.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Pr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var yr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},kh=["Webkit","ms","Moz","O"];Object.keys(yr).forEach(function(e){kh.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),yr[t]=yr[e]})});function cu(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||yr.hasOwnProperty(e)&&yr[e]?(""+t).trim():t+"px"}function du(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,s=cu(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,s):e[n]=s}}var Ch=Z({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Po(e,t){if(t){if(Ch[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(j(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(j(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(j(61))}if(t.style!=null&&typeof t.style!="object")throw Error(j(62))}}function Ro(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var To=null;function Ei(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var _o=null,Ln=null,Dn=null;function La(e){if(e=Yr(e)){if(typeof _o!="function")throw Error(j(280));var t=e.stateNode;t&&(t=vl(t),_o(e.stateNode,e.type,t))}}function uu(e){Ln?Dn?Dn.push(e):Dn=[e]:Ln=e}function pu(){if(Ln){var e=Ln,t=Dn;if(Dn=Ln=null,La(e),t)for(e=0;e<t.length;e++)La(t[e])}}function fu(e,t){return e(t)}function hu(){}var Fl=!1;function mu(e,t,n){if(Fl)return e(t,n);Fl=!0;try{return fu(e,t,n)}finally{Fl=!1,(Ln!==null||Dn!==null)&&(hu(),pu())}}function Rr(e,t){var n=e.stateNode;if(n===null)return null;var r=vl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(j(231,t,typeof n));return n}var Mo=!1;if(St)try{var sr={};Object.defineProperty(sr,"passive",{get:function(){Mo=!0}}),window.addEventListener("test",sr,sr),window.removeEventListener("test",sr,sr)}catch{Mo=!1}function Eh(e,t,n,r,s,l,o,a,c){var d=Array.prototype.slice.call(arguments,3);try{t.apply(n,d)}catch(h){this.onError(h)}}var vr=!1,Us=null,Hs=!1,Ao=null,Nh={onError:function(e){vr=!0,Us=e}};function Ph(e,t,n,r,s,l,o,a,c){vr=!1,Us=null,Eh.apply(Nh,arguments)}function Rh(e,t,n,r,s,l,o,a,c){if(Ph.apply(this,arguments),vr){if(vr){var d=Us;vr=!1,Us=null}else throw Error(j(198));Hs||(Hs=!0,Ao=d)}}function yn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function gu(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Da(e){if(yn(e)!==e)throw Error(j(188))}function Th(e){var t=e.alternate;if(!t){if(t=yn(e),t===null)throw Error(j(188));return t!==e?null:e}for(var n=e,r=t;;){var s=n.return;if(s===null)break;var l=s.alternate;if(l===null){if(r=s.return,r!==null){n=r;continue}break}if(s.child===l.child){for(l=s.child;l;){if(l===n)return Da(s),e;if(l===r)return Da(s),t;l=l.sibling}throw Error(j(188))}if(n.return!==r.return)n=s,r=l;else{for(var o=!1,a=s.child;a;){if(a===n){o=!0,n=s,r=l;break}if(a===r){o=!0,r=s,n=l;break}a=a.sibling}if(!o){for(a=l.child;a;){if(a===n){o=!0,n=l,r=s;break}if(a===r){o=!0,r=l,n=s;break}a=a.sibling}if(!o)throw Error(j(189))}}if(n.alternate!==r)throw Error(j(190))}if(n.tag!==3)throw Error(j(188));return n.stateNode.current===n?e:t}function xu(e){return e=Th(e),e!==null?yu(e):null}function yu(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=yu(e);if(t!==null)return t;e=e.sibling}return null}var vu=Ie.unstable_scheduleCallback,Ia=Ie.unstable_cancelCallback,_h=Ie.unstable_shouldYield,Mh=Ie.unstable_requestPaint,te=Ie.unstable_now,Ah=Ie.unstable_getCurrentPriorityLevel,Ni=Ie.unstable_ImmediatePriority,wu=Ie.unstable_UserBlockingPriority,$s=Ie.unstable_NormalPriority,Oh=Ie.unstable_LowPriority,bu=Ie.unstable_IdlePriority,ml=null,at=null;function Lh(e){if(at&&typeof at.onCommitFiberRoot=="function")try{at.onCommitFiberRoot(ml,e,void 0,(e.current.flags&128)===128)}catch{}}var et=Math.clz32?Math.clz32:Bh,Dh=Math.log,Ih=Math.LN2;function Bh(e){return e>>>=0,e===0?32:31-(Dh(e)/Ih|0)|0}var cs=64,ds=4194304;function gr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ws(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,s=e.suspendedLanes,l=e.pingedLanes,o=n&268435455;if(o!==0){var a=o&~s;a!==0?r=gr(a):(l&=o,l!==0&&(r=gr(l)))}else o=n&~s,o!==0?r=gr(o):l!==0&&(r=gr(l));if(r===0)return 0;if(t!==0&&t!==r&&!(t&s)&&(s=r&-r,l=t&-t,s>=l||s===16&&(l&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-et(t),s=1<<n,r|=e[n],t&=~s;return r}function zh(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Fh(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,s=e.expirationTimes,l=e.pendingLanes;0<l;){var o=31-et(l),a=1<<o,c=s[o];c===-1?(!(a&n)||a&r)&&(s[o]=zh(a,t)):c<=t&&(e.expiredLanes|=a),l&=~a}}function Oo(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Su(){var e=cs;return cs<<=1,!(cs&4194240)&&(cs=64),e}function Ul(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Gr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-et(t),e[t]=n}function Uh(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var s=31-et(n),l=1<<s;t[s]=0,r[s]=-1,e[s]=-1,n&=~l}}function Pi(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-et(n),s=1<<r;s&t|e[r]&t&&(e[r]|=t),n&=~s}}var q=0;function ju(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var ku,Ri,Cu,Eu,Nu,Lo=!1,us=[],Dt=null,It=null,Bt=null,Tr=new Map,_r=new Map,_t=[],Hh="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ba(e,t){switch(e){case"focusin":case"focusout":Dt=null;break;case"dragenter":case"dragleave":It=null;break;case"mouseover":case"mouseout":Bt=null;break;case"pointerover":case"pointerout":Tr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":_r.delete(t.pointerId)}}function lr(e,t,n,r,s,l){return e===null||e.nativeEvent!==l?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:l,targetContainers:[s]},t!==null&&(t=Yr(t),t!==null&&Ri(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,s!==null&&t.indexOf(s)===-1&&t.push(s),e)}function $h(e,t,n,r,s){switch(t){case"focusin":return Dt=lr(Dt,e,t,n,r,s),!0;case"dragenter":return It=lr(It,e,t,n,r,s),!0;case"mouseover":return Bt=lr(Bt,e,t,n,r,s),!0;case"pointerover":var l=s.pointerId;return Tr.set(l,lr(Tr.get(l)||null,e,t,n,r,s)),!0;case"gotpointercapture":return l=s.pointerId,_r.set(l,lr(_r.get(l)||null,e,t,n,r,s)),!0}return!1}function Pu(e){var t=tn(e.target);if(t!==null){var n=yn(t);if(n!==null){if(t=n.tag,t===13){if(t=gu(n),t!==null){e.blockedOn=t,Nu(e.priority,function(){Cu(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Es(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Do(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);To=r,n.target.dispatchEvent(r),To=null}else return t=Yr(n),t!==null&&Ri(t),e.blockedOn=n,!1;t.shift()}return!0}function za(e,t,n){Es(e)&&n.delete(t)}function Wh(){Lo=!1,Dt!==null&&Es(Dt)&&(Dt=null),It!==null&&Es(It)&&(It=null),Bt!==null&&Es(Bt)&&(Bt=null),Tr.forEach(za),_r.forEach(za)}function or(e,t){e.blockedOn===t&&(e.blockedOn=null,Lo||(Lo=!0,Ie.unstable_scheduleCallback(Ie.unstable_NormalPriority,Wh)))}function Mr(e){function t(s){return or(s,e)}if(0<us.length){or(us[0],e);for(var n=1;n<us.length;n++){var r=us[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Dt!==null&&or(Dt,e),It!==null&&or(It,e),Bt!==null&&or(Bt,e),Tr.forEach(t),_r.forEach(t),n=0;n<_t.length;n++)r=_t[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<_t.length&&(n=_t[0],n.blockedOn===null);)Pu(n),n.blockedOn===null&&_t.shift()}var In=Et.ReactCurrentBatchConfig,Vs=!0;function Vh(e,t,n,r){var s=q,l=In.transition;In.transition=null;try{q=1,Ti(e,t,n,r)}finally{q=s,In.transition=l}}function qh(e,t,n,r){var s=q,l=In.transition;In.transition=null;try{q=4,Ti(e,t,n,r)}finally{q=s,In.transition=l}}function Ti(e,t,n,r){if(Vs){var s=Do(e,t,n,r);if(s===null)Yl(e,t,r,qs,n),Ba(e,r);else if($h(s,e,t,n,r))r.stopPropagation();else if(Ba(e,r),t&4&&-1<Hh.indexOf(e)){for(;s!==null;){var l=Yr(s);if(l!==null&&ku(l),l=Do(e,t,n,r),l===null&&Yl(e,t,r,qs,n),l===s)break;s=l}s!==null&&r.stopPropagation()}else Yl(e,t,r,null,n)}}var qs=null;function Do(e,t,n,r){if(qs=null,e=Ei(r),e=tn(e),e!==null)if(t=yn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=gu(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return qs=e,null}function Ru(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ah()){case Ni:return 1;case wu:return 4;case $s:case Oh:return 16;case bu:return 536870912;default:return 16}default:return 16}}var At=null,_i=null,Ns=null;function Tu(){if(Ns)return Ns;var e,t=_i,n=t.length,r,s="value"in At?At.value:At.textContent,l=s.length;for(e=0;e<n&&t[e]===s[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===s[l-r];r++);return Ns=s.slice(e,1<r?1-r:void 0)}function Ps(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ps(){return!0}function Fa(){return!1}function ze(e){function t(n,r,s,l,o){this._reactName=n,this._targetInst=s,this.type=r,this.nativeEvent=l,this.target=o,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(l):l[a]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?ps:Fa,this.isPropagationStopped=Fa,this}return Z(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ps)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ps)},persist:function(){},isPersistent:ps}),t}var Kn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Mi=ze(Kn),Jr=Z({},Kn,{view:0,detail:0}),Qh=ze(Jr),Hl,$l,ir,gl=Z({},Jr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ai,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ir&&(ir&&e.type==="mousemove"?(Hl=e.screenX-ir.screenX,$l=e.screenY-ir.screenY):$l=Hl=0,ir=e),Hl)},movementY:function(e){return"movementY"in e?e.movementY:$l}}),Ua=ze(gl),Kh=Z({},gl,{dataTransfer:0}),Gh=ze(Kh),Jh=Z({},Jr,{relatedTarget:0}),Wl=ze(Jh),Yh=Z({},Kn,{animationName:0,elapsedTime:0,pseudoElement:0}),Xh=ze(Yh),Zh=Z({},Kn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),em=ze(Zh),tm=Z({},Kn,{data:0}),Ha=ze(tm),nm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},rm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},sm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function lm(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=sm[e])?!!t[e]:!1}function Ai(){return lm}var om=Z({},Jr,{key:function(e){if(e.key){var t=nm[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ps(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?rm[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ai,charCode:function(e){return e.type==="keypress"?Ps(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ps(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),im=ze(om),am=Z({},gl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),$a=ze(am),cm=Z({},Jr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ai}),dm=ze(cm),um=Z({},Kn,{propertyName:0,elapsedTime:0,pseudoElement:0}),pm=ze(um),fm=Z({},gl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),hm=ze(fm),mm=[9,13,27,32],Oi=St&&"CompositionEvent"in window,wr=null;St&&"documentMode"in document&&(wr=document.documentMode);var gm=St&&"TextEvent"in window&&!wr,_u=St&&(!Oi||wr&&8<wr&&11>=wr),Wa=" ",Va=!1;function Mu(e,t){switch(e){case"keyup":return mm.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Au(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var kn=!1;function xm(e,t){switch(e){case"compositionend":return Au(t);case"keypress":return t.which!==32?null:(Va=!0,Wa);case"textInput":return e=t.data,e===Wa&&Va?null:e;default:return null}}function ym(e,t){if(kn)return e==="compositionend"||!Oi&&Mu(e,t)?(e=Tu(),Ns=_i=At=null,kn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return _u&&t.locale!=="ko"?null:t.data;default:return null}}var vm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function qa(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!vm[e.type]:t==="textarea"}function Ou(e,t,n,r){uu(r),t=Qs(t,"onChange"),0<t.length&&(n=new Mi("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var br=null,Ar=null;function wm(e){Vu(e,0)}function xl(e){var t=Nn(e);if(su(t))return e}function bm(e,t){if(e==="change")return t}var Lu=!1;if(St){var Vl;if(St){var ql="oninput"in document;if(!ql){var Qa=document.createElement("div");Qa.setAttribute("oninput","return;"),ql=typeof Qa.oninput=="function"}Vl=ql}else Vl=!1;Lu=Vl&&(!document.documentMode||9<document.documentMode)}function Ka(){br&&(br.detachEvent("onpropertychange",Du),Ar=br=null)}function Du(e){if(e.propertyName==="value"&&xl(Ar)){var t=[];Ou(t,Ar,e,Ei(e)),mu(wm,t)}}function Sm(e,t,n){e==="focusin"?(Ka(),br=t,Ar=n,br.attachEvent("onpropertychange",Du)):e==="focusout"&&Ka()}function jm(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return xl(Ar)}function km(e,t){if(e==="click")return xl(t)}function Cm(e,t){if(e==="input"||e==="change")return xl(t)}function Em(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var nt=typeof Object.is=="function"?Object.is:Em;function Or(e,t){if(nt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var s=n[r];if(!yo.call(t,s)||!nt(e[s],t[s]))return!1}return!0}function Ga(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ja(e,t){var n=Ga(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ga(n)}}function Iu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Iu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Bu(){for(var e=window,t=Fs();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Fs(e.document)}return t}function Li(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Nm(e){var t=Bu(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Iu(n.ownerDocument.documentElement,n)){if(r!==null&&Li(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var s=n.textContent.length,l=Math.min(r.start,s);r=r.end===void 0?l:Math.min(r.end,s),!e.extend&&l>r&&(s=r,r=l,l=s),s=Ja(n,l);var o=Ja(n,r);s&&o&&(e.rangeCount!==1||e.anchorNode!==s.node||e.anchorOffset!==s.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(s.node,s.offset),e.removeAllRanges(),l>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Pm=St&&"documentMode"in document&&11>=document.documentMode,Cn=null,Io=null,Sr=null,Bo=!1;function Ya(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Bo||Cn==null||Cn!==Fs(r)||(r=Cn,"selectionStart"in r&&Li(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Sr&&Or(Sr,r)||(Sr=r,r=Qs(Io,"onSelect"),0<r.length&&(t=new Mi("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Cn)))}function fs(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var En={animationend:fs("Animation","AnimationEnd"),animationiteration:fs("Animation","AnimationIteration"),animationstart:fs("Animation","AnimationStart"),transitionend:fs("Transition","TransitionEnd")},Ql={},zu={};St&&(zu=document.createElement("div").style,"AnimationEvent"in window||(delete En.animationend.animation,delete En.animationiteration.animation,delete En.animationstart.animation),"TransitionEvent"in window||delete En.transitionend.transition);function yl(e){if(Ql[e])return Ql[e];if(!En[e])return e;var t=En[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in zu)return Ql[e]=t[n];return e}var Fu=yl("animationend"),Uu=yl("animationiteration"),Hu=yl("animationstart"),$u=yl("transitionend"),Wu=new Map,Xa="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Kt(e,t){Wu.set(e,t),xn(t,[e])}for(var Kl=0;Kl<Xa.length;Kl++){var Gl=Xa[Kl],Rm=Gl.toLowerCase(),Tm=Gl[0].toUpperCase()+Gl.slice(1);Kt(Rm,"on"+Tm)}Kt(Fu,"onAnimationEnd");Kt(Uu,"onAnimationIteration");Kt(Hu,"onAnimationStart");Kt("dblclick","onDoubleClick");Kt("focusin","onFocus");Kt("focusout","onBlur");Kt($u,"onTransitionEnd");Fn("onMouseEnter",["mouseout","mouseover"]);Fn("onMouseLeave",["mouseout","mouseover"]);Fn("onPointerEnter",["pointerout","pointerover"]);Fn("onPointerLeave",["pointerout","pointerover"]);xn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));xn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));xn("onBeforeInput",["compositionend","keypress","textInput","paste"]);xn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));xn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));xn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var xr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),_m=new Set("cancel close invalid load scroll toggle".split(" ").concat(xr));function Za(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Rh(r,t,void 0,e),e.currentTarget=null}function Vu(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],s=r.event;r=r.listeners;e:{var l=void 0;if(t)for(var o=r.length-1;0<=o;o--){var a=r[o],c=a.instance,d=a.currentTarget;if(a=a.listener,c!==l&&s.isPropagationStopped())break e;Za(s,a,d),l=c}else for(o=0;o<r.length;o++){if(a=r[o],c=a.instance,d=a.currentTarget,a=a.listener,c!==l&&s.isPropagationStopped())break e;Za(s,a,d),l=c}}}if(Hs)throw e=Ao,Hs=!1,Ao=null,e}function K(e,t){var n=t[$o];n===void 0&&(n=t[$o]=new Set);var r=e+"__bubble";n.has(r)||(qu(t,e,2,!1),n.add(r))}function Jl(e,t,n){var r=0;t&&(r|=4),qu(n,e,r,t)}var hs="_reactListening"+Math.random().toString(36).slice(2);function Lr(e){if(!e[hs]){e[hs]=!0,Zd.forEach(function(n){n!=="selectionchange"&&(_m.has(n)||Jl(n,!1,e),Jl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[hs]||(t[hs]=!0,Jl("selectionchange",!1,t))}}function qu(e,t,n,r){switch(Ru(t)){case 1:var s=Vh;break;case 4:s=qh;break;default:s=Ti}n=s.bind(null,t,n,e),s=void 0,!Mo||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(s=!0),r?s!==void 0?e.addEventListener(t,n,{capture:!0,passive:s}):e.addEventListener(t,n,!0):s!==void 0?e.addEventListener(t,n,{passive:s}):e.addEventListener(t,n,!1)}function Yl(e,t,n,r,s){var l=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===s||a.nodeType===8&&a.parentNode===s)break;if(o===4)for(o=r.return;o!==null;){var c=o.tag;if((c===3||c===4)&&(c=o.stateNode.containerInfo,c===s||c.nodeType===8&&c.parentNode===s))return;o=o.return}for(;a!==null;){if(o=tn(a),o===null)return;if(c=o.tag,c===5||c===6){r=l=o;continue e}a=a.parentNode}}r=r.return}mu(function(){var d=l,h=Ei(n),p=[];e:{var g=Wu.get(e);if(g!==void 0){var b=Mi,y=e;switch(e){case"keypress":if(Ps(n)===0)break e;case"keydown":case"keyup":b=im;break;case"focusin":y="focus",b=Wl;break;case"focusout":y="blur",b=Wl;break;case"beforeblur":case"afterblur":b=Wl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":b=Ua;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":b=Gh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":b=dm;break;case Fu:case Uu:case Hu:b=Xh;break;case $u:b=pm;break;case"scroll":b=Qh;break;case"wheel":b=hm;break;case"copy":case"cut":case"paste":b=em;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":b=$a}var S=(t&4)!==0,C=!S&&e==="scroll",u=S?g!==null?g+"Capture":null:g;S=[];for(var f=d,m;f!==null;){m=f;var w=m.stateNode;if(m.tag===5&&w!==null&&(m=w,u!==null&&(w=Rr(f,u),w!=null&&S.push(Dr(f,w,m)))),C)break;f=f.return}0<S.length&&(g=new b(g,y,null,n,h),p.push({event:g,listeners:S}))}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="pointerover",b=e==="mouseout"||e==="pointerout",g&&n!==To&&(y=n.relatedTarget||n.fromElement)&&(tn(y)||y[jt]))break e;if((b||g)&&(g=h.window===h?h:(g=h.ownerDocument)?g.defaultView||g.parentWindow:window,b?(y=n.relatedTarget||n.toElement,b=d,y=y?tn(y):null,y!==null&&(C=yn(y),y!==C||y.tag!==5&&y.tag!==6)&&(y=null)):(b=null,y=d),b!==y)){if(S=Ua,w="onMouseLeave",u="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(S=$a,w="onPointerLeave",u="onPointerEnter",f="pointer"),C=b==null?g:Nn(b),m=y==null?g:Nn(y),g=new S(w,f+"leave",b,n,h),g.target=C,g.relatedTarget=m,w=null,tn(h)===d&&(S=new S(u,f+"enter",y,n,h),S.target=m,S.relatedTarget=C,w=S),C=w,b&&y)t:{for(S=b,u=y,f=0,m=S;m;m=wn(m))f++;for(m=0,w=u;w;w=wn(w))m++;for(;0<f-m;)S=wn(S),f--;for(;0<m-f;)u=wn(u),m--;for(;f--;){if(S===u||u!==null&&S===u.alternate)break t;S=wn(S),u=wn(u)}S=null}else S=null;b!==null&&ec(p,g,b,S,!1),y!==null&&C!==null&&ec(p,C,y,S,!0)}}e:{if(g=d?Nn(d):window,b=g.nodeName&&g.nodeName.toLowerCase(),b==="select"||b==="input"&&g.type==="file")var k=bm;else if(qa(g))if(Lu)k=Cm;else{k=jm;var P=Sm}else(b=g.nodeName)&&b.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(k=km);if(k&&(k=k(e,d))){Ou(p,k,n,h);break e}P&&P(e,g,d),e==="focusout"&&(P=g._wrapperState)&&P.controlled&&g.type==="number"&&Co(g,"number",g.value)}switch(P=d?Nn(d):window,e){case"focusin":(qa(P)||P.contentEditable==="true")&&(Cn=P,Io=d,Sr=null);break;case"focusout":Sr=Io=Cn=null;break;case"mousedown":Bo=!0;break;case"contextmenu":case"mouseup":case"dragend":Bo=!1,Ya(p,n,h);break;case"selectionchange":if(Pm)break;case"keydown":case"keyup":Ya(p,n,h)}var E;if(Oi)e:{switch(e){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else kn?Mu(e,n)&&(_="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(_="onCompositionStart");_&&(_u&&n.locale!=="ko"&&(kn||_!=="onCompositionStart"?_==="onCompositionEnd"&&kn&&(E=Tu()):(At=h,_i="value"in At?At.value:At.textContent,kn=!0)),P=Qs(d,_),0<P.length&&(_=new Ha(_,e,null,n,h),p.push({event:_,listeners:P}),E?_.data=E:(E=Au(n),E!==null&&(_.data=E)))),(E=gm?xm(e,n):ym(e,n))&&(d=Qs(d,"onBeforeInput"),0<d.length&&(h=new Ha("onBeforeInput","beforeinput",null,n,h),p.push({event:h,listeners:d}),h.data=E))}Vu(p,t)})}function Dr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Qs(e,t){for(var n=t+"Capture",r=[];e!==null;){var s=e,l=s.stateNode;s.tag===5&&l!==null&&(s=l,l=Rr(e,n),l!=null&&r.unshift(Dr(e,l,s)),l=Rr(e,t),l!=null&&r.push(Dr(e,l,s))),e=e.return}return r}function wn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function ec(e,t,n,r,s){for(var l=t._reactName,o=[];n!==null&&n!==r;){var a=n,c=a.alternate,d=a.stateNode;if(c!==null&&c===r)break;a.tag===5&&d!==null&&(a=d,s?(c=Rr(n,l),c!=null&&o.unshift(Dr(n,c,a))):s||(c=Rr(n,l),c!=null&&o.push(Dr(n,c,a)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Mm=/\r\n?/g,Am=/\u0000|\uFFFD/g;function tc(e){return(typeof e=="string"?e:""+e).replace(Mm,`
`).replace(Am,"")}function ms(e,t,n){if(t=tc(t),tc(e)!==t&&n)throw Error(j(425))}function Ks(){}var zo=null,Fo=null;function Uo(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ho=typeof setTimeout=="function"?setTimeout:void 0,Om=typeof clearTimeout=="function"?clearTimeout:void 0,nc=typeof Promise=="function"?Promise:void 0,Lm=typeof queueMicrotask=="function"?queueMicrotask:typeof nc<"u"?function(e){return nc.resolve(null).then(e).catch(Dm)}:Ho;function Dm(e){setTimeout(function(){throw e})}function Xl(e,t){var n=t,r=0;do{var s=n.nextSibling;if(e.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"){if(r===0){e.removeChild(s),Mr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=s}while(n);Mr(t)}function zt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function rc(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Gn=Math.random().toString(36).slice(2),it="__reactFiber$"+Gn,Ir="__reactProps$"+Gn,jt="__reactContainer$"+Gn,$o="__reactEvents$"+Gn,Im="__reactListeners$"+Gn,Bm="__reactHandles$"+Gn;function tn(e){var t=e[it];if(t)return t;for(var n=e.parentNode;n;){if(t=n[jt]||n[it]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=rc(e);e!==null;){if(n=e[it])return n;e=rc(e)}return t}e=n,n=e.parentNode}return null}function Yr(e){return e=e[it]||e[jt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Nn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(j(33))}function vl(e){return e[Ir]||null}var Wo=[],Pn=-1;function Gt(e){return{current:e}}function G(e){0>Pn||(e.current=Wo[Pn],Wo[Pn]=null,Pn--)}function Q(e,t){Pn++,Wo[Pn]=e.current,e.current=t}var qt={},be=Gt(qt),Re=Gt(!1),cn=qt;function Un(e,t){var n=e.type.contextTypes;if(!n)return qt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var s={},l;for(l in n)s[l]=t[l];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=s),s}function Te(e){return e=e.childContextTypes,e!=null}function Gs(){G(Re),G(be)}function sc(e,t,n){if(be.current!==qt)throw Error(j(168));Q(be,t),Q(Re,n)}function Qu(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var s in r)if(!(s in t))throw Error(j(108,Sh(e)||"Unknown",s));return Z({},n,r)}function Js(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||qt,cn=be.current,Q(be,e),Q(Re,Re.current),!0}function lc(e,t,n){var r=e.stateNode;if(!r)throw Error(j(169));n?(e=Qu(e,t,cn),r.__reactInternalMemoizedMergedChildContext=e,G(Re),G(be),Q(be,e)):G(Re),Q(Re,n)}var yt=null,wl=!1,Zl=!1;function Ku(e){yt===null?yt=[e]:yt.push(e)}function zm(e){wl=!0,Ku(e)}function Jt(){if(!Zl&&yt!==null){Zl=!0;var e=0,t=q;try{var n=yt;for(q=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}yt=null,wl=!1}catch(s){throw yt!==null&&(yt=yt.slice(e+1)),vu(Ni,Jt),s}finally{q=t,Zl=!1}}return null}var Rn=[],Tn=0,Ys=null,Xs=0,He=[],$e=0,dn=null,vt=1,wt="";function Zt(e,t){Rn[Tn++]=Xs,Rn[Tn++]=Ys,Ys=e,Xs=t}function Gu(e,t,n){He[$e++]=vt,He[$e++]=wt,He[$e++]=dn,dn=e;var r=vt;e=wt;var s=32-et(r)-1;r&=~(1<<s),n+=1;var l=32-et(t)+s;if(30<l){var o=s-s%5;l=(r&(1<<o)-1).toString(32),r>>=o,s-=o,vt=1<<32-et(t)+s|n<<s|r,wt=l+e}else vt=1<<l|n<<s|r,wt=e}function Di(e){e.return!==null&&(Zt(e,1),Gu(e,1,0))}function Ii(e){for(;e===Ys;)Ys=Rn[--Tn],Rn[Tn]=null,Xs=Rn[--Tn],Rn[Tn]=null;for(;e===dn;)dn=He[--$e],He[$e]=null,wt=He[--$e],He[$e]=null,vt=He[--$e],He[$e]=null}var De=null,Le=null,J=!1,Ze=null;function Ju(e,t){var n=We(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function oc(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,De=e,Le=zt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,De=e,Le=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=dn!==null?{id:vt,overflow:wt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=We(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,De=e,Le=null,!0):!1;default:return!1}}function Vo(e){return(e.mode&1)!==0&&(e.flags&128)===0}function qo(e){if(J){var t=Le;if(t){var n=t;if(!oc(e,t)){if(Vo(e))throw Error(j(418));t=zt(n.nextSibling);var r=De;t&&oc(e,t)?Ju(r,n):(e.flags=e.flags&-4097|2,J=!1,De=e)}}else{if(Vo(e))throw Error(j(418));e.flags=e.flags&-4097|2,J=!1,De=e}}}function ic(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;De=e}function gs(e){if(e!==De)return!1;if(!J)return ic(e),J=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Uo(e.type,e.memoizedProps)),t&&(t=Le)){if(Vo(e))throw Yu(),Error(j(418));for(;t;)Ju(e,t),t=zt(t.nextSibling)}if(ic(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(j(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Le=zt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Le=null}}else Le=De?zt(e.stateNode.nextSibling):null;return!0}function Yu(){for(var e=Le;e;)e=zt(e.nextSibling)}function Hn(){Le=De=null,J=!1}function Bi(e){Ze===null?Ze=[e]:Ze.push(e)}var Fm=Et.ReactCurrentBatchConfig;function ar(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(j(309));var r=n.stateNode}if(!r)throw Error(j(147,e));var s=r,l=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===l?t.ref:(t=function(o){var a=s.refs;o===null?delete a[l]:a[l]=o},t._stringRef=l,t)}if(typeof e!="string")throw Error(j(284));if(!n._owner)throw Error(j(290,e))}return e}function xs(e,t){throw e=Object.prototype.toString.call(t),Error(j(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function ac(e){var t=e._init;return t(e._payload)}function Xu(e){function t(u,f){if(e){var m=u.deletions;m===null?(u.deletions=[f],u.flags|=16):m.push(f)}}function n(u,f){if(!e)return null;for(;f!==null;)t(u,f),f=f.sibling;return null}function r(u,f){for(u=new Map;f!==null;)f.key!==null?u.set(f.key,f):u.set(f.index,f),f=f.sibling;return u}function s(u,f){return u=$t(u,f),u.index=0,u.sibling=null,u}function l(u,f,m){return u.index=m,e?(m=u.alternate,m!==null?(m=m.index,m<f?(u.flags|=2,f):m):(u.flags|=2,f)):(u.flags|=1048576,f)}function o(u){return e&&u.alternate===null&&(u.flags|=2),u}function a(u,f,m,w){return f===null||f.tag!==6?(f=oo(m,u.mode,w),f.return=u,f):(f=s(f,m),f.return=u,f)}function c(u,f,m,w){var k=m.type;return k===jn?h(u,f,m.props.children,w,m.key):f!==null&&(f.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Rt&&ac(k)===f.type)?(w=s(f,m.props),w.ref=ar(u,f,m),w.return=u,w):(w=Ls(m.type,m.key,m.props,null,u.mode,w),w.ref=ar(u,f,m),w.return=u,w)}function d(u,f,m,w){return f===null||f.tag!==4||f.stateNode.containerInfo!==m.containerInfo||f.stateNode.implementation!==m.implementation?(f=io(m,u.mode,w),f.return=u,f):(f=s(f,m.children||[]),f.return=u,f)}function h(u,f,m,w,k){return f===null||f.tag!==7?(f=on(m,u.mode,w,k),f.return=u,f):(f=s(f,m),f.return=u,f)}function p(u,f,m){if(typeof f=="string"&&f!==""||typeof f=="number")return f=oo(""+f,u.mode,m),f.return=u,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case os:return m=Ls(f.type,f.key,f.props,null,u.mode,m),m.ref=ar(u,null,f),m.return=u,m;case Sn:return f=io(f,u.mode,m),f.return=u,f;case Rt:var w=f._init;return p(u,w(f._payload),m)}if(mr(f)||rr(f))return f=on(f,u.mode,m,null),f.return=u,f;xs(u,f)}return null}function g(u,f,m,w){var k=f!==null?f.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return k!==null?null:a(u,f,""+m,w);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case os:return m.key===k?c(u,f,m,w):null;case Sn:return m.key===k?d(u,f,m,w):null;case Rt:return k=m._init,g(u,f,k(m._payload),w)}if(mr(m)||rr(m))return k!==null?null:h(u,f,m,w,null);xs(u,m)}return null}function b(u,f,m,w,k){if(typeof w=="string"&&w!==""||typeof w=="number")return u=u.get(m)||null,a(f,u,""+w,k);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case os:return u=u.get(w.key===null?m:w.key)||null,c(f,u,w,k);case Sn:return u=u.get(w.key===null?m:w.key)||null,d(f,u,w,k);case Rt:var P=w._init;return b(u,f,m,P(w._payload),k)}if(mr(w)||rr(w))return u=u.get(m)||null,h(f,u,w,k,null);xs(f,w)}return null}function y(u,f,m,w){for(var k=null,P=null,E=f,_=f=0,V=null;E!==null&&_<m.length;_++){E.index>_?(V=E,E=null):V=E.sibling;var A=g(u,E,m[_],w);if(A===null){E===null&&(E=V);break}e&&E&&A.alternate===null&&t(u,E),f=l(A,f,_),P===null?k=A:P.sibling=A,P=A,E=V}if(_===m.length)return n(u,E),J&&Zt(u,_),k;if(E===null){for(;_<m.length;_++)E=p(u,m[_],w),E!==null&&(f=l(E,f,_),P===null?k=E:P.sibling=E,P=E);return J&&Zt(u,_),k}for(E=r(u,E);_<m.length;_++)V=b(E,u,_,m[_],w),V!==null&&(e&&V.alternate!==null&&E.delete(V.key===null?_:V.key),f=l(V,f,_),P===null?k=V:P.sibling=V,P=V);return e&&E.forEach(function(le){return t(u,le)}),J&&Zt(u,_),k}function S(u,f,m,w){var k=rr(m);if(typeof k!="function")throw Error(j(150));if(m=k.call(m),m==null)throw Error(j(151));for(var P=k=null,E=f,_=f=0,V=null,A=m.next();E!==null&&!A.done;_++,A=m.next()){E.index>_?(V=E,E=null):V=E.sibling;var le=g(u,E,A.value,w);if(le===null){E===null&&(E=V);break}e&&E&&le.alternate===null&&t(u,E),f=l(le,f,_),P===null?k=le:P.sibling=le,P=le,E=V}if(A.done)return n(u,E),J&&Zt(u,_),k;if(E===null){for(;!A.done;_++,A=m.next())A=p(u,A.value,w),A!==null&&(f=l(A,f,_),P===null?k=A:P.sibling=A,P=A);return J&&Zt(u,_),k}for(E=r(u,E);!A.done;_++,A=m.next())A=b(E,u,_,A.value,w),A!==null&&(e&&A.alternate!==null&&E.delete(A.key===null?_:A.key),f=l(A,f,_),P===null?k=A:P.sibling=A,P=A);return e&&E.forEach(function(rt){return t(u,rt)}),J&&Zt(u,_),k}function C(u,f,m,w){if(typeof m=="object"&&m!==null&&m.type===jn&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case os:e:{for(var k=m.key,P=f;P!==null;){if(P.key===k){if(k=m.type,k===jn){if(P.tag===7){n(u,P.sibling),f=s(P,m.props.children),f.return=u,u=f;break e}}else if(P.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Rt&&ac(k)===P.type){n(u,P.sibling),f=s(P,m.props),f.ref=ar(u,P,m),f.return=u,u=f;break e}n(u,P);break}else t(u,P);P=P.sibling}m.type===jn?(f=on(m.props.children,u.mode,w,m.key),f.return=u,u=f):(w=Ls(m.type,m.key,m.props,null,u.mode,w),w.ref=ar(u,f,m),w.return=u,u=w)}return o(u);case Sn:e:{for(P=m.key;f!==null;){if(f.key===P)if(f.tag===4&&f.stateNode.containerInfo===m.containerInfo&&f.stateNode.implementation===m.implementation){n(u,f.sibling),f=s(f,m.children||[]),f.return=u,u=f;break e}else{n(u,f);break}else t(u,f);f=f.sibling}f=io(m,u.mode,w),f.return=u,u=f}return o(u);case Rt:return P=m._init,C(u,f,P(m._payload),w)}if(mr(m))return y(u,f,m,w);if(rr(m))return S(u,f,m,w);xs(u,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,f!==null&&f.tag===6?(n(u,f.sibling),f=s(f,m),f.return=u,u=f):(n(u,f),f=oo(m,u.mode,w),f.return=u,u=f),o(u)):n(u,f)}return C}var $n=Xu(!0),Zu=Xu(!1),Zs=Gt(null),el=null,_n=null,zi=null;function Fi(){zi=_n=el=null}function Ui(e){var t=Zs.current;G(Zs),e._currentValue=t}function Qo(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Bn(e,t){el=e,zi=_n=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Pe=!0),e.firstContext=null)}function qe(e){var t=e._currentValue;if(zi!==e)if(e={context:e,memoizedValue:t,next:null},_n===null){if(el===null)throw Error(j(308));_n=e,el.dependencies={lanes:0,firstContext:e}}else _n=_n.next=e;return t}var nn=null;function Hi(e){nn===null?nn=[e]:nn.push(e)}function ep(e,t,n,r){var s=t.interleaved;return s===null?(n.next=n,Hi(t)):(n.next=s.next,s.next=n),t.interleaved=n,kt(e,r)}function kt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Tt=!1;function $i(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function tp(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function bt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Ft(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,F&2){var s=r.pending;return s===null?t.next=t:(t.next=s.next,s.next=t),r.pending=t,kt(e,n)}return s=r.interleaved,s===null?(t.next=t,Hi(r)):(t.next=s.next,s.next=t),r.interleaved=t,kt(e,n)}function Rs(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Pi(e,n)}}function cc(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var s=null,l=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};l===null?s=l=o:l=l.next=o,n=n.next}while(n!==null);l===null?s=l=t:l=l.next=t}else s=l=t;n={baseState:r.baseState,firstBaseUpdate:s,lastBaseUpdate:l,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function tl(e,t,n,r){var s=e.updateQueue;Tt=!1;var l=s.firstBaseUpdate,o=s.lastBaseUpdate,a=s.shared.pending;if(a!==null){s.shared.pending=null;var c=a,d=c.next;c.next=null,o===null?l=d:o.next=d,o=c;var h=e.alternate;h!==null&&(h=h.updateQueue,a=h.lastBaseUpdate,a!==o&&(a===null?h.firstBaseUpdate=d:a.next=d,h.lastBaseUpdate=c))}if(l!==null){var p=s.baseState;o=0,h=d=c=null,a=l;do{var g=a.lane,b=a.eventTime;if((r&g)===g){h!==null&&(h=h.next={eventTime:b,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=e,S=a;switch(g=t,b=n,S.tag){case 1:if(y=S.payload,typeof y=="function"){p=y.call(b,p,g);break e}p=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=S.payload,g=typeof y=="function"?y.call(b,p,g):y,g==null)break e;p=Z({},p,g);break e;case 2:Tt=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,g=s.effects,g===null?s.effects=[a]:g.push(a))}else b={eventTime:b,lane:g,tag:a.tag,payload:a.payload,callback:a.callback,next:null},h===null?(d=h=b,c=p):h=h.next=b,o|=g;if(a=a.next,a===null){if(a=s.shared.pending,a===null)break;g=a,a=g.next,g.next=null,s.lastBaseUpdate=g,s.shared.pending=null}}while(!0);if(h===null&&(c=p),s.baseState=c,s.firstBaseUpdate=d,s.lastBaseUpdate=h,t=s.shared.interleaved,t!==null){s=t;do o|=s.lane,s=s.next;while(s!==t)}else l===null&&(s.shared.lanes=0);pn|=o,e.lanes=o,e.memoizedState=p}}function dc(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],s=r.callback;if(s!==null){if(r.callback=null,r=n,typeof s!="function")throw Error(j(191,s));s.call(r)}}}var Xr={},ct=Gt(Xr),Br=Gt(Xr),zr=Gt(Xr);function rn(e){if(e===Xr)throw Error(j(174));return e}function Wi(e,t){switch(Q(zr,t),Q(Br,e),Q(ct,Xr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:No(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=No(t,e)}G(ct),Q(ct,t)}function Wn(){G(ct),G(Br),G(zr)}function np(e){rn(zr.current);var t=rn(ct.current),n=No(t,e.type);t!==n&&(Q(Br,e),Q(ct,n))}function Vi(e){Br.current===e&&(G(ct),G(Br))}var Y=Gt(0);function nl(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var eo=[];function qi(){for(var e=0;e<eo.length;e++)eo[e]._workInProgressVersionPrimary=null;eo.length=0}var Ts=Et.ReactCurrentDispatcher,to=Et.ReactCurrentBatchConfig,un=0,X=null,ie=null,ce=null,rl=!1,jr=!1,Fr=0,Um=0;function ge(){throw Error(j(321))}function Qi(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!nt(e[n],t[n]))return!1;return!0}function Ki(e,t,n,r,s,l){if(un=l,X=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ts.current=e===null||e.memoizedState===null?Vm:qm,e=n(r,s),jr){l=0;do{if(jr=!1,Fr=0,25<=l)throw Error(j(301));l+=1,ce=ie=null,t.updateQueue=null,Ts.current=Qm,e=n(r,s)}while(jr)}if(Ts.current=sl,t=ie!==null&&ie.next!==null,un=0,ce=ie=X=null,rl=!1,t)throw Error(j(300));return e}function Gi(){var e=Fr!==0;return Fr=0,e}function ot(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ce===null?X.memoizedState=ce=e:ce=ce.next=e,ce}function Qe(){if(ie===null){var e=X.alternate;e=e!==null?e.memoizedState:null}else e=ie.next;var t=ce===null?X.memoizedState:ce.next;if(t!==null)ce=t,ie=e;else{if(e===null)throw Error(j(310));ie=e,e={memoizedState:ie.memoizedState,baseState:ie.baseState,baseQueue:ie.baseQueue,queue:ie.queue,next:null},ce===null?X.memoizedState=ce=e:ce=ce.next=e}return ce}function Ur(e,t){return typeof t=="function"?t(e):t}function no(e){var t=Qe(),n=t.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=e;var r=ie,s=r.baseQueue,l=n.pending;if(l!==null){if(s!==null){var o=s.next;s.next=l.next,l.next=o}r.baseQueue=s=l,n.pending=null}if(s!==null){l=s.next,r=r.baseState;var a=o=null,c=null,d=l;do{var h=d.lane;if((un&h)===h)c!==null&&(c=c.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:e(r,d.action);else{var p={lane:h,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};c===null?(a=c=p,o=r):c=c.next=p,X.lanes|=h,pn|=h}d=d.next}while(d!==null&&d!==l);c===null?o=r:c.next=a,nt(r,t.memoizedState)||(Pe=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=c,n.lastRenderedState=r}if(e=n.interleaved,e!==null){s=e;do l=s.lane,X.lanes|=l,pn|=l,s=s.next;while(s!==e)}else s===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function ro(e){var t=Qe(),n=t.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=e;var r=n.dispatch,s=n.pending,l=t.memoizedState;if(s!==null){n.pending=null;var o=s=s.next;do l=e(l,o.action),o=o.next;while(o!==s);nt(l,t.memoizedState)||(Pe=!0),t.memoizedState=l,t.baseQueue===null&&(t.baseState=l),n.lastRenderedState=l}return[l,r]}function rp(){}function sp(e,t){var n=X,r=Qe(),s=t(),l=!nt(r.memoizedState,s);if(l&&(r.memoizedState=s,Pe=!0),r=r.queue,Ji(ip.bind(null,n,r,e),[e]),r.getSnapshot!==t||l||ce!==null&&ce.memoizedState.tag&1){if(n.flags|=2048,Hr(9,op.bind(null,n,r,s,t),void 0,null),ue===null)throw Error(j(349));un&30||lp(n,t,s)}return s}function lp(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=X.updateQueue,t===null?(t={lastEffect:null,stores:null},X.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function op(e,t,n,r){t.value=n,t.getSnapshot=r,ap(t)&&cp(e)}function ip(e,t,n){return n(function(){ap(t)&&cp(e)})}function ap(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!nt(e,n)}catch{return!0}}function cp(e){var t=kt(e,1);t!==null&&tt(t,e,1,-1)}function uc(e){var t=ot();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ur,lastRenderedState:e},t.queue=e,e=e.dispatch=Wm.bind(null,X,e),[t.memoizedState,e]}function Hr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=X.updateQueue,t===null?(t={lastEffect:null,stores:null},X.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function dp(){return Qe().memoizedState}function _s(e,t,n,r){var s=ot();X.flags|=e,s.memoizedState=Hr(1|t,n,void 0,r===void 0?null:r)}function bl(e,t,n,r){var s=Qe();r=r===void 0?null:r;var l=void 0;if(ie!==null){var o=ie.memoizedState;if(l=o.destroy,r!==null&&Qi(r,o.deps)){s.memoizedState=Hr(t,n,l,r);return}}X.flags|=e,s.memoizedState=Hr(1|t,n,l,r)}function pc(e,t){return _s(8390656,8,e,t)}function Ji(e,t){return bl(2048,8,e,t)}function up(e,t){return bl(4,2,e,t)}function pp(e,t){return bl(4,4,e,t)}function fp(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function hp(e,t,n){return n=n!=null?n.concat([e]):null,bl(4,4,fp.bind(null,t,e),n)}function Yi(){}function mp(e,t){var n=Qe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Qi(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function gp(e,t){var n=Qe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Qi(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function xp(e,t,n){return un&21?(nt(n,t)||(n=Su(),X.lanes|=n,pn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Pe=!0),e.memoizedState=n)}function Hm(e,t){var n=q;q=n!==0&&4>n?n:4,e(!0);var r=to.transition;to.transition={};try{e(!1),t()}finally{q=n,to.transition=r}}function yp(){return Qe().memoizedState}function $m(e,t,n){var r=Ht(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},vp(e))wp(t,n);else if(n=ep(e,t,n,r),n!==null){var s=je();tt(n,e,r,s),bp(n,t,r)}}function Wm(e,t,n){var r=Ht(e),s={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(vp(e))wp(t,s);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=t.lastRenderedReducer,l!==null))try{var o=t.lastRenderedState,a=l(o,n);if(s.hasEagerState=!0,s.eagerState=a,nt(a,o)){var c=t.interleaved;c===null?(s.next=s,Hi(t)):(s.next=c.next,c.next=s),t.interleaved=s;return}}catch{}finally{}n=ep(e,t,s,r),n!==null&&(s=je(),tt(n,e,r,s),bp(n,t,r))}}function vp(e){var t=e.alternate;return e===X||t!==null&&t===X}function wp(e,t){jr=rl=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function bp(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Pi(e,n)}}var sl={readContext:qe,useCallback:ge,useContext:ge,useEffect:ge,useImperativeHandle:ge,useInsertionEffect:ge,useLayoutEffect:ge,useMemo:ge,useReducer:ge,useRef:ge,useState:ge,useDebugValue:ge,useDeferredValue:ge,useTransition:ge,useMutableSource:ge,useSyncExternalStore:ge,useId:ge,unstable_isNewReconciler:!1},Vm={readContext:qe,useCallback:function(e,t){return ot().memoizedState=[e,t===void 0?null:t],e},useContext:qe,useEffect:pc,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,_s(4194308,4,fp.bind(null,t,e),n)},useLayoutEffect:function(e,t){return _s(4194308,4,e,t)},useInsertionEffect:function(e,t){return _s(4,2,e,t)},useMemo:function(e,t){var n=ot();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=ot();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=$m.bind(null,X,e),[r.memoizedState,e]},useRef:function(e){var t=ot();return e={current:e},t.memoizedState=e},useState:uc,useDebugValue:Yi,useDeferredValue:function(e){return ot().memoizedState=e},useTransition:function(){var e=uc(!1),t=e[0];return e=Hm.bind(null,e[1]),ot().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=X,s=ot();if(J){if(n===void 0)throw Error(j(407));n=n()}else{if(n=t(),ue===null)throw Error(j(349));un&30||lp(r,t,n)}s.memoizedState=n;var l={value:n,getSnapshot:t};return s.queue=l,pc(ip.bind(null,r,l,e),[e]),r.flags|=2048,Hr(9,op.bind(null,r,l,n,t),void 0,null),n},useId:function(){var e=ot(),t=ue.identifierPrefix;if(J){var n=wt,r=vt;n=(r&~(1<<32-et(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Fr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Um++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},qm={readContext:qe,useCallback:mp,useContext:qe,useEffect:Ji,useImperativeHandle:hp,useInsertionEffect:up,useLayoutEffect:pp,useMemo:gp,useReducer:no,useRef:dp,useState:function(){return no(Ur)},useDebugValue:Yi,useDeferredValue:function(e){var t=Qe();return xp(t,ie.memoizedState,e)},useTransition:function(){var e=no(Ur)[0],t=Qe().memoizedState;return[e,t]},useMutableSource:rp,useSyncExternalStore:sp,useId:yp,unstable_isNewReconciler:!1},Qm={readContext:qe,useCallback:mp,useContext:qe,useEffect:Ji,useImperativeHandle:hp,useInsertionEffect:up,useLayoutEffect:pp,useMemo:gp,useReducer:ro,useRef:dp,useState:function(){return ro(Ur)},useDebugValue:Yi,useDeferredValue:function(e){var t=Qe();return ie===null?t.memoizedState=e:xp(t,ie.memoizedState,e)},useTransition:function(){var e=ro(Ur)[0],t=Qe().memoizedState;return[e,t]},useMutableSource:rp,useSyncExternalStore:sp,useId:yp,unstable_isNewReconciler:!1};function Ye(e,t){if(e&&e.defaultProps){t=Z({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Ko(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Z({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Sl={isMounted:function(e){return(e=e._reactInternals)?yn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=je(),s=Ht(e),l=bt(r,s);l.payload=t,n!=null&&(l.callback=n),t=Ft(e,l,s),t!==null&&(tt(t,e,s,r),Rs(t,e,s))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=je(),s=Ht(e),l=bt(r,s);l.tag=1,l.payload=t,n!=null&&(l.callback=n),t=Ft(e,l,s),t!==null&&(tt(t,e,s,r),Rs(t,e,s))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=je(),r=Ht(e),s=bt(n,r);s.tag=2,t!=null&&(s.callback=t),t=Ft(e,s,r),t!==null&&(tt(t,e,r,n),Rs(t,e,r))}};function fc(e,t,n,r,s,l,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,l,o):t.prototype&&t.prototype.isPureReactComponent?!Or(n,r)||!Or(s,l):!0}function Sp(e,t,n){var r=!1,s=qt,l=t.contextType;return typeof l=="object"&&l!==null?l=qe(l):(s=Te(t)?cn:be.current,r=t.contextTypes,l=(r=r!=null)?Un(e,s):qt),t=new t(n,l),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Sl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=s,e.__reactInternalMemoizedMaskedChildContext=l),t}function hc(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Sl.enqueueReplaceState(t,t.state,null)}function Go(e,t,n,r){var s=e.stateNode;s.props=n,s.state=e.memoizedState,s.refs={},$i(e);var l=t.contextType;typeof l=="object"&&l!==null?s.context=qe(l):(l=Te(t)?cn:be.current,s.context=Un(e,l)),s.state=e.memoizedState,l=t.getDerivedStateFromProps,typeof l=="function"&&(Ko(e,t,l,n),s.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(t=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),t!==s.state&&Sl.enqueueReplaceState(s,s.state,null),tl(e,n,s,r),s.state=e.memoizedState),typeof s.componentDidMount=="function"&&(e.flags|=4194308)}function Vn(e,t){try{var n="",r=t;do n+=bh(r),r=r.return;while(r);var s=n}catch(l){s=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:t,stack:s,digest:null}}function so(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Jo(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Km=typeof WeakMap=="function"?WeakMap:Map;function jp(e,t,n){n=bt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){ol||(ol=!0,oi=r),Jo(e,t)},n}function kp(e,t,n){n=bt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var s=t.value;n.payload=function(){return r(s)},n.callback=function(){Jo(e,t)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(n.callback=function(){Jo(e,t),typeof r!="function"&&(Ut===null?Ut=new Set([this]):Ut.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function mc(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Km;var s=new Set;r.set(t,s)}else s=r.get(t),s===void 0&&(s=new Set,r.set(t,s));s.has(n)||(s.add(n),e=ag.bind(null,e,t,n),t.then(e,e))}function gc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function xc(e,t,n,r,s){return e.mode&1?(e.flags|=65536,e.lanes=s,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=bt(-1,1),t.tag=2,Ft(n,t,1))),n.lanes|=1),e)}var Gm=Et.ReactCurrentOwner,Pe=!1;function Se(e,t,n,r){t.child=e===null?Zu(t,null,n,r):$n(t,e.child,n,r)}function yc(e,t,n,r,s){n=n.render;var l=t.ref;return Bn(t,s),r=Ki(e,t,n,r,l,s),n=Gi(),e!==null&&!Pe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~s,Ct(e,t,s)):(J&&n&&Di(t),t.flags|=1,Se(e,t,r,s),t.child)}function vc(e,t,n,r,s){if(e===null){var l=n.type;return typeof l=="function"&&!la(l)&&l.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=l,Cp(e,t,l,r,s)):(e=Ls(n.type,null,r,t,t.mode,s),e.ref=t.ref,e.return=t,t.child=e)}if(l=e.child,!(e.lanes&s)){var o=l.memoizedProps;if(n=n.compare,n=n!==null?n:Or,n(o,r)&&e.ref===t.ref)return Ct(e,t,s)}return t.flags|=1,e=$t(l,r),e.ref=t.ref,e.return=t,t.child=e}function Cp(e,t,n,r,s){if(e!==null){var l=e.memoizedProps;if(Or(l,r)&&e.ref===t.ref)if(Pe=!1,t.pendingProps=r=l,(e.lanes&s)!==0)e.flags&131072&&(Pe=!0);else return t.lanes=e.lanes,Ct(e,t,s)}return Yo(e,t,n,r,s)}function Ep(e,t,n){var r=t.pendingProps,s=r.children,l=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Q(An,Oe),Oe|=n;else{if(!(n&1073741824))return e=l!==null?l.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Q(An,Oe),Oe|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=l!==null?l.baseLanes:n,Q(An,Oe),Oe|=r}else l!==null?(r=l.baseLanes|n,t.memoizedState=null):r=n,Q(An,Oe),Oe|=r;return Se(e,t,s,n),t.child}function Np(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Yo(e,t,n,r,s){var l=Te(n)?cn:be.current;return l=Un(t,l),Bn(t,s),n=Ki(e,t,n,r,l,s),r=Gi(),e!==null&&!Pe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~s,Ct(e,t,s)):(J&&r&&Di(t),t.flags|=1,Se(e,t,n,s),t.child)}function wc(e,t,n,r,s){if(Te(n)){var l=!0;Js(t)}else l=!1;if(Bn(t,s),t.stateNode===null)Ms(e,t),Sp(t,n,r),Go(t,n,r,s),r=!0;else if(e===null){var o=t.stateNode,a=t.memoizedProps;o.props=a;var c=o.context,d=n.contextType;typeof d=="object"&&d!==null?d=qe(d):(d=Te(n)?cn:be.current,d=Un(t,d));var h=n.getDerivedStateFromProps,p=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||c!==d)&&hc(t,o,r,d),Tt=!1;var g=t.memoizedState;o.state=g,tl(t,r,o,s),c=t.memoizedState,a!==r||g!==c||Re.current||Tt?(typeof h=="function"&&(Ko(t,n,h,r),c=t.memoizedState),(a=Tt||fc(t,n,a,r,g,c,d))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),o.props=r,o.state=c,o.context=d,r=a):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,tp(e,t),a=t.memoizedProps,d=t.type===t.elementType?a:Ye(t.type,a),o.props=d,p=t.pendingProps,g=o.context,c=n.contextType,typeof c=="object"&&c!==null?c=qe(c):(c=Te(n)?cn:be.current,c=Un(t,c));var b=n.getDerivedStateFromProps;(h=typeof b=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==p||g!==c)&&hc(t,o,r,c),Tt=!1,g=t.memoizedState,o.state=g,tl(t,r,o,s);var y=t.memoizedState;a!==p||g!==y||Re.current||Tt?(typeof b=="function"&&(Ko(t,n,b,r),y=t.memoizedState),(d=Tt||fc(t,n,d,r,g,y,c)||!1)?(h||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,y,c),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,y,c)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=y),o.props=r,o.state=y,o.context=c,r=d):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),r=!1)}return Xo(e,t,n,r,l,s)}function Xo(e,t,n,r,s,l){Np(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return s&&lc(t,n,!1),Ct(e,t,l);r=t.stateNode,Gm.current=t;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=$n(t,e.child,null,l),t.child=$n(t,null,a,l)):Se(e,t,a,l),t.memoizedState=r.state,s&&lc(t,n,!0),t.child}function Pp(e){var t=e.stateNode;t.pendingContext?sc(e,t.pendingContext,t.pendingContext!==t.context):t.context&&sc(e,t.context,!1),Wi(e,t.containerInfo)}function bc(e,t,n,r,s){return Hn(),Bi(s),t.flags|=256,Se(e,t,n,r),t.child}var Zo={dehydrated:null,treeContext:null,retryLane:0};function ei(e){return{baseLanes:e,cachePool:null,transitions:null}}function Rp(e,t,n){var r=t.pendingProps,s=Y.current,l=!1,o=(t.flags&128)!==0,a;if((a=o)||(a=e!==null&&e.memoizedState===null?!1:(s&2)!==0),a?(l=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(s|=1),Q(Y,s&1),e===null)return qo(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,l?(r=t.mode,l=t.child,o={mode:"hidden",children:o},!(r&1)&&l!==null?(l.childLanes=0,l.pendingProps=o):l=Cl(o,r,0,null),e=on(e,r,n,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=ei(n),t.memoizedState=Zo,e):Xi(t,o));if(s=e.memoizedState,s!==null&&(a=s.dehydrated,a!==null))return Jm(e,t,o,r,a,s,n);if(l){l=r.fallback,o=t.mode,s=e.child,a=s.sibling;var c={mode:"hidden",children:r.children};return!(o&1)&&t.child!==s?(r=t.child,r.childLanes=0,r.pendingProps=c,t.deletions=null):(r=$t(s,c),r.subtreeFlags=s.subtreeFlags&14680064),a!==null?l=$t(a,l):(l=on(l,o,n,null),l.flags|=2),l.return=t,r.return=t,r.sibling=l,t.child=r,r=l,l=t.child,o=e.child.memoizedState,o=o===null?ei(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},l.memoizedState=o,l.childLanes=e.childLanes&~n,t.memoizedState=Zo,r}return l=e.child,e=l.sibling,r=$t(l,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Xi(e,t){return t=Cl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ys(e,t,n,r){return r!==null&&Bi(r),$n(t,e.child,null,n),e=Xi(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Jm(e,t,n,r,s,l,o){if(n)return t.flags&256?(t.flags&=-257,r=so(Error(j(422))),ys(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(l=r.fallback,s=t.mode,r=Cl({mode:"visible",children:r.children},s,0,null),l=on(l,s,o,null),l.flags|=2,r.return=t,l.return=t,r.sibling=l,t.child=r,t.mode&1&&$n(t,e.child,null,o),t.child.memoizedState=ei(o),t.memoizedState=Zo,l);if(!(t.mode&1))return ys(e,t,o,null);if(s.data==="$!"){if(r=s.nextSibling&&s.nextSibling.dataset,r)var a=r.dgst;return r=a,l=Error(j(419)),r=so(l,r,void 0),ys(e,t,o,r)}if(a=(o&e.childLanes)!==0,Pe||a){if(r=ue,r!==null){switch(o&-o){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(r.suspendedLanes|o)?0:s,s!==0&&s!==l.retryLane&&(l.retryLane=s,kt(e,s),tt(r,e,s,-1))}return sa(),r=so(Error(j(421))),ys(e,t,o,r)}return s.data==="$?"?(t.flags|=128,t.child=e.child,t=cg.bind(null,e),s._reactRetry=t,null):(e=l.treeContext,Le=zt(s.nextSibling),De=t,J=!0,Ze=null,e!==null&&(He[$e++]=vt,He[$e++]=wt,He[$e++]=dn,vt=e.id,wt=e.overflow,dn=t),t=Xi(t,r.children),t.flags|=4096,t)}function Sc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Qo(e.return,t,n)}function lo(e,t,n,r,s){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:s}:(l.isBackwards=t,l.rendering=null,l.renderingStartTime=0,l.last=r,l.tail=n,l.tailMode=s)}function Tp(e,t,n){var r=t.pendingProps,s=r.revealOrder,l=r.tail;if(Se(e,t,r.children,n),r=Y.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Sc(e,n,t);else if(e.tag===19)Sc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Q(Y,r),!(t.mode&1))t.memoizedState=null;else switch(s){case"forwards":for(n=t.child,s=null;n!==null;)e=n.alternate,e!==null&&nl(e)===null&&(s=n),n=n.sibling;n=s,n===null?(s=t.child,t.child=null):(s=n.sibling,n.sibling=null),lo(t,!1,s,n,l);break;case"backwards":for(n=null,s=t.child,t.child=null;s!==null;){if(e=s.alternate,e!==null&&nl(e)===null){t.child=s;break}e=s.sibling,s.sibling=n,n=s,s=e}lo(t,!0,n,null,l);break;case"together":lo(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ms(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Ct(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),pn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(j(153));if(t.child!==null){for(e=t.child,n=$t(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=$t(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Ym(e,t,n){switch(t.tag){case 3:Pp(t),Hn();break;case 5:np(t);break;case 1:Te(t.type)&&Js(t);break;case 4:Wi(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,s=t.memoizedProps.value;Q(Zs,r._currentValue),r._currentValue=s;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(Q(Y,Y.current&1),t.flags|=128,null):n&t.child.childLanes?Rp(e,t,n):(Q(Y,Y.current&1),e=Ct(e,t,n),e!==null?e.sibling:null);Q(Y,Y.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Tp(e,t,n);t.flags|=128}if(s=t.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),Q(Y,Y.current),r)break;return null;case 22:case 23:return t.lanes=0,Ep(e,t,n)}return Ct(e,t,n)}var _p,ti,Mp,Ap;_p=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ti=function(){};Mp=function(e,t,n,r){var s=e.memoizedProps;if(s!==r){e=t.stateNode,rn(ct.current);var l=null;switch(n){case"input":s=jo(e,s),r=jo(e,r),l=[];break;case"select":s=Z({},s,{value:void 0}),r=Z({},r,{value:void 0}),l=[];break;case"textarea":s=Eo(e,s),r=Eo(e,r),l=[];break;default:typeof s.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Ks)}Po(n,r);var o;n=null;for(d in s)if(!r.hasOwnProperty(d)&&s.hasOwnProperty(d)&&s[d]!=null)if(d==="style"){var a=s[d];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(Nr.hasOwnProperty(d)?l||(l=[]):(l=l||[]).push(d,null));for(d in r){var c=r[d];if(a=s!=null?s[d]:void 0,r.hasOwnProperty(d)&&c!==a&&(c!=null||a!=null))if(d==="style")if(a){for(o in a)!a.hasOwnProperty(o)||c&&c.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in c)c.hasOwnProperty(o)&&a[o]!==c[o]&&(n||(n={}),n[o]=c[o])}else n||(l||(l=[]),l.push(d,n)),n=c;else d==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,a=a?a.__html:void 0,c!=null&&a!==c&&(l=l||[]).push(d,c)):d==="children"?typeof c!="string"&&typeof c!="number"||(l=l||[]).push(d,""+c):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(Nr.hasOwnProperty(d)?(c!=null&&d==="onScroll"&&K("scroll",e),l||a===c||(l=[])):(l=l||[]).push(d,c))}n&&(l=l||[]).push("style",n);var d=l;(t.updateQueue=d)&&(t.flags|=4)}};Ap=function(e,t,n,r){n!==r&&(t.flags|=4)};function cr(e,t){if(!J)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function xe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var s=e.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags&14680064,r|=s.flags&14680064,s.return=e,s=s.sibling;else for(s=e.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags,r|=s.flags,s.return=e,s=s.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Xm(e,t,n){var r=t.pendingProps;switch(Ii(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return xe(t),null;case 1:return Te(t.type)&&Gs(),xe(t),null;case 3:return r=t.stateNode,Wn(),G(Re),G(be),qi(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(gs(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ze!==null&&(ci(Ze),Ze=null))),ti(e,t),xe(t),null;case 5:Vi(t);var s=rn(zr.current);if(n=t.type,e!==null&&t.stateNode!=null)Mp(e,t,n,r,s),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(j(166));return xe(t),null}if(e=rn(ct.current),gs(t)){r=t.stateNode,n=t.type;var l=t.memoizedProps;switch(r[it]=t,r[Ir]=l,e=(t.mode&1)!==0,n){case"dialog":K("cancel",r),K("close",r);break;case"iframe":case"object":case"embed":K("load",r);break;case"video":case"audio":for(s=0;s<xr.length;s++)K(xr[s],r);break;case"source":K("error",r);break;case"img":case"image":case"link":K("error",r),K("load",r);break;case"details":K("toggle",r);break;case"input":_a(r,l),K("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!l.multiple},K("invalid",r);break;case"textarea":Aa(r,l),K("invalid",r)}Po(n,l),s=null;for(var o in l)if(l.hasOwnProperty(o)){var a=l[o];o==="children"?typeof a=="string"?r.textContent!==a&&(l.suppressHydrationWarning!==!0&&ms(r.textContent,a,e),s=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(l.suppressHydrationWarning!==!0&&ms(r.textContent,a,e),s=["children",""+a]):Nr.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&K("scroll",r)}switch(n){case"input":is(r),Ma(r,l,!0);break;case"textarea":is(r),Oa(r);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(r.onclick=Ks)}r=s,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=s.nodeType===9?s:s.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=iu(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[it]=t,e[Ir]=r,_p(e,t,!1,!1),t.stateNode=e;e:{switch(o=Ro(n,r),n){case"dialog":K("cancel",e),K("close",e),s=r;break;case"iframe":case"object":case"embed":K("load",e),s=r;break;case"video":case"audio":for(s=0;s<xr.length;s++)K(xr[s],e);s=r;break;case"source":K("error",e),s=r;break;case"img":case"image":case"link":K("error",e),K("load",e),s=r;break;case"details":K("toggle",e),s=r;break;case"input":_a(e,r),s=jo(e,r),K("invalid",e);break;case"option":s=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},s=Z({},r,{value:void 0}),K("invalid",e);break;case"textarea":Aa(e,r),s=Eo(e,r),K("invalid",e);break;default:s=r}Po(n,s),a=s;for(l in a)if(a.hasOwnProperty(l)){var c=a[l];l==="style"?du(e,c):l==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&au(e,c)):l==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&Pr(e,c):typeof c=="number"&&Pr(e,""+c):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(Nr.hasOwnProperty(l)?c!=null&&l==="onScroll"&&K("scroll",e):c!=null&&Si(e,l,c,o))}switch(n){case"input":is(e),Ma(e,r,!1);break;case"textarea":is(e),Oa(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Vt(r.value));break;case"select":e.multiple=!!r.multiple,l=r.value,l!=null?On(e,!!r.multiple,l,!1):r.defaultValue!=null&&On(e,!!r.multiple,r.defaultValue,!0);break;default:typeof s.onClick=="function"&&(e.onclick=Ks)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return xe(t),null;case 6:if(e&&t.stateNode!=null)Ap(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(j(166));if(n=rn(zr.current),rn(ct.current),gs(t)){if(r=t.stateNode,n=t.memoizedProps,r[it]=t,(l=r.nodeValue!==n)&&(e=De,e!==null))switch(e.tag){case 3:ms(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ms(r.nodeValue,n,(e.mode&1)!==0)}l&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[it]=t,t.stateNode=r}return xe(t),null;case 13:if(G(Y),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(J&&Le!==null&&t.mode&1&&!(t.flags&128))Yu(),Hn(),t.flags|=98560,l=!1;else if(l=gs(t),r!==null&&r.dehydrated!==null){if(e===null){if(!l)throw Error(j(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(j(317));l[it]=t}else Hn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;xe(t),l=!1}else Ze!==null&&(ci(Ze),Ze=null),l=!0;if(!l)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Y.current&1?ae===0&&(ae=3):sa())),t.updateQueue!==null&&(t.flags|=4),xe(t),null);case 4:return Wn(),ti(e,t),e===null&&Lr(t.stateNode.containerInfo),xe(t),null;case 10:return Ui(t.type._context),xe(t),null;case 17:return Te(t.type)&&Gs(),xe(t),null;case 19:if(G(Y),l=t.memoizedState,l===null)return xe(t),null;if(r=(t.flags&128)!==0,o=l.rendering,o===null)if(r)cr(l,!1);else{if(ae!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=nl(e),o!==null){for(t.flags|=128,cr(l,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)l=n,e=r,l.flags&=14680066,o=l.alternate,o===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=o.childLanes,l.lanes=o.lanes,l.child=o.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=o.memoizedProps,l.memoizedState=o.memoizedState,l.updateQueue=o.updateQueue,l.type=o.type,e=o.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Q(Y,Y.current&1|2),t.child}e=e.sibling}l.tail!==null&&te()>qn&&(t.flags|=128,r=!0,cr(l,!1),t.lanes=4194304)}else{if(!r)if(e=nl(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),cr(l,!0),l.tail===null&&l.tailMode==="hidden"&&!o.alternate&&!J)return xe(t),null}else 2*te()-l.renderingStartTime>qn&&n!==1073741824&&(t.flags|=128,r=!0,cr(l,!1),t.lanes=4194304);l.isBackwards?(o.sibling=t.child,t.child=o):(n=l.last,n!==null?n.sibling=o:t.child=o,l.last=o)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=te(),t.sibling=null,n=Y.current,Q(Y,r?n&1|2:n&1),t):(xe(t),null);case 22:case 23:return ra(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Oe&1073741824&&(xe(t),t.subtreeFlags&6&&(t.flags|=8192)):xe(t),null;case 24:return null;case 25:return null}throw Error(j(156,t.tag))}function Zm(e,t){switch(Ii(t),t.tag){case 1:return Te(t.type)&&Gs(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Wn(),G(Re),G(be),qi(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Vi(t),null;case 13:if(G(Y),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(j(340));Hn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return G(Y),null;case 4:return Wn(),null;case 10:return Ui(t.type._context),null;case 22:case 23:return ra(),null;case 24:return null;default:return null}}var vs=!1,ve=!1,eg=typeof WeakSet=="function"?WeakSet:Set,T=null;function Mn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ee(e,t,r)}else n.current=null}function ni(e,t,n){try{n()}catch(r){ee(e,t,r)}}var jc=!1;function tg(e,t){if(zo=Vs,e=Bu(),Li(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var s=r.anchorOffset,l=r.focusNode;r=r.focusOffset;try{n.nodeType,l.nodeType}catch{n=null;break e}var o=0,a=-1,c=-1,d=0,h=0,p=e,g=null;t:for(;;){for(var b;p!==n||s!==0&&p.nodeType!==3||(a=o+s),p!==l||r!==0&&p.nodeType!==3||(c=o+r),p.nodeType===3&&(o+=p.nodeValue.length),(b=p.firstChild)!==null;)g=p,p=b;for(;;){if(p===e)break t;if(g===n&&++d===s&&(a=o),g===l&&++h===r&&(c=o),(b=p.nextSibling)!==null)break;p=g,g=p.parentNode}p=b}n=a===-1||c===-1?null:{start:a,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(Fo={focusedElem:e,selectionRange:n},Vs=!1,T=t;T!==null;)if(t=T,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,T=e;else for(;T!==null;){t=T;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var S=y.memoizedProps,C=y.memoizedState,u=t.stateNode,f=u.getSnapshotBeforeUpdate(t.elementType===t.type?S:Ye(t.type,S),C);u.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(j(163))}}catch(w){ee(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,T=e;break}T=t.return}return y=jc,jc=!1,y}function kr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var s=r=r.next;do{if((s.tag&e)===e){var l=s.destroy;s.destroy=void 0,l!==void 0&&ni(t,n,l)}s=s.next}while(s!==r)}}function jl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function ri(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Op(e){var t=e.alternate;t!==null&&(e.alternate=null,Op(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[it],delete t[Ir],delete t[$o],delete t[Im],delete t[Bm])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Lp(e){return e.tag===5||e.tag===3||e.tag===4}function kc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Lp(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function si(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ks));else if(r!==4&&(e=e.child,e!==null))for(si(e,t,n),e=e.sibling;e!==null;)si(e,t,n),e=e.sibling}function li(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(li(e,t,n),e=e.sibling;e!==null;)li(e,t,n),e=e.sibling}var pe=null,Xe=!1;function Pt(e,t,n){for(n=n.child;n!==null;)Dp(e,t,n),n=n.sibling}function Dp(e,t,n){if(at&&typeof at.onCommitFiberUnmount=="function")try{at.onCommitFiberUnmount(ml,n)}catch{}switch(n.tag){case 5:ve||Mn(n,t);case 6:var r=pe,s=Xe;pe=null,Pt(e,t,n),pe=r,Xe=s,pe!==null&&(Xe?(e=pe,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):pe.removeChild(n.stateNode));break;case 18:pe!==null&&(Xe?(e=pe,n=n.stateNode,e.nodeType===8?Xl(e.parentNode,n):e.nodeType===1&&Xl(e,n),Mr(e)):Xl(pe,n.stateNode));break;case 4:r=pe,s=Xe,pe=n.stateNode.containerInfo,Xe=!0,Pt(e,t,n),pe=r,Xe=s;break;case 0:case 11:case 14:case 15:if(!ve&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){s=r=r.next;do{var l=s,o=l.destroy;l=l.tag,o!==void 0&&(l&2||l&4)&&ni(n,t,o),s=s.next}while(s!==r)}Pt(e,t,n);break;case 1:if(!ve&&(Mn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){ee(n,t,a)}Pt(e,t,n);break;case 21:Pt(e,t,n);break;case 22:n.mode&1?(ve=(r=ve)||n.memoizedState!==null,Pt(e,t,n),ve=r):Pt(e,t,n);break;default:Pt(e,t,n)}}function Cc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new eg),t.forEach(function(r){var s=dg.bind(null,e,r);n.has(r)||(n.add(r),r.then(s,s))})}}function Je(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var s=n[r];try{var l=e,o=t,a=o;e:for(;a!==null;){switch(a.tag){case 5:pe=a.stateNode,Xe=!1;break e;case 3:pe=a.stateNode.containerInfo,Xe=!0;break e;case 4:pe=a.stateNode.containerInfo,Xe=!0;break e}a=a.return}if(pe===null)throw Error(j(160));Dp(l,o,s),pe=null,Xe=!1;var c=s.alternate;c!==null&&(c.return=null),s.return=null}catch(d){ee(s,t,d)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Ip(t,e),t=t.sibling}function Ip(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Je(t,e),lt(e),r&4){try{kr(3,e,e.return),jl(3,e)}catch(S){ee(e,e.return,S)}try{kr(5,e,e.return)}catch(S){ee(e,e.return,S)}}break;case 1:Je(t,e),lt(e),r&512&&n!==null&&Mn(n,n.return);break;case 5:if(Je(t,e),lt(e),r&512&&n!==null&&Mn(n,n.return),e.flags&32){var s=e.stateNode;try{Pr(s,"")}catch(S){ee(e,e.return,S)}}if(r&4&&(s=e.stateNode,s!=null)){var l=e.memoizedProps,o=n!==null?n.memoizedProps:l,a=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{a==="input"&&l.type==="radio"&&l.name!=null&&lu(s,l),Ro(a,o);var d=Ro(a,l);for(o=0;o<c.length;o+=2){var h=c[o],p=c[o+1];h==="style"?du(s,p):h==="dangerouslySetInnerHTML"?au(s,p):h==="children"?Pr(s,p):Si(s,h,p,d)}switch(a){case"input":ko(s,l);break;case"textarea":ou(s,l);break;case"select":var g=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!l.multiple;var b=l.value;b!=null?On(s,!!l.multiple,b,!1):g!==!!l.multiple&&(l.defaultValue!=null?On(s,!!l.multiple,l.defaultValue,!0):On(s,!!l.multiple,l.multiple?[]:"",!1))}s[Ir]=l}catch(S){ee(e,e.return,S)}}break;case 6:if(Je(t,e),lt(e),r&4){if(e.stateNode===null)throw Error(j(162));s=e.stateNode,l=e.memoizedProps;try{s.nodeValue=l}catch(S){ee(e,e.return,S)}}break;case 3:if(Je(t,e),lt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Mr(t.containerInfo)}catch(S){ee(e,e.return,S)}break;case 4:Je(t,e),lt(e);break;case 13:Je(t,e),lt(e),s=e.child,s.flags&8192&&(l=s.memoizedState!==null,s.stateNode.isHidden=l,!l||s.alternate!==null&&s.alternate.memoizedState!==null||(ta=te())),r&4&&Cc(e);break;case 22:if(h=n!==null&&n.memoizedState!==null,e.mode&1?(ve=(d=ve)||h,Je(t,e),ve=d):Je(t,e),lt(e),r&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!h&&e.mode&1)for(T=e,h=e.child;h!==null;){for(p=T=h;T!==null;){switch(g=T,b=g.child,g.tag){case 0:case 11:case 14:case 15:kr(4,g,g.return);break;case 1:Mn(g,g.return);var y=g.stateNode;if(typeof y.componentWillUnmount=="function"){r=g,n=g.return;try{t=r,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(S){ee(r,n,S)}}break;case 5:Mn(g,g.return);break;case 22:if(g.memoizedState!==null){Nc(p);continue}}b!==null?(b.return=g,T=b):Nc(p)}h=h.sibling}e:for(h=null,p=e;;){if(p.tag===5){if(h===null){h=p;try{s=p.stateNode,d?(l=s.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(a=p.stateNode,c=p.memoizedProps.style,o=c!=null&&c.hasOwnProperty("display")?c.display:null,a.style.display=cu("display",o))}catch(S){ee(e,e.return,S)}}}else if(p.tag===6){if(h===null)try{p.stateNode.nodeValue=d?"":p.memoizedProps}catch(S){ee(e,e.return,S)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;h===p&&(h=null),p=p.return}h===p&&(h=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Je(t,e),lt(e),r&4&&Cc(e);break;case 21:break;default:Je(t,e),lt(e)}}function lt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Lp(n)){var r=n;break e}n=n.return}throw Error(j(160))}switch(r.tag){case 5:var s=r.stateNode;r.flags&32&&(Pr(s,""),r.flags&=-33);var l=kc(e);li(e,l,s);break;case 3:case 4:var o=r.stateNode.containerInfo,a=kc(e);si(e,a,o);break;default:throw Error(j(161))}}catch(c){ee(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function ng(e,t,n){T=e,Bp(e)}function Bp(e,t,n){for(var r=(e.mode&1)!==0;T!==null;){var s=T,l=s.child;if(s.tag===22&&r){var o=s.memoizedState!==null||vs;if(!o){var a=s.alternate,c=a!==null&&a.memoizedState!==null||ve;a=vs;var d=ve;if(vs=o,(ve=c)&&!d)for(T=s;T!==null;)o=T,c=o.child,o.tag===22&&o.memoizedState!==null?Pc(s):c!==null?(c.return=o,T=c):Pc(s);for(;l!==null;)T=l,Bp(l),l=l.sibling;T=s,vs=a,ve=d}Ec(e)}else s.subtreeFlags&8772&&l!==null?(l.return=s,T=l):Ec(e)}}function Ec(e){for(;T!==null;){var t=T;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ve||jl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ve)if(n===null)r.componentDidMount();else{var s=t.elementType===t.type?n.memoizedProps:Ye(t.type,n.memoizedProps);r.componentDidUpdate(s,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var l=t.updateQueue;l!==null&&dc(t,l,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}dc(t,o,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var d=t.alternate;if(d!==null){var h=d.memoizedState;if(h!==null){var p=h.dehydrated;p!==null&&Mr(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(j(163))}ve||t.flags&512&&ri(t)}catch(g){ee(t,t.return,g)}}if(t===e){T=null;break}if(n=t.sibling,n!==null){n.return=t.return,T=n;break}T=t.return}}function Nc(e){for(;T!==null;){var t=T;if(t===e){T=null;break}var n=t.sibling;if(n!==null){n.return=t.return,T=n;break}T=t.return}}function Pc(e){for(;T!==null;){var t=T;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{jl(4,t)}catch(c){ee(t,n,c)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var s=t.return;try{r.componentDidMount()}catch(c){ee(t,s,c)}}var l=t.return;try{ri(t)}catch(c){ee(t,l,c)}break;case 5:var o=t.return;try{ri(t)}catch(c){ee(t,o,c)}}}catch(c){ee(t,t.return,c)}if(t===e){T=null;break}var a=t.sibling;if(a!==null){a.return=t.return,T=a;break}T=t.return}}var rg=Math.ceil,ll=Et.ReactCurrentDispatcher,Zi=Et.ReactCurrentOwner,Ve=Et.ReactCurrentBatchConfig,F=0,ue=null,oe=null,fe=0,Oe=0,An=Gt(0),ae=0,$r=null,pn=0,kl=0,ea=0,Cr=null,Ne=null,ta=0,qn=1/0,xt=null,ol=!1,oi=null,Ut=null,ws=!1,Ot=null,il=0,Er=0,ii=null,As=-1,Os=0;function je(){return F&6?te():As!==-1?As:As=te()}function Ht(e){return e.mode&1?F&2&&fe!==0?fe&-fe:Fm.transition!==null?(Os===0&&(Os=Su()),Os):(e=q,e!==0||(e=window.event,e=e===void 0?16:Ru(e.type)),e):1}function tt(e,t,n,r){if(50<Er)throw Er=0,ii=null,Error(j(185));Gr(e,n,r),(!(F&2)||e!==ue)&&(e===ue&&(!(F&2)&&(kl|=n),ae===4&&Mt(e,fe)),_e(e,r),n===1&&F===0&&!(t.mode&1)&&(qn=te()+500,wl&&Jt()))}function _e(e,t){var n=e.callbackNode;Fh(e,t);var r=Ws(e,e===ue?fe:0);if(r===0)n!==null&&Ia(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Ia(n),t===1)e.tag===0?zm(Rc.bind(null,e)):Ku(Rc.bind(null,e)),Lm(function(){!(F&6)&&Jt()}),n=null;else{switch(ju(r)){case 1:n=Ni;break;case 4:n=wu;break;case 16:n=$s;break;case 536870912:n=bu;break;default:n=$s}n=qp(n,zp.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function zp(e,t){if(As=-1,Os=0,F&6)throw Error(j(327));var n=e.callbackNode;if(zn()&&e.callbackNode!==n)return null;var r=Ws(e,e===ue?fe:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=al(e,r);else{t=r;var s=F;F|=2;var l=Up();(ue!==e||fe!==t)&&(xt=null,qn=te()+500,ln(e,t));do try{og();break}catch(a){Fp(e,a)}while(!0);Fi(),ll.current=l,F=s,oe!==null?t=0:(ue=null,fe=0,t=ae)}if(t!==0){if(t===2&&(s=Oo(e),s!==0&&(r=s,t=ai(e,s))),t===1)throw n=$r,ln(e,0),Mt(e,r),_e(e,te()),n;if(t===6)Mt(e,r);else{if(s=e.current.alternate,!(r&30)&&!sg(s)&&(t=al(e,r),t===2&&(l=Oo(e),l!==0&&(r=l,t=ai(e,l))),t===1))throw n=$r,ln(e,0),Mt(e,r),_e(e,te()),n;switch(e.finishedWork=s,e.finishedLanes=r,t){case 0:case 1:throw Error(j(345));case 2:en(e,Ne,xt);break;case 3:if(Mt(e,r),(r&130023424)===r&&(t=ta+500-te(),10<t)){if(Ws(e,0)!==0)break;if(s=e.suspendedLanes,(s&r)!==r){je(),e.pingedLanes|=e.suspendedLanes&s;break}e.timeoutHandle=Ho(en.bind(null,e,Ne,xt),t);break}en(e,Ne,xt);break;case 4:if(Mt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,s=-1;0<r;){var o=31-et(r);l=1<<o,o=t[o],o>s&&(s=o),r&=~l}if(r=s,r=te()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*rg(r/1960))-r,10<r){e.timeoutHandle=Ho(en.bind(null,e,Ne,xt),r);break}en(e,Ne,xt);break;case 5:en(e,Ne,xt);break;default:throw Error(j(329))}}}return _e(e,te()),e.callbackNode===n?zp.bind(null,e):null}function ai(e,t){var n=Cr;return e.current.memoizedState.isDehydrated&&(ln(e,t).flags|=256),e=al(e,t),e!==2&&(t=Ne,Ne=n,t!==null&&ci(t)),e}function ci(e){Ne===null?Ne=e:Ne.push.apply(Ne,e)}function sg(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var s=n[r],l=s.getSnapshot;s=s.value;try{if(!nt(l(),s))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Mt(e,t){for(t&=~ea,t&=~kl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-et(t),r=1<<n;e[n]=-1,t&=~r}}function Rc(e){if(F&6)throw Error(j(327));zn();var t=Ws(e,0);if(!(t&1))return _e(e,te()),null;var n=al(e,t);if(e.tag!==0&&n===2){var r=Oo(e);r!==0&&(t=r,n=ai(e,r))}if(n===1)throw n=$r,ln(e,0),Mt(e,t),_e(e,te()),n;if(n===6)throw Error(j(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,en(e,Ne,xt),_e(e,te()),null}function na(e,t){var n=F;F|=1;try{return e(t)}finally{F=n,F===0&&(qn=te()+500,wl&&Jt())}}function fn(e){Ot!==null&&Ot.tag===0&&!(F&6)&&zn();var t=F;F|=1;var n=Ve.transition,r=q;try{if(Ve.transition=null,q=1,e)return e()}finally{q=r,Ve.transition=n,F=t,!(F&6)&&Jt()}}function ra(){Oe=An.current,G(An)}function ln(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Om(n)),oe!==null)for(n=oe.return;n!==null;){var r=n;switch(Ii(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Gs();break;case 3:Wn(),G(Re),G(be),qi();break;case 5:Vi(r);break;case 4:Wn();break;case 13:G(Y);break;case 19:G(Y);break;case 10:Ui(r.type._context);break;case 22:case 23:ra()}n=n.return}if(ue=e,oe=e=$t(e.current,null),fe=Oe=t,ae=0,$r=null,ea=kl=pn=0,Ne=Cr=null,nn!==null){for(t=0;t<nn.length;t++)if(n=nn[t],r=n.interleaved,r!==null){n.interleaved=null;var s=r.next,l=n.pending;if(l!==null){var o=l.next;l.next=s,r.next=o}n.pending=r}nn=null}return e}function Fp(e,t){do{var n=oe;try{if(Fi(),Ts.current=sl,rl){for(var r=X.memoizedState;r!==null;){var s=r.queue;s!==null&&(s.pending=null),r=r.next}rl=!1}if(un=0,ce=ie=X=null,jr=!1,Fr=0,Zi.current=null,n===null||n.return===null){ae=1,$r=t,oe=null;break}e:{var l=e,o=n.return,a=n,c=t;if(t=fe,a.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var d=c,h=a,p=h.tag;if(!(h.mode&1)&&(p===0||p===11||p===15)){var g=h.alternate;g?(h.updateQueue=g.updateQueue,h.memoizedState=g.memoizedState,h.lanes=g.lanes):(h.updateQueue=null,h.memoizedState=null)}var b=gc(o);if(b!==null){b.flags&=-257,xc(b,o,a,l,t),b.mode&1&&mc(l,d,t),t=b,c=d;var y=t.updateQueue;if(y===null){var S=new Set;S.add(c),t.updateQueue=S}else y.add(c);break e}else{if(!(t&1)){mc(l,d,t),sa();break e}c=Error(j(426))}}else if(J&&a.mode&1){var C=gc(o);if(C!==null){!(C.flags&65536)&&(C.flags|=256),xc(C,o,a,l,t),Bi(Vn(c,a));break e}}l=c=Vn(c,a),ae!==4&&(ae=2),Cr===null?Cr=[l]:Cr.push(l),l=o;do{switch(l.tag){case 3:l.flags|=65536,t&=-t,l.lanes|=t;var u=jp(l,c,t);cc(l,u);break e;case 1:a=c;var f=l.type,m=l.stateNode;if(!(l.flags&128)&&(typeof f.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Ut===null||!Ut.has(m)))){l.flags|=65536,t&=-t,l.lanes|=t;var w=kp(l,a,t);cc(l,w);break e}}l=l.return}while(l!==null)}$p(n)}catch(k){t=k,oe===n&&n!==null&&(oe=n=n.return);continue}break}while(!0)}function Up(){var e=ll.current;return ll.current=sl,e===null?sl:e}function sa(){(ae===0||ae===3||ae===2)&&(ae=4),ue===null||!(pn&268435455)&&!(kl&268435455)||Mt(ue,fe)}function al(e,t){var n=F;F|=2;var r=Up();(ue!==e||fe!==t)&&(xt=null,ln(e,t));do try{lg();break}catch(s){Fp(e,s)}while(!0);if(Fi(),F=n,ll.current=r,oe!==null)throw Error(j(261));return ue=null,fe=0,ae}function lg(){for(;oe!==null;)Hp(oe)}function og(){for(;oe!==null&&!_h();)Hp(oe)}function Hp(e){var t=Vp(e.alternate,e,Oe);e.memoizedProps=e.pendingProps,t===null?$p(e):oe=t,Zi.current=null}function $p(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Zm(n,t),n!==null){n.flags&=32767,oe=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ae=6,oe=null;return}}else if(n=Xm(n,t,Oe),n!==null){oe=n;return}if(t=t.sibling,t!==null){oe=t;return}oe=t=e}while(t!==null);ae===0&&(ae=5)}function en(e,t,n){var r=q,s=Ve.transition;try{Ve.transition=null,q=1,ig(e,t,n,r)}finally{Ve.transition=s,q=r}return null}function ig(e,t,n,r){do zn();while(Ot!==null);if(F&6)throw Error(j(327));n=e.finishedWork;var s=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(j(177));e.callbackNode=null,e.callbackPriority=0;var l=n.lanes|n.childLanes;if(Uh(e,l),e===ue&&(oe=ue=null,fe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ws||(ws=!0,qp($s,function(){return zn(),null})),l=(n.flags&15990)!==0,n.subtreeFlags&15990||l){l=Ve.transition,Ve.transition=null;var o=q;q=1;var a=F;F|=4,Zi.current=null,tg(e,n),Ip(n,e),Nm(Fo),Vs=!!zo,Fo=zo=null,e.current=n,ng(n),Mh(),F=a,q=o,Ve.transition=l}else e.current=n;if(ws&&(ws=!1,Ot=e,il=s),l=e.pendingLanes,l===0&&(Ut=null),Lh(n.stateNode),_e(e,te()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)s=t[n],r(s.value,{componentStack:s.stack,digest:s.digest});if(ol)throw ol=!1,e=oi,oi=null,e;return il&1&&e.tag!==0&&zn(),l=e.pendingLanes,l&1?e===ii?Er++:(Er=0,ii=e):Er=0,Jt(),null}function zn(){if(Ot!==null){var e=ju(il),t=Ve.transition,n=q;try{if(Ve.transition=null,q=16>e?16:e,Ot===null)var r=!1;else{if(e=Ot,Ot=null,il=0,F&6)throw Error(j(331));var s=F;for(F|=4,T=e.current;T!==null;){var l=T,o=l.child;if(T.flags&16){var a=l.deletions;if(a!==null){for(var c=0;c<a.length;c++){var d=a[c];for(T=d;T!==null;){var h=T;switch(h.tag){case 0:case 11:case 15:kr(8,h,l)}var p=h.child;if(p!==null)p.return=h,T=p;else for(;T!==null;){h=T;var g=h.sibling,b=h.return;if(Op(h),h===d){T=null;break}if(g!==null){g.return=b,T=g;break}T=b}}}var y=l.alternate;if(y!==null){var S=y.child;if(S!==null){y.child=null;do{var C=S.sibling;S.sibling=null,S=C}while(S!==null)}}T=l}}if(l.subtreeFlags&2064&&o!==null)o.return=l,T=o;else e:for(;T!==null;){if(l=T,l.flags&2048)switch(l.tag){case 0:case 11:case 15:kr(9,l,l.return)}var u=l.sibling;if(u!==null){u.return=l.return,T=u;break e}T=l.return}}var f=e.current;for(T=f;T!==null;){o=T;var m=o.child;if(o.subtreeFlags&2064&&m!==null)m.return=o,T=m;else e:for(o=f;T!==null;){if(a=T,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:jl(9,a)}}catch(k){ee(a,a.return,k)}if(a===o){T=null;break e}var w=a.sibling;if(w!==null){w.return=a.return,T=w;break e}T=a.return}}if(F=s,Jt(),at&&typeof at.onPostCommitFiberRoot=="function")try{at.onPostCommitFiberRoot(ml,e)}catch{}r=!0}return r}finally{q=n,Ve.transition=t}}return!1}function Tc(e,t,n){t=Vn(n,t),t=jp(e,t,1),e=Ft(e,t,1),t=je(),e!==null&&(Gr(e,1,t),_e(e,t))}function ee(e,t,n){if(e.tag===3)Tc(e,e,n);else for(;t!==null;){if(t.tag===3){Tc(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ut===null||!Ut.has(r))){e=Vn(n,e),e=kp(t,e,1),t=Ft(t,e,1),e=je(),t!==null&&(Gr(t,1,e),_e(t,e));break}}t=t.return}}function ag(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=je(),e.pingedLanes|=e.suspendedLanes&n,ue===e&&(fe&n)===n&&(ae===4||ae===3&&(fe&130023424)===fe&&500>te()-ta?ln(e,0):ea|=n),_e(e,t)}function Wp(e,t){t===0&&(e.mode&1?(t=ds,ds<<=1,!(ds&130023424)&&(ds=4194304)):t=1);var n=je();e=kt(e,t),e!==null&&(Gr(e,t,n),_e(e,n))}function cg(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Wp(e,n)}function dg(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,s=e.memoizedState;s!==null&&(n=s.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(j(314))}r!==null&&r.delete(t),Wp(e,n)}var Vp;Vp=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Re.current)Pe=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Pe=!1,Ym(e,t,n);Pe=!!(e.flags&131072)}else Pe=!1,J&&t.flags&1048576&&Gu(t,Xs,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Ms(e,t),e=t.pendingProps;var s=Un(t,be.current);Bn(t,n),s=Ki(null,t,r,e,s,n);var l=Gi();return t.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Te(r)?(l=!0,Js(t)):l=!1,t.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,$i(t),s.updater=Sl,t.stateNode=s,s._reactInternals=t,Go(t,r,e,n),t=Xo(null,t,r,!0,l,n)):(t.tag=0,J&&l&&Di(t),Se(null,t,s,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Ms(e,t),e=t.pendingProps,s=r._init,r=s(r._payload),t.type=r,s=t.tag=pg(r),e=Ye(r,e),s){case 0:t=Yo(null,t,r,e,n);break e;case 1:t=wc(null,t,r,e,n);break e;case 11:t=yc(null,t,r,e,n);break e;case 14:t=vc(null,t,r,Ye(r.type,e),n);break e}throw Error(j(306,r,""))}return t;case 0:return r=t.type,s=t.pendingProps,s=t.elementType===r?s:Ye(r,s),Yo(e,t,r,s,n);case 1:return r=t.type,s=t.pendingProps,s=t.elementType===r?s:Ye(r,s),wc(e,t,r,s,n);case 3:e:{if(Pp(t),e===null)throw Error(j(387));r=t.pendingProps,l=t.memoizedState,s=l.element,tp(e,t),tl(t,r,null,n);var o=t.memoizedState;if(r=o.element,l.isDehydrated)if(l={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=l,t.memoizedState=l,t.flags&256){s=Vn(Error(j(423)),t),t=bc(e,t,r,n,s);break e}else if(r!==s){s=Vn(Error(j(424)),t),t=bc(e,t,r,n,s);break e}else for(Le=zt(t.stateNode.containerInfo.firstChild),De=t,J=!0,Ze=null,n=Zu(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Hn(),r===s){t=Ct(e,t,n);break e}Se(e,t,r,n)}t=t.child}return t;case 5:return np(t),e===null&&qo(t),r=t.type,s=t.pendingProps,l=e!==null?e.memoizedProps:null,o=s.children,Uo(r,s)?o=null:l!==null&&Uo(r,l)&&(t.flags|=32),Np(e,t),Se(e,t,o,n),t.child;case 6:return e===null&&qo(t),null;case 13:return Rp(e,t,n);case 4:return Wi(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=$n(t,null,r,n):Se(e,t,r,n),t.child;case 11:return r=t.type,s=t.pendingProps,s=t.elementType===r?s:Ye(r,s),yc(e,t,r,s,n);case 7:return Se(e,t,t.pendingProps,n),t.child;case 8:return Se(e,t,t.pendingProps.children,n),t.child;case 12:return Se(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,s=t.pendingProps,l=t.memoizedProps,o=s.value,Q(Zs,r._currentValue),r._currentValue=o,l!==null)if(nt(l.value,o)){if(l.children===s.children&&!Re.current){t=Ct(e,t,n);break e}}else for(l=t.child,l!==null&&(l.return=t);l!==null;){var a=l.dependencies;if(a!==null){o=l.child;for(var c=a.firstContext;c!==null;){if(c.context===r){if(l.tag===1){c=bt(-1,n&-n),c.tag=2;var d=l.updateQueue;if(d!==null){d=d.shared;var h=d.pending;h===null?c.next=c:(c.next=h.next,h.next=c),d.pending=c}}l.lanes|=n,c=l.alternate,c!==null&&(c.lanes|=n),Qo(l.return,n,t),a.lanes|=n;break}c=c.next}}else if(l.tag===10)o=l.type===t.type?null:l.child;else if(l.tag===18){if(o=l.return,o===null)throw Error(j(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Qo(o,n,t),o=l.sibling}else o=l.child;if(o!==null)o.return=l;else for(o=l;o!==null;){if(o===t){o=null;break}if(l=o.sibling,l!==null){l.return=o.return,o=l;break}o=o.return}l=o}Se(e,t,s.children,n),t=t.child}return t;case 9:return s=t.type,r=t.pendingProps.children,Bn(t,n),s=qe(s),r=r(s),t.flags|=1,Se(e,t,r,n),t.child;case 14:return r=t.type,s=Ye(r,t.pendingProps),s=Ye(r.type,s),vc(e,t,r,s,n);case 15:return Cp(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,s=t.pendingProps,s=t.elementType===r?s:Ye(r,s),Ms(e,t),t.tag=1,Te(r)?(e=!0,Js(t)):e=!1,Bn(t,n),Sp(t,r,s),Go(t,r,s,n),Xo(null,t,r,!0,e,n);case 19:return Tp(e,t,n);case 22:return Ep(e,t,n)}throw Error(j(156,t.tag))};function qp(e,t){return vu(e,t)}function ug(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function We(e,t,n,r){return new ug(e,t,n,r)}function la(e){return e=e.prototype,!(!e||!e.isReactComponent)}function pg(e){if(typeof e=="function")return la(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ki)return 11;if(e===Ci)return 14}return 2}function $t(e,t){var n=e.alternate;return n===null?(n=We(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Ls(e,t,n,r,s,l){var o=2;if(r=e,typeof e=="function")la(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case jn:return on(n.children,s,l,t);case ji:o=8,s|=8;break;case vo:return e=We(12,n,t,s|2),e.elementType=vo,e.lanes=l,e;case wo:return e=We(13,n,t,s),e.elementType=wo,e.lanes=l,e;case bo:return e=We(19,n,t,s),e.elementType=bo,e.lanes=l,e;case nu:return Cl(n,s,l,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case eu:o=10;break e;case tu:o=9;break e;case ki:o=11;break e;case Ci:o=14;break e;case Rt:o=16,r=null;break e}throw Error(j(130,e==null?e:typeof e,""))}return t=We(o,n,t,s),t.elementType=e,t.type=r,t.lanes=l,t}function on(e,t,n,r){return e=We(7,e,r,t),e.lanes=n,e}function Cl(e,t,n,r){return e=We(22,e,r,t),e.elementType=nu,e.lanes=n,e.stateNode={isHidden:!1},e}function oo(e,t,n){return e=We(6,e,null,t),e.lanes=n,e}function io(e,t,n){return t=We(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function fg(e,t,n,r,s){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ul(0),this.expirationTimes=Ul(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ul(0),this.identifierPrefix=r,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function oa(e,t,n,r,s,l,o,a,c){return e=new fg(e,t,n,a,c),t===1?(t=1,l===!0&&(t|=8)):t=0,l=We(3,null,null,t),e.current=l,l.stateNode=e,l.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},$i(l),e}function hg(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Sn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Qp(e){if(!e)return qt;e=e._reactInternals;e:{if(yn(e)!==e||e.tag!==1)throw Error(j(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Te(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(j(171))}if(e.tag===1){var n=e.type;if(Te(n))return Qu(e,n,t)}return t}function Kp(e,t,n,r,s,l,o,a,c){return e=oa(n,r,!0,e,s,l,o,a,c),e.context=Qp(null),n=e.current,r=je(),s=Ht(n),l=bt(r,s),l.callback=t??null,Ft(n,l,s),e.current.lanes=s,Gr(e,s,r),_e(e,r),e}function El(e,t,n,r){var s=t.current,l=je(),o=Ht(s);return n=Qp(n),t.context===null?t.context=n:t.pendingContext=n,t=bt(l,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Ft(s,t,o),e!==null&&(tt(e,s,o,l),Rs(e,s,o)),o}function cl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function _c(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ia(e,t){_c(e,t),(e=e.alternate)&&_c(e,t)}function mg(){return null}var Gp=typeof reportError=="function"?reportError:function(e){console.error(e)};function aa(e){this._internalRoot=e}Nl.prototype.render=aa.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(j(409));El(e,t,null,null)};Nl.prototype.unmount=aa.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;fn(function(){El(null,e,null,null)}),t[jt]=null}};function Nl(e){this._internalRoot=e}Nl.prototype.unstable_scheduleHydration=function(e){if(e){var t=Eu();e={blockedOn:null,target:e,priority:t};for(var n=0;n<_t.length&&t!==0&&t<_t[n].priority;n++);_t.splice(n,0,e),n===0&&Pu(e)}};function ca(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Pl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Mc(){}function gg(e,t,n,r,s){if(s){if(typeof r=="function"){var l=r;r=function(){var d=cl(o);l.call(d)}}var o=Kp(t,r,e,0,null,!1,!1,"",Mc);return e._reactRootContainer=o,e[jt]=o.current,Lr(e.nodeType===8?e.parentNode:e),fn(),o}for(;s=e.lastChild;)e.removeChild(s);if(typeof r=="function"){var a=r;r=function(){var d=cl(c);a.call(d)}}var c=oa(e,0,!1,null,null,!1,!1,"",Mc);return e._reactRootContainer=c,e[jt]=c.current,Lr(e.nodeType===8?e.parentNode:e),fn(function(){El(t,c,n,r)}),c}function Rl(e,t,n,r,s){var l=n._reactRootContainer;if(l){var o=l;if(typeof s=="function"){var a=s;s=function(){var c=cl(o);a.call(c)}}El(t,o,e,s)}else o=gg(n,t,e,s,r);return cl(o)}ku=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=gr(t.pendingLanes);n!==0&&(Pi(t,n|1),_e(t,te()),!(F&6)&&(qn=te()+500,Jt()))}break;case 13:fn(function(){var r=kt(e,1);if(r!==null){var s=je();tt(r,e,1,s)}}),ia(e,1)}};Ri=function(e){if(e.tag===13){var t=kt(e,134217728);if(t!==null){var n=je();tt(t,e,134217728,n)}ia(e,134217728)}};Cu=function(e){if(e.tag===13){var t=Ht(e),n=kt(e,t);if(n!==null){var r=je();tt(n,e,t,r)}ia(e,t)}};Eu=function(){return q};Nu=function(e,t){var n=q;try{return q=e,t()}finally{q=n}};_o=function(e,t,n){switch(t){case"input":if(ko(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var s=vl(r);if(!s)throw Error(j(90));su(r),ko(r,s)}}}break;case"textarea":ou(e,n);break;case"select":t=n.value,t!=null&&On(e,!!n.multiple,t,!1)}};fu=na;hu=fn;var xg={usingClientEntryPoint:!1,Events:[Yr,Nn,vl,uu,pu,na]},dr={findFiberByHostInstance:tn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},yg={bundleType:dr.bundleType,version:dr.version,rendererPackageName:dr.rendererPackageName,rendererConfig:dr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Et.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=xu(e),e===null?null:e.stateNode},findFiberByHostInstance:dr.findFiberByHostInstance||mg,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var bs=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!bs.isDisabled&&bs.supportsFiber)try{ml=bs.inject(yg),at=bs}catch{}}Be.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=xg;Be.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ca(t))throw Error(j(200));return hg(e,t,null,n)};Be.createRoot=function(e,t){if(!ca(e))throw Error(j(299));var n=!1,r="",s=Gp;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(s=t.onRecoverableError)),t=oa(e,1,!1,null,null,n,!1,r,s),e[jt]=t.current,Lr(e.nodeType===8?e.parentNode:e),new aa(t)};Be.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(j(188)):(e=Object.keys(e).join(","),Error(j(268,e)));return e=xu(t),e=e===null?null:e.stateNode,e};Be.flushSync=function(e){return fn(e)};Be.hydrate=function(e,t,n){if(!Pl(t))throw Error(j(200));return Rl(null,e,t,!0,n)};Be.hydrateRoot=function(e,t,n){if(!ca(e))throw Error(j(405));var r=n!=null&&n.hydratedSources||null,s=!1,l="",o=Gp;if(n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=Kp(t,null,e,1,n??null,s,!1,l,o),e[jt]=t.current,Lr(e),r)for(e=0;e<r.length;e++)n=r[e],s=n._getVersion,s=s(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,s]:t.mutableSourceEagerHydrationData.push(n,s);return new Nl(t)};Be.render=function(e,t,n){if(!Pl(t))throw Error(j(200));return Rl(null,e,t,!1,n)};Be.unmountComponentAtNode=function(e){if(!Pl(e))throw Error(j(40));return e._reactRootContainer?(fn(function(){Rl(null,null,e,!1,function(){e._reactRootContainer=null,e[jt]=null})}),!0):!1};Be.unstable_batchedUpdates=na;Be.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Pl(n))throw Error(j(200));if(e==null||e._reactInternals===void 0)throw Error(j(38));return Rl(e,t,n,!1,r)};Be.version="18.3.1-next-f1338f8080-20240426";function Jp(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Jp)}catch(e){console.error(e)}}Jp(),Jd.exports=Be;var vg=Jd.exports,Ac=vg;xo.createRoot=Ac.createRoot,xo.hydrateRoot=Ac.hydrateRoot;/**
 * @remix-run/router v1.23.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Wr(){return Wr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Wr.apply(null,arguments)}var Lt;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Lt||(Lt={}));const Oc="popstate";function wg(e){e===void 0&&(e={});function t(r,s){let{pathname:l,search:o,hash:a}=r.location;return di("",{pathname:l,search:o,hash:a},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function n(r,s){return typeof s=="string"?s:dl(s)}return Sg(t,n,null,e)}function re(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Yp(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function bg(){return Math.random().toString(36).substr(2,8)}function Lc(e,t){return{usr:e.state,key:e.key,idx:t}}function di(e,t,n,r){return n===void 0&&(n=null),Wr({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Jn(t):t,{state:n,key:t&&t.key||r||bg()})}function dl(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Jn(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function Sg(e,t,n,r){r===void 0&&(r={});let{window:s=document.defaultView,v5Compat:l=!1}=r,o=s.history,a=Lt.Pop,c=null,d=h();d==null&&(d=0,o.replaceState(Wr({},o.state,{idx:d}),""));function h(){return(o.state||{idx:null}).idx}function p(){a=Lt.Pop;let C=h(),u=C==null?null:C-d;d=C,c&&c({action:a,location:S.location,delta:u})}function g(C,u){a=Lt.Push;let f=di(S.location,C,u);d=h()+1;let m=Lc(f,d),w=S.createHref(f);try{o.pushState(m,"",w)}catch(k){if(k instanceof DOMException&&k.name==="DataCloneError")throw k;s.location.assign(w)}l&&c&&c({action:a,location:S.location,delta:1})}function b(C,u){a=Lt.Replace;let f=di(S.location,C,u);d=h();let m=Lc(f,d),w=S.createHref(f);o.replaceState(m,"",w),l&&c&&c({action:a,location:S.location,delta:0})}function y(C){let u=s.location.origin!=="null"?s.location.origin:s.location.href,f=typeof C=="string"?C:dl(C);return f=f.replace(/ $/,"%20"),re(u,"No window.location.(origin|href) available to create URL for href: "+f),new URL(f,u)}let S={get action(){return a},get location(){return e(s,o)},listen(C){if(c)throw new Error("A history only accepts one active listener");return s.addEventListener(Oc,p),c=C,()=>{s.removeEventListener(Oc,p),c=null}},createHref(C){return t(s,C)},createURL:y,encodeLocation(C){let u=y(C);return{pathname:u.pathname,search:u.search,hash:u.hash}},push:g,replace:b,go(C){return o.go(C)}};return S}var Dc;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Dc||(Dc={}));function jg(e,t,n){return n===void 0&&(n="/"),kg(e,t,n)}function kg(e,t,n,r){let s=typeof t=="string"?Jn(t):t,l=da(s.pathname||"/",n);if(l==null)return null;let o=Xp(e);Cg(o);let a=null,c=Ig(l);for(let d=0;a==null&&d<o.length;++d)a=Og(o[d],c);return a}function Xp(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let s=(l,o,a)=>{let c={relativePath:a===void 0?l.path||"":a,caseSensitive:l.caseSensitive===!0,childrenIndex:o,route:l};c.relativePath.startsWith("/")&&(re(c.relativePath.startsWith(r),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(r.length));let d=Wt([r,c.relativePath]),h=n.concat(c);l.children&&l.children.length>0&&(re(l.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+d+'".')),Xp(l.children,t,h,d)),!(l.path==null&&!l.index)&&t.push({path:d,score:Mg(d,l.index),routesMeta:h})};return e.forEach((l,o)=>{var a;if(l.path===""||!((a=l.path)!=null&&a.includes("?")))s(l,o);else for(let c of Zp(l.path))s(l,o,c)}),t}function Zp(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,s=n.endsWith("?"),l=n.replace(/\?$/,"");if(r.length===0)return s?[l,""]:[l];let o=Zp(r.join("/")),a=[];return a.push(...o.map(c=>c===""?l:[l,c].join("/"))),s&&a.push(...o),a.map(c=>e.startsWith("/")&&c===""?"/":c)}function Cg(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Ag(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Eg=/^:[\w-]+$/,Ng=3,Pg=2,Rg=1,Tg=10,_g=-2,Ic=e=>e==="*";function Mg(e,t){let n=e.split("/"),r=n.length;return n.some(Ic)&&(r+=_g),t&&(r+=Pg),n.filter(s=>!Ic(s)).reduce((s,l)=>s+(Eg.test(l)?Ng:l===""?Rg:Tg),r)}function Ag(e,t){return e.length===t.length&&e.slice(0,-1).every((r,s)=>r===t[s])?e[e.length-1]-t[t.length-1]:0}function Og(e,t,n){let{routesMeta:r}=e,s={},l="/",o=[];for(let a=0;a<r.length;++a){let c=r[a],d=a===r.length-1,h=l==="/"?t:t.slice(l.length)||"/",p=Lg({path:c.relativePath,caseSensitive:c.caseSensitive,end:d},h),g=c.route;if(!p)return null;Object.assign(s,p.params),o.push({params:s,pathname:Wt([l,p.pathname]),pathnameBase:Fg(Wt([l,p.pathnameBase])),route:g}),p.pathnameBase!=="/"&&(l=Wt([l,p.pathnameBase]))}return o}function Lg(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Dg(e.path,e.caseSensitive,e.end),s=t.match(n);if(!s)return null;let l=s[0],o=l.replace(/(.)\/+$/,"$1"),a=s.slice(1);return{params:r.reduce((d,h,p)=>{let{paramName:g,isOptional:b}=h;if(g==="*"){let S=a[p]||"";o=l.slice(0,l.length-S.length).replace(/(.)\/+$/,"$1")}const y=a[p];return b&&!y?d[g]=void 0:d[g]=(y||"").replace(/%2F/g,"/"),d},{}),pathname:l,pathnameBase:o,pattern:e}}function Dg(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Yp(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],s="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,c)=>(r.push({paramName:a,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),s+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?s+="\\/*$":e!==""&&e!=="/"&&(s+="(?:(?=\\/|$))"),[new RegExp(s,t?void 0:"i"),r]}function Ig(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Yp(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function da(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function Bg(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:s=""}=typeof e=="string"?Jn(e):e,l;return n?(n=ef(n),n.startsWith("/")?l=Bc(n.substring(1),"/"):l=Bc(n,t)):l=t,{pathname:l,search:Ug(r),hash:Hg(s)}}function Bc(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(s=>{s===".."?n.length>1&&n.pop():s!=="."&&n.push(s)}),n.length>1?n.join("/"):"/"}function ao(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function zg(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function ua(e,t){let n=zg(e);return t?n.map((r,s)=>s===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function pa(e,t,n,r){r===void 0&&(r=!1);let s;typeof e=="string"?s=Jn(e):(s=Wr({},e),re(!s.pathname||!s.pathname.includes("?"),ao("?","pathname","search",s)),re(!s.pathname||!s.pathname.includes("#"),ao("#","pathname","hash",s)),re(!s.search||!s.search.includes("#"),ao("#","search","hash",s)));let l=e===""||s.pathname==="",o=l?"/":s.pathname,a;if(o==null)a=n;else{let p=t.length-1;if(!r&&o.startsWith("..")){let g=o.split("/");for(;g[0]==="..";)g.shift(),p-=1;s.pathname=g.join("/")}a=p>=0?t[p]:"/"}let c=Bg(s,a),d=o&&o!=="/"&&o.endsWith("/"),h=(l||o===".")&&n.endsWith("/");return!c.pathname.endsWith("/")&&(d||h)&&(c.pathname+="/"),c}const ef=e=>e.replace(/\/\/+/g,"/"),Wt=e=>ef(e.join("/")),Fg=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Ug=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Hg=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function $g(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const tf=["post","put","patch","delete"];new Set(tf);const Wg=["get",...tf];new Set(Wg);/**
 * React Router v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Vr(){return Vr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Vr.apply(null,arguments)}const fa=v.createContext(null),Vg=v.createContext(null),Yt=v.createContext(null),Tl=v.createContext(null),dt=v.createContext({outlet:null,matches:[],isDataRoute:!1}),nf=v.createContext(null);function qg(e,t){let{relative:n}=t===void 0?{}:t;Yn()||re(!1);let{basename:r,navigator:s}=v.useContext(Yt),{hash:l,pathname:o,search:a}=sf(e,{relative:n}),c=o;return r!=="/"&&(c=o==="/"?r:Wt([r,o])),s.createHref({pathname:c,search:a,hash:l})}function Yn(){return v.useContext(Tl)!=null}function Xn(){return Yn()||re(!1),v.useContext(Tl).location}function rf(e){v.useContext(Yt).static||v.useLayoutEffect(e)}function Zr(){let{isDataRoute:e}=v.useContext(dt);return e?ix():Qg()}function Qg(){Yn()||re(!1);let e=v.useContext(fa),{basename:t,future:n,navigator:r}=v.useContext(Yt),{matches:s}=v.useContext(dt),{pathname:l}=Xn(),o=JSON.stringify(ua(s,n.v7_relativeSplatPath)),a=v.useRef(!1);return rf(()=>{a.current=!0}),v.useCallback(function(d,h){if(h===void 0&&(h={}),!a.current)return;if(typeof d=="number"){r.go(d);return}let p=pa(d,JSON.parse(o),l,h.relative==="path");e==null&&t!=="/"&&(p.pathname=p.pathname==="/"?t:Wt([t,p.pathname])),(h.replace?r.replace:r.push)(p,h.state,h)},[t,r,o,l,e])}const Kg=v.createContext(null);function Gg(e){let t=v.useContext(dt).outlet;return t&&v.createElement(Kg.Provider,{value:e},t)}function ha(){let{matches:e}=v.useContext(dt),t=e[e.length-1];return t?t.params:{}}function sf(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=v.useContext(Yt),{matches:s}=v.useContext(dt),{pathname:l}=Xn(),o=JSON.stringify(ua(s,r.v7_relativeSplatPath));return v.useMemo(()=>pa(e,JSON.parse(o),l,n==="path"),[e,o,l,n])}function Jg(e,t){return Yg(e,t)}function Yg(e,t,n,r){Yn()||re(!1);let{navigator:s}=v.useContext(Yt),{matches:l}=v.useContext(dt),o=l[l.length-1],a=o?o.params:{};o&&o.pathname;let c=o?o.pathnameBase:"/";o&&o.route;let d=Xn(),h;if(t){var p;let C=typeof t=="string"?Jn(t):t;c==="/"||(p=C.pathname)!=null&&p.startsWith(c)||re(!1),h=C}else h=d;let g=h.pathname||"/",b=g;if(c!=="/"){let C=c.replace(/^\//,"").split("/");b="/"+g.replace(/^\//,"").split("/").slice(C.length).join("/")}let y=jg(e,{pathname:b}),S=nx(y&&y.map(C=>Object.assign({},C,{params:Object.assign({},a,C.params),pathname:Wt([c,s.encodeLocation?s.encodeLocation(C.pathname).pathname:C.pathname]),pathnameBase:C.pathnameBase==="/"?c:Wt([c,s.encodeLocation?s.encodeLocation(C.pathnameBase).pathname:C.pathnameBase])})),l,n,r);return t&&S?v.createElement(Tl.Provider,{value:{location:Vr({pathname:"/",search:"",hash:"",state:null,key:"default"},h),navigationType:Lt.Pop}},S):S}function Xg(){let e=ox(),t=$g(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,s={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return v.createElement(v.Fragment,null,v.createElement("h2",null,"Unexpected Application Error!"),v.createElement("h3",{style:{fontStyle:"italic"}},t),n?v.createElement("pre",{style:s},n):null,null)}const Zg=v.createElement(Xg,null);class ex extends v.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?v.createElement(dt.Provider,{value:this.props.routeContext},v.createElement(nf.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function tx(e){let{routeContext:t,match:n,children:r}=e,s=v.useContext(fa);return s&&s.static&&s.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=n.route.id),v.createElement(dt.Provider,{value:t},r)}function nx(e,t,n,r){var s;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var l;if(!n)return null;if(n.errors)e=n.matches;else if((l=r)!=null&&l.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let o=e,a=(s=n)==null?void 0:s.errors;if(a!=null){let h=o.findIndex(p=>p.route.id&&(a==null?void 0:a[p.route.id])!==void 0);h>=0||re(!1),o=o.slice(0,Math.min(o.length,h+1))}let c=!1,d=-1;if(n&&r&&r.v7_partialHydration)for(let h=0;h<o.length;h++){let p=o[h];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(d=h),p.route.id){let{loaderData:g,errors:b}=n,y=p.route.loader&&g[p.route.id]===void 0&&(!b||b[p.route.id]===void 0);if(p.route.lazy||y){c=!0,d>=0?o=o.slice(0,d+1):o=[o[0]];break}}}return o.reduceRight((h,p,g)=>{let b,y=!1,S=null,C=null;n&&(b=a&&p.route.id?a[p.route.id]:void 0,S=p.route.errorElement||Zg,c&&(d<0&&g===0?(ax("route-fallback"),y=!0,C=null):d===g&&(y=!0,C=p.route.hydrateFallbackElement||null)));let u=t.concat(o.slice(0,g+1)),f=()=>{let m;return b?m=S:y?m=C:p.route.Component?m=v.createElement(p.route.Component,null):p.route.element?m=p.route.element:m=h,v.createElement(tx,{match:p,routeContext:{outlet:h,matches:u,isDataRoute:n!=null},children:m})};return n&&(p.route.ErrorBoundary||p.route.errorElement||g===0)?v.createElement(ex,{location:n.location,revalidation:n.revalidation,component:S,error:b,children:f(),routeContext:{outlet:null,matches:u,isDataRoute:!0}}):f()},null)}var lf=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(lf||{}),of=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(of||{});function rx(e){let t=v.useContext(fa);return t||re(!1),t}function sx(e){let t=v.useContext(Vg);return t||re(!1),t}function lx(e){let t=v.useContext(dt);return t||re(!1),t}function af(e){let t=lx(),n=t.matches[t.matches.length-1];return n.route.id||re(!1),n.route.id}function ox(){var e;let t=v.useContext(nf),n=sx(),r=af();return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function ix(){let{router:e}=rx(lf.UseNavigateStable),t=af(of.UseNavigateStable),n=v.useRef(!1);return rf(()=>{n.current=!0}),v.useCallback(function(s,l){l===void 0&&(l={}),n.current&&(typeof s=="number"?e.navigate(s):e.navigate(s,Vr({fromRouteId:t},l)))},[e,t])}const zc={};function ax(e,t,n){zc[e]||(zc[e]=!0)}function cx(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function cf(e){let{to:t,replace:n,state:r,relative:s}=e;Yn()||re(!1);let{future:l,static:o}=v.useContext(Yt),{matches:a}=v.useContext(dt),{pathname:c}=Xn(),d=Zr(),h=pa(t,ua(a,l.v7_relativeSplatPath),c,s==="path"),p=JSON.stringify(h);return v.useEffect(()=>d(JSON.parse(p),{replace:n,state:r,relative:s}),[d,p,s,n,r]),null}function dx(e){return Gg(e.context)}function M(e){re(!1)}function ux(e){let{basename:t="/",children:n=null,location:r,navigationType:s=Lt.Pop,navigator:l,static:o=!1,future:a}=e;Yn()&&re(!1);let c=t.replace(/^\/*/,"/"),d=v.useMemo(()=>({basename:c,navigator:l,static:o,future:Vr({v7_relativeSplatPath:!1},a)}),[c,a,l,o]);typeof r=="string"&&(r=Jn(r));let{pathname:h="/",search:p="",hash:g="",state:b=null,key:y="default"}=r,S=v.useMemo(()=>{let C=da(h,c);return C==null?null:{location:{pathname:C,search:p,hash:g,state:b,key:y},navigationType:s}},[c,h,p,g,b,y,s]);return S==null?null:v.createElement(Yt.Provider,{value:d},v.createElement(Tl.Provider,{children:n,value:S}))}function px(e){let{children:t,location:n}=e;return Jg(ui(t),n)}new Promise(()=>{});function ui(e,t){t===void 0&&(t=[]);let n=[];return v.Children.forEach(e,(r,s)=>{if(!v.isValidElement(r))return;let l=[...t,s];if(r.type===v.Fragment){n.push.apply(n,ui(r.props.children,l));return}r.type!==M&&re(!1),!r.props.index||!r.props.children||re(!1);let o={id:r.props.id||l.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=ui(r.props.children,l)),n.push(o)}),n}/**
 * React Router DOM v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function pi(){return pi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},pi.apply(null,arguments)}function fx(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}function hx(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function mx(e,t){return e.button===0&&(!t||t==="_self")&&!hx(e)}const gx=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],xx="6";try{window.__reactRouterVersion=xx}catch{}const yx="startTransition",Fc=ah[yx];function vx(e){let{basename:t,children:n,future:r,window:s}=e,l=v.useRef();l.current==null&&(l.current=wg({window:s,v5Compat:!0}));let o=l.current,[a,c]=v.useState({action:o.action,location:o.location}),{v7_startTransition:d}=r||{},h=v.useCallback(p=>{d&&Fc?Fc(()=>c(p)):c(p)},[c,d]);return v.useLayoutEffect(()=>o.listen(h),[o,h]),v.useEffect(()=>cx(r),[r]),v.createElement(ux,{basename:t,children:n,location:a.location,navigationType:a.action,navigator:o,future:r})}const wx=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",bx=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,U=v.forwardRef(function(t,n){let{onClick:r,relative:s,reloadDocument:l,replace:o,state:a,target:c,to:d,preventScrollReset:h,viewTransition:p}=t,g=fx(t,gx),{basename:b}=v.useContext(Yt),y,S=!1;if(typeof d=="string"&&bx.test(d)&&(y=d,wx))try{let m=new URL(window.location.href),w=d.startsWith("//")?new URL(m.protocol+d):new URL(d),k=da(w.pathname,b);w.origin===m.origin&&k!=null?d=k+w.search+w.hash:S=!0}catch{}let C=qg(d,{relative:s}),u=Sx(d,{replace:o,state:a,target:c,preventScrollReset:h,relative:s,viewTransition:p});function f(m){r&&r(m),m.defaultPrevented||u(m)}return v.createElement("a",pi({},g,{href:y||C,onClick:S||l?r:f,ref:n,target:c}))});var Uc;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Uc||(Uc={}));var Hc;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Hc||(Hc={}));function Sx(e,t){let{target:n,replace:r,state:s,preventScrollReset:l,relative:o,viewTransition:a}=t===void 0?{}:t,c=Zr(),d=Xn(),h=sf(e,{relative:o});return v.useCallback(p=>{if(mx(p,n)){p.preventDefault();let g=r!==void 0?r:dl(d)===dl(h);c(e,{replace:g,state:s,preventScrollReset:l,relative:o,viewTransition:a})}},[d,c,h,r,s,n,e,l,o,a])}function H(){const[e,t]=v.useState(!1);return i.jsxs(i.Fragment,{children:[i.jsx("div",{className:"bg-[#003B46] text-slate-300 text-xs py-2 px-4 sm:px-6 lg:px-8 border-b border-teal-950/20 relative z-30",children:i.jsx("div",{className:"max-w-7xl mx-auto flex justify-between items-center",children:i.jsx("div",{className:"flex items-center gap-4",children:i.jsxs("div",{className:"flex items-center gap-3.5 text-slate-300",children:[i.jsx("a",{href:"#",className:"hover:text-white transition-colors","aria-label":"Facebook",children:i.jsx("i",{className:"fab fa-facebook-f text-xs"})}),i.jsx("a",{href:"#",className:"hover:text-white transition-colors","aria-label":"Twitter",children:i.jsx("i",{className:"fab fa-twitter text-xs"})}),i.jsx("a",{href:"#",className:"hover:text-white transition-colors","aria-label":"YouTube",children:i.jsx("i",{className:"fab fa-youtube text-xs"})})]})})})}),i.jsxs("nav",{className:"bg-white shadow-md sticky top-0 z-[100] border-b border-slate-100",children:[i.jsx("div",{className:"max-w-7xl mx-auto px-4 lg:px-8 relative",children:i.jsxs("div",{className:"flex items-center justify-between h-24",children:[i.jsx("div",{className:"flex-shrink-0",children:i.jsx(U,{to:"/",className:"block",children:i.jsx("img",{src:"/assets/PMCH.gif",alt:"Popular Medical College Logo",className:"h-14 md:h-16 w-auto"})})}),i.jsxs("div",{className:"hidden xl:flex items-center space-x-4 lg:space-x-5 text-[13px] font-extrabold tracking-tight text-[#003B46]",children:[i.jsx("div",{className:"h-24 flex items-center",children:i.jsx(U,{to:"/",className:"hover:text-emerald-600 transition-colors",children:"HOME"})}),i.jsxs("div",{className:"group h-24 flex items-center relative",children:[i.jsxs("button",{className:"hover:text-emerald-600 transition-colors flex items-center gap-0.5 font-extrabold",children:["ADMISSION ",i.jsx("svg",{className:"w-3 h-3 ml-0.5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:i.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M19 9l-7 7-7-7"})})]}),i.jsx("div",{className:"absolute left-0 top-full w-[280px] shadow-2xl border-t-4 border-emerald-600 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-[110] bg-white rounded-b-md",children:i.jsxs("div",{className:"p-2 flex flex-col text-[12px] font-semibold text-slate-700 normal-case",children:[i.jsx(U,{to:"/course",className:"p-2 hover:bg-slate-50 hover:text-emerald-600 rounded",children:"Course Structure"}),i.jsx(U,{to:"/eligiblity",className:"p-2 hover:bg-slate-50 hover:text-emerald-600 rounded",children:"Eligibility"}),i.jsx(U,{to:"/rules",className:"p-2 hover:bg-slate-50 hover:text-emerald-600 rounded font-bold text-emerald-600",children:"COLLEGE RULES"}),i.jsx(U,{to:"/book",className:"p-2 hover:bg-slate-50 hover:text-emerald-600 rounded",children:"Book List"}),i.jsx(U,{to:"/fees",className:"p-2 hover:bg-slate-50 hover:text-emerald-600 rounded",children:"College Fees"}),i.jsx("a",{href:"http://dgme.teletalk.com.bd/mbbs/nongov/applicantscopy.php",target:"_blank",rel:"noreferrer",className:"p-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-center rounded text-[11px] uppercase tracking-wider",children:"Admission Portal ↗"})]})})]}),i.jsxs("div",{className:"group h-24 flex items-center relative",children:[i.jsxs("button",{className:"hover:text-emerald-600 transition-colors flex items-center gap-0.5 font-extrabold",children:["DEPARTMENTS ",i.jsx("svg",{className:"w-3 h-3 ml-0.5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:i.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M19 9l-7 7-7-7"})})]}),i.jsx("div",{className:"absolute left-0 top-full w-[290px] shadow-2xl border-t-4 border-emerald-600 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-[110] bg-white rounded-b-md",children:i.jsxs("div",{className:"p-2 flex flex-col max-h-[60vh] overflow-y-auto text-[12px] font-semibold text-slate-700 normal-case",children:[[["anatomy","Anatomy"],["physiology","Physiology"],["biochymistry","Biochemistry"],["medicine","Community Medicine"],["forensic","Forensic Medicine"],["pathology","Pathology"],["microbiology","Microbiology"],["pharmacology","Pharmacology"],["allied","Medicine & Allied"],["paediatrics","Paediatrics"],["surgery","Surgery & Allied"],["orthopaedics","Orthopaedics"],["ophthalmology","Ophthalmology"],["gynae","Gynae & Obst."],["otorhinolaryngology","Otorhinolaryngology"],["anaesthesiology","Anaesthesiology"]].map(([n,r])=>i.jsx(U,{to:`/dept/${n}`,className:"p-2 hover:bg-slate-50 hover:text-emerald-600 rounded",children:r},n)),i.jsx(U,{to:"/faculty",className:"p-2 bg-[#003B46] hover:bg-[#07575B] text-white font-bold text-center rounded block text-[11px] uppercase",children:"Academic Faculty"})]})})]}),i.jsxs("div",{className:"group h-24 flex items-center relative",children:[i.jsxs("button",{className:"hover:text-emerald-600 transition-colors flex items-center gap-0.5 font-extrabold",children:["ADMINISTRATION ",i.jsx("svg",{className:"w-3 h-3 ml-0.5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:i.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M19 9l-7 7-7-7"})})]}),i.jsx("div",{className:"absolute left-0 top-full w-[270px] shadow-2xl border-t-4 border-emerald-600 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-[110] bg-white rounded-b-md",children:i.jsx("div",{className:"p-2 flex flex-col text-[12px] font-semibold text-slate-700 normal-case",children:[["about","About Us"],["chairman","Chairman Governing Body"],["principal","Desk of the Principal"],["vice","Vice Principal"],["quality","Quality Assurance"],["award","Academic Awards"],["govrn","Governing Bodies"],["land","Land Information"],["info","Basic Information"]].map(([n,r])=>i.jsx(U,{to:`/${n}`,className:"p-2 hover:bg-slate-50 hover:text-emerald-600 rounded",children:r},n))})})]}),i.jsxs("div",{className:"group h-24 flex items-center relative",children:[i.jsxs("button",{className:"hover:text-emerald-600 transition-colors flex items-center gap-0.5 font-extrabold",children:["FACILITIES ",i.jsx("svg",{className:"w-3 h-3 ml-0.5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:i.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M19 9l-7 7-7-7"})})]}),i.jsx("div",{className:"absolute left-0 top-full w-[270px] shadow-2xl border-t-4 border-emerald-600 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-[110] bg-white rounded-b-md",children:i.jsx("div",{className:"p-2 flex flex-col max-h-[60vh] overflow-y-auto text-[12px] font-semibold text-slate-700 normal-case",children:[["library","College Library"],["it","IT Corner"],["assist","Student Assistance Center"],["resource","Student Resource Center"],["guardians","Liaison with Guardians"],["legends","Meet the Legends"],["center","Medical Center"],["confer","College Conference Room"],["cafe","College Cafeteria"],["common","College Common Room"],["hostal","College Hostel"],["contact","Contact US"]].map(([n,r])=>i.jsx(U,{to:`/${n}`,className:"p-2 hover:bg-slate-50 hover:text-emerald-600 rounded",children:r},n))})})]}),i.jsx("div",{className:"h-24 flex items-center",children:i.jsx(U,{to:"/committees",className:"hover:text-emerald-600",children:"COMMITTEES"})}),i.jsx("div",{className:"h-24 flex items-center",children:i.jsx(U,{to:"/contact",className:"hover:text-emerald-600",children:"NOTICE"})})]}),i.jsx("div",{className:"hidden md:flex items-center h-full pl-4 z-20",children:i.jsxs("a",{href:"tel:10606",className:"bg-[#007A78] text-white flex flex-col justify-center items-center px-5 h-[110px] rounded-b-2xl shadow border-x border-b border-white/10 hover:bg-[#006664] -translate-y-[25px]",children:[i.jsx("span",{className:"text-[11px] font-bold tracking-widest opacity-90 uppercase",children:"Hotline"}),i.jsx("span",{className:"text-xl font-black mt-0.5",children:"10606"})]})}),i.jsx("div",{className:"xl:hidden flex items-center",children:i.jsx("button",{onClick:()=>t(!e),className:"text-[#003B46] p-2 hover:bg-slate-50 rounded-md",children:i.jsx("svg",{className:"h-6 w-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:i.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M4 6h16M4 12h16m-7 6h7"})})})})]})}),e&&i.jsx("div",{className:"xl:hidden bg-white border-t border-slate-100 px-6 py-4 shadow-inner",children:i.jsxs("div",{className:"flex flex-col space-y-3 text-[12px] font-bold tracking-wider uppercase text-[#003B46]",children:[i.jsx(U,{to:"/",onClick:()=>t(!1),className:"py-2 border-b border-slate-50",children:"Home"}),i.jsx(U,{to:"/course",onClick:()=>t(!1),className:"py-2 border-b border-slate-50",children:"Admission"}),i.jsx(U,{to:"/faculty",onClick:()=>t(!1),className:"py-2 border-b border-slate-50",children:"Departments"}),i.jsx(U,{to:"/about",onClick:()=>t(!1),className:"py-2 border-b border-slate-50",children:"Administration"}),i.jsx(U,{to:"/contact",onClick:()=>t(!1),className:"py-2 border-b border-slate-50",children:"Contact"}),i.jsx("a",{href:"tel:10606",className:"bg-[#007A78] text-white text-center py-2.5 rounded font-bold text-xs mt-2 block",children:"CALL: 10606"})]})})]})]})}function $(){return i.jsxs("footer",{className:"bg-[#003B46] text-slate-300 pt-16 pb-0 border-t border-teal-950/40",children:[i.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:i.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8 items-center pb-12 border-b border-teal-900/60",children:[i.jsx("div",{className:"text-center md:text-left",children:i.jsx(U,{to:"/",className:"inline-block bg-white p-3 rounded-xl shadow-md transition-transform hover:scale-[1.02]",children:i.jsx("img",{src:"/assets/PMCH.gif",alt:"Popular Medical College Logo",className:"h-20 w-auto mx-auto md:mx-0"})})}),i.jsxs("nav",{className:"flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs font-bold tracking-[0.15em] uppercase text-slate-200",children:[i.jsx(U,{to:"/course",className:"hover:text-emerald-400 transition-colors",children:"Course"}),i.jsx("span",{className:"text-teal-800/80 hidden sm:inline",children:"|"}),i.jsx(U,{to:"/about",className:"hover:text-emerald-400 transition-colors",children:"About"}),i.jsx("span",{className:"text-teal-800/80 hidden sm:inline",children:"|"}),i.jsx(U,{to:"/contact",className:"hover:text-emerald-400 transition-colors",children:"Contact"}),i.jsx("span",{className:"text-teal-800/80 hidden sm:inline",children:"|"}),i.jsx(U,{to:"/contact",className:"hover:text-emerald-400 transition-colors",children:"Notices"})]}),i.jsxs("div",{className:"flex justify-center md:justify-end gap-4",children:[i.jsx("a",{href:"#",className:"w-9 h-9 rounded-lg bg-teal-950/50 flex items-center justify-center text-slate-300 hover:text-white hover:bg-blue-600 transition-all shadow-inner","aria-label":"Facebook",children:i.jsx("i",{className:"fab fa-facebook-f text-sm"})}),i.jsx("a",{href:"mailto:info@pmch.edu",className:"w-9 h-9 rounded-lg bg-teal-950/50 flex items-center justify-center text-slate-300 hover:text-white hover:bg-red-500 transition-all shadow-inner","aria-label":"Mail",children:i.jsx("i",{className:"fas fa-envelope text-sm"})}),i.jsx("a",{href:"tel:+880123456789",className:"w-9 h-9 rounded-lg bg-teal-950/50 flex items-center justify-center text-slate-300 hover:text-white hover:bg-emerald-500 transition-all shadow-inner","aria-label":"Call",children:i.jsx("i",{className:"fas fa-phone-alt text-sm"})})]})]})}),i.jsx("div",{className:"bg-slate-950/40 text-center text-xs tracking-wider font-medium text-slate-400 border-t border-teal-950/20 py-4 px-4",children:i.jsxs("div",{className:"max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2",children:[i.jsx("p",{children:"© 2026 Popular Medical College. All rights reserved."}),i.jsxs("p",{className:"text-[11px] text-slate-500",children:["Designed & Maintained by ",i.jsx("span",{className:"text-emerald-500 font-semibold",children:"PMC IT Node"})," • MERN build"]})]})})]})}function jx(){return i.jsxs("div",{children:[i.jsx(H,{}),i.jsxs("div",{className:"fixed inset-0 z-0 pointer-events-none",children:[i.jsx("img",{src:"/assets/healthcare-bg.jpg",alt:"Healthcare background",className:"w-full h-full object-cover object-center"}),i.jsx("div",{className:"absolute inset-0 bg-white/60"})]}),i.jsxs("div",{className:"relative z-10 w-full",children:[i.jsxs("section",{className:"relative h-[65vh] min-h-[550px] w-full overflow-hidden",children:[i.jsxs("div",{className:"absolute inset-0 z-0",children:[i.jsx("img",{src:"/assets/healthcare-hero.jpg",alt:"Healthcare professionals at Popular Medical College",className:"h-full w-full object-cover object-center"}),i.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/60 to-transparent"})]}),i.jsx("div",{className:"relative z-10 mx-auto flex h-full max-w-7xl items-center px-6 md:px-12",children:i.jsxs("div",{className:"max-w-2xl p-8 md:p-10 rounded-2xl space-y-6",children:[i.jsxs("div",{className:"space-y-3",children:[i.jsx("h1",{className:"text-4xl leading-tight tracking-tight text-white md:text-5xl",children:"Academic Faculty"}),i.jsx("div",{className:"h-1 w-20 bg-emerald-900 rounded-full"})]}),i.jsx("p",{className:"text-lg leading-relaxed text-slate-50 md:text-xl font-light",children:"Popular Medical College can boast of a faculty which certainly is well reputed and respected nationally and internationally for their devotion and professionalism. It is also important to point out that many of the faculty members are actively involved with postgraduate teaching, learning and examination programs in addition to their undergraduate responsibilities."}),i.jsxs("div",{className:"flex flex-wrap gap-4 pt-2",children:[i.jsx("a",{href:"#",className:"inline-flex items-center justify-center rounded-full bg-emerald-900 px-8 py-3.5 text-base font-semibold text-white hover:bg-[#007d3c] shadow-lg",children:"Apply Now"}),i.jsx("a",{href:"#",className:"inline-flex items-center justify-center rounded-full border border-white/40 bg-white/10 px-8 py-3.5 text-base font-semibold text-white backdrop-blur-md hover:bg-white hover:text-slate-950",children:"Read More"})]})]})})]}),i.jsx("section",{className:"relative bg-transparent py-24 px-6 md:px-12 overflow-hidden",children:i.jsx("div",{className:"max-w-7xl mx-auto",children:i.jsxs("div",{className:"flex flex-col lg:flex-row items-center gap-12 lg:gap-16",children:[i.jsxs("div",{className:"w-full lg:w-1/2 flex flex-col justify-center space-y-6",children:[i.jsx("h2",{className:"text-4xl md:text-5xl font-bold text-slate-900 leading-tight tracking-tight",children:"Popular Medical College"}),i.jsx("div",{className:"text-slate-900 leading-relaxed text-lg max-w-xl space-y-4 font-normal",children:i.jsx("p",{children:"Popular Group is the only State of the Art total health care provider of the country in private sector. Popular Medical College is a prestigious concern of Popular Group. The college was established in 2010. Though fairly new among the procession of medical colleges of the country, Popular Medical College has already attained an enviable status for its outstanding care in preparing the students for their MBBS course."})})]}),i.jsx("div",{className:"w-full lg:w-1/2 flex items-center justify-center",children:i.jsx("div",{className:"relative w-full max-w-2xl",children:i.jsx("div",{className:"relative overflow-hidden rounded-2xl shadow-2xl bg-slate-950 aspect-video ring-1 ring-black/5",children:i.jsx("video",{className:"w-full h-full object-cover",controls:!0,poster:"https://www.pmch-bd.org/images/PMC/slider/sld1.jpg",children:i.jsx("source",{src:"https://www.pmch-bd.org/images/Video1.mp4",type:"video/mp4"})})})})})]})})}),i.jsxs("div",{className:"max-w-7xl mx-auto flex items-center justify-center px-6",children:[i.jsx("div",{className:"flex-grow border-t border-slate-900"}),i.jsx("span",{className:"mx-6 text-slate-900 text-[24px] font-bold",children:"Management Desk"}),i.jsx("div",{className:"flex-grow border-t border-slate-900"})]}),i.jsx("section",{className:"w-full py-24 bg-transparent",children:i.jsx("div",{className:"max-w-7xl mx-auto px-6 md:px-12",children:i.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10",children:[{t:"From Vice-Principal's Desk",img:"/assets/Vice.jpg",d:"He obtained his MBBS in 2002, MRCS in 2010, and FCPS in 2011. He also obtained Fellowship and Diploma on laparoscopy surgery in 2012. He worked in teaching posts in different medical colleges for about 12 years."},{t:"From Principal's Desk",img:"/assets/principal.jpg",d:"It is my immense pleasure and privilege to welcome the new students to be admitted into this prestigious Medical College. With a team of fulltime highly experienced and dedicated teachers, Popular Medical College has been established as one of the top most Medical Colleges in private sector of Bangladesh.",head:!0},{t:"From Chairman's Desk",img:"/assets/Chairman.jpg",d:"The best gift of the parent to their sons & daughters is perfect education. In our country it is a great concern of every parent to find out perfect education for their sons and daughters after passing Higher Secondary Certificate Examination."}].map((e,t)=>i.jsxs("div",{className:`flex flex-col backdrop-blur-md rounded-2xl p-8 shadow-sm transition-all hover:shadow-xl hover:-translate-y-1 ${e.head?"shadow-md border-t-4 border-t-emerald-900":""}`,children:[i.jsx("h3",{className:"text-xl font-bold text-slate-800 text-center mb-6",children:e.t}),i.jsx("div",{className:"mx-auto mb-6",children:i.jsx("img",{src:e.img,alt:e.t,className:"w-36 h-36 rounded-full object-cover border-4 border-white shadow-md"})}),i.jsx("p",{className:"text-slate-900 leading-relaxed text-base text-center font-normal flex-grow",children:e.d})]},t))})})}),i.jsx("section",{className:"py-20 bg-transparent",children:i.jsxs("div",{className:"max-w-7xl mx-auto px-6 md:px-12",children:[i.jsxs("div",{className:"flex items-center justify-center mb-16",children:[i.jsx("div",{className:"flex-grow border-t border-slate-900"}),i.jsx("span",{className:"mx-6 text-slate-900 text-[24px] font-bold",children:"Campus Highlights"}),i.jsx("div",{className:"flex-grow border-t border-slate-900"})]}),i.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6",children:[["blog1.jpg","Excellence","Academic Award"],["blog2.jpg","Creative","Photography Club"],["blog3.jpg","Campus","Life At PMC"],["blog4.jpg","Healthcare","Modern Hospital"]].map(([e,t,n],r)=>i.jsxs("div",{className:"group relative overflow-hidden rounded-2xl bg-slate-950 shadow-md hover:-translate-y-2 hover:shadow-2xl transition-all",children:[i.jsx("div",{className:"aspect-[4/5] w-full overflow-hidden",children:i.jsx("img",{src:`/assets/${e}`,className:"h-full w-full object-cover opacity-90",alt:n})}),i.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"}),i.jsxs("div",{className:"absolute bottom-0 left-0 p-6 w-full",children:[i.jsx("span",{className:"mb-2 inline-block rounded-full bg-emerald-900 px-3 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white",children:t}),i.jsx("h3",{className:"text-2xl font-bold leading-tight text-white",children:n})]})]},r))})]})}),i.jsx("section",{className:"py-10 bg-transparent",children:i.jsxs("div",{className:"max-w-7xl mx-auto px-6 md:px-12",children:[i.jsxs("div",{className:"flex items-center justify-center mb-8",children:[i.jsx("div",{className:"flex-grow border-t border-slate-900"}),i.jsx("span",{className:"mx-6 text-slate-900 text-[24px] font-bold",children:"Important Notices"}),i.jsx("div",{className:"flex-grow border-t border-slate-900"})]}),i.jsx("div",{className:"backdrop-blur-md rounded-2xl shadow-sm overflow-hidden divide-y",children:[["Notice (DU Registration Fee)","267.18 KB","Aug 31, 2025"],["Shok Barta","1.02 MB","Jul 29, 2025"],["Notice for Foreign Students","201.79 KB","Jul 15, 2025"]].map(([e,t,n],r)=>i.jsxs("div",{className:"grid grid-cols-12 items-center px-6 py-4 hover:bg-emerald-900/5",children:[i.jsx("div",{className:"col-span-8 md:col-span-7 font-semibold text-slate-800",children:e}),i.jsx("div",{className:"hidden md:block md:col-span-2 text-center text-sm text-slate-500 italic",children:t}),i.jsx("div",{className:"col-span-4 md:col-span-3 text-right",children:i.jsx("span",{className:"inline-block px-3 py-1 bg-slate-100 rounded-full text-xs font-semibold text-slate-900",children:n})})]},r))})]})}),i.jsx($,{})]})]})}function df(e,t){return function(){return e.apply(t,arguments)}}const{toString:kx}=Object.prototype,{getPrototypeOf:Qt}=Object,{iterator:es,toStringTag:uf}=Symbol,qr=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),pf=e=>typeof e=="string"&&(e==="__proto__"||e==="constructor"||e==="prototype"),ff=(e,t,n)=>e===Object.prototype||!n&&t===null,Cx=e=>{if(!Object.isExtensible(e))return!1;const t=Object.getOwnPropertyNames(e);return Object.getOwnPropertySymbols&&t.push(...Object.getOwnPropertySymbols(e)),t.every(n=>{if(pf(n))return!1;const r=Object.getOwnPropertyDescriptor(e,n);return!!r&&r.configurable&&r.writable===!0})},Qr=(e,t)=>{let n=e;const r=[];for(;n!=null;){if(r.indexOf(n)!==-1)return!1;r.push(n);const s=Qt(n);if(ff(n,s,n===e))return!1;if(qr(n,t))return!0;n=s}return!1},Ex=(e,t)=>e!=null&&Qr(e,t)?e[t]:void 0,Nx=e=>{if(e==null||typeof e!="object"&&typeof e!="function")return e;const t=Qt(e);if(t===null&&Cx(e))return e;const n=Object.create(null),r=Object.create(null),s=[];let l=e;for(;l!=null&&s.indexOf(l)===-1;){s.push(l);const o=l===e?t:Qt(l);if(ff(l,o,l===e))break;const a=Object.getOwnPropertyNames(l);Object.getOwnPropertySymbols&&a.push(...Object.getOwnPropertySymbols(l));for(const c of a)pf(c)||qr(r,c)||(n[c]=e[c],r[c]=!0);l=o}return n},ma=(e=>t=>{const n=kx.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),Ke=e=>(e=e.toLowerCase(),t=>ma(t)===e),_l=e=>t=>typeof t===e,{isArray:hn}=Array,mn=_l("undefined");function Zn(e){return e!==null&&!mn(e)&&e.constructor!==null&&!mn(e.constructor)&&Me(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const hf=Ke("ArrayBuffer");function Px(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&hf(e.buffer),t}const Rx=_l("string"),Me=_l("function"),mf=_l("number"),er=e=>e!==null&&typeof e=="object",Tx=e=>e===!0||e===!1,Ds=e=>{if(!er(e))return!1;const t=Qt(e);return(t===null||t===Object.prototype||Qt(t)===null)&&!Qr(e,uf)&&!Qr(e,es)},_x=e=>{if(!er(e)||Zn(e))return!1;try{return Object.keys(e).length===0&&Object.getPrototypeOf(e)===Object.prototype}catch{return!1}},Mx=Ke("Date"),Ax=Ke("File"),Ox=e=>!!(e&&typeof e.uri<"u"),Lx=e=>e&&typeof e.getParts<"u",Dx=Ke("Blob"),Ix=Ke("FileList"),Bx=Ke("Set"),zx=e=>er(e)&&Me(e.pipe);function Fx(){return typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}}const $c=Fx(),Wc=typeof $c.FormData<"u"?$c.FormData:void 0,Ux=e=>{if(!e)return!1;if(Wc&&e instanceof Wc)return!0;const t=Qt(e);if(!t||t===Object.prototype||!Me(e.append))return!1;const n=ma(e);return n==="formdata"||n==="object"&&Me(e.toString)&&e.toString()==="[object FormData]"},Hx=Ke("URLSearchParams"),[$x,Wx,Vx,qx]=["ReadableStream","Request","Response","Headers"].map(Ke),Qx=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function ts(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,s;if(typeof e!="object"&&(e=[e]),hn(e))for(r=0,s=e.length;r<s;r++)t.call(null,e[r],r,e);else{if(Zn(e))return;const l=n?Object.getOwnPropertyNames(e):Object.keys(e),o=l.length;let a;for(r=0;r<o;r++)a=l[r],t.call(null,e[a],a,e)}}function gf(e,t){if(Zn(e))return null;t=t.toLowerCase();const n=Object.keys(e);let r=n.length,s;for(;r-- >0;)if(s=n[r],t===s.toLowerCase())return s;return null}const sn=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,xf=e=>!mn(e)&&e!==sn;function fi(...e){const{caseless:t,skipUndefined:n}=xf(this)&&this||{},r={},s=(l,o)=>{if(o==="__proto__"||o==="constructor"||o==="prototype")return;const a=t&&typeof o=="string"&&gf(r,o)||o,c=qr(r,a)?r[a]:void 0;Ds(c)&&Ds(l)?r[a]=fi(c,l):Ds(l)?r[a]=fi({},l):hn(l)?r[a]=l.slice():(!n||!mn(l))&&(r[a]=l)};for(let l=0,o=e.length;l<o;l++){const a=e[l];if(!a||Zn(a)||(ts(a,s),typeof a!="object"||hn(a)))continue;const c=Object.getOwnPropertySymbols(a);for(let d=0;d<c.length;d++){const h=c[d];l0.call(a,h)&&s(a[h],h)}}return r}const Kx=(e,t,n,{allOwnKeys:r}={})=>(ts(t,(s,l)=>{n&&Me(s)?Object.defineProperty(e,l,{__proto__:null,value:df(s,n),writable:!0,enumerable:!0,configurable:!0}):Object.defineProperty(e,l,{__proto__:null,value:s,writable:!0,enumerable:!0,configurable:!0})},{allOwnKeys:r}),e),Gx=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),Jx=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),Object.defineProperty(e.prototype,"constructor",{__proto__:null,value:e,writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(e,"super",{__proto__:null,value:t.prototype}),n&&Object.assign(e.prototype,n)},Yx=(e,t,n,r)=>{let s,l,o;const a={};if(t=t||{},e==null)return t;do{for(s=Object.getOwnPropertyNames(e),l=s.length;l-- >0;)o=s[l],(!r||r(o,e,t))&&!a[o]&&(t[o]=e[o],a[o]=!0);e=n!==!1&&Qt(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},Xx=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},Zx=e=>{if(!e)return null;if(hn(e))return e;let t=e.length;if(!mf(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},e0=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&Qt(Uint8Array)),t0=(e,t)=>{const r=(e&&e[es]).call(e);let s;for(;(s=r.next())&&!s.done;){const l=s.value;t.call(e,l[0],l[1])}},n0=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},r0=Ke("HTMLFormElement"),s0=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,s){return r.toUpperCase()+s}),{propertyIsEnumerable:l0}=Object.prototype,o0=Ke("RegExp"),yf=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};ts(n,(s,l)=>{let o;(o=t(s,l,e))!==!1&&(r[l]=o||s)}),Object.defineProperties(e,r)},i0=e=>{yf(e,(t,n)=>{if(Me(e)&&["arguments","caller","callee"].includes(n))return!1;const r=e[n];if(Me(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},a0=(e,t)=>{const n={},r=s=>{s.forEach(l=>{n[l]=!0})};return hn(e)?r(e):r(String(e).split(t)),n},c0=()=>{},d0=(e,t)=>e!=null&&Number.isFinite(e=+e)?e:t;function u0(e){return!!(e&&Me(e.append)&&e[uf]==="FormData"&&e[es])}const p0=e=>{const t=new WeakSet,n=r=>{if(er(r)){if(t.has(r))return;if(Zn(r))return r;if(!("toJSON"in r)){t.add(r);let s;if(Bx(r)){s=[];for(const l of r){const o=n(l);!mn(o)&&s.push(o)}}else s=hn(r)?[]:{},ts(r,(l,o)=>{const a=n(l);!mn(a)&&(s[o]=a)});return t.delete(r),s}}return r};return n(e)},f0=Ke("AsyncFunction"),h0=e=>e&&(er(e)||Me(e))&&Me(e.then)&&Me(e.catch),vf=((e,t)=>e?setImmediate:t?((n,r)=>(sn.addEventListener("message",({source:s,data:l})=>{s===sn&&l===n&&r.length&&r.shift()()},!1),s=>{r.push(s),sn.postMessage(n,"*")}))(`axios@${Math.random()}`,[]):n=>setTimeout(n))(typeof setImmediate=="function",Me(sn.postMessage)),m0=typeof queueMicrotask<"u"?queueMicrotask.bind(sn):typeof process<"u"&&process.nextTick||vf,wf=e=>e!=null&&Me(e[es]),g0=e=>e!=null&&Qr(e,es)&&wf(e),x={isArray:hn,isArrayBuffer:hf,isBuffer:Zn,isFormData:Ux,isArrayBufferView:Px,isString:Rx,isNumber:mf,isBoolean:Tx,isObject:er,isPlainObject:Ds,isEmptyObject:_x,isReadableStream:$x,isRequest:Wx,isResponse:Vx,isHeaders:qx,isUndefined:mn,isDate:Mx,isFile:Ax,isReactNativeBlob:Ox,isReactNative:Lx,isBlob:Dx,isRegExp:o0,isFunction:Me,isStream:zx,isURLSearchParams:Hx,isTypedArray:e0,isFileList:Ix,forEach:ts,merge:fi,extend:Kx,trim:Qx,stripBOM:Gx,inherits:Jx,toFlatObject:Yx,kindOf:ma,kindOfTest:Ke,endsWith:Xx,toArray:Zx,forEachEntry:t0,matchAll:n0,isHTMLForm:r0,hasOwnProperty:qr,hasOwnProp:qr,hasOwnInPrototypeChain:Qr,getSafeProp:Ex,toSafeFlatObject:Nx,reduceDescriptors:yf,freezeMethods:i0,toObjectSet:a0,toCamelCase:s0,noop:c0,toFiniteNumber:d0,findKey:gf,global:sn,isContextDefined:xf,isSpecCompliantForm:u0,toJSONObject:p0,isAsyncFn:f0,isThenable:h0,setImmediate:vf,asap:m0,isIterable:wf,isSafeIterable:g0},x0=x.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),y0=e=>{const t={};let n,r,s;return e&&e.split(`
`).forEach(function(o){s=o.indexOf(":"),n=o.substring(0,s).trim().toLowerCase(),r=o.substring(s+1).trim();const a=x.hasOwnProp(t,n);!n||a&&x.hasOwnProp(x0,n)||(n==="set-cookie"?a?t[n].push(r):t[n]=[r]:t[n]=a?t[n]+", "+r:r)}),t};function v0(e){let t=0,n=e.length;for(;t<n;){const r=e.charCodeAt(t);if(r!==9&&r!==32)break;t+=1}for(;n>t;){const r=e.charCodeAt(n-1);if(r!==9&&r!==32)break;n-=1}return t===0&&n===e.length?e:e.slice(t,n)}const w0=new RegExp("[\\u0000-\\u0008\\u000a-\\u001f\\u007f]+","g"),b0=new RegExp("[^\\u0009\\u0020-\\u007e\\u0080-\\u00ff]+","g");function ga(e,t){return x.isArray(e)?e.map(n=>ga(n,t)):v0(String(e).replace(t,""))}const S0=e=>ga(e,w0),j0=e=>ga(e,b0);function bf(e){const t=Object.create(null);return x.forEach(e.toJSON(),(n,r)=>{t[r]=j0(n)}),t}const Vc=Symbol("internals");function ur(e){return e&&String(e).trim().toLowerCase()}function Is(e){return e===!1||e==null?e:x.isArray(e)?e.map(Is):S0(String(e))}function k0(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const C0=/^[!#$%&'*+\-.^_`|~0-9A-Za-z]+$/;function co(e){let t=0,n=e.length;for(;t<n;){const r=e.charCodeAt(t);if(r!==9&&r!==32)break;t+=1}for(;n>t;){const r=e.charCodeAt(n-1);if(r!==9&&r!==32)break;n-=1}return t===0&&n===e.length?e:e.slice(t,n)}function E0(e){const t=e.length-1;if(t<1||e.charCodeAt(0)!==34||e.charCodeAt(t)!==34)return e;let n="";for(let r=1;r<t;r++){const s=e.charCodeAt(r);if(s===34||s===92&&(r+=1,r>=t))return e;n+=e[r]}return n}function N0(e){const t=Object.create(null),n=String(e);let r=0,s=!1,l=!1;function o(a){const c=co(n.slice(r,a)),d=c.indexOf("=");if(d<1)return;const h=co(c.slice(0,d));if(!C0.test(h))return;const p=h.toLowerCase();if(p==="__proto__"||p==="constructor"||p==="prototype")return;const g=co(c.slice(d+1));t[p]=E0(g)}for(let a=0;a<n.length;a++){const c=n.charCodeAt(a);s?l?l=!1:c===92?l=!0:c===34&&(s=!1):c===34?s=!0:(c===44||c===59)&&(o(a),r=a+1)}return o(n.length),t}const P0=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function uo(e,t,n,r,s){if(x.isFunction(r))return r.call(this,t,n);if(s&&(t=n),!!x.isString(t)){if(x.isString(r))return t.indexOf(r)!==-1;if(x.isRegExp(r))return r.test(t)}}function R0(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function T0(e,t){const n=x.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{__proto__:null,value:function(s,l,o){return this[r].call(this,t,s,l,o)},configurable:!0})})}let we=class{constructor(t){t&&this.set(t)}set(t,n,r){const s=this;function l(a,c,d){const h=ur(c);if(!h)return;const p=x.findKey(s,h);(!p||s[p]===void 0||d===!0||d===void 0&&s[p]!==!1)&&(s[p||c]=Is(a))}const o=(a,c)=>x.forEach(a,(d,h)=>l(d,h,c));if(x.isPlainObject(t)||t instanceof this.constructor)o(t,n);else if(x.isString(t)&&(t=t.trim())&&!P0(t))o(y0(t),n);else if(x.isObject(t)&&x.isSafeIterable(t)){let a=Object.create(null),c,d;for(const h of t){if(!x.isArray(h))throw new TypeError("Object iterator must return a key-value pair");d=h[0],x.hasOwnProp(a,d)?(c=a[d],a[d]=x.isArray(c)?[...c,h[1]]:[c,h[1]]):a[d]=h[1]}o(a,n)}else t!=null&&l(n,t,r);return this}get(t,n){if(t=ur(t),t){const r=x.findKey(this,t);if(r){const s=this[r];if(!n)return s;if(n===!0)return k0(s);if(x.isFunction(n))return n.call(this,s,r);if(x.isRegExp(n))return n.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=ur(t),t){const r=x.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||uo(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let s=!1;function l(o){if(o=ur(o),o){const a=x.findKey(r,o);a&&(!n||uo(r,r[a],a,n))&&(delete r[a],s=!0)}}return x.isArray(t)?t.forEach(l):l(t),s}clear(t){const n=Object.keys(this);let r=n.length,s=!1;for(;r--;){const l=n[r];(!t||uo(this,this[l],l,t,!0))&&(delete this[l],s=!0)}return s}normalize(t){const n=this,r={};return x.forEach(this,(s,l)=>{const o=x.findKey(r,l);if(o){n[o]=Is(s),delete n[l];return}const a=t?R0(l):String(l).trim();a!==l&&delete n[l],n[a]=Is(s),r[a]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return x.forEach(this,(r,s)=>{r!=null&&r!==!1&&(n[s]=t&&x.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}getSetCookie(){const t=this.get("set-cookie");return x.isArray(t)?t:t==null||t===!1?[]:[t]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static parseParameters(t){return N0(t)}static concat(t,...n){const r=new this(t);return n.forEach(s=>r.set(s)),r}static accessor(t){const r=(this[Vc]=this[Vc]={accessors:{}}).accessors,s=this.prototype;function l(o){const a=ur(o);r[a]||(T0(s,o),r[a]=!0)}return x.isArray(t)?t.forEach(l):l(t),this}};we.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);x.reduceDescriptors(we.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(r){this[n]=r}}});x.freezeMethods(we);const ul="[REDACTED ****]";function _0(e){if(x.hasOwnProp(e,"toJSON"))return!0;let t=Object.getPrototypeOf(e);for(;t&&t!==Object.prototype;){if(x.hasOwnProp(t,"toJSON"))return!0;t=Object.getPrototypeOf(t)}return!1}function M0(e,t){const n=new Set(t.map(l=>String(l).toLowerCase())),r=[],s=l=>{if(l===null||typeof l!="object"||x.isBuffer(l))return l;if(r.indexOf(l)!==-1)return;l instanceof we&&(l=l.toJSON()),r.push(l);let o;if(x.isArray(l))o=[],l.forEach((a,c)=>{const d=s(a);x.isUndefined(d)||(o[c]=d)});else{if(!x.isPlainObject(l)&&_0(l))return r.pop(),l;o=Object.create(null);for(const[a,c]of Object.entries(l)){const d=n.has(a.toLowerCase())?ul:s(c);x.isUndefined(d)||(o[a]=d)}}return r.pop(),o};return s(e)}function qc(e){try{return String(e)}catch{return""}}function A0(e){return e.errors.map(n=>{try{return n&&n.message?qc(n.message):qc(n)}catch{return""}}).filter(Boolean).join("; ")||e.name||"AggregateError"}let N=class Sf extends Error{static from(t,n,r,s,l,o){let a=t.message;!a&&x.isArray(t.errors)&&t.errors.length&&(a=A0(t));const c=new Sf(a,n||t.code,r,s,l);return Object.defineProperty(c,"cause",{__proto__:null,value:t,writable:!0,enumerable:!1,configurable:!0}),c.name=t.name,t.status!=null&&c.status==null&&(c.status=t.status),o&&Object.assign(c,o),c}constructor(t,n,r,s,l){super(t),Object.defineProperty(this,"message",{__proto__:null,value:t,enumerable:!0,writable:!0,configurable:!0}),this.name="AxiosError",this.isAxiosError=!0,n&&(this.code=n),r&&(this.config=r),s&&(this.request=s),l&&(this.response=l,this.status=l.status)}toJSON(){const t=this.config,n=t&&x.hasOwnProp(t,"redact")?t.redact:void 0,r=x.isArray(n)&&n.length>0?M0(t,n):x.toJSONObject(t);return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:r,code:this.code,status:this.status}}};N.ERR_BAD_OPTION_VALUE="ERR_BAD_OPTION_VALUE";N.ERR_BAD_OPTION="ERR_BAD_OPTION";N.ECONNABORTED="ECONNABORTED";N.ETIMEDOUT="ETIMEDOUT";N.ECONNREFUSED="ECONNREFUSED";N.ERR_NETWORK="ERR_NETWORK";N.ERR_FR_TOO_MANY_REDIRECTS="ERR_FR_TOO_MANY_REDIRECTS";N.ERR_DEPRECATED="ERR_DEPRECATED";N.ERR_BAD_RESPONSE="ERR_BAD_RESPONSE";N.ERR_BAD_REQUEST="ERR_BAD_REQUEST";N.ERR_CANCELED="ERR_CANCELED";N.ERR_NOT_SUPPORT="ERR_NOT_SUPPORT";N.ERR_INVALID_URL="ERR_INVALID_URL";N.ERR_FORM_DATA_DEPTH_EXCEEDED="ERR_FORM_DATA_DEPTH_EXCEEDED";const O0=null,jf=100;function hi(e){return x.isPlainObject(e)||x.isArray(e)}function kf(e){return x.endsWith(e,"[]")?e.slice(0,-2):e}function po(e,t,n){return e?e.concat(t).map(function(s,l){return s=kf(s),!n&&l?"["+s+"]":s}).join(n?".":""):t}function L0(e){return x.isArray(e)&&!e.some(hi)}const D0=x.toFlatObject(x,{},null,function(t){return/^is[A-Z]/.test(t)});function Ml(e,t,n){if(!x.isObject(e))throw new TypeError("target must be an object");t=t||new FormData;const r=(f,m)=>{const w=x.getSafeProp(n,f);return x.isUndefined(w)?m:w},s=r("metaTokens",!0),l=r("visitor")||S,o=r("dots",!1),a=r("indexes",!1),c=r("Blob")||typeof Blob<"u"&&Blob,d=r("maxDepth",jf),h=c&&x.isSpecCompliantForm(t),p=[];if(!x.isFunction(l))throw new TypeError("visitor must be a function");function g(f){if(f===null)return"";if(x.isDate(f))return f.toISOString();if(x.isBoolean(f))return f.toString();if(!h&&x.isBlob(f))throw new N("Blob is not supported. Use a Buffer instead.");if(x.isArrayBuffer(f)||x.isTypedArray(f)){if(h&&typeof c=="function")return new c([f]);throw new N("Blob is not supported. Use a Buffer instead.",N.ERR_NOT_SUPPORT)}return f}function b(f){if(f>d)throw new N("Object is too deeply nested ("+f+" levels). Max depth: "+d,N.ERR_FORM_DATA_DEPTH_EXCEEDED)}function y(f,m){if(d===1/0)return JSON.stringify(f);const w=[];return JSON.stringify(f,function(P,E){if(!x.isObject(E))return E;for(;w.length&&w[w.length-1]!==this;)w.pop();return w.push(E),b(m+w.length-1),E})}function S(f,m,w){let k=f;if(x.isReactNative(t)&&x.isReactNativeBlob(f))return t.append(po(w,m,o),g(f)),!1;if(f&&!w&&typeof f=="object"){if(x.endsWith(m,"{}"))m=s?m:m.slice(0,-2),f=y(f,1);else if(x.isArray(f)&&L0(f)||(x.isFileList(f)||x.endsWith(m,"[]"))&&(k=x.toArray(f)))return m=kf(m),k.forEach(function(E,_){!(x.isUndefined(E)||E===null)&&t.append(a===!0?po([m],_,o):a===null?m:m+"[]",g(E))}),!1}return hi(f)?!0:(t.append(po(w,m,o),g(f)),!1)}const C=Object.assign(D0,{defaultVisitor:S,convertValue:g,isVisitable:hi});function u(f,m,w=0){if(!x.isUndefined(f)){if(b(w),p.indexOf(f)!==-1)throw new Error("Circular reference detected in "+m.join("."));p.push(f),x.forEach(f,function(P,E){(!(x.isUndefined(P)||P===null)&&l.call(t,P,x.isString(E)?E.trim():E,m,C))===!0&&u(P,m?m.concat(E):[E],w+1)}),p.pop()}}if(!x.isObject(e))throw new TypeError("data must be an object");return u(e),t}function Qc(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+"};return encodeURIComponent(e).replace(/[!'()~]|%20/g,function(r){return t[r]})}function xa(e,t){this._pairs=[],e&&Ml(e,this,t)}const Cf=xa.prototype;Cf.append=function(t,n){this._pairs.push([t,n])};Cf.toString=function(t){const n=t?r=>t.call(this,r,Qc):Qc;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function I0(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+")}function Ef(e,t,n){if(!t)return e;e=e||"";const r=x.isFunction(n)?{serialize:n}:n,s=x.getSafeProp(r,"encode")||I0,l=x.getSafeProp(r,"serialize");let o;if(l?o=l(t,r):o=x.isURLSearchParams(t)?t.toString():new xa(t,r).toString(s),o){const a=e.indexOf("#");a!==-1&&(e=e.slice(0,a)),e+=(e.indexOf("?")===-1?"?":"&")+o}return e}const pr=Symbol("internals");function Nf(e){return e?e.length:0}function Kc(e){if(e)for(;e.length&&e[e.length-1]===null;)e.pop()}function fr(e,t){const n=e.handlers,r=Nf(n);n!==t.handlersRef?(t.handlersRef=n,t.handlerEntries.clear()):r!==t.handlersLength&&(r?t.handlerEntries.forEach(function(l,o){n[l.index]!==l.handler&&t.handlerEntries.delete(o)}):t.handlerEntries.clear()),t.handlersLength=r}class Gc{constructor(){this.handlers=[],this[pr]={handlersRef:this.handlers,handlersLength:this.handlers.length,handlerEntries:new Map,iterationDepth:0,nextId:0}}use(t,n,r){const s={fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null},l=this[pr];this.handlers==null&&(this.handlers=[]),fr(this,l);const o=l.nextId++;return this.handlers.push(s),l.handlerEntries.set(o,{handler:s,index:this.handlers.length-1}),l.handlersLength=this.handlers.length,o}eject(t){const n=this[pr];fr(this,n);const r=n.handlerEntries.get(t);if(r){if(n.handlerEntries.delete(t),this.handlers[r.index]!==r.handler)return;this.handlers[r.index]=null,n.iterationDepth||(Kc(this.handlers),n.handlersLength=this.handlers.length)}}clear(){this.handlers&&(this.handlers=[],fr(this,this[pr]))}forEach(t){const n=this[pr];fr(this,n),n.iterationDepth++;try{x.forEach(this.handlers,function(s){s!==null&&t(s)})}finally{--n.iterationDepth||(fr(this,n),Kc(this.handlers),n.handlersLength=Nf(this.handlers))}}}const ya={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1,legacyInterceptorReqResOrdering:!0,advertiseZstdAcceptEncoding:!1,validateStatusUndefinedResolves:!0},B0=typeof URLSearchParams<"u"?URLSearchParams:xa,z0=typeof FormData<"u"?FormData:null,F0=typeof Blob<"u"?Blob:null,U0={isBrowser:!0,classes:{URLSearchParams:B0,FormData:z0,Blob:F0},protocols:["http","https","file","blob","url","data"]},va=typeof window<"u"&&typeof document<"u",mi=typeof navigator=="object"&&navigator||void 0,H0=va&&(!mi||["ReactNative","NativeScript","NS"].indexOf(mi.product)<0),$0=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",W0=va&&window.location.href||"http://localhost",V0=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:va,hasStandardBrowserEnv:H0,hasStandardBrowserWebWorkerEnv:$0,navigator:mi,origin:W0},Symbol.toStringTag,{value:"Module"})),de={...V0,...U0};function q0(e,t){return Ml(e,new de.classes.URLSearchParams,{visitor:function(n,r,s,l){return de.isNode&&x.isBuffer(n)?(this.append(r,n.toString("base64")),!1):l.defaultVisitor.apply(this,arguments)},...t})}const Jc=jf;function Pf(e){if(e>Jc)throw new N("FormData field is too deeply nested ("+e+" levels). Max depth: "+Jc,N.ERR_FORM_DATA_DEPTH_EXCEEDED)}function Q0(e){const t=[],n=/[^.[\]]+|\[([^.[\]]*)]/g;let r;for(;(r=n.exec(e))!==null;)Pf(t.length),t.push(r[0]==="[]"?"":r[1]||r[0]);return t}function K0(e){const t={},n=Object.keys(e);let r;const s=n.length;let l;for(r=0;r<s;r++)l=n[r],t[l]=e[l];return t}function Rf(e){function t(n,r,s,l){Pf(l);let o=n[l++];if(o==="__proto__")return!0;const a=Number.isFinite(+o),c=l>=n.length;return o=!o&&x.isArray(s)?s.length:o,c?(x.hasOwnProp(s,o)?s[o]=x.isArray(s[o])?s[o].concat(r):[s[o],r]:s[o]=r,!a):((!x.hasOwnProp(s,o)||!x.isObject(s[o]))&&(s[o]=[]),t(n,r,s[o],l)&&x.isArray(s[o])&&(s[o]=K0(s[o])),!a)}if(x.isFormData(e)&&x.isFunction(e.entries)){const n={};return x.forEachEntry(e,(r,s)=>{t(Q0(r),s,n,0)}),n}return null}const Tf=Object.freeze(["get","delete","head","options","post","put","patch","purge","link","unlink","query"]),bn=(e,t)=>e!=null&&x.hasOwnProp(e,t)?e[t]:void 0;function G0(e,t,n){if(x.isString(e))try{return(t||JSON.parse)(e),x.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const ns={transitional:ya,adapter:["xhr","http","fetch"],transformRequest:[function(t,n){const r=n.getContentType()||"",s=r.indexOf("application/json")>-1,l=x.isObject(t);if(l&&x.isHTMLForm(t)&&(t=new FormData(t)),x.isFormData(t))return s?JSON.stringify(Rf(t)):t;if(x.isArrayBuffer(t)||x.isBuffer(t)||x.isStream(t)||x.isFile(t)||x.isBlob(t)||x.isReadableStream(t))return t;if(x.isArrayBufferView(t))return t.buffer;if(x.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let a;if(l){const c=bn(this,"formSerializer");if(r.indexOf("application/x-www-form-urlencoded")>-1)return q0(t,c).toString();if((a=x.isFileList(t))||r.indexOf("multipart/form-data")>-1){const d=bn(this,"env"),h=d&&d.FormData;return Ml(a?{"files[]":t}:t,h&&new h,c)}}return l||s?(n.setContentType("application/json",!1),G0(t)):t}],transformResponse:[function(t){const n=bn(this,"transitional")||ns.transitional,r=n&&n.forcedJSONParsing,s=bn(this,"responseType"),l=s==="json";if(x.isResponse(t)||x.isReadableStream(t))return t;if(t&&x.isString(t)&&(r&&!s||l)){const a=!(n&&n.silentJSONParsing)&&l;try{return JSON.parse(t,bn(this,"parseReviver"))}catch(c){if(a)throw c.name==="SyntaxError"?N.from(c,N.ERR_BAD_RESPONSE,this,null,bn(this,"response")):c}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:de.classes.FormData,Blob:de.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};x.forEach(Tf,e=>{ns.headers[e]={}});function fo(e,t){const n=this||ns,r=t||n,s=we.from(r.headers);let l=r.data;return x.forEach(e,function(a){l=a.call(n,l,s.normalize(),t?t.status:void 0)}),s.normalize(),l}function _f(e){return!!(e&&e.__CANCEL__)}let rs=class extends N{constructor(t,n,r){super(t??"canceled",N.ERR_CANCELED,n,r),this.name="CanceledError",this.__CANCEL__=!0}};function Mf(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new N("Request failed with status code "+n.status,n.status>=400&&n.status<500?N.ERR_BAD_REQUEST:N.ERR_BAD_RESPONSE,n.config,n.request,n))}const J0=/[\t\n\r]/g;function Af(e){if(typeof e!="string")return e;let t=0;for(;t<e.length&&e.charCodeAt(t)<=32;)t++;return e.slice(t).replace(J0,"")}function ho(e){const t=/^([-+\w]{1,25}):(?:\/\/)?/.exec(e);return t&&t[1]||""}function Y0(e,t){e=e||10;const n=new Array(e),r=new Array(e);let s=0,l=0,o;return t=t!==void 0?t:1e3,function(c){const d=Date.now(),h=r[l];o||(o=d),n[s]=c,r[s]=d;let p=l,g=0;for(;p!==s;)g+=n[p++],p=p%e;if(s=(s+1)%e,s===l&&(l=(l+1)%e),d-o<t)return;const b=h&&d-h;return b?Math.round(g*1e3/b):void 0}}function X0(e,t){let n=0,r=1e3/t,s,l;const o=(h,p=Date.now())=>{n=p,s=null,l&&(clearTimeout(l),l=null),e(...h)};return[(...h)=>{const p=Date.now(),g=p-n;g>=r?o(h,p):(s=h,l||(l=setTimeout(()=>{l=null,o(s)},r-g)))},()=>s&&o(s),(...h)=>o(h)]}const pl=(e,t,n=3)=>{let r=0;const s=Y0(50,250);return X0(l=>{if(!l||!x.isNumber(l.loaded))return;const o=l.loaded,a=l.lengthComputable?l.total:void 0,c=Math.max(0,a!=null?Math.min(o,a):o),d=Math.max(0,c-r),h=s(d);r=Math.max(r,c);const p={loaded:c,total:a,progress:a?c/a:void 0,bytes:d,rate:h||void 0,estimated:h&&a?(a-c)/h:void 0,event:l,lengthComputable:a!=null,[t?"download":"upload"]:!0};e(p)},n)},Yc=(e,t)=>{const n=e!=null;return[r=>t[0]({lengthComputable:n,total:e,loaded:r}),t[1]]},Xc=(e,t=x.asap)=>(...n)=>t(()=>e(...n)),Z0=de.hasStandardBrowserEnv?((e,t)=>n=>(n=new URL(n,de.origin),e.protocol===n.protocol&&e.host===n.host&&(t||e.port===n.port)))(new URL(de.origin),de.navigator&&/(msie|trident)/i.test(de.navigator.userAgent)):()=>!0,ey=de.hasStandardBrowserEnv?{write(e,t,n,r,s,l,o){if(typeof document>"u")return;const a=[`${e}=${encodeURIComponent(t)}`];x.isNumber(n)&&a.push(`expires=${new Date(n).toUTCString()}`),x.isString(r)&&a.push(`path=${r}`),x.isString(s)&&a.push(`domain=${s}`),l===!0&&a.push("secure"),x.isString(o)&&a.push(`SameSite=${o}`),document.cookie=a.join("; ")},read(e){if(typeof document>"u")return null;const t=document.cookie.split(";");for(let n=0;n<t.length;n++){const r=t[n].replace(/^\s+/,""),s=r.indexOf("=");if(s!==-1&&r.slice(0,s)===e)try{return decodeURIComponent(r.slice(s+1))}catch{return r.slice(s+1)}}return null},remove(e){this.write(e,"",Date.now()-864e5,"/")}}:{write(){},read(){return null},remove(){}};function ty(e){return typeof e!="string"?!1:/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function ny(e,t){if(!t)return e;let n=e.length;for(;n>0&&e.charCodeAt(n-1)===47;)n--;return e.slice(0,n)+"/"+t.replace(/^\/+/,"")}const ry=/^https?:(?!\/\/)/i;function sy(e){return e&&e.replace(/(^|&)([^=&]*=)?[^&]+/g,(t,n,r="")=>`${n}${r}${ul}`)}function ly(e){const t=e.replace(/^(https?:\/{0,2})[^/?#]*@/i,`$1${ul}@`),n=t.indexOf("#"),s=(n===-1?t:t.slice(0,n)).replace(/([?&][^=&#]*=)[^&#]*/g,`$1${ul}`);return n===-1?s:`${s}#${sy(t.slice(n+1))}`}function Zc(e,t){if(typeof e=="string"){const n=Af(e);if(ry.test(n))throw new N(`Invalid URL ${JSON.stringify(ly(n))}: missing "//" after protocol`,N.ERR_INVALID_URL,t)}}function Of(e,t,n,r){Zc(t,r);let s=!ty(t);return e&&(s||n===!1)?(Zc(e,r),ny(e,t)):t}const ed=e=>e instanceof we?{...e}:e,oy=e=>Object.getOwnPropertySymbols&&Object.getOwnPropertyDescriptor?Object.keys(e).concat(Object.getOwnPropertySymbols(e).filter(t=>Object.getOwnPropertyDescriptor(e,t).enumerable)):Object.keys(e);function gn(e,t){e=e||{},t=t||{};const n=Object.create(null);Object.defineProperty(n,"hasOwnProperty",{__proto__:null,value:Object.prototype.hasOwnProperty,enumerable:!1,writable:!0,configurable:!0});function r(h,p,g,b){return x.isPlainObject(h)&&x.isPlainObject(p)?x.merge.call({caseless:b},h,p):x.isPlainObject(p)?x.merge({},p):x.isArray(p)?p.slice():p}function s(h,p,g,b){if(x.isUndefined(p)){if(!x.isUndefined(h))return r(void 0,h,g,b)}else return r(h,p,g,b)}function l(h,p){if(!x.isUndefined(p))return r(void 0,p)}function o(h,p){if(x.isUndefined(p)){if(!x.isUndefined(h))return r(void 0,h)}else return r(void 0,p)}function a(h){const p=x.hasOwnProp(t,"transitional")?t.transitional:void 0;if(!x.isUndefined(p))if(x.isPlainObject(p)){if(x.hasOwnProp(p,h))return p[h]}else return;const g=x.hasOwnProp(e,"transitional")?e.transitional:void 0;if(x.isPlainObject(g)&&x.hasOwnProp(g,h))return g[h]}function c(h,p,g){if(x.hasOwnProp(t,g))return r(h,p);if(x.hasOwnProp(e,g))return r(void 0,h)}const d={url:l,method:l,data:l,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutErrorMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,allowedSocketPaths:o,responseEncoding:o,validateStatus:c,headers:(h,p,g)=>s(ed(h),ed(p),g,!0)};return x.forEach(oy({...e,...t}),function(p){if(p==="__proto__"||p==="constructor"||p==="prototype")return;const g=x.hasOwnProp(d,p)?d[p]:s,b=x.hasOwnProp(e,p)?e[p]:void 0,y=x.hasOwnProp(t,p)?t[p]:void 0,S=g(b,y,p);x.isUndefined(S)&&g!==c||(n[p]=S)}),x.hasOwnProp(t,"validateStatus")&&x.isUndefined(t.validateStatus)&&a("validateStatusUndefinedResolves")===!1&&(x.hasOwnProp(e,"validateStatus")?n.validateStatus=r(void 0,e.validateStatus):delete n.validateStatus),n}const iy=["content-type","content-length"];function ay(e,t,n){if(n!=="content-only"){e.set(t);return}Object.entries(t||{}).forEach(([r,s])=>{iy.includes(r.toLowerCase())&&e.set(r,s)})}const cy=e=>encodeURIComponent(e).replace(/%([0-9A-F]{2})/gi,(t,n)=>String.fromCharCode(parseInt(n,16)));function Lf(e){const t=gn({},e),n=g=>x.hasOwnProp(t,g)?t[g]:void 0,r=n("data");let s=n("withXSRFToken");const l=n("xsrfHeaderName"),o=n("xsrfCookieName");let a=n("headers");const c=n("auth"),d=n("baseURL"),h=n("allowAbsoluteUrls"),p=n("url");if(t.headers=a=we.from(a),t.url=Ef(Of(d,p,h,t),n("params"),n("paramsSerializer")),c){const g=x.getSafeProp(c,"username")||"",b=x.getSafeProp(c,"password")||"";try{a.set("Authorization","Basic "+btoa(g+":"+(b?cy(b):"")))}catch(y){throw N.from(y,N.ERR_BAD_OPTION_VALUE,e)}}if(x.isFormData(r)){const g=x.getSafeProp(r,"getHeaders");de.hasStandardBrowserEnv||de.hasStandardBrowserWebWorkerEnv||x.isReactNative(r)?a.setContentType(void 0):x.isFunction(g)&&ay(a,g.call(r),n("formDataHeaderPolicy"))}if(de.hasStandardBrowserEnv&&(x.isFunction(s)&&(s=s(t)),s===!0||s==null&&Z0(t.url))){const b=l&&o&&ey.read(o);b&&a.set(l,b)}return t}const dy=typeof XMLHttpRequest<"u",uy=dy&&function(e){return new Promise(function(n,r){const s=Lf(e);let l=s.data;const o=we.from(s.headers).normalize();let{responseType:a,onUploadProgress:c,onDownloadProgress:d}=s,h,p,g,b,y,S;function C(){b&&b(),y&&y(),s.cancelToken&&s.cancelToken.unsubscribe(h),s.signal&&s.signal.removeEventListener("abort",h)}let u=new XMLHttpRequest;u.open(s.method.toUpperCase(),s.url,!0),u.timeout=s.timeout;function f(w){if(!u)return;if(u.status===0&&(ho(Af(s.url))||ho(de.origin))!=="file"&&!(u.responseURL&&u.responseURL.startsWith("file:"))){r(new N("Request aborted",N.ECONNABORTED,e,u)),C(),u=null;return}try{w?S&&S(w):y&&y()}catch(_){setTimeout(()=>{throw _})}if(!u)return;const k=we.from("getAllResponseHeaders"in u&&u.getAllResponseHeaders()),E={data:!a||a==="text"||a==="json"?u.responseText:u.response,status:u.status,statusText:u.statusText,headers:k,config:e,request:u};Mf(function(V){n(V),C()},function(V){r(V),C()},E),u=null}"onloadend"in u?u.onloadend=f:u.onreadystatechange=function(){!u||u.readyState!==4||u.status===0&&!(u.responseURL&&u.responseURL.startsWith("file:"))||setTimeout(f)},u.onabort=function(){u&&(r(new N("Request aborted",N.ECONNABORTED,e,u)),C(),u=null)},u.onerror=function(k){const P=k&&k.message?k.message:"Network Error",E=new N(P,N.ERR_NETWORK,e,u);E.event=k||null,r(E),C(),u=null},u.ontimeout=function(){let k=s.timeout?"timeout of "+s.timeout+"ms exceeded":"timeout exceeded";const P=s.transitional||ya;s.timeoutErrorMessage&&(k=s.timeoutErrorMessage),r(new N(k,P.clarifyTimeoutError?N.ETIMEDOUT:N.ECONNABORTED,e,u)),C(),u=null},l===void 0&&o.setContentType(null),"setRequestHeader"in u&&x.forEach(bf(o),function(k,P){u.setRequestHeader(P,k)}),x.isUndefined(s.withCredentials)||(u.withCredentials=!!s.withCredentials),a&&a!=="json"&&(u.responseType=s.responseType),d&&([g,y,S]=pl(d,!0),u.addEventListener("progress",g)),c&&u.upload&&([p,b]=pl(c),u.upload.addEventListener("progress",p),u.upload.addEventListener("loadend",b)),(s.cancelToken||s.signal)&&(h=w=>{u&&(r(!w||w.type?new rs(null,e,u):w),u.abort(),C(),u=null)},s.cancelToken&&s.cancelToken.subscribe(h),s.signal&&(s.signal.aborted?h():s.signal.addEventListener("abort",h)));const m=ho(s.url);if(m&&!de.protocols.includes(m)){r(new N("Unsupported protocol "+m+":",N.ERR_BAD_REQUEST,e)),C();return}u.send(l||null)})},py=(e,t)=>{if(e=e?e.filter(Boolean):[],!t&&!e.length)return;const n=new AbortController;let r=!1;const s=function(c){if(!r){r=!0,o();const d=c instanceof Error?c:this.reason;n.abort(d instanceof N?d:new rs(d instanceof Error?d.message:d))}};let l=t&&setTimeout(()=>{l=null,s(new N(`timeout of ${t}ms exceeded`,N.ETIMEDOUT))},t);const o=()=>{e&&(l&&clearTimeout(l),l=null,e.forEach(c=>{c.unsubscribe?c.unsubscribe(s):c.removeEventListener("abort",s)}),e=null)};e.forEach(c=>{if(!r){if(c.aborted){s.call(c);return}c.addEventListener("abort",s,{once:!0})}});const{signal:a}=n;return a.unsubscribe=()=>x.asap(o),a},fy=function*(e,t){let n=e.byteLength;if(n<t){yield e;return}let r=0,s;for(;r<n;)s=r+t,yield e.slice(r,s),r=s},hy=async function*(e,t){for await(const n of my(e))yield*fy(n,t)},my=async function*(e){if(e[Symbol.asyncIterator]){yield*e;return}const t=e.getReader();try{for(;;){const{done:n,value:r}=await t.read();if(n)break;yield r}}finally{await t.cancel()}},td=(e,t,n,r)=>{const s=hy(e,t);let l=0,o,a=c=>{o||(o=!0,r&&r(c))};return new ReadableStream({async pull(c){try{const{done:d,value:h}=await s.next();if(d){a(),c.close();return}let p=h.byteLength;if(n){let g=l+=p;n(g)}c.enqueue(new Uint8Array(h))}catch(d){throw a(d),d}},cancel(c){return a(c),s.return()}},{highWaterMark:2})},nd=e=>e>=48&&e<=57||e>=65&&e<=70||e>=97&&e<=102,Df=(e,t,n)=>t+2<n&&nd(e.charCodeAt(t+1))&&nd(e.charCodeAt(t+2)),rd=e=>e<=57?e-48:(e&223)-55,gy=e=>e>=65&&e<=90||e>=97&&e<=122||e>=48&&e<=57||e===43||e===47||e===45||e===95,xy=e=>e===9||e===10||e===12||e===13||e===32,yy=e=>{const t=Math.floor(e/4),n=e%4;return t*3+(n===2?1:n===3?2:0)},vy=e=>{const t=e.length;let n=0;return t>0&&e.charCodeAt(t-1)===61&&(n++,t>1&&e.charCodeAt(t-2)===61&&n++),Math.floor((t-n)*3/4)},wy=e=>{const t=e.length;let n=0,r=0,s=!1;for(let l=0;l<t;l++){let o=e.charCodeAt(l);if(o===37&&Df(e,l,t)&&(o=rd(e.charCodeAt(l+1))*16+rd(e.charCodeAt(l+2)),l+=2),!xy(o)){if(o===61){r++;continue}if(!gy(o)||r>0){s=!0;continue}n++}}return s||r>2||r>0&&(n+r)%4!==0||n%4===1?vy(e):yy(n)},by=(e,t)=>{if(!e||typeof e!="string"||!e.startsWith("data:"))return 0;const n=e.indexOf(",");if(n<0)return 0;const r=e.slice(5,n),s=e.slice(n+1);if(/;base64/i.test(r))return t(s);let o=0;for(let a=0,c=s.length;a<c;a++){const d=s.charCodeAt(a);if(d===37&&Df(s,a,c))o+=1,a+=2;else if(d<128)o+=1;else if(d<2048)o+=2;else if(d>=55296&&d<=56319&&a+1<c){const h=s.charCodeAt(a+1);h>=56320&&h<=57343?(o+=4,a++):o+=3}else o+=3}return o};function Sy(e){const t=typeof e=="string"?e.indexOf("#"):-1;return by(t===-1?e:e.slice(0,t),wy)}const wa="1.20.0",sd=64*1024,jy={cache:"default",redirect:"follow",referrer:"about:client",referrerPolicy:"",mode:"cors",integrity:"",keepalive:!1,priority:"auto",window:null},{isFunction:Ss}=x,ky=e=>encodeURIComponent(e).replace(/%([0-9A-F]{2})/gi,(t,n)=>String.fromCharCode(parseInt(n,16))),ld=e=>{if(!x.isString(e))return e;try{return decodeURIComponent(e)}catch{return e}},od=(e,...t)=>{try{return!!e(...t)}catch{return!1}},Cy=e=>{const t=e.indexOf("://");let n=e;return t!==-1&&(n=n.slice(t+3)),n.includes("@")||n.includes(":")},Ey=e=>{const t=x.global!==void 0&&x.global!==null?x.global:globalThis,{ReadableStream:n,TextEncoder:r}=t;e=x.merge.call({skipUndefined:!0},{Request:t.Request,Response:t.Response},e);const{fetch:s,Request:l,Response:o}=e,a=s?Ss(s):typeof fetch=="function",c=Ss(l),d=Ss(o);if(!a)return!1;const h=a&&Ss(n),p=a&&(typeof r=="function"?(u=>f=>u.encode(f))(new r):async u=>new Uint8Array(await new l(u).arrayBuffer())),g=c&&h&&od(()=>{let u=!1;const f=new l(de.origin,{body:new n,method:"POST",get duplex(){return u=!0,"half"}}),m=f.headers.has("Content-Type");return f.body!=null&&f.body.cancel(),u&&!m}),b=d&&h&&od(()=>x.isReadableStream(new o("").body)),y={stream:b&&(u=>u.body)};a&&["text","arrayBuffer","blob","formData","stream"].forEach(u=>{!y[u]&&(y[u]=(f,m)=>{let w=f&&f[u];if(w)return w.call(f);throw new N(`Response type '${u}' is not supported`,N.ERR_NOT_SUPPORT,m)})});const S=async u=>{if(u==null)return 0;if(x.isBlob(u))return u.size;if(x.isSpecCompliantForm(u))return(await new l(de.origin,{method:"POST",body:u}).arrayBuffer()).byteLength;if(x.isArrayBufferView(u)||x.isArrayBuffer(u))return u.byteLength;if(x.isURLSearchParams(u)&&(u=u+""),x.isString(u))return(await p(u)).byteLength},C=async(u,f)=>{const m=x.toFiniteNumber(u.getContentLength());return m??S(f)};return async u=>{let{url:f,method:m,data:w,signal:k,cancelToken:P,timeout:E,onDownloadProgress:_,onUploadProgress:V,responseType:A,headers:le,withCredentials:rt="same-origin",fetchOptions:ut,maxContentLength:Ae,maxBodyLength:vn,maxRedirects:tr}=Lf(u);const pt=x.isNumber(Ae)&&Ae>-1,R=x.isNumber(vn)&&vn>-1,O=z=>x.hasOwnProp(u,z)?u[z]:void 0;let D=s||fetch;A=A?(A+"").toLowerCase():"text";let W=py([k,P&&P.toAbortSignal()],E),B=null;const Fe=W&&W.unsubscribe&&(()=>{W.unsubscribe()});let Ee,ft=null;const st=()=>new N("Request body larger than maxBodyLength limit",N.ERR_BAD_REQUEST,u,B);try{let z;const Ue=O("auth");if(Ue){const L=x.getSafeProp(Ue,"username")||"",me=x.getSafeProp(Ue,"password")||"";z={username:L,password:me}}if(Cy(f)){const L=new URL(f,de.origin);if(!z&&(L.username||L.password)){const me=ld(L.username),Nt=ld(L.password);z={username:me,password:Nt}}(L.username||L.password)&&(L.username="",L.password="",f=L.href)}if(z&&(le.delete("authorization"),le.set("Authorization","Basic "+btoa(ky((z.username||"")+":"+(z.password||""))))),pt&&typeof f=="string"&&f.startsWith("data:")&&Sy(f)>Ae)throw new N("maxContentLength size of "+Ae+" exceeded",N.ERR_BAD_RESPONSE,u,B);if(R&&m!=="get"&&m!=="head"){const L=await S(w);if(typeof L=="number"&&isFinite(L)&&(Ee=L,L>vn))throw st()}const ss=R&&(x.isReadableStream(w)||x.isStream(w)),Sa=(L,me,Nt)=>td(L,sd,Xt=>{if(R&&Xt>vn)throw ft=st();me&&me(Xt)},Nt);if(g&&m!=="get"&&m!=="head"&&(V||ss)){if(Ee=Ee??await C(le,w),Ee!==0||ss){let L=new l(f,{method:"POST",body:w,duplex:"half"}),me;if(x.isFormData(w)&&(me=L.headers.get("content-type"))&&le.setContentType(me),L.body){const[Nt,Xt]=V&&Yc(Ee,pl(Xc(V)))||[];w=Sa(L.body,Nt,Xt)}}}else if(ss&&!c&&h&&m!=="get"&&m!=="head")w=Sa(w);else if(ss&&c&&!g&&m!=="get"&&m!=="head")throw new N("Stream request bodies are not supported by the current fetch implementation",N.ERR_NOT_SUPPORT,u,B);x.isString(rt)||(rt=rt?"include":"omit");const Hf=c&&"credentials"in l.prototype;if(x.isFormData(w)){const L=le.getContentType();L&&/^multipart\/form-data/i.test(L)&&!/boundary=/i.test(L)&&le.delete("content-type")}le.set("User-Agent","axios/"+wa,!1);const Ge=ut==null?ut:Object.assign(Object.create(null),ut);Ge&&(delete Ge.body,delete Ge.headers,delete Ge.method,delete Ge.signal,delete Ge.duplex,delete Ge.credentials);const ht=Object.assign(Object.create(null),Ge,{signal:W,method:m.toUpperCase(),headers:bf(le.normalize()),body:w,duplex:"half",credentials:Hf?rt:void 0});c&&(x.forEach(jy,(L,me)=>{ht[me]===void 0&&(ht[me]=L)}),ht.signal===void 0&&(ht.signal=null),ht.body===void 0&&(ht.body=null)),tr===0&&(ht.redirect="manual",Ge&&(Ge.redirect="manual")),B=c&&new l(f,ht);let mt=await(c?D(B,Ge):D(f,ht));const ja=we.from(mt.headers);if(pt){const L=x.toFiniteNumber(ja.getContentLength());if(L!=null&&L>Ae)throw new N("maxContentLength size of "+Ae+" exceeded",N.ERR_BAD_RESPONSE,u,B)}const Ll=b&&(A==="stream"||A==="response");if(b&&mt.body&&(_||pt||Ll&&Fe)){const L={};["status","statusText","headers"].forEach(nr=>{L[nr]=mt[nr]});const me=x.toFiniteNumber(ja.getContentLength()),[Nt,Xt]=_&&Yc(me,pl(Xc(_),!0))||[];let ka=0;const $f=nr=>{if(pt&&(ka=nr,ka>Ae))throw new N("maxContentLength size of "+Ae+" exceeded",N.ERR_BAD_RESPONSE,u,B);Nt&&Nt(nr)};mt=new o(td(mt.body,sd,$f,()=>{Xt&&Xt(),Fe&&Fe()}),L)}A=A||"text";let gt=await y[x.findKey(y,A)||"text"](mt,u);if(pt&&!b&&!Ll){let L;if(gt!=null&&(typeof gt.byteLength=="number"?L=gt.byteLength:typeof gt.size=="number"?L=gt.size:typeof gt=="string"&&(L=typeof r=="function"?new r().encode(gt).byteLength:gt.length)),typeof L=="number"&&L>Ae)throw new N("maxContentLength size of "+Ae+" exceeded",N.ERR_BAD_RESPONSE,u,B)}return!Ll&&Fe&&Fe(),await new Promise((L,me)=>{Mf(L,me,{data:gt,headers:we.from(mt.headers),status:mt.status,statusText:mt.statusText,config:u,request:B})})}catch(z){if(Fe&&Fe(),W&&W.aborted&&W.reason instanceof N){const Ue=W.reason;throw Ue.config=u,B&&(Ue.request=B),z!==Ue&&Object.defineProperty(Ue,"cause",{__proto__:null,value:z,writable:!0,enumerable:!1,configurable:!0}),Ue}if(ft)throw B&&!ft.request&&(ft.request=B),ft;if(z instanceof N)throw B&&!z.request&&(z.request=B),z;if(z&&z.name==="TypeError"&&/Load failed|fetch/i.test(z.message)){const Ue=new N("Network Error",N.ERR_NETWORK,u,B,z&&z.response);throw Object.defineProperty(Ue,"cause",{__proto__:null,value:z.cause||z,writable:!0,enumerable:!1,configurable:!0}),Ue}throw N.from(z,z&&z.code,u,B,z&&z.response)}}},Ny=new Map,If=e=>{let t=e&&e.env||{};const{fetch:n,Request:r,Response:s}=t,l=[r,s,n];let o=l.length,a=o,c,d,h=Ny;for(;a--;)c=l[a],d=h.get(c),d===void 0&&h.set(c,d=a?new Map:Ey(t)),h=d;return d};If();const ba={http:O0,xhr:uy,fetch:{get:If}};x.forEach(ba,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{__proto__:null,value:t})}catch{}Object.defineProperty(e,"adapterName",{__proto__:null,value:t})}});const id=e=>`- ${e}`,Py=e=>x.isFunction(e)||e===null||e===!1;function Ry(e,t){e=x.isArray(e)?e:[e];const{length:n}=e;let r,s;const l={};for(let o=0;o<n;o++){r=e[o];let a;if(s=r,!Py(r)&&(s=ba[(a=String(r)).toLowerCase()],s===void 0))throw new N(`Unknown adapter '${a}'`);if(s&&(x.isFunction(s)||(s=s.get(t))))break;l[a||"#"+o]=s}if(!s){const o=Object.entries(l).map(([c,d])=>`adapter ${c} `+(d===!1?"is not supported by the environment":"is not available in the build"));let a=n?o.length>1?`since :
`+o.map(id).join(`
`):" "+id(o[0]):"as no adapter specified";throw new N("There is no suitable adapter to dispatch the request "+a,N.ERR_NOT_SUPPORT)}return s}const Bf={getAdapter:Ry,adapters:ba};function mo(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new rs(null,e)}function go(e){const t=x.toSafeFlatObject(e);return mo(t),t.headers=we.from(x.getSafeProp(t,"headers")),t.data=fo.call(t,t.transformRequest),["post","put","patch"].indexOf(t.method)!==-1&&t.headers.setContentType("application/x-www-form-urlencoded",!1),Bf.getAdapter(t.adapter||ns.adapter,t)(t).then(function(s){mo(t),t.response=s;try{s.data=fo.call(t,t.transformResponse,s)}finally{delete t.response}return s.headers=we.from(s.headers),s},function(s){if(!_f(s)&&(mo(t),s&&s.response)){t.response=s.response;try{s.response.data=fo.call(t,t.transformResponse,s.response)}finally{delete t.response}s.response.headers=we.from(s.response.headers)}return Promise.reject(s)})}const Al={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{Al[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const ad={};Al.transitional=function(t,n,r){function s(l,o){return"[Axios v"+wa+"] Transitional option '"+l+"'"+o+(r?". "+r:"")}return(l,o,a)=>{if(t===!1)throw new N(s(o," has been removed"+(n?" in "+n:"")),N.ERR_DEPRECATED);return n&&!ad[o]&&(ad[o]=!0,console.warn(s(o," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(l,o,a):!0}};Al.spelling=function(t){return(n,r)=>(console.warn(`${r} is likely a misspelling of ${t}`),!0)};function Ty(e,t,n){if(typeof e!="object"||e===null)throw new N("options must be an object",N.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let s=r.length;for(;s-- >0;){const l=r[s],o=Object.prototype.hasOwnProperty.call(t,l)?t[l]:void 0;if(o){const a=e[l],c=a===void 0||o(a,l,e);if(c!==!0)throw new N("option "+l+" must be "+c,N.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new N("Unknown option "+l,N.ERR_BAD_OPTION)}}const Bs={assertOptions:Ty,validators:Al},ye=Bs.validators;let an=class{constructor(t){this.defaults=t||{},this.interceptors={request:new Gc,response:new Gc}}async request(t,n){try{return await this._request(t,n)}catch(r){if(r instanceof Error)try{let s={};Error.captureStackTrace?Error.captureStackTrace(s):s=new Error;const l=s.stack;let o="";if(typeof l=="string"){const a=l.indexOf(`
`);o=a===-1?"":l.slice(a+1)}if(!r.stack)r.stack=o;else if(o){const a=o.indexOf(`
`),c=a===-1?-1:o.indexOf(`
`,a+1),d=c===-1?"":o.slice(c+1);String(r.stack).endsWith(d)||(r.stack+=`
`+o)}}catch{}throw r}}_request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=gn(this.defaults,n);const{transitional:r,paramsSerializer:s,headers:l}=n;r!==void 0&&Bs.assertOptions(r,{silentJSONParsing:ye.transitional(ye.boolean),forcedJSONParsing:ye.transitional(ye.boolean),clarifyTimeoutError:ye.transitional(ye.boolean),legacyInterceptorReqResOrdering:ye.transitional(ye.boolean),advertiseZstdAcceptEncoding:ye.transitional(ye.boolean),validateStatusUndefinedResolves:ye.transitional(ye.boolean)},!1),s!=null&&(x.isFunction(s)?n.paramsSerializer={serialize:s}:Bs.assertOptions(s,{encode:ye.function,serialize:ye.function},!0)),n.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?n.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:n.allowAbsoluteUrls=!0),Bs.assertOptions(n,{baseUrl:ye.spelling("baseURL"),withXsrfToken:ye.spelling("withXSRFToken")},!0),n.method=(x.getSafeProp(n,"method")||x.getSafeProp(this.defaults,"method")||"get").toLowerCase();let o=l&&x.merge(l.common,l[n.method]);l&&x.forEach(Tf.concat("common"),y=>{delete l[y]}),n.headers=we.concat(o,l);const a=[];let c=!0;this.interceptors.request.forEach(function(S){if(typeof S.runWhen=="function"&&S.runWhen(n)===!1)return;c=c&&S.synchronous;const C=n.transitional||ya;C&&C.legacyInterceptorReqResOrdering?a.unshift(S.fulfilled,S.rejected):a.push(S.fulfilled,S.rejected)});const d=[];this.interceptors.response.forEach(function(S){d.push(S.fulfilled,S.rejected)});let h,p=0,g;if(!c){const y=[go.bind(this),void 0];for(y.unshift(...a),y.push(...d),g=y.length,h=Promise.resolve(n);p<g;)h=h.then(y[p++],y[p++]);return h}g=a.length;let b=n;for(;p<g;){const y=a[p++],S=a[p++];try{b=y?y(b):b}catch(C){if(!S){h=Promise.reject(C);break}try{const u=S.call(this,C);x.isThenable(u)&&(h=Promise.resolve(u).then(()=>go.call(this,b)))}catch(u){h=Promise.reject(u)}break}}if(!h)try{h=go.call(this,b)}catch(y){h=Promise.reject(y)}for(p=0,g=d.length;p<g;)h=h.then(d[p++],d[p++]);return h}getUri(t){t=gn(this.defaults,t);const n=Of(t.baseURL,t.url,t.allowAbsoluteUrls,t);return Ef(n,t.params,t.paramsSerializer)}};x.forEach(["delete","get","head","options"],function(t){an.prototype[t]=function(n,r){return this.request(gn(r||{},{method:t,url:n,data:r&&x.hasOwnProp(r,"data")?r.data:void 0}))}});x.forEach(["post","put","patch","query"],function(t){function n(r){return function(l,o,a){return this.request(gn(a||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:l,data:o}))}}an.prototype[t]=n(),t!=="query"&&(an.prototype[t+"Form"]=n(!0))});let _y=class zf{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(l){n=l});const r=this;this.promise.then(s=>{if(!r._listeners)return;let l=r._listeners.length;for(;l-- >0;)r._listeners[l](s);r._listeners=null}),this.promise.then=s=>{let l;const o=new Promise(a=>{r.subscribe(a),l=a}).then(s);return o.cancel=function(){r.unsubscribe(l)},o},t(function(l,o,a){r.reason||(r.reason=new rs(l,o,a),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}toAbortSignal(){const t=new AbortController,n=r=>{t.abort(r)};return this.subscribe(n),t.signal.unsubscribe=()=>this.unsubscribe(n),t.signal}static source(){let t;return{token:new zf(function(s){t=s}),cancel:t}}};function My(e){return function(n){return e.apply(null,n)}}function Ay(e){return x.isObject(e)&&e.isAxiosError===!0}const zs={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,ContentTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,UnprocessableContent:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511,WebServerReturnsAnUnknownError:520,WebServerIsDown:521,ConnectionTimedOut:522,OriginIsUnreachable:523,TimeoutOccurred:524,SslHandshakeFailed:525,InvalidSslCertificate:526};Object.entries(zs).forEach(([e,t])=>{zs[t]===void 0&&(zs[t]=e)});function Ff(e){const t=new an(e),n=df(an.prototype.request,t);return x.extend(n,an.prototype,t,{allOwnKeys:!0}),x.extend(n,t,null,{allOwnKeys:!0}),n.create=function(s){return Ff(gn(e,s))},n}const se=Ff(ns);se.Axios=an;se.CanceledError=rs;se.CancelToken=_y;se.isCancel=_f;se.VERSION=wa;se.toFormData=Ml;se.AxiosError=N;se.Cancel=se.CanceledError;se.all=function(t){return Promise.all(t)};se.spread=My;se.isAxiosError=Ay;se.mergeConfig=gn;se.AxiosHeaders=we;se.formToJSON=e=>Rf(x.isHTMLForm(e)?new FormData(e):e);se.getAdapter=Bf.getAdapter;se.HttpStatusCode=zs;se.default=se;const{Axios:Jv,AxiosError:Yv,CanceledError:Xv,isCancel:Zv,CancelToken:ew,VERSION:tw,all:nw,Cancel:rw,isAxiosError:sw,spread:lw,toFormData:ow,AxiosHeaders:iw,HttpStatusCode:aw,formToJSON:cw,getAdapter:dw,mergeConfig:uw,create:pw}=se,Oy=`${"https://popularbackend.vercel.app".replace(/\/$/,"")}/api`,ne=se.create({baseURL:Oy});ne.interceptors.request.use(e=>{const t=localStorage.getItem("pmc_token");return t&&(e.headers.Authorization=`Bearer ${t}`),e});const cd="https://popularbackend.vercel.app".replace(/\/$/,""),fl=e=>e?e.startsWith("http")?e:cd?`${cd}/uploads/${e}`:`/uploads/${e}`:"https://via.placeholder.com/300x400?text=PMC",Ly={anatomy:"Anatomy",physiology:"Physiology",biochymistry:"Biochemistry",medicine:"Community Medicine",forensic:"Forensic Medicine",pathology:"Pathology",microbiology:"Microbiology",pharmacology:"Pharmacology",allied:"Medicine & Allied",paediatrics:"Paediatrics",surgery:"Surgery & Allied",orthopaedics:"Orthopaedics",ophthalmology:"Ophthalmology",gynae:"Gynae & Obst.",otorhinolaryngology:"Otorhinolaryngology",anaesthesiology:"Anaesthesiology"};function Dy(){const{slug:e}=ha(),t=Ly[e]||e,[n,r]=v.useState([]),[s,l]=v.useState([]);v.useEffect(()=>{ne.get("/doctors/seniors",{params:{department:t}}).then(a=>r(a.data)).catch(()=>{}),ne.get("/doctors/lecturers",{params:{department:t}}).then(a=>l(a.data)).catch(()=>{})},[t]);const o=Math.max(n.length,s.length,1);return i.jsxs("div",{children:[i.jsx(H,{}),i.jsx("section",{className:"relative bg-gray-50 py-20 px-6 md:px-12 overflow-hidden",children:i.jsxs("div",{className:"max-w-7xl mx-auto",children:[i.jsx("div",{className:"inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-blue-600 uppercase bg-blue-50 rounded-full",children:"Medical Excellence"}),i.jsxs("h1",{className:"text-4xl md:text-5xl text-slate-900 leading-tight mb-8",children:["DEPARTMENT OF ",t.toUpperCase()]}),i.jsxs("p",{className:"text-lg text-slate-600 leading-relaxed max-w-3xl",children:["Faculty list for the Department of ",t," at Popular Medical College. Senior faculty (left) and Lecturers (right) — loaded live from MongoDB (migrated from MySQL `doctor` table)."]})]})}),i.jsx("div",{className:"max-w-7xl mx-auto py-10 px-4 md:px-6",children:i.jsx("div",{className:"w-full overflow-hidden shadow-md rounded-sm border border-gray-200 bg-white",children:i.jsx("div",{className:"overflow-x-auto",children:i.jsxs("table",{className:"w-full min-w-[600px] border-collapse",children:[i.jsxs("thead",{children:[i.jsx("tr",{className:"bg-gray-50 border-b border-gray-200",children:i.jsxs("th",{colSpan:"4",className:"px-6 py-4 text-sm font-bold uppercase tracking-widest text-blue-900",children:["Department of ",t," — Faculty"]})}),i.jsxs("tr",{className:"bg-gray-50 border-b border-gray-200",children:[i.jsx("th",{className:"px-6 py-4 text-xs font-bold uppercase text-blue-900 border-r w-1/4",children:"First row"}),i.jsx("th",{className:"px-6 py-4 text-xs font-bold uppercase text-blue-900 border-r w-1/4",children:"Title"}),i.jsx("th",{className:"px-6 py-4 text-xs font-bold uppercase text-blue-900 border-r w-1/4",children:"Second row (Lecturers)"}),i.jsx("th",{className:"px-6 py-4 text-xs font-bold uppercase text-blue-900 w-1/4",children:"Title"})]})]}),i.jsx("tbody",{className:"text-sm text-gray-600",children:Array.from({length:o}).map((a,c)=>{var d,h;return i.jsxs("tr",{className:"border-b border-gray-100 hover:bg-gray-50",children:[i.jsx("td",{className:"px-6 py-4 border-r",children:n[c]&&i.jsxs(U,{to:`/doctor/${n[c]._id}`,className:"hover:text-blue-600 flex items-center gap-3",children:[i.jsx("img",{src:fl(n[c].image),className:"w-10 h-10 rounded-full object-cover",alt:""}),n[c].name]})}),i.jsx("td",{className:"px-6 py-4 border-r",children:(d=n[c])==null?void 0:d.title}),i.jsx("td",{className:"px-6 py-4 italic border-r",children:s[c]&&i.jsx(U,{to:`/doctor/${s[c]._id}`,className:"hover:text-blue-600",children:s[c].name})}),i.jsx("td",{className:"px-6 py-4 italic",children:(h=s[c])==null?void 0:h.title})]},c)})})]})})})}),i.jsx($,{})]})}function Iy(){const{id:e}=ha(),[t,n]=v.useState(null);if(v.useEffect(()=>{ne.get(`/doctors/${e}`).then(l=>n(l.data)).catch(()=>n(!1))},[e]),t===!1)return i.jsx("div",{className:"text-center py-20 text-2xl",children:"Doctor profile not found."});if(!t)return i.jsx("div",{className:"text-center py-20",children:"Loading…"});const{doctor:r,colleagues:s}=t;return i.jsxs("div",{className:"bg-slate-50",children:[i.jsx(H,{}),i.jsxs("section",{className:"max-w-6xl mx-auto py-16 px-6",children:[i.jsxs("div",{className:"bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden flex flex-col md:flex-row",children:[i.jsx("div",{className:"md:w-1/3 bg-slate-50 p-10 flex items-center justify-center",children:i.jsx("img",{src:fl(r.image),alt:r.name,className:"w-64 h-80 object-cover rounded-xl shadow-lg border-4 border-white"})}),i.jsxs("div",{className:"md:w-2/3 p-10 md:p-16 flex flex-col justify-center",children:[i.jsxs("div",{className:"inline-block px-3 py-1 bg-blue-50 text-blue-600 text-xs font-bold tracking-widest uppercase rounded-full mb-4 w-fit",children:[r.department," Department"]}),i.jsxs("h1",{className:"text-4xl text-slate-900 mb-2",children:[r.title," ",r.name]}),i.jsx("p",{className:"text-xl text-blue-800 font-light mb-2",children:r.designation}),i.jsx("p",{className:"text-xl text-blue-800 font-light mb-8",children:r.type}),i.jsxs("div",{className:"border-l-4 border-blue-200 pl-6 py-2 italic text-lg text-slate-600 leading-relaxed",children:['"',r.speech,'"']})]})]}),(s==null?void 0:s.length)>0&&i.jsxs("div",{className:"mt-10",children:[i.jsxs("h2",{className:"text-2xl font-bold mb-4",children:["Colleagues in ",r.department]}),i.jsx("div",{className:"grid sm:grid-cols-2 lg:grid-cols-4 gap-4",children:s.map(l=>i.jsxs(U,{to:`/doctor/${l._id}`,className:"bg-white rounded-xl p-4 shadow-sm border hover:shadow-md",children:[i.jsx("img",{src:fl(l.image),className:"w-full h-48 object-cover rounded-lg mb-3",alt:""}),i.jsxs("p",{className:"font-bold",children:[l.title," ",l.name]}),i.jsx("p",{className:"text-sm text-slate-500",children:l.designation})]},l._id))})]})]}),i.jsx($,{})]})}function dd(){const[e,t]=v.useState([]);return v.useEffect(()=>{ne.get("/committees").then(n=>t(n.data)).catch(()=>{})},[]),i.jsxs("div",{className:"bg-gray-50",children:[i.jsx(H,{}),i.jsxs("main",{className:"py-12 px-4",children:[i.jsxs("div",{className:"max-w-7xl mx-auto text-center mb-10",children:[i.jsx("h1",{className:"text-4xl font-bold text-gray-800",children:"Our Committees"}),i.jsx("div",{className:"h-1 w-20 bg-[#00984a] mx-auto mt-4"})]}),e.map(n=>i.jsx("div",{className:"max-w-7xl mx-auto px-4 py-6",children:i.jsx("div",{className:"bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden",children:i.jsxs("table",{className:"min-w-full divide-y divide-gray-200",children:[i.jsxs("thead",{className:"bg-gray-50",children:[i.jsx("tr",{children:i.jsx("th",{colSpan:"2",className:"px-6 py-5 text-center text-xl font-bold text-slate-900 uppercase tracking-widest border-b border-green-700 whitespace-pre-line",children:n.name})}),i.jsxs("tr",{className:"bg-gray-100",children:[i.jsx("th",{className:"px-4 py-3 text-left text-xs font-bold text-gray-500 uppercase w-1/3",children:"Role"}),i.jsx("th",{className:"px-4 py-3 text-left text-xs font-bold text-gray-500 uppercase",children:"Personnel"})]})]}),i.jsxs("tbody",{className:"divide-y divide-gray-200",children:[i.jsxs("tr",{children:[i.jsx("td",{className:"px-4 py-4 text-xs font-bold uppercase",children:"Patron"}),i.jsx("td",{className:"px-4 py-4 text-sm italic whitespace-pre-line",children:n.patron})]}),i.jsxs("tr",{children:[i.jsx("td",{className:"px-4 py-4 text-xs font-bold uppercase",children:"Chairman"}),i.jsx("td",{className:"px-4 py-4 text-sm font-semibold whitespace-pre-line",children:n.chairman})]}),i.jsxs("tr",{children:[i.jsx("td",{className:"px-4 py-4 text-xs font-bold uppercase",children:"Members"}),i.jsx("td",{className:"px-4 py-4 text-sm whitespace-pre-line",children:n.member})]}),i.jsxs("tr",{children:[i.jsx("td",{className:"px-4 py-4 text-xs font-bold uppercase",children:"Secretary"}),i.jsx("td",{className:"px-4 py-4 text-sm whitespace-pre-line",children:n.secretary})]})]})]})})},n._id))]}),i.jsx($,{})]})}const Uf=v.createContext(null),Ol=()=>v.useContext(Uf);function By({children:e}){const[t,n]=v.useState(null),[r,s]=v.useState(!0);v.useEffect(()=>{if(!localStorage.getItem("pmc_token")){s(!1);return}ne.get("/auth/me").then(c=>n(c.data)).catch(()=>localStorage.removeItem("pmc_token")).finally(()=>s(!1))},[]);const l=async(a,c)=>{const d=await ne.post("/auth/login",{email:a,password:c});localStorage.setItem("pmc_token",d.data.token),n(d.data.user)},o=()=>{localStorage.removeItem("pmc_token"),n(null)};return i.jsx(Uf.Provider,{value:{user:t,login:l,logout:o,loading:r},children:e})}function zy({children:e}){const{user:t,loading:n}=Ol();return n?i.jsx("div",{className:"p-10 text-center",children:"Loading…"}):t?e:i.jsx(cf,{to:"/admin/login",replace:!0})}function Fy(){const[e,t]=v.useState("sakib@gmail.com"),[n,r]=v.useState(""),[s,l]=v.useState(""),{login:o}=Ol(),a=Zr(),c=async d=>{var h,p;d.preventDefault(),l("");try{await o(e,n),a("/admin")}catch(g){l(((p=(h=g.response)==null?void 0:h.data)==null?void 0:p.message)||"Login failed")}};return i.jsx("div",{className:"min-h-screen flex items-center justify-center bg-gray-100 p-4",children:i.jsxs("div",{className:"max-w-md w-full bg-white rounded shadow-xl overflow-hidden border border-gray-200",children:[i.jsxs("div",{className:"bg-[#00984a] p-8 text-center",children:[i.jsx("div",{className:"inline-flex h-16 w-16 bg-white rounded-full items-center justify-center text-[#00984a] text-3xl font-bold mb-4",children:"P"}),i.jsx("h2",{className:"text-3xl font-bold text-white uppercase",children:"Log In"}),i.jsx("p",{className:"text-green-100 text-sm mt-1",children:"Popular Medical College Management"})]}),i.jsxs("form",{onSubmit:c,className:"p-8 space-y-6",children:[s&&i.jsx("div",{className:"bg-red-50 text-red-600 p-3 rounded text-sm",children:s}),i.jsxs("div",{children:[i.jsx("label",{className:"block text-sm font-semibold mb-1",children:"Email Address"}),i.jsx("input",{value:e,onChange:d=>t(d.target.value),required:!0,className:"w-full px-4 py-3 border rounded-lg bg-gray-50 outline-none focus:ring-2 focus:ring-[#00984a]"})]}),i.jsxs("div",{children:[i.jsx("label",{className:"block text-sm font-semibold mb-1",children:"Password"}),i.jsx("input",{type:"password",value:n,onChange:d=>r(d.target.value),required:!0,placeholder:"••••••••",className:"w-full px-4 py-3 border rounded-lg bg-gray-50 outline-none focus:ring-2 focus:ring-[#00984a]"})]}),i.jsx("button",{className:"w-full bg-[#00984a] hover:bg-[#007a3b] text-white font-bold py-3 rounded-lg",children:"LOGIN"}),i.jsx(U,{to:"/",className:"block text-center text-sm text-gray-500",children:"← Back to website"}),i.jsx("p",{className:"text-xs text-gray-400 text-center",children:"Default: sakib@gmail.com / 111111"})]})]})})}const Uy=[["/admin","Dashboard","fa-chart-line"],["/admin/doctors","Doctors","fa-user-md"],["/admin/departments","Departments","fa-building"],["/admin/types","Types","fa-tags"],["/admin/titles","Titles","fa-heading"],["/admin/committees","Committees","fa-users"],["/admin/profile","My Profile","fa-user-circle"]];function Hy(){const{user:e,logout:t}=Ol(),n=Zr(),r=Xn();return i.jsxs("div",{className:"flex h-screen overflow-hidden bg-gray-100",children:[i.jsxs("aside",{className:"w-64 bg-[#00984a] text-white flex-col shadow-xl hidden md:flex shrink-0",children:[i.jsxs("div",{className:"p-6 text-2xl font-bold border-b border-green-700",children:[i.jsx("i",{className:"fas fa-hospital-user mr-2"}),"PMC"]}),i.jsxs("nav",{className:"flex-grow p-4 space-y-1",children:[Uy.map(([s,l,o])=>i.jsxs(U,{to:s,className:`flex items-center py-3 px-4 rounded-lg transition ${r.pathname===s?"bg-green-700":"hover:bg-green-700"}`,children:[i.jsx("i",{className:`fas ${o} mr-3 w-5`}),l]},s)),i.jsxs(U,{to:"/",className:"flex items-center py-3 px-4 rounded-lg hover:bg-green-700",children:[i.jsx("i",{className:"fas fa-globe mr-3 w-5"}),"View Site"]})]}),i.jsx("div",{className:"p-4 border-t border-green-700",children:i.jsxs("button",{onClick:()=>{t(),n("/admin/login")},className:"flex items-center py-3 px-4 text-red-200 hover:text-white w-full",children:[i.jsx("i",{className:"fas fa-sign-out-alt mr-3"})," Logout"]})})]}),i.jsxs("div",{className:"flex-1 flex flex-col min-w-0",children:[i.jsxs("header",{className:"bg-white border-b p-4 flex justify-between items-center px-4 md:px-8",children:[i.jsx("h2",{className:"font-semibold text-gray-800",children:"PMC Admin"}),i.jsxs("div",{className:"flex items-center gap-3",children:[i.jsx("p",{className:"text-sm font-medium",children:e==null?void 0:e.email}),i.jsx("img",{className:"h-9 w-9 rounded-full",src:`https://ui-avatars.com/api/?name=${e==null?void 0:e.email}&background=00984a&color=fff`,alt:""})]})]}),i.jsx("main",{className:"flex-1 overflow-y-auto p-4 md:p-8 bg-slate-50",children:i.jsx(dx,{})})]})]})}function $y(){const[e,t]=v.useState(null);v.useEffect(()=>{ne.get("/stats").then(r=>t(r.data)).catch(()=>{})},[]);const n=e?[["Doctors",e.doctors,"/admin/doctors","fa-user-md","bg-green-500"],["Departments",e.departments,"/admin/departments","fa-building","bg-blue-500"],["Types",e.types,"/admin/types","fa-tags","bg-purple-500"],["Titles",e.titles,"/admin/titles","fa-heading","bg-orange-500"],["Committees",e.committees,"/admin/committees","fa-users","bg-teal-500"]]:[];return i.jsxs("div",{className:"max-w-7xl mx-auto",children:[i.jsx("h1",{className:"text-2xl font-bold mb-6",children:"Dashboard"}),i.jsx("div",{className:"grid sm:grid-cols-2 lg:grid-cols-3 gap-6",children:n.map(([r,s,l,o,a])=>i.jsxs(U,{to:l,className:"bg-white rounded-2xl p-6 shadow-sm border hover:shadow-md flex items-center gap-4",children:[i.jsx("div",{className:`w-14 h-14 rounded-xl text-white flex items-center justify-center text-xl ${a}`,children:i.jsx("i",{className:`fas ${o}`})}),i.jsxs("div",{children:[i.jsx("p",{className:"text-3xl font-bold",children:s}),i.jsx("p",{className:"text-gray-500",children:r})]})]},r))})]})}function Wy(){const[e,t]=v.useState([]),n=()=>ne.get("/doctors?sort=-createdAt").then(s=>t(s.data));v.useEffect(()=>{n()},[]);const r=async s=>{confirm("Are you sure you want to remove this doctor?")&&(await ne.delete(`/doctors/${s}`),n())};return i.jsxs("div",{className:"max-w-7xl mx-auto",children:[i.jsxs("div",{className:"flex justify-between items-center mb-6",children:[i.jsx("h3",{className:"text-xl font-bold text-gray-700",children:"All Registered Specialists"}),i.jsxs(U,{to:"/admin/doctors/new",className:"bg-[#00984a] text-white px-5 py-2.5 rounded-xl font-semibold shadow-md hover:bg-green-700",children:[i.jsx("i",{className:"fas fa-plus mr-2 text-sm"})," Add New Doctor"]})]}),i.jsx("div",{className:"bg-white rounded-2xl shadow-sm border overflow-hidden",children:i.jsxs("div",{className:"overflow-x-auto",children:[i.jsxs("table",{className:"w-full text-left",children:[i.jsx("thead",{className:"bg-gray-50 border-b",children:i.jsx("tr",{children:["Doctor","Designation","Department","Title","Type","Speech","Actions"].map(s=>i.jsx("th",{className:"px-6 py-4 text-xs font-bold text-gray-500 uppercase text-center",children:s},s))})}),i.jsx("tbody",{className:"divide-y",children:e.map(s=>i.jsxs("tr",{className:"hover:bg-green-50/30",children:[i.jsx("td",{className:"px-6 py-4",children:i.jsxs("div",{className:"flex items-center gap-3",children:[i.jsx("img",{src:fl(s.image),className:"h-12 w-12 rounded-full object-cover border",alt:""}),i.jsxs("div",{children:[i.jsxs("p",{className:"text-sm font-bold",children:[s.title," ",s.name]}),i.jsxs("p",{className:"text-xs text-green-600",children:["ID: #",s._id.slice(-6)]})]})]})}),i.jsx("td",{className:"px-6 py-4 text-sm",children:s.designation}),i.jsx("td",{className:"px-6 py-4 text-sm",children:s.department}),i.jsx("td",{className:"px-6 py-4 text-sm",children:s.title}),i.jsx("td",{className:"px-6 py-4 text-sm",children:s.type}),i.jsx("td",{className:"px-6 py-4 text-sm max-w-[200px] truncate",children:s.speech}),i.jsx("td",{className:"px-6 py-4 text-center",children:i.jsxs("div",{className:"flex justify-center gap-2",children:[i.jsx(U,{to:`/admin/doctors/${s._id}`,className:"p-2 text-blue-600 hover:bg-blue-50 rounded-lg",children:i.jsx("i",{className:"fas fa-edit"})}),i.jsx("button",{onClick:()=>r(s._id),className:"p-2 text-red-600 hover:bg-red-50 rounded-lg",children:i.jsx("i",{className:"fas fa-trash-alt"})})]})})]},s._id))})]}),e.length===0&&i.jsxs("div",{className:"p-10 text-center text-gray-400",children:[i.jsx("i",{className:"fas fa-user-slash text-4xl mb-3"}),i.jsx("p",{children:"No doctors found."})]})]})})]})}function ud(){const{id:e}=ha(),t=!!e,n=Zr(),[r,s]=v.useState([]),[l,o]=v.useState([]),[a,c]=v.useState([]),[d,h]=v.useState({title:"",name:"",designation:"",department:"",type:"",speech:""}),[p,g]=v.useState(null);v.useEffect(()=>{ne.get("/titles").then(y=>s(y.data)).catch(()=>{}),ne.get("/departments").then(y=>o(y.data)).catch(()=>{}),ne.get("/types").then(y=>c(y.data)).catch(()=>{}),t&&ne.get(`/doctors/${e}`).then(y=>{const S=y.data.doctor||y.data;h({title:S.title||"",name:S.name||"",designation:S.designation||"",department:S.department||"",type:S.type||"",speech:S.speech||""})})},[e]);const b=async y=>{y.preventDefault();const S=new FormData;Object.entries(d).forEach(([C,u])=>S.append(C,u)),p&&S.append("image",p),t?await ne.put(`/doctors/${e}`,S,{headers:{"Content-Type":"multipart/form-data"}}):await ne.post("/doctors",S,{headers:{"Content-Type":"multipart/form-data"}}),n("/admin/doctors")};return i.jsxs("div",{className:"max-w-4xl mx-auto bg-white rounded-2xl shadow-sm border overflow-hidden",children:[i.jsx("div",{className:"bg-gradient-to-r from-[#00984a] to-green-500 px-6 py-8",children:i.jsx("h2",{className:"text-2xl font-bold text-white",children:t?"Edit Doctor":"Add New Doctor"})}),i.jsxs("form",{onSubmit:b,className:"p-6 md:p-10 space-y-6",children:[i.jsxs("div",{children:[i.jsx("label",{className:"font-bold text-sm uppercase",children:"Profile Image"}),i.jsx("input",{type:"file",accept:"image/*",onChange:y=>g(y.target.files[0]),className:"mt-2 block"})]}),i.jsxs("div",{className:"grid md:grid-cols-3 gap-4",children:[i.jsxs("div",{children:[i.jsx("label",{className:"font-bold text-sm uppercase",children:"Title"}),i.jsxs("select",{value:d.title,onChange:y=>h({...d,title:y.target.value}),required:!0,className:"w-full px-4 py-3 border rounded-xl bg-white",children:[i.jsx("option",{value:"",children:"Select"}),r.map(y=>i.jsx("option",{value:y.name,children:y.name},y._id))]})]}),i.jsxs("div",{className:"md:col-span-2",children:[i.jsx("label",{className:"font-bold text-sm uppercase",children:"Full Name"}),i.jsx("input",{value:d.name,onChange:y=>h({...d,name:y.target.value}),required:!0,className:"w-full px-4 py-3 border rounded-xl"})]})]}),i.jsxs("div",{className:"grid md:grid-cols-2 gap-4",children:[i.jsxs("div",{children:[i.jsx("label",{className:"font-bold text-sm uppercase",children:"Designation"}),i.jsx("input",{value:d.designation,onChange:y=>h({...d,designation:y.target.value}),required:!0,className:"w-full px-4 py-3 border rounded-xl"})]}),i.jsxs("div",{children:[i.jsx("label",{className:"font-bold text-sm uppercase",children:"Department"}),i.jsxs("select",{value:d.department,onChange:y=>h({...d,department:y.target.value}),required:!0,className:"w-full px-4 py-3 border rounded-xl bg-white",children:[i.jsx("option",{value:"",children:"Select"}),l.map(y=>i.jsx("option",{value:y.name,children:y.name},y._id))]})]})]}),i.jsxs("div",{children:[i.jsx("label",{className:"font-bold text-sm uppercase",children:"Type"}),i.jsxs("select",{value:d.type,onChange:y=>h({...d,type:y.target.value}),required:!0,className:"w-full px-4 py-3 border rounded-xl bg-white",children:[i.jsx("option",{value:"",children:"Select"}),a.map(y=>i.jsx("option",{value:y.name,children:y.name},y._id))]})]}),i.jsxs("div",{children:[i.jsx("label",{className:"font-bold text-sm uppercase",children:"Speech"}),i.jsx("textarea",{value:d.speech,onChange:y=>h({...d,speech:y.target.value}),rows:"4",className:"w-full px-4 py-3 border rounded-xl"})]}),i.jsx("button",{className:"px-12 py-4 bg-[#00984a] text-white font-bold rounded-xl",children:"Save Profile"})]})]})}function js({endpoint:e,label:t,fields:n}){const[r,s]=v.useState([]),[l,o]=v.useState({}),[a,c]=v.useState(null),d=()=>ne.get(e).then(p=>s(p.data));v.useEffect(()=>{d(),o({}),c(null)},[e]);const h=async p=>{p.preventDefault(),a?await ne.put(`${e}/${a}`,l):await ne.post(e,l),o({}),c(null),d()};return i.jsxs("div",{className:"max-w-5xl mx-auto grid lg:grid-cols-3 gap-6",children:[i.jsxs("form",{onSubmit:h,className:"bg-white rounded-2xl border p-6 space-y-4 h-fit",children:[i.jsx("h3",{className:"font-bold",children:a?`Edit ${t}`:`Add ${t}`}),n.map(p=>i.jsxs("div",{children:[i.jsx("label",{className:"text-sm font-semibold",children:p.label}),p.textarea?i.jsx("textarea",{value:l[p.key]||"",onChange:g=>o({...l,[p.key]:g.target.value}),rows:"3",className:"w-full border rounded-xl px-4 py-2"}):i.jsx("input",{value:l[p.key]||"",onChange:g=>o({...l,[p.key]:g.target.value}),required:!0,className:"w-full border rounded-xl px-4 py-2"})]},p.key)),i.jsx("button",{className:"w-full bg-[#00984a] text-white font-bold py-2.5 rounded-xl",children:a?"Update":"Save"}),a&&i.jsx("button",{type:"button",onClick:()=>{c(null),o({})},className:"w-full text-sm text-gray-500",children:"Cancel"})]}),i.jsxs("div",{className:"lg:col-span-2 bg-white rounded-2xl border overflow-hidden h-fit",children:[i.jsxs("table",{className:"w-full text-left",children:[i.jsx("thead",{className:"bg-gray-50 border-b",children:i.jsxs("tr",{children:[i.jsx("th",{className:"px-6 py-3 text-xs uppercase text-gray-500",children:"Name / Details"}),i.jsx("th",{className:"px-6 py-3 text-xs uppercase text-gray-500 text-right",children:"Actions"})]})}),i.jsx("tbody",{className:"divide-y",children:r.map(p=>i.jsxs("tr",{children:[i.jsxs("td",{className:"px-6 py-3 text-sm",children:[i.jsx("b",{children:p.name||p.title}),p.chairman&&i.jsxs("span",{className:"text-gray-500",children:[" — ",p.chairman]})]}),i.jsxs("td",{className:"px-6 py-3 text-right",children:[i.jsx("button",{onClick:()=>{c(p._id);const g={};n.forEach(b=>g[b.key]=p[b.key]||""),o(g)},className:"p-2 text-blue-600",children:i.jsx("i",{className:"fas fa-edit"})}),i.jsx("button",{onClick:async()=>{confirm("Delete?")&&(await ne.delete(`${e}/${p._id}`),d())},className:"p-2 text-red-600",children:i.jsx("i",{className:"fas fa-trash-alt"})})]})]},p._id))})]}),r.length===0&&i.jsx("p",{className:"p-8 text-center text-gray-400",children:"No records."})]})]})}function Vy(){const{user:e}=Ol(),[t,n]=v.useState((e==null?void 0:e.email)||""),[r,s]=v.useState(""),[l,o]=v.useState(""),a=async c=>{c.preventDefault(),await ne.put("/auth/profile",{email:t,...r?{password:r}:{}}),o("Profile updated")};return i.jsxs("form",{onSubmit:a,className:"max-w-md mx-auto bg-white rounded-2xl border p-8 space-y-4",children:[i.jsx("h3",{className:"font-bold text-lg",children:"Account Settings"}),l&&i.jsx("p",{className:"text-green-600 text-sm",children:l}),i.jsxs("div",{children:[i.jsx("label",{className:"text-sm font-semibold",children:"Email"}),i.jsx("input",{value:t,onChange:c=>n(c.target.value),className:"w-full border rounded-xl px-4 py-2"})]}),i.jsxs("div",{children:[i.jsx("label",{className:"text-sm font-semibold",children:"New password (optional)"}),i.jsx("input",{type:"password",value:r,onChange:c=>s(c.target.value),className:"w-full border rounded-xl px-4 py-2"})]}),i.jsx("button",{className:"w-full bg-[#00984a] text-white font-bold py-2.5 rounded-xl",children:"Save"})]})}const qy=`<div class="fixed inset-0 z-0 pointer-events-none">
  <img 
    src="/assets/blue.avif" 
    alt="Global Background" 
    class="w-full h-full object-cover object-center "
  />
  <div class="absolute inset-0 bg-white/40"></div>
</div> 
  



 
<section
class="relative h-[60vh]  bg-cover bg-center"
style="background-image: url('https://www.pmch-bd.org/images/PMC/slider/sld1.jpg');"
>
<!-- Dark Overlay -->

<!-- Content -->
<div class="relative max-w-7xl mx-auto px-6 h-full flex items-center">
  
  <!-- Content Box -->
  <div class="max-w-7xl mx-auto bg-gray-500/10 backdrop-blur-sm text-slate-900 p-8 md:p-10 rounded-xl shadow-lg">
    
    <h1 class="text-4xl md:text-5xl font-bold leading-tight">
        About Us
    </h1>
    <p class="mt-4 text-lg text-slate-900">
        "... Producing Doctors With a Difference ..."</p>
  </div>
</div>
</section>


<div class="bg-white min-h-screen z-30 text-slate-900">
    <div class="max-w-7xl mx-auto px-6 py-12 flex flex-col items-center">
      
      <div class="mb-8">
        <img src="/assets/PMCH.gif" alt="Popular Medical College Logo" class="h-32 w-auto object-contain" />
      </div>
  
      <h1 class="font-serif text-4xl md:text-5xl text-[#333] mb-8 text-center">
        Popular Medical College
      </h1>
  
      <div class="space-y-6 text-justify leading-relaxed text-[#555] text-lg">
        <p>
          <span class=" text-slate-900">Popular Group is the only State of the Art total health care provider of the country in private sector. Popular Medical College is a prestigious concern of Popular Group. The college was established in 2010. Though fairly new among the procession of medical colleges of the country Popular Medical College has already, attained an enviable status for its outstanding care in preparing the students for their MBBS course. Popular Medical College is placed in a prime location of Dhaka City. Most of the civic facilities are situated within 5 km. radius of the college. The college campus is easily connected by all types of transport and is within a very short distance from good dinning and shopping centers. The college has well-furnished residential hostel for the students situated near the college with dining hall and provisions for dining in groups. The academic building has adequate number of well-equipped air-conditioned lecture halls for large group teaching, conduction of examinations and social events. Every department has well equipped laboratory and or museum and adequate number of tutorials class rooms. All the class rooms are air conditioned and well furnished. The college has an air-conditioned library which is rich in the quality of books and supported by qualified & efficient staff to help the students. The college has built an additional reading room where students can study in extra hours. Designated teachers remain present in the library by rotation after college hours to help the students as and when required. The IT center is placed in the library to enable easy access to all.</p>
        
        
      </div>
  
      <div class="mt-12 w-full overflow-hidden rounded-sm shadow-lg">
        <img 
          src="https://www.pmch-bd.org/images/PMC/slider/sld2.jpg" 
          alt="College Building" 
          class="w-full h-auto object-cover"
        />
      </div>
      <div class="space-y-6 text-justify leading-relaxed text-[#555] text-lg">
        <p>
          <span class=" text-slate-900">The college has spacious air-conditioned male and female students’ common room for brief relaxation through indoor games within the compact and structured educational program. The college operates a modern cafeteria where the students can enjoy light and regular meals in between & after the classes with a range of food items, which is essentially balanced, nutritious, healthy and subsidized.</p>
        
       
      </div>
  
      <div class="mt-12 w-full overflow-hidden rounded-sm shadow-lg">
        <img 
          src="https://www.pmch-bd.org/images/PMC/about1.jpg" 
          alt="College Building" 
          class="w-full h-auto object-cover"
        />
      </div>
      
      <div class="space-y-6 text-justify leading-relaxed text-[#555] text-lg">
        <p>
          <span class=" text-slate-900">The Popular Medical College endeavors to ensure a state-of-the-art academic infrastructure providing ample learning facilities and boasts of a faculty who are highly reputed both nationally and internationally. The college boasts of a conglomeration of the finest academic staff. The departments are run by full time highly qualified, well experienced, dedicated and extremely efficient and skilled teachers. The college encourages friendly tutorship exhibiting professionalism in medical education and maintains the highest respect to discipline and rules. The program emphasizes on small group teaching, integrated teaching and problem-based learning in addition to the traditional lecture classes. Community based learning is an integral part of the academic program. The Popular Medical College thinks beyond the words that the curriculum dictates. The college not only undertakes to impart knowledge to its students but also stresses on character development and building moral values like human responsibilities, respect, care and appreciation to others to produce socially responsible persons of the community. The college encourages personal values to enable every student to develop confidence and self-awareness and the grit of determination to succeed. Medical professionals of today are facing many challenges. In an effort to inspire the young stars and also to try to develop professionalism amongst them the college organizes a program in the name of "Meet the Legend". Here the students and the interns have an opportunity to meet and interact with senior highly distinguished personalities of the profession and hear their noble words of wisdom.</p>
        
       
      </div>
    </div>
  </div>`,pd={"/biochymistry":"/dept/biochymistry","/medicine":"/dept/medicine","/forensic":"/dept/forensic","/pathology":"/dept/pathology","/microbiology":"/dept/microbiology","/pharmacology":"/dept/pharmacology","/allied":"/dept/allied","/paediatrics":"/dept/paediatrics","/surgery":"/dept/surgery","/orthopaedics":"/dept/orthopaedics","/ophthalmology":"/dept/ophthalmology","/gynae":"/dept/gynae","/otorhinolaryngology":"/dept/otorhinolaryngology","/anaesthesiology":"/dept/anaesthesiology","/physiology":"/dept/physiology","/anatomy":"/dept/anatomy","/committee":"/committees"};function Qy(){const e=v.useRef(null);return v.useEffect(()=>{e.current&&e.current.querySelectorAll("a").forEach(t=>{const n=t.getAttribute("href");n&&pd[n]&&t.setAttribute("href",pd[n])})},[]),i.jsxs("div",{children:[i.jsx(H,{}),i.jsx("div",{ref:e,dangerouslySetInnerHTML:{__html:qy}}),i.jsx($,{})]})}const Ky=`<section class="relative h-[50vh] min-h-[400px] flex items-center overflow-hidden">
    <div class="absolute inset-0 z-0">
        <img src="https://www.pmch-bd.org/images/yootheme/service-header.jpg" 
             alt="Background" 
             class="w-full h-full object-cover">
        <div class="absolute inset-0 bg-gradient-to-r from-white/90 via-white/40 to-transparent"></div>
    </div>

    <div class="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div class="max-w-2xl border-l-4 border-emerald-600 pl-6 md:pl-10">
            <span class="text-emerald-700 font-bold tracking-widest uppercase text-sm mb-2 block">Student Welfare</span>
            <h1 class="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight">
                Student Assistance Center
            </h1>
            <p class="mt-6 text-lg md:text-xl text-slate-700 leading-relaxed font-medium">
              The college has established a student assistance centre designed to help students in relation to their study, accommodation, food and other related matters and skill development.
            
              </p>
        </div>
    </div>
</section>

<div class="bg-slate-50 py-16 px-6">
    <div class="max-w-7xl mx-auto">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
            
            <div class="order-2 lg:order-1">
                <h2 class="text-3xl font-bold text-slate-800 mb-6">Holistic Academic Support</h2>
                <div class="space-y-4 text-slate-600 text-lg leading-relaxed">
                    <p>
                      The college has established a student assistance centre designed to help students in relation to their study, accommodation, food and other related matters and skill development. The centre provides special assistance to those who feel they are unable to keep pace with the academic course. The centre also aims at developing individual student confidence to excel in every sphere and emerge as a productive citizen ready to deliver their best academically, skillfully, spiritually and emotionally. No doubt this is a small step but a step nevertheless towards a brighter future for each and everyone of our student.
                      </p>
                    
                </div>
                
                <div class="mt-8 flex flex-wrap gap-4">
                    <div class="flex items-center bg-white px-4 py-2 rounded-lg shadow-sm border border-slate-200">
                        <span class="w-3 h-3 bg-emerald-500 rounded-full mr-2"></span>
                        <span class="text-sm font-bold text-slate-700">Academic Tutoring</span>
                    </div>
                    <div class="flex items-center bg-white px-4 py-2 rounded-lg shadow-sm border border-slate-200">
                        <span class="w-3 h-3 bg-emerald-500 rounded-full mr-2"></span>
                        <span class="text-sm font-bold text-slate-700">Personal Counseling</span>
                    </div>
                    <div class="flex items-center bg-white px-4 py-2 rounded-lg shadow-sm border border-slate-200">
                        <span class="w-3 h-3 bg-emerald-500 rounded-full mr-2"></span>
                        <span class="text-sm font-bold text-slate-700">Skill Development</span>
                    </div>
                </div>
            </div>

            <div class="order-1 lg:order-2 group">
                <div class="relative overflow-hidden rounded-2xl shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
                    <div class="absolute inset-0 border-[12px] border-white/20 z-10 pointer-events-none"></div>
                    
                    <img 
                        src="https://www.pmch-bd.org/images/PMC/SAC1.jpg" 
                        alt="Student Assistance Center" 
                        class="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    
                    <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                        <p class="text-white font-medium">Comprehensive Student Support Services</p>
                    </div>
                </div>
            </div>

        </div>
    </div>
</div>`,fd={"/biochymistry":"/dept/biochymistry","/medicine":"/dept/medicine","/forensic":"/dept/forensic","/pathology":"/dept/pathology","/microbiology":"/dept/microbiology","/pharmacology":"/dept/pharmacology","/allied":"/dept/allied","/paediatrics":"/dept/paediatrics","/surgery":"/dept/surgery","/orthopaedics":"/dept/orthopaedics","/ophthalmology":"/dept/ophthalmology","/gynae":"/dept/gynae","/otorhinolaryngology":"/dept/otorhinolaryngology","/anaesthesiology":"/dept/anaesthesiology","/physiology":"/dept/physiology","/anatomy":"/dept/anatomy","/committee":"/committees"};function Gy(){const e=v.useRef(null);return v.useEffect(()=>{e.current&&e.current.querySelectorAll("a").forEach(t=>{const n=t.getAttribute("href");n&&fd[n]&&t.setAttribute("href",fd[n])})},[]),i.jsxs("div",{children:[i.jsx(H,{}),i.jsx("div",{ref:e,dangerouslySetInnerHTML:{__html:Ky}}),i.jsx($,{})]})}const Jy=`<section class="relative h-[50vh] min-h-[400px] flex items-center overflow-hidden">
    <div class="absolute inset-0 z-0">
        <img src="https://www.pmch-bd.org/images/PMC/award1.jpg" 
             alt="Academic Awards Background" 
             class="w-full h-full object-cover">
        <div class="absolute inset-0 bg-gradient-to-r from-white/90 via-white/40 to-transparent"></div>
    </div>

    <div class="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div class="max-w-2xl border-l-4 border-emerald-600 pl-6 md:pl-10">
            <span class="text-emerald-700 font-bold tracking-widest uppercase text-sm mb-2 block">Student Recognition</span>
            <h1 class="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight">
                Academic <span class="text-emerald-600">Awards</span>
            </h1>
            <p class="mt-6 text-lg md:text-xl text-slate-700 leading-relaxed font-medium">
                Celebrating exceptional academic achievements to foster a harmonious, competitive, and inspiring learning environment at Popular Medical College.
            </p>
        </div>
    </div>
</section>

<div class="bg-slate-50 py-16 px-6">
    <div class="max-w-7xl mx-auto">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
            
            <div class="order-2 lg:order-1">
                <h2 class="text-3xl font-bold text-slate-800 mb-6">Honoring Excellence</h2>
                <div class="space-y-4 text-slate-600 text-lg leading-relaxed">
                    <p>
                        Popular Medical College has introduced a variety of <span class="text-emerald-700 font-semibold">distinguished academic awards</span> to encourage students to reach their full potential. These honors recognize consistent performance, research initiatives, and professional conduct.
                    </p>
                    <p>
                        Our award system is designed to motivate medical graduates to excel not only in examinations but also in clinical practice and social accountability.
                    </p>
                </div>
                
                <div class="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div class="flex items-center bg-white px-4 py-2 rounded-lg shadow-sm border border-slate-200">
                        <span class="w-3 h-3 bg-yellow-500 rounded-full mr-2"></span>
                        <span class="text-sm font-bold text-slate-700">Merit Scholarships</span>
                    </div>
                    <div class="flex items-center bg-white px-4 py-2 rounded-lg shadow-sm border border-slate-200">
                        <span class="w-3 h-3 bg-yellow-500 rounded-full mr-2"></span>
                        <span class="text-sm font-bold text-slate-700">Gold Medalists</span>
                    </div>
                    <div class="flex items-center bg-white px-4 py-2 rounded-lg shadow-sm border border-slate-200">
                        <span class="w-3 h-3 bg-yellow-500 rounded-full mr-2"></span>
                        <span class="text-sm font-bold text-slate-700">Honors Marks Awards</span>
                    </div>
                    <div class="flex items-center bg-white px-4 py-2 rounded-lg shadow-sm border border-slate-200">
                        <span class="w-3 h-3 bg-yellow-500 rounded-full mr-2"></span>
                        <span class="text-sm font-bold text-slate-700">Best Intern Awards</span>
                    </div>
                </div>
            </div>

            <div class="order-1 lg:order-2 group">
                <div class="relative overflow-hidden rounded-2xl shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
                    <div class="absolute inset-0 border-[12px] border-white/20 z-10 pointer-events-none"></div>
                    
                    <img 
                        src="https://www.pmch-bd.org/images/PMC/award1.jpg" 
                        alt="Awards Ceremony" 
                        class="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    
                    <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                        <p class="text-white font-medium">Recognizing the Leaders of Tomorrow</p>
                    </div>
                </div>
            </div>

        </div>
    </div>
</div>


<div class="bg-white min-h-screen  text-gray-800">
    <div class="max-w-7xl mx-auto px-6 py-12 flex flex-col items-center">
  
      <div class="mt-12 max-w-7xl mx-auto grid md:grid-cols-3 w-full overflow-hidden gap-10 rounded-sm ">
        <img 
          src="https://www.pmch-bd.org/images/PMC/ACD1.jpg" 
          alt="College Building" 
          class="w-full h-[250px] object-cover "
        />
        <img 
          src="https://www.pmch-bd.org/images/PMC/ACD2.jpg" 
          alt="College Building" 
          class="w-full h-auto object-cover "
        />
        <img 
          src="https://www.pmch-bd.org/images/PMC/ACD3.jpg" 
          alt="College Building" 
          class="w-full h-auto object-cover "
        />
      </div>
      <div class="space-y-6 text-justify leading-relaxed text-[#555] text-lg">
       
        <p>
          <span class=" text-gray-700">The college acknowledges and stresses the need of regularity and punctuality in addition to discipline. The introduction of the "Attendance Award" for all students attaining 100% class attendance is an example of this.</p>
            <p>
                <span class=" text-gray-700">In addition the Popular Medical College has introduced the following awards for admirable academic achievement. "Principal's Honor Roll" – is awarded to a student who achieves an aggregate of 75% or more marks over the whole calendar year including professional examination. "PMC Achievement Award" - is awarded to a student who obtains "Honors marks" in a professional examination held during a calendar year. "</p>
                    <p>
                        <span class=" text-gray-700">PMC Gold Student Award" - is awarded to a student who attains a position among the first 10 places in a professional examination during a calendar year. A student can be the recipient of any one or more award within that calendar year.</p>
                         
      </div>
  
     
    </div>
  </div>`,hd={"/biochymistry":"/dept/biochymistry","/medicine":"/dept/medicine","/forensic":"/dept/forensic","/pathology":"/dept/pathology","/microbiology":"/dept/microbiology","/pharmacology":"/dept/pharmacology","/allied":"/dept/allied","/paediatrics":"/dept/paediatrics","/surgery":"/dept/surgery","/orthopaedics":"/dept/orthopaedics","/ophthalmology":"/dept/ophthalmology","/gynae":"/dept/gynae","/otorhinolaryngology":"/dept/otorhinolaryngology","/anaesthesiology":"/dept/anaesthesiology","/physiology":"/dept/physiology","/anatomy":"/dept/anatomy","/committee":"/committees"};function Yy(){const e=v.useRef(null);return v.useEffect(()=>{e.current&&e.current.querySelectorAll("a").forEach(t=>{const n=t.getAttribute("href");n&&hd[n]&&t.setAttribute("href",hd[n])})},[]),i.jsxs("div",{children:[i.jsx(H,{}),i.jsx("div",{ref:e,dangerouslySetInnerHTML:{__html:Jy}}),i.jsx($,{})]})}const Xy=`<section class="relative h-[50vh] min-h-[400px] flex items-center overflow-hidden">
  <div class="absolute inset-0 z-0">
      <img src="https://www.pmch-bd.org/images/PMC/books.jpg" 
           alt="Medical Textbooks Background" 
           class="w-full h-full object-cover">
      <div class="absolute inset-0 bg-gradient-to-r from-white/90 via-white/40 to-transparent"></div>
  </div>

  <div class="relative z-10 max-w-7xl mx-auto px-6 w-full">
      <div class="max-w-2xl border-l-4 border-emerald-600 pl-6 md:pl-10">
          <span class="text-emerald-700 font-bold tracking-widest uppercase text-sm mb-2 block">1st Year MBBS Resources</span>
          <h1 class="text-3xl md:text-3xl lg:text-3xl font-extrabold text-slate-900 leading-tight">
            Recommended list of books for 1st year MBBS students 
          </h1>
          <p class="mt-6 text-lg md:text-xl text-slate-700 leading-relaxed font-medium">
            Medicine is an ever changing science and its range of study and requirement of knowledge for a successful medical graduate is beyond the scope of recommendation. However we suggest a list of essential books as per existing curriculum recommended by Bangladesh Medical and Dental Council. Choices could be made from the list suggested below-
         
            </p>
      </div>
  </div>
</section>

<div class="bg-slate-50 py-16 px-6">
  <div class="max-w-7xl mx-auto">
      <div class="grid lg:grid-cols-2 gap-12 items-center">
          
          <div class="order-2 lg:order-1">
              <h2 class="text-3xl font-bold text-slate-800 mb-6">Academic Excellence through Quality Resources</h2>
              <div class="space-y-4 text-slate-600 text-lg leading-relaxed">
                  <p>
                      Medicine is an ever-changing science. While the depth of knowledge required for a medical graduate is vast, we provide a <span class="text-emerald-700 font-semibold">foundational list of essential books</span> to guide students through their first professional phase.
                  </p>
                  <p>
                      These recommendations cover core subjects including <span class="font-bold">Anatomy, Physiology, and Biochemistry</span>, ensuring students have access to the most reliable and updated information available.
                  </p>
              </div>
              
              <div class="mt-8 flex flex-wrap gap-4">
                  <div class="flex items-center bg-white px-4 py-2 rounded-lg shadow-sm border border-slate-200">
                      <span class="w-3 h-3 bg-emerald-500 rounded-full mr-2"></span>
                      <span class="text-sm font-bold text-slate-700">BM&DC Approved</span>
                  </div>
                  <div class="flex items-center bg-white px-4 py-2 rounded-lg shadow-sm border border-slate-200">
                      <span class="w-3 h-3 bg-emerald-500 rounded-full mr-2"></span>
                      <span class="text-sm font-bold text-slate-700">Latest Editions</span>
                  </div>
              </div>
          </div>

          <div class="order-1 lg:order-2 group">
              <div class="relative overflow-hidden rounded-2xl shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
                  <div class="absolute inset-0 border-[12px] border-white/20 z-10 pointer-events-none"></div>
                  
                  <img 
                      src="https://www.pmch-bd.org/images/PMC/lib1.jpg" 
                      alt="Medical Library Resources" 
                      class="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                      <p class="text-white font-medium">Reference Section - Popular Medical College Library</p>
                  </div>
              </div>
          </div>

      </div>
  </div>
</div>

<section class="max-w-7xl mx-auto py-16 px-6  bg-white">
  <div class="mb-12">
    <span class="text-[10px] tracking-[0.3em] uppercase text-gray-400 font-bold border-l-2 border-blue-600 pl-3">Book List</span>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-4 gap-8 py-10 border-b border-gray-100">
    <h2 class="text-3xl text-gray-800 font-medium md:col-span-1">Anatomy</h2>
    <div class="md:col-span-3 space-y-2 text-gray-600 text-sm md:text-base leading-relaxed">
      <p>Richard S. Snell: Clinical Anatomy – 9th edition.</p>
      <p>Principles of General Anatomy –A.K Datta – 6th edition.</p>
      <p>Human Anatomy Vol. I, II, & III: Chaurasia, B.D. Mescher: 7th edition.</p>
      <p>Essentials of Human Anatomy Vol. I, II, III: A.K. Datta – 9th, 5th, 4th edition respectively</p>
      <p>Mannan’s Regional Dissection & Surface Anatomy – 13th edition.</p>
      <p>Sadler: Langman’s Medical Embryology – 14th edition.</p>
      <p>Netter – Atlas of Human Anatomy – 7th edition.</p>
      <p>Gray's Anatomy–Anatomical basis of clinical practice – 41th edition.</p>
    </div>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-4 gap-8 py-10 border-b border-gray-100">
    <h2 class="text-3xl text-gray-800 font-medium md:col-span-1">Physiology</h2>
    <div class="md:col-span-3 space-y-2 text-gray-600 text-sm md:text-base">
      <p>Text book of Medical physiology–Guyton and Hall– 12th edition.</p>
      <p>Ganong’s Review of medical physiology – 23rd edition.</p>
      <p>A text book of practical physiology – C.L. Ghai – 7th edition.</p>
      <p>Text book of Medical physiology – Indu Khurana, Arushi Khurana – 2nd edition</p>
    </div>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-4 gap-8 py-10 border-b border-gray-100">
    <h2 class="text-3xl text-gray-800 font-medium md:col-span-1">Biochemistry</h2>
    <div class="md:col-span-3 space-y-2 text-gray-600 text-sm md:text-base">
      <p>Harper’s Biochemistry – 30th edition</p>
      <p>Lippincott’s Illustrated Reviews Biochemistry– 6th edition</p>
      <p>Biochemistry: U. Satyanarayana – 5th edition.</p>
    </div>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-4 gap-8 py-10">
    <h2 class="text-3xl text-gray-800 font-medium md:col-span-1">Community Medicine</h2>
    <div class="md:col-span-3 space-y-2 text-gray-600 text-sm md:text-base">
      <p>K. Park: Park’s Textbook of Preventive & Social Medicine- 25th Edition</p>
      <p>Rashid, Khabir, Hyder- Text Book of Community Medicine & Public Health - 5th edition.</p>
      <p>Mahajan’s - Methods in Biostatistics for Medical Students & Research Workers</p>
    </div>
  </div>
</section>`,md={"/biochymistry":"/dept/biochymistry","/medicine":"/dept/medicine","/forensic":"/dept/forensic","/pathology":"/dept/pathology","/microbiology":"/dept/microbiology","/pharmacology":"/dept/pharmacology","/allied":"/dept/allied","/paediatrics":"/dept/paediatrics","/surgery":"/dept/surgery","/orthopaedics":"/dept/orthopaedics","/ophthalmology":"/dept/ophthalmology","/gynae":"/dept/gynae","/otorhinolaryngology":"/dept/otorhinolaryngology","/anaesthesiology":"/dept/anaesthesiology","/physiology":"/dept/physiology","/anatomy":"/dept/anatomy","/committee":"/committees"};function Zy(){const e=v.useRef(null);return v.useEffect(()=>{e.current&&e.current.querySelectorAll("a").forEach(t=>{const n=t.getAttribute("href");n&&md[n]&&t.setAttribute("href",md[n])})},[]),i.jsxs("div",{children:[i.jsx(H,{}),i.jsx("div",{ref:e,dangerouslySetInnerHTML:{__html:Xy}}),i.jsx($,{})]})}const ev=`<section class="relative h-[50vh] min-h-[400px] flex items-center overflow-hidden">
    <div class="absolute inset-0 z-0">
        <img src="https://www.pmch-bd.org/images/yootheme/service-header.jpg" 
             alt="Background" 
             class="w-full h-full object-cover">
        <div class="absolute inset-0 bg-gradient-to-r from-white/90 via-white/40 to-transparent"></div>
    </div>

    <div class="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div class="max-w-2xl border-l-4 border-emerald-600 pl-6 md:pl-10">
            <span class="text-emerald-700 font-bold tracking-widest uppercase text-sm mb-2 block">Student Amenities</span>
            <h1 class="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight">
                College Cafeteria
            </h1>
            <p class="mt-6 text-lg md:text-xl text-slate-700 leading-relaxed font-medium">
              The college has a spacious cafeteria at the 4th floor of the academic building with a range of food items, which are essentially balanced, nutritious, healthy and subsidized. 
            </p>
        </div>
    </div>
</section>

<div class="bg-slate-50 py-16 px-6">
    <div class="max-w-7xl mx-auto">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
            
            <div class="order-2 lg:order-1">
                <h2 class="text-3xl font-bold text-slate-800 mb-6">Nutrition & Convenience</h2>
                <div class="space-y-4 text-slate-600 text-lg leading-relaxed">
                    <p>
                      The college has a spacious cafeteria at the 4th floor of the academic building with a range of food items, which are essentially balanced, nutritious, healthy and subsidized. Every effort has been made to ensure availability of the services up to the late hours.
                   
                      </p>
                    
                </div>
                
                <div class="mt-8 flex flex-wrap gap-4">
                    <div class="flex items-center bg-white px-4 py-2 rounded-lg shadow-sm border border-slate-200">
                        <span class="w-3 h-3 bg-emerald-500 rounded-full mr-2"></span>
                        <span class="text-sm font-bold text-slate-700">Subsidized Rates</span>
                    </div>
                    <div class="flex items-center bg-white px-4 py-2 rounded-lg shadow-sm border border-slate-200">
                        <span class="w-3 h-3 bg-emerald-500 rounded-full mr-2"></span>
                        <span class="text-sm font-bold text-slate-700">Healthy & Balanced</span>
                    </div>
                </div>
            </div>

            <div class="order-1 lg:order-2 group">
                <div class="relative overflow-hidden rounded-2xl shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
                    <div class="absolute inset-0 border-[12px] border-white/20 z-10 pointer-events-none"></div>
                    
                    <img 
                        src="https://www.pmch-bd.org/images/PMC/ccafe1.jpg" 
                        alt="College Cafeteria" 
                        class="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    
                    <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                        <p class="text-white font-medium">Spacious Dining Hall - 4th Floor</p>
                    </div>
                </div>
            </div>

        </div>
    </div>
</div>`,gd={"/biochymistry":"/dept/biochymistry","/medicine":"/dept/medicine","/forensic":"/dept/forensic","/pathology":"/dept/pathology","/microbiology":"/dept/microbiology","/pharmacology":"/dept/pharmacology","/allied":"/dept/allied","/paediatrics":"/dept/paediatrics","/surgery":"/dept/surgery","/orthopaedics":"/dept/orthopaedics","/ophthalmology":"/dept/ophthalmology","/gynae":"/dept/gynae","/otorhinolaryngology":"/dept/otorhinolaryngology","/anaesthesiology":"/dept/anaesthesiology","/physiology":"/dept/physiology","/anatomy":"/dept/anatomy","/committee":"/committees"};function tv(){const e=v.useRef(null);return v.useEffect(()=>{e.current&&e.current.querySelectorAll("a").forEach(t=>{const n=t.getAttribute("href");n&&gd[n]&&t.setAttribute("href",gd[n])})},[]),i.jsxs("div",{children:[i.jsx(H,{}),i.jsx("div",{ref:e,dangerouslySetInnerHTML:{__html:ev}}),i.jsx($,{})]})}const nv=`<section class="relative h-[50vh] min-h-[400px] flex items-center overflow-hidden">
    <div class="absolute inset-0 z-0">
        <img src="https://www.pmch-bd.org/images/yootheme/service-header.jpg" 
             alt="Background" 
             class="w-full h-full object-cover">
        <div class="absolute inset-0 bg-gradient-to-r from-white/90 via-white/40 to-transparent"></div>
    </div>

    <div class="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div class="max-w-2xl border-l-4 border-emerald-600 pl-6 md:pl-10">
            <span class="text-emerald-700 font-bold tracking-widest uppercase text-sm mb-2 block">Healthcare & Wellness</span>
            <h1 class="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight">
                Medical Centre
            </h1>
            <p class="mt-6 text-lg md:text-xl text-slate-700 leading-relaxed font-medium">
              Physical fitness is an essential requisite for a professional education like medical science. In
              order to ensure optimum health this institution has a medical centre for regular health checkup of the students.
              </p>
        </div>
    </div>
</section>

<div class="bg-slate-50 py-16 px-6">
    <div class="max-w-7xl mx-auto">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
            
            <div class="order-2 lg:order-1">
                <h2 class="text-3xl font-bold text-slate-800 mb-6">Comprehensive Student Health</h2>
                <div class="space-y-4 text-slate-600 text-lg leading-relaxed">
                    <p>
                      Physical fitness is an essential requisite for a professional education like medical science. In
order to ensure optimum health this institution has a medical centre for regular health checkup of the students. It provides all medical students and staffs with a state of the art medical centre dedicated for the college. This medical centre provide regular medical checkup, emergency and on demand medical facilities upto specialist service and hospital admissions if required. The services of the medical centre is open from 8.00 am to 2.00 pm and is available to all students free of charge. Emergency medical services are provided by the Popular Medical College Hospital round the clock.
                    </p>
                   
                </div>
                
                <div class="mt-8 flex flex-wrap gap-4">
                    <div class="flex items-center bg-white px-4 py-2 rounded-lg shadow-sm border border-slate-200">
                        <span class="w-3 h-3 bg-emerald-500 rounded-full mr-2"></span>
                        <span class="text-sm font-bold text-slate-700">Free Student Service</span>
                    </div>
                    <div class="flex items-center bg-white px-4 py-2 rounded-lg shadow-sm border border-slate-200">
                        <span class="w-3 h-3 bg-red-500 rounded-full mr-2"></span>
                        <span class="text-sm font-bold text-slate-700">24/7 Emergency Support</span>
                    </div>
                </div>
            </div>

            <div class="order-1 lg:order-2 group">
                <div class="relative overflow-hidden rounded-2xl shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
                    <div class="absolute inset-0 border-[12px] border-white/20 z-10 pointer-events-none"></div>
                    
                    <img 
                        src="https://www.pmch-bd.org/images/PMC/MC1.jpg" 
                        alt="Medical Centre" 
                        class="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    
                    <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                        <p class="text-white font-medium">On-Campus Health & Specialist Services</p>
                    </div>
                </div>
            </div>

        </div>
    </div>
</div>`,xd={"/biochymistry":"/dept/biochymistry","/medicine":"/dept/medicine","/forensic":"/dept/forensic","/pathology":"/dept/pathology","/microbiology":"/dept/microbiology","/pharmacology":"/dept/pharmacology","/allied":"/dept/allied","/paediatrics":"/dept/paediatrics","/surgery":"/dept/surgery","/orthopaedics":"/dept/orthopaedics","/ophthalmology":"/dept/ophthalmology","/gynae":"/dept/gynae","/otorhinolaryngology":"/dept/otorhinolaryngology","/anaesthesiology":"/dept/anaesthesiology","/physiology":"/dept/physiology","/anatomy":"/dept/anatomy","/committee":"/committees"};function rv(){const e=v.useRef(null);return v.useEffect(()=>{e.current&&e.current.querySelectorAll("a").forEach(t=>{const n=t.getAttribute("href");n&&xd[n]&&t.setAttribute("href",xd[n])})},[]),i.jsxs("div",{children:[i.jsx(H,{}),i.jsx("div",{ref:e,dangerouslySetInnerHTML:{__html:nv}}),i.jsx($,{})]})}const sv=`<div class="bg-gray-50 px-4 py-16 sm:px-6 lg:px-8">
    <div class="mx-auto max-w-7xl">
      <div class="flex flex-col items-start gap-12 lg:flex-row">
  
        <!-- Image Section -->
        <div class="w-full lg:w-1/3">
          <div class="group relative">
            <div class="overflow-hidden rounded-xl bg-white shadow-lg">
              <img
                src="https://www.pmch-bd.org/images/PMC/Chairman_PMCH.jpg"
                alt="Chairman, Governing Body of Popular Medical College"
                class="h-[450px] w-[350px] object-cover transition-transform duration-300 group-hover:scale-105"
              />
  
              <div class="p-4 text-center">
                <p class="text-sm font-semibold uppercase tracking-wide text-blue-900">
                  Institutional Leadership
                </p>
              </div>
            </div>
          </div>
        </div>
  
        <!-- Content Section -->
        <div class="flex w-full flex-col justify-center lg:w-2/3">
          <span class="mb-5 inline-block rounded-full bg-blue-100 px-4 py-1 text-xs font-medium uppercase tracking-wider text-blue-700">
            From the Office of the Chairman, Governing Body
          </span>
  
          <div class="space-y-6 text-lg leading-relaxed text-gray-600">
            <p>
              <span class="font-medium text-gray-800">
                The best gift of parents to their sons and daughters is quality
                education.
              </span>
              In our country, it is a major concern for every parent to ensure
              proper education for their children after passing the Higher
              Secondary Certificate examination. The excitement of excellent
              results often fades when students face difficulties in gaining
              admission to their desired subjects and institutions. Students are
              also frequently confused about selecting an appropriate
              undergraduate discipline.
            </p>
  
            <p>
              Career building, job security, personal interest, and uncertainty
              compel many science students to choose a universal subject at the
              HSC level—one that keeps pathways open to Medicine, Engineering,
              ICT, Agriculture, Business, and General Universities. This creates
              a real dilemma for students and guardians alike.
            </p>
  
            <p>
              This booklet aims to reduce that uncertainty by providing guidance
              to determine whether the noble profession of
              <span class="font-medium text-gray-800">Medicine</span> is the right
              choice. It also presents concise information about
              <span class="font-medium text-gray-800">
                Popular Medical College
              </span>,
              the flagship project of Popular Group—the only total health service
              provider in the private sector of the country.
            </p>
  
            <p>
              We hope this initiative will assist those who aspire to pursue
              Medicine as a profession in its true sense. Finally, we assure you
              that the governing body of this institute does not merely govern,
              but associates as a family—working together to contribute the very
              best.
            </p>
  
            <p class="font-medium text-gray-700">Thanking you all.</p>
  
            <!-- Signature -->
            <div class="pt-4 space-y-1 text-right font-medium text-gray-700">
              <p class="text-gray-900">Dr. Mostafizur Rahman</p>
              <p>Chairman, Governing Body</p>
              <p>Popular Medical College</p>
            </div>
          </div>
        </div>
  
      </div>
    </div>
  </div>`,yd={"/biochymistry":"/dept/biochymistry","/medicine":"/dept/medicine","/forensic":"/dept/forensic","/pathology":"/dept/pathology","/microbiology":"/dept/microbiology","/pharmacology":"/dept/pharmacology","/allied":"/dept/allied","/paediatrics":"/dept/paediatrics","/surgery":"/dept/surgery","/orthopaedics":"/dept/orthopaedics","/ophthalmology":"/dept/ophthalmology","/gynae":"/dept/gynae","/otorhinolaryngology":"/dept/otorhinolaryngology","/anaesthesiology":"/dept/anaesthesiology","/physiology":"/dept/physiology","/anatomy":"/dept/anatomy","/committee":"/committees"};function lv(){const e=v.useRef(null);return v.useEffect(()=>{e.current&&e.current.querySelectorAll("a").forEach(t=>{const n=t.getAttribute("href");n&&yd[n]&&t.setAttribute("href",yd[n])})},[]),i.jsxs("div",{children:[i.jsx(H,{}),i.jsx("div",{ref:e,dangerouslySetInnerHTML:{__html:sv}}),i.jsx($,{})]})}const ov=`<section class="relative h-[50vh] min-h-[400px] flex items-center overflow-hidden">
    <div class="absolute inset-0 z-0">
        <img src="https://www.pmch-bd.org/images/yootheme/service-header.jpg" 
             alt="Background" 
             class="w-full h-full object-cover">
        <div class="absolute inset-0 bg-gradient-to-r from-white/90 via-white/40 to-transparent"></div>
    </div>

    <div class="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div class="max-w-2xl border-l-4 border-emerald-600 pl-6 md:pl-10">
            <span class="text-emerald-700 font-bold tracking-widest uppercase text-sm mb-2 block">Student Facilities</span>
            <h1 class="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight">
                College Common Room
            </h1>
            <p class="mt-6 text-lg md:text-xl text-slate-700 leading-relaxed font-medium">
              The College has provided separate spacious common rooms for girls and boys at the 3rd & 4th floor respectively of the academic building for indoor games for brief relaxation within the compact & structured teaching learning schedule.
            </p>
        </div>
    </div>
</section>

<div class="bg-slate-50 py-16 px-6">
    <div class="max-w-7xl mx-auto">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
            
            <div class="order-2 lg:order-1">
                <h2 class="text-3xl font-bold text-slate-800 mb-6">Relaxation & Recreation</h2>
                <div class="space-y-4 text-slate-600 text-lg leading-relaxed">
                    <p>
                      The College has provided separate spacious common rooms for girls and boys at the 3rd & 4th floor respectively of the academic building for indoor games for brief relaxation within the compact & structured teaching learning schedule.
                    
                      </p>
                   
                </div>
                
                <div class="mt-8 flex gap-4">
                    <div class="flex items-center bg-white px-4 py-2 rounded-lg shadow-sm border border-slate-200">
                        <span class="w-3 h-3 bg-emerald-500 rounded-full mr-2"></span>
                        <span class="text-sm font-bold text-slate-700">3rd Floor: Girls</span>
                    </div>
                    <div class="flex items-center bg-white px-4 py-2 rounded-lg shadow-sm border border-slate-200">
                        <span class="w-3 h-3 bg-blue-500 rounded-full mr-2"></span>
                        <span class="text-sm font-bold text-slate-700">4th Floor: Boys</span>
                    </div>
                </div>
            </div>

            <div class="order-1 lg:order-2 group">
                <div class="relative overflow-hidden rounded-2xl shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
                    <div class="absolute inset-0 border-[12px] border-white/20 z-10 pointer-events-none"></div>
                    
                    <img 
                        src="https://www.pmch-bd.org/images/PMC/ccroom1.jpg" 
                        alt="College Common Room" 
                        class="w-auto h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    
                    <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                        <p class="text-white font-medium">Spacious Indoor Gaming Area</p>
                    </div>
                </div>
            </div>

        </div>
    </div>
</div>`,vd={"/biochymistry":"/dept/biochymistry","/medicine":"/dept/medicine","/forensic":"/dept/forensic","/pathology":"/dept/pathology","/microbiology":"/dept/microbiology","/pharmacology":"/dept/pharmacology","/allied":"/dept/allied","/paediatrics":"/dept/paediatrics","/surgery":"/dept/surgery","/orthopaedics":"/dept/orthopaedics","/ophthalmology":"/dept/ophthalmology","/gynae":"/dept/gynae","/otorhinolaryngology":"/dept/otorhinolaryngology","/anaesthesiology":"/dept/anaesthesiology","/physiology":"/dept/physiology","/anatomy":"/dept/anatomy","/committee":"/committees"};function iv(){const e=v.useRef(null);return v.useEffect(()=>{e.current&&e.current.querySelectorAll("a").forEach(t=>{const n=t.getAttribute("href");n&&vd[n]&&t.setAttribute("href",vd[n])})},[]),i.jsxs("div",{children:[i.jsx(H,{}),i.jsx("div",{ref:e,dangerouslySetInnerHTML:{__html:ov}}),i.jsx($,{})]})}const av=`<section class="relative h-[50vh] min-h-[400px] flex items-center overflow-hidden">
    <div class="absolute inset-0 z-0">
        <img src="https://www.pmch-bd.org/images/yootheme/service-header.jpg" 
             alt="Background" 
             class="w-full h-full object-cover">
        <div class="absolute inset-0 bg-gradient-to-r from-white/90 via-white/40 to-transparent"></div>
    </div>

    <div class="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div class="max-w-2xl border-l-4 border-emerald-600 pl-6 md:pl-10">
            <span class="text-emerald-700 font-bold tracking-widest uppercase text-sm mb-2 block">Administrative Facilities</span>
            <h1 class="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight">
                College Conference Room
            </h1>
            <p class="mt-6 text-lg md:text-xl text-slate-700 leading-relaxed font-medium">
              The college has a well equipped conference room with all modern facilities to conduct meetings.
            </p>
        </div>
    </div>
</section>

<div class="bg-slate-50 py-16 px-6">
    <div class="max-w-7xl mx-auto">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
            
            <div class="order-2 lg:order-1">
                <h2 class="text-3xl font-bold text-slate-800 mb-6">Modern Meeting Infrastructure</h2>
                <div class="space-y-4 text-slate-600 text-lg leading-relaxed">
                    <p>
                      The college has a well equipped conference room with all modern facilities to conduct meetings.
                    
                      </p>
                    
                </div>
                
                <div class="mt-8 flex flex-wrap gap-4">
                    <div class="flex items-center bg-white px-4 py-2 rounded-lg shadow-sm border border-slate-200">
                        <span class="w-3 h-3 bg-emerald-500 rounded-full mr-2"></span>
                        <span class="text-sm font-bold text-slate-700">Multimedia Ready</span>
                    </div>
                    <div class="flex items-center bg-white px-4 py-2 rounded-lg shadow-sm border border-slate-200">
                        <span class="w-3 h-3 bg-emerald-500 rounded-full mr-2"></span>
                        <span class="text-sm font-bold text-slate-700">Centralized AC</span>
                    </div>
                </div>
            </div>

            <div class="order-1 lg:order-2 group">
                <div class="relative overflow-hidden rounded-2xl shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
                    <div class="absolute inset-0 border-[12px] border-white/20 z-10 pointer-events-none"></div>
                    
                    <img 
                        src="https://www.pmch-bd.org/images/PMC/CCR1.jpg" 
                        alt="College Conference Room" 
                        class="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    
                    <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                        <p class="text-white font-medium">PMCH Executive Conference Hall</p>
                    </div>
                </div>
            </div>

        </div>
    </div>
</div>`,wd={"/biochymistry":"/dept/biochymistry","/medicine":"/dept/medicine","/forensic":"/dept/forensic","/pathology":"/dept/pathology","/microbiology":"/dept/microbiology","/pharmacology":"/dept/pharmacology","/allied":"/dept/allied","/paediatrics":"/dept/paediatrics","/surgery":"/dept/surgery","/orthopaedics":"/dept/orthopaedics","/ophthalmology":"/dept/ophthalmology","/gynae":"/dept/gynae","/otorhinolaryngology":"/dept/otorhinolaryngology","/anaesthesiology":"/dept/anaesthesiology","/physiology":"/dept/physiology","/anatomy":"/dept/anatomy","/committee":"/committees"};function cv(){const e=v.useRef(null);return v.useEffect(()=>{e.current&&e.current.querySelectorAll("a").forEach(t=>{const n=t.getAttribute("href");n&&wd[n]&&t.setAttribute("href",wd[n])})},[]),i.jsxs("div",{children:[i.jsx(H,{}),i.jsx("div",{ref:e,dangerouslySetInnerHTML:{__html:av}}),i.jsx($,{})]})}const dv=`<div class="bg-slate-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8 ">
    <div class="max-w-6xl mx-auto">
      
      <div class="text-center mb-16">
        <h2 class="text-base font-semibold text-emerald-600 tracking-wide uppercase">Get in Touch</h2>
        <p class="mt-2 text-4xl font-extrabold text-slate-900 sm:text-5xl">Contact Us</p>
        <p class="mt-4 max-w-2xl mx-auto text-xl text-slate-500">Have questions? We're here to help. Reach out to the medical college or hospital directly.</p>
      </div>
  
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        <div class="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
          <div class="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-6">
            <svg class="w-6 h-6 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
          </div>
          <h3 class="text-lg font-bold text-slate-900 mb-2">Medical College</h3>
          <p class="text-slate-600 text-sm mb-4">Open Sat–Thu: 8:00 AM – 2:00 PM</p>
          <div class="space-y-2 text-sm">
            <p class="text-slate-800 font-medium">+8802223362302</p>
            <p class="text-slate-500">Secretary: 01786655128</p>
            <p class="text-slate-500">Info Desk: 01927266191</p>
          </div>
        </div>
  
        <div class="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
          <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
            <svg class="w-6 h-6 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
          </div>
          <h3 class="text-lg font-bold text-slate-900 mb-2">Hospital & Appointments</h3>
          <p class="text-slate-600 text-sm mb-4">24/7 Emergency & Diagnostic Services</p>
          <div class="space-y-2 text-sm">
            <p class="text-blue-700 font-bold text-lg">Hotline: 10636</p>
            <p class="text-slate-800">+8809666 787800</p>
            <p class="text-slate-800">+8809666 787801</p>
          </div>
        </div>
  
        <div class="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
          <div class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
            <svg class="w-6 h-6 text-purple-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
          </div>
          <h3 class="text-lg font-bold text-slate-900 mb-2">Email & Social</h3>
          <p class="text-slate-600 text-sm mb-4">Official correspondence</p>
          <div class="space-y-2 text-sm">
            <a href="mailto:info@pmc.ac.bd" class="block text-emerald-600 hover:underline">info@pmc.ac.bd</a>
            <div class="flex space-x-4 pt-2">
              <a href="#" class="text-slate-400 hover:text-blue-600 font-medium">Facebook</a>
              <a href="#" class="text-slate-400 hover:text-red-600 font-medium">YouTube</a>
            </div>
          </div>
        </div>
      </div>
  
      <div class="bg-white rounded-3xl shadow-xl shadow-slate-200/50 overflow-hidden flex flex-col lg:flex-row border border-slate-100">
        
        <div class="lg:w-1/3 bg-emerald-800 p-10 text-emerald-50">
          <h3 class="text-2xl font-bold text-white mb-8">Location Details</h3>
          
          <div class="space-y-8">
            <div class="flex items-start space-x-4">
              <div class="mt-1 bg-emerald-700/50 p-2 rounded-lg">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path></svg>
              </div>
              <div>
                <p class="font-semibold text-white">Main Campus</p>
                <p class="text-emerald-100/80 leading-relaxed text-sm">House # 25, Road # 2, Dhanmondi<br>Dhaka - 1205, Bangladesh</p>
              </div>
            </div>
  
            <div class="flex items-start space-x-4">
              <div class="mt-1 bg-emerald-700/50 p-2 rounded-lg">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
              </div>
              <div>
                <p class="font-semibold text-white">Landline</p>
                <p class="text-emerald-100/80 text-sm">+880 2 9669480</p>
              </div>
            </div>
          </div>
  
          <div class="mt-12 p-6 bg-emerald-700/30 rounded-2xl border border-emerald-600/50">
            <p class="text-xs uppercase tracking-widest font-bold text-emerald-300 mb-2">Emergency</p>
            <p class="text-sm italic text-emerald-100">For immediate medical assistance, please call our 24/7 hotline directly at 10636.</p>
          </div>
        </div>
  
        <div class="lg:w-2/3 p-10">
          <h3 class="text-2xl font-bold text-slate-900 mb-8">Send us a Message</h3>
          <form action="#" method="POST" class="space-y-6">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label class="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Full Name</label>
                <input type="text" class="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-emerald-500 focus:bg-white outline-none transition-all placeholder:text-slate-400" placeholder="John Doe">
              </div>
              <div>
                <label class="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Email Address</label>
                <input type="email" class="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-emerald-500 focus:bg-white outline-none transition-all placeholder:text-slate-400" placeholder="john@example.com">
              </div>
            </div>
            
            <div>
              <label class="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Subject</label>
              <input type="text" class="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-emerald-500 focus:bg-white outline-none transition-all placeholder:text-slate-400" placeholder="General Inquiry">
            </div>
  
            <div>
              <label class="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Message</label>
              <textarea rows="4" class="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-emerald-500 focus:bg-white outline-none transition-all placeholder:text-slate-400" placeholder="How can we help you today?"></textarea>
            </div>
  
            <button type="submit" class="inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 bg-emerald-600 text-white font-bold rounded-xl hover:bg-emerald-700 transform hover:-translate-y-0.5 transition-all shadow-lg shadow-emerald-200 active:scale-95">
              <span>Send Message</span>
              <svg class="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </button>
          </form>
        </div>
      </div>
  
    </div>
  </div>`,bd={"/biochymistry":"/dept/biochymistry","/medicine":"/dept/medicine","/forensic":"/dept/forensic","/pathology":"/dept/pathology","/microbiology":"/dept/microbiology","/pharmacology":"/dept/pharmacology","/allied":"/dept/allied","/paediatrics":"/dept/paediatrics","/surgery":"/dept/surgery","/orthopaedics":"/dept/orthopaedics","/ophthalmology":"/dept/ophthalmology","/gynae":"/dept/gynae","/otorhinolaryngology":"/dept/otorhinolaryngology","/anaesthesiology":"/dept/anaesthesiology","/physiology":"/dept/physiology","/anatomy":"/dept/anatomy","/committee":"/committees"};function uv(){const e=v.useRef(null);return v.useEffect(()=>{e.current&&e.current.querySelectorAll("a").forEach(t=>{const n=t.getAttribute("href");n&&bd[n]&&t.setAttribute("href",bd[n])})},[]),i.jsxs("div",{children:[i.jsx(H,{}),i.jsx("div",{ref:e,dangerouslySetInnerHTML:{__html:dv}}),i.jsx($,{})]})}const pv=`<section class="relative h-[50vh] min-h-[400px] flex items-center overflow-hidden">
  <div class="absolute inset-0 z-0">
      <img src="https://www.pmch-bd.org/images/yootheme/service-header.jpg" 
           alt="Background" 
           class="w-full h-full object-cover">
      <div class="absolute inset-0 bg-gradient-to-r from-white/90 via-white/40 to-transparent"></div>
  </div>

  <div class="relative z-10 max-w-7xl mx-auto px-6 w-full">
      <div class="max-w-3xl border-l-4 border-emerald-600 pl-6 md:pl-10">
          <span class="text-emerald-700 font-bold tracking-widest uppercase text-sm mb-2 block">Academic Curriculum</span>
          <h1 class="text-3xl md:text-3xl lg:text-3xl font-extrabold text-slate-900 leading-tight">
            Course Structure, Duration
            & Assessment in detail 
          </h1>
          <p class="mt-6 text-lg md:text-xl text-slate-700 leading-relaxed font-medium">
            Five academic years are transected as follows:
            </p>
            <p class="mt-6 text-lg md:text-xl text-slate-700 leading-relaxed font-medium">
              Graduation comprises of five academic years & requires one year compulsory rotatory internship programme in a recognized hospital in order to be registered under Bangladesh Medical & Dental Council.
              
            </p>
      </div>
  </div>
</section>

<div class="bg-slate-50 py-16 px-6">
  <div class="max-w-7xl mx-auto">
      <div class="grid lg:grid-cols-3 gap-12">
        <div class="lg:col-span-1 space-y-8">
          <div>
              <div class="grid md:grid-cols-1 gap-6">
                  <div class="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                      <h3 class="text-emerald-700 font-bold uppercase text-xs tracking-wider mb-2">Academic Degree</h3>
                      <p class="text-slate-700 font-semibold">Bachelor of Medicine & Bachelor of Surgery (MBBS)</p>
                  </div>
                  <div class="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                      <h3 class="text-emerald-700 font-bold uppercase text-xs tracking-wider mb-2">Medium of Instruction</h3>
                      <p class="text-slate-700 font-semibold">English</p>
                  </div>
                  <div class="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                      <h3 class="text-emerald-700 font-bold uppercase text-xs tracking-wider mb-2">Duration</h3>
                      <p class="text-slate-700 font-semibold">5 Years + 1 Year Mandatory Internship</p>
                  </div>
                
              </div>
          </div>

          
      </div>
          <div class="lg:col-span-2 space-y-8">
             

              <div class="bg-emerald-50 border-r-4 border-emerald-600 p-6 rounded-r-xl">
                  <h3 class="text-lg font-bold text-emerald-900 mb-2">Basic Information about MBBS Course</h3>
                  <ul class="space-y-2 text-emerald-800">
                      <li class="flex items-start">
                          <span class="mr-2">•</span>
                          <span>Name of the course: Bachelor of Medicine & Bachelor of Surgery (MBBS)</span>
                      </li>
                      <li class="flex items-start">
                          <span class="mr-2">•</span>
                          <span>Basic qualifications & prerequisite for entrance in MBBS Course: </span>
                      </li>
                      <li class="flex items-start">
                        <span class="mr-2">•</span>
                        <span>HSC or equivalent with Science.(Biology, Physics, Chemistry)</span>
                    </li>
                    <li class="flex items-start">
                        <span class="mr-2">•</span>
                        <span>Candidate has to secure required grade point in the SSC and HSC examinations.  </span>
                    </li>
                    <li class="flex items-start">
                      <span class="mr-2">•</span>
                      <span>Students selection procedure for MBBS course:  According to decision by the proper competent authority as per merit. </span>
                  </li>
                  <li class="flex items-start">
                      <span class="mr-2">•</span>
                      <span>Medium of Instruction: English </span>
                  </li>
                  <li class="flex items-start">
                    <span class="mr-2">•</span>
                    <span>Duration: MBBS course comprises of 5 Years, followed by mandatory logbook based rotatory internship for one year</span>
                </li>
                <li class="flex items-start">
                    <span class="mr-2">•</span>
                    <span>Course structure, subject with duration and professional examination</span>
                </li>
              </div>
          </div>

         

      </div>
  </div>
</div>

    

<section class="relative bg-white py-24 px-6 overflow-hidden">
  <div class="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-blue-50/50 to-transparent"></div>
  <div class="absolute -top-24 -right-24 w-96 h-96 bg-[#00984a]/5 rounded-full blur-3xl"></div>

  <div class="max-w-6xl mx-auto relative z-10">
    <div class="text-center mb-16">
      <div class="inline-block px-4 py-1.5 mb-4 text-xs font-bold tracking-[0.2em] text-blue-600 uppercase bg-blue-50 rounded-full">
        The MBBS course is divided into four phase.
      </div>
      <h2 class="text-4xl md:text-5xl font-serif text-slate-900 mb-6">The MBBS <span class="text-[#00984a] italic">Journey</span></h2>
      <p class="text-slate-500 max-w-2xl mx-auto font-light text-lg">
        A comprehensive four-phase academic structure designed to transform students into clinical experts.
      </p>
    </div>

    <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
      <button onclick="openPhase(event, 'p1')" class="phase-btn active group relative p-6 rounded-2xl border transition-all duration-300 text-left bg-white shadow-sm hover:shadow-md border-blue-600 ring-1 ring-blue-600">
        <span class="block text-xs font-bold text-blue-600 uppercase mb-2 tracking-tighter">Phase I</span>
        <span class="block text-sm font-semibold text-slate-800 leading-tight">1st Professional</span>
      </button>

      <button onclick="openPhase(event, 'p2')" class="phase-btn group relative p-6 rounded-2xl border transition-all duration-300 text-left bg-white border-slate-100 hover:border-blue-200">
        <span class="block text-xs font-bold text-slate-400 uppercase mb-2 tracking-tighter">Phase II</span>
        <span class="block text-sm font-semibold text-slate-700 leading-tight">2nd Professional</span>
      </button>

      <button onclick="openPhase(event, 'p3')" class="phase-btn group relative p-6 rounded-2xl border transition-all duration-300 text-left bg-white border-slate-100 hover:border-blue-200">
        <span class="block text-xs font-bold text-slate-400 uppercase mb-2 tracking-tighter">Phase III</span>
        <span class="block text-sm font-semibold text-slate-700 leading-tight">3rd Professional</span>
      </button>

      <button onclick="openPhase(event, 'p4')" class="phase-btn group relative p-6 rounded-2xl border transition-all duration-300 text-left bg-white border-slate-100 hover:border-blue-200">
        <span class="block text-xs font-bold text-slate-400 uppercase mb-2 tracking-tighter">Phase IV</span>
        <span class="block text-sm font-semibold text-slate-700 leading-tight">Final Professional</span>
      </button>
    </div>

    <div class="bg-slate-50/50 border border-slate-100 rounded-[2rem] p-8 md:p-12 min-h-[400px]">
      
      <div id="p1" class="phase-content block animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div class="flex flex-col md:flex-row gap-12">
          <div class="md:w-1/3">
            <div class="text-6xl font-serif text-blue-100 mb-4">01</div>
            <h3 class="text-2xl font-bold text-slate-900 mb-2">Pre-Clinical Phase</h3>
            <p class="text-blue-600 font-medium">Duration: 1.5 Years</p>
          </div>
          <div class="md:w-2/3 space-y-8">
            <div>
              <h4 class="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">Core Subjects</h4>
              <div class="flex flex-wrap gap-2">
                <span class="px-4 py-2 bg-white border border-slate-200 rounded-lg text-slate-700 text-sm font-medium">Anatomy</span>
                <span class="px-4 py-2 bg-white border border-slate-200 rounded-lg text-slate-700 text-sm font-medium">Physiology</span>
                <span class="px-4 py-2 bg-white border border-slate-200 rounded-lg text-slate-700 text-sm font-medium">Biochemistry</span>
              </div>
            </div>
            <div>
              <h4 class="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">Final Assessment</h4>
              <p class="text-slate-600 leading-relaxed font-light italic">
                First Professional MBBS examination. Includes comprehensive theory, viva, and practical assessments in all core pre-clinical subjects.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div id="p2" class="phase-content hidden animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div class="flex flex-col md:flex-row gap-12">
          <div class="md:w-1/3">
            <div class="text-6xl font-serif text-blue-100 mb-4">02</div>
            <h3 class="text-2xl font-bold text-slate-900 mb-2">Para-Clinical Intro</h3>
            <p class="text-blue-600 font-medium">Duration: 1.0 Year</p>
          </div>
          <div class="md:w-2/3 space-y-8">
             <div>
              <h4 class="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">Examination Subjects</h4>
              <div class="flex flex-wrap gap-2">
                <span class="px-4 py-2 bg-white border border-slate-200 rounded-lg text-slate-700 text-sm font-medium">Pharmacology</span>
                <span class="px-4 py-2 bg-white border border-slate-200 rounded-lg text-slate-700 text-sm font-medium text-nowrap">Forensic Medicine</span>
              </div>
            </div>
            <div>
              <h4 class="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">Teaching Scope</h4>
              <p class="text-slate-600 text-sm leading-relaxed">
                Includes lectures in General Pathology, Microbiology, and introductory Medicine/Surgery clinical rotations.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div id="p3" class="phase-content hidden animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div class="flex flex-col md:flex-row gap-12">
          <div class="md:w-1/3">
            <div class="text-6xl font-serif text-blue-100 mb-4">03</div>
            <h3 class="text-2xl font-bold text-slate-900 mb-2">Para-Clinical Mastery</h3>
            <p class="text-blue-600 font-medium">Duration: 1.0 Year</p>
          </div>
          <div class="md:w-2/3 space-y-8">
            <div>
              <h4 class="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">Core Subjects</h4>
              <div class="flex flex-wrap gap-2">
                <span class="px-4 py-2 bg-white border border-slate-200 rounded-lg text-slate-700 text-sm font-medium">Pathology</span>
                <span class="px-4 py-2 bg-white border border-slate-200 rounded-lg text-slate-700 text-sm font-medium">Microbiology</span>
                <span class="px-4 py-2 bg-white border border-slate-200 rounded-lg text-slate-700 text-sm font-medium">Community Medicine</span>
              </div>
            </div>
            <div>
              <h4 class="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">Clinical Exposure</h4>
              <p class="text-slate-600 text-sm leading-relaxed">
                Formal teaching continues in Gynae/Obs, Medicine, and Surgery alongside the core Para-clinical exam subjects.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div id="p4" class="phase-content hidden animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div class="flex flex-col md:flex-row gap-12">
          <div class="md:w-1/3">
            <div class="text-6xl font-serif text-blue-100 mb-4">04</div>
            <h3 class="text-2xl font-bold text-slate-900 mb-2">Clinical Final</h3>
            <p class="text-blue-600 font-medium">Duration: 1.5 Years</p>
          </div>
          <div class="md:w-2/3 space-y-8">
            <div>
              <h4 class="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">Major Disciplines</h4>
              <p class="text-slate-700 text-sm font-medium mb-4">Medicine, Surgery, Pediatrics, ENT, Eye, Gynae & Obs.</p>
              <h4 class="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">Allied Specialties</h4>
              <p class="text-slate-600 text-xs leading-relaxed">
                Dermatology, Psychiatry, Cardiology, Nephrology, Urology, Neurosurgery, Orthopaedics, and more.
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

<script>
function openPhase(evt, phaseName) {
  const contents = document.getElementsByClassName("phase-content");
  for (let i = 0; i < contents.length; i++) {
    contents[i].classList.add("hidden");
  }

  const buttons = document.getElementsByClassName("phase-btn");
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove("border-blue-600", "ring-1", "ring-blue-600", "active");
    buttons[i].querySelector('span:first-child').classList.replace("text-blue-600", "text-slate-400");
  }

  document.getElementById(phaseName).classList.remove("hidden");
  evt.currentTarget.classList.add("border-blue-600", "ring-1", "ring-blue-600", "active");
  evt.currentTarget.querySelector('span:first-child').classList.replace("text-slate-400", "text-blue-600");
}
<\/script>
  
  
  <div class="text-gray-600 leading-relaxed text-2xl bg-gray-900 p-20 w-full">
    <p class="text-white  leading-relaxed text-2xl mx-auto max-w-3xl">
      Five Academic years have been structured for teaching learning and assessment programs. Teaching learning programs are conducted through lecture, tutorial, demonstration, clinical and performing the task. Assessment program is conducted through both formative and summative procedures. Formative or continuous in-course assessment is conducted by the institute through item, card & term examinations and attendance in the classes in each phase. Summative or end course assessment is conducted by the University through professional examinations twice in a year in the month of May & November. These end course (summative) examinations are conducted and results published within the specified time of the academic calendar.</p>
  </div>`,Sd={"/biochymistry":"/dept/biochymistry","/medicine":"/dept/medicine","/forensic":"/dept/forensic","/pathology":"/dept/pathology","/microbiology":"/dept/microbiology","/pharmacology":"/dept/pharmacology","/allied":"/dept/allied","/paediatrics":"/dept/paediatrics","/surgery":"/dept/surgery","/orthopaedics":"/dept/orthopaedics","/ophthalmology":"/dept/ophthalmology","/gynae":"/dept/gynae","/otorhinolaryngology":"/dept/otorhinolaryngology","/anaesthesiology":"/dept/anaesthesiology","/physiology":"/dept/physiology","/anatomy":"/dept/anatomy","/committee":"/committees"};function fv(){const e=v.useRef(null);return v.useEffect(()=>{e.current&&e.current.querySelectorAll("a").forEach(t=>{const n=t.getAttribute("href");n&&Sd[n]&&t.setAttribute("href",Sd[n])})},[]),i.jsxs("div",{children:[i.jsx(H,{}),i.jsx("div",{ref:e,dangerouslySetInnerHTML:{__html:pv}}),i.jsx($,{})]})}const hv=`<section class="relative h-[50vh] min-h-[400px] flex items-center overflow-hidden">
    <div class="absolute inset-0 z-0">
        <img src="https://www.pmch-bd.org/images/yootheme/service-header.jpg" 
             alt="Background" 
             class="w-full h-full object-cover">
        <div class="absolute inset-0 bg-gradient-to-r from-white/90 via-white/40 to-transparent"></div>
    </div>

    <div class="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div class="max-w-2xl border-l-4 border-emerald-600 pl-6 md:pl-10">
            <span class="text-emerald-700 font-bold tracking-widest uppercase text-sm mb-2 block">Examination Policies</span>
            <h1 class="text-3xl md:text-3xl lg:text-3xl font-extrabold text-slate-900 leading-tight">
              Eligibility for Appearing in
              Professional (University) Examinations 
            </h1>
            <p class="mt-6 text-lg md:text-xl text-slate-700 leading-relaxed font-medium">
              Professional (University) Examinations are held two times a year in May and November. Pre-requisites for appearing in the Professional Examinations:
              </p>
        </div>
    </div>
</section>

<div class="bg-slate-50 max-w-7xl mx-auto mt-20 py-16 px-6">
  <div class="max-w-7xl mx-auto">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          <div class="w-full">
              <h2 class="text-3xl font-bold text-slate-800 mb-6">Candidate Pre-requisites</h2>
              <div class="space-y-6">
                  <div class="flex gap-4">
                      <div class="flex-shrink-0 w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-700 font-bold">1</div>
                      <div>
                          <h3 class="text-lg font-bold text-slate-800">Attendance Requirement</h3>
                          <p class="text-slate-600">Minimum 75% attendance in all classes (Lecture, Tutorial, and Practical/Clinical) for each subject.</p>
                      </div>
                  </div>

                  <div class="flex gap-4">
                      <div class="flex-shrink-0 w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-700 font-bold">2</div>
                      <div>
                          <h3 class="text-lg font-bold text-slate-800">Internal Assessment</h3>
                          <p class="text-slate-600">Successful completion of all items, card-ending exams, and term-ending assessments with a qualifying score.</p>
                      </div>
                  </div>
              </div>
          </div>

          <div class="w-full">
              <h2 class="text-3xl font-bold text-slate-800 mb-6">Additional Criteria</h2>
              <div class="space-y-6">
                  <div class="flex gap-4">
                      <div class="flex-shrink-0 w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-700 font-bold">3</div>
                      <div>
                          <h3 class="text-lg font-bold text-slate-800">Clearance & Conduct</h3>
                          <p class="text-slate-600">Certificate of good conduct from the respective department heads and clearance of all college dues.</p>
                      </div>
                  </div>

                  <div class="flex gap-4">
                      <div class="flex-shrink-0 w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-700 font-bold">4</div>
                      <div>
                          <h3 class="text-lg font-bold text-slate-800">Professional Ethics</h3>
                          <p class="text-slate-600">Adherence to the college code of ethics and demonstration of professional behavior during clinical rotations.</p>
                      </div>
                  </div>
              </div>
          </div>

      </div>
  </div>
</div>


  

<section class="relative bg-white py-24 px-6 overflow-hidden ">
  <div class="absolute inset-0 opacity-[0.03] pointer-events-none" style="background-image: radial-gradient(#00984a 1px, transparent 1px); background-size: 40px 40px;"></div>

  <div class="max-w-6xl mx-auto relative z-10">
    <div class="text-center mb-16">
      <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold uppercase tracking-widest mb-6 border border-emerald-100">
        <span class="relative flex h-2 w-2">
          <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>
        Professional Eligibility
      </div>
      <h2 class="text-4xl md:text-5xl font-serif text-slate-900 leading-tight">
        Examination <span class="text-[#00984a] italic italic">Prerequisites</span>
      </h2>
      <p class="text-slate-500 mt-4 font-light max-w-xl mx-auto">Candidates must fulfill the following regulatory criteria to sit for the Professional MBBS Examinations.</p>
    </div>

    <div class="flex flex-wrap justify-center gap-4 mb-12">
      <button onclick="openEligibility(event, 'e1')" class="elig-btn active px-6 py-3 rounded-xl border-2 border-blue-600 bg-blue-50 text-blue-700 font-bold text-sm transition-all">1st Prof</button>
      <button onclick="openEligibility(event, 'e2')" class="elig-btn px-6 py-3 rounded-xl border-2 border-slate-100 bg-white text-slate-400 font-bold text-sm hover:border-blue-200 transition-all">2nd Prof</button>
      <button onclick="openEligibility(event, 'e3')" class="elig-btn px-6 py-3 rounded-xl border-2 border-slate-100 bg-white text-slate-400 font-bold text-sm hover:border-blue-200 transition-all">3rd Prof</button>
      <button onclick="openEligibility(event, 'e4')" class="elig-btn px-6 py-3 rounded-xl border-2 border-slate-100 bg-white text-slate-400 font-bold text-sm hover:border-blue-200 transition-all">4th Prof</button>
    </div>

    <div class="max-w-7xl mx-auto">
      <div id="eligibility-container" class="bg-slate-50 rounded-[2.5rem] border border-slate-200 p-8 md:p-12 shadow-2xl shadow-slate-200/50">
        
        <div id="elig-header" class="mb-8 border-b border-slate-200 pb-6">
          <h3 class="text-2xl font-serif text-slate-800" id="elig-title">1st Professional MBBS Candidate Requirements</h3>
          <p class="text-slate-500 text-sm mt-1 italic">Mandatory compliance for academic clearance</p>
        </div>

        <ul class="space-y-4" id="elig-list">
          <li class="flex items-start gap-4 p-4 rounded-2xl bg-white border border-slate-100 shadow-sm transition-transform hover:scale-[1.02]">
            <div class="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center mt-1">
              <svg class="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path></svg>
            </div>
            <div>
              <p class="text-slate-700 font-medium">Course Completion</p>
              <p class="text-slate-500 text-xs">Must have successfully completed the specified curriculum in all examination subjects.</p>
            </div>
          </li>

          <li class="flex items-start gap-4 p-4 rounded-2xl bg-white border border-slate-100 shadow-sm transition-transform hover:scale-[1.02]">
            <div class="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center mt-1">
              <svg class="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path></svg>
            </div>
            <div>
              <p class="text-slate-700 font-medium">Attendance Threshold (75%)</p>
              <p class="text-slate-500 text-xs">Minimum 75% attendance in total classes including Lectures, Tutorials, and Practicals.</p>
            </div>
          </li>

          <li class="flex items-start gap-4 p-4 rounded-2xl bg-white border border-slate-100 shadow-sm transition-transform hover:scale-[1.02]">
            <div class="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center mt-1">
              <svg class="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path></svg>
            </div>
            <div>
              <p class="text-slate-700 font-medium">Academic Performance (60%)</p>
              <p class="text-slate-500 text-xs">Achieved at least 60% marks in all three Term Examinations (Formative assessment).</p>
            </div>
          </li>

          <li class="flex items-start gap-4 p-4 rounded-2xl bg-white border border-slate-100 shadow-sm transition-transform hover:scale-[1.02]">
            <div class="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center mt-1">
              <svg class="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path></svg>
            </div>
            <div>
              <p class="text-slate-700 font-medium">Conduct & Dues Clearance</p>
              <p class="text-slate-500 text-xs">Requires a Certificate of Good Conduct, full payment of college dues, and university exam fees.</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>

<script>
function openEligibility(evt, phaseId) {
  const titles = {
    'e1': '1st Professional MBBS',
    'e2': '2nd Professional MBBS',
    'e3': '3rd Professional MBBS',
    'e4': '4th Professional MBBS'
  };

  // UI Feedback for Buttons
  const buttons = document.getElementsByClassName("elig-btn");
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove("border-blue-600", "bg-blue-50", "text-blue-700", "active");
    buttons[i].classList.add("border-slate-100", "bg-white", "text-slate-400");
  }

  evt.currentTarget.classList.add("border-blue-600", "bg-blue-50", "text-blue-700", "active");
  evt.currentTarget.classList.remove("border-slate-100", "bg-white", "text-slate-400");

  // Update Title with animation
  const titleEl = document.getElementById('elig-title');
  titleEl.style.opacity = 0;
  setTimeout(() => {
    titleEl.innerText = '$ {titles[phaseId]} Candidate Requirements';
    titleEl.style.opacity = 1;
  }, 150);

  // Re-trigger content animation
  const container = document.getElementById('eligibility-container');
  container.classList.remove('animate-fadeIn');
  void container.offsetWidth; // Trigger reflow
  container.classList.add('animate-fadeIn');
}
<\/script>

<style>
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }
  .animate-fadeIn {
    animation: fadeIn 0.5s cubic-bezier(0.4, 0, 0.2, 1) forwards;
  }
  #elig-title { transition: opacity 0.2s ease; }
</style>
  
  
  <div class="text-gray-600 leading-relaxed text-2xl bg-gray-900 p-20 w-full">
    <p class="text-white  leading-relaxed text-2xl mx-auto max-w-3xl">
      
Merit position & honours mark

Merit positions are declared only in the cases of regular students.
A student must get subject wise 85% of the total marks to avail honours mark.

Internship Training

Students who successfully pass the Final Professional MBBS Examination are required to undergo one year internship training in a BM&DC recognized hospital to be eligible for registration by BM&DC. Popular Medical College Hospital is recognized by BM&DC for such training. Internship is offered to the graduates of Popular Medical College.
</div>`,jd={"/biochymistry":"/dept/biochymistry","/medicine":"/dept/medicine","/forensic":"/dept/forensic","/pathology":"/dept/pathology","/microbiology":"/dept/microbiology","/pharmacology":"/dept/pharmacology","/allied":"/dept/allied","/paediatrics":"/dept/paediatrics","/surgery":"/dept/surgery","/orthopaedics":"/dept/orthopaedics","/ophthalmology":"/dept/ophthalmology","/gynae":"/dept/gynae","/otorhinolaryngology":"/dept/otorhinolaryngology","/anaesthesiology":"/dept/anaesthesiology","/physiology":"/dept/physiology","/anatomy":"/dept/anatomy","/committee":"/committees"};function mv(){const e=v.useRef(null);return v.useEffect(()=>{e.current&&e.current.querySelectorAll("a").forEach(t=>{const n=t.getAttribute("href");n&&jd[n]&&t.setAttribute("href",jd[n])})},[]),i.jsxs("div",{children:[i.jsx(H,{}),i.jsx("div",{ref:e,dangerouslySetInnerHTML:{__html:hv}}),i.jsx($,{})]})}const gv=`<section
  class="relative h-[60vh]  bg-cover bg-center"
  style="background-image: url('https://www.pmch-bd.org/images/PMC/departments/physiology1.jpg');">
<!-- Dark Overlay -->

<!-- Content -->
<div class="relative max-w-7xl mx-auto px-6 h-full flex items-center">

<!-- Content Box -->
<div class="max-w-xl me-auto  backdrop-blur-sm text-white p-8 md:p-10">
  





  <h1 class="text-3xl md:text-3xl text-gray-900 font-bold leading-tight">
    DEPARTMENT OF PHYSIOLOGY
  </h1>
  <p>

    The Department of Physiology is provided with a well equipped laboratory and other ancillary facilities. Hands-on-training are conducted in Physiology Laboratory during practical works to provide an opportunity to the students to make them acquainted with instruments and their use. The students are encouraged to draw their own personal observations in relation to concepts developed during theoretical sessions.</p>

  
 

</div>

</div>

</section>
  <section class="bg-white py-12 px-6 md:px-20 font-serif">
    <div class="max-w-7xl mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        
        <div class="relative group overflow-hidden shadow-xl rounded-sm">
          <img 
            src="https://www.pmch-bd.org/images/PMC/departments/phy2022.jpg" 
            alt="Medical Students" 
            class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div class="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors"></div>
        </div>
  
        <div class="relative group overflow-hidden shadow-xl rounded-sm">
          <img 
            src="https://www.pmch-bd.org/images/PMC/departments/phy2022_1.jpg" 
            alt="Laboratory Facility" 
            class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div class="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors"></div>
        </div>
  
      </div>
    </div>
  </section>

  <div class="max-w-7xl mx-auto py-10 px-4 md:px-6 font-serif">
    <div class="overflow-x-auto bg-white shadow-md rounded-sm border border-gray-200">
      <table class="w-full text-start border-collapse">
        <thead>
          <tr class="bg-gray-50 border-b border-gray-200">
            <th colspan="2" class="px-6 py-4 text-xs font-bold uppercase tracking-widest text-blue-900 border-r border-gray-200 w-1/2">
              From left to right From first Left Side Picture:
            </th>
            
          </tr>
          <tr class="bg-gray-50 border-b border-gray-200">
            <th class="px-6 py-4 text-xs font-bold uppercase tracking-widest text-blue-900 border-r border-gray-200 w-1/2">
              First row:
            </th>
            
            <th class="px-6 py-4 text-xs font-bold uppercase tracking-widest text-blue-900 w-1/2">
              Second row (Lecturers):
            </th>
          </tr>
        </thead>
        



        <tbody class="text-sm text-gray-600">
          <tr class="border-b border-gray-100 hover:bg-gray-50 transition-colors">
            <td class="px-6 py-4 ">Dr. Razia Sultana, Asstt. Prof.</td>
            <td class="px-6 py-4 italic">Dr. Nazia Israfil</td>
          </tr>
          <tr class="border-b border-gray-100 hover:bg-gray-50 transition-colors">
            <td class="px-6 py-4 ">Prof. Shameema Begum</td>
            <td class="px-6 py-4 italic">Dr. Smriti Devnath</td>
          </tr>
          <tr class="border-b border-gray-100 hover:bg-gray-50 transition-colors">
            <td class="px-6 py-4 ">Dr. Farzana Yesmin, Assoc. Prof.</td>
            <td class="px-6 py-4 italic">Dr. Afrena Rahman</td>
          </tr>
          <tr class="border-b border-gray-100 hover:bg-gray-50 transition-colors">
            <td class="px-6 py-4 ">Dr. Homaira Binte Maudud, Lecturer</td>
            <td class="px-6 py-4 italic">Dr. Mahamudur Rahman</td>
          </tr>
          <tr class="border-b border-gray-100 hover:bg-gray-50 transition-colors">
            <td class="px-6 py-4 "></td>
            <td class="px-6 py-4">Dr. Md. Rashed Bhuiyan</td>
            
          </tr>
          <tr class="border-b border-gray-100 hover:bg-gray-50 transition-colors">
            <td class="px-6 py-4 "></td>
            <td class="px-6 py-4">Dr. Md. Abdullah-Al-Mahmud</td>
          </tr>
          
          
        </tbody>
      </table>
    </div>
  </div>`,kd={"/biochymistry":"/dept/biochymistry","/medicine":"/dept/medicine","/forensic":"/dept/forensic","/pathology":"/dept/pathology","/microbiology":"/dept/microbiology","/pharmacology":"/dept/pharmacology","/allied":"/dept/allied","/paediatrics":"/dept/paediatrics","/surgery":"/dept/surgery","/orthopaedics":"/dept/orthopaedics","/ophthalmology":"/dept/ophthalmology","/gynae":"/dept/gynae","/otorhinolaryngology":"/dept/otorhinolaryngology","/anaesthesiology":"/dept/anaesthesiology","/physiology":"/dept/physiology","/anatomy":"/dept/anatomy","/committee":"/committees"};function xv(){const e=v.useRef(null);return v.useEffect(()=>{e.current&&e.current.querySelectorAll("a").forEach(t=>{const n=t.getAttribute("href");n&&kd[n]&&t.setAttribute("href",kd[n])})},[]),i.jsxs("div",{children:[i.jsx(H,{}),i.jsx("div",{ref:e,dangerouslySetInnerHTML:{__html:gv}}),i.jsx($,{})]})}const yv=`<section class="relative h-[50vh] min-h-[400px] flex items-center overflow-hidden">
  <div class="absolute inset-0 z-0">
      <img src="https://www.pmch-bd.org/images/yootheme/service-header.jpg" 
           alt="Background" 
           class="w-full h-full object-cover">
      <div class="absolute inset-0 bg-gradient-to-r from-white/90 via-white/40 to-transparent"></div>
  </div>

  <div class="relative z-10 max-w-7xl mx-auto px-6 w-full">
      <div class="max-w-2xl border-l-4 border-emerald-600 pl-6 md:pl-10">
          <span class="text-emerald-700 font-bold tracking-widest uppercase text-sm mb-2 block">Financial Information</span>
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight">
              College <span class="text-emerald-600">Fees</span>
          </h1>
          <p class="mt-6 text-lg md:text-xl text-slate-700 leading-relaxed font-medium">
              Transparent and structured fee policies designed to support high-quality medical education and campus infrastructure.
          </p>
      </div>
  </div>
</section>

<div class="bg-slate-50 py-16 px-6">
  <div class="max-w-7xl mx-auto">
      <div class="grid lg:grid-cols-2 gap-12 items-center">
          
          <div class="order-2 lg:order-1">
              <h2 class="text-3xl font-bold text-slate-800 mb-6">Fee Structure & Payment</h2>
              <div class="space-y-4 text-slate-600 text-lg leading-relaxed">
                  <p>
                      The fee structure for the MBBS course is determined in accordance with the regulations set by the <span class="text-emerald-700 font-semibold">Ministry of Health and Family Welfare</span> and the relevant governing authorities.
                  </p>
                  <p>
                      All students are required to clear their dues within the stipulated deadlines to ensure uninterrupted access to academic and residential facilities. Detailed schedules for tuition and other administrative fees are provided at the start of each session.
                  </p>
              </div>
              
              <div class="mt-8 flex flex-wrap gap-4">
                  <div class="flex items-center bg-white px-4 py-2 rounded-lg shadow-sm border border-slate-200">
                      <span class="w-3 h-3 bg-emerald-500 rounded-full mr-2"></span>
                      <span class="text-sm font-bold text-slate-700">Official Bank Deposits Only</span>
                  </div>
                  <div class="flex items-center bg-white px-4 py-2 rounded-lg shadow-sm border border-slate-200">
                      <span class="w-3 h-3 bg-emerald-500 rounded-full mr-2"></span>
                      <span class="text-sm font-bold text-slate-700">Detailed Receipt Provided</span>
                  </div>
              </div>

              <div class="mt-10">
                  <div class="inline-flex items-center text-emerald-700 font-bold hover:text-emerald-800 transition-colors cursor-pointer group">
                      <span>View Detailed Fee Schedule</span>
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                  </div>
              </div>
          </div>

          <div class="order-1 lg:order-2 group">
              <div class="relative overflow-hidden rounded-2xl shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
                  <div class="absolute inset-0 border-[12px] border-white/20 z-10 pointer-events-none"></div>
                  
                  <img 
                      src="https://www.pmch-bd.org/images/PMC/sac1.jpg" 
                      alt="Administrative Office" 
                      class="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                      <p class="text-white font-medium">College Accounts & Administrative Services</p>
                  </div>
              </div>
          </div>

      </div>
  </div>
</div>


<section class="bg-white py-16 px-6 md:px-20 ">
  <div class="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 lg:gap-24">
    
    <div class="flex-1">
      <h2 class="text-xl font-bold text-gray-800 mb-6">College Fees</h2>
      
      <div class="space-y-4 text-gray-600 leading-relaxed text-sm md:text-base">
        <ul class="list-disc list-outside ml-5 space-y-4">
          <li>
            The admission fee & monthly tuition fee for the session is as per government order.
Failure to pay the monthly tuition fee shall incur a fine per day which will be charged upto the end of the next month. The name of the student will be struck off from the college register on failure to pay the tuition fee for 2 (two) consecutive months.
Other charges (refundable and non-refundable) for facilities of the college may require to pay time to time.
Detail information regarding this will be available at the college office as and when necessary.
          </li>
        </ul>
        
        
      </div>
    </div>

    <div class="flex-1">
      <h2 class="text-xl font-bold text-gray-800 mb-6">Re-admission</h2>
      
      <div class="space-y-6 text-gray-600 leading-relaxed text-sm md:text-base">
        <p>
          When the name of a student is struck off from the college register he / she will have to seek readmission on payment of full arrear dues along with the fine & re-admission fee. Re-admission fee is BDT 25,000/- (Twenty five thousand) only. A student's name may be stuck off from the college register under the following circumstances:</p>
        
        
        
        <ul class="list-disc list-outside ml-5 space-y-3">
          <li>Remaining absent from classes for one month without prior permission.</li>
          <li>Non-payment of tuition fees for consecutive two months.</li>
          <li>On disciplinary ground (as decided by academic council).</li>
        </ul>
      </div>
    </div>

  </div>
</section>`,Cd={"/biochymistry":"/dept/biochymistry","/medicine":"/dept/medicine","/forensic":"/dept/forensic","/pathology":"/dept/pathology","/microbiology":"/dept/microbiology","/pharmacology":"/dept/pharmacology","/allied":"/dept/allied","/paediatrics":"/dept/paediatrics","/surgery":"/dept/surgery","/orthopaedics":"/dept/orthopaedics","/ophthalmology":"/dept/ophthalmology","/gynae":"/dept/gynae","/otorhinolaryngology":"/dept/otorhinolaryngology","/anaesthesiology":"/dept/anaesthesiology","/physiology":"/dept/physiology","/anatomy":"/dept/anatomy","/committee":"/committees"};function vv(){const e=v.useRef(null);return v.useEffect(()=>{e.current&&e.current.querySelectorAll("a").forEach(t=>{const n=t.getAttribute("href");n&&Cd[n]&&t.setAttribute("href",Cd[n])})},[]),i.jsxs("div",{children:[i.jsx(H,{}),i.jsx("div",{ref:e,dangerouslySetInnerHTML:{__html:yv}}),i.jsx($,{})]})}const wv=`<section
class="relative h-[60vh]  bg-cover bg-center"
style="background-image: url('https://www.pmch-bd.org/images/yootheme/service-header.jpg');"
>
<!-- Dark Overlay -->

<!-- Content -->
<div class="relative max-w-7xl mx-auto px-6 h-full flex items-center">
  
  <!-- Content Box -->
  <div class="max-w-7xl mx-auto bg-gray-500/10 backdrop-blur-sm text-white p-8 md:p-10 rounded-xl shadow-lg">
    
    <h1 class="text-4xl md:text-5xl font-bold leading-tight">
        PMC Governing Body
    </h1>
   
  </div>
</div>
</section>


<div class="bg-white min-h-screen  text-gray-800">
    <div class="max-w-7xl mx-auto px-6 py-12 flex flex-col items-center">
      
      <div class="mb-8">
        <img src="/assets/PMCH.gif" alt="Popular Medical College Logo" class="h-32 w-auto object-contain" />
      </div>
  
      <h1 class="font-serif text-4xl md:text-5xl text-[#333] mb-8 text-center">
        Popular Medical College
      </h1>
  
      
  
      <div class="mt-12 w-full overflow-hidden rounded-sm shadow-lg">
        <img 
          src="https://www.pmch-bd.org/images/Governing_Body_07202025.jpg" 
          alt="College Building" 
          class="w-full h-auto object-cover"
        />
      </div>
    
  
     
      
      
    </div>
  </div>`,Ed={"/biochymistry":"/dept/biochymistry","/medicine":"/dept/medicine","/forensic":"/dept/forensic","/pathology":"/dept/pathology","/microbiology":"/dept/microbiology","/pharmacology":"/dept/pharmacology","/allied":"/dept/allied","/paediatrics":"/dept/paediatrics","/surgery":"/dept/surgery","/orthopaedics":"/dept/orthopaedics","/ophthalmology":"/dept/ophthalmology","/gynae":"/dept/gynae","/otorhinolaryngology":"/dept/otorhinolaryngology","/anaesthesiology":"/dept/anaesthesiology","/physiology":"/dept/physiology","/anatomy":"/dept/anatomy","/committee":"/committees"};function bv(){const e=v.useRef(null);return v.useEffect(()=>{e.current&&e.current.querySelectorAll("a").forEach(t=>{const n=t.getAttribute("href");n&&Ed[n]&&t.setAttribute("href",Ed[n])})},[]),i.jsxs("div",{children:[i.jsx(H,{}),i.jsx("div",{ref:e,dangerouslySetInnerHTML:{__html:wv}}),i.jsx($,{})]})}const Sv=`<section class="relative h-[50vh] min-h-[400px] flex items-center overflow-hidden">
    <div class="absolute inset-0 z-0">
        <img src="https://www.pmch-bd.org/images/yootheme/service-header.jpg" 
             alt="Background" 
             class="w-full h-full object-cover">
        <div class="absolute inset-0 bg-gradient-to-r from-white/90 via-white/40 to-transparent"></div>
    </div>

    <div class="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div class="max-w-2xl border-l-4 border-emerald-600 pl-6 md:pl-10">
            <span class="text-emerald-700 font-bold tracking-widest uppercase text-sm mb-2 block">Communication & Support</span>
            <h1 class="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight">
                Liaison with Parents
            </h1>
            <p class="mt-6 text-lg md:text-xl text-slate-700 leading-relaxed font-medium">
              College office serves as a bridge between the college administration & the parents/guardians. Parents/guardians meeting with the teachers and college administration is arranged regularly.
           
              </p>
        </div>
    </div>
</section>

<div class="bg-slate-50 py-16 px-6">
    <div class="max-w-7xl mx-auto">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
            
            <div class="order-2 lg:order-1">
                <h2 class="text-3xl font-bold text-slate-800 mb-6">Partnership in Education</h2>
                <div class="space-y-4 text-slate-600 text-lg leading-relaxed">
                    <p>
                      College office serves as a bridge between the college administration & the parents/guardians. Parents/guardians meeting with the teachers and college administration is arranged regularly. Student progress reports are communicated to the parents/guardians usually at the end of the term, also as and when required. Matters relating to discipline & violation of college rules & regulations along with the decision of academic council are also communicated to the parents/guardians as and when necessary.
                    
                      </p>
                    
                </div>
                
                <div class="mt-8 flex flex-wrap gap-4">
                    <div class="flex items-center bg-white px-4 py-2 rounded-lg shadow-sm border border-slate-200">
                        <span class="w-3 h-3 bg-emerald-500 rounded-full mr-2"></span>
                        <span class="text-sm font-bold text-slate-700">Regular Progress Reports</span>
                    </div>
                    <div class="flex items-center bg-white px-4 py-2 rounded-lg shadow-sm border border-slate-200">
                        <span class="w-3 h-3 bg-emerald-500 rounded-full mr-2"></span>
                        <span class="text-sm font-bold text-slate-700">Parent-Teacher Meetings</span>
                    </div>
                </div>
            </div>

            <div class="order-1 lg:order-2 group">
                <div class="relative overflow-hidden rounded-2xl shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
                    <div class="absolute inset-0 border-[12px] border-white/20 z-10 pointer-events-none"></div>
                    
                    <img 
                        src="https://www.pmch-bd.org/images/PMC/gt.jpg" 
                        alt="Parent Teacher Liaison" 
                        class="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    
                    <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                        <p class="text-white font-medium">Fostering Strong Institutional Relationships</p>
                    </div>
                </div>
            </div>

        </div>
    </div>
</div>`,Nd={"/biochymistry":"/dept/biochymistry","/medicine":"/dept/medicine","/forensic":"/dept/forensic","/pathology":"/dept/pathology","/microbiology":"/dept/microbiology","/pharmacology":"/dept/pharmacology","/allied":"/dept/allied","/paediatrics":"/dept/paediatrics","/surgery":"/dept/surgery","/orthopaedics":"/dept/orthopaedics","/ophthalmology":"/dept/ophthalmology","/gynae":"/dept/gynae","/otorhinolaryngology":"/dept/otorhinolaryngology","/anaesthesiology":"/dept/anaesthesiology","/physiology":"/dept/physiology","/anatomy":"/dept/anatomy","/committee":"/committees"};function jv(){const e=v.useRef(null);return v.useEffect(()=>{e.current&&e.current.querySelectorAll("a").forEach(t=>{const n=t.getAttribute("href");n&&Nd[n]&&t.setAttribute("href",Nd[n])})},[]),i.jsxs("div",{children:[i.jsx(H,{}),i.jsx("div",{ref:e,dangerouslySetInnerHTML:{__html:Sv}}),i.jsx($,{})]})}const kv=`<section class="relative h-[50vh] min-h-[400px] flex items-center overflow-hidden">
    <div class="absolute inset-0 z-0">
        <img src="https://www.pmch-bd.org/images/yootheme/service-header.jpg" 
             alt="Background" 
             class="w-full h-full object-cover">
        <div class="absolute inset-0 bg-gradient-to-r from-white/90 via-white/40 to-transparent"></div>
    </div>

    <div class="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div class="max-w-2xl border-l-4 border-emerald-600 pl-6 md:pl-10">
            <span class="text-emerald-700 font-bold tracking-widest uppercase text-sm mb-2 block">Residential Facilities</span>
            <h1 class="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight">
                College Hostel
            </h1>
            <p class="mt-6 text-lg md:text-xl text-slate-700 leading-relaxed font-medium">
              The College has well furnished and secured female and male hostels for accommodation of students under the supervision of hostel superintendent. These are near to the college campus.
            
              </p>
        </div>
    </div>
</section>

<div class="bg-slate-50 py-16 px-6">
    <div class="max-w-7xl mx-auto">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
            
            <div class="order-2 lg:order-1">
                <h2 class="text-3xl font-bold text-slate-800 mb-6">Secure & Comfortable Living</h2>
                <div class="space-y-4 text-slate-600 text-lg leading-relaxed">
                    <p>
                      The College has well furnished and secured female and male hostels for accommodation of students under the supervision of hostel superintendent. These are near to the college campus.
                    
                      </p>
                   
                </div>
                
                <div class="mt-8 flex flex-wrap gap-4">
                    <div class="flex items-center bg-white px-4 py-2 rounded-lg shadow-sm border border-slate-200">
                        <span class="w-3 h-3 bg-emerald-500 rounded-full mr-2"></span>
                        <span class="text-sm font-bold text-slate-700">24/7 Security</span>
                    </div>
                    <div class="flex items-center bg-white px-4 py-2 rounded-lg shadow-sm border border-slate-200">
                        <span class="w-3 h-3 bg-blue-500 rounded-full mr-2"></span>
                        <span class="text-sm font-bold text-slate-700">Dedicated Supervision</span>
                    </div>
                </div>
            </div>

            <div class="order-1 lg:order-2 group">
                <div class="relative overflow-hidden rounded-2xl shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
                    <div class="absolute inset-0 border-[12px] border-white/20 z-10 pointer-events-none"></div>
                    
                    <img 
                        src="https://www.pmch-bd.org/templates/yootheme/cache/hostel1-9735ce8f.jpg" 
                        alt="College Hostel Facility" 
                        class="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    
                    <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                        <p class="text-white font-medium">Student Accommodation & Security</p>
                    </div>
                </div>
            </div>

        </div>
    </div>
</div>`,Pd={"/biochymistry":"/dept/biochymistry","/medicine":"/dept/medicine","/forensic":"/dept/forensic","/pathology":"/dept/pathology","/microbiology":"/dept/microbiology","/pharmacology":"/dept/pharmacology","/allied":"/dept/allied","/paediatrics":"/dept/paediatrics","/surgery":"/dept/surgery","/orthopaedics":"/dept/orthopaedics","/ophthalmology":"/dept/ophthalmology","/gynae":"/dept/gynae","/otorhinolaryngology":"/dept/otorhinolaryngology","/anaesthesiology":"/dept/anaesthesiology","/physiology":"/dept/physiology","/anatomy":"/dept/anatomy","/committee":"/committees"};function Cv(){const e=v.useRef(null);return v.useEffect(()=>{e.current&&e.current.querySelectorAll("a").forEach(t=>{const n=t.getAttribute("href");n&&Pd[n]&&t.setAttribute("href",Pd[n])})},[]),i.jsxs("div",{children:[i.jsx(H,{}),i.jsx("div",{ref:e,dangerouslySetInnerHTML:{__html:kv}}),i.jsx($,{})]})}const Ev=`<div class="max-w-7xl mx-auto my-10 px-4">
    <div class="overflow-hidden  rounded-lg">
        <h1 class="text-center text-[24px]">সাধারণ তথ্য </h1>
        
      <table class="min-w-full divide-y border divide-gray-200">
       
  
        <tbody class="bg-white divide-y divide-gray-200">
          <tr class="hover:bg-blue-50 transition-colors">
            <td class="px-6 py-4 whitespace-nowrap  text-center font-medium text-gray-900">ভর্তির জন্য অনুমোদিত আসন সংখ্যা</td>
            <td class="px-6 py-4 whitespace-nowrap  text-center text-gray-700">১০৫</td>
           
          </tr>
          <tr class="hover:bg-blue-50 transition-colors">
            <td class="px-6 py-4 whitespace-nowrap  text-center font-medium text-gray-900">সর্বমোট ছাত্র/ছাত্রীর সংখ্যা</td>
            <td class="px-6 py-4 whitespace-nowrap  text-center text-gray-700">৬৫১</td>
           
          </tr>
          <tr class="hover:bg-blue-50 transition-colors">
            <td class="px-6 py-4 whitespace-nowrap  text-center font-medium text-gray-900">হাসপাতালের শয্যা সংখ্যা</td>
            <td class="px-6 py-4 whitespace-nowrap  text-center text-gray-700">৬০০</td>
           
          </tr>
          <tr class="hover:bg-blue-50 transition-colors">
            <td class="px-6 py-4 whitespace-nowrap  text-center font-medium text-gray-900">Free Bed এর সংখ্যা</td>
            <td class="px-6 py-4 whitespace-nowrap  text-center text-gray-700">৬৬</td>
           
          </tr>
          <tr class="hover:bg-blue-50 transition-colors">
            <td class="px-6 py-4 whitespace-nowrap  text-center font-medium text-gray-900">বেড অকুপেন্সী (আনুমানিক)</td>
            <td class="px-6 py-4 whitespace-nowrap  text-center text-gray-700">৮০%</td>
            
          </tr>
          
        </tbody>
      </table>
    </div>
  </div>

  <div class="max-w-7xl mx-auto my-10 px-4">
    <h1 class="text-center text-[24px]">সরকার কর্তৃক একাডেমিক</h1>
    <div class="overflow-hidden border border-gray-200 rounded-lg ">
        
      <table class="min-w-full divide-y divide-gray-200">
       
  
        <tbody class="bg-white divide-y divide-gray-200">
          <tr class="hover:bg-blue-50 transition-colors">
            <td class="px-6 py-4 whitespace-nowrap  text-center font-medium text-gray-900">অনুমোদনের সেশন</td>
            <td class="px-6 py-4 whitespace-nowrap  text-center text-gray-700"> সরকার কর্তৃক সর্বশেষ পরিদর্শণ: ২০২৩ অনুমোদনের সেশন:  ২০২২-২০২৩ সেশন</td>
            
          </tr>
          <tr class="hover:bg-blue-50 transition-colors">
            <td class="px-6 py-4 whitespace-nowrap  text-center font-medium text-gray-900">বিএমএন্ডডিসি কর্তৃক একাডেমিক অনুমোদনের সেশন</td>
            <td class="px-6 py-4 whitespace-nowrap  text-center text-gray-700"> বিএমএন্ডডিসি কর্তৃক পরিদর্শণ: ২০২৩ অনুমোদনের সেশন:  ২০১৯-২০২০ সেশন</td>
            
          </tr>
          <tr class="hover:bg-blue-50 transition-colors">
            <td class="px-6 py-4 whitespace-nowrap  text-center font-medium text-gray-900">ঢকা বিশ্ববিদ্যালয় কর্তৃক একাডেমিক অনুমোদনের সেশন</td>
            <td class="px-6 py-4 whitespace-nowrap  text-center text-gray-700">ঢাকা বিশ্ববিদ্যালয় কর্তৃক পরিদর্শণ: ২০২৩  অনুমোদনের সেশন:  ২০২২-২০২৩ সেশন ।</td>
            
          </tr>
         
          
         
        </tbody>
      </table>
      
    </div>
  </div>
  <p class="text-center mb-20">**      পরবর্তী শেসন সমূহের একাডেমিক অনুমোদন প্রক্রিয়াধীন(আবেদিত)।</p>`,Rd={"/biochymistry":"/dept/biochymistry","/medicine":"/dept/medicine","/forensic":"/dept/forensic","/pathology":"/dept/pathology","/microbiology":"/dept/microbiology","/pharmacology":"/dept/pharmacology","/allied":"/dept/allied","/paediatrics":"/dept/paediatrics","/surgery":"/dept/surgery","/orthopaedics":"/dept/orthopaedics","/ophthalmology":"/dept/ophthalmology","/gynae":"/dept/gynae","/otorhinolaryngology":"/dept/otorhinolaryngology","/anaesthesiology":"/dept/anaesthesiology","/physiology":"/dept/physiology","/anatomy":"/dept/anatomy","/committee":"/committees"};function Nv(){const e=v.useRef(null);return v.useEffect(()=>{e.current&&e.current.querySelectorAll("a").forEach(t=>{const n=t.getAttribute("href");n&&Rd[n]&&t.setAttribute("href",Rd[n])})},[]),i.jsxs("div",{children:[i.jsx(H,{}),i.jsx("div",{ref:e,dangerouslySetInnerHTML:{__html:Ev}}),i.jsx($,{})]})}const Pv=`<section class="relative h-[50vh] min-h-[400px] flex items-center overflow-hidden">
    <div class="absolute inset-0 z-0">
        <img src="https://www.pmch-bd.org/images/yootheme/service-header.jpg" 
             alt="Background" 
             class="w-full h-full object-cover">
        <div class="absolute inset-0 bg-gradient-to-r from-white/90 via-white/40 to-transparent"></div>
    </div>

    <div class="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div class="max-w-2xl border-l-4 border-emerald-600 pl-6 md:pl-10">
            <span class="text-emerald-700 font-bold tracking-widest uppercase text-sm mb-2 block">Digital Infrastructure</span>
            <h1 class="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight">
                College IT Corner
            </h1>
            <p class="mt-6 text-lg md:text-xl text-slate-700 leading-relaxed font-medium">
              The College also provides ample facilities for the
              students to refresh their knowledge through
              modern technology along with internet facilities.
              </p>
        </div>
    </div>
</section>

<div class="bg-slate-50 py-16 px-6">
    <div class="max-w-7xl mx-auto">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
            
            <div class="order-2 lg:order-1">
                <h2 class="text-3xl font-bold text-slate-800 mb-6">Modern Technology & Connectivity</h2>
                <div class="space-y-4 text-slate-600 text-lg leading-relaxed">
                    <p>
                      The College also provides ample facilities for the
                      students to refresh their knowledge through
                      modern technology along with internet facilities.
                      The college has its own website with a built in link
                      with essential domains and sites. The page provides
                      all required information about the college, its
                      objective and specialty with regular updates. Faculty
                      details, admission policies and essential notices will
                      also be available. Interactive pages will be dedicated
                      for students, teachers and parents for suggesting
                      improvements in required fields.
                      </p>
                   
                </div>
                
                <div class="mt-8 flex flex-wrap gap-4">
                    <div class="flex items-center bg-white px-4 py-2 rounded-lg shadow-sm border border-slate-200">
                        <span class="w-3 h-3 bg-emerald-500 rounded-full mr-2"></span>
                        <span class="text-sm font-bold text-slate-700">High-Speed Internet</span>
                    </div>
                    <div class="flex items-center bg-white px-4 py-2 rounded-lg shadow-sm border border-slate-200">
                        <span class="w-3 h-3 bg-emerald-500 rounded-full mr-2"></span>
                        <span class="text-sm font-bold text-slate-700">Digital Resource Portal</span>
                    </div>
                    <div class="flex items-center bg-white px-4 py-2 rounded-lg shadow-sm border border-slate-200">
                        <span class="w-3 h-3 bg-emerald-500 rounded-full mr-2"></span>
                        <span class="text-sm font-bold text-slate-700">Interactive Feedback</span>
                    </div>
                </div>
            </div>

            <div class="order-1 lg:order-2 group">
                <div class="relative overflow-hidden rounded-2xl shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
                    <div class="absolute inset-0 border-[12px] border-white/20 z-10 pointer-events-none"></div>
                    
                    <img 
                        src="https://www.pmch-bd.org/images/PMC/ITC1.jpg" 
                        alt="College IT Center" 
                        class="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    
                    <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                        <p class="text-white font-medium">Digital Learning & Research Hub</p>
                    </div>
                </div>
            </div>

        </div>
    </div>
</div>`,Td={"/biochymistry":"/dept/biochymistry","/medicine":"/dept/medicine","/forensic":"/dept/forensic","/pathology":"/dept/pathology","/microbiology":"/dept/microbiology","/pharmacology":"/dept/pharmacology","/allied":"/dept/allied","/paediatrics":"/dept/paediatrics","/surgery":"/dept/surgery","/orthopaedics":"/dept/orthopaedics","/ophthalmology":"/dept/ophthalmology","/gynae":"/dept/gynae","/otorhinolaryngology":"/dept/otorhinolaryngology","/anaesthesiology":"/dept/anaesthesiology","/physiology":"/dept/physiology","/anatomy":"/dept/anatomy","/committee":"/committees"};function Rv(){const e=v.useRef(null);return v.useEffect(()=>{e.current&&e.current.querySelectorAll("a").forEach(t=>{const n=t.getAttribute("href");n&&Td[n]&&t.setAttribute("href",Td[n])})},[]),i.jsxs("div",{children:[i.jsx(H,{}),i.jsx("div",{ref:e,dangerouslySetInnerHTML:{__html:Pv}}),i.jsx($,{})]})}const Tv=`<div class="max-w-7xl mx-auto my-10 px-4">
    <div class="overflow-hidden  rounded-lg">
        <h1 class="text-center text-[24px]">প্রতিষ্ঠানের নামে জমির তথ্যাদি </h1>
        <p >দলিল নাম্বার  :</p>
      <table class="min-w-full divide-y border divide-gray-200">
        <thead class="bg-blue-900  text-white">
          <tr >
            <th scope="col" class="px-6 py-4 text-left  text-center  text-center font-semibold uppercase tracking-wider">
                ক্রমিক নং
            </th>
            <th scope="col" class="px-6 py-4 text-left  text-center  text-center font-semibold uppercase tracking-wider">
                দলিল নং
            </th>
            <th scope="col" class="px-6 py-4 text-left  text-center  text-center font-semibold uppercase tracking-wider">
                জমির পরিমান
            </th>
          </tr>
        </thead>
  
        <tbody class="bg-white divide-y divide-gray-200">
          <tr class="hover:bg-blue-50 transition-colors">
            <td class="px-6 py-4 whitespace-nowrap  text-center font-medium text-gray-900">০১</td>
            <td class="px-6 py-4 whitespace-nowrap  text-center text-gray-700">৬৪৯৮</td>
            <td class="px-6 py-4 whitespace-nowrap  text-center text-gray-600">৪৪.৩০ কাঠা</td>
          </tr>
          <tr class="hover:bg-blue-50 transition-colors">
            <td class="px-6 py-4 whitespace-nowrap  text-center font-medium text-gray-900">০১</td>
            <td class="px-6 py-4 whitespace-nowrap  text-center text-gray-700">৬৪৯৮</td>
            <td class="px-6 py-4 whitespace-nowrap  text-center text-gray-600">৪৪.৩০ কাঠা</td>
          </tr>
          <tr class="hover:bg-blue-50 transition-colors">
            <td class="px-6 py-4 whitespace-nowrap  text-center font-medium text-gray-900">০১</td>
            <td class="px-6 py-4 whitespace-nowrap  text-center text-gray-700">৬৪৯৮</td>
            <td class="px-6 py-4 whitespace-nowrap  text-center text-gray-600">৪৪.৩০ কাঠা</td>
          </tr>
          <tr class="hover:bg-blue-50 transition-colors">
            <td class="px-6 py-4 whitespace-nowrap  text-center font-medium text-gray-900">০১</td>
            <td class="px-6 py-4 whitespace-nowrap  text-center text-gray-700">৬৪৯৮</td>
            <td class="px-6 py-4 whitespace-nowrap  text-center text-gray-600">৪৪.৩০ কাঠা</td>
          </tr>
          <tr class="hover:bg-blue-50 transition-colors">
            <td class="px-6 py-4 whitespace-nowrap  text-center font-medium text-gray-900">০১</td>
            <td class="px-6 py-4 whitespace-nowrap  text-center text-gray-700">৬৪৯৮</td>
            <td class="px-6 py-4 whitespace-nowrap  text-center text-gray-600">৪৪.৩০ কাঠা</td>
          </tr>
          <tr class="hover:bg-blue-50 transition-colors">
            <td class="px-6 py-4 whitespace-nowrap  text-center font-medium text-gray-900">০১</td>
            <td class="px-6 py-4 whitespace-nowrap  text-center text-gray-700">৬৪৯৮</td>
            <td class="px-6 py-4 whitespace-nowrap  text-center text-gray-600">৪৪.৩০ কাঠা</td>
          </tr>
          <tr class="hover:bg-blue-50 transition-colors">
            <td class="px-6 py-4 whitespace-nowrap  text-center font-medium text-gray-900">০১</td>
            <td class="px-6 py-4 whitespace-nowrap  text-center text-gray-700">৬৪৯৮</td>
            <td class="px-6 py-4 whitespace-nowrap  text-center text-gray-600">৪৪.৩০ কাঠা</td>
          </tr>
          <tr class="hover:bg-blue-50 transition-colors">
            <td class="px-6 py-4 whitespace-nowrap  text-center font-medium text-gray-900">০১</td>
            <td class="px-6 py-4 whitespace-nowrap  text-center text-gray-700">৬৪৯৮</td>
            <td class="px-6 py-4 whitespace-nowrap  text-center text-gray-600">৪৪.৩০ কাঠা</td>
          </tr>
          <tr class="hover:bg-blue-50 transition-colors">
            <td class="px-6 py-4 whitespace-nowrap  text-center font-medium text-gray-900">০১</td>
            <td class="px-6 py-4 whitespace-nowrap  text-center text-gray-700">৬৪৯৮</td>
            <td class="px-6 py-4 whitespace-nowrap  text-center text-gray-600">৪৪.৩০ কাঠা</td>
          </tr>
          <tr class="hover:bg-blue-50 transition-colors">
            <td class="px-6 py-4 whitespace-nowrap  text-center font-medium text-gray-900">০১</td>
            <td class="px-6 py-4 whitespace-nowrap  text-center text-gray-700">৬৪৯৮</td>
            <td class="px-6 py-4 whitespace-nowrap  text-center text-gray-600">৪৪.৩০ কাঠা</td>
          </tr>
          <tr class="hover:bg-blue-50 transition-colors">
            <td class="px-6 py-4 whitespace-nowrap  text-center font-medium text-gray-900">০১</td>
            <td class="px-6 py-4 whitespace-nowrap  text-center text-gray-700">৬৪৯৮</td>
            <td class="px-6 py-4 whitespace-nowrap  text-center text-gray-600">৪৪.৩০ কাঠা</td>
          </tr>
          <tr class="hover:bg-blue-50 transition-colors">
            <td class="px-6 py-4 whitespace-nowrap  text-center font-medium text-gray-900">০১</td>
            <td class="px-6 py-4 whitespace-nowrap  text-center text-gray-700">৬৪৯৮</td>
            <td class="px-6 py-4 whitespace-nowrap  text-center text-gray-600">৪৪.৩০ কাঠা</td>
          </tr>
          <tr class="hover:bg-blue-50">
            <td class="px-6 py-4 whitespace-nowrap   text-center font-medium text-gray-900">মোট =   </td>
            <td class="px-6 py-4 whitespace-nowrap   text-center font-medium text-gray-900"></td>
            <td class="px-6 py-4 whitespace-nowrap   text-center   text-gray-700">  ১২১.৬৩ কাঠা</td>
            
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <div class="max-w-7xl mx-auto my-10 px-4">
    <div class="overflow-hidden border border-gray-200 rounded-lg shadow-md">
        
      <table class="min-w-full divide-y divide-gray-200">
       
  
        <tbody class="bg-white divide-y divide-gray-200">
          <tr class="hover:bg-blue-50 transition-colors">
            <td class="px-6 py-4 whitespace-nowrap  text-center font-medium text-gray-900">মৌজা   (স্থায়ী ক্যাম্পাস) </td>
            <td class="px-6 py-4 whitespace-nowrap  text-center text-gray-700"> কাটাসুর, জে এল নং ০০৬</td>
            
          </tr>
          <tr class="hover:bg-blue-50 transition-colors">
            <td class="px-6 py-4 whitespace-nowrap  text-center font-medium text-gray-900">খতিয়ান নম্বর  </td>
            <td class="px-6 py-4 whitespace-nowrap  text-center text-gray-700">৪১৮১,৪২২৭,৪১৭৪,৪৯৫৪,৯৯৫৭,৪১৭৯,৪১৭৭,</br>

                ৪১৮৪,৯৯৮১,৯৯৫৮,৪১৮৩,৭৮৮৯,১০০৬২,</br>

                ১২৬৫৪,১২১৪৯,৯৯৮২,১২১৪৮,১২১৫৩,৪২১৮</td>
            
          </tr>
          <tr class="hover:bg-blue-50 transition-colors">
            <td class="px-6 py-4 whitespace-nowrap  text-center font-medium text-gray-900">জমির পরিমাণ</td>
            <td class="px-6 py-4 whitespace-nowrap  text-center text-gray-700">  ১২১.৬৩ কাঠা</td>
            
          </tr>
          <tr class="hover:bg-blue-50 transition-colors">
            <td class="px-6 py-4 whitespace-nowrap  text-center font-medium text-gray-900">নামজারী</td>
            <td class="px-6 py-4 whitespace-nowrap  text-center text-gray-700">আবেদিত।</td>
            
          </tr>
          <tr class="hover:bg-blue-50 transition-colors">
            <td class="px-6 py-4 whitespace-nowrap  text-center font-medium text-gray-900">একাডেমিক (বর্তমান অস্থায়ী) ভবন ফ্লোরস্পেস</td>
            <td class="px-6 py-4 whitespace-nowrap  text-center text-gray-700"> ১,৫০,০০০ বর্গফুট</td>
            
          </tr>
          <tr class="hover:bg-blue-50 transition-colors">
            <td class="px-6 py-4 whitespace-nowrap  text-center font-medium text-gray-900">হাসপাতাল (বর্তমান অস্থায়ী) ৬টি ভবন মোট ফ্লোরস্পেস</td>
            <td class="px-6 py-4 whitespace-nowrap  text-center text-gray-700">২,০০,০০০ বর্গফুট</td>
           
          </tr>
          
         
        </tbody>
      </table>
    </div>
  </div>`,_d={"/biochymistry":"/dept/biochymistry","/medicine":"/dept/medicine","/forensic":"/dept/forensic","/pathology":"/dept/pathology","/microbiology":"/dept/microbiology","/pharmacology":"/dept/pharmacology","/allied":"/dept/allied","/paediatrics":"/dept/paediatrics","/surgery":"/dept/surgery","/orthopaedics":"/dept/orthopaedics","/ophthalmology":"/dept/ophthalmology","/gynae":"/dept/gynae","/otorhinolaryngology":"/dept/otorhinolaryngology","/anaesthesiology":"/dept/anaesthesiology","/physiology":"/dept/physiology","/anatomy":"/dept/anatomy","/committee":"/committees"};function _v(){const e=v.useRef(null);return v.useEffect(()=>{e.current&&e.current.querySelectorAll("a").forEach(t=>{const n=t.getAttribute("href");n&&_d[n]&&t.setAttribute("href",_d[n])})},[]),i.jsxs("div",{children:[i.jsx(H,{}),i.jsx("div",{ref:e,dangerouslySetInnerHTML:{__html:Tv}}),i.jsx($,{})]})}const Mv=`<section class="relative h-[50vh] min-h-[400px] flex items-center overflow-hidden">
    <div class="absolute inset-0 z-0">
        <img src="https://www.pmch-bd.org/images/yootheme/service-header.jpg" 
             alt="Background" 
             class="w-full h-full object-cover">
        <div class="absolute inset-0 bg-gradient-to-r from-white/90 via-white/40 to-transparent"></div>
    </div>

    <div class="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div class="max-w-2xl border-l-4 border-emerald-600 pl-6 md:pl-10">
            <span class="text-emerald-700 font-bold tracking-widest uppercase text-sm mb-2 block">Global Collaboration</span>
            <h1 class="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight">
                Meet the Legends
            </h1>
            <p class="mt-6 text-lg md:text-xl text-slate-700 leading-relaxed font-medium">
              Three legends (Prof. Peter McCollum from UK, Prof. Bill Fleming from Australia and Prof. Datuk Ismail Sagap from Malaysia) visited the Popular Medical College & Hospital meet the entrepreneur Dr. Mostafizur Rahman and observe the facilities available for the students & trainees. 
            
              </p>
        </div>
    </div>
</section>

<div class="bg-slate-50 py-16 px-6">
    <div class="max-w-7xl mx-auto">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
            
            <div class="order-2 lg:order-1">
                <h2 class="text-3xl font-bold text-slate-800 mb-6">International Excellence</h2>
                <div class="space-y-4 text-slate-600 text-lg leading-relaxed">
                    <p>
                      Three legends (Prof. Peter McCollum from UK, Prof. Bill Fleming from Australia and Prof. Datuk Ismail Sagap from Malaysia) visited the Popular Medical College & Hospital meet the entrepreneur Dr. Mostafizur Rahman and observe the facilities available for the students & trainees. They expressed satisfaction about the available facilities and addressed in a briefing session of the interns & junior doctors about scope of career planning in their own country and globally.
                   
                      </p>
                
                </div>
                
                <div class="mt-8 flex flex-wrap gap-4">
                    <div class="flex items-center bg-white px-4 py-2 rounded-lg shadow-sm border border-slate-200">
                        <span class="w-3 h-3 bg-emerald-500 rounded-full mr-2"></span>
                        <span class="text-sm font-bold text-slate-700">Expert Insights</span>
                    </div>
                    <div class="flex items-center bg-white px-4 py-2 rounded-lg shadow-sm border border-slate-200">
                        <span class="w-3 h-3 bg-emerald-500 rounded-full mr-2"></span>
                        <span class="text-sm font-bold text-slate-700">Career Planning</span>
                    </div>
                </div>
            </div>

            <div class="order-1 lg:order-2 group">
                <div class="relative overflow-hidden rounded-2xl shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
                    <div class="absolute inset-0 border-[12px] border-white/20 z-10 pointer-events-none"></div>
                    
                    <img 
                        src="https://www.pmch-bd.org/images/PMC/mtl1.jpg" 
                        alt="Faculty Briefing" 
                        class="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    
                    <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                        <p class="text-white font-medium">Faculty Briefing Session at PMCH</p>
                    </div>
                </div>
            </div>

        </div>
    </div>
</div>`,Md={"/biochymistry":"/dept/biochymistry","/medicine":"/dept/medicine","/forensic":"/dept/forensic","/pathology":"/dept/pathology","/microbiology":"/dept/microbiology","/pharmacology":"/dept/pharmacology","/allied":"/dept/allied","/paediatrics":"/dept/paediatrics","/surgery":"/dept/surgery","/orthopaedics":"/dept/orthopaedics","/ophthalmology":"/dept/ophthalmology","/gynae":"/dept/gynae","/otorhinolaryngology":"/dept/otorhinolaryngology","/anaesthesiology":"/dept/anaesthesiology","/physiology":"/dept/physiology","/anatomy":"/dept/anatomy","/committee":"/committees"};function Av(){const e=v.useRef(null);return v.useEffect(()=>{e.current&&e.current.querySelectorAll("a").forEach(t=>{const n=t.getAttribute("href");n&&Md[n]&&t.setAttribute("href",Md[n])})},[]),i.jsxs("div",{children:[i.jsx(H,{}),i.jsx("div",{ref:e,dangerouslySetInnerHTML:{__html:Mv}}),i.jsx($,{})]})}const Ov=`<section class="relative h-[50vh] min-h-[400px] flex items-center overflow-hidden">
    <div class="absolute inset-0 z-0">
        <img src="https://www.pmch-bd.org/images/yootheme/service-header.jpg" 
             alt="Background" 
             class="w-full h-full object-cover">
        <div class="absolute inset-0 bg-gradient-to-r from-white/90 via-white/40 to-transparent"></div>
    </div>

    <div class="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div class="max-w-2xl border-l-4 border-emerald-600 pl-6 md:pl-10">
            <span class="text-emerald-700 font-bold tracking-widest uppercase text-sm mb-2 block">Academic Resources</span>
            <h1 class="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight">
                College Library
            </h1>
            <p class="mt-6 text-lg md:text-xl text-slate-700 leading-relaxed font-medium">
              The Medical College library is spacious enough to accommodate ample reading space for present and future students and holds essential latest edition text books including reference titles and others.
              </p>
        </div>
    </div>
</section>

<div class="bg-slate-50 py-16 px-6">
    <div class="max-w-7xl mx-auto">
        <div class="grid lg:grid-cols-2 gap-12 items-start">
            
            <div>
                <h2 class="text-3xl font-bold text-slate-800 mb-6">Learning Without Boundaries</h2>
                <div class="space-y-4 text-slate-600 text-lg leading-relaxed">
                    <p>
                      The Medical College library is spacious enough to accommodate ample reading space for present and future students and holds essential latest edition text books including reference titles and others. It remains open even for evening studies under the guidance of a teacher. A spacious reading room has been incorporated with the library where students can study even during extra hours.
                      </p>
                    
                </div>
                
                <div class="mt-8 flex flex-wrap gap-4">
                    <div class="flex items-center bg-white px-4 py-2 rounded-lg shadow-sm border border-slate-200">
                        <span class="w-3 h-3 bg-emerald-500 rounded-full mr-2"></span>
                        <span class="text-sm font-bold text-slate-700">Extended Evening Hours</span>
                    </div>
                    <div class="flex items-center bg-white px-4 py-2 rounded-lg shadow-sm border border-slate-200">
                        <span class="w-3 h-3 bg-emerald-500 rounded-full mr-2"></span>
                        <span class="text-sm font-bold text-slate-700">Latest Medical Editions</span>
                    </div>
                </div>
            </div>

            <div class="grid grid-cols-2 gap-4">
                <div class="relative overflow-hidden rounded-xl shadow-lg group col-span-2 h-64">
                    <div class="absolute inset-0 border-8 border-white/20 z-10 pointer-events-none"></div>
                    <img src="https://www.pmch-bd.org/images/PMC/lib1.jpg" alt="Library Main Hall" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110">
                </div>
                <div class="relative overflow-hidden rounded-xl shadow-lg group h-40">
                    <div class="absolute inset-0 border-4 border-white/20 z-10 pointer-events-none"></div>
                    <img src="https://www.pmch-bd.org/images/PMC/lib2.jpg" alt="Reading Area" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110">
                </div>
                <div class="relative overflow-hidden rounded-xl shadow-lg group h-40">
                    <div class="absolute inset-0 border-4 border-white/20 z-10 pointer-events-none"></div>
                    <img src="https://www.pmch-bd.org/images/PMC/lib3.jpg" alt="Reference Section" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110">
                </div>
            </div>

        </div>
    </div>
</div>`,Ad={"/biochymistry":"/dept/biochymistry","/medicine":"/dept/medicine","/forensic":"/dept/forensic","/pathology":"/dept/pathology","/microbiology":"/dept/microbiology","/pharmacology":"/dept/pharmacology","/allied":"/dept/allied","/paediatrics":"/dept/paediatrics","/surgery":"/dept/surgery","/orthopaedics":"/dept/orthopaedics","/ophthalmology":"/dept/ophthalmology","/gynae":"/dept/gynae","/otorhinolaryngology":"/dept/otorhinolaryngology","/anaesthesiology":"/dept/anaesthesiology","/physiology":"/dept/physiology","/anatomy":"/dept/anatomy","/committee":"/committees"};function Lv(){const e=v.useRef(null);return v.useEffect(()=>{e.current&&e.current.querySelectorAll("a").forEach(t=>{const n=t.getAttribute("href");n&&Ad[n]&&t.setAttribute("href",Ad[n])})},[]),i.jsxs("div",{children:[i.jsx(H,{}),i.jsx("div",{ref:e,dangerouslySetInnerHTML:{__html:Ov}}),i.jsx($,{})]})}const Dv=`<div class="bg-gray-50 px-4 py-16 sm:px-6 lg:px-8">
    <div class="mx-auto max-w-7xl">
      <div class="flex flex-col items-start gap-12 lg:flex-row">
  
        <!-- Image Section -->
        <div class="w-full lg:w-1/3">
          <div class="group relative">
            <div class="overflow-hidden rounded-xl bg-white shadow-lg">
              <img
                src="https://pmc.ac.bd/templates/yootheme/cache/vice-principal-9d81f0ff.jpg#thumbnail=350%2C&sizes=80%25%2C200%25"
                alt="Governing Body of Popular Medical College"
                class="h-[450px] w-[350px] object-cover transition-transform duration-300 group-hover:scale-105"
              />
  
              <div class="p-4 text-center">
                <p class="text-sm font-semibold uppercase tracking-wide text-blue-900">
                  Institutional Leadership
                </p>
              </div>
            </div>
          </div>
        </div>
  
        <!-- Content Section -->
        <div class="flex w-full flex-col justify-center lg:w-2/3">
          <span class="mb-5 inline-block rounded-full bg-blue-100 px-4 py-1 text-xs font-medium uppercase tracking-wider text-blue-700">
            From the Desk of the Principal
          </span>
  
          <div class="space-y-6 text-lg leading-relaxed text-gray-600">
            <p>
              Since the ancient age, the concept of medical school has been proliferated to disperse the
knowledge and skill of healing to the dedicated disciples. In course of time, medical schools have
become the hub of incorporating the science with art of healing for learning as well as creating
knowledge. 
            </p>
  
            <p>
             In this part of the world where the need for standard healthcare outplays the logistics and skilled
manpower, medical colleges play a pivotal role to meet up the challenges. Popular Medical
College started its journey with a view to take up the challenge of building skilled manpower
along with providing standard healthcare to the people from all walks of the society. 
            </p>
  
            <p>
             Since the college’s inception, the quest for making it a centre of renowned minds of respective
medical specialities turned the college into a different one. A good number of veteran teachers
work here in unison to shape the tender brains of medical students into dedicated, empathetic and
of course, skilled ones. The college has been maintaining high level of professionalism and
standards of teaching since the beginning. State of the art teaching materials and a large, dedicated
multi-speciality teaching hospital paved the way for effective clinical learning.
            </p>
   <p>
              The college dedicates itself to create knowledge by clinical trials and researches. Students, in this
unique campus, learn to seek and evaluate clinical facts with close supervision from acclaimed
faculties in the respective fields. Through rich publications students as well as fresh physicians put
their strong footprints in the field of medicine. 
            </p>
             <p>
              The college stretch their effort to international arena also. Faculties and students actively
participate and host numerous clinical meetings and programs with many renowned overseas
organisations including American College of Physicians routinely.
            </p>
             <p>
              Popular Medical College started its voyage with a commitment of “PRODUCING DOCTORS
WITH DIFFERENCE”. Till now, the college has been cruising through all odds and hardship but
maintaining the right course with full throttle. 
            </p>
             <p>
              It's firmly committed to provide a bright future to the physician individual as well as to country’s
healthcare. 
            </p>
            <p>
              I wish college's all success. 
            </p>
            <!-- Signature -->
            <div class="pt-4 space-y-1 text-right font-medium text-gray-700">
              <p class="text-gray-900">Prof. Khandaker Abu Rayhan</p>
              <p>Principal &</p>
              <p>Professor & Head, Department of Anatomy</p>
              <p>Popular Medical College</p>
            </div>
          </div>
        </div>
  
      </div>
    </div>
  </div>`,Od={"/biochymistry":"/dept/biochymistry","/medicine":"/dept/medicine","/forensic":"/dept/forensic","/pathology":"/dept/pathology","/microbiology":"/dept/microbiology","/pharmacology":"/dept/pharmacology","/allied":"/dept/allied","/paediatrics":"/dept/paediatrics","/surgery":"/dept/surgery","/orthopaedics":"/dept/orthopaedics","/ophthalmology":"/dept/ophthalmology","/gynae":"/dept/gynae","/otorhinolaryngology":"/dept/otorhinolaryngology","/anaesthesiology":"/dept/anaesthesiology","/physiology":"/dept/physiology","/anatomy":"/dept/anatomy","/committee":"/committees"};function Iv(){const e=v.useRef(null);return v.useEffect(()=>{e.current&&e.current.querySelectorAll("a").forEach(t=>{const n=t.getAttribute("href");n&&Od[n]&&t.setAttribute("href",Od[n])})},[]),i.jsxs("div",{children:[i.jsx(H,{}),i.jsx("div",{ref:e,dangerouslySetInnerHTML:{__html:Dv}}),i.jsx($,{})]})}const Bv=`<section class="relative h-[50vh] min-h-[400px] flex items-center overflow-hidden">
    <div class="absolute inset-0 z-0">
        <img src="https://www.pmch-bd.org/images/PMC/clg_frnt.jpg" 
             alt="College Front View" 
             class="w-full h-full object-cover">
        <div class="absolute inset-0 bg-gradient-to-r from-white/90 via-white/40 to-transparent"></div>
    </div>

    <div class="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div class="max-w-3xl border-l-4 border-emerald-600 pl-6 md:pl-10">
            <span class="text-emerald-700 font-bold tracking-widest uppercase text-sm mb-2 block">Institutional Excellence</span>
            <h1 class="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight">
                Quality <span class="text-emerald-600">Assurance</span>
            </h1>
            <p class="mt-6 text-lg md:text-xl text-slate-700 leading-relaxed font-medium">
                Dedicated to maintaining the highest standards of medical education through rigorous monitoring, continuous evaluation, and strategic development.
            </p>
        </div>
    </div>
</section>

<div class="bg-slate-50 py-16 px-6">
    <div class="max-w-7xl mx-auto">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
            
            <div class="order-2 lg:order-1">
                <h2 class="text-3xl font-bold text-slate-800 mb-6">Commitment to Global Standards</h2>
                <div class="space-y-4 text-slate-600 text-lg leading-relaxed">
                    <p>
                        The Quality Assurance (QA) scheme at Popular Medical College ensures that our <span class="text-emerald-700 font-semibold">academic and clinical protocols</span> align with national and international benchmarks. 
                    </p>
                    <p>
                        Through regular feedback loops involving faculty, students, and external examiners, we foster an environment of continuous improvement to produce medical graduates of the highest caliber.
                    </p>
                </div>
                
                <div class="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div class="flex items-center bg-white px-4 py-2 rounded-lg shadow-sm border border-slate-200">
                        <span class="w-3 h-3 bg-emerald-500 rounded-full mr-2"></span>
                        <span class="text-sm font-bold text-slate-700">Academic Audits</span>
                    </div>
                    <div class="flex items-center bg-white px-4 py-2 rounded-lg shadow-sm border border-slate-200">
                        <span class="w-3 h-3 bg-emerald-500 rounded-full mr-2"></span>
                        <span class="text-sm font-bold text-slate-700">Curriculum Review</span>
                    </div>
                    <div class="flex items-center bg-white px-4 py-2 rounded-lg shadow-sm border border-slate-200">
                        <span class="w-3 h-3 bg-emerald-500 rounded-full mr-2"></span>
                        <span class="text-sm font-bold text-slate-700">Clinical Competency</span>
                    </div>
                    <div class="flex items-center bg-white px-4 py-2 rounded-lg shadow-sm border border-slate-200">
                        <span class="w-3 h-3 bg-emerald-500 rounded-full mr-2"></span>
                        <span class="text-sm font-bold text-slate-700">Student Feedback</span>
                    </div>
                </div>
            </div>

            <div class="order-1 lg:order-2 group">
                <div class="relative overflow-hidden rounded-2xl shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
                    <div class="absolute inset-0 border-[12px] border-white/20 z-10 pointer-events-none"></div>
                    
                    <img 
                        src="https://www.pmch-bd.org/images/PMC/sac1.jpg" 
                        alt="Quality Assurance Meeting" 
                        class="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    
                    <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                        <p class="text-white font-medium">Standardizing Excellence in Medical Education</p>
                    </div>
                </div>
            </div>

        </div>
    </div>
</div>


<div class="bg-white min-h-screen  text-gray-800">
    <div class="max-w-7xl mx-auto px-6 py-12 flex flex-col items-center">
      
      
  
      
  
      <div class="space-y-6 text-justify leading-relaxed text-[#555] text-lg">
        <p>
          <span class=" text-gray-700">Apart from being able to provide the highest standard of care for the sick, the doctors of tomorrow require to be a good decision maker with fine communication & management skills and capable of providing the required leadership when the situation demands. To ensure this a persistent and systematic process of quality assurance cannot be over emphasized. Popular Medical College believes in student centric, teacher guided, parent supported, community oriented and values driven education program to produce competence based medical graduates capable</p>
            <p>
                <span class=" text-gray-700">of 'taking charge of the future'. Popular medical College ensures Quality Assurance of the medical curriculum through its Institutional Quality Assurance Body which is overviewed by the National Quality Assurance Body (NQAB) of Bangladesh.</p>
                    <p>
                        <span class=" text-gray-700">Quality Assurance (QA) is the totality of systems, resources and information devoted to maintain and improve the quality and standard of teaching, scholarship, research and the students learning experience. The Quality Assurance (QA) scheme in medical education review the way a college implements its course. Popular Medical College is having a strong Quality Assurance Body to monitor its education system, way of implementation of the course and the standard of teaching imparted to the students.</p>
                            <p>
                                <span class=" text-gray-700">Popular Medical College is accountable to the people of Bangladesh to produce medical graduates who are competent to deliver the health care which the community requires. The college operates the QA process within a management system consistent with the attitude of a self-evaluating institution. This is externally reviewed by the National Quality Assurance Body (NQAB) based on quality parameters pertaining to teaching, training and research.</p>
                                                  
        
      </div>
  
      <div class="mt-12 max-w-7xl mx-auto grid md:grid-cols-3 w-full overflow-hidden gap-10 rounded-sm ">
        <img 
          src="https://www.pmch-bd.org/images/PMC/Quality1.jpg" 
          alt="College Building" 
          class="w-full h-[250px] object-cover "
        />
        <img 
          src="https://www.pmch-bd.org/images/PMC/Quality2.jpg" 
          alt="College Building" 
          class="w-full h-auto object-cover "
        />
        <img 
          src="https://www.pmch-bd.org/images/PMC/Quality3.jpg" 
          alt="College Building" 
          class="w-full h-auto object-cover "
        />
      </div>
      <div class="space-y-6 text-justify leading-relaxed text-[#555] text-lg">
        <h1>Faculty Development Programs of the year (an overview)</h1>
        <p>
          <span class=" text-gray-700">The greatest asset of an educational institute is its teaching staff and Popular Medical College has a large number of highly qualified experienced & eminent teachers who are best of the bests. The college provides for its teaching staff the opportunity to further develop their abilities in relation to teaching and learning through the Faculty Development and Review Scheme. It makes available an on-going programme of faculty development on teaching and learning, assessment and evaluation, research methodology, research and medical writing through the Medical Education Unit (MEU) of the college. It facilitates the departments in preparation of self-assessment reports of academic performance as per guidelines given by National Quality Assurance Body.</p>
        
       
      </div>
  
      <div class="mt-12 max-w-7xl mx-auto grid md:grid-cols-3 w-full overflow-hidden gap-10 rounded-sm ">
        <img 
          src="https://www.pmch-bd.org/images/PMC/Quality4.jpg" 
          alt="College Building" 
          class="w-full h-[250px] object-cover "
        />
        <img 
          src="https://www.pmch-bd.org/images/PMC/Quality5.jpg" 
          alt="College Building" 
          class="w-full h-auto object-cover "
        />
        <img 
          src="https://www.pmch-bd.org/images/PMC/Quality6.jpg" 
          alt="College Building" 
          class="w-full h-auto object-cover "
        />
      </div>
      <div class="space-y-6 text-justify leading-relaxed text-[#555] text-lg">
        <h1>Inspection by Competent Authorities</h1>
        <p>
          <span class=" text-gray-700">Medical education in Bangladesh is controlled by Ministry of Health & Family Welfare, University & Bangladesh Medical & Dental Council. Ministry of Health & Family Welfare provides approval to the college as per principles laid down earlier subject to affiliation with the University. University affiliates the college according to University rules. It looks after the teaching learning and certification. Bangladesh Medical & Dental Council is the Regulatory Body to maintain Medical & Dental Educational standard in the country. It maintain register of qualified Medical & Dental graduates qualifying from recognized institution & take disciplinary action which may be required for professional misconduct. Bangladesh College of Physicians and Surgeons is a statutory body to confer fellowship & membership to postgraduate students who passed the respective examination. It affiliates training centers to ensure quality training to postgraduate trainees.</p>
        
       
      </div>
    </div>
  </div>`,Ld={"/biochymistry":"/dept/biochymistry","/medicine":"/dept/medicine","/forensic":"/dept/forensic","/pathology":"/dept/pathology","/microbiology":"/dept/microbiology","/pharmacology":"/dept/pharmacology","/allied":"/dept/allied","/paediatrics":"/dept/paediatrics","/surgery":"/dept/surgery","/orthopaedics":"/dept/orthopaedics","/ophthalmology":"/dept/ophthalmology","/gynae":"/dept/gynae","/otorhinolaryngology":"/dept/otorhinolaryngology","/anaesthesiology":"/dept/anaesthesiology","/physiology":"/dept/physiology","/anatomy":"/dept/anatomy","/committee":"/committees"};function zv(){const e=v.useRef(null);return v.useEffect(()=>{e.current&&e.current.querySelectorAll("a").forEach(t=>{const n=t.getAttribute("href");n&&Ld[n]&&t.setAttribute("href",Ld[n])})},[]),i.jsxs("div",{children:[i.jsx(H,{}),i.jsx("div",{ref:e,dangerouslySetInnerHTML:{__html:Bv}}),i.jsx($,{})]})}const Fv=`<section class="relative h-[50vh] min-h-[400px] flex items-center overflow-hidden">
    <div class="absolute inset-0 z-0">
        <img src="https://www.pmch-bd.org/images/yootheme/service-header.jpg" 
             alt="Background" 
             class="w-full h-full object-cover">
        <div class="absolute inset-0 bg-gradient-to-r from-white/90 via-white/40 to-transparent"></div>
    </div>

    <div class="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div class="max-w-2xl border-l-4 border-emerald-600 pl-6 md:pl-10">
            <span class="text-emerald-700 font-bold tracking-widest uppercase text-sm mb-2 block">Skill Development</span>
            <h1 class="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight">
                Student Resource Centre
            </h1>
            <p class="mt-6 text-lg md:text-xl text-slate-700 leading-relaxed font-medium">
              At this competitive global perspective it is imperative to provide the students with opportunity to develop the above mention skills to become an all rounder medical graduate.
            
              </p>
        </div>
    </div>
</section>

<div class="bg-slate-50 py-16 px-6">
    <div class="max-w-7xl mx-auto">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
            
            <div class="order-2 lg:order-1">
                <h2 class="text-3xl font-bold text-slate-800 mb-6">Empowering Future Leaders</h2>
                <div class="space-y-4 text-slate-600 text-lg leading-relaxed">
                    <p>
                      As part of the social accountability in addition to develop its students as total healthcare provider, Popular Medical College has established a student resource centre to facilitate to develop as decision maker (decision making skill development), communicator (communication skill development), manager (managerial skill development) and also a community leader (leadership skill development). At this competitive global perspective it is imperative to provide the students with opportunity to develop the above mention skills to become an all rounder medical graduate.
                      </p>
                   
                </div>
                
                <div class="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div class="flex items-center bg-white px-4 py-2 rounded-lg shadow-sm border border-slate-200">
                        <span class="w-3 h-3 bg-emerald-500 rounded-full mr-2"></span>
                        <span class="text-sm font-bold text-slate-700">Decision Making</span>
                    </div>
                    <div class="flex items-center bg-white px-4 py-2 rounded-lg shadow-sm border border-slate-200">
                        <span class="w-3 h-3 bg-emerald-500 rounded-full mr-2"></span>
                        <span class="text-sm font-bold text-slate-700">Communication Skills</span>
                    </div>
                    <div class="flex items-center bg-white px-4 py-2 rounded-lg shadow-sm border border-slate-200">
                        <span class="w-3 h-3 bg-emerald-500 rounded-full mr-2"></span>
                        <span class="text-sm font-bold text-slate-700">Managerial Expertise</span>
                    </div>
                    <div class="flex items-center bg-white px-4 py-2 rounded-lg shadow-sm border border-slate-200">
                        <span class="w-3 h-3 bg-emerald-500 rounded-full mr-2"></span>
                        <span class="text-sm font-bold text-slate-700">Community Leadership</span>
                    </div>
                </div>
            </div>

            <div class="order-1 lg:order-2 group">
                <div class="relative overflow-hidden rounded-2xl shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
                    <div class="absolute inset-0 border-[12px] border-white/20 z-10 pointer-events-none"></div>
                    
                    <img 
                        src="https://www.pmch-bd.org/images/PMC/ccroom1.jpg" 
                        alt="Resource Centre" 
                        class="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    
                    <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                        <p class="text-white font-medium">Holistic Professional Development Hub</p>
                    </div>
                </div>
            </div>

        </div>
    </div>
</div>`,Dd={"/biochymistry":"/dept/biochymistry","/medicine":"/dept/medicine","/forensic":"/dept/forensic","/pathology":"/dept/pathology","/microbiology":"/dept/microbiology","/pharmacology":"/dept/pharmacology","/allied":"/dept/allied","/paediatrics":"/dept/paediatrics","/surgery":"/dept/surgery","/orthopaedics":"/dept/orthopaedics","/ophthalmology":"/dept/ophthalmology","/gynae":"/dept/gynae","/otorhinolaryngology":"/dept/otorhinolaryngology","/anaesthesiology":"/dept/anaesthesiology","/physiology":"/dept/physiology","/anatomy":"/dept/anatomy","/committee":"/committees"};function Uv(){const e=v.useRef(null);return v.useEffect(()=>{e.current&&e.current.querySelectorAll("a").forEach(t=>{const n=t.getAttribute("href");n&&Dd[n]&&t.setAttribute("href",Dd[n])})},[]),i.jsxs("div",{children:[i.jsx(H,{}),i.jsx("div",{ref:e,dangerouslySetInnerHTML:{__html:Fv}}),i.jsx($,{})]})}const Hv=`<section class="relative h-[50vh] min-h-[400px] flex items-center overflow-hidden">
  <div class="absolute inset-0 z-0">
      <img src="https://www.pmch-bd.org/images/yootheme/service-header.jpg" 
           alt="Background" 
           class="w-full h-full object-cover">
      <div class="absolute inset-0 bg-gradient-to-r from-white/90 via-white/40 to-transparent"></div>
  </div>

  <div class="relative z-10 max-w-7xl mx-auto px-6 w-full">
      <div class="max-w-2xl border-l-4 border-emerald-600 pl-6 md:pl-10">
          <span class="text-emerald-700 font-bold tracking-widest uppercase text-sm mb-2 block">Institutional Conduct</span>
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight">
              Rules & <span class="text-emerald-600">Regulations</span>
          </h1>
          <p class="mt-6 text-lg md:text-xl text-slate-700 leading-relaxed font-medium">
              Established guidelines to maintain a disciplined, professional, and productive academic environment for all members of the Popular Medical College community.
          </p>
      </div>
  </div>
</section>

<div class="bg-slate-50 py-16 px-6">
  <div class="max-w-7xl mx-auto">
      <div class="grid lg:grid-cols-2 gap-12 items-start">
          
          <div class="order-2 lg:order-1">
              <h2 class="text-3xl font-bold text-slate-800 mb-6">Code of Conduct</h2>
              <div class="space-y-4 text-slate-600 text-lg leading-relaxed">
                  <p>
                      Students are expected to adhere to the <span class="text-emerald-700 font-semibold">highest standards of discipline</span>. The college administration emphasizes punctuality, professional attire, and respectful interaction within the campus.
                  </p>
                  <p>
                      Violation of rules regarding attendance, campus property, or academic integrity may lead to disciplinary action as per the decision of the Academic Council.
                  </p>
              </div>
              
              <div class="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div class="flex items-center bg-white px-4 py-2 rounded-lg shadow-sm border border-slate-200">
                      <span class="w-3 h-3 bg-emerald-500 rounded-full mr-2"></span>
                      <span class="text-sm font-bold text-slate-700">Mandatory Uniform</span>
                  </div>
                  <div class="flex items-center bg-white px-4 py-2 rounded-lg shadow-sm border border-slate-200">
                      <span class="w-3 h-3 bg-emerald-500 rounded-full mr-2"></span>
                      <span class="text-sm font-bold text-slate-700">Identity Card Requirement</span>
                  </div>
                  <div class="flex items-center bg-white px-4 py-2 rounded-lg shadow-sm border border-slate-200">
                      <span class="w-3 h-3 bg-emerald-500 rounded-full mr-2"></span>
                      <span class="text-sm font-bold text-slate-700">Strict Punctuality</span>
                  </div>
                  <div class="flex items-center bg-white px-4 py-2 rounded-lg shadow-sm border border-slate-200">
                      <span class="w-3 h-3 bg-emerald-500 rounded-full mr-2"></span>
                      <span class="text-sm font-bold text-slate-700">Smoke-Free Campus</span>
                  </div>
              </div>
          </div>

          <div class="order-1 lg:order-2 group">
              <div class="relative overflow-hidden rounded-2xl shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
                  <div class="absolute inset-0 border-[12px] border-white/20 z-10 pointer-events-none"></div>
                  
                  <img 
                      src="https://www.pmch-bd.org/images/PMC/gt.jpg" 
                      alt="College Rules and Conduct" 
                      class="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                      <p class="text-white font-medium">Maintaining Academic & Professional Integrity</p>
                  </div>
              </div>
          </div>

      </div>
  </div>
</div>

<section class="bg-white py-16 px-6 md:px-20 ">
  <div class="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 lg:gap-24">
    
    <div class="flex-1">
      <h2 class="text-xl font-bold text-gray-800 mb-6">General Rules</h2>
      
      <div class="space-y-4 text-gray-600 leading-relaxed text-sm md:text-base">
        <ul class="list-disc list-outside ml-5 space-y-4">
          <li>
            Popular Medical College, Hospital and Hostel Campus is a non-smoking zone. Smoking is absolutely prohibited in the college, hospital and hostel campus and treated as punishable offence.
          </li>

          <li>
            Political activities are not permitted in the college, hospital and hostel. Organization in the name of Union, Association or Society other than those set by the college authority are forbidden. Any attempt of such activity is treated as punishable offence.</li>
          <li>
            Popular Medical College, Hospital and Hostel Campus is a non-smoking zone. Smoking is absolutely prohibited in the college, hospital and hostel campus and treated as punishable offence.
          </li>
          <li>
            Fixing and or hanging of posters, distribution of leaflets, pamphlets etc. within the college, hospital and hostel premises are strictly prohibited unless permitted by the authority. These are treated as gross indiscipline & the offenders are liable to punishment. </li>
          <li>
            All types of demonstration, procession, shouting in the college, hospital and hostel premises are strictly prohibited and treated as punishable offence. </li>
          <li>
            Damage of the college, hospital and hostel property is treated as punishable offence.</li>
            <li>
              Violation of college rules and regulation is treated as punishable offence.</li>
        </ul>
        
        
      </div>


      <h2 class="text-xl font-bold text-gray-800 mb-6">Library rules</h2>
      
      <div class="space-y-4 text-gray-600 leading-relaxed text-sm md:text-base">
        <ul class="list-disc list-outside ml-5 space-y-4">
          <p>
            Students are allowed to use the library from 8AM to 8PM on all working days of the week. The library remains close on Fridays, national holidays and holidays declared by the college office.</p>

          
        </ul>
        
        
      </div>

      <h2 class="text-xl font-bold text-gray-800 mb-6">Student's participation in co-curricular activities</h2>
      
      <div class="space-y-4 text-gray-600 leading-relaxed text-sm md:text-base">
        <p>Students are encouraged to participate in co-curricular activities such as:</p>
        <ul class="list-disc list-outside ml-5 space-y-4">
          <li>
            Literary activities like debates, seminars, scientific fair, publications of periodic wall magazine, annual magazine etc.</li>

          <li>
            Sports and games.</li>
          <li>
            Cultural activities.          </li>
          <li>
            Observation of National Days</li>
          <li>
            Annual picnic</li>
          <li>
            Humanitarian & social services like free blood donation & free medicine distribution for poor patients, warm cloths distribution during winter, relief works during natural calamities like cyclones, floods, epidemics etc.
            Committees formed by the college authority consisting of teachers & students (Teachers-Students Committees) will look after these activities. Participation to these activities help to develop themselves as a team member, decision maker, communicator, manager and community leader in addition to efficient care provider.</li>
            
        </ul>
        
        
      </div>
      
      <h2 class="text-xl font-bold text-gray-800 mb-6">Library rules</h2>
      
      <div class="space-y-4 text-gray-600 leading-relaxed text-sm md:text-base">
        <ul class="list-disc list-outside ml-5 space-y-4">
          <p>
            Students are allowed to use the library from 8AM to 8PM on all working days of the week. The library remains close on Fridays, national holidays and holidays declared by the college office.</p>

          
        </ul>
        
        
      </div>
    </div>

    <div class="flex-1">
      <h2 class="text-xl font-bold text-gray-800 mb-6">College Discipline</h2>
      
      <div class="space-y-6 text-gray-600 leading-relaxed text-sm md:text-base">
        <p>
          Students must observe strict discipline in the college, hospital & hostel campus and also outside as
instructed by the college administration.
On disciplinary grounds the following penalties may be imposed on a student, depending on the nature of
offence -</p>
        <ul class="list-disc list-outside ml-5 space-y-3">
          <li>Warning.</li>
          <li>Fines.</li>
          <li>Both warning & fines.</li>
          <li>Signing of bond.</li>
          <li>Suspension from the college.</li>
          <li>Expulsion from the college</li>
          <li>Penalty / penalties imposed on students will be recorded in his / her transcript / testimonial.</li>
        </ul>
      </div>
      <h2 class="text-xl font-bold text-gray-800 mb-6">College Discipline</h2>
      
      <div class="space-y-6 text-gray-600 leading-relaxed text-sm md:text-base">
        <p>
          Students must observe strict discipline in the college, hospital & hostel campus and also outside as
instructed by the college administration.
On disciplinary grounds the following penalties may be imposed on a student, depending on the nature of
offence -</p>
       
      </div>
      <h2 class="text-xl font-bold text-gray-800 mb-6">Academic Council Meeting</h2>
      
      <div class="space-y-6 text-gray-600 leading-relaxed text-sm md:text-base">
        <p>
          Academic Council will meet as & when necessary. They discuss all aspects of academic matters of the college & suggest measures for improving the academic environment & total improvement of teaching & learning in the college.</p>
        
      </div>
      <h2 class="text-xl font-bold text-gray-800 mb-6">Curriculum and Academic Calendar</h2>
      
      <div class="space-y-6 text-gray-600 leading-relaxed text-sm md:text-base">
        <p>
          Curriculum and academic calendar is provided to every student to help him / her understand the schedule
for the year.</p>
        
      </div>
    </div>

  </div>
</section>`,Id={"/biochymistry":"/dept/biochymistry","/medicine":"/dept/medicine","/forensic":"/dept/forensic","/pathology":"/dept/pathology","/microbiology":"/dept/microbiology","/pharmacology":"/dept/pharmacology","/allied":"/dept/allied","/paediatrics":"/dept/paediatrics","/surgery":"/dept/surgery","/orthopaedics":"/dept/orthopaedics","/ophthalmology":"/dept/ophthalmology","/gynae":"/dept/gynae","/otorhinolaryngology":"/dept/otorhinolaryngology","/anaesthesiology":"/dept/anaesthesiology","/physiology":"/dept/physiology","/anatomy":"/dept/anatomy","/committee":"/committees"};function $v(){const e=v.useRef(null);return v.useEffect(()=>{e.current&&e.current.querySelectorAll("a").forEach(t=>{const n=t.getAttribute("href");n&&Id[n]&&t.setAttribute("href",Id[n])})},[]),i.jsxs("div",{children:[i.jsx(H,{}),i.jsx("div",{ref:e,dangerouslySetInnerHTML:{__html:Hv}}),i.jsx($,{})]})}const Wv=`<div class="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
    <div class="mx-auto max-w-7xl">
      <div class="flex flex-col items-start gap-12 lg:flex-row">
  
        <!-- Image Section -->
        <div class="w-full lg:w-1/3">
          <div class="group relative">
            <div class="relative overflow-hidden rounded-xl bg-white shadow-lg">
              <img
                src="https://www.pmch-bd.org/templates/yootheme/cache/Vice-Principal-1b785252.jpg"
                alt="Governing Body of Popular Medical College"
                class="h-[450px] w-[350px] object-cover transition-transform duration-300 group-hover:scale-105"
              />
  
              <div class="p-4 text-center">
                <p class="text-sm font-semibold uppercase tracking-wide text-blue-900">
                  Institutional Leadership
                </p>
              </div>
            </div>
          </div>
        </div>
  
        <!-- Content Section -->
        <div class="flex w-full flex-col justify-center lg:w-2/3">
          <span class="mb-4 inline-block rounded-full bg-blue-100 px-4 py-1 text-xs font-medium uppercase tracking-wider text-blue-700">
            Vice Principal's Desk
          </span>
  
          <div class="space-y-6 text-lg leading-relaxed text-gray-600">
            <p>
              It is my immense pleasure and privilege to welcome the new students to be admitted into this
prestigious Medical College. With a team of fulltime highly experienced and dedicated teachers,
adequate modern aids of teaching facilities; Popular Medical College has been established as one of the
top most Medical Colleges in private sector of Bangladesh. I hope that with the use of these facilities,
the students will become competent doctors and will be able to serve the nation and internationally with
professional aptitudes.
              
            </p>
             <p>
              As one of the member states of World Health Organization, Bangladesh was committed to implement
the goals of SDGs. To achieve these Popular Medical College is also taking various initiatives. The
hospital has free bed facilities for poor and vulnerable patients to be admitted, so the students are able to
learn on bedside setting. The diagnostic facilities of PMC are one of the best in Bangladesh. The
challenges for academic activities are to provide a balanced environment for the education of students
through engagement with local communities. To produce doctors of future perspective, there is a need
to bring them close to the community and as such PMC brings the students to community level (RFST)
with an excellent residential facility in Trisal, Mymensingh so that students will be able to develop skill
and attitudes to serve patients at rural community
              
            </p>
             <p>
              I wish to assure the guardians that our determination and sincere efforts combined with your support
shall allow us to produce doctors for the future generation with a difference.
              
            </p>
  
            <div class="space-y-1 text-right font-medium text-gray-700">
              <p>Prof. Mahamud Riyad</p>
              <p>Vice-Principal &</p>
              <p>Professor, Department of Surgery</p>
              <p>Popular Medical College</p>
            </div>
          </div>
        </div>
  
      </div>
    </div>
  </div>`,Bd={"/biochymistry":"/dept/biochymistry","/medicine":"/dept/medicine","/forensic":"/dept/forensic","/pathology":"/dept/pathology","/microbiology":"/dept/microbiology","/pharmacology":"/dept/pharmacology","/allied":"/dept/allied","/paediatrics":"/dept/paediatrics","/surgery":"/dept/surgery","/orthopaedics":"/dept/orthopaedics","/ophthalmology":"/dept/ophthalmology","/gynae":"/dept/gynae","/otorhinolaryngology":"/dept/otorhinolaryngology","/anaesthesiology":"/dept/anaesthesiology","/physiology":"/dept/physiology","/anatomy":"/dept/anatomy","/committee":"/committees"};function Vv(){const e=v.useRef(null);return v.useEffect(()=>{e.current&&e.current.querySelectorAll("a").forEach(t=>{const n=t.getAttribute("href");n&&Bd[n]&&t.setAttribute("href",Bd[n])})},[]),i.jsxs("div",{children:[i.jsx(H,{}),i.jsx("div",{ref:e,dangerouslySetInnerHTML:{__html:Wv}}),i.jsx($,{})]})}function qv(){return i.jsx(By,{children:i.jsxs(px,{children:[i.jsx(M,{path:"/",element:i.jsx(jx,{})}),i.jsx(M,{path:"/dept/:slug",element:i.jsx(Dy,{})}),i.jsx(M,{path:"/doctor/:id",element:i.jsx(Iy,{})}),i.jsx(M,{path:"/committees",element:i.jsx(dd,{})}),i.jsx(M,{path:"/committee",element:i.jsx(dd,{})}),i.jsx(M,{path:"/about",element:i.jsx(Qy,{})}),i.jsx(M,{path:"/assist",element:i.jsx(Gy,{})}),i.jsx(M,{path:"/award",element:i.jsx(Yy,{})}),i.jsx(M,{path:"/book",element:i.jsx(Zy,{})}),i.jsx(M,{path:"/cafe",element:i.jsx(tv,{})}),i.jsx(M,{path:"/center",element:i.jsx(rv,{})}),i.jsx(M,{path:"/chairman",element:i.jsx(lv,{})}),i.jsx(M,{path:"/common",element:i.jsx(iv,{})}),i.jsx(M,{path:"/confer",element:i.jsx(cv,{})}),i.jsx(M,{path:"/contact",element:i.jsx(uv,{})}),i.jsx(M,{path:"/course",element:i.jsx(fv,{})}),i.jsx(M,{path:"/eligiblity",element:i.jsx(mv,{})}),i.jsx(M,{path:"/faculty",element:i.jsx(xv,{})}),i.jsx(M,{path:"/fees",element:i.jsx(vv,{})}),i.jsx(M,{path:"/govrn",element:i.jsx(bv,{})}),i.jsx(M,{path:"/guardians",element:i.jsx(jv,{})}),i.jsx(M,{path:"/hostal",element:i.jsx(Cv,{})}),i.jsx(M,{path:"/info",element:i.jsx(Nv,{})}),i.jsx(M,{path:"/it",element:i.jsx(Rv,{})}),i.jsx(M,{path:"/land",element:i.jsx(_v,{})}),i.jsx(M,{path:"/legends",element:i.jsx(Av,{})}),i.jsx(M,{path:"/library",element:i.jsx(Lv,{})}),i.jsx(M,{path:"/principal",element:i.jsx(Iv,{})}),i.jsx(M,{path:"/quality",element:i.jsx(zv,{})}),i.jsx(M,{path:"/resource",element:i.jsx(Uv,{})}),i.jsx(M,{path:"/rules",element:i.jsx($v,{})}),i.jsx(M,{path:"/vice",element:i.jsx(Vv,{})}),i.jsx(M,{path:"/admin/login",element:i.jsx(Fy,{})}),i.jsxs(M,{path:"/admin",element:i.jsx(zy,{children:i.jsx(Hy,{})}),children:[i.jsx(M,{index:!0,element:i.jsx($y,{})}),i.jsx(M,{path:"doctors",element:i.jsx(Wy,{})}),i.jsx(M,{path:"doctors/new",element:i.jsx(ud,{})}),i.jsx(M,{path:"doctors/:id",element:i.jsx(ud,{})}),i.jsx(M,{path:"departments",element:i.jsx(js,{endpoint:"/departments",label:"Department",fields:[{key:"name",label:"Department name"}]})}),i.jsx(M,{path:"titles",element:i.jsx(js,{endpoint:"/titles",label:"Title",fields:[{key:"name",label:"Title name"}]})}),i.jsx(M,{path:"types",element:i.jsx(js,{endpoint:"/types",label:"Type",fields:[{key:"name",label:"Type name"}]})}),i.jsx(M,{path:"committees",element:i.jsx(js,{endpoint:"/committees",label:"Committee",fields:[{key:"name",label:"Committee name"},{key:"patron",label:"Patron",textarea:!0},{key:"chairman",label:"Chairman",textarea:!0},{key:"member",label:"Members",textarea:!0},{key:"secretary",label:"Secretary",textarea:!0}]})}),i.jsx(M,{path:"profile",element:i.jsx(Vy,{})})]}),i.jsx(M,{path:"*",element:i.jsx(cf,{to:"/"})})]})})}xo.createRoot(document.getElementById("root")).render(i.jsx(vx,{children:i.jsx(qv,{})}));
