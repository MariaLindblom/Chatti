function TN(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function IN(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function tE(t){var e=t.default;if(typeof e=="function"){var n=function(){return e.apply(this,arguments)};n.prototype=e.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(t).forEach(function(r){var i=Object.getOwnPropertyDescriptor(t,r);Object.defineProperty(n,r,i.get?i:{enumerable:!0,get:function(){return t[r]}})}),n}var E={exports:{}},re={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bl=Symbol.for("react.element"),kN=Symbol.for("react.portal"),bN=Symbol.for("react.fragment"),xN=Symbol.for("react.strict_mode"),RN=Symbol.for("react.profiler"),NN=Symbol.for("react.provider"),AN=Symbol.for("react.context"),PN=Symbol.for("react.forward_ref"),ON=Symbol.for("react.suspense"),DN=Symbol.for("react.memo"),$N=Symbol.for("react.lazy"),W0=Symbol.iterator;function MN(t){return t===null||typeof t!="object"?null:(t=W0&&t[W0]||t["@@iterator"],typeof t=="function"?t:null)}var nE={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},rE=Object.assign,iE={};function $o(t,e,n){this.props=t,this.context=e,this.refs=iE,this.updater=n||nE}$o.prototype.isReactComponent={};$o.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};$o.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function sE(){}sE.prototype=$o.prototype;function Tg(t,e,n){this.props=t,this.context=e,this.refs=iE,this.updater=n||nE}var Ig=Tg.prototype=new sE;Ig.constructor=Tg;rE(Ig,$o.prototype);Ig.isPureReactComponent=!0;var H0=Array.isArray,oE=Object.prototype.hasOwnProperty,kg={current:null},aE={key:!0,ref:!0,__self:!0,__source:!0};function lE(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)oE.call(e,r)&&!aE.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Bl,type:t,key:s,ref:o,props:i,_owner:kg.current}}function LN(t,e){return{$$typeof:Bl,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function bg(t){return typeof t=="object"&&t!==null&&t.$$typeof===Bl}function FN(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var q0=/\/+/g;function _f(t,e){return typeof t=="object"&&t!==null&&t.key!=null?FN(""+t.key):e.toString(36)}function uc(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Bl:case kN:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+_f(o,0):r,H0(i)?(n="",t!=null&&(n=t.replace(q0,"$&/")+"/"),uc(i,e,n,"",function(u){return u})):i!=null&&(bg(i)&&(i=LN(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(q0,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",H0(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+_f(s,a);o+=uc(s,e,n,l,i)}else if(l=MN(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+_f(s,a++),o+=uc(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Nu(t,e,n){if(t==null)return t;var r=[],i=0;return uc(t,r,"","",function(s){return e.call(n,s,i++)}),r}function UN(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Ft={current:null},cc={transition:null},zN={ReactCurrentDispatcher:Ft,ReactCurrentBatchConfig:cc,ReactCurrentOwner:kg};re.Children={map:Nu,forEach:function(t,e,n){Nu(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Nu(t,function(){e++}),e},toArray:function(t){return Nu(t,function(e){return e})||[]},only:function(t){if(!bg(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};re.Component=$o;re.Fragment=bN;re.Profiler=RN;re.PureComponent=Tg;re.StrictMode=xN;re.Suspense=ON;re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=zN;re.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=rE({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=kg.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)oE.call(e,l)&&!aE.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Bl,type:t.type,key:i,ref:s,props:r,_owner:o}};re.createContext=function(t){return t={$$typeof:AN,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:NN,_context:t},t.Consumer=t};re.createElement=lE;re.createFactory=function(t){var e=lE.bind(null,t);return e.type=t,e};re.createRef=function(){return{current:null}};re.forwardRef=function(t){return{$$typeof:PN,render:t}};re.isValidElement=bg;re.lazy=function(t){return{$$typeof:$N,_payload:{_status:-1,_result:t},_init:UN}};re.memo=function(t,e){return{$$typeof:DN,type:t,compare:e===void 0?null:e}};re.startTransition=function(t){var e=cc.transition;cc.transition={};try{t()}finally{cc.transition=e}};re.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};re.useCallback=function(t,e){return Ft.current.useCallback(t,e)};re.useContext=function(t){return Ft.current.useContext(t)};re.useDebugValue=function(){};re.useDeferredValue=function(t){return Ft.current.useDeferredValue(t)};re.useEffect=function(t,e){return Ft.current.useEffect(t,e)};re.useId=function(){return Ft.current.useId()};re.useImperativeHandle=function(t,e,n){return Ft.current.useImperativeHandle(t,e,n)};re.useInsertionEffect=function(t,e){return Ft.current.useInsertionEffect(t,e)};re.useLayoutEffect=function(t,e){return Ft.current.useLayoutEffect(t,e)};re.useMemo=function(t,e){return Ft.current.useMemo(t,e)};re.useReducer=function(t,e,n){return Ft.current.useReducer(t,e,n)};re.useRef=function(t){return Ft.current.useRef(t)};re.useState=function(t){return Ft.current.useState(t)};re.useSyncExternalStore=function(t,e,n){return Ft.current.useSyncExternalStore(t,e,n)};re.useTransition=function(){return Ft.current.useTransition()};re.version="18.2.0";(function(t){t.exports=re})(E);const Qh=IN(E.exports),bp=TN({__proto__:null,default:Qh},[E.exports]);var xp={},xg={exports:{}},pn={},uE={exports:{}},cE={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(P,j){var H=P.length;P.push(j);e:for(;0<H;){var me=H-1>>>1,be=P[me];if(0<i(be,j))P[me]=j,P[H]=be,H=me;else break e}}function n(P){return P.length===0?null:P[0]}function r(P){if(P.length===0)return null;var j=P[0],H=P.pop();if(H!==j){P[0]=H;e:for(var me=0,be=P.length,en=be>>>1;me<en;){var ft=2*(me+1)-1,Wn=P[ft],tn=ft+1,Dr=P[tn];if(0>i(Wn,H))tn<be&&0>i(Dr,Wn)?(P[me]=Dr,P[tn]=H,me=tn):(P[me]=Wn,P[ft]=H,me=ft);else if(tn<be&&0>i(Dr,H))P[me]=Dr,P[tn]=H,me=tn;else break e}}return j}function i(P,j){var H=P.sortIndex-j.sortIndex;return H!==0?H:P.id-j.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,h=null,d=3,f=!1,p=!1,y=!1,w=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(P){for(var j=n(u);j!==null;){if(j.callback===null)r(u);else if(j.startTime<=P)r(u),j.sortIndex=j.expirationTime,e(l,j);else break;j=n(u)}}function _(P){if(y=!1,v(P),!p)if(n(l)!==null)p=!0,Pe(C);else{var j=n(u);j!==null&&le(_,j.startTime-P)}}function C(P,j){p=!1,y&&(y=!1,g(x),x=-1),f=!0;var H=d;try{for(v(j),h=n(l);h!==null&&(!(h.expirationTime>j)||P&&!Q());){var me=h.callback;if(typeof me=="function"){h.callback=null,d=h.priorityLevel;var be=me(h.expirationTime<=j);j=t.unstable_now(),typeof be=="function"?h.callback=be:h===n(l)&&r(l),v(j)}else r(l);h=n(l)}if(h!==null)var en=!0;else{var ft=n(u);ft!==null&&le(_,ft.startTime-j),en=!1}return en}finally{h=null,d=H,f=!1}}var T=!1,S=null,x=-1,V=5,N=-1;function Q(){return!(t.unstable_now()-N<V)}function te(){if(S!==null){var P=t.unstable_now();N=P;var j=!0;try{j=S(!0,P)}finally{j?ve():(T=!1,S=null)}}else T=!1}var ve;if(typeof m=="function")ve=function(){m(te)};else if(typeof MessageChannel<"u"){var _e=new MessageChannel,Ue=_e.port2;_e.port1.onmessage=te,ve=function(){Ue.postMessage(null)}}else ve=function(){w(te,0)};function Pe(P){S=P,T||(T=!0,ve())}function le(P,j){x=w(function(){P(t.unstable_now())},j)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(P){P.callback=null},t.unstable_continueExecution=function(){p||f||(p=!0,Pe(C))},t.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):V=0<P?Math.floor(1e3/P):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(P){switch(d){case 1:case 2:case 3:var j=3;break;default:j=d}var H=d;d=j;try{return P()}finally{d=H}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(P,j){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var H=d;d=P;try{return j()}finally{d=H}},t.unstable_scheduleCallback=function(P,j,H){var me=t.unstable_now();switch(typeof H=="object"&&H!==null?(H=H.delay,H=typeof H=="number"&&0<H?me+H:me):H=me,P){case 1:var be=-1;break;case 2:be=250;break;case 5:be=1073741823;break;case 4:be=1e4;break;default:be=5e3}return be=H+be,P={id:c++,callback:j,priorityLevel:P,startTime:H,expirationTime:be,sortIndex:-1},H>me?(P.sortIndex=H,e(u,P),n(l)===null&&P===n(u)&&(y?(g(x),x=-1):y=!0,le(_,H-me))):(P.sortIndex=be,e(l,P),p||f||(p=!0,Pe(C))),P},t.unstable_shouldYield=Q,t.unstable_wrapCallback=function(P){var j=d;return function(){var H=d;d=j;try{return P.apply(this,arguments)}finally{d=H}}}})(cE);(function(t){t.exports=cE})(uE);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hE=E.exports,cn=uE.exports;function b(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var dE=new Set,Qa={};function ps(t,e){co(t,e),co(t+"Capture",e)}function co(t,e){for(Qa[t]=e,t=0;t<e.length;t++)dE.add(e[t])}var Cr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Rp=Object.prototype.hasOwnProperty,VN=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,K0={},G0={};function BN(t){return Rp.call(G0,t)?!0:Rp.call(K0,t)?!1:VN.test(t)?G0[t]=!0:(K0[t]=!0,!1)}function jN(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function WN(t,e,n,r){if(e===null||typeof e>"u"||jN(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Ut(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var wt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){wt[t]=new Ut(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];wt[e]=new Ut(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){wt[t]=new Ut(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){wt[t]=new Ut(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){wt[t]=new Ut(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){wt[t]=new Ut(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){wt[t]=new Ut(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){wt[t]=new Ut(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){wt[t]=new Ut(t,5,!1,t.toLowerCase(),null,!1,!1)});var Rg=/[\-:]([a-z])/g;function Ng(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Rg,Ng);wt[e]=new Ut(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Rg,Ng);wt[e]=new Ut(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Rg,Ng);wt[e]=new Ut(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){wt[t]=new Ut(t,1,!1,t.toLowerCase(),null,!1,!1)});wt.xlinkHref=new Ut("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){wt[t]=new Ut(t,1,!1,t.toLowerCase(),null,!0,!0)});function Ag(t,e,n,r){var i=wt.hasOwnProperty(e)?wt[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(WN(e,n,i,r)&&(n=null),r||i===null?BN(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Nr=hE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Au=Symbol.for("react.element"),Ps=Symbol.for("react.portal"),Os=Symbol.for("react.fragment"),Pg=Symbol.for("react.strict_mode"),Np=Symbol.for("react.profiler"),fE=Symbol.for("react.provider"),pE=Symbol.for("react.context"),Og=Symbol.for("react.forward_ref"),Ap=Symbol.for("react.suspense"),Pp=Symbol.for("react.suspense_list"),Dg=Symbol.for("react.memo"),Fr=Symbol.for("react.lazy"),mE=Symbol.for("react.offscreen"),Q0=Symbol.iterator;function ia(t){return t===null||typeof t!="object"?null:(t=Q0&&t[Q0]||t["@@iterator"],typeof t=="function"?t:null)}var Me=Object.assign,wf;function wa(t){if(wf===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);wf=e&&e[1]||""}return`
`+wf+t}var Cf=!1;function Ef(t,e){if(!t||Cf)return"";Cf=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Cf=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?wa(t):""}function HN(t){switch(t.tag){case 5:return wa(t.type);case 16:return wa("Lazy");case 13:return wa("Suspense");case 19:return wa("SuspenseList");case 0:case 2:case 15:return t=Ef(t.type,!1),t;case 11:return t=Ef(t.type.render,!1),t;case 1:return t=Ef(t.type,!0),t;default:return""}}function Op(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Os:return"Fragment";case Ps:return"Portal";case Np:return"Profiler";case Pg:return"StrictMode";case Ap:return"Suspense";case Pp:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case pE:return(t.displayName||"Context")+".Consumer";case fE:return(t._context.displayName||"Context")+".Provider";case Og:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Dg:return e=t.displayName||null,e!==null?e:Op(t.type)||"Memo";case Fr:e=t._payload,t=t._init;try{return Op(t(e))}catch{}}return null}function qN(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Op(e);case 8:return e===Pg?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function ii(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function gE(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function KN(t){var e=gE(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Pu(t){t._valueTracker||(t._valueTracker=KN(t))}function yE(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=gE(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Lc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Dp(t,e){var n=e.checked;return Me({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:t._wrapperState.initialChecked})}function Y0(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=ii(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function vE(t,e){e=e.checked,e!=null&&Ag(t,"checked",e,!1)}function $p(t,e){vE(t,e);var n=ii(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Mp(t,e.type,n):e.hasOwnProperty("defaultValue")&&Mp(t,e.type,ii(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function X0(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Mp(t,e,n){(e!=="number"||Lc(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ca=Array.isArray;function Gs(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+ii(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Lp(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(b(91));return Me({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function J0(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(b(92));if(Ca(n)){if(1<n.length)throw Error(b(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:ii(n)}}function _E(t,e){var n=ii(e.value),r=ii(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Z0(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function wE(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Fp(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?wE(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ou,CE=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ou=Ou||document.createElement("div"),Ou.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ou.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ya(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ra={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},GN=["Webkit","ms","Moz","O"];Object.keys(Ra).forEach(function(t){GN.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ra[e]=Ra[t]})});function EE(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ra.hasOwnProperty(t)&&Ra[t]?(""+e).trim():e+"px"}function SE(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=EE(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var QN=Me({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Up(t,e){if(e){if(QN[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(b(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(b(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(b(61))}if(e.style!=null&&typeof e.style!="object")throw Error(b(62))}}function zp(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Vp=null;function $g(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Bp=null,Qs=null,Ys=null;function e_(t){if(t=Hl(t)){if(typeof Bp!="function")throw Error(b(280));var e=t.stateNode;e&&(e=ed(e),Bp(t.stateNode,t.type,e))}}function TE(t){Qs?Ys?Ys.push(t):Ys=[t]:Qs=t}function IE(){if(Qs){var t=Qs,e=Ys;if(Ys=Qs=null,e_(t),e)for(t=0;t<e.length;t++)e_(e[t])}}function kE(t,e){return t(e)}function bE(){}var Sf=!1;function xE(t,e,n){if(Sf)return t(e,n);Sf=!0;try{return kE(t,e,n)}finally{Sf=!1,(Qs!==null||Ys!==null)&&(bE(),IE())}}function Xa(t,e){var n=t.stateNode;if(n===null)return null;var r=ed(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(b(231,e,typeof n));return n}var jp=!1;if(Cr)try{var sa={};Object.defineProperty(sa,"passive",{get:function(){jp=!0}}),window.addEventListener("test",sa,sa),window.removeEventListener("test",sa,sa)}catch{jp=!1}function YN(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var Na=!1,Fc=null,Uc=!1,Wp=null,XN={onError:function(t){Na=!0,Fc=t}};function JN(t,e,n,r,i,s,o,a,l){Na=!1,Fc=null,YN.apply(XN,arguments)}function ZN(t,e,n,r,i,s,o,a,l){if(JN.apply(this,arguments),Na){if(Na){var u=Fc;Na=!1,Fc=null}else throw Error(b(198));Uc||(Uc=!0,Wp=u)}}function ms(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function RE(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function t_(t){if(ms(t)!==t)throw Error(b(188))}function eA(t){var e=t.alternate;if(!e){if(e=ms(t),e===null)throw Error(b(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return t_(i),t;if(s===r)return t_(i),e;s=s.sibling}throw Error(b(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(b(189))}}if(n.alternate!==r)throw Error(b(190))}if(n.tag!==3)throw Error(b(188));return n.stateNode.current===n?t:e}function NE(t){return t=eA(t),t!==null?AE(t):null}function AE(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=AE(t);if(e!==null)return e;t=t.sibling}return null}var PE=cn.unstable_scheduleCallback,n_=cn.unstable_cancelCallback,tA=cn.unstable_shouldYield,nA=cn.unstable_requestPaint,Ve=cn.unstable_now,rA=cn.unstable_getCurrentPriorityLevel,Mg=cn.unstable_ImmediatePriority,OE=cn.unstable_UserBlockingPriority,zc=cn.unstable_NormalPriority,iA=cn.unstable_LowPriority,DE=cn.unstable_IdlePriority,Yh=null,Yn=null;function sA(t){if(Yn&&typeof Yn.onCommitFiberRoot=="function")try{Yn.onCommitFiberRoot(Yh,t,void 0,(t.current.flags&128)===128)}catch{}}var zn=Math.clz32?Math.clz32:lA,oA=Math.log,aA=Math.LN2;function lA(t){return t>>>=0,t===0?32:31-(oA(t)/aA|0)|0}var Du=64,$u=4194304;function Ea(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Vc(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Ea(a):(s&=o,s!==0&&(r=Ea(s)))}else o=n&~i,o!==0?r=Ea(o):s!==0&&(r=Ea(s));if(r===0)return 0;if(e!==0&&e!==r&&(e&i)===0&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if((r&4)!==0&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-zn(e),i=1<<n,r|=t[n],e&=~i;return r}function uA(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function cA(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-zn(s),a=1<<o,l=i[o];l===-1?((a&n)===0||(a&r)!==0)&&(i[o]=uA(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Hp(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function $E(){var t=Du;return Du<<=1,(Du&4194240)===0&&(Du=64),t}function Tf(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function jl(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-zn(e),t[e]=n}function hA(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-zn(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Lg(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-zn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var fe=0;function ME(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var LE,Fg,FE,UE,zE,qp=!1,Mu=[],Kr=null,Gr=null,Qr=null,Ja=new Map,Za=new Map,zr=[],dA="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function r_(t,e){switch(t){case"focusin":case"focusout":Kr=null;break;case"dragenter":case"dragleave":Gr=null;break;case"mouseover":case"mouseout":Qr=null;break;case"pointerover":case"pointerout":Ja.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Za.delete(e.pointerId)}}function oa(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Hl(e),e!==null&&Fg(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function fA(t,e,n,r,i){switch(e){case"focusin":return Kr=oa(Kr,t,e,n,r,i),!0;case"dragenter":return Gr=oa(Gr,t,e,n,r,i),!0;case"mouseover":return Qr=oa(Qr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Ja.set(s,oa(Ja.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Za.set(s,oa(Za.get(s)||null,t,e,n,r,i)),!0}return!1}function VE(t){var e=Ni(t.target);if(e!==null){var n=ms(e);if(n!==null){if(e=n.tag,e===13){if(e=RE(n),e!==null){t.blockedOn=e,zE(t.priority,function(){FE(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function hc(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Kp(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Vp=r,n.target.dispatchEvent(r),Vp=null}else return e=Hl(n),e!==null&&Fg(e),t.blockedOn=n,!1;e.shift()}return!0}function i_(t,e,n){hc(t)&&n.delete(e)}function pA(){qp=!1,Kr!==null&&hc(Kr)&&(Kr=null),Gr!==null&&hc(Gr)&&(Gr=null),Qr!==null&&hc(Qr)&&(Qr=null),Ja.forEach(i_),Za.forEach(i_)}function aa(t,e){t.blockedOn===e&&(t.blockedOn=null,qp||(qp=!0,cn.unstable_scheduleCallback(cn.unstable_NormalPriority,pA)))}function el(t){function e(i){return aa(i,t)}if(0<Mu.length){aa(Mu[0],t);for(var n=1;n<Mu.length;n++){var r=Mu[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Kr!==null&&aa(Kr,t),Gr!==null&&aa(Gr,t),Qr!==null&&aa(Qr,t),Ja.forEach(e),Za.forEach(e),n=0;n<zr.length;n++)r=zr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<zr.length&&(n=zr[0],n.blockedOn===null);)VE(n),n.blockedOn===null&&zr.shift()}var Xs=Nr.ReactCurrentBatchConfig,Bc=!0;function mA(t,e,n,r){var i=fe,s=Xs.transition;Xs.transition=null;try{fe=1,Ug(t,e,n,r)}finally{fe=i,Xs.transition=s}}function gA(t,e,n,r){var i=fe,s=Xs.transition;Xs.transition=null;try{fe=4,Ug(t,e,n,r)}finally{fe=i,Xs.transition=s}}function Ug(t,e,n,r){if(Bc){var i=Kp(t,e,n,r);if(i===null)Df(t,e,r,jc,n),r_(t,r);else if(fA(i,t,e,n,r))r.stopPropagation();else if(r_(t,r),e&4&&-1<dA.indexOf(t)){for(;i!==null;){var s=Hl(i);if(s!==null&&LE(s),s=Kp(t,e,n,r),s===null&&Df(t,e,r,jc,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Df(t,e,r,null,n)}}var jc=null;function Kp(t,e,n,r){if(jc=null,t=$g(r),t=Ni(t),t!==null)if(e=ms(t),e===null)t=null;else if(n=e.tag,n===13){if(t=RE(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return jc=t,null}function BE(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(rA()){case Mg:return 1;case OE:return 4;case zc:case iA:return 16;case DE:return 536870912;default:return 16}default:return 16}}var Hr=null,zg=null,dc=null;function jE(){if(dc)return dc;var t,e=zg,n=e.length,r,i="value"in Hr?Hr.value:Hr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return dc=i.slice(t,1<r?1-r:void 0)}function fc(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Lu(){return!0}function s_(){return!1}function mn(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Lu:s_,this.isPropagationStopped=s_,this}return Me(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Lu)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Lu)},persist:function(){},isPersistent:Lu}),e}var Mo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Vg=mn(Mo),Wl=Me({},Mo,{view:0,detail:0}),yA=mn(Wl),If,kf,la,Xh=Me({},Wl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Bg,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==la&&(la&&t.type==="mousemove"?(If=t.screenX-la.screenX,kf=t.screenY-la.screenY):kf=If=0,la=t),If)},movementY:function(t){return"movementY"in t?t.movementY:kf}}),o_=mn(Xh),vA=Me({},Xh,{dataTransfer:0}),_A=mn(vA),wA=Me({},Wl,{relatedTarget:0}),bf=mn(wA),CA=Me({},Mo,{animationName:0,elapsedTime:0,pseudoElement:0}),EA=mn(CA),SA=Me({},Mo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),TA=mn(SA),IA=Me({},Mo,{data:0}),a_=mn(IA),kA={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},bA={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},xA={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function RA(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=xA[t])?!!e[t]:!1}function Bg(){return RA}var NA=Me({},Wl,{key:function(t){if(t.key){var e=kA[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=fc(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?bA[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Bg,charCode:function(t){return t.type==="keypress"?fc(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?fc(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),AA=mn(NA),PA=Me({},Xh,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),l_=mn(PA),OA=Me({},Wl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Bg}),DA=mn(OA),$A=Me({},Mo,{propertyName:0,elapsedTime:0,pseudoElement:0}),MA=mn($A),LA=Me({},Xh,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),FA=mn(LA),UA=[9,13,27,32],jg=Cr&&"CompositionEvent"in window,Aa=null;Cr&&"documentMode"in document&&(Aa=document.documentMode);var zA=Cr&&"TextEvent"in window&&!Aa,WE=Cr&&(!jg||Aa&&8<Aa&&11>=Aa),u_=String.fromCharCode(32),c_=!1;function HE(t,e){switch(t){case"keyup":return UA.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function qE(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ds=!1;function VA(t,e){switch(t){case"compositionend":return qE(e);case"keypress":return e.which!==32?null:(c_=!0,u_);case"textInput":return t=e.data,t===u_&&c_?null:t;default:return null}}function BA(t,e){if(Ds)return t==="compositionend"||!jg&&HE(t,e)?(t=jE(),dc=zg=Hr=null,Ds=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return WE&&e.locale!=="ko"?null:e.data;default:return null}}var jA={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function h_(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!jA[t.type]:e==="textarea"}function KE(t,e,n,r){TE(r),e=Wc(e,"onChange"),0<e.length&&(n=new Vg("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Pa=null,tl=null;function WA(t){iS(t,0)}function Jh(t){var e=Ls(t);if(yE(e))return t}function HA(t,e){if(t==="change")return e}var GE=!1;if(Cr){var xf;if(Cr){var Rf="oninput"in document;if(!Rf){var d_=document.createElement("div");d_.setAttribute("oninput","return;"),Rf=typeof d_.oninput=="function"}xf=Rf}else xf=!1;GE=xf&&(!document.documentMode||9<document.documentMode)}function f_(){Pa&&(Pa.detachEvent("onpropertychange",QE),tl=Pa=null)}function QE(t){if(t.propertyName==="value"&&Jh(tl)){var e=[];KE(e,tl,t,$g(t)),xE(WA,e)}}function qA(t,e,n){t==="focusin"?(f_(),Pa=e,tl=n,Pa.attachEvent("onpropertychange",QE)):t==="focusout"&&f_()}function KA(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Jh(tl)}function GA(t,e){if(t==="click")return Jh(e)}function QA(t,e){if(t==="input"||t==="change")return Jh(e)}function YA(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var jn=typeof Object.is=="function"?Object.is:YA;function nl(t,e){if(jn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Rp.call(e,i)||!jn(t[i],e[i]))return!1}return!0}function p_(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function m_(t,e){var n=p_(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=p_(n)}}function YE(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?YE(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function XE(){for(var t=window,e=Lc();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Lc(t.document)}return e}function Wg(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function XA(t){var e=XE(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&YE(n.ownerDocument.documentElement,n)){if(r!==null&&Wg(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=m_(n,s);var o=m_(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var JA=Cr&&"documentMode"in document&&11>=document.documentMode,$s=null,Gp=null,Oa=null,Qp=!1;function g_(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Qp||$s==null||$s!==Lc(r)||(r=$s,"selectionStart"in r&&Wg(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Oa&&nl(Oa,r)||(Oa=r,r=Wc(Gp,"onSelect"),0<r.length&&(e=new Vg("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=$s)))}function Fu(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ms={animationend:Fu("Animation","AnimationEnd"),animationiteration:Fu("Animation","AnimationIteration"),animationstart:Fu("Animation","AnimationStart"),transitionend:Fu("Transition","TransitionEnd")},Nf={},JE={};Cr&&(JE=document.createElement("div").style,"AnimationEvent"in window||(delete Ms.animationend.animation,delete Ms.animationiteration.animation,delete Ms.animationstart.animation),"TransitionEvent"in window||delete Ms.transitionend.transition);function Zh(t){if(Nf[t])return Nf[t];if(!Ms[t])return t;var e=Ms[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in JE)return Nf[t]=e[n];return t}var ZE=Zh("animationend"),eS=Zh("animationiteration"),tS=Zh("animationstart"),nS=Zh("transitionend"),rS=new Map,y_="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function di(t,e){rS.set(t,e),ps(e,[t])}for(var Af=0;Af<y_.length;Af++){var Pf=y_[Af],ZA=Pf.toLowerCase(),eP=Pf[0].toUpperCase()+Pf.slice(1);di(ZA,"on"+eP)}di(ZE,"onAnimationEnd");di(eS,"onAnimationIteration");di(tS,"onAnimationStart");di("dblclick","onDoubleClick");di("focusin","onFocus");di("focusout","onBlur");di(nS,"onTransitionEnd");co("onMouseEnter",["mouseout","mouseover"]);co("onMouseLeave",["mouseout","mouseover"]);co("onPointerEnter",["pointerout","pointerover"]);co("onPointerLeave",["pointerout","pointerover"]);ps("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ps("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ps("onBeforeInput",["compositionend","keypress","textInput","paste"]);ps("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ps("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ps("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Sa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),tP=new Set("cancel close invalid load scroll toggle".split(" ").concat(Sa));function v_(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,ZN(r,e,void 0,t),t.currentTarget=null}function iS(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;v_(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;v_(i,a,u),s=l}}}if(Uc)throw t=Wp,Uc=!1,Wp=null,t}function Te(t,e){var n=e[em];n===void 0&&(n=e[em]=new Set);var r=t+"__bubble";n.has(r)||(sS(e,t,2,!1),n.add(r))}function Of(t,e,n){var r=0;e&&(r|=4),sS(n,t,r,e)}var Uu="_reactListening"+Math.random().toString(36).slice(2);function rl(t){if(!t[Uu]){t[Uu]=!0,dE.forEach(function(n){n!=="selectionchange"&&(tP.has(n)||Of(n,!1,t),Of(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Uu]||(e[Uu]=!0,Of("selectionchange",!1,e))}}function sS(t,e,n,r){switch(BE(e)){case 1:var i=mA;break;case 4:i=gA;break;default:i=Ug}n=i.bind(null,e,n,t),i=void 0,!jp||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Df(t,e,n,r,i){var s=r;if((e&1)===0&&(e&2)===0&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Ni(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}xE(function(){var u=s,c=$g(n),h=[];e:{var d=rS.get(t);if(d!==void 0){var f=Vg,p=t;switch(t){case"keypress":if(fc(n)===0)break e;case"keydown":case"keyup":f=AA;break;case"focusin":p="focus",f=bf;break;case"focusout":p="blur",f=bf;break;case"beforeblur":case"afterblur":f=bf;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":f=o_;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":f=_A;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":f=DA;break;case ZE:case eS:case tS:f=EA;break;case nS:f=MA;break;case"scroll":f=yA;break;case"wheel":f=FA;break;case"copy":case"cut":case"paste":f=TA;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":f=l_}var y=(e&4)!==0,w=!y&&t==="scroll",g=y?d!==null?d+"Capture":null:d;y=[];for(var m=u,v;m!==null;){v=m;var _=v.stateNode;if(v.tag===5&&_!==null&&(v=_,g!==null&&(_=Xa(m,g),_!=null&&y.push(il(m,_,v)))),w)break;m=m.return}0<y.length&&(d=new f(d,p,null,n,c),h.push({event:d,listeners:y}))}}if((e&7)===0){e:{if(d=t==="mouseover"||t==="pointerover",f=t==="mouseout"||t==="pointerout",d&&n!==Vp&&(p=n.relatedTarget||n.fromElement)&&(Ni(p)||p[Er]))break e;if((f||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,f?(p=n.relatedTarget||n.toElement,f=u,p=p?Ni(p):null,p!==null&&(w=ms(p),p!==w||p.tag!==5&&p.tag!==6)&&(p=null)):(f=null,p=u),f!==p)){if(y=o_,_="onMouseLeave",g="onMouseEnter",m="mouse",(t==="pointerout"||t==="pointerover")&&(y=l_,_="onPointerLeave",g="onPointerEnter",m="pointer"),w=f==null?d:Ls(f),v=p==null?d:Ls(p),d=new y(_,m+"leave",f,n,c),d.target=w,d.relatedTarget=v,_=null,Ni(c)===u&&(y=new y(g,m+"enter",p,n,c),y.target=v,y.relatedTarget=w,_=y),w=_,f&&p)t:{for(y=f,g=p,m=0,v=y;v;v=Ts(v))m++;for(v=0,_=g;_;_=Ts(_))v++;for(;0<m-v;)y=Ts(y),m--;for(;0<v-m;)g=Ts(g),v--;for(;m--;){if(y===g||g!==null&&y===g.alternate)break t;y=Ts(y),g=Ts(g)}y=null}else y=null;f!==null&&__(h,d,f,y,!1),p!==null&&w!==null&&__(h,w,p,y,!0)}}e:{if(d=u?Ls(u):window,f=d.nodeName&&d.nodeName.toLowerCase(),f==="select"||f==="input"&&d.type==="file")var C=HA;else if(h_(d))if(GE)C=QA;else{C=KA;var T=qA}else(f=d.nodeName)&&f.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(C=GA);if(C&&(C=C(t,u))){KE(h,C,n,c);break e}T&&T(t,d,u),t==="focusout"&&(T=d._wrapperState)&&T.controlled&&d.type==="number"&&Mp(d,"number",d.value)}switch(T=u?Ls(u):window,t){case"focusin":(h_(T)||T.contentEditable==="true")&&($s=T,Gp=u,Oa=null);break;case"focusout":Oa=Gp=$s=null;break;case"mousedown":Qp=!0;break;case"contextmenu":case"mouseup":case"dragend":Qp=!1,g_(h,n,c);break;case"selectionchange":if(JA)break;case"keydown":case"keyup":g_(h,n,c)}var S;if(jg)e:{switch(t){case"compositionstart":var x="onCompositionStart";break e;case"compositionend":x="onCompositionEnd";break e;case"compositionupdate":x="onCompositionUpdate";break e}x=void 0}else Ds?HE(t,n)&&(x="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(x="onCompositionStart");x&&(WE&&n.locale!=="ko"&&(Ds||x!=="onCompositionStart"?x==="onCompositionEnd"&&Ds&&(S=jE()):(Hr=c,zg="value"in Hr?Hr.value:Hr.textContent,Ds=!0)),T=Wc(u,x),0<T.length&&(x=new a_(x,t,null,n,c),h.push({event:x,listeners:T}),S?x.data=S:(S=qE(n),S!==null&&(x.data=S)))),(S=zA?VA(t,n):BA(t,n))&&(u=Wc(u,"onBeforeInput"),0<u.length&&(c=new a_("onBeforeInput","beforeinput",null,n,c),h.push({event:c,listeners:u}),c.data=S))}iS(h,e)})}function il(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Wc(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Xa(t,n),s!=null&&r.unshift(il(t,s,i)),s=Xa(t,e),s!=null&&r.push(il(t,s,i))),t=t.return}return r}function Ts(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function __(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=Xa(n,s),l!=null&&o.unshift(il(n,l,a))):i||(l=Xa(n,s),l!=null&&o.push(il(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var nP=/\r\n?/g,rP=/\u0000|\uFFFD/g;function w_(t){return(typeof t=="string"?t:""+t).replace(nP,`
`).replace(rP,"")}function zu(t,e,n){if(e=w_(e),w_(t)!==e&&n)throw Error(b(425))}function Hc(){}var Yp=null,Xp=null;function Jp(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Zp=typeof setTimeout=="function"?setTimeout:void 0,iP=typeof clearTimeout=="function"?clearTimeout:void 0,C_=typeof Promise=="function"?Promise:void 0,sP=typeof queueMicrotask=="function"?queueMicrotask:typeof C_<"u"?function(t){return C_.resolve(null).then(t).catch(oP)}:Zp;function oP(t){setTimeout(function(){throw t})}function $f(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),el(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);el(e)}function Yr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function E_(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Lo=Math.random().toString(36).slice(2),Qn="__reactFiber$"+Lo,sl="__reactProps$"+Lo,Er="__reactContainer$"+Lo,em="__reactEvents$"+Lo,aP="__reactListeners$"+Lo,lP="__reactHandles$"+Lo;function Ni(t){var e=t[Qn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Er]||n[Qn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=E_(t);t!==null;){if(n=t[Qn])return n;t=E_(t)}return e}t=n,n=t.parentNode}return null}function Hl(t){return t=t[Qn]||t[Er],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ls(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(b(33))}function ed(t){return t[sl]||null}var tm=[],Fs=-1;function fi(t){return{current:t}}function ke(t){0>Fs||(t.current=tm[Fs],tm[Fs]=null,Fs--)}function Ee(t,e){Fs++,tm[Fs]=t.current,t.current=e}var si={},At=fi(si),Qt=fi(!1),Ki=si;function ho(t,e){var n=t.type.contextTypes;if(!n)return si;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Yt(t){return t=t.childContextTypes,t!=null}function qc(){ke(Qt),ke(At)}function S_(t,e,n){if(At.current!==si)throw Error(b(168));Ee(At,e),Ee(Qt,n)}function oS(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(b(108,qN(t)||"Unknown",i));return Me({},n,r)}function Kc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||si,Ki=At.current,Ee(At,t),Ee(Qt,Qt.current),!0}function T_(t,e,n){var r=t.stateNode;if(!r)throw Error(b(169));n?(t=oS(t,e,Ki),r.__reactInternalMemoizedMergedChildContext=t,ke(Qt),ke(At),Ee(At,t)):ke(Qt),Ee(Qt,n)}var lr=null,td=!1,Mf=!1;function aS(t){lr===null?lr=[t]:lr.push(t)}function uP(t){td=!0,aS(t)}function pi(){if(!Mf&&lr!==null){Mf=!0;var t=0,e=fe;try{var n=lr;for(fe=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}lr=null,td=!1}catch(i){throw lr!==null&&(lr=lr.slice(t+1)),PE(Mg,pi),i}finally{fe=e,Mf=!1}}return null}var Us=[],zs=0,Gc=null,Qc=0,Cn=[],En=0,Gi=null,cr=1,hr="";function Ti(t,e){Us[zs++]=Qc,Us[zs++]=Gc,Gc=t,Qc=e}function lS(t,e,n){Cn[En++]=cr,Cn[En++]=hr,Cn[En++]=Gi,Gi=t;var r=cr;t=hr;var i=32-zn(r)-1;r&=~(1<<i),n+=1;var s=32-zn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,cr=1<<32-zn(e)+i|n<<i|r,hr=s+t}else cr=1<<s|n<<i|r,hr=t}function Hg(t){t.return!==null&&(Ti(t,1),lS(t,1,0))}function qg(t){for(;t===Gc;)Gc=Us[--zs],Us[zs]=null,Qc=Us[--zs],Us[zs]=null;for(;t===Gi;)Gi=Cn[--En],Cn[En]=null,hr=Cn[--En],Cn[En]=null,cr=Cn[--En],Cn[En]=null}var an=null,on=null,Re=!1,$n=null;function uS(t,e){var n=Tn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function I_(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,an=t,on=Yr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,an=t,on=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Gi!==null?{id:cr,overflow:hr}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Tn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,an=t,on=null,!0):!1;default:return!1}}function nm(t){return(t.mode&1)!==0&&(t.flags&128)===0}function rm(t){if(Re){var e=on;if(e){var n=e;if(!I_(t,e)){if(nm(t))throw Error(b(418));e=Yr(n.nextSibling);var r=an;e&&I_(t,e)?uS(r,n):(t.flags=t.flags&-4097|2,Re=!1,an=t)}}else{if(nm(t))throw Error(b(418));t.flags=t.flags&-4097|2,Re=!1,an=t}}}function k_(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;an=t}function Vu(t){if(t!==an)return!1;if(!Re)return k_(t),Re=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Jp(t.type,t.memoizedProps)),e&&(e=on)){if(nm(t))throw cS(),Error(b(418));for(;e;)uS(t,e),e=Yr(e.nextSibling)}if(k_(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(b(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){on=Yr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}on=null}}else on=an?Yr(t.stateNode.nextSibling):null;return!0}function cS(){for(var t=on;t;)t=Yr(t.nextSibling)}function fo(){on=an=null,Re=!1}function Kg(t){$n===null?$n=[t]:$n.push(t)}var cP=Nr.ReactCurrentBatchConfig;function On(t,e){if(t&&t.defaultProps){e=Me({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var Yc=fi(null),Xc=null,Vs=null,Gg=null;function Qg(){Gg=Vs=Xc=null}function Yg(t){var e=Yc.current;ke(Yc),t._currentValue=e}function im(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Js(t,e){Xc=t,Gg=Vs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&e)!==0&&(Ht=!0),t.firstContext=null)}function bn(t){var e=t._currentValue;if(Gg!==t)if(t={context:t,memoizedValue:e,next:null},Vs===null){if(Xc===null)throw Error(b(308));Vs=t,Xc.dependencies={lanes:0,firstContext:t}}else Vs=Vs.next=t;return e}var Ai=null;function Xg(t){Ai===null?Ai=[t]:Ai.push(t)}function hS(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Xg(e)):(n.next=i.next,i.next=n),e.interleaved=n,Sr(t,r)}function Sr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Ur=!1;function Jg(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function dS(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function gr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Xr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,(oe&2)!==0){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Sr(t,n)}return i=r.interleaved,i===null?(e.next=e,Xg(r)):(e.next=i.next,i.next=e),r.interleaved=e,Sr(t,n)}function pc(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Lg(t,n)}}function b_(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Jc(t,e,n,r){var i=t.updateQueue;Ur=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var h=i.baseState;o=0,c=u=l=null,a=s;do{var d=a.lane,f=a.eventTime;if((r&d)===d){c!==null&&(c=c.next={eventTime:f,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var p=t,y=a;switch(d=e,f=n,y.tag){case 1:if(p=y.payload,typeof p=="function"){h=p.call(f,h,d);break e}h=p;break e;case 3:p.flags=p.flags&-65537|128;case 0:if(p=y.payload,d=typeof p=="function"?p.call(f,h,d):p,d==null)break e;h=Me({},h,d);break e;case 2:Ur=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=i.effects,d===null?i.effects=[a]:d.push(a))}else f={eventTime:f,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=f,l=h):c=c.next=f,o|=d;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;d=a,a=d.next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}while(1);if(c===null&&(l=h),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Yi|=o,t.lanes=o,t.memoizedState=h}}function x_(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(b(191,i));i.call(r)}}}var fS=new hE.Component().refs;function sm(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Me({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var nd={isMounted:function(t){return(t=t._reactInternals)?ms(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Mt(),i=Zr(t),s=gr(r,i);s.payload=e,n!=null&&(s.callback=n),e=Xr(t,s,i),e!==null&&(Vn(e,t,i,r),pc(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Mt(),i=Zr(t),s=gr(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Xr(t,s,i),e!==null&&(Vn(e,t,i,r),pc(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Mt(),r=Zr(t),i=gr(n,r);i.tag=2,e!=null&&(i.callback=e),e=Xr(t,i,r),e!==null&&(Vn(e,t,r,n),pc(e,t,r))}};function R_(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!nl(n,r)||!nl(i,s):!0}function pS(t,e,n){var r=!1,i=si,s=e.contextType;return typeof s=="object"&&s!==null?s=bn(s):(i=Yt(e)?Ki:At.current,r=e.contextTypes,s=(r=r!=null)?ho(t,i):si),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=nd,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function N_(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&nd.enqueueReplaceState(e,e.state,null)}function om(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=fS,Jg(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=bn(s):(s=Yt(e)?Ki:At.current,i.context=ho(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(sm(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&nd.enqueueReplaceState(i,i.state,null),Jc(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function ua(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(b(309));var r=n.stateNode}if(!r)throw Error(b(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===fS&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(b(284));if(!n._owner)throw Error(b(290,t))}return t}function Bu(t,e){throw t=Object.prototype.toString.call(e),Error(b(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function A_(t){var e=t._init;return e(t._payload)}function mS(t){function e(g,m){if(t){var v=g.deletions;v===null?(g.deletions=[m],g.flags|=16):v.push(m)}}function n(g,m){if(!t)return null;for(;m!==null;)e(g,m),m=m.sibling;return null}function r(g,m){for(g=new Map;m!==null;)m.key!==null?g.set(m.key,m):g.set(m.index,m),m=m.sibling;return g}function i(g,m){return g=ei(g,m),g.index=0,g.sibling=null,g}function s(g,m,v){return g.index=v,t?(v=g.alternate,v!==null?(v=v.index,v<m?(g.flags|=2,m):v):(g.flags|=2,m)):(g.flags|=1048576,m)}function o(g){return t&&g.alternate===null&&(g.flags|=2),g}function a(g,m,v,_){return m===null||m.tag!==6?(m=jf(v,g.mode,_),m.return=g,m):(m=i(m,v),m.return=g,m)}function l(g,m,v,_){var C=v.type;return C===Os?c(g,m,v.props.children,_,v.key):m!==null&&(m.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Fr&&A_(C)===m.type)?(_=i(m,v.props),_.ref=ua(g,m,v),_.return=g,_):(_=wc(v.type,v.key,v.props,null,g.mode,_),_.ref=ua(g,m,v),_.return=g,_)}function u(g,m,v,_){return m===null||m.tag!==4||m.stateNode.containerInfo!==v.containerInfo||m.stateNode.implementation!==v.implementation?(m=Wf(v,g.mode,_),m.return=g,m):(m=i(m,v.children||[]),m.return=g,m)}function c(g,m,v,_,C){return m===null||m.tag!==7?(m=Vi(v,g.mode,_,C),m.return=g,m):(m=i(m,v),m.return=g,m)}function h(g,m,v){if(typeof m=="string"&&m!==""||typeof m=="number")return m=jf(""+m,g.mode,v),m.return=g,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Au:return v=wc(m.type,m.key,m.props,null,g.mode,v),v.ref=ua(g,null,m),v.return=g,v;case Ps:return m=Wf(m,g.mode,v),m.return=g,m;case Fr:var _=m._init;return h(g,_(m._payload),v)}if(Ca(m)||ia(m))return m=Vi(m,g.mode,v,null),m.return=g,m;Bu(g,m)}return null}function d(g,m,v,_){var C=m!==null?m.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return C!==null?null:a(g,m,""+v,_);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Au:return v.key===C?l(g,m,v,_):null;case Ps:return v.key===C?u(g,m,v,_):null;case Fr:return C=v._init,d(g,m,C(v._payload),_)}if(Ca(v)||ia(v))return C!==null?null:c(g,m,v,_,null);Bu(g,v)}return null}function f(g,m,v,_,C){if(typeof _=="string"&&_!==""||typeof _=="number")return g=g.get(v)||null,a(m,g,""+_,C);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Au:return g=g.get(_.key===null?v:_.key)||null,l(m,g,_,C);case Ps:return g=g.get(_.key===null?v:_.key)||null,u(m,g,_,C);case Fr:var T=_._init;return f(g,m,v,T(_._payload),C)}if(Ca(_)||ia(_))return g=g.get(v)||null,c(m,g,_,C,null);Bu(m,_)}return null}function p(g,m,v,_){for(var C=null,T=null,S=m,x=m=0,V=null;S!==null&&x<v.length;x++){S.index>x?(V=S,S=null):V=S.sibling;var N=d(g,S,v[x],_);if(N===null){S===null&&(S=V);break}t&&S&&N.alternate===null&&e(g,S),m=s(N,m,x),T===null?C=N:T.sibling=N,T=N,S=V}if(x===v.length)return n(g,S),Re&&Ti(g,x),C;if(S===null){for(;x<v.length;x++)S=h(g,v[x],_),S!==null&&(m=s(S,m,x),T===null?C=S:T.sibling=S,T=S);return Re&&Ti(g,x),C}for(S=r(g,S);x<v.length;x++)V=f(S,g,x,v[x],_),V!==null&&(t&&V.alternate!==null&&S.delete(V.key===null?x:V.key),m=s(V,m,x),T===null?C=V:T.sibling=V,T=V);return t&&S.forEach(function(Q){return e(g,Q)}),Re&&Ti(g,x),C}function y(g,m,v,_){var C=ia(v);if(typeof C!="function")throw Error(b(150));if(v=C.call(v),v==null)throw Error(b(151));for(var T=C=null,S=m,x=m=0,V=null,N=v.next();S!==null&&!N.done;x++,N=v.next()){S.index>x?(V=S,S=null):V=S.sibling;var Q=d(g,S,N.value,_);if(Q===null){S===null&&(S=V);break}t&&S&&Q.alternate===null&&e(g,S),m=s(Q,m,x),T===null?C=Q:T.sibling=Q,T=Q,S=V}if(N.done)return n(g,S),Re&&Ti(g,x),C;if(S===null){for(;!N.done;x++,N=v.next())N=h(g,N.value,_),N!==null&&(m=s(N,m,x),T===null?C=N:T.sibling=N,T=N);return Re&&Ti(g,x),C}for(S=r(g,S);!N.done;x++,N=v.next())N=f(S,g,x,N.value,_),N!==null&&(t&&N.alternate!==null&&S.delete(N.key===null?x:N.key),m=s(N,m,x),T===null?C=N:T.sibling=N,T=N);return t&&S.forEach(function(te){return e(g,te)}),Re&&Ti(g,x),C}function w(g,m,v,_){if(typeof v=="object"&&v!==null&&v.type===Os&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case Au:e:{for(var C=v.key,T=m;T!==null;){if(T.key===C){if(C=v.type,C===Os){if(T.tag===7){n(g,T.sibling),m=i(T,v.props.children),m.return=g,g=m;break e}}else if(T.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Fr&&A_(C)===T.type){n(g,T.sibling),m=i(T,v.props),m.ref=ua(g,T,v),m.return=g,g=m;break e}n(g,T);break}else e(g,T);T=T.sibling}v.type===Os?(m=Vi(v.props.children,g.mode,_,v.key),m.return=g,g=m):(_=wc(v.type,v.key,v.props,null,g.mode,_),_.ref=ua(g,m,v),_.return=g,g=_)}return o(g);case Ps:e:{for(T=v.key;m!==null;){if(m.key===T)if(m.tag===4&&m.stateNode.containerInfo===v.containerInfo&&m.stateNode.implementation===v.implementation){n(g,m.sibling),m=i(m,v.children||[]),m.return=g,g=m;break e}else{n(g,m);break}else e(g,m);m=m.sibling}m=Wf(v,g.mode,_),m.return=g,g=m}return o(g);case Fr:return T=v._init,w(g,m,T(v._payload),_)}if(Ca(v))return p(g,m,v,_);if(ia(v))return y(g,m,v,_);Bu(g,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,m!==null&&m.tag===6?(n(g,m.sibling),m=i(m,v),m.return=g,g=m):(n(g,m),m=jf(v,g.mode,_),m.return=g,g=m),o(g)):n(g,m)}return w}var po=mS(!0),gS=mS(!1),ql={},Xn=fi(ql),ol=fi(ql),al=fi(ql);function Pi(t){if(t===ql)throw Error(b(174));return t}function Zg(t,e){switch(Ee(al,e),Ee(ol,t),Ee(Xn,ql),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Fp(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Fp(e,t)}ke(Xn),Ee(Xn,e)}function mo(){ke(Xn),ke(ol),ke(al)}function yS(t){Pi(al.current);var e=Pi(Xn.current),n=Fp(e,t.type);e!==n&&(Ee(ol,t),Ee(Xn,n))}function ey(t){ol.current===t&&(ke(Xn),ke(ol))}var De=fi(0);function Zc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Lf=[];function ty(){for(var t=0;t<Lf.length;t++)Lf[t]._workInProgressVersionPrimary=null;Lf.length=0}var mc=Nr.ReactCurrentDispatcher,Ff=Nr.ReactCurrentBatchConfig,Qi=0,$e=null,Qe=null,st=null,eh=!1,Da=!1,ll=0,hP=0;function St(){throw Error(b(321))}function ny(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!jn(t[n],e[n]))return!1;return!0}function ry(t,e,n,r,i,s){if(Qi=s,$e=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,mc.current=t===null||t.memoizedState===null?mP:gP,t=n(r,i),Da){s=0;do{if(Da=!1,ll=0,25<=s)throw Error(b(301));s+=1,st=Qe=null,e.updateQueue=null,mc.current=yP,t=n(r,i)}while(Da)}if(mc.current=th,e=Qe!==null&&Qe.next!==null,Qi=0,st=Qe=$e=null,eh=!1,e)throw Error(b(300));return t}function iy(){var t=ll!==0;return ll=0,t}function qn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return st===null?$e.memoizedState=st=t:st=st.next=t,st}function xn(){if(Qe===null){var t=$e.alternate;t=t!==null?t.memoizedState:null}else t=Qe.next;var e=st===null?$e.memoizedState:st.next;if(e!==null)st=e,Qe=t;else{if(t===null)throw Error(b(310));Qe=t,t={memoizedState:Qe.memoizedState,baseState:Qe.baseState,baseQueue:Qe.baseQueue,queue:Qe.queue,next:null},st===null?$e.memoizedState=st=t:st=st.next=t}return st}function ul(t,e){return typeof e=="function"?e(t):e}function Uf(t){var e=xn(),n=e.queue;if(n===null)throw Error(b(311));n.lastRenderedReducer=t;var r=Qe,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((Qi&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var h={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=h,o=r):l=l.next=h,$e.lanes|=c,Yi|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,jn(r,e.memoizedState)||(Ht=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,$e.lanes|=s,Yi|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function zf(t){var e=xn(),n=e.queue;if(n===null)throw Error(b(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);jn(s,e.memoizedState)||(Ht=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function vS(){}function _S(t,e){var n=$e,r=xn(),i=e(),s=!jn(r.memoizedState,i);if(s&&(r.memoizedState=i,Ht=!0),r=r.queue,sy(ES.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||st!==null&&st.memoizedState.tag&1){if(n.flags|=2048,cl(9,CS.bind(null,n,r,i,e),void 0,null),lt===null)throw Error(b(349));(Qi&30)!==0||wS(n,e,i)}return i}function wS(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=$e.updateQueue,e===null?(e={lastEffect:null,stores:null},$e.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function CS(t,e,n,r){e.value=n,e.getSnapshot=r,SS(e)&&TS(t)}function ES(t,e,n){return n(function(){SS(e)&&TS(t)})}function SS(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!jn(t,n)}catch{return!0}}function TS(t){var e=Sr(t,1);e!==null&&Vn(e,t,1,-1)}function P_(t){var e=qn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ul,lastRenderedState:t},e.queue=t,t=t.dispatch=pP.bind(null,$e,t),[e.memoizedState,t]}function cl(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=$e.updateQueue,e===null?(e={lastEffect:null,stores:null},$e.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function IS(){return xn().memoizedState}function gc(t,e,n,r){var i=qn();$e.flags|=t,i.memoizedState=cl(1|e,n,void 0,r===void 0?null:r)}function rd(t,e,n,r){var i=xn();r=r===void 0?null:r;var s=void 0;if(Qe!==null){var o=Qe.memoizedState;if(s=o.destroy,r!==null&&ny(r,o.deps)){i.memoizedState=cl(e,n,s,r);return}}$e.flags|=t,i.memoizedState=cl(1|e,n,s,r)}function O_(t,e){return gc(8390656,8,t,e)}function sy(t,e){return rd(2048,8,t,e)}function kS(t,e){return rd(4,2,t,e)}function bS(t,e){return rd(4,4,t,e)}function xS(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function RS(t,e,n){return n=n!=null?n.concat([t]):null,rd(4,4,xS.bind(null,e,t),n)}function oy(){}function NS(t,e){var n=xn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&ny(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function AS(t,e){var n=xn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&ny(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function PS(t,e,n){return(Qi&21)===0?(t.baseState&&(t.baseState=!1,Ht=!0),t.memoizedState=n):(jn(n,e)||(n=$E(),$e.lanes|=n,Yi|=n,t.baseState=!0),e)}function dP(t,e){var n=fe;fe=n!==0&&4>n?n:4,t(!0);var r=Ff.transition;Ff.transition={};try{t(!1),e()}finally{fe=n,Ff.transition=r}}function OS(){return xn().memoizedState}function fP(t,e,n){var r=Zr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},DS(t))$S(e,n);else if(n=hS(t,e,n,r),n!==null){var i=Mt();Vn(n,t,r,i),MS(n,e,r)}}function pP(t,e,n){var r=Zr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(DS(t))$S(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,jn(a,o)){var l=e.interleaved;l===null?(i.next=i,Xg(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=hS(t,e,i,r),n!==null&&(i=Mt(),Vn(n,t,r,i),MS(n,e,r))}}function DS(t){var e=t.alternate;return t===$e||e!==null&&e===$e}function $S(t,e){Da=eh=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function MS(t,e,n){if((n&4194240)!==0){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Lg(t,n)}}var th={readContext:bn,useCallback:St,useContext:St,useEffect:St,useImperativeHandle:St,useInsertionEffect:St,useLayoutEffect:St,useMemo:St,useReducer:St,useRef:St,useState:St,useDebugValue:St,useDeferredValue:St,useTransition:St,useMutableSource:St,useSyncExternalStore:St,useId:St,unstable_isNewReconciler:!1},mP={readContext:bn,useCallback:function(t,e){return qn().memoizedState=[t,e===void 0?null:e],t},useContext:bn,useEffect:O_,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,gc(4194308,4,xS.bind(null,e,t),n)},useLayoutEffect:function(t,e){return gc(4194308,4,t,e)},useInsertionEffect:function(t,e){return gc(4,2,t,e)},useMemo:function(t,e){var n=qn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=qn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=fP.bind(null,$e,t),[r.memoizedState,t]},useRef:function(t){var e=qn();return t={current:t},e.memoizedState=t},useState:P_,useDebugValue:oy,useDeferredValue:function(t){return qn().memoizedState=t},useTransition:function(){var t=P_(!1),e=t[0];return t=dP.bind(null,t[1]),qn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=$e,i=qn();if(Re){if(n===void 0)throw Error(b(407));n=n()}else{if(n=e(),lt===null)throw Error(b(349));(Qi&30)!==0||wS(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,O_(ES.bind(null,r,s,t),[t]),r.flags|=2048,cl(9,CS.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=qn(),e=lt.identifierPrefix;if(Re){var n=hr,r=cr;n=(r&~(1<<32-zn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=ll++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=hP++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},gP={readContext:bn,useCallback:NS,useContext:bn,useEffect:sy,useImperativeHandle:RS,useInsertionEffect:kS,useLayoutEffect:bS,useMemo:AS,useReducer:Uf,useRef:IS,useState:function(){return Uf(ul)},useDebugValue:oy,useDeferredValue:function(t){var e=xn();return PS(e,Qe.memoizedState,t)},useTransition:function(){var t=Uf(ul)[0],e=xn().memoizedState;return[t,e]},useMutableSource:vS,useSyncExternalStore:_S,useId:OS,unstable_isNewReconciler:!1},yP={readContext:bn,useCallback:NS,useContext:bn,useEffect:sy,useImperativeHandle:RS,useInsertionEffect:kS,useLayoutEffect:bS,useMemo:AS,useReducer:zf,useRef:IS,useState:function(){return zf(ul)},useDebugValue:oy,useDeferredValue:function(t){var e=xn();return Qe===null?e.memoizedState=t:PS(e,Qe.memoizedState,t)},useTransition:function(){var t=zf(ul)[0],e=xn().memoizedState;return[t,e]},useMutableSource:vS,useSyncExternalStore:_S,useId:OS,unstable_isNewReconciler:!1};function go(t,e){try{var n="",r=e;do n+=HN(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Vf(t,e,n){return{value:t,source:null,stack:n!=null?n:null,digest:e!=null?e:null}}function am(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var vP=typeof WeakMap=="function"?WeakMap:Map;function LS(t,e,n){n=gr(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){rh||(rh=!0,ym=r),am(t,e)},n}function FS(t,e,n){n=gr(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){am(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){am(t,e),typeof r!="function"&&(Jr===null?Jr=new Set([this]):Jr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function D_(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new vP;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=PP.bind(null,t,e,n),e.then(t,t))}function $_(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function M_(t,e,n,r,i){return(t.mode&1)===0?(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=gr(-1,1),e.tag=2,Xr(n,e,1))),n.lanes|=1),t):(t.flags|=65536,t.lanes=i,t)}var _P=Nr.ReactCurrentOwner,Ht=!1;function Pt(t,e,n,r){e.child=t===null?gS(e,null,n,r):po(e,t.child,n,r)}function L_(t,e,n,r,i){n=n.render;var s=e.ref;return Js(e,i),r=ry(t,e,n,r,s,i),n=iy(),t!==null&&!Ht?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Tr(t,e,i)):(Re&&n&&Hg(e),e.flags|=1,Pt(t,e,r,i),e.child)}function F_(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!py(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,US(t,e,s,r,i)):(t=wc(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,(t.lanes&i)===0){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:nl,n(o,r)&&t.ref===e.ref)return Tr(t,e,i)}return e.flags|=1,t=ei(s,r),t.ref=e.ref,t.return=e,e.child=t}function US(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(nl(s,r)&&t.ref===e.ref)if(Ht=!1,e.pendingProps=r=s,(t.lanes&i)!==0)(t.flags&131072)!==0&&(Ht=!0);else return e.lanes=t.lanes,Tr(t,e,i)}return lm(t,e,n,r,i)}function zS(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if((e.mode&1)===0)e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ee(js,sn),sn|=n;else{if((n&1073741824)===0)return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Ee(js,sn),sn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,Ee(js,sn),sn|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,Ee(js,sn),sn|=r;return Pt(t,e,i,n),e.child}function VS(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function lm(t,e,n,r,i){var s=Yt(n)?Ki:At.current;return s=ho(e,s),Js(e,i),n=ry(t,e,n,r,s,i),r=iy(),t!==null&&!Ht?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Tr(t,e,i)):(Re&&r&&Hg(e),e.flags|=1,Pt(t,e,n,i),e.child)}function U_(t,e,n,r,i){if(Yt(n)){var s=!0;Kc(e)}else s=!1;if(Js(e,i),e.stateNode===null)yc(t,e),pS(e,n,r),om(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=bn(u):(u=Yt(n)?Ki:At.current,u=ho(e,u));var c=n.getDerivedStateFromProps,h=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&N_(e,o,r,u),Ur=!1;var d=e.memoizedState;o.state=d,Jc(e,r,o,i),l=e.memoizedState,a!==r||d!==l||Qt.current||Ur?(typeof c=="function"&&(sm(e,n,c,r),l=e.memoizedState),(a=Ur||R_(e,n,a,r,d,l,u))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,dS(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:On(e.type,a),o.props=u,h=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=bn(l):(l=Yt(n)?Ki:At.current,l=ho(e,l));var f=n.getDerivedStateFromProps;(c=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||d!==l)&&N_(e,o,r,l),Ur=!1,d=e.memoizedState,o.state=d,Jc(e,r,o,i);var p=e.memoizedState;a!==h||d!==p||Qt.current||Ur?(typeof f=="function"&&(sm(e,n,f,r),p=e.memoizedState),(u=Ur||R_(e,n,u,r,d,p,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,p,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,p,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=p),o.props=r,o.state=p,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),r=!1)}return um(t,e,n,r,s,i)}function um(t,e,n,r,i,s){VS(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&T_(e,n,!1),Tr(t,e,s);r=e.stateNode,_P.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=po(e,t.child,null,s),e.child=po(e,null,a,s)):Pt(t,e,a,s),e.memoizedState=r.state,i&&T_(e,n,!0),e.child}function BS(t){var e=t.stateNode;e.pendingContext?S_(t,e.pendingContext,e.pendingContext!==e.context):e.context&&S_(t,e.context,!1),Zg(t,e.containerInfo)}function z_(t,e,n,r,i){return fo(),Kg(i),e.flags|=256,Pt(t,e,n,r),e.child}var cm={dehydrated:null,treeContext:null,retryLane:0};function hm(t){return{baseLanes:t,cachePool:null,transitions:null}}function jS(t,e,n){var r=e.pendingProps,i=De.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),Ee(De,i&1),t===null)return rm(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((e.mode&1)===0?e.lanes=1:t.data==="$!"?e.lanes=8:e.lanes=1073741824,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},(r&1)===0&&s!==null?(s.childLanes=0,s.pendingProps=o):s=od(o,r,0,null),t=Vi(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=hm(n),e.memoizedState=cm,t):ay(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return wP(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return(o&1)===0&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=ei(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=ei(a,s):(s=Vi(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?hm(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=cm,r}return s=t.child,t=s.sibling,r=ei(s,{mode:"visible",children:r.children}),(e.mode&1)===0&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function ay(t,e){return e=od({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function ju(t,e,n,r){return r!==null&&Kg(r),po(e,t.child,null,n),t=ay(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function wP(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Vf(Error(b(422))),ju(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=od({mode:"visible",children:r.children},i,0,null),s=Vi(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,(e.mode&1)!==0&&po(e,t.child,null,o),e.child.memoizedState=hm(o),e.memoizedState=cm,s);if((e.mode&1)===0)return ju(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(b(419)),r=Vf(s,r,void 0),ju(t,e,o,r)}if(a=(o&t.childLanes)!==0,Ht||a){if(r=lt,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=(i&(r.suspendedLanes|o))!==0?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Sr(t,i),Vn(r,t,i,-1))}return fy(),r=Vf(Error(b(421))),ju(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=OP.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,on=Yr(i.nextSibling),an=e,Re=!0,$n=null,t!==null&&(Cn[En++]=cr,Cn[En++]=hr,Cn[En++]=Gi,cr=t.id,hr=t.overflow,Gi=e),e=ay(e,r.children),e.flags|=4096,e)}function V_(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),im(t.return,e,n)}function Bf(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function WS(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Pt(t,e,r.children,n),r=De.current,(r&2)!==0)r=r&1|2,e.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&V_(t,n,e);else if(t.tag===19)V_(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Ee(De,r),(e.mode&1)===0)e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Zc(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Bf(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Zc(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Bf(e,!0,n,null,s);break;case"together":Bf(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function yc(t,e){(e.mode&1)===0&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Tr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Yi|=e.lanes,(n&e.childLanes)===0)return null;if(t!==null&&e.child!==t.child)throw Error(b(153));if(e.child!==null){for(t=e.child,n=ei(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=ei(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function CP(t,e,n){switch(e.tag){case 3:BS(e),fo();break;case 5:yS(e);break;case 1:Yt(e.type)&&Kc(e);break;case 4:Zg(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;Ee(Yc,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Ee(De,De.current&1),e.flags|=128,null):(n&e.child.childLanes)!==0?jS(t,e,n):(Ee(De,De.current&1),t=Tr(t,e,n),t!==null?t.sibling:null);Ee(De,De.current&1);break;case 19:if(r=(n&e.childLanes)!==0,(t.flags&128)!==0){if(r)return WS(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Ee(De,De.current),r)break;return null;case 22:case 23:return e.lanes=0,zS(t,e,n)}return Tr(t,e,n)}var HS,dm,qS,KS;HS=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};dm=function(){};qS=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Pi(Xn.current);var s=null;switch(n){case"input":i=Dp(t,i),r=Dp(t,r),s=[];break;case"select":i=Me({},i,{value:void 0}),r=Me({},r,{value:void 0}),s=[];break;case"textarea":i=Lp(t,i),r=Lp(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Hc)}Up(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Qa.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Qa.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&Te("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};KS=function(t,e,n,r){n!==r&&(e.flags|=4)};function ca(t,e){if(!Re)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Tt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function EP(t,e,n){var r=e.pendingProps;switch(qg(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Tt(e),null;case 1:return Yt(e.type)&&qc(),Tt(e),null;case 3:return r=e.stateNode,mo(),ke(Qt),ke(At),ty(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Vu(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,$n!==null&&(wm($n),$n=null))),dm(t,e),Tt(e),null;case 5:ey(e);var i=Pi(al.current);if(n=e.type,t!==null&&e.stateNode!=null)qS(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(b(166));return Tt(e),null}if(t=Pi(Xn.current),Vu(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Qn]=e,r[sl]=s,t=(e.mode&1)!==0,n){case"dialog":Te("cancel",r),Te("close",r);break;case"iframe":case"object":case"embed":Te("load",r);break;case"video":case"audio":for(i=0;i<Sa.length;i++)Te(Sa[i],r);break;case"source":Te("error",r);break;case"img":case"image":case"link":Te("error",r),Te("load",r);break;case"details":Te("toggle",r);break;case"input":Y0(r,s),Te("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Te("invalid",r);break;case"textarea":J0(r,s),Te("invalid",r)}Up(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&zu(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&zu(r.textContent,a,t),i=["children",""+a]):Qa.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Te("scroll",r)}switch(n){case"input":Pu(r),X0(r,s,!0);break;case"textarea":Pu(r),Z0(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Hc)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=wE(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Qn]=e,t[sl]=r,HS(t,e,!1,!1),e.stateNode=t;e:{switch(o=zp(n,r),n){case"dialog":Te("cancel",t),Te("close",t),i=r;break;case"iframe":case"object":case"embed":Te("load",t),i=r;break;case"video":case"audio":for(i=0;i<Sa.length;i++)Te(Sa[i],t);i=r;break;case"source":Te("error",t),i=r;break;case"img":case"image":case"link":Te("error",t),Te("load",t),i=r;break;case"details":Te("toggle",t),i=r;break;case"input":Y0(t,r),i=Dp(t,r),Te("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Me({},r,{value:void 0}),Te("invalid",t);break;case"textarea":J0(t,r),i=Lp(t,r),Te("invalid",t);break;default:i=r}Up(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?SE(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&CE(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Ya(t,l):typeof l=="number"&&Ya(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Qa.hasOwnProperty(s)?l!=null&&s==="onScroll"&&Te("scroll",t):l!=null&&Ag(t,s,l,o))}switch(n){case"input":Pu(t),X0(t,r,!1);break;case"textarea":Pu(t),Z0(t);break;case"option":r.value!=null&&t.setAttribute("value",""+ii(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Gs(t,!!r.multiple,s,!1):r.defaultValue!=null&&Gs(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Hc)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Tt(e),null;case 6:if(t&&e.stateNode!=null)KS(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(b(166));if(n=Pi(al.current),Pi(Xn.current),Vu(e)){if(r=e.stateNode,n=e.memoizedProps,r[Qn]=e,(s=r.nodeValue!==n)&&(t=an,t!==null))switch(t.tag){case 3:zu(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&zu(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Qn]=e,e.stateNode=r}return Tt(e),null;case 13:if(ke(De),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Re&&on!==null&&(e.mode&1)!==0&&(e.flags&128)===0)cS(),fo(),e.flags|=98560,s=!1;else if(s=Vu(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(b(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(b(317));s[Qn]=e}else fo(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;Tt(e),s=!1}else $n!==null&&(wm($n),$n=null),s=!0;if(!s)return e.flags&65536?e:null}return(e.flags&128)!==0?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,(e.mode&1)!==0&&(t===null||(De.current&1)!==0?Xe===0&&(Xe=3):fy())),e.updateQueue!==null&&(e.flags|=4),Tt(e),null);case 4:return mo(),dm(t,e),t===null&&rl(e.stateNode.containerInfo),Tt(e),null;case 10:return Yg(e.type._context),Tt(e),null;case 17:return Yt(e.type)&&qc(),Tt(e),null;case 19:if(ke(De),s=e.memoizedState,s===null)return Tt(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)ca(s,!1);else{if(Xe!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(o=Zc(t),o!==null){for(e.flags|=128,ca(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Ee(De,De.current&1|2),e.child}t=t.sibling}s.tail!==null&&Ve()>yo&&(e.flags|=128,r=!0,ca(s,!1),e.lanes=4194304)}else{if(!r)if(t=Zc(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ca(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Re)return Tt(e),null}else 2*Ve()-s.renderingStartTime>yo&&n!==1073741824&&(e.flags|=128,r=!0,ca(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ve(),e.sibling=null,n=De.current,Ee(De,r?n&1|2:n&1),e):(Tt(e),null);case 22:case 23:return dy(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&(e.mode&1)!==0?(sn&1073741824)!==0&&(Tt(e),e.subtreeFlags&6&&(e.flags|=8192)):Tt(e),null;case 24:return null;case 25:return null}throw Error(b(156,e.tag))}function SP(t,e){switch(qg(e),e.tag){case 1:return Yt(e.type)&&qc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return mo(),ke(Qt),ke(At),ty(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 5:return ey(e),null;case 13:if(ke(De),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(b(340));fo()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ke(De),null;case 4:return mo(),null;case 10:return Yg(e.type._context),null;case 22:case 23:return dy(),null;case 24:return null;default:return null}}var Wu=!1,kt=!1,TP=typeof WeakSet=="function"?WeakSet:Set,O=null;function Bs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Le(t,e,r)}else n.current=null}function fm(t,e,n){try{n()}catch(r){Le(t,e,r)}}var B_=!1;function IP(t,e){if(Yp=Bc,t=XE(),Wg(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,h=t,d=null;t:for(;;){for(var f;h!==n||i!==0&&h.nodeType!==3||(a=o+i),h!==s||r!==0&&h.nodeType!==3||(l=o+r),h.nodeType===3&&(o+=h.nodeValue.length),(f=h.firstChild)!==null;)d=h,h=f;for(;;){if(h===t)break t;if(d===n&&++u===i&&(a=o),d===s&&++c===r&&(l=o),(f=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=f}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Xp={focusedElem:t,selectionRange:n},Bc=!1,O=e;O!==null;)if(e=O,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,O=t;else for(;O!==null;){e=O;try{var p=e.alternate;if((e.flags&1024)!==0)switch(e.tag){case 0:case 11:case 15:break;case 1:if(p!==null){var y=p.memoizedProps,w=p.memoizedState,g=e.stateNode,m=g.getSnapshotBeforeUpdate(e.elementType===e.type?y:On(e.type,y),w);g.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(b(163))}}catch(_){Le(e,e.return,_)}if(t=e.sibling,t!==null){t.return=e.return,O=t;break}O=e.return}return p=B_,B_=!1,p}function $a(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&fm(e,n,s)}i=i.next}while(i!==r)}}function id(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function pm(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function GS(t){var e=t.alternate;e!==null&&(t.alternate=null,GS(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Qn],delete e[sl],delete e[em],delete e[aP],delete e[lP])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function QS(t){return t.tag===5||t.tag===3||t.tag===4}function j_(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||QS(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function mm(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Hc));else if(r!==4&&(t=t.child,t!==null))for(mm(t,e,n),t=t.sibling;t!==null;)mm(t,e,n),t=t.sibling}function gm(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(gm(t,e,n),t=t.sibling;t!==null;)gm(t,e,n),t=t.sibling}var pt=null,Dn=!1;function $r(t,e,n){for(n=n.child;n!==null;)YS(t,e,n),n=n.sibling}function YS(t,e,n){if(Yn&&typeof Yn.onCommitFiberUnmount=="function")try{Yn.onCommitFiberUnmount(Yh,n)}catch{}switch(n.tag){case 5:kt||Bs(n,e);case 6:var r=pt,i=Dn;pt=null,$r(t,e,n),pt=r,Dn=i,pt!==null&&(Dn?(t=pt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):pt.removeChild(n.stateNode));break;case 18:pt!==null&&(Dn?(t=pt,n=n.stateNode,t.nodeType===8?$f(t.parentNode,n):t.nodeType===1&&$f(t,n),el(t)):$f(pt,n.stateNode));break;case 4:r=pt,i=Dn,pt=n.stateNode.containerInfo,Dn=!0,$r(t,e,n),pt=r,Dn=i;break;case 0:case 11:case 14:case 15:if(!kt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&((s&2)!==0||(s&4)!==0)&&fm(n,e,o),i=i.next}while(i!==r)}$r(t,e,n);break;case 1:if(!kt&&(Bs(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Le(n,e,a)}$r(t,e,n);break;case 21:$r(t,e,n);break;case 22:n.mode&1?(kt=(r=kt)||n.memoizedState!==null,$r(t,e,n),kt=r):$r(t,e,n);break;default:$r(t,e,n)}}function W_(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new TP),e.forEach(function(r){var i=DP.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Pn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:pt=a.stateNode,Dn=!1;break e;case 3:pt=a.stateNode.containerInfo,Dn=!0;break e;case 4:pt=a.stateNode.containerInfo,Dn=!0;break e}a=a.return}if(pt===null)throw Error(b(160));YS(s,o,i),pt=null,Dn=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){Le(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)XS(e,t),e=e.sibling}function XS(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Pn(e,t),Hn(t),r&4){try{$a(3,t,t.return),id(3,t)}catch(y){Le(t,t.return,y)}try{$a(5,t,t.return)}catch(y){Le(t,t.return,y)}}break;case 1:Pn(e,t),Hn(t),r&512&&n!==null&&Bs(n,n.return);break;case 5:if(Pn(e,t),Hn(t),r&512&&n!==null&&Bs(n,n.return),t.flags&32){var i=t.stateNode;try{Ya(i,"")}catch(y){Le(t,t.return,y)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&vE(i,s),zp(a,o);var u=zp(a,s);for(o=0;o<l.length;o+=2){var c=l[o],h=l[o+1];c==="style"?SE(i,h):c==="dangerouslySetInnerHTML"?CE(i,h):c==="children"?Ya(i,h):Ag(i,c,h,u)}switch(a){case"input":$p(i,s);break;case"textarea":_E(i,s);break;case"select":var d=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var f=s.value;f!=null?Gs(i,!!s.multiple,f,!1):d!==!!s.multiple&&(s.defaultValue!=null?Gs(i,!!s.multiple,s.defaultValue,!0):Gs(i,!!s.multiple,s.multiple?[]:"",!1))}i[sl]=s}catch(y){Le(t,t.return,y)}}break;case 6:if(Pn(e,t),Hn(t),r&4){if(t.stateNode===null)throw Error(b(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(y){Le(t,t.return,y)}}break;case 3:if(Pn(e,t),Hn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{el(e.containerInfo)}catch(y){Le(t,t.return,y)}break;case 4:Pn(e,t),Hn(t);break;case 13:Pn(e,t),Hn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(cy=Ve())),r&4&&W_(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(kt=(u=kt)||c,Pn(e,t),kt=u):Pn(e,t),Hn(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&(t.mode&1)!==0)for(O=t,c=t.child;c!==null;){for(h=O=c;O!==null;){switch(d=O,f=d.child,d.tag){case 0:case 11:case 14:case 15:$a(4,d,d.return);break;case 1:Bs(d,d.return);var p=d.stateNode;if(typeof p.componentWillUnmount=="function"){r=d,n=d.return;try{e=r,p.props=e.memoizedProps,p.state=e.memoizedState,p.componentWillUnmount()}catch(y){Le(r,n,y)}}break;case 5:Bs(d,d.return);break;case 22:if(d.memoizedState!==null){q_(h);continue}}f!==null?(f.return=d,O=f):q_(h)}c=c.sibling}e:for(c=null,h=t;;){if(h.tag===5){if(c===null){c=h;try{i=h.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=EE("display",o))}catch(y){Le(t,t.return,y)}}}else if(h.tag===6){if(c===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(y){Le(t,t.return,y)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;c===h&&(c=null),h=h.return}c===h&&(c=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Pn(e,t),Hn(t),r&4&&W_(t);break;case 21:break;default:Pn(e,t),Hn(t)}}function Hn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(QS(n)){var r=n;break e}n=n.return}throw Error(b(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Ya(i,""),r.flags&=-33);var s=j_(t);gm(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=j_(t);mm(t,a,o);break;default:throw Error(b(161))}}catch(l){Le(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function kP(t,e,n){O=t,JS(t)}function JS(t,e,n){for(var r=(t.mode&1)!==0;O!==null;){var i=O,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Wu;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||kt;a=Wu;var u=kt;if(Wu=o,(kt=l)&&!u)for(O=i;O!==null;)o=O,l=o.child,o.tag===22&&o.memoizedState!==null?K_(i):l!==null?(l.return=o,O=l):K_(i);for(;s!==null;)O=s,JS(s),s=s.sibling;O=i,Wu=a,kt=u}H_(t)}else(i.subtreeFlags&8772)!==0&&s!==null?(s.return=i,O=s):H_(t)}}function H_(t){for(;O!==null;){var e=O;if((e.flags&8772)!==0){var n=e.alternate;try{if((e.flags&8772)!==0)switch(e.tag){case 0:case 11:case 15:kt||id(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!kt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:On(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&x_(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}x_(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var h=c.dehydrated;h!==null&&el(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(b(163))}kt||e.flags&512&&pm(e)}catch(d){Le(e,e.return,d)}}if(e===t){O=null;break}if(n=e.sibling,n!==null){n.return=e.return,O=n;break}O=e.return}}function q_(t){for(;O!==null;){var e=O;if(e===t){O=null;break}var n=e.sibling;if(n!==null){n.return=e.return,O=n;break}O=e.return}}function K_(t){for(;O!==null;){var e=O;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{id(4,e)}catch(l){Le(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){Le(e,i,l)}}var s=e.return;try{pm(e)}catch(l){Le(e,s,l)}break;case 5:var o=e.return;try{pm(e)}catch(l){Le(e,o,l)}}}catch(l){Le(e,e.return,l)}if(e===t){O=null;break}var a=e.sibling;if(a!==null){a.return=e.return,O=a;break}O=e.return}}var bP=Math.ceil,nh=Nr.ReactCurrentDispatcher,ly=Nr.ReactCurrentOwner,In=Nr.ReactCurrentBatchConfig,oe=0,lt=null,qe=null,yt=0,sn=0,js=fi(0),Xe=0,hl=null,Yi=0,sd=0,uy=0,Ma=null,jt=null,cy=0,yo=1/0,ar=null,rh=!1,ym=null,Jr=null,Hu=!1,qr=null,ih=0,La=0,vm=null,vc=-1,_c=0;function Mt(){return(oe&6)!==0?Ve():vc!==-1?vc:vc=Ve()}function Zr(t){return(t.mode&1)===0?1:(oe&2)!==0&&yt!==0?yt&-yt:cP.transition!==null?(_c===0&&(_c=$E()),_c):(t=fe,t!==0||(t=window.event,t=t===void 0?16:BE(t.type)),t)}function Vn(t,e,n,r){if(50<La)throw La=0,vm=null,Error(b(185));jl(t,n,r),((oe&2)===0||t!==lt)&&(t===lt&&((oe&2)===0&&(sd|=n),Xe===4&&Vr(t,yt)),Xt(t,r),n===1&&oe===0&&(e.mode&1)===0&&(yo=Ve()+500,td&&pi()))}function Xt(t,e){var n=t.callbackNode;cA(t,e);var r=Vc(t,t===lt?yt:0);if(r===0)n!==null&&n_(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&n_(n),e===1)t.tag===0?uP(G_.bind(null,t)):aS(G_.bind(null,t)),sP(function(){(oe&6)===0&&pi()}),n=null;else{switch(ME(r)){case 1:n=Mg;break;case 4:n=OE;break;case 16:n=zc;break;case 536870912:n=DE;break;default:n=zc}n=oT(n,ZS.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function ZS(t,e){if(vc=-1,_c=0,(oe&6)!==0)throw Error(b(327));var n=t.callbackNode;if(Zs()&&t.callbackNode!==n)return null;var r=Vc(t,t===lt?yt:0);if(r===0)return null;if((r&30)!==0||(r&t.expiredLanes)!==0||e)e=sh(t,r);else{e=r;var i=oe;oe|=2;var s=tT();(lt!==t||yt!==e)&&(ar=null,yo=Ve()+500,zi(t,e));do try{NP();break}catch(a){eT(t,a)}while(1);Qg(),nh.current=s,oe=i,qe!==null?e=0:(lt=null,yt=0,e=Xe)}if(e!==0){if(e===2&&(i=Hp(t),i!==0&&(r=i,e=_m(t,i))),e===1)throw n=hl,zi(t,0),Vr(t,r),Xt(t,Ve()),n;if(e===6)Vr(t,r);else{if(i=t.current.alternate,(r&30)===0&&!xP(i)&&(e=sh(t,r),e===2&&(s=Hp(t),s!==0&&(r=s,e=_m(t,s))),e===1))throw n=hl,zi(t,0),Vr(t,r),Xt(t,Ve()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(b(345));case 2:Ii(t,jt,ar);break;case 3:if(Vr(t,r),(r&130023424)===r&&(e=cy+500-Ve(),10<e)){if(Vc(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Mt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Zp(Ii.bind(null,t,jt,ar),e);break}Ii(t,jt,ar);break;case 4:if(Vr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-zn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Ve()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*bP(r/1960))-r,10<r){t.timeoutHandle=Zp(Ii.bind(null,t,jt,ar),r);break}Ii(t,jt,ar);break;case 5:Ii(t,jt,ar);break;default:throw Error(b(329))}}}return Xt(t,Ve()),t.callbackNode===n?ZS.bind(null,t):null}function _m(t,e){var n=Ma;return t.current.memoizedState.isDehydrated&&(zi(t,e).flags|=256),t=sh(t,e),t!==2&&(e=jt,jt=n,e!==null&&wm(e)),t}function wm(t){jt===null?jt=t:jt.push.apply(jt,t)}function xP(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!jn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Vr(t,e){for(e&=~uy,e&=~sd,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-zn(e),r=1<<n;t[n]=-1,e&=~r}}function G_(t){if((oe&6)!==0)throw Error(b(327));Zs();var e=Vc(t,0);if((e&1)===0)return Xt(t,Ve()),null;var n=sh(t,e);if(t.tag!==0&&n===2){var r=Hp(t);r!==0&&(e=r,n=_m(t,r))}if(n===1)throw n=hl,zi(t,0),Vr(t,e),Xt(t,Ve()),n;if(n===6)throw Error(b(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Ii(t,jt,ar),Xt(t,Ve()),null}function hy(t,e){var n=oe;oe|=1;try{return t(e)}finally{oe=n,oe===0&&(yo=Ve()+500,td&&pi())}}function Xi(t){qr!==null&&qr.tag===0&&(oe&6)===0&&Zs();var e=oe;oe|=1;var n=In.transition,r=fe;try{if(In.transition=null,fe=1,t)return t()}finally{fe=r,In.transition=n,oe=e,(oe&6)===0&&pi()}}function dy(){sn=js.current,ke(js)}function zi(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,iP(n)),qe!==null)for(n=qe.return;n!==null;){var r=n;switch(qg(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&qc();break;case 3:mo(),ke(Qt),ke(At),ty();break;case 5:ey(r);break;case 4:mo();break;case 13:ke(De);break;case 19:ke(De);break;case 10:Yg(r.type._context);break;case 22:case 23:dy()}n=n.return}if(lt=t,qe=t=ei(t.current,null),yt=sn=e,Xe=0,hl=null,uy=sd=Yi=0,jt=Ma=null,Ai!==null){for(e=0;e<Ai.length;e++)if(n=Ai[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Ai=null}return t}function eT(t,e){do{var n=qe;try{if(Qg(),mc.current=th,eh){for(var r=$e.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}eh=!1}if(Qi=0,st=Qe=$e=null,Da=!1,ll=0,ly.current=null,n===null||n.return===null){Xe=1,hl=e,qe=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=yt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,h=c.tag;if((c.mode&1)===0&&(h===0||h===11||h===15)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var f=$_(o);if(f!==null){f.flags&=-257,M_(f,o,a,s,e),f.mode&1&&D_(s,u,e),e=f,l=u;var p=e.updateQueue;if(p===null){var y=new Set;y.add(l),e.updateQueue=y}else p.add(l);break e}else{if((e&1)===0){D_(s,u,e),fy();break e}l=Error(b(426))}}else if(Re&&a.mode&1){var w=$_(o);if(w!==null){(w.flags&65536)===0&&(w.flags|=256),M_(w,o,a,s,e),Kg(go(l,a));break e}}s=l=go(l,a),Xe!==4&&(Xe=2),Ma===null?Ma=[s]:Ma.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var g=LS(s,l,e);b_(s,g);break e;case 1:a=l;var m=s.type,v=s.stateNode;if((s.flags&128)===0&&(typeof m.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(Jr===null||!Jr.has(v)))){s.flags|=65536,e&=-e,s.lanes|=e;var _=FS(s,a,e);b_(s,_);break e}}s=s.return}while(s!==null)}rT(n)}catch(C){e=C,qe===n&&n!==null&&(qe=n=n.return);continue}break}while(1)}function tT(){var t=nh.current;return nh.current=th,t===null?th:t}function fy(){(Xe===0||Xe===3||Xe===2)&&(Xe=4),lt===null||(Yi&268435455)===0&&(sd&268435455)===0||Vr(lt,yt)}function sh(t,e){var n=oe;oe|=2;var r=tT();(lt!==t||yt!==e)&&(ar=null,zi(t,e));do try{RP();break}catch(i){eT(t,i)}while(1);if(Qg(),oe=n,nh.current=r,qe!==null)throw Error(b(261));return lt=null,yt=0,Xe}function RP(){for(;qe!==null;)nT(qe)}function NP(){for(;qe!==null&&!tA();)nT(qe)}function nT(t){var e=sT(t.alternate,t,sn);t.memoizedProps=t.pendingProps,e===null?rT(t):qe=e,ly.current=null}function rT(t){var e=t;do{var n=e.alternate;if(t=e.return,(e.flags&32768)===0){if(n=EP(n,e,sn),n!==null){qe=n;return}}else{if(n=SP(n,e),n!==null){n.flags&=32767,qe=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Xe=6,qe=null;return}}if(e=e.sibling,e!==null){qe=e;return}qe=e=t}while(e!==null);Xe===0&&(Xe=5)}function Ii(t,e,n){var r=fe,i=In.transition;try{In.transition=null,fe=1,AP(t,e,n,r)}finally{In.transition=i,fe=r}return null}function AP(t,e,n,r){do Zs();while(qr!==null);if((oe&6)!==0)throw Error(b(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(b(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(hA(t,s),t===lt&&(qe=lt=null,yt=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||Hu||(Hu=!0,oT(zc,function(){return Zs(),null})),s=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||s){s=In.transition,In.transition=null;var o=fe;fe=1;var a=oe;oe|=4,ly.current=null,IP(t,n),XS(n,t),XA(Xp),Bc=!!Yp,Xp=Yp=null,t.current=n,kP(n),nA(),oe=a,fe=o,In.transition=s}else t.current=n;if(Hu&&(Hu=!1,qr=t,ih=i),s=t.pendingLanes,s===0&&(Jr=null),sA(n.stateNode),Xt(t,Ve()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(rh)throw rh=!1,t=ym,ym=null,t;return(ih&1)!==0&&t.tag!==0&&Zs(),s=t.pendingLanes,(s&1)!==0?t===vm?La++:(La=0,vm=t):La=0,pi(),null}function Zs(){if(qr!==null){var t=ME(ih),e=In.transition,n=fe;try{if(In.transition=null,fe=16>t?16:t,qr===null)var r=!1;else{if(t=qr,qr=null,ih=0,(oe&6)!==0)throw Error(b(331));var i=oe;for(oe|=4,O=t.current;O!==null;){var s=O,o=s.child;if((O.flags&16)!==0){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(O=u;O!==null;){var c=O;switch(c.tag){case 0:case 11:case 15:$a(8,c,s)}var h=c.child;if(h!==null)h.return=c,O=h;else for(;O!==null;){c=O;var d=c.sibling,f=c.return;if(GS(c),c===u){O=null;break}if(d!==null){d.return=f,O=d;break}O=f}}}var p=s.alternate;if(p!==null){var y=p.child;if(y!==null){p.child=null;do{var w=y.sibling;y.sibling=null,y=w}while(y!==null)}}O=s}}if((s.subtreeFlags&2064)!==0&&o!==null)o.return=s,O=o;else e:for(;O!==null;){if(s=O,(s.flags&2048)!==0)switch(s.tag){case 0:case 11:case 15:$a(9,s,s.return)}var g=s.sibling;if(g!==null){g.return=s.return,O=g;break e}O=s.return}}var m=t.current;for(O=m;O!==null;){o=O;var v=o.child;if((o.subtreeFlags&2064)!==0&&v!==null)v.return=o,O=v;else e:for(o=m;O!==null;){if(a=O,(a.flags&2048)!==0)try{switch(a.tag){case 0:case 11:case 15:id(9,a)}}catch(C){Le(a,a.return,C)}if(a===o){O=null;break e}var _=a.sibling;if(_!==null){_.return=a.return,O=_;break e}O=a.return}}if(oe=i,pi(),Yn&&typeof Yn.onPostCommitFiberRoot=="function")try{Yn.onPostCommitFiberRoot(Yh,t)}catch{}r=!0}return r}finally{fe=n,In.transition=e}}return!1}function Q_(t,e,n){e=go(n,e),e=LS(t,e,1),t=Xr(t,e,1),e=Mt(),t!==null&&(jl(t,1,e),Xt(t,e))}function Le(t,e,n){if(t.tag===3)Q_(t,t,n);else for(;e!==null;){if(e.tag===3){Q_(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Jr===null||!Jr.has(r))){t=go(n,t),t=FS(e,t,1),e=Xr(e,t,1),t=Mt(),e!==null&&(jl(e,1,t),Xt(e,t));break}}e=e.return}}function PP(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Mt(),t.pingedLanes|=t.suspendedLanes&n,lt===t&&(yt&n)===n&&(Xe===4||Xe===3&&(yt&130023424)===yt&&500>Ve()-cy?zi(t,0):uy|=n),Xt(t,e)}function iT(t,e){e===0&&((t.mode&1)===0?e=1:(e=$u,$u<<=1,($u&130023424)===0&&($u=4194304)));var n=Mt();t=Sr(t,e),t!==null&&(jl(t,e,n),Xt(t,n))}function OP(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),iT(t,n)}function DP(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(b(314))}r!==null&&r.delete(e),iT(t,n)}var sT;sT=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Qt.current)Ht=!0;else{if((t.lanes&n)===0&&(e.flags&128)===0)return Ht=!1,CP(t,e,n);Ht=(t.flags&131072)!==0}else Ht=!1,Re&&(e.flags&1048576)!==0&&lS(e,Qc,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;yc(t,e),t=e.pendingProps;var i=ho(e,At.current);Js(e,n),i=ry(null,e,r,t,i,n);var s=iy();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Yt(r)?(s=!0,Kc(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Jg(e),i.updater=nd,e.stateNode=i,i._reactInternals=e,om(e,r,t,n),e=um(null,e,r,!0,s,n)):(e.tag=0,Re&&s&&Hg(e),Pt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(yc(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=MP(r),t=On(r,t),i){case 0:e=lm(null,e,r,t,n);break e;case 1:e=U_(null,e,r,t,n);break e;case 11:e=L_(null,e,r,t,n);break e;case 14:e=F_(null,e,r,On(r.type,t),n);break e}throw Error(b(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:On(r,i),lm(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:On(r,i),U_(t,e,r,i,n);case 3:e:{if(BS(e),t===null)throw Error(b(387));r=e.pendingProps,s=e.memoizedState,i=s.element,dS(t,e),Jc(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=go(Error(b(423)),e),e=z_(t,e,r,n,i);break e}else if(r!==i){i=go(Error(b(424)),e),e=z_(t,e,r,n,i);break e}else for(on=Yr(e.stateNode.containerInfo.firstChild),an=e,Re=!0,$n=null,n=gS(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(fo(),r===i){e=Tr(t,e,n);break e}Pt(t,e,r,n)}e=e.child}return e;case 5:return yS(e),t===null&&rm(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Jp(r,i)?o=null:s!==null&&Jp(r,s)&&(e.flags|=32),VS(t,e),Pt(t,e,o,n),e.child;case 6:return t===null&&rm(e),null;case 13:return jS(t,e,n);case 4:return Zg(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=po(e,null,r,n):Pt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:On(r,i),L_(t,e,r,i,n);case 7:return Pt(t,e,e.pendingProps,n),e.child;case 8:return Pt(t,e,e.pendingProps.children,n),e.child;case 12:return Pt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,Ee(Yc,r._currentValue),r._currentValue=o,s!==null)if(jn(s.value,o)){if(s.children===i.children&&!Qt.current){e=Tr(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=gr(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),im(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(b(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),im(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Pt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Js(e,n),i=bn(i),r=r(i),e.flags|=1,Pt(t,e,r,n),e.child;case 14:return r=e.type,i=On(r,e.pendingProps),i=On(r.type,i),F_(t,e,r,i,n);case 15:return US(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:On(r,i),yc(t,e),e.tag=1,Yt(r)?(t=!0,Kc(e)):t=!1,Js(e,n),pS(e,r,i),om(e,r,i,n),um(null,e,r,!0,t,n);case 19:return WS(t,e,n);case 22:return zS(t,e,n)}throw Error(b(156,e.tag))};function oT(t,e){return PE(t,e)}function $P(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Tn(t,e,n,r){return new $P(t,e,n,r)}function py(t){return t=t.prototype,!(!t||!t.isReactComponent)}function MP(t){if(typeof t=="function")return py(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Og)return 11;if(t===Dg)return 14}return 2}function ei(t,e){var n=t.alternate;return n===null?(n=Tn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function wc(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")py(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Os:return Vi(n.children,i,s,e);case Pg:o=8,i|=8;break;case Np:return t=Tn(12,n,e,i|2),t.elementType=Np,t.lanes=s,t;case Ap:return t=Tn(13,n,e,i),t.elementType=Ap,t.lanes=s,t;case Pp:return t=Tn(19,n,e,i),t.elementType=Pp,t.lanes=s,t;case mE:return od(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case fE:o=10;break e;case pE:o=9;break e;case Og:o=11;break e;case Dg:o=14;break e;case Fr:o=16,r=null;break e}throw Error(b(130,t==null?t:typeof t,""))}return e=Tn(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Vi(t,e,n,r){return t=Tn(7,t,r,e),t.lanes=n,t}function od(t,e,n,r){return t=Tn(22,t,r,e),t.elementType=mE,t.lanes=n,t.stateNode={isHidden:!1},t}function jf(t,e,n){return t=Tn(6,t,null,e),t.lanes=n,t}function Wf(t,e,n){return e=Tn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function LP(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Tf(0),this.expirationTimes=Tf(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Tf(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function my(t,e,n,r,i,s,o,a,l){return t=new LP(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Tn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Jg(s),t}function FP(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ps,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function aT(t){if(!t)return si;t=t._reactInternals;e:{if(ms(t)!==t||t.tag!==1)throw Error(b(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Yt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(b(171))}if(t.tag===1){var n=t.type;if(Yt(n))return oS(t,n,e)}return e}function lT(t,e,n,r,i,s,o,a,l){return t=my(n,r,!0,t,i,s,o,a,l),t.context=aT(null),n=t.current,r=Mt(),i=Zr(n),s=gr(r,i),s.callback=e!=null?e:null,Xr(n,s,i),t.current.lanes=i,jl(t,i,r),Xt(t,r),t}function ad(t,e,n,r){var i=e.current,s=Mt(),o=Zr(i);return n=aT(n),e.context===null?e.context=n:e.pendingContext=n,e=gr(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Xr(i,e,o),t!==null&&(Vn(t,i,o,s),pc(t,i,o)),o}function oh(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Y_(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function gy(t,e){Y_(t,e),(t=t.alternate)&&Y_(t,e)}function UP(){return null}var uT=typeof reportError=="function"?reportError:function(t){console.error(t)};function yy(t){this._internalRoot=t}ld.prototype.render=yy.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(b(409));ad(t,e,null,null)};ld.prototype.unmount=yy.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Xi(function(){ad(null,t,null,null)}),e[Er]=null}};function ld(t){this._internalRoot=t}ld.prototype.unstable_scheduleHydration=function(t){if(t){var e=UE();t={blockedOn:null,target:t,priority:e};for(var n=0;n<zr.length&&e!==0&&e<zr[n].priority;n++);zr.splice(n,0,t),n===0&&VE(t)}};function vy(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function ud(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function X_(){}function zP(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=oh(o);s.call(u)}}var o=lT(e,r,t,0,null,!1,!1,"",X_);return t._reactRootContainer=o,t[Er]=o.current,rl(t.nodeType===8?t.parentNode:t),Xi(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=oh(l);a.call(u)}}var l=my(t,0,!1,null,null,!1,!1,"",X_);return t._reactRootContainer=l,t[Er]=l.current,rl(t.nodeType===8?t.parentNode:t),Xi(function(){ad(e,l,n,r)}),l}function cd(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=oh(o);a.call(l)}}ad(e,o,t,i)}else o=zP(n,e,t,i,r);return oh(o)}LE=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ea(e.pendingLanes);n!==0&&(Lg(e,n|1),Xt(e,Ve()),(oe&6)===0&&(yo=Ve()+500,pi()))}break;case 13:Xi(function(){var r=Sr(t,1);if(r!==null){var i=Mt();Vn(r,t,1,i)}}),gy(t,1)}};Fg=function(t){if(t.tag===13){var e=Sr(t,134217728);if(e!==null){var n=Mt();Vn(e,t,134217728,n)}gy(t,134217728)}};FE=function(t){if(t.tag===13){var e=Zr(t),n=Sr(t,e);if(n!==null){var r=Mt();Vn(n,t,e,r)}gy(t,e)}};UE=function(){return fe};zE=function(t,e){var n=fe;try{return fe=t,e()}finally{fe=n}};Bp=function(t,e,n){switch(e){case"input":if($p(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=ed(r);if(!i)throw Error(b(90));yE(r),$p(r,i)}}}break;case"textarea":_E(t,n);break;case"select":e=n.value,e!=null&&Gs(t,!!n.multiple,e,!1)}};kE=hy;bE=Xi;var VP={usingClientEntryPoint:!1,Events:[Hl,Ls,ed,TE,IE,hy]},ha={findFiberByHostInstance:Ni,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},BP={bundleType:ha.bundleType,version:ha.version,rendererPackageName:ha.rendererPackageName,rendererConfig:ha.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Nr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=NE(t),t===null?null:t.stateNode},findFiberByHostInstance:ha.findFiberByHostInstance||UP,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var qu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!qu.isDisabled&&qu.supportsFiber)try{Yh=qu.inject(BP),Yn=qu}catch{}}pn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=VP;pn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!vy(e))throw Error(b(200));return FP(t,e,null,n)};pn.createRoot=function(t,e){if(!vy(t))throw Error(b(299));var n=!1,r="",i=uT;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=my(t,1,!1,null,null,n,!1,r,i),t[Er]=e.current,rl(t.nodeType===8?t.parentNode:t),new yy(e)};pn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(b(188)):(t=Object.keys(t).join(","),Error(b(268,t)));return t=NE(e),t=t===null?null:t.stateNode,t};pn.flushSync=function(t){return Xi(t)};pn.hydrate=function(t,e,n){if(!ud(e))throw Error(b(200));return cd(null,t,e,!0,n)};pn.hydrateRoot=function(t,e,n){if(!vy(t))throw Error(b(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=uT;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=lT(e,null,t,1,n!=null?n:null,i,!1,s,o),t[Er]=e.current,rl(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new ld(e)};pn.render=function(t,e,n){if(!ud(e))throw Error(b(200));return cd(null,t,e,!1,n)};pn.unmountComponentAtNode=function(t){if(!ud(t))throw Error(b(40));return t._reactRootContainer?(Xi(function(){cd(null,null,t,!1,function(){t._reactRootContainer=null,t[Er]=null})}),!0):!1};pn.unstable_batchedUpdates=hy;pn.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!ud(n))throw Error(b(200));if(t==null||t._reactInternals===void 0)throw Error(b(38));return cd(t,e,n,!1,r)};pn.version="18.2.0-next-9e3b772b8-20220608";(function(t){function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(n){console.error(n)}}e(),t.exports=pn})(xg);var J_=xg.exports;xp.createRoot=J_.createRoot,xp.hydrateRoot=J_.hydrateRoot;/**
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
 */const cT={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const A=function(t,e){if(!t)throw Fo(e)},Fo=function(t){return new Error("Firebase Database ("+cT.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const hT=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},jP=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},_y={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=s>>2,h=(s&3)<<4|a>>4;let d=(a&15)<<2|u>>6,f=u&63;l||(f=64,o||(d=64)),r.push(n[c],n[h],n[d],n[f])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(hT(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):jP(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||h==null)throw Error();const d=s<<2|a>>4;if(r.push(d),u!==64){const f=a<<4&240|u>>2;if(r.push(f),h!==64){const p=u<<6&192|h;r.push(p)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},dT=function(t){const e=hT(t);return _y.encodeByteArray(e,!0)},fT=function(t){return dT(t).replace(/\./g,"")},Cm=function(t){try{return _y.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function WP(t){return pT(void 0,t)}function pT(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!HP(n)||(t[n]=pT(t[n],e[n]));return t}function HP(t){return t!=="__proto__"}/**
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
 */class wy{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function ut(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function hd(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ut())}function mT(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Cy(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function qP(){return ut().indexOf("Electron/")>=0}function gT(){const t=ut();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function KP(){return ut().indexOf("MSAppHost/")>=0}function yT(){return cT.NODE_ADMIN===!0}function vT(){return typeof indexedDB=="object"}function GP(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const QP="FirebaseError";class Nn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=QP,Object.setPrototypeOf(this,Nn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,gs.prototype.create)}}class gs{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?YP(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Nn(i,a,r)}}function YP(t,e){return t.replace(XP,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const XP=/\{\$([^}]+)}/g;/**
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
 */function dl(t){return JSON.parse(t)}function at(t){return JSON.stringify(t)}/**
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
 */const _T=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=dl(Cm(s[0])||""),n=dl(Cm(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},JP=function(t){const e=_T(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},ZP=function(t){const e=_T(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function Ar(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function vo(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Em(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ah(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function lh(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Z_(s)&&Z_(o)){if(!lh(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Z_(t){return t!==null&&typeof t=="object"}/**
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
 */function Uo(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}/**
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
 */class eO{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)r[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)r[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const d=r[h-3]^r[h-8]^r[h-14]^r[h-16];r[h]=(d<<1|d>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],u,c;for(let h=0;h<80;h++){h<40?h<20?(u=a^s&(o^a),c=1518500249):(u=s^o^a,c=1859775393):h<60?(u=s&o|a&(s|o),c=2400959708):(u=s^o^a,c=3395469782);const d=(i<<5|i>>>27)+u+l+c+r[h]&4294967295;l=a,a=o,o=(s<<30|s>>>2)&4294967295,s=i,i=d}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function tO(t,e){const n=new nO(t,e);return n.subscribe.bind(n)}class nO{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");rO(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Hf),i.error===void 0&&(i.error=Hf),i.complete===void 0&&(i.complete=Hf);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function rO(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Hf(){}function wT(t,e){return`${t} failed: ${e} argument `}/**
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
 */const iO=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,A(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},dd=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
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
 */const sO=1e3,oO=2,aO=4*60*60*1e3,lO=.5;function uO(t,e=sO,n=oO){const r=e*Math.pow(n,t),i=Math.round(lO*r*(Math.random()-.5)*2);return Math.min(aO,r+i)}/**
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
 */function ct(t){return t&&t._delegate?t._delegate:t}class hn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const ki="[DEFAULT]";/**
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
 */class cO{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new wy;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(dO(e))try{this.getOrInitializeService({instanceIdentifier:ki})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=ki){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ki){return this.instances.has(e)}getOptions(e=ki){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:hO(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=ki){return this.component?this.component.multipleInstances?e:ki:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function hO(t){return t===ki?void 0:t}function dO(t){return t.instantiationMode==="EAGER"}/**
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
 */class fO{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new cO(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var se;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(se||(se={}));const pO={debug:se.DEBUG,verbose:se.VERBOSE,info:se.INFO,warn:se.WARN,error:se.ERROR,silent:se.SILENT},mO=se.INFO,gO={[se.DEBUG]:"log",[se.VERBOSE]:"log",[se.INFO]:"info",[se.WARN]:"warn",[se.ERROR]:"error"},yO=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=gO[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Kl{constructor(e){this.name=e,this._logLevel=mO,this._logHandler=yO,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in se))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?pO[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,se.DEBUG,...e),this._logHandler(this,se.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,se.VERBOSE,...e),this._logHandler(this,se.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,se.INFO,...e),this._logHandler(this,se.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,se.WARN,...e),this._logHandler(this,se.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,se.ERROR,...e),this._logHandler(this,se.ERROR,...e)}}const vO=(t,e)=>e.some(n=>t instanceof n);let ew,tw;function _O(){return ew||(ew=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function wO(){return tw||(tw=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const CT=new WeakMap,Sm=new WeakMap,ET=new WeakMap,qf=new WeakMap,Ey=new WeakMap;function CO(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(ti(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&CT.set(n,t)}).catch(()=>{}),Ey.set(e,t),e}function EO(t){if(Sm.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Sm.set(t,e)}let Tm={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Sm.get(t);if(e==="objectStoreNames")return t.objectStoreNames||ET.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ti(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function SO(t){Tm=t(Tm)}function TO(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Kf(this),e,...n);return ET.set(r,e.sort?e.sort():[e]),ti(r)}:wO().includes(t)?function(...e){return t.apply(Kf(this),e),ti(CT.get(this))}:function(...e){return ti(t.apply(Kf(this),e))}}function IO(t){return typeof t=="function"?TO(t):(t instanceof IDBTransaction&&EO(t),vO(t,_O())?new Proxy(t,Tm):t)}function ti(t){if(t instanceof IDBRequest)return CO(t);if(qf.has(t))return qf.get(t);const e=IO(t);return e!==t&&(qf.set(t,e),Ey.set(e,t)),e}const Kf=t=>Ey.get(t);function ST(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=ti(o);return r&&o.addEventListener("upgradeneeded",l=>{r(ti(o.result),l.oldVersion,l.newVersion,ti(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const kO=["get","getKey","getAll","getAllKeys","count"],bO=["put","add","delete","clear"],Gf=new Map;function nw(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Gf.get(e))return Gf.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=bO.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||kO.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return Gf.set(e,s),s}SO(t=>({...t,get:(e,n,r)=>nw(e,n)||t.get(e,n,r),has:(e,n)=>!!nw(e,n)||t.has(e,n)}));/**
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
 */class xO{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(RO(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function RO(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Im="@firebase/app",rw="0.7.32";/**
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
 */const Ji=new Kl("@firebase/app"),NO="@firebase/app-compat",AO="@firebase/analytics-compat",PO="@firebase/analytics",OO="@firebase/app-check-compat",DO="@firebase/app-check",$O="@firebase/auth",MO="@firebase/auth-compat",LO="@firebase/database",FO="@firebase/database-compat",UO="@firebase/functions",zO="@firebase/functions-compat",VO="@firebase/installations",BO="@firebase/installations-compat",jO="@firebase/messaging",WO="@firebase/messaging-compat",HO="@firebase/performance",qO="@firebase/performance-compat",KO="@firebase/remote-config",GO="@firebase/remote-config-compat",QO="@firebase/storage",YO="@firebase/storage-compat",XO="@firebase/firestore",JO="@firebase/firestore-compat",ZO="firebase",eD="9.9.4";/**
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
 */const TT="[DEFAULT]",tD={[Im]:"fire-core",[NO]:"fire-core-compat",[PO]:"fire-analytics",[AO]:"fire-analytics-compat",[DO]:"fire-app-check",[OO]:"fire-app-check-compat",[$O]:"fire-auth",[MO]:"fire-auth-compat",[LO]:"fire-rtdb",[FO]:"fire-rtdb-compat",[UO]:"fire-fn",[zO]:"fire-fn-compat",[VO]:"fire-iid",[BO]:"fire-iid-compat",[jO]:"fire-fcm",[WO]:"fire-fcm-compat",[HO]:"fire-perf",[qO]:"fire-perf-compat",[KO]:"fire-rc",[GO]:"fire-rc-compat",[QO]:"fire-gcs",[YO]:"fire-gcs-compat",[XO]:"fire-fst",[JO]:"fire-fst-compat","fire-js":"fire-js",[ZO]:"fire-js-all"};/**
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
 */const fl=new Map,km=new Map;function nD(t,e){try{t.container.addComponent(e)}catch(n){Ji.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Rn(t){const e=t.name;if(km.has(e))return Ji.debug(`There were multiple attempts to register component ${e}.`),!1;km.set(e,t);for(const n of fl.values())nD(n,t);return!0}function zo(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const rD={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Zi=new gs("app","Firebase",rD);/**
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
 */class iD{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new hn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Zi.create("app-deleted",{appName:this._name})}}/**
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
 */const mi=eD;function sD(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:TT,automaticDataCollectionEnabled:!1},e),r=n.name;if(typeof r!="string"||!r)throw Zi.create("bad-app-name",{appName:String(r)});const i=fl.get(r);if(i){if(lh(t,i.options)&&lh(n,i.config))return i;throw Zi.create("duplicate-app",{appName:r})}const s=new fO(r);for(const a of km.values())s.addComponent(a);const o=new iD(t,n,s);return fl.set(r,o),o}function Sy(t=TT){const e=fl.get(t);if(!e)throw Zi.create("no-app",{appName:t});return e}function oD(){return Array.from(fl.values())}function Ke(t,e,n){var r;let i=(r=tD[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ji.warn(a.join(" "));return}Rn(new hn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const aD="firebase-heartbeat-database",lD=1,pl="firebase-heartbeat-store";let Qf=null;function IT(){return Qf||(Qf=ST(aD,lD,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(pl)}}}).catch(t=>{throw Zi.create("idb-open",{originalErrorMessage:t.message})})),Qf}async function uD(t){var e;try{return(await IT()).transaction(pl).objectStore(pl).get(kT(t))}catch(n){if(n instanceof Nn)Ji.warn(n.message);else{const r=Zi.create("idb-get",{originalErrorMessage:(e=n)===null||e===void 0?void 0:e.message});Ji.warn(r.message)}}}async function iw(t,e){var n;try{const i=(await IT()).transaction(pl,"readwrite");return await i.objectStore(pl).put(e,kT(t)),i.done}catch(r){if(r instanceof Nn)Ji.warn(r.message);else{const i=Zi.create("idb-set",{originalErrorMessage:(n=r)===null||n===void 0?void 0:n.message});Ji.warn(i.message)}}}function kT(t){return`${t.name}!${t.options.appId}`}/**
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
 */const cD=1024,hD=30*24*60*60*1e3;class dD{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new pD(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=sw();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=hD}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=sw(),{heartbeatsToSend:n,unsentEntries:r}=fD(this._heartbeatsCache.heartbeats),i=fT(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function sw(){return new Date().toISOString().substring(0,10)}function fD(t,e=cD){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),ow(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),ow(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class pD{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return vT()?GP().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await uD(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return iw(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return iw(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function ow(t){return fT(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function mD(t){Rn(new hn("platform-logger",e=>new xO(e),"PRIVATE")),Rn(new hn("heartbeat",e=>new dD(e),"PRIVATE")),Ke(Im,rw,t),Ke(Im,rw,"esm2017"),Ke("fire-js","")}mD("");function Ty(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function bT(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const gD=bT,xT=new gs("auth","Firebase",bT());/**
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
 */const aw=new Kl("@firebase/auth");function Cc(t,...e){aw.logLevel<=se.ERROR&&aw.error(`Auth (${mi}): ${t}`,...e)}/**
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
 */function rr(t,...e){throw Iy(t,...e)}function Jn(t,...e){return Iy(t,...e)}function RT(t,e,n){const r=Object.assign(Object.assign({},gD()),{[e]:n});return new gs("auth","Firebase",r).create(e,{appName:t.name})}function yD(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&rr(t,"argument-error"),RT(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Iy(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return xT.create(t,...e)}function q(t,e,...n){if(!t)throw Iy(e,...n)}function dr(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Cc(e),new Error(e)}function Ir(t,e){t||dr(e)}/**
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
 */const lw=new Map;function fr(t){Ir(t instanceof Function,"Expected a class definition");let e=lw.get(t);return e?(Ir(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,lw.set(t,e),e)}/**
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
 */function vD(t,e){const n=zo(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(lh(s,e!=null?e:{}))return i;rr(i,"already-initialized")}return n.initialize({options:e})}function _D(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(fr);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
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
 */function bm(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function wD(){return uw()==="http:"||uw()==="https:"}function uw(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function CD(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(wD()||mT()||"connection"in navigator)?navigator.onLine:!0}function ED(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Gl{constructor(e,n){this.shortDelay=e,this.longDelay=n,Ir(n>e,"Short delay should be less than long delay!"),this.isMobile=hd()||Cy()}get(){return CD()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function ky(t,e){Ir(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class NT{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;dr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;dr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;dr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const SD={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const TD=new Gl(3e4,6e4);function ID(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function fd(t,e,n,r,i={}){return AT(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Uo(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),NT.fetch()(PT(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function AT(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},SD),e);try{const i=new bD(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Ku(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ku(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Ku(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Ku(t,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw RT(t,c,u);rr(t,c)}}catch(i){if(i instanceof Nn)throw i;rr(t,"network-request-failed")}}async function kD(t,e,n,r,i={}){const s=await fd(t,e,n,r,i);return"mfaPendingCredential"in s&&rr(t,"multi-factor-auth-required",{_serverResponse:s}),s}function PT(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?ky(t.config,i):`${t.config.apiScheme}://${i}`}class bD{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Jn(this.auth,"network-request-failed")),TD.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ku(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Jn(t,e,r);return i.customData._tokenResponse=n,i}/**
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
 */async function xD(t,e){return fd(t,"POST","/v1/accounts:delete",e)}async function RD(t,e){return fd(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Fa(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function ND(t,e=!1){const n=ct(t),r=await n.getIdToken(e),i=by(r);q(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Fa(Yf(i.auth_time)),issuedAtTime:Fa(Yf(i.iat)),expirationTime:Fa(Yf(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Yf(t){return Number(t)*1e3}function by(t){var e;const[n,r,i]=t.split(".");if(n===void 0||r===void 0||i===void 0)return Cc("JWT malformed, contained fewer than 3 sections"),null;try{const s=Cm(r);return s?JSON.parse(s):(Cc("Failed to decode base64 JWT payload"),null)}catch(s){return Cc("Caught error parsing JWT payload as JSON",(e=s)===null||e===void 0?void 0:e.toString()),null}}function AD(t){const e=by(t);return q(e,"internal-error"),q(typeof e.exp<"u","internal-error"),q(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function ml(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Nn&&PD(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function PD({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class OD{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){var e;try{await this.user.getIdToken(!0)}catch(n){((e=n)===null||e===void 0?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class OT{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Fa(this.lastLoginAt),this.creationTime=Fa(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function uh(t){var e;const n=t.auth,r=await t.getIdToken(),i=await ml(t,RD(n,{idToken:r}));q(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?MD(s.providerUserInfo):[],a=$D(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new OT(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,h)}async function DD(t){const e=ct(t);await uh(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function $D(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function MD(t){return t.map(e=>{var{providerId:n}=e,r=Ty(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function LD(t,e){const n=await AT(t,{},async()=>{const r=Uo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=PT(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",NT.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class gl{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){q(e.idToken,"internal-error"),q(typeof e.idToken<"u","internal-error"),q(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):AD(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return q(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await LD(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new gl;return r&&(q(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(q(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(q(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new gl,this.toJSON())}_performRefresh(){return dr("not implemented")}}/**
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
 */function Mr(t,e){q(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Bi{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Ty(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new OD(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new OT(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await ml(this,this.stsTokenManager.getToken(this.auth,e));return q(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return ND(this,e)}reload(){return DD(this)}_assign(e){this!==e&&(q(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Bi(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){q(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await uh(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await ml(this,xD(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,c;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,f=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,p=(o=n.photoURL)!==null&&o!==void 0?o:void 0,y=(a=n.tenantId)!==null&&a!==void 0?a:void 0,w=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,g=(u=n.createdAt)!==null&&u!==void 0?u:void 0,m=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:v,emailVerified:_,isAnonymous:C,providerData:T,stsTokenManager:S}=n;q(v&&S,e,"internal-error");const x=gl.fromJSON(this.name,S);q(typeof v=="string",e,"internal-error"),Mr(h,e.name),Mr(d,e.name),q(typeof _=="boolean",e,"internal-error"),q(typeof C=="boolean",e,"internal-error"),Mr(f,e.name),Mr(p,e.name),Mr(y,e.name),Mr(w,e.name),Mr(g,e.name),Mr(m,e.name);const V=new Bi({uid:v,auth:e,email:d,emailVerified:_,displayName:h,isAnonymous:C,photoURL:p,phoneNumber:f,tenantId:y,stsTokenManager:x,createdAt:g,lastLoginAt:m});return T&&Array.isArray(T)&&(V.providerData=T.map(N=>Object.assign({},N))),w&&(V._redirectEventId=w),V}static async _fromIdTokenResponse(e,n,r=!1){const i=new gl;i.updateFromServerResponse(n);const s=new Bi({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await uh(s),s}}/**
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
 */class DT{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}DT.type="NONE";const cw=DT;/**
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
 */function Ec(t,e,n){return`firebase:${t}:${e}:${n}`}class eo{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Ec(this.userKey,i.apiKey,s),this.fullPersistenceKey=Ec("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Bi._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new eo(fr(cw),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||fr(cw);const o=Ec(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const h=Bi._fromJSON(e,c);u!==s&&(a=h),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new eo(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new eo(s,e,r))}}/**
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
 */function hw(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(LT(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if($T(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(UT(e))return"Blackberry";if(zT(e))return"Webos";if(xy(e))return"Safari";if((e.includes("chrome/")||MT(e))&&!e.includes("edge/"))return"Chrome";if(FT(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function $T(t=ut()){return/firefox\//i.test(t)}function xy(t=ut()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function MT(t=ut()){return/crios\//i.test(t)}function LT(t=ut()){return/iemobile/i.test(t)}function FT(t=ut()){return/android/i.test(t)}function UT(t=ut()){return/blackberry/i.test(t)}function zT(t=ut()){return/webos/i.test(t)}function pd(t=ut()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function FD(t=ut()){var e;return pd(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function UD(){return gT()&&document.documentMode===10}function VT(t=ut()){return pd(t)||FT(t)||zT(t)||UT(t)||/windows phone/i.test(t)||LT(t)}function zD(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function BT(t,e=[]){let n;switch(t){case"Browser":n=hw(ut());break;case"Worker":n=`${hw(ut())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${mi}/${r}`}/**
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
 */class VD{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){var n;if(this.auth.currentUser===e)return;const r=[];try{for(const i of this.queue)await i(e),i.onAbort&&r.push(i.onAbort)}catch(i){r.reverse();for(const s of r)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:(n=i)===null||n===void 0?void 0:n.message})}}}/**
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
 */class BD{constructor(e,n,r){this.app=e,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new dw(this),this.idTokenSubscription=new dw(this),this.beforeStateQueue=new VD(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=xT,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=fr(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await eo.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l==null?void 0:l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return q(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){var n;try{await uh(e)}catch(r){if(((n=r)===null||n===void 0?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=ED()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?ct(e):null;return n&&q(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&q(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(fr(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new gs("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&fr(e)||this._popupRedirectResolver;q(n,this,"argument-error"),this.redirectPersistenceManager=await eo.create(this,[fr(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return q(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return q(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=BT(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function Ry(t){return ct(t)}class dw{constructor(e){this.auth=e,this.observer=null,this.addObserver=tO(n=>this.observer=n)}get next(){return q(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */class jT{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return dr("not implemented")}_getIdTokenResponse(e){return dr("not implemented")}_linkToIdToken(e,n){return dr("not implemented")}_getReauthenticationResolver(e){return dr("not implemented")}}/**
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
 */async function to(t,e){return kD(t,"POST","/v1/accounts:signInWithIdp",ID(t,e))}/**
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
 */const jD="http://localhost";class es extends jT{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new es(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):rr("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Ty(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new es(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return to(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,to(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,to(e,n)}buildRequest(){const e={requestUri:jD,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Uo(n)}return e}}/**
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
 */class Ny{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ql extends Ny{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Br extends Ql{constructor(){super("facebook.com")}static credential(e){return es._fromParams({providerId:Br.PROVIDER_ID,signInMethod:Br.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Br.credentialFromTaggedObject(e)}static credentialFromError(e){return Br.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Br.credential(e.oauthAccessToken)}catch{return null}}}Br.FACEBOOK_SIGN_IN_METHOD="facebook.com";Br.PROVIDER_ID="facebook.com";/**
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
 */class ur extends Ql{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return es._fromParams({providerId:ur.PROVIDER_ID,signInMethod:ur.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return ur.credentialFromTaggedObject(e)}static credentialFromError(e){return ur.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return ur.credential(n,r)}catch{return null}}}ur.GOOGLE_SIGN_IN_METHOD="google.com";ur.PROVIDER_ID="google.com";/**
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
 */class jr extends Ql{constructor(){super("github.com")}static credential(e){return es._fromParams({providerId:jr.PROVIDER_ID,signInMethod:jr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return jr.credentialFromTaggedObject(e)}static credentialFromError(e){return jr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return jr.credential(e.oauthAccessToken)}catch{return null}}}jr.GITHUB_SIGN_IN_METHOD="github.com";jr.PROVIDER_ID="github.com";/**
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
 */class Wr extends Ql{constructor(){super("twitter.com")}static credential(e,n){return es._fromParams({providerId:Wr.PROVIDER_ID,signInMethod:Wr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Wr.credentialFromTaggedObject(e)}static credentialFromError(e){return Wr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Wr.credential(n,r)}catch{return null}}}Wr.TWITTER_SIGN_IN_METHOD="twitter.com";Wr.PROVIDER_ID="twitter.com";/**
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
 */class _o{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Bi._fromIdTokenResponse(e,r,i),o=fw(r);return new _o({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=fw(r);return new _o({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function fw(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class ch extends Nn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,ch.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new ch(e,n,r,i)}}function WT(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?ch._fromErrorAndOperation(t,s,e,r):s})}async function WD(t,e,n=!1){const r=await ml(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return _o._forOperation(t,"link",r)}/**
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
 */async function HD(t,e,n=!1){var r;const{auth:i}=t,s="reauthenticate";try{const o=await ml(t,WT(i,s,e,t),n);q(o.idToken,i,"internal-error");const a=by(o.idToken);q(a,i,"internal-error");const{sub:l}=a;return q(t.uid===l,i,"user-mismatch"),_o._forOperation(t,s,o)}catch(o){throw((r=o)===null||r===void 0?void 0:r.code)==="auth/user-not-found"&&rr(i,"user-mismatch"),o}}/**
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
 */async function qD(t,e,n=!1){const r="signIn",i=await WT(t,r,e),s=await _o._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}function KD(t,e,n,r){return ct(t).onIdTokenChanged(e,n,r)}function GD(t){ct(t).useDeviceLanguage()}function QD(t){return ct(t).signOut()}const hh="__sak";/**
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
 */class HT{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(hh,"1"),this.storage.removeItem(hh),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function YD(){const t=ut();return xy(t)||pd(t)}const XD=1e3,JD=10;class qT extends HT{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=YD()&&zD(),this.fallbackToPolling=VT(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);UD()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,JD):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},XD)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}qT.type="LOCAL";const ZD=qT;/**
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
 */class KT extends HT{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}KT.type="SESSION";const GT=KT;/**
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
 */function e$(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class md{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new md(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await e$(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}md.receivers=[];/**
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
 */function Ay(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class t${constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=Ay("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Zn(){return window}function n$(t){Zn().location.href=t}/**
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
 */function QT(){return typeof Zn().WorkerGlobalScope<"u"&&typeof Zn().importScripts=="function"}async function r$(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function i$(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function s$(){return QT()?self:null}/**
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
 */const YT="firebaseLocalStorageDb",o$=1,dh="firebaseLocalStorage",XT="fbase_key";class Yl{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function gd(t,e){return t.transaction([dh],e?"readwrite":"readonly").objectStore(dh)}function a$(){const t=indexedDB.deleteDatabase(YT);return new Yl(t).toPromise()}function xm(){const t=indexedDB.open(YT,o$);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(dh,{keyPath:XT})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(dh)?e(r):(r.close(),await a$(),e(await xm()))})})}async function pw(t,e,n){const r=gd(t,!0).put({[XT]:e,value:n});return new Yl(r).toPromise()}async function l$(t,e){const n=gd(t,!1).get(e),r=await new Yl(n).toPromise();return r===void 0?null:r.value}function mw(t,e){const n=gd(t,!0).delete(e);return new Yl(n).toPromise()}const u$=800,c$=3;class JT{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await xm(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>c$)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return QT()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=md._getInstance(s$()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await r$(),!this.activeServiceWorker)return;this.sender=new t$(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||i$()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await xm();return await pw(e,hh,"1"),await mw(e,hh),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>pw(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>l$(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>mw(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=gd(i,!1).getAll();return new Yl(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),u$)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}JT.type="LOCAL";const h$=JT;/**
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
 */function d$(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function f$(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Jn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",d$().appendChild(r)})}function p$(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new Gl(3e4,6e4);/**
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
 */function ZT(t,e){return e?fr(e):(q(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Py extends jT{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return to(e,this._buildIdpRequest())}_linkToIdToken(e,n){return to(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return to(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function m$(t){return qD(t.auth,new Py(t),t.bypassAuthState)}function g$(t){const{auth:e,user:n}=t;return q(n,e,"internal-error"),HD(n,new Py(t),t.bypassAuthState)}async function y$(t){const{auth:e,user:n}=t;return q(n,e,"internal-error"),WD(n,new Py(t),t.bypassAuthState)}/**
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
 */class eI{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return m$;case"linkViaPopup":case"linkViaRedirect":return y$;case"reauthViaPopup":case"reauthViaRedirect":return g$;default:rr(this.auth,"internal-error")}}resolve(e){Ir(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ir(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const v$=new Gl(2e3,1e4);async function _$(t,e,n){const r=Ry(t);yD(t,e,Ny);const i=ZT(r,n);return new Oi(r,"signInViaPopup",e,i).executeNotNull()}class Oi extends eI{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Oi.currentPopupAction&&Oi.currentPopupAction.cancel(),Oi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return q(e,this.auth,"internal-error"),e}async onExecution(){Ir(this.filter.length===1,"Popup operations only handle one event");const e=Ay();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Jn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Jn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Oi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Jn(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,v$.get())};e()}}Oi.currentPopupAction=null;/**
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
 */const w$="pendingRedirect",Sc=new Map;class C$ extends eI{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Sc.get(this.auth._key());if(!e){try{const r=await E$(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Sc.set(this.auth._key(),e)}return this.bypassAuthState||Sc.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function E$(t,e){const n=I$(e),r=T$(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function S$(t,e){Sc.set(t._key(),e)}function T$(t){return fr(t._redirectPersistence)}function I$(t){return Ec(w$,t.config.apiKey,t.name)}async function k$(t,e,n=!1){const r=Ry(t),i=ZT(r,e),o=await new C$(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const b$=10*60*1e3;class x${constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!R$(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!tI(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Jn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=b$&&this.cachedEventUids.clear(),this.cachedEventUids.has(gw(e))}saveEventToCache(e){this.cachedEventUids.add(gw(e)),this.lastProcessedEventTime=Date.now()}}function gw(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function tI({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function R$(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return tI(t);default:return!1}}/**
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
 */async function N$(t,e={}){return fd(t,"GET","/v1/projects",e)}/**
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
 */const A$=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,P$=/^https?/;async function O$(t){if(t.config.emulator)return;const{authorizedDomains:e}=await N$(t);for(const n of e)try{if(D$(n))return}catch{}rr(t,"unauthorized-domain")}function D$(t){const e=bm(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!P$.test(n))return!1;if(A$.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const $$=new Gl(3e4,6e4);function yw(){const t=Zn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function M$(t){return new Promise((e,n)=>{var r,i,s;function o(){yw(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{yw(),n(Jn(t,"network-request-failed"))},timeout:$$.get()})}if(!((i=(r=Zn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Zn().gapi)===null||s===void 0)&&s.load)o();else{const a=p$("iframefcb");return Zn()[a]=()=>{gapi.load?o():n(Jn(t,"network-request-failed"))},f$(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Tc=null,e})}let Tc=null;function L$(t){return Tc=Tc||M$(t),Tc}/**
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
 */const F$=new Gl(5e3,15e3),U$="__/auth/iframe",z$="emulator/auth/iframe",V$={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},B$=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function j$(t){const e=t.config;q(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?ky(e,z$):`https://${t.config.authDomain}/${U$}`,r={apiKey:e.apiKey,appName:t.name,v:mi},i=B$.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Uo(r).slice(1)}`}async function W$(t){const e=await L$(t),n=Zn().gapi;return q(n,t,"internal-error"),e.open({where:document.body,url:j$(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:V$,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Jn(t,"network-request-failed"),a=Zn().setTimeout(()=>{s(o)},F$.get());function l(){Zn().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const H$={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},q$=500,K$=600,G$="_blank",Q$="http://localhost";class vw{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Y$(t,e,n,r=q$,i=K$){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},H$),{width:r.toString(),height:i.toString(),top:s,left:o}),u=ut().toLowerCase();n&&(a=MT(u)?G$:n),$T(u)&&(e=e||Q$,l.scrollbars="yes");const c=Object.entries(l).reduce((d,[f,p])=>`${d}${f}=${p},`,"");if(FD(u)&&a!=="_self")return X$(e||"",a),new vw(null);const h=window.open(e||"",a,c);q(h,t,"popup-blocked");try{h.focus()}catch{}return new vw(h)}function X$(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const J$="__/auth/handler",Z$="emulator/auth/handler";function _w(t,e,n,r,i,s){q(t.config.authDomain,t,"auth-domain-config-required"),q(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:mi,eventId:i};if(e instanceof Ny){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Em(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,u]of Object.entries(s||{}))o[l]=u}if(e instanceof Ql){const l=e.getScopes().filter(u=>u!=="");l.length>0&&(o.scopes=l.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${eM(t)}?${Uo(a).slice(1)}`}function eM({config:t}){return t.emulator?ky(t,Z$):`https://${t.authDomain}/${J$}`}/**
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
 */const Xf="webStorageSupport";class tM{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=GT,this._completeRedirectFn=k$,this._overrideRedirectResult=S$}async _openPopup(e,n,r,i){var s;Ir((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=_w(e,n,r,bm(),i);return Y$(e,o,Ay())}async _openRedirect(e,n,r,i){return await this._originValidation(e),n$(_w(e,n,r,bm(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Ir(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await W$(e),r=new x$(e);return n.register("authEvent",i=>(q(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Xf,{type:Xf},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Xf];o!==void 0&&n(!!o),rr(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=O$(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return VT()||xy()||pd()}}const nM=tM;var ww="@firebase/auth",Cw="0.20.6";/**
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
 */class rM{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{var i;e(((i=r)===null||i===void 0?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){q(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function iM(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function sM(t){Rn(new hn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:s,authDomain:o}=r.options;return((a,l)=>{q(s&&!s.includes(":"),"invalid-api-key",{appName:a.name}),q(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const u={apiKey:s,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:BT(t)},c=new BD(a,l,u);return _D(c,n),c})(r,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Rn(new hn("auth-internal",e=>{const n=Ry(e.getProvider("auth").getImmediate());return(r=>new rM(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ke(ww,Cw,iM(t)),Ke(ww,Cw,"esm2017")}/**
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
 */function oM(t=Sy()){const e=zo(t,"auth");return e.isInitialized()?e.getImmediate():vD(t,{popupRedirectResolver:nM,persistence:[h$,ZD,GT]})}sM("Browser");const Ew="@firebase/database",Sw="0.13.6";/**
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
 */let nI="";function aM(t){nI=t}/**
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
 */class lM{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),at(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:dl(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class uM{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Ar(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const rI=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new lM(e)}}catch{}return new uM},Di=rI("localStorage"),Rm=rI("sessionStorage");/**
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
 */const no=new Kl("@firebase/database"),cM=function(){let t=1;return function(){return t++}}(),iI=function(t){const e=iO(t),n=new eO;n.update(e);const r=n.digest();return _y.encodeByteArray(r)},Xl=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=Xl.apply(null,r):typeof r=="object"?e+=at(r):e+=r,e+=" "}return e};let ji=null,Tw=!0;const hM=function(t,e){A(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(no.logLevel=se.VERBOSE,ji=no.log.bind(no),e&&Rm.set("logging_enabled",!0)):typeof t=="function"?ji=t:(ji=null,Rm.remove("logging_enabled"))},bt=function(...t){if(Tw===!0&&(Tw=!1,ji===null&&Rm.get("logging_enabled")===!0&&hM(!0)),ji){const e=Xl.apply(null,t);ji(e)}},Jl=function(t){return function(...e){bt(t,...e)}},Nm=function(...t){const e="FIREBASE INTERNAL ERROR: "+Xl(...t);no.error(e)},ts=function(...t){const e=`FIREBASE FATAL ERROR: ${Xl(...t)}`;throw no.error(e),new Error(e)},ln=function(...t){const e="FIREBASE WARNING: "+Xl(...t);no.warn(e)},dM=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&ln("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},sI=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},fM=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},wo="[MIN_NAME]",ns="[MAX_NAME]",Vo=function(t,e){if(t===e)return 0;if(t===wo||e===ns)return-1;if(e===wo||t===ns)return 1;{const n=Iw(t),r=Iw(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},pM=function(t,e){return t===e?0:t<e?-1:1},da=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+at(e))},Oy=function(t){if(typeof t!="object"||t===null)return at(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=at(e[r]),n+=":",n+=Oy(t[e[r]]);return n+="}",n},oI=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function Jt(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const aI=function(t){A(!sI(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,a,l;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const u=[];for(l=n;l;l-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)u.push(s%2?1:0),s=Math.floor(s/2);u.push(i?1:0),u.reverse();const c=u.join("");let h="";for(l=0;l<64;l+=8){let d=parseInt(c.substr(l,8),2).toString(16);d.length===1&&(d="0"+d),h=h+d}return h.toLowerCase()},mM=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},gM=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function yM(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const vM=new RegExp("^-?(0*)\\d{1,10}$"),_M=-2147483648,wM=2147483647,Iw=function(t){if(vM.test(t)){const e=Number(t);if(e>=_M&&e<=wM)return e}return null},Zl=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw ln("Exception was thrown by user callback.",n),e},Math.floor(0))}},CM=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Ua=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class EM{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){ln(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class SM{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(bt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',ln(e)}}class Am{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Am.OWNER="owner";/**
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
 */const Dy="5",lI="v",uI="s",cI="r",hI="f",dI=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,fI="ls",pI="p",Pm="ac",mI="websocket",gI="long_polling";/**
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
 */class TM{constructor(e,n,r,i,s=!1,o="",a=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Di.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Di.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function IM(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function yI(t,e,n){A(typeof e=="string","typeof type must == string"),A(typeof n=="object","typeof params must == object");let r;if(e===mI)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===gI)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);IM(t)&&(n.ns=t.namespace);const i=[];return Jt(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
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
 */class kM{constructor(){this.counters_={}}incrementCounter(e,n=1){Ar(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return WP(this.counters_)}}/**
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
 */const Jf={},Zf={};function $y(t){const e=t.toString();return Jf[e]||(Jf[e]=new kM),Jf[e]}function bM(t,e){const n=t.toString();return Zf[n]||(Zf[n]=e()),Zf[n]}/**
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
 */class xM{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&Zl(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const kw="start",RM="close",NM="pLPCommand",AM="pRTLPCB",vI="id",_I="pw",wI="ser",PM="cb",OM="seg",DM="ts",$M="d",MM="dframe",CI=1870,EI=30,LM=CI-EI,FM=25e3,UM=3e4;class Ws{constructor(e,n,r,i,s,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Jl(e),this.stats_=$y(n),this.urlFn=l=>(this.appCheckToken&&(l[Pm]=this.appCheckToken),yI(n,gI,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new xM(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(UM)),fM(()=>{if(this.isClosed_)return;this.scriptTagHolder=new My((...s)=>{const[o,a,l,u,c]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===kw)this.id=a,this.password=l;else if(o===RM)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[kw]="t",r[wI]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[PM]=this.scriptTagHolder.uniqueCallbackIdentifier),r[lI]=Dy,this.transportSessionId&&(r[uI]=this.transportSessionId),this.lastSessionId&&(r[fI]=this.lastSessionId),this.applicationId&&(r[pI]=this.applicationId),this.appCheckToken&&(r[Pm]=this.appCheckToken),typeof location<"u"&&location.hostname&&dI.test(location.hostname)&&(r[cI]=hI);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Ws.forceAllow_=!0}static forceDisallow(){Ws.forceDisallow_=!0}static isAvailable(){return Ws.forceAllow_?!0:!Ws.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!mM()&&!gM()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=at(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=dT(n),i=oI(r,LM);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[MM]="t",r[vI]=e,r[_I]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=at(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class My{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=cM(),window[NM+this.uniqueCallbackIdentifier]=e,window[AM+this.uniqueCallbackIdentifier]=n,this.myIFrame=My.createIFrame_();let s="";if(this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"){const a=document.domain;s='<script>document.domain="'+a+'";<\/script>'}const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){bt("frame writing exception"),a.stack&&bt(a.stack),bt(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||bt("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[vI]=this.myID,e[_I]=this.myPW,e[wI]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+EI+r.length<=CI;){const o=this.pendingSegs.shift();r=r+"&"+OM+i+"="+o.seg+"&"+DM+i+"="+o.ts+"&"+$M+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(FM)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{bt("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
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
 */const zM=16384,VM=45e3;let fh=null;typeof MozWebSocket<"u"?fh=MozWebSocket:typeof WebSocket<"u"&&(fh=WebSocket);class Mn{constructor(e,n,r,i,s,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Jl(this.connId),this.stats_=$y(n),this.connURL=Mn.connectionURL_(n,o,a,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[lI]=Dy,typeof location<"u"&&location.hostname&&dI.test(location.hostname)&&(o[cI]=hI),n&&(o[uI]=n),r&&(o[fI]=r),i&&(o[Pm]=i),s&&(o[pI]=s),yI(e,mI,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Di.set("previous_websocket_failure",!0);try{let r;yT(),this.mySock=new fh(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Mn.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&fh!==null&&!Mn.forceDisallow_}static previouslyFailed(){return Di.isInMemoryStorage||Di.get("previous_websocket_failure")===!0}markConnectionHealthy(){Di.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=dl(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(A(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=at(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=oI(n,zM);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(VM))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Mn.responsesRequiredToBeHealthy=2;Mn.healthyTimeout=3e4;/**
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
 */class yl{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Ws,Mn]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=Mn&&Mn.isAvailable();let r=n&&!Mn.previouslyFailed();if(e.webSocketOnly&&(n||ln("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[Mn];else{const i=this.transports_=[];for(const s of yl.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);yl.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}yl.globalTransportInitialized_=!1;/**
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
 */const BM=6e4,jM=5e3,WM=10*1024,HM=100*1024,ep="t",bw="d",qM="s",xw="r",KM="e",Rw="o",Nw="a",Aw="n",Pw="p",GM="h";class QM{constructor(e,n,r,i,s,o,a,l,u,c){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=u,this.lastSessionId=c,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Jl("c:"+this.id+":"),this.transportManager_=new yl(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Ua(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>HM?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>WM?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(ep in e){const n=e[ep];n===Nw?this.upgradeIfSecondaryHealthy_():n===xw?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Rw&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=da("t",e),r=da("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Pw,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Nw,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Aw,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=da("t",e),r=da("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=da(ep,e);if(bw in e){const r=e[bw];if(n===GM)this.onHandshake_(r);else if(n===Aw){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===qM?this.onConnectionShutdown_(r):n===xw?this.onReset_(r):n===KM?Nm("Server Error: "+r):n===Rw?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Nm("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Dy!==r&&ln("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),Ua(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(BM))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Ua(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(jM))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Pw,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Di.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class SI{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class TI{constructor(e){this.allowedEvents_=e,this.listeners_={},A(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){A(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class ph extends TI{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!hd()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new ph}getInitialEvent(e){return A(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const Ow=32,Dw=768;class we{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function ce(){return new we("")}function Z(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function oi(t){return t.pieces_.length-t.pieceNum_}function Ce(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new we(t.pieces_,e)}function II(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function YM(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function kI(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function bI(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new we(e,0)}function Ye(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof we)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new we(n,0)}function ee(t){return t.pieceNum_>=t.pieces_.length}function qt(t,e){const n=Z(t),r=Z(e);if(n===null)return e;if(n===r)return qt(Ce(t),Ce(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function Ly(t,e){if(oi(t)!==oi(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function Ln(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(oi(t)>oi(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class XM{constructor(e,n){this.errorPrefix_=n,this.parts_=kI(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=dd(this.parts_[r]);xI(this)}}function JM(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=dd(e),xI(t)}function ZM(t){const e=t.parts_.pop();t.byteLength_-=dd(e),t.parts_.length>0&&(t.byteLength_-=1)}function xI(t){if(t.byteLength_>Dw)throw new Error(t.errorPrefix_+"has a key path longer than "+Dw+" bytes ("+t.byteLength_+").");if(t.parts_.length>Ow)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Ow+") or object contains a cycle "+bi(t))}function bi(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class Fy extends TI{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new Fy}getInitialEvent(e){return A(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const fa=1e3,eL=60*5*1e3,$w=30*1e3,tL=1.3,nL=3e4,rL="server_kill",Mw=3;class yr extends SI{constructor(e,n,r,i,s,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=yr.nextPersistentConnectionId_++,this.log_=Jl("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=fa,this.maxReconnectDelay_=eL,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!yT())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Fy.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&ph.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(at(s)),A(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new wy,r={p:e._path.toString(),q:e._queryObject},i={action:"g",request:r,onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),A(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),A(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const l=a.d,u=a.s;yr.warnOnListenWarnings_(l,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",a),u!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(u,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Ar(e,"w")){const r=vo(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();ln(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||ZP(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=$w)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=JP(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),A(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+at(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Nm("Unrecognized action received from server: "+at(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){A(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=fa,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=fa,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>nL&&(this.reconnectDelay_=fa),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*tL)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+yr.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,r())},u=function(h){A(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:l,sendRequest:u};const c=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,d]=await Promise.all([this.authTokenProvider_.getToken(c),this.appCheckTokenProvider_.getToken(c)]);o?bt("getToken() completed but was canceled"):(bt("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=d&&d.token,a=new QM(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,f=>{ln(f+" ("+this.repoInfo_.toString()+")"),this.interrupt(rL)},s))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&ln(h),l())}}}interrupt(e){bt("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){bt("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Em(this.interruptReasons_)&&(this.reconnectDelay_=fa,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>Oy(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new we(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){bt("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Mw&&(this.reconnectDelay_=$w,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){bt("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Mw&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+nI.replace(/\./g,"-")]=1,hd()?e["framework.cordova"]=1:Cy()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=ph.getInstance().currentlyOnline();return Em(this.interruptReasons_)&&e}}yr.nextPersistentConnectionId_=0;yr.nextConnectionId_=0;/**
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
 */class X{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new X(e,n)}}/**
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
 */class yd{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new X(wo,e),i=new X(wo,n);return this.compare(r,i)!==0}minPost(){return X.MIN}}/**
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
 */let Gu;class RI extends yd{static get __EMPTY_NODE(){return Gu}static set __EMPTY_NODE(e){Gu=e}compare(e,n){return Vo(e.name,n.name)}isDefinedOn(e){throw Fo("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return X.MIN}maxPost(){return new X(ns,Gu)}makePost(e,n){return A(typeof e=="string","KeyIndex indexValue must always be a string."),new X(e,Gu)}toString(){return".key"}}const ro=new RI;/**
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
 */class Qu{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class ot{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r!=null?r:ot.RED,this.left=i!=null?i:Kt.EMPTY_NODE,this.right=s!=null?s:Kt.EMPTY_NODE}copy(e,n,r,i,s){return new ot(e!=null?e:this.key,n!=null?n:this.value,r!=null?r:this.color,i!=null?i:this.left,s!=null?s:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Kt.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return Kt.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,ot.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,ot.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}ot.RED=!0;ot.BLACK=!1;class iL{copy(e,n,r,i,s){return this}insert(e,n,r){return new ot(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Kt{constructor(e,n=Kt.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Kt(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,ot.BLACK,null,null))}remove(e){return new Kt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,ot.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Qu(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Qu(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Qu(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Qu(this.root_,null,this.comparator_,!0,e)}}Kt.EMPTY_NODE=new iL;/**
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
 */function sL(t,e){return Vo(t.name,e.name)}function Uy(t,e){return Vo(t,e)}/**
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
 */let Om;function oL(t){Om=t}const NI=function(t){return typeof t=="number"?"number:"+aI(t):"string:"+t},AI=function(t){if(t.isLeafNode()){const e=t.val();A(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Ar(e,".sv"),"Priority must be a string or number.")}else A(t===Om||t.isEmpty(),"priority of unexpected type.");A(t===Om||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let Lw;class nt{constructor(e,n=nt.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,A(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),AI(this.priorityNode_)}static set __childrenNodeConstructor(e){Lw=e}static get __childrenNodeConstructor(){return Lw}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new nt(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:nt.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return ee(e)?this:Z(e)===".priority"?this.priorityNode_:nt.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:nt.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=Z(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(A(r!==".priority"||oi(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,nt.__childrenNodeConstructor.EMPTY_NODE.updateChild(Ce(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+NI(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=aI(this.value_):e+=this.value_,this.lazyHash_=iI(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===nt.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof nt.__childrenNodeConstructor?-1:(A(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=nt.VALUE_TYPE_ORDER.indexOf(n),s=nt.VALUE_TYPE_ORDER.indexOf(r);return A(i>=0,"Unknown leaf type: "+n),A(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}nt.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let PI,OI;function aL(t){PI=t}function lL(t){OI=t}class uL extends yd{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?Vo(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return X.MIN}maxPost(){return new X(ns,new nt("[PRIORITY-POST]",OI))}makePost(e,n){const r=PI(e);return new X(n,new nt("[PRIORITY-POST]",r))}toString(){return".priority"}}const Fe=new uL;/**
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
 */const cL=Math.log(2);class hL{constructor(e){const n=s=>parseInt(Math.log(s)/cL,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const mh=function(t,e,n,r){t.sort(e);const i=function(l,u){const c=u-l;let h,d;if(c===0)return null;if(c===1)return h=t[l],d=n?n(h):h,new ot(d,h.node,ot.BLACK,null,null);{const f=parseInt(c/2,10)+l,p=i(l,f),y=i(f+1,u);return h=t[f],d=n?n(h):h,new ot(d,h.node,ot.BLACK,p,y)}},s=function(l){let u=null,c=null,h=t.length;const d=function(p,y){const w=h-p,g=h;h-=p;const m=i(w+1,g),v=t[w],_=n?n(v):v;f(new ot(_,v.node,y,null,m))},f=function(p){u?(u.left=p,u=p):(c=p,u=p)};for(let p=0;p<l.count;++p){const y=l.nextBitIsOne(),w=Math.pow(2,l.count-(p+1));y?d(w,ot.BLACK):(d(w,ot.BLACK),d(w,ot.RED))}return c},o=new hL(t.length),a=s(o);return new Kt(r||e,a)};/**
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
 */let tp;const Is={};class pr{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return A(Is&&Fe,"ChildrenNode.ts has not been loaded"),tp=tp||new pr({".priority":Is},{".priority":Fe}),tp}get(e){const n=vo(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Kt?n:null}hasIndex(e){return Ar(this.indexSet_,e.toString())}addIndex(e,n){A(e!==ro,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(X.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let a;i?a=mh(r,e.getCompare()):a=Is;const l=e.toString(),u=Object.assign({},this.indexSet_);u[l]=e;const c=Object.assign({},this.indexes_);return c[l]=a,new pr(c,u)}addToIndexes(e,n){const r=ah(this.indexes_,(i,s)=>{const o=vo(this.indexSet_,s);if(A(o,"Missing index implementation for "+s),i===Is)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(X.Wrap);let u=l.getNext();for(;u;)u.name!==e.name&&a.push(u),u=l.getNext();return a.push(e),mh(a,o.getCompare())}else return Is;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new X(e.name,a))),l.insert(e,e.node)}});return new pr(r,this.indexSet_)}removeFromIndexes(e,n){const r=ah(this.indexes_,i=>{if(i===Is)return i;{const s=n.get(e.name);return s?i.remove(new X(e.name,s)):i}});return new pr(r,this.indexSet_)}}/**
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
 */let pa;class B{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&AI(this.priorityNode_),this.children_.isEmpty()&&A(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return pa||(pa=new B(new Kt(Uy),null,pr.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||pa}updatePriority(e){return this.children_.isEmpty()?this:new B(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?pa:n}}getChild(e){const n=Z(e);return n===null?this:this.getImmediateChild(n).getChild(Ce(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(A(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new X(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?pa:this.priorityNode_;return new B(i,o,s)}}updateChild(e,n){const r=Z(e);if(r===null)return n;{A(Z(e)!==".priority"||oi(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(Ce(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(Fe,(o,a)=>{n[o]=a.val(e),r++,s&&B.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+NI(this.getPriority().val())+":"),this.forEachChild(Fe,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":iI(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new X(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new X(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new X(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,X.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,X.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===eu?-1:0}withIndex(e){if(e===ro||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new B(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===ro||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(Fe),i=n.getIterator(Fe);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===ro?null:this.indexMap_.get(e.toString())}}B.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class dL extends B{constructor(){super(new Kt(Uy),B.EMPTY_NODE,pr.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return B.EMPTY_NODE}isEmpty(){return!1}}const eu=new dL;Object.defineProperties(X,{MIN:{value:new X(wo,B.EMPTY_NODE)},MAX:{value:new X(ns,eu)}});RI.__EMPTY_NODE=B.EMPTY_NODE;nt.__childrenNodeConstructor=B;oL(eu);lL(eu);/**
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
 */const fL=!0;function xt(t,e=null){if(t===null)return B.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),A(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new nt(n,xt(e))}if(!(t instanceof Array)&&fL){const n=[];let r=!1;if(Jt(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=xt(a);l.isEmpty()||(r=r||!l.getPriority().isEmpty(),n.push(new X(o,l)))}}),n.length===0)return B.EMPTY_NODE;const s=mh(n,sL,o=>o.name,Uy);if(r){const o=mh(n,Fe.getCompare());return new B(s,xt(e),new pr({".priority":o},{".priority":Fe}))}else return new B(s,xt(e),pr.Default)}else{let n=B.EMPTY_NODE;return Jt(t,(r,i)=>{if(Ar(t,r)&&r.substring(0,1)!=="."){const s=xt(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(xt(e))}}aL(xt);/**
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
 */class pL extends yd{constructor(e){super(),this.indexPath_=e,A(!ee(e)&&Z(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?Vo(e.name,n.name):s}makePost(e,n){const r=xt(e),i=B.EMPTY_NODE.updateChild(this.indexPath_,r);return new X(n,i)}maxPost(){const e=B.EMPTY_NODE.updateChild(this.indexPath_,eu);return new X(ns,e)}toString(){return kI(this.indexPath_,0).join("/")}}/**
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
 */class mL extends yd{compare(e,n){const r=e.node.compareTo(n.node);return r===0?Vo(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return X.MIN}maxPost(){return X.MAX}makePost(e,n){const r=xt(e);return new X(n,r)}toString(){return".value"}}const gL=new mL;/**
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
 */function DI(t){return{type:"value",snapshotNode:t}}function Co(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function vl(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function _l(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function yL(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class zy{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){A(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(r.getChild(i))&&a.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(vl(n,a)):A(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Co(n,r)):o.trackChildChange(_l(n,r,a))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(Fe,(i,s)=>{n.hasChild(i)||r.trackChildChange(vl(i,s))}),n.isLeafNode()||n.forEachChild(Fe,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(_l(i,s,o))}else r.trackChildChange(Co(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?B.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class wl{constructor(e){this.indexedFilter_=new zy(e.getIndex()),this.index_=e.getIndex(),this.startPost_=wl.getStartPost_(e),this.endPost_=wl.getEndPost_(e)}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){return this.index_.compare(this.getStartPost(),e)<=0&&this.index_.compare(e,this.getEndPost())<=0}updateChild(e,n,r,i,s,o){return this.matches(new X(n,r))||(r=B.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=B.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(B.EMPTY_NODE);const s=this;return n.forEachChild(Fe,(o,a)=>{s.matches(new X(o,a))||(i=i.updateImmediateChild(o,B.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class vL{constructor(e){this.rangedFilter_=new wl(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft()}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new X(n,r))||(r=B.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=B.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=B.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const a=s.getNext();let l;if(this.reverse_?l=this.index_.compare(this.rangedFilter_.getStartPost(),a)<=0:l=this.index_.compare(a,this.rangedFilter_.getEndPost())<=0,l)i=i.updateImmediateChild(a.name,a.node),o++;else break}}else{i=n.withIndex(this.index_),i=i.updatePriority(B.EMPTY_NODE);let s,o,a,l;if(this.reverse_){l=i.getReverseIterator(this.index_),s=this.rangedFilter_.getEndPost(),o=this.rangedFilter_.getStartPost();const h=this.index_.getCompare();a=(d,f)=>h(f,d)}else l=i.getIterator(this.index_),s=this.rangedFilter_.getStartPost(),o=this.rangedFilter_.getEndPost(),a=this.index_.getCompare();let u=0,c=!1;for(;l.hasNext();){const h=l.getNext();!c&&a(s,h)<=0&&(c=!0),c&&u<this.limit_&&a(h,o)<=0?u++:i=i.updateImmediateChild(h.name,B.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const h=this.index_.getCompare();o=(d,f)=>h(f,d)}else o=this.index_.getCompare();const a=e;A(a.numChildren()===this.limit_,"");const l=new X(n,r),u=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),c=this.rangedFilter_.matches(l);if(a.hasChild(n)){const h=a.getImmediateChild(n);let d=i.getChildAfterChild(this.index_,u,this.reverse_);for(;d!=null&&(d.name===n||a.hasChild(d.name));)d=i.getChildAfterChild(this.index_,d,this.reverse_);const f=d==null?1:o(d,l);if(c&&!r.isEmpty()&&f>=0)return s!=null&&s.trackChildChange(_l(n,r,h)),a.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(vl(n,h));const y=a.updateImmediateChild(n,B.EMPTY_NODE);return d!=null&&this.rangedFilter_.matches(d)?(s!=null&&s.trackChildChange(Co(d.name,d.node)),y.updateImmediateChild(d.name,d.node)):y}}else return r.isEmpty()?e:c&&o(u,l)>=0?(s!=null&&(s.trackChildChange(vl(u.name,u.node)),s.trackChildChange(Co(n,r))),a.updateImmediateChild(n,r).updateImmediateChild(u.name,B.EMPTY_NODE)):e}}/**
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
 */class Vy{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Fe}hasStart(){return this.startSet_}hasStartAfter(){return this.startAfterSet_}hasEndBefore(){return this.endBeforeSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return A(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return A(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:wo}hasEnd(){return this.endSet_}getIndexEndValue(){return A(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return A(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:ns}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return A(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Fe}copy(){const e=new Vy;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function _L(t){return t.loadsAllData()?new zy(t.getIndex()):t.hasLimit()?new vL(t):new wl(t)}function Fw(t){const e={};if(t.isDefault())return e;let n;return t.index_===Fe?n="$priority":t.index_===gL?n="$value":t.index_===ro?n="$key":(A(t.index_ instanceof pL,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=at(n),t.startSet_&&(e.startAt=at(t.indexStartValue_),t.startNameSet_&&(e.startAt+=","+at(t.indexStartName_))),t.endSet_&&(e.endAt=at(t.indexEndValue_),t.endNameSet_&&(e.endAt+=","+at(t.indexEndName_))),t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Uw(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_)),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_)),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==Fe&&(e.i=t.index_.toString()),e}/**
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
 */class gh extends SI{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=Jl("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(A(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=gh.getListenId_(e,r),a={};this.listens_[o]=a;const l=Fw(e._queryParams);this.restRequest_(s+".json",l,(u,c)=>{let h=c;if(u===404&&(h=null,u=null),u===null&&this.onDataUpdate_(s,h,!1,r),vo(this.listens_,o)===a){let d;u?u===401?d="permission_denied":d="rest_error:"+u:d="ok",i(d,null)}})}unlisten(e,n){const r=gh.getListenId_(e,n);delete this.listens_[r]}get(e){const n=Fw(e._queryParams),r=e._path.toString(),i=new wy;return this.restRequest_(r+".json",n,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(r,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Uo(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=dl(a.responseText)}catch{ln("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,l)}else a.status!==401&&a.status!==404&&ln("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class wL{constructor(){this.rootNode_=B.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function yh(){return{value:null,children:new Map}}function $I(t,e,n){if(ee(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=Z(e);t.children.has(r)||t.children.set(r,yh());const i=t.children.get(r);e=Ce(e),$I(i,e,n)}}function Dm(t,e,n){t.value!==null?n(e,t.value):CL(t,(r,i)=>{const s=new we(e.toString()+"/"+r);Dm(i,s,n)})}function CL(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
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
 */class EL{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Jt(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
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
 */const zw=10*1e3,SL=30*1e3,TL=5*60*1e3;class IL{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new EL(e);const r=zw+(SL-zw)*Math.random();Ua(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;Jt(e,(i,s)=>{s>0&&Ar(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),Ua(this.reportStats_.bind(this),Math.floor(Math.random()*2*TL))}}/**
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
 */var Fn;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Fn||(Fn={}));function MI(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function By(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function jy(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class vh{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=Fn.ACK_USER_WRITE,this.source=MI()}operationForChild(e){if(ee(this.path)){if(this.affectedTree.value!=null)return A(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new we(e));return new vh(ce(),n,this.revert)}}else return A(Z(this.path)===e,"operationForChild called for unrelated child."),new vh(Ce(this.path),this.affectedTree,this.revert)}}/**
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
 */class Cl{constructor(e,n){this.source=e,this.path=n,this.type=Fn.LISTEN_COMPLETE}operationForChild(e){return ee(this.path)?new Cl(this.source,ce()):new Cl(this.source,Ce(this.path))}}/**
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
 */class rs{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=Fn.OVERWRITE}operationForChild(e){return ee(this.path)?new rs(this.source,ce(),this.snap.getImmediateChild(e)):new rs(this.source,Ce(this.path),this.snap)}}/**
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
 */class El{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=Fn.MERGE}operationForChild(e){if(ee(this.path)){const n=this.children.subtree(new we(e));return n.isEmpty()?null:n.value?new rs(this.source,ce(),n.value):new El(this.source,ce(),n)}else return A(Z(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new El(this.source,Ce(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class is{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(ee(e))return this.isFullyInitialized()&&!this.filtered_;const n=Z(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class kL{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function bL(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(yL(o.childName,o.snapshotNode))}),ma(t,i,"child_removed",e,r,n),ma(t,i,"child_added",e,r,n),ma(t,i,"child_moved",s,r,n),ma(t,i,"child_changed",e,r,n),ma(t,i,"value",e,r,n),i}function ma(t,e,n,r,i,s){const o=r.filter(a=>a.type===n);o.sort((a,l)=>RL(t,a,l)),o.forEach(a=>{const l=xL(t,a,s);i.forEach(u=>{u.respondsTo(a.type)&&e.push(u.createEvent(l,t.query_))})})}function xL(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function RL(t,e,n){if(e.childName==null||n.childName==null)throw Fo("Should only compare child_ events.");const r=new X(e.childName,e.snapshotNode),i=new X(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
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
 */function vd(t,e){return{eventCache:t,serverCache:e}}function za(t,e,n,r){return vd(new is(e,n,r),t.serverCache)}function LI(t,e,n,r){return vd(t.eventCache,new is(e,n,r))}function $m(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function ss(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let np;const NL=()=>(np||(np=new Kt(pM)),np);class Ie{constructor(e,n=NL()){this.value=e,this.children=n}static fromObject(e){let n=new Ie(null);return Jt(e,(r,i)=>{n=n.set(new we(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:ce(),value:this.value};if(ee(e))return null;{const r=Z(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(Ce(e),n);return s!=null?{path:Ye(new we(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(ee(e))return this;{const n=Z(e),r=this.children.get(n);return r!==null?r.subtree(Ce(e)):new Ie(null)}}set(e,n){if(ee(e))return new Ie(n,this.children);{const r=Z(e),s=(this.children.get(r)||new Ie(null)).set(Ce(e),n),o=this.children.insert(r,s);return new Ie(this.value,o)}}remove(e){if(ee(e))return this.children.isEmpty()?new Ie(null):new Ie(null,this.children);{const n=Z(e),r=this.children.get(n);if(r){const i=r.remove(Ce(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new Ie(null):new Ie(this.value,s)}else return this}}get(e){if(ee(e))return this.value;{const n=Z(e),r=this.children.get(n);return r?r.get(Ce(e)):null}}setTree(e,n){if(ee(e))return n;{const r=Z(e),s=(this.children.get(r)||new Ie(null)).setTree(Ce(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new Ie(this.value,o)}}fold(e){return this.fold_(ce(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(Ye(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,ce(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(ee(e))return null;{const s=Z(e),o=this.children.get(s);return o?o.findOnPath_(Ce(e),Ye(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,ce(),n)}foreachOnPath_(e,n,r){if(ee(e))return this;{this.value&&r(n,this.value);const i=Z(e),s=this.children.get(i);return s?s.foreachOnPath_(Ce(e),Ye(n,i),r):new Ie(null)}}foreach(e){this.foreach_(ce(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(Ye(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
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
 */class Bn{constructor(e){this.writeTree_=e}static empty(){return new Bn(new Ie(null))}}function Va(t,e,n){if(ee(e))return new Bn(new Ie(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=qt(i,e);return s=s.updateChild(o,n),new Bn(t.writeTree_.set(i,s))}else{const i=new Ie(n),s=t.writeTree_.setTree(e,i);return new Bn(s)}}}function Vw(t,e,n){let r=t;return Jt(n,(i,s)=>{r=Va(r,Ye(e,i),s)}),r}function Bw(t,e){if(ee(e))return Bn.empty();{const n=t.writeTree_.setTree(e,new Ie(null));return new Bn(n)}}function Mm(t,e){return ys(t,e)!=null}function ys(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(qt(n.path,e)):null}function jw(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Fe,(r,i)=>{e.push(new X(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new X(r,i.value))}),e}function ni(t,e){if(ee(e))return t;{const n=ys(t,e);return n!=null?new Bn(new Ie(n)):new Bn(t.writeTree_.subtree(e))}}function Lm(t){return t.writeTree_.isEmpty()}function Eo(t,e){return FI(ce(),t.writeTree_,e)}function FI(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(A(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=FI(Ye(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(Ye(t,".priority"),r)),n}}/**
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
 */function Wy(t,e){return BI(e,t)}function AL(t,e,n,r,i){A(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=Va(t.visibleWrites,e,n)),t.lastWriteId=r}function PL(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function OL(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);A(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&DL(a,r.path)?i=!1:Ln(r.path,a.path)&&(s=!0)),o--}if(i){if(s)return $L(t),!0;if(r.snap)t.visibleWrites=Bw(t.visibleWrites,r.path);else{const a=r.children;Jt(a,l=>{t.visibleWrites=Bw(t.visibleWrites,Ye(r.path,l))})}return!0}else return!1}function DL(t,e){if(t.snap)return Ln(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Ln(Ye(t.path,n),e))return!0;return!1}function $L(t){t.visibleWrites=UI(t.allWrites,ML,ce()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function ML(t){return t.visible}function UI(t,e,n){let r=Bn.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let a;if(s.snap)Ln(n,o)?(a=qt(n,o),r=Va(r,a,s.snap)):Ln(o,n)&&(a=qt(o,n),r=Va(r,ce(),s.snap.getChild(a)));else if(s.children){if(Ln(n,o))a=qt(n,o),r=Vw(r,a,s.children);else if(Ln(o,n))if(a=qt(o,n),ee(a))r=Vw(r,ce(),s.children);else{const l=vo(s.children,Z(a));if(l){const u=l.getChild(Ce(a));r=Va(r,ce(),u)}}}else throw Fo("WriteRecord should have .snap or .children")}}return r}function zI(t,e,n,r,i){if(!r&&!i){const s=ys(t.visibleWrites,e);if(s!=null)return s;{const o=ni(t.visibleWrites,e);if(Lm(o))return n;if(n==null&&!Mm(o,ce()))return null;{const a=n||B.EMPTY_NODE;return Eo(o,a)}}}else{const s=ni(t.visibleWrites,e);if(!i&&Lm(s))return n;if(!i&&n==null&&!Mm(s,ce()))return null;{const o=function(u){return(u.visible||i)&&(!r||!~r.indexOf(u.writeId))&&(Ln(u.path,e)||Ln(e,u.path))},a=UI(t.allWrites,o,e),l=n||B.EMPTY_NODE;return Eo(a,l)}}}function LL(t,e,n){let r=B.EMPTY_NODE;const i=ys(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(Fe,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=ni(t.visibleWrites,e);return n.forEachChild(Fe,(o,a)=>{const l=Eo(ni(s,new we(o)),a);r=r.updateImmediateChild(o,l)}),jw(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=ni(t.visibleWrites,e);return jw(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function FL(t,e,n,r,i){A(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=Ye(e,n);if(Mm(t.visibleWrites,s))return null;{const o=ni(t.visibleWrites,s);return Lm(o)?i.getChild(n):Eo(o,i.getChild(n))}}function UL(t,e,n,r){const i=Ye(e,n),s=ys(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=ni(t.visibleWrites,i);return Eo(o,r.getNode().getImmediateChild(n))}else return null}function zL(t,e){return ys(t.visibleWrites,e)}function VL(t,e,n,r,i,s,o){let a;const l=ni(t.visibleWrites,e),u=ys(l,ce());if(u!=null)a=u;else if(n!=null)a=Eo(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const c=[],h=o.getCompare(),d=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let f=d.getNext();for(;f&&c.length<i;)h(f,r)!==0&&c.push(f),f=d.getNext();return c}else return[]}function BL(){return{visibleWrites:Bn.empty(),allWrites:[],lastWriteId:-1}}function _h(t,e,n,r){return zI(t.writeTree,t.treePath,e,n,r)}function Hy(t,e){return LL(t.writeTree,t.treePath,e)}function Ww(t,e,n,r){return FL(t.writeTree,t.treePath,e,n,r)}function wh(t,e){return zL(t.writeTree,Ye(t.treePath,e))}function jL(t,e,n,r,i,s){return VL(t.writeTree,t.treePath,e,n,r,i,s)}function qy(t,e,n){return UL(t.writeTree,t.treePath,e,n)}function VI(t,e){return BI(Ye(t.treePath,e),t.writeTree)}function BI(t,e){return{treePath:t,writeTree:e}}/**
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
 */class WL{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;A(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),A(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,_l(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,vl(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,Co(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,_l(r,e.snapshotNode,i.oldSnap));else throw Fo("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class HL{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const jI=new HL;class Ky{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new is(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return qy(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:ss(this.viewCache_),s=jL(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
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
 */function qL(t){return{filter:t}}function KL(t,e){A(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),A(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function GL(t,e,n,r,i){const s=new WL;let o,a;if(n.type===Fn.OVERWRITE){const u=n;u.source.fromUser?o=Fm(t,e,u.path,u.snap,r,i,s):(A(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered()&&!ee(u.path),o=Ch(t,e,u.path,u.snap,r,i,a,s))}else if(n.type===Fn.MERGE){const u=n;u.source.fromUser?o=YL(t,e,u.path,u.children,r,i,s):(A(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered(),o=Um(t,e,u.path,u.children,r,i,a,s))}else if(n.type===Fn.ACK_USER_WRITE){const u=n;u.revert?o=ZL(t,e,u.path,r,i,s):o=XL(t,e,u.path,u.affectedTree,r,i,s)}else if(n.type===Fn.LISTEN_COMPLETE)o=JL(t,e,n.path,r,s);else throw Fo("Unknown operation type: "+n.type);const l=s.getChanges();return QL(e,o,l),{viewCache:o,changes:l}}function QL(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=$m(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(DI($m(e)))}}function WI(t,e,n,r,i,s){const o=e.eventCache;if(wh(r,n)!=null)return e;{let a,l;if(ee(n))if(A(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=ss(e),c=u instanceof B?u:B.EMPTY_NODE,h=Hy(r,c);a=t.filter.updateFullNode(e.eventCache.getNode(),h,s)}else{const u=_h(r,ss(e));a=t.filter.updateFullNode(e.eventCache.getNode(),u,s)}else{const u=Z(n);if(u===".priority"){A(oi(n)===1,"Can't have a priority with additional path components");const c=o.getNode();l=e.serverCache.getNode();const h=Ww(r,n,c,l);h!=null?a=t.filter.updatePriority(c,h):a=o.getNode()}else{const c=Ce(n);let h;if(o.isCompleteForChild(u)){l=e.serverCache.getNode();const d=Ww(r,n,o.getNode(),l);d!=null?h=o.getNode().getImmediateChild(u).updateChild(c,d):h=o.getNode().getImmediateChild(u)}else h=qy(r,u,e.serverCache);h!=null?a=t.filter.updateChild(o.getNode(),u,h,c,i,s):a=o.getNode()}}return za(e,a,o.isFullyInitialized()||ee(n),t.filter.filtersNodes())}}function Ch(t,e,n,r,i,s,o,a){const l=e.serverCache;let u;const c=o?t.filter:t.filter.getIndexedFilter();if(ee(n))u=c.updateFullNode(l.getNode(),r,null);else if(c.filtersNodes()&&!l.isFiltered()){const f=l.getNode().updateChild(n,r);u=c.updateFullNode(l.getNode(),f,null)}else{const f=Z(n);if(!l.isCompleteForPath(n)&&oi(n)>1)return e;const p=Ce(n),w=l.getNode().getImmediateChild(f).updateChild(p,r);f===".priority"?u=c.updatePriority(l.getNode(),w):u=c.updateChild(l.getNode(),f,w,p,jI,null)}const h=LI(e,u,l.isFullyInitialized()||ee(n),c.filtersNodes()),d=new Ky(i,h,s);return WI(t,h,n,i,d,a)}function Fm(t,e,n,r,i,s,o){const a=e.eventCache;let l,u;const c=new Ky(i,e,s);if(ee(n))u=t.filter.updateFullNode(e.eventCache.getNode(),r,o),l=za(e,u,!0,t.filter.filtersNodes());else{const h=Z(n);if(h===".priority")u=t.filter.updatePriority(e.eventCache.getNode(),r),l=za(e,u,a.isFullyInitialized(),a.isFiltered());else{const d=Ce(n),f=a.getNode().getImmediateChild(h);let p;if(ee(d))p=r;else{const y=c.getCompleteChild(h);y!=null?II(d)===".priority"&&y.getChild(bI(d)).isEmpty()?p=y:p=y.updateChild(d,r):p=B.EMPTY_NODE}if(f.equals(p))l=e;else{const y=t.filter.updateChild(a.getNode(),h,p,d,c,o);l=za(e,y,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function Hw(t,e){return t.eventCache.isCompleteForChild(e)}function YL(t,e,n,r,i,s,o){let a=e;return r.foreach((l,u)=>{const c=Ye(n,l);Hw(e,Z(c))&&(a=Fm(t,a,c,u,i,s,o))}),r.foreach((l,u)=>{const c=Ye(n,l);Hw(e,Z(c))||(a=Fm(t,a,c,u,i,s,o))}),a}function qw(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function Um(t,e,n,r,i,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,u;ee(n)?u=r:u=new Ie(null).setTree(n,r);const c=e.serverCache.getNode();return u.children.inorderTraversal((h,d)=>{if(c.hasChild(h)){const f=e.serverCache.getNode().getImmediateChild(h),p=qw(t,f,d);l=Ch(t,l,new we(h),p,i,s,o,a)}}),u.children.inorderTraversal((h,d)=>{const f=!e.serverCache.isCompleteForChild(h)&&d.value===null;if(!c.hasChild(h)&&!f){const p=e.serverCache.getNode().getImmediateChild(h),y=qw(t,p,d);l=Ch(t,l,new we(h),y,i,s,o,a)}}),l}function XL(t,e,n,r,i,s,o){if(wh(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(r.value!=null){if(ee(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Ch(t,e,n,l.getNode().getChild(n),i,s,a,o);if(ee(n)){let u=new Ie(null);return l.getNode().forEachChild(ro,(c,h)=>{u=u.set(new we(c),h)}),Um(t,e,n,u,i,s,a,o)}else return e}else{let u=new Ie(null);return r.foreach((c,h)=>{const d=Ye(n,c);l.isCompleteForPath(d)&&(u=u.set(c,l.getNode().getChild(d)))}),Um(t,e,n,u,i,s,a,o)}}function JL(t,e,n,r,i){const s=e.serverCache,o=LI(e,s.getNode(),s.isFullyInitialized()||ee(n),s.isFiltered());return WI(t,o,n,r,jI,i)}function ZL(t,e,n,r,i,s){let o;if(wh(r,n)!=null)return e;{const a=new Ky(r,e,i),l=e.eventCache.getNode();let u;if(ee(n)||Z(n)===".priority"){let c;if(e.serverCache.isFullyInitialized())c=_h(r,ss(e));else{const h=e.serverCache.getNode();A(h instanceof B,"serverChildren would be complete if leaf node"),c=Hy(r,h)}c=c,u=t.filter.updateFullNode(l,c,s)}else{const c=Z(n);let h=qy(r,c,e.serverCache);h==null&&e.serverCache.isCompleteForChild(c)&&(h=l.getImmediateChild(c)),h!=null?u=t.filter.updateChild(l,c,h,Ce(n),a,s):e.eventCache.getNode().hasChild(c)?u=t.filter.updateChild(l,c,B.EMPTY_NODE,Ce(n),a,s):u=l,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=_h(r,ss(e)),o.isLeafNode()&&(u=t.filter.updateFullNode(u,o,s)))}return o=e.serverCache.isFullyInitialized()||wh(r,ce())!=null,za(e,u,o,t.filter.filtersNodes())}}/**
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
 */class e2{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new zy(r.getIndex()),s=_L(r);this.processor_=qL(s);const o=n.serverCache,a=n.eventCache,l=i.updateFullNode(B.EMPTY_NODE,o.getNode(),null),u=s.updateFullNode(B.EMPTY_NODE,a.getNode(),null),c=new is(l,o.isFullyInitialized(),i.filtersNodes()),h=new is(u,a.isFullyInitialized(),s.filtersNodes());this.viewCache_=vd(h,c),this.eventGenerator_=new kL(this.query_)}get query(){return this.query_}}function t2(t){return t.viewCache_.serverCache.getNode()}function n2(t,e){const n=ss(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!ee(e)&&!n.getImmediateChild(Z(e)).isEmpty())?n.getChild(e):null}function Kw(t){return t.eventRegistrations_.length===0}function r2(t,e){t.eventRegistrations_.push(e)}function Gw(t,e,n){const r=[];if(n){A(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function Qw(t,e,n,r){e.type===Fn.MERGE&&e.source.queryId!==null&&(A(ss(t.viewCache_),"We should always have a full cache before handling merges"),A($m(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=GL(t.processor_,i,e,n,r);return KL(t.processor_,s.viewCache),A(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,HI(t,s.changes,s.viewCache.eventCache.getNode(),null)}function i2(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(Fe,(s,o)=>{r.push(Co(s,o))}),n.isFullyInitialized()&&r.push(DI(n.getNode())),HI(t,r,n.getNode(),e)}function HI(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return bL(t.eventGenerator_,e,n,i)}/**
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
 */let Eh;class s2{constructor(){this.views=new Map}}function o2(t){A(!Eh,"__referenceConstructor has already been defined"),Eh=t}function a2(){return A(Eh,"Reference.ts has not been loaded"),Eh}function l2(t){return t.views.size===0}function Gy(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return A(s!=null,"SyncTree gave us an op for an invalid query."),Qw(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(Qw(o,e,n,r));return s}}function u2(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let a=_h(n,i?r:null),l=!1;a?l=!0:r instanceof B?(a=Hy(n,r),l=!1):(a=B.EMPTY_NODE,l=!1);const u=vd(new is(a,l,!1),new is(r,i,!1));return new e2(e,u)}return o}function c2(t,e,n,r,i,s){const o=u2(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),r2(o,n),i2(o,n)}function h2(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const a=ai(t);if(i==="default")for(const[l,u]of t.views.entries())o=o.concat(Gw(u,n,r)),Kw(u)&&(t.views.delete(l),u.query._queryParams.loadsAllData()||s.push(u.query));else{const l=t.views.get(i);l&&(o=o.concat(Gw(l,n,r)),Kw(l)&&(t.views.delete(i),l.query._queryParams.loadsAllData()||s.push(l.query)))}return a&&!ai(t)&&s.push(new(a2())(e._repo,e._path)),{removed:s,events:o}}function qI(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function io(t,e){let n=null;for(const r of t.views.values())n=n||n2(r,e);return n}function KI(t,e){if(e._queryParams.loadsAllData())return _d(t);{const r=e._queryIdentifier;return t.views.get(r)}}function GI(t,e){return KI(t,e)!=null}function ai(t){return _d(t)!=null}function _d(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let Sh;function d2(t){A(!Sh,"__referenceConstructor has already been defined"),Sh=t}function f2(){return A(Sh,"Reference.ts has not been loaded"),Sh}let p2=1;class Yw{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Ie(null),this.pendingWriteTree_=BL(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function m2(t,e,n,r,i){return AL(t.pendingWriteTree_,e,n,r,i),i?tu(t,new rs(MI(),e,n)):[]}function Hs(t,e,n=!1){const r=PL(t.pendingWriteTree_,e);if(OL(t.pendingWriteTree_,e)){let s=new Ie(null);return r.snap!=null?s=s.set(ce(),!0):Jt(r.children,o=>{s=s.set(new we(o),!0)}),tu(t,new vh(r.path,s,n))}else return[]}function wd(t,e,n){return tu(t,new rs(By(),e,n))}function g2(t,e,n){const r=Ie.fromObject(n);return tu(t,new El(By(),e,r))}function y2(t,e){return tu(t,new Cl(By(),e))}function v2(t,e,n){const r=Qy(t,n);if(r){const i=Yy(r),s=i.path,o=i.queryId,a=qt(s,e),l=new Cl(jy(o),a);return Xy(t,s,l)}else return[]}function zm(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let a=[];if(o&&(e._queryIdentifier==="default"||GI(o,e))){const l=h2(o,e,n,r);l2(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const u=l.removed;if(a=l.events,!i){const c=u.findIndex(d=>d._queryParams.loadsAllData())!==-1,h=t.syncPointTree_.findOnPath(s,(d,f)=>ai(f));if(c&&!h){const d=t.syncPointTree_.subtree(s);if(!d.isEmpty()){const f=C2(d);for(let p=0;p<f.length;++p){const y=f[p],w=y.query,g=JI(t,y);t.listenProvider_.startListening(Ba(w),Th(t,w),g.hashFn,g.onComplete)}}}!h&&u.length>0&&!r&&(c?t.listenProvider_.stopListening(Ba(e),null):u.forEach(d=>{const f=t.queryToTagMap.get(Cd(d));t.listenProvider_.stopListening(Ba(d),f)}))}E2(t,u)}return a}function _2(t,e,n,r){const i=Qy(t,r);if(i!=null){const s=Yy(i),o=s.path,a=s.queryId,l=qt(o,e),u=new rs(jy(a),l,n);return Xy(t,o,u)}else return[]}function w2(t,e,n,r){const i=Qy(t,r);if(i){const s=Yy(i),o=s.path,a=s.queryId,l=qt(o,e),u=Ie.fromObject(n),c=new El(jy(a),l,u);return Xy(t,o,c)}else return[]}function Xw(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(d,f)=>{const p=qt(d,i);s=s||io(f,p),o=o||ai(f)});let a=t.syncPointTree_.get(i);a?(o=o||ai(a),s=s||io(a,ce())):(a=new s2,t.syncPointTree_=t.syncPointTree_.set(i,a));let l;s!=null?l=!0:(l=!1,s=B.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((f,p)=>{const y=io(p,ce());y&&(s=s.updateImmediateChild(f,y))}));const u=GI(a,e);if(!u&&!e._queryParams.loadsAllData()){const d=Cd(e);A(!t.queryToTagMap.has(d),"View does not exist, but we have a tag");const f=S2();t.queryToTagMap.set(d,f),t.tagToQueryMap.set(f,d)}const c=Wy(t.pendingWriteTree_,i);let h=c2(a,e,n,c,s,l);if(!u&&!o&&!r){const d=KI(a,e);h=h.concat(T2(t,e,d))}return h}function QI(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=qt(o,e),u=io(a,l);if(u)return u});return zI(i,e,s,n,!0)}function tu(t,e){return YI(e,t.syncPointTree_,null,Wy(t.pendingWriteTree_,ce()))}function YI(t,e,n,r){if(ee(t.path))return XI(t,e,n,r);{const i=e.get(ce());n==null&&i!=null&&(n=io(i,ce()));let s=[];const o=Z(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const u=n?n.getImmediateChild(o):null,c=VI(r,o);s=s.concat(YI(a,l,u,c))}return i&&(s=s.concat(Gy(i,t,r,n))),s}}function XI(t,e,n,r){const i=e.get(ce());n==null&&i!=null&&(n=io(i,ce()));let s=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,u=VI(r,o),c=t.operationForChild(o);c&&(s=s.concat(XI(c,a,l,u)))}),i&&(s=s.concat(Gy(i,t,r,n))),s}function JI(t,e){const n=e.query,r=Th(t,n);return{hashFn:()=>(t2(e)||B.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?v2(t,n._path,r):y2(t,n._path);{const s=yM(i,n);return zm(t,n,null,s)}}}}function Th(t,e){const n=Cd(e);return t.queryToTagMap.get(n)}function Cd(t){return t._path.toString()+"$"+t._queryIdentifier}function Qy(t,e){return t.tagToQueryMap.get(e)}function Yy(t){const e=t.indexOf("$");return A(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new we(t.substr(0,e))}}function Xy(t,e,n){const r=t.syncPointTree_.get(e);A(r,"Missing sync point for query tag that we're tracking");const i=Wy(t.pendingWriteTree_,e);return Gy(r,n,i,null)}function C2(t){return t.fold((e,n,r)=>{if(n&&ai(n))return[_d(n)];{let i=[];return n&&(i=qI(n)),Jt(r,(s,o)=>{i=i.concat(o)}),i}})}function Ba(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(f2())(t._repo,t._path):t}function E2(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=Cd(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function S2(){return p2++}function T2(t,e,n){const r=e._path,i=Th(t,e),s=JI(t,n),o=t.listenProvider_.startListening(Ba(e),i,s.hashFn,s.onComplete),a=t.syncPointTree_.subtree(r);if(i)A(!ai(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((u,c,h)=>{if(!ee(u)&&c&&ai(c))return[_d(c).query];{let d=[];return c&&(d=d.concat(qI(c).map(f=>f.query))),Jt(h,(f,p)=>{d=d.concat(p)}),d}});for(let u=0;u<l.length;++u){const c=l[u];t.listenProvider_.stopListening(Ba(c),Th(t,c))}}return o}/**
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
 */class Jy{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Jy(n)}node(){return this.node_}}class Zy{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Ye(this.path_,e);return new Zy(this.syncTree_,n)}node(){return QI(this.syncTree_,this.path_)}}const I2=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Jw=function(t,e,n){if(!t||typeof t!="object")return t;if(A(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return k2(t[".sv"],e,n);if(typeof t[".sv"]=="object")return b2(t[".sv"],e);A(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},k2=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:A(!1,"Unexpected server value: "+t)}},b2=function(t,e,n){t.hasOwnProperty("increment")||A(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&A(!1,"Unexpected increment value: "+r);const i=e.node();if(A(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},x2=function(t,e,n,r){return ev(e,new Zy(n,t),r)},R2=function(t,e,n){return ev(t,new Jy(e),n)};function ev(t,e,n){const r=t.getPriority().val(),i=Jw(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,a=Jw(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new nt(a,xt(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new nt(i))),o.forEachChild(Fe,(a,l)=>{const u=ev(l,e.getImmediateChild(a),n);u!==l&&(s=s.updateImmediateChild(a,u))}),s}}/**
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
 */class tv{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function nv(t,e){let n=e instanceof we?e:new we(e),r=t,i=Z(n);for(;i!==null;){const s=vo(r.node.children,i)||{children:{},childCount:0};r=new tv(i,r,s),n=Ce(n),i=Z(n)}return r}function Bo(t){return t.node.value}function ZI(t,e){t.node.value=e,Vm(t)}function ek(t){return t.node.childCount>0}function N2(t){return Bo(t)===void 0&&!ek(t)}function Ed(t,e){Jt(t.node.children,(n,r)=>{e(new tv(n,t,r))})}function tk(t,e,n,r){n&&!r&&e(t),Ed(t,i=>{tk(i,e,!0,r)}),n&&r&&e(t)}function A2(t,e,n){let r=n?t:t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function nu(t){return new we(t.parent===null?t.name:nu(t.parent)+"/"+t.name)}function Vm(t){t.parent!==null&&P2(t.parent,t.name,t)}function P2(t,e,n){const r=N2(n),i=Ar(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,Vm(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,Vm(t))}/**
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
 */const O2=/[\[\].#$\/\u0000-\u001F\u007F]/,D2=/[\[\].#$\u0000-\u001F\u007F]/,rp=10*1024*1024,nk=function(t){return typeof t=="string"&&t.length!==0&&!O2.test(t)},rk=function(t){return typeof t=="string"&&t.length!==0&&!D2.test(t)},$2=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),rk(t)},ik=function(t,e,n){const r=n instanceof we?new XM(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+bi(r));if(typeof e=="function")throw new Error(t+"contains a function "+bi(r)+" with contents = "+e.toString());if(sI(e))throw new Error(t+"contains "+e.toString()+" "+bi(r));if(typeof e=="string"&&e.length>rp/3&&dd(e)>rp)throw new Error(t+"contains a string greater than "+rp+" utf8 bytes "+bi(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(Jt(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!nk(o)))throw new Error(t+" contains an invalid key ("+o+") "+bi(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);JM(r,o),ik(t,a,r),ZM(r)}),i&&s)throw new Error(t+' contains ".value" child '+bi(r)+" in addition to actual children.")}},sk=function(t,e,n,r){if(!(r&&n===void 0)&&!rk(n))throw new Error(wT(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},M2=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),sk(t,e,n,r)},L2=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!nk(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!$2(n))throw new Error(wT(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class F2{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function ok(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!Ly(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function ak(t,e,n){ok(t,n),lk(t,r=>Ly(r,e))}function vs(t,e,n){ok(t,n),lk(t,r=>Ln(r,e)||Ln(e,r))}function lk(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(U2(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function U2(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();ji&&bt("event: "+n.toString()),Zl(r)}}}/**
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
 */const z2="repo_interrupt",V2=25;class B2{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new F2,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=yh(),this.transactionQueueTree_=new tv,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function j2(t,e,n){if(t.stats_=$y(t.repoInfo_),t.forceRestClient_||CM())t.server_=new gh(t.repoInfo_,(r,i,s,o)=>{Zw(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>e1(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{at(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new yr(t.repoInfo_,e,(r,i,s,o)=>{Zw(t,r,i,s,o)},r=>{e1(t,r)},r=>{H2(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=bM(t.repoInfo_,()=>new IL(t.stats_,t.server_)),t.infoData_=new wL,t.infoSyncTree_=new Yw({startListening:(r,i,s,o)=>{let a=[];const l=t.infoData_.getNode(r._path);return l.isEmpty()||(a=wd(t.infoSyncTree_,r._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),rv(t,"connected",!1),t.serverSyncTree_=new Yw({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(a,l)=>{const u=o(a,l);vs(t.eventQueue_,r._path,u)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function W2(t){const n=t.infoData_.getNode(new we(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function uk(t){return I2({timestamp:W2(t)})}function Zw(t,e,n,r,i){t.dataUpdateCount++;const s=new we(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const l=ah(n,u=>xt(u));o=w2(t.serverSyncTree_,s,l,i)}else{const l=xt(n);o=_2(t.serverSyncTree_,s,l,i)}else if(r){const l=ah(n,u=>xt(u));o=g2(t.serverSyncTree_,s,l)}else{const l=xt(n);o=wd(t.serverSyncTree_,s,l)}let a=s;o.length>0&&(a=sv(t,s)),vs(t.eventQueue_,a,o)}function e1(t,e){rv(t,"connected",e),e===!1&&K2(t)}function H2(t,e){Jt(e,(n,r)=>{rv(t,n,r)})}function rv(t,e,n){const r=new we("/.info/"+e),i=xt(n);t.infoData_.updateSnapshot(r,i);const s=wd(t.infoSyncTree_,r,i);vs(t.eventQueue_,r,s)}function q2(t){return t.nextWriteId_++}function K2(t){ck(t,"onDisconnectEvents");const e=uk(t),n=yh();Dm(t.onDisconnect_,ce(),(i,s)=>{const o=x2(i,s,t.serverSyncTree_,e);$I(n,i,o)});let r=[];Dm(n,ce(),(i,s)=>{r=r.concat(wd(t.serverSyncTree_,i,s));const o=J2(t,i);sv(t,o)}),t.onDisconnect_=yh(),vs(t.eventQueue_,ce(),r)}function G2(t,e,n){let r;Z(e._path)===".info"?r=Xw(t.infoSyncTree_,e,n):r=Xw(t.serverSyncTree_,e,n),ak(t.eventQueue_,e._path,r)}function t1(t,e,n){let r;Z(e._path)===".info"?r=zm(t.infoSyncTree_,e,n):r=zm(t.serverSyncTree_,e,n),ak(t.eventQueue_,e._path,r)}function Q2(t){t.persistentConnection_&&t.persistentConnection_.interrupt(z2)}function ck(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),bt(n,...e)}function hk(t,e,n){return QI(t.serverSyncTree_,e,n)||B.EMPTY_NODE}function iv(t,e=t.transactionQueueTree_){if(e||Sd(t,e),Bo(e)){const n=fk(t,e);A(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&Y2(t,nu(e),n)}else ek(e)&&Ed(e,n=>{iv(t,n)})}function Y2(t,e,n){const r=n.map(u=>u.currentWriteId),i=hk(t,e,r);let s=i;const o=i.hash();for(let u=0;u<n.length;u++){const c=n[u];A(c.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),c.status=1,c.retryCount++;const h=qt(e,c.path);s=s.updateChild(h,c.currentOutputSnapshotRaw)}const a=s.val(!0),l=e;t.server_.put(l.toString(),a,u=>{ck(t,"transaction put response",{path:l.toString(),status:u});let c=[];if(u==="ok"){const h=[];for(let d=0;d<n.length;d++)n[d].status=2,c=c.concat(Hs(t.serverSyncTree_,n[d].currentWriteId)),n[d].onComplete&&h.push(()=>n[d].onComplete(null,!0,n[d].currentOutputSnapshotResolved)),n[d].unwatcher();Sd(t,nv(t.transactionQueueTree_,e)),iv(t,t.transactionQueueTree_),vs(t.eventQueue_,e,c);for(let d=0;d<h.length;d++)Zl(h[d])}else{if(u==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{ln("transaction at "+l.toString()+" failed: "+u);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=u}sv(t,e)}},o)}function sv(t,e){const n=dk(t,e),r=nu(n),i=fk(t,n);return X2(t,i,r),r}function X2(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],u=qt(n,l.path);let c=!1,h;if(A(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)c=!0,h=l.abortReason,i=i.concat(Hs(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=V2)c=!0,h="maxretry",i=i.concat(Hs(t.serverSyncTree_,l.currentWriteId,!0));else{const d=hk(t,l.path,o);l.currentInputSnapshot=d;const f=e[a].update(d.val());if(f!==void 0){ik("transaction failed: Data returned ",f,l.path);let p=xt(f);typeof f=="object"&&f!=null&&Ar(f,".priority")||(p=p.updatePriority(d.getPriority()));const w=l.currentWriteId,g=uk(t),m=R2(p,d,g);l.currentOutputSnapshotRaw=p,l.currentOutputSnapshotResolved=m,l.currentWriteId=q2(t),o.splice(o.indexOf(w),1),i=i.concat(m2(t.serverSyncTree_,l.path,m,l.currentWriteId,l.applyLocally)),i=i.concat(Hs(t.serverSyncTree_,w,!0))}else c=!0,h="nodata",i=i.concat(Hs(t.serverSyncTree_,l.currentWriteId,!0))}vs(t.eventQueue_,n,i),i=[],c&&(e[a].status=2,function(d){setTimeout(d,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(h),!1,null))))}Sd(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)Zl(r[a]);iv(t,t.transactionQueueTree_)}function dk(t,e){let n,r=t.transactionQueueTree_;for(n=Z(e);n!==null&&Bo(r)===void 0;)r=nv(r,n),e=Ce(e),n=Z(e);return r}function fk(t,e){const n=[];return pk(t,e,n),n.sort((r,i)=>r.order-i.order),n}function pk(t,e,n){const r=Bo(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);Ed(e,i=>{pk(t,i,n)})}function Sd(t,e){const n=Bo(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,ZI(e,n.length>0?n:void 0)}Ed(e,r=>{Sd(t,r)})}function J2(t,e){const n=nu(dk(t,e)),r=nv(t.transactionQueueTree_,e);return A2(r,i=>{ip(t,i)}),ip(t,r),tk(r,i=>{ip(t,i)}),n}function ip(t,e){const n=Bo(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(A(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(A(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(Hs(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?ZI(e,void 0):n.length=s+1,vs(t.eventQueue_,nu(e),i);for(let o=0;o<r.length;o++)Zl(r[o])}}/**
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
 */function Z2(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function eF(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):ln(`Invalid query segment '${n}' in query '${t}'`)}return e}const n1=function(t,e){const n=tF(t),r=n.namespace;n.domain==="firebase.com"&&ts(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&ts("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||dM();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new TM(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new we(n.pathString)}},tF=function(t){let e="",n="",r="",i="",s="",o=!0,a="https",l=443;if(typeof t=="string"){let u=t.indexOf("//");u>=0&&(a=t.substring(0,u-1),t=t.substring(u+2));let c=t.indexOf("/");c===-1&&(c=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(c,h)),c<h&&(i=Z2(t.substring(c,h)));const d=eF(t.substring(Math.min(t.length,h)));u=e.indexOf(":"),u>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(u+1),10)):u=e.length;const f=e.slice(0,u);if(f.toLowerCase()==="localhost")n="localhost";else if(f.split(".").length<=2)n=f;else{const p=e.indexOf(".");r=e.substring(0,p).toLowerCase(),n=e.substring(p+1),s=r}"ns"in d&&(s=d.ns)}return{host:e,port:l,domain:n,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}};/**
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
 */class mk{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+at(this.snapshot.exportVal())}}class gk{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class nF{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return A(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class ov{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return ee(this._path)?null:II(this._path)}get ref(){return new Pr(this._repo,this._path)}get _queryIdentifier(){const e=Uw(this._queryParams),n=Oy(e);return n==="{}"?"default":n}get _queryObject(){return Uw(this._queryParams)}isEqual(e){if(e=ct(e),!(e instanceof ov))return!1;const n=this._repo===e._repo,r=Ly(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+YM(this._path)}}class Pr extends ov{constructor(e,n){super(e,n,new Vy,!1)}get parent(){const e=bI(this._path);return e===null?null:new Pr(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Sl{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new we(e),r=Bm(this.ref,e);return new Sl(this._node.getChild(n),r,Fe)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new Sl(i,Bm(this.ref,r),Fe)))}hasChild(e){const n=new we(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Bm(t,e){return t=ct(t),Z(t._path)===null?M2("child","path",e,!1):sk("child","path",e,!1),new Pr(t._repo,Ye(t._path,e))}class av{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new mk("value",this,new Sl(e.snapshotNode,new Pr(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new gk(this,e,n):null}matches(e){return e instanceof av?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class lv{constructor(e,n){this.eventType=e,this.callbackContext=n}respondsTo(e){let n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new gk(this,e,n):null}createEvent(e,n){A(e.childName!=null,"Child events should have a childName.");const r=Bm(new Pr(n._repo,n._path),e.childName),i=n._queryParams.getIndex();return new mk(e.type,this,new Sl(e.snapshotNode,r,i),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof lv?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function ru(t,e,n,r,i){let s;if(typeof r=="object"&&(s=void 0,i=r),typeof r=="function"&&(s=r),i&&i.onlyOnce){const l=n,u=(c,h)=>{t1(t._repo,t,a),l(c,h)};u.userCallback=n.userCallback,u.context=n.context,n=u}const o=new nF(n,s||void 0),a=e==="value"?new av(o):new lv(e,o);return G2(t._repo,t,a),()=>t1(t._repo,t,a)}function rF(t,e,n,r){return ru(t,"value",e,n,r)}function iF(t,e,n,r){return ru(t,"child_added",e,n,r)}function sF(t,e,n,r){return ru(t,"child_changed",e,n,r)}function oF(t,e,n,r){return ru(t,"child_moved",e,n,r)}function aF(t,e,n,r){return ru(t,"child_removed",e,n,r)}o2(Pr);d2(Pr);/**
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
 */const lF="FIREBASE_DATABASE_EMULATOR_HOST",jm={};let uF=!1;function cF(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||ts("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),bt("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=n1(s,i),a=o.repoInfo,l,u;typeof process<"u"&&process.env&&(u=process.env[lF]),u?(l=!0,s=`http://${u}?ns=${a.namespace}`,o=n1(s,i),a=o.repoInfo):l=!o.repoInfo.secure;const c=i&&l?new Am(Am.OWNER):new SM(t.name,t.options,e);L2("Invalid Firebase Database URL",o),ee(o.path)||ts("Database URL must point to the root of a Firebase Database (not including a child path).");const h=dF(a,t,c,new EM(t.name,n));return new fF(h,t)}function hF(t,e){const n=jm[e];(!n||n[t.key]!==t)&&ts(`Database ${e}(${t.repoInfo_}) has already been deleted.`),Q2(t),delete n[t.key]}function dF(t,e,n,r){let i=jm[e.name];i||(i={},jm[e.name]=i);let s=i[t.toURLString()];return s&&ts("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new B2(t,uF,n,r),i[t.toURLString()]=s,s}class fF{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(j2(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Pr(this._repo,ce())),this._rootInternal}_delete(){return this._rootInternal!==null&&(hF(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&ts("Cannot call "+e+" on a deleted database.")}}function pF(t=Sy(),e){return zo(t,"database").getImmediate({identifier:e})}/**
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
 */function mF(t){aM(mi),Rn(new hn("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return cF(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),Ke(Ew,Sw,t),Ke(Ew,Sw,"esm2017")}yr.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};yr.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};mF();var gF="firebase",yF="9.9.4";/**
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
 */Ke(gF,yF,"app");var vF=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},D,uv=uv||{},W=vF||self;function Ih(){}function Wm(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function iu(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function _F(t){return Object.prototype.hasOwnProperty.call(t,sp)&&t[sp]||(t[sp]=++wF)}var sp="closure_uid_"+(1e9*Math.random()>>>0),wF=0;function CF(t,e,n){return t.call.apply(t.bind,arguments)}function EF(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function vt(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?vt=CF:vt=EF,vt.apply(null,arguments)}function Yu(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function Et(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function gi(){this.s=this.s,this.o=this.o}var SF=0;gi.prototype.s=!1;gi.prototype.na=function(){!this.s&&(this.s=!0,this.M(),SF!=0)&&_F(this)};gi.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const yk=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},vk=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){const r=t.length,i=typeof t=="string"?t.split(""):t;for(let s=0;s<r;s++)s in i&&e.call(n,i[s],s,t)};function TF(t){e:{var e=mU;const n=t.length,r=typeof t=="string"?t.split(""):t;for(let i=0;i<n;i++)if(i in r&&e.call(void 0,r[i],i,t)){e=i;break e}e=-1}return 0>e?null:typeof t=="string"?t.charAt(e):t[e]}function r1(t){return Array.prototype.concat.apply([],arguments)}function cv(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function kh(t){return/^[\s\xa0]*$/.test(t)}var i1=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Ot(t,e){return t.indexOf(e)!=-1}function op(t,e){return t<e?-1:t>e?1:0}var Dt;e:{var s1=W.navigator;if(s1){var o1=s1.userAgent;if(o1){Dt=o1;break e}}Dt=""}function hv(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function _k(t){const e={};for(const n in t)e[n]=t[n];return e}var a1="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function wk(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<a1.length;s++)n=a1[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function dv(t){return dv[" "](t),t}dv[" "]=Ih;function IF(t){var e=xF;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var kF=Ot(Dt,"Opera"),So=Ot(Dt,"Trident")||Ot(Dt,"MSIE"),Ck=Ot(Dt,"Edge"),Hm=Ck||So,Ek=Ot(Dt,"Gecko")&&!(Ot(Dt.toLowerCase(),"webkit")&&!Ot(Dt,"Edge"))&&!(Ot(Dt,"Trident")||Ot(Dt,"MSIE"))&&!Ot(Dt,"Edge"),bF=Ot(Dt.toLowerCase(),"webkit")&&!Ot(Dt,"Edge");function Sk(){var t=W.document;return t?t.documentMode:void 0}var bh;e:{var ap="",lp=function(){var t=Dt;if(Ek)return/rv:([^\);]+)(\)|;)/.exec(t);if(Ck)return/Edge\/([\d\.]+)/.exec(t);if(So)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(bF)return/WebKit\/(\S+)/.exec(t);if(kF)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(lp&&(ap=lp?lp[1]:""),So){var up=Sk();if(up!=null&&up>parseFloat(ap)){bh=String(up);break e}}bh=ap}var xF={};function RF(){return IF(function(){let t=0;const e=i1(String(bh)).split("."),n=i1("9").split("."),r=Math.max(e.length,n.length);for(let o=0;t==0&&o<r;o++){var i=e[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i[0].length==0&&s[0].length==0)break;t=op(i[1].length==0?0:parseInt(i[1],10),s[1].length==0?0:parseInt(s[1],10))||op(i[2].length==0,s[2].length==0)||op(i[2],s[2]),i=i[3],s=s[3]}while(t==0)}return 0<=t})}var qm;if(W.document&&So){var l1=Sk();qm=l1||parseInt(bh,10)||void 0}else qm=void 0;var NF=qm,AF=function(){if(!W.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{W.addEventListener("test",Ih,e),W.removeEventListener("test",Ih,e)}catch{}return t}();function Nt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Nt.prototype.h=function(){this.defaultPrevented=!0};function Tl(t,e){if(Nt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Ek){e:{try{dv(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:PF[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Tl.Z.h.call(this)}}Et(Tl,Nt);var PF={2:"touch",3:"pen",4:"mouse"};Tl.prototype.h=function(){Tl.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var su="closure_listenable_"+(1e6*Math.random()|0),OF=0;function DF(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ia=i,this.key=++OF,this.ca=this.fa=!1}function Td(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function Id(t){this.src=t,this.g={},this.h=0}Id.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=Gm(t,e,r,i);return-1<o?(e=t[o],n||(e.fa=!1)):(e=new DF(e,this.src,s,!!r,i),e.fa=n,t.push(e)),e};function Km(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=yk(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(Td(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Gm(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.ca&&s.listener==e&&s.capture==!!n&&s.ia==r)return i}return-1}var fv="closure_lm_"+(1e6*Math.random()|0),cp={};function Tk(t,e,n,r,i){if(r&&r.once)return kk(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)Tk(t,e[s],n,r,i);return null}return n=gv(n),t&&t[su]?t.N(e,n,iu(r)?!!r.capture:!!r,i):Ik(t,e,n,!1,r,i)}function Ik(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=iu(i)?!!i.capture:!!i,a=mv(t);if(a||(t[fv]=a=new Id(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=$F(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)AF||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(xk(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function $F(){function t(n){return e.call(t.src,t.listener,n)}var e=MF;return t}function kk(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)kk(t,e[s],n,r,i);return null}return n=gv(n),t&&t[su]?t.O(e,n,iu(r)?!!r.capture:!!r,i):Ik(t,e,n,!0,r,i)}function bk(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)bk(t,e[s],n,r,i);else r=iu(r)?!!r.capture:!!r,n=gv(n),t&&t[su]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=Gm(s,n,r,i),-1<n&&(Td(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=mv(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Gm(e,n,r,i)),(n=-1<t?e[t]:null)&&pv(n))}function pv(t){if(typeof t!="number"&&t&&!t.ca){var e=t.src;if(e&&e[su])Km(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(xk(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=mv(e))?(Km(n,t),n.h==0&&(n.src=null,e[fv]=null)):Td(t)}}}function xk(t){return t in cp?cp[t]:cp[t]="on"+t}function MF(t,e){if(t.ca)t=!0;else{e=new Tl(e,this);var n=t.listener,r=t.ia||t.src;t.fa&&pv(t),t=n.call(r,e)}return t}function mv(t){return t=t[fv],t instanceof Id?t:null}var hp="__closure_events_fn_"+(1e9*Math.random()>>>0);function gv(t){return typeof t=="function"?t:(t[hp]||(t[hp]=function(e){return t.handleEvent(e)}),t[hp])}function ht(){gi.call(this),this.i=new Id(this),this.P=this,this.I=null}Et(ht,gi);ht.prototype[su]=!0;ht.prototype.removeEventListener=function(t,e,n,r){bk(this,t,e,n,r)};function _t(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,typeof e=="string")e=new Nt(e,t);else if(e instanceof Nt)e.target=e.target||t;else{var i=e;e=new Nt(r,t),wk(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=Xu(o,r,!0,e)&&i}if(o=e.g=t,i=Xu(o,r,!0,e)&&i,i=Xu(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=Xu(o,r,!1,e)&&i}ht.prototype.M=function(){if(ht.Z.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Td(n[r]);delete t.g[e],t.h--}}this.I=null};ht.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};ht.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function Xu(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.ca&&o.capture==n){var a=o.listener,l=o.ia||o.src;o.fa&&Km(t.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var yv=W.JSON.stringify;function LF(){var t=Nk;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class FF{constructor(){this.h=this.g=null}add(e,n){const r=Rk.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var Rk=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new UF,t=>t.reset());class UF{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function zF(t){W.setTimeout(()=>{throw t},0)}function vv(t,e){Qm||VF(),Ym||(Qm(),Ym=!0),Nk.add(t,e)}var Qm;function VF(){var t=W.Promise.resolve(void 0);Qm=function(){t.then(BF)}}var Ym=!1,Nk=new FF;function BF(){for(var t;t=LF();){try{t.h.call(t.g)}catch(n){zF(n)}var e=Rk;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Ym=!1}function kd(t,e){ht.call(this),this.h=t||1,this.g=e||W,this.j=vt(this.kb,this),this.l=Date.now()}Et(kd,ht);D=kd.prototype;D.da=!1;D.S=null;D.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),_t(this,"tick"),this.da&&(_v(this),this.start()))}};D.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function _v(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}D.M=function(){kd.Z.M.call(this),_v(this),delete this.g};function wv(t,e,n){if(typeof t=="function")n&&(t=vt(t,n));else if(t&&typeof t.handleEvent=="function")t=vt(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:W.setTimeout(t,e||0)}function Ak(t){t.g=wv(()=>{t.g=null,t.i&&(t.i=!1,Ak(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class jF extends gi{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Ak(this)}M(){super.M(),this.g&&(W.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Il(t){gi.call(this),this.h=t,this.g={}}Et(Il,gi);var u1=[];function Pk(t,e,n,r){Array.isArray(n)||(n&&(u1[0]=n.toString()),n=u1);for(var i=0;i<n.length;i++){var s=Tk(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function Ok(t){hv(t.g,function(e,n){this.g.hasOwnProperty(n)&&pv(e)},t),t.g={}}Il.prototype.M=function(){Il.Z.M.call(this),Ok(this)};Il.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function bd(){this.g=!0}bd.prototype.Aa=function(){this.g=!1};function WF(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var h=c.split("_");o=2<=h.length&&h[1]=="type"?o+(c+"="+u+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function HF(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function qs(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+KF(t,n)+(r?" "+r:"")})}function qF(t,e){t.info(function(){return"TIMEOUT: "+e})}bd.prototype.info=function(){};function KF(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return yv(n)}catch{return e}}var _s={},c1=null;function xd(){return c1=c1||new ht}_s.Ma="serverreachability";function Dk(t){Nt.call(this,_s.Ma,t)}Et(Dk,Nt);function kl(t){const e=xd();_t(e,new Dk(e))}_s.STAT_EVENT="statevent";function $k(t,e){Nt.call(this,_s.STAT_EVENT,t),this.stat=e}Et($k,Nt);function $t(t){const e=xd();_t(e,new $k(e,t))}_s.Na="timingevent";function Mk(t,e){Nt.call(this,_s.Na,t),this.size=e}Et(Mk,Nt);function ou(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return W.setTimeout(function(){t()},e)}var Rd={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},Lk={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function Cv(){}Cv.prototype.h=null;function h1(t){return t.h||(t.h=t.i())}function Fk(){}var au={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function Ev(){Nt.call(this,"d")}Et(Ev,Nt);function Sv(){Nt.call(this,"c")}Et(Sv,Nt);var Xm;function Nd(){}Et(Nd,Cv);Nd.prototype.g=function(){return new XMLHttpRequest};Nd.prototype.i=function(){return{}};Xm=new Nd;function lu(t,e,n,r){this.l=t,this.j=e,this.m=n,this.X=r||1,this.V=new Il(this),this.P=GF,t=Hm?125:void 0,this.W=new kd(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new Uk}function Uk(){this.i=null,this.g="",this.h=!1}var GF=45e3,Jm={},xh={};D=lu.prototype;D.setTimeout=function(t){this.P=t};function Zm(t,e,n){t.K=1,t.v=Pd(kr(e)),t.s=n,t.U=!0,zk(t,null)}function zk(t,e){t.F=Date.now(),uu(t),t.A=kr(t.v);var n=t.A,r=t.X;Array.isArray(r)||(r=[String(r)]),Kk(n.h,"t",r),t.C=0,n=t.l.H,t.h=new Uk,t.g=fb(t.l,n?e:null,!t.s),0<t.O&&(t.L=new jF(vt(t.Ia,t,t.g),t.O)),Pk(t.V,t.g,"readystatechange",t.gb),e=t.H?_k(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),kl(),WF(t.j,t.u,t.A,t.m,t.X,t.s)}D.gb=function(t){t=t.target;const e=this.L;e&&mr(t)==3?e.l():this.Ia(t)};D.Ia=function(t){try{if(t==this.g)e:{const c=mr(this.g);var e=this.g.Da();const h=this.g.ba();if(!(3>c)&&(c!=3||Hm||this.g&&(this.h.h||this.g.ga()||m1(this.g)))){this.I||c!=4||e==7||(e==8||0>=h?kl(3):kl(2)),Ad(this);var n=this.g.ba();this.N=n;t:if(Vk(this)){var r=m1(this.g);t="";var i=r.length,s=mr(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){$i(this),ja(this);var o="";break t}this.h.i=new W.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=n==200,HF(this.j,this.u,this.A,this.m,this.X,c,n),this.i){if(this.$&&!this.J){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!kh(a)){var u=a;break t}}u=null}if(n=u)qs(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,eg(this,n);else{this.i=!1,this.o=3,$t(12),$i(this),ja(this);break e}}this.U?(Bk(this,c,o),Hm&&this.i&&c==3&&(Pk(this.V,this.W,"tick",this.fb),this.W.start())):(qs(this.j,this.m,o,null),eg(this,o)),c==4&&$i(this),this.i&&!this.I&&(c==4?ub(this.l,this):(this.i=!1,uu(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,$t(12)):(this.o=0,$t(13)),$i(this),ja(this)}}}catch{}finally{}};function Vk(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Ba:!1}function Bk(t,e,n){let r=!0,i;for(;!t.I&&t.C<n.length;)if(i=QF(t,n),i==xh){e==4&&(t.o=4,$t(14),r=!1),qs(t.j,t.m,null,"[Incomplete Response]");break}else if(i==Jm){t.o=4,$t(15),qs(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else qs(t.j,t.m,i,null),eg(t,i);Vk(t)&&i!=xh&&i!=Jm&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,$t(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.aa&&(t.aa=!0,e=t.l,e.g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),Pv(e),e.L=!0,$t(11))):(qs(t.j,t.m,n,"[Invalid Chunked Response]"),$i(t),ja(t))}D.fb=function(){if(this.g){var t=mr(this.g),e=this.g.ga();this.C<e.length&&(Ad(this),Bk(this,t,e),this.i&&t!=4&&uu(this))}};function QF(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?xh:(n=Number(e.substring(n,r)),isNaN(n)?Jm:(r+=1,r+n>e.length?xh:(e=e.substr(r,n),t.C=r+n,e)))}D.cancel=function(){this.I=!0,$i(this)};function uu(t){t.Y=Date.now()+t.P,jk(t,t.P)}function jk(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=ou(vt(t.eb,t),e)}function Ad(t){t.B&&(W.clearTimeout(t.B),t.B=null)}D.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(qF(this.j,this.A),this.K!=2&&(kl(),$t(17)),$i(this),this.o=2,ja(this)):jk(this,this.Y-t)};function ja(t){t.l.G==0||t.I||ub(t.l,t)}function $i(t){Ad(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,_v(t.W),Ok(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function eg(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||tg(n.i,t))){if(n.I=t.N,!t.J&&tg(n.i,t)&&n.G==3){try{var r=n.Ca.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)Ph(n),$d(n);else break e;Av(n),$t(18)}}else n.ta=i[1],0<n.ta-n.U&&37500>i[2]&&n.N&&n.A==0&&!n.v&&(n.v=ou(vt(n.ab,n),6e3));if(1>=Yk(n.i)&&n.ka){try{n.ka()}catch{}n.ka=void 0}}else Mi(n,11)}else if((t.J||n.g==t)&&Ph(n),!kh(e))for(i=n.Ca.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.U=u[0],u=u[1],n.G==2)if(u[0]=="c"){n.J=u[1],n.la=u[2];const c=u[3];c!=null&&(n.ma=c,n.h.info("VER="+n.ma));const h=u[4];h!=null&&(n.za=h,n.h.info("SVER="+n.za));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.K=r,n.h.info("backChannelRequestTimeoutMs_="+r)),r=n;const f=t.g;if(f){const p=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(p){var s=r.i;!s.g&&(Ot(p,"spdy")||Ot(p,"quic")||Ot(p,"h2"))&&(s.j=s.l,s.g=new Set,s.h&&(kv(s,s.h),s.h=null))}if(r.D){const y=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;y&&(r.sa=y,Ne(r.F,r.D,y))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms")),r=n;var o=t;if(r.oa=db(r,r.H?r.la:null,r.W),o.J){Xk(r.i,o);var a=o,l=r.K;l&&a.setTimeout(l),a.B&&(Ad(a),uu(a)),r.g=o}else ab(r);0<n.l.length&&Md(n)}else u[0]!="stop"&&u[0]!="close"||Mi(n,7);else n.G==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?Mi(n,7):Nv(n):u[0]!="noop"&&n.j&&n.j.wa(u),n.A=0)}}kl(4)}catch{}}function YF(t){if(t.R&&typeof t.R=="function")return t.R();if(typeof t=="string")return t.split("");if(Wm(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function Tv(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Wm(t)||typeof t=="string")vk(t,e,void 0);else{if(t.T&&typeof t.T=="function")var n=t.T();else if(t.R&&typeof t.R=="function")n=void 0;else if(Wm(t)||typeof t=="string"){n=[];for(var r=t.length,i=0;i<r;i++)n.push(i)}else for(i in n=[],r=0,t)n[r++]=i;r=YF(t),i=r.length;for(var s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}}function jo(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var r=0;r<n;r+=2)this.set(arguments[r],arguments[r+1])}else if(t)if(t instanceof jo)for(n=t.T(),r=0;r<n.length;r++)this.set(n[r],t.get(n[r]));else for(r in t)this.set(r,t[r])}D=jo.prototype;D.R=function(){Iv(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t};D.T=function(){return Iv(this),this.g.concat()};function Iv(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var r=t.g[e];os(t.h,r)&&(t.g[n++]=r),e++}t.g.length=n}if(t.i!=t.g.length){var i={};for(n=e=0;e<t.g.length;)r=t.g[e],os(i,r)||(t.g[n++]=r,i[r]=1),e++;t.g.length=n}}D.get=function(t,e){return os(this.h,t)?this.h[t]:e};D.set=function(t,e){os(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e};D.forEach=function(t,e){for(var n=this.T(),r=0;r<n.length;r++){var i=n[r],s=this.get(i);t.call(e,s,i,this)}};function os(t,e){return Object.prototype.hasOwnProperty.call(t,e)}var Wk=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function XF(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function as(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof as){this.g=e!==void 0?e:t.g,Rh(this,t.j),this.s=t.s,Nh(this,t.i),Ah(this,t.m),this.l=t.l,e=t.h;var n=new bl;n.i=e.i,e.g&&(n.g=new jo(e.g),n.h=e.h),d1(this,n),this.o=t.o}else t&&(n=String(t).match(Wk))?(this.g=!!e,Rh(this,n[1]||"",!0),this.s=Wa(n[2]||""),Nh(this,n[3]||"",!0),Ah(this,n[4]),this.l=Wa(n[5]||"",!0),d1(this,n[6]||"",!0),this.o=Wa(n[7]||"")):(this.g=!!e,this.h=new bl(null,this.g))}as.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Ta(e,f1,!0),":");var n=this.i;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Ta(e,f1,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.i&&n.charAt(0)!="/"&&t.push("/"),t.push(Ta(n,n.charAt(0)=="/"?nU:tU,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Ta(n,iU)),t.join("")};function kr(t){return new as(t)}function Rh(t,e,n){t.j=n?Wa(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Nh(t,e,n){t.i=n?Wa(e,!0):e}function Ah(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function d1(t,e,n){e instanceof bl?(t.h=e,sU(t.h,t.g)):(n||(e=Ta(e,rU)),t.h=new bl(e,t.g))}function Ne(t,e,n){t.h.set(e,n)}function Pd(t){return Ne(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function JF(t){return t instanceof as?kr(t):new as(t,void 0)}function ZF(t,e,n,r){var i=new as(null,void 0);return t&&Rh(i,t),e&&Nh(i,e),n&&Ah(i,n),r&&(i.l=r),i}function Wa(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Ta(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,eU),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function eU(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var f1=/[#\/\?@]/g,tU=/[#\?:]/g,nU=/[#\?]/g,rU=/[#\?@]/g,iU=/#/g;function bl(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function yi(t){t.g||(t.g=new jo,t.h=0,t.i&&XF(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}D=bl.prototype;D.add=function(t,e){yi(this),this.i=null,t=Wo(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function Hk(t,e){yi(t),e=Wo(t,e),os(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,t=t.g,os(t.h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&Iv(t)))}function qk(t,e){return yi(t),e=Wo(t,e),os(t.g.h,e)}D.forEach=function(t,e){yi(this),this.g.forEach(function(n,r){vk(n,function(i){t.call(e,i,r,this)},this)},this)};D.T=function(){yi(this);for(var t=this.g.R(),e=this.g.T(),n=[],r=0;r<e.length;r++)for(var i=t[r],s=0;s<i.length;s++)n.push(e[r]);return n};D.R=function(t){yi(this);var e=[];if(typeof t=="string")qk(this,t)&&(e=r1(e,this.g.get(Wo(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=r1(e,t[n])}return e};D.set=function(t,e){return yi(this),this.i=null,t=Wo(this,t),qk(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};D.get=function(t,e){return t?(t=this.R(t),0<t.length?String(t[0]):e):e};function Kk(t,e,n){Hk(t,e),0<n.length&&(t.i=null,t.g.set(Wo(t,e),cv(n)),t.h+=n.length)}D.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var r=e[n],i=encodeURIComponent(String(r));r=this.R(r);for(var s=0;s<r.length;s++){var o=i;r[s]!==""&&(o+="="+encodeURIComponent(String(r[s]))),t.push(o)}}return this.i=t.join("&")};function Wo(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function sU(t,e){e&&!t.j&&(yi(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(Hk(this,r),Kk(this,i,n))},t)),t.j=e}var oU=class{constructor(t,e){this.h=t,this.g=e}};function Gk(t){this.l=t||aU,W.PerformanceNavigationTiming?(t=W.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(W.g&&W.g.Ea&&W.g.Ea()&&W.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var aU=10;function Qk(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Yk(t){return t.h?1:t.g?t.g.size:0}function tg(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function kv(t,e){t.g?t.g.add(e):t.h=e}function Xk(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}Gk.prototype.cancel=function(){if(this.i=Jk(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Jk(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return cv(t.i)}function bv(){}bv.prototype.stringify=function(t){return W.JSON.stringify(t,void 0)};bv.prototype.parse=function(t){return W.JSON.parse(t,void 0)};function lU(){this.g=new bv}function uU(t,e,n){const r=n||"";try{Tv(t,function(i,s){let o=i;iu(i)&&(o=yv(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function cU(t,e){const n=new bd;if(W.Image){const r=new Image;r.onload=Yu(Ju,n,r,"TestLoadImage: loaded",!0,e),r.onerror=Yu(Ju,n,r,"TestLoadImage: error",!1,e),r.onabort=Yu(Ju,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=Yu(Ju,n,r,"TestLoadImage: timeout",!1,e),W.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function Ju(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function cu(t){this.l=t.$b||null,this.j=t.ib||!1}Et(cu,Cv);cu.prototype.g=function(){return new Od(this.l,this.j)};cu.prototype.i=function(t){return function(){return t}}({});function Od(t,e){ht.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=xv,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Et(Od,ht);var xv=0;D=Od.prototype;D.open=function(t,e){if(this.readyState!=xv)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,xl(this)};D.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||W).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))};D.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,hu(this)),this.readyState=xv};D.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,xl(this)),this.g&&(this.readyState=3,xl(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(typeof W.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Zk(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))};function Zk(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}D.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?hu(this):xl(this),this.readyState==3&&Zk(this)}};D.Ua=function(t){this.g&&(this.response=this.responseText=t,hu(this))};D.Ta=function(t){this.g&&(this.response=t,hu(this))};D.ha=function(){this.g&&hu(this)};function hu(t){t.readyState=4,t.l=null,t.j=null,t.A=null,xl(t)}D.setRequestHeader=function(t,e){this.v.append(t,e)};D.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};D.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function xl(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Od.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var hU=W.JSON.parse;function Ge(t){ht.call(this),this.headers=new jo,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=eb,this.K=this.L=!1}Et(Ge,ht);var eb="",dU=/^https?$/i,fU=["POST","PUT"];D=Ge.prototype;D.ea=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Xm.g(),this.C=this.u?h1(this.u):h1(Xm),this.g.onreadystatechange=vt(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(s){p1(this,s);return}t=n||"";const i=new jo(this.headers);r&&Tv(r,function(s,o){i.set(o,s)}),r=TF(i.T()),n=W.FormData&&t instanceof W.FormData,!(0<=yk(fU,e))||r||n||i.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),i.forEach(function(s,o){this.g.setRequestHeader(o,s)},this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{rb(this),0<this.B&&((this.K=pU(this.g))?(this.g.timeout=this.B,this.g.ontimeout=vt(this.pa,this)):this.A=wv(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){p1(this,s)}};function pU(t){return So&&RF()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}function mU(t){return t.toLowerCase()=="content-type"}D.pa=function(){typeof uv<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,_t(this,"timeout"),this.abort(8))};function p1(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,tb(t),Dd(t)}function tb(t){t.D||(t.D=!0,_t(t,"complete"),_t(t,"error"))}D.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,_t(this,"complete"),_t(this,"abort"),Dd(this))};D.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Dd(this,!0)),Ge.Z.M.call(this)};D.Fa=function(){this.s||(this.F||this.v||this.l?nb(this):this.cb())};D.cb=function(){nb(this)};function nb(t){if(t.h&&typeof uv<"u"&&(!t.C[1]||mr(t)!=4||t.ba()!=2)){if(t.v&&mr(t)==4)wv(t.Fa,0,t);else if(_t(t,"readystatechange"),mr(t)==4){t.h=!1;try{const a=t.ba();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=a===0){var i=String(t.H).match(Wk)[1]||null;if(!i&&W.self&&W.self.location){var s=W.self.location.protocol;i=s.substr(0,s.length-1)}r=!dU.test(i?i.toLowerCase():"")}n=r}if(n)_t(t,"complete"),_t(t,"success");else{t.m=6;try{var o=2<mr(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.ba()+"]",tb(t)}}finally{Dd(t)}}}}function Dd(t,e){if(t.g){rb(t);const n=t.g,r=t.C[0]?Ih:null;t.g=null,t.C=null,e||_t(t,"ready");try{n.onreadystatechange=r}catch{}}}function rb(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(W.clearTimeout(t.A),t.A=null)}function mr(t){return t.g?t.g.readyState:0}D.ba=function(){try{return 2<mr(this)?this.g.status:-1}catch{return-1}};D.ga=function(){try{return this.g?this.g.responseText:""}catch{return""}};D.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),hU(e)}};function m1(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case eb:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}D.Da=function(){return this.m};D.La=function(){return typeof this.j=="string"?this.j:String(this.j)};function gU(t){let e="";return hv(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function Rv(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=gU(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Ne(t,e,n))}function ga(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function ib(t){this.za=0,this.l=[],this.h=new bd,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=ga("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=ga("baseRetryDelayMs",5e3,t),this.$a=ga("retryDelaySeedMs",1e4,t),this.Ya=ga("forwardChannelMaxRetries",2,t),this.ra=ga("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new Gk(t&&t.concurrentRequestLimit),this.Ca=new lU,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||t.Xb!==!1}D=ib.prototype;D.ma=8;D.G=1;function Nv(t){if(sb(t),t.G==3){var e=t.V++,n=kr(t.F);Ne(n,"SID",t.J),Ne(n,"RID",e),Ne(n,"TYPE","terminate"),du(t,n),e=new lu(t,t.h,e,void 0),e.K=2,e.v=Pd(kr(n)),n=!1,W.navigator&&W.navigator.sendBeacon&&(n=W.navigator.sendBeacon(e.v.toString(),"")),!n&&W.Image&&(new Image().src=e.v,n=!0),n||(e.g=fb(e.l,null),e.g.ea(e.v)),e.F=Date.now(),uu(e)}hb(t)}D.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch{}};function $d(t){t.g&&(Pv(t),t.g.cancel(),t.g=null)}function sb(t){$d(t),t.u&&(W.clearTimeout(t.u),t.u=null),Ph(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&W.clearTimeout(t.m),t.m=null)}function dp(t,e){t.l.push(new oU(t.Za++,e)),t.G==3&&Md(t)}function Md(t){Qk(t.i)||t.m||(t.m=!0,vv(t.Ha,t),t.C=0)}function yU(t,e){return Yk(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.l=e.D.concat(t.l),!0):t.G==1||t.G==2||t.C>=(t.Xa?0:t.Ya)?!1:(t.m=ou(vt(t.Ha,t,e),cb(t,t.C)),t.C++,!0)}D.Ha=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const i=new lu(this,this.h,t,void 0);let s=this.s;if(this.P&&(s?(s=_k(s),wk(s,this.P)):s=this.P),this.o===null&&(i.H=s),this.ja)e:{for(var e=0,n=0;n<this.l.length;n++){t:{var r=this.l[n];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.l.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=ob(this,i,e),n=kr(this.F),Ne(n,"RID",t),Ne(n,"CVER",22),this.D&&Ne(n,"X-HTTP-Session-Id",this.D),du(this,n),this.o&&s&&Rv(n,this.o,s),kv(this.i,i),this.Ra&&Ne(n,"TYPE","init"),this.ja?(Ne(n,"$req",e),Ne(n,"SID","null"),i.$=!0,Zm(i,n,null)):Zm(i,n,e),this.G=2}}else this.G==3&&(t?g1(this,t):this.l.length==0||Qk(this.i)||g1(this))};function g1(t,e){var n;e?n=e.m:n=t.V++;const r=kr(t.F);Ne(r,"SID",t.J),Ne(r,"RID",n),Ne(r,"AID",t.U),du(t,r),t.o&&t.s&&Rv(r,t.o,t.s),n=new lu(t,t.h,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=ob(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),kv(t.i,n),Zm(n,r,e)}function du(t,e){t.j&&Tv({},function(n,r){Ne(e,r,n)})}function ob(t,e,n){n=Math.min(t.l.length,n);var r=t.j?vt(t.j.Oa,t.j,t):null;e:{var i=t.l;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].h,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let u=i[l].h;const c=i[l].g;if(u-=s,0>u)s=Math.max(0,i[l].h-100),a=!1;else try{uU(c,o,"req"+u+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break e}}}return t=t.l.splice(0,n),e.D=t,r}function ab(t){t.g||t.u||(t.Y=1,vv(t.Ga,t),t.A=0)}function Av(t){return t.g||t.u||3<=t.A?!1:(t.Y++,t.u=ou(vt(t.Ga,t),cb(t,t.A)),t.A++,!0)}D.Ga=function(){if(this.u=null,lb(this),this.$&&!(this.L||this.g==null||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=ou(vt(this.bb,this),t)}};D.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,$t(10),$d(this),lb(this))};function Pv(t){t.B!=null&&(W.clearTimeout(t.B),t.B=null)}function lb(t){t.g=new lu(t,t.h,"rpc",t.Y),t.o===null&&(t.g.H=t.s),t.g.O=0;var e=kr(t.oa);Ne(e,"RID","rpc"),Ne(e,"SID",t.J),Ne(e,"CI",t.N?"0":"1"),Ne(e,"AID",t.U),du(t,e),Ne(e,"TYPE","xmlhttp"),t.o&&t.s&&Rv(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=Pd(kr(e)),n.s=null,n.U=!0,zk(n,t)}D.ab=function(){this.v!=null&&(this.v=null,$d(this),Av(this),$t(19))};function Ph(t){t.v!=null&&(W.clearTimeout(t.v),t.v=null)}function ub(t,e){var n=null;if(t.g==e){Ph(t),Pv(t),t.g=null;var r=2}else if(tg(t.i,e))n=e.D,Xk(t.i,e),r=1;else return;if(t.I=e.N,t.G!=0){if(e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;r=xd(),_t(r,new Mk(r,n)),Md(t)}else ab(t);else if(i=e.o,i==3||i==0&&0<t.I||!(r==1&&yU(t,e)||r==2&&Av(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:Mi(t,5);break;case 4:Mi(t,10);break;case 3:Mi(t,6);break;default:Mi(t,2)}}}function cb(t,e){let n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function Mi(t,e){if(t.h.info("Error code "+e),e==2){var n=null;t.j&&(n=null);var r=vt(t.jb,t);n||(n=new as("//www.google.com/images/cleardot.gif"),W.location&&W.location.protocol=="http"||Rh(n,"https"),Pd(n)),cU(n.toString(),r)}else $t(2);t.G=0,t.j&&t.j.va(e),hb(t),sb(t)}D.jb=function(t){t?(this.h.info("Successfully pinged google.com"),$t(2)):(this.h.info("Failed to ping google.com"),$t(1))};function hb(t){t.G=0,t.I=-1,t.j&&((Jk(t.i).length!=0||t.l.length!=0)&&(t.i.i.length=0,cv(t.l),t.l.length=0),t.j.ua())}function db(t,e,n){let r=JF(n);if(r.i!="")e&&Nh(r,e+"."+r.i),Ah(r,r.m);else{const i=W.location;r=ZF(i.protocol,e?e+"."+i.hostname:i.hostname,+i.port,n)}return t.aa&&hv(t.aa,function(i,s){Ne(r,s,i)}),e=t.D,n=t.sa,e&&n&&Ne(r,e,n),Ne(r,"VER",t.ma),du(t,r),r}function fb(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ba&&!t.qa?new Ge(new cu({ib:!0})):new Ge(t.qa),e.L=t.H,e}function pb(){}D=pb.prototype;D.xa=function(){};D.wa=function(){};D.va=function(){};D.ua=function(){};D.Oa=function(){};function Oh(){if(So&&!(10<=Number(NF)))throw Error("Environmental error: no available transport.")}Oh.prototype.g=function(t,e){return new dn(t,e)};function dn(t,e){ht.call(this),this.g=new ib(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!kh(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!kh(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Ho(this)}Et(dn,ht);dn.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),vv(vt(t.hb,t,e))),$t(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=db(t,null,t.W),Md(t)};dn.prototype.close=function(){Nv(this.g)};dn.prototype.u=function(t){if(typeof t=="string"){var e={};e.__data__=t,dp(this.g,e)}else this.v?(e={},e.__data__=yv(t),dp(this.g,e)):dp(this.g,t)};dn.prototype.M=function(){this.g.j=null,delete this.j,Nv(this.g),delete this.g,dn.Z.M.call(this)};function mb(t){Ev.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Et(mb,Ev);function gb(){Sv.call(this),this.status=1}Et(gb,Sv);function Ho(t){this.g=t}Et(Ho,pb);Ho.prototype.xa=function(){_t(this.g,"a")};Ho.prototype.wa=function(t){_t(this.g,new mb(t))};Ho.prototype.va=function(t){_t(this.g,new gb)};Ho.prototype.ua=function(){_t(this.g,"b")};Oh.prototype.createWebChannel=Oh.prototype.g;dn.prototype.send=dn.prototype.u;dn.prototype.open=dn.prototype.m;dn.prototype.close=dn.prototype.close;Rd.NO_ERROR=0;Rd.TIMEOUT=8;Rd.HTTP_ERROR=6;Lk.COMPLETE="complete";Fk.EventType=au;au.OPEN="a";au.CLOSE="b";au.ERROR="c";au.MESSAGE="d";ht.prototype.listen=ht.prototype.N;Ge.prototype.listenOnce=Ge.prototype.O;Ge.prototype.getLastError=Ge.prototype.La;Ge.prototype.getLastErrorCode=Ge.prototype.Da;Ge.prototype.getStatus=Ge.prototype.ba;Ge.prototype.getResponseJson=Ge.prototype.Qa;Ge.prototype.getResponseText=Ge.prototype.ga;Ge.prototype.send=Ge.prototype.ea;var vU=function(){return new Oh},_U=function(){return xd()},fp=Rd,wU=Lk,CU=_s,y1={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},EU=cu,Zu=Fk,SU=Ge;const v1="@firebase/firestore";/**
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
 */class Vt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Vt.UNAUTHENTICATED=new Vt(null),Vt.GOOGLE_CREDENTIALS=new Vt("google-credentials-uid"),Vt.FIRST_PARTY=new Vt("first-party-uid"),Vt.MOCK_USER=new Vt("mock-user");/**
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
 */let qo="9.9.4";/**
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
 */const ls=new Kl("@firebase/firestore");function _1(){return ls.logLevel}function F(t,...e){if(ls.logLevel<=se.DEBUG){const n=e.map(Ov);ls.debug(`Firestore (${qo}): ${t}`,...n)}}function br(t,...e){if(ls.logLevel<=se.ERROR){const n=e.map(Ov);ls.error(`Firestore (${qo}): ${t}`,...n)}}function w1(t,...e){if(ls.logLevel<=se.WARN){const n=e.map(Ov);ls.warn(`Firestore (${qo}): ${t}`,...n)}}function Ov(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
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
*/var e}/**
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
 */function K(t="Unexpected state"){const e=`FIRESTORE (${qo}) INTERNAL ASSERTION FAILED: `+t;throw br(e),new Error(e)}function Se(t,e){t||K()}function G(t,e){return t}/**
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
 */const k={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class U extends Nn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Wi{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class TU{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class IU{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Vt.UNAUTHENTICATED))}shutdown(){}}class kU{constructor(e){this.t=e,this.currentUser=Vt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new Wi;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Wi,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{F("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(F("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Wi)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(F("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Se(typeof r.accessToken=="string"),new TU(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Se(e===null||typeof e=="string"),new Vt(e)}}class bU{constructor(e,n,r,i){this.h=e,this.l=n,this.m=r,this.g=i,this.type="FirstParty",this.user=Vt.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(Se(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class xU{constructor(e,n,r,i){this.h=e,this.l=n,this.m=r,this.g=i}getToken(){return Promise.resolve(new bU(this.h,this.l,this.m,this.g))}start(e,n){e.enqueueRetryable(()=>n(Vt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class RU{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class NU{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,n){const r=s=>{s.error!=null&&F("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.A;return this.A=s.token,F("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{F("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.T.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.T.getImmediate({optional:!0});s?i(s):F("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Se(typeof n.token=="string"),this.A=n.token,new RU(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function AU(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class yb{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=AU(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function de(t,e){return t<e?-1:t>e?1:0}function To(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
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
 */class Je{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new U(k.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new U(k.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new U(k.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new U(k.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Je.fromMillis(Date.now())}static fromDate(e){return Je.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Je(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?de(this.nanoseconds,e.nanoseconds):de(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class J{constructor(e){this.timestamp=e}static fromTimestamp(e){return new J(e)}static min(){return new J(new Je(0,0))}static max(){return new J(new Je(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Rl{constructor(e,n,r){n===void 0?n=0:n>e.length&&K(),r===void 0?r=e.length-n:r>e.length-n&&K(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Rl.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Rl?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Ae extends Rl{construct(e,n,r){return new Ae(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new U(k.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Ae(n)}static emptyPath(){return new Ae([])}}const PU=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Rt extends Rl{construct(e,n,r){return new Rt(e,n,r)}static isValidIdentifier(e){return PU.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Rt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Rt(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new U(k.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new U(k.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new U(k.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new U(k.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Rt(n)}static emptyPath(){return new Rt([])}}/**
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
 */class z{constructor(e){this.path=e}static fromPath(e){return new z(Ae.fromString(e))}static fromName(e){return new z(Ae.fromString(e).popFirst(5))}static empty(){return new z(Ae.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ae.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ae.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new z(new Ae(e.slice()))}}function OU(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=J.fromTimestamp(r===1e9?new Je(n+1,0):new Je(n,r));return new li(i,z.empty(),e)}function DU(t){return new li(t.readTime,t.key,-1)}class li{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new li(J.min(),z.empty(),-1)}static max(){return new li(J.max(),z.empty(),-1)}}function $U(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=z.comparator(t.documentKey,e.documentKey),n!==0?n:de(t.largestBatchId,e.largestBatchId))}/**
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
 */const MU="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class LU{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function fu(t){if(t.code!==k.FAILED_PRECONDITION||t.message!==MU)throw t;F("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class R{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&K(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new R((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof R?n:R.resolve(n)}catch(n){return R.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):R.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):R.reject(n)}static resolve(e){return new R((n,r)=>{n(e)})}static reject(e){return new R((n,r)=>{r(e)})}static waitFor(e){return new R((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=R.resolve(!1);for(const r of e)n=n.next(i=>i?R.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new R((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const u=l;n(e[u]).next(c=>{o[u]=c,++a,a===s&&r(o)},c=>i(c))}})}static doWhile(e,n){return new R((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function pu(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Dv{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ut(r),this.ct=r=>n.writeSequenceNumber(r))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ct&&this.ct(e),e}}/**
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
 */function C1(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Ko(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function vb(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */Dv.at=-1;class tt{constructor(e,n){this.comparator=e,this.root=n||mt.EMPTY}insert(e,n){return new tt(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,mt.BLACK,null,null))}remove(e){return new tt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,mt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ec(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ec(this.root,e,this.comparator,!1)}getReverseIterator(){return new ec(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ec(this.root,e,this.comparator,!0)}}class ec{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class mt{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r!=null?r:mt.RED,this.left=i!=null?i:mt.EMPTY,this.right=s!=null?s:mt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new mt(e!=null?e:this.key,n!=null?n:this.value,r!=null?r:this.color,i!=null?i:this.left,s!=null?s:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return mt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return mt.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,mt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,mt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw K();const e=this.left.check();if(e!==this.right.check())throw K();return e+(this.isRed()?0:1)}}mt.EMPTY=null,mt.RED=!0,mt.BLACK=!1;mt.EMPTY=new class{constructor(){this.size=0}get key(){throw K()}get value(){throw K()}get color(){throw K()}get left(){throw K()}get right(){throw K()}copy(t,e,n,r,i){return this}insert(t,e,n){return new mt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Ze{constructor(e){this.comparator=e,this.data=new tt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new E1(this.data.getIterator())}getIteratorFrom(e){return new E1(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Ze)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Ze(this.comparator);return n.data=e,n}}class E1{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class er{constructor(e){this.fields=e,e.sort(Rt.comparator)}static empty(){return new er([])}unionWith(e){let n=new Ze(Rt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new er(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return To(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class Ct{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new Ct(n)}static fromUint8Array(e){const n=function(r){let i="";for(let s=0;s<r.length;++s)i+=String.fromCharCode(r[s]);return i}(e);return new Ct(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return de(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ct.EMPTY_BYTE_STRING=new Ct("");const FU=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ui(t){if(Se(!!t),typeof t=="string"){let e=0;const n=FU.exec(t);if(Se(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:We(t.seconds),nanos:We(t.nanos)}}function We(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Io(t){return typeof t=="string"?Ct.fromBase64String(t):Ct.fromUint8Array(t)}/**
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
 */function _b(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function wb(t){const e=t.mapValue.fields.__previous_value__;return _b(e)?wb(e):e}function Nl(t){const e=ui(t.mapValue.fields.__local_write_time__.timestampValue);return new Je(e.seconds,e.nanos)}/**
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
 */class UU{constructor(e,n,r,i,s,o,a,l){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=l}}class Al{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Al("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Al&&e.projectId===this.projectId&&e.database===this.database}}function Ld(t){return t==null}function Dh(t){return t===0&&1/t==-1/0}function zU(t){return typeof t=="number"&&Number.isInteger(t)&&!Dh(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */const tc={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function us(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?_b(t)?4:VU(t)?9007199254740991:10:K()}function ir(t,e){if(t===e)return!0;const n=us(t);if(n!==us(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Nl(t).isEqual(Nl(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const s=ui(r.timestampValue),o=ui(i.timestampValue);return s.seconds===o.seconds&&s.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,i){return Io(r.bytesValue).isEqual(Io(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,i){return We(r.geoPointValue.latitude)===We(i.geoPointValue.latitude)&&We(r.geoPointValue.longitude)===We(i.geoPointValue.longitude)}(t,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return We(r.integerValue)===We(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const s=We(r.doubleValue),o=We(i.doubleValue);return s===o?Dh(s)===Dh(o):isNaN(s)&&isNaN(o)}return!1}(t,e);case 9:return To(t.arrayValue.values||[],e.arrayValue.values||[],ir);case 10:return function(r,i){const s=r.mapValue.fields||{},o=i.mapValue.fields||{};if(C1(s)!==C1(o))return!1;for(const a in s)if(s.hasOwnProperty(a)&&(o[a]===void 0||!ir(s[a],o[a])))return!1;return!0}(t,e);default:return K()}}function Pl(t,e){return(t.values||[]).find(n=>ir(n,e))!==void 0}function ko(t,e){if(t===e)return 0;const n=us(t),r=us(e);if(n!==r)return de(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return de(t.booleanValue,e.booleanValue);case 2:return function(i,s){const o=We(i.integerValue||i.doubleValue),a=We(s.integerValue||s.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return S1(t.timestampValue,e.timestampValue);case 4:return S1(Nl(t),Nl(e));case 5:return de(t.stringValue,e.stringValue);case 6:return function(i,s){const o=Io(i),a=Io(s);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,s){const o=i.split("/"),a=s.split("/");for(let l=0;l<o.length&&l<a.length;l++){const u=de(o[l],a[l]);if(u!==0)return u}return de(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,s){const o=de(We(i.latitude),We(s.latitude));return o!==0?o:de(We(i.longitude),We(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,s){const o=i.values||[],a=s.values||[];for(let l=0;l<o.length&&l<a.length;++l){const u=ko(o[l],a[l]);if(u)return u}return de(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,s){if(i===tc.mapValue&&s===tc.mapValue)return 0;if(i===tc.mapValue)return 1;if(s===tc.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),l=s.fields||{},u=Object.keys(l);a.sort(),u.sort();for(let c=0;c<a.length&&c<u.length;++c){const h=de(a[c],u[c]);if(h!==0)return h;const d=ko(o[a[c]],l[u[c]]);if(d!==0)return d}return de(a.length,u.length)}(t.mapValue,e.mapValue);default:throw K()}}function S1(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return de(t,e);const n=ui(t),r=ui(e),i=de(n.seconds,r.seconds);return i!==0?i:de(n.nanos,r.nanos)}function so(t){return ng(t)}function ng(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const i=ui(r);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Io(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,z.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let i="[",s=!0;for(const o of r.values||[])s?s=!1:i+=",",i+=ng(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(r){const i=Object.keys(r.fields||{}).sort();let s="{",o=!0;for(const a of i)o?o=!1:s+=",",s+=`${a}:${ng(r.fields[a])}`;return s+"}"}(t.mapValue):K();var e,n}function rg(t){return!!t&&"integerValue"in t}function $v(t){return!!t&&"arrayValue"in t}function T1(t){return!!t&&"nullValue"in t}function I1(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Ic(t){return!!t&&"mapValue"in t}function Ha(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Ko(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Ha(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ha(t.arrayValue.values[n]);return e}return Object.assign({},t)}function VU(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Sn{constructor(e){this.value=e}static empty(){return new Sn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Ic(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ha(n)}setAll(e){let n=Rt.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=Ha(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Ic(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return ir(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Ic(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Ko(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Sn(Ha(this.value))}}function Cb(t){const e=[];return Ko(t.fields,(n,r)=>{const i=new Rt([n]);if(Ic(r)){const s=Cb(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new er(e)}/**
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
 */class gt{constructor(e,n,r,i,s,o){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.data=s,this.documentState=o}static newInvalidDocument(e){return new gt(e,0,J.min(),J.min(),Sn.empty(),0)}static newFoundDocument(e,n,r){return new gt(e,1,n,J.min(),r,0)}static newNoDocument(e,n){return new gt(e,2,n,J.min(),Sn.empty(),0)}static newUnknownDocument(e,n){return new gt(e,3,n,J.min(),Sn.empty(),2)}convertToFoundDocument(e,n){return this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Sn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Sn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=J.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof gt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new gt(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class BU{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ht=null}}function k1(t,e=null,n=[],r=[],i=null,s=null,o=null){return new BU(t,e,n,r,i,s,o)}function Mv(t){const e=G(t);if(e.ht===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>{return(i=r).field.canonicalString()+i.op.toString()+so(i.value);var i}).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Ld(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>so(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>so(r)).join(",")),e.ht=n}return e.ht}function jU(t){let e=t.path.canonicalString();return t.collectionGroup!==null&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(n=>{return`${(r=n).field.canonicalString()} ${r.op} ${so(r.value)}`;var r}).join(", ")}]`),Ld(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(n=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(n)).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>so(n)).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>so(n)).join(",")),`Target(${e})`}function Lv(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let i=0;i<t.orderBy.length;i++)if(!XU(t.orderBy[i],e.orderBy[i]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let i=0;i<t.filters.length;i++)if(n=t.filters[i],r=e.filters[i],n.op!==r.op||!n.field.isEqual(r.field)||!ir(n.value,r.value))return!1;var n,r;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!x1(t.startAt,e.startAt)&&x1(t.endAt,e.endAt)}function ig(t){return z.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}class Gt extends class{}{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.lt(e,n,r):new WU(e,n,r):n==="array-contains"?new KU(e,r):n==="in"?new GU(e,r):n==="not-in"?new QU(e,r):n==="array-contains-any"?new YU(e,r):new Gt(e,n,r)}static lt(e,n,r){return n==="in"?new HU(e,r):new qU(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.ft(ko(n,this.value)):n!==null&&us(this.value)===us(n)&&this.ft(ko(n,this.value))}ft(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return K()}}dt(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class WU extends Gt{constructor(e,n,r){super(e,n,r),this.key=z.fromName(r.referenceValue)}matches(e){const n=z.comparator(e.key,this.key);return this.ft(n)}}class HU extends Gt{constructor(e,n){super(e,"in",n),this.keys=Eb("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class qU extends Gt{constructor(e,n){super(e,"not-in",n),this.keys=Eb("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Eb(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>z.fromName(r.referenceValue))}class KU extends Gt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return $v(n)&&Pl(n.arrayValue,this.value)}}class GU extends Gt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Pl(this.value.arrayValue,n)}}class QU extends Gt{constructor(e,n){super(e,"not-in",n)}matches(e){if(Pl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Pl(this.value.arrayValue,n)}}class YU extends Gt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!$v(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Pl(this.value.arrayValue,r))}}class $h{constructor(e,n){this.position=e,this.inclusive=n}}class oo{constructor(e,n="asc"){this.field=e,this.dir=n}}function XU(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function b1(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=z.comparator(z.fromName(o.referenceValue),n.key):r=ko(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function x1(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!ir(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class mu{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this._t=null,this.wt=null,this.startAt,this.endAt}}function JU(t,e,n,r,i,s,o,a){return new mu(t,e,n,r,i,s,o,a)}function Fv(t){return new mu(t)}function R1(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Sb(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Tb(t){for(const e of t.filters)if(e.dt())return e.field;return null}function ZU(t){return t.collectionGroup!==null}function Ol(t){const e=G(t);if(e._t===null){e._t=[];const n=Tb(e),r=Sb(e);if(n!==null&&r===null)n.isKeyField()||e._t.push(new oo(n)),e._t.push(new oo(Rt.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e._t.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e._t.push(new oo(Rt.keyField(),s))}}}return e._t}function xr(t){const e=G(t);if(!e.wt)if(e.limitType==="F")e.wt=k1(e.path,e.collectionGroup,Ol(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const s of Ol(e)){const o=s.dir==="desc"?"asc":"desc";n.push(new oo(s.field,o))}const r=e.endAt?new $h(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new $h(e.startAt.position,e.startAt.inclusive):null;e.wt=k1(e.path,e.collectionGroup,n,e.filters,e.limit,r,i)}return e.wt}function Mh(t,e,n){return new mu(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function gu(t,e){return Lv(xr(t),xr(e))&&t.limitType===e.limitType}function Ib(t){return`${Mv(xr(t))}|lt:${t.limitType}`}function sg(t){return`Query(target=${jU(xr(t))}; limitType=${t.limitType})`}function Uv(t,e){return e.isFoundDocument()&&function(n,r){const i=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):z.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,r){for(const i of n.explicitOrderBy)if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const i of n.filters)if(!i.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!function(i,s,o){const a=b1(i,s,o);return i.inclusive?a<=0:a<0}(n.startAt,Ol(n),r)||n.endAt&&!function(i,s,o){const a=b1(i,s,o);return i.inclusive?a>=0:a>0}(n.endAt,Ol(n),r))}(t,e)}function e3(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function kb(t){return(e,n)=>{let r=!1;for(const i of Ol(t)){const s=t3(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function t3(t,e,n){const r=t.field.isKeyField()?z.comparator(e.key,n.key):function(i,s,o){const a=s.data.field(i),l=o.data.field(i);return a!==null&&l!==null?ko(a,l):K()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return K()}}/**
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
 */function bb(t,e){if(t.gt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Dh(e)?"-0":e}}function xb(t){return{integerValue:""+t}}function n3(t,e){return zU(e)?xb(e):bb(t,e)}/**
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
 */class Fd{constructor(){this._=void 0}}function r3(t,e,n){return t instanceof Dl?function(r,i){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&(s.fields.__previous_value__=i),{mapValue:s}}(n,e):t instanceof $l?Nb(t,e):t instanceof Ml?Ab(t,e):function(r,i){const s=Rb(r,i),o=N1(s)+N1(r.yt);return rg(s)&&rg(r.yt)?xb(o):bb(r.It,o)}(t,e)}function i3(t,e,n){return t instanceof $l?Nb(t,e):t instanceof Ml?Ab(t,e):n}function Rb(t,e){return t instanceof Lh?rg(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class Dl extends Fd{}class $l extends Fd{constructor(e){super(),this.elements=e}}function Nb(t,e){const n=Pb(e);for(const r of t.elements)n.some(i=>ir(i,r))||n.push(r);return{arrayValue:{values:n}}}class Ml extends Fd{constructor(e){super(),this.elements=e}}function Ab(t,e){let n=Pb(e);for(const r of t.elements)n=n.filter(i=>!ir(i,r));return{arrayValue:{values:n}}}class Lh extends Fd{constructor(e,n){super(),this.It=e,this.yt=n}}function N1(t){return We(t.integerValue||t.doubleValue)}function Pb(t){return $v(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class s3{constructor(e,n){this.field=e,this.transform=n}}function o3(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof $l&&r instanceof $l||n instanceof Ml&&r instanceof Ml?To(n.elements,r.elements,ir):n instanceof Lh&&r instanceof Lh?ir(n.yt,r.yt):n instanceof Dl&&r instanceof Dl}(t.transform,e.transform)}class a3{constructor(e,n){this.version=e,this.transformResults=n}}class vr{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new vr}static exists(e){return new vr(void 0,e)}static updateTime(e){return new vr(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function kc(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Ud{}function Ob(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new $b(t.key,vr.none()):new yu(t.key,t.data,vr.none());{const n=t.data,r=Sn.empty();let i=new Ze(Rt.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new ws(t.key,r,new er(i.toArray()),vr.none())}}function l3(t,e,n){t instanceof yu?function(r,i,s){const o=r.value.clone(),a=P1(r.fieldTransforms,i,s.transformResults);o.setAll(a),i.convertToFoundDocument(s.version,o).setHasCommittedMutations()}(t,e,n):t instanceof ws?function(r,i,s){if(!kc(r.precondition,i))return void i.convertToUnknownDocument(s.version);const o=P1(r.fieldTransforms,i,s.transformResults),a=i.data;a.setAll(Db(r)),a.setAll(o),i.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(t,e,n):function(r,i,s){i.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,n)}function qa(t,e,n,r){return t instanceof yu?function(i,s,o,a){if(!kc(i.precondition,s))return o;const l=i.value.clone(),u=O1(i.fieldTransforms,a,s);return l.setAll(u),s.convertToFoundDocument(s.version,l).setHasLocalMutations(),null}(t,e,n,r):t instanceof ws?function(i,s,o,a){if(!kc(i.precondition,s))return o;const l=O1(i.fieldTransforms,a,s),u=s.data;return u.setAll(Db(i)),u.setAll(l),s.convertToFoundDocument(s.version,u).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(c=>c.field))}(t,e,n,r):function(i,s,o){return kc(i.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):o}(t,e,n)}function u3(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=Rb(r.transform,i||null);s!=null&&(n===null&&(n=Sn.empty()),n.set(r.field,s))}return n||null}function A1(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&To(n,r,(i,s)=>o3(i,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class yu extends Ud{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class ws extends Ud{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function Db(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function P1(t,e,n){const r=new Map;Se(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,i3(o,a,n[i]))}return r}function O1(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,r3(s,o,e))}return r}class $b extends Ud{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class c3 extends Ud{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class h3{constructor(e){this.count=e}}/**
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
 */var je,ie;function d3(t){switch(t){default:return K();case k.CANCELLED:case k.UNKNOWN:case k.DEADLINE_EXCEEDED:case k.RESOURCE_EXHAUSTED:case k.INTERNAL:case k.UNAVAILABLE:case k.UNAUTHENTICATED:return!1;case k.INVALID_ARGUMENT:case k.NOT_FOUND:case k.ALREADY_EXISTS:case k.PERMISSION_DENIED:case k.FAILED_PRECONDITION:case k.ABORTED:case k.OUT_OF_RANGE:case k.UNIMPLEMENTED:case k.DATA_LOSS:return!0}}function Mb(t){if(t===void 0)return br("GRPC error has no .code"),k.UNKNOWN;switch(t){case je.OK:return k.OK;case je.CANCELLED:return k.CANCELLED;case je.UNKNOWN:return k.UNKNOWN;case je.DEADLINE_EXCEEDED:return k.DEADLINE_EXCEEDED;case je.RESOURCE_EXHAUSTED:return k.RESOURCE_EXHAUSTED;case je.INTERNAL:return k.INTERNAL;case je.UNAVAILABLE:return k.UNAVAILABLE;case je.UNAUTHENTICATED:return k.UNAUTHENTICATED;case je.INVALID_ARGUMENT:return k.INVALID_ARGUMENT;case je.NOT_FOUND:return k.NOT_FOUND;case je.ALREADY_EXISTS:return k.ALREADY_EXISTS;case je.PERMISSION_DENIED:return k.PERMISSION_DENIED;case je.FAILED_PRECONDITION:return k.FAILED_PRECONDITION;case je.ABORTED:return k.ABORTED;case je.OUT_OF_RANGE:return k.OUT_OF_RANGE;case je.UNIMPLEMENTED:return k.UNIMPLEMENTED;case je.DATA_LOSS:return k.DATA_LOSS;default:return K()}}(ie=je||(je={}))[ie.OK=0]="OK",ie[ie.CANCELLED=1]="CANCELLED",ie[ie.UNKNOWN=2]="UNKNOWN",ie[ie.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ie[ie.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ie[ie.NOT_FOUND=5]="NOT_FOUND",ie[ie.ALREADY_EXISTS=6]="ALREADY_EXISTS",ie[ie.PERMISSION_DENIED=7]="PERMISSION_DENIED",ie[ie.UNAUTHENTICATED=16]="UNAUTHENTICATED",ie[ie.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ie[ie.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ie[ie.ABORTED=10]="ABORTED",ie[ie.OUT_OF_RANGE=11]="OUT_OF_RANGE",ie[ie.UNIMPLEMENTED=12]="UNIMPLEMENTED",ie[ie.INTERNAL=13]="INTERNAL",ie[ie.UNAVAILABLE=14]="UNAVAILABLE",ie[ie.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class Go{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Ko(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return vb(this.inner)}size(){return this.innerSize}}/**
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
 */const f3=new tt(z.comparator);function Rr(){return f3}const Lb=new tt(z.comparator);function Ia(...t){let e=Lb;for(const n of t)e=e.insert(n.key,n);return e}function Fb(t){let e=Lb;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Li(){return Ka()}function Ub(){return Ka()}function Ka(){return new Go(t=>t.toString(),(t,e)=>t.isEqual(e))}const p3=new tt(z.comparator),m3=new Ze(z.comparator);function ne(...t){let e=m3;for(const n of t)e=e.add(n);return e}const g3=new Ze(de);function zb(){return g3}/**
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
 */class zd{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n){const r=new Map;return r.set(e,vu.createSynthesizedTargetChangeForCurrentChange(e,n)),new zd(J.min(),r,zb(),Rr(),ne())}}class vu{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n){return new vu(Ct.EMPTY_BYTE_STRING,n,ne(),ne(),ne())}}/**
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
 */class bc{constructor(e,n,r,i){this.Tt=e,this.removedTargetIds=n,this.key=r,this.Et=i}}class Vb{constructor(e,n){this.targetId=e,this.At=n}}class Bb{constructor(e,n,r=Ct.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class D1{constructor(){this.Rt=0,this.bt=M1(),this.Pt=Ct.EMPTY_BYTE_STRING,this.vt=!1,this.Vt=!0}get current(){return this.vt}get resumeToken(){return this.Pt}get St(){return this.Rt!==0}get Dt(){return this.Vt}Ct(e){e.approximateByteSize()>0&&(this.Vt=!0,this.Pt=e)}xt(){let e=ne(),n=ne(),r=ne();return this.bt.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:K()}}),new vu(this.Pt,this.vt,e,n,r)}Nt(){this.Vt=!1,this.bt=M1()}kt(e,n){this.Vt=!0,this.bt=this.bt.insert(e,n)}Mt(e){this.Vt=!0,this.bt=this.bt.remove(e)}Ot(){this.Rt+=1}Ft(){this.Rt-=1}$t(){this.Vt=!0,this.vt=!0}}class y3{constructor(e){this.Bt=e,this.Lt=new Map,this.Ut=Rr(),this.qt=$1(),this.Kt=new Ze(de)}Gt(e){for(const n of e.Tt)e.Et&&e.Et.isFoundDocument()?this.Qt(n,e.Et):this.jt(n,e.key,e.Et);for(const n of e.removedTargetIds)this.jt(n,e.key,e.Et)}Wt(e){this.forEachTarget(e,n=>{const r=this.zt(n);switch(e.state){case 0:this.Ht(n)&&r.Ct(e.resumeToken);break;case 1:r.Ft(),r.St||r.Nt(),r.Ct(e.resumeToken);break;case 2:r.Ft(),r.St||this.removeTarget(n);break;case 3:this.Ht(n)&&(r.$t(),r.Ct(e.resumeToken));break;case 4:this.Ht(n)&&(this.Jt(n),r.Ct(e.resumeToken));break;default:K()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Lt.forEach((r,i)=>{this.Ht(i)&&n(i)})}Yt(e){const n=e.targetId,r=e.At.count,i=this.Xt(n);if(i){const s=i.target;if(ig(s))if(r===0){const o=new z(s.path);this.jt(n,o,gt.newNoDocument(o,J.min()))}else Se(r===1);else this.Zt(n)!==r&&(this.Jt(n),this.Kt=this.Kt.add(n))}}te(e){const n=new Map;this.Lt.forEach((s,o)=>{const a=this.Xt(o);if(a){if(s.current&&ig(a.target)){const l=new z(a.target.path);this.Ut.get(l)!==null||this.ee(o,l)||this.jt(o,l,gt.newNoDocument(l,e))}s.Dt&&(n.set(o,s.xt()),s.Nt())}});let r=ne();this.qt.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.Xt(l);return!u||u.purpose===2||(a=!1,!1)}),a&&(r=r.add(s))}),this.Ut.forEach((s,o)=>o.setReadTime(e));const i=new zd(e,n,this.Kt,this.Ut,r);return this.Ut=Rr(),this.qt=$1(),this.Kt=new Ze(de),i}Qt(e,n){if(!this.Ht(e))return;const r=this.ee(e,n.key)?2:0;this.zt(e).kt(n.key,r),this.Ut=this.Ut.insert(n.key,n),this.qt=this.qt.insert(n.key,this.ne(n.key).add(e))}jt(e,n,r){if(!this.Ht(e))return;const i=this.zt(e);this.ee(e,n)?i.kt(n,1):i.Mt(n),this.qt=this.qt.insert(n,this.ne(n).delete(e)),r&&(this.Ut=this.Ut.insert(n,r))}removeTarget(e){this.Lt.delete(e)}Zt(e){const n=this.zt(e).xt();return this.Bt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ot(e){this.zt(e).Ot()}zt(e){let n=this.Lt.get(e);return n||(n=new D1,this.Lt.set(e,n)),n}ne(e){let n=this.qt.get(e);return n||(n=new Ze(de),this.qt=this.qt.insert(e,n)),n}Ht(e){const n=this.Xt(e)!==null;return n||F("WatchChangeAggregator","Detected inactive target",e),n}Xt(e){const n=this.Lt.get(e);return n&&n.St?null:this.Bt.se(e)}Jt(e){this.Lt.set(e,new D1),this.Bt.getRemoteKeysForTarget(e).forEach(n=>{this.jt(e,n,null)})}ee(e,n){return this.Bt.getRemoteKeysForTarget(e).has(n)}}function $1(){return new tt(z.comparator)}function M1(){return new tt(z.comparator)}/**
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
 */const v3=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),_3=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class w3{constructor(e,n){this.databaseId=e,this.gt=n}}function Fh(t,e){return t.gt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function jb(t,e){return t.gt?e.toBase64():e.toUint8Array()}function C3(t,e){return Fh(t,e.toTimestamp())}function _r(t){return Se(!!t),J.fromTimestamp(function(e){const n=ui(e);return new Je(n.seconds,n.nanos)}(t))}function zv(t,e){return function(n){return new Ae(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function Wb(t){const e=Ae.fromString(t);return Se(Kb(e)),e}function og(t,e){return zv(t.databaseId,e.path)}function pp(t,e){const n=Wb(e);if(n.get(1)!==t.databaseId.projectId)throw new U(k.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new U(k.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new z(Hb(n))}function ag(t,e){return zv(t.databaseId,e)}function E3(t){const e=Wb(t);return e.length===4?Ae.emptyPath():Hb(e)}function lg(t){return new Ae(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Hb(t){return Se(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function L1(t,e,n){return{name:og(t,e),fields:n.value.mapValue.fields}}function S3(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:K()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(l,u){return l.gt?(Se(u===void 0||typeof u=="string"),Ct.fromBase64String(u||"")):(Se(u===void 0||u instanceof Uint8Array),Ct.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const u=l.code===void 0?k.UNKNOWN:Mb(l.code);return new U(u,l.message||"")}(o);n=new Bb(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=pp(t,r.document.name),s=_r(r.document.updateTime),o=new Sn({mapValue:{fields:r.document.fields}}),a=gt.newFoundDocument(i,s,o),l=r.targetIds||[],u=r.removedTargetIds||[];n=new bc(l,u,a.key,a)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=pp(t,r.document),s=r.readTime?_r(r.readTime):J.min(),o=gt.newNoDocument(i,s),a=r.removedTargetIds||[];n=new bc([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=pp(t,r.document),s=r.removedTargetIds||[];n=new bc([],s,i,null)}else{if(!("filter"in e))return K();{e.filter;const r=e.filter;r.targetId;const i=r.count||0,s=new h3(i),o=r.targetId;n=new Vb(o,s)}}return n}function T3(t,e){let n;if(e instanceof yu)n={update:L1(t,e.key,e.value)};else if(e instanceof $b)n={delete:og(t,e.key)};else if(e instanceof ws)n={update:L1(t,e.key,e.data),updateMask:D3(e.fieldMask)};else{if(!(e instanceof c3))return K();n={verify:og(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,s){const o=s.transform;if(o instanceof Dl)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof $l)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Ml)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Lh)return{fieldPath:s.field.canonicalString(),increment:o.yt};throw K()}(0,r))),e.precondition.isNone||(n.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:C3(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:K()}(t,e.precondition)),n}function I3(t,e){return t&&t.length>0?(Se(e!==void 0),t.map(n=>function(r,i){let s=r.updateTime?_r(r.updateTime):_r(i);return s.isEqual(J.min())&&(s=_r(i)),new a3(s,r.transformResults||[])}(n,e))):[]}function k3(t,e){return{documents:[ag(t,e.path)]}}function b3(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=ag(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=ag(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(l){if(l.length===0)return;const u=l.map(c=>function(h){if(h.op==="=="){if(I1(h.value))return{unaryFilter:{field:ks(h.field),op:"IS_NAN"}};if(T1(h.value))return{unaryFilter:{field:ks(h.field),op:"IS_NULL"}}}else if(h.op==="!="){if(I1(h.value))return{unaryFilter:{field:ks(h.field),op:"IS_NOT_NAN"}};if(T1(h.value))return{unaryFilter:{field:ks(h.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ks(h.field),op:A3(h.op),value:h.value}}}(c));return u.length===1?u[0]:{compositeFilter:{op:"AND",filters:u}}}(e.filters);i&&(n.structuredQuery.where=i);const s=function(l){if(l.length!==0)return l.map(u=>function(c){return{field:ks(c.field),direction:N3(c.dir)}}(u))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=function(l,u){return l.gt||Ld(u)?u:{value:u}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function x3(t){let e=E3(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Se(r===1);const c=n.from[0];c.allDescendants?i=c.collectionId:e=e.child(c.collectionId)}let s=[];n.where&&(s=qb(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(c=>function(h){return new oo(Ks(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(c)));let a=null;n.limit&&(a=function(c){let h;return h=typeof c=="object"?c.value:c,Ld(h)?null:h}(n.limit));let l=null;n.startAt&&(l=function(c){const h=!!c.before,d=c.values||[];return new $h(d,h)}(n.startAt));let u=null;return n.endAt&&(u=function(c){const h=!c.before,d=c.values||[];return new $h(d,h)}(n.endAt)),JU(e,i,o,s,a,"F",l,u)}function R3(t,e){const n=function(r,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return K()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function qb(t){return t?t.unaryFilter!==void 0?[O3(t)]:t.fieldFilter!==void 0?[P3(t)]:t.compositeFilter!==void 0?t.compositeFilter.filters.map(e=>qb(e)).reduce((e,n)=>e.concat(n)):K():[]}function N3(t){return v3[t]}function A3(t){return _3[t]}function ks(t){return{fieldPath:t.canonicalString()}}function Ks(t){return Rt.fromServerFormat(t.fieldPath)}function P3(t){return Gt.create(Ks(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return K()}}(t.fieldFilter.op),t.fieldFilter.value)}function O3(t){switch(t.unaryFilter.op){case"IS_NAN":const e=Ks(t.unaryFilter.field);return Gt.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=Ks(t.unaryFilter.field);return Gt.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Ks(t.unaryFilter.field);return Gt.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Ks(t.unaryFilter.field);return Gt.create(i,"!=",{nullValue:"NULL_VALUE"});default:return K()}}function D3(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Kb(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class $3{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&l3(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=qa(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=qa(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=Ub();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=Ob(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(J.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ne())}isEqual(e){return this.batchId===e.batchId&&To(this.mutations,e.mutations,(n,r)=>A1(n,r))&&To(this.baseMutations,e.baseMutations,(n,r)=>A1(n,r))}}class Vv{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){Se(e.mutations.length===r.length);let i=p3;const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Vv(e,n,r,i)}}/**
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
 */class M3{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class Hi{constructor(e,n,r,i,s=J.min(),o=J.min(),a=Ct.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new Hi(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new Hi(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new Hi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
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
 */class L3{constructor(e){this.re=e}}function F3(t){const e=x3({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Mh(e,e.limit,"L"):e}/**
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
 */class U3{constructor(){this.Ye=new z3}addToCollectionParentIndex(e,n){return this.Ye.add(n),R.resolve()}getCollectionParents(e,n){return R.resolve(this.Ye.getEntries(n))}addFieldIndex(e,n){return R.resolve()}deleteFieldIndex(e,n){return R.resolve()}getDocumentsMatchingTarget(e,n){return R.resolve(null)}getIndexType(e,n){return R.resolve(0)}getFieldIndexes(e,n){return R.resolve([])}getNextCollectionGroupToUpdate(e){return R.resolve(null)}getMinOffset(e,n){return R.resolve(li.min())}getMinOffsetFromCollectionGroup(e,n){return R.resolve(li.min())}updateCollectionGroup(e,n,r){return R.resolve()}updateIndexEntries(e,n){return R.resolve()}}class z3{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Ze(Ae.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Ze(Ae.comparator)).toArray()}}/**
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
 */class bo{constructor(e){this.bn=e}next(){return this.bn+=2,this.bn}static Pn(){return new bo(0)}static vn(){return new bo(-1)}}/**
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
 */class V3{constructor(){this.changes=new Go(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,gt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?R.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class B3{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class j3{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.getBaseDocument(e,n,r))).next(i=>(r!==null&&qa(r.mutation,i,er.empty(),Je.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ne()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ne()){const i=Li();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Ia();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Li();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ne()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=Rr();const o=Ka(),a=Ka();return n.forEach((l,u)=>{const c=r.get(u.key);i.has(u.key)&&(c===void 0||c.mutation instanceof ws)?s=s.insert(u.key,u):c!==void 0&&(o.set(u.key,c.mutation.getFieldMask()),qa(c.mutation,u,c.mutation.getFieldMask(),Je.now()))}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((u,c)=>o.set(u,c)),n.forEach((u,c)=>{var h;return a.set(u,new B3(c,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=Ka();let i=new tt((o,a)=>o-a),s=ne();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let c=r.get(l)||er.empty();c=a.applyToLocalView(u,c),r.set(l,c);const h=(i.get(a.batchId)||ne()).add(l);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,c=l.value,h=Ub();c.forEach(d=>{if(!s.has(d)){const f=Ob(n.get(d),r.get(d));f!==null&&h.set(d,f),s=s.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return R.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r){return function(i){return z.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):ZU(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r):this.getDocumentsMatchingCollectionQuery(e,n,r)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):R.resolve(Li());let a=-1,l=s;return o.next(u=>R.forEach(u,(c,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(c)?R.resolve():this.getBaseDocument(e,c,h).next(d=>{l=l.insert(c,d)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,l,u,ne())).next(c=>({batchId:a,changes:Fb(c)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new z(n)).next(r=>{let i=Ia();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r){const i=n.collectionGroup;let s=Ia();return this.indexManager.getCollectionParents(e,i).next(o=>R.forEach(o,a=>{const l=function(u,c){return new mu(c,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,r).next(u=>{u.forEach((c,h)=>{s=s.insert(c,h)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,n,r){let i;return this.remoteDocumentCache.getAllFromCollection(e,n.path,r).next(s=>(i=s,this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId))).next(s=>{s.forEach((a,l)=>{const u=l.getKey();i.get(u)===null&&(i=i.insert(u,gt.newInvalidDocument(u)))});let o=Ia();return i.forEach((a,l)=>{const u=s.get(a);u!==void 0&&qa(u.mutation,l,er.empty(),Je.now()),Uv(n,l)&&(o=o.insert(a,l))}),o})}getBaseDocument(e,n,r){return r===null||r.mutation.type===1?this.remoteDocumentCache.getEntry(e,n):R.resolve(gt.newInvalidDocument(n))}}/**
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
 */class W3{constructor(e){this.It=e,this.Zn=new Map,this.ts=new Map}getBundleMetadata(e,n){return R.resolve(this.Zn.get(n))}saveBundleMetadata(e,n){var r;return this.Zn.set(n.id,{id:(r=n).id,version:r.version,createTime:_r(r.createTime)}),R.resolve()}getNamedQuery(e,n){return R.resolve(this.ts.get(n))}saveNamedQuery(e,n){return this.ts.set(n.name,function(r){return{name:r.name,query:F3(r.bundledQuery),readTime:_r(r.readTime)}}(n)),R.resolve()}}/**
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
 */class H3{constructor(){this.overlays=new tt(z.comparator),this.es=new Map}getOverlay(e,n){return R.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Li();return R.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ue(e,n,s)}),R.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.es.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.es.delete(r)),R.resolve()}getOverlaysForCollection(e,n,r){const i=Li(),s=n.length+1,o=new z(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return R.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new tt((u,c)=>u-c);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let c=s.get(u.largestBatchId);c===null&&(c=Li(),s=s.insert(u.largestBatchId,c)),c.set(u.getKey(),u)}}const a=Li(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,c)=>a.set(u,c)),!(a.size()>=i)););return R.resolve(a)}ue(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.es.get(i.largestBatchId).delete(r.key);this.es.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new M3(n,r));let s=this.es.get(n);s===void 0&&(s=ne(),this.es.set(n,s)),this.es.set(n,s.add(r.key))}}/**
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
 */class Bv{constructor(){this.ns=new Ze(it.ss),this.rs=new Ze(it.os)}isEmpty(){return this.ns.isEmpty()}addReference(e,n){const r=new it(e,n);this.ns=this.ns.add(r),this.rs=this.rs.add(r)}us(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.cs(new it(e,n))}hs(e,n){e.forEach(r=>this.removeReference(r,n))}ls(e){const n=new z(new Ae([])),r=new it(n,e),i=new it(n,e+1),s=[];return this.rs.forEachInRange([r,i],o=>{this.cs(o),s.push(o.key)}),s}fs(){this.ns.forEach(e=>this.cs(e))}cs(e){this.ns=this.ns.delete(e),this.rs=this.rs.delete(e)}ds(e){const n=new z(new Ae([])),r=new it(n,e),i=new it(n,e+1);let s=ne();return this.rs.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new it(e,0),r=this.ns.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class it{constructor(e,n){this.key=e,this._s=n}static ss(e,n){return z.comparator(e.key,n.key)||de(e._s,n._s)}static os(e,n){return de(e._s,n._s)||z.comparator(e.key,n.key)}}/**
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
 */class q3{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this.gs=new Ze(it.ss)}checkEmpty(e){return R.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new $3(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.gs=this.gs.add(new it(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return R.resolve(o)}lookupMutationBatch(e,n){return R.resolve(this.ys(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.ps(r),s=i<0?0:i;return R.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return R.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(e){return R.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new it(n,0),i=new it(n,Number.POSITIVE_INFINITY),s=[];return this.gs.forEachInRange([r,i],o=>{const a=this.ys(o._s);s.push(a)}),R.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Ze(de);return n.forEach(i=>{const s=new it(i,0),o=new it(i,Number.POSITIVE_INFINITY);this.gs.forEachInRange([s,o],a=>{r=r.add(a._s)})}),R.resolve(this.Is(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;z.isDocumentKey(s)||(s=s.child(""));const o=new it(new z(s),0);let a=new Ze(de);return this.gs.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(l._s)),!0)},o),R.resolve(this.Is(a))}Is(e){const n=[];return e.forEach(r=>{const i=this.ys(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){Se(this.Ts(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.gs;return R.forEach(n.mutations,i=>{const s=new it(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.gs=r})}An(e){}containsKey(e,n){const r=new it(n,0),i=this.gs.firstAfterOrEqual(r);return R.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,R.resolve()}Ts(e,n){return this.ps(e)}ps(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ys(e){const n=this.ps(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class K3{constructor(e){this.Es=e,this.docs=new tt(z.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Es(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return R.resolve(r?r.document.mutableCopy():gt.newInvalidDocument(n))}getEntries(e,n){let r=Rr();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():gt.newInvalidDocument(i))}),R.resolve(r)}getAllFromCollection(e,n,r){let i=Rr();const s=new z(n.child("")),o=this.docs.getIteratorFrom(s);for(;o.hasNext();){const{key:a,value:{document:l}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||$U(DU(l),r)<=0||(i=i.insert(l.key,l.mutableCopy()))}return R.resolve(i)}getAllFromCollectionGroup(e,n,r,i){K()}As(e,n){return R.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new G3(this)}getSize(e){return R.resolve(this.size)}}class G3 extends V3{constructor(e){super(),this.Yn=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.Yn.addEntry(e,i)):this.Yn.removeEntry(r)}),R.waitFor(n)}getFromCache(e,n){return this.Yn.getEntry(e,n)}getAllFromCache(e,n){return this.Yn.getEntries(e,n)}}/**
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
 */class Q3{constructor(e){this.persistence=e,this.Rs=new Go(n=>Mv(n),Lv),this.lastRemoteSnapshotVersion=J.min(),this.highestTargetId=0,this.bs=0,this.Ps=new Bv,this.targetCount=0,this.vs=bo.Pn()}forEachTarget(e,n){return this.Rs.forEach((r,i)=>n(i)),R.resolve()}getLastRemoteSnapshotVersion(e){return R.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return R.resolve(this.bs)}allocateTargetId(e){return this.highestTargetId=this.vs.next(),R.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.bs&&(this.bs=n),R.resolve()}Dn(e){this.Rs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.vs=new bo(n),this.highestTargetId=n),e.sequenceNumber>this.bs&&(this.bs=e.sequenceNumber)}addTargetData(e,n){return this.Dn(n),this.targetCount+=1,R.resolve()}updateTargetData(e,n){return this.Dn(n),R.resolve()}removeTargetData(e,n){return this.Rs.delete(n.target),this.Ps.ls(n.targetId),this.targetCount-=1,R.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Rs.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Rs.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),R.waitFor(s).next(()=>i)}getTargetCount(e){return R.resolve(this.targetCount)}getTargetData(e,n){const r=this.Rs.get(n)||null;return R.resolve(r)}addMatchingKeys(e,n,r){return this.Ps.us(n,r),R.resolve()}removeMatchingKeys(e,n,r){this.Ps.hs(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),R.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Ps.ls(n),R.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Ps.ds(n);return R.resolve(r)}containsKey(e,n){return R.resolve(this.Ps.containsKey(n))}}/**
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
 */class Y3{constructor(e,n){this.Vs={},this.overlays={},this.Ss=new Dv(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=e(this),this.Cs=new Q3(this),this.indexManager=new U3,this.remoteDocumentCache=function(r){return new K3(r)}(r=>this.referenceDelegate.xs(r)),this.It=new L3(n),this.Ns=new W3(this.It)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new H3,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Vs[e.toKey()];return r||(r=new q3(n,this.referenceDelegate),this.Vs[e.toKey()]=r),r}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(e,n,r){F("MemoryPersistence","Starting transaction:",e);const i=new X3(this.Ss.next());return this.referenceDelegate.ks(),r(i).next(s=>this.referenceDelegate.Ms(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Os(e,n){return R.or(Object.values(this.Vs).map(r=>()=>r.containsKey(e,n)))}}class X3 extends LU{constructor(e){super(),this.currentSequenceNumber=e}}class jv{constructor(e){this.persistence=e,this.Fs=new Bv,this.$s=null}static Bs(e){return new jv(e)}get Ls(){if(this.$s)return this.$s;throw K()}addReference(e,n,r){return this.Fs.addReference(r,n),this.Ls.delete(r.toString()),R.resolve()}removeReference(e,n,r){return this.Fs.removeReference(r,n),this.Ls.add(r.toString()),R.resolve()}markPotentiallyOrphaned(e,n){return this.Ls.add(n.toString()),R.resolve()}removeTarget(e,n){this.Fs.ls(n.targetId).forEach(i=>this.Ls.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Ls.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}ks(){this.$s=new Set}Ms(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return R.forEach(this.Ls,r=>{const i=z.fromPath(r);return this.Us(e,i).next(s=>{s||n.removeEntry(i,J.min())})}).next(()=>(this.$s=null,n.apply(e)))}updateLimboDocument(e,n){return this.Us(e,n).next(r=>{r?this.Ls.delete(n.toString()):this.Ls.add(n.toString())})}xs(e){return 0}Us(e,n){return R.or([()=>R.resolve(this.Fs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Os(e,n)])}}/**
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
 */class Wv{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Si=r,this.Di=i}static Ci(e,n){let r=ne(),i=ne();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Wv(e,n.fromCache,r,i)}}/**
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
 */class J3{constructor(){this.xi=!1}initialize(e,n){this.Ni=e,this.indexManager=n,this.xi=!0}getDocumentsMatchingQuery(e,n,r,i){return this.ki(e,n).next(s=>s||this.Mi(e,n,i,r)).next(s=>s||this.Oi(e,n))}ki(e,n){if(R1(n))return R.resolve(null);let r=xr(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Mh(n,null,"F"),r=xr(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=ne(...s);return this.Ni.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.Fi(n,a);return this.$i(n,u,o,l.readTime)?this.ki(e,Mh(n,null,"F")):this.Bi(e,u,n,l)}))})))}Mi(e,n,r,i){return R1(n)||i.isEqual(J.min())?this.Oi(e,n):this.Ni.getDocuments(e,r).next(s=>{const o=this.Fi(n,s);return this.$i(n,o,r,i)?this.Oi(e,n):(_1()<=se.DEBUG&&F("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),sg(n)),this.Bi(e,o,n,OU(i,-1)))})}Fi(e,n){let r=new Ze(kb(e));return n.forEach((i,s)=>{Uv(e,s)&&(r=r.add(s))}),r}$i(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Oi(e,n){return _1()<=se.DEBUG&&F("QueryEngine","Using full collection scan to execute query:",sg(n)),this.Ni.getDocumentsMatchingQuery(e,n,li.min())}Bi(e,n,r,i){return this.Ni.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class Z3{constructor(e,n,r,i){this.persistence=e,this.Li=n,this.It=i,this.Ui=new tt(de),this.qi=new Go(s=>Mv(s),Lv),this.Ki=new Map,this.Gi=e.getRemoteDocumentCache(),this.Cs=e.getTargetCache(),this.Ns=e.getBundleCache(),this.Qi(r)}Qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new j3(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ui))}}function e4(t,e,n,r){return new Z3(t,e,n,r)}async function Gb(t,e){const n=G(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.Qi(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=ne();for(const u of i){o.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}for(const u of s){a.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}return n.localDocuments.getDocuments(r,l).next(u=>({ji:u,removedBatchIds:o,addedBatchIds:a}))})})}function t4(t,e){const n=G(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.Gi.newChangeBuffer({trackRemovals:!0});return function(o,a,l,u){const c=l.batch,h=c.keys();let d=R.resolve();return h.forEach(f=>{d=d.next(()=>u.getEntry(a,f)).next(p=>{const y=l.docVersions.get(f);Se(y!==null),p.version.compareTo(y)<0&&(c.applyToRemoteDocument(p,l),p.isValidDocument()&&(p.setReadTime(l.commitVersion),u.addEntry(p)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,c))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(o){let a=ne();for(let l=0;l<o.mutationResults.length;++l)o.mutationResults[l].transformResults.length>0&&(a=a.add(o.batch.mutations[l].key));return a}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function Qb(t){const e=G(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Cs.getLastRemoteSnapshotVersion(n))}function n4(t,e){const n=G(t),r=e.snapshotVersion;let i=n.Ui;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Gi.newChangeBuffer({trackRemovals:!0});i=n.Ui;const a=[];e.targetChanges.forEach((c,h)=>{const d=i.get(h);if(!d)return;a.push(n.Cs.removeMatchingKeys(s,c.removedDocuments,h).next(()=>n.Cs.addMatchingKeys(s,c.addedDocuments,h)));let f=d.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.has(h)?f=f.withResumeToken(Ct.EMPTY_BYTE_STRING,J.min()).withLastLimboFreeSnapshotVersion(J.min()):c.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(c.resumeToken,r)),i=i.insert(h,f),function(p,y,w){return p.resumeToken.approximateByteSize()===0||y.snapshotVersion.toMicroseconds()-p.snapshotVersion.toMicroseconds()>=3e8?!0:w.addedDocuments.size+w.modifiedDocuments.size+w.removedDocuments.size>0}(d,f,c)&&a.push(n.Cs.updateTargetData(s,f))});let l=Rr(),u=ne();if(e.documentUpdates.forEach(c=>{e.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,c))}),a.push(r4(s,o,e.documentUpdates).next(c=>{l=c.Wi,u=c.zi})),!r.isEqual(J.min())){const c=n.Cs.getLastRemoteSnapshotVersion(s).next(h=>n.Cs.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(c)}return R.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,u)).next(()=>l)}).then(s=>(n.Ui=i,s))}function r4(t,e,n){let r=ne(),i=ne();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Rr();return n.forEach((a,l)=>{const u=s.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(J.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):F("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{Wi:o,zi:i}})}function i4(t,e){const n=G(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function s4(t,e){const n=G(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Cs.getTargetData(r,e).next(s=>s?(i=s,R.resolve(i)):n.Cs.allocateTargetId(r).next(o=>(i=new Hi(e,o,0,r.currentSequenceNumber),n.Cs.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.Ui.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ui=n.Ui.insert(r.targetId,r),n.qi.set(e,r.targetId)),r})}async function ug(t,e,n){const r=G(t),i=r.Ui.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!pu(o))throw o;F("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ui=r.Ui.remove(e),r.qi.delete(i.target)}function F1(t,e,n){const r=G(t);let i=J.min(),s=ne();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,l,u){const c=G(a),h=c.qi.get(u);return h!==void 0?R.resolve(c.Ui.get(h)):c.Cs.getTargetData(l,u)}(r,o,xr(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Cs.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.Li.getDocumentsMatchingQuery(o,e,n?i:J.min(),n?s:ne())).next(a=>(o4(r,e3(e),a),{documents:a,Hi:s})))}function o4(t,e,n){let r=J.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Ki.set(e,r)}class U1{constructor(){this.activeTargetIds=zb()}er(e){this.activeTargetIds=this.activeTargetIds.add(e)}nr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}tr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class a4{constructor(){this.Lr=new U1,this.Ur={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Lr.er(e),this.Ur[e]||"not-current"}updateQueryState(e,n,r){this.Ur[e]=n}removeLocalQueryTarget(e){this.Lr.nr(e)}isLocalQueryTarget(e){return this.Lr.activeTargetIds.has(e)}clearQueryState(e){delete this.Ur[e]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(e){return this.Lr.activeTargetIds.has(e)}start(){return this.Lr=new U1,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class l4{qr(e){}shutdown(){}}/**
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
 */class z1{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}qr(e){this.Wr.push(e)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){F("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Wr)e(0)}jr(){F("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Wr)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */const u4={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
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
 */class c4{constructor(e){this.Hr=e.Hr,this.Jr=e.Jr}Yr(e){this.Xr=e}Zr(e){this.eo=e}onMessage(e){this.no=e}close(){this.Jr()}send(e){this.Hr(e)}so(){this.Xr()}io(e){this.eo(e)}ro(e){this.no(e)}}/**
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
 */class h4 extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.oo=n+"://"+e.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}co(e,n,r,i,s){const o=this.ao(e,n);F("RestConnection","Sending: ",o,r);const a={};return this.ho(a,i,s),this.lo(e,o,a,r).then(l=>(F("RestConnection","Received: ",l),l),l=>{throw w1("RestConnection",`${e} failed with error: `,l,"url: ",o,"request:",r),l})}fo(e,n,r,i,s,o){return this.co(e,n,r,i,s)}ho(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+qo,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}ao(e,n){const r=u4[e];return`${this.oo}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}lo(e,n,r,i){return new Promise((s,o)=>{const a=new SU;a.listenOnce(wU.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case fp.NO_ERROR:const u=a.getResponseJson();F("Connection","XHR received:",JSON.stringify(u)),s(u);break;case fp.TIMEOUT:F("Connection",'RPC "'+e+'" timed out'),o(new U(k.DEADLINE_EXCEEDED,"Request time out"));break;case fp.HTTP_ERROR:const c=a.getStatus();if(F("Connection",'RPC "'+e+'" failed with status:',c,"response text:",a.getResponseText()),c>0){const h=a.getResponseJson().error;if(h&&h.status&&h.message){const d=function(f){const p=f.toLowerCase().replace(/_/g,"-");return Object.values(k).indexOf(p)>=0?p:k.UNKNOWN}(h.status);o(new U(d,h.message))}else o(new U(k.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new U(k.UNAVAILABLE,"Connection failed."));break;default:K()}}finally{F("Connection",'RPC "'+e+'" completed.')}});const l=JSON.stringify(i);a.send(n,"POST",l,r,15)})}_o(e,n,r){const i=[this.oo,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=vU(),o=_U(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new EU({})),this.ho(a.initMessageHeaders,n,r),hd()||Cy()||qP()||gT()||KP()||mT()||(a.httpHeadersOverwriteParam="$httpHeaders");const l=i.join("");F("Connection","Creating WebChannel: "+l,a);const u=s.createWebChannel(l,a);let c=!1,h=!1;const d=new c4({Hr:p=>{h?F("Connection","Not sending because WebChannel is closed:",p):(c||(F("Connection","Opening WebChannel transport."),u.open(),c=!0),F("Connection","WebChannel sending:",p),u.send(p))},Jr:()=>u.close()}),f=(p,y,w)=>{p.listen(y,g=>{try{w(g)}catch(m){setTimeout(()=>{throw m},0)}})};return f(u,Zu.EventType.OPEN,()=>{h||F("Connection","WebChannel transport opened.")}),f(u,Zu.EventType.CLOSE,()=>{h||(h=!0,F("Connection","WebChannel transport closed"),d.io())}),f(u,Zu.EventType.ERROR,p=>{h||(h=!0,w1("Connection","WebChannel transport errored:",p),d.io(new U(k.UNAVAILABLE,"The operation could not be completed")))}),f(u,Zu.EventType.MESSAGE,p=>{var y;if(!h){const w=p.data[0];Se(!!w);const g=w,m=g.error||((y=g[0])===null||y===void 0?void 0:y.error);if(m){F("Connection","WebChannel received error:",m);const v=m.status;let _=function(T){const S=je[T];if(S!==void 0)return Mb(S)}(v),C=m.message;_===void 0&&(_=k.INTERNAL,C="Unknown error status: "+v+" with message "+m.message),h=!0,d.io(new U(_,C)),u.close()}else F("Connection","WebChannel received:",w),d.ro(w)}}),f(o,CU.STAT_EVENT,p=>{p.stat===y1.PROXY?F("Connection","Detected buffering proxy"):p.stat===y1.NOPROXY&&F("Connection","Detected no buffering proxy")}),setTimeout(()=>{d.so()},0),d}}function mp(){return typeof document<"u"?document:null}/**
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
 */function Vd(t){return new w3(t,!0)}class Yb{constructor(e,n,r=1e3,i=1.5,s=6e4){this.Hs=e,this.timerId=n,this.wo=r,this.mo=i,this.yo=s,this.po=0,this.Io=null,this.To=Date.now(),this.reset()}reset(){this.po=0}Eo(){this.po=this.yo}Ao(e){this.cancel();const n=Math.floor(this.po+this.Ro()),r=Math.max(0,Date.now()-this.To),i=Math.max(0,n-r);i>0&&F("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.po} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Io=this.Hs.enqueueAfterDelay(this.timerId,i,()=>(this.To=Date.now(),e())),this.po*=this.mo,this.po<this.wo&&(this.po=this.wo),this.po>this.yo&&(this.po=this.yo)}bo(){this.Io!==null&&(this.Io.skipDelay(),this.Io=null)}cancel(){this.Io!==null&&(this.Io.cancel(),this.Io=null)}Ro(){return(Math.random()-.5)*this.po}}/**
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
 */class Xb{constructor(e,n,r,i,s,o,a,l){this.Hs=e,this.Po=r,this.vo=i,this.Vo=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.So=0,this.Do=null,this.Co=null,this.stream=null,this.xo=new Yb(e,n)}No(){return this.state===1||this.state===5||this.ko()}ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Mo()}async stop(){this.No()&&await this.close(0)}Oo(){this.state=0,this.xo.reset()}Fo(){this.ko()&&this.Do===null&&(this.Do=this.Hs.enqueueAfterDelay(this.Po,6e4,()=>this.$o()))}Bo(e){this.Lo(),this.stream.send(e)}async $o(){if(this.ko())return this.close(0)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}Uo(){this.Co&&(this.Co.cancel(),this.Co=null)}async close(e,n){this.Lo(),this.Uo(),this.xo.cancel(),this.So++,e!==4?this.xo.reset():n&&n.code===k.RESOURCE_EXHAUSTED?(br(n.toString()),br("Using maximum backoff delay to prevent overloading the backend."),this.xo.Eo()):n&&n.code===k.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.qo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(n)}qo(){}auth(){this.state=1;const e=this.Ko(this.So),n=this.So;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.So===n&&this.Go(r,i)},r=>{e(()=>{const i=new U(k.UNKNOWN,"Fetching auth token failed: "+r.message);return this.Qo(i)})})}Go(e,n){const r=this.Ko(this.So);this.stream=this.jo(e,n),this.stream.Yr(()=>{r(()=>(this.state=2,this.Co=this.Hs.enqueueAfterDelay(this.vo,1e4,()=>(this.ko()&&(this.state=3),Promise.resolve())),this.listener.Yr()))}),this.stream.Zr(i=>{r(()=>this.Qo(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Mo(){this.state=5,this.xo.Ao(async()=>{this.state=0,this.start()})}Qo(e){return F("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Ko(e){return n=>{this.Hs.enqueueAndForget(()=>this.So===e?n():(F("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class d4 extends Xb{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.It=s}jo(e,n){return this.Vo._o("Listen",e,n)}onMessage(e){this.xo.reset();const n=S3(this.It,e),r=function(i){if(!("targetChange"in i))return J.min();const s=i.targetChange;return s.targetIds&&s.targetIds.length?J.min():s.readTime?_r(s.readTime):J.min()}(e);return this.listener.Wo(n,r)}zo(e){const n={};n.database=lg(this.It),n.addTarget=function(i,s){let o;const a=s.target;return o=ig(a)?{documents:k3(i,a)}:{query:b3(i,a)},o.targetId=s.targetId,s.resumeToken.approximateByteSize()>0?o.resumeToken=jb(i,s.resumeToken):s.snapshotVersion.compareTo(J.min())>0&&(o.readTime=Fh(i,s.snapshotVersion.toTimestamp())),o}(this.It,e);const r=R3(this.It,e);r&&(n.labels=r),this.Bo(n)}Ho(e){const n={};n.database=lg(this.It),n.removeTarget=e,this.Bo(n)}}class f4 extends Xb{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.It=s,this.Jo=!1}get Yo(){return this.Jo}start(){this.Jo=!1,this.lastStreamToken=void 0,super.start()}qo(){this.Jo&&this.Xo([])}jo(e,n){return this.Vo._o("Write",e,n)}onMessage(e){if(Se(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Jo){this.xo.reset();const n=I3(e.writeResults,e.commitTime),r=_r(e.commitTime);return this.listener.Zo(r,n)}return Se(!e.writeResults||e.writeResults.length===0),this.Jo=!0,this.listener.tu()}eu(){const e={};e.database=lg(this.It),this.Bo(e)}Xo(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>T3(this.It,r))};this.Bo(n)}}/**
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
 */class p4 extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.Vo=r,this.It=i,this.nu=!1}su(){if(this.nu)throw new U(k.FAILED_PRECONDITION,"The client has already been terminated.")}co(e,n,r){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.Vo.co(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===k.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new U(k.UNKNOWN,i.toString())})}fo(e,n,r,i){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.Vo.fo(e,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===k.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new U(k.UNKNOWN,s.toString())})}terminate(){this.nu=!0}}class m4{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.iu=0,this.ru=null,this.ou=!0}uu(){this.iu===0&&(this.cu("Unknown"),this.ru=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ru=null,this.au("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve())))}hu(e){this.state==="Online"?this.cu("Unknown"):(this.iu++,this.iu>=1&&(this.lu(),this.au(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.cu("Offline")))}set(e){this.lu(),this.iu=0,e==="Online"&&(this.ou=!1),this.cu(e)}cu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}au(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ou?(br(n),this.ou=!1):F("OnlineStateTracker",n)}lu(){this.ru!==null&&(this.ru.cancel(),this.ru=null)}}/**
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
 */class g4{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.fu=[],this.du=new Map,this._u=new Set,this.wu=[],this.mu=s,this.mu.qr(o=>{r.enqueueAndForget(async()=>{Cs(this)&&(F("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=G(a);l._u.add(4),await _u(l),l.gu.set("Unknown"),l._u.delete(4),await Bd(l)}(this))})}),this.gu=new m4(r,i)}}async function Bd(t){if(Cs(t))for(const e of t.wu)await e(!0)}async function _u(t){for(const e of t.wu)await e(!1)}function Jb(t,e){const n=G(t);n.du.has(e.targetId)||(n.du.set(e.targetId,e),Kv(n)?qv(n):Qo(n).ko()&&Hv(n,e))}function Zb(t,e){const n=G(t),r=Qo(n);n.du.delete(e),r.ko()&&ex(n,e),n.du.size===0&&(r.ko()?r.Fo():Cs(n)&&n.gu.set("Unknown"))}function Hv(t,e){t.yu.Ot(e.targetId),Qo(t).zo(e)}function ex(t,e){t.yu.Ot(e),Qo(t).Ho(e)}function qv(t){t.yu=new y3({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),se:e=>t.du.get(e)||null}),Qo(t).start(),t.gu.uu()}function Kv(t){return Cs(t)&&!Qo(t).No()&&t.du.size>0}function Cs(t){return G(t)._u.size===0}function tx(t){t.yu=void 0}async function y4(t){t.du.forEach((e,n)=>{Hv(t,e)})}async function v4(t,e){tx(t),Kv(t)?(t.gu.hu(e),qv(t)):t.gu.set("Unknown")}async function _4(t,e,n){if(t.gu.set("Online"),e instanceof Bb&&e.state===2&&e.cause)try{await async function(r,i){const s=i.cause;for(const o of i.targetIds)r.du.has(o)&&(await r.remoteSyncer.rejectListen(o,s),r.du.delete(o),r.yu.removeTarget(o))}(t,e)}catch(r){F("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Uh(t,r)}else if(e instanceof bc?t.yu.Gt(e):e instanceof Vb?t.yu.Yt(e):t.yu.Wt(e),!n.isEqual(J.min()))try{const r=await Qb(t.localStore);n.compareTo(r)>=0&&await function(i,s){const o=i.yu.te(s);return o.targetChanges.forEach((a,l)=>{if(a.resumeToken.approximateByteSize()>0){const u=i.du.get(l);u&&i.du.set(l,u.withResumeToken(a.resumeToken,s))}}),o.targetMismatches.forEach(a=>{const l=i.du.get(a);if(!l)return;i.du.set(a,l.withResumeToken(Ct.EMPTY_BYTE_STRING,l.snapshotVersion)),ex(i,a);const u=new Hi(l.target,a,1,l.sequenceNumber);Hv(i,u)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(r){F("RemoteStore","Failed to raise snapshot:",r),await Uh(t,r)}}async function Uh(t,e,n){if(!pu(e))throw e;t._u.add(1),await _u(t),t.gu.set("Offline"),n||(n=()=>Qb(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{F("RemoteStore","Retrying IndexedDB access"),await n(),t._u.delete(1),await Bd(t)})}function nx(t,e){return e().catch(n=>Uh(t,n,e))}async function jd(t){const e=G(t),n=ci(e);let r=e.fu.length>0?e.fu[e.fu.length-1].batchId:-1;for(;w4(e);)try{const i=await i4(e.localStore,r);if(i===null){e.fu.length===0&&n.Fo();break}r=i.batchId,C4(e,i)}catch(i){await Uh(e,i)}rx(e)&&ix(e)}function w4(t){return Cs(t)&&t.fu.length<10}function C4(t,e){t.fu.push(e);const n=ci(t);n.ko()&&n.Yo&&n.Xo(e.mutations)}function rx(t){return Cs(t)&&!ci(t).No()&&t.fu.length>0}function ix(t){ci(t).start()}async function E4(t){ci(t).eu()}async function S4(t){const e=ci(t);for(const n of t.fu)e.Xo(n.mutations)}async function T4(t,e,n){const r=t.fu.shift(),i=Vv.from(r,e,n);await nx(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await jd(t)}async function I4(t,e){e&&ci(t).Yo&&await async function(n,r){if(i=r.code,d3(i)&&i!==k.ABORTED){const s=n.fu.shift();ci(n).Oo(),await nx(n,()=>n.remoteSyncer.rejectFailedWrite(s.batchId,r)),await jd(n)}var i}(t,e),rx(t)&&ix(t)}async function V1(t,e){const n=G(t);n.asyncQueue.verifyOperationInProgress(),F("RemoteStore","RemoteStore received new credentials");const r=Cs(n);n._u.add(3),await _u(n),r&&n.gu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n._u.delete(3),await Bd(n)}async function k4(t,e){const n=G(t);e?(n._u.delete(2),await Bd(n)):e||(n._u.add(2),await _u(n),n.gu.set("Unknown"))}function Qo(t){return t.pu||(t.pu=function(e,n,r){const i=G(e);return i.su(),new d4(n,i.Vo,i.authCredentials,i.appCheckCredentials,i.It,r)}(t.datastore,t.asyncQueue,{Yr:y4.bind(null,t),Zr:v4.bind(null,t),Wo:_4.bind(null,t)}),t.wu.push(async e=>{e?(t.pu.Oo(),Kv(t)?qv(t):t.gu.set("Unknown")):(await t.pu.stop(),tx(t))})),t.pu}function ci(t){return t.Iu||(t.Iu=function(e,n,r){const i=G(e);return i.su(),new f4(n,i.Vo,i.authCredentials,i.appCheckCredentials,i.It,r)}(t.datastore,t.asyncQueue,{Yr:E4.bind(null,t),Zr:I4.bind(null,t),tu:S4.bind(null,t),Zo:T4.bind(null,t)}),t.wu.push(async e=>{e?(t.Iu.Oo(),await jd(t)):(await t.Iu.stop(),t.fu.length>0&&(F("RemoteStore",`Stopping write stream with ${t.fu.length} pending writes`),t.fu=[]))})),t.Iu}/**
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
 */class Gv{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Wi,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new Gv(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new U(k.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Qv(t,e){if(br("AsyncQueue",`${e}: ${t}`),pu(t))return new U(k.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class ao{constructor(e){this.comparator=e?(n,r)=>e(n,r)||z.comparator(n.key,r.key):(n,r)=>z.comparator(n.key,r.key),this.keyedMap=Ia(),this.sortedSet=new tt(this.comparator)}static emptySet(e){return new ao(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof ao)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new ao;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class B1{constructor(){this.Tu=new tt(z.comparator)}track(e){const n=e.doc.key,r=this.Tu.get(n);r?e.type!==0&&r.type===3?this.Tu=this.Tu.insert(n,e):e.type===3&&r.type!==1?this.Tu=this.Tu.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Tu=this.Tu.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Tu=this.Tu.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Tu=this.Tu.remove(n):e.type===1&&r.type===2?this.Tu=this.Tu.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Tu=this.Tu.insert(n,{type:2,doc:e.doc}):K():this.Tu=this.Tu.insert(n,e)}Eu(){const e=[];return this.Tu.inorderTraversal((n,r)=>{e.push(r)}),e}}class xo{constructor(e,n,r,i,s,o,a,l){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l}static fromInitialDocuments(e,n,r,i){const s=[];return n.forEach(o=>{s.push({type:0,doc:o})}),new xo(e,n,ao.emptySet(n),s,r,i,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&gu(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class b4{constructor(){this.Au=void 0,this.listeners=[]}}class x4{constructor(){this.queries=new Go(e=>Ib(e),gu),this.onlineState="Unknown",this.Ru=new Set}}async function R4(t,e){const n=G(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new b4),i)try{s.Au=await n.onListen(r)}catch(o){const a=Qv(o,`Initialization of query '${sg(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.listeners.push(e),e.bu(n.onlineState),s.Au&&e.Pu(s.Au)&&Yv(n)}async function N4(t,e){const n=G(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function A4(t,e){const n=G(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.Pu(i)&&(r=!0);o.Au=i}}r&&Yv(n)}function P4(t,e,n){const r=G(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function Yv(t){t.Ru.forEach(e=>{e.next()})}class O4{constructor(e,n,r){this.query=e,this.vu=n,this.Vu=!1,this.Su=null,this.onlineState="Unknown",this.options=r||{}}Pu(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new xo(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}let n=!1;return this.Vu?this.Du(e)&&(this.vu.next(e),n=!0):this.Cu(e,this.onlineState)&&(this.xu(e),n=!0),this.Su=e,n}onError(e){this.vu.error(e)}bu(e){this.onlineState=e;let n=!1;return this.Su&&!this.Vu&&this.Cu(this.Su,e)&&(this.xu(this.Su),n=!0),n}Cu(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.Nu||!r)&&(!e.docs.isEmpty()||n==="Offline")}Du(e){if(e.docChanges.length>0)return!0;const n=this.Su&&this.Su.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}xu(e){e=xo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.Vu=!0,this.vu.next(e)}}/**
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
 */class sx{constructor(e){this.key=e}}class ox{constructor(e){this.key=e}}class D4{constructor(e,n){this.query=e,this.Lu=n,this.Uu=null,this.current=!1,this.qu=ne(),this.mutatedKeys=ne(),this.Ku=kb(e),this.Gu=new ao(this.Ku)}get Qu(){return this.Lu}ju(e,n){const r=n?n.Wu:new B1,i=n?n.Gu:this.Gu;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((c,h)=>{const d=i.get(c),f=Uv(this.query,h)?h:null,p=!!d&&this.mutatedKeys.has(d.key),y=!!f&&(f.hasLocalMutations||this.mutatedKeys.has(f.key)&&f.hasCommittedMutations);let w=!1;d&&f?d.data.isEqual(f.data)?p!==y&&(r.track({type:3,doc:f}),w=!0):this.zu(d,f)||(r.track({type:2,doc:f}),w=!0,(l&&this.Ku(f,l)>0||u&&this.Ku(f,u)<0)&&(a=!0)):!d&&f?(r.track({type:0,doc:f}),w=!0):d&&!f&&(r.track({type:1,doc:d}),w=!0,(l||u)&&(a=!0)),w&&(f?(o=o.add(f),s=y?s.add(c):s.delete(c)):(o=o.delete(c),s=s.delete(c)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const c=this.query.limitType==="F"?o.last():o.first();o=o.delete(c.key),s=s.delete(c.key),r.track({type:1,doc:c})}return{Gu:o,Wu:r,$i:a,mutatedKeys:s}}zu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const i=this.Gu;this.Gu=e.Gu,this.mutatedKeys=e.mutatedKeys;const s=e.Wu.Eu();s.sort((u,c)=>function(h,d){const f=p=>{switch(p){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return K()}};return f(h)-f(d)}(u.type,c.type)||this.Ku(u.doc,c.doc)),this.Hu(r);const o=n?this.Ju():[],a=this.qu.size===0&&this.current?1:0,l=a!==this.Uu;return this.Uu=a,s.length!==0||l?{snapshot:new xo(this.query,e.Gu,i,s,e.mutatedKeys,a===0,l,!1),Yu:o}:{Yu:o}}bu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Gu:this.Gu,Wu:new B1,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Yu:[]}}Xu(e){return!this.Lu.has(e)&&!!this.Gu.has(e)&&!this.Gu.get(e).hasLocalMutations}Hu(e){e&&(e.addedDocuments.forEach(n=>this.Lu=this.Lu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Lu=this.Lu.delete(n)),this.current=e.current)}Ju(){if(!this.current)return[];const e=this.qu;this.qu=ne(),this.Gu.forEach(r=>{this.Xu(r.key)&&(this.qu=this.qu.add(r.key))});const n=[];return e.forEach(r=>{this.qu.has(r)||n.push(new ox(r))}),this.qu.forEach(r=>{e.has(r)||n.push(new sx(r))}),n}Zu(e){this.Lu=e.Hi,this.qu=ne();const n=this.ju(e.documents);return this.applyChanges(n,!0)}tc(){return xo.fromInitialDocuments(this.query,this.Gu,this.mutatedKeys,this.Uu===0)}}class $4{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class M4{constructor(e){this.key=e,this.ec=!1}}class L4{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.nc={},this.sc=new Go(a=>Ib(a),gu),this.ic=new Map,this.rc=new Set,this.oc=new tt(z.comparator),this.uc=new Map,this.cc=new Bv,this.ac={},this.hc=new Map,this.lc=bo.vn(),this.onlineState="Unknown",this.fc=void 0}get isPrimaryClient(){return this.fc===!0}}async function F4(t,e){const n=G4(t);let r,i;const s=n.sc.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.tc();else{const o=await s4(n.localStore,xr(e));n.isPrimaryClient&&Jb(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await U4(n,e,r,a==="current")}return i}async function U4(t,e,n,r){t.dc=(c,h,d)=>async function(f,p,y,w){let g=p.view.ju(y);g.$i&&(g=await F1(f.localStore,p.query,!1).then(({documents:_})=>p.view.ju(_,g)));const m=w&&w.targetChanges.get(p.targetId),v=p.view.applyChanges(g,f.isPrimaryClient,m);return W1(f,p.targetId,v.Yu),v.snapshot}(t,c,h,d);const i=await F1(t.localStore,e,!0),s=new D4(e,i.Hi),o=s.ju(i.documents),a=vu.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline"),l=s.applyChanges(o,t.isPrimaryClient,a);W1(t,n,l.Yu);const u=new $4(e,n,s);return t.sc.set(e,u),t.ic.has(n)?t.ic.get(n).push(e):t.ic.set(n,[e]),l.snapshot}async function z4(t,e){const n=G(t),r=n.sc.get(e),i=n.ic.get(r.targetId);if(i.length>1)return n.ic.set(r.targetId,i.filter(s=>!gu(s,e))),void n.sc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await ug(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),Zb(n.remoteStore,r.targetId),cg(n,r.targetId)}).catch(fu)):(cg(n,r.targetId),await ug(n.localStore,r.targetId,!0))}async function V4(t,e,n){const r=Q4(t);try{const i=await function(s,o){const a=G(s),l=Je.now(),u=o.reduce((d,f)=>d.add(f.key),ne());let c,h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let f=Rr(),p=ne();return a.Gi.getEntries(d,u).next(y=>{f=y,f.forEach((w,g)=>{g.isValidDocument()||(p=p.add(w))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,f)).next(y=>{c=y;const w=[];for(const g of o){const m=u3(g,c.get(g.key).overlayedDocument);m!=null&&w.push(new ws(g.key,m,Cb(m.value.mapValue),vr.exists(!0)))}return a.mutationQueue.addMutationBatch(d,l,w,o)}).next(y=>{h=y;const w=y.applyToLocalDocumentSet(c,p);return a.documentOverlayCache.saveOverlays(d,y.batchId,w)})}).then(()=>({batchId:h.batchId,changes:Fb(c)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(s,o,a){let l=s.ac[s.currentUser.toKey()];l||(l=new tt(de)),l=l.insert(o,a),s.ac[s.currentUser.toKey()]=l}(r,i.batchId,n),await wu(r,i.changes),await jd(r.remoteStore)}catch(i){const s=Qv(i,"Failed to persist write");n.reject(s)}}async function ax(t,e){const n=G(t);try{const r=await n4(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.uc.get(s);o&&(Se(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.ec=!0:i.modifiedDocuments.size>0?Se(o.ec):i.removedDocuments.size>0&&(Se(o.ec),o.ec=!1))}),await wu(n,r,e)}catch(r){await fu(r)}}function j1(t,e,n){const r=G(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.sc.forEach((s,o)=>{const a=o.view.bu(e);a.snapshot&&i.push(a.snapshot)}),function(s,o){const a=G(s);a.onlineState=o;let l=!1;a.queries.forEach((u,c)=>{for(const h of c.listeners)h.bu(o)&&(l=!0)}),l&&Yv(a)}(r.eventManager,e),i.length&&r.nc.Wo(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function B4(t,e,n){const r=G(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.uc.get(e),s=i&&i.key;if(s){let o=new tt(z.comparator);o=o.insert(s,gt.newNoDocument(s,J.min()));const a=ne().add(s),l=new zd(J.min(),new Map,new Ze(de),o,a);await ax(r,l),r.oc=r.oc.remove(s),r.uc.delete(e),Xv(r)}else await ug(r.localStore,e,!1).then(()=>cg(r,e,n)).catch(fu)}async function j4(t,e){const n=G(t),r=e.batch.batchId;try{const i=await t4(n.localStore,e);ux(n,r,null),lx(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await wu(n,i)}catch(i){await fu(i)}}async function W4(t,e,n){const r=G(t);try{const i=await function(s,o){const a=G(s);return a.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let u;return a.mutationQueue.lookupMutationBatch(l,o).next(c=>(Se(c!==null),u=c.keys(),a.mutationQueue.removeMutationBatch(l,c))).next(()=>a.mutationQueue.performConsistencyCheck(l)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(l,u,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,u)).next(()=>a.localDocuments.getDocuments(l,u))})}(r.localStore,e);ux(r,e,n),lx(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await wu(r,i)}catch(i){await fu(i)}}function lx(t,e){(t.hc.get(e)||[]).forEach(n=>{n.resolve()}),t.hc.delete(e)}function ux(t,e,n){const r=G(t);let i=r.ac[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.ac[r.currentUser.toKey()]=i}}function cg(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.ic.get(e))t.sc.delete(r),n&&t.nc._c(r,n);t.ic.delete(e),t.isPrimaryClient&&t.cc.ls(e).forEach(r=>{t.cc.containsKey(r)||cx(t,r)})}function cx(t,e){t.rc.delete(e.path.canonicalString());const n=t.oc.get(e);n!==null&&(Zb(t.remoteStore,n),t.oc=t.oc.remove(e),t.uc.delete(n),Xv(t))}function W1(t,e,n){for(const r of n)r instanceof sx?(t.cc.addReference(r.key,e),H4(t,r)):r instanceof ox?(F("SyncEngine","Document no longer in limbo: "+r.key),t.cc.removeReference(r.key,e),t.cc.containsKey(r.key)||cx(t,r.key)):K()}function H4(t,e){const n=e.key,r=n.path.canonicalString();t.oc.get(n)||t.rc.has(r)||(F("SyncEngine","New document in limbo: "+n),t.rc.add(r),Xv(t))}function Xv(t){for(;t.rc.size>0&&t.oc.size<t.maxConcurrentLimboResolutions;){const e=t.rc.values().next().value;t.rc.delete(e);const n=new z(Ae.fromString(e)),r=t.lc.next();t.uc.set(r,new M4(n)),t.oc=t.oc.insert(n,r),Jb(t.remoteStore,new Hi(xr(Fv(n.path)),r,2,Dv.at))}}async function wu(t,e,n){const r=G(t),i=[],s=[],o=[];r.sc.isEmpty()||(r.sc.forEach((a,l)=>{o.push(r.dc(l,e,n).then(u=>{if(u){r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,u.fromCache?"not-current":"current"),i.push(u);const c=Wv.Ci(l.targetId,u);s.push(c)}}))}),await Promise.all(o),r.nc.Wo(i),await async function(a,l){const u=G(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",c=>R.forEach(l,h=>R.forEach(h.Si,d=>u.persistence.referenceDelegate.addReference(c,h.targetId,d)).next(()=>R.forEach(h.Di,d=>u.persistence.referenceDelegate.removeReference(c,h.targetId,d)))))}catch(c){if(!pu(c))throw c;F("LocalStore","Failed to update sequence numbers: "+c)}for(const c of l){const h=c.targetId;if(!c.fromCache){const d=u.Ui.get(h),f=d.snapshotVersion,p=d.withLastLimboFreeSnapshotVersion(f);u.Ui=u.Ui.insert(h,p)}}}(r.localStore,s))}async function q4(t,e){const n=G(t);if(!n.currentUser.isEqual(e)){F("SyncEngine","User change. New user:",e.toKey());const r=await Gb(n.localStore,e);n.currentUser=e,function(i,s){i.hc.forEach(o=>{o.forEach(a=>{a.reject(new U(k.CANCELLED,s))})}),i.hc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await wu(n,r.ji)}}function K4(t,e){const n=G(t),r=n.uc.get(e);if(r&&r.ec)return ne().add(r.key);{let i=ne();const s=n.ic.get(e);if(!s)return i;for(const o of s){const a=n.sc.get(o);i=i.unionWith(a.view.Qu)}return i}}function G4(t){const e=G(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=ax.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=K4.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=B4.bind(null,e),e.nc.Wo=A4.bind(null,e.eventManager),e.nc._c=P4.bind(null,e.eventManager),e}function Q4(t){const e=G(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=j4.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=W4.bind(null,e),e}class Y4{constructor(){this.synchronizeTabs=!1}async initialize(e){this.It=Vd(e.databaseInfo.databaseId),this.sharedClientState=this.mc(e),this.persistence=this.gc(e),await this.persistence.start(),this.localStore=this.yc(e),this.gcScheduler=this.Ic(e,this.localStore),this.indexBackfillerScheduler=this.Tc(e,this.localStore)}Ic(e,n){return null}Tc(e,n){return null}yc(e){return e4(this.persistence,new J3,e.initialUser,this.It)}gc(e){return new Y3(jv.Bs,this.It)}mc(e){return new a4}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class X4{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>j1(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=q4.bind(null,this.syncEngine),await k4(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new x4}createDatastore(e){const n=Vd(e.databaseInfo.databaseId),r=(i=e.databaseInfo,new h4(i));var i;return function(s,o,a,l){return new p4(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,i=e.asyncQueue,s=a=>j1(this.syncEngine,a,0),o=z1.C()?new z1:new l4,new g4(n,r,i,s,o);var n,r,i,s,o}createSyncEngine(e,n){return function(r,i,s,o,a,l,u){const c=new L4(r,i,s,o,a,l);return u&&(c.fc=!0),c}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=G(e);F("RemoteStore","RemoteStore shutting down."),n._u.add(5),await _u(n),n.mu.shutdown(),n.gu.set("Unknown")}(this.remoteStore)}}/**
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
 */class J4{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ac(this.observer.next,e)}error(e){this.observer.error?this.Ac(this.observer.error,e):br("Uncaught Error in snapshot listener:",e)}Rc(){this.muted=!0}Ac(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class Z4{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Vt.UNAUTHENTICATED,this.clientId=yb.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{F("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(F("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new U(k.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Wi;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Qv(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function ez(t,e){t.asyncQueue.verifyOperationInProgress(),F("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await Gb(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function tz(t,e){t.asyncQueue.verifyOperationInProgress();const n=await nz(t);F("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>V1(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>V1(e.remoteStore,s)),t.onlineComponents=e}async function nz(t){return t.offlineComponents||(F("FirestoreClient","Using default OfflineComponentProvider"),await ez(t,new Y4)),t.offlineComponents}async function hx(t){return t.onlineComponents||(F("FirestoreClient","Using default OnlineComponentProvider"),await tz(t,new X4)),t.onlineComponents}function rz(t){return hx(t).then(e=>e.syncEngine)}async function H1(t){const e=await hx(t),n=e.eventManager;return n.onListen=F4.bind(null,e.syncEngine),n.onUnlisten=z4.bind(null,e.syncEngine),n}const q1=new Map;/**
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
 */function dx(t,e,n){if(!n)throw new U(k.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function iz(t,e,n,r){if(e===!0&&r===!0)throw new U(k.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function K1(t){if(!z.isDocumentKey(t))throw new U(k.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function G1(t){if(z.isDocumentKey(t))throw new U(k.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Jv(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":K()}function xc(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new U(k.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Jv(t);throw new U(k.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function sz(t,e){if(e<=0)throw new U(k.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
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
 */class Q1{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new U(k.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new U(k.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,iz("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
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
 */class Zv{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Q1({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new U(k.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new U(k.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Q1(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new IU;switch(n.type){case"gapi":const r=n.client;return new xU(r,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new U(k.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=q1.get(e);n&&(F("ComponentProvider","Removing Datastore"),q1.delete(e),n.terminate())}(this),Promise.resolve()}}/**
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
 */class kn{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ri(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new kn(this.firestore,e,this._key)}}class hi{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new hi(this.firestore,e,this._query)}}class ri extends hi{constructor(e,n,r){super(e,n,Fv(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new kn(this.firestore,null,new z(e))}withConverter(e){return new ri(this.firestore,e,this._path)}}function oz(t,e,...n){if(t=ct(t),dx("collection","path",e),t instanceof Zv){const r=Ae.fromString(e,...n);return G1(r),new ri(t,null,r)}{if(!(t instanceof kn||t instanceof ri))throw new U(k.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ae.fromString(e,...n));return G1(r),new ri(t.firestore,null,r)}}function az(t,e,...n){if(t=ct(t),arguments.length===1&&(e=yb.R()),dx("doc","path",e),t instanceof Zv){const r=Ae.fromString(e,...n);return K1(r),new kn(t,null,new z(r))}{if(!(t instanceof kn||t instanceof ri))throw new U(k.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ae.fromString(e,...n));return K1(r),new kn(t.firestore,t instanceof ri?t.converter:null,new z(r))}}function lz(t,e){return t=ct(t),e=ct(e),t instanceof hi&&e instanceof hi&&t.firestore===e.firestore&&gu(t._query,e._query)&&t.converter===e.converter}/**
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
 */class uz{constructor(){this.$c=Promise.resolve(),this.Bc=[],this.Lc=!1,this.Uc=[],this.qc=null,this.Kc=!1,this.Gc=!1,this.Qc=[],this.xo=new Yb(this,"async_queue_retry"),this.jc=()=>{const n=mp();n&&F("AsyncQueue","Visibility state changed to "+n.visibilityState),this.xo.bo()};const e=mp();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.jc)}get isShuttingDown(){return this.Lc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Wc(),this.zc(e)}enterRestrictedMode(e){if(!this.Lc){this.Lc=!0,this.Gc=e||!1;const n=mp();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.jc)}}enqueue(e){if(this.Wc(),this.Lc)return new Promise(()=>{});const n=new Wi;return this.zc(()=>this.Lc&&this.Gc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Bc.push(e),this.Hc()))}async Hc(){if(this.Bc.length!==0){try{await this.Bc[0](),this.Bc.shift(),this.xo.reset()}catch(e){if(!pu(e))throw e;F("AsyncQueue","Operation failed with retryable error: "+e)}this.Bc.length>0&&this.xo.Ao(()=>this.Hc())}}zc(e){const n=this.$c.then(()=>(this.Kc=!0,e().catch(r=>{this.qc=r,this.Kc=!1;const i=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(r);throw br("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Kc=!1,r))));return this.$c=n,n}enqueueAfterDelay(e,n,r){this.Wc(),this.Qc.indexOf(e)>-1&&(n=0);const i=Gv.createAndSchedule(this,e,n,r,s=>this.Jc(s));return this.Uc.push(i),i}Wc(){this.qc&&K()}verifyOperationInProgress(){}async Yc(){let e;do e=this.$c,await e;while(e!==this.$c)}Xc(e){for(const n of this.Uc)if(n.timerId===e)return!0;return!1}Zc(e){return this.Yc().then(()=>{this.Uc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Uc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Yc()})}ta(e){this.Qc.push(e)}Jc(e){const n=this.Uc.indexOf(e);this.Uc.splice(n,1)}}function Y1(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const r=e;for(const i of n)if(i in r&&typeof r[i]=="function")return!0;return!1}(t,["next","error","complete"])}class zh extends Zv{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new uz,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||px(this),this._firestoreClient.terminate()}}function cz(t,e){const n=typeof t=="object"?t:Sy(),r=typeof t=="string"?t:e||"(default)";return zo(n,"firestore").getImmediate({identifier:r})}function fx(t){return t._firestoreClient||px(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function px(t){var e;const n=t._freezeSettings(),r=function(i,s,o,a){return new UU(i,s,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new Z4(t._authCredentials,t._appCheckCredentials,t._queue,r)}/**
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
 */class e0{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new U(k.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Rt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Ro{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ro(Ct.fromBase64String(e))}catch(n){throw new U(k.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Ro(Ct.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class t0{constructor(e){this._methodName=e}}/**
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
 */class n0{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new U(k.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new U(k.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return de(this._lat,e._lat)||de(this._long,e._long)}}/**
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
 */const hz=/^__.*__$/;class dz{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new ws(e,this.data,this.fieldMask,n,this.fieldTransforms):new yu(e,this.data,n,this.fieldTransforms)}}function mx(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw K()}}class r0{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.It=r,this.ignoreUndefinedProperties=i,s===void 0&&this.ea(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get na(){return this.settings.na}sa(e){return new r0(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.It,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ia(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.sa({path:r,ra:!1});return i.oa(e),i}ua(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.sa({path:r,ra:!1});return i.ea(),i}ca(e){return this.sa({path:void 0,ra:!0})}aa(e){return Vh(e,this.settings.methodName,this.settings.ha||!1,this.path,this.settings.la)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}ea(){if(this.path)for(let e=0;e<this.path.length;e++)this.oa(this.path.get(e))}oa(e){if(e.length===0)throw this.aa("Document fields must not be empty");if(mx(this.na)&&hz.test(e))throw this.aa('Document fields cannot begin and end with "__"')}}class fz{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.It=r||Vd(e)}fa(e,n,r,i=!1){return new r0({na:e,methodName:n,la:r,path:Rt.emptyPath(),ra:!1,ha:i},this.databaseId,this.It,this.ignoreUndefinedProperties)}}function pz(t){const e=t._freezeSettings(),n=Vd(t._databaseId);return new fz(t._databaseId,!!e.ignoreUndefinedProperties,n)}function mz(t,e,n,r,i,s={}){const o=t.fa(s.merge||s.mergeFields?2:0,e,n,i);_x("Data must be an object, but it was:",o,r);const a=yx(r,o);let l,u;if(s.merge)l=new er(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const c=[];for(const h of s.mergeFields){const d=gz(e,h,n);if(!o.contains(d))throw new U(k.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);vz(c,d)||c.push(d)}l=new er(c),u=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,u=o.fieldTransforms;return new dz(new Sn(a),l,u)}class i0 extends t0{_toFieldTransform(e){return new s3(e.path,new Dl)}isEqual(e){return e instanceof i0}}function gx(t,e){if(vx(t=ct(t)))return _x("Unsupported field value:",e,t),yx(t,e);if(t instanceof t0)return function(n,r){if(!mx(r.na))throw r.aa(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r.aa(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.ra&&e.na!==4)throw e.aa("Nested arrays are not supported");return function(n,r){const i=[];let s=0;for(const o of n){let a=gx(o,r.ca(s));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),s++}return{arrayValue:{values:i}}}(t,e)}return function(n,r){if((n=ct(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return n3(r.It,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=Je.fromDate(n);return{timestampValue:Fh(r.It,i)}}if(n instanceof Je){const i=new Je(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Fh(r.It,i)}}if(n instanceof n0)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Ro)return{bytesValue:jb(r.It,n._byteString)};if(n instanceof kn){const i=r.databaseId,s=n.firestore._databaseId;if(!s.isEqual(i))throw r.aa(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:zv(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r.aa(`Unsupported field value: ${Jv(n)}`)}(t,e)}function yx(t,e){const n={};return vb(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ko(t,(r,i)=>{const s=gx(i,e.ia(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function vx(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Je||t instanceof n0||t instanceof Ro||t instanceof kn||t instanceof t0)}function _x(t,e,n){if(!vx(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=Jv(n);throw r==="an object"?e.aa(t+" a custom object"):e.aa(t+" "+r)}}function gz(t,e,n){if((e=ct(e))instanceof e0)return e._internalPath;if(typeof e=="string")return wx(t,e);throw Vh("Field path arguments must be of type string or ",t,!1,void 0,n)}const yz=new RegExp("[~\\*/\\[\\]]");function wx(t,e,n){if(e.search(yz)>=0)throw Vh(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new e0(...e.split("."))._internalPath}catch{throw Vh(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Vh(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new U(k.INVALID_ARGUMENT,a+t+l)}function vz(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class Cx{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new kn(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new _z(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(s0("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class _z extends Cx{data(){return super.data()}}function s0(t,e){return typeof e=="string"?wx(t,e):e instanceof e0?e._internalPath:e._delegate._internalPath}/**
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
 */class ka{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Ex extends Cx{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Rc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(s0("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Rc extends Ex{data(e={}){return super.data(e)}}class wz{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new ka(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Rc(this._firestore,this._userDataWriter,r.key,r,new ka(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new U(k.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let s=0;return r._snapshot.docChanges.map(o=>({type:"added",doc:new Rc(r._firestore,r._userDataWriter,o.doc.key,o.doc,new ka(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter),oldIndex:-1,newIndex:s++}))}{let s=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new Rc(r._firestore,r._userDataWriter,o.doc.key,o.doc,new ka(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let l=-1,u=-1;return o.type!==0&&(l=s.indexOf(o.doc.key),s=s.delete(o.doc.key)),o.type!==1&&(s=s.add(o.doc),u=s.indexOf(o.doc.key)),{type:Cz(o.type),doc:a,oldIndex:l,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function Cz(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return K()}}/**
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
 */function Ez(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new U(k.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Sx{}function Sz(t,...e){for(const n of e)t=n._apply(t);return t}class Tz extends Sx{constructor(e,n){super(),this.wa=e,this.ya=n,this.type="orderBy"}_apply(e){const n=function(r,i,s){if(r.startAt!==null)throw new U(k.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(r.endAt!==null)throw new U(k.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new oo(i,s);return function(a,l){if(Sb(a)===null){const u=Tb(a);u!==null&&xz(a,u,l.field)}}(r,o),o}(e._query,this.wa,this.ya);return new hi(e.firestore,e.converter,function(r,i){const s=r.explicitOrderBy.concat([i]);return new mu(r.path,r.collectionGroup,s,r.filters.slice(),r.limit,r.limitType,r.startAt,r.endAt)}(e._query,n))}}function Iz(t,e="asc"){const n=e,r=s0("orderBy",t);return new Tz(r,n)}class kz extends Sx{constructor(e,n,r){super(),this.type=e,this.pa=n,this.Ia=r}_apply(e){return new hi(e.firestore,e.converter,Mh(e._query,this.pa,this.Ia))}}function bz(t){return sz("limit",t),new kz("limit",t,"F")}function xz(t,e,n){if(!n.isEqual(e))throw new U(k.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}/**
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
 */class Rz{convertValue(e,n="none"){switch(us(e)){case 0:return null;case 1:return e.booleanValue;case 2:return We(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Io(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw K()}}convertObject(e,n){const r={};return Ko(e.fields,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new n0(We(e.latitude),We(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=wb(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Nl(e));default:return null}}convertTimestamp(e){const n=ui(e);return new Je(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Ae.fromString(e);Se(Kb(r));const i=new Al(r.get(1),r.get(3)),s=new z(r.popFirst(5));return i.isEqual(n)||br(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */function Nz(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class Tx extends Rz{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ro(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new kn(this.firestore,null,n)}}function Az(t,e){const n=xc(t.firestore,zh),r=az(t),i=Nz(t.converter,e);return Oz(n,[mz(pz(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,vr.exists(!1))]).then(()=>r)}function Pz(t,...e){var n,r,i;t=ct(t);let s={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||Y1(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(Y1(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),e[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let l,u,c;if(t instanceof kn)u=xc(t.firestore,zh),c=Fv(t._key.path),l={next:h=>{e[o]&&e[o](Dz(u,t,h))},error:e[o+1],complete:e[o+2]};else{const h=xc(t,hi);u=xc(h.firestore,zh),c=h._query;const d=new Tx(u);l={next:f=>{e[o]&&e[o](new wz(u,d,h,f))},error:e[o+1],complete:e[o+2]},Ez(t._query)}return function(h,d,f,p){const y=new J4(p),w=new O4(d,y,f);return h.asyncQueue.enqueueAndForget(async()=>R4(await H1(h),w)),()=>{y.Rc(),h.asyncQueue.enqueueAndForget(async()=>N4(await H1(h),w))}}(fx(u),c,a,l)}function Oz(t,e){return function(n,r){const i=new Wi;return n.asyncQueue.enqueueAndForget(async()=>V4(await rz(n),r,i)),i.promise}(fx(t),e)}function Dz(t,e,n){const r=n.docs.get(e._key),i=new Tx(t);return new Ex(t,i,e._key,r,new ka(n.hasPendingWrites,n.fromCache),e.converter)}function $z(){return new i0("serverTimestamp")}(function(t,e=!0){(function(n){qo=n})(mi),Rn(new hn("firestore",(n,{instanceIdentifier:r,options:i})=>{const s=n.getProvider("app").getImmediate(),o=new zh(new kU(n.getProvider("auth-internal")),new NU(n.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new U(k.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Al(a.options.projectId,l)}(s,r),s);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),Ke(v1,"3.4.15",t),Ke(v1,"3.4.15","esm2017")})();/**
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
 */const Mz="functions";/**
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
 */class Lz{constructor(e,n,r){this.auth=null,this.messaging=null,this.appCheck=null,this.auth=e.getImmediate({optional:!0}),this.messaging=n.getImmediate({optional:!0}),this.auth||e.get().then(i=>this.auth=i,()=>{}),this.messaging||n.get().then(i=>this.messaging=i,()=>{}),this.appCheck||r.get().then(i=>this.appCheck=i,()=>{})}async getAuthToken(){if(!!this.auth)try{const e=await this.auth.getToken();return e==null?void 0:e.accessToken}catch{return}}async getMessagingToken(){if(!(!this.messaging||!("Notification"in self)||Notification.permission!=="granted"))try{return await this.messaging.getToken()}catch{return}}async getAppCheckToken(){if(this.appCheck){const e=await this.appCheck.getToken();return e.error?null:e.token}return null}async getContext(){const e=await this.getAuthToken(),n=await this.getMessagingToken(),r=await this.getAppCheckToken();return{authToken:e,messagingToken:n,appCheckToken:r}}}/**
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
 */const X1="us-central1";class Fz{constructor(e,n,r,i,s=X1,o){this.app=e,this.fetchImpl=o,this.emulatorOrigin=null,this.contextProvider=new Lz(n,r,i),this.cancelAllRequests=new Promise(a=>{this.deleteService=()=>Promise.resolve(a())});try{const a=new URL(s);this.customDomain=a.origin,this.region=X1}catch{this.customDomain=null,this.region=s}}_delete(){return this.deleteService()}_url(e){const n=this.app.options.projectId;return this.emulatorOrigin!==null?`${this.emulatorOrigin}/${n}/${this.region}/${e}`:this.customDomain!==null?`${this.customDomain}/${e}`:`https://${this.region}-${n}.cloudfunctions.net/${e}`}}const J1="@firebase/functions",Z1="0.8.4";/**
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
 */const Uz="auth-internal",zz="app-check-internal",Vz="messaging-internal";function Bz(t,e){const n=(r,{instanceIdentifier:i})=>{const s=r.getProvider("app").getImmediate(),o=r.getProvider(Uz),a=r.getProvider(Vz),l=r.getProvider(zz);return new Fz(s,o,a,l,i,t)};Rn(new hn(Mz,n,"PUBLIC").setMultipleInstances(!0)),Ke(J1,Z1,e),Ke(J1,Z1,"esm2017")}Bz(fetch.bind(self));/**
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
 */const Ix="firebasestorage.googleapis.com",jz="storageBucket",Wz=2*60*1e3,Hz=10*60*1e3;/**
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
 */class sr extends Nn{constructor(e,n){super(gp(e),`Firebase Storage: ${n} (${gp(e)})`),this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,sr.prototype)}_codeEquals(e){return gp(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}function gp(t){return"storage/"+t}function qz(){const t="An unknown error occurred, please check the error payload for server response.";return new sr("unknown",t)}function Kz(){return new sr("retry-limit-exceeded","Max retry time for operation exceeded, please try again.")}function Gz(){return new sr("canceled","User canceled the upload/download.")}function Qz(t){return new sr("invalid-url","Invalid URL '"+t+"'.")}function Yz(t){return new sr("invalid-default-bucket","Invalid default bucket '"+t+"'.")}function eC(t){return new sr("invalid-argument",t)}function kx(){return new sr("app-deleted","The Firebase app was deleted.")}function Xz(t){return new sr("invalid-root-operation","The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
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
 */class Un{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Un.makeFromUrl(e,n)}catch{return new Un(e,"")}if(r.path==="")return r;throw Yz(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(_){_.path.charAt(_.path.length-1)==="/"&&(_.path_=_.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function u(_){_.path_=decodeURIComponent(_.path)}const c="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",f=new RegExp(`^https?://${h}/${c}/b/${i}/o${d}`,"i"),p={bucket:1,path:3},y=n===Ix?"(?:storage.googleapis.com|storage.cloud.google.com)":n,w="([^?#]*)",g=new RegExp(`^https?://${y}/${i}/${w}`,"i"),v=[{regex:a,indices:l,postModify:s},{regex:f,indices:p,postModify:u},{regex:g,indices:{bucket:1,path:2},postModify:u}];for(let _=0;_<v.length;_++){const C=v[_],T=C.regex.exec(e);if(T){const S=T[C.indices.bucket];let x=T[C.indices.path];x||(x=""),r=new Un(S,x),C.postModify(r);break}}if(r==null)throw Qz(e);return r}}class Jz{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function Zz(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function l(){return a===2}let u=!1;function c(...w){u||(u=!0,e.apply(null,w))}function h(w){i=setTimeout(()=>{i=null,t(f,l())},w)}function d(){s&&clearTimeout(s)}function f(w,...g){if(u){d();return}if(w){d(),c.call(null,w,...g);return}if(l()||o){d(),c.call(null,w,...g);return}r<64&&(r*=2);let v;a===1?(a=2,v=0):v=(r+Math.random())*1e3,h(v)}let p=!1;function y(w){p||(p=!0,d(),!u&&(i!==null?(w||(a=2),clearTimeout(i),h(0)):w||(a=1)))}return h(0),s=setTimeout(()=>{o=!0,y(!0)},n),y}function eV(t){t(!1)}/**
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
 */function tV(t){return t!==void 0}function tC(t,e,n,r){if(r<e)throw eC(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw eC(`Invalid value for '${t}'. Expected ${n} or less.`)}function nV(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
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
 */var Bh;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Bh||(Bh={}));/**
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
 */class rV{constructor(e,n,r,i,s,o,a,l,u,c,h){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=u,this.progressCallback_=c,this.connectionFactory_=h,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((d,f)=>{this.resolve_=d,this.reject_=f,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new nc(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const l=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,u)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===Bh.NO_ERROR,l=s.getStatus();if(!a||this.isRetryStatusCode_(l)){const c=s.getErrorCode()===Bh.ABORT;r(!1,new nc(!1,null,c));return}const u=this.successCodes_.indexOf(l)!==-1;r(!0,new nc(u,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());tV(l)?s(l):s()}catch(l){o(l)}else if(a!==null){const l=qz();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?kx():Gz();o(l)}else{const l=Kz();o(l)}};this.canceled_?n(!1,new nc(!1,null,!0)):this.backoffId_=Zz(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&eV(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}isRetryStatusCode_(e){const n=e>=500&&e<600,i=[408,429].indexOf(e)!==-1,s=this.additionalRetryCodes_.indexOf(e)!==-1;return n||i||s}}class nc{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function iV(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function sV(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e!=null?e:"AppManager")}function oV(t,e){e&&(t["X-Firebase-GMPID"]=e)}function aV(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function lV(t,e,n,r,i,s){const o=nV(t.urlParams),a=t.url+o,l=Object.assign({},t.headers);return oV(l,e),iV(l,n),sV(l,s),aV(l,r),new rV(a,t.method,l,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i)}/**
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
 */function uV(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function cV(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */class jh{constructor(e,n){this._service=e,n instanceof Un?this._location=n:this._location=Un.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new jh(e,n)}get root(){const e=new Un(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return cV(this._location.path)}get storage(){return this._service}get parent(){const e=uV(this._location.path);if(e===null)return null;const n=new Un(this._location.bucket,e);return new jh(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw Xz(e)}}function nC(t,e){const n=e==null?void 0:e[jz];return n==null?null:Un.makeFromBucketSpec(n,t)}class hV{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=Ix,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Wz,this._maxUploadRetryTime=Hz,this._requests=new Set,i!=null?this._bucket=Un.makeFromBucketSpec(i,this._host):this._bucket=nC(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Un.makeFromBucketSpec(this._url,e):this._bucket=nC(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){tC("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){tC("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new jh(this,e)}_makeRequest(e,n,r,i){if(this._deleted)return new Jz(kx());{const s=lV(e,this._appId,r,i,n,this._firebaseVersion);return this._requests.add(s),s.getPromise().then(()=>this._requests.delete(s),()=>this._requests.delete(s)),s}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const rC="@firebase/storage",iC="0.9.9";/**
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
 */const dV="storage";function fV(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new hV(n,r,i,e,mi)}function pV(){Rn(new hn(dV,fV,"PUBLIC").setMultipleInstances(!0)),Ke(rC,iC,""),Ke(rC,iC,"esm2017")}pV();const bx="@firebase/installations",o0="0.5.12";/**
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
 */const xx=1e4,Rx=`w:${o0}`,Nx="FIS_v2",mV="https://firebaseinstallations.googleapis.com/v1",gV=60*60*1e3,yV="installations",vV="Installations";/**
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
 */const _V={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},cs=new gs(yV,vV,_V);function Ax(t){return t instanceof Nn&&t.code.includes("request-failed")}/**
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
 */function Px({projectId:t}){return`${mV}/projects/${t}/installations`}function Ox(t){return{token:t.token,requestStatus:2,expiresIn:CV(t.expiresIn),creationTime:Date.now()}}async function Dx(t,e){const r=(await e.json()).error;return cs.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function $x({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function wV(t,{refreshToken:e}){const n=$x(t);return n.append("Authorization",EV(e)),n}async function Mx(t){const e=await t();return e.status>=500&&e.status<600?t():e}function CV(t){return Number(t.replace("s","000"))}function EV(t){return`${Nx} ${t}`}/**
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
 */async function SV({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=Px(t),i=$x(t),s=e.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={fid:n,authVersion:Nx,appId:t.appId,sdkVersion:Rx},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await Mx(()=>fetch(r,a));if(l.ok){const u=await l.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:Ox(u.authToken)}}else throw await Dx("Create Installation",l)}/**
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
 */function Lx(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function TV(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const IV=/^[cdef][\w-]{21}$/,hg="";function kV(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=bV(t);return IV.test(n)?n:hg}catch{return hg}}function bV(t){return TV(t).substr(0,22)}/**
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
 */function Wd(t){return`${t.appName}!${t.appId}`}/**
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
 */const Fx=new Map;function Ux(t,e){const n=Wd(t);zx(n,e),xV(n,e)}function zx(t,e){const n=Fx.get(t);if(!!n)for(const r of n)r(e)}function xV(t,e){const n=RV();n&&n.postMessage({key:t,fid:e}),NV()}let Fi=null;function RV(){return!Fi&&"BroadcastChannel"in self&&(Fi=new BroadcastChannel("[Firebase] FID Change"),Fi.onmessage=t=>{zx(t.data.key,t.data.fid)}),Fi}function NV(){Fx.size===0&&Fi&&(Fi.close(),Fi=null)}/**
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
 */const AV="firebase-installations-database",PV=1,hs="firebase-installations-store";let yp=null;function a0(){return yp||(yp=ST(AV,PV,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(hs)}}})),yp}async function Wh(t,e){const n=Wd(t),i=(await a0()).transaction(hs,"readwrite"),s=i.objectStore(hs),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&Ux(t,e.fid),e}async function Vx(t){const e=Wd(t),r=(await a0()).transaction(hs,"readwrite");await r.objectStore(hs).delete(e),await r.done}async function Hd(t,e){const n=Wd(t),i=(await a0()).transaction(hs,"readwrite"),s=i.objectStore(hs),o=await s.get(n),a=e(o);return a===void 0?await s.delete(n):await s.put(a,n),await i.done,a&&(!o||o.fid!==a.fid)&&Ux(t,a.fid),a}/**
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
 */async function l0(t){let e;const n=await Hd(t.appConfig,r=>{const i=OV(r),s=DV(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===hg?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function OV(t){const e=t||{fid:kV(),registrationStatus:0};return Bx(e)}function DV(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(cs.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=$V(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:MV(t)}:{installationEntry:e}}async function $V(t,e){try{const n=await SV(t,e);return Wh(t.appConfig,n)}catch(n){throw Ax(n)&&n.customData.serverCode===409?await Vx(t.appConfig):await Wh(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function MV(t){let e=await sC(t.appConfig);for(;e.registrationStatus===1;)await Lx(100),e=await sC(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await l0(t);return r||n}return e}function sC(t){return Hd(t,e=>{if(!e)throw cs.create("installation-not-found");return Bx(e)})}function Bx(t){return LV(t)?{fid:t.fid,registrationStatus:0}:t}function LV(t){return t.registrationStatus===1&&t.registrationTime+xx<Date.now()}/**
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
 */async function FV({appConfig:t,heartbeatServiceProvider:e},n){const r=UV(t,n),i=wV(t,n),s=e.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={installation:{sdkVersion:Rx,appId:t.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await Mx(()=>fetch(r,a));if(l.ok){const u=await l.json();return Ox(u)}else throw await Dx("Generate Auth Token",l)}function UV(t,{fid:e}){return`${Px(t)}/${e}/authTokens:generate`}/**
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
 */async function u0(t,e=!1){let n;const r=await Hd(t.appConfig,s=>{if(!jx(s))throw cs.create("not-registered");const o=s.authToken;if(!e&&BV(o))return s;if(o.requestStatus===1)return n=zV(t,e),s;{if(!navigator.onLine)throw cs.create("app-offline");const a=WV(s);return n=VV(t,a),a}});return n?await n:r.authToken}async function zV(t,e){let n=await oC(t.appConfig);for(;n.authToken.requestStatus===1;)await Lx(100),n=await oC(t.appConfig);const r=n.authToken;return r.requestStatus===0?u0(t,e):r}function oC(t){return Hd(t,e=>{if(!jx(e))throw cs.create("not-registered");const n=e.authToken;return HV(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function VV(t,e){try{const n=await FV(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await Wh(t.appConfig,r),n}catch(n){if(Ax(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Vx(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Wh(t.appConfig,r)}throw n}}function jx(t){return t!==void 0&&t.registrationStatus===2}function BV(t){return t.requestStatus===2&&!jV(t)}function jV(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+gV}function WV(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function HV(t){return t.requestStatus===1&&t.requestTime+xx<Date.now()}/**
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
 */async function qV(t){const e=t,{installationEntry:n,registrationPromise:r}=await l0(e);return r?r.catch(console.error):u0(e).catch(console.error),n.fid}/**
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
 */async function KV(t,e=!1){const n=t;return await GV(n),(await u0(n,e)).token}async function GV(t){const{registrationPromise:e}=await l0(t);e&&await e}/**
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
 */function QV(t){if(!t||!t.options)throw vp("App Configuration");if(!t.name)throw vp("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw vp(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function vp(t){return cs.create("missing-app-config-values",{valueName:t})}/**
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
 */const Wx="installations",YV="installations-internal",XV=t=>{const e=t.getProvider("app").getImmediate(),n=QV(e),r=zo(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},JV=t=>{const e=t.getProvider("app").getImmediate(),n=zo(e,Wx).getImmediate();return{getId:()=>qV(n),getToken:i=>KV(n,i)}};function ZV(){Rn(new hn(Wx,XV,"PUBLIC")),Rn(new hn(YV,JV,"PRIVATE"))}ZV();Ke(bx,o0);Ke(bx,o0,"esm2017");const _p="@firebase/remote-config",aC="0.3.11";/**
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
 */const eB="remote-config";/**
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
 */const tB={["registration-window"]:"Undefined window object. This SDK only supports usage in a browser environment.",["registration-project-id"]:"Undefined project identifier. Check Firebase app initialization.",["registration-api-key"]:"Undefined API key. Check Firebase app initialization.",["registration-app-id"]:"Undefined app identifier. Check Firebase app initialization.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}.",["fetch-client-network"]:"Fetch client failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.",["fetch-timeout"]:'The config fetch request timed out.  Configure timeout using "fetchTimeoutMillis" SDK setting.',["fetch-throttle"]:'The config fetch request timed out while in an exponential backoff state. Configure timeout using "fetchTimeoutMillis" SDK setting. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.',["fetch-client-parse"]:"Fetch client could not parse response. Original error: {$originalErrorMessage}.",["fetch-status"]:"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.",["indexed-db-unavailable"]:"Indexed DB is not supported by current browser"},Wt=new gs("remoteconfig","Remote Config",tB);function nB(t){const e=ct(t);return e._initializePromise||(e._initializePromise=e._storageCache.loadFromStorage().then(()=>{e._isInitializationComplete=!0})),e._initializePromise}/**
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
 */class rB{constructor(e,n,r,i){this.client=e,this.storage=n,this.storageCache=r,this.logger=i}isCachedDataFresh(e,n){if(!n)return this.logger.debug("Config fetch cache check. Cache unpopulated."),!1;const r=Date.now()-n,i=r<=e;return this.logger.debug(`Config fetch cache check. Cache age millis: ${r}. Cache max age millis (minimumFetchIntervalMillis setting): ${e}. Is cache hit: ${i}.`),i}async fetch(e){const[n,r]=await Promise.all([this.storage.getLastSuccessfulFetchTimestampMillis(),this.storage.getLastSuccessfulFetchResponse()]);if(r&&this.isCachedDataFresh(e.cacheMaxAgeMillis,n))return r;e.eTag=r&&r.eTag;const i=await this.client.fetch(e),s=[this.storageCache.setLastSuccessfulFetchTimestampMillis(Date.now())];return i.status===200&&s.push(this.storage.setLastSuccessfulFetchResponse(i)),await Promise.all(s),i}}/**
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
 */function iB(t=navigator){return t.languages&&t.languages[0]||t.language}/**
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
 */class sB{constructor(e,n,r,i,s,o){this.firebaseInstallations=e,this.sdkVersion=n,this.namespace=r,this.projectId=i,this.apiKey=s,this.appId=o}async fetch(e){var n,r,i;const[s,o]=await Promise.all([this.firebaseInstallations.getId(),this.firebaseInstallations.getToken()]),l=`${window.FIREBASE_REMOTE_CONFIG_URL_BASE||"https://firebaseremoteconfig.googleapis.com"}/v1/projects/${this.projectId}/namespaces/${this.namespace}:fetch?key=${this.apiKey}`,u={"Content-Type":"application/json","Content-Encoding":"gzip","If-None-Match":e.eTag||"*"},c={sdk_version:this.sdkVersion,app_instance_id:s,app_instance_id_token:o,app_id:this.appId,language_code:iB()},h={method:"POST",headers:u,body:JSON.stringify(c)},d=fetch(l,h),f=new Promise((v,_)=>{e.signal.addEventListener(()=>{const C=new Error("The operation was aborted.");C.name="AbortError",_(C)})});let p;try{await Promise.race([d,f]),p=await d}catch(v){let _="fetch-client-network";throw((n=v)===null||n===void 0?void 0:n.name)==="AbortError"&&(_="fetch-timeout"),Wt.create(_,{originalErrorMessage:(r=v)===null||r===void 0?void 0:r.message})}let y=p.status;const w=p.headers.get("ETag")||void 0;let g,m;if(p.status===200){let v;try{v=await p.json()}catch(_){throw Wt.create("fetch-client-parse",{originalErrorMessage:(i=_)===null||i===void 0?void 0:i.message})}g=v.entries,m=v.state}if(m==="INSTANCE_STATE_UNSPECIFIED"?y=500:m==="NO_CHANGE"?y=304:(m==="NO_TEMPLATE"||m==="EMPTY_CONFIG")&&(g={}),y!==304&&y!==200)throw Wt.create("fetch-status",{httpStatus:y});return{status:y,eTag:w,config:g}}}/**
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
 */function oB(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(s),r(Wt.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function aB(t){if(!(t instanceof Nn)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class lB{constructor(e,n){this.client=e,this.storage=n}async fetch(e){const n=await this.storage.getThrottleMetadata()||{backoffCount:0,throttleEndTimeMillis:Date.now()};return this.attemptFetch(e,n)}async attemptFetch(e,{throttleEndTimeMillis:n,backoffCount:r}){await oB(e.signal,n);try{const i=await this.client.fetch(e);return await this.storage.deleteThrottleMetadata(),i}catch(i){if(!aB(i))throw i;const s={throttleEndTimeMillis:Date.now()+uO(r),backoffCount:r+1};return await this.storage.setThrottleMetadata(s),this.attemptFetch(e,s)}}}/**
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
 */const uB=60*1e3,cB=12*60*60*1e3;class hB{constructor(e,n,r,i,s){this.app=e,this._client=n,this._storageCache=r,this._storage=i,this._logger=s,this._isInitializationComplete=!1,this.settings={fetchTimeoutMillis:uB,minimumFetchIntervalMillis:cB},this.defaultConfig={}}get fetchTimeMillis(){return this._storageCache.getLastSuccessfulFetchTimestampMillis()||-1}get lastFetchStatus(){return this._storageCache.getLastFetchStatus()||"no-fetch-yet"}}/**
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
 */function Nc(t,e){var n;const r=t.target.error||void 0;return Wt.create(e,{originalErrorMessage:r&&((n=r)===null||n===void 0?void 0:n.message)})}const xi="app_namespace_store",dB="firebase_remote_config",fB=1;function pB(){return new Promise((t,e)=>{var n;try{const r=indexedDB.open(dB,fB);r.onerror=i=>{e(Nc(i,"storage-open"))},r.onsuccess=i=>{t(i.target.result)},r.onupgradeneeded=i=>{const s=i.target.result;switch(i.oldVersion){case 0:s.createObjectStore(xi,{keyPath:"compositeKey"})}}}catch(r){e(Wt.create("storage-open",{originalErrorMessage:(n=r)===null||n===void 0?void 0:n.message}))}})}class mB{constructor(e,n,r,i=pB()){this.appId=e,this.appName=n,this.namespace=r,this.openDbPromise=i}getLastFetchStatus(){return this.get("last_fetch_status")}setLastFetchStatus(e){return this.set("last_fetch_status",e)}getLastSuccessfulFetchTimestampMillis(){return this.get("last_successful_fetch_timestamp_millis")}setLastSuccessfulFetchTimestampMillis(e){return this.set("last_successful_fetch_timestamp_millis",e)}getLastSuccessfulFetchResponse(){return this.get("last_successful_fetch_response")}setLastSuccessfulFetchResponse(e){return this.set("last_successful_fetch_response",e)}getActiveConfig(){return this.get("active_config")}setActiveConfig(e){return this.set("active_config",e)}getActiveConfigEtag(){return this.get("active_config_etag")}setActiveConfigEtag(e){return this.set("active_config_etag",e)}getThrottleMetadata(){return this.get("throttle_metadata")}setThrottleMetadata(e){return this.set("throttle_metadata",e)}deleteThrottleMetadata(){return this.delete("throttle_metadata")}async get(e){const n=await this.openDbPromise;return new Promise((r,i)=>{var s;const a=n.transaction([xi],"readonly").objectStore(xi),l=this.createCompositeKey(e);try{const u=a.get(l);u.onerror=c=>{i(Nc(c,"storage-get"))},u.onsuccess=c=>{const h=c.target.result;r(h?h.value:void 0)}}catch(u){i(Wt.create("storage-get",{originalErrorMessage:(s=u)===null||s===void 0?void 0:s.message}))}})}async set(e,n){const r=await this.openDbPromise;return new Promise((i,s)=>{var o;const l=r.transaction([xi],"readwrite").objectStore(xi),u=this.createCompositeKey(e);try{const c=l.put({compositeKey:u,value:n});c.onerror=h=>{s(Nc(h,"storage-set"))},c.onsuccess=()=>{i()}}catch(c){s(Wt.create("storage-set",{originalErrorMessage:(o=c)===null||o===void 0?void 0:o.message}))}})}async delete(e){const n=await this.openDbPromise;return new Promise((r,i)=>{var s;const a=n.transaction([xi],"readwrite").objectStore(xi),l=this.createCompositeKey(e);try{const u=a.delete(l);u.onerror=c=>{i(Nc(c,"storage-delete"))},u.onsuccess=()=>{r()}}catch(u){i(Wt.create("storage-delete",{originalErrorMessage:(s=u)===null||s===void 0?void 0:s.message}))}})}createCompositeKey(e){return[this.appId,this.appName,this.namespace,e].join()}}/**
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
 */class gB{constructor(e){this.storage=e}getLastFetchStatus(){return this.lastFetchStatus}getLastSuccessfulFetchTimestampMillis(){return this.lastSuccessfulFetchTimestampMillis}getActiveConfig(){return this.activeConfig}async loadFromStorage(){const e=this.storage.getLastFetchStatus(),n=this.storage.getLastSuccessfulFetchTimestampMillis(),r=this.storage.getActiveConfig(),i=await e;i&&(this.lastFetchStatus=i);const s=await n;s&&(this.lastSuccessfulFetchTimestampMillis=s);const o=await r;o&&(this.activeConfig=o)}setLastFetchStatus(e){return this.lastFetchStatus=e,this.storage.setLastFetchStatus(e)}setLastSuccessfulFetchTimestampMillis(e){return this.lastSuccessfulFetchTimestampMillis=e,this.storage.setLastSuccessfulFetchTimestampMillis(e)}setActiveConfig(e){return this.activeConfig=e,this.storage.setActiveConfig(e)}}/**
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
 */function yB(){Rn(new hn(eB,t,"PUBLIC").setMultipleInstances(!0)),Ke(_p,aC),Ke(_p,aC,"esm2017");function t(e,{instanceIdentifier:n}){const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();if(typeof window>"u")throw Wt.create("registration-window");if(!vT())throw Wt.create("indexed-db-unavailable");const{projectId:s,apiKey:o,appId:a}=r.options;if(!s)throw Wt.create("registration-project-id");if(!o)throw Wt.create("registration-api-key");if(!a)throw Wt.create("registration-app-id");n=n||"firebase";const l=new mB(a,r.name,n),u=new gB(l),c=new Kl(_p);c.logLevel=se.ERROR;const h=new sB(i,mi,n,s,o,a),d=new lB(h,l),f=new rB(d,l,u,c),p=new hB(r,f,u,l,c);return nB(p),p}}yB();var qd={exports:{}},Kd={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vB=E.exports,_B=Symbol.for("react.element"),wB=Symbol.for("react.fragment"),CB=Object.prototype.hasOwnProperty,EB=vB.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,SB={key:!0,ref:!0,__self:!0,__source:!0};function Hx(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)CB.call(e,r)&&!SB.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:_B,type:t,key:s,ref:o,props:i,_owner:EB.current}}Kd.Fragment=wB;Kd.jsx=Hx;Kd.jsxs=Hx;(function(t){t.exports=Kd})(qd);const c0=qd.exports.Fragment,L=qd.exports.jsx,fn=qd.exports.jsxs,TB=Object.freeze(Object.defineProperty({__proto__:null,Fragment:c0,jsx:L,jsxs:fn},Symbol.toStringTag,{value:"Module"}));var dg=function(t,e){return dg=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,r){n.__proto__=r}||function(n,r){for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(n[i]=r[i])},dg(t,e)};function Or(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");dg(t,e);function n(){this.constructor=t}t.prototype=e===null?Object.create(e):(n.prototype=e.prototype,new n)}function IB(t,e,n,r){function i(s){return s instanceof n?s:new n(function(o){o(s)})}return new(n||(n=Promise))(function(s,o){function a(c){try{u(r.next(c))}catch(h){o(h)}}function l(c){try{u(r.throw(c))}catch(h){o(h)}}function u(c){c.done?s(c.value):i(c.value).then(a,l)}u((r=r.apply(t,e||[])).next())})}function qx(t,e){var n={label:0,sent:function(){if(s[0]&1)throw s[1];return s[1]},trys:[],ops:[]},r,i,s,o;return o={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function a(u){return function(c){return l([u,c])}}function l(u){if(r)throw new TypeError("Generator is already executing.");for(;n;)try{if(r=1,i&&(s=u[0]&2?i.return:u[0]?i.throw||((s=i.return)&&s.call(i),0):i.next)&&!(s=s.call(i,u[1])).done)return s;switch(i=0,s&&(u=[u[0]&2,s.value]),u[0]){case 0:case 1:s=u;break;case 4:return n.label++,{value:u[1],done:!1};case 5:n.label++,i=u[1],u=[0];continue;case 7:u=n.ops.pop(),n.trys.pop();continue;default:if(s=n.trys,!(s=s.length>0&&s[s.length-1])&&(u[0]===6||u[0]===2)){n=0;continue}if(u[0]===3&&(!s||u[1]>s[0]&&u[1]<s[3])){n.label=u[1];break}if(u[0]===6&&n.label<s[1]){n.label=s[1],s=u;break}if(s&&n.label<s[2]){n.label=s[2],n.ops.push(u);break}s[2]&&n.ops.pop(),n.trys.pop();continue}u=e.call(t,n)}catch(c){u=[6,c],i=0}finally{r=s=0}if(u[0]&5)throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}}function No(t){var e=typeof Symbol=="function"&&Symbol.iterator,n=e&&t[e],r=0;if(n)return n.call(t);if(t&&typeof t.length=="number")return{next:function(){return t&&r>=t.length&&(t=void 0),{value:t&&t[r++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function Ao(t,e){var n=typeof Symbol=="function"&&t[Symbol.iterator];if(!n)return t;var r=n.call(t),i,s=[],o;try{for(;(e===void 0||e-- >0)&&!(i=r.next()).done;)s.push(i.value)}catch(a){o={error:a}}finally{try{i&&!i.done&&(n=r.return)&&n.call(r)}finally{if(o)throw o.error}}return s}function Po(t,e,n){if(n||arguments.length===2)for(var r=0,i=e.length,s;r<i;r++)(s||!(r in e))&&(s||(s=Array.prototype.slice.call(e,0,r)),s[r]=e[r]);return t.concat(s||Array.prototype.slice.call(e))}function lo(t){return this instanceof lo?(this.v=t,this):new lo(t)}function kB(t,e,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r=n.apply(t,e||[]),i,s=[];return i={},o("next"),o("throw"),o("return"),i[Symbol.asyncIterator]=function(){return this},i;function o(d){r[d]&&(i[d]=function(f){return new Promise(function(p,y){s.push([d,f,p,y])>1||a(d,f)})})}function a(d,f){try{l(r[d](f))}catch(p){h(s[0][3],p)}}function l(d){d.value instanceof lo?Promise.resolve(d.value.v).then(u,c):h(s[0][2],d)}function u(d){a("next",d)}function c(d){a("throw",d)}function h(d,f){d(f),s.shift(),s.length&&a(s[0][0],s[0][1])}}function bB(t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var e=t[Symbol.asyncIterator],n;return e?e.call(t):(t=typeof No=="function"?No(t):t[Symbol.iterator](),n={},r("next"),r("throw"),r("return"),n[Symbol.asyncIterator]=function(){return this},n);function r(s){n[s]=t[s]&&function(o){return new Promise(function(a,l){o=t[s](o),i(a,l,o.done,o.value)})}}function i(s,o,a,l){Promise.resolve(l).then(function(u){s({value:u,done:a})},o)}}function et(t){return typeof t=="function"}function h0(t){var e=function(r){Error.call(r),r.stack=new Error().stack},n=t(e);return n.prototype=Object.create(Error.prototype),n.prototype.constructor=n,n}var wp=h0(function(t){return function(e){t(this),this.message=e?e.length+` errors occurred during unsubscription:
`+e.map(function(n,r){return r+1+") "+n.toString()}).join(`
  `):"",this.name="UnsubscriptionError",this.errors=e}});function Hh(t,e){if(t){var n=t.indexOf(e);0<=n&&t.splice(n,1)}}var Cu=function(){function t(e){this.initialTeardown=e,this.closed=!1,this._parentage=null,this._finalizers=null}return t.prototype.unsubscribe=function(){var e,n,r,i,s;if(!this.closed){this.closed=!0;var o=this._parentage;if(o)if(this._parentage=null,Array.isArray(o))try{for(var a=No(o),l=a.next();!l.done;l=a.next()){var u=l.value;u.remove(this)}}catch(y){e={error:y}}finally{try{l&&!l.done&&(n=a.return)&&n.call(a)}finally{if(e)throw e.error}}else o.remove(this);var c=this.initialTeardown;if(et(c))try{c()}catch(y){s=y instanceof wp?y.errors:[y]}var h=this._finalizers;if(h){this._finalizers=null;try{for(var d=No(h),f=d.next();!f.done;f=d.next()){var p=f.value;try{lC(p)}catch(y){s=s!=null?s:[],y instanceof wp?s=Po(Po([],Ao(s)),Ao(y.errors)):s.push(y)}}}catch(y){r={error:y}}finally{try{f&&!f.done&&(i=d.return)&&i.call(d)}finally{if(r)throw r.error}}}if(s)throw new wp(s)}},t.prototype.add=function(e){var n;if(e&&e!==this)if(this.closed)lC(e);else{if(e instanceof t){if(e.closed||e._hasParent(this))return;e._addParent(this)}(this._finalizers=(n=this._finalizers)!==null&&n!==void 0?n:[]).push(e)}},t.prototype._hasParent=function(e){var n=this._parentage;return n===e||Array.isArray(n)&&n.includes(e)},t.prototype._addParent=function(e){var n=this._parentage;this._parentage=Array.isArray(n)?(n.push(e),n):n?[n,e]:e},t.prototype._removeParent=function(e){var n=this._parentage;n===e?this._parentage=null:Array.isArray(n)&&Hh(n,e)},t.prototype.remove=function(e){var n=this._finalizers;n&&Hh(n,e),e instanceof t&&e._removeParent(this)},t.EMPTY=function(){var e=new t;return e.closed=!0,e}(),t}(),Kx=Cu.EMPTY;function Gx(t){return t instanceof Cu||t&&"closed"in t&&et(t.remove)&&et(t.add)&&et(t.unsubscribe)}function lC(t){et(t)?t():t.unsubscribe()}var Qx={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1},xB={setTimeout:function(t,e){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];return setTimeout.apply(void 0,Po([t,e],Ao(n)))},clearTimeout:function(t){return clearTimeout(t)},delegate:void 0};function Yx(t){xB.setTimeout(function(){throw t})}function uC(){}function Ac(t){t()}var d0=function(t){Or(e,t);function e(n){var r=t.call(this)||this;return r.isStopped=!1,n?(r.destination=n,Gx(n)&&n.add(r)):r.destination=PB,r}return e.create=function(n,r,i){return new Ll(n,r,i)},e.prototype.next=function(n){this.isStopped||this._next(n)},e.prototype.error=function(n){this.isStopped||(this.isStopped=!0,this._error(n))},e.prototype.complete=function(){this.isStopped||(this.isStopped=!0,this._complete())},e.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,t.prototype.unsubscribe.call(this),this.destination=null)},e.prototype._next=function(n){this.destination.next(n)},e.prototype._error=function(n){try{this.destination.error(n)}finally{this.unsubscribe()}},e.prototype._complete=function(){try{this.destination.complete()}finally{this.unsubscribe()}},e}(Cu),RB=Function.prototype.bind;function Cp(t,e){return RB.call(t,e)}var NB=function(){function t(e){this.partialObserver=e}return t.prototype.next=function(e){var n=this.partialObserver;if(n.next)try{n.next(e)}catch(r){rc(r)}},t.prototype.error=function(e){var n=this.partialObserver;if(n.error)try{n.error(e)}catch(r){rc(r)}else rc(e)},t.prototype.complete=function(){var e=this.partialObserver;if(e.complete)try{e.complete()}catch(n){rc(n)}},t}(),Ll=function(t){Or(e,t);function e(n,r,i){var s=t.call(this)||this,o;if(et(n)||!n)o={next:n!=null?n:void 0,error:r!=null?r:void 0,complete:i!=null?i:void 0};else{var a;s&&Qx.useDeprecatedNextContext?(a=Object.create(n),a.unsubscribe=function(){return s.unsubscribe()},o={next:n.next&&Cp(n.next,a),error:n.error&&Cp(n.error,a),complete:n.complete&&Cp(n.complete,a)}):o=n}return s.destination=new NB(o),s}return e}(d0);function rc(t){Yx(t)}function AB(t){throw t}var PB={closed:!0,next:uC,error:AB,complete:uC},f0=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}();function Xx(t){return t}function OB(t){return t.length===0?Xx:t.length===1?t[0]:function(e){return t.reduce(function(n,r){return r(n)},e)}}var Lt=function(){function t(e){e&&(this._subscribe=e)}return t.prototype.lift=function(e){var n=new t;return n.source=this,n.operator=e,n},t.prototype.subscribe=function(e,n,r){var i=this,s=$B(e)?e:new Ll(e,n,r);return Ac(function(){var o=i,a=o.operator,l=o.source;s.add(a?a.call(s,l):l?i._subscribe(s):i._trySubscribe(s))}),s},t.prototype._trySubscribe=function(e){try{return this._subscribe(e)}catch(n){e.error(n)}},t.prototype.forEach=function(e,n){var r=this;return n=cC(n),new n(function(i,s){var o=new Ll({next:function(a){try{e(a)}catch(l){s(l),o.unsubscribe()}},error:s,complete:i});r.subscribe(o)})},t.prototype._subscribe=function(e){var n;return(n=this.source)===null||n===void 0?void 0:n.subscribe(e)},t.prototype[f0]=function(){return this},t.prototype.pipe=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return OB(e)(this)},t.prototype.toPromise=function(e){var n=this;return e=cC(e),new e(function(r,i){var s;n.subscribe(function(o){return s=o},function(o){return i(o)},function(){return r(s)})})},t.create=function(e){return new t(e)},t}();function cC(t){var e;return(e=t!=null?t:Qx.Promise)!==null&&e!==void 0?e:Promise}function DB(t){return t&&et(t.next)&&et(t.error)&&et(t.complete)}function $B(t){return t&&t instanceof d0||DB(t)&&Gx(t)}function MB(t){return et(t==null?void 0:t.lift)}function Es(t){return function(e){if(MB(e))return e.lift(function(n){try{return t(n,this)}catch(r){this.error(r)}});throw new TypeError("Unable to lift unknown Observable type")}}function Oo(t,e,n,r,i){return new LB(t,e,n,r,i)}var LB=function(t){Or(e,t);function e(n,r,i,s,o,a){var l=t.call(this,n)||this;return l.onFinalize=o,l.shouldUnsubscribe=a,l._next=r?function(u){try{r(u)}catch(c){n.error(c)}}:t.prototype._next,l._error=s?function(u){try{s(u)}catch(c){n.error(c)}finally{this.unsubscribe()}}:t.prototype._error,l._complete=i?function(){try{i()}catch(u){n.error(u)}finally{this.unsubscribe()}}:t.prototype._complete,l}return e.prototype.unsubscribe=function(){var n;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){var r=this.closed;t.prototype.unsubscribe.call(this),!r&&((n=this.onFinalize)===null||n===void 0||n.call(this))}},e}(d0),FB=h0(function(t){return function(){t(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"}}),Gd=function(t){Or(e,t);function e(){var n=t.call(this)||this;return n.closed=!1,n.currentObservers=null,n.observers=[],n.isStopped=!1,n.hasError=!1,n.thrownError=null,n}return e.prototype.lift=function(n){var r=new hC(this,this);return r.operator=n,r},e.prototype._throwIfClosed=function(){if(this.closed)throw new FB},e.prototype.next=function(n){var r=this;Ac(function(){var i,s;if(r._throwIfClosed(),!r.isStopped){r.currentObservers||(r.currentObservers=Array.from(r.observers));try{for(var o=No(r.currentObservers),a=o.next();!a.done;a=o.next()){var l=a.value;l.next(n)}}catch(u){i={error:u}}finally{try{a&&!a.done&&(s=o.return)&&s.call(o)}finally{if(i)throw i.error}}}})},e.prototype.error=function(n){var r=this;Ac(function(){if(r._throwIfClosed(),!r.isStopped){r.hasError=r.isStopped=!0,r.thrownError=n;for(var i=r.observers;i.length;)i.shift().error(n)}})},e.prototype.complete=function(){var n=this;Ac(function(){if(n._throwIfClosed(),!n.isStopped){n.isStopped=!0;for(var r=n.observers;r.length;)r.shift().complete()}})},e.prototype.unsubscribe=function(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null},Object.defineProperty(e.prototype,"observed",{get:function(){var n;return((n=this.observers)===null||n===void 0?void 0:n.length)>0},enumerable:!1,configurable:!0}),e.prototype._trySubscribe=function(n){return this._throwIfClosed(),t.prototype._trySubscribe.call(this,n)},e.prototype._subscribe=function(n){return this._throwIfClosed(),this._checkFinalizedStatuses(n),this._innerSubscribe(n)},e.prototype._innerSubscribe=function(n){var r=this,i=this,s=i.hasError,o=i.isStopped,a=i.observers;return s||o?Kx:(this.currentObservers=null,a.push(n),new Cu(function(){r.currentObservers=null,Hh(a,n)}))},e.prototype._checkFinalizedStatuses=function(n){var r=this,i=r.hasError,s=r.thrownError,o=r.isStopped;i?n.error(s):o&&n.complete()},e.prototype.asObservable=function(){var n=new Lt;return n.source=this,n},e.create=function(n,r){return new hC(n,r)},e}(Lt),hC=function(t){Or(e,t);function e(n,r){var i=t.call(this)||this;return i.destination=n,i.source=r,i}return e.prototype.next=function(n){var r,i;(i=(r=this.destination)===null||r===void 0?void 0:r.next)===null||i===void 0||i.call(r,n)},e.prototype.error=function(n){var r,i;(i=(r=this.destination)===null||r===void 0?void 0:r.error)===null||i===void 0||i.call(r,n)},e.prototype.complete=function(){var n,r;(r=(n=this.destination)===null||n===void 0?void 0:n.complete)===null||r===void 0||r.call(n)},e.prototype._subscribe=function(n){var r,i;return(i=(r=this.source)===null||r===void 0?void 0:r.subscribe(n))!==null&&i!==void 0?i:Kx},e}(Gd),p0={now:function(){return(p0.delegate||Date).now()},delegate:void 0},UB=function(t){Or(e,t);function e(n,r,i){n===void 0&&(n=1/0),r===void 0&&(r=1/0),i===void 0&&(i=p0);var s=t.call(this)||this;return s._bufferSize=n,s._windowTime=r,s._timestampProvider=i,s._buffer=[],s._infiniteTimeWindow=!0,s._infiniteTimeWindow=r===1/0,s._bufferSize=Math.max(1,n),s._windowTime=Math.max(1,r),s}return e.prototype.next=function(n){var r=this,i=r.isStopped,s=r._buffer,o=r._infiniteTimeWindow,a=r._timestampProvider,l=r._windowTime;i||(s.push(n),!o&&s.push(a.now()+l)),this._trimBuffer(),t.prototype.next.call(this,n)},e.prototype._subscribe=function(n){this._throwIfClosed(),this._trimBuffer();for(var r=this._innerSubscribe(n),i=this,s=i._infiniteTimeWindow,o=i._buffer,a=o.slice(),l=0;l<a.length&&!n.closed;l+=s?1:2)n.next(a[l]);return this._checkFinalizedStatuses(n),r},e.prototype._trimBuffer=function(){var n=this,r=n._bufferSize,i=n._timestampProvider,s=n._buffer,o=n._infiniteTimeWindow,a=(o?1:2)*r;if(r<1/0&&a<s.length&&s.splice(0,s.length-a),!o){for(var l=i.now(),u=0,c=1;c<s.length&&s[c]<=l;c+=2)u=c;u&&s.splice(0,u+1)}},e}(Gd),zB=function(t){Or(e,t);function e(n,r){return t.call(this)||this}return e.prototype.schedule=function(n,r){return this},e}(Cu),fg={setInterval:function(t,e){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];var i=fg.delegate;return i!=null&&i.setInterval?i.setInterval.apply(i,Po([t,e],Ao(n))):setInterval.apply(void 0,Po([t,e],Ao(n)))},clearInterval:function(t){return clearInterval(t)},delegate:void 0},VB=function(t){Or(e,t);function e(n,r){var i=t.call(this,n,r)||this;return i.scheduler=n,i.work=r,i.pending=!1,i}return e.prototype.schedule=function(n,r){if(r===void 0&&(r=0),this.closed)return this;this.state=n;var i=this.id,s=this.scheduler;return i!=null&&(this.id=this.recycleAsyncId(s,i,r)),this.pending=!0,this.delay=r,this.id=this.id||this.requestAsyncId(s,this.id,r),this},e.prototype.requestAsyncId=function(n,r,i){return i===void 0&&(i=0),fg.setInterval(n.flush.bind(n,this),i)},e.prototype.recycleAsyncId=function(n,r,i){if(i===void 0&&(i=0),i!=null&&this.delay===i&&this.pending===!1)return r;fg.clearInterval(r)},e.prototype.execute=function(n,r){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;var i=this._execute(n,r);if(i)return i;this.pending===!1&&this.id!=null&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))},e.prototype._execute=function(n,r){var i=!1,s;try{this.work(n)}catch(o){i=!0,s=o||new Error("Scheduled action threw falsy error")}if(i)return this.unsubscribe(),s},e.prototype.unsubscribe=function(){if(!this.closed){var n=this,r=n.id,i=n.scheduler,s=i.actions;this.work=this.state=this.scheduler=null,this.pending=!1,Hh(s,this),r!=null&&(this.id=this.recycleAsyncId(i,r,null)),this.delay=null,t.prototype.unsubscribe.call(this)}},e}(zB),dC=function(){function t(e,n){n===void 0&&(n=t.now),this.schedulerActionCtor=e,this.now=n}return t.prototype.schedule=function(e,n,r){return n===void 0&&(n=0),new this.schedulerActionCtor(this,e).schedule(r,n)},t.now=p0.now,t}(),BB=function(t){Or(e,t);function e(n,r){r===void 0&&(r=dC.now);var i=t.call(this,n,r)||this;return i.actions=[],i._active=!1,i._scheduled=void 0,i}return e.prototype.flush=function(n){var r=this.actions;if(this._active){r.push(n);return}var i;this._active=!0;do if(i=n.execute(n.state,n.delay))break;while(n=r.shift());if(this._active=!1,i){for(;n=r.shift();)n.unsubscribe();throw i}},e}(dC);new BB(VB);var jB=new Lt(function(t){return t.complete()});function WB(t){return t?HB(t):jB}function HB(t){return new Lt(function(e){return t.schedule(function(){return e.complete()})})}function qB(t){return t&&et(t.schedule)}function KB(t){return t[t.length-1]}function GB(t){return qB(KB(t))?t.pop():void 0}var Jx=function(t){return t&&typeof t.length=="number"&&typeof t!="function"};function Zx(t){return et(t==null?void 0:t.then)}function eR(t){return et(t[f0])}function tR(t){return Symbol.asyncIterator&&et(t==null?void 0:t[Symbol.asyncIterator])}function nR(t){return new TypeError("You provided "+(t!==null&&typeof t=="object"?"an invalid object":"'"+t+"'")+" where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.")}function QB(){return typeof Symbol!="function"||!Symbol.iterator?"@@iterator":Symbol.iterator}var rR=QB();function iR(t){return et(t==null?void 0:t[rR])}function sR(t){return kB(this,arguments,function(){var e,n,r,i;return qx(this,function(s){switch(s.label){case 0:e=t.getReader(),s.label=1;case 1:s.trys.push([1,,9,10]),s.label=2;case 2:return[4,lo(e.read())];case 3:return n=s.sent(),r=n.value,i=n.done,i?[4,lo(void 0)]:[3,5];case 4:return[2,s.sent()];case 5:return[4,lo(r)];case 6:return[4,s.sent()];case 7:return s.sent(),[3,2];case 8:return[3,10];case 9:return e.releaseLock(),[7];case 10:return[2]}})})}function oR(t){return et(t==null?void 0:t.getReader)}function Yo(t){if(t instanceof Lt)return t;if(t!=null){if(eR(t))return YB(t);if(Jx(t))return XB(t);if(Zx(t))return JB(t);if(tR(t))return aR(t);if(iR(t))return ZB(t);if(oR(t))return e5(t)}throw nR(t)}function YB(t){return new Lt(function(e){var n=t[f0]();if(et(n.subscribe))return n.subscribe(e);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}function XB(t){return new Lt(function(e){for(var n=0;n<t.length&&!e.closed;n++)e.next(t[n]);e.complete()})}function JB(t){return new Lt(function(e){t.then(function(n){e.closed||(e.next(n),e.complete())},function(n){return e.error(n)}).then(null,Yx)})}function ZB(t){return new Lt(function(e){var n,r;try{for(var i=No(t),s=i.next();!s.done;s=i.next()){var o=s.value;if(e.next(o),e.closed)return}}catch(a){n={error:a}}finally{try{s&&!s.done&&(r=i.return)&&r.call(i)}finally{if(n)throw n.error}}e.complete()})}function aR(t){return new Lt(function(e){t5(t,e).catch(function(n){return e.error(n)})})}function e5(t){return aR(sR(t))}function t5(t,e){var n,r,i,s;return IB(this,void 0,void 0,function(){var o,a;return qx(this,function(l){switch(l.label){case 0:l.trys.push([0,5,6,11]),n=bB(t),l.label=1;case 1:return[4,n.next()];case 2:if(r=l.sent(),!!r.done)return[3,4];if(o=r.value,e.next(o),e.closed)return[2];l.label=3;case 3:return[3,1];case 4:return[3,11];case 5:return a=l.sent(),i={error:a},[3,11];case 6:return l.trys.push([6,,9,10]),r&&!r.done&&(s=n.return)?[4,s.call(n)]:[3,8];case 7:l.sent(),l.label=8;case 8:return[3,10];case 9:if(i)throw i.error;return[7];case 10:return[7];case 11:return e.complete(),[2]}})})}function qi(t,e,n,r,i){r===void 0&&(r=0),i===void 0&&(i=!1);var s=e.schedule(function(){n(),i?t.add(this.schedule(null,r)):this.unsubscribe()},r);if(t.add(s),!i)return s}function lR(t,e){return e===void 0&&(e=0),Es(function(n,r){n.subscribe(Oo(r,function(i){return qi(r,t,function(){return r.next(i)},e)},function(){return qi(r,t,function(){return r.complete()},e)},function(i){return qi(r,t,function(){return r.error(i)},e)}))})}function uR(t,e){return e===void 0&&(e=0),Es(function(n,r){r.add(t.schedule(function(){return n.subscribe(r)},e))})}function n5(t,e){return Yo(t).pipe(uR(e),lR(e))}function r5(t,e){return Yo(t).pipe(uR(e),lR(e))}function i5(t,e){return new Lt(function(n){var r=0;return e.schedule(function(){r===t.length?n.complete():(n.next(t[r++]),n.closed||this.schedule())})})}function s5(t,e){return new Lt(function(n){var r;return qi(n,e,function(){r=t[rR](),qi(n,e,function(){var i,s,o;try{i=r.next(),s=i.value,o=i.done}catch(a){n.error(a);return}o?n.complete():n.next(s)},0,!0)}),function(){return et(r==null?void 0:r.return)&&r.return()}})}function cR(t,e){if(!t)throw new Error("Iterable cannot be null");return new Lt(function(n){qi(n,e,function(){var r=t[Symbol.asyncIterator]();qi(n,e,function(){r.next().then(function(i){i.done?n.complete():n.next(i.value)})},0,!0)})})}function o5(t,e){return cR(sR(t),e)}function a5(t,e){if(t!=null){if(eR(t))return n5(t,e);if(Jx(t))return i5(t,e);if(Zx(t))return r5(t,e);if(tR(t))return cR(t,e);if(iR(t))return s5(t,e);if(oR(t))return o5(t,e)}throw nR(t)}function hR(t,e){return e?a5(t,e):Yo(t)}function fC(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];var n=GB(t);return hR(t,n)}h0(function(t){return function(){t(this),this.name="EmptyError",this.message="no elements in sequence"}});function m0(t,e){return Es(function(n,r){var i=0;n.subscribe(Oo(r,function(s){r.next(t.call(e,s,i++))}))})}function dR(t){return Es(function(e,n){var r=null,i=!1,s;r=e.subscribe(Oo(n,void 0,void 0,function(o){s=Yo(t(o,dR(t)(e))),r?(r.unsubscribe(),r=null,s.subscribe(n)):i=!0})),i&&(r.unsubscribe(),r=null,s.subscribe(n))})}function l5(t){t===void 0&&(t={});var e=t.connector,n=e===void 0?function(){return new Gd}:e,r=t.resetOnError,i=r===void 0?!0:r,s=t.resetOnComplete,o=s===void 0?!0:s,a=t.resetOnRefCountZero,l=a===void 0?!0:a;return function(u){var c,h,d,f=0,p=!1,y=!1,w=function(){h==null||h.unsubscribe(),h=void 0},g=function(){w(),c=d=void 0,p=y=!1},m=function(){var v=c;g(),v==null||v.unsubscribe()};return Es(function(v,_){f++,!y&&!p&&w();var C=d=d!=null?d:n();_.add(function(){f--,f===0&&!y&&!p&&(h=Ep(m,l))}),C.subscribe(_),!c&&f>0&&(c=new Ll({next:function(T){return C.next(T)},error:function(T){y=!0,w(),h=Ep(g,i,T),C.error(T)},complete:function(){p=!0,w(),h=Ep(g,o),C.complete()}}),Yo(v).subscribe(c))})(u)}}function Ep(t,e){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];if(e===!0){t();return}if(e!==!1){var i=new Ll({next:function(){i.unsubscribe(),t()}});return e.apply(void 0,Po([],Ao(n))).subscribe(i)}}function u5(t,e,n){var r,i,s,o,a=!1;return t&&typeof t=="object"?(r=t.bufferSize,o=r===void 0?1/0:r,i=t.windowTime,e=i===void 0?1/0:i,s=t.refCount,a=s===void 0?!1:s,n=t.scheduler):o=t!=null?t:1/0,l5({connector:function(){return new UB(o,e,n)},resetOnError:!0,resetOnComplete:!1,resetOnRefCountZero:a})}function c5(t,e){return Es(function(n,r){var i=null,s=0,o=!1,a=function(){return o&&!i&&r.complete()};n.subscribe(Oo(r,function(l){i==null||i.unsubscribe();var u=0,c=s++;Yo(t(l,c)).subscribe(i=Oo(r,function(h){return r.next(e?e(l,h,c,u++):h)},function(){i=null,a()}))},function(){o=!0,a()}))})}function h5(t,e,n){var r=et(t)||e||n?{next:t,error:e,complete:n}:t;return r?Es(function(i,s){var o;(o=r.subscribe)===null||o===void 0||o.call(r);var a=!0;i.subscribe(Oo(s,function(l){var u;(u=r.next)===null||u===void 0||u.call(r,l),s.next(l)},function(){var l;a=!1,(l=r.complete)===null||l===void 0||l.call(r),s.complete()},function(l){var u;a=!1,(u=r.error)===null||u===void 0||u.call(r,l),s.error(l)},function(){var l,u;a&&((l=r.unsubscribe)===null||l===void 0||l.call(r)),(u=r.finalize)===null||u===void 0||u.call(r)}))}):Xx}function fR(t){return new Lt(function(e){var n=KD(t,e.next.bind(e),e.error.bind(e),e.complete.bind(e));return{unsubscribe:n}})}const d5="[DEFAULT]",pR=E.exports.createContext(void 0),mR=E.exports.createContext(!1),f5="4.2.2",p5=(t,e)=>t===e||[...Object.keys(t),...Object.keys(e)].every(n=>t[n]===e[n]);function m5(t){const{firebaseConfig:e,appName:n,suspense:r}=t,i=E.exports.useMemo(()=>{if(t.firebaseApp)return t.firebaseApp;const s=oD().find(o=>o.name===(n||d5));if(s){if(e&&p5(s.options,e))return s;throw new Error(`Does not match the options already provided to the ${n||"default"} firebase app instance, give this new instance a different appName.`)}else{if(!e)throw new Error("No firebaseConfig provided");const o=E.exports.version||"unknown";return Ke("react",o),Ke("reactfire",f5),sD(e,n)}},[t.firebaseApp,e,n]);return E.exports.createElement(pR.Provider,{value:i},L(mR.Provider,{...Object.assign({value:r!=null?r:!1},t)}))}function g5(t){let e=E.exports.useContext(mR);return t!==void 0?t:e}function gR(){const t=E.exports.useContext(pR);if(!t)throw new Error("Cannot call useFirebaseApp unless your component is within a FirebaseAppProvider");return t}function y5(t){var e;const n=v0(),r=`auth:user:${n.name}`,i=fR(n),s=(e=Object.assign({},t))!==null&&e!==void 0?e:{};return n.currentUser!==void 0&&(s.initialData=n.currentUser,s.startWithValue=n.currentUser),g0(r,i,s)}function yR(t){if((t==null?void 0:t.hasOwnProperty("requiredClaims"))&&(t==null?void 0:t.hasOwnProperty("validateCustomClaims")))throw new Error('Cannot have both "requiredClaims" and "validateCustomClaims". Use one or the other.');const e=v0();let n=`auth:signInCheck:${e.name}::forceRefresh:${!!(t!=null&&t.forceRefresh)}`;t!=null&&t.forceRefresh&&(n=`${n}:forceRefresh:${t.forceRefresh}`),t!=null&&t.hasOwnProperty("requiredClaims")?n=`${n}:requiredClaims:${JSON.stringify(t.requiredClaims)}`:t!=null&&t.hasOwnProperty("validateCustomClaims")&&(n=`${n}:validateCustomClaims:${JSON.stringify(t.validateCustomClaims)}`);const r=fR(e).pipe(c5(i=>{var s;return i?t&&(t.hasOwnProperty("requiredClaims")||t.hasOwnProperty("validateCustomClaims"))?hR(i.getIdTokenResult((s=t==null?void 0:t.forceRefresh)!==null&&s!==void 0?s:!1)).pipe(m0(o=>{let a;t.hasOwnProperty("requiredClaims")?a=v5(t.requiredClaims):a=t.validateCustomClaims;const{hasRequiredClaims:l,errors:u}=a(o.claims);return{signedIn:!0,hasRequiredClaims:l,errors:u,user:i}})):fC({signedIn:!0,hasRequiredClaims:!0,errors:{},user:i}):fC({signedIn:!1,hasRequiredClaims:!1,errors:{},user:null})}));return g0(n,r)}function v5(t){return function(e){const n={};return Object.keys(t).forEach(r=>{t[r]!==e[r]&&(n[r]=[new _0("auth/missing-claim",`Expected "${t[r]}", but user has "${e[r]}" instead`)])}),{hasRequiredClaims:Object.keys(n).length===0,errors:n}}}/**
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
 */var Si,Ri;(function(t){t.added="child_added",t.removed="child_removed",t.changed="child_changed",t.moved="child_moved",t.value="value"})(Ri||(Ri={}));Object.freeze((Si={},Si[Ri.added]=iF,Si[Ri.removed]=aF,Si[Ri.changed]=sF,Si[Ri.moved]=oF,Si[Ri.value]=rF,Si));const _5=globalThis._reactFireDatabaseCachedQueries||[];globalThis._reactFireDatabaseCachedQueries||(globalThis._reactFireDatabaseCachedQueries=_5);/**
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
 */var w5={includeMetadataChanges:!1};function C5(t,e){return e===void 0&&(e=w5),new Lt(function(n){var r=Pz(t,e,{next:n.next.bind(n),error:n.error.bind(n),complete:n.complete.bind(n)});return{unsubscribe:r}})}function E5(t,e){e===void 0&&(e={});var n=t.data();return!t.exists()||typeof n!="object"||n===null||e.idField&&(n[e.idField]=t.id),n}function S5(t){return C5(t,{includeMetadataChanges:!0}).pipe(m0(function(e){return e.docs}))}function T5(t,e){return e===void 0&&(e={}),S5(t).pipe(m0(function(n){return n.map(function(r){return E5(r,e)})}))}class I5 extends Gd{constructor(e,n){super(),this._timeoutWindow=n,this._hasValue=!1,this._error=void 0,this._firstEmission=new Promise(r=>this._resolveFirstEmission=r),this._innerObservable=e.pipe(h5({next:r=>{this._next(r)},error:r=>{this._error=r,this._resolveFirstEmission()}}),dR(()=>WB()),u5(1)),this._warmupSubscription=this._innerObservable.subscribe(),this._timeoutHandler=setTimeout(this._reset.bind(this),this._timeoutWindow)}get hasValue(){return this._hasValue||!!this._error}get value(){if(this._error)throw this._error;if(!this.hasValue)throw Error("Can only get value if SuspenseSubject has a value");return this._value}get firstEmission(){return this._firstEmission}_next(e){this._hasValue=!0,this._value=e,this._resolveFirstEmission()}_reset(){this._warmupSubscription&&this._warmupSubscription.unsubscribe(),this._hasValue=!1,this._value=void 0,this._error=void 0,this._firstEmission=new Promise(e=>this._resolveFirstEmission=e)}_subscribe(e){return this._timeoutHandler&&clearTimeout(this._timeoutHandler),this._innerSubscriber=this._innerObservable.subscribe(e),this._innerSubscriber}get ourError(){return this._error}}const k5=3e4,Pc=globalThis._reactFirePreloadedObservables||new Map;globalThis._reactFirePreloadedObservables||(globalThis._reactFirePreloadedObservables=Pc);function b5(t,e){if(Pc.has(e))return Pc.get(e);{const n=new I5(t,k5);return Pc.set(e,n),n}}function x5(t){return function(e,n){const r=Object.assign(Object.assign({},e),{hasEmitted:e.hasEmitted||t.hasValue,error:t.ourError,firstValuePromise:t.firstEmission});switch(t.hasValue&&(r.data=t.value),n){case"value":return r.status="success",r;case"error":return r.status="error",r;case"complete":return r.isComplete=!0,r;default:throw new Error(`invalid action "${n}"`)}}}function g0(t,e,n={}){var r;if(!t)throw new Error("cannot call useObservable without an observableId");const i=b5(e,t),s=n.hasOwnProperty("initialData")||n.hasOwnProperty("startWithValue"),o=i.hasValue||s;if(g5(n.suspense)===!0&&!o)throw i.firstEmission;const a={status:o?"success":"loading",hasEmitted:o,isComplete:!1,data:i.hasValue?i.value:(r=n==null?void 0:n.initialData)!==null&&r!==void 0?r:n==null?void 0:n.startWithValue,error:i.ourError,firstValuePromise:i.firstEmission},[l,u]=E.exports.useReducer(x5(i),a);return E.exports.useEffect(()=>{const c=i.subscribe({next:()=>{u("value")},error:h=>{throw u("error"),h},complete:()=>{u("complete")}});return()=>c.unsubscribe()},[i]),l}const pg=globalThis._reactFireFirestoreQueryCache||[];globalThis._reactFireFirestoreQueryCache||(globalThis._reactFireFirestoreQueryCache=pg);function R5(t){const e=pg.findIndex(n=>lz(n,t));return e>-1?e:pg.push(t)-1}function N5(t,e){const n=e?L5(e):"NO_ID_FIELD",r=`firestore:collectionData:${R5(t)}:idField=${n}`,i=T5(t,{idField:n});return g0(r,i,e)}E.exports.createContext(void 0);const vR=E.exports.createContext(void 0);E.exports.createContext(void 0);const A5=E.exports.createContext(void 0),_R=E.exports.createContext(void 0);E.exports.createContext(void 0);E.exports.createContext(void 0);E.exports.createContext(void 0);E.exports.createContext(void 0);function y0(t){return function(e){var n,r;if(!e.sdk)throw new Error("no sdk provided");const i=gR().name;if(((r=(n=e==null?void 0:e.sdk)===null||n===void 0?void 0:n.app)===null||r===void 0?void 0:r.name)!==i)throw new Error("sdk was initialized with a different firebase app");return E.exports.createElement(t.Provider,Object.assign({value:e.sdk},e))}}function wR(t){const e=E.exports.useContext(t);if(!e)throw new Error("SDK not found. useSdk must be called from within a provider");return e}const P5=y0(vR),O5=y0(A5),D5=y0(_R),v0=()=>wR(vR),$5=()=>wR(_R);class _0 extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name="ReactFireError",Object.setPrototypeOf(this,_0.prototype)}}function M5(t,e){if(e==="idField"||e==="initialData"||e==="suspense")return t?t[e]:void 0;throw new Error(`Field "${e}" is not a valid key in ReactFireOptions`)}function L5(t){return M5(t,"idField")}const F5={black:"#000",white:"#fff"},Fl=F5,U5={50:"#ffebee",100:"#ffcdd2",200:"#ef9a9a",300:"#e57373",400:"#ef5350",500:"#f44336",600:"#e53935",700:"#d32f2f",800:"#c62828",900:"#b71c1c",A100:"#ff8a80",A200:"#ff5252",A400:"#ff1744",A700:"#d50000"},bs=U5,z5={50:"#f3e5f5",100:"#e1bee7",200:"#ce93d8",300:"#ba68c8",400:"#ab47bc",500:"#9c27b0",600:"#8e24aa",700:"#7b1fa2",800:"#6a1b9a",900:"#4a148c",A100:"#ea80fc",A200:"#e040fb",A400:"#d500f9",A700:"#aa00ff"},xs=z5,V5={50:"#e3f2fd",100:"#bbdefb",200:"#90caf9",300:"#64b5f6",400:"#42a5f5",500:"#2196f3",600:"#1e88e5",700:"#1976d2",800:"#1565c0",900:"#0d47a1",A100:"#82b1ff",A200:"#448aff",A400:"#2979ff",A700:"#2962ff"},Rs=V5,B5={50:"#e1f5fe",100:"#b3e5fc",200:"#81d4fa",300:"#4fc3f7",400:"#29b6f6",500:"#03a9f4",600:"#039be5",700:"#0288d1",800:"#0277bd",900:"#01579b",A100:"#80d8ff",A200:"#40c4ff",A400:"#00b0ff",A700:"#0091ea"},Ns=B5,j5={50:"#e8f5e9",100:"#c8e6c9",200:"#a5d6a7",300:"#81c784",400:"#66bb6a",500:"#4caf50",600:"#43a047",700:"#388e3c",800:"#2e7d32",900:"#1b5e20",A100:"#b9f6ca",A200:"#69f0ae",A400:"#00e676",A700:"#00c853"},As=j5,W5={50:"#fff3e0",100:"#ffe0b2",200:"#ffcc80",300:"#ffb74d",400:"#ffa726",500:"#ff9800",600:"#fb8c00",700:"#f57c00",800:"#ef6c00",900:"#e65100",A100:"#ffd180",A200:"#ffab40",A400:"#ff9100",A700:"#ff6d00"},ya=W5,H5={50:"#fafafa",100:"#f5f5f5",200:"#eeeeee",300:"#e0e0e0",400:"#bdbdbd",500:"#9e9e9e",600:"#757575",700:"#616161",800:"#424242",900:"#212121",A100:"#f5f5f5",A200:"#eeeeee",A400:"#bdbdbd",A700:"#616161"},q5=H5;function I(){return I=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},I.apply(this,arguments)}function ye(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function CR(t){var e=Object.create(null);return function(n){return e[n]===void 0&&(e[n]=t(n)),e[n]}}var K5=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,G5=CR(function(t){return K5.test(t)||t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)<91});function Q5(t){if(t.sheet)return t.sheet;for(var e=0;e<document.styleSheets.length;e++)if(document.styleSheets[e].ownerNode===t)return document.styleSheets[e]}function Y5(t){var e=document.createElement("style");return e.setAttribute("data-emotion",t.key),t.nonce!==void 0&&e.setAttribute("nonce",t.nonce),e.appendChild(document.createTextNode("")),e.setAttribute("data-s",""),e}var X5=function(){function t(n){var r=this;this._insertTag=function(i){var s;r.tags.length===0?r.insertionPoint?s=r.insertionPoint.nextSibling:r.prepend?s=r.container.firstChild:s=r.before:s=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(i,s),r.tags.push(i)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var e=t.prototype;return e.hydrate=function(r){r.forEach(this._insertTag)},e.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(Y5(this));var i=this.tags[this.tags.length-1];if(this.isSpeedy){var s=Q5(i);try{s.insertRule(r,s.cssRules.length)}catch{}}else i.appendChild(document.createTextNode(r));this.ctr++},e.flush=function(){this.tags.forEach(function(r){return r.parentNode&&r.parentNode.removeChild(r)}),this.tags=[],this.ctr=0},t}(),It="-ms-",qh="-moz-",ue="-webkit-",ER="comm",w0="rule",C0="decl",J5="@import",SR="@keyframes",Z5=Math.abs,Qd=String.fromCharCode,ej=Object.assign;function tj(t,e){return(((e<<2^Bt(t,0))<<2^Bt(t,1))<<2^Bt(t,2))<<2^Bt(t,3)}function TR(t){return t.trim()}function nj(t,e){return(t=e.exec(t))?t[0]:t}function he(t,e,n){return t.replace(e,n)}function mg(t,e){return t.indexOf(e)}function Bt(t,e){return t.charCodeAt(e)|0}function Ul(t,e,n){return t.slice(e,n)}function Kn(t){return t.length}function E0(t){return t.length}function ic(t,e){return e.push(t),t}function rj(t,e){return t.map(e).join("")}var Yd=1,Do=1,IR=0,Zt=0,He=0,Xo="";function Xd(t,e,n,r,i,s,o){return{value:t,root:e,parent:n,type:r,props:i,children:s,line:Yd,column:Do,length:o,return:""}}function va(t,e){return ej(Xd("",null,null,"",null,null,0),t,{length:-t.length},e)}function ij(){return He}function sj(){return He=Zt>0?Bt(Xo,--Zt):0,Do--,He===10&&(Do=1,Yd--),He}function un(){return He=Zt<IR?Bt(Xo,Zt++):0,Do++,He===10&&(Do=1,Yd++),He}function tr(){return Bt(Xo,Zt)}function Oc(){return Zt}function Eu(t,e){return Ul(Xo,t,e)}function zl(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function kR(t){return Yd=Do=1,IR=Kn(Xo=t),Zt=0,[]}function bR(t){return Xo="",t}function Dc(t){return TR(Eu(Zt-1,gg(t===91?t+2:t===40?t+1:t)))}function oj(t){for(;(He=tr())&&He<33;)un();return zl(t)>2||zl(He)>3?"":" "}function aj(t,e){for(;--e&&un()&&!(He<48||He>102||He>57&&He<65||He>70&&He<97););return Eu(t,Oc()+(e<6&&tr()==32&&un()==32))}function gg(t){for(;un();)switch(He){case t:return Zt;case 34:case 39:t!==34&&t!==39&&gg(He);break;case 40:t===41&&gg(t);break;case 92:un();break}return Zt}function lj(t,e){for(;un()&&t+He!==47+10;)if(t+He===42+42&&tr()===47)break;return"/*"+Eu(e,Zt-1)+"*"+Qd(t===47?t:un())}function uj(t){for(;!zl(tr());)un();return Eu(t,Zt)}function cj(t){return bR($c("",null,null,null,[""],t=kR(t),0,[0],t))}function $c(t,e,n,r,i,s,o,a,l){for(var u=0,c=0,h=o,d=0,f=0,p=0,y=1,w=1,g=1,m=0,v="",_=i,C=s,T=r,S=v;w;)switch(p=m,m=un()){case 40:if(p!=108&&S.charCodeAt(h-1)==58){mg(S+=he(Dc(m),"&","&\f"),"&\f")!=-1&&(g=-1);break}case 34:case 39:case 91:S+=Dc(m);break;case 9:case 10:case 13:case 32:S+=oj(p);break;case 92:S+=aj(Oc()-1,7);continue;case 47:switch(tr()){case 42:case 47:ic(hj(lj(un(),Oc()),e,n),l);break;default:S+="/"}break;case 123*y:a[u++]=Kn(S)*g;case 125*y:case 59:case 0:switch(m){case 0:case 125:w=0;case 59+c:f>0&&Kn(S)-h&&ic(f>32?mC(S+";",r,n,h-1):mC(he(S," ","")+";",r,n,h-2),l);break;case 59:S+=";";default:if(ic(T=pC(S,e,n,u,c,i,a,v,_=[],C=[],h),s),m===123)if(c===0)$c(S,e,T,T,_,s,h,a,C);else switch(d){case 100:case 109:case 115:$c(t,T,T,r&&ic(pC(t,T,T,0,0,i,a,v,i,_=[],h),C),i,C,h,a,r?_:C);break;default:$c(S,T,T,T,[""],C,0,a,C)}}u=c=f=0,y=g=1,v=S="",h=o;break;case 58:h=1+Kn(S),f=p;default:if(y<1){if(m==123)--y;else if(m==125&&y++==0&&sj()==125)continue}switch(S+=Qd(m),m*y){case 38:g=c>0?1:(S+="\f",-1);break;case 44:a[u++]=(Kn(S)-1)*g,g=1;break;case 64:tr()===45&&(S+=Dc(un())),d=tr(),c=h=Kn(v=S+=uj(Oc())),m++;break;case 45:p===45&&Kn(S)==2&&(y=0)}}return s}function pC(t,e,n,r,i,s,o,a,l,u,c){for(var h=i-1,d=i===0?s:[""],f=E0(d),p=0,y=0,w=0;p<r;++p)for(var g=0,m=Ul(t,h+1,h=Z5(y=o[p])),v=t;g<f;++g)(v=TR(y>0?d[g]+" "+m:he(m,/&\f/g,d[g])))&&(l[w++]=v);return Xd(t,e,n,i===0?w0:a,l,u,c)}function hj(t,e,n){return Xd(t,e,n,ER,Qd(ij()),Ul(t,2,-2),0)}function mC(t,e,n,r){return Xd(t,e,n,C0,Ul(t,0,r),Ul(t,r+1,-1),r)}function xR(t,e){switch(tj(t,e)){case 5103:return ue+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return ue+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return ue+t+qh+t+It+t+t;case 6828:case 4268:return ue+t+It+t+t;case 6165:return ue+t+It+"flex-"+t+t;case 5187:return ue+t+he(t,/(\w+).+(:[^]+)/,ue+"box-$1$2"+It+"flex-$1$2")+t;case 5443:return ue+t+It+"flex-item-"+he(t,/flex-|-self/,"")+t;case 4675:return ue+t+It+"flex-line-pack"+he(t,/align-content|flex-|-self/,"")+t;case 5548:return ue+t+It+he(t,"shrink","negative")+t;case 5292:return ue+t+It+he(t,"basis","preferred-size")+t;case 6060:return ue+"box-"+he(t,"-grow","")+ue+t+It+he(t,"grow","positive")+t;case 4554:return ue+he(t,/([^-])(transform)/g,"$1"+ue+"$2")+t;case 6187:return he(he(he(t,/(zoom-|grab)/,ue+"$1"),/(image-set)/,ue+"$1"),t,"")+t;case 5495:case 3959:return he(t,/(image-set\([^]*)/,ue+"$1$`$1");case 4968:return he(he(t,/(.+:)(flex-)?(.*)/,ue+"box-pack:$3"+It+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+ue+t+t;case 4095:case 3583:case 4068:case 2532:return he(t,/(.+)-inline(.+)/,ue+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Kn(t)-1-e>6)switch(Bt(t,e+1)){case 109:if(Bt(t,e+4)!==45)break;case 102:return he(t,/(.+:)(.+)-([^]+)/,"$1"+ue+"$2-$3$1"+qh+(Bt(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~mg(t,"stretch")?xR(he(t,"stretch","fill-available"),e)+t:t}break;case 4949:if(Bt(t,e+1)!==115)break;case 6444:switch(Bt(t,Kn(t)-3-(~mg(t,"!important")&&10))){case 107:return he(t,":",":"+ue)+t;case 101:return he(t,/(.+:)([^;!]+)(;|!.+)?/,"$1"+ue+(Bt(t,14)===45?"inline-":"")+"box$3$1"+ue+"$2$3$1"+It+"$2box$3")+t}break;case 5936:switch(Bt(t,e+11)){case 114:return ue+t+It+he(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return ue+t+It+he(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return ue+t+It+he(t,/[svh]\w+-[tblr]{2}/,"lr")+t}return ue+t+It+t+t}return t}function uo(t,e){for(var n="",r=E0(t),i=0;i<r;i++)n+=e(t[i],i,t,e)||"";return n}function dj(t,e,n,r){switch(t.type){case J5:case C0:return t.return=t.return||t.value;case ER:return"";case SR:return t.return=t.value+"{"+uo(t.children,r)+"}";case w0:t.value=t.props.join(",")}return Kn(n=uo(t.children,r))?t.return=t.value+"{"+n+"}":""}function fj(t){var e=E0(t);return function(n,r,i,s){for(var o="",a=0;a<e;a++)o+=t[a](n,r,i,s)||"";return o}}function pj(t){return function(e){e.root||(e=e.return)&&t(e)}}function mj(t,e,n,r){if(t.length>-1&&!t.return)switch(t.type){case C0:t.return=xR(t.value,t.length);break;case SR:return uo([va(t,{value:he(t.value,"@","@"+ue)})],r);case w0:if(t.length)return rj(t.props,function(i){switch(nj(i,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return uo([va(t,{props:[he(i,/:(read-\w+)/,":"+qh+"$1")]})],r);case"::placeholder":return uo([va(t,{props:[he(i,/:(plac\w+)/,":"+ue+"input-$1")]}),va(t,{props:[he(i,/:(plac\w+)/,":"+qh+"$1")]}),va(t,{props:[he(i,/:(plac\w+)/,It+"input-$1")]})],r)}return""})}}var gj=function(e,n,r){for(var i=0,s=0;i=s,s=tr(),i===38&&s===12&&(n[r]=1),!zl(s);)un();return Eu(e,Zt)},yj=function(e,n){var r=-1,i=44;do switch(zl(i)){case 0:i===38&&tr()===12&&(n[r]=1),e[r]+=gj(Zt-1,n,r);break;case 2:e[r]+=Dc(i);break;case 4:if(i===44){e[++r]=tr()===58?"&\f":"",n[r]=e[r].length;break}default:e[r]+=Qd(i)}while(i=un());return e},vj=function(e,n){return bR(yj(kR(e),n))},gC=new WeakMap,_j=function(e){if(!(e.type!=="rule"||!e.parent||e.length<1)){for(var n=e.value,r=e.parent,i=e.column===r.column&&e.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(e.props.length===1&&n.charCodeAt(0)!==58&&!gC.get(r))&&!i){gC.set(e,!0);for(var s=[],o=vj(n,s),a=r.props,l=0,u=0;l<o.length;l++)for(var c=0;c<a.length;c++,u++)e.props[u]=s[l]?o[l].replace(/&\f/g,a[c]):a[c]+" "+o[l]}}},wj=function(e){if(e.type==="decl"){var n=e.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(e.return="",e.value="")}},Cj=[mj],Ej=function(e){var n=e.key;if(n==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(y){var w=y.getAttribute("data-emotion");w.indexOf(" ")!==-1&&(document.head.appendChild(y),y.setAttribute("data-s",""))})}var i=e.stylisPlugins||Cj,s={},o,a=[];o=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(y){for(var w=y.getAttribute("data-emotion").split(" "),g=1;g<w.length;g++)s[w[g]]=!0;a.push(y)});var l,u=[_j,wj];{var c,h=[dj,pj(function(y){c.insert(y)})],d=fj(u.concat(i,h)),f=function(w){return uo(cj(w),d)};l=function(w,g,m,v){c=m,f(w?w+"{"+g.styles+"}":g.styles),v&&(p.inserted[g.name]=!0)}}var p={key:n,sheet:new X5({key:n,container:o,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:s,registered:{},insert:l};return p.sheet.hydrate(a),p},RR={exports:{}},pe={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dt=typeof Symbol=="function"&&Symbol.for,S0=dt?Symbol.for("react.element"):60103,T0=dt?Symbol.for("react.portal"):60106,Jd=dt?Symbol.for("react.fragment"):60107,Zd=dt?Symbol.for("react.strict_mode"):60108,ef=dt?Symbol.for("react.profiler"):60114,tf=dt?Symbol.for("react.provider"):60109,nf=dt?Symbol.for("react.context"):60110,I0=dt?Symbol.for("react.async_mode"):60111,rf=dt?Symbol.for("react.concurrent_mode"):60111,sf=dt?Symbol.for("react.forward_ref"):60112,of=dt?Symbol.for("react.suspense"):60113,Sj=dt?Symbol.for("react.suspense_list"):60120,af=dt?Symbol.for("react.memo"):60115,lf=dt?Symbol.for("react.lazy"):60116,Tj=dt?Symbol.for("react.block"):60121,Ij=dt?Symbol.for("react.fundamental"):60117,kj=dt?Symbol.for("react.responder"):60118,bj=dt?Symbol.for("react.scope"):60119;function gn(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case S0:switch(t=t.type,t){case I0:case rf:case Jd:case ef:case Zd:case of:return t;default:switch(t=t&&t.$$typeof,t){case nf:case sf:case lf:case af:case tf:return t;default:return e}}case T0:return e}}}function NR(t){return gn(t)===rf}pe.AsyncMode=I0;pe.ConcurrentMode=rf;pe.ContextConsumer=nf;pe.ContextProvider=tf;pe.Element=S0;pe.ForwardRef=sf;pe.Fragment=Jd;pe.Lazy=lf;pe.Memo=af;pe.Portal=T0;pe.Profiler=ef;pe.StrictMode=Zd;pe.Suspense=of;pe.isAsyncMode=function(t){return NR(t)||gn(t)===I0};pe.isConcurrentMode=NR;pe.isContextConsumer=function(t){return gn(t)===nf};pe.isContextProvider=function(t){return gn(t)===tf};pe.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===S0};pe.isForwardRef=function(t){return gn(t)===sf};pe.isFragment=function(t){return gn(t)===Jd};pe.isLazy=function(t){return gn(t)===lf};pe.isMemo=function(t){return gn(t)===af};pe.isPortal=function(t){return gn(t)===T0};pe.isProfiler=function(t){return gn(t)===ef};pe.isStrictMode=function(t){return gn(t)===Zd};pe.isSuspense=function(t){return gn(t)===of};pe.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===Jd||t===rf||t===ef||t===Zd||t===of||t===Sj||typeof t=="object"&&t!==null&&(t.$$typeof===lf||t.$$typeof===af||t.$$typeof===tf||t.$$typeof===nf||t.$$typeof===sf||t.$$typeof===Ij||t.$$typeof===kj||t.$$typeof===bj||t.$$typeof===Tj)};pe.typeOf=gn;(function(t){t.exports=pe})(RR);var AR=RR.exports,xj={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Rj={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},PR={};PR[AR.ForwardRef]=xj;PR[AR.Memo]=Rj;var Nj=!0;function Aj(t,e,n){var r="";return n.split(" ").forEach(function(i){t[i]!==void 0?e.push(t[i]+";"):r+=i+" "}),r}var OR=function(e,n,r){var i=e.key+"-"+n.name;(r===!1||Nj===!1)&&e.registered[i]===void 0&&(e.registered[i]=n.styles)},DR=function(e,n,r){OR(e,n,r);var i=e.key+"-"+n.name;if(e.inserted[n.name]===void 0){var s=n;do e.insert(n===s?"."+i:"",s,e.sheet,!0),s=s.next;while(s!==void 0)}};function Pj(t){for(var e=0,n,r=0,i=t.length;i>=4;++r,i-=4)n=t.charCodeAt(r)&255|(t.charCodeAt(++r)&255)<<8|(t.charCodeAt(++r)&255)<<16|(t.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,e=(n&65535)*1540483477+((n>>>16)*59797<<16)^(e&65535)*1540483477+((e>>>16)*59797<<16);switch(i){case 3:e^=(t.charCodeAt(r+2)&255)<<16;case 2:e^=(t.charCodeAt(r+1)&255)<<8;case 1:e^=t.charCodeAt(r)&255,e=(e&65535)*1540483477+((e>>>16)*59797<<16)}return e^=e>>>13,e=(e&65535)*1540483477+((e>>>16)*59797<<16),((e^e>>>15)>>>0).toString(36)}var Oj={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Dj=/[A-Z]|^ms/g,$j=/_EMO_([^_]+?)_([^]*?)_EMO_/g,$R=function(e){return e.charCodeAt(1)===45},yC=function(e){return e!=null&&typeof e!="boolean"},Sp=CR(function(t){return $R(t)?t:t.replace(Dj,"-$&").toLowerCase()}),vC=function(e,n){switch(e){case"animation":case"animationName":if(typeof n=="string")return n.replace($j,function(r,i,s){return Gn={name:i,styles:s,next:Gn},i})}return Oj[e]!==1&&!$R(e)&&typeof n=="number"&&n!==0?n+"px":n};function Vl(t,e,n){if(n==null)return"";if(n.__emotion_styles!==void 0)return n;switch(typeof n){case"boolean":return"";case"object":{if(n.anim===1)return Gn={name:n.name,styles:n.styles,next:Gn},n.name;if(n.styles!==void 0){var r=n.next;if(r!==void 0)for(;r!==void 0;)Gn={name:r.name,styles:r.styles,next:Gn},r=r.next;var i=n.styles+";";return i}return Mj(t,e,n)}case"function":{if(t!==void 0){var s=Gn,o=n(t);return Gn=s,Vl(t,e,o)}break}}if(e==null)return n;var a=e[n];return a!==void 0?a:n}function Mj(t,e,n){var r="";if(Array.isArray(n))for(var i=0;i<n.length;i++)r+=Vl(t,e,n[i])+";";else for(var s in n){var o=n[s];if(typeof o!="object")e!=null&&e[o]!==void 0?r+=s+"{"+e[o]+"}":yC(o)&&(r+=Sp(s)+":"+vC(s,o)+";");else if(Array.isArray(o)&&typeof o[0]=="string"&&(e==null||e[o[0]]===void 0))for(var a=0;a<o.length;a++)yC(o[a])&&(r+=Sp(s)+":"+vC(s,o[a])+";");else{var l=Vl(t,e,o);switch(s){case"animation":case"animationName":{r+=Sp(s)+":"+l+";";break}default:r+=s+"{"+l+"}"}}}return r}var _C=/label:\s*([^\s;\n{]+)\s*(;|$)/g,Gn,k0=function(e,n,r){if(e.length===1&&typeof e[0]=="object"&&e[0]!==null&&e[0].styles!==void 0)return e[0];var i=!0,s="";Gn=void 0;var o=e[0];o==null||o.raw===void 0?(i=!1,s+=Vl(r,n,o)):s+=o[0];for(var a=1;a<e.length;a++)s+=Vl(r,n,e[a]),i&&(s+=o[a]);_C.lastIndex=0;for(var l="",u;(u=_C.exec(s))!==null;)l+="-"+u[1];var c=Pj(s)+l;return{name:c,styles:s,next:Gn}},Lj=function(e){return e()},MR=bp["useInsertionEffect"]?bp["useInsertionEffect"]:!1,Fj=MR||Lj,wC=MR||E.exports.useLayoutEffect,LR=E.exports.createContext(typeof HTMLElement<"u"?Ej({key:"css"}):null);LR.Provider;var FR=function(e){return E.exports.forwardRef(function(n,r){var i=E.exports.useContext(LR);return e(n,i,r)})},UR=E.exports.createContext({}),Uj=FR(function(t,e){var n=t.styles,r=k0([n],void 0,E.exports.useContext(UR)),i=E.exports.useRef();return wC(function(){var s=e.key+"-global",o=new e.sheet.constructor({key:s,nonce:e.sheet.nonce,container:e.sheet.container,speedy:e.sheet.isSpeedy}),a=!1,l=document.querySelector('style[data-emotion="'+s+" "+r.name+'"]');return e.sheet.tags.length&&(o.before=e.sheet.tags[0]),l!==null&&(a=!0,l.setAttribute("data-emotion",s),o.hydrate([l])),i.current=[o,a],function(){o.flush()}},[e]),wC(function(){var s=i.current,o=s[0],a=s[1];if(a){s[1]=!1;return}if(r.next!==void 0&&DR(e,r.next,!0),o.tags.length){var l=o.tags[o.tags.length-1].nextElementSibling;o.before=l,o.flush()}e.insert("",r,o,!1)},[e,r.name]),null});function b0(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return k0(e)}var Su=function(){var e=b0.apply(void 0,arguments),n="animation-"+e.name;return{name:n,styles:"@keyframes "+n+"{"+e.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},zj=G5,Vj=function(e){return e!=="theme"},CC=function(e){return typeof e=="string"&&e.charCodeAt(0)>96?zj:Vj},EC=function(e,n,r){var i;if(n){var s=n.shouldForwardProp;i=e.__emotion_forwardProp&&s?function(o){return e.__emotion_forwardProp(o)&&s(o)}:s}return typeof i!="function"&&r&&(i=e.__emotion_forwardProp),i},Bj=function(e){var n=e.cache,r=e.serialized,i=e.isStringTag;return OR(n,r,i),Fj(function(){return DR(n,r,i)}),null},jj=function t(e,n){var r=e.__emotion_real===e,i=r&&e.__emotion_base||e,s,o;n!==void 0&&(s=n.label,o=n.target);var a=EC(e,n,r),l=a||CC(i),u=!l("as");return function(){var c=arguments,h=r&&e.__emotion_styles!==void 0?e.__emotion_styles.slice(0):[];if(s!==void 0&&h.push("label:"+s+";"),c[0]==null||c[0].raw===void 0)h.push.apply(h,c);else{h.push(c[0][0]);for(var d=c.length,f=1;f<d;f++)h.push(c[f],c[0][f])}var p=FR(function(y,w,g){var m=u&&y.as||i,v="",_=[],C=y;if(y.theme==null){C={};for(var T in y)C[T]=y[T];C.theme=E.exports.useContext(UR)}typeof y.className=="string"?v=Aj(w.registered,_,y.className):y.className!=null&&(v=y.className+" ");var S=k0(h.concat(_),w.registered,C);v+=w.key+"-"+S.name,o!==void 0&&(v+=" "+o);var x=u&&a===void 0?CC(m):l,V={};for(var N in y)u&&N==="as"||x(N)&&(V[N]=y[N]);return V.className=v,V.ref=g,E.exports.createElement(E.exports.Fragment,null,E.exports.createElement(Bj,{cache:w,serialized:S,isStringTag:typeof m=="string"}),E.exports.createElement(m,V))});return p.displayName=s!==void 0?s:"Styled("+(typeof i=="string"?i:i.displayName||i.name||"Component")+")",p.defaultProps=e.defaultProps,p.__emotion_real=p,p.__emotion_base=i,p.__emotion_styles=h,p.__emotion_forwardProp=a,Object.defineProperty(p,"toString",{value:function(){return"."+o}}),p.withComponent=function(y,w){return t(y,I({},n,w,{shouldForwardProp:EC(p,w,!0)})).apply(void 0,h)},p}},Wj=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],yg=jj.bind();Wj.forEach(function(t){yg[t]=yg(t)});const Hj=yg;function qj(t){return t==null||Object.keys(t).length===0}function Kj(t){const{styles:e,defaultTheme:n={}}=t;return L(Uj,{styles:typeof e=="function"?i=>e(qj(i)?n:i):e})}/** @license MUI v5.10.5
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function zR(t,e){return Hj(t,e)}const Gj=(t,e)=>{Array.isArray(t.__emotion_styles)&&(t.__emotion_styles=e(t.__emotion_styles))};function ba(t){return t!==null&&typeof t=="object"&&t.constructor===Object}function nr(t,e,n={clone:!0}){const r=n.clone?I({},t):t;return ba(t)&&ba(e)&&Object.keys(e).forEach(i=>{i!=="__proto__"&&(ba(e[i])&&i in t&&ba(t[i])?r[i]=nr(t[i],e[i],n):r[i]=e[i])}),r}function ds(t){let e="https://mui.com/production-error/?code="+t;for(let n=1;n<arguments.length;n+=1)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified MUI error #"+t+"; visit "+e+" for the full message."}function $(t){if(typeof t!="string")throw new Error(ds(7));return t.charAt(0).toUpperCase()+t.slice(1)}function Qj(...t){return t.reduce((e,n)=>n==null?e:function(...i){e.apply(this,i),n.apply(this,i)},()=>{})}function VR(t,e=166){let n;function r(...i){const s=()=>{t.apply(this,i)};clearTimeout(n),n=setTimeout(s,e)}return r.clear=()=>{clearTimeout(n)},r}function Yj(t,e){return()=>null}function Xj(t,e){return E.exports.isValidElement(t)&&e.indexOf(t.type.muiName)!==-1}function BR(t){return t&&t.ownerDocument||document}function vg(t){return BR(t).defaultView||window}function Jj(t,e){return()=>null}function _g(t,e){typeof t=="function"?t(e):t&&(t.current=e)}const Zj=typeof window<"u"?E.exports.useLayoutEffect:E.exports.useEffect,uf=Zj;let SC=0;function e6(t){const[e,n]=E.exports.useState(t),r=t||e;return E.exports.useEffect(()=>{e==null&&(SC+=1,n(`mui-${SC}`))},[e]),r}const TC=bp["useId"];function t6(t){if(TC!==void 0){const e=TC();return t!=null?t:e}return e6(t)}function n6(t,e,n,r,i){return null}function r6({controlled:t,default:e,name:n,state:r="value"}){const{current:i}=E.exports.useRef(t!==void 0),[s,o]=E.exports.useState(e),a=i?t:s,l=E.exports.useCallback(u=>{i||o(u)},[]);return[a,l]}function xa(t){const e=E.exports.useRef(t);return uf(()=>{e.current=t}),E.exports.useCallback((...n)=>(0,e.current)(...n),[])}function wr(t,e){return E.exports.useMemo(()=>t==null&&e==null?null:n=>{_g(t,n),_g(e,n)},[t,e])}let cf=!0,wg=!1,IC;const i6={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function s6(t){const{type:e,tagName:n}=t;return!!(n==="INPUT"&&i6[e]&&!t.readOnly||n==="TEXTAREA"&&!t.readOnly||t.isContentEditable)}function o6(t){t.metaKey||t.altKey||t.ctrlKey||(cf=!0)}function Tp(){cf=!1}function a6(){this.visibilityState==="hidden"&&wg&&(cf=!0)}function l6(t){t.addEventListener("keydown",o6,!0),t.addEventListener("mousedown",Tp,!0),t.addEventListener("pointerdown",Tp,!0),t.addEventListener("touchstart",Tp,!0),t.addEventListener("visibilitychange",a6,!0)}function u6(t){const{target:e}=t;try{return e.matches(":focus-visible")}catch{}return cf||s6(e)}function jR(){const t=E.exports.useCallback(i=>{i!=null&&l6(i.ownerDocument)},[]),e=E.exports.useRef(!1);function n(){return e.current?(wg=!0,window.clearTimeout(IC),IC=window.setTimeout(()=>{wg=!1},100),e.current=!1,!0):!1}function r(i){return u6(i)?(e.current=!0,!0):!1}return{isFocusVisibleRef:e,onFocus:r,onBlur:n,ref:t}}function WR(t,e){const n=I({},e);return Object.keys(t).forEach(r=>{n[r]===void 0&&(n[r]=t[r])}),n}function An(t,e,n){const r={};return Object.keys(t).forEach(i=>{r[i]=t[i].reduce((s,o)=>(o&&(s.push(e(o)),n&&n[o]&&s.push(n[o])),s),[]).join(" ")}),r}const kC=t=>t,c6=()=>{let t=kC;return{configure(e){t=e},generate(e){return t(e)},reset(){t=kC}}},h6=c6(),x0=h6,d6={active:"active",checked:"checked",completed:"completed",disabled:"disabled",error:"error",expanded:"expanded",focused:"focused",focusVisible:"focusVisible",required:"required",selected:"selected"};function yn(t,e,n="Mui"){const r=d6[e];return r?`${n}-${r}`:`${x0.generate(t)}-${e}`}function vn(t,e,n="Mui"){const r={};return e.forEach(i=>{r[i]=yn(t,i,n)}),r}function Ga(t,e){return e?nr(t,e,{clone:!1}):t}const R0={xs:0,sm:600,md:900,lg:1200,xl:1536},bC={keys:["xs","sm","md","lg","xl"],up:t=>`@media (min-width:${R0[t]}px)`};function vi(t,e,n){const r=t.theme||{};if(Array.isArray(e)){const s=r.breakpoints||bC;return e.reduce((o,a,l)=>(o[s.up(s.keys[l])]=n(e[l]),o),{})}if(typeof e=="object"){const s=r.breakpoints||bC;return Object.keys(e).reduce((o,a)=>{if(Object.keys(s.values||R0).indexOf(a)!==-1){const l=s.up(a);o[l]=n(e[a],a)}else{const l=a;o[l]=e[l]}return o},{})}return n(e)}function f6(t={}){var e;return((e=t.keys)==null?void 0:e.reduce((r,i)=>{const s=t.up(i);return r[s]={},r},{}))||{}}function p6(t,e){return t.reduce((n,r)=>{const i=n[r];return(!i||Object.keys(i).length===0)&&delete n[r],n},e)}function N0(t,e,n=!0){if(!e||typeof e!="string")return null;if(t&&t.vars&&n){const r=`vars.${e}`.split(".").reduce((i,s)=>i&&i[s]?i[s]:null,t);if(r!=null)return r}return e.split(".").reduce((r,i)=>r&&r[i]!=null?r[i]:null,t)}function xC(t,e,n,r=n){let i;return typeof t=="function"?i=t(n):Array.isArray(t)?i=t[n]||r:i=N0(t,n)||r,e&&(i=e(i)),i}function M(t){const{prop:e,cssProperty:n=t.prop,themeKey:r,transform:i}=t,s=o=>{if(o[e]==null)return null;const a=o[e],l=o.theme,u=N0(l,r)||{};return vi(o,a,h=>{let d=xC(u,i,h);return h===d&&typeof h=="string"&&(d=xC(u,i,`${e}${h==="default"?"":$(h)}`,h)),n===!1?d:{[n]:d}})};return s.propTypes={},s.filterProps=[e],s}function _i(...t){const e=t.reduce((r,i)=>(i.filterProps.forEach(s=>{r[s]=i}),r),{}),n=r=>Object.keys(r).reduce((i,s)=>e[s]?Ga(i,e[s](r)):i,{});return n.propTypes={},n.filterProps=t.reduce((r,i)=>r.concat(i.filterProps),[]),n}function m6(t){const e={};return n=>(e[n]===void 0&&(e[n]=t(n)),e[n])}const g6={m:"margin",p:"padding"},y6={t:"Top",r:"Right",b:"Bottom",l:"Left",x:["Left","Right"],y:["Top","Bottom"]},RC={marginX:"mx",marginY:"my",paddingX:"px",paddingY:"py"},v6=m6(t=>{if(t.length>2)if(RC[t])t=RC[t];else return[t];const[e,n]=t.split(""),r=g6[e],i=y6[n]||"";return Array.isArray(i)?i.map(s=>r+s):[r+i]}),_6=["m","mt","mr","mb","ml","mx","my","margin","marginTop","marginRight","marginBottom","marginLeft","marginX","marginY","marginInline","marginInlineStart","marginInlineEnd","marginBlock","marginBlockStart","marginBlockEnd"],w6=["p","pt","pr","pb","pl","px","py","padding","paddingTop","paddingRight","paddingBottom","paddingLeft","paddingX","paddingY","paddingInline","paddingInlineStart","paddingInlineEnd","paddingBlock","paddingBlockStart","paddingBlockEnd"],HR=[..._6,...w6];function Tu(t,e,n,r){var i;const s=(i=N0(t,e,!1))!=null?i:n;return typeof s=="number"?o=>typeof o=="string"?o:s*o:Array.isArray(s)?o=>typeof o=="string"?o:s[o]:typeof s=="function"?s:()=>{}}function qR(t){return Tu(t,"spacing",8)}function Iu(t,e){if(typeof e=="string"||e==null)return e;const n=Math.abs(e),r=t(n);return e>=0?r:typeof r=="number"?-r:`-${r}`}function C6(t,e){return n=>t.reduce((r,i)=>(r[i]=Iu(e,n),r),{})}function E6(t,e,n,r){if(e.indexOf(n)===-1)return null;const i=v6(n),s=C6(i,r),o=t[n];return vi(t,o,s)}function S6(t,e){const n=qR(t.theme);return Object.keys(t).map(r=>E6(t,e,r,n)).reduce(Ga,{})}function hf(t){return S6(t,HR)}hf.propTypes={};hf.filterProps=HR;function ku(t){return typeof t!="number"?t:`${t}px solid`}const T6=M({prop:"border",themeKey:"borders",transform:ku}),I6=M({prop:"borderTop",themeKey:"borders",transform:ku}),k6=M({prop:"borderRight",themeKey:"borders",transform:ku}),b6=M({prop:"borderBottom",themeKey:"borders",transform:ku}),x6=M({prop:"borderLeft",themeKey:"borders",transform:ku}),R6=M({prop:"borderColor",themeKey:"palette"}),N6=M({prop:"borderTopColor",themeKey:"palette"}),A6=M({prop:"borderRightColor",themeKey:"palette"}),P6=M({prop:"borderBottomColor",themeKey:"palette"}),O6=M({prop:"borderLeftColor",themeKey:"palette"}),A0=t=>{if(t.borderRadius!==void 0&&t.borderRadius!==null){const e=Tu(t.theme,"shape.borderRadius",4),n=r=>({borderRadius:Iu(e,r)});return vi(t,t.borderRadius,n)}return null};A0.propTypes={};A0.filterProps=["borderRadius"];const D6=_i(T6,I6,k6,b6,x6,R6,N6,A6,P6,O6,A0),KR=D6,$6=M({prop:"displayPrint",cssProperty:!1,transform:t=>({"@media print":{display:t}})}),M6=M({prop:"display"}),L6=M({prop:"overflow"}),F6=M({prop:"textOverflow"}),U6=M({prop:"visibility"}),z6=M({prop:"whiteSpace"}),GR=_i($6,M6,L6,F6,U6,z6),V6=M({prop:"flexBasis"}),B6=M({prop:"flexDirection"}),j6=M({prop:"flexWrap"}),W6=M({prop:"justifyContent"}),H6=M({prop:"alignItems"}),q6=M({prop:"alignContent"}),K6=M({prop:"order"}),G6=M({prop:"flex"}),Q6=M({prop:"flexGrow"}),Y6=M({prop:"flexShrink"}),X6=M({prop:"alignSelf"}),J6=M({prop:"justifyItems"}),Z6=M({prop:"justifySelf"}),eW=_i(V6,B6,j6,W6,H6,q6,K6,G6,Q6,Y6,X6,J6,Z6),QR=eW,P0=t=>{if(t.gap!==void 0&&t.gap!==null){const e=Tu(t.theme,"spacing",8),n=r=>({gap:Iu(e,r)});return vi(t,t.gap,n)}return null};P0.propTypes={};P0.filterProps=["gap"];const O0=t=>{if(t.columnGap!==void 0&&t.columnGap!==null){const e=Tu(t.theme,"spacing",8),n=r=>({columnGap:Iu(e,r)});return vi(t,t.columnGap,n)}return null};O0.propTypes={};O0.filterProps=["columnGap"];const D0=t=>{if(t.rowGap!==void 0&&t.rowGap!==null){const e=Tu(t.theme,"spacing",8),n=r=>({rowGap:Iu(e,r)});return vi(t,t.rowGap,n)}return null};D0.propTypes={};D0.filterProps=["rowGap"];const tW=M({prop:"gridColumn"}),nW=M({prop:"gridRow"}),rW=M({prop:"gridAutoFlow"}),iW=M({prop:"gridAutoColumns"}),sW=M({prop:"gridAutoRows"}),oW=M({prop:"gridTemplateColumns"}),aW=M({prop:"gridTemplateRows"}),lW=M({prop:"gridTemplateAreas"}),uW=M({prop:"gridArea"}),cW=_i(P0,O0,D0,tW,nW,rW,iW,sW,oW,aW,lW,uW),YR=cW,hW=M({prop:"color",themeKey:"palette"}),dW=M({prop:"bgcolor",cssProperty:"backgroundColor",themeKey:"palette"}),fW=M({prop:"backgroundColor",themeKey:"palette"}),pW=_i(hW,dW,fW),XR=pW,mW=M({prop:"position"}),gW=M({prop:"zIndex",themeKey:"zIndex"}),yW=M({prop:"top"}),vW=M({prop:"right"}),_W=M({prop:"bottom"}),wW=M({prop:"left"}),JR=_i(mW,gW,yW,vW,_W,wW),CW=M({prop:"boxShadow",themeKey:"shadows"}),ZR=CW;function wi(t){return t<=1&&t!==0?`${t*100}%`:t}const EW=M({prop:"width",transform:wi}),eN=t=>{if(t.maxWidth!==void 0&&t.maxWidth!==null){const e=n=>{var r,i,s;return{maxWidth:((r=t.theme)==null||(i=r.breakpoints)==null||(s=i.values)==null?void 0:s[n])||R0[n]||wi(n)}};return vi(t,t.maxWidth,e)}return null};eN.filterProps=["maxWidth"];const SW=M({prop:"minWidth",transform:wi}),TW=M({prop:"height",transform:wi}),IW=M({prop:"maxHeight",transform:wi}),kW=M({prop:"minHeight",transform:wi});M({prop:"size",cssProperty:"width",transform:wi});M({prop:"size",cssProperty:"height",transform:wi});const bW=M({prop:"boxSizing"}),xW=_i(EW,eN,SW,TW,IW,kW,bW),tN=xW,RW=M({prop:"fontFamily",themeKey:"typography"}),NW=M({prop:"fontSize",themeKey:"typography"}),AW=M({prop:"fontStyle",themeKey:"typography"}),PW=M({prop:"fontWeight",themeKey:"typography"}),OW=M({prop:"letterSpacing"}),DW=M({prop:"textTransform"}),$W=M({prop:"lineHeight"}),MW=M({prop:"textAlign"}),LW=M({prop:"typography",cssProperty:!1,themeKey:"typography"}),FW=_i(LW,RW,NW,AW,PW,OW,$W,MW,DW),nN=FW,NC={borders:KR.filterProps,display:GR.filterProps,flexbox:QR.filterProps,grid:YR.filterProps,positions:JR.filterProps,palette:XR.filterProps,shadows:ZR.filterProps,sizing:tN.filterProps,spacing:hf.filterProps,typography:nN.filterProps},rN={borders:KR,display:GR,flexbox:QR,grid:YR,positions:JR,palette:XR,shadows:ZR,sizing:tN,spacing:hf,typography:nN},UW=Object.keys(NC).reduce((t,e)=>(NC[e].forEach(n=>{t[n]=rN[e]}),t),{});function zW(...t){const e=t.reduce((r,i)=>r.concat(Object.keys(i)),[]),n=new Set(e);return t.every(r=>n.size===Object.keys(r).length)}function VW(t,e){return typeof t=="function"?t(e):t}function BW(t=rN){const e=Object.keys(t).reduce((i,s)=>(t[s].filterProps.forEach(o=>{i[o]=t[s]}),i),{});function n(i,s,o){const a={[i]:s,theme:o},l=e[i];return l?l(a):{[i]:s}}function r(i){const{sx:s,theme:o={}}=i||{};if(!s)return null;function a(l){let u=l;if(typeof l=="function")u=l(o);else if(typeof l!="object")return l;if(!u)return null;const c=f6(o.breakpoints),h=Object.keys(c);let d=c;return Object.keys(u).forEach(f=>{const p=VW(u[f],o);if(p!=null)if(typeof p=="object")if(e[f])d=Ga(d,n(f,p,o));else{const y=vi({theme:o},p,w=>({[f]:w}));zW(y,p)?d[f]=r({sx:p,theme:o}):d=Ga(d,y)}else d=Ga(d,n(f,p,o))}),p6(h,d)}return Array.isArray(s)?s.map(a):a(s)}return r}const iN=BW();iN.filterProps=["sx"];const sN=iN,jW=["sx"],WW=t=>{const e={systemProps:{},otherProps:{}};return Object.keys(t).forEach(n=>{UW[n]?e.systemProps[n]=t[n]:e.otherProps[n]=t[n]}),e};function oN(t){const{sx:e}=t,n=ye(t,jW),{systemProps:r,otherProps:i}=WW(n);let s;return Array.isArray(e)?s=[r,...e]:typeof e=="function"?s=(...o)=>{const a=e(...o);return ba(a)?I({},r,a):r}:s=I({},r,e),I({},i,{sx:s})}function aN(t){var e,n,r="";if(typeof t=="string"||typeof t=="number")r+=t;else if(typeof t=="object")if(Array.isArray(t))for(e=0;e<t.length;e++)t[e]&&(n=aN(t[e]))&&(r&&(r+=" "),r+=n);else for(e in t)t[e]&&(r&&(r+=" "),r+=e);return r}function ge(){for(var t,e,n=0,r="";n<arguments.length;)(t=arguments[n++])&&(e=aN(t))&&(r&&(r+=" "),r+=e);return r}const HW=["values","unit","step"],qW=t=>{const e=Object.keys(t).map(n=>({key:n,val:t[n]}))||[];return e.sort((n,r)=>n.val-r.val),e.reduce((n,r)=>I({},n,{[r.key]:r.val}),{})};function KW(t){const{values:e={xs:0,sm:600,md:900,lg:1200,xl:1536},unit:n="px",step:r=5}=t,i=ye(t,HW),s=qW(e),o=Object.keys(s);function a(d){return`@media (min-width:${typeof e[d]=="number"?e[d]:d}${n})`}function l(d){return`@media (max-width:${(typeof e[d]=="number"?e[d]:d)-r/100}${n})`}function u(d,f){const p=o.indexOf(f);return`@media (min-width:${typeof e[d]=="number"?e[d]:d}${n}) and (max-width:${(p!==-1&&typeof e[o[p]]=="number"?e[o[p]]:f)-r/100}${n})`}function c(d){return o.indexOf(d)+1<o.length?u(d,o[o.indexOf(d)+1]):a(d)}function h(d){const f=o.indexOf(d);return f===0?a(o[1]):f===o.length-1?l(o[f]):u(d,o[o.indexOf(d)+1]).replace("@media","@media not all and")}return I({keys:o,values:s,up:a,down:l,between:u,only:c,not:h,unit:n},i)}const GW={borderRadius:4},QW=GW;function YW(t=8){if(t.mui)return t;const e=qR({spacing:t}),n=(...r)=>(r.length===0?[1]:r).map(s=>{const o=e(s);return typeof o=="number"?`${o}px`:o}).join(" ");return n.mui=!0,n}const XW=["breakpoints","palette","spacing","shape"];function $0(t={},...e){const{breakpoints:n={},palette:r={},spacing:i,shape:s={}}=t,o=ye(t,XW),a=KW(n),l=YW(i);let u=nr({breakpoints:a,direction:"ltr",components:{},palette:I({mode:"light"},r),spacing:l,shape:I({},QW,s)},o);return u=e.reduce((c,h)=>nr(c,h),u),u}const JW=E.exports.createContext(null),ZW=JW;function eH(){return E.exports.useContext(ZW)}function tH(t){return Object.keys(t).length===0}function nH(t=null){const e=eH();return!e||tH(e)?t:e}const rH=$0();function lN(t=rH){return nH(t)}const iH=["className","component"];function sH(t={}){const{defaultTheme:e,defaultClassName:n="MuiBox-root",generateClassName:r,styleFunctionSx:i=sN}=t,s=zR("div",{shouldForwardProp:a=>a!=="theme"&&a!=="sx"&&a!=="as"})(i);return E.exports.forwardRef(function(l,u){const c=lN(e),h=oN(l),{className:d,component:f="div"}=h,p=ye(h,iH);return L(s,I({as:f,ref:u,className:ge(d,r?r(n):n),theme:c},p))})}const oH=["variant"];function AC(t){return t.length===0}function uN(t){const{variant:e}=t,n=ye(t,oH);let r=e||"";return Object.keys(n).sort().forEach(i=>{i==="color"?r+=AC(r)?t[i]:$(t[i]):r+=`${AC(r)?i:$(i)}${$(t[i].toString())}`}),r}const aH=["name","slot","skipVariantsResolver","skipSx","overridesResolver"],lH=["theme"],uH=["theme"];function _a(t){return Object.keys(t).length===0}function cH(t){return typeof t=="string"&&t.charCodeAt(0)>96}const hH=(t,e)=>e.components&&e.components[t]&&e.components[t].styleOverrides?e.components[t].styleOverrides:null,dH=(t,e)=>{let n=[];e&&e.components&&e.components[t]&&e.components[t].variants&&(n=e.components[t].variants);const r={};return n.forEach(i=>{const s=uN(i.props);r[s]=i.style}),r},fH=(t,e,n,r)=>{var i,s;const{ownerState:o={}}=t,a=[],l=n==null||(i=n.components)==null||(s=i[r])==null?void 0:s.variants;return l&&l.forEach(u=>{let c=!0;Object.keys(u.props).forEach(h=>{o[h]!==u.props[h]&&t[h]!==u.props[h]&&(c=!1)}),c&&a.push(e[uN(u.props)])}),a};function Mc(t){return t!=="ownerState"&&t!=="theme"&&t!=="sx"&&t!=="as"}const pH=$0();function mH(t={}){const{defaultTheme:e=pH,rootShouldForwardProp:n=Mc,slotShouldForwardProp:r=Mc,styleFunctionSx:i=sN}=t,s=o=>{const a=_a(o.theme)?e:o.theme;return i(I({},o,{theme:a}))};return s.__mui_systemSx=!0,(o,a={})=>{Gj(o,_=>_.filter(C=>!(C!=null&&C.__mui_systemSx)));const{name:l,slot:u,skipVariantsResolver:c,skipSx:h,overridesResolver:d}=a,f=ye(a,aH),p=c!==void 0?c:u&&u!=="Root"||!1,y=h||!1;let w,g=Mc;u==="Root"?g=n:u?g=r:cH(o)&&(g=void 0);const m=zR(o,I({shouldForwardProp:g,label:w},f)),v=(_,...C)=>{const T=C?C.map(N=>typeof N=="function"&&N.__emotion_real!==N?Q=>{let{theme:te}=Q,ve=ye(Q,lH);return N(I({theme:_a(te)?e:te},ve))}:N):[];let S=_;l&&d&&T.push(N=>{const Q=_a(N.theme)?e:N.theme,te=hH(l,Q);if(te){const ve={};return Object.entries(te).forEach(([_e,Ue])=>{ve[_e]=typeof Ue=="function"?Ue(I({},N,{theme:Q})):Ue}),d(N,ve)}return null}),l&&!p&&T.push(N=>{const Q=_a(N.theme)?e:N.theme;return fH(N,dH(l,Q),Q,l)}),y||T.push(s);const x=T.length-C.length;if(Array.isArray(_)&&x>0){const N=new Array(x).fill("");S=[..._,...N],S.raw=[..._.raw,...N]}else typeof _=="function"&&_.__emotion_real!==_&&(S=N=>{let{theme:Q}=N,te=ye(N,uH);return _(I({theme:_a(Q)?e:Q},te))});return m(S,...T)};return m.withConfig&&(v.withConfig=m.withConfig),v}}function gH(t){const{theme:e,name:n,props:r}=t;return!e||!e.components||!e.components[n]||!e.components[n].defaultProps?r:WR(e.components[n].defaultProps,r)}function yH({props:t,name:e,defaultTheme:n}){const r=lN(n);return gH({theme:r,name:e,props:t})}function M0(t,e=0,n=1){return Math.min(Math.max(e,t),n)}function vH(t){t=t.slice(1);const e=new RegExp(`.{1,${t.length>=6?2:1}}`,"g");let n=t.match(e);return n&&n[0].length===1&&(n=n.map(r=>r+r)),n?`rgb${n.length===4?"a":""}(${n.map((r,i)=>i<3?parseInt(r,16):Math.round(parseInt(r,16)/255*1e3)/1e3).join(", ")})`:""}function fs(t){if(t.type)return t;if(t.charAt(0)==="#")return fs(vH(t));const e=t.indexOf("("),n=t.substring(0,e);if(["rgb","rgba","hsl","hsla","color"].indexOf(n)===-1)throw new Error(ds(9,t));let r=t.substring(e+1,t.length-1),i;if(n==="color"){if(r=r.split(" "),i=r.shift(),r.length===4&&r[3].charAt(0)==="/"&&(r[3]=r[3].slice(1)),["srgb","display-p3","a98-rgb","prophoto-rgb","rec-2020"].indexOf(i)===-1)throw new Error(ds(10,i))}else r=r.split(",");return r=r.map(s=>parseFloat(s)),{type:n,values:r,colorSpace:i}}function df(t){const{type:e,colorSpace:n}=t;let{values:r}=t;return e.indexOf("rgb")!==-1?r=r.map((i,s)=>s<3?parseInt(i,10):i):e.indexOf("hsl")!==-1&&(r[1]=`${r[1]}%`,r[2]=`${r[2]}%`),e.indexOf("color")!==-1?r=`${n} ${r.join(" ")}`:r=`${r.join(", ")}`,`${e}(${r})`}function _H(t){t=fs(t);const{values:e}=t,n=e[0],r=e[1]/100,i=e[2]/100,s=r*Math.min(i,1-i),o=(u,c=(u+n/30)%12)=>i-s*Math.max(Math.min(c-3,9-c,1),-1);let a="rgb";const l=[Math.round(o(0)*255),Math.round(o(8)*255),Math.round(o(4)*255)];return t.type==="hsla"&&(a+="a",l.push(e[3])),df({type:a,values:l})}function PC(t){t=fs(t);let e=t.type==="hsl"?fs(_H(t)).values:t.values;return e=e.map(n=>(t.type!=="color"&&(n/=255),n<=.03928?n/12.92:((n+.055)/1.055)**2.4)),Number((.2126*e[0]+.7152*e[1]+.0722*e[2]).toFixed(3))}function wH(t,e){const n=PC(t),r=PC(e);return(Math.max(n,r)+.05)/(Math.min(n,r)+.05)}function rt(t,e){return t=fs(t),e=M0(e),(t.type==="rgb"||t.type==="hsl")&&(t.type+="a"),t.type==="color"?t.values[3]=`/${e}`:t.values[3]=e,df(t)}function CH(t,e){if(t=fs(t),e=M0(e),t.type.indexOf("hsl")!==-1)t.values[2]*=1-e;else if(t.type.indexOf("rgb")!==-1||t.type.indexOf("color")!==-1)for(let n=0;n<3;n+=1)t.values[n]*=1-e;return df(t)}function EH(t,e){if(t=fs(t),e=M0(e),t.type.indexOf("hsl")!==-1)t.values[2]+=(100-t.values[2])*e;else if(t.type.indexOf("rgb")!==-1)for(let n=0;n<3;n+=1)t.values[n]+=(255-t.values[n])*e;else if(t.type.indexOf("color")!==-1)for(let n=0;n<3;n+=1)t.values[n]+=(1-t.values[n])*e;return df(t)}function OC(t){return typeof t=="string"}const SH=["onChange","maxRows","minRows","style","value"];function sc(t,e){return parseInt(t[e],10)||0}const TH={shadow:{visibility:"hidden",position:"absolute",overflow:"hidden",height:0,top:0,left:0,transform:"translateZ(0)"}};function DC(t){return t==null||Object.keys(t).length===0}const IH=E.exports.forwardRef(function(e,n){const{onChange:r,maxRows:i,minRows:s=1,style:o,value:a}=e,l=ye(e,SH),{current:u}=E.exports.useRef(a!=null),c=E.exports.useRef(null),h=wr(n,c),d=E.exports.useRef(null),f=E.exports.useRef(0),[p,y]=E.exports.useState({}),w=E.exports.useCallback(()=>{const C=c.current,S=vg(C).getComputedStyle(C);if(S.width==="0px")return{};const x=d.current;x.style.width=S.width,x.value=C.value||e.placeholder||"x",x.value.slice(-1)===`
`&&(x.value+=" ");const V=S["box-sizing"],N=sc(S,"padding-bottom")+sc(S,"padding-top"),Q=sc(S,"border-bottom-width")+sc(S,"border-top-width"),te=x.scrollHeight;x.value="x";const ve=x.scrollHeight;let _e=te;s&&(_e=Math.max(Number(s)*ve,_e)),i&&(_e=Math.min(Number(i)*ve,_e)),_e=Math.max(_e,ve);const Ue=_e+(V==="border-box"?N+Q:0),Pe=Math.abs(_e-te)<=1;return{outerHeightStyle:Ue,overflow:Pe}},[i,s,e.placeholder]),g=(C,T)=>{const{outerHeightStyle:S,overflow:x}=T;return f.current<20&&(S>0&&Math.abs((C.outerHeightStyle||0)-S)>1||C.overflow!==x)?(f.current+=1,{overflow:x,outerHeightStyle:S}):C},m=E.exports.useCallback(()=>{const C=w();DC(C)||y(T=>g(T,C))},[w]),v=()=>{const C=w();DC(C)||xg.exports.flushSync(()=>{y(T=>g(T,C))})};E.exports.useEffect(()=>{const C=VR(()=>{f.current=0,c.current&&v()}),T=vg(c.current);T.addEventListener("resize",C);let S;return typeof ResizeObserver<"u"&&(S=new ResizeObserver(C),S.observe(c.current)),()=>{C.clear(),T.removeEventListener("resize",C),S&&S.disconnect()}}),uf(()=>{m()}),E.exports.useEffect(()=>{f.current=0},[a]);const _=C=>{f.current=0,u||m(),r&&r(C)};return fn(E.exports.Fragment,{children:[L("textarea",I({value:a,onChange:_,ref:h,rows:s,style:I({height:p.outerHeightStyle,overflow:p.overflow?"hidden":null},o)},l)),L("textarea",{"aria-hidden":!0,className:e.className,readOnly:!0,ref:d,tabIndex:-1,style:I({},TH.shadow,o,{padding:0})})]})}),kH=IH;function bH(t,e){return I({toolbar:{minHeight:56,[t.up("xs")]:{"@media (orientation: landscape)":{minHeight:48}},[t.up("sm")]:{minHeight:64}}},e)}const xH=["mode","contrastThreshold","tonalOffset"],$C={text:{primary:"rgba(0, 0, 0, 0.87)",secondary:"rgba(0, 0, 0, 0.6)",disabled:"rgba(0, 0, 0, 0.38)"},divider:"rgba(0, 0, 0, 0.12)",background:{paper:Fl.white,default:Fl.white},action:{active:"rgba(0, 0, 0, 0.54)",hover:"rgba(0, 0, 0, 0.04)",hoverOpacity:.04,selected:"rgba(0, 0, 0, 0.08)",selectedOpacity:.08,disabled:"rgba(0, 0, 0, 0.26)",disabledBackground:"rgba(0, 0, 0, 0.12)",disabledOpacity:.38,focus:"rgba(0, 0, 0, 0.12)",focusOpacity:.12,activatedOpacity:.12}},Ip={text:{primary:Fl.white,secondary:"rgba(255, 255, 255, 0.7)",disabled:"rgba(255, 255, 255, 0.5)",icon:"rgba(255, 255, 255, 0.5)"},divider:"rgba(255, 255, 255, 0.12)",background:{paper:"#121212",default:"#121212"},action:{active:Fl.white,hover:"rgba(255, 255, 255, 0.08)",hoverOpacity:.08,selected:"rgba(255, 255, 255, 0.16)",selectedOpacity:.16,disabled:"rgba(255, 255, 255, 0.3)",disabledBackground:"rgba(255, 255, 255, 0.12)",disabledOpacity:.38,focus:"rgba(255, 255, 255, 0.12)",focusOpacity:.12,activatedOpacity:.24}};function MC(t,e,n,r){const i=r.light||r,s=r.dark||r*1.5;t[e]||(t.hasOwnProperty(n)?t[e]=t[n]:e==="light"?t.light=EH(t.main,i):e==="dark"&&(t.dark=CH(t.main,s)))}function RH(t="light"){return t==="dark"?{main:Rs[200],light:Rs[50],dark:Rs[400]}:{main:Rs[700],light:Rs[400],dark:Rs[800]}}function NH(t="light"){return t==="dark"?{main:xs[200],light:xs[50],dark:xs[400]}:{main:xs[500],light:xs[300],dark:xs[700]}}function AH(t="light"){return t==="dark"?{main:bs[500],light:bs[300],dark:bs[700]}:{main:bs[700],light:bs[400],dark:bs[800]}}function PH(t="light"){return t==="dark"?{main:Ns[400],light:Ns[300],dark:Ns[700]}:{main:Ns[700],light:Ns[500],dark:Ns[900]}}function OH(t="light"){return t==="dark"?{main:As[400],light:As[300],dark:As[700]}:{main:As[800],light:As[500],dark:As[900]}}function DH(t="light"){return t==="dark"?{main:ya[400],light:ya[300],dark:ya[700]}:{main:"#ed6c02",light:ya[500],dark:ya[900]}}function $H(t){const{mode:e="light",contrastThreshold:n=3,tonalOffset:r=.2}=t,i=ye(t,xH),s=t.primary||RH(e),o=t.secondary||NH(e),a=t.error||AH(e),l=t.info||PH(e),u=t.success||OH(e),c=t.warning||DH(e);function h(y){return wH(y,Ip.text.primary)>=n?Ip.text.primary:$C.text.primary}const d=({color:y,name:w,mainShade:g=500,lightShade:m=300,darkShade:v=700})=>{if(y=I({},y),!y.main&&y[g]&&(y.main=y[g]),!y.hasOwnProperty("main"))throw new Error(ds(11,w?` (${w})`:"",g));if(typeof y.main!="string")throw new Error(ds(12,w?` (${w})`:"",JSON.stringify(y.main)));return MC(y,"light",m,r),MC(y,"dark",v,r),y.contrastText||(y.contrastText=h(y.main)),y},f={dark:Ip,light:$C};return nr(I({common:I({},Fl),mode:e,primary:d({color:s,name:"primary"}),secondary:d({color:o,name:"secondary",mainShade:"A400",lightShade:"A200",darkShade:"A700"}),error:d({color:a,name:"error"}),warning:d({color:c,name:"warning"}),info:d({color:l,name:"info"}),success:d({color:u,name:"success"}),grey:q5,contrastThreshold:n,getContrastText:h,augmentColor:d,tonalOffset:r},f[e]),i)}const MH=["fontFamily","fontSize","fontWeightLight","fontWeightRegular","fontWeightMedium","fontWeightBold","htmlFontSize","allVariants","pxToRem"];function LH(t){return Math.round(t*1e5)/1e5}const LC={textTransform:"uppercase"},FC='"Roboto", "Helvetica", "Arial", sans-serif';function FH(t,e){const n=typeof e=="function"?e(t):e,{fontFamily:r=FC,fontSize:i=14,fontWeightLight:s=300,fontWeightRegular:o=400,fontWeightMedium:a=500,fontWeightBold:l=700,htmlFontSize:u=16,allVariants:c,pxToRem:h}=n,d=ye(n,MH),f=i/14,p=h||(g=>`${g/u*f}rem`),y=(g,m,v,_,C)=>I({fontFamily:r,fontWeight:g,fontSize:p(m),lineHeight:v},r===FC?{letterSpacing:`${LH(_/m)}em`}:{},C,c),w={h1:y(s,96,1.167,-1.5),h2:y(s,60,1.2,-.5),h3:y(o,48,1.167,0),h4:y(o,34,1.235,.25),h5:y(o,24,1.334,0),h6:y(a,20,1.6,.15),subtitle1:y(o,16,1.75,.15),subtitle2:y(a,14,1.57,.1),body1:y(o,16,1.5,.15),body2:y(o,14,1.43,.15),button:y(a,14,1.75,.4,LC),caption:y(o,12,1.66,.4),overline:y(o,12,2.66,1,LC)};return nr(I({htmlFontSize:u,pxToRem:p,fontFamily:r,fontSize:i,fontWeightLight:s,fontWeightRegular:o,fontWeightMedium:a,fontWeightBold:l},w),d,{clone:!1})}const UH=.2,zH=.14,VH=.12;function xe(...t){return[`${t[0]}px ${t[1]}px ${t[2]}px ${t[3]}px rgba(0,0,0,${UH})`,`${t[4]}px ${t[5]}px ${t[6]}px ${t[7]}px rgba(0,0,0,${zH})`,`${t[8]}px ${t[9]}px ${t[10]}px ${t[11]}px rgba(0,0,0,${VH})`].join(",")}const BH=["none",xe(0,2,1,-1,0,1,1,0,0,1,3,0),xe(0,3,1,-2,0,2,2,0,0,1,5,0),xe(0,3,3,-2,0,3,4,0,0,1,8,0),xe(0,2,4,-1,0,4,5,0,0,1,10,0),xe(0,3,5,-1,0,5,8,0,0,1,14,0),xe(0,3,5,-1,0,6,10,0,0,1,18,0),xe(0,4,5,-2,0,7,10,1,0,2,16,1),xe(0,5,5,-3,0,8,10,1,0,3,14,2),xe(0,5,6,-3,0,9,12,1,0,3,16,2),xe(0,6,6,-3,0,10,14,1,0,4,18,3),xe(0,6,7,-4,0,11,15,1,0,4,20,3),xe(0,7,8,-4,0,12,17,2,0,5,22,4),xe(0,7,8,-4,0,13,19,2,0,5,24,4),xe(0,7,9,-4,0,14,21,2,0,5,26,4),xe(0,8,9,-5,0,15,22,2,0,6,28,5),xe(0,8,10,-5,0,16,24,2,0,6,30,5),xe(0,8,11,-5,0,17,26,2,0,6,32,5),xe(0,9,11,-5,0,18,28,2,0,7,34,6),xe(0,9,12,-6,0,19,29,2,0,7,36,6),xe(0,10,13,-6,0,20,31,3,0,8,38,7),xe(0,10,13,-6,0,21,33,3,0,8,40,7),xe(0,10,14,-6,0,22,35,3,0,8,42,7),xe(0,11,14,-7,0,23,36,3,0,9,44,8),xe(0,11,15,-7,0,24,38,3,0,9,46,8)],jH=BH,WH=["duration","easing","delay"],HH={easeInOut:"cubic-bezier(0.4, 0, 0.2, 1)",easeOut:"cubic-bezier(0.0, 0, 0.2, 1)",easeIn:"cubic-bezier(0.4, 0, 1, 1)",sharp:"cubic-bezier(0.4, 0, 0.6, 1)"},qH={shortest:150,shorter:200,short:250,standard:300,complex:375,enteringScreen:225,leavingScreen:195};function UC(t){return`${Math.round(t)}ms`}function KH(t){if(!t)return 0;const e=t/36;return Math.round((4+15*e**.25+e/5)*10)}function GH(t){const e=I({},HH,t.easing),n=I({},qH,t.duration);return I({getAutoHeightDuration:KH,create:(i=["all"],s={})=>{const{duration:o=n.standard,easing:a=e.easeInOut,delay:l=0}=s;return ye(s,WH),(Array.isArray(i)?i:[i]).map(u=>`${u} ${typeof o=="string"?o:UC(o)} ${a} ${typeof l=="string"?l:UC(l)}`).join(",")}},t,{easing:e,duration:n})}const QH={mobileStepper:1e3,fab:1050,speedDial:1050,appBar:1100,drawer:1200,modal:1300,snackbar:1400,tooltip:1500},YH=QH,XH=["breakpoints","mixins","spacing","palette","transitions","typography","shape"];function cN(t={},...e){const{mixins:n={},palette:r={},transitions:i={},typography:s={}}=t,o=ye(t,XH);if(t.vars)throw new Error(ds(18));const a=$H(r),l=$0(t);let u=nr(l,{mixins:bH(l.breakpoints,n),palette:a,shadows:jH.slice(),typography:FH(a,s),transitions:GH(i),zIndex:I({},YH)});return u=nr(u,o),u=e.reduce((c,h)=>nr(c,h),u),u}const JH=cN(),L0=JH;function _n({props:t,name:e}){return yH({props:t,name:e,defaultTheme:L0})}const F0=t=>Mc(t)&&t!=="classes",ZH=mH({defaultTheme:L0,rootShouldForwardProp:F0}),Be=ZH;function eq(t){return yn("MuiPaper",t)}vn("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]);const tq=["className","component","elevation","square","variant"],zC=t=>{let e;return t<1?e=5.11916*t**2:e=4.5*Math.log(t+1)+2,(e/100).toFixed(2)},nq=t=>{const{square:e,elevation:n,variant:r,classes:i}=t,s={root:["root",r,!e&&"rounded",r==="elevation"&&`elevation${n}`]};return An(s,eq,i)},rq=Be("div",{name:"MuiPaper",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.root,e[n.variant],!n.square&&e.rounded,n.variant==="elevation"&&e[`elevation${n.elevation}`]]}})(({theme:t,ownerState:e})=>{var n;return I({backgroundColor:(t.vars||t).palette.background.paper,color:(t.vars||t).palette.text.primary,transition:t.transitions.create("box-shadow")},!e.square&&{borderRadius:t.shape.borderRadius},e.variant==="outlined"&&{border:`1px solid ${(t.vars||t).palette.divider}`},e.variant==="elevation"&&I({boxShadow:(t.vars||t).shadows[e.elevation]},!t.vars&&t.palette.mode==="dark"&&{backgroundImage:`linear-gradient(${rt("#fff",zC(e.elevation))}, ${rt("#fff",zC(e.elevation))})`},t.vars&&{backgroundImage:(n=t.vars.overlays)==null?void 0:n[e.elevation]}))}),iq=E.exports.forwardRef(function(e,n){const r=_n({props:e,name:"MuiPaper"}),{className:i,component:s="div",elevation:o=1,square:a=!1,variant:l="elevation"}=r,u=ye(r,tq),c=I({},r,{component:s,elevation:o,square:a,variant:l}),h=nq(c);return L(rq,I({as:s,ownerState:c,className:ge(h.root,i),ref:n},u))}),sq=iq;function oq(t){return yn("MuiSvgIcon",t)}vn("MuiSvgIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);const aq=["children","className","color","component","fontSize","htmlColor","inheritViewBox","titleAccess","viewBox"],lq=t=>{const{color:e,fontSize:n,classes:r}=t,i={root:["root",e!=="inherit"&&`color${$(e)}`,`fontSize${$(n)}`]};return An(i,oq,r)},uq=Be("svg",{name:"MuiSvgIcon",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.root,n.color!=="inherit"&&e[`color${$(n.color)}`],e[`fontSize${$(n.fontSize)}`]]}})(({theme:t,ownerState:e})=>{var n,r,i,s,o,a,l,u,c,h,d,f,p,y,w,g,m;return{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:"currentColor",flexShrink:0,transition:(n=t.transitions)==null||(r=n.create)==null?void 0:r.call(n,"fill",{duration:(i=t.transitions)==null||(s=i.duration)==null?void 0:s.shorter}),fontSize:{inherit:"inherit",small:((o=t.typography)==null||(a=o.pxToRem)==null?void 0:a.call(o,20))||"1.25rem",medium:((l=t.typography)==null||(u=l.pxToRem)==null?void 0:u.call(l,24))||"1.5rem",large:((c=t.typography)==null||(h=c.pxToRem)==null?void 0:h.call(c,35))||"2.1875"}[e.fontSize],color:(d=(f=(t.vars||t).palette)==null||(p=f[e.color])==null?void 0:p.main)!=null?d:{action:(y=(t.vars||t).palette)==null||(w=y.action)==null?void 0:w.active,disabled:(g=(t.vars||t).palette)==null||(m=g.action)==null?void 0:m.disabled,inherit:void 0}[e.color]}}),hN=E.exports.forwardRef(function(e,n){const r=_n({props:e,name:"MuiSvgIcon"}),{children:i,className:s,color:o="inherit",component:a="svg",fontSize:l="medium",htmlColor:u,inheritViewBox:c=!1,titleAccess:h,viewBox:d="0 0 24 24"}=r,f=ye(r,aq),p=I({},r,{color:o,component:a,fontSize:l,instanceFontSize:e.fontSize,inheritViewBox:c,viewBox:d}),y={};c||(y.viewBox=d);const w=lq(p);return fn(uq,I({as:a,className:ge(w.root,s),ownerState:p,focusable:"false",color:u,"aria-hidden":h?void 0:!0,role:h?"img":void 0,ref:n},y,f,{children:[i,h?L("title",{children:h}):null]}))});hN.muiName="SvgIcon";const VC=hN;function dN(t,e){const n=(r,i)=>L(VC,I({"data-testid":`${e}Icon`,ref:i},r,{children:t}));return n.muiName=VC.muiName,E.exports.memo(E.exports.forwardRef(n))}const cq={configure:t=>{console.warn(["MUI: `ClassNameGenerator` import from `@mui/material/utils` is outdated and might cause unexpected issues.","","You should use `import { unstable_ClassNameGenerator } from '@mui/material/className'` instead","","The detail of the issue: https://github.com/mui/material-ui/issues/30011#issuecomment-1024993401","","The updated documentation: https://mui.com/guides/classname-generator/"].join(`
`)),x0.configure(t)}},hq=Object.freeze(Object.defineProperty({__proto__:null,unstable_ClassNameGenerator:cq,capitalize:$,createChainedFunction:Qj,createSvgIcon:dN,debounce:VR,deprecatedPropType:Yj,isMuiElement:Xj,ownerDocument:BR,ownerWindow:vg,requirePropFactory:Jj,setRef:_g,unstable_useEnhancedEffect:uf,unstable_useId:t6,unsupportedProp:n6,useControlled:r6,useEventCallback:xa,useForkRef:wr,useIsFocusVisible:jR},Symbol.toStringTag,{value:"Module"}));function Cg(t,e){return Cg=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},Cg(t,e)}function dq(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,Cg(t,e)}const BC=Qh.createContext(null);function fq(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function U0(t,e){var n=function(s){return e&&E.exports.isValidElement(s)?e(s):s},r=Object.create(null);return t&&E.exports.Children.map(t,function(i){return i}).forEach(function(i){r[i.key]=n(i)}),r}function pq(t,e){t=t||{},e=e||{};function n(c){return c in e?e[c]:t[c]}var r=Object.create(null),i=[];for(var s in t)s in e?i.length&&(r[s]=i,i=[]):i.push(s);var o,a={};for(var l in e){if(r[l])for(o=0;o<r[l].length;o++){var u=r[l][o];a[r[l][o]]=n(u)}a[l]=n(l)}for(o=0;o<i.length;o++)a[i[o]]=n(i[o]);return a}function Ui(t,e,n){return n[e]!=null?n[e]:t.props[e]}function mq(t,e){return U0(t.children,function(n){return E.exports.cloneElement(n,{onExited:e.bind(null,n),in:!0,appear:Ui(n,"appear",t),enter:Ui(n,"enter",t),exit:Ui(n,"exit",t)})})}function gq(t,e,n){var r=U0(t.children),i=pq(e,r);return Object.keys(i).forEach(function(s){var o=i[s];if(!!E.exports.isValidElement(o)){var a=s in e,l=s in r,u=e[s],c=E.exports.isValidElement(u)&&!u.props.in;l&&(!a||c)?i[s]=E.exports.cloneElement(o,{onExited:n.bind(null,o),in:!0,exit:Ui(o,"exit",t),enter:Ui(o,"enter",t)}):!l&&a&&!c?i[s]=E.exports.cloneElement(o,{in:!1}):l&&a&&E.exports.isValidElement(u)&&(i[s]=E.exports.cloneElement(o,{onExited:n.bind(null,o),in:u.props.in,exit:Ui(o,"exit",t),enter:Ui(o,"enter",t)}))}}),i}var yq=Object.values||function(t){return Object.keys(t).map(function(e){return t[e]})},vq={component:"div",childFactory:function(e){return e}},z0=function(t){dq(e,t);function e(r,i){var s;s=t.call(this,r,i)||this;var o=s.handleExited.bind(fq(s));return s.state={contextValue:{isMounting:!0},handleExited:o,firstRender:!0},s}var n=e.prototype;return n.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},n.componentWillUnmount=function(){this.mounted=!1},e.getDerivedStateFromProps=function(i,s){var o=s.children,a=s.handleExited,l=s.firstRender;return{children:l?mq(i,a):gq(i,o,a),firstRender:!1}},n.handleExited=function(i,s){var o=U0(this.props.children);i.key in o||(i.props.onExited&&i.props.onExited(s),this.mounted&&this.setState(function(a){var l=I({},a.children);return delete l[i.key],{children:l}}))},n.render=function(){var i=this.props,s=i.component,o=i.childFactory,a=ye(i,["component","childFactory"]),l=this.state.contextValue,u=yq(this.state.children).map(o);return delete a.appear,delete a.enter,delete a.exit,s===null?L(BC.Provider,{value:l,children:u}):L(BC.Provider,{value:l,children:L(s,{...a,children:u})})},e}(Qh.Component);z0.propTypes={};z0.defaultProps=vq;const _q=z0;function wq(t){const{className:e,classes:n,pulsate:r=!1,rippleX:i,rippleY:s,rippleSize:o,in:a,onExited:l,timeout:u}=t,[c,h]=E.exports.useState(!1),d=ge(e,n.ripple,n.rippleVisible,r&&n.ripplePulsate),f={width:o,height:o,top:-(o/2)+s,left:-(o/2)+i},p=ge(n.child,c&&n.childLeaving,r&&n.childPulsate);return!a&&!c&&h(!0),E.exports.useEffect(()=>{if(!a&&l!=null){const y=setTimeout(l,u);return()=>{clearTimeout(y)}}},[l,a,u]),L("span",{className:d,style:f,children:L("span",{className:p})})}const Cq=vn("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]),wn=Cq,Eq=["center","classes","className"];let ff=t=>t,jC,WC,HC,qC;const Eg=550,Sq=80,Tq=Su(jC||(jC=ff`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)),Iq=Su(WC||(WC=ff`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)),kq=Su(HC||(HC=ff`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)),bq=Be("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),xq=Be(wq,{name:"MuiTouchRipple",slot:"Ripple"})(qC||(qC=ff`
  opacity: 0;
  position: absolute;

  &.${0} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  &.${0} {
    animation-duration: ${0}ms;
  }

  & .${0} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${0} {
    opacity: 0;
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  & .${0} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${0};
    animation-duration: 2500ms;
    animation-timing-function: ${0};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`),wn.rippleVisible,Tq,Eg,({theme:t})=>t.transitions.easing.easeInOut,wn.ripplePulsate,({theme:t})=>t.transitions.duration.shorter,wn.child,wn.childLeaving,Iq,Eg,({theme:t})=>t.transitions.easing.easeInOut,wn.childPulsate,kq,({theme:t})=>t.transitions.easing.easeInOut),Rq=E.exports.forwardRef(function(e,n){const r=_n({props:e,name:"MuiTouchRipple"}),{center:i=!1,classes:s={},className:o}=r,a=ye(r,Eq),[l,u]=E.exports.useState([]),c=E.exports.useRef(0),h=E.exports.useRef(null);E.exports.useEffect(()=>{h.current&&(h.current(),h.current=null)},[l]);const d=E.exports.useRef(!1),f=E.exports.useRef(null),p=E.exports.useRef(null),y=E.exports.useRef(null);E.exports.useEffect(()=>()=>{clearTimeout(f.current)},[]);const w=E.exports.useCallback(_=>{const{pulsate:C,rippleX:T,rippleY:S,rippleSize:x,cb:V}=_;u(N=>[...N,L(xq,{classes:{ripple:ge(s.ripple,wn.ripple),rippleVisible:ge(s.rippleVisible,wn.rippleVisible),ripplePulsate:ge(s.ripplePulsate,wn.ripplePulsate),child:ge(s.child,wn.child),childLeaving:ge(s.childLeaving,wn.childLeaving),childPulsate:ge(s.childPulsate,wn.childPulsate)},timeout:Eg,pulsate:C,rippleX:T,rippleY:S,rippleSize:x},c.current)]),c.current+=1,h.current=V},[s]),g=E.exports.useCallback((_={},C={},T)=>{const{pulsate:S=!1,center:x=i||C.pulsate,fakeElement:V=!1}=C;if((_==null?void 0:_.type)==="mousedown"&&d.current){d.current=!1;return}(_==null?void 0:_.type)==="touchstart"&&(d.current=!0);const N=V?null:y.current,Q=N?N.getBoundingClientRect():{width:0,height:0,left:0,top:0};let te,ve,_e;if(x||_===void 0||_.clientX===0&&_.clientY===0||!_.clientX&&!_.touches)te=Math.round(Q.width/2),ve=Math.round(Q.height/2);else{const{clientX:Ue,clientY:Pe}=_.touches&&_.touches.length>0?_.touches[0]:_;te=Math.round(Ue-Q.left),ve=Math.round(Pe-Q.top)}if(x)_e=Math.sqrt((2*Q.width**2+Q.height**2)/3),_e%2===0&&(_e+=1);else{const Ue=Math.max(Math.abs((N?N.clientWidth:0)-te),te)*2+2,Pe=Math.max(Math.abs((N?N.clientHeight:0)-ve),ve)*2+2;_e=Math.sqrt(Ue**2+Pe**2)}_!=null&&_.touches?p.current===null&&(p.current=()=>{w({pulsate:S,rippleX:te,rippleY:ve,rippleSize:_e,cb:T})},f.current=setTimeout(()=>{p.current&&(p.current(),p.current=null)},Sq)):w({pulsate:S,rippleX:te,rippleY:ve,rippleSize:_e,cb:T})},[i,w]),m=E.exports.useCallback(()=>{g({},{pulsate:!0})},[g]),v=E.exports.useCallback((_,C)=>{if(clearTimeout(f.current),(_==null?void 0:_.type)==="touchend"&&p.current){p.current(),p.current=null,f.current=setTimeout(()=>{v(_,C)});return}p.current=null,u(T=>T.length>0?T.slice(1):T),h.current=C},[]);return E.exports.useImperativeHandle(n,()=>({pulsate:m,start:g,stop:v}),[m,g,v]),L(bq,I({className:ge(wn.root,s.root,o),ref:y},a,{children:L(_q,{component:null,exit:!0,children:l})}))}),Nq=Rq;function Aq(t){return yn("MuiButtonBase",t)}const Pq=vn("MuiButtonBase",["root","disabled","focusVisible"]),Oq=Pq,Dq=["action","centerRipple","children","className","component","disabled","disableRipple","disableTouchRipple","focusRipple","focusVisibleClassName","LinkComponent","onBlur","onClick","onContextMenu","onDragLeave","onFocus","onFocusVisible","onKeyDown","onKeyUp","onMouseDown","onMouseLeave","onMouseUp","onTouchEnd","onTouchMove","onTouchStart","tabIndex","TouchRippleProps","touchRippleRef","type"],$q=t=>{const{disabled:e,focusVisible:n,focusVisibleClassName:r,classes:i}=t,o=An({root:["root",e&&"disabled",n&&"focusVisible"]},Aq,i);return n&&r&&(o.root+=` ${r}`),o},Mq=Be("button",{name:"MuiButtonBase",slot:"Root",overridesResolver:(t,e)=>e.root})({display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},[`&.${Oq.disabled}`]:{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}}),Lq=E.exports.forwardRef(function(e,n){const r=_n({props:e,name:"MuiButtonBase"}),{action:i,centerRipple:s=!1,children:o,className:a,component:l="button",disabled:u=!1,disableRipple:c=!1,disableTouchRipple:h=!1,focusRipple:d=!1,LinkComponent:f="a",onBlur:p,onClick:y,onContextMenu:w,onDragLeave:g,onFocus:m,onFocusVisible:v,onKeyDown:_,onKeyUp:C,onMouseDown:T,onMouseLeave:S,onMouseUp:x,onTouchEnd:V,onTouchMove:N,onTouchStart:Q,tabIndex:te=0,TouchRippleProps:ve,touchRippleRef:_e,type:Ue}=r,Pe=ye(r,Dq),le=E.exports.useRef(null),P=E.exports.useRef(null),j=wr(P,_e),{isFocusVisibleRef:H,onFocus:me,onBlur:be,ref:en}=jR(),[ft,Wn]=E.exports.useState(!1);u&&ft&&Wn(!1),E.exports.useImperativeHandle(i,()=>({focusVisible:()=>{Wn(!0),le.current.focus()}}),[]);const[tn,Dr]=E.exports.useState(!1);E.exports.useEffect(()=>{Dr(!0)},[]);const Jo=tn&&!c&&!u;E.exports.useEffect(()=>{ft&&d&&!c&&tn&&P.current.pulsate()},[c,d,ft,tn]);function nn(Y,B0,SN=h){return xa(j0=>(B0&&B0(j0),!SN&&P.current&&P.current[Y](j0),!0))}const ze=nn("start",T),zt=nn("stop",w),Zo=nn("stop",g),ea=nn("stop",x),Ci=nn("stop",Y=>{ft&&Y.preventDefault(),S&&S(Y)}),mf=nn("start",Q),gf=nn("stop",V),yf=nn("stop",N),vf=nn("stop",Y=>{be(Y),H.current===!1&&Wn(!1),p&&p(Y)},!1),ta=xa(Y=>{le.current||(le.current=Y.currentTarget),me(Y),H.current===!0&&(Wn(!0),v&&v(Y)),m&&m(Y)}),rn=()=>{const Y=le.current;return l&&l!=="button"&&!(Y.tagName==="A"&&Y.href)},na=E.exports.useRef(!1),Ss=xa(Y=>{d&&!na.current&&ft&&P.current&&Y.key===" "&&(na.current=!0,P.current.stop(Y,()=>{P.current.start(Y)})),Y.target===Y.currentTarget&&rn()&&Y.key===" "&&Y.preventDefault(),_&&_(Y),Y.target===Y.currentTarget&&rn()&&Y.key==="Enter"&&!u&&(Y.preventDefault(),y&&y(Y))}),bu=xa(Y=>{d&&Y.key===" "&&P.current&&ft&&!Y.defaultPrevented&&(na.current=!1,P.current.stop(Y,()=>{P.current.pulsate(Y)})),C&&C(Y),y&&Y.target===Y.currentTarget&&rn()&&Y.key===" "&&!Y.defaultPrevented&&y(Y)});let Ei=l;Ei==="button"&&(Pe.href||Pe.to)&&(Ei=f);const or={};Ei==="button"?(or.type=Ue===void 0?"button":Ue,or.disabled=u):(!Pe.href&&!Pe.to&&(or.role="button"),u&&(or["aria-disabled"]=u));const xu=wr(en,le),Oe=wr(n,xu),ra=I({},r,{centerRipple:s,component:l,disabled:u,disableRipple:c,disableTouchRipple:h,focusRipple:d,tabIndex:te,focusVisible:ft}),Ru=$q(ra);return fn(Mq,I({as:Ei,className:ge(Ru.root,a),ownerState:ra,onBlur:vf,onClick:y,onContextMenu:zt,onFocus:ta,onKeyDown:Ss,onKeyUp:bu,onMouseDown:ze,onMouseLeave:Ci,onMouseUp:ea,onDragLeave:Zo,onTouchEnd:gf,onTouchMove:yf,onTouchStart:mf,ref:Oe,tabIndex:u?-1:te,type:Ue},or,Pe,{children:[o,Jo?L(Nq,I({ref:j,center:s},ve)):null]}))}),Kh=Lq;function Fq(t){return yn("MuiIconButton",t)}const Uq=vn("MuiIconButton",["root","disabled","colorInherit","colorPrimary","colorSecondary","edgeStart","edgeEnd","sizeSmall","sizeMedium","sizeLarge"]),zq=Uq,Vq=["edge","children","className","color","disabled","disableFocusRipple","size"],Bq=t=>{const{classes:e,disabled:n,color:r,edge:i,size:s}=t,o={root:["root",n&&"disabled",r!=="default"&&`color${$(r)}`,i&&`edge${$(i)}`,`size${$(s)}`]};return An(o,Fq,e)},jq=Be(Kh,{name:"MuiIconButton",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.root,n.color!=="default"&&e[`color${$(n.color)}`],n.edge&&e[`edge${$(n.edge)}`],e[`size${$(n.size)}`]]}})(({theme:t,ownerState:e})=>I({textAlign:"center",flex:"0 0 auto",fontSize:t.typography.pxToRem(24),padding:8,borderRadius:"50%",overflow:"visible",color:(t.vars||t).palette.action.active,transition:t.transitions.create("background-color",{duration:t.transitions.duration.shortest})},!e.disableRipple&&{"&:hover":{backgroundColor:t.vars?`rgba(${t.vars.palette.action.activeChannel} / ${t.vars.palette.action.hoverOpacity})`:rt(t.palette.action.active,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},e.edge==="start"&&{marginLeft:e.size==="small"?-3:-12},e.edge==="end"&&{marginRight:e.size==="small"?-3:-12}),({theme:t,ownerState:e})=>I({},e.color==="inherit"&&{color:"inherit"},e.color!=="inherit"&&e.color!=="default"&&I({color:(t.vars||t).palette[e.color].main},!e.disableRipple&&{"&:hover":{backgroundColor:t.vars?`rgba(${t.vars.palette[e.color].mainChannel} / ${t.vars.palette.action.hoverOpacity})`:rt(t.palette[e.color].main,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}}),e.size==="small"&&{padding:5,fontSize:t.typography.pxToRem(18)},e.size==="large"&&{padding:12,fontSize:t.typography.pxToRem(28)},{[`&.${zq.disabled}`]:{backgroundColor:"transparent",color:(t.vars||t).palette.action.disabled}})),Wq=E.exports.forwardRef(function(e,n){const r=_n({props:e,name:"MuiIconButton"}),{edge:i=!1,children:s,className:o,color:a="default",disabled:l=!1,disableFocusRipple:u=!1,size:c="medium"}=r,h=ye(r,Vq),d=I({},r,{edge:i,color:a,disabled:l,disableFocusRipple:u,size:c}),f=Bq(d);return L(jq,I({className:ge(f.root,o),centerRipple:!0,focusRipple:!u,disabled:l,ref:n,ownerState:d},h,{children:s}))}),Hq=Wq;function qq(t){return yn("MuiTypography",t)}vn("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);const Kq=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],Gq=t=>{const{align:e,gutterBottom:n,noWrap:r,paragraph:i,variant:s,classes:o}=t,a={root:["root",s,t.align!=="inherit"&&`align${$(e)}`,n&&"gutterBottom",r&&"noWrap",i&&"paragraph"]};return An(a,qq,o)},Qq=Be("span",{name:"MuiTypography",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.root,n.variant&&e[n.variant],n.align!=="inherit"&&e[`align${$(n.align)}`],n.noWrap&&e.noWrap,n.gutterBottom&&e.gutterBottom,n.paragraph&&e.paragraph]}})(({theme:t,ownerState:e})=>I({margin:0},e.variant&&t.typography[e.variant],e.align!=="inherit"&&{textAlign:e.align},e.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},e.gutterBottom&&{marginBottom:"0.35em"},e.paragraph&&{marginBottom:16})),KC={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},Yq={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},Xq=t=>Yq[t]||t,Jq=E.exports.forwardRef(function(e,n){const r=_n({props:e,name:"MuiTypography"}),i=Xq(r.color),s=oN(I({},r,{color:i})),{align:o="inherit",className:a,component:l,gutterBottom:u=!1,noWrap:c=!1,paragraph:h=!1,variant:d="body1",variantMapping:f=KC}=s,p=ye(s,Kq),y=I({},s,{align:o,color:i,className:a,component:l,gutterBottom:u,noWrap:c,paragraph:h,variant:d,variantMapping:f}),w=l||(h?"p":f[d]||KC[d])||"span",g=Gq(y);return L(Qq,I({as:w,ref:n,ownerState:y,className:ge(g.root,a)},p))}),Zq=Jq;function e8(t){return yn("MuiAppBar",t)}vn("MuiAppBar",["root","positionFixed","positionAbsolute","positionSticky","positionStatic","positionRelative","colorDefault","colorPrimary","colorSecondary","colorInherit","colorTransparent"]);const t8=["className","color","enableColorOnDark","position"],n8=t=>{const{color:e,position:n,classes:r}=t,i={root:["root",`color${$(e)}`,`position${$(n)}`]};return An(i,e8,r)},oc=(t,e)=>`${t==null?void 0:t.replace(")","")}, ${e})`,r8=Be(sq,{name:"MuiAppBar",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.root,e[`position${$(n.position)}`],e[`color${$(n.color)}`]]}})(({theme:t,ownerState:e})=>{const n=t.palette.mode==="light"?t.palette.grey[100]:t.palette.grey[900];return I({display:"flex",flexDirection:"column",width:"100%",boxSizing:"border-box",flexShrink:0},e.position==="fixed"&&{position:"fixed",zIndex:(t.vars||t).zIndex.appBar,top:0,left:"auto",right:0,"@media print":{position:"absolute"}},e.position==="absolute"&&{position:"absolute",zIndex:(t.vars||t).zIndex.appBar,top:0,left:"auto",right:0},e.position==="sticky"&&{position:"sticky",zIndex:(t.vars||t).zIndex.appBar,top:0,left:"auto",right:0},e.position==="static"&&{position:"static"},e.position==="relative"&&{position:"relative"},!t.vars&&I({},e.color==="default"&&{backgroundColor:n,color:t.palette.getContrastText(n)},e.color&&e.color!=="default"&&e.color!=="inherit"&&e.color!=="transparent"&&{backgroundColor:t.palette[e.color].main,color:t.palette[e.color].contrastText},e.color==="inherit"&&{color:"inherit"},t.palette.mode==="dark"&&!e.enableColorOnDark&&{backgroundColor:null,color:null},e.color==="transparent"&&I({backgroundColor:"transparent",color:"inherit"},t.palette.mode==="dark"&&{backgroundImage:"none"})),t.vars&&I({},e.color==="default"&&{"--AppBar-background":e.enableColorOnDark?t.vars.palette.AppBar.defaultBg:oc(t.vars.palette.AppBar.darkBg,t.vars.palette.AppBar.defaultBg),"--AppBar-color":e.enableColorOnDark?t.vars.palette.text.primary:oc(t.vars.palette.AppBar.darkColor,t.vars.palette.text.primary)},e.color&&!e.color.match(/^(default|inherit|transparent)$/)&&{"--AppBar-background":e.enableColorOnDark?t.vars.palette[e.color].main:oc(t.vars.palette.AppBar.darkBg,t.vars.palette[e.color].main),"--AppBar-color":e.enableColorOnDark?t.vars.palette[e.color].contrastText:oc(t.vars.palette.AppBar.darkColor,t.vars.palette[e.color].contrastText)},{backgroundColor:"var(--AppBar-background)",color:e.color==="inherit"?"inherit":"var(--AppBar-color)"},e.color==="transparent"&&{backgroundImage:"none",backgroundColor:"transparent",color:"inherit"}))}),i8=E.exports.forwardRef(function(e,n){const r=_n({props:e,name:"MuiAppBar"}),{className:i,color:s="primary",enableColorOnDark:o=!1,position:a="fixed"}=r,l=ye(r,t8),u=I({},r,{color:s,position:a,enableColorOnDark:o}),c=n8(u);return L(r8,I({square:!0,component:"header",ownerState:u,elevation:4,className:ge(c.root,i,a==="fixed"&&"mui-fixed"),ref:n},l))}),s8=i8,o8=dN(L("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"}),"Cancel");function a8(t){return yn("MuiChip",t)}const l8=vn("MuiChip",["root","sizeSmall","sizeMedium","colorPrimary","colorSecondary","disabled","clickable","clickableColorPrimary","clickableColorSecondary","deletable","deletableColorPrimary","deletableColorSecondary","outlined","filled","outlinedPrimary","outlinedSecondary","filledPrimary","filledSecondary","avatar","avatarSmall","avatarMedium","avatarColorPrimary","avatarColorSecondary","icon","iconSmall","iconMedium","iconColorPrimary","iconColorSecondary","label","labelSmall","labelMedium","deleteIcon","deleteIconSmall","deleteIconMedium","deleteIconColorPrimary","deleteIconColorSecondary","deleteIconOutlinedColorPrimary","deleteIconOutlinedColorSecondary","deleteIconFilledColorPrimary","deleteIconFilledColorSecondary","focusVisible"]),ae=l8,u8=["avatar","className","clickable","color","component","deleteIcon","disabled","icon","label","onClick","onDelete","onKeyDown","onKeyUp","size","variant"],c8=t=>{const{classes:e,disabled:n,size:r,color:i,onDelete:s,clickable:o,variant:a}=t,l={root:["root",a,n&&"disabled",`size${$(r)}`,`color${$(i)}`,o&&"clickable",o&&`clickableColor${$(i)}`,s&&"deletable",s&&`deletableColor${$(i)}`,`${a}${$(i)}`],label:["label",`label${$(r)}`],avatar:["avatar",`avatar${$(r)}`,`avatarColor${$(i)}`],icon:["icon",`icon${$(r)}`,`iconColor${$(i)}`],deleteIcon:["deleteIcon",`deleteIcon${$(r)}`,`deleteIconColor${$(i)}`,`deleteIcon${$(a)}Color${$(i)}`]};return An(l,a8,e)},h8=Be("div",{name:"MuiChip",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:n}=t,{color:r,clickable:i,onDelete:s,size:o,variant:a}=n;return[{[`& .${ae.avatar}`]:e.avatar},{[`& .${ae.avatar}`]:e[`avatar${$(o)}`]},{[`& .${ae.avatar}`]:e[`avatarColor${$(r)}`]},{[`& .${ae.icon}`]:e.icon},{[`& .${ae.icon}`]:e[`icon${$(o)}`]},{[`& .${ae.icon}`]:e[`iconColor${$(r)}`]},{[`& .${ae.deleteIcon}`]:e.deleteIcon},{[`& .${ae.deleteIcon}`]:e[`deleteIcon${$(o)}`]},{[`& .${ae.deleteIcon}`]:e[`deleteIconColor${$(r)}`]},{[`& .${ae.deleteIcon}`]:e[`deleteIcon${$(a)}Color${$(r)}`]},e.root,e[`size${$(o)}`],e[`color${$(r)}`],i&&e.clickable,i&&r!=="default"&&e[`clickableColor${$(r)})`],s&&e.deletable,s&&r!=="default"&&e[`deletableColor${$(r)}`],e[a],e[`${a}${$(r)}`]]}})(({theme:t,ownerState:e})=>{const n=rt(t.palette.text.primary,.26),r=t.palette.mode==="light"?t.palette.grey[700]:t.palette.grey[300];return I({maxWidth:"100%",fontFamily:t.typography.fontFamily,fontSize:t.typography.pxToRem(13),display:"inline-flex",alignItems:"center",justifyContent:"center",height:32,color:(t.vars||t).palette.text.primary,backgroundColor:(t.vars||t).palette.action.selected,borderRadius:32/2,whiteSpace:"nowrap",transition:t.transitions.create(["background-color","box-shadow"]),cursor:"default",outline:0,textDecoration:"none",border:0,padding:0,verticalAlign:"middle",boxSizing:"border-box",[`&.${ae.disabled}`]:{opacity:(t.vars||t).palette.action.disabledOpacity,pointerEvents:"none"},[`& .${ae.avatar}`]:{marginLeft:5,marginRight:-6,width:24,height:24,color:t.vars?t.vars.palette.Chip.defaultAvatarColor:r,fontSize:t.typography.pxToRem(12)},[`& .${ae.avatarColorPrimary}`]:{color:(t.vars||t).palette.primary.contrastText,backgroundColor:(t.vars||t).palette.primary.dark},[`& .${ae.avatarColorSecondary}`]:{color:(t.vars||t).palette.secondary.contrastText,backgroundColor:(t.vars||t).palette.secondary.dark},[`& .${ae.avatarSmall}`]:{marginLeft:4,marginRight:-4,width:18,height:18,fontSize:t.typography.pxToRem(10)},[`& .${ae.icon}`]:I({color:t.vars?t.vars.palette.Chip.defaultIconColor:r,marginLeft:5,marginRight:-6},e.size==="small"&&{fontSize:18,marginLeft:4,marginRight:-4},e.color!=="default"&&{color:"inherit"}),[`& .${ae.deleteIcon}`]:I({WebkitTapHighlightColor:"transparent",color:t.vars?`rgba(${t.vars.palette.text.primaryChannel} / 0.26)`:n,fontSize:22,cursor:"pointer",margin:"0 5px 0 -6px","&:hover":{color:t.vars?`rgba(${t.vars.palette.text.primaryChannel} / 0.4)`:rt(n,.4)}},e.size==="small"&&{fontSize:16,marginRight:4,marginLeft:-4},e.color!=="default"&&{color:t.vars?`rgba(${t.vars.palette[e.color].contrastTextChannel} / 0.7)`:rt(t.palette[e.color].contrastText,.7),"&:hover, &:active":{color:(t.vars||t).palette[e.color].contrastText}})},e.size==="small"&&{height:24},e.color!=="default"&&{backgroundColor:(t.vars||t).palette[e.color].main,color:(t.vars||t).palette[e.color].contrastText},e.onDelete&&{[`&.${ae.focusVisible}`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.action.selectedChannel} / calc(${t.vars.palette.action.selectedOpacity+t.vars.palette.action.focusOpacity}))`:rt(t.palette.action.selected,t.palette.action.selectedOpacity+t.palette.action.focusOpacity)}},e.onDelete&&e.color!=="default"&&{[`&.${ae.focusVisible}`]:{backgroundColor:(t.vars||t).palette[e.color].dark}})},({theme:t,ownerState:e})=>I({},e.clickable&&{userSelect:"none",WebkitTapHighlightColor:"transparent",cursor:"pointer","&:hover":{backgroundColor:t.vars?`rgba(${t.vars.palette.action.selectedChannel} / calc(${t.vars.palette.action.selectedOpacity+t.vars.palette.action.hoverOpacity}))`:rt(t.palette.action.selected,t.palette.action.selectedOpacity+t.palette.action.hoverOpacity)},[`&.${ae.focusVisible}`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.action.selectedChannel} / calc(${t.vars.palette.action.selectedOpacity+t.vars.palette.action.focusOpacity}))`:rt(t.palette.action.selected,t.palette.action.selectedOpacity+t.palette.action.focusOpacity)},"&:active":{boxShadow:(t.vars||t).shadows[1]}},e.clickable&&e.color!=="default"&&{[`&:hover, &.${ae.focusVisible}`]:{backgroundColor:(t.vars||t).palette[e.color].dark}}),({theme:t,ownerState:e})=>I({},e.variant==="outlined"&&{backgroundColor:"transparent",border:t.vars?`1px solid ${t.vars.palette.Chip.defaultBorder}`:`1px solid ${t.palette.mode==="light"?t.palette.grey[400]:t.palette.grey[700]}`,[`&.${ae.clickable}:hover`]:{backgroundColor:(t.vars||t).palette.action.hover},[`&.${ae.focusVisible}`]:{backgroundColor:(t.vars||t).palette.action.focus},[`& .${ae.avatar}`]:{marginLeft:4},[`& .${ae.avatarSmall}`]:{marginLeft:2},[`& .${ae.icon}`]:{marginLeft:4},[`& .${ae.iconSmall}`]:{marginLeft:2},[`& .${ae.deleteIcon}`]:{marginRight:5},[`& .${ae.deleteIconSmall}`]:{marginRight:3}},e.variant==="outlined"&&e.color!=="default"&&{color:(t.vars||t).palette[e.color].main,border:`1px solid ${t.vars?`rgba(${t.vars.palette[e.color].mainChannel} / 0.7)`:rt(t.palette[e.color].main,.7)}`,[`&.${ae.clickable}:hover`]:{backgroundColor:t.vars?`rgba(${t.vars.palette[e.color].mainChannel} / ${t.vars.palette.action.hoverOpacity})`:rt(t.palette[e.color].main,t.palette.action.hoverOpacity)},[`&.${ae.focusVisible}`]:{backgroundColor:t.vars?`rgba(${t.vars.palette[e.color].mainChannel} / ${t.vars.palette.action.focusOpacity})`:rt(t.palette[e.color].main,t.palette.action.focusOpacity)},[`& .${ae.deleteIcon}`]:{color:t.vars?`rgba(${t.vars.palette[e.color].mainChannel} / 0.7)`:rt(t.palette[e.color].main,.7),"&:hover, &:active":{color:(t.vars||t).palette[e.color].main}}})),d8=Be("span",{name:"MuiChip",slot:"Label",overridesResolver:(t,e)=>{const{ownerState:n}=t,{size:r}=n;return[e.label,e[`label${$(r)}`]]}})(({ownerState:t})=>I({overflow:"hidden",textOverflow:"ellipsis",paddingLeft:12,paddingRight:12,whiteSpace:"nowrap"},t.size==="small"&&{paddingLeft:8,paddingRight:8}));function GC(t){return t.key==="Backspace"||t.key==="Delete"}const f8=E.exports.forwardRef(function(e,n){const r=_n({props:e,name:"MuiChip"}),{avatar:i,className:s,clickable:o,color:a="default",component:l,deleteIcon:u,disabled:c=!1,icon:h,label:d,onClick:f,onDelete:p,onKeyDown:y,onKeyUp:w,size:g="medium",variant:m="filled"}=r,v=ye(r,u8),_=E.exports.useRef(null),C=wr(_,n),T=le=>{le.stopPropagation(),p&&p(le)},S=le=>{le.currentTarget===le.target&&GC(le)&&le.preventDefault(),y&&y(le)},x=le=>{le.currentTarget===le.target&&(p&&GC(le)?p(le):le.key==="Escape"&&_.current&&_.current.blur()),w&&w(le)},V=o!==!1&&f?!0:o,N=V||p?Kh:l||"div",Q=I({},r,{component:N,disabled:c,size:g,color:a,onDelete:!!p,clickable:V,variant:m}),te=c8(Q),ve=N===Kh?I({component:l||"div",focusVisibleClassName:te.focusVisible},p&&{disableRipple:!0}):{};let _e=null;p&&(_e=u&&E.exports.isValidElement(u)?E.exports.cloneElement(u,{className:ge(u.props.className,te.deleteIcon),onClick:T}):L(o8,{className:ge(te.deleteIcon),onClick:T}));let Ue=null;i&&E.exports.isValidElement(i)&&(Ue=E.exports.cloneElement(i,{className:ge(te.avatar,i.props.className)}));let Pe=null;return h&&E.exports.isValidElement(h)&&(Pe=E.exports.cloneElement(h,{className:ge(te.icon,h.props.className)})),fn(h8,I({as:N,className:ge(te.root,s),disabled:V&&c?!0:void 0,onClick:f,onKeyDown:S,onKeyUp:x,ref:C,ownerState:Q},ve,v,{children:[Ue||Pe,L(d8,{className:ge(te.label),ownerState:Q,children:d}),_e]}))}),p8=f8;function m8({props:t,states:e,muiFormControl:n}){return e.reduce((r,i)=>(r[i]=t[i],n&&typeof t[i]>"u"&&(r[i]=n[i]),r),{})}const g8=E.exports.createContext(),fN=g8;function y8(){return E.exports.useContext(fN)}function v8(t){return L(Kj,I({},t,{defaultTheme:L0}))}function QC(t){return t!=null&&!(Array.isArray(t)&&t.length===0)}function _8(t,e=!1){return t&&(QC(t.value)&&t.value!==""||e&&QC(t.defaultValue)&&t.defaultValue!=="")}function w8(t){return yn("MuiInputBase",t)}const C8=vn("MuiInputBase",["root","formControl","focused","disabled","adornedStart","adornedEnd","error","sizeSmall","multiline","colorSecondary","fullWidth","hiddenLabel","readOnly","input","inputSizeSmall","inputMultiline","inputTypeSearch","inputAdornedStart","inputAdornedEnd","inputHiddenLabel"]),Gh=C8,E8=["aria-describedby","autoComplete","autoFocus","className","color","components","componentsProps","defaultValue","disabled","disableInjectingGlobalStyles","endAdornment","error","fullWidth","id","inputComponent","inputProps","inputRef","margin","maxRows","minRows","multiline","name","onBlur","onChange","onClick","onFocus","onKeyDown","onKeyUp","placeholder","readOnly","renderSuffix","rows","size","startAdornment","type","value"],pN=(t,e)=>{const{ownerState:n}=t;return[e.root,n.formControl&&e.formControl,n.startAdornment&&e.adornedStart,n.endAdornment&&e.adornedEnd,n.error&&e.error,n.size==="small"&&e.sizeSmall,n.multiline&&e.multiline,n.color&&e[`color${$(n.color)}`],n.fullWidth&&e.fullWidth,n.hiddenLabel&&e.hiddenLabel]},mN=(t,e)=>{const{ownerState:n}=t;return[e.input,n.size==="small"&&e.inputSizeSmall,n.multiline&&e.inputMultiline,n.type==="search"&&e.inputTypeSearch,n.startAdornment&&e.inputAdornedStart,n.endAdornment&&e.inputAdornedEnd,n.hiddenLabel&&e.inputHiddenLabel]},S8=t=>{const{classes:e,color:n,disabled:r,error:i,endAdornment:s,focused:o,formControl:a,fullWidth:l,hiddenLabel:u,multiline:c,readOnly:h,size:d,startAdornment:f,type:p}=t,y={root:["root",`color${$(n)}`,r&&"disabled",i&&"error",l&&"fullWidth",o&&"focused",a&&"formControl",d==="small"&&"sizeSmall",c&&"multiline",f&&"adornedStart",s&&"adornedEnd",u&&"hiddenLabel",h&&"readOnly"],input:["input",r&&"disabled",p==="search"&&"inputTypeSearch",c&&"inputMultiline",d==="small"&&"inputSizeSmall",u&&"inputHiddenLabel",f&&"inputAdornedStart",s&&"inputAdornedEnd",h&&"readOnly"]};return An(y,w8,e)},gN=Be("div",{name:"MuiInputBase",slot:"Root",overridesResolver:pN})(({theme:t,ownerState:e})=>I({},t.typography.body1,{color:(t.vars||t).palette.text.primary,lineHeight:"1.4375em",boxSizing:"border-box",position:"relative",cursor:"text",display:"inline-flex",alignItems:"center",[`&.${Gh.disabled}`]:{color:(t.vars||t).palette.text.disabled,cursor:"default"}},e.multiline&&I({padding:"4px 0 5px"},e.size==="small"&&{paddingTop:1}),e.fullWidth&&{width:"100%"})),yN=Be("input",{name:"MuiInputBase",slot:"Input",overridesResolver:mN})(({theme:t,ownerState:e})=>{const n=t.palette.mode==="light",r=I({color:"currentColor"},t.vars?{opacity:t.vars.opacity.inputPlaceholder}:{opacity:n?.42:.5},{transition:t.transitions.create("opacity",{duration:t.transitions.duration.shorter})}),i={opacity:"0 !important"},s=t.vars?{opacity:t.vars.opacity.inputPlaceholder}:{opacity:n?.42:.5};return I({font:"inherit",letterSpacing:"inherit",color:"currentColor",padding:"4px 0 5px",border:0,boxSizing:"content-box",background:"none",height:"1.4375em",margin:0,WebkitTapHighlightColor:"transparent",display:"block",minWidth:0,width:"100%",animationName:"mui-auto-fill-cancel",animationDuration:"10ms","&::-webkit-input-placeholder":r,"&::-moz-placeholder":r,"&:-ms-input-placeholder":r,"&::-ms-input-placeholder":r,"&:focus":{outline:0},"&:invalid":{boxShadow:"none"},"&::-webkit-search-decoration":{WebkitAppearance:"none"},[`label[data-shrink=false] + .${Gh.formControl} &`]:{"&::-webkit-input-placeholder":i,"&::-moz-placeholder":i,"&:-ms-input-placeholder":i,"&::-ms-input-placeholder":i,"&:focus::-webkit-input-placeholder":s,"&:focus::-moz-placeholder":s,"&:focus:-ms-input-placeholder":s,"&:focus::-ms-input-placeholder":s},[`&.${Gh.disabled}`]:{opacity:1,WebkitTextFillColor:(t.vars||t).palette.text.disabled},"&:-webkit-autofill":{animationDuration:"5000s",animationName:"mui-auto-fill"}},e.size==="small"&&{paddingTop:1},e.multiline&&{height:"auto",resize:"none",padding:0,paddingTop:0},e.type==="search"&&{MozAppearance:"textfield"})}),T8=L(v8,{styles:{"@keyframes mui-auto-fill":{from:{display:"block"}},"@keyframes mui-auto-fill-cancel":{from:{display:"block"}}}}),I8=E.exports.forwardRef(function(e,n){const r=_n({props:e,name:"MuiInputBase"}),{"aria-describedby":i,autoComplete:s,autoFocus:o,className:a,components:l={},componentsProps:u={},defaultValue:c,disabled:h,disableInjectingGlobalStyles:d,endAdornment:f,fullWidth:p=!1,id:y,inputComponent:w="input",inputProps:g={},inputRef:m,maxRows:v,minRows:_,multiline:C=!1,name:T,onBlur:S,onChange:x,onClick:V,onFocus:N,onKeyDown:Q,onKeyUp:te,placeholder:ve,readOnly:_e,renderSuffix:Ue,rows:Pe,startAdornment:le,type:P="text",value:j}=r,H=ye(r,E8),me=g.value!=null?g.value:j,{current:be}=E.exports.useRef(me!=null),en=E.exports.useRef(),ft=E.exports.useCallback(Oe=>{},[]),Wn=wr(g.ref,ft),tn=wr(m,Wn),Dr=wr(en,tn),[Jo,nn]=E.exports.useState(!1),ze=y8(),zt=m8({props:r,muiFormControl:ze,states:["color","disabled","error","hiddenLabel","size","required","filled"]});zt.focused=ze?ze.focused:Jo,E.exports.useEffect(()=>{!ze&&h&&Jo&&(nn(!1),S&&S())},[ze,h,Jo,S]);const Zo=ze&&ze.onFilled,ea=ze&&ze.onEmpty,Ci=E.exports.useCallback(Oe=>{_8(Oe)?Zo&&Zo():ea&&ea()},[Zo,ea]);uf(()=>{be&&Ci({value:me})},[me,Ci,be]);const mf=Oe=>{if(zt.disabled){Oe.stopPropagation();return}N&&N(Oe),g.onFocus&&g.onFocus(Oe),ze&&ze.onFocus?ze.onFocus(Oe):nn(!0)},gf=Oe=>{S&&S(Oe),g.onBlur&&g.onBlur(Oe),ze&&ze.onBlur?ze.onBlur(Oe):nn(!1)},yf=(Oe,...ra)=>{if(!be){const Ru=Oe.target||en.current;if(Ru==null)throw new Error(ds(1));Ci({value:Ru.value})}g.onChange&&g.onChange(Oe,...ra),x&&x(Oe,...ra)};E.exports.useEffect(()=>{Ci(en.current)},[]);const vf=Oe=>{en.current&&Oe.currentTarget===Oe.target&&en.current.focus(),V&&V(Oe)};let ta=w,rn=g;C&&ta==="input"&&(Pe?rn=I({type:void 0,minRows:Pe,maxRows:Pe},rn):rn=I({type:void 0,maxRows:v,minRows:_},rn),ta=kH);const na=Oe=>{Ci(Oe.animationName==="mui-auto-fill-cancel"?en.current:{value:"x"})};E.exports.useEffect(()=>{ze&&ze.setAdornedStart(Boolean(le))},[ze,le]);const Ss=I({},r,{color:zt.color||"primary",disabled:zt.disabled,endAdornment:f,error:zt.error,focused:zt.focused,formControl:ze,fullWidth:p,hiddenLabel:zt.hiddenLabel,multiline:C,size:zt.size,startAdornment:le,type:P}),bu=S8(Ss),Ei=l.Root||gN,or=u.root||{},xu=l.Input||yN;return rn=I({},rn,u.input),fn(E.exports.Fragment,{children:[!d&&T8,fn(Ei,I({},or,!OC(Ei)&&{ownerState:I({},Ss,or.ownerState)},{ref:n,onClick:vf},H,{className:ge(bu.root,or.className,a),children:[le,L(fN.Provider,{value:null,children:L(xu,I({ownerState:Ss,"aria-invalid":zt.error,"aria-describedby":i,autoComplete:s,autoFocus:o,defaultValue:c,disabled:zt.disabled,id:y,onAnimationStart:na,name:T,placeholder:ve,readOnly:_e,required:zt.required,rows:Pe,value:me,onKeyDown:Q,onKeyUp:te,type:P},rn,!OC(xu)&&{as:ta,ownerState:I({},Ss,rn.ownerState)},{ref:Dr,className:ge(bu.input,rn.className),onBlur:gf,onChange:yf,onFocus:mf}))}),f,Ue?Ue(I({},zt,{startAdornment:le})):null]}))]})}),k8=I8;function b8(t){return yn("MuiInput",t)}const x8=I({},Gh,vn("MuiInput",["root","underline","input"])),ac=x8,R8=cN(),N8=sH({defaultTheme:R8,defaultClassName:"MuiBox-root",generateClassName:x0.generate}),A8=N8;function P8(t){return yn("MuiButton",t)}const O8=vn("MuiButton",["root","text","textInherit","textPrimary","textSecondary","textSuccess","textError","textInfo","textWarning","outlined","outlinedInherit","outlinedPrimary","outlinedSecondary","outlinedSuccess","outlinedError","outlinedInfo","outlinedWarning","contained","containedInherit","containedPrimary","containedSecondary","containedSuccess","containedError","containedInfo","containedWarning","disableElevation","focusVisible","disabled","colorInherit","textSizeSmall","textSizeMedium","textSizeLarge","outlinedSizeSmall","outlinedSizeMedium","outlinedSizeLarge","containedSizeSmall","containedSizeMedium","containedSizeLarge","sizeMedium","sizeSmall","sizeLarge","fullWidth","startIcon","endIcon","iconSizeSmall","iconSizeMedium","iconSizeLarge"]),lc=O8,D8=E.exports.createContext({}),$8=D8,M8=["children","color","component","className","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"],L8=["root"],F8=t=>{const{color:e,disableElevation:n,fullWidth:r,size:i,variant:s,classes:o}=t,a={root:["root",s,`${s}${$(e)}`,`size${$(i)}`,`${s}Size${$(i)}`,e==="inherit"&&"colorInherit",n&&"disableElevation",r&&"fullWidth"],label:["label"],startIcon:["startIcon",`iconSize${$(i)}`],endIcon:["endIcon",`iconSize${$(i)}`]},l=An(a,P8,o);return I({},o,l)},vN=t=>I({},t.size==="small"&&{"& > *:nth-of-type(1)":{fontSize:18}},t.size==="medium"&&{"& > *:nth-of-type(1)":{fontSize:20}},t.size==="large"&&{"& > *:nth-of-type(1)":{fontSize:22}}),U8=Be(Kh,{shouldForwardProp:t=>F0(t)||t==="classes",name:"MuiButton",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.root,e[n.variant],e[`${n.variant}${$(n.color)}`],e[`size${$(n.size)}`],e[`${n.variant}Size${$(n.size)}`],n.color==="inherit"&&e.colorInherit,n.disableElevation&&e.disableElevation,n.fullWidth&&e.fullWidth]}})(({theme:t,ownerState:e})=>{var n,r;return I({},t.typography.button,{minWidth:64,padding:"6px 16px",borderRadius:(t.vars||t).shape.borderRadius,transition:t.transitions.create(["background-color","box-shadow","border-color","color"],{duration:t.transitions.duration.short}),"&:hover":I({textDecoration:"none",backgroundColor:t.vars?`rgba(${t.vars.palette.text.primaryChannel} / ${t.vars.palette.action.hoverOpacity})`:rt(t.palette.text.primary,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},e.variant==="text"&&e.color!=="inherit"&&{backgroundColor:t.vars?`rgba(${t.vars.palette[e.color].mainChannel} / ${t.vars.palette.action.hoverOpacity})`:rt(t.palette[e.color].main,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},e.variant==="outlined"&&e.color!=="inherit"&&{border:`1px solid ${(t.vars||t).palette[e.color].main}`,backgroundColor:t.vars?`rgba(${t.vars.palette[e.color].mainChannel} / ${t.vars.palette.action.hoverOpacity})`:rt(t.palette[e.color].main,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},e.variant==="contained"&&{backgroundColor:(t.vars||t).palette.grey.A100,boxShadow:(t.vars||t).shadows[4],"@media (hover: none)":{boxShadow:(t.vars||t).shadows[2],backgroundColor:(t.vars||t).palette.grey[300]}},e.variant==="contained"&&e.color!=="inherit"&&{backgroundColor:(t.vars||t).palette[e.color].dark,"@media (hover: none)":{backgroundColor:(t.vars||t).palette[e.color].main}}),"&:active":I({},e.variant==="contained"&&{boxShadow:(t.vars||t).shadows[8]}),[`&.${lc.focusVisible}`]:I({},e.variant==="contained"&&{boxShadow:(t.vars||t).shadows[6]}),[`&.${lc.disabled}`]:I({color:(t.vars||t).palette.action.disabled},e.variant==="outlined"&&{border:`1px solid ${(t.vars||t).palette.action.disabledBackground}`},e.variant==="outlined"&&e.color==="secondary"&&{border:`1px solid ${(t.vars||t).palette.action.disabled}`},e.variant==="contained"&&{color:(t.vars||t).palette.action.disabled,boxShadow:(t.vars||t).shadows[0],backgroundColor:(t.vars||t).palette.action.disabledBackground})},e.variant==="text"&&{padding:"6px 8px"},e.variant==="text"&&e.color!=="inherit"&&{color:(t.vars||t).palette[e.color].main},e.variant==="outlined"&&{padding:"5px 15px",border:"1px solid currentColor"},e.variant==="outlined"&&e.color!=="inherit"&&{color:(t.vars||t).palette[e.color].main,border:t.vars?`1px solid rgba(${t.vars.palette[e.color].mainChannel} / 0.5)`:`1px solid ${rt(t.palette[e.color].main,.5)}`},e.variant==="contained"&&{color:t.vars?t.vars.palette.text.primary:(n=(r=t.palette).getContrastText)==null?void 0:n.call(r,t.palette.grey[300]),backgroundColor:(t.vars||t).palette.grey[300],boxShadow:(t.vars||t).shadows[2]},e.variant==="contained"&&e.color!=="inherit"&&{color:(t.vars||t).palette[e.color].contrastText,backgroundColor:(t.vars||t).palette[e.color].main},e.color==="inherit"&&{color:"inherit",borderColor:"currentColor"},e.size==="small"&&e.variant==="text"&&{padding:"4px 5px",fontSize:t.typography.pxToRem(13)},e.size==="large"&&e.variant==="text"&&{padding:"8px 11px",fontSize:t.typography.pxToRem(15)},e.size==="small"&&e.variant==="outlined"&&{padding:"3px 9px",fontSize:t.typography.pxToRem(13)},e.size==="large"&&e.variant==="outlined"&&{padding:"7px 21px",fontSize:t.typography.pxToRem(15)},e.size==="small"&&e.variant==="contained"&&{padding:"4px 10px",fontSize:t.typography.pxToRem(13)},e.size==="large"&&e.variant==="contained"&&{padding:"8px 22px",fontSize:t.typography.pxToRem(15)},e.fullWidth&&{width:"100%"})},({ownerState:t})=>t.disableElevation&&{boxShadow:"none","&:hover":{boxShadow:"none"},[`&.${lc.focusVisible}`]:{boxShadow:"none"},"&:active":{boxShadow:"none"},[`&.${lc.disabled}`]:{boxShadow:"none"}}),z8=Be("span",{name:"MuiButton",slot:"StartIcon",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.startIcon,e[`iconSize${$(n.size)}`]]}})(({ownerState:t})=>I({display:"inherit",marginRight:8,marginLeft:-4},t.size==="small"&&{marginLeft:-2},vN(t))),V8=Be("span",{name:"MuiButton",slot:"EndIcon",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.endIcon,e[`iconSize${$(n.size)}`]]}})(({ownerState:t})=>I({display:"inherit",marginRight:-4,marginLeft:8},t.size==="small"&&{marginRight:-2},vN(t))),B8=E.exports.forwardRef(function(e,n){const r=E.exports.useContext($8),i=WR(r,e),s=_n({props:i,name:"MuiButton"}),{children:o,color:a="primary",component:l="button",className:u,disabled:c=!1,disableElevation:h=!1,disableFocusRipple:d=!1,endIcon:f,focusVisibleClassName:p,fullWidth:y=!1,size:w="medium",startIcon:g,type:m,variant:v="text"}=s,_=ye(s,M8),C=I({},s,{color:a,component:l,disabled:c,disableElevation:h,disableFocusRipple:d,fullWidth:y,size:w,type:m,variant:v}),T=F8(C),{root:S}=T,x=ye(T,L8),V=g&&L(z8,{className:x.startIcon,ownerState:C,children:g}),N=f&&L(V8,{className:x.endIcon,ownerState:C,children:f});return fn(U8,I({ownerState:C,className:ge(r.className,S,u),component:l,disabled:c,focusRipple:!d,focusVisibleClassName:ge(x.focusVisible,p),ref:n,type:m},_,{classes:x,children:[V,o,N]}))}),Sg=B8;function j8(t){return yn("MuiCircularProgress",t)}vn("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);const W8=["className","color","disableShrink","size","style","thickness","value","variant"];let pf=t=>t,YC,XC,JC,ZC;const Lr=44,H8=Su(YC||(YC=pf`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`)),q8=Su(XC||(XC=pf`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -125px;
  }
`)),K8=t=>{const{classes:e,variant:n,color:r,disableShrink:i}=t,s={root:["root",n,`color${$(r)}`],svg:["svg"],circle:["circle",`circle${$(n)}`,i&&"circleDisableShrink"]};return An(s,j8,e)},G8=Be("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.root,e[n.variant],e[`color${$(n.color)}`]]}})(({ownerState:t,theme:e})=>I({display:"inline-block"},t.variant==="determinate"&&{transition:e.transitions.create("transform")},t.color!=="inherit"&&{color:(e.vars||e).palette[t.color].main}),({ownerState:t})=>t.variant==="indeterminate"&&b0(JC||(JC=pf`
      animation: ${0} 1.4s linear infinite;
    `),H8)),Q8=Be("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:(t,e)=>e.svg})({display:"block"}),Y8=Be("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.circle,e[`circle${$(n.variant)}`],n.disableShrink&&e.circleDisableShrink]}})(({ownerState:t,theme:e})=>I({stroke:"currentColor"},t.variant==="determinate"&&{transition:e.transitions.create("stroke-dashoffset")},t.variant==="indeterminate"&&{strokeDasharray:"80px, 200px",strokeDashoffset:0}),({ownerState:t})=>t.variant==="indeterminate"&&!t.disableShrink&&b0(ZC||(ZC=pf`
      animation: ${0} 1.4s ease-in-out infinite;
    `),q8)),X8=E.exports.forwardRef(function(e,n){const r=_n({props:e,name:"MuiCircularProgress"}),{className:i,color:s="primary",disableShrink:o=!1,size:a=40,style:l,thickness:u=3.6,value:c=0,variant:h="indeterminate"}=r,d=ye(r,W8),f=I({},r,{color:s,disableShrink:o,size:a,thickness:u,value:c,variant:h}),p=K8(f),y={},w={},g={};if(h==="determinate"){const m=2*Math.PI*((Lr-u)/2);y.strokeDasharray=m.toFixed(3),g["aria-valuenow"]=Math.round(c),y.strokeDashoffset=`${((100-c)/100*m).toFixed(3)}px`,w.transform="rotate(-90deg)"}return L(G8,I({className:ge(p.root,i),style:I({width:a,height:a},w,l),ownerState:f,ref:n,role:"progressbar"},g,d,{children:L(Q8,{className:p.svg,ownerState:f,viewBox:`${Lr/2} ${Lr/2} ${Lr} ${Lr}`,children:L(Y8,{className:p.circle,style:y,ownerState:f,cx:Lr,cy:Lr,r:(Lr-u)/2,fill:"none",strokeWidth:u})})}))}),_N=X8,J8=["disableUnderline","components","componentsProps","fullWidth","inputComponent","multiline","type"],Z8=t=>{const{classes:e,disableUnderline:n}=t,i=An({root:["root",!n&&"underline"],input:["input"]},b8,e);return I({},e,i)},eK=Be(gN,{shouldForwardProp:t=>F0(t)||t==="classes",name:"MuiInput",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[...pN(t,e),!n.disableUnderline&&e.underline]}})(({theme:t,ownerState:e})=>{let r=t.palette.mode==="light"?"rgba(0, 0, 0, 0.42)":"rgba(255, 255, 255, 0.7)";return t.vars&&(r=`rgba(${t.vars.palette.common.onBackgroundChannel} / ${t.vars.opacity.inputUnderline})`),I({position:"relative"},e.formControl&&{"label + &":{marginTop:16}},!e.disableUnderline&&{"&:after":{borderBottom:`2px solid ${(t.vars||t).palette[e.color].main}`,left:0,bottom:0,content:'""',position:"absolute",right:0,transform:"scaleX(0)",transition:t.transitions.create("transform",{duration:t.transitions.duration.shorter,easing:t.transitions.easing.easeOut}),pointerEvents:"none"},[`&.${ac.focused}:after`]:{transform:"scaleX(1) translateX(0)"},[`&.${ac.error}:after`]:{borderBottomColor:(t.vars||t).palette.error.main,transform:"scaleX(1)"},"&:before":{borderBottom:`1px solid ${r}`,left:0,bottom:0,content:'"\\00a0"',position:"absolute",right:0,transition:t.transitions.create("border-bottom-color",{duration:t.transitions.duration.shorter}),pointerEvents:"none"},[`&:hover:not(.${ac.disabled}):before`]:{borderBottom:`2px solid ${(t.vars||t).palette.text.primary}`,"@media (hover: none)":{borderBottom:`1px solid ${r}`}},[`&.${ac.disabled}:before`]:{borderBottomStyle:"dotted"}})}),tK=Be(yN,{name:"MuiInput",slot:"Input",overridesResolver:mN})({}),wN=E.exports.forwardRef(function(e,n){const r=_n({props:e,name:"MuiInput"}),{disableUnderline:i,components:s={},componentsProps:o,fullWidth:a=!1,inputComponent:l="input",multiline:u=!1,type:c="text"}=r,h=ye(r,J8),d=Z8(r),p={root:{ownerState:{disableUnderline:i}}},y=o?nr(o,p):p;return L(k8,I({components:I({Root:eK,Input:tK},s),componentsProps:y,fullWidth:a,inputComponent:l,multiline:u,ref:n,type:c},h,{classes:d}))});wN.muiName="Input";const nK=wN;function rK(t){return yn("MuiToolbar",t)}vn("MuiToolbar",["root","gutters","regular","dense"]);const iK=["className","component","disableGutters","variant"],sK=t=>{const{classes:e,disableGutters:n,variant:r}=t;return An({root:["root",!n&&"gutters",r]},rK,e)},oK=Be("div",{name:"MuiToolbar",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.root,!n.disableGutters&&e.gutters,e[n.variant]]}})(({theme:t,ownerState:e})=>I({position:"relative",display:"flex",alignItems:"center"},!e.disableGutters&&{paddingLeft:t.spacing(2),paddingRight:t.spacing(2),[t.breakpoints.up("sm")]:{paddingLeft:t.spacing(3),paddingRight:t.spacing(3)}},e.variant==="dense"&&{minHeight:48}),({theme:t,ownerState:e})=>e.variant==="regular"&&t.mixins.toolbar),aK=E.exports.forwardRef(function(e,n){const r=_n({props:e,name:"MuiToolbar"}),{className:i,component:s="div",disableGutters:o=!1,variant:a="regular"}=r,l=ye(r,iK),u=I({},r,{component:s,disableGutters:o,variant:a}),c=sK(u);return L(oK,I({as:s,className:ge(c.root,i),ref:n,ownerState:u},l))}),lK=aK;function uK({messagesCollection:t}){const[e,n]=E.exports.useState(""),{data:r}=y5(),{uid:i,displayName:s,photoURL:o}=r;return fn("form",{onSubmit:u=>{u.preventDefault();const c=e.trim();c&&(Az(t,{text:c,createdAt:$z(),uid:i,displayName:s,photoURL:o}),n(""))},children:[L(nK,{value:e,onChange:u=>{n(u.target.value)},placeholder:"Type your message here..."}),L(Sg,{type:"submit",variant:"outlined",disabled:!e,children:"Send"})]})}const cK=new Intl.DateTimeFormat("en-GB",{hour:"numeric",minute:"numeric",second:"numeric",hour12:!1});function hK({createdAt:t,text:e,displayName:n}){return L("div",{children:L(p8,{label:fn(c0,{children:[t!=null&&t.seconds?L("span",{children:cK.format(new Date(t.seconds*1e3))}):null," ",L("strong",{children:n||null})," ",e]}),variant:"outlined"})})}function dK({messages:t}){return L("div",{children:t==null?void 0:t.map(e=>L(hK,{...e},e.id))})}var CN={exports:{}};(function(t){function e(n){return n&&n.__esModule?n:{default:n}}t.exports=e,t.exports.__esModule=!0,t.exports.default=t.exports})(CN);var kp={};const fK=tE(hq);var eE;function pK(){return eE||(eE=1,function(t){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return e.createSvgIcon}});var e=fK}(kp)),kp}const mK=tE(TB);function gK(){const t=$5(),e=oz(t,"messages"),n=Sz(e,Iz("createdAt"),bz(100)),{status:r,data:i}=N5(n,{idField:"id"});return fn("div",{children:[r==="loading"?L(_N,{}):L(dK,{messages:i}),L(uK,{messagesCollection:e})]})}const yK=async t=>{GD(t),await _$(t,new ur)},vK=()=>{const t=globalThis._reactFirePreloadedObservables;Array.from(t.keys()).forEach(e=>e.includes("firestore")&&t.delete(e))},_K=async t=>{await QD(t),vK()};function wK({color:t}){const{data:e}=yR(),n=v0();return e.signedIn?L(Sg,{variant:"outlined",color:t,onClick:()=>_K(n),children:"Sign out"}):L(Sg,{variant:"outlined",color:t,onClick:()=>yK(n),children:"Sign in with Google"})}var V0={},CK=CN.exports;Object.defineProperty(V0,"__esModule",{value:!0});var EN=V0.default=void 0,EK=CK(pK()),SK=mK,TK=(0,EK.default)((0,SK.jsx)("path",{d:"M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"}),"Menu");EN=V0.default=TK;function IK(){return L(A8,{sx:{flexGrow:1},children:L(s8,{position:"static",children:fn(lK,{children:[L(Hq,{size:"large",edge:"start",color:"inherit","aria-label":"menu",sx:{mr:2},children:L(EN,{})}),L(Zq,{variant:"h6",component:"div",sx:{flexGrow:1},children:"Chatti"}),L(wK,{color:"inherit"})]})})})}function kK(){const{status:t,data:e}=yR();return t==="loading"?L(_N,{}):fn(c0,{children:[L(IK,{}),e.signedIn&&L(gK,{})]})}const bK={apiKey:"AIzaSyCxXnUidB20eJPotUbQjUUQmVDk_LFIzQk",authDomain:"example-44ced.firebaseapp.com",projectId:"example-44ced",storageBucket:"example-44ced.appspot.com",messagingSenderId:"340859330515",appId:"1:340859330515:web:98a9e55130e5fbcaced926"};function xK({children:t}){const e=gR(),n=oM(e),r=pF(e);return L(D5,{sdk:cz(e),children:L(P5,{sdk:n,children:L(O5,{sdk:r,children:t})})})}xp.createRoot(document.getElementById("root")).render(L(Qh.StrictMode,{children:L(m5,{firebaseConfig:bK,children:L(xK,{children:L(kK,{})})})}));
