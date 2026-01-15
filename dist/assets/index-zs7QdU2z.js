(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function Sd(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const Nt={},Fo=[],or=()=>{},Z_=()=>!1,lu=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),Md=n=>n.startsWith("onUpdate:"),Dn=Object.assign,yd=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},Pv=Object.prototype.hasOwnProperty,vt=(n,e)=>Pv.call(n,e),Je=Array.isArray,Oo=n=>cu(n)==="[object Map]",J_=n=>cu(n)==="[object Set]",tt=n=>typeof n=="function",on=n=>typeof n=="string",Es=n=>typeof n=="symbol",Ot=n=>n!==null&&typeof n=="object",Q_=n=>(Ot(n)||tt(n))&&tt(n.then)&&tt(n.catch),eg=Object.prototype.toString,cu=n=>eg.call(n),Dv=n=>cu(n).slice(8,-1),tg=n=>cu(n)==="[object Object]",Ed=n=>on(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Ba=Sd(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),uu=n=>{const e=Object.create(null);return(t=>e[t]||(e[t]=n(t)))},Iv=/-\w/g,_s=uu(n=>n.replace(Iv,e=>e.slice(1).toUpperCase())),Lv=/\B([A-Z])/g,oo=uu(n=>n.replace(Lv,"-$1").toLowerCase()),ng=uu(n=>n.charAt(0).toUpperCase()+n.slice(1)),Du=uu(n=>n?`on${ng(n)}`:""),hs=(n,e)=>!Object.is(n,e),Iu=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},ig=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},Nv=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let Ap;const fu=()=>Ap||(Ap=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function bd(n){if(Je(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],r=on(i)?Bv(i):bd(i);if(r)for(const s in r)e[s]=r[s]}return e}else if(on(n)||Ot(n))return n}const Uv=/;(?![^(]*\))/g,Fv=/:([^]+)/,Ov=/\/\*[^]*?\*\//g;function Bv(n){const e={};return n.replace(Ov,"").split(Uv).forEach(t=>{if(t){const i=t.split(Fv);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Td(n){let e="";if(on(n))e=n;else if(Je(n))for(let t=0;t<n.length;t++){const i=Td(n[t]);i&&(e+=i+" ")}else if(Ot(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const zv="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",kv=Sd(zv);function rg(n){return!!n||n===""}const sg=n=>!!(n&&n.__v_isRef===!0),og=n=>on(n)?n:n==null?"":Je(n)||Ot(n)&&(n.toString===eg||!tt(n.toString))?sg(n)?og(n.value):JSON.stringify(n,ag,2):String(n),ag=(n,e)=>sg(e)?ag(n,e.value):Oo(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,r],s)=>(t[Lu(i,s)+" =>"]=r,t),{})}:J_(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>Lu(t))}:Es(e)?Lu(e):Ot(e)&&!Je(e)&&!tg(e)?String(e):e,Lu=(n,e="")=>{var t;return Es(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};let Kn;class lg{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Kn,!e&&Kn&&(this.index=(Kn.scopes||(Kn.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=Kn;try{return Kn=this,e()}finally{Kn=t}}}on(){++this._on===1&&(this.prevScope=Kn,Kn=this)}off(){this._on>0&&--this._on===0&&(Kn=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(this.effects.length=0,t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function Vv(n){return new lg(n)}function Gv(){return Kn}let Lt;const Nu=new WeakSet;class cg{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Kn&&Kn.active&&Kn.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Nu.has(this)&&(Nu.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||fg(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,wp(this),hg(this);const e=Lt,t=Vi;Lt=this,Vi=!0;try{return this.fn()}finally{dg(this),Lt=e,Vi=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Rd(e);this.deps=this.depsTail=void 0,wp(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Nu.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Bf(this)&&this.run()}get dirty(){return Bf(this)}}let ug=0,za,ka;function fg(n,e=!1){if(n.flags|=8,e){n.next=ka,ka=n;return}n.next=za,za=n}function Ad(){ug++}function wd(){if(--ug>0)return;if(ka){let e=ka;for(ka=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;za;){let e=za;for(za=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function hg(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function dg(n){let e,t=n.depsTail,i=t;for(;i;){const r=i.prevDep;i.version===-1?(i===t&&(t=r),Rd(i),Hv(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=r}n.deps=e,n.depsTail=t}function Bf(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(pg(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function pg(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===ol)||(n.globalVersion=ol,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!Bf(n))))return;n.flags|=2;const e=n.dep,t=Lt,i=Vi;Lt=n,Vi=!0;try{hg(n);const r=n.fn(n._value);(e.version===0||hs(r,n._value))&&(n.flags|=128,n._value=r,e.version++)}catch(r){throw e.version++,r}finally{Lt=t,Vi=i,dg(n),n.flags&=-3}}function Rd(n,e=!1){const{dep:t,prevSub:i,nextSub:r}=n;if(i&&(i.nextSub=r,n.prevSub=void 0),r&&(r.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let s=t.computed.deps;s;s=s.nextDep)Rd(s,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function Hv(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let Vi=!0;const mg=[];function Fr(){mg.push(Vi),Vi=!1}function Or(){const n=mg.pop();Vi=n===void 0?!0:n}function wp(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=Lt;Lt=void 0;try{e()}finally{Lt=t}}}let ol=0;class Wv{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Cd{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Lt||!Vi||Lt===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==Lt)t=this.activeLink=new Wv(Lt,this),Lt.deps?(t.prevDep=Lt.depsTail,Lt.depsTail.nextDep=t,Lt.depsTail=t):Lt.deps=Lt.depsTail=t,_g(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=Lt.depsTail,t.nextDep=void 0,Lt.depsTail.nextDep=t,Lt.depsTail=t,Lt.deps===t&&(Lt.deps=i)}return t}trigger(e){this.version++,ol++,this.notify(e)}notify(e){Ad();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{wd()}}}function _g(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)_g(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const zf=new WeakMap,$s=Symbol(""),kf=Symbol(""),al=Symbol("");function bn(n,e,t){if(Vi&&Lt){let i=zf.get(n);i||zf.set(n,i=new Map);let r=i.get(t);r||(i.set(t,r=new Cd),r.map=i,r.key=t),r.track()}}function Tr(n,e,t,i,r,s){const o=zf.get(n);if(!o){ol++;return}const a=l=>{l&&l.trigger()};if(Ad(),e==="clear")o.forEach(a);else{const l=Je(n),c=l&&Ed(t);if(l&&t==="length"){const u=Number(i);o.forEach((f,h)=>{(h==="length"||h===al||!Es(h)&&h>=u)&&a(f)})}else switch((t!==void 0||o.has(void 0))&&a(o.get(t)),c&&a(o.get(al)),e){case"add":l?c&&a(o.get("length")):(a(o.get($s)),Oo(n)&&a(o.get(kf)));break;case"delete":l||(a(o.get($s)),Oo(n)&&a(o.get(kf)));break;case"set":Oo(n)&&a(o.get($s));break}}wd()}function uo(n){const e=xt(n);return e===n?e:(bn(e,"iterate",al),Gi(n)?e:e.map(Br))}function Pd(n){return bn(n=xt(n),"iterate",al),n}function es(n,e){return gs(n)?Bo(n)?ll(Br(e)):ll(e):Br(e)}const Xv={__proto__:null,[Symbol.iterator](){return Uu(this,Symbol.iterator,n=>es(this,n))},concat(...n){return uo(this).concat(...n.map(e=>Je(e)?uo(e):e))},entries(){return Uu(this,"entries",n=>(n[1]=es(this,n[1]),n))},every(n,e){return mr(this,"every",n,e,void 0,arguments)},filter(n,e){return mr(this,"filter",n,e,t=>t.map(i=>es(this,i)),arguments)},find(n,e){return mr(this,"find",n,e,t=>es(this,t),arguments)},findIndex(n,e){return mr(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return mr(this,"findLast",n,e,t=>es(this,t),arguments)},findLastIndex(n,e){return mr(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return mr(this,"forEach",n,e,void 0,arguments)},includes(...n){return Fu(this,"includes",n)},indexOf(...n){return Fu(this,"indexOf",n)},join(n){return uo(this).join(n)},lastIndexOf(...n){return Fu(this,"lastIndexOf",n)},map(n,e){return mr(this,"map",n,e,void 0,arguments)},pop(){return ma(this,"pop")},push(...n){return ma(this,"push",n)},reduce(n,...e){return Rp(this,"reduce",n,e)},reduceRight(n,...e){return Rp(this,"reduceRight",n,e)},shift(){return ma(this,"shift")},some(n,e){return mr(this,"some",n,e,void 0,arguments)},splice(...n){return ma(this,"splice",n)},toReversed(){return uo(this).toReversed()},toSorted(n){return uo(this).toSorted(n)},toSpliced(...n){return uo(this).toSpliced(...n)},unshift(...n){return ma(this,"unshift",n)},values(){return Uu(this,"values",n=>es(this,n))}};function Uu(n,e,t){const i=Pd(n),r=i[e]();return i!==n&&!Gi(n)&&(r._next=r.next,r.next=()=>{const s=r._next();return s.done||(s.value=t(s.value)),s}),r}const qv=Array.prototype;function mr(n,e,t,i,r,s){const o=Pd(n),a=o!==n&&!Gi(n),l=o[e];if(l!==qv[e]){const f=l.apply(n,s);return a?Br(f):f}let c=t;o!==n&&(a?c=function(f,h){return t.call(this,es(n,f),h,n)}:t.length>2&&(c=function(f,h){return t.call(this,f,h,n)}));const u=l.call(o,c,i);return a&&r?r(u):u}function Rp(n,e,t,i){const r=Pd(n);let s=t;return r!==n&&(Gi(n)?t.length>3&&(s=function(o,a,l){return t.call(this,o,a,l,n)}):s=function(o,a,l){return t.call(this,o,es(n,a),l,n)}),r[e](s,...i)}function Fu(n,e,t){const i=xt(n);bn(i,"iterate",al);const r=i[e](...t);return(r===-1||r===!1)&&Ld(t[0])?(t[0]=xt(t[0]),i[e](...t)):r}function ma(n,e,t=[]){Fr(),Ad();const i=xt(n)[e].apply(n,t);return wd(),Or(),i}const Yv=Sd("__proto__,__v_isRef,__isVue"),gg=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Es));function $v(n){Es(n)||(n=String(n));const e=xt(this);return bn(e,"has",n),e.hasOwnProperty(n)}class xg{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){if(t==="__v_skip")return e.__v_skip;const r=this._isReadonly,s=this._isShallow;if(t==="__v_isReactive")return!r;if(t==="__v_isReadonly")return r;if(t==="__v_isShallow")return s;if(t==="__v_raw")return i===(r?s?rS:yg:s?Mg:Sg).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=Je(e);if(!r){let l;if(o&&(l=Xv[t]))return l;if(t==="hasOwnProperty")return $v}const a=Reflect.get(e,t,Rn(e)?e:i);if((Es(t)?gg.has(t):Yv(t))||(r||bn(e,"get",t),s))return a;if(Rn(a)){const l=o&&Ed(t)?a:a.value;return r&&Ot(l)?Gf(l):l}return Ot(a)?r?Gf(a):hu(a):a}}class vg extends xg{constructor(e=!1){super(!1,e)}set(e,t,i,r){let s=e[t];const o=Je(e)&&Ed(t);if(!this._isShallow){const c=gs(s);if(!Gi(i)&&!gs(i)&&(s=xt(s),i=xt(i)),!o&&Rn(s)&&!Rn(i))return c||(s.value=i),!0}const a=o?Number(t)<e.length:vt(e,t),l=Reflect.set(e,t,i,Rn(e)?e:r);return e===xt(r)&&(a?hs(i,s)&&Tr(e,"set",t,i):Tr(e,"add",t,i)),l}deleteProperty(e,t){const i=vt(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&i&&Tr(e,"delete",t,void 0),r}has(e,t){const i=Reflect.has(e,t);return(!Es(t)||!gg.has(t))&&bn(e,"has",t),i}ownKeys(e){return bn(e,"iterate",Je(e)?"length":$s),Reflect.ownKeys(e)}}class Kv extends xg{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const jv=new vg,Zv=new Kv,Jv=new vg(!0);const Vf=n=>n,Fl=n=>Reflect.getPrototypeOf(n);function Qv(n,e,t){return function(...i){const r=this.__v_raw,s=xt(r),o=Oo(s),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=r[n](...i),u=t?Vf:e?ll:Br;return!e&&bn(s,"iterate",l?kf:$s),{next(){const{value:f,done:h}=c.next();return h?{value:f,done:h}:{value:a?[u(f[0]),u(f[1])]:u(f),done:h}},[Symbol.iterator](){return this}}}}function Ol(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function eS(n,e){const t={get(r){const s=this.__v_raw,o=xt(s),a=xt(r);n||(hs(r,a)&&bn(o,"get",r),bn(o,"get",a));const{has:l}=Fl(o),c=e?Vf:n?ll:Br;if(l.call(o,r))return c(s.get(r));if(l.call(o,a))return c(s.get(a));s!==o&&s.get(r)},get size(){const r=this.__v_raw;return!n&&bn(xt(r),"iterate",$s),r.size},has(r){const s=this.__v_raw,o=xt(s),a=xt(r);return n||(hs(r,a)&&bn(o,"has",r),bn(o,"has",a)),r===a?s.has(r):s.has(r)||s.has(a)},forEach(r,s){const o=this,a=o.__v_raw,l=xt(a),c=e?Vf:n?ll:Br;return!n&&bn(l,"iterate",$s),a.forEach((u,f)=>r.call(s,c(u),c(f),o))}};return Dn(t,n?{add:Ol("add"),set:Ol("set"),delete:Ol("delete"),clear:Ol("clear")}:{add(r){!e&&!Gi(r)&&!gs(r)&&(r=xt(r));const s=xt(this);return Fl(s).has.call(s,r)||(s.add(r),Tr(s,"add",r,r)),this},set(r,s){!e&&!Gi(s)&&!gs(s)&&(s=xt(s));const o=xt(this),{has:a,get:l}=Fl(o);let c=a.call(o,r);c||(r=xt(r),c=a.call(o,r));const u=l.call(o,r);return o.set(r,s),c?hs(s,u)&&Tr(o,"set",r,s):Tr(o,"add",r,s),this},delete(r){const s=xt(this),{has:o,get:a}=Fl(s);let l=o.call(s,r);l||(r=xt(r),l=o.call(s,r)),a&&a.call(s,r);const c=s.delete(r);return l&&Tr(s,"delete",r,void 0),c},clear(){const r=xt(this),s=r.size!==0,o=r.clear();return s&&Tr(r,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=Qv(r,n,e)}),t}function Dd(n,e){const t=eS(n,e);return(i,r,s)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?i:Reflect.get(vt(t,r)&&r in i?t:i,r,s)}const tS={get:Dd(!1,!1)},nS={get:Dd(!1,!0)},iS={get:Dd(!0,!1)};const Sg=new WeakMap,Mg=new WeakMap,yg=new WeakMap,rS=new WeakMap;function sS(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function oS(n){return n.__v_skip||!Object.isExtensible(n)?0:sS(Dv(n))}function hu(n){return gs(n)?n:Id(n,!1,jv,tS,Sg)}function Eg(n){return Id(n,!1,Jv,nS,Mg)}function Gf(n){return Id(n,!0,Zv,iS,yg)}function Id(n,e,t,i,r){if(!Ot(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const s=oS(n);if(s===0)return n;const o=r.get(n);if(o)return o;const a=new Proxy(n,s===2?i:t);return r.set(n,a),a}function Bo(n){return gs(n)?Bo(n.__v_raw):!!(n&&n.__v_isReactive)}function gs(n){return!!(n&&n.__v_isReadonly)}function Gi(n){return!!(n&&n.__v_isShallow)}function Ld(n){return n?!!n.__v_raw:!1}function xt(n){const e=n&&n.__v_raw;return e?xt(e):n}function bg(n){return!vt(n,"__v_skip")&&Object.isExtensible(n)&&ig(n,"__v_skip",!0),n}const Br=n=>Ot(n)?hu(n):n,ll=n=>Ot(n)?Gf(n):n;function Rn(n){return n?n.__v_isRef===!0:!1}function du(n){return Tg(n,!1)}function aS(n){return Tg(n,!0)}function Tg(n,e){return Rn(n)?n:new lS(n,e)}class lS{constructor(e,t){this.dep=new Cd,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:xt(e),this._value=t?e:Br(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,i=this.__v_isShallow||Gi(e)||gs(e);e=i?e:xt(e),hs(e,t)&&(this._rawValue=e,this._value=i?e:Br(e),this.dep.trigger())}}function zo(n){return Rn(n)?n.value:n}const cS={get:(n,e,t)=>e==="__v_raw"?n:zo(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const r=n[e];return Rn(r)&&!Rn(t)?(r.value=t,!0):Reflect.set(n,e,t,i)}};function Ag(n){return Bo(n)?n:new Proxy(n,cS)}class uS{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new Cd(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=ol-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&Lt!==this)return fg(this,!0),!0}get value(){const e=this.dep.track();return pg(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function fS(n,e,t=!1){let i,r;return tt(n)?i=n:(i=n.get,r=n.set),new uS(i,r,t)}const Bl={},kc=new WeakMap;let Fs;function hS(n,e=!1,t=Fs){if(t){let i=kc.get(t);i||kc.set(t,i=[]),i.push(n)}}function dS(n,e,t=Nt){const{immediate:i,deep:r,once:s,scheduler:o,augmentJob:a,call:l}=t,c=S=>r?S:Gi(S)||r===!1||r===0?rs(S,1):rs(S);let u,f,h,d,g=!1,_=!1;if(Rn(n)?(f=()=>n.value,g=Gi(n)):Bo(n)?(f=()=>c(n),g=!0):Je(n)?(_=!0,g=n.some(S=>Bo(S)||Gi(S)),f=()=>n.map(S=>{if(Rn(S))return S.value;if(Bo(S))return c(S);if(tt(S))return l?l(S,2):S()})):tt(n)?e?f=l?()=>l(n,2):n:f=()=>{if(h){Fr();try{h()}finally{Or()}}const S=Fs;Fs=u;try{return l?l(n,3,[d]):n(d)}finally{Fs=S}}:f=or,e&&r){const S=f,b=r===!0?1/0:r;f=()=>rs(S(),b)}const m=Gv(),p=()=>{u.stop(),m&&m.active&&yd(m.effects,u)};if(s&&e){const S=e;e=(...b)=>{S(...b),p()}}let M=_?new Array(n.length).fill(Bl):Bl;const y=S=>{if(!(!(u.flags&1)||!u.dirty&&!S))if(e){const b=u.run();if(r||g||(_?b.some((R,w)=>hs(R,M[w])):hs(b,M))){h&&h();const R=Fs;Fs=u;try{const w=[b,M===Bl?void 0:_&&M[0]===Bl?[]:M,d];M=b,l?l(e,3,w):e(...w)}finally{Fs=R}}}else u.run()};return a&&a(y),u=new cg(f),u.scheduler=o?()=>o(y,!1):y,d=S=>hS(S,!1,u),h=u.onStop=()=>{const S=kc.get(u);if(S){if(l)l(S,4);else for(const b of S)b();kc.delete(u)}},e?i?y(!0):M=u.run():o?o(y.bind(null,!0),!0):u.run(),p.pause=u.pause.bind(u),p.resume=u.resume.bind(u),p.stop=p,p}function rs(n,e=1/0,t){if(e<=0||!Ot(n)||n.__v_skip||(t=t||new Map,(t.get(n)||0)>=e))return n;if(t.set(n,e),e--,Rn(n))rs(n.value,e,t);else if(Je(n))for(let i=0;i<n.length;i++)rs(n[i],e,t);else if(J_(n)||Oo(n))n.forEach(i=>{rs(i,e,t)});else if(tg(n)){for(const i in n)rs(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&rs(n[i],e,t)}return n}function Al(n,e,t,i){try{return i?n(...i):n()}catch(r){pu(r,e,t)}}function ur(n,e,t,i){if(tt(n)){const r=Al(n,e,t,i);return r&&Q_(r)&&r.catch(s=>{pu(s,e,t)}),r}if(Je(n)){const r=[];for(let s=0;s<n.length;s++)r.push(ur(n[s],e,t,i));return r}}function pu(n,e,t,i=!0){const r=e?e.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Nt;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${t}`;for(;a;){const u=a.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](n,l,c)===!1)return}a=a.parent}if(s){Fr(),Al(s,null,10,[n,l,c]),Or();return}}pS(n,t,r,i,o)}function pS(n,e,t,i=!0,r=!1){if(r)throw n;console.error(n)}const Vn=[];let $i=-1;const ko=[];let ts=null,Co=0;const wg=Promise.resolve();let Vc=null;function Rg(n){const e=Vc||wg;return n?e.then(this?n.bind(this):n):e}function mS(n){let e=$i+1,t=Vn.length;for(;e<t;){const i=e+t>>>1,r=Vn[i],s=cl(r);s<n||s===n&&r.flags&2?e=i+1:t=i}return e}function Nd(n){if(!(n.flags&1)){const e=cl(n),t=Vn[Vn.length-1];!t||!(n.flags&2)&&e>=cl(t)?Vn.push(n):Vn.splice(mS(e),0,n),n.flags|=1,Cg()}}function Cg(){Vc||(Vc=wg.then(Dg))}function _S(n){Je(n)?ko.push(...n):ts&&n.id===-1?ts.splice(Co+1,0,n):n.flags&1||(ko.push(n),n.flags|=1),Cg()}function Cp(n,e,t=$i+1){for(;t<Vn.length;t++){const i=Vn[t];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;Vn.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function Pg(n){if(ko.length){const e=[...new Set(ko)].sort((t,i)=>cl(t)-cl(i));if(ko.length=0,ts){ts.push(...e);return}for(ts=e,Co=0;Co<ts.length;Co++){const t=ts[Co];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}ts=null,Co=0}}const cl=n=>n.id==null?n.flags&2?-1:1/0:n.id;function Dg(n){try{for($i=0;$i<Vn.length;$i++){const e=Vn[$i];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Al(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;$i<Vn.length;$i++){const e=Vn[$i];e&&(e.flags&=-2)}$i=-1,Vn.length=0,Pg(),Vc=null,(Vn.length||ko.length)&&Dg()}}let tr=null,Ig=null;function Gc(n){const e=tr;return tr=n,Ig=n&&n.type.__scopeId||null,e}function gS(n,e=tr,t){if(!e||n._n)return n;const i=(...r)=>{i._d&&Xc(-1);const s=Gc(e);let o;try{o=n(...r)}finally{Gc(s),i._d&&Xc(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function As(n,e,t,i){const r=n.dirs,s=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[i];l&&(Fr(),ur(l,t,8,[n.el,a,n,e]),Or())}}function Mc(n,e){if(Gn){let t=Gn.provides;const i=Gn.parent&&Gn.parent.provides;i===t&&(t=Gn.provides=Object.create(i)),t[n]=e}}function Dr(n,e,t=!1){const i=mM();if(i||Vo){let r=Vo?Vo._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(r&&n in r)return r[n];if(arguments.length>1)return t&&tt(e)?e.call(i&&i.proxy):e}}const xS=Symbol.for("v-scx"),vS=()=>Dr(xS);function Va(n,e,t){return Lg(n,e,t)}function Lg(n,e,t=Nt){const{immediate:i,deep:r,flush:s,once:o}=t,a=Dn({},t),l=e&&i||!e&&s!=="post";let c;if(fl){if(s==="sync"){const d=vS();c=d.__watcherHandles||(d.__watcherHandles=[])}else if(!l){const d=()=>{};return d.stop=or,d.resume=or,d.pause=or,d}}const u=Gn;a.call=(d,g,_)=>ur(d,u,g,_);let f=!1;s==="post"?a.scheduler=d=>{ci(d,u&&u.suspense)}:s!=="sync"&&(f=!0,a.scheduler=(d,g)=>{g?d():Nd(d)}),a.augmentJob=d=>{e&&(d.flags|=4),f&&(d.flags|=2,u&&(d.id=u.uid,d.i=u))};const h=dS(n,e,a);return fl&&(c?c.push(h):l&&h()),h}function SS(n,e,t){const i=this.proxy,r=on(n)?n.includes(".")?Ng(i,n):()=>i[n]:n.bind(i,i);let s;tt(e)?s=e:(s=e.handler,t=e);const o=Cl(this),a=Lg(r,s.bind(i),t);return o(),a}function Ng(n,e){const t=e.split(".");return()=>{let i=n;for(let r=0;r<t.length&&i;r++)i=i[t[r]];return i}}const MS=Symbol("_vte"),yS=n=>n.__isTeleport,ES=Symbol("_leaveCb");function Ud(n,e){n.shapeFlag&6&&n.component?(n.transition=e,Ud(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function Ug(n,e){return tt(n)?Dn({name:n.name},e,{setup:n}):n}function Fg(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}const Hc=new WeakMap;function Ga(n,e,t,i,r=!1){if(Je(n)){n.forEach((g,_)=>Ga(g,e&&(Je(e)?e[_]:e),t,i,r));return}if(Ha(i)&&!r){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&Ga(n,e,t,i.component.subTree);return}const s=i.shapeFlag&4?zd(i.component):i.el,o=r?null:s,{i:a,r:l}=n,c=e&&e.r,u=a.refs===Nt?a.refs={}:a.refs,f=a.setupState,h=xt(f),d=f===Nt?Z_:g=>vt(h,g);if(c!=null&&c!==l){if(Pp(e),on(c))u[c]=null,d(c)&&(f[c]=null);else if(Rn(c)){c.value=null;const g=e;g.k&&(u[g.k]=null)}}if(tt(l))Al(l,a,12,[o,u]);else{const g=on(l),_=Rn(l);if(g||_){const m=()=>{if(n.f){const p=g?d(l)?f[l]:u[l]:l.value;if(r)Je(p)&&yd(p,s);else if(Je(p))p.includes(s)||p.push(s);else if(g)u[l]=[s],d(l)&&(f[l]=u[l]);else{const M=[s];l.value=M,n.k&&(u[n.k]=M)}}else g?(u[l]=o,d(l)&&(f[l]=o)):_&&(l.value=o,n.k&&(u[n.k]=o))};if(o){const p=()=>{m(),Hc.delete(n)};p.id=-1,Hc.set(n,p),ci(p,t)}else Pp(n),m()}}}function Pp(n){const e=Hc.get(n);e&&(e.flags|=8,Hc.delete(n))}fu().requestIdleCallback;fu().cancelIdleCallback;const Ha=n=>!!n.type.__asyncLoader,Og=n=>n.type.__isKeepAlive;function bS(n,e){Bg(n,"a",e)}function TS(n,e){Bg(n,"da",e)}function Bg(n,e,t=Gn){const i=n.__wdc||(n.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(mu(e,i,t),t){let r=t.parent;for(;r&&r.parent;)Og(r.parent.vnode)&&AS(i,e,t,r),r=r.parent}}function AS(n,e,t,i){const r=mu(e,n,i,!0);kg(()=>{yd(i[e],r)},t)}function mu(n,e,t=Gn,i=!1){if(t){const r=t[n]||(t[n]=[]),s=e.__weh||(e.__weh=(...o)=>{Fr();const a=Cl(t),l=ur(e,t,n,o);return a(),Or(),l});return i?r.unshift(s):r.push(s),s}}const Xr=n=>(e,t=Gn)=>{(!fl||n==="sp")&&mu(n,(...i)=>e(...i),t)},wS=Xr("bm"),wl=Xr("m"),RS=Xr("bu"),CS=Xr("u"),zg=Xr("bum"),kg=Xr("um"),PS=Xr("sp"),DS=Xr("rtg"),IS=Xr("rtc");function LS(n,e=Gn){mu("ec",n,e)}const NS=Symbol.for("v-ndc"),Hf=n=>n?o0(n)?zd(n):Hf(n.parent):null,Wa=Dn(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Hf(n.parent),$root:n=>Hf(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>Gg(n),$forceUpdate:n=>n.f||(n.f=()=>{Nd(n.update)}),$nextTick:n=>n.n||(n.n=Rg.bind(n.proxy)),$watch:n=>SS.bind(n)}),Ou=(n,e)=>n!==Nt&&!n.__isScriptSetup&&vt(n,e),US={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:r,props:s,accessCache:o,type:a,appContext:l}=n;if(e[0]!=="$"){const h=o[e];if(h!==void 0)switch(h){case 1:return i[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(Ou(i,e))return o[e]=1,i[e];if(r!==Nt&&vt(r,e))return o[e]=2,r[e];if(vt(s,e))return o[e]=3,s[e];if(t!==Nt&&vt(t,e))return o[e]=4,t[e];Wf&&(o[e]=0)}}const c=Wa[e];let u,f;if(c)return e==="$attrs"&&bn(n.attrs,"get",""),c(n);if((u=a.__cssModules)&&(u=u[e]))return u;if(t!==Nt&&vt(t,e))return o[e]=4,t[e];if(f=l.config.globalProperties,vt(f,e))return f[e]},set({_:n},e,t){const{data:i,setupState:r,ctx:s}=n;return Ou(r,e)?(r[e]=t,!0):i!==Nt&&vt(i,e)?(i[e]=t,!0):vt(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(s[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:r,props:s,type:o}},a){let l;return!!(t[a]||n!==Nt&&a[0]!=="$"&&vt(n,a)||Ou(e,a)||vt(s,a)||vt(i,a)||vt(Wa,a)||vt(r.config.globalProperties,a)||(l=o.__cssModules)&&l[a])},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:vt(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function Dp(n){return Je(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let Wf=!0;function FS(n){const e=Gg(n),t=n.proxy,i=n.ctx;Wf=!1,e.beforeCreate&&Ip(e.beforeCreate,n,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:h,beforeUpdate:d,updated:g,activated:_,deactivated:m,beforeDestroy:p,beforeUnmount:M,destroyed:y,unmounted:S,render:b,renderTracked:R,renderTriggered:w,errorCaptured:U,serverPrefetch:v,expose:E,inheritAttrs:F,components:k,directives:H,filters:$}=e;if(c&&OS(c,i,null),o)for(const V in o){const Y=o[V];tt(Y)&&(i[V]=Y.bind(t))}if(r){const V=r.call(t,t);Ot(V)&&(n.data=hu(V))}if(Wf=!0,s)for(const V in s){const Y=s[V],he=tt(Y)?Y.bind(t,t):tt(Y.get)?Y.get.bind(t,t):or,L=!tt(Y)&&tt(Y.set)?Y.set.bind(t):or,de=Bi({get:he,set:L});Object.defineProperty(i,V,{enumerable:!0,configurable:!0,get:()=>de.value,set:Fe=>de.value=Fe})}if(a)for(const V in a)Vg(a[V],i,t,V);if(l){const V=tt(l)?l.call(t):l;Reflect.ownKeys(V).forEach(Y=>{Mc(Y,V[Y])})}u&&Ip(u,n,"c");function W(V,Y){Je(Y)?Y.forEach(he=>V(he.bind(t))):Y&&V(Y.bind(t))}if(W(wS,f),W(wl,h),W(RS,d),W(CS,g),W(bS,_),W(TS,m),W(LS,U),W(IS,R),W(DS,w),W(zg,M),W(kg,S),W(PS,v),Je(E))if(E.length){const V=n.exposed||(n.exposed={});E.forEach(Y=>{Object.defineProperty(V,Y,{get:()=>t[Y],set:he=>t[Y]=he,enumerable:!0})})}else n.exposed||(n.exposed={});b&&n.render===or&&(n.render=b),F!=null&&(n.inheritAttrs=F),k&&(n.components=k),H&&(n.directives=H),v&&Fg(n)}function OS(n,e,t=or){Je(n)&&(n=Xf(n));for(const i in n){const r=n[i];let s;Ot(r)?"default"in r?s=Dr(r.from||i,r.default,!0):s=Dr(r.from||i):s=Dr(r),Rn(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[i]=s}}function Ip(n,e,t){ur(Je(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function Vg(n,e,t,i){let r=i.includes(".")?Ng(t,i):()=>t[i];if(on(n)){const s=e[n];tt(s)&&Va(r,s)}else if(tt(n))Va(r,n.bind(t));else if(Ot(n))if(Je(n))n.forEach(s=>Vg(s,e,t,i));else{const s=tt(n.handler)?n.handler.bind(t):e[n.handler];tt(s)&&Va(r,s,n)}}function Gg(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=n.appContext,a=s.get(e);let l;return a?l=a:!r.length&&!t&&!i?l=e:(l={},r.length&&r.forEach(c=>Wc(l,c,o,!0)),Wc(l,e,o)),Ot(e)&&s.set(e,l),l}function Wc(n,e,t,i=!1){const{mixins:r,extends:s}=e;s&&Wc(n,s,t,!0),r&&r.forEach(o=>Wc(n,o,t,!0));for(const o in e)if(!(i&&o==="expose")){const a=BS[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const BS={data:Lp,props:Np,emits:Np,methods:Ra,computed:Ra,beforeCreate:Nn,created:Nn,beforeMount:Nn,mounted:Nn,beforeUpdate:Nn,updated:Nn,beforeDestroy:Nn,beforeUnmount:Nn,destroyed:Nn,unmounted:Nn,activated:Nn,deactivated:Nn,errorCaptured:Nn,serverPrefetch:Nn,components:Ra,directives:Ra,watch:kS,provide:Lp,inject:zS};function Lp(n,e){return e?n?function(){return Dn(tt(n)?n.call(this,this):n,tt(e)?e.call(this,this):e)}:e:n}function zS(n,e){return Ra(Xf(n),Xf(e))}function Xf(n){if(Je(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function Nn(n,e){return n?[...new Set([].concat(n,e))]:e}function Ra(n,e){return n?Dn(Object.create(null),n,e):e}function Np(n,e){return n?Je(n)&&Je(e)?[...new Set([...n,...e])]:Dn(Object.create(null),Dp(n),Dp(e??{})):e}function kS(n,e){if(!n)return e;if(!e)return n;const t=Dn(Object.create(null),n);for(const i in e)t[i]=Nn(n[i],e[i]);return t}function Hg(){return{app:null,config:{isNativeTag:Z_,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let VS=0;function GS(n,e){return function(i,r=null){tt(i)||(i=Dn({},i)),r!=null&&!Ot(r)&&(r=null);const s=Hg(),o=new WeakSet,a=[];let l=!1;const c=s.app={_uid:VS++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:MM,get config(){return s.config},set config(u){},use(u,...f){return o.has(u)||(u&&tt(u.install)?(o.add(u),u.install(c,...f)):tt(u)&&(o.add(u),u(c,...f))),c},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),c},component(u,f){return f?(s.components[u]=f,c):s.components[u]},directive(u,f){return f?(s.directives[u]=f,c):s.directives[u]},mount(u,f,h){if(!l){const d=c._ceVNode||mn(i,r);return d.appContext=s,h===!0?h="svg":h===!1&&(h=void 0),n(d,u,h),l=!0,c._container=u,u.__vue_app__=c,zd(d.component)}},onUnmount(u){a.push(u)},unmount(){l&&(ur(a,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,f){return s.provides[u]=f,c},runWithContext(u){const f=Vo;Vo=c;try{return u()}finally{Vo=f}}};return c}}let Vo=null;const HS=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${_s(e)}Modifiers`]||n[`${oo(e)}Modifiers`];function WS(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||Nt;let r=t;const s=e.startsWith("update:"),o=s&&HS(i,e.slice(7));o&&(o.trim&&(r=t.map(u=>on(u)?u.trim():u)),o.number&&(r=t.map(Nv)));let a,l=i[a=Du(e)]||i[a=Du(_s(e))];!l&&s&&(l=i[a=Du(oo(e))]),l&&ur(l,n,6,r);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,ur(c,n,6,r)}}const XS=new WeakMap;function Wg(n,e,t=!1){const i=t?XS:e.emitsCache,r=i.get(n);if(r!==void 0)return r;const s=n.emits;let o={},a=!1;if(!tt(n)){const l=c=>{const u=Wg(c,e,!0);u&&(a=!0,Dn(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!s&&!a?(Ot(n)&&i.set(n,null),null):(Je(s)?s.forEach(l=>o[l]=null):Dn(o,s),Ot(n)&&i.set(n,o),o)}function _u(n,e){return!n||!lu(e)?!1:(e=e.slice(2).replace(/Once$/,""),vt(n,e[0].toLowerCase()+e.slice(1))||vt(n,oo(e))||vt(n,e))}function Up(n){const{type:e,vnode:t,proxy:i,withProxy:r,propsOptions:[s],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:f,data:h,setupState:d,ctx:g,inheritAttrs:_}=n,m=Gc(n);let p,M;try{if(t.shapeFlag&4){const S=r||i,b=S;p=Ji(c.call(b,S,u,f,d,h,g)),M=a}else{const S=e;p=Ji(S.length>1?S(f,{attrs:a,slots:o,emit:l}):S(f,null)),M=e.props?a:qS(a)}}catch(S){Xa.length=0,pu(S,n,1),p=mn(jo)}let y=p;if(M&&_!==!1){const S=Object.keys(M),{shapeFlag:b}=y;S.length&&b&7&&(s&&S.some(Md)&&(M=YS(M,s)),y=Zo(y,M,!1,!0))}return t.dirs&&(y=Zo(y,null,!1,!0),y.dirs=y.dirs?y.dirs.concat(t.dirs):t.dirs),t.transition&&Ud(y,t.transition),p=y,Gc(m),p}const qS=n=>{let e;for(const t in n)(t==="class"||t==="style"||lu(t))&&((e||(e={}))[t]=n[t]);return e},YS=(n,e)=>{const t={};for(const i in n)(!Md(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function $S(n,e,t){const{props:i,children:r,component:s}=n,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?Fp(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(o[h]!==i[h]&&!_u(c,h))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?Fp(i,o,c):!0:!!o;return!1}function Fp(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(e[s]!==n[s]&&!_u(t,s))return!0}return!1}function KS({vnode:n,parent:e},t){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===n&&(i.el=n.el),i===n)(n=e.vnode).el=t,e=e.parent;else break}}const Xg={},qg=()=>Object.create(Xg),Yg=n=>Object.getPrototypeOf(n)===Xg;function jS(n,e,t,i=!1){const r={},s=qg();n.propsDefaults=Object.create(null),$g(n,e,r,s);for(const o in n.propsOptions[0])o in r||(r[o]=void 0);t?n.props=i?r:Eg(r):n.type.props?n.props=r:n.props=s,n.attrs=s}function ZS(n,e,t,i){const{props:r,attrs:s,vnode:{patchFlag:o}}=n,a=xt(r),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if(_u(n.emitsOptions,h))continue;const d=e[h];if(l)if(vt(s,h))d!==s[h]&&(s[h]=d,c=!0);else{const g=_s(h);r[g]=qf(l,a,g,d,n,!1)}else d!==s[h]&&(s[h]=d,c=!0)}}}else{$g(n,e,r,s)&&(c=!0);let u;for(const f in a)(!e||!vt(e,f)&&((u=oo(f))===f||!vt(e,u)))&&(l?t&&(t[f]!==void 0||t[u]!==void 0)&&(r[f]=qf(l,a,f,void 0,n,!0)):delete r[f]);if(s!==a)for(const f in s)(!e||!vt(e,f))&&(delete s[f],c=!0)}c&&Tr(n.attrs,"set","")}function $g(n,e,t,i){const[r,s]=n.propsOptions;let o=!1,a;if(e)for(let l in e){if(Ba(l))continue;const c=e[l];let u;r&&vt(r,u=_s(l))?!s||!s.includes(u)?t[u]=c:(a||(a={}))[u]=c:_u(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(s){const l=xt(t),c=a||Nt;for(let u=0;u<s.length;u++){const f=s[u];t[f]=qf(r,l,f,c[f],n,!vt(c,f))}}return o}function qf(n,e,t,i,r,s){const o=n[t];if(o!=null){const a=vt(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&tt(l)){const{propsDefaults:c}=r;if(t in c)i=c[t];else{const u=Cl(r);i=c[t]=l.call(null,e),u()}}else i=l;r.ce&&r.ce._setProp(t,i)}o[0]&&(s&&!a?i=!1:o[1]&&(i===""||i===oo(t))&&(i=!0))}return i}const JS=new WeakMap;function Kg(n,e,t=!1){const i=t?JS:e.propsCache,r=i.get(n);if(r)return r;const s=n.props,o={},a=[];let l=!1;if(!tt(n)){const u=f=>{l=!0;const[h,d]=Kg(f,e,!0);Dn(o,h),d&&a.push(...d)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!s&&!l)return Ot(n)&&i.set(n,Fo),Fo;if(Je(s))for(let u=0;u<s.length;u++){const f=_s(s[u]);Op(f)&&(o[f]=Nt)}else if(s)for(const u in s){const f=_s(u);if(Op(f)){const h=s[u],d=o[f]=Je(h)||tt(h)?{type:h}:Dn({},h),g=d.type;let _=!1,m=!0;if(Je(g))for(let p=0;p<g.length;++p){const M=g[p],y=tt(M)&&M.name;if(y==="Boolean"){_=!0;break}else y==="String"&&(m=!1)}else _=tt(g)&&g.name==="Boolean";d[0]=_,d[1]=m,(_||vt(d,"default"))&&a.push(f)}}const c=[o,a];return Ot(n)&&i.set(n,c),c}function Op(n){return n[0]!=="$"&&!Ba(n)}const Fd=n=>n==="_"||n==="_ctx"||n==="$stable",Od=n=>Je(n)?n.map(Ji):[Ji(n)],QS=(n,e,t)=>{if(e._n)return e;const i=gS((...r)=>Od(e(...r)),t);return i._c=!1,i},jg=(n,e,t)=>{const i=n._ctx;for(const r in n){if(Fd(r))continue;const s=n[r];if(tt(s))e[r]=QS(r,s,i);else if(s!=null){const o=Od(s);e[r]=()=>o}}},Zg=(n,e)=>{const t=Od(e);n.slots.default=()=>t},Jg=(n,e,t)=>{for(const i in e)(t||!Fd(i))&&(n[i]=e[i])},eM=(n,e,t)=>{const i=n.slots=qg();if(n.vnode.shapeFlag&32){const r=e._;r?(Jg(i,e,t),t&&ig(i,"_",r,!0)):jg(e,i)}else e&&Zg(n,e)},tM=(n,e,t)=>{const{vnode:i,slots:r}=n;let s=!0,o=Nt;if(i.shapeFlag&32){const a=e._;a?t&&a===1?s=!1:Jg(r,e,t):(s=!e.$stable,jg(e,r)),o=e}else e&&(Zg(n,e),o={default:1});if(s)for(const a in r)!Fd(a)&&o[a]==null&&delete r[a]},ci=oM;function nM(n){return iM(n)}function iM(n,e){const t=fu();t.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:h,setScopeId:d=or,insertStaticContent:g}=n,_=(D,P,z,Z=null,j=null,I=null,C=void 0,fe=null,le=!!P.dynamicChildren)=>{if(D===P)return;D&&!_a(D,P)&&(Z=O(D),Fe(D,j,I,!0),D=null),P.patchFlag===-2&&(le=!1,P.dynamicChildren=null);const{type:ee,ref:ce,shapeFlag:A}=P;switch(ee){case gu:m(D,P,z,Z);break;case jo:p(D,P,z,Z);break;case yc:D==null&&M(P,z,Z,C);break;case Zi:k(D,P,z,Z,j,I,C,fe,le);break;default:A&1?b(D,P,z,Z,j,I,C,fe,le):A&6?H(D,P,z,Z,j,I,C,fe,le):(A&64||A&128)&&ee.process(D,P,z,Z,j,I,C,fe,le,ae)}ce!=null&&j?Ga(ce,D&&D.ref,I,P||D,!P):ce==null&&D&&D.ref!=null&&Ga(D.ref,null,I,D,!0)},m=(D,P,z,Z)=>{if(D==null)i(P.el=a(P.children),z,Z);else{const j=P.el=D.el;P.children!==D.children&&c(j,P.children)}},p=(D,P,z,Z)=>{D==null?i(P.el=l(P.children||""),z,Z):P.el=D.el},M=(D,P,z,Z)=>{[D.el,D.anchor]=g(D.children,P,z,Z,D.el,D.anchor)},y=({el:D,anchor:P},z,Z)=>{let j;for(;D&&D!==P;)j=h(D),i(D,z,Z),D=j;i(P,z,Z)},S=({el:D,anchor:P})=>{let z;for(;D&&D!==P;)z=h(D),r(D),D=z;r(P)},b=(D,P,z,Z,j,I,C,fe,le)=>{if(P.type==="svg"?C="svg":P.type==="math"&&(C="mathml"),D==null)R(P,z,Z,j,I,C,fe,le);else{const ee=D.el&&D.el._isVueCE?D.el:null;try{ee&&ee._beginPatch(),v(D,P,j,I,C,fe,le)}finally{ee&&ee._endPatch()}}},R=(D,P,z,Z,j,I,C,fe)=>{let le,ee;const{props:ce,shapeFlag:A,transition:x,dirs:N}=D;if(le=D.el=o(D.type,I,ce&&ce.is,ce),A&8?u(le,D.children):A&16&&U(D.children,le,null,Z,j,Bu(D,I),C,fe),N&&As(D,null,Z,"created"),w(le,D,D.scopeId,C,Z),ce){for(const J in ce)J!=="value"&&!Ba(J)&&s(le,J,null,ce[J],I,Z);"value"in ce&&s(le,"value",null,ce.value,I),(ee=ce.onVnodeBeforeMount)&&qi(ee,Z,D)}N&&As(D,null,Z,"beforeMount");const K=rM(j,x);K&&x.beforeEnter(le),i(le,P,z),((ee=ce&&ce.onVnodeMounted)||K||N)&&ci(()=>{ee&&qi(ee,Z,D),K&&x.enter(le),N&&As(D,null,Z,"mounted")},j)},w=(D,P,z,Z,j)=>{if(z&&d(D,z),Z)for(let I=0;I<Z.length;I++)d(D,Z[I]);if(j){let I=j.subTree;if(P===I||n0(I.type)&&(I.ssContent===P||I.ssFallback===P)){const C=j.vnode;w(D,C,C.scopeId,C.slotScopeIds,j.parent)}}},U=(D,P,z,Z,j,I,C,fe,le=0)=>{for(let ee=le;ee<D.length;ee++){const ce=D[ee]=fe?ns(D[ee]):Ji(D[ee]);_(null,ce,P,z,Z,j,I,C,fe)}},v=(D,P,z,Z,j,I,C)=>{const fe=P.el=D.el;let{patchFlag:le,dynamicChildren:ee,dirs:ce}=P;le|=D.patchFlag&16;const A=D.props||Nt,x=P.props||Nt;let N;if(z&&ws(z,!1),(N=x.onVnodeBeforeUpdate)&&qi(N,z,P,D),ce&&As(P,D,z,"beforeUpdate"),z&&ws(z,!0),(A.innerHTML&&x.innerHTML==null||A.textContent&&x.textContent==null)&&u(fe,""),ee?E(D.dynamicChildren,ee,fe,z,Z,Bu(P,j),I):C||Y(D,P,fe,null,z,Z,Bu(P,j),I,!1),le>0){if(le&16)F(fe,A,x,z,j);else if(le&2&&A.class!==x.class&&s(fe,"class",null,x.class,j),le&4&&s(fe,"style",A.style,x.style,j),le&8){const K=P.dynamicProps;for(let J=0;J<K.length;J++){const X=K[J],Me=A[X],me=x[X];(me!==Me||X==="value")&&s(fe,X,Me,me,j,z)}}le&1&&D.children!==P.children&&u(fe,P.children)}else!C&&ee==null&&F(fe,A,x,z,j);((N=x.onVnodeUpdated)||ce)&&ci(()=>{N&&qi(N,z,P,D),ce&&As(P,D,z,"updated")},Z)},E=(D,P,z,Z,j,I,C)=>{for(let fe=0;fe<P.length;fe++){const le=D[fe],ee=P[fe],ce=le.el&&(le.type===Zi||!_a(le,ee)||le.shapeFlag&198)?f(le.el):z;_(le,ee,ce,null,Z,j,I,C,!0)}},F=(D,P,z,Z,j)=>{if(P!==z){if(P!==Nt)for(const I in P)!Ba(I)&&!(I in z)&&s(D,I,P[I],null,j,Z);for(const I in z){if(Ba(I))continue;const C=z[I],fe=P[I];C!==fe&&I!=="value"&&s(D,I,fe,C,j,Z)}"value"in z&&s(D,"value",P.value,z.value,j)}},k=(D,P,z,Z,j,I,C,fe,le)=>{const ee=P.el=D?D.el:a(""),ce=P.anchor=D?D.anchor:a("");let{patchFlag:A,dynamicChildren:x,slotScopeIds:N}=P;N&&(fe=fe?fe.concat(N):N),D==null?(i(ee,z,Z),i(ce,z,Z),U(P.children||[],z,ce,j,I,C,fe,le)):A>0&&A&64&&x&&D.dynamicChildren&&D.dynamicChildren.length===x.length?(E(D.dynamicChildren,x,z,j,I,C,fe),(P.key!=null||j&&P===j.subTree)&&Qg(D,P,!0)):Y(D,P,z,ce,j,I,C,fe,le)},H=(D,P,z,Z,j,I,C,fe,le)=>{P.slotScopeIds=fe,D==null?P.shapeFlag&512?j.ctx.activate(P,z,Z,C,le):$(P,z,Z,j,I,C,le):Q(D,P,le)},$=(D,P,z,Z,j,I,C)=>{const fe=D.component=pM(D,Z,j);if(Og(D)&&(fe.ctx.renderer=ae),_M(fe,!1,C),fe.asyncDep){if(j&&j.registerDep(fe,W,C),!D.el){const le=fe.subTree=mn(jo);p(null,le,P,z),D.placeholder=le.el}}else W(fe,D,P,z,j,I,C)},Q=(D,P,z)=>{const Z=P.component=D.component;if($S(D,P,z))if(Z.asyncDep&&!Z.asyncResolved){V(Z,P,z);return}else Z.next=P,Z.update();else P.el=D.el,Z.vnode=P},W=(D,P,z,Z,j,I,C)=>{const fe=()=>{if(D.isMounted){let{next:A,bu:x,u:N,parent:K,vnode:J}=D;{const we=e0(D);if(we){A&&(A.el=J.el,V(D,A,C)),we.asyncDep.then(()=>{D.isUnmounted||fe()});return}}let X=A,Me;ws(D,!1),A?(A.el=J.el,V(D,A,C)):A=J,x&&Iu(x),(Me=A.props&&A.props.onVnodeBeforeUpdate)&&qi(Me,K,A,J),ws(D,!0);const me=Up(D),Ce=D.subTree;D.subTree=me,_(Ce,me,f(Ce.el),O(Ce),D,j,I),A.el=me.el,X===null&&KS(D,me.el),N&&ci(N,j),(Me=A.props&&A.props.onVnodeUpdated)&&ci(()=>qi(Me,K,A,J),j)}else{let A;const{el:x,props:N}=P,{bm:K,m:J,parent:X,root:Me,type:me}=D,Ce=Ha(P);ws(D,!1),K&&Iu(K),!Ce&&(A=N&&N.onVnodeBeforeMount)&&qi(A,X,P),ws(D,!0);{Me.ce&&Me.ce._def.shadowRoot!==!1&&Me.ce._injectChildStyle(me);const we=D.subTree=Up(D);_(null,we,z,Z,D,j,I),P.el=we.el}if(J&&ci(J,j),!Ce&&(A=N&&N.onVnodeMounted)){const we=P;ci(()=>qi(A,X,we),j)}(P.shapeFlag&256||X&&Ha(X.vnode)&&X.vnode.shapeFlag&256)&&D.a&&ci(D.a,j),D.isMounted=!0,P=z=Z=null}};D.scope.on();const le=D.effect=new cg(fe);D.scope.off();const ee=D.update=le.run.bind(le),ce=D.job=le.runIfDirty.bind(le);ce.i=D,ce.id=D.uid,le.scheduler=()=>Nd(ce),ws(D,!0),ee()},V=(D,P,z)=>{P.component=D;const Z=D.vnode.props;D.vnode=P,D.next=null,ZS(D,P.props,Z,z),tM(D,P.children,z),Fr(),Cp(D),Or()},Y=(D,P,z,Z,j,I,C,fe,le=!1)=>{const ee=D&&D.children,ce=D?D.shapeFlag:0,A=P.children,{patchFlag:x,shapeFlag:N}=P;if(x>0){if(x&128){L(ee,A,z,Z,j,I,C,fe,le);return}else if(x&256){he(ee,A,z,Z,j,I,C,fe,le);return}}N&8?(ce&16&&se(ee,j,I),A!==ee&&u(z,A)):ce&16?N&16?L(ee,A,z,Z,j,I,C,fe,le):se(ee,j,I,!0):(ce&8&&u(z,""),N&16&&U(A,z,Z,j,I,C,fe,le))},he=(D,P,z,Z,j,I,C,fe,le)=>{D=D||Fo,P=P||Fo;const ee=D.length,ce=P.length,A=Math.min(ee,ce);let x;for(x=0;x<A;x++){const N=P[x]=le?ns(P[x]):Ji(P[x]);_(D[x],N,z,null,j,I,C,fe,le)}ee>ce?se(D,j,I,!0,!1,A):U(P,z,Z,j,I,C,fe,le,A)},L=(D,P,z,Z,j,I,C,fe,le)=>{let ee=0;const ce=P.length;let A=D.length-1,x=ce-1;for(;ee<=A&&ee<=x;){const N=D[ee],K=P[ee]=le?ns(P[ee]):Ji(P[ee]);if(_a(N,K))_(N,K,z,null,j,I,C,fe,le);else break;ee++}for(;ee<=A&&ee<=x;){const N=D[A],K=P[x]=le?ns(P[x]):Ji(P[x]);if(_a(N,K))_(N,K,z,null,j,I,C,fe,le);else break;A--,x--}if(ee>A){if(ee<=x){const N=x+1,K=N<ce?P[N].el:Z;for(;ee<=x;)_(null,P[ee]=le?ns(P[ee]):Ji(P[ee]),z,K,j,I,C,fe,le),ee++}}else if(ee>x)for(;ee<=A;)Fe(D[ee],j,I,!0),ee++;else{const N=ee,K=ee,J=new Map;for(ee=K;ee<=x;ee++){const be=P[ee]=le?ns(P[ee]):Ji(P[ee]);be.key!=null&&J.set(be.key,ee)}let X,Me=0;const me=x-K+1;let Ce=!1,we=0;const _e=new Array(me);for(ee=0;ee<me;ee++)_e[ee]=0;for(ee=N;ee<=A;ee++){const be=D[ee];if(Me>=me){Fe(be,j,I,!0);continue}let Pe;if(be.key!=null)Pe=J.get(be.key);else for(X=K;X<=x;X++)if(_e[X-K]===0&&_a(be,P[X])){Pe=X;break}Pe===void 0?Fe(be,j,I,!0):(_e[Pe-K]=ee+1,Pe>=we?we=Pe:Ce=!0,_(be,P[Pe],z,null,j,I,C,fe,le),Me++)}const xe=Ce?sM(_e):Fo;for(X=xe.length-1,ee=me-1;ee>=0;ee--){const be=K+ee,Pe=P[be],ve=P[be+1],Ye=be+1<ce?ve.el||t0(ve):Z;_e[ee]===0?_(null,Pe,z,Ye,j,I,C,fe,le):Ce&&(X<0||ee!==xe[X]?de(Pe,z,Ye,2):X--)}}},de=(D,P,z,Z,j=null)=>{const{el:I,type:C,transition:fe,children:le,shapeFlag:ee}=D;if(ee&6){de(D.component.subTree,P,z,Z);return}if(ee&128){D.suspense.move(P,z,Z);return}if(ee&64){C.move(D,P,z,ae);return}if(C===Zi){i(I,P,z);for(let A=0;A<le.length;A++)de(le[A],P,z,Z);i(D.anchor,P,z);return}if(C===yc){y(D,P,z);return}if(Z!==2&&ee&1&&fe)if(Z===0)fe.beforeEnter(I),i(I,P,z),ci(()=>fe.enter(I),j);else{const{leave:A,delayLeave:x,afterLeave:N}=fe,K=()=>{D.ctx.isUnmounted?r(I):i(I,P,z)},J=()=>{I._isLeaving&&I[ES](!0),A(I,()=>{K(),N&&N()})};x?x(I,K,J):J()}else i(I,P,z)},Fe=(D,P,z,Z=!1,j=!1)=>{const{type:I,props:C,ref:fe,children:le,dynamicChildren:ee,shapeFlag:ce,patchFlag:A,dirs:x,cacheIndex:N}=D;if(A===-2&&(j=!1),fe!=null&&(Fr(),Ga(fe,null,z,D,!0),Or()),N!=null&&(P.renderCache[N]=void 0),ce&256){P.ctx.deactivate(D);return}const K=ce&1&&x,J=!Ha(D);let X;if(J&&(X=C&&C.onVnodeBeforeUnmount)&&qi(X,P,D),ce&6)qe(D.component,z,Z);else{if(ce&128){D.suspense.unmount(z,Z);return}K&&As(D,null,P,"beforeUnmount"),ce&64?D.type.remove(D,P,z,ae,Z):ee&&!ee.hasOnce&&(I!==Zi||A>0&&A&64)?se(ee,P,z,!1,!0):(I===Zi&&A&384||!j&&ce&16)&&se(le,P,z),Z&&ze(D)}(J&&(X=C&&C.onVnodeUnmounted)||K)&&ci(()=>{X&&qi(X,P,D),K&&As(D,null,P,"unmounted")},z)},ze=D=>{const{type:P,el:z,anchor:Z,transition:j}=D;if(P===Zi){He(z,Z);return}if(P===yc){S(D);return}const I=()=>{r(z),j&&!j.persisted&&j.afterLeave&&j.afterLeave()};if(D.shapeFlag&1&&j&&!j.persisted){const{leave:C,delayLeave:fe}=j,le=()=>C(z,I);fe?fe(D.el,I,le):le()}else I()},He=(D,P)=>{let z;for(;D!==P;)z=h(D),r(D),D=z;r(P)},qe=(D,P,z)=>{const{bum:Z,scope:j,job:I,subTree:C,um:fe,m:le,a:ee}=D;Bp(le),Bp(ee),Z&&Iu(Z),j.stop(),I&&(I.flags|=8,Fe(C,D,P,z)),fe&&ci(fe,P),ci(()=>{D.isUnmounted=!0},P)},se=(D,P,z,Z=!1,j=!1,I=0)=>{for(let C=I;C<D.length;C++)Fe(D[C],P,z,Z,j)},O=D=>{if(D.shapeFlag&6)return O(D.component.subTree);if(D.shapeFlag&128)return D.suspense.next();const P=h(D.anchor||D.el),z=P&&P[MS];return z?h(z):P};let ie=!1;const oe=(D,P,z)=>{let Z;D==null?P._vnode&&(Fe(P._vnode,null,null,!0),Z=P._vnode.component):_(P._vnode||null,D,P,null,null,null,z),P._vnode=D,ie||(ie=!0,Cp(Z),Pg(),ie=!1)},ae={p:_,um:Fe,m:de,r:ze,mt:$,mc:U,pc:Y,pbc:E,n:O,o:n};return{render:oe,hydrate:void 0,createApp:GS(oe)}}function Bu({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function ws({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function rM(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function Qg(n,e,t=!1){const i=n.children,r=e.children;if(Je(i)&&Je(r))for(let s=0;s<i.length;s++){const o=i[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=ns(r[s]),a.el=o.el),!t&&a.patchFlag!==-2&&Qg(o,a)),a.type===gu&&(a.patchFlag!==-1?a.el=o.el:a.__elIndex=s+(n.type===Zi?1:0)),a.type===jo&&!a.el&&(a.el=o.el)}}function sM(n){const e=n.slice(),t=[0];let i,r,s,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(r=t[t.length-1],n[r]<c){e[i]=r,t.push(i);continue}for(s=0,o=t.length-1;s<o;)a=s+o>>1,n[t[a]]<c?s=a+1:o=a;c<n[t[s]]&&(s>0&&(e[i]=t[s-1]),t[s]=i)}}for(s=t.length,o=t[s-1];s-- >0;)t[s]=o,o=e[o];return t}function e0(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:e0(e)}function Bp(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}function t0(n){if(n.placeholder)return n.placeholder;const e=n.component;return e?t0(e.subTree):null}const n0=n=>n.__isSuspense;function oM(n,e){e&&e.pendingBranch?Je(n)?e.effects.push(...n):e.effects.push(n):_S(n)}const Zi=Symbol.for("v-fgt"),gu=Symbol.for("v-txt"),jo=Symbol.for("v-cmt"),yc=Symbol.for("v-stc"),Xa=[];let gi=null;function Rl(n=!1){Xa.push(gi=n?null:[])}function aM(){Xa.pop(),gi=Xa[Xa.length-1]||null}let ul=1;function Xc(n,e=!1){ul+=n,n<0&&gi&&e&&(gi.hasOnce=!0)}function i0(n){return n.dynamicChildren=ul>0?gi||Fo:null,aM(),ul>0&&gi&&gi.push(n),n}function xu(n,e,t,i,r,s){return i0(ui(n,e,t,i,r,s,!0))}function lM(n,e,t,i,r){return i0(mn(n,e,t,i,r,!0))}function qc(n){return n?n.__v_isVNode===!0:!1}function _a(n,e){return n.type===e.type&&n.key===e.key}const r0=({key:n})=>n??null,Ec=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?on(n)||Rn(n)||tt(n)?{i:tr,r:n,k:e,f:!!t}:n:null);function ui(n,e=null,t=null,i=0,r=null,s=n===Zi?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&r0(e),ref:e&&Ec(e),scopeId:Ig,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:tr};return a?(Bd(l,t),s&128&&n.normalize(l)):t&&(l.shapeFlag|=on(t)?8:16),ul>0&&!o&&gi&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&gi.push(l),l}const mn=cM;function cM(n,e=null,t=null,i=0,r=null,s=!1){if((!n||n===NS)&&(n=jo),qc(n)){const a=Zo(n,e,!0);return t&&Bd(a,t),ul>0&&!s&&gi&&(a.shapeFlag&6?gi[gi.indexOf(n)]=a:gi.push(a)),a.patchFlag=-2,a}if(SM(n)&&(n=n.__vccOpts),e){e=uM(e);let{class:a,style:l}=e;a&&!on(a)&&(e.class=Td(a)),Ot(l)&&(Ld(l)&&!Je(l)&&(l=Dn({},l)),e.style=bd(l))}const o=on(n)?1:n0(n)?128:yS(n)?64:Ot(n)?4:tt(n)?2:0;return ui(n,e,t,i,r,o,s,!0)}function uM(n){return n?Ld(n)||Yg(n)?Dn({},n):n:null}function Zo(n,e,t=!1,i=!1){const{props:r,ref:s,patchFlag:o,children:a,transition:l}=n,c=e?fM(r||{},e):r,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&r0(c),ref:e&&e.ref?t&&s?Je(s)?s.concat(Ec(e)):[s,Ec(e)]:Ec(e):s,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==Zi?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Zo(n.ssContent),ssFallback:n.ssFallback&&Zo(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&Ud(u,l.clone(u)),u}function s0(n=" ",e=0){return mn(gu,null,n,e)}function Yf(n,e){const t=mn(yc,null,n);return t.staticCount=e,t}function Ji(n){return n==null||typeof n=="boolean"?mn(jo):Je(n)?mn(Zi,null,n.slice()):qc(n)?ns(n):mn(gu,null,String(n))}function ns(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:Zo(n)}function Bd(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(Je(e))t=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),Bd(n,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!Yg(e)?e._ctx=tr:r===3&&tr&&(tr.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else tt(e)?(e={default:e,_ctx:tr},t=32):(e=String(e),i&64?(t=16,e=[s0(e)]):t=8);n.children=e,n.shapeFlag|=t}function fM(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=Td([e.class,i.class]));else if(r==="style")e.style=bd([e.style,i.style]);else if(lu(r)){const s=e[r],o=i[r];o&&s!==o&&!(Je(s)&&s.includes(o))&&(e[r]=s?[].concat(s,o):o)}else r!==""&&(e[r]=i[r])}return e}function qi(n,e,t,i=null){ur(n,e,7,[t,i])}const hM=Hg();let dM=0;function pM(n,e,t){const i=n.type,r=(e?e.appContext:n.appContext)||hM,s={uid:dM++,vnode:n,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new lg(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Kg(i,r),emitsOptions:Wg(i,r),emit:null,emitted:null,propsDefaults:Nt,inheritAttrs:i.inheritAttrs,ctx:Nt,data:Nt,props:Nt,attrs:Nt,slots:Nt,refs:Nt,setupState:Nt,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=WS.bind(null,s),n.ce&&n.ce(s),s}let Gn=null;const mM=()=>Gn||tr;let Yc,$f;{const n=fu(),e=(t,i)=>{let r;return(r=n[t])||(r=n[t]=[]),r.push(i),s=>{r.length>1?r.forEach(o=>o(s)):r[0](s)}};Yc=e("__VUE_INSTANCE_SETTERS__",t=>Gn=t),$f=e("__VUE_SSR_SETTERS__",t=>fl=t)}const Cl=n=>{const e=Gn;return Yc(n),n.scope.on(),()=>{n.scope.off(),Yc(e)}},zp=()=>{Gn&&Gn.scope.off(),Yc(null)};function o0(n){return n.vnode.shapeFlag&4}let fl=!1;function _M(n,e=!1,t=!1){e&&$f(e);const{props:i,children:r}=n.vnode,s=o0(n);jS(n,i,s,e),eM(n,r,t||e);const o=s?gM(n,e):void 0;return e&&$f(!1),o}function gM(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,US);const{setup:i}=t;if(i){Fr();const r=n.setupContext=i.length>1?vM(n):null,s=Cl(n),o=Al(i,n,0,[n.props,r]),a=Q_(o);if(Or(),s(),(a||n.sp)&&!Ha(n)&&Fg(n),a){if(o.then(zp,zp),e)return o.then(l=>{kp(n,l)}).catch(l=>{pu(l,n,0)});n.asyncDep=o}else kp(n,o)}else a0(n)}function kp(n,e,t){tt(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:Ot(e)&&(n.setupState=Ag(e)),a0(n)}function a0(n,e,t){const i=n.type;n.render||(n.render=i.render||or);{const r=Cl(n);Fr();try{FS(n)}finally{Or(),r()}}}const xM={get(n,e){return bn(n,"get",""),n[e]}};function vM(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,xM),slots:n.slots,emit:n.emit,expose:e}}function zd(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(Ag(bg(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in Wa)return Wa[t](n)},has(e,t){return t in e||t in Wa}})):n.proxy}function SM(n){return tt(n)&&"__vccOpts"in n}const Bi=(n,e)=>fS(n,e,fl);function l0(n,e,t){try{Xc(-1);const i=arguments.length;return i===2?Ot(e)&&!Je(e)?qc(e)?mn(n,null,[e]):mn(n,e):mn(n,null,e):(i>3?t=Array.prototype.slice.call(arguments,2):i===3&&qc(t)&&(t=[t]),mn(n,e,t))}finally{Xc(1)}}const MM="3.5.26";let Kf;const Vp=typeof window<"u"&&window.trustedTypes;if(Vp)try{Kf=Vp.createPolicy("vue",{createHTML:n=>n})}catch{}const c0=Kf?n=>Kf.createHTML(n):n=>n,yM="http://www.w3.org/2000/svg",EM="http://www.w3.org/1998/Math/MathML",yr=typeof document<"u"?document:null,Gp=yr&&yr.createElement("template"),bM={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const r=e==="svg"?yr.createElementNS(yM,n):e==="mathml"?yr.createElementNS(EM,n):t?yr.createElement(n,{is:t}):yr.createElement(n);return n==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:n=>yr.createTextNode(n),createComment:n=>yr.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>yr.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,r,s){const o=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{Gp.innerHTML=c0(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const a=Gp.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},TM=Symbol("_vtc");function AM(n,e,t){const i=n[TM];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const Hp=Symbol("_vod"),wM=Symbol("_vsh"),RM=Symbol(""),CM=/(?:^|;)\s*display\s*:/;function PM(n,e,t){const i=n.style,r=on(t);let s=!1;if(t&&!r){if(e)if(on(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();t[a]==null&&bc(i,a,"")}else for(const o in e)t[o]==null&&bc(i,o,"");for(const o in t)o==="display"&&(s=!0),bc(i,o,t[o])}else if(r){if(e!==t){const o=i[RM];o&&(t+=";"+o),i.cssText=t,s=CM.test(t)}}else e&&n.removeAttribute("style");Hp in n&&(n[Hp]=s?i.display:"",n[wM]&&(i.display="none"))}const Wp=/\s*!important$/;function bc(n,e,t){if(Je(t))t.forEach(i=>bc(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=DM(n,e);Wp.test(t)?n.setProperty(oo(i),t.replace(Wp,""),"important"):n[i]=t}}const Xp=["Webkit","Moz","ms"],zu={};function DM(n,e){const t=zu[e];if(t)return t;let i=_s(e);if(i!=="filter"&&i in n)return zu[e]=i;i=ng(i);for(let r=0;r<Xp.length;r++){const s=Xp[r]+i;if(s in n)return zu[e]=s}return e}const qp="http://www.w3.org/1999/xlink";function Yp(n,e,t,i,r,s=kv(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(qp,e.slice(6,e.length)):n.setAttributeNS(qp,e,t):t==null||s&&!rg(t)?n.removeAttribute(e):n.setAttribute(e,s?"":Es(t)?String(t):t)}function $p(n,e,t,i,r){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?c0(t):t);return}const s=n.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const a=s==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(a!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let o=!1;if(t===""||t==null){const a=typeof n[e];a==="boolean"?t=rg(t):t==null&&a==="string"?(t="",o=!0):a==="number"&&(t=0,o=!0)}try{n[e]=t}catch{}o&&n.removeAttribute(r||e)}function IM(n,e,t,i){n.addEventListener(e,t,i)}function LM(n,e,t,i){n.removeEventListener(e,t,i)}const Kp=Symbol("_vei");function NM(n,e,t,i,r=null){const s=n[Kp]||(n[Kp]={}),o=s[e];if(i&&o)o.value=i;else{const[a,l]=UM(e);if(i){const c=s[e]=BM(i,r);IM(n,a,c,l)}else o&&(LM(n,a,o,l),s[e]=void 0)}}const jp=/(?:Once|Passive|Capture)$/;function UM(n){let e;if(jp.test(n)){e={};let i;for(;i=n.match(jp);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):oo(n.slice(2)),e]}let ku=0;const FM=Promise.resolve(),OM=()=>ku||(FM.then(()=>ku=0),ku=Date.now());function BM(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;ur(zM(i,t.value),e,5,[i])};return t.value=n,t.attached=OM(),t}function zM(n,e){if(Je(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const Zp=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,kM=(n,e,t,i,r,s)=>{const o=r==="svg";e==="class"?AM(n,i,o):e==="style"?PM(n,t,i):lu(e)?Md(e)||NM(n,e,t,i,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):VM(n,e,i,o))?($p(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Yp(n,e,i,o,s,e!=="value")):n._isVueCE&&(/[A-Z]/.test(e)||!on(i))?$p(n,_s(e),i,s,e):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),Yp(n,e,i,o))};function VM(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&Zp(e)&&tt(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&n.tagName==="IFRAME"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=n.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return Zp(e)&&on(t)?!1:e in n}const GM=Dn({patchProp:kM},bM);let Jp;function HM(){return Jp||(Jp=nM(GM))}const WM=((...n)=>{const e=HM().createApp(...n),{mount:t}=e;return e.mount=i=>{const r=qM(i);if(!r)return;const s=e._component;!tt(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=t(r,!1,XM(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e});function XM(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function qM(n){return on(n)?document.querySelector(n):n}const YM=Symbol();var Qp;(function(n){n.direct="direct",n.patchObject="patch object",n.patchFunction="patch function"})(Qp||(Qp={}));function $M(){const n=Vv(!0),e=n.run(()=>du({}));let t=[],i=[];const r=bg({install(s){r._a=s,s.provide(YM,r),s.config.globalProperties.$pinia=r,i.forEach(o=>t.push(o)),i=[]},use(s){return this._a?t.push(s):i.push(s),this},_p:t,_a:null,_e:n,_s:new Map,state:e});return r}const u0=""+new URL("../images/class-heavy-ind.png",import.meta.url).href,jf=""+new URL("../images/hero-bg-ind.png",import.meta.url).href;function Er(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function f0(n,e){n.prototype=Object.create(e.prototype),n.prototype.constructor=n,n.__proto__=e}var Si={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Jo={duration:.5,overwrite:!1,delay:0},kd,xn,Ft,Di=1e8,Pt=1/Di,Zf=Math.PI*2,KM=Zf/4,jM=0,h0=Math.sqrt,ZM=Math.cos,JM=Math.sin,pn=function(e){return typeof e=="string"},Wt=function(e){return typeof e=="function"},zr=function(e){return typeof e=="number"},Vd=function(e){return typeof e>"u"},fr=function(e){return typeof e=="object"},Zn=function(e){return e!==!1},Gd=function(){return typeof window<"u"},zl=function(e){return Wt(e)||pn(e)},d0=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Cn=Array.isArray,QM=/random\([^)]+\)/g,ey=/,\s*/g,em=/(?:-?\.?\d|\.)+/gi,p0=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Lo=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Vu=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,m0=/[+-]=-?[.\d]+/,ty=/[^,'"\[\]\s]+/gi,ny=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,zt,Ki,Jf,Hd,Mi={},$c={},_0,g0=function(e){return($c=Qo(e,Mi))&&ii},Wd=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},hl=function(e,t){return!t&&console.warn(e)},x0=function(e,t){return e&&(Mi[e]=t)&&$c&&($c[e]=t)||Mi},dl=function(){return 0},iy={suppressEvents:!0,isStart:!0,kill:!1},Tc={suppressEvents:!0,kill:!1},ry={suppressEvents:!0},Xd={},ds=[],Qf={},v0,di={},Gu={},tm=30,Ac=[],qd="",Yd=function(e){var t=e[0],i,r;if(fr(t)||Wt(t)||(e=[e]),!(i=(t._gsap||{}).harness)){for(r=Ac.length;r--&&!Ac[r].targetTest(t););i=Ac[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new H0(e[r],i)))||e.splice(r,1);return e},Ks=function(e){return e._gsap||Yd(Ii(e))[0]._gsap},S0=function(e,t,i){return(i=e[t])&&Wt(i)?e[t]():Vd(i)&&e.getAttribute&&e.getAttribute(t)||i},Jn=function(e,t){return(e=e.split(",")).forEach(t)||e},qt=function(e){return Math.round(e*1e5)/1e5||0},Bt=function(e){return Math.round(e*1e7)/1e7||0},Go=function(e,t){var i=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),i==="+"?e+r:i==="-"?e-r:i==="*"?e*r:e/r},sy=function(e,t){for(var i=t.length,r=0;e.indexOf(t[r])<0&&++r<i;);return r<i},Kc=function(){var e=ds.length,t=ds.slice(0),i,r;for(Qf={},ds.length=0,i=0;i<e;i++)r=t[i],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},$d=function(e){return!!(e._initted||e._startAt||e.add)},M0=function(e,t,i,r){ds.length&&!xn&&Kc(),e.render(t,i,!!(xn&&t<0&&$d(e))),ds.length&&!xn&&Kc()},y0=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(ty).length<2?t:pn(e)?e.trim():e},E0=function(e){return e},yi=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},oy=function(e){return function(t,i){for(var r in i)r in t||r==="duration"&&e||r==="ease"||(t[r]=i[r])}},Qo=function(e,t){for(var i in t)e[i]=t[i];return e},nm=function n(e,t){for(var i in t)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(e[i]=fr(t[i])?n(e[i]||(e[i]={}),t[i]):t[i]);return e},jc=function(e,t){var i={},r;for(r in e)r in t||(i[r]=e[r]);return i},qa=function(e){var t=e.parent||zt,i=e.keyframes?oy(Cn(e.keyframes)):yi;if(Zn(e.inherit))for(;t;)i(e,t.vars.defaults),t=t.parent||t._dp;return e},ay=function(e,t){for(var i=e.length,r=i===t.length;r&&i--&&e[i]===t[i];);return i<0},b0=function(e,t,i,r,s){var o=e[r],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[i],e[i]=t),t._next?t._next._prev=t:e[r]=t,t._prev=o,t.parent=t._dp=e,t},vu=function(e,t,i,r){i===void 0&&(i="_first"),r===void 0&&(r="_last");var s=t._prev,o=t._next;s?s._next=o:e[i]===t&&(e[i]=o),o?o._prev=s:e[r]===t&&(e[r]=s),t._next=t._prev=t.parent=null},xs=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},js=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var i=e;i;)i._dirty=1,i=i.parent;return e},ly=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},eh=function(e,t,i,r){return e._startAt&&(xn?e._startAt.revert(Tc):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},cy=function n(e){return!e||e._ts&&n(e.parent)},im=function(e){return e._repeat?ea(e._tTime,e=e.duration()+e._rDelay)*e:0},ea=function(e,t){var i=Math.floor(e=Bt(e/t));return e&&i===e?i-1:i},Zc=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Su=function(e){return e._end=Bt(e._start+(e._tDur/Math.abs(e._ts||e._rts||Pt)||0))},Mu=function(e,t){var i=e._dp;return i&&i.smoothChildTiming&&e._ts&&(e._start=Bt(i._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Su(e),i._dirty||js(i,e)),e},T0=function(e,t){var i;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(i=Zc(e.rawTime(),t),(!t._dur||Pl(0,t.totalDuration(),i)-t._tTime>Pt)&&t.render(i,!0)),js(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(i=e;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;e._zTime=-Pt}},er=function(e,t,i,r){return t.parent&&xs(t),t._start=Bt((zr(i)?i:i||e!==zt?Ti(e,i,t):e._time)+t._delay),t._end=Bt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),b0(e,t,"_first","_last",e._sort?"_start":0),th(t)||(e._recent=t),r||T0(e,t),e._ts<0&&Mu(e,e._tTime),e},A0=function(e,t){return(Mi.ScrollTrigger||Wd("scrollTrigger",t))&&Mi.ScrollTrigger.create(t,e)},w0=function(e,t,i,r,s){if(jd(e,t,s),!e._initted)return 1;if(!i&&e._pt&&!xn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&v0!==mi.frame)return ds.push(e),e._lazy=[s,r],1},uy=function n(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||n(t))},th=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},fy=function(e,t,i,r){var s=e.ratio,o=t<0||!t&&(!e._start&&uy(e)&&!(!e._initted&&th(e))||(e._ts<0||e._dp._ts<0)&&!th(e))?0:1,a=e._rDelay,l=0,c,u,f;if(a&&e._repeat&&(l=Pl(0,e._tDur,t),u=ea(l,a),e._yoyo&&u&1&&(o=1-o),u!==ea(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||xn||r||e._zTime===Pt||!t&&e._zTime){if(!e._initted&&w0(e,t,r,i,l))return;for(f=e._zTime,e._zTime=t||(i?Pt:0),i||(i=t&&!f),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,c=e._pt;c;)c.r(o,c.d),c=c._next;t<0&&eh(e,t,i,!0),e._onUpdate&&!i&&xi(e,"onUpdate"),l&&e._repeat&&!i&&e.parent&&xi(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&xs(e,1),!i&&!xn&&(xi(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},hy=function(e,t,i){var r;if(i>t)for(r=e._first;r&&r._start<=i;){if(r.data==="isPause"&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=i;){if(r.data==="isPause"&&r._start<t)return r;r=r._prev}},ta=function(e,t,i,r){var s=e._repeat,o=Bt(t)||0,a=e._tTime/e._tDur;return a&&!r&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:Bt(o*(s+1)+e._rDelay*s):o,a>0&&!r&&Mu(e,e._tTime=e._tDur*a),e.parent&&Su(e),i||js(e.parent,e),e},rm=function(e){return e instanceof Hn?js(e):ta(e,e._dur)},dy={_start:0,endTime:dl,totalDuration:dl},Ti=function n(e,t,i){var r=e.labels,s=e._recent||dy,o=e.duration()>=Di?s.endTime(!1):e._dur,a,l,c;return pn(t)&&(isNaN(t)||t in r)?(l=t.charAt(0),c=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(a<0?s:i).totalDuration()/100:1)):a<0?(t in r||(r[t]=o),r[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),c&&i&&(l=l/100*(Cn(i)?i[0]:i).totalDuration()),a>1?n(e,t.substr(0,a-1),i)+l:o+l)):t==null?o:+t},Ya=function(e,t,i){var r=zr(t[1]),s=(r?2:1)+(e<2?0:1),o=t[s],a,l;if(r&&(o.duration=t[1]),o.parent=i,e){for(a=o,l=i;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=Zn(l.vars.inherit)&&l.parent;o.immediateRender=Zn(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new Qt(t[0],o,t[s+1])},bs=function(e,t){return e||e===0?t(e):t},Pl=function(e,t,i){return i<e?e:i>t?t:i},Tn=function(e,t){return!pn(e)||!(t=ny.exec(e))?"":t[1]},py=function(e,t,i){return bs(i,function(r){return Pl(e,t,r)})},nh=[].slice,R0=function(e,t){return e&&fr(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&fr(e[0]))&&!e.nodeType&&e!==Ki},my=function(e,t,i){return i===void 0&&(i=[]),e.forEach(function(r){var s;return pn(r)&&!t||R0(r,1)?(s=i).push.apply(s,Ii(r)):i.push(r)})||i},Ii=function(e,t,i){return Ft&&!t&&Ft.selector?Ft.selector(e):pn(e)&&!i&&(Jf||!na())?nh.call((t||Hd).querySelectorAll(e),0):Cn(e)?my(e,i):R0(e)?nh.call(e,0):e?[e]:[]},ih=function(e){return e=Ii(e)[0]||hl("Invalid scope")||{},function(t){var i=e.current||e.nativeElement||e;return Ii(t,i.querySelectorAll?i:i===e?hl("Invalid scope")||Hd.createElement("div"):e)}},C0=function(e){return e.sort(function(){return .5-Math.random()})},P0=function(e){if(Wt(e))return e;var t=fr(e)?e:{each:e},i=Zs(t.ease),r=t.from||0,s=parseFloat(t.base)||0,o={},a=r>0&&r<1,l=isNaN(r)||a,c=t.axis,u=r,f=r;return pn(r)?u=f={center:.5,edges:.5,end:1}[r]||0:!a&&l&&(u=r[0],f=r[1]),function(h,d,g){var _=(g||t).length,m=o[_],p,M,y,S,b,R,w,U,v;if(!m){if(v=t.grid==="auto"?0:(t.grid||[1,Di])[1],!v){for(w=-Di;w<(w=g[v++].getBoundingClientRect().left)&&v<_;);v<_&&v--}for(m=o[_]=[],p=l?Math.min(v,_)*u-.5:r%v,M=v===Di?0:l?_*f/v-.5:r/v|0,w=0,U=Di,R=0;R<_;R++)y=R%v-p,S=M-(R/v|0),m[R]=b=c?Math.abs(c==="y"?S:y):h0(y*y+S*S),b>w&&(w=b),b<U&&(U=b);r==="random"&&C0(m),m.max=w-U,m.min=U,m.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(v>_?_-1:c?c==="y"?_/v:v:Math.max(v,_/v))||0)*(r==="edges"?-1:1),m.b=_<0?s-_:s,m.u=Tn(t.amount||t.each)||0,i=i&&_<0?k0(i):i}return _=(m[h]-m.min)/m.max||0,Bt(m.b+(i?i(_):_)*m.v)+m.u}},rh=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(i){var r=Bt(Math.round(parseFloat(i)/e)*e*t);return(r-r%1)/t+(zr(i)?0:Tn(i))}},D0=function(e,t){var i=Cn(e),r,s;return!i&&fr(e)&&(r=i=e.radius||Di,e.values?(e=Ii(e.values),(s=!zr(e[0]))&&(r*=r)):e=rh(e.increment)),bs(t,i?Wt(e)?function(o){return s=e(o),Math.abs(s-o)<=r?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=Di,u=0,f=e.length,h,d;f--;)s?(h=e[f].x-a,d=e[f].y-l,h=h*h+d*d):h=Math.abs(e[f]-a),h<c&&(c=h,u=f);return u=!r||c<=r?e[u]:o,s||u===o||zr(o)?u:u+Tn(o)}:rh(e))},I0=function(e,t,i,r){return bs(Cn(e)?!t:i===!0?!!(i=0):!r,function(){return Cn(e)?e[~~(Math.random()*e.length)]:(i=i||1e-5)&&(r=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((e-i/2+Math.random()*(t-e+i*.99))/i)*i*r)/r})},_y=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return function(r){return t.reduce(function(s,o){return o(s)},r)}},gy=function(e,t){return function(i){return e(parseFloat(i))+(t||Tn(i))}},xy=function(e,t,i){return N0(e,t,0,1,i)},L0=function(e,t,i){return bs(i,function(r){return e[~~t(r)]})},vy=function n(e,t,i){var r=t-e;return Cn(e)?L0(e,n(0,e.length),t):bs(i,function(s){return(r+(s-e)%r)%r+e})},Sy=function n(e,t,i){var r=t-e,s=r*2;return Cn(e)?L0(e,n(0,e.length-1),t):bs(i,function(o){return o=(s+(o-e)%s)%s||0,e+(o>r?s-o:o)})},pl=function(e){return e.replace(QM,function(t){var i=t.indexOf("[")+1,r=t.substring(i||7,i?t.indexOf("]"):t.length-1).split(ey);return I0(i?r:+r[0],i?0:+r[1],+r[2]||1e-5)})},N0=function(e,t,i,r,s){var o=t-e,a=r-i;return bs(s,function(l){return i+((l-e)/o*a||0)})},My=function n(e,t,i,r){var s=isNaN(e+t)?0:function(d){return(1-d)*e+d*t};if(!s){var o=pn(e),a={},l,c,u,f,h;if(i===!0&&(r=1)&&(i=null),o)e={p:e},t={p:t};else if(Cn(e)&&!Cn(t)){for(u=[],f=e.length,h=f-2,c=1;c<f;c++)u.push(n(e[c-1],e[c]));f--,s=function(g){g*=f;var _=Math.min(h,~~g);return u[_](g-_)},i=t}else r||(e=Qo(Cn(e)?[]:{},e));if(!u){for(l in t)Kd.call(a,e,l,"get",t[l]);s=function(g){return Qd(g,a)||(o?e.p:e)}}}return bs(i,s)},sm=function(e,t,i){var r=e.labels,s=Di,o,a,l;for(o in r)a=r[o]-t,a<0==!!i&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},xi=function(e,t,i){var r=e.vars,s=r[t],o=Ft,a=e._ctx,l,c,u;if(s)return l=r[t+"Params"],c=r.callbackScope||e,i&&ds.length&&Kc(),a&&(Ft=a),u=l?s.apply(c,l):s.call(c),Ft=o,u},Ca=function(e){return xs(e),e.scrollTrigger&&e.scrollTrigger.kill(!!xn),e.progress()<1&&xi(e,"onInterrupt"),e},No,U0=[],F0=function(e){if(e)if(e=!e.name&&e.default||e,Gd()||e.headless){var t=e.name,i=Wt(e),r=t&&!i&&e.init?function(){this._props=[]}:e,s={init:dl,render:Qd,add:Kd,kill:Oy,modifier:Fy,rawVars:0},o={targetTest:0,get:0,getSetter:Jd,aliases:{},register:0};if(na(),e!==r){if(di[t])return;yi(r,yi(jc(e,s),o)),Qo(r.prototype,Qo(s,jc(e,o))),di[r.prop=t]=r,e.targetTest&&(Ac.push(r),Xd[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}x0(t,r),e.register&&e.register(ii,r,Qn)}else U0.push(e)},Ct=255,Pa={aqua:[0,Ct,Ct],lime:[0,Ct,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Ct],navy:[0,0,128],white:[Ct,Ct,Ct],olive:[128,128,0],yellow:[Ct,Ct,0],orange:[Ct,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Ct,0,0],pink:[Ct,192,203],cyan:[0,Ct,Ct],transparent:[Ct,Ct,Ct,0]},Hu=function(e,t,i){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(i-t)*e*6:e<.5?i:e*3<2?t+(i-t)*(2/3-e)*6:t)*Ct+.5|0},O0=function(e,t,i){var r=e?zr(e)?[e>>16,e>>8&Ct,e&Ct]:0:Pa.black,s,o,a,l,c,u,f,h,d,g;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Pa[e])r=Pa[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&Ct,r&Ct,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&Ct,e&Ct]}else if(e.substr(0,3)==="hsl"){if(r=g=e.match(em),!t)l=+r[0]%360/360,c=+r[1]/100,u=+r[2]/100,o=u<=.5?u*(c+1):u+c-u*c,s=u*2-o,r.length>3&&(r[3]*=1),r[0]=Hu(l+1/3,s,o),r[1]=Hu(l,s,o),r[2]=Hu(l-1/3,s,o);else if(~e.indexOf("="))return r=e.match(p0),i&&r.length<4&&(r[3]=1),r}else r=e.match(em)||Pa.transparent;r=r.map(Number)}return t&&!g&&(s=r[0]/Ct,o=r[1]/Ct,a=r[2]/Ct,f=Math.max(s,o,a),h=Math.min(s,o,a),u=(f+h)/2,f===h?l=c=0:(d=f-h,c=u>.5?d/(2-f-h):d/(f+h),l=f===s?(o-a)/d+(o<a?6:0):f===o?(a-s)/d+2:(s-o)/d+4,l*=60),r[0]=~~(l+.5),r[1]=~~(c*100+.5),r[2]=~~(u*100+.5)),i&&r.length<4&&(r[3]=1),r},B0=function(e){var t=[],i=[],r=-1;return e.split(ps).forEach(function(s){var o=s.match(Lo)||[];t.push.apply(t,o),i.push(r+=o.length+1)}),t.c=i,t},om=function(e,t,i){var r="",s=(e+r).match(ps),o=t?"hsla(":"rgba(",a=0,l,c,u,f;if(!s)return e;if(s=s.map(function(h){return(h=O0(h,t,1))&&o+(t?h[0]+","+h[1]+"%,"+h[2]+"%,"+h[3]:h.join(","))+")"}),i&&(u=B0(e),l=i.c,l.join(r)!==u.c.join(r)))for(c=e.replace(ps,"1").split(Lo),f=c.length-1;a<f;a++)r+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(u.length?u:s.length?s:i).shift());if(!c)for(c=e.split(ps),f=c.length-1;a<f;a++)r+=c[a]+s[a];return r+c[f]},ps=(function(){var n="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Pa)n+="|"+e+"\\b";return new RegExp(n+")","gi")})(),yy=/hsl[a]?\(/,z0=function(e){var t=e.join(" "),i;if(ps.lastIndex=0,ps.test(t))return i=yy.test(t),e[1]=om(e[1],i),e[0]=om(e[0],i,B0(e[1])),!0},ml,mi=(function(){var n=Date.now,e=500,t=33,i=n(),r=i,s=1e3/240,o=s,a=[],l,c,u,f,h,d,g=function _(m){var p=n()-r,M=m===!0,y,S,b,R;if((p>e||p<0)&&(i+=p-t),r+=p,b=r-i,y=b-o,(y>0||M)&&(R=++f.frame,h=b-f.time*1e3,f.time=b=b/1e3,o+=y+(y>=s?4:s-y),S=1),M||(l=c(_)),S)for(d=0;d<a.length;d++)a[d](b,h,R,m)};return f={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(m){return h/(1e3/(m||60))},wake:function(){_0&&(!Jf&&Gd()&&(Ki=Jf=window,Hd=Ki.document||{},Mi.gsap=ii,(Ki.gsapVersions||(Ki.gsapVersions=[])).push(ii.version),g0($c||Ki.GreenSockGlobals||!Ki.gsap&&Ki||{}),U0.forEach(F0)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&f.sleep(),c=u||function(m){return setTimeout(m,o-f.time*1e3+1|0)},ml=1,g(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),ml=0,c=dl},lagSmoothing:function(m,p){e=m||1/0,t=Math.min(p||33,e)},fps:function(m){s=1e3/(m||240),o=f.time*1e3+s},add:function(m,p,M){var y=p?function(S,b,R,w){m(S,b,R,w),f.remove(y)}:m;return f.remove(m),a[M?"unshift":"push"](y),na(),y},remove:function(m,p){~(p=a.indexOf(m))&&a.splice(p,1)&&d>=p&&d--},_listeners:a},f})(),na=function(){return!ml&&mi.wake()},ut={},Ey=/^[\d.\-M][\d.\-,\s]/,by=/["']/g,Ty=function(e){for(var t={},i=e.substr(1,e.length-3).split(":"),r=i[0],s=1,o=i.length,a,l,c;s<o;s++)l=i[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[r]=isNaN(c)?c.replace(by,"").trim():+c,r=l.substr(a+1).trim();return t},Ay=function(e){var t=e.indexOf("(")+1,i=e.indexOf(")"),r=e.indexOf("(",t);return e.substring(t,~r&&r<i?e.indexOf(")",i+1):i)},wy=function(e){var t=(e+"").split("("),i=ut[t[0]];return i&&t.length>1&&i.config?i.config.apply(null,~e.indexOf("{")?[Ty(t[1])]:Ay(e).split(",").map(y0)):ut._CE&&Ey.test(e)?ut._CE("",e):i},k0=function(e){return function(t){return 1-e(1-t)}},V0=function n(e,t){for(var i=e._first,r;i;)i instanceof Hn?n(i,t):i.vars.yoyoEase&&(!i._yoyo||!i._repeat)&&i._yoyo!==t&&(i.timeline?n(i.timeline,t):(r=i._ease,i._ease=i._yEase,i._yEase=r,i._yoyo=t)),i=i._next},Zs=function(e,t){return e&&(Wt(e)?e:ut[e]||wy(e))||t},ao=function(e,t,i,r){i===void 0&&(i=function(l){return 1-t(1-l)}),r===void 0&&(r=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:i,easeInOut:r},o;return Jn(e,function(a){ut[a]=Mi[a]=s,ut[o=a.toLowerCase()]=i;for(var l in s)ut[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=ut[a+"."+l]=s[l]}),s},G0=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Wu=function n(e,t,i){var r=t>=1?t:1,s=(i||(e?.3:.45))/(t<1?t:1),o=s/Zf*(Math.asin(1/r)||0),a=function(u){return u===1?1:r*Math.pow(2,-10*u)*JM((u-o)*s)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:G0(a);return s=Zf/s,l.config=function(c,u){return n(e,c,u)},l},Xu=function n(e,t){t===void 0&&(t=1.70158);var i=function(o){return o?--o*o*((t+1)*o+t)+1:0},r=e==="out"?i:e==="in"?function(s){return 1-i(1-s)}:G0(i);return r.config=function(s){return n(e,s)},r};Jn("Linear,Quad,Cubic,Quart,Quint,Strong",function(n,e){var t=e<5?e+1:e;ao(n+",Power"+(t-1),e?function(i){return Math.pow(i,t)}:function(i){return i},function(i){return 1-Math.pow(1-i,t)},function(i){return i<.5?Math.pow(i*2,t)/2:1-Math.pow((1-i)*2,t)/2})});ut.Linear.easeNone=ut.none=ut.Linear.easeIn;ao("Elastic",Wu("in"),Wu("out"),Wu());(function(n,e){var t=1/e,i=2*t,r=2.5*t,s=function(a){return a<t?n*a*a:a<i?n*Math.pow(a-1.5/e,2)+.75:a<r?n*(a-=2.25/e)*a+.9375:n*Math.pow(a-2.625/e,2)+.984375};ao("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);ao("Expo",function(n){return Math.pow(2,10*(n-1))*n+n*n*n*n*n*n*(1-n)});ao("Circ",function(n){return-(h0(1-n*n)-1)});ao("Sine",function(n){return n===1?1:-ZM(n*KM)+1});ao("Back",Xu("in"),Xu("out"),Xu());ut.SteppedEase=ut.steps=Mi.SteppedEase={config:function(e,t){e===void 0&&(e=1);var i=1/e,r=e+(t?0:1),s=t?1:0,o=1-Pt;return function(a){return((r*Pl(0,o,a)|0)+s)*i}}};Jo.ease=ut["quad.out"];Jn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(n){return qd+=n+","+n+"Params,"});var H0=function(e,t){this.id=jM++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:S0,this.set=t?t.getSetter:Jd},_l=(function(){function n(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,ta(this,+t.duration,1,1),this.data=t.data,Ft&&(this._ctx=Ft,Ft.data.push(this)),ml||mi.wake()}var e=n.prototype;return e.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},e.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},e.totalDuration=function(i){return arguments.length?(this._dirty=0,ta(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(i,r){if(na(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Mu(this,i),!s._dp||s.parent||T0(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&er(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===Pt||!this._initted&&this._dur&&i||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),M0(this,i,r)),this},e.time=function(i,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+im(this))%(this._dur+this._rDelay)||(i?this._dur:0),r):this._time},e.totalProgress=function(i,r){return arguments.length?this.totalTime(this.totalDuration()*i,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(i,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+im(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(i,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*s,r):this._repeat?ea(this._tTime,s)+1:1},e.timeScale=function(i,r){if(!arguments.length)return this._rts===-Pt?0:this._rts;if(this._rts===i)return this;var s=this.parent&&this._ts?Zc(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-Pt?0:this._rts,this.totalTime(Pl(-Math.abs(this._delay),this.totalDuration(),s),r!==!1),Su(this),ly(this)},e.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(na(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Pt&&(this._tTime-=Pt)))),this):this._ps},e.startTime=function(i){if(arguments.length){this._start=Bt(i);var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&er(r,this,this._start-this._delay),this}return this._start},e.endTime=function(i){return this._start+(Zn(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(i){var r=this.parent||this._dp;return r?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Zc(r.rawTime(i),this):this._tTime:this._tTime},e.revert=function(i){i===void 0&&(i=ry);var r=xn;return xn=i,$d(this)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),xn=r,this},e.globalTime=function(i){for(var r=this,s=arguments.length?i:r.rawTime();r;)s=r._start+s/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(i):s},e.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,rm(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(i){if(arguments.length){var r=this._time;return this._rDelay=i,rm(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},e.seek=function(i,r){return this.totalTime(Ti(this,i),Zn(r))},e.restart=function(i,r){return this.play().totalTime(i?-this._delay:0,Zn(r)),this._dur||(this._zTime=-Pt),this},e.play=function(i,r){return i!=null&&this.seek(i,r),this.reversed(!1).paused(!1)},e.reverse=function(i,r){return i!=null&&this.seek(i||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(i,r){return i!=null&&this.seek(i,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-Pt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-Pt,this},e.isActive=function(){var i=this.parent||this._dp,r=this._start,s;return!!(!i||this._ts&&this._initted&&i.isActive()&&(s=i.rawTime(!0))>=r&&s<this.endTime(!0)-Pt)},e.eventCallback=function(i,r,s){var o=this.vars;return arguments.length>1?(r?(o[i]=r,s&&(o[i+"Params"]=s),i==="onUpdate"&&(this._onUpdate=r)):delete o[i],this):o[i]},e.then=function(i){var r=this,s=r._prom;return new Promise(function(o){var a=Wt(i)?i:E0,l=function(){var u=r.then;r.then=null,s&&s(),Wt(a)&&(a=a(r))&&(a.then||a===r)&&(r.then=u),o(a),r.then=u};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?l():r._prom=l})},e.kill=function(){Ca(this)},n})();yi(_l.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Pt,_prom:0,_ps:!1,_rts:1});var Hn=(function(n){f0(e,n);function e(i,r){var s;return i===void 0&&(i={}),s=n.call(this,i)||this,s.labels={},s.smoothChildTiming=!!i.smoothChildTiming,s.autoRemoveChildren=!!i.autoRemoveChildren,s._sort=Zn(i.sortChildren),zt&&er(i.parent||zt,Er(s),r),i.reversed&&s.reverse(),i.paused&&s.paused(!0),i.scrollTrigger&&A0(Er(s),i.scrollTrigger),s}var t=e.prototype;return t.to=function(r,s,o){return Ya(0,arguments,this),this},t.from=function(r,s,o){return Ya(1,arguments,this),this},t.fromTo=function(r,s,o,a){return Ya(2,arguments,this),this},t.set=function(r,s,o){return s.duration=0,s.parent=this,qa(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Qt(r,s,Ti(this,o),1),this},t.call=function(r,s,o){return er(this,Qt.delayedCall(0,r,s),o)},t.staggerTo=function(r,s,o,a,l,c,u){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=u,o.parent=this,new Qt(r,o,Ti(this,l)),this},t.staggerFrom=function(r,s,o,a,l,c,u){return o.runBackwards=1,qa(o).immediateRender=Zn(o.immediateRender),this.staggerTo(r,s,o,a,l,c,u)},t.staggerFromTo=function(r,s,o,a,l,c,u,f){return a.startAt=o,qa(a).immediateRender=Zn(a.immediateRender),this.staggerTo(r,s,a,l,c,u,f)},t.render=function(r,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=r<=0?0:Bt(r),f=this._zTime<0!=r<0&&(this._initted||!c),h,d,g,_,m,p,M,y,S,b,R,w;if(this!==zt&&u>l&&r>=0&&(u=l),u!==this._tTime||o||f){if(a!==this._time&&c&&(u+=this._time-a,r+=this._time-a),h=u,S=this._start,y=this._ts,p=!y,f&&(c||(a=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(R=this._yoyo,m=c+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(m*100+r,s,o);if(h=Bt(u%m),u===l?(_=this._repeat,h=c):(b=Bt(u/m),_=~~b,_&&_===b&&(h=c,_--),h>c&&(h=c)),b=ea(this._tTime,m),!a&&this._tTime&&b!==_&&this._tTime-b*m-this._dur<=0&&(b=_),R&&_&1&&(h=c-h,w=1),_!==b&&!this._lock){var U=R&&b&1,v=U===(R&&_&1);if(_<b&&(U=!U),a=U?0:u%c?c:u,this._lock=1,this.render(a||(w?0:Bt(_*m)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&xi(this,"onRepeat"),this.vars.repeatRefresh&&!w&&(this.invalidate()._lock=1,b=_),a&&a!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,v&&(this._lock=2,a=U?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!w&&this.invalidate()),this._lock=0,!this._ts&&!p)return this;V0(this,w)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(M=hy(this,Bt(a),Bt(h)),M&&(u-=h-(h=M._start))),this._tTime=u,this._time=h,this._act=!y,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,a=0),!a&&u&&c&&!s&&!b&&(xi(this,"onStart"),this._tTime!==u))return this;if(h>=a&&r>=0)for(d=this._first;d;){if(g=d._next,(d._act||h>=d._start)&&d._ts&&M!==d){if(d.parent!==this)return this.render(r,s,o);if(d.render(d._ts>0?(h-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(h-d._start)*d._ts,s,o),h!==this._time||!this._ts&&!p){M=0,g&&(u+=this._zTime=-Pt);break}}d=g}else{d=this._last;for(var E=r<0?r:h;d;){if(g=d._prev,(d._act||E<=d._end)&&d._ts&&M!==d){if(d.parent!==this)return this.render(r,s,o);if(d.render(d._ts>0?(E-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(E-d._start)*d._ts,s,o||xn&&$d(d)),h!==this._time||!this._ts&&!p){M=0,g&&(u+=this._zTime=E?-Pt:Pt);break}}d=g}}if(M&&!s&&(this.pause(),M.render(h>=a?0:-Pt)._zTime=h>=a?1:-1,this._ts))return this._start=S,Su(this),this.render(r,s,o);this._onUpdate&&!s&&xi(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(S===this._start||Math.abs(y)!==Math.abs(this._ts))&&(this._lock||((r||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&xs(this,1),!s&&!(r<0&&!a)&&(u||a||!l)&&(xi(this,u===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(r,s){var o=this;if(zr(s)||(s=Ti(this,s,r)),!(r instanceof _l)){if(Cn(r))return r.forEach(function(a){return o.add(a,s)}),this;if(pn(r))return this.addLabel(r,s);if(Wt(r))r=Qt.delayedCall(0,r);else return this}return this!==r?er(this,r,s):this},t.getChildren=function(r,s,o,a){r===void 0&&(r=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-Di);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof Qt?s&&l.push(c):(o&&l.push(c),r&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},t.getById=function(r){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===r)return s[o]},t.remove=function(r){return pn(r)?this.removeLabel(r):Wt(r)?this.killTweensOf(r):(r.parent===this&&vu(this,r),r===this._recent&&(this._recent=this._last),js(this))},t.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Bt(mi.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),n.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},t.addLabel=function(r,s){return this.labels[r]=Ti(this,s),this},t.removeLabel=function(r){return delete this.labels[r],this},t.addPause=function(r,s,o){var a=Qt.delayedCall(0,s||dl,o);return a.data="isPause",this._hasPause=1,er(this,a,Ti(this,r))},t.removePause=function(r){var s=this._first;for(r=Ti(this,r);s;)s._start===r&&s.data==="isPause"&&xs(s),s=s._next},t.killTweensOf=function(r,s,o){for(var a=this.getTweensOf(r,o),l=a.length;l--;)os!==a[l]&&a[l].kill(r,s);return this},t.getTweensOf=function(r,s){for(var o=[],a=Ii(r),l=this._first,c=zr(s),u;l;)l instanceof Qt?sy(l._targets,a)&&(c?(!os||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(u=l.getTweensOf(a,s)).length&&o.push.apply(o,u),l=l._next;return o},t.tweenTo=function(r,s){s=s||{};var o=this,a=Ti(o,r),l=s,c=l.startAt,u=l.onStart,f=l.onStartParams,h=l.immediateRender,d,g=Qt.to(o,yi({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||Pt,onStart:function(){if(o.pause(),!d){var m=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());g._dur!==m&&ta(g,m,0,1).render(g._time,!0,!0),d=1}u&&u.apply(g,f||[])}},s));return h?g.render(0):g},t.tweenFromTo=function(r,s,o){return this.tweenTo(s,yi({startAt:{time:Ti(this,r)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(r){return r===void 0&&(r=this._time),sm(this,Ti(this,r))},t.previousLabel=function(r){return r===void 0&&(r=this._time),sm(this,Ti(this,r),1)},t.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+Pt)},t.shiftChildren=function(r,s,o){o===void 0&&(o=0);var a=this._first,l=this.labels,c;for(r=Bt(r);a;)a._start>=o&&(a._start+=r,a._end+=r),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=r);return js(this)},t.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return n.prototype.invalidate.call(this,r)},t.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),js(this)},t.totalDuration=function(r){var s=0,o=this,a=o._last,l=Di,c,u,f;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-r:r));if(o._dirty){for(f=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,er(o,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(s-=u,(!f&&!o._dp||f&&f.smoothChildTiming)&&(o._start+=Bt(u/o._ts),o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;ta(o,o===zt&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(r){if(zt._ts&&(M0(zt,Zc(r,zt)),v0=mi.frame),mi.frame>=tm){tm+=Si.autoSleep||120;var s=zt._first;if((!s||!s._ts)&&Si.autoSleep&&mi._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||mi.sleep()}}},e})(_l);yi(Hn.prototype,{_lock:0,_hasPause:0,_forcing:0});var Ry=function(e,t,i,r,s,o,a){var l=new Qn(this._pt,e,t,0,1,K0,null,s),c=0,u=0,f,h,d,g,_,m,p,M;for(l.b=i,l.e=r,i+="",r+="",(p=~r.indexOf("random("))&&(r=pl(r)),o&&(M=[i,r],o(M,e,t),i=M[0],r=M[1]),h=i.match(Vu)||[];f=Vu.exec(r);)g=f[0],_=r.substring(c,f.index),d?d=(d+1)%5:_.substr(-5)==="rgba("&&(d=1),g!==h[u++]&&(m=parseFloat(h[u-1])||0,l._pt={_next:l._pt,p:_||u===1?_:",",s:m,c:g.charAt(1)==="="?Go(m,g)-m:parseFloat(g)-m,m:d&&d<4?Math.round:0},c=Vu.lastIndex);return l.c=c<r.length?r.substring(c,r.length):"",l.fp=a,(m0.test(r)||p)&&(l.e=0),this._pt=l,l},Kd=function(e,t,i,r,s,o,a,l,c,u){Wt(r)&&(r=r(s||0,e,o));var f=e[t],h=i!=="get"?i:Wt(f)?c?e[t.indexOf("set")||!Wt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():f,d=Wt(f)?c?Ly:Y0:Zd,g;if(pn(r)&&(~r.indexOf("random(")&&(r=pl(r)),r.charAt(1)==="="&&(g=Go(h,r)+(Tn(h)||0),(g||g===0)&&(r=g))),!u||h!==r||sh)return!isNaN(h*r)&&r!==""?(g=new Qn(this._pt,e,t,+h||0,r-(h||0),typeof f=="boolean"?Uy:$0,0,d),c&&(g.fp=c),a&&g.modifier(a,this,e),this._pt=g):(!f&&!(t in e)&&Wd(t,r),Ry.call(this,e,t,h,r,d,l||Si.stringFilter,c))},Cy=function(e,t,i,r,s){if(Wt(e)&&(e=$a(e,s,t,i,r)),!fr(e)||e.style&&e.nodeType||Cn(e)||d0(e))return pn(e)?$a(e,s,t,i,r):e;var o={},a;for(a in e)o[a]=$a(e[a],s,t,i,r);return o},W0=function(e,t,i,r,s,o){var a,l,c,u;if(di[e]&&(a=new di[e]).init(s,a.rawVars?t[e]:Cy(t[e],r,s,o,i),i,r,o)!==!1&&(i._pt=l=new Qn(i._pt,s,e,0,1,a.render,a,0,a.priority),i!==No))for(c=i._ptLookup[i._targets.indexOf(s)],u=a._props.length;u--;)c[a._props[u]]=l;return a},os,sh,jd=function n(e,t,i){var r=e.vars,s=r.ease,o=r.startAt,a=r.immediateRender,l=r.lazy,c=r.onUpdate,u=r.runBackwards,f=r.yoyoEase,h=r.keyframes,d=r.autoRevert,g=e._dur,_=e._startAt,m=e._targets,p=e.parent,M=p&&p.data==="nested"?p.vars.targets:m,y=e._overwrite==="auto"&&!kd,S=e.timeline,b,R,w,U,v,E,F,k,H,$,Q,W,V;if(S&&(!h||!s)&&(s="none"),e._ease=Zs(s,Jo.ease),e._yEase=f?k0(Zs(f===!0?s:f,Jo.ease)):0,f&&e._yoyo&&!e._repeat&&(f=e._yEase,e._yEase=e._ease,e._ease=f),e._from=!S&&!!r.runBackwards,!S||h&&!r.stagger){if(k=m[0]?Ks(m[0]).harness:0,W=k&&r[k.prop],b=jc(r,Xd),_&&(_._zTime<0&&_.progress(1),t<0&&u&&a&&!d?_.render(-1,!0):_.revert(u&&g?Tc:iy),_._lazy=0),o){if(xs(e._startAt=Qt.set(m,yi({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!_&&Zn(l),startAt:null,delay:0,onUpdate:c&&function(){return xi(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(xn||!a&&!d)&&e._startAt.revert(Tc),a&&g&&t<=0&&i<=0){t&&(e._zTime=t);return}}else if(u&&g&&!_){if(t&&(a=!1),w=yi({overwrite:!1,data:"isFromStart",lazy:a&&!_&&Zn(l),immediateRender:a,stagger:0,parent:p},b),W&&(w[k.prop]=W),xs(e._startAt=Qt.set(m,w)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(xn?e._startAt.revert(Tc):e._startAt.render(-1,!0)),e._zTime=t,!a)n(e._startAt,Pt,Pt);else if(!t)return}for(e._pt=e._ptCache=0,l=g&&Zn(l)||l&&!g,R=0;R<m.length;R++){if(v=m[R],F=v._gsap||Yd(m)[R]._gsap,e._ptLookup[R]=$={},Qf[F.id]&&ds.length&&Kc(),Q=M===m?R:M.indexOf(v),k&&(H=new k).init(v,W||b,e,Q,M)!==!1&&(e._pt=U=new Qn(e._pt,v,H.name,0,1,H.render,H,0,H.priority),H._props.forEach(function(Y){$[Y]=U}),H.priority&&(E=1)),!k||W)for(w in b)di[w]&&(H=W0(w,b,e,Q,v,M))?H.priority&&(E=1):$[w]=U=Kd.call(e,v,w,"get",b[w],Q,M,0,r.stringFilter);e._op&&e._op[R]&&e.kill(v,e._op[R]),y&&e._pt&&(os=e,zt.killTweensOf(v,$,e.globalTime(t)),V=!e.parent,os=0),e._pt&&l&&(Qf[F.id]=1)}E&&j0(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!V,h&&t<=0&&S.render(Di,!0,!0)},Py=function(e,t,i,r,s,o,a,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,f,h,d;if(!c)for(c=e._ptCache[t]=[],h=e._ptLookup,d=e._targets.length;d--;){if(u=h[d][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return sh=1,e.vars[t]="+=0",jd(e,a),sh=0,l?hl(t+" not eligible for reset"):1;c.push(u)}for(d=c.length;d--;)f=c[d],u=f._pt||f,u.s=(r||r===0)&&!s?r:u.s+(r||0)+o*u.c,u.c=i-u.s,f.e&&(f.e=qt(i)+Tn(f.e)),f.b&&(f.b=u.s+Tn(f.b))},Dy=function(e,t){var i=e[0]?Ks(e[0]).harness:0,r=i&&i.aliases,s,o,a,l;if(!r)return t;s=Qo({},t);for(o in r)if(o in s)for(l=r[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},Iy=function(e,t,i,r){var s=t.ease||r||"power1.inOut",o,a;if(Cn(t))a=i[e]||(i[e]=[]),t.forEach(function(l,c){return a.push({t:c/(t.length-1)*100,v:l,e:s})});else for(o in t)a=i[o]||(i[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},$a=function(e,t,i,r,s){return Wt(e)?e.call(t,i,r,s):pn(e)&&~e.indexOf("random(")?pl(e):e},X0=qd+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",q0={};Jn(X0+",id,stagger,delay,duration,paused,scrollTrigger",function(n){return q0[n]=1});var Qt=(function(n){f0(e,n);function e(i,r,s,o){var a;typeof r=="number"&&(s.duration=r,r=s,s=null),a=n.call(this,o?r:qa(r))||this;var l=a.vars,c=l.duration,u=l.delay,f=l.immediateRender,h=l.stagger,d=l.overwrite,g=l.keyframes,_=l.defaults,m=l.scrollTrigger,p=l.yoyoEase,M=r.parent||zt,y=(Cn(i)||d0(i)?zr(i[0]):"length"in r)?[i]:Ii(i),S,b,R,w,U,v,E,F;if(a._targets=y.length?Yd(y):hl("GSAP target "+i+" not found. https://gsap.com",!Si.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=d,g||h||zl(c)||zl(u)){if(r=a.vars,S=a.timeline=new Hn({data:"nested",defaults:_||{},targets:M&&M.data==="nested"?M.vars.targets:y}),S.kill(),S.parent=S._dp=Er(a),S._start=0,h||zl(c)||zl(u)){if(w=y.length,E=h&&P0(h),fr(h))for(U in h)~X0.indexOf(U)&&(F||(F={}),F[U]=h[U]);for(b=0;b<w;b++)R=jc(r,q0),R.stagger=0,p&&(R.yoyoEase=p),F&&Qo(R,F),v=y[b],R.duration=+$a(c,Er(a),b,v,y),R.delay=(+$a(u,Er(a),b,v,y)||0)-a._delay,!h&&w===1&&R.delay&&(a._delay=u=R.delay,a._start+=u,R.delay=0),S.to(v,R,E?E(b,v,y):0),S._ease=ut.none;S.duration()?c=u=0:a.timeline=0}else if(g){qa(yi(S.vars.defaults,{ease:"none"})),S._ease=Zs(g.ease||r.ease||"none");var k=0,H,$,Q;if(Cn(g))g.forEach(function(W){return S.to(y,W,">")}),S.duration();else{R={};for(U in g)U==="ease"||U==="easeEach"||Iy(U,g[U],R,g.easeEach);for(U in R)for(H=R[U].sort(function(W,V){return W.t-V.t}),k=0,b=0;b<H.length;b++)$=H[b],Q={ease:$.e,duration:($.t-(b?H[b-1].t:0))/100*c},Q[U]=$.v,S.to(y,Q,k),k+=Q.duration;S.duration()<c&&S.to({},{duration:c-S.duration()})}}c||a.duration(c=S.duration())}else a.timeline=0;return d===!0&&!kd&&(os=Er(a),zt.killTweensOf(y),os=0),er(M,Er(a),s),r.reversed&&a.reverse(),r.paused&&a.paused(!0),(f||!c&&!g&&a._start===Bt(M._time)&&Zn(f)&&cy(Er(a))&&M.data!=="nested")&&(a._tTime=-Pt,a.render(Math.max(0,-u)||0)),m&&A0(Er(a),m),a}var t=e.prototype;return t.render=function(r,s,o){var a=this._time,l=this._tDur,c=this._dur,u=r<0,f=r>l-Pt&&!u?l:r<Pt?0:r,h,d,g,_,m,p,M,y,S;if(!c)fy(this,r,s,o);else if(f!==this._tTime||!r||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(h=f,y=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(_*100+r,s,o);if(h=Bt(f%_),f===l?(g=this._repeat,h=c):(m=Bt(f/_),g=~~m,g&&g===m?(h=c,g--):h>c&&(h=c)),p=this._yoyo&&g&1,p&&(S=this._yEase,h=c-h),m=ea(this._tTime,_),h===a&&!o&&this._initted&&g===m)return this._tTime=f,this;g!==m&&(y&&this._yEase&&V0(y,p),this.vars.repeatRefresh&&!p&&!this._lock&&h!==_&&this._initted&&(this._lock=o=1,this.render(Bt(_*g),!0).invalidate()._lock=0))}if(!this._initted){if(w0(this,u?r:h,o,s,f))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&g!==m))return this;if(c!==this._dur)return this.render(r,s,o)}if(this._tTime=f,this._time=h,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=M=(S||this._ease)(h/c),this._from&&(this.ratio=M=1-M),!a&&f&&!s&&!m&&(xi(this,"onStart"),this._tTime!==f))return this;for(d=this._pt;d;)d.r(M,d.d),d=d._next;y&&y.render(r<0?r:y._dur*y._ease(h/this._dur),s,o)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(u&&eh(this,r,s,o),xi(this,"onUpdate")),this._repeat&&g!==m&&this.vars.onRepeat&&!s&&this.parent&&xi(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(u&&!this._onUpdate&&eh(this,r,!0,!0),(r||!c)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&xs(this,1),!s&&!(u&&!a)&&(f||a||p)&&(xi(this,f===l?"onComplete":"onReverseComplete",!0),this._prom&&!(f<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),n.prototype.invalidate.call(this,r)},t.resetTo=function(r,s,o,a,l){ml||mi.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||jd(this,c),u=this._ease(c/this._dur),Py(this,r,s,o,a,u,c,l)?this.resetTo(r,s,o,a,1):(Mu(this,0),this.parent||b0(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Ca(this):this.scrollTrigger&&this.scrollTrigger.kill(!!xn),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,os&&os.vars.overwrite!==!0)._first||Ca(this),this.parent&&o!==this.timeline.totalDuration()&&ta(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=r?Ii(r):a,c=this._ptLookup,u=this._pt,f,h,d,g,_,m,p;if((!s||s==="all")&&ay(a,l))return s==="all"&&(this._pt=0),Ca(this);for(f=this._op=this._op||[],s!=="all"&&(pn(s)&&(_={},Jn(s,function(M){return _[M]=1}),s=_),s=Dy(a,s)),p=a.length;p--;)if(~l.indexOf(a[p])){h=c[p],s==="all"?(f[p]=s,g=h,d={}):(d=f[p]=f[p]||{},g=s);for(_ in g)m=h&&h[_],m&&((!("kill"in m.d)||m.d.kill(_)===!0)&&vu(this,m,"_pt"),delete h[_]),d!=="all"&&(d[_]=1)}return this._initted&&!this._pt&&u&&Ca(this),this},e.to=function(r,s){return new e(r,s,arguments[2])},e.from=function(r,s){return Ya(1,arguments)},e.delayedCall=function(r,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(r,s,o){return Ya(2,arguments)},e.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(r,s)},e.killTweensOf=function(r,s,o){return zt.killTweensOf(r,s,o)},e})(_l);yi(Qt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Jn("staggerTo,staggerFrom,staggerFromTo",function(n){Qt[n]=function(){var e=new Hn,t=nh.call(arguments,0);return t.splice(n==="staggerFromTo"?5:4,0,0),e[n].apply(e,t)}});var Zd=function(e,t,i){return e[t]=i},Y0=function(e,t,i){return e[t](i)},Ly=function(e,t,i,r){return e[t](r.fp,i)},Ny=function(e,t,i){return e.setAttribute(t,i)},Jd=function(e,t){return Wt(e[t])?Y0:Vd(e[t])&&e.setAttribute?Ny:Zd},$0=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},Uy=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},K0=function(e,t){var i=t._pt,r="";if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;i;)r=i.p+(i.m?i.m(i.s+i.c*e):Math.round((i.s+i.c*e)*1e4)/1e4)+r,i=i._next;r+=t.c}t.set(t.t,t.p,r,t)},Qd=function(e,t){for(var i=t._pt;i;)i.r(e,i.d),i=i._next},Fy=function(e,t,i,r){for(var s=this._pt,o;s;)o=s._next,s.p===r&&s.modifier(e,t,i),s=o},Oy=function(e){for(var t=this._pt,i,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?vu(this,t,"_pt"):t.dep||(i=1),t=r;return!i},By=function(e,t,i,r){r.mSet(e,t,r.m.call(r.tween,i,r.mt),r)},j0=function(e){for(var t=e._pt,i,r,s,o;t;){for(i=t._next,r=s;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:o)?t._prev._next=t:s=t,(t._next=r)?r._prev=t:o=t,t=i}e._pt=s},Qn=(function(){function n(t,i,r,s,o,a,l,c,u){this.t=i,this.s=s,this.c=o,this.p=r,this.r=a||$0,this.d=l||this,this.set=c||Zd,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=n.prototype;return e.modifier=function(i,r,s){this.mSet=this.mSet||this.set,this.set=By,this.m=i,this.mt=s,this.tween=r},n})();Jn(qd+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(n){return Xd[n]=1});Mi.TweenMax=Mi.TweenLite=Qt;Mi.TimelineLite=Mi.TimelineMax=Hn;zt=new Hn({sortChildren:!1,defaults:Jo,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Si.stringFilter=z0;var Js=[],wc={},zy=[],am=0,ky=0,qu=function(e){return(wc[e]||zy).map(function(t){return t()})},oh=function(){var e=Date.now(),t=[];e-am>2&&(qu("matchMediaInit"),Js.forEach(function(i){var r=i.queries,s=i.conditions,o,a,l,c;for(a in r)o=Ki.matchMedia(r[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(i.revert(),l&&t.push(i))}),qu("matchMediaRevert"),t.forEach(function(i){return i.onMatch(i,function(r){return i.add(null,r)})}),am=e,qu("matchMedia"))},Z0=(function(){function n(t,i){this.selector=i&&ih(i),this.data=[],this._r=[],this.isReverted=!1,this.id=ky++,t&&this.add(t)}var e=n.prototype;return e.add=function(i,r,s){Wt(i)&&(s=r,r=i,i=Wt);var o=this,a=function(){var c=Ft,u=o.selector,f;return c&&c!==o&&c.data.push(o),s&&(o.selector=ih(s)),Ft=o,f=r.apply(o,arguments),Wt(f)&&o._r.push(f),Ft=c,o.selector=u,o.isReverted=!1,f};return o.last=a,i===Wt?a(o,function(l){return o.add(null,l)}):i?o[i]=a:a},e.ignore=function(i){var r=Ft;Ft=null,i(this),Ft=r},e.getTweens=function(){var i=[];return this.data.forEach(function(r){return r instanceof n?i.push.apply(i,r.getTweens()):r instanceof Qt&&!(r.parent&&r.parent.data==="nested")&&i.push(r)}),i},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(i,r){var s=this;if(i?(function(){for(var a=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return a.splice(a.indexOf(u),1)}));for(a.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,f){return f.g-u.g||-1/0}).forEach(function(u){return u.t.revert(i)}),l=s.data.length;l--;)c=s.data[l],c instanceof Hn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Qt)&&c.revert&&c.revert(i);s._r.forEach(function(u){return u(i,s)}),s.isReverted=!0})():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),r)for(var o=Js.length;o--;)Js[o].id===this.id&&Js.splice(o,1)},e.revert=function(i){this.kill(i||{})},n})(),Vy=(function(){function n(t){this.contexts=[],this.scope=t,Ft&&Ft.data.push(this)}var e=n.prototype;return e.add=function(i,r,s){fr(i)||(i={matches:i});var o=new Z0(0,s||this.scope),a=o.conditions={},l,c,u;Ft&&!o.selector&&(o.selector=Ft.selector),this.contexts.push(o),r=o.add("onMatch",r),o.queries=i;for(c in i)c==="all"?u=1:(l=Ki.matchMedia(i[c]),l&&(Js.indexOf(o)<0&&Js.push(o),(a[c]=l.matches)&&(u=1),l.addListener?l.addListener(oh):l.addEventListener("change",oh)));return u&&r(o,function(f){return o.add(null,f)}),this},e.revert=function(i){this.kill(i||{})},e.kill=function(i){this.contexts.forEach(function(r){return r.kill(i,!0)})},n})(),Jc={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];t.forEach(function(r){return F0(r)})},timeline:function(e){return new Hn(e)},getTweensOf:function(e,t){return zt.getTweensOf(e,t)},getProperty:function(e,t,i,r){pn(e)&&(e=Ii(e)[0]);var s=Ks(e||{}).get,o=i?E0:y0;return i==="native"&&(i=""),e&&(t?o((di[t]&&di[t].get||s)(e,t,i,r)):function(a,l,c){return o((di[a]&&di[a].get||s)(e,a,l,c))})},quickSetter:function(e,t,i){if(e=Ii(e),e.length>1){var r=e.map(function(u){return ii.quickSetter(u,t,i)}),s=r.length;return function(u){for(var f=s;f--;)r[f](u)}}e=e[0]||{};var o=di[t],a=Ks(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=o?function(u){var f=new o;No._pt=0,f.init(e,i?u+i:u,No,0,[e]),f.render(1,f),No._pt&&Qd(1,No)}:a.set(e,l);return o?c:function(u){return c(e,l,i?u+i:u,a,1)}},quickTo:function(e,t,i){var r,s=ii.to(e,yi((r={},r[t]="+=0.1",r.paused=!0,r.stagger=0,r),i||{})),o=function(l,c,u){return s.resetTo(t,l,c,u)};return o.tween=s,o},isTweening:function(e){return zt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Zs(e.ease,Jo.ease)),nm(Jo,e||{})},config:function(e){return nm(Si,e||{})},registerEffect:function(e){var t=e.name,i=e.effect,r=e.plugins,s=e.defaults,o=e.extendTimeline;(r||"").split(",").forEach(function(a){return a&&!di[a]&&!Mi[a]&&hl(t+" effect requires "+a+" plugin.")}),Gu[t]=function(a,l,c){return i(Ii(a),yi(l||{},s),c)},o&&(Hn.prototype[t]=function(a,l,c){return this.add(Gu[t](a,fr(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){ut[e]=Zs(t)},parseEase:function(e,t){return arguments.length?Zs(e,t):ut},getById:function(e){return zt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var i=new Hn(e),r,s;for(i.smoothChildTiming=Zn(e.smoothChildTiming),zt.remove(i),i._dp=0,i._time=i._tTime=zt._time,r=zt._first;r;)s=r._next,(t||!(!r._dur&&r instanceof Qt&&r.vars.onComplete===r._targets[0]))&&er(i,r,r._start-r._delay),r=s;return er(zt,i,0),i},context:function(e,t){return e?new Z0(e,t):Ft},matchMedia:function(e){return new Vy(e)},matchMediaRefresh:function(){return Js.forEach(function(e){var t=e.conditions,i,r;for(r in t)t[r]&&(t[r]=!1,i=1);i&&e.revert()})||oh()},addEventListener:function(e,t){var i=wc[e]||(wc[e]=[]);~i.indexOf(t)||i.push(t)},removeEventListener:function(e,t){var i=wc[e],r=i&&i.indexOf(t);r>=0&&i.splice(r,1)},utils:{wrap:vy,wrapYoyo:Sy,distribute:P0,random:I0,snap:D0,normalize:xy,getUnit:Tn,clamp:py,splitColor:O0,toArray:Ii,selector:ih,mapRange:N0,pipe:_y,unitize:gy,interpolate:My,shuffle:C0},install:g0,effects:Gu,ticker:mi,updateRoot:Hn.updateRoot,plugins:di,globalTimeline:zt,core:{PropTween:Qn,globals:x0,Tween:Qt,Timeline:Hn,Animation:_l,getCache:Ks,_removeLinkedListItem:vu,reverting:function(){return xn},context:function(e){return e&&Ft&&(Ft.data.push(e),e._ctx=Ft),Ft},suppressOverwrites:function(e){return kd=e}}};Jn("to,from,fromTo,delayedCall,set,killTweensOf",function(n){return Jc[n]=Qt[n]});mi.add(Hn.updateRoot);No=Jc.to({},{duration:0});var Gy=function(e,t){for(var i=e._pt;i&&i.p!==t&&i.op!==t&&i.fp!==t;)i=i._next;return i},Hy=function(e,t){var i=e._targets,r,s,o;for(r in t)for(s=i.length;s--;)o=e._ptLookup[s][r],o&&(o=o.d)&&(o._pt&&(o=Gy(o,r)),o&&o.modifier&&o.modifier(t[r],e,i[s],r))},Yu=function(e,t){return{name:e,headless:1,rawVars:1,init:function(r,s,o){o._onInit=function(a){var l,c;if(pn(s)&&(l={},Jn(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}Hy(a,s)}}}},ii=Jc.registerPlugin({name:"attr",init:function(e,t,i,r,s){var o,a,l;this.tween=i;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],r,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var i=t._pt;i;)xn?i.set(i.t,i.p,i.b,i):i.r(e,i.d),i=i._next}},{name:"endArray",headless:1,init:function(e,t){for(var i=t.length;i--;)this.add(e,i,e[i]||0,t[i],0,0,0,0,0,1)}},Yu("roundProps",rh),Yu("modifiers"),Yu("snap",D0))||Jc;Qt.version=Hn.version=ii.version="3.14.2";_0=1;Gd()&&na();ut.Power0;ut.Power1;ut.Power2;ut.Power3;ut.Power4;ut.Linear;ut.Quad;ut.Cubic;ut.Quart;ut.Quint;ut.Strong;ut.Elastic;ut.Back;ut.SteppedEase;ut.Bounce;ut.Sine;ut.Expo;ut.Circ;var lm,as,Ho,ep,Hs,cm,tp,Wy=function(){return typeof window<"u"},kr={},Os=180/Math.PI,Wo=Math.PI/180,fo=Math.atan2,um=1e8,np=/([A-Z])/g,Xy=/(left|right|width|margin|padding|x)/i,qy=/[\s,\(]\S/,nr={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},ah=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Yy=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},$y=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Ky=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},jy=function(e,t){var i=t.s+t.c*e;t.set(t.t,t.p,~~(i+(i<0?-.5:.5))+t.u,t)},J0=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Q0=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},Zy=function(e,t,i){return e.style[t]=i},Jy=function(e,t,i){return e.style.setProperty(t,i)},Qy=function(e,t,i){return e._gsap[t]=i},eE=function(e,t,i){return e._gsap.scaleX=e._gsap.scaleY=i},tE=function(e,t,i,r,s){var o=e._gsap;o.scaleX=o.scaleY=i,o.renderTransform(s,o)},nE=function(e,t,i,r,s){var o=e._gsap;o[t]=i,o.renderTransform(s,o)},kt="transform",ei=kt+"Origin",iE=function n(e,t){var i=this,r=this.target,s=r.style,o=r._gsap;if(e in kr&&s){if(this.tfm=this.tfm||{},e!=="transform")e=nr[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return i.tfm[a]=br(r,a)}):this.tfm[e]=o.x?o[e]:br(r,e),e===ei&&(this.tfm.zOrigin=o.zOrigin);else return nr.transform.split(",").forEach(function(a){return n.call(i,a,t)});if(this.props.indexOf(kt)>=0)return;o.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(ei,t,"")),e=kt}(s||t)&&this.props.push(e,t,s[e])},ex=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},rE=function(){var e=this.props,t=this.target,i=t.style,r=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?i[e[s]]=e[s+2]:i.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(np,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)r[o]=this.tfm[o];r.svg&&(r.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=tp(),(!s||!s.isStart)&&!i[kt]&&(ex(i),r.zOrigin&&i[ei]&&(i[ei]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},tx=function(e,t){var i={target:e,props:[],revert:rE,save:iE};return e._gsap||ii.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(r){return i.save(r)}),i},nx,lh=function(e,t){var i=as.createElementNS?as.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):as.createElement(e);return i&&i.style?i:as.createElement(e)},vi=function n(e,t,i){var r=getComputedStyle(e);return r[t]||r.getPropertyValue(t.replace(np,"-$1").toLowerCase())||r.getPropertyValue(t)||!i&&n(e,ia(t)||t,1)||""},fm="O,Moz,ms,Ms,Webkit".split(","),ia=function(e,t,i){var r=t||Hs,s=r.style,o=5;if(e in s&&!i)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(fm[o]+e in s););return o<0?null:(o===3?"ms":o>=0?fm[o]:"")+e},ch=function(){Wy()&&window.document&&(lm=window,as=lm.document,Ho=as.documentElement,Hs=lh("div")||{style:{}},lh("div"),kt=ia(kt),ei=kt+"Origin",Hs.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",nx=!!ia("perspective"),tp=ii.core.reverting,ep=1)},hm=function(e){var t=e.ownerSVGElement,i=lh("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),r=e.cloneNode(!0),s;r.style.display="block",i.appendChild(r),Ho.appendChild(i);try{s=r.getBBox()}catch{}return i.removeChild(r),Ho.removeChild(i),s},dm=function(e,t){for(var i=t.length;i--;)if(e.hasAttribute(t[i]))return e.getAttribute(t[i])},ix=function(e){var t,i;try{t=e.getBBox()}catch{t=hm(e),i=1}return t&&(t.width||t.height)||i||(t=hm(e)),t&&!t.width&&!t.x&&!t.y?{x:+dm(e,["x","cx","x1"])||0,y:+dm(e,["y","cy","y1"])||0,width:0,height:0}:t},rx=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&ix(e))},vs=function(e,t){if(t){var i=e.style,r;t in kr&&t!==ei&&(t=kt),i.removeProperty?(r=t.substr(0,2),(r==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),i.removeProperty(r==="--"?t:t.replace(np,"-$1").toLowerCase())):i.removeAttribute(t)}},ls=function(e,t,i,r,s,o){var a=new Qn(e._pt,t,i,0,1,o?Q0:J0);return e._pt=a,a.b=r,a.e=s,e._props.push(i),a},pm={deg:1,rad:1,turn:1},sE={grid:1,flex:1},Ss=function n(e,t,i,r){var s=parseFloat(i)||0,o=(i+"").trim().substr((s+"").length)||"px",a=Hs.style,l=Xy.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),f=100,h=r==="px",d=r==="%",g,_,m,p;if(r===o||!s||pm[r]||pm[o])return s;if(o!=="px"&&!h&&(s=n(e,t,i,"px")),p=e.getCTM&&rx(e),(d||o==="%")&&(kr[t]||~t.indexOf("adius")))return g=p?e.getBBox()[l?"width":"height"]:e[u],qt(d?s/g*f:s/100*g);if(a[l?"width":"height"]=f+(h?o:r),_=r!=="rem"&&~t.indexOf("adius")||r==="em"&&e.appendChild&&!c?e:e.parentNode,p&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===as||!_.appendChild)&&(_=as.body),m=_._gsap,m&&d&&m.width&&l&&m.time===mi.time&&!m.uncache)return qt(s/m.width*f);if(d&&(t==="height"||t==="width")){var M=e.style[t];e.style[t]=f+r,g=e[u],M?e.style[t]=M:vs(e,t)}else(d||o==="%")&&!sE[vi(_,"display")]&&(a.position=vi(e,"position")),_===e&&(a.position="static"),_.appendChild(Hs),g=Hs[u],_.removeChild(Hs),a.position="absolute";return l&&d&&(m=Ks(_),m.time=mi.time,m.width=_[u]),qt(h?g*s/f:g&&s?f/g*s:0)},br=function(e,t,i,r){var s;return ep||ch(),t in nr&&t!=="transform"&&(t=nr[t],~t.indexOf(",")&&(t=t.split(",")[0])),kr[t]&&t!=="transform"?(s=xl(e,r),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:eu(vi(e,ei))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=Qc[t]&&Qc[t](e,t,i)||vi(e,t)||S0(e,t)||(t==="opacity"?1:0))),i&&!~(s+"").trim().indexOf(" ")?Ss(e,t,s,i)+i:s},oE=function(e,t,i,r){if(!i||i==="none"){var s=ia(t,e,1),o=s&&vi(e,s,1);o&&o!==i?(t=s,i=o):t==="borderColor"&&(i=vi(e,"borderTopColor"))}var a=new Qn(this._pt,e.style,t,0,1,K0),l=0,c=0,u,f,h,d,g,_,m,p,M,y,S,b;if(a.b=i,a.e=r,i+="",r+="",r.substring(0,6)==="var(--"&&(r=vi(e,r.substring(4,r.indexOf(")")))),r==="auto"&&(_=e.style[t],e.style[t]=r,r=vi(e,t)||r,_?e.style[t]=_:vs(e,t)),u=[i,r],z0(u),i=u[0],r=u[1],h=i.match(Lo)||[],b=r.match(Lo)||[],b.length){for(;f=Lo.exec(r);)m=f[0],M=r.substring(l,f.index),g?g=(g+1)%5:(M.substr(-5)==="rgba("||M.substr(-5)==="hsla(")&&(g=1),m!==(_=h[c++]||"")&&(d=parseFloat(_)||0,S=_.substr((d+"").length),m.charAt(1)==="="&&(m=Go(d,m)+S),p=parseFloat(m),y=m.substr((p+"").length),l=Lo.lastIndex-y.length,y||(y=y||Si.units[t]||S,l===r.length&&(r+=y,a.e+=y)),S!==y&&(d=Ss(e,t,_,y)||0),a._pt={_next:a._pt,p:M||c===1?M:",",s:d,c:p-d,m:g&&g<4||t==="zIndex"?Math.round:0});a.c=l<r.length?r.substring(l,r.length):""}else a.r=t==="display"&&r==="none"?Q0:J0;return m0.test(r)&&(a.e=0),this._pt=a,a},mm={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},aE=function(e){var t=e.split(" "),i=t[0],r=t[1]||"50%";return(i==="top"||i==="bottom"||r==="left"||r==="right")&&(e=i,i=r,r=e),t[0]=mm[i]||i,t[1]=mm[r]||r,t.join(" ")},lE=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var i=t.t,r=i.style,s=t.u,o=i._gsap,a,l,c;if(s==="all"||s===!0)r.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],kr[a]&&(l=1,a=a==="transformOrigin"?ei:kt),vs(i,a);l&&(vs(i,kt),o&&(o.svg&&i.removeAttribute("transform"),r.scale=r.rotate=r.translate="none",xl(i,1),o.uncache=1,ex(r)))}},Qc={clearProps:function(e,t,i,r,s){if(s.data!=="isFromStart"){var o=e._pt=new Qn(e._pt,t,i,0,0,lE);return o.u=r,o.pr=-10,o.tween=s,e._props.push(i),1}}},gl=[1,0,0,1,0,0],sx={},ox=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},_m=function(e){var t=vi(e,kt);return ox(t)?gl:t.substr(7).match(p0).map(qt)},ip=function(e,t){var i=e._gsap||Ks(e),r=e.style,s=_m(e),o,a,l,c;return i.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?gl:s):(s===gl&&!e.offsetParent&&e!==Ho&&!i.svg&&(l=r.display,r.display="block",o=e.parentNode,(!o||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,a=e.nextElementSibling,Ho.appendChild(e)),s=_m(e),l?r.display=l:vs(e,"display"),c&&(a?o.insertBefore(e,a):o?o.appendChild(e):Ho.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},uh=function(e,t,i,r,s,o){var a=e._gsap,l=s||ip(e,!0),c=a.xOrigin||0,u=a.yOrigin||0,f=a.xOffset||0,h=a.yOffset||0,d=l[0],g=l[1],_=l[2],m=l[3],p=l[4],M=l[5],y=t.split(" "),S=parseFloat(y[0])||0,b=parseFloat(y[1])||0,R,w,U,v;i?l!==gl&&(w=d*m-g*_)&&(U=S*(m/w)+b*(-_/w)+(_*M-m*p)/w,v=S*(-g/w)+b*(d/w)-(d*M-g*p)/w,S=U,b=v):(R=ix(e),S=R.x+(~y[0].indexOf("%")?S/100*R.width:S),b=R.y+(~(y[1]||y[0]).indexOf("%")?b/100*R.height:b)),r||r!==!1&&a.smooth?(p=S-c,M=b-u,a.xOffset=f+(p*d+M*_)-p,a.yOffset=h+(p*g+M*m)-M):a.xOffset=a.yOffset=0,a.xOrigin=S,a.yOrigin=b,a.smooth=!!r,a.origin=t,a.originIsAbsolute=!!i,e.style[ei]="0px 0px",o&&(ls(o,a,"xOrigin",c,S),ls(o,a,"yOrigin",u,b),ls(o,a,"xOffset",f,a.xOffset),ls(o,a,"yOffset",h,a.yOffset)),e.setAttribute("data-svg-origin",S+" "+b)},xl=function(e,t){var i=e._gsap||new H0(e);if("x"in i&&!t&&!i.uncache)return i;var r=e.style,s=i.scaleX<0,o="px",a="deg",l=getComputedStyle(e),c=vi(e,ei)||"0",u,f,h,d,g,_,m,p,M,y,S,b,R,w,U,v,E,F,k,H,$,Q,W,V,Y,he,L,de,Fe,ze,He,qe;return u=f=h=_=m=p=M=y=S=0,d=g=1,i.svg=!!(e.getCTM&&rx(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[kt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[kt]!=="none"?l[kt]:"")),r.scale=r.rotate=r.translate="none"),w=ip(e,i.svg),i.svg&&(i.uncache?(Y=e.getBBox(),c=i.xOrigin-Y.x+"px "+(i.yOrigin-Y.y)+"px",V=""):V=!t&&e.getAttribute("data-svg-origin"),uh(e,V||c,!!V||i.originIsAbsolute,i.smooth!==!1,w)),b=i.xOrigin||0,R=i.yOrigin||0,w!==gl&&(F=w[0],k=w[1],H=w[2],$=w[3],u=Q=w[4],f=W=w[5],w.length===6?(d=Math.sqrt(F*F+k*k),g=Math.sqrt($*$+H*H),_=F||k?fo(k,F)*Os:0,M=H||$?fo(H,$)*Os+_:0,M&&(g*=Math.abs(Math.cos(M*Wo))),i.svg&&(u-=b-(b*F+R*H),f-=R-(b*k+R*$))):(qe=w[6],ze=w[7],L=w[8],de=w[9],Fe=w[10],He=w[11],u=w[12],f=w[13],h=w[14],U=fo(qe,Fe),m=U*Os,U&&(v=Math.cos(-U),E=Math.sin(-U),V=Q*v+L*E,Y=W*v+de*E,he=qe*v+Fe*E,L=Q*-E+L*v,de=W*-E+de*v,Fe=qe*-E+Fe*v,He=ze*-E+He*v,Q=V,W=Y,qe=he),U=fo(-H,Fe),p=U*Os,U&&(v=Math.cos(-U),E=Math.sin(-U),V=F*v-L*E,Y=k*v-de*E,he=H*v-Fe*E,He=$*E+He*v,F=V,k=Y,H=he),U=fo(k,F),_=U*Os,U&&(v=Math.cos(U),E=Math.sin(U),V=F*v+k*E,Y=Q*v+W*E,k=k*v-F*E,W=W*v-Q*E,F=V,Q=Y),m&&Math.abs(m)+Math.abs(_)>359.9&&(m=_=0,p=180-p),d=qt(Math.sqrt(F*F+k*k+H*H)),g=qt(Math.sqrt(W*W+qe*qe)),U=fo(Q,W),M=Math.abs(U)>2e-4?U*Os:0,S=He?1/(He<0?-He:He):0),i.svg&&(V=e.getAttribute("transform"),i.forceCSS=e.setAttribute("transform","")||!ox(vi(e,kt)),V&&e.setAttribute("transform",V))),Math.abs(M)>90&&Math.abs(M)<270&&(s?(d*=-1,M+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,M+=M<=0?180:-180)),t=t||i.uncache,i.x=u-((i.xPercent=u&&(!t&&i.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*i.xPercent/100:0)+o,i.y=f-((i.yPercent=f&&(!t&&i.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-f)?-50:0)))?e.offsetHeight*i.yPercent/100:0)+o,i.z=h+o,i.scaleX=qt(d),i.scaleY=qt(g),i.rotation=qt(_)+a,i.rotationX=qt(m)+a,i.rotationY=qt(p)+a,i.skewX=M+a,i.skewY=y+a,i.transformPerspective=S+o,(i.zOrigin=parseFloat(c.split(" ")[2])||!t&&i.zOrigin||0)&&(r[ei]=eu(c)),i.xOffset=i.yOffset=0,i.force3D=Si.force3D,i.renderTransform=i.svg?uE:nx?ax:cE,i.uncache=0,i},eu=function(e){return(e=e.split(" "))[0]+" "+e[1]},$u=function(e,t,i){var r=Tn(t);return qt(parseFloat(t)+parseFloat(Ss(e,"x",i+"px",r)))+r},cE=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,ax(e,t)},Rs="0deg",ga="0px",Cs=") ",ax=function(e,t){var i=t||this,r=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.z,c=i.rotation,u=i.rotationY,f=i.rotationX,h=i.skewX,d=i.skewY,g=i.scaleX,_=i.scaleY,m=i.transformPerspective,p=i.force3D,M=i.target,y=i.zOrigin,S="",b=p==="auto"&&e&&e!==1||p===!0;if(y&&(f!==Rs||u!==Rs)){var R=parseFloat(u)*Wo,w=Math.sin(R),U=Math.cos(R),v;R=parseFloat(f)*Wo,v=Math.cos(R),o=$u(M,o,w*v*-y),a=$u(M,a,-Math.sin(R)*-y),l=$u(M,l,U*v*-y+y)}m!==ga&&(S+="perspective("+m+Cs),(r||s)&&(S+="translate("+r+"%, "+s+"%) "),(b||o!==ga||a!==ga||l!==ga)&&(S+=l!==ga||b?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+Cs),c!==Rs&&(S+="rotate("+c+Cs),u!==Rs&&(S+="rotateY("+u+Cs),f!==Rs&&(S+="rotateX("+f+Cs),(h!==Rs||d!==Rs)&&(S+="skew("+h+", "+d+Cs),(g!==1||_!==1)&&(S+="scale("+g+", "+_+Cs),M.style[kt]=S||"translate(0, 0)"},uE=function(e,t){var i=t||this,r=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.rotation,c=i.skewX,u=i.skewY,f=i.scaleX,h=i.scaleY,d=i.target,g=i.xOrigin,_=i.yOrigin,m=i.xOffset,p=i.yOffset,M=i.forceCSS,y=parseFloat(o),S=parseFloat(a),b,R,w,U,v;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=Wo,c*=Wo,b=Math.cos(l)*f,R=Math.sin(l)*f,w=Math.sin(l-c)*-h,U=Math.cos(l-c)*h,c&&(u*=Wo,v=Math.tan(c-u),v=Math.sqrt(1+v*v),w*=v,U*=v,u&&(v=Math.tan(u),v=Math.sqrt(1+v*v),b*=v,R*=v)),b=qt(b),R=qt(R),w=qt(w),U=qt(U)):(b=f,U=h,R=w=0),(y&&!~(o+"").indexOf("px")||S&&!~(a+"").indexOf("px"))&&(y=Ss(d,"x",o,"px"),S=Ss(d,"y",a,"px")),(g||_||m||p)&&(y=qt(y+g-(g*b+_*w)+m),S=qt(S+_-(g*R+_*U)+p)),(r||s)&&(v=d.getBBox(),y=qt(y+r/100*v.width),S=qt(S+s/100*v.height)),v="matrix("+b+","+R+","+w+","+U+","+y+","+S+")",d.setAttribute("transform",v),M&&(d.style[kt]=v)},fE=function(e,t,i,r,s){var o=360,a=pn(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?Os:1),c=l-r,u=r+c+"deg",f,h;return a&&(f=s.split("_")[1],f==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),f==="cw"&&c<0?c=(c+o*um)%o-~~(c/o)*o:f==="ccw"&&c>0&&(c=(c-o*um)%o-~~(c/o)*o)),e._pt=h=new Qn(e._pt,t,i,r,c,Yy),h.e=u,h.u="deg",e._props.push(i),h},gm=function(e,t){for(var i in t)e[i]=t[i];return e},hE=function(e,t,i){var r=gm({},i._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=i.style,a,l,c,u,f,h,d,g;r.svg?(c=i.getAttribute("transform"),i.setAttribute("transform",""),o[kt]=t,a=xl(i,1),vs(i,kt),i.setAttribute("transform",c)):(c=getComputedStyle(i)[kt],o[kt]=t,a=xl(i,1),o[kt]=c);for(l in kr)c=r[l],u=a[l],c!==u&&s.indexOf(l)<0&&(d=Tn(c),g=Tn(u),f=d!==g?Ss(i,l,c,g):parseFloat(c),h=parseFloat(u),e._pt=new Qn(e._pt,a,l,f,h-f,ah),e._pt.u=g||0,e._props.push(l));gm(a,r)};Jn("padding,margin,Width,Radius",function(n,e){var t="Top",i="Right",r="Bottom",s="Left",o=(e<3?[t,i,r,s]:[t+s,t+i,r+i,r+s]).map(function(a){return e<2?n+a:"border"+a+n});Qc[e>1?"border"+n:n]=function(a,l,c,u,f){var h,d;if(arguments.length<4)return h=o.map(function(g){return br(a,g,c)}),d=h.join(" "),d.split(h[0]).length===5?h[0]:d;h=(u+"").split(" "),d={},o.forEach(function(g,_){return d[g]=h[_]=h[_]||h[(_-1)/2|0]}),a.init(l,d,f)}});var lx={name:"css",register:ch,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,i,r,s){var o=this._props,a=e.style,l=i.vars.startAt,c,u,f,h,d,g,_,m,p,M,y,S,b,R,w,U,v;ep||ch(),this.styles=this.styles||tx(e),U=this.styles.props,this.tween=i;for(_ in t)if(_!=="autoRound"&&(u=t[_],!(di[_]&&W0(_,t,i,r,e,s)))){if(d=typeof u,g=Qc[_],d==="function"&&(u=u.call(i,r,e,s),d=typeof u),d==="string"&&~u.indexOf("random(")&&(u=pl(u)),g)g(this,e,_,u,i)&&(w=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(_)+"").trim(),u+="",ps.lastIndex=0,ps.test(c)||(m=Tn(c),p=Tn(u),p?m!==p&&(c=Ss(e,_,c,p)+p):m&&(u+=m)),this.add(a,"setProperty",c,u,r,s,0,0,_),o.push(_),U.push(_,0,a[_]);else if(d!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(i,r,e,s):l[_],pn(c)&&~c.indexOf("random(")&&(c=pl(c)),Tn(c+"")||c==="auto"||(c+=Si.units[_]||Tn(br(e,_))||""),(c+"").charAt(1)==="="&&(c=br(e,_))):c=br(e,_),h=parseFloat(c),M=d==="string"&&u.charAt(1)==="="&&u.substr(0,2),M&&(u=u.substr(2)),f=parseFloat(u),_ in nr&&(_==="autoAlpha"&&(h===1&&br(e,"visibility")==="hidden"&&f&&(h=0),U.push("visibility",0,a.visibility),ls(this,a,"visibility",h?"inherit":"hidden",f?"inherit":"hidden",!f)),_!=="scale"&&_!=="transform"&&(_=nr[_],~_.indexOf(",")&&(_=_.split(",")[0]))),y=_ in kr,y){if(this.styles.save(_),v=u,d==="string"&&u.substring(0,6)==="var(--"){if(u=vi(e,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var E=e.style.perspective;e.style.perspective=u,u=vi(e,"perspective"),E?e.style.perspective=E:vs(e,"perspective")}f=parseFloat(u)}if(S||(b=e._gsap,b.renderTransform&&!t.parseTransform||xl(e,t.parseTransform),R=t.smoothOrigin!==!1&&b.smooth,S=this._pt=new Qn(this._pt,a,kt,0,1,b.renderTransform,b,0,-1),S.dep=1),_==="scale")this._pt=new Qn(this._pt,b,"scaleY",b.scaleY,(M?Go(b.scaleY,M+f):f)-b.scaleY||0,ah),this._pt.u=0,o.push("scaleY",_),_+="X";else if(_==="transformOrigin"){U.push(ei,0,a[ei]),u=aE(u),b.svg?uh(e,u,0,R,0,this):(p=parseFloat(u.split(" ")[2])||0,p!==b.zOrigin&&ls(this,b,"zOrigin",b.zOrigin,p),ls(this,a,_,eu(c),eu(u)));continue}else if(_==="svgOrigin"){uh(e,u,1,R,0,this);continue}else if(_ in sx){fE(this,b,_,h,M?Go(h,M+u):u);continue}else if(_==="smoothOrigin"){ls(this,b,"smooth",b.smooth,u);continue}else if(_==="force3D"){b[_]=u;continue}else if(_==="transform"){hE(this,u,e);continue}}else _ in a||(_=ia(_)||_);if(y||(f||f===0)&&(h||h===0)&&!qy.test(u)&&_ in a)m=(c+"").substr((h+"").length),f||(f=0),p=Tn(u)||(_ in Si.units?Si.units[_]:m),m!==p&&(h=Ss(e,_,c,p)),this._pt=new Qn(this._pt,y?b:a,_,h,(M?Go(h,M+f):f)-h,!y&&(p==="px"||_==="zIndex")&&t.autoRound!==!1?jy:ah),this._pt.u=p||0,y&&v!==u?(this._pt.b=c,this._pt.e=v,this._pt.r=Ky):m!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=$y);else if(_ in a)oE.call(this,e,_,c,M?M+u:u);else if(_ in e)this.add(e,_,c||e[_],M?M+u:u,r,s);else if(_!=="parseTransform"){Wd(_,u);continue}y||(_ in a?U.push(_,0,a[_]):typeof e[_]=="function"?U.push(_,2,e[_]()):U.push(_,1,c||e[_])),o.push(_)}}w&&j0(this)},render:function(e,t){if(t.tween._time||!tp())for(var i=t._pt;i;)i.r(e,i.d),i=i._next;else t.styles.revert()},get:br,aliases:nr,getSetter:function(e,t,i){var r=nr[t];return r&&r.indexOf(",")<0&&(t=r),t in kr&&t!==ei&&(e._gsap.x||br(e,"x"))?i&&cm===i?t==="scale"?eE:Qy:(cm=i||{})&&(t==="scale"?tE:nE):e.style&&!Vd(e.style[t])?Zy:~t.indexOf("-")?Jy:Jd(e,t)},core:{_removeProperty:vs,_getMatrix:ip}};ii.utils.checkPrefix=ia;ii.core.getStyleSaver=tx;(function(n,e,t,i){var r=Jn(n+","+e+","+t,function(s){kr[s]=1});Jn(e,function(s){Si.units[s]="deg",sx[s]=1}),nr[r[13]]=n+","+e,Jn(i,function(s){var o=s.split(":");nr[o[1]]=r[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Jn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(n){Si.units[n]="px"});ii.registerPlugin(lx);var Ar=ii.registerPlugin(lx)||ii;Ar.core.Tween;function dE(n,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}function pE(n,e,t){return e&&dE(n.prototype,e),n}var _n,Rc,_i,cs,us,Xo,cx,Bs,Ka,ux,Cr,Oi,fx,hx=function(){return _n||typeof window<"u"&&(_n=window.gsap)&&_n.registerPlugin&&_n},dx=1,Uo=[],at=[],ar=[],ja=Date.now,fh=function(e,t){return t},mE=function(){var e=Ka.core,t=e.bridge||{},i=e._scrollers,r=e._proxies;i.push.apply(i,at),r.push.apply(r,ar),at=i,ar=r,fh=function(o,a){return t[o](a)}},ms=function(e,t){return~ar.indexOf(e)&&ar[ar.indexOf(e)+1][t]},Za=function(e){return!!~ux.indexOf(e)},Un=function(e,t,i,r,s){return e.addEventListener(t,i,{passive:r!==!1,capture:!!s})},Ln=function(e,t,i,r){return e.removeEventListener(t,i,!!r)},kl="scrollLeft",Vl="scrollTop",hh=function(){return Cr&&Cr.isPressed||at.cache++},tu=function(e,t){var i=function r(s){if(s||s===0){dx&&(_i.history.scrollRestoration="manual");var o=Cr&&Cr.isPressed;s=r.v=Math.round(s)||(Cr&&Cr.iOS?1:0),e(s),r.cacheID=at.cache,o&&fh("ss",s)}else(t||at.cache!==r.cacheID||fh("ref"))&&(r.cacheID=at.cache,r.v=e());return r.v+r.offset};return i.offset=0,e&&i},Wn={s:kl,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:tu(function(n){return arguments.length?_i.scrollTo(n,sn.sc()):_i.pageXOffset||cs[kl]||us[kl]||Xo[kl]||0})},sn={s:Vl,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Wn,sc:tu(function(n){return arguments.length?_i.scrollTo(Wn.sc(),n):_i.pageYOffset||cs[Vl]||us[Vl]||Xo[Vl]||0})},jn=function(e,t){return(t&&t._ctx&&t._ctx.selector||_n.utils.toArray)(e)[0]||(typeof e=="string"&&_n.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},_E=function(e,t){for(var i=t.length;i--;)if(t[i]===e||t[i].contains(e))return!0;return!1},Ms=function(e,t){var i=t.s,r=t.sc;Za(e)&&(e=cs.scrollingElement||us);var s=at.indexOf(e),o=r===sn.sc?1:2;!~s&&(s=at.push(e)-1),at[s+o]||Un(e,"scroll",hh);var a=at[s+o],l=a||(at[s+o]=tu(ms(e,i),!0)||(Za(e)?r:tu(function(c){return arguments.length?e[i]=c:e[i]})));return l.target=e,a||(l.smooth=_n.getProperty(e,"scrollBehavior")==="smooth"),l},dh=function(e,t,i){var r=e,s=e,o=ja(),a=o,l=t||50,c=Math.max(500,l*3),u=function(g,_){var m=ja();_||m-o>l?(s=r,r=g,a=o,o=m):i?r+=g:r=s+(g-s)/(m-a)*(o-a)},f=function(){s=r=i?0:r,a=o=0},h=function(g){var _=a,m=s,p=ja();return(g||g===0)&&g!==r&&u(g),o===a||p-a>c?0:(r+(i?m:-m))/((i?p:o)-_)*1e3};return{update:u,reset:f,getVelocity:h}},xa=function(e,t){return t&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},xm=function(e){var t=Math.max.apply(Math,e),i=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(i)?t:i},px=function(){Ka=_n.core.globals().ScrollTrigger,Ka&&Ka.core&&mE()},mx=function(e){return _n=e||hx(),!Rc&&_n&&typeof document<"u"&&document.body&&(_i=window,cs=document,us=cs.documentElement,Xo=cs.body,ux=[_i,cs,us,Xo],_n.utils.clamp,fx=_n.core.context||function(){},Bs="onpointerenter"in Xo?"pointer":"mouse",cx=$t.isTouch=_i.matchMedia&&_i.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in _i||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Oi=$t.eventTypes=("ontouchstart"in us?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in us?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return dx=0},500),px(),Rc=1),Rc};Wn.op=sn;at.cache=0;var $t=(function(){function n(t){this.init(t)}var e=n.prototype;return e.init=function(i){Rc||mx(_n)||console.warn("Please gsap.registerPlugin(Observer)"),Ka||px();var r=i.tolerance,s=i.dragMinimum,o=i.type,a=i.target,l=i.lineHeight,c=i.debounce,u=i.preventDefault,f=i.onStop,h=i.onStopDelay,d=i.ignore,g=i.wheelSpeed,_=i.event,m=i.onDragStart,p=i.onDragEnd,M=i.onDrag,y=i.onPress,S=i.onRelease,b=i.onRight,R=i.onLeft,w=i.onUp,U=i.onDown,v=i.onChangeX,E=i.onChangeY,F=i.onChange,k=i.onToggleX,H=i.onToggleY,$=i.onHover,Q=i.onHoverEnd,W=i.onMove,V=i.ignoreCheck,Y=i.isNormalizer,he=i.onGestureStart,L=i.onGestureEnd,de=i.onWheel,Fe=i.onEnable,ze=i.onDisable,He=i.onClick,qe=i.scrollSpeed,se=i.capture,O=i.allowClicks,ie=i.lockAxis,oe=i.onLockAxis;this.target=a=jn(a)||us,this.vars=i,d&&(d=_n.utils.toArray(d)),r=r||1e-9,s=s||0,g=g||1,qe=qe||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(_i.getComputedStyle(Xo).lineHeight)||22);var ae,Ee,D,P,z,Z,j,I=this,C=0,fe=0,le=i.passive||!u&&i.passive!==!1,ee=Ms(a,Wn),ce=Ms(a,sn),A=ee(),x=ce(),N=~o.indexOf("touch")&&!~o.indexOf("pointer")&&Oi[0]==="pointerdown",K=Za(a),J=a.ownerDocument||cs,X=[0,0,0],Me=[0,0,0],me=0,Ce=function(){return me=ja()},we=function(Be,Qe){return(I.event=Be)&&d&&_E(Be.target,d)||Qe&&N&&Be.pointerType!=="touch"||V&&V(Be,Qe)},_e=function(){I._vx.reset(),I._vy.reset(),Ee.pause(),f&&f(I)},xe=function(){var Be=I.deltaX=xm(X),Qe=I.deltaY=xm(Me),De=Math.abs(Be)>=r,Ke=Math.abs(Qe)>=r;F&&(De||Ke)&&F(I,Be,Qe,X,Me),De&&(b&&I.deltaX>0&&b(I),R&&I.deltaX<0&&R(I),v&&v(I),k&&I.deltaX<0!=C<0&&k(I),C=I.deltaX,X[0]=X[1]=X[2]=0),Ke&&(U&&I.deltaY>0&&U(I),w&&I.deltaY<0&&w(I),E&&E(I),H&&I.deltaY<0!=fe<0&&H(I),fe=I.deltaY,Me[0]=Me[1]=Me[2]=0),(P||D)&&(W&&W(I),D&&(m&&D===1&&m(I),M&&M(I),D=0),P=!1),Z&&!(Z=!1)&&oe&&oe(I),z&&(de(I),z=!1),ae=0},be=function(Be,Qe,De){X[De]+=Be,Me[De]+=Qe,I._vx.update(Be),I._vy.update(Qe),c?ae||(ae=requestAnimationFrame(xe)):xe()},Pe=function(Be,Qe){ie&&!j&&(I.axis=j=Math.abs(Be)>Math.abs(Qe)?"x":"y",Z=!0),j!=="y"&&(X[2]+=Be,I._vx.update(Be,!0)),j!=="x"&&(Me[2]+=Qe,I._vy.update(Qe,!0)),c?ae||(ae=requestAnimationFrame(xe)):xe()},ve=function(Be){if(!we(Be,1)){Be=xa(Be,u);var Qe=Be.clientX,De=Be.clientY,Ke=Qe-I.x,Ve=De-I.y,je=I.isDragging;I.x=Qe,I.y=De,(je||(Ke||Ve)&&(Math.abs(I.startX-Qe)>=s||Math.abs(I.startY-De)>=s))&&(D||(D=je?2:1),je||(I.isDragging=!0),Pe(Ke,Ve))}},Ye=I.onPress=function(Le){we(Le,1)||Le&&Le.button||(I.axis=j=null,Ee.pause(),I.isPressed=!0,Le=xa(Le),C=fe=0,I.startX=I.x=Le.clientX,I.startY=I.y=Le.clientY,I._vx.reset(),I._vy.reset(),Un(Y?a:J,Oi[1],ve,le,!0),I.deltaX=I.deltaY=0,y&&y(I))},B=I.onRelease=function(Le){if(!we(Le,1)){Ln(Y?a:J,Oi[1],ve,!0);var Be=!isNaN(I.y-I.startY),Qe=I.isDragging,De=Qe&&(Math.abs(I.x-I.startX)>3||Math.abs(I.y-I.startY)>3),Ke=xa(Le);!De&&Be&&(I._vx.reset(),I._vy.reset(),u&&O&&_n.delayedCall(.08,function(){if(ja()-me>300&&!Le.defaultPrevented){if(Le.target.click)Le.target.click();else if(J.createEvent){var Ve=J.createEvent("MouseEvents");Ve.initMouseEvent("click",!0,!0,_i,1,Ke.screenX,Ke.screenY,Ke.clientX,Ke.clientY,!1,!1,!1,!1,0,null),Le.target.dispatchEvent(Ve)}}})),I.isDragging=I.isGesturing=I.isPressed=!1,f&&Qe&&!Y&&Ee.restart(!0),D&&xe(),p&&Qe&&p(I),S&&S(I,De)}},Te=function(Be){return Be.touches&&Be.touches.length>1&&(I.isGesturing=!0)&&he(Be,I.isDragging)},ge=function(){return(I.isGesturing=!1)||L(I)},Ae=function(Be){if(!we(Be)){var Qe=ee(),De=ce();be((Qe-A)*qe,(De-x)*qe,1),A=Qe,x=De,f&&Ee.restart(!0)}},pe=function(Be){if(!we(Be)){Be=xa(Be,u),de&&(z=!0);var Qe=(Be.deltaMode===1?l:Be.deltaMode===2?_i.innerHeight:1)*g;be(Be.deltaX*Qe,Be.deltaY*Qe,0),f&&!Y&&Ee.restart(!0)}},ue=function(Be){if(!we(Be)){var Qe=Be.clientX,De=Be.clientY,Ke=Qe-I.x,Ve=De-I.y;I.x=Qe,I.y=De,P=!0,f&&Ee.restart(!0),(Ke||Ve)&&Pe(Ke,Ve)}},ye=function(Be){I.event=Be,$(I)},Ge=function(Be){I.event=Be,Q(I)},ht=function(Be){return we(Be)||xa(Be,u)&&He(I)};Ee=I._dc=_n.delayedCall(h||.25,_e).pause(),I.deltaX=I.deltaY=0,I._vx=dh(0,50,!0),I._vy=dh(0,50,!0),I.scrollX=ee,I.scrollY=ce,I.isDragging=I.isGesturing=I.isPressed=!1,fx(this),I.enable=function(Le){return I.isEnabled||(Un(K?J:a,"scroll",hh),o.indexOf("scroll")>=0&&Un(K?J:a,"scroll",Ae,le,se),o.indexOf("wheel")>=0&&Un(a,"wheel",pe,le,se),(o.indexOf("touch")>=0&&cx||o.indexOf("pointer")>=0)&&(Un(a,Oi[0],Ye,le,se),Un(J,Oi[2],B),Un(J,Oi[3],B),O&&Un(a,"click",Ce,!0,!0),He&&Un(a,"click",ht),he&&Un(J,"gesturestart",Te),L&&Un(J,"gestureend",ge),$&&Un(a,Bs+"enter",ye),Q&&Un(a,Bs+"leave",Ge),W&&Un(a,Bs+"move",ue)),I.isEnabled=!0,I.isDragging=I.isGesturing=I.isPressed=P=D=!1,I._vx.reset(),I._vy.reset(),A=ee(),x=ce(),Le&&Le.type&&Ye(Le),Fe&&Fe(I)),I},I.disable=function(){I.isEnabled&&(Uo.filter(function(Le){return Le!==I&&Za(Le.target)}).length||Ln(K?J:a,"scroll",hh),I.isPressed&&(I._vx.reset(),I._vy.reset(),Ln(Y?a:J,Oi[1],ve,!0)),Ln(K?J:a,"scroll",Ae,se),Ln(a,"wheel",pe,se),Ln(a,Oi[0],Ye,se),Ln(J,Oi[2],B),Ln(J,Oi[3],B),Ln(a,"click",Ce,!0),Ln(a,"click",ht),Ln(J,"gesturestart",Te),Ln(J,"gestureend",ge),Ln(a,Bs+"enter",ye),Ln(a,Bs+"leave",Ge),Ln(a,Bs+"move",ue),I.isEnabled=I.isPressed=I.isDragging=!1,ze&&ze(I))},I.kill=I.revert=function(){I.disable();var Le=Uo.indexOf(I);Le>=0&&Uo.splice(Le,1),Cr===I&&(Cr=0)},Uo.push(I),Y&&Za(a)&&(Cr=I),I.enable(_)},pE(n,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),n})();$t.version="3.14.2";$t.create=function(n){return new $t(n)};$t.register=mx;$t.getAll=function(){return Uo.slice()};$t.getById=function(n){return Uo.filter(function(e){return e.vars.id===n})[0]};hx()&&_n.registerPlugin($t);var Oe,Po,ot,It,pi,_t,rp,nu,vl,Ja,Da,Gl,yn,yu,ph,zn,vm,Sm,Do,_x,Ku,gx,On,mh,xx,vx,Qr,_h,sp,qo,op,Qa,gh,ju,Hl=1,En=Date.now,Zu=En(),Li=0,Ia=0,Mm=function(e,t,i){var r=hi(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return i["_"+t+"Clamp"]=r,r?e.substr(6,e.length-7):e},ym=function(e,t){return t&&(!hi(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},gE=function n(){return Ia&&requestAnimationFrame(n)},Em=function(){return yu=1},bm=function(){return yu=0},ji=function(e){return e},La=function(e){return Math.round(e*1e5)/1e5||0},Sx=function(){return typeof window<"u"},Mx=function(){return Oe||Sx()&&(Oe=window.gsap)&&Oe.registerPlugin&&Oe},no=function(e){return!!~rp.indexOf(e)},yx=function(e){return(e==="Height"?op:ot["inner"+e])||pi["client"+e]||_t["client"+e]},Ex=function(e){return ms(e,"getBoundingClientRect")||(no(e)?function(){return Lc.width=ot.innerWidth,Lc.height=op,Lc}:function(){return wr(e)})},xE=function(e,t,i){var r=i.d,s=i.d2,o=i.a;return(o=ms(e,"getBoundingClientRect"))?function(){return o()[r]}:function(){return(t?yx(s):e["client"+s])||0}},vE=function(e,t){return!t||~ar.indexOf(e)?Ex(e):function(){return Lc}},ir=function(e,t){var i=t.s,r=t.d2,s=t.d,o=t.a;return Math.max(0,(i="scroll"+r)&&(o=ms(e,i))?o()-Ex(e)()[s]:no(e)?(pi[i]||_t[i])-yx(r):e[i]-e["offset"+r])},Wl=function(e,t){for(var i=0;i<Do.length;i+=3)(!t||~t.indexOf(Do[i+1]))&&e(Do[i],Do[i+1],Do[i+2])},hi=function(e){return typeof e=="string"},An=function(e){return typeof e=="function"},Na=function(e){return typeof e=="number"},zs=function(e){return typeof e=="object"},va=function(e,t,i){return e&&e.progress(t?0:1)&&i&&e.pause()},Ju=function(e,t){if(e.enabled){var i=e._ctx?e._ctx.add(function(){return t(e)}):t(e);i&&i.totalTime&&(e.callbackAnimation=i)}},ho=Math.abs,bx="left",Tx="top",ap="right",lp="bottom",Qs="width",eo="height",el="Right",tl="Left",nl="Top",il="Bottom",Jt="padding",wi="margin",ra="Width",cp="Height",rn="px",Ri=function(e){return ot.getComputedStyle(e)},SE=function(e){var t=Ri(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},Tm=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},wr=function(e,t){var i=t&&Ri(e)[ph]!=="matrix(1, 0, 0, 1, 0, 0)"&&Oe.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),r=e.getBoundingClientRect();return i&&i.progress(0).kill(),r},iu=function(e,t){var i=t.d2;return e["offset"+i]||e["client"+i]||0},Ax=function(e){var t=[],i=e.labels,r=e.duration(),s;for(s in i)t.push(i[s]/r);return t},ME=function(e){return function(t){return Oe.utils.snap(Ax(e),t)}},up=function(e){var t=Oe.utils.snap(e),i=Array.isArray(e)&&e.slice(0).sort(function(r,s){return r-s});return i?function(r,s,o){o===void 0&&(o=.001);var a;if(!s)return t(r);if(s>0){for(r-=o,a=0;a<i.length;a++)if(i[a]>=r)return i[a];return i[a-1]}else for(a=i.length,r+=o;a--;)if(i[a]<=r)return i[a];return i[0]}:function(r,s,o){o===void 0&&(o=.001);var a=t(r);return!s||Math.abs(a-r)<o||a-r<0==s<0?a:t(s<0?r-e:r+e)}},yE=function(e){return function(t,i){return up(Ax(e))(t,i.direction)}},Xl=function(e,t,i,r){return i.split(",").forEach(function(s){return e(t,s,r)})},dn=function(e,t,i,r,s){return e.addEventListener(t,i,{passive:!r,capture:!!s})},hn=function(e,t,i,r){return e.removeEventListener(t,i,!!r)},ql=function(e,t,i){i=i&&i.wheelHandler,i&&(e(t,"wheel",i),e(t,"touchmove",i))},Am={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Yl={toggleActions:"play",anticipatePin:0},ru={top:0,left:0,center:.5,bottom:1,right:1},Cc=function(e,t){if(hi(e)){var i=e.indexOf("="),r=~i?+(e.charAt(i-1)+1)*parseFloat(e.substr(i+1)):0;~i&&(e.indexOf("%")>i&&(r*=t/100),e=e.substr(0,i-1)),e=r+(e in ru?ru[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},$l=function(e,t,i,r,s,o,a,l){var c=s.startColor,u=s.endColor,f=s.fontSize,h=s.indent,d=s.fontWeight,g=It.createElement("div"),_=no(i)||ms(i,"pinType")==="fixed",m=e.indexOf("scroller")!==-1,p=_?_t:i,M=e.indexOf("start")!==-1,y=M?c:u,S="border-color:"+y+";font-size:"+f+";color:"+y+";font-weight:"+d+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return S+="position:"+((m||l)&&_?"fixed;":"absolute;"),(m||l||!_)&&(S+=(r===sn?ap:lp)+":"+(o+parseFloat(h))+"px;"),a&&(S+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),g._isStart=M,g.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),g.style.cssText=S,g.innerText=t||t===0?e+"-"+t:e,p.children[0]?p.insertBefore(g,p.children[0]):p.appendChild(g),g._offset=g["offset"+r.op.d2],Pc(g,0,r,M),g},Pc=function(e,t,i,r){var s={display:"block"},o=i[r?"os2":"p2"],a=i[r?"p2":"os2"];e._isFlipped=r,s[i.a+"Percent"]=r?-100:0,s[i.a]=r?"1px":0,s["border"+o+ra]=1,s["border"+a+ra]=0,s[i.p]=t+"px",Oe.set(e,s)},it=[],xh={},Sl,wm=function(){return En()-Li>34&&(Sl||(Sl=requestAnimationFrame(Ir)))},po=function(){(!On||!On.isPressed||On.startX>_t.clientWidth)&&(at.cache++,On?Sl||(Sl=requestAnimationFrame(Ir)):Ir(),Li||ro("scrollStart"),Li=En())},Qu=function(){vx=ot.innerWidth,xx=ot.innerHeight},Ua=function(e){at.cache++,(e===!0||!yn&&!gx&&!It.fullscreenElement&&!It.webkitFullscreenElement&&(!mh||vx!==ot.innerWidth||Math.abs(ot.innerHeight-xx)>ot.innerHeight*.25))&&nu.restart(!0)},io={},EE=[],wx=function n(){return hn(lt,"scrollEnd",n)||Ws(!0)},ro=function(e){return io[e]&&io[e].map(function(t){return t()})||EE},fi=[],Rx=function(e){for(var t=0;t<fi.length;t+=5)(!e||fi[t+4]&&fi[t+4].query===e)&&(fi[t].style.cssText=fi[t+1],fi[t].getBBox&&fi[t].setAttribute("transform",fi[t+2]||""),fi[t+3].uncache=1)},Cx=function(){return at.forEach(function(e){return An(e)&&++e.cacheID&&(e.rec=e())})},fp=function(e,t){var i;for(zn=0;zn<it.length;zn++)i=it[zn],i&&(!t||i._ctx===t)&&(e?i.kill(1):i.revert(!0,!0));Qa=!0,t&&Rx(t),t||ro("revert")},Px=function(e,t){at.cache++,(t||!kn)&&at.forEach(function(i){return An(i)&&i.cacheID++&&(i.rec=0)}),hi(e)&&(ot.history.scrollRestoration=sp=e)},kn,to=0,Rm,bE=function(){if(Rm!==to){var e=Rm=to;requestAnimationFrame(function(){return e===to&&Ws(!0)})}},Dx=function(){_t.appendChild(qo),op=!On&&qo.offsetHeight||ot.innerHeight,_t.removeChild(qo)},Cm=function(e){return vl(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},Ws=function(e,t){if(pi=It.documentElement,_t=It.body,rp=[ot,It,pi,_t],Li&&!e&&!Qa){dn(lt,"scrollEnd",wx);return}Dx(),kn=lt.isRefreshing=!0,Qa||Cx();var i=ro("refreshInit");_x&&lt.sort(),t||fp(),at.forEach(function(r){An(r)&&(r.smooth&&(r.target.style.scrollBehavior="auto"),r(0))}),it.slice(0).forEach(function(r){return r.refresh()}),Qa=!1,it.forEach(function(r){if(r._subPinOffset&&r.pin){var s=r.vars.horizontal?"offsetWidth":"offsetHeight",o=r.pin[s];r.revert(!0,1),r.adjustPinSpacing(r.pin[s]-o),r.refresh()}}),gh=1,Cm(!0),it.forEach(function(r){var s=ir(r.scroller,r._dir),o=r.vars.end==="max"||r._endClamp&&r.end>s,a=r._startClamp&&r.start>=s;(o||a)&&r.setPositions(a?s-1:r.start,o?Math.max(a?s:r.start+1,s):r.end,!0)}),Cm(!1),gh=0,i.forEach(function(r){return r&&r.render&&r.render(-1)}),at.forEach(function(r){An(r)&&(r.smooth&&requestAnimationFrame(function(){return r.target.style.scrollBehavior="smooth"}),r.rec&&r(r.rec))}),Px(sp,1),nu.pause(),to++,kn=2,Ir(2),it.forEach(function(r){return An(r.vars.onRefresh)&&r.vars.onRefresh(r)}),kn=lt.isRefreshing=!1,ro("refresh")},vh=0,Dc=1,rl,Ir=function(e){if(e===2||!kn&&!Qa){lt.isUpdating=!0,rl&&rl.update(0);var t=it.length,i=En(),r=i-Zu>=50,s=t&&it[0].scroll();if(Dc=vh>s?-1:1,kn||(vh=s),r&&(Li&&!yu&&i-Li>200&&(Li=0,ro("scrollEnd")),Da=Zu,Zu=i),Dc<0){for(zn=t;zn-- >0;)it[zn]&&it[zn].update(0,r);Dc=1}else for(zn=0;zn<t;zn++)it[zn]&&it[zn].update(0,r);lt.isUpdating=!1}Sl=0},Sh=[bx,Tx,lp,ap,wi+il,wi+el,wi+nl,wi+tl,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Ic=Sh.concat([Qs,eo,"boxSizing","max"+ra,"max"+cp,"position",wi,Jt,Jt+nl,Jt+el,Jt+il,Jt+tl]),TE=function(e,t,i){Yo(i);var r=e._gsap;if(r.spacerIsNative)Yo(r.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},ef=function(e,t,i,r){if(!e._gsap.swappedIn){for(var s=Sh.length,o=t.style,a=e.style,l;s--;)l=Sh[s],o[l]=i[l];o.position=i.position==="absolute"?"absolute":"relative",i.display==="inline"&&(o.display="inline-block"),a[lp]=a[ap]="auto",o.flexBasis=i.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[Qs]=iu(e,Wn)+rn,o[eo]=iu(e,sn)+rn,o[Jt]=a[wi]=a[Tx]=a[bx]="0",Yo(r),a[Qs]=a["max"+ra]=i[Qs],a[eo]=a["max"+cp]=i[eo],a[Jt]=i[Jt],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},AE=/([A-Z])/g,Yo=function(e){if(e){var t=e.t.style,i=e.length,r=0,s,o;for((e.t._gsap||Oe.core.getCache(e.t)).uncache=1;r<i;r+=2)o=e[r+1],s=e[r],o?t[s]=o:t[s]&&t.removeProperty(s.replace(AE,"-$1").toLowerCase())}},Kl=function(e){for(var t=Ic.length,i=e.style,r=[],s=0;s<t;s++)r.push(Ic[s],i[Ic[s]]);return r.t=e,r},wE=function(e,t,i){for(var r=[],s=e.length,o=i?8:0,a;o<s;o+=2)a=e[o],r.push(a,a in t?t[a]:e[o+1]);return r.t=e.t,r},Lc={left:0,top:0},Pm=function(e,t,i,r,s,o,a,l,c,u,f,h,d,g){An(e)&&(e=e(l)),hi(e)&&e.substr(0,3)==="max"&&(e=h+(e.charAt(4)==="="?Cc("0"+e.substr(3),i):0));var _=d?d.time():0,m,p,M;if(d&&d.seek(0),isNaN(e)||(e=+e),Na(e))d&&(e=Oe.utils.mapRange(d.scrollTrigger.start,d.scrollTrigger.end,0,h,e)),a&&Pc(a,i,r,!0);else{An(t)&&(t=t(l));var y=(e||"0").split(" "),S,b,R,w;M=jn(t,l)||_t,S=wr(M)||{},(!S||!S.left&&!S.top)&&Ri(M).display==="none"&&(w=M.style.display,M.style.display="block",S=wr(M),w?M.style.display=w:M.style.removeProperty("display")),b=Cc(y[0],S[r.d]),R=Cc(y[1]||"0",i),e=S[r.p]-c[r.p]-u+b+s-R,a&&Pc(a,R,r,i-R<20||a._isStart&&R>20),i-=i-R}if(g&&(l[g]=e||-.001,e<0&&(e=0)),o){var U=e+i,v=o._isStart;m="scroll"+r.d2,Pc(o,U,r,v&&U>20||!v&&(f?Math.max(_t[m],pi[m]):o.parentNode[m])<=U+1),f&&(c=wr(a),f&&(o.style[r.op.p]=c[r.op.p]-r.op.m-o._offset+rn))}return d&&M&&(m=wr(M),d.seek(h),p=wr(M),d._caScrollDist=m[r.p]-p[r.p],e=e/d._caScrollDist*h),d&&d.seek(_),d?e:Math.round(e)},RE=/(webkit|moz|length|cssText|inset)/i,Dm=function(e,t,i,r){if(e.parentNode!==t){var s=e.style,o,a;if(t===_t){e._stOrig=s.cssText,a=Ri(e);for(o in a)!+o&&!RE.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=i,s.left=r}else s.cssText=e._stOrig;Oe.core.getCache(e).uncache=1,t.appendChild(e)}},Ix=function(e,t,i){var r=t,s=r;return function(o){var a=Math.round(e());return a!==r&&a!==s&&Math.abs(a-r)>3&&Math.abs(a-s)>3&&(o=a,i&&i()),s=r,r=Math.round(o),r}},jl=function(e,t,i){var r={};r[t.p]="+="+i,Oe.set(e,r)},Im=function(e,t){var i=Ms(e,t),r="_scroll"+t.p2,s=function o(a,l,c,u,f){var h=o.tween,d=l.onComplete,g={};c=c||i();var _=Ix(i,c,function(){h.kill(),o.tween=0});return f=u&&f||0,u=u||a-c,h&&h.kill(),l[r]=a,l.inherit=!1,l.modifiers=g,g[r]=function(){return _(c+u*h.ratio+f*h.ratio*h.ratio)},l.onUpdate=function(){at.cache++,o.tween&&Ir()},l.onComplete=function(){o.tween=0,d&&d.call(h)},h=o.tween=Oe.to(e,l),h};return e[r]=i,i.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},dn(e,"wheel",i.wheelHandler),lt.isTouch&&dn(e,"touchmove",i.wheelHandler),s},lt=(function(){function n(t,i){Po||n.register(Oe)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),_h(this),this.init(t,i)}var e=n.prototype;return e.init=function(i,r){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Ia){this.update=this.refresh=this.kill=ji;return}i=Tm(hi(i)||Na(i)||i.nodeType?{trigger:i}:i,Yl);var s=i,o=s.onUpdate,a=s.toggleClass,l=s.id,c=s.onToggle,u=s.onRefresh,f=s.scrub,h=s.trigger,d=s.pin,g=s.pinSpacing,_=s.invalidateOnRefresh,m=s.anticipatePin,p=s.onScrubComplete,M=s.onSnapComplete,y=s.once,S=s.snap,b=s.pinReparent,R=s.pinSpacer,w=s.containerAnimation,U=s.fastScrollEnd,v=s.preventOverlaps,E=i.horizontal||i.containerAnimation&&i.horizontal!==!1?Wn:sn,F=!f&&f!==0,k=jn(i.scroller||ot),H=Oe.core.getCache(k),$=no(k),Q=("pinType"in i?i.pinType:ms(k,"pinType")||$&&"fixed")==="fixed",W=[i.onEnter,i.onLeave,i.onEnterBack,i.onLeaveBack],V=F&&i.toggleActions.split(" "),Y="markers"in i?i.markers:Yl.markers,he=$?0:parseFloat(Ri(k)["border"+E.p2+ra])||0,L=this,de=i.onRefreshInit&&function(){return i.onRefreshInit(L)},Fe=xE(k,$,E),ze=vE(k,$),He=0,qe=0,se=0,O=Ms(k,E),ie,oe,ae,Ee,D,P,z,Z,j,I,C,fe,le,ee,ce,A,x,N,K,J,X,Me,me,Ce,we,_e,xe,be,Pe,ve,Ye,B,Te,ge,Ae,pe,ue,ye,Ge;if(L._startClamp=L._endClamp=!1,L._dir=E,m*=45,L.scroller=k,L.scroll=w?w.time.bind(w):O,Ee=O(),L.vars=i,r=r||i.animation,"refreshPriority"in i&&(_x=1,i.refreshPriority===-9999&&(rl=L)),H.tweenScroll=H.tweenScroll||{top:Im(k,sn),left:Im(k,Wn)},L.tweenTo=ie=H.tweenScroll[E.p],L.scrubDuration=function(De){Te=Na(De)&&De,Te?B?B.duration(De):B=Oe.to(r,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:Te,paused:!0,onComplete:function(){return p&&p(L)}}):(B&&B.progress(1).kill(),B=0)},r&&(r.vars.lazy=!1,r._initted&&!L.isReverted||r.vars.immediateRender!==!1&&i.immediateRender!==!1&&r.duration()&&r.render(0,!0,!0),L.animation=r.pause(),r.scrollTrigger=L,L.scrubDuration(f),ve=0,l||(l=r.vars.id)),S&&((!zs(S)||S.push)&&(S={snapTo:S}),"scrollBehavior"in _t.style&&Oe.set($?[_t,pi]:k,{scrollBehavior:"auto"}),at.forEach(function(De){return An(De)&&De.target===($?It.scrollingElement||pi:k)&&(De.smooth=!1)}),ae=An(S.snapTo)?S.snapTo:S.snapTo==="labels"?ME(r):S.snapTo==="labelsDirectional"?yE(r):S.directional!==!1?function(De,Ke){return up(S.snapTo)(De,En()-qe<500?0:Ke.direction)}:Oe.utils.snap(S.snapTo),ge=S.duration||{min:.1,max:2},ge=zs(ge)?Ja(ge.min,ge.max):Ja(ge,ge),Ae=Oe.delayedCall(S.delay||Te/2||.1,function(){var De=O(),Ke=En()-qe<500,Ve=ie.tween;if((Ke||Math.abs(L.getVelocity())<10)&&!Ve&&!yu&&He!==De){var je=(De-P)/ee,Xt=r&&!F?r.totalProgress():je,rt=Ke?0:(Xt-Ye)/(En()-Da)*1e3||0,Mt=Oe.utils.clamp(-je,1-je,ho(rt/2)*rt/.185),jt=je+(S.inertia===!1?0:Mt),Ut,wt,dt=S,Xn=dt.onStart,bt=dt.onInterrupt,vn=dt.onComplete;if(Ut=ae(jt,L),Na(Ut)||(Ut=jt),wt=Math.max(0,Math.round(P+Ut*ee)),De<=z&&De>=P&&wt!==De){if(Ve&&!Ve._initted&&Ve.data<=ho(wt-De))return;S.inertia===!1&&(Mt=Ut-je),ie(wt,{duration:ge(ho(Math.max(ho(jt-Xt),ho(Ut-Xt))*.185/rt/.05||0)),ease:S.ease||"power3",data:ho(wt-De),onInterrupt:function(){return Ae.restart(!0)&&bt&&bt(L)},onComplete:function(){L.update(),He=O(),r&&!F&&(B?B.resetTo("totalProgress",Ut,r._tTime/r._tDur):r.progress(Ut)),ve=Ye=r&&!F?r.totalProgress():L.progress,M&&M(L),vn&&vn(L)}},De,Mt*ee,wt-De-Mt*ee),Xn&&Xn(L,ie.tween)}}else L.isActive&&He!==De&&Ae.restart(!0)}).pause()),l&&(xh[l]=L),h=L.trigger=jn(h||d!==!0&&d),Ge=h&&h._gsap&&h._gsap.stRevert,Ge&&(Ge=Ge(L)),d=d===!0?h:jn(d),hi(a)&&(a={targets:h,className:a}),d&&(g===!1||g===wi||(g=!g&&d.parentNode&&d.parentNode.style&&Ri(d.parentNode).display==="flex"?!1:Jt),L.pin=d,oe=Oe.core.getCache(d),oe.spacer?ce=oe.pinState:(R&&(R=jn(R),R&&!R.nodeType&&(R=R.current||R.nativeElement),oe.spacerIsNative=!!R,R&&(oe.spacerState=Kl(R))),oe.spacer=N=R||It.createElement("div"),N.classList.add("pin-spacer"),l&&N.classList.add("pin-spacer-"+l),oe.pinState=ce=Kl(d)),i.force3D!==!1&&Oe.set(d,{force3D:!0}),L.spacer=N=oe.spacer,Pe=Ri(d),Ce=Pe[g+E.os2],J=Oe.getProperty(d),X=Oe.quickSetter(d,E.a,rn),ef(d,N,Pe),x=Kl(d)),Y){fe=zs(Y)?Tm(Y,Am):Am,I=$l("scroller-start",l,k,E,fe,0),C=$l("scroller-end",l,k,E,fe,0,I),K=I["offset"+E.op.d2];var ht=jn(ms(k,"content")||k);Z=this.markerStart=$l("start",l,ht,E,fe,K,0,w),j=this.markerEnd=$l("end",l,ht,E,fe,K,0,w),w&&(ye=Oe.quickSetter([Z,j],E.a,rn)),!Q&&!(ar.length&&ms(k,"fixedMarkers")===!0)&&(SE($?_t:k),Oe.set([I,C],{force3D:!0}),_e=Oe.quickSetter(I,E.a,rn),be=Oe.quickSetter(C,E.a,rn))}if(w){var Le=w.vars.onUpdate,Be=w.vars.onUpdateParams;w.eventCallback("onUpdate",function(){L.update(0,0,1),Le&&Le.apply(w,Be||[])})}if(L.previous=function(){return it[it.indexOf(L)-1]},L.next=function(){return it[it.indexOf(L)+1]},L.revert=function(De,Ke){if(!Ke)return L.kill(!0);var Ve=De!==!1||!L.enabled,je=yn;Ve!==L.isReverted&&(Ve&&(pe=Math.max(O(),L.scroll.rec||0),se=L.progress,ue=r&&r.progress()),Z&&[Z,j,I,C].forEach(function(Xt){return Xt.style.display=Ve?"none":"block"}),Ve&&(yn=L,L.update(Ve)),d&&(!b||!L.isActive)&&(Ve?TE(d,N,ce):ef(d,N,Ri(d),we)),Ve||L.update(Ve),yn=je,L.isReverted=Ve)},L.refresh=function(De,Ke,Ve,je){if(!((yn||!L.enabled)&&!Ke)){if(d&&De&&Li){dn(n,"scrollEnd",wx);return}!kn&&de&&de(L),yn=L,ie.tween&&!Ve&&(ie.tween.kill(),ie.tween=0),B&&B.pause(),_&&r&&(r.revert({kill:!1}).invalidate(),r.getChildren?r.getChildren(!0,!0,!1).forEach(function(Ue){return Ue.vars.immediateRender&&Ue.render(0,!0,!0)}):r.vars.immediateRender&&r.render(0,!0,!0)),L.isReverted||L.revert(!0,!0),L._subPinOffset=!1;var Xt=Fe(),rt=ze(),Mt=w?w.duration():ir(k,E),jt=ee<=.01||!ee,Ut=0,wt=je||0,dt=zs(Ve)?Ve.end:i.end,Xn=i.endTrigger||h,bt=zs(Ve)?Ve.start:i.start||(i.start===0||!h?0:d?"0 0":"0 100%"),vn=L.pinnedContainer=i.pinnedContainer&&jn(i.pinnedContainer,L),ri=h&&Math.max(0,it.indexOf(L))||0,en=ri,tn,cn,pr,lo,un,T,G,re,te,q,Se,Ne,Re;for(Y&&zs(Ve)&&(Ne=Oe.getProperty(I,E.p),Re=Oe.getProperty(C,E.p));en-- >0;)T=it[en],T.end||T.refresh(0,1)||(yn=L),G=T.pin,G&&(G===h||G===d||G===vn)&&!T.isReverted&&(q||(q=[]),q.unshift(T),T.revert(!0,!0)),T!==it[en]&&(ri--,en--);for(An(bt)&&(bt=bt(L)),bt=Mm(bt,"start",L),P=Pm(bt,h,Xt,E,O(),Z,I,L,rt,he,Q,Mt,w,L._startClamp&&"_startClamp")||(d?-.001:0),An(dt)&&(dt=dt(L)),hi(dt)&&!dt.indexOf("+=")&&(~dt.indexOf(" ")?dt=(hi(bt)?bt.split(" ")[0]:"")+dt:(Ut=Cc(dt.substr(2),Xt),dt=hi(bt)?bt:(w?Oe.utils.mapRange(0,w.duration(),w.scrollTrigger.start,w.scrollTrigger.end,P):P)+Ut,Xn=h)),dt=Mm(dt,"end",L),z=Math.max(P,Pm(dt||(Xn?"100% 0":Mt),Xn,Xt,E,O()+Ut,j,C,L,rt,he,Q,Mt,w,L._endClamp&&"_endClamp"))||-.001,Ut=0,en=ri;en--;)T=it[en]||{},G=T.pin,G&&T.start-T._pinPush<=P&&!w&&T.end>0&&(tn=T.end-(L._startClamp?Math.max(0,T.start):T.start),(G===h&&T.start-T._pinPush<P||G===vn)&&isNaN(bt)&&(Ut+=tn*(1-T.progress)),G===d&&(wt+=tn));if(P+=Ut,z+=Ut,L._startClamp&&(L._startClamp+=Ut),L._endClamp&&!kn&&(L._endClamp=z||-.001,z=Math.min(z,ir(k,E))),ee=z-P||(P-=.01)&&.001,jt&&(se=Oe.utils.clamp(0,1,Oe.utils.normalize(P,z,pe))),L._pinPush=wt,Z&&Ut&&(tn={},tn[E.a]="+="+Ut,vn&&(tn[E.p]="-="+O()),Oe.set([Z,j],tn)),d&&!(gh&&L.end>=ir(k,E)))tn=Ri(d),lo=E===sn,pr=O(),Me=parseFloat(J(E.a))+wt,!Mt&&z>1&&(Se=($?It.scrollingElement||pi:k).style,Se={style:Se,value:Se["overflow"+E.a.toUpperCase()]},$&&Ri(_t)["overflow"+E.a.toUpperCase()]!=="scroll"&&(Se.style["overflow"+E.a.toUpperCase()]="scroll")),ef(d,N,tn),x=Kl(d),cn=wr(d,!0),re=Q&&Ms(k,lo?Wn:sn)(),g?(we=[g+E.os2,ee+wt+rn],we.t=N,en=g===Jt?iu(d,E)+ee+wt:0,en&&(we.push(E.d,en+rn),N.style.flexBasis!=="auto"&&(N.style.flexBasis=en+rn)),Yo(we),vn&&it.forEach(function(Ue){Ue.pin===vn&&Ue.vars.pinSpacing!==!1&&(Ue._subPinOffset=!0)}),Q&&O(pe)):(en=iu(d,E),en&&N.style.flexBasis!=="auto"&&(N.style.flexBasis=en+rn)),Q&&(un={top:cn.top+(lo?pr-P:re)+rn,left:cn.left+(lo?re:pr-P)+rn,boxSizing:"border-box",position:"fixed"},un[Qs]=un["max"+ra]=Math.ceil(cn.width)+rn,un[eo]=un["max"+cp]=Math.ceil(cn.height)+rn,un[wi]=un[wi+nl]=un[wi+el]=un[wi+il]=un[wi+tl]="0",un[Jt]=tn[Jt],un[Jt+nl]=tn[Jt+nl],un[Jt+el]=tn[Jt+el],un[Jt+il]=tn[Jt+il],un[Jt+tl]=tn[Jt+tl],A=wE(ce,un,b),kn&&O(0)),r?(te=r._initted,Ku(1),r.render(r.duration(),!0,!0),me=J(E.a)-Me+ee+wt,xe=Math.abs(ee-me)>1,Q&&xe&&A.splice(A.length-2,2),r.render(0,!0,!0),te||r.invalidate(!0),r.parent||r.totalTime(r.totalTime()),Ku(0)):me=ee,Se&&(Se.value?Se.style["overflow"+E.a.toUpperCase()]=Se.value:Se.style.removeProperty("overflow-"+E.a));else if(h&&O()&&!w)for(cn=h.parentNode;cn&&cn!==_t;)cn._pinOffset&&(P-=cn._pinOffset,z-=cn._pinOffset),cn=cn.parentNode;q&&q.forEach(function(Ue){return Ue.revert(!1,!0)}),L.start=P,L.end=z,Ee=D=kn?pe:O(),!w&&!kn&&(Ee<pe&&O(pe),L.scroll.rec=0),L.revert(!1,!0),qe=En(),Ae&&(He=-1,Ae.restart(!0)),yn=0,r&&F&&(r._initted||ue)&&r.progress()!==ue&&r.progress(ue||0,!0).render(r.time(),!0,!0),(jt||se!==L.progress||w||_||r&&!r._initted)&&(r&&!F&&(r._initted||se||r.vars.immediateRender!==!1)&&r.totalProgress(w&&P<-.001&&!se?Oe.utils.normalize(P,z,0):se,!0),L.progress=jt||(Ee-P)/ee===se?0:se),d&&g&&(N._pinOffset=Math.round(L.progress*me)),B&&B.invalidate(),isNaN(Ne)||(Ne-=Oe.getProperty(I,E.p),Re-=Oe.getProperty(C,E.p),jl(I,E,Ne),jl(Z,E,Ne-(je||0)),jl(C,E,Re),jl(j,E,Re-(je||0))),jt&&!kn&&L.update(),u&&!kn&&!le&&(le=!0,u(L),le=!1)}},L.getVelocity=function(){return(O()-D)/(En()-Da)*1e3||0},L.endAnimation=function(){va(L.callbackAnimation),r&&(B?B.progress(1):r.paused()?F||va(r,L.direction<0,1):va(r,r.reversed()))},L.labelToScroll=function(De){return r&&r.labels&&(P||L.refresh()||P)+r.labels[De]/r.duration()*ee||0},L.getTrailing=function(De){var Ke=it.indexOf(L),Ve=L.direction>0?it.slice(0,Ke).reverse():it.slice(Ke+1);return(hi(De)?Ve.filter(function(je){return je.vars.preventOverlaps===De}):Ve).filter(function(je){return L.direction>0?je.end<=P:je.start>=z})},L.update=function(De,Ke,Ve){if(!(w&&!Ve&&!De)){var je=kn===!0?pe:L.scroll(),Xt=De?0:(je-P)/ee,rt=Xt<0?0:Xt>1?1:Xt||0,Mt=L.progress,jt,Ut,wt,dt,Xn,bt,vn,ri;if(Ke&&(D=Ee,Ee=w?O():je,S&&(Ye=ve,ve=r&&!F?r.totalProgress():rt)),m&&d&&!yn&&!Hl&&Li&&(!rt&&P<je+(je-D)/(En()-Da)*m?rt=1e-4:rt===1&&z>je+(je-D)/(En()-Da)*m&&(rt=.9999)),rt!==Mt&&L.enabled){if(jt=L.isActive=!!rt&&rt<1,Ut=!!Mt&&Mt<1,bt=jt!==Ut,Xn=bt||!!rt!=!!Mt,L.direction=rt>Mt?1:-1,L.progress=rt,Xn&&!yn&&(wt=rt&&!Mt?0:rt===1?1:Mt===1?2:3,F&&(dt=!bt&&V[wt+1]!=="none"&&V[wt+1]||V[wt],ri=r&&(dt==="complete"||dt==="reset"||dt in r))),v&&(bt||ri)&&(ri||f||!r)&&(An(v)?v(L):L.getTrailing(v).forEach(function(pr){return pr.endAnimation()})),F||(B&&!yn&&!Hl?(B._dp._time-B._start!==B._time&&B.render(B._dp._time-B._start),B.resetTo?B.resetTo("totalProgress",rt,r._tTime/r._tDur):(B.vars.totalProgress=rt,B.invalidate().restart())):r&&r.totalProgress(rt,!!(yn&&(qe||De)))),d){if(De&&g&&(N.style[g+E.os2]=Ce),!Q)X(La(Me+me*rt));else if(Xn){if(vn=!De&&rt>Mt&&z+1>je&&je+1>=ir(k,E),b)if(!De&&(jt||vn)){var en=wr(d,!0),tn=je-P;Dm(d,_t,en.top+(E===sn?tn:0)+rn,en.left+(E===sn?0:tn)+rn)}else Dm(d,N);Yo(jt||vn?A:x),xe&&rt<1&&jt||X(Me+(rt===1&&!vn?me:0))}}S&&!ie.tween&&!yn&&!Hl&&Ae.restart(!0),a&&(bt||y&&rt&&(rt<1||!ju))&&vl(a.targets).forEach(function(pr){return pr.classList[jt||y?"add":"remove"](a.className)}),o&&!F&&!De&&o(L),Xn&&!yn?(F&&(ri&&(dt==="complete"?r.pause().totalProgress(1):dt==="reset"?r.restart(!0).pause():dt==="restart"?r.restart(!0):r[dt]()),o&&o(L)),(bt||!ju)&&(c&&bt&&Ju(L,c),W[wt]&&Ju(L,W[wt]),y&&(rt===1?L.kill(!1,1):W[wt]=0),bt||(wt=rt===1?1:3,W[wt]&&Ju(L,W[wt]))),U&&!jt&&Math.abs(L.getVelocity())>(Na(U)?U:2500)&&(va(L.callbackAnimation),B?B.progress(1):va(r,dt==="reverse"?1:!rt,1))):F&&o&&!yn&&o(L)}if(be){var cn=w?je/w.duration()*(w._caScrollDist||0):je;_e(cn+(I._isFlipped?1:0)),be(cn)}ye&&ye(-je/w.duration()*(w._caScrollDist||0))}},L.enable=function(De,Ke){L.enabled||(L.enabled=!0,dn(k,"resize",Ua),$||dn(k,"scroll",po),de&&dn(n,"refreshInit",de),De!==!1&&(L.progress=se=0,Ee=D=He=O()),Ke!==!1&&L.refresh())},L.getTween=function(De){return De&&ie?ie.tween:B},L.setPositions=function(De,Ke,Ve,je){if(w){var Xt=w.scrollTrigger,rt=w.duration(),Mt=Xt.end-Xt.start;De=Xt.start+Mt*De/rt,Ke=Xt.start+Mt*Ke/rt}L.refresh(!1,!1,{start:ym(De,Ve&&!!L._startClamp),end:ym(Ke,Ve&&!!L._endClamp)},je),L.update()},L.adjustPinSpacing=function(De){if(we&&De){var Ke=we.indexOf(E.d)+1;we[Ke]=parseFloat(we[Ke])+De+rn,we[1]=parseFloat(we[1])+De+rn,Yo(we)}},L.disable=function(De,Ke){if(De!==!1&&L.revert(!0,!0),L.enabled&&(L.enabled=L.isActive=!1,Ke||B&&B.pause(),pe=0,oe&&(oe.uncache=1),de&&hn(n,"refreshInit",de),Ae&&(Ae.pause(),ie.tween&&ie.tween.kill()&&(ie.tween=0)),!$)){for(var Ve=it.length;Ve--;)if(it[Ve].scroller===k&&it[Ve]!==L)return;hn(k,"resize",Ua),$||hn(k,"scroll",po)}},L.kill=function(De,Ke){L.disable(De,Ke),B&&!Ke&&B.kill(),l&&delete xh[l];var Ve=it.indexOf(L);Ve>=0&&it.splice(Ve,1),Ve===zn&&Dc>0&&zn--,Ve=0,it.forEach(function(je){return je.scroller===L.scroller&&(Ve=1)}),Ve||kn||(L.scroll.rec=0),r&&(r.scrollTrigger=null,De&&r.revert({kill:!1}),Ke||r.kill()),Z&&[Z,j,I,C].forEach(function(je){return je.parentNode&&je.parentNode.removeChild(je)}),rl===L&&(rl=0),d&&(oe&&(oe.uncache=1),Ve=0,it.forEach(function(je){return je.pin===d&&Ve++}),Ve||(oe.spacer=0)),i.onKill&&i.onKill(L)},it.push(L),L.enable(!1,!1),Ge&&Ge(L),r&&r.add&&!ee){var Qe=L.update;L.update=function(){L.update=Qe,at.cache++,P||z||L.refresh()},Oe.delayedCall(.01,L.update),ee=.01,P=z=0}else L.refresh();d&&bE()},n.register=function(i){return Po||(Oe=i||Mx(),Sx()&&window.document&&n.enable(),Po=Ia),Po},n.defaults=function(i){if(i)for(var r in i)Yl[r]=i[r];return Yl},n.disable=function(i,r){Ia=0,it.forEach(function(o){return o[r?"kill":"disable"](i)}),hn(ot,"wheel",po),hn(It,"scroll",po),clearInterval(Gl),hn(It,"touchcancel",ji),hn(_t,"touchstart",ji),Xl(hn,It,"pointerdown,touchstart,mousedown",Em),Xl(hn,It,"pointerup,touchend,mouseup",bm),nu.kill(),Wl(hn);for(var s=0;s<at.length;s+=3)ql(hn,at[s],at[s+1]),ql(hn,at[s],at[s+2])},n.enable=function(){if(ot=window,It=document,pi=It.documentElement,_t=It.body,Oe&&(vl=Oe.utils.toArray,Ja=Oe.utils.clamp,_h=Oe.core.context||ji,Ku=Oe.core.suppressOverwrites||ji,sp=ot.history.scrollRestoration||"auto",vh=ot.pageYOffset||0,Oe.core.globals("ScrollTrigger",n),_t)){Ia=1,qo=document.createElement("div"),qo.style.height="100vh",qo.style.position="absolute",Dx(),gE(),$t.register(Oe),n.isTouch=$t.isTouch,Qr=$t.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),mh=$t.isTouch===1,dn(ot,"wheel",po),rp=[ot,It,pi,_t],Oe.matchMedia?(n.matchMedia=function(c){var u=Oe.matchMedia(),f;for(f in c)u.add(f,c[f]);return u},Oe.addEventListener("matchMediaInit",function(){Cx(),fp()}),Oe.addEventListener("matchMediaRevert",function(){return Rx()}),Oe.addEventListener("matchMedia",function(){Ws(0,1),ro("matchMedia")}),Oe.matchMedia().add("(orientation: portrait)",function(){return Qu(),Qu})):console.warn("Requires GSAP 3.11.0 or later"),Qu(),dn(It,"scroll",po);var i=_t.hasAttribute("style"),r=_t.style,s=r.borderTopStyle,o=Oe.core.Animation.prototype,a,l;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),r.borderTopStyle="solid",a=wr(_t),sn.m=Math.round(a.top+sn.sc())||0,Wn.m=Math.round(a.left+Wn.sc())||0,s?r.borderTopStyle=s:r.removeProperty("border-top-style"),i||(_t.setAttribute("style",""),_t.removeAttribute("style")),Gl=setInterval(wm,250),Oe.delayedCall(.5,function(){return Hl=0}),dn(It,"touchcancel",ji),dn(_t,"touchstart",ji),Xl(dn,It,"pointerdown,touchstart,mousedown",Em),Xl(dn,It,"pointerup,touchend,mouseup",bm),ph=Oe.utils.checkPrefix("transform"),Ic.push(ph),Po=En(),nu=Oe.delayedCall(.2,Ws).pause(),Do=[It,"visibilitychange",function(){var c=ot.innerWidth,u=ot.innerHeight;It.hidden?(vm=c,Sm=u):(vm!==c||Sm!==u)&&Ua()},It,"DOMContentLoaded",Ws,ot,"load",Ws,ot,"resize",Ua],Wl(dn),it.forEach(function(c){return c.enable(0,1)}),l=0;l<at.length;l+=3)ql(hn,at[l],at[l+1]),ql(hn,at[l],at[l+2])}},n.config=function(i){"limitCallbacks"in i&&(ju=!!i.limitCallbacks);var r=i.syncInterval;r&&clearInterval(Gl)||(Gl=r)&&setInterval(wm,r),"ignoreMobileResize"in i&&(mh=n.isTouch===1&&i.ignoreMobileResize),"autoRefreshEvents"in i&&(Wl(hn)||Wl(dn,i.autoRefreshEvents||"none"),gx=(i.autoRefreshEvents+"").indexOf("resize")===-1)},n.scrollerProxy=function(i,r){var s=jn(i),o=at.indexOf(s),a=no(s);~o&&at.splice(o,a?6:2),r&&(a?ar.unshift(ot,r,_t,r,pi,r):ar.unshift(s,r))},n.clearMatchMedia=function(i){it.forEach(function(r){return r._ctx&&r._ctx.query===i&&r._ctx.kill(!0,!0)})},n.isInViewport=function(i,r,s){var o=(hi(i)?jn(i):i).getBoundingClientRect(),a=o[s?Qs:eo]*r||0;return s?o.right-a>0&&o.left+a<ot.innerWidth:o.bottom-a>0&&o.top+a<ot.innerHeight},n.positionInViewport=function(i,r,s){hi(i)&&(i=jn(i));var o=i.getBoundingClientRect(),a=o[s?Qs:eo],l=r==null?a/2:r in ru?ru[r]*a:~r.indexOf("%")?parseFloat(r)*a/100:parseFloat(r)||0;return s?(o.left+l)/ot.innerWidth:(o.top+l)/ot.innerHeight},n.killAll=function(i){if(it.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),i!==!0){var r=io.killAll||[];io={},r.forEach(function(s){return s()})}},n})();lt.version="3.14.2";lt.saveStyles=function(n){return n?vl(n).forEach(function(e){if(e&&e.style){var t=fi.indexOf(e);t>=0&&fi.splice(t,5),fi.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),Oe.core.getCache(e),_h())}}):fi};lt.revert=function(n,e){return fp(!n,e)};lt.create=function(n,e){return new lt(n,e)};lt.refresh=function(n){return n?Ua(!0):(Po||lt.register())&&Ws(!0)};lt.update=function(n){return++at.cache&&Ir(n===!0?2:0)};lt.clearScrollMemory=Px;lt.maxScroll=function(n,e){return ir(n,e?Wn:sn)};lt.getScrollFunc=function(n,e){return Ms(jn(n),e?Wn:sn)};lt.getById=function(n){return xh[n]};lt.getAll=function(){return it.filter(function(n){return n.vars.id!=="ScrollSmoother"})};lt.isScrolling=function(){return!!Li};lt.snapDirectional=up;lt.addEventListener=function(n,e){var t=io[n]||(io[n]=[]);~t.indexOf(e)||t.push(e)};lt.removeEventListener=function(n,e){var t=io[n],i=t&&t.indexOf(e);i>=0&&t.splice(i,1)};lt.batch=function(n,e){var t=[],i={},r=e.interval||.016,s=e.batchMax||1e9,o=function(c,u){var f=[],h=[],d=Oe.delayedCall(r,function(){u(f,h),f=[],h=[]}).pause();return function(g){f.length||d.restart(!0),f.push(g.trigger),h.push(g),s<=f.length&&d.progress(1)}},a;for(a in e)i[a]=a.substr(0,2)==="on"&&An(e[a])&&a!=="onRefreshInit"?o(a,e[a]):e[a];return An(s)&&(s=s(),dn(lt,"refresh",function(){return s=e.batchMax()})),vl(n).forEach(function(l){var c={};for(a in i)c[a]=i[a];c.trigger=l,t.push(lt.create(c))}),t};var Lm=function(e,t,i,r){return t>r?e(r):t<0&&e(0),i>r?(r-t)/(i-t):i<0?t/(t-i):1},tf=function n(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+($t.isTouch?" pinch-zoom":""):"none",e===pi&&n(_t,t)},Zl={auto:1,scroll:1},CE=function(e){var t=e.event,i=e.target,r=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,o=s._gsap||Oe.core.getCache(s),a=En(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==_t&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(Zl[(l=Ri(s)).overflowY]||Zl[l.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==i&&!no(s)&&(Zl[(l=Ri(s)).overflowY]||Zl[l.overflowX]),o._isScrollT=a}(o._isScroll||r==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},Lx=function(e,t,i,r){return $t.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:r=r&&CE,onPress:r,onDrag:r,onScroll:r,onEnable:function(){return i&&dn(It,$t.eventTypes[0],Um,!1,!0)},onDisable:function(){return hn(It,$t.eventTypes[0],Um,!0)}})},PE=/(input|label|select|textarea)/i,Nm,Um=function(e){var t=PE.test(e.target.tagName);(t||Nm)&&(e._gsapAllow=!0,Nm=t)},DE=function(e){zs(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,i=t.normalizeScrollX,r=t.momentum,s=t.allowNestedScroll,o=t.onRelease,a,l,c=jn(e.target)||pi,u=Oe.core.globals().ScrollSmoother,f=u&&u.get(),h=Qr&&(e.content&&jn(e.content)||f&&e.content!==!1&&!f.smooth()&&f.content()),d=Ms(c,sn),g=Ms(c,Wn),_=1,m=($t.isTouch&&ot.visualViewport?ot.visualViewport.scale*ot.visualViewport.width:ot.outerWidth)/ot.innerWidth,p=0,M=An(r)?function(){return r(a)}:function(){return r||2.8},y,S,b=Lx(c,e.type,!0,s),R=function(){return S=!1},w=ji,U=ji,v=function(){l=ir(c,sn),U=Ja(Qr?1:0,l),i&&(w=Ja(0,ir(c,Wn))),y=to},E=function(){h._gsap.y=La(parseFloat(h._gsap.y)+d.offset)+"px",h.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(h._gsap.y)+", 0, 1)",d.offset=d.cacheID=0},F=function(){if(S){requestAnimationFrame(R);var Y=La(a.deltaY/2),he=U(d.v-Y);if(h&&he!==d.v+d.offset){d.offset=he-d.v;var L=La((parseFloat(h&&h._gsap.y)||0)-d.offset);h.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+L+", 0, 1)",h._gsap.y=L+"px",d.cacheID=at.cache,Ir()}return!0}d.offset&&E(),S=!0},k,H,$,Q,W=function(){v(),k.isActive()&&k.vars.scrollY>l&&(d()>l?k.progress(1)&&d(l):k.resetTo("scrollY",l))};return h&&Oe.set(h,{y:"+=0"}),e.ignoreCheck=function(V){return Qr&&V.type==="touchmove"&&F()||_>1.05&&V.type!=="touchstart"||a.isGesturing||V.touches&&V.touches.length>1},e.onPress=function(){S=!1;var V=_;_=La((ot.visualViewport&&ot.visualViewport.scale||1)/m),k.pause(),V!==_&&tf(c,_>1.01?!0:i?!1:"x"),H=g(),$=d(),v(),y=to},e.onRelease=e.onGestureStart=function(V,Y){if(d.offset&&E(),!Y)Q.restart(!0);else{at.cache++;var he=M(),L,de;i&&(L=g(),de=L+he*.05*-V.velocityX/.227,he*=Lm(g,L,de,ir(c,Wn)),k.vars.scrollX=w(de)),L=d(),de=L+he*.05*-V.velocityY/.227,he*=Lm(d,L,de,ir(c,sn)),k.vars.scrollY=U(de),k.invalidate().duration(he).play(.01),(Qr&&k.vars.scrollY>=l||L>=l-1)&&Oe.to({},{onUpdate:W,duration:he})}o&&o(V)},e.onWheel=function(){k._ts&&k.pause(),En()-p>1e3&&(y=0,p=En())},e.onChange=function(V,Y,he,L,de){if(to!==y&&v(),Y&&i&&g(w(L[2]===Y?H+(V.startX-V.x):g()+Y-L[1])),he){d.offset&&E();var Fe=de[2]===he,ze=Fe?$+V.startY-V.y:d()+he-de[1],He=U(ze);Fe&&ze!==He&&($+=He-ze),d(He)}(he||Y)&&Ir()},e.onEnable=function(){tf(c,i?!1:"x"),lt.addEventListener("refresh",W),dn(ot,"resize",W),d.smooth&&(d.target.style.scrollBehavior="auto",d.smooth=g.smooth=!1),b.enable()},e.onDisable=function(){tf(c,!0),hn(ot,"resize",W),lt.removeEventListener("refresh",W),b.kill()},e.lockAxis=e.lockAxis!==!1,a=new $t(e),a.iOS=Qr,Qr&&!d()&&d(1),Qr&&Oe.ticker.add(ji),Q=a._dc,k=Oe.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:i?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:Ix(d,d(),function(){return k.pause()})},onUpdate:Ir,onComplete:Q.vars.onComplete}),a};lt.sort=function(n){if(An(n))return it.sort(n);var e=ot.pageYOffset||0;return lt.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+ot.innerHeight}),it.sort(n||function(t,i){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((i.vars.containerAnimation?1e6:i._sortY)+(i.vars.refreshPriority||0)*-1e6)})};lt.observe=function(n){return new $t(n)};lt.normalizeScroll=function(n){if(typeof n>"u")return On;if(n===!0&&On)return On.enable();if(n===!1){On&&On.kill(),On=n;return}var e=n instanceof $t?n:DE(n);return On&&On.target===e.target&&On.kill(),no(e.target)&&(On=e),e};lt.core={_getVelocityProp:dh,_inputObserver:Lx,_scrollers:at,_proxies:ar,bridge:{ss:function(){Li||ro("scrollStart"),Li=En()},ref:function(){return yn}}};Mx()&&Oe.registerPlugin(lt);const hp="182",IE=0,Fm=1,LE=2,Nc=1,NE=2,Fa=3,ys=0,ti=1,Rr=2,Lr=0,$o=1,Om=2,Bm=3,zm=4,UE=5,Vs=100,FE=101,OE=102,BE=103,zE=104,kE=200,VE=201,GE=202,HE=203,Mh=204,yh=205,WE=206,XE=207,qE=208,YE=209,$E=210,KE=211,jE=212,ZE=213,JE=214,Eh=0,bh=1,Th=2,sa=3,Ah=4,wh=5,Rh=6,Ch=7,Nx=0,QE=1,eb=2,lr=0,Ux=1,Fx=2,Ox=3,Bx=4,zx=5,kx=6,Vx=7,Gx=300,so=301,oa=302,Ph=303,Dh=304,Eu=306,Ih=1e3,Pr=1001,Lh=1002,gn=1003,tb=1004,Jl=1005,wn=1006,nf=1007,Xs=1008,Pi=1009,Hx=1010,Wx=1011,Ml=1012,dp=1013,hr=1014,rr=1015,Vr=1016,pp=1017,mp=1018,yl=1020,Xx=35902,qx=35899,Yx=1021,$x=1022,ki=1023,Gr=1026,qs=1027,Kx=1028,_p=1029,aa=1030,gp=1031,xp=1033,Uc=33776,Fc=33777,Oc=33778,Bc=33779,Nh=35840,Uh=35841,Fh=35842,Oh=35843,Bh=36196,zh=37492,kh=37496,Vh=37488,Gh=37489,Hh=37490,Wh=37491,Xh=37808,qh=37809,Yh=37810,$h=37811,Kh=37812,jh=37813,Zh=37814,Jh=37815,Qh=37816,ed=37817,td=37818,nd=37819,id=37820,rd=37821,sd=36492,od=36494,ad=36495,ld=36283,cd=36284,ud=36285,fd=36286,nb=3200,ib=0,rb=1,ss="",Ai="srgb",la="srgb-linear",su="linear",Et="srgb",mo=7680,km=519,sb=512,ob=513,ab=514,vp=515,lb=516,cb=517,Sp=518,ub=519,Vm=35044,Gm="300 es",sr=2e3,ou=2001;function jx(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function au(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function fb(){const n=au("canvas");return n.style.display="block",n}const Hm={};function Wm(...n){const e="THREE."+n.shift();console.log(e,...n)}function Ze(...n){const e="THREE."+n.shift();console.warn(e,...n)}function mt(...n){const e="THREE."+n.shift();console.error(e,...n)}function El(...n){const e=n.join(" ");e in Hm||(Hm[e]=!0,Ze(...n))}function hb(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}class ha{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Sn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],rf=Math.PI/180,hd=180/Math.PI;function Dl(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Sn[n&255]+Sn[n>>8&255]+Sn[n>>16&255]+Sn[n>>24&255]+"-"+Sn[e&255]+Sn[e>>8&255]+"-"+Sn[e>>16&15|64]+Sn[e>>24&255]+"-"+Sn[t&63|128]+Sn[t>>8&255]+"-"+Sn[t>>16&255]+Sn[t>>24&255]+Sn[i&255]+Sn[i>>8&255]+Sn[i>>16&255]+Sn[i>>24&255]).toLowerCase()}function ct(n,e,t){return Math.max(e,Math.min(t,n))}function db(n,e){return(n%e+e)%e}function sf(n,e,t){return(1-t)*n+t*e}function Sa(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function $n(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class At{constructor(e=0,t=0){At.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ct(this.x,e.x,t.x),this.y=ct(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ct(this.x,e,t),this.y=ct(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ct(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(ct(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Il{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3],h=s[o+0],d=s[o+1],g=s[o+2],_=s[o+3];if(a<=0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(a>=1){e[t+0]=h,e[t+1]=d,e[t+2]=g,e[t+3]=_;return}if(f!==_||l!==h||c!==d||u!==g){let m=l*h+c*d+u*g+f*_;m<0&&(h=-h,d=-d,g=-g,_=-_,m=-m);let p=1-a;if(m<.9995){const M=Math.acos(m),y=Math.sin(M);p=Math.sin(p*M)/y,a=Math.sin(a*M)/y,l=l*p+h*a,c=c*p+d*a,u=u*p+g*a,f=f*p+_*a}else{l=l*p+h*a,c=c*p+d*a,u=u*p+g*a,f=f*p+_*a;const M=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=M,c*=M,u*=M,f*=M}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[o],h=s[o+1],d=s[o+2],g=s[o+3];return e[t]=a*g+u*f+l*d-c*h,e[t+1]=l*g+u*h+c*f-a*d,e[t+2]=c*g+u*d+a*h-l*f,e[t+3]=u*g-a*f-l*h-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),f=a(s/2),h=l(i/2),d=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=h*u*f+c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f-h*d*g;break;case"YXZ":this._x=h*u*f+c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f+h*d*g;break;case"ZXY":this._x=h*u*f-c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f-h*d*g;break;case"ZYX":this._x=h*u*f-c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f+h*d*g;break;case"YZX":this._x=h*u*f+c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f-h*d*g;break;case"XZY":this._x=h*u*f-c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f+h*d*g;break;default:Ze("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=i+a+f;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(o-r)*d}else if(i>a&&i>f){const d=2*Math.sqrt(1+i-a-f);this._w=(u-l)/d,this._x=.25*d,this._y=(r+o)/d,this._z=(s+c)/d}else if(a>f){const d=2*Math.sqrt(1+a-i-f);this._w=(s-c)/d,this._x=(r+o)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+f-i-a);this._w=(o-r)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ct(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let i=e._x,r=e._y,s=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,r=-r,s=-s,o=-o,a=-a);let l=1-t;if(a<.9995){const c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ne{constructor(e=0,t=0,i=0){ne.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Xm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Xm.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*t-s*r),f=2*(s*i-o*t);return this.x=t+l*c+o*f-a*u,this.y=i+l*u+a*c-s*f,this.z=r+l*f+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ct(this.x,e.x,t.x),this.y=ct(this.y,e.y,t.y),this.z=ct(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ct(this.x,e,t),this.y=ct(this.y,e,t),this.z=ct(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ct(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return of.copy(this).projectOnVector(e),this.sub(of)}reflect(e){return this.sub(of.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(ct(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const of=new ne,Xm=new Il;class et{constructor(e,t,i,r,s,o,a,l,c){et.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c)}set(e,t,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],f=i[7],h=i[2],d=i[5],g=i[8],_=r[0],m=r[3],p=r[6],M=r[1],y=r[4],S=r[7],b=r[2],R=r[5],w=r[8];return s[0]=o*_+a*M+l*b,s[3]=o*m+a*y+l*R,s[6]=o*p+a*S+l*w,s[1]=c*_+u*M+f*b,s[4]=c*m+u*y+f*R,s[7]=c*p+u*S+f*w,s[2]=h*_+d*M+g*b,s[5]=h*m+d*y+g*R,s[8]=h*p+d*S+g*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,h=a*l-u*s,d=c*s-o*l,g=t*f+i*h+r*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=f*_,e[1]=(r*c-u*i)*_,e[2]=(a*i-r*o)*_,e[3]=h*_,e[4]=(u*t-r*l)*_,e[5]=(r*s-a*t)*_,e[6]=d*_,e[7]=(i*l-c*t)*_,e[8]=(o*t-i*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(af.makeScale(e,t)),this}rotate(e){return this.premultiply(af.makeRotation(-e)),this}translate(e,t){return this.premultiply(af.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const af=new et,qm=new et().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ym=new et().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function pb(){const n={enabled:!0,workingColorSpace:la,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===Et&&(r.r=Nr(r.r),r.g=Nr(r.g),r.b=Nr(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Et&&(r.r=Ko(r.r),r.g=Ko(r.g),r.b=Ko(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===ss?su:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return El("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return El("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[la]:{primaries:e,whitePoint:i,transfer:su,toXYZ:qm,fromXYZ:Ym,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ai},outputColorSpaceConfig:{drawingBufferColorSpace:Ai}},[Ai]:{primaries:e,whitePoint:i,transfer:Et,toXYZ:qm,fromXYZ:Ym,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ai}}}),n}const ft=pb();function Nr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ko(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let _o;class mb{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{_o===void 0&&(_o=au("canvas")),_o.width=e.width,_o.height=e.height;const r=_o.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=_o}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=au("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Nr(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Nr(t[i]/255)*255):t[i]=Nr(t[i]);return{data:t,width:e.width,height:e.height}}else return Ze("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let _b=0;class Mp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:_b++}),this.uuid=Dl(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(lf(r[o].image)):s.push(lf(r[o]))}else s=lf(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function lf(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?mb.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Ze("Texture: Unable to serialize Texture."),{})}let gb=0;const cf=new ne;class Pn extends ha{constructor(e=Pn.DEFAULT_IMAGE,t=Pn.DEFAULT_MAPPING,i=Pr,r=Pr,s=wn,o=Xs,a=ki,l=Pi,c=Pn.DEFAULT_ANISOTROPY,u=ss){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:gb++}),this.uuid=Dl(),this.name="",this.source=new Mp(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new At(0,0),this.repeat=new At(1,1),this.center=new At(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new et,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(cf).x}get height(){return this.source.getSize(cf).y}get depth(){return this.source.getSize(cf).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){Ze(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Ze(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Gx)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ih:e.x=e.x-Math.floor(e.x);break;case Pr:e.x=e.x<0?0:1;break;case Lh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ih:e.y=e.y-Math.floor(e.y);break;case Pr:e.y=e.y<0?0:1;break;case Lh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Pn.DEFAULT_IMAGE=null;Pn.DEFAULT_MAPPING=Gx;Pn.DEFAULT_ANISOTROPY=1;class Yt{constructor(e=0,t=0,i=0,r=1){Yt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],d=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(c+1)/2,S=(d+1)/2,b=(p+1)/2,R=(u+h)/4,w=(f+_)/4,U=(g+m)/4;return y>S&&y>b?y<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(y),r=R/i,s=w/i):S>b?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=R/r,s=U/r):b<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(b),i=w/s,r=U/s),this.set(i,r,s,t),this}let M=Math.sqrt((m-g)*(m-g)+(f-_)*(f-_)+(h-u)*(h-u));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(f-_)/M,this.z=(h-u)/M,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ct(this.x,e.x,t.x),this.y=ct(this.y,e.y,t.y),this.z=ct(this.z,e.z,t.z),this.w=ct(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ct(this.x,e,t),this.y=ct(this.y,e,t),this.z=ct(this.z,e,t),this.w=ct(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ct(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class xb extends ha{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:wn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Yt(0,0,e,t),this.scissorTest=!1,this.viewport=new Yt(0,0,e,t);const r={width:e,height:t,depth:i.depth},s=new Pn(r);this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:wn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new Mp(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class cr extends xb{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Zx extends Pn{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=gn,this.minFilter=gn,this.wrapR=Pr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class vb extends Pn{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=gn,this.minFilter=gn,this.wrapR=Pr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ll{constructor(e=new ne(1/0,1/0,1/0),t=new ne(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Ni.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Ni.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Ni.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Ni):Ni.fromBufferAttribute(s,o),Ni.applyMatrix4(e.matrixWorld),this.expandByPoint(Ni);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ql.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ql.copy(i.boundingBox)),Ql.applyMatrix4(e.matrixWorld),this.union(Ql)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ni),Ni.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ma),ec.subVectors(this.max,Ma),go.subVectors(e.a,Ma),xo.subVectors(e.b,Ma),vo.subVectors(e.c,Ma),qr.subVectors(xo,go),Yr.subVectors(vo,xo),Ps.subVectors(go,vo);let t=[0,-qr.z,qr.y,0,-Yr.z,Yr.y,0,-Ps.z,Ps.y,qr.z,0,-qr.x,Yr.z,0,-Yr.x,Ps.z,0,-Ps.x,-qr.y,qr.x,0,-Yr.y,Yr.x,0,-Ps.y,Ps.x,0];return!uf(t,go,xo,vo,ec)||(t=[1,0,0,0,1,0,0,0,1],!uf(t,go,xo,vo,ec))?!1:(tc.crossVectors(qr,Yr),t=[tc.x,tc.y,tc.z],uf(t,go,xo,vo,ec))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ni).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ni).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(_r[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),_r[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),_r[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),_r[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),_r[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),_r[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),_r[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),_r[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(_r),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const _r=[new ne,new ne,new ne,new ne,new ne,new ne,new ne,new ne],Ni=new ne,Ql=new Ll,go=new ne,xo=new ne,vo=new ne,qr=new ne,Yr=new ne,Ps=new ne,Ma=new ne,ec=new ne,tc=new ne,Ds=new ne;function uf(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Ds.fromArray(n,s);const a=r.x*Math.abs(Ds.x)+r.y*Math.abs(Ds.y)+r.z*Math.abs(Ds.z),l=e.dot(Ds),c=t.dot(Ds),u=i.dot(Ds);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Sb=new Ll,ya=new ne,ff=new ne;class bu{constructor(e=new ne,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Sb.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ya.subVectors(e,this.center);const t=ya.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(ya,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ff.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ya.copy(e.center).add(ff)),this.expandByPoint(ya.copy(e.center).sub(ff))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const gr=new ne,hf=new ne,nc=new ne,$r=new ne,df=new ne,ic=new ne,pf=new ne;class Jx{constructor(e=new ne,t=new ne(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,gr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=gr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(gr.copy(this.origin).addScaledVector(this.direction,t),gr.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){hf.copy(e).add(t).multiplyScalar(.5),nc.copy(t).sub(e).normalize(),$r.copy(this.origin).sub(hf);const s=e.distanceTo(t)*.5,o=-this.direction.dot(nc),a=$r.dot(this.direction),l=-$r.dot(nc),c=$r.lengthSq(),u=Math.abs(1-o*o);let f,h,d,g;if(u>0)if(f=o*l-a,h=o*a-l,g=s*u,f>=0)if(h>=-g)if(h<=g){const _=1/u;f*=_,h*=_,d=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;else h<=-g?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+c):h<=g?(f=0,h=Math.min(Math.max(-s,-l),s),d=h*(h+2*l)+c):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+c);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(hf).addScaledVector(nc,h),d}intersectSphere(e,t){gr.subVectors(e.center,this.origin);const i=gr.dot(this.direction),r=gr.dot(gr)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,gr)!==null}intersectTriangle(e,t,i,r,s){df.subVectors(t,e),ic.subVectors(i,e),pf.crossVectors(df,ic);let o=this.direction.dot(pf),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;$r.subVectors(this.origin,e);const l=a*this.direction.dot(ic.crossVectors($r,ic));if(l<0)return null;const c=a*this.direction.dot(df.cross($r));if(c<0||l+c>o)return null;const u=-a*$r.dot(pf);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Kt{constructor(e,t,i,r,s,o,a,l,c,u,f,h,d,g,_,m){Kt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c,u,f,h,d,g,_,m)}set(e,t,i,r,s,o,a,l,c,u,f,h,d,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=f,p[14]=h,p[3]=d,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Kt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,i=e.elements,r=1/So.setFromMatrixColumn(e,0).length(),s=1/So.setFromMatrixColumn(e,1).length(),o=1/So.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=o*u,d=o*f,g=a*u,_=a*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=d+g*c,t[5]=h-_*c,t[9]=-a*l,t[2]=_-h*c,t[6]=g+d*c,t[10]=o*l}else if(e.order==="YXZ"){const h=l*u,d=l*f,g=c*u,_=c*f;t[0]=h+_*a,t[4]=g*a-d,t[8]=o*c,t[1]=o*f,t[5]=o*u,t[9]=-a,t[2]=d*a-g,t[6]=_+h*a,t[10]=o*l}else if(e.order==="ZXY"){const h=l*u,d=l*f,g=c*u,_=c*f;t[0]=h-_*a,t[4]=-o*f,t[8]=g+d*a,t[1]=d+g*a,t[5]=o*u,t[9]=_-h*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const h=o*u,d=o*f,g=a*u,_=a*f;t[0]=l*u,t[4]=g*c-d,t[8]=h*c+_,t[1]=l*f,t[5]=_*c+h,t[9]=d*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,d=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=_-h*f,t[8]=g*f+d,t[1]=f,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=d*f+g,t[10]=h-_*f}else if(e.order==="XZY"){const h=o*l,d=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+_,t[5]=o*u,t[9]=d*f-g,t[2]=g*f-d,t[6]=a*u,t[10]=_*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Mb,e,yb)}lookAt(e,t,i){const r=this.elements;return ai.subVectors(e,t),ai.lengthSq()===0&&(ai.z=1),ai.normalize(),Kr.crossVectors(i,ai),Kr.lengthSq()===0&&(Math.abs(i.z)===1?ai.x+=1e-4:ai.z+=1e-4,ai.normalize(),Kr.crossVectors(i,ai)),Kr.normalize(),rc.crossVectors(ai,Kr),r[0]=Kr.x,r[4]=rc.x,r[8]=ai.x,r[1]=Kr.y,r[5]=rc.y,r[9]=ai.y,r[2]=Kr.z,r[6]=rc.z,r[10]=ai.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],f=i[5],h=i[9],d=i[13],g=i[2],_=i[6],m=i[10],p=i[14],M=i[3],y=i[7],S=i[11],b=i[15],R=r[0],w=r[4],U=r[8],v=r[12],E=r[1],F=r[5],k=r[9],H=r[13],$=r[2],Q=r[6],W=r[10],V=r[14],Y=r[3],he=r[7],L=r[11],de=r[15];return s[0]=o*R+a*E+l*$+c*Y,s[4]=o*w+a*F+l*Q+c*he,s[8]=o*U+a*k+l*W+c*L,s[12]=o*v+a*H+l*V+c*de,s[1]=u*R+f*E+h*$+d*Y,s[5]=u*w+f*F+h*Q+d*he,s[9]=u*U+f*k+h*W+d*L,s[13]=u*v+f*H+h*V+d*de,s[2]=g*R+_*E+m*$+p*Y,s[6]=g*w+_*F+m*Q+p*he,s[10]=g*U+_*k+m*W+p*L,s[14]=g*v+_*H+m*V+p*de,s[3]=M*R+y*E+S*$+b*Y,s[7]=M*w+y*F+S*Q+b*he,s[11]=M*U+y*k+S*W+b*L,s[15]=M*v+y*H+S*V+b*de,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],d=e[14],g=e[3],_=e[7],m=e[11],p=e[15],M=l*d-c*h,y=a*d-c*f,S=a*h-l*f,b=o*d-c*u,R=o*h-l*u,w=o*f-a*u;return t*(_*M-m*y+p*S)-i*(g*M-m*b+p*R)+r*(g*y-_*b+p*w)-s*(g*S-_*R+m*w)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],d=e[11],g=e[12],_=e[13],m=e[14],p=e[15],M=f*m*c-_*h*c+_*l*d-a*m*d-f*l*p+a*h*p,y=g*h*c-u*m*c-g*l*d+o*m*d+u*l*p-o*h*p,S=u*_*c-g*f*c+g*a*d-o*_*d-u*a*p+o*f*p,b=g*f*l-u*_*l-g*a*h+o*_*h+u*a*m-o*f*m,R=t*M+i*y+r*S+s*b;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/R;return e[0]=M*w,e[1]=(_*h*s-f*m*s-_*r*d+i*m*d+f*r*p-i*h*p)*w,e[2]=(a*m*s-_*l*s+_*r*c-i*m*c-a*r*p+i*l*p)*w,e[3]=(f*l*s-a*h*s-f*r*c+i*h*c+a*r*d-i*l*d)*w,e[4]=y*w,e[5]=(u*m*s-g*h*s+g*r*d-t*m*d-u*r*p+t*h*p)*w,e[6]=(g*l*s-o*m*s-g*r*c+t*m*c+o*r*p-t*l*p)*w,e[7]=(o*h*s-u*l*s+u*r*c-t*h*c-o*r*d+t*l*d)*w,e[8]=S*w,e[9]=(g*f*s-u*_*s-g*i*d+t*_*d+u*i*p-t*f*p)*w,e[10]=(o*_*s-g*a*s+g*i*c-t*_*c-o*i*p+t*a*p)*w,e[11]=(u*a*s-o*f*s-u*i*c+t*f*c+o*i*d-t*a*d)*w,e[12]=b*w,e[13]=(u*_*r-g*f*r+g*i*h-t*_*h-u*i*m+t*f*m)*w,e[14]=(g*a*r-o*_*r-g*i*l+t*_*l+o*i*m-t*a*m)*w,e[15]=(o*f*r-u*a*r+u*i*l-t*f*l-o*i*h+t*a*h)*w,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,f=a+a,h=s*c,d=s*u,g=s*f,_=o*u,m=o*f,p=a*f,M=l*c,y=l*u,S=l*f,b=i.x,R=i.y,w=i.z;return r[0]=(1-(_+p))*b,r[1]=(d+S)*b,r[2]=(g-y)*b,r[3]=0,r[4]=(d-S)*R,r[5]=(1-(h+p))*R,r[6]=(m+M)*R,r[7]=0,r[8]=(g+y)*w,r[9]=(m-M)*w,r[10]=(1-(h+_))*w,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;if(e.x=r[12],e.y=r[13],e.z=r[14],this.determinant()===0)return i.set(1,1,1),t.identity(),this;let s=So.set(r[0],r[1],r[2]).length();const o=So.set(r[4],r[5],r[6]).length(),a=So.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),Ui.copy(this);const c=1/s,u=1/o,f=1/a;return Ui.elements[0]*=c,Ui.elements[1]*=c,Ui.elements[2]*=c,Ui.elements[4]*=u,Ui.elements[5]*=u,Ui.elements[6]*=u,Ui.elements[8]*=f,Ui.elements[9]*=f,Ui.elements[10]*=f,t.setFromRotationMatrix(Ui),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=sr,l=!1){const c=this.elements,u=2*s/(t-e),f=2*s/(i-r),h=(t+e)/(t-e),d=(i+r)/(i-r);let g,_;if(l)g=s/(o-s),_=o*s/(o-s);else if(a===sr)g=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===ou)g=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=f,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=sr,l=!1){const c=this.elements,u=2/(t-e),f=2/(i-r),h=-(t+e)/(t-e),d=-(i+r)/(i-r);let g,_;if(l)g=1/(o-s),_=o/(o-s);else if(a===sr)g=-2/(o-s),_=-(o+s)/(o-s);else if(a===ou)g=-1/(o-s),_=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=f,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const So=new ne,Ui=new Kt,Mb=new ne(0,0,0),yb=new ne(1,1,1),Kr=new ne,rc=new ne,ai=new ne,$m=new Kt,Km=new Il;class Hr{constructor(e=0,t=0,i=0,r=Hr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],f=r[2],h=r[6],d=r[10];switch(t){case"XYZ":this._y=Math.asin(ct(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ct(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(ct(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-ct(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ct(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-ct(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:Ze("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return $m.makeRotationFromQuaternion(e),this.setFromRotationMatrix($m,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Km.setFromEuler(this),this.setFromQuaternion(Km,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Hr.DEFAULT_ORDER="XYZ";class Qx{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Eb=0;const jm=new ne,Mo=new Il,xr=new Kt,sc=new ne,Ea=new ne,bb=new ne,Tb=new Il,Zm=new ne(1,0,0),Jm=new ne(0,1,0),Qm=new ne(0,0,1),e_={type:"added"},Ab={type:"removed"},yo={type:"childadded",child:null},mf={type:"childremoved",child:null};class ni extends ha{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Eb++}),this.uuid=Dl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ni.DEFAULT_UP.clone();const e=new ne,t=new Hr,i=new Il,r=new ne(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Kt},normalMatrix:{value:new et}}),this.matrix=new Kt,this.matrixWorld=new Kt,this.matrixAutoUpdate=ni.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ni.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Qx,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Mo.setFromAxisAngle(e,t),this.quaternion.multiply(Mo),this}rotateOnWorldAxis(e,t){return Mo.setFromAxisAngle(e,t),this.quaternion.premultiply(Mo),this}rotateX(e){return this.rotateOnAxis(Zm,e)}rotateY(e){return this.rotateOnAxis(Jm,e)}rotateZ(e){return this.rotateOnAxis(Qm,e)}translateOnAxis(e,t){return jm.copy(e).applyQuaternion(this.quaternion),this.position.add(jm.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Zm,e)}translateY(e){return this.translateOnAxis(Jm,e)}translateZ(e){return this.translateOnAxis(Qm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(xr.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?sc.copy(e):sc.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Ea.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?xr.lookAt(Ea,sc,this.up):xr.lookAt(sc,Ea,this.up),this.quaternion.setFromRotationMatrix(xr),r&&(xr.extractRotation(r.matrixWorld),Mo.setFromRotationMatrix(xr),this.quaternion.premultiply(Mo.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(mt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(e_),yo.child=e,this.dispatchEvent(yo),yo.child=null):mt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ab),mf.child=e,this.dispatchEvent(mf),mf.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),xr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),xr.multiply(e.parent.matrixWorld)),e.applyMatrix4(xr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(e_),yo.child=e,this.dispatchEvent(yo),yo.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ea,e,bb),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ea,Tb,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),h=o(e.skeletons),d=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),d.length>0&&(i.animations=d),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}ni.DEFAULT_UP=new ne(0,1,0);ni.DEFAULT_MATRIX_AUTO_UPDATE=!0;ni.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Fi=new ne,vr=new ne,_f=new ne,Sr=new ne,Eo=new ne,bo=new ne,t_=new ne,gf=new ne,xf=new ne,vf=new ne,Sf=new Yt,Mf=new Yt,yf=new Yt;class zi{constructor(e=new ne,t=new ne,i=new ne){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Fi.subVectors(e,t),r.cross(Fi);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Fi.subVectors(r,t),vr.subVectors(i,t),_f.subVectors(e,t);const o=Fi.dot(Fi),a=Fi.dot(vr),l=Fi.dot(_f),c=vr.dot(vr),u=vr.dot(_f),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;const h=1/f,d=(c*l-a*u)*h,g=(o*u-a*l)*h;return s.set(1-d-g,g,d)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Sr)===null?!1:Sr.x>=0&&Sr.y>=0&&Sr.x+Sr.y<=1}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,Sr)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Sr.x),l.addScaledVector(o,Sr.y),l.addScaledVector(a,Sr.z),l)}static getInterpolatedAttribute(e,t,i,r,s,o){return Sf.setScalar(0),Mf.setScalar(0),yf.setScalar(0),Sf.fromBufferAttribute(e,t),Mf.fromBufferAttribute(e,i),yf.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Sf,s.x),o.addScaledVector(Mf,s.y),o.addScaledVector(yf,s.z),o}static isFrontFacing(e,t,i,r){return Fi.subVectors(i,t),vr.subVectors(e,t),Fi.cross(vr).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Fi.subVectors(this.c,this.b),vr.subVectors(this.a,this.b),Fi.cross(vr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return zi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return zi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return zi.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return zi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return zi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;Eo.subVectors(r,i),bo.subVectors(s,i),gf.subVectors(e,i);const l=Eo.dot(gf),c=bo.dot(gf);if(l<=0&&c<=0)return t.copy(i);xf.subVectors(e,r);const u=Eo.dot(xf),f=bo.dot(xf);if(u>=0&&f<=u)return t.copy(r);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(Eo,o);vf.subVectors(e,s);const d=Eo.dot(vf),g=bo.dot(vf);if(g>=0&&d<=g)return t.copy(s);const _=d*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(i).addScaledVector(bo,a);const m=u*g-d*f;if(m<=0&&f-u>=0&&d-g>=0)return t_.subVectors(s,r),a=(f-u)/(f-u+(d-g)),t.copy(r).addScaledVector(t_,a);const p=1/(m+_+h);return o=_*p,a=h*p,t.copy(i).addScaledVector(Eo,o).addScaledVector(bo,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const ev={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},jr={h:0,s:0,l:0},oc={h:0,s:0,l:0};function Ef(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class St{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ai){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ft.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=ft.workingColorSpace){return this.r=e,this.g=t,this.b=i,ft.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=ft.workingColorSpace){if(e=db(e,1),t=ct(t,0,1),i=ct(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=Ef(o,s,e+1/3),this.g=Ef(o,s,e),this.b=Ef(o,s,e-1/3)}return ft.colorSpaceToWorking(this,r),this}setStyle(e,t=Ai){function i(s){s!==void 0&&parseFloat(s)<1&&Ze("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Ze("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);Ze("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ai){const i=ev[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Ze("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Nr(e.r),this.g=Nr(e.g),this.b=Nr(e.b),this}copyLinearToSRGB(e){return this.r=Ko(e.r),this.g=Ko(e.g),this.b=Ko(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ai){return ft.workingToColorSpace(Mn.copy(this),e),Math.round(ct(Mn.r*255,0,255))*65536+Math.round(ct(Mn.g*255,0,255))*256+Math.round(ct(Mn.b*255,0,255))}getHexString(e=Ai){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ft.workingColorSpace){ft.workingToColorSpace(Mn.copy(this),t);const i=Mn.r,r=Mn.g,s=Mn.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=ft.workingColorSpace){return ft.workingToColorSpace(Mn.copy(this),t),e.r=Mn.r,e.g=Mn.g,e.b=Mn.b,e}getStyle(e=Ai){ft.workingToColorSpace(Mn.copy(this),e);const t=Mn.r,i=Mn.g,r=Mn.b;return e!==Ai?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(jr),this.setHSL(jr.h+e,jr.s+t,jr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(jr),e.getHSL(oc);const i=sf(jr.h,oc.h,t),r=sf(jr.s,oc.s,t),s=sf(jr.l,oc.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Mn=new St;St.NAMES=ev;let wb=0;class Nl extends ha{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:wb++}),this.uuid=Dl(),this.name="",this.type="Material",this.blending=$o,this.side=ys,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Mh,this.blendDst=yh,this.blendEquation=Vs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new St(0,0,0),this.blendAlpha=0,this.depthFunc=sa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=km,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=mo,this.stencilZFail=mo,this.stencilZPass=mo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){Ze(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Ze(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==$o&&(i.blending=this.blending),this.side!==ys&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Mh&&(i.blendSrc=this.blendSrc),this.blendDst!==yh&&(i.blendDst=this.blendDst),this.blendEquation!==Vs&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==sa&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==km&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==mo&&(i.stencilFail=this.stencilFail),this.stencilZFail!==mo&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==mo&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class tv extends Nl{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new St(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Hr,this.combine=Nx,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Zt=new ne,ac=new At;let Rb=0;class Hi{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Rb++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Vm,this.updateRanges=[],this.gpuType=rr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)ac.fromBufferAttribute(this,t),ac.applyMatrix3(e),this.setXY(t,ac.x,ac.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Zt.fromBufferAttribute(this,t),Zt.applyMatrix3(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Zt.fromBufferAttribute(this,t),Zt.applyMatrix4(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Zt.fromBufferAttribute(this,t),Zt.applyNormalMatrix(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Zt.fromBufferAttribute(this,t),Zt.transformDirection(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Sa(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=$n(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Sa(t,this.array)),t}setX(e,t){return this.normalized&&(t=$n(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Sa(t,this.array)),t}setY(e,t){return this.normalized&&(t=$n(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Sa(t,this.array)),t}setZ(e,t){return this.normalized&&(t=$n(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Sa(t,this.array)),t}setW(e,t){return this.normalized&&(t=$n(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=$n(t,this.array),i=$n(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=$n(t,this.array),i=$n(i,this.array),r=$n(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=$n(t,this.array),i=$n(i,this.array),r=$n(r,this.array),s=$n(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Vm&&(e.usage=this.usage),e}}class nv extends Hi{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class iv extends Hi{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Ur extends Hi{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Cb=0;const bi=new Kt,bf=new ni,To=new ne,li=new Ll,ba=new Ll,fn=new ne;class Xi extends ha{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Cb++}),this.uuid=Dl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(jx(e)?iv:nv)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new et().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return bi.makeRotationFromQuaternion(e),this.applyMatrix4(bi),this}rotateX(e){return bi.makeRotationX(e),this.applyMatrix4(bi),this}rotateY(e){return bi.makeRotationY(e),this.applyMatrix4(bi),this}rotateZ(e){return bi.makeRotationZ(e),this.applyMatrix4(bi),this}translate(e,t,i){return bi.makeTranslation(e,t,i),this.applyMatrix4(bi),this}scale(e,t,i){return bi.makeScale(e,t,i),this.applyMatrix4(bi),this}lookAt(e){return bf.lookAt(e),bf.updateMatrix(),this.applyMatrix4(bf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(To).negate(),this.translate(To.x,To.y,To.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ur(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&Ze("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ll);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){mt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ne(-1/0,-1/0,-1/0),new ne(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];li.setFromBufferAttribute(s),this.morphTargetsRelative?(fn.addVectors(this.boundingBox.min,li.min),this.boundingBox.expandByPoint(fn),fn.addVectors(this.boundingBox.max,li.max),this.boundingBox.expandByPoint(fn)):(this.boundingBox.expandByPoint(li.min),this.boundingBox.expandByPoint(li.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&mt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new bu);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){mt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ne,1/0);return}if(e){const i=this.boundingSphere.center;if(li.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];ba.setFromBufferAttribute(a),this.morphTargetsRelative?(fn.addVectors(li.min,ba.min),li.expandByPoint(fn),fn.addVectors(li.max,ba.max),li.expandByPoint(fn)):(li.expandByPoint(ba.min),li.expandByPoint(ba.max))}li.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)fn.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(fn));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)fn.fromBufferAttribute(a,c),l&&(To.fromBufferAttribute(e,c),fn.add(To)),r=Math.max(r,i.distanceToSquared(fn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&mt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){mt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Hi(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let U=0;U<i.count;U++)a[U]=new ne,l[U]=new ne;const c=new ne,u=new ne,f=new ne,h=new At,d=new At,g=new At,_=new ne,m=new ne;function p(U,v,E){c.fromBufferAttribute(i,U),u.fromBufferAttribute(i,v),f.fromBufferAttribute(i,E),h.fromBufferAttribute(s,U),d.fromBufferAttribute(s,v),g.fromBufferAttribute(s,E),u.sub(c),f.sub(c),d.sub(h),g.sub(h);const F=1/(d.x*g.y-g.x*d.y);isFinite(F)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(f,-d.y).multiplyScalar(F),m.copy(f).multiplyScalar(d.x).addScaledVector(u,-g.x).multiplyScalar(F),a[U].add(_),a[v].add(_),a[E].add(_),l[U].add(m),l[v].add(m),l[E].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let U=0,v=M.length;U<v;++U){const E=M[U],F=E.start,k=E.count;for(let H=F,$=F+k;H<$;H+=3)p(e.getX(H+0),e.getX(H+1),e.getX(H+2))}const y=new ne,S=new ne,b=new ne,R=new ne;function w(U){b.fromBufferAttribute(r,U),R.copy(b);const v=a[U];y.copy(v),y.sub(b.multiplyScalar(b.dot(v))).normalize(),S.crossVectors(R,v);const F=S.dot(l[U])<0?-1:1;o.setXYZW(U,y.x,y.y,y.z,F)}for(let U=0,v=M.length;U<v;++U){const E=M[U],F=E.start,k=E.count;for(let H=F,$=F+k;H<$;H+=3)w(e.getX(H+0)),w(e.getX(H+1)),w(e.getX(H+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Hi(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,d=i.count;h<d;h++)i.setXYZ(h,0,0,0);const r=new ne,s=new ne,o=new ne,a=new ne,l=new ne,c=new ne,u=new ne,f=new ne;if(e)for(let h=0,d=e.count;h<d;h+=3){const g=e.getX(h+0),_=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,d=t.count;h<d;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)fn.fromBufferAttribute(e,t),fn.normalize(),e.setXYZ(t,fn.x,fn.y,fn.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,h=new c.constructor(l.length*u);let d=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?d=l[_]*a.data.stride+a.offset:d=l[_]*u;for(let p=0;p<u;p++)h[g++]=c[d++]}return new Hi(h,u,f)}if(this.index===null)return Ze("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Xi,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){const h=c[u],d=e(h,i);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const d=c[f];u.push(d.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const n_=new Kt,Is=new Jx,lc=new bu,i_=new ne,cc=new ne,uc=new ne,fc=new ne,Tf=new ne,hc=new ne,r_=new ne,dc=new ne;class Wr extends ni{constructor(e=new Xi,t=new tv){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){hc.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],f=s[l];u!==0&&(Tf.fromBufferAttribute(f,e),o?hc.addScaledVector(Tf,u):hc.addScaledVector(Tf.sub(t),u))}t.add(hc)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),lc.copy(i.boundingSphere),lc.applyMatrix4(s),Is.copy(e.ray).recast(e.near),!(lc.containsPoint(Is.origin)===!1&&(Is.intersectSphere(lc,i_)===null||Is.origin.distanceToSquared(i_)>(e.far-e.near)**2))&&(n_.copy(s).invert(),Is.copy(e.ray).applyMatrix4(n_),!(i.boundingBox!==null&&Is.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Is)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,h=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=h.length;g<_;g++){const m=h[g],p=o[m.materialIndex],M=Math.max(m.start,d.start),y=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let S=M,b=y;S<b;S+=3){const R=a.getX(S),w=a.getX(S+1),U=a.getX(S+2);r=pc(this,p,e,i,c,u,f,R,w,U),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const M=a.getX(m),y=a.getX(m+1),S=a.getX(m+2);r=pc(this,o,e,i,c,u,f,M,y,S),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=h.length;g<_;g++){const m=h[g],p=o[m.materialIndex],M=Math.max(m.start,d.start),y=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let S=M,b=y;S<b;S+=3){const R=S,w=S+1,U=S+2;r=pc(this,p,e,i,c,u,f,R,w,U),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const M=m,y=m+1,S=m+2;r=pc(this,o,e,i,c,u,f,M,y,S),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function Pb(n,e,t,i,r,s,o,a){let l;if(e.side===ti?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===ys,a),l===null)return null;dc.copy(a),dc.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(dc);return c<t.near||c>t.far?null:{distance:c,point:dc.clone(),object:n}}function pc(n,e,t,i,r,s,o,a,l,c){n.getVertexPosition(a,cc),n.getVertexPosition(l,uc),n.getVertexPosition(c,fc);const u=Pb(n,e,t,i,cc,uc,fc,r_);if(u){const f=new ne;zi.getBarycoord(r_,cc,uc,fc,f),r&&(u.uv=zi.getInterpolatedAttribute(r,a,l,c,f,new At)),s&&(u.uv1=zi.getInterpolatedAttribute(s,a,l,c,f,new At)),o&&(u.normal=zi.getInterpolatedAttribute(o,a,l,c,f,new ne),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new ne,materialIndex:0};zi.getNormal(cc,uc,fc,h.normal),u.face=h,u.barycoord=f}return u}class Ul extends Xi{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],f=[];let h=0,d=0;g("z","y","x",-1,-1,i,t,e,o,s,0),g("z","y","x",1,-1,i,t,-e,o,s,1),g("x","z","y",1,1,e,i,t,r,o,2),g("x","z","y",1,-1,e,i,-t,r,o,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Ur(c,3)),this.setAttribute("normal",new Ur(u,3)),this.setAttribute("uv",new Ur(f,2));function g(_,m,p,M,y,S,b,R,w,U,v){const E=S/w,F=b/U,k=S/2,H=b/2,$=R/2,Q=w+1,W=U+1;let V=0,Y=0;const he=new ne;for(let L=0;L<W;L++){const de=L*F-H;for(let Fe=0;Fe<Q;Fe++){const ze=Fe*E-k;he[_]=ze*M,he[m]=de*y,he[p]=$,c.push(he.x,he.y,he.z),he[_]=0,he[m]=0,he[p]=R>0?1:-1,u.push(he.x,he.y,he.z),f.push(Fe/w),f.push(1-L/U),V+=1}}for(let L=0;L<U;L++)for(let de=0;de<w;de++){const Fe=h+de+Q*L,ze=h+de+Q*(L+1),He=h+(de+1)+Q*(L+1),qe=h+(de+1)+Q*L;l.push(Fe,ze,qe),l.push(ze,He,qe),Y+=6}a.addGroup(d,Y,v),d+=Y,h+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ul(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ca(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(Ze("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Fn(n){const e={};for(let t=0;t<n.length;t++){const i=ca(n[t]);for(const r in i)e[r]=i[r]}return e}function Db(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function rv(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ft.workingColorSpace}const Ib={clone:ca,merge:Fn};var Lb=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Nb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class dr extends Nl{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Lb,this.fragmentShader=Nb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ca(e.uniforms),this.uniformsGroups=Db(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class sv extends ni{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Kt,this.projectionMatrix=new Kt,this.projectionMatrixInverse=new Kt,this.coordinateSystem=sr,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Zr=new ne,s_=new At,o_=new At;class Ci extends sv{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=hd*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(rf*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return hd*2*Math.atan(Math.tan(rf*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Zr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Zr.x,Zr.y).multiplyScalar(-e/Zr.z),Zr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Zr.x,Zr.y).multiplyScalar(-e/Zr.z)}getViewSize(e,t){return this.getViewBounds(e,s_,o_),t.subVectors(o_,s_)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(rf*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ao=-90,wo=1;class Ub extends ni{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Ci(Ao,wo,e,t);r.layers=this.layers,this.add(r);const s=new Ci(Ao,wo,e,t);s.layers=this.layers,this.add(s);const o=new Ci(Ao,wo,e,t);o.layers=this.layers,this.add(o);const a=new Ci(Ao,wo,e,t);a.layers=this.layers,this.add(a);const l=new Ci(Ao,wo,e,t);l.layers=this.layers,this.add(l);const c=new Ci(Ao,wo,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===sr)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ou)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(f,h,d),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class ov extends Pn{constructor(e=[],t=so,i,r,s,o,a,l,c,u){super(e,t,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class av extends cr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new ov(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Ul(5,5,5),s=new dr({name:"CubemapFromEquirect",uniforms:ca(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:ti,blending:Lr});s.uniforms.tEquirect.value=t;const o=new Wr(r,s),a=t.minFilter;return t.minFilter===Xs&&(t.minFilter=wn),new Ub(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}class mc extends ni{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Fb={type:"move"};class Af{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new mc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new mc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ne,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ne),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new mc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ne,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ne),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,i),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,g=.005;c.inputState.pinching&&h>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Fb)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new mc;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class yp{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new St(e),this.density=t}clone(){return new yp(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Ob extends ni{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Hr,this.environmentIntensity=1,this.environmentRotation=new Hr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Bb extends Pn{constructor(e=null,t=1,i=1,r,s,o,a,l,c=gn,u=gn,f,h){super(null,o,a,l,c,u,r,s,f,h),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const wf=new ne,zb=new ne,kb=new et;class ks{constructor(e=new ne(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=wf.subVectors(i,t).cross(zb.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(wf),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||kb.getNormalMatrix(e),r=this.coplanarPoint(wf).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ls=new bu,Vb=new At(.5,.5),_c=new ne;class lv{constructor(e=new ks,t=new ks,i=new ks,r=new ks,s=new ks,o=new ks){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=sr,i=!1){const r=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],c=s[3],u=s[4],f=s[5],h=s[6],d=s[7],g=s[8],_=s[9],m=s[10],p=s[11],M=s[12],y=s[13],S=s[14],b=s[15];if(r[0].setComponents(c-o,d-u,p-g,b-M).normalize(),r[1].setComponents(c+o,d+u,p+g,b+M).normalize(),r[2].setComponents(c+a,d+f,p+_,b+y).normalize(),r[3].setComponents(c-a,d-f,p-_,b-y).normalize(),i)r[4].setComponents(l,h,m,S).normalize(),r[5].setComponents(c-l,d-h,p-m,b-S).normalize();else if(r[4].setComponents(c-l,d-h,p-m,b-S).normalize(),t===sr)r[5].setComponents(c+l,d+h,p+m,b+S).normalize();else if(t===ou)r[5].setComponents(l,h,m,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ls.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ls.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ls)}intersectsSprite(e){Ls.center.set(0,0,0);const t=Vb.distanceTo(e.center);return Ls.radius=.7071067811865476+t,Ls.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ls)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(_c.x=r.normal.x>0?e.max.x:e.min.x,_c.y=r.normal.y>0?e.max.y:e.min.y,_c.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(_c)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class cv extends Nl{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new St(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const a_=new Kt,dd=new Jx,gc=new bu,xc=new ne;class Gb extends ni{constructor(e=new Xi,t=new cv){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),gc.copy(i.boundingSphere),gc.applyMatrix4(r),gc.radius+=s,e.ray.intersectsSphere(gc)===!1)return;a_.copy(r).invert(),dd.copy(e.ray).applyMatrix4(a_);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,f=i.attributes.position;if(c!==null){const h=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let g=h,_=d;g<_;g++){const m=c.getX(g);xc.fromBufferAttribute(f,m),l_(xc,m,l,r,e,t,this)}}else{const h=Math.max(0,o.start),d=Math.min(f.count,o.start+o.count);for(let g=h,_=d;g<_;g++)xc.fromBufferAttribute(f,g),l_(xc,g,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function l_(n,e,t,i,r,s,o){const a=dd.distanceSqToPoint(n);if(a<t){const l=new ne;dd.closestPointToPoint(n,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class Hb extends Pn{constructor(e,t,i,r,s,o,a,l,c){super(e,t,i,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class bl extends Pn{constructor(e,t,i=hr,r,s,o,a=gn,l=gn,c,u=Gr,f=1){if(u!==Gr&&u!==qs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:f};super(h,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Mp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Wb extends bl{constructor(e,t=hr,i=so,r,s,o=gn,a=gn,l,c=Gr){const u={width:e,height:e,depth:1},f=[u,u,u,u,u,u];super(e,e,t,i,r,s,o,a,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class uv extends Pn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Tu extends Xi{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,f=e/a,h=t/l,d=[],g=[],_=[],m=[];for(let p=0;p<u;p++){const M=p*h-o;for(let y=0;y<c;y++){const S=y*f-s;g.push(S,-M,0),_.push(0,0,1),m.push(y/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let M=0;M<a;M++){const y=M+c*p,S=M+c*(p+1),b=M+1+c*(p+1),R=M+1+c*p;d.push(y,S,R),d.push(S,b,R)}this.setIndex(d),this.setAttribute("position",new Ur(g,3)),this.setAttribute("normal",new Ur(_,3)),this.setAttribute("uv",new Ur(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Tu(e.width,e.height,e.widthSegments,e.heightSegments)}}class Xb extends dr{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class qb extends Nl{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=nb,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Yb extends Nl{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class fv extends sv{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class $b extends Ci{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function c_(n,e,t,i){const r=Kb(i);switch(t){case Yx:return n*e;case Kx:return n*e/r.components*r.byteLength;case _p:return n*e/r.components*r.byteLength;case aa:return n*e*2/r.components*r.byteLength;case gp:return n*e*2/r.components*r.byteLength;case $x:return n*e*3/r.components*r.byteLength;case ki:return n*e*4/r.components*r.byteLength;case xp:return n*e*4/r.components*r.byteLength;case Uc:case Fc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Oc:case Bc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Uh:case Oh:return Math.max(n,16)*Math.max(e,8)/4;case Nh:case Fh:return Math.max(n,8)*Math.max(e,8)/2;case Bh:case zh:case Vh:case Gh:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case kh:case Hh:case Wh:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Xh:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case qh:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Yh:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case $h:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Kh:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case jh:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Zh:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Jh:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Qh:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case ed:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case td:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case nd:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case id:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case rd:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case sd:case od:case ad:return Math.ceil(n/4)*Math.ceil(e/4)*16;case ld:case cd:return Math.ceil(n/4)*Math.ceil(e/4)*8;case ud:case fd:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Kb(n){switch(n){case Pi:case Hx:return{byteLength:1,components:1};case Ml:case Wx:case Vr:return{byteLength:2,components:1};case pp:case mp:return{byteLength:2,components:4};case hr:case dp:case rr:return{byteLength:4,components:1};case Xx:case qx:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:hp}}));typeof window<"u"&&(window.__THREE__?Ze("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=hp);function hv(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function jb(n){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,f=c.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=n.SHORT;else if(c instanceof Uint32Array)d=n.UNSIGNED_INT;else if(c instanceof Int32Array)d=n.INT;else if(c instanceof Int8Array)d=n.BYTE;else if(c instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){const u=l.array,f=l.updateRanges;if(n.bindBuffer(c,a),f.length===0)n.bufferSubData(c,0,u);else{f.sort((d,g)=>d.start-g.start);let h=0;for(let d=1;d<f.length;d++){const g=f[h],_=f[d];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++h,f[h]=_)}f.length=h+1;for(let d=0,g=f.length;d<g;d++){const _=f[d];n.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var Zb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Jb=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Qb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,eT=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,tT=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,nT=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,iT=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,rT=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,sT=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,oT=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,aT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,lT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,cT=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,uT=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,fT=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,hT=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,dT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,pT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,mT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,_T=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,gT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,xT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,vT=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,ST=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,MT=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,yT=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,ET=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,bT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,TT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,AT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,wT="gl_FragColor = linearToOutputTexel( gl_FragColor );",RT=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,CT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,PT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,DT=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,IT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,LT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,NT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,UT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,FT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,OT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,BT=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,zT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,kT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,VT=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,GT=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,HT=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,WT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,XT=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,qT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,YT=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,$T=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,KT=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( vec3( 1.0 ) - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,jT=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,ZT=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,JT=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,QT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,eA=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tA=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,nA=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,iA=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,rA=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,sA=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,oA=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,aA=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,lA=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,cA=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,uA=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,fA=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,hA=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,dA=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,pA=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,mA=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,_A=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xA=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,vA=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,SA=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,MA=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,yA=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,EA=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,bA=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,TA=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,AA=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,wA=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,RA=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,CA=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,PA=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,DA=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,IA=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 0, 5, phi ).x + bitangent * vogelDiskSample( 0, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 1, 5, phi ).x + bitangent * vogelDiskSample( 1, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 2, 5, phi ).x + bitangent * vogelDiskSample( 2, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 3, 5, phi ).x + bitangent * vogelDiskSample( 3, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 4, 5, phi ).x + bitangent * vogelDiskSample( 4, 5, phi ).y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadow = step( depth, dp );
			#else
				shadow = step( dp, depth );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,LA=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,NA=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,UA=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,FA=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,OA=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,BA=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,zA=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,kA=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,VA=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,GA=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,HA=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,WA=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,XA=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,qA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,YA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,$A=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,KA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const jA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ZA=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,JA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,QA=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,e1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,t1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,n1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,i1=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,r1=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,s1=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,o1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,a1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,l1=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,c1=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,u1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,f1=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,h1=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,d1=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,p1=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,m1=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_1=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,g1=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,x1=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,v1=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,S1=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,M1=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,y1=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,E1=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,b1=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,T1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,A1=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,w1=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,R1=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,C1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,nt={alphahash_fragment:Zb,alphahash_pars_fragment:Jb,alphamap_fragment:Qb,alphamap_pars_fragment:eT,alphatest_fragment:tT,alphatest_pars_fragment:nT,aomap_fragment:iT,aomap_pars_fragment:rT,batching_pars_vertex:sT,batching_vertex:oT,begin_vertex:aT,beginnormal_vertex:lT,bsdfs:cT,iridescence_fragment:uT,bumpmap_pars_fragment:fT,clipping_planes_fragment:hT,clipping_planes_pars_fragment:dT,clipping_planes_pars_vertex:pT,clipping_planes_vertex:mT,color_fragment:_T,color_pars_fragment:gT,color_pars_vertex:xT,color_vertex:vT,common:ST,cube_uv_reflection_fragment:MT,defaultnormal_vertex:yT,displacementmap_pars_vertex:ET,displacementmap_vertex:bT,emissivemap_fragment:TT,emissivemap_pars_fragment:AT,colorspace_fragment:wT,colorspace_pars_fragment:RT,envmap_fragment:CT,envmap_common_pars_fragment:PT,envmap_pars_fragment:DT,envmap_pars_vertex:IT,envmap_physical_pars_fragment:HT,envmap_vertex:LT,fog_vertex:NT,fog_pars_vertex:UT,fog_fragment:FT,fog_pars_fragment:OT,gradientmap_pars_fragment:BT,lightmap_pars_fragment:zT,lights_lambert_fragment:kT,lights_lambert_pars_fragment:VT,lights_pars_begin:GT,lights_toon_fragment:WT,lights_toon_pars_fragment:XT,lights_phong_fragment:qT,lights_phong_pars_fragment:YT,lights_physical_fragment:$T,lights_physical_pars_fragment:KT,lights_fragment_begin:jT,lights_fragment_maps:ZT,lights_fragment_end:JT,logdepthbuf_fragment:QT,logdepthbuf_pars_fragment:eA,logdepthbuf_pars_vertex:tA,logdepthbuf_vertex:nA,map_fragment:iA,map_pars_fragment:rA,map_particle_fragment:sA,map_particle_pars_fragment:oA,metalnessmap_fragment:aA,metalnessmap_pars_fragment:lA,morphinstance_vertex:cA,morphcolor_vertex:uA,morphnormal_vertex:fA,morphtarget_pars_vertex:hA,morphtarget_vertex:dA,normal_fragment_begin:pA,normal_fragment_maps:mA,normal_pars_fragment:_A,normal_pars_vertex:gA,normal_vertex:xA,normalmap_pars_fragment:vA,clearcoat_normal_fragment_begin:SA,clearcoat_normal_fragment_maps:MA,clearcoat_pars_fragment:yA,iridescence_pars_fragment:EA,opaque_fragment:bA,packing:TA,premultiplied_alpha_fragment:AA,project_vertex:wA,dithering_fragment:RA,dithering_pars_fragment:CA,roughnessmap_fragment:PA,roughnessmap_pars_fragment:DA,shadowmap_pars_fragment:IA,shadowmap_pars_vertex:LA,shadowmap_vertex:NA,shadowmask_pars_fragment:UA,skinbase_vertex:FA,skinning_pars_vertex:OA,skinning_vertex:BA,skinnormal_vertex:zA,specularmap_fragment:kA,specularmap_pars_fragment:VA,tonemapping_fragment:GA,tonemapping_pars_fragment:HA,transmission_fragment:WA,transmission_pars_fragment:XA,uv_pars_fragment:qA,uv_pars_vertex:YA,uv_vertex:$A,worldpos_vertex:KA,background_vert:jA,background_frag:ZA,backgroundCube_vert:JA,backgroundCube_frag:QA,cube_vert:e1,cube_frag:t1,depth_vert:n1,depth_frag:i1,distance_vert:r1,distance_frag:s1,equirect_vert:o1,equirect_frag:a1,linedashed_vert:l1,linedashed_frag:c1,meshbasic_vert:u1,meshbasic_frag:f1,meshlambert_vert:h1,meshlambert_frag:d1,meshmatcap_vert:p1,meshmatcap_frag:m1,meshnormal_vert:_1,meshnormal_frag:g1,meshphong_vert:x1,meshphong_frag:v1,meshphysical_vert:S1,meshphysical_frag:M1,meshtoon_vert:y1,meshtoon_frag:E1,points_vert:b1,points_frag:T1,shadow_vert:A1,shadow_frag:w1,sprite_vert:R1,sprite_frag:C1},Ie={common:{diffuse:{value:new St(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new et}},envmap:{envMap:{value:null},envMapRotation:{value:new et},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new et}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new et}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new et},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new et},normalScale:{value:new At(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new et},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new et}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new et}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new et}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new St(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new St(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0},uvTransform:{value:new et}},sprite:{diffuse:{value:new St(16777215)},opacity:{value:1},center:{value:new At(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}}},Qi={basic:{uniforms:Fn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.fog]),vertexShader:nt.meshbasic_vert,fragmentShader:nt.meshbasic_frag},lambert:{uniforms:Fn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new St(0)}}]),vertexShader:nt.meshlambert_vert,fragmentShader:nt.meshlambert_frag},phong:{uniforms:Fn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new St(0)},specular:{value:new St(1118481)},shininess:{value:30}}]),vertexShader:nt.meshphong_vert,fragmentShader:nt.meshphong_frag},standard:{uniforms:Fn([Ie.common,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.roughnessmap,Ie.metalnessmap,Ie.fog,Ie.lights,{emissive:{value:new St(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag},toon:{uniforms:Fn([Ie.common,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.gradientmap,Ie.fog,Ie.lights,{emissive:{value:new St(0)}}]),vertexShader:nt.meshtoon_vert,fragmentShader:nt.meshtoon_frag},matcap:{uniforms:Fn([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,{matcap:{value:null}}]),vertexShader:nt.meshmatcap_vert,fragmentShader:nt.meshmatcap_frag},points:{uniforms:Fn([Ie.points,Ie.fog]),vertexShader:nt.points_vert,fragmentShader:nt.points_frag},dashed:{uniforms:Fn([Ie.common,Ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:nt.linedashed_vert,fragmentShader:nt.linedashed_frag},depth:{uniforms:Fn([Ie.common,Ie.displacementmap]),vertexShader:nt.depth_vert,fragmentShader:nt.depth_frag},normal:{uniforms:Fn([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,{opacity:{value:1}}]),vertexShader:nt.meshnormal_vert,fragmentShader:nt.meshnormal_frag},sprite:{uniforms:Fn([Ie.sprite,Ie.fog]),vertexShader:nt.sprite_vert,fragmentShader:nt.sprite_frag},background:{uniforms:{uvTransform:{value:new et},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:nt.background_vert,fragmentShader:nt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new et}},vertexShader:nt.backgroundCube_vert,fragmentShader:nt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:nt.cube_vert,fragmentShader:nt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:nt.equirect_vert,fragmentShader:nt.equirect_frag},distance:{uniforms:Fn([Ie.common,Ie.displacementmap,{referencePosition:{value:new ne},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:nt.distance_vert,fragmentShader:nt.distance_frag},shadow:{uniforms:Fn([Ie.lights,Ie.fog,{color:{value:new St(0)},opacity:{value:1}}]),vertexShader:nt.shadow_vert,fragmentShader:nt.shadow_frag}};Qi.physical={uniforms:Fn([Qi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new et},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new et},clearcoatNormalScale:{value:new At(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new et},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new et},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new et},sheen:{value:0},sheenColor:{value:new St(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new et},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new et},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new et},transmissionSamplerSize:{value:new At},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new et},attenuationDistance:{value:0},attenuationColor:{value:new St(0)},specularColor:{value:new St(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new et},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new et},anisotropyVector:{value:new At},anisotropyMap:{value:null},anisotropyMapTransform:{value:new et}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag};const vc={r:0,b:0,g:0},Ns=new Hr,P1=new Kt;function D1(n,e,t,i,r,s,o){const a=new St(0);let l=s===!0?0:1,c,u,f=null,h=0,d=null;function g(y){let S=y.isScene===!0?y.background:null;return S&&S.isTexture&&(S=(y.backgroundBlurriness>0?t:e).get(S)),S}function _(y){let S=!1;const b=g(y);b===null?p(a,l):b&&b.isColor&&(p(b,1),S=!0);const R=n.xr.getEnvironmentBlendMode();R==="additive"?i.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||S)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(y,S){const b=g(S);b&&(b.isCubeTexture||b.mapping===Eu)?(u===void 0&&(u=new Wr(new Ul(1,1,1),new dr({name:"BackgroundCubeMaterial",uniforms:ca(Qi.backgroundCube.uniforms),vertexShader:Qi.backgroundCube.vertexShader,fragmentShader:Qi.backgroundCube.fragmentShader,side:ti,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(R,w,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Ns.copy(S.backgroundRotation),Ns.x*=-1,Ns.y*=-1,Ns.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Ns.y*=-1,Ns.z*=-1),u.material.uniforms.envMap.value=b,u.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(P1.makeRotationFromEuler(Ns)),u.material.toneMapped=ft.getTransfer(b.colorSpace)!==Et,(f!==b||h!==b.version||d!==n.toneMapping)&&(u.material.needsUpdate=!0,f=b,h=b.version,d=n.toneMapping),u.layers.enableAll(),y.unshift(u,u.geometry,u.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new Wr(new Tu(2,2),new dr({name:"BackgroundMaterial",uniforms:ca(Qi.background.uniforms),vertexShader:Qi.background.vertexShader,fragmentShader:Qi.background.fragmentShader,side:ys,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=ft.getTransfer(b.colorSpace)!==Et,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(f!==b||h!==b.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,f=b,h=b.version,d=n.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function p(y,S){y.getRGB(vc,rv(n)),i.buffers.color.setClear(vc.r,vc.g,vc.b,S,o)}function M(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,S=1){a.set(y),l=S,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,p(a,l)},render:_,addToRenderList:m,dispose:M}}function I1(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,o=!1;function a(E,F,k,H,$){let Q=!1;const W=f(H,k,F);s!==W&&(s=W,c(s.object)),Q=d(E,H,k,$),Q&&g(E,H,k,$),$!==null&&e.update($,n.ELEMENT_ARRAY_BUFFER),(Q||o)&&(o=!1,S(E,F,k,H),$!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get($).buffer))}function l(){return n.createVertexArray()}function c(E){return n.bindVertexArray(E)}function u(E){return n.deleteVertexArray(E)}function f(E,F,k){const H=k.wireframe===!0;let $=i[E.id];$===void 0&&($={},i[E.id]=$);let Q=$[F.id];Q===void 0&&(Q={},$[F.id]=Q);let W=Q[H];return W===void 0&&(W=h(l()),Q[H]=W),W}function h(E){const F=[],k=[],H=[];for(let $=0;$<t;$++)F[$]=0,k[$]=0,H[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:k,attributeDivisors:H,object:E,attributes:{},index:null}}function d(E,F,k,H){const $=s.attributes,Q=F.attributes;let W=0;const V=k.getAttributes();for(const Y in V)if(V[Y].location>=0){const L=$[Y];let de=Q[Y];if(de===void 0&&(Y==="instanceMatrix"&&E.instanceMatrix&&(de=E.instanceMatrix),Y==="instanceColor"&&E.instanceColor&&(de=E.instanceColor)),L===void 0||L.attribute!==de||de&&L.data!==de.data)return!0;W++}return s.attributesNum!==W||s.index!==H}function g(E,F,k,H){const $={},Q=F.attributes;let W=0;const V=k.getAttributes();for(const Y in V)if(V[Y].location>=0){let L=Q[Y];L===void 0&&(Y==="instanceMatrix"&&E.instanceMatrix&&(L=E.instanceMatrix),Y==="instanceColor"&&E.instanceColor&&(L=E.instanceColor));const de={};de.attribute=L,L&&L.data&&(de.data=L.data),$[Y]=de,W++}s.attributes=$,s.attributesNum=W,s.index=H}function _(){const E=s.newAttributes;for(let F=0,k=E.length;F<k;F++)E[F]=0}function m(E){p(E,0)}function p(E,F){const k=s.newAttributes,H=s.enabledAttributes,$=s.attributeDivisors;k[E]=1,H[E]===0&&(n.enableVertexAttribArray(E),H[E]=1),$[E]!==F&&(n.vertexAttribDivisor(E,F),$[E]=F)}function M(){const E=s.newAttributes,F=s.enabledAttributes;for(let k=0,H=F.length;k<H;k++)F[k]!==E[k]&&(n.disableVertexAttribArray(k),F[k]=0)}function y(E,F,k,H,$,Q,W){W===!0?n.vertexAttribIPointer(E,F,k,$,Q):n.vertexAttribPointer(E,F,k,H,$,Q)}function S(E,F,k,H){_();const $=H.attributes,Q=k.getAttributes(),W=F.defaultAttributeValues;for(const V in Q){const Y=Q[V];if(Y.location>=0){let he=$[V];if(he===void 0&&(V==="instanceMatrix"&&E.instanceMatrix&&(he=E.instanceMatrix),V==="instanceColor"&&E.instanceColor&&(he=E.instanceColor)),he!==void 0){const L=he.normalized,de=he.itemSize,Fe=e.get(he);if(Fe===void 0)continue;const ze=Fe.buffer,He=Fe.type,qe=Fe.bytesPerElement,se=He===n.INT||He===n.UNSIGNED_INT||he.gpuType===dp;if(he.isInterleavedBufferAttribute){const O=he.data,ie=O.stride,oe=he.offset;if(O.isInstancedInterleavedBuffer){for(let ae=0;ae<Y.locationSize;ae++)p(Y.location+ae,O.meshPerAttribute);E.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=O.meshPerAttribute*O.count)}else for(let ae=0;ae<Y.locationSize;ae++)m(Y.location+ae);n.bindBuffer(n.ARRAY_BUFFER,ze);for(let ae=0;ae<Y.locationSize;ae++)y(Y.location+ae,de/Y.locationSize,He,L,ie*qe,(oe+de/Y.locationSize*ae)*qe,se)}else{if(he.isInstancedBufferAttribute){for(let O=0;O<Y.locationSize;O++)p(Y.location+O,he.meshPerAttribute);E.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let O=0;O<Y.locationSize;O++)m(Y.location+O);n.bindBuffer(n.ARRAY_BUFFER,ze);for(let O=0;O<Y.locationSize;O++)y(Y.location+O,de/Y.locationSize,He,L,de*qe,de/Y.locationSize*O*qe,se)}}else if(W!==void 0){const L=W[V];if(L!==void 0)switch(L.length){case 2:n.vertexAttrib2fv(Y.location,L);break;case 3:n.vertexAttrib3fv(Y.location,L);break;case 4:n.vertexAttrib4fv(Y.location,L);break;default:n.vertexAttrib1fv(Y.location,L)}}}}M()}function b(){U();for(const E in i){const F=i[E];for(const k in F){const H=F[k];for(const $ in H)u(H[$].object),delete H[$];delete F[k]}delete i[E]}}function R(E){if(i[E.id]===void 0)return;const F=i[E.id];for(const k in F){const H=F[k];for(const $ in H)u(H[$].object),delete H[$];delete F[k]}delete i[E.id]}function w(E){for(const F in i){const k=i[F];if(k[E.id]===void 0)continue;const H=k[E.id];for(const $ in H)u(H[$].object),delete H[$];delete k[E.id]}}function U(){v(),o=!0,s!==r&&(s=r,c(s.object))}function v(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:U,resetDefaultState:v,dispose:b,releaseStatesOfGeometry:R,releaseStatesOfProgram:w,initAttributes:_,enableAttribute:m,disableUnusedAttributes:M}}function L1(n,e,t){let i;function r(c){i=c}function s(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function o(c,u,f){f!==0&&(n.drawArraysInstanced(i,c,u,f),t.update(u,i,f))}function a(c,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,f);let d=0;for(let g=0;g<f;g++)d+=u[g];t.update(d,i,1)}function l(c,u,f,h){if(f===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)o(c[g],u[g],h[g]);else{d.multiDrawArraysInstancedWEBGL(i,c,0,u,0,h,0,f);let g=0;for(let _=0;_<f;_++)g+=u[_]*h[_];t.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function N1(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(w){return!(w!==ki&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){const U=w===Vr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==Pi&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==rr&&!U)}function l(w){if(w==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(Ze("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),M=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),y=n.getParameter(n.MAX_VARYING_VECTORS),S=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),b=n.getParameter(n.MAX_SAMPLES),R=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:d,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:M,maxVaryings:y,maxFragmentUniforms:S,maxSamples:b,samples:R}}function U1(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new ks,a=new et,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const d=f.length!==0||h||i!==0||r;return r=h,i=f.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,d){const g=f.clippingPlanes,_=f.clipIntersection,m=f.clipShadows,p=n.get(f);if(!r||g===null||g.length===0||s&&!m)s?u(null):c();else{const M=s?0:i,y=M*4;let S=p.clippingState||null;l.value=S,S=u(g,h,y,d);for(let b=0;b!==y;++b)S[b]=t[b];p.clippingState=S,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,h,d,g){const _=f!==null?f.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=d+_*4,M=h.matrixWorldInverse;a.getNormalMatrix(M),(m===null||m.length<p)&&(m=new Float32Array(p));for(let y=0,S=d;y!==_;++y,S+=4)o.copy(f[y]).applyMatrix4(M,a),o.normal.toArray(m,S),m[S+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function F1(n){let e=new WeakMap;function t(o,a){return a===Ph?o.mapping=so:a===Dh&&(o.mapping=oa),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Ph||a===Dh)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new av(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const fs=4,u_=[.125,.215,.35,.446,.526,.582],Gs=20,O1=256,Ta=new fv,f_=new St;let Rf=null,Cf=0,Pf=0,Df=!1;const B1=new ne;class h_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,r=100,s={}){const{size:o=256,position:a=B1}=s;Rf=this._renderer.getRenderTarget(),Cf=this._renderer.getActiveCubeFace(),Pf=this._renderer.getActiveMipmapLevel(),Df=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=m_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=p_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Rf,Cf,Pf),this._renderer.xr.enabled=Df,e.scissorTest=!1,Ro(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===so||e.mapping===oa?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Rf=this._renderer.getRenderTarget(),Cf=this._renderer.getActiveCubeFace(),Pf=this._renderer.getActiveMipmapLevel(),Df=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:wn,minFilter:wn,generateMipmaps:!1,type:Vr,format:ki,colorSpace:la,depthBuffer:!1},r=d_(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=d_(e,t,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=z1(s)),this._blurMaterial=V1(s,e,t),this._ggxMaterial=k1(s,e,t)}return r}_compileMaterial(e){const t=new Wr(new Xi,e);this._renderer.compile(t,Ta)}_sceneToCubeUV(e,t,i,r,s){const l=new Ci(90,1,t,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,d=f.toneMapping;f.getClearColor(f_),f.toneMapping=lr,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(r),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Wr(new Ul,new tv({name:"PMREM.Background",side:ti,depthWrite:!1,depthTest:!1})));const _=this._backgroundBox,m=_.material;let p=!1;const M=e.background;M?M.isColor&&(m.color.copy(M),e.background=null,p=!0):(m.color.copy(f_),p=!0);for(let y=0;y<6;y++){const S=y%3;S===0?(l.up.set(0,c[y],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[y],s.y,s.z)):S===1?(l.up.set(0,0,c[y]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[y],s.z)):(l.up.set(0,c[y],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[y]));const b=this._cubeSize;Ro(r,S*b,y>2?b:0,b,b),f.setRenderTarget(r),p&&f.render(_,l),f.render(e,l)}f.toneMapping=d,f.autoClear=h,e.background=M}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===so||e.mapping===oa;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=m_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=p_());const s=r?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;const a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Ro(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Ta)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=i}_applyGGXFilter(e,t,i){const r=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;const l=o.uniforms,c=i/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),f=Math.sqrt(c*c-u*u),h=0+c*1.25,d=f*h,{_lodMax:g}=this,_=this._sizeLods[i],m=3*_*(i>g-fs?i-g+fs:0),p=4*(this._cubeSize-_);l.envMap.value=e.texture,l.roughness.value=d,l.mipInt.value=g-t,Ro(s,m,p,3*_,2*_),r.setRenderTarget(s),r.render(a,Ta),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=g-i,Ro(e,m,p,3*_,2*_),r.setRenderTarget(e),r.render(a,Ta)}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&mt("blur direction must be either latitudinal or longitudinal!");const u=3,f=this._lodMeshes[r];f.material=c;const h=c.uniforms,d=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*Gs-1),_=s/g,m=isFinite(s)?1+Math.floor(u*_):Gs;m>Gs&&Ze(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Gs}`);const p=[];let M=0;for(let w=0;w<Gs;++w){const U=w/_,v=Math.exp(-U*U/2);p.push(v),w===0?M+=v:w<m&&(M+=2*v)}for(let w=0;w<p.length;w++)p[w]=p[w]/M;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=p,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:y}=this;h.dTheta.value=g,h.mipInt.value=y-i;const S=this._sizeLods[r],b=3*S*(r>y-fs?r-y+fs:0),R=4*(this._cubeSize-S);Ro(t,b,R,3*S,2*S),l.setRenderTarget(t),l.render(f,Ta)}}function z1(n){const e=[],t=[],i=[];let r=n;const s=n-fs+1+u_.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);e.push(a);let l=1/a;o>n-fs?l=u_[o-n+fs-1]:o===0&&(l=0),t.push(l);const c=1/(a-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],d=6,g=6,_=3,m=2,p=1,M=new Float32Array(_*g*d),y=new Float32Array(m*g*d),S=new Float32Array(p*g*d);for(let R=0;R<d;R++){const w=R%3*2/3-1,U=R>2?0:-1,v=[w,U,0,w+2/3,U,0,w+2/3,U+1,0,w,U,0,w+2/3,U+1,0,w,U+1,0];M.set(v,_*g*R),y.set(h,m*g*R);const E=[R,R,R,R,R,R];S.set(E,p*g*R)}const b=new Xi;b.setAttribute("position",new Hi(M,_)),b.setAttribute("uv",new Hi(y,m)),b.setAttribute("faceIndex",new Hi(S,p)),i.push(new Wr(b,null)),r>fs&&r--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function d_(n,e,t){const i=new cr(n,e,t);return i.texture.mapping=Eu,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ro(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function k1(n,e,t){return new dr({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:O1,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Au(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Lr,depthTest:!1,depthWrite:!1})}function V1(n,e,t){const i=new Float32Array(Gs),r=new ne(0,1,0);return new dr({name:"SphericalGaussianBlur",defines:{n:Gs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Au(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Lr,depthTest:!1,depthWrite:!1})}function p_(){return new dr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Au(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Lr,depthTest:!1,depthWrite:!1})}function m_(){return new dr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Au(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Lr,depthTest:!1,depthWrite:!1})}function Au(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function G1(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Ph||l===Dh,u=l===so||l===oa;if(c||u){let f=e.get(a);const h=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return t===null&&(t=new h_(n)),f=c?t.fromEquirectangular(a,f):t.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const d=a.image;return c&&d&&d.height>0||u&&d&&r(d)?(t===null&&(t=new h_(n)),f=c?t.fromEquirectangular(a):t.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function H1(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const r=n.getExtension(i);return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&El("WebGLRenderer: "+i+" extension not supported."),r}}}function W1(n,e,t,i){const r={},s=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);h.removeEventListener("dispose",o),delete r[h.id];const d=s.get(h);d&&(e.remove(d),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(f,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const d in h)e.update(h[d],n.ARRAY_BUFFER)}function c(f){const h=[],d=f.index,g=f.attributes.position;let _=0;if(d!==null){const M=d.array;_=d.version;for(let y=0,S=M.length;y<S;y+=3){const b=M[y+0],R=M[y+1],w=M[y+2];h.push(b,R,R,w,w,b)}}else if(g!==void 0){const M=g.array;_=g.version;for(let y=0,S=M.length/3-1;y<S;y+=3){const b=y+0,R=y+1,w=y+2;h.push(b,R,R,w,w,b)}}else return;const m=new(jx(h)?iv:nv)(h,1);m.version=_;const p=s.get(f);p&&e.remove(p),s.set(f,m)}function u(f){const h=s.get(f);if(h){const d=f.index;d!==null&&h.version<d.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function X1(n,e,t){let i;function r(h){i=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,d){n.drawElements(i,d,s,h*o),t.update(d,i,1)}function c(h,d,g){g!==0&&(n.drawElementsInstanced(i,d,s,h*o,g),t.update(d,i,g))}function u(h,d,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,s,h,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];t.update(m,i,1)}function f(h,d,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<h.length;p++)c(h[p]/o,d[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(i,d,0,s,h,0,_,0,g);let p=0;for(let M=0;M<g;M++)p+=d[M]*_[M];t.update(p,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function q1(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:mt("WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function Y1(n,e,t){const i=new WeakMap,r=new Yt;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let h=i.get(a);if(h===void 0||h.count!==f){let v=function(){w.dispose(),i.delete(a),a.removeEventListener("dispose",v)};h!==void 0&&h.texture.dispose();const d=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],M=a.morphAttributes.color||[];let y=0;d===!0&&(y=1),g===!0&&(y=2),_===!0&&(y=3);let S=a.attributes.position.count*y,b=1;S>e.maxTextureSize&&(b=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);const R=new Float32Array(S*b*4*f),w=new Zx(R,S,b,f);w.type=rr,w.needsUpdate=!0;const U=y*4;for(let E=0;E<f;E++){const F=m[E],k=p[E],H=M[E],$=S*b*4*E;for(let Q=0;Q<F.count;Q++){const W=Q*U;d===!0&&(r.fromBufferAttribute(F,Q),R[$+W+0]=r.x,R[$+W+1]=r.y,R[$+W+2]=r.z,R[$+W+3]=0),g===!0&&(r.fromBufferAttribute(k,Q),R[$+W+4]=r.x,R[$+W+5]=r.y,R[$+W+6]=r.z,R[$+W+7]=0),_===!0&&(r.fromBufferAttribute(H,Q),R[$+W+8]=r.x,R[$+W+9]=r.y,R[$+W+10]=r.z,R[$+W+11]=H.itemSize===4?r.w:1)}}h={count:f,texture:w,size:new At(S,b)},i.set(a,h),a.addEventListener("dispose",v)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let d=0;for(let _=0;_<c.length;_++)d+=c[_];const g=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:s}}function $1(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return f}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}const K1={[Ux]:"LINEAR_TONE_MAPPING",[Fx]:"REINHARD_TONE_MAPPING",[Ox]:"CINEON_TONE_MAPPING",[Bx]:"ACES_FILMIC_TONE_MAPPING",[kx]:"AGX_TONE_MAPPING",[Vx]:"NEUTRAL_TONE_MAPPING",[zx]:"CUSTOM_TONE_MAPPING"};function j1(n,e,t,i,r){const s=new cr(e,t,{type:n,depthBuffer:i,stencilBuffer:r}),o=new cr(e,t,{type:Vr,depthBuffer:!1,stencilBuffer:!1}),a=new Xi;a.setAttribute("position",new Ur([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new Ur([0,2,0,0,2,0],2));const l=new Xb({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),c=new Wr(a,l),u=new fv(-1,1,1,-1,0,1);let f=null,h=null,d=!1,g,_=null,m=[],p=!1;this.setSize=function(M,y){s.setSize(M,y),o.setSize(M,y);for(let S=0;S<m.length;S++){const b=m[S];b.setSize&&b.setSize(M,y)}},this.setEffects=function(M){m=M,p=m.length>0&&m[0].isRenderPass===!0;const y=s.width,S=s.height;for(let b=0;b<m.length;b++){const R=m[b];R.setSize&&R.setSize(y,S)}},this.begin=function(M,y){if(d||M.toneMapping===lr&&m.length===0)return!1;if(_=y,y!==null){const S=y.width,b=y.height;(s.width!==S||s.height!==b)&&this.setSize(S,b)}return p===!1&&M.setRenderTarget(s),g=M.toneMapping,M.toneMapping=lr,!0},this.hasRenderPass=function(){return p},this.end=function(M,y){M.toneMapping=g,d=!0;let S=s,b=o;for(let R=0;R<m.length;R++){const w=m[R];if(w.enabled!==!1&&(w.render(M,b,S,y),w.needsSwap!==!1)){const U=S;S=b,b=U}}if(f!==M.outputColorSpace||h!==M.toneMapping){f=M.outputColorSpace,h=M.toneMapping,l.defines={},ft.getTransfer(f)===Et&&(l.defines.SRGB_TRANSFER="");const R=K1[h];R&&(l.defines[R]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=S.texture,M.setRenderTarget(_),M.render(c,u),_=null,d=!1},this.isCompositing=function(){return d},this.dispose=function(){s.dispose(),o.dispose(),a.dispose(),l.dispose()}}const dv=new Pn,pd=new bl(1,1),pv=new Zx,mv=new vb,_v=new ov,__=[],g_=[],x_=new Float32Array(16),v_=new Float32Array(9),S_=new Float32Array(4);function da(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=__[r];if(s===void 0&&(s=new Float32Array(r),__[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function an(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function ln(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function wu(n,e){let t=g_[e];t===void 0&&(t=new Int32Array(e),g_[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Z1(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function J1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(an(t,e))return;n.uniform2fv(this.addr,e),ln(t,e)}}function Q1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(an(t,e))return;n.uniform3fv(this.addr,e),ln(t,e)}}function ew(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(an(t,e))return;n.uniform4fv(this.addr,e),ln(t,e)}}function tw(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(an(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),ln(t,e)}else{if(an(t,i))return;S_.set(i),n.uniformMatrix2fv(this.addr,!1,S_),ln(t,i)}}function nw(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(an(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),ln(t,e)}else{if(an(t,i))return;v_.set(i),n.uniformMatrix3fv(this.addr,!1,v_),ln(t,i)}}function iw(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(an(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),ln(t,e)}else{if(an(t,i))return;x_.set(i),n.uniformMatrix4fv(this.addr,!1,x_),ln(t,i)}}function rw(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function sw(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(an(t,e))return;n.uniform2iv(this.addr,e),ln(t,e)}}function ow(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(an(t,e))return;n.uniform3iv(this.addr,e),ln(t,e)}}function aw(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(an(t,e))return;n.uniform4iv(this.addr,e),ln(t,e)}}function lw(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function cw(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(an(t,e))return;n.uniform2uiv(this.addr,e),ln(t,e)}}function uw(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(an(t,e))return;n.uniform3uiv(this.addr,e),ln(t,e)}}function fw(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(an(t,e))return;n.uniform4uiv(this.addr,e),ln(t,e)}}function hw(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(pd.compareFunction=t.isReversedDepthBuffer()?Sp:vp,s=pd):s=dv,t.setTexture2D(e||s,r)}function dw(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||mv,r)}function pw(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||_v,r)}function mw(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||pv,r)}function _w(n){switch(n){case 5126:return Z1;case 35664:return J1;case 35665:return Q1;case 35666:return ew;case 35674:return tw;case 35675:return nw;case 35676:return iw;case 5124:case 35670:return rw;case 35667:case 35671:return sw;case 35668:case 35672:return ow;case 35669:case 35673:return aw;case 5125:return lw;case 36294:return cw;case 36295:return uw;case 36296:return fw;case 35678:case 36198:case 36298:case 36306:case 35682:return hw;case 35679:case 36299:case 36307:return dw;case 35680:case 36300:case 36308:case 36293:return pw;case 36289:case 36303:case 36311:case 36292:return mw}}function gw(n,e){n.uniform1fv(this.addr,e)}function xw(n,e){const t=da(e,this.size,2);n.uniform2fv(this.addr,t)}function vw(n,e){const t=da(e,this.size,3);n.uniform3fv(this.addr,t)}function Sw(n,e){const t=da(e,this.size,4);n.uniform4fv(this.addr,t)}function Mw(n,e){const t=da(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function yw(n,e){const t=da(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Ew(n,e){const t=da(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function bw(n,e){n.uniform1iv(this.addr,e)}function Tw(n,e){n.uniform2iv(this.addr,e)}function Aw(n,e){n.uniform3iv(this.addr,e)}function ww(n,e){n.uniform4iv(this.addr,e)}function Rw(n,e){n.uniform1uiv(this.addr,e)}function Cw(n,e){n.uniform2uiv(this.addr,e)}function Pw(n,e){n.uniform3uiv(this.addr,e)}function Dw(n,e){n.uniform4uiv(this.addr,e)}function Iw(n,e,t){const i=this.cache,r=e.length,s=wu(t,r);an(i,s)||(n.uniform1iv(this.addr,s),ln(i,s));let o;this.type===n.SAMPLER_2D_SHADOW?o=pd:o=dv;for(let a=0;a!==r;++a)t.setTexture2D(e[a]||o,s[a])}function Lw(n,e,t){const i=this.cache,r=e.length,s=wu(t,r);an(i,s)||(n.uniform1iv(this.addr,s),ln(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||mv,s[o])}function Nw(n,e,t){const i=this.cache,r=e.length,s=wu(t,r);an(i,s)||(n.uniform1iv(this.addr,s),ln(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||_v,s[o])}function Uw(n,e,t){const i=this.cache,r=e.length,s=wu(t,r);an(i,s)||(n.uniform1iv(this.addr,s),ln(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||pv,s[o])}function Fw(n){switch(n){case 5126:return gw;case 35664:return xw;case 35665:return vw;case 35666:return Sw;case 35674:return Mw;case 35675:return yw;case 35676:return Ew;case 5124:case 35670:return bw;case 35667:case 35671:return Tw;case 35668:case 35672:return Aw;case 35669:case 35673:return ww;case 5125:return Rw;case 36294:return Cw;case 36295:return Pw;case 36296:return Dw;case 35678:case 36198:case 36298:case 36306:case 35682:return Iw;case 35679:case 36299:case 36307:return Lw;case 35680:case 36300:case 36308:case 36293:return Nw;case 36289:case 36303:case 36311:case 36292:return Uw}}class Ow{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=_w(t.type)}}class Bw{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Fw(t.type)}}class zw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const If=/(\w+)(\])?(\[|\.)?/g;function M_(n,e){n.seq.push(e),n.map[e.id]=e}function kw(n,e,t){const i=n.name,r=i.length;for(If.lastIndex=0;;){const s=If.exec(i),o=If.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){M_(t,c===void 0?new Ow(a,n,e):new Bw(a,n,e));break}else{let f=t.map[a];f===void 0&&(f=new zw(a),M_(t,f)),t=f}}}class zc{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);kw(a,l,this)}const r=[],s=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(o):s.push(o);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function y_(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const Vw=37297;let Gw=0;function Hw(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const E_=new et;function Ww(n){ft._getMatrix(E_,ft.workingColorSpace,n);const e=`mat3( ${E_.elements.map(t=>t.toFixed(4))} )`;switch(ft.getTransfer(n)){case su:return[e,"LinearTransferOETF"];case Et:return[e,"sRGBTransferOETF"];default:return Ze("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function b_(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+Hw(n.getShaderSource(e),a)}else return s}function Xw(n,e){const t=Ww(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const qw={[Ux]:"Linear",[Fx]:"Reinhard",[Ox]:"Cineon",[Bx]:"ACESFilmic",[kx]:"AgX",[Vx]:"Neutral",[zx]:"Custom"};function Yw(n,e){const t=qw[e];return t===void 0?(Ze("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Sc=new ne;function $w(){ft.getLuminanceCoefficients(Sc);const n=Sc.x.toFixed(4),e=Sc.y.toFixed(4),t=Sc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Kw(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Oa).join(`
`)}function jw(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Zw(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Oa(n){return n!==""}function T_(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function A_(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Jw=/^[ \t]*#include +<([\w\d./]+)>/gm;function md(n){return n.replace(Jw,eR)}const Qw=new Map;function eR(n,e){let t=nt[e];if(t===void 0){const i=Qw.get(e);if(i!==void 0)t=nt[i],Ze('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return md(t)}const tR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function w_(n){return n.replace(tR,nR)}function nR(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function R_(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const iR={[Nc]:"SHADOWMAP_TYPE_PCF",[Fa]:"SHADOWMAP_TYPE_VSM"};function rR(n){return iR[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const sR={[so]:"ENVMAP_TYPE_CUBE",[oa]:"ENVMAP_TYPE_CUBE",[Eu]:"ENVMAP_TYPE_CUBE_UV"};function oR(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":sR[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const aR={[oa]:"ENVMAP_MODE_REFRACTION"};function lR(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":aR[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const cR={[Nx]:"ENVMAP_BLENDING_MULTIPLY",[QE]:"ENVMAP_BLENDING_MIX",[eb]:"ENVMAP_BLENDING_ADD"};function uR(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":cR[n.combine]||"ENVMAP_BLENDING_NONE"}function fR(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function hR(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=rR(t),c=oR(t),u=lR(t),f=uR(t),h=fR(t),d=Kw(t),g=jw(s),_=r.createProgram();let m,p,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Oa).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Oa).join(`
`),p.length>0&&(p+=`
`)):(m=[R_(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Oa).join(`
`),p=[R_(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==lr?"#define TONE_MAPPING":"",t.toneMapping!==lr?nt.tonemapping_pars_fragment:"",t.toneMapping!==lr?Yw("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",nt.colorspace_pars_fragment,Xw("linearToOutputTexel",t.outputColorSpace),$w(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Oa).join(`
`)),o=md(o),o=T_(o,t),o=A_(o,t),a=md(a),a=T_(a,t),a=A_(a,t),o=w_(o),a=w_(a),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Gm?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Gm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const y=M+m+o,S=M+p+a,b=y_(r,r.VERTEX_SHADER,y),R=y_(r,r.FRAGMENT_SHADER,S);r.attachShader(_,b),r.attachShader(_,R),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function w(F){if(n.debug.checkShaderErrors){const k=r.getProgramInfoLog(_)||"",H=r.getShaderInfoLog(b)||"",$=r.getShaderInfoLog(R)||"",Q=k.trim(),W=H.trim(),V=$.trim();let Y=!0,he=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(Y=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,_,b,R);else{const L=b_(r,b,"vertex"),de=b_(r,R,"fragment");mt("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+Q+`
`+L+`
`+de)}else Q!==""?Ze("WebGLProgram: Program Info Log:",Q):(W===""||V==="")&&(he=!1);he&&(F.diagnostics={runnable:Y,programLog:Q,vertexShader:{log:W,prefix:m},fragmentShader:{log:V,prefix:p}})}r.deleteShader(b),r.deleteShader(R),U=new zc(r,_),v=Zw(r,_)}let U;this.getUniforms=function(){return U===void 0&&w(this),U};let v;this.getAttributes=function(){return v===void 0&&w(this),v};let E=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=r.getProgramParameter(_,Vw)),E},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Gw++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=b,this.fragmentShader=R,this}let dR=0;class pR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new mR(e),t.set(e,i)),i}}class mR{constructor(e){this.id=dR++,this.code=e,this.usedTimes=0}}function _R(n,e,t,i,r,s,o){const a=new Qx,l=new pR,c=new Set,u=[],f=new Map,h=r.logarithmicDepthBuffer;let d=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(v){return c.add(v),v===0?"uv":`uv${v}`}function m(v,E,F,k,H){const $=k.fog,Q=H.geometry,W=v.isMeshStandardMaterial?k.environment:null,V=(v.isMeshStandardMaterial?t:e).get(v.envMap||W),Y=V&&V.mapping===Eu?V.image.height:null,he=g[v.type];v.precision!==null&&(d=r.getMaxPrecision(v.precision),d!==v.precision&&Ze("WebGLProgram.getParameters:",v.precision,"not supported, using",d,"instead."));const L=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,de=L!==void 0?L.length:0;let Fe=0;Q.morphAttributes.position!==void 0&&(Fe=1),Q.morphAttributes.normal!==void 0&&(Fe=2),Q.morphAttributes.color!==void 0&&(Fe=3);let ze,He,qe,se;if(he){const Le=Qi[he];ze=Le.vertexShader,He=Le.fragmentShader}else ze=v.vertexShader,He=v.fragmentShader,l.update(v),qe=l.getVertexShaderID(v),se=l.getFragmentShaderID(v);const O=n.getRenderTarget(),ie=n.state.buffers.depth.getReversed(),oe=H.isInstancedMesh===!0,ae=H.isBatchedMesh===!0,Ee=!!v.map,D=!!v.matcap,P=!!V,z=!!v.aoMap,Z=!!v.lightMap,j=!!v.bumpMap,I=!!v.normalMap,C=!!v.displacementMap,fe=!!v.emissiveMap,le=!!v.metalnessMap,ee=!!v.roughnessMap,ce=v.anisotropy>0,A=v.clearcoat>0,x=v.dispersion>0,N=v.iridescence>0,K=v.sheen>0,J=v.transmission>0,X=ce&&!!v.anisotropyMap,Me=A&&!!v.clearcoatMap,me=A&&!!v.clearcoatNormalMap,Ce=A&&!!v.clearcoatRoughnessMap,we=N&&!!v.iridescenceMap,_e=N&&!!v.iridescenceThicknessMap,xe=K&&!!v.sheenColorMap,be=K&&!!v.sheenRoughnessMap,Pe=!!v.specularMap,ve=!!v.specularColorMap,Ye=!!v.specularIntensityMap,B=J&&!!v.transmissionMap,Te=J&&!!v.thicknessMap,ge=!!v.gradientMap,Ae=!!v.alphaMap,pe=v.alphaTest>0,ue=!!v.alphaHash,ye=!!v.extensions;let Ge=lr;v.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&(Ge=n.toneMapping);const ht={shaderID:he,shaderType:v.type,shaderName:v.name,vertexShader:ze,fragmentShader:He,defines:v.defines,customVertexShaderID:qe,customFragmentShaderID:se,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:d,batching:ae,batchingColor:ae&&H._colorsTexture!==null,instancing:oe,instancingColor:oe&&H.instanceColor!==null,instancingMorph:oe&&H.morphTexture!==null,outputColorSpace:O===null?n.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:la,alphaToCoverage:!!v.alphaToCoverage,map:Ee,matcap:D,envMap:P,envMapMode:P&&V.mapping,envMapCubeUVHeight:Y,aoMap:z,lightMap:Z,bumpMap:j,normalMap:I,displacementMap:C,emissiveMap:fe,normalMapObjectSpace:I&&v.normalMapType===rb,normalMapTangentSpace:I&&v.normalMapType===ib,metalnessMap:le,roughnessMap:ee,anisotropy:ce,anisotropyMap:X,clearcoat:A,clearcoatMap:Me,clearcoatNormalMap:me,clearcoatRoughnessMap:Ce,dispersion:x,iridescence:N,iridescenceMap:we,iridescenceThicknessMap:_e,sheen:K,sheenColorMap:xe,sheenRoughnessMap:be,specularMap:Pe,specularColorMap:ve,specularIntensityMap:Ye,transmission:J,transmissionMap:B,thicknessMap:Te,gradientMap:ge,opaque:v.transparent===!1&&v.blending===$o&&v.alphaToCoverage===!1,alphaMap:Ae,alphaTest:pe,alphaHash:ue,combine:v.combine,mapUv:Ee&&_(v.map.channel),aoMapUv:z&&_(v.aoMap.channel),lightMapUv:Z&&_(v.lightMap.channel),bumpMapUv:j&&_(v.bumpMap.channel),normalMapUv:I&&_(v.normalMap.channel),displacementMapUv:C&&_(v.displacementMap.channel),emissiveMapUv:fe&&_(v.emissiveMap.channel),metalnessMapUv:le&&_(v.metalnessMap.channel),roughnessMapUv:ee&&_(v.roughnessMap.channel),anisotropyMapUv:X&&_(v.anisotropyMap.channel),clearcoatMapUv:Me&&_(v.clearcoatMap.channel),clearcoatNormalMapUv:me&&_(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ce&&_(v.clearcoatRoughnessMap.channel),iridescenceMapUv:we&&_(v.iridescenceMap.channel),iridescenceThicknessMapUv:_e&&_(v.iridescenceThicknessMap.channel),sheenColorMapUv:xe&&_(v.sheenColorMap.channel),sheenRoughnessMapUv:be&&_(v.sheenRoughnessMap.channel),specularMapUv:Pe&&_(v.specularMap.channel),specularColorMapUv:ve&&_(v.specularColorMap.channel),specularIntensityMapUv:Ye&&_(v.specularIntensityMap.channel),transmissionMapUv:B&&_(v.transmissionMap.channel),thicknessMapUv:Te&&_(v.thicknessMap.channel),alphaMapUv:Ae&&_(v.alphaMap.channel),vertexTangents:!!Q.attributes.tangent&&(I||ce),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!Q.attributes.uv&&(Ee||Ae),fog:!!$,useFog:v.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:v.flatShading===!0&&v.wireframe===!1,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:ie,skinning:H.isSkinnedMesh===!0,morphTargets:Q.morphAttributes.position!==void 0,morphNormals:Q.morphAttributes.normal!==void 0,morphColors:Q.morphAttributes.color!==void 0,morphTargetsCount:de,morphTextureStride:Fe,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:n.shadowMap.enabled&&F.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ge,decodeVideoTexture:Ee&&v.map.isVideoTexture===!0&&ft.getTransfer(v.map.colorSpace)===Et,decodeVideoTextureEmissive:fe&&v.emissiveMap.isVideoTexture===!0&&ft.getTransfer(v.emissiveMap.colorSpace)===Et,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Rr,flipSided:v.side===ti,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:ye&&v.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ye&&v.extensions.multiDraw===!0||ae)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return ht.vertexUv1s=c.has(1),ht.vertexUv2s=c.has(2),ht.vertexUv3s=c.has(3),c.clear(),ht}function p(v){const E=[];if(v.shaderID?E.push(v.shaderID):(E.push(v.customVertexShaderID),E.push(v.customFragmentShaderID)),v.defines!==void 0)for(const F in v.defines)E.push(F),E.push(v.defines[F]);return v.isRawShaderMaterial===!1&&(M(E,v),y(E,v),E.push(n.outputColorSpace)),E.push(v.customProgramCacheKey),E.join()}function M(v,E){v.push(E.precision),v.push(E.outputColorSpace),v.push(E.envMapMode),v.push(E.envMapCubeUVHeight),v.push(E.mapUv),v.push(E.alphaMapUv),v.push(E.lightMapUv),v.push(E.aoMapUv),v.push(E.bumpMapUv),v.push(E.normalMapUv),v.push(E.displacementMapUv),v.push(E.emissiveMapUv),v.push(E.metalnessMapUv),v.push(E.roughnessMapUv),v.push(E.anisotropyMapUv),v.push(E.clearcoatMapUv),v.push(E.clearcoatNormalMapUv),v.push(E.clearcoatRoughnessMapUv),v.push(E.iridescenceMapUv),v.push(E.iridescenceThicknessMapUv),v.push(E.sheenColorMapUv),v.push(E.sheenRoughnessMapUv),v.push(E.specularMapUv),v.push(E.specularColorMapUv),v.push(E.specularIntensityMapUv),v.push(E.transmissionMapUv),v.push(E.thicknessMapUv),v.push(E.combine),v.push(E.fogExp2),v.push(E.sizeAttenuation),v.push(E.morphTargetsCount),v.push(E.morphAttributeCount),v.push(E.numDirLights),v.push(E.numPointLights),v.push(E.numSpotLights),v.push(E.numSpotLightMaps),v.push(E.numHemiLights),v.push(E.numRectAreaLights),v.push(E.numDirLightShadows),v.push(E.numPointLightShadows),v.push(E.numSpotLightShadows),v.push(E.numSpotLightShadowsWithMaps),v.push(E.numLightProbes),v.push(E.shadowMapType),v.push(E.toneMapping),v.push(E.numClippingPlanes),v.push(E.numClipIntersection),v.push(E.depthPacking)}function y(v,E){a.disableAll(),E.instancing&&a.enable(0),E.instancingColor&&a.enable(1),E.instancingMorph&&a.enable(2),E.matcap&&a.enable(3),E.envMap&&a.enable(4),E.normalMapObjectSpace&&a.enable(5),E.normalMapTangentSpace&&a.enable(6),E.clearcoat&&a.enable(7),E.iridescence&&a.enable(8),E.alphaTest&&a.enable(9),E.vertexColors&&a.enable(10),E.vertexAlphas&&a.enable(11),E.vertexUv1s&&a.enable(12),E.vertexUv2s&&a.enable(13),E.vertexUv3s&&a.enable(14),E.vertexTangents&&a.enable(15),E.anisotropy&&a.enable(16),E.alphaHash&&a.enable(17),E.batching&&a.enable(18),E.dispersion&&a.enable(19),E.batchingColor&&a.enable(20),E.gradientMap&&a.enable(21),v.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reversedDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),v.push(a.mask)}function S(v){const E=g[v.type];let F;if(E){const k=Qi[E];F=Ib.clone(k.uniforms)}else F=v.uniforms;return F}function b(v,E){let F=f.get(E);return F!==void 0?++F.usedTimes:(F=new hR(n,E,v,s),u.push(F),f.set(E,F)),F}function R(v){if(--v.usedTimes===0){const E=u.indexOf(v);u[E]=u[u.length-1],u.pop(),f.delete(v.cacheKey),v.destroy()}}function w(v){l.remove(v)}function U(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:S,acquireProgram:b,releaseProgram:R,releaseShaderCache:w,programs:u,dispose:U}}function gR(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,l){n.get(o)[a]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function xR(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function C_(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function P_(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(f,h,d,g,_,m){let p=n[e];return p===void 0?(p={id:f.id,object:f,geometry:h,material:d,groupOrder:g,renderOrder:f.renderOrder,z:_,group:m},n[e]=p):(p.id=f.id,p.object=f,p.geometry=h,p.material=d,p.groupOrder=g,p.renderOrder=f.renderOrder,p.z=_,p.group=m),e++,p}function a(f,h,d,g,_,m){const p=o(f,h,d,g,_,m);d.transmission>0?i.push(p):d.transparent===!0?r.push(p):t.push(p)}function l(f,h,d,g,_,m){const p=o(f,h,d,g,_,m);d.transmission>0?i.unshift(p):d.transparent===!0?r.unshift(p):t.unshift(p)}function c(f,h){t.length>1&&t.sort(f||xR),i.length>1&&i.sort(h||C_),r.length>1&&r.sort(h||C_)}function u(){for(let f=e,h=n.length;f<h;f++){const d=n[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function vR(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new P_,n.set(i,[o])):r>=s.length?(o=new P_,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function SR(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new ne,color:new St};break;case"SpotLight":t={position:new ne,direction:new ne,color:new St,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new ne,color:new St,distance:0,decay:0};break;case"HemisphereLight":t={direction:new ne,skyColor:new St,groundColor:new St};break;case"RectAreaLight":t={color:new St,position:new ne,halfWidth:new ne,halfHeight:new ne};break}return n[e.id]=t,t}}}function MR(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let yR=0;function ER(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function bR(n){const e=new SR,t=MR(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new ne);const r=new ne,s=new Kt,o=new Kt;function a(c){let u=0,f=0,h=0;for(let v=0;v<9;v++)i.probe[v].set(0,0,0);let d=0,g=0,_=0,m=0,p=0,M=0,y=0,S=0,b=0,R=0,w=0;c.sort(ER);for(let v=0,E=c.length;v<E;v++){const F=c[v],k=F.color,H=F.intensity,$=F.distance;let Q=null;if(F.shadow&&F.shadow.map&&(F.shadow.map.texture.format===aa?Q=F.shadow.map.texture:Q=F.shadow.map.depthTexture||F.shadow.map.texture),F.isAmbientLight)u+=k.r*H,f+=k.g*H,h+=k.b*H;else if(F.isLightProbe){for(let W=0;W<9;W++)i.probe[W].addScaledVector(F.sh.coefficients[W],H);w++}else if(F.isDirectionalLight){const W=e.get(F);if(W.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){const V=F.shadow,Y=t.get(F);Y.shadowIntensity=V.intensity,Y.shadowBias=V.bias,Y.shadowNormalBias=V.normalBias,Y.shadowRadius=V.radius,Y.shadowMapSize=V.mapSize,i.directionalShadow[d]=Y,i.directionalShadowMap[d]=Q,i.directionalShadowMatrix[d]=F.shadow.matrix,M++}i.directional[d]=W,d++}else if(F.isSpotLight){const W=e.get(F);W.position.setFromMatrixPosition(F.matrixWorld),W.color.copy(k).multiplyScalar(H),W.distance=$,W.coneCos=Math.cos(F.angle),W.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),W.decay=F.decay,i.spot[_]=W;const V=F.shadow;if(F.map&&(i.spotLightMap[b]=F.map,b++,V.updateMatrices(F),F.castShadow&&R++),i.spotLightMatrix[_]=V.matrix,F.castShadow){const Y=t.get(F);Y.shadowIntensity=V.intensity,Y.shadowBias=V.bias,Y.shadowNormalBias=V.normalBias,Y.shadowRadius=V.radius,Y.shadowMapSize=V.mapSize,i.spotShadow[_]=Y,i.spotShadowMap[_]=Q,S++}_++}else if(F.isRectAreaLight){const W=e.get(F);W.color.copy(k).multiplyScalar(H),W.halfWidth.set(F.width*.5,0,0),W.halfHeight.set(0,F.height*.5,0),i.rectArea[m]=W,m++}else if(F.isPointLight){const W=e.get(F);if(W.color.copy(F.color).multiplyScalar(F.intensity),W.distance=F.distance,W.decay=F.decay,F.castShadow){const V=F.shadow,Y=t.get(F);Y.shadowIntensity=V.intensity,Y.shadowBias=V.bias,Y.shadowNormalBias=V.normalBias,Y.shadowRadius=V.radius,Y.shadowMapSize=V.mapSize,Y.shadowCameraNear=V.camera.near,Y.shadowCameraFar=V.camera.far,i.pointShadow[g]=Y,i.pointShadowMap[g]=Q,i.pointShadowMatrix[g]=F.shadow.matrix,y++}i.point[g]=W,g++}else if(F.isHemisphereLight){const W=e.get(F);W.skyColor.copy(F.color).multiplyScalar(H),W.groundColor.copy(F.groundColor).multiplyScalar(H),i.hemi[p]=W,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ie.LTC_FLOAT_1,i.rectAreaLTC2=Ie.LTC_FLOAT_2):(i.rectAreaLTC1=Ie.LTC_HALF_1,i.rectAreaLTC2=Ie.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=h;const U=i.hash;(U.directionalLength!==d||U.pointLength!==g||U.spotLength!==_||U.rectAreaLength!==m||U.hemiLength!==p||U.numDirectionalShadows!==M||U.numPointShadows!==y||U.numSpotShadows!==S||U.numSpotMaps!==b||U.numLightProbes!==w)&&(i.directional.length=d,i.spot.length=_,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=M,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=S+b-R,i.spotLightMap.length=b,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=w,U.directionalLength=d,U.pointLength=g,U.spotLength=_,U.rectAreaLength=m,U.hemiLength=p,U.numDirectionalShadows=M,U.numPointShadows=y,U.numSpotShadows=S,U.numSpotMaps=b,U.numLightProbes=w,i.version=yR++)}function l(c,u){let f=0,h=0,d=0,g=0,_=0;const m=u.matrixWorldInverse;for(let p=0,M=c.length;p<M;p++){const y=c[p];if(y.isDirectionalLight){const S=i.directional[f];S.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),f++}else if(y.isSpotLight){const S=i.spot[d];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),d++}else if(y.isRectAreaLight){const S=i.rectArea[g];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(m),o.identity(),s.copy(y.matrixWorld),s.premultiply(m),o.extractRotation(s),S.halfWidth.set(y.width*.5,0,0),S.halfHeight.set(0,y.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),g++}else if(y.isPointLight){const S=i.point[h];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(m),h++}else if(y.isHemisphereLight){const S=i.hemi[_];S.direction.setFromMatrixPosition(y.matrixWorld),S.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:i}}function D_(n){const e=new bR(n),t=[],i=[];function r(u){c.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function TR(n){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new D_(n),e.set(r,[a])):s>=o.length?(a=new D_(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}const AR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,wR=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,RR=[new ne(1,0,0),new ne(-1,0,0),new ne(0,1,0),new ne(0,-1,0),new ne(0,0,1),new ne(0,0,-1)],CR=[new ne(0,-1,0),new ne(0,-1,0),new ne(0,0,1),new ne(0,0,-1),new ne(0,-1,0),new ne(0,-1,0)],I_=new Kt,Aa=new ne,Lf=new ne;function PR(n,e,t){let i=new lv;const r=new At,s=new At,o=new Yt,a=new qb,l=new Yb,c={},u=t.maxTextureSize,f={[ys]:ti,[ti]:ys,[Rr]:Rr},h=new dr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new At},radius:{value:4}},vertexShader:AR,fragmentShader:wR}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const g=new Xi;g.setAttribute("position",new Hi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Wr(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Nc;let p=this.type;this.render=function(R,w,U){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;R.type===NE&&(Ze("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),R.type=Nc);const v=n.getRenderTarget(),E=n.getActiveCubeFace(),F=n.getActiveMipmapLevel(),k=n.state;k.setBlending(Lr),k.buffers.depth.getReversed()===!0?k.buffers.color.setClear(0,0,0,0):k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const H=p!==this.type;H&&w.traverse(function($){$.material&&(Array.isArray($.material)?$.material.forEach(Q=>Q.needsUpdate=!0):$.material.needsUpdate=!0)});for(let $=0,Q=R.length;$<Q;$++){const W=R[$],V=W.shadow;if(V===void 0){Ze("WebGLShadowMap:",W,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;r.copy(V.mapSize);const Y=V.getFrameExtents();if(r.multiply(Y),s.copy(V.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/Y.x),r.x=s.x*Y.x,V.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/Y.y),r.y=s.y*Y.y,V.mapSize.y=s.y)),V.map===null||H===!0){if(V.map!==null&&(V.map.depthTexture!==null&&(V.map.depthTexture.dispose(),V.map.depthTexture=null),V.map.dispose()),this.type===Fa){if(W.isPointLight){Ze("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}V.map=new cr(r.x,r.y,{format:aa,type:Vr,minFilter:wn,magFilter:wn,generateMipmaps:!1}),V.map.texture.name=W.name+".shadowMap",V.map.depthTexture=new bl(r.x,r.y,rr),V.map.depthTexture.name=W.name+".shadowMapDepth",V.map.depthTexture.format=Gr,V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=gn,V.map.depthTexture.magFilter=gn}else{W.isPointLight?(V.map=new av(r.x),V.map.depthTexture=new Wb(r.x,hr)):(V.map=new cr(r.x,r.y),V.map.depthTexture=new bl(r.x,r.y,hr)),V.map.depthTexture.name=W.name+".shadowMap",V.map.depthTexture.format=Gr;const L=n.state.buffers.depth.getReversed();this.type===Nc?(V.map.depthTexture.compareFunction=L?Sp:vp,V.map.depthTexture.minFilter=wn,V.map.depthTexture.magFilter=wn):(V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=gn,V.map.depthTexture.magFilter=gn)}V.camera.updateProjectionMatrix()}const he=V.map.isWebGLCubeRenderTarget?6:1;for(let L=0;L<he;L++){if(V.map.isWebGLCubeRenderTarget)n.setRenderTarget(V.map,L),n.clear();else{L===0&&(n.setRenderTarget(V.map),n.clear());const de=V.getViewport(L);o.set(s.x*de.x,s.y*de.y,s.x*de.z,s.y*de.w),k.viewport(o)}if(W.isPointLight){const de=V.camera,Fe=V.matrix,ze=W.distance||de.far;ze!==de.far&&(de.far=ze,de.updateProjectionMatrix()),Aa.setFromMatrixPosition(W.matrixWorld),de.position.copy(Aa),Lf.copy(de.position),Lf.add(RR[L]),de.up.copy(CR[L]),de.lookAt(Lf),de.updateMatrixWorld(),Fe.makeTranslation(-Aa.x,-Aa.y,-Aa.z),I_.multiplyMatrices(de.projectionMatrix,de.matrixWorldInverse),V._frustum.setFromProjectionMatrix(I_,de.coordinateSystem,de.reversedDepth)}else V.updateMatrices(W);i=V.getFrustum(),S(w,U,V.camera,W,this.type)}V.isPointLightShadow!==!0&&this.type===Fa&&M(V,U),V.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(v,E,F)};function M(R,w){const U=e.update(_);h.defines.VSM_SAMPLES!==R.blurSamples&&(h.defines.VSM_SAMPLES=R.blurSamples,d.defines.VSM_SAMPLES=R.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new cr(r.x,r.y,{format:aa,type:Vr})),h.uniforms.shadow_pass.value=R.map.depthTexture,h.uniforms.resolution.value=R.mapSize,h.uniforms.radius.value=R.radius,n.setRenderTarget(R.mapPass),n.clear(),n.renderBufferDirect(w,null,U,h,_,null),d.uniforms.shadow_pass.value=R.mapPass.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,n.setRenderTarget(R.map),n.clear(),n.renderBufferDirect(w,null,U,d,_,null)}function y(R,w,U,v){let E=null;const F=U.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(F!==void 0)E=F;else if(E=U.isPointLight===!0?l:a,n.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){const k=E.uuid,H=w.uuid;let $=c[k];$===void 0&&($={},c[k]=$);let Q=$[H];Q===void 0&&(Q=E.clone(),$[H]=Q,w.addEventListener("dispose",b)),E=Q}if(E.visible=w.visible,E.wireframe=w.wireframe,v===Fa?E.side=w.shadowSide!==null?w.shadowSide:w.side:E.side=w.shadowSide!==null?w.shadowSide:f[w.side],E.alphaMap=w.alphaMap,E.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,E.map=w.map,E.clipShadows=w.clipShadows,E.clippingPlanes=w.clippingPlanes,E.clipIntersection=w.clipIntersection,E.displacementMap=w.displacementMap,E.displacementScale=w.displacementScale,E.displacementBias=w.displacementBias,E.wireframeLinewidth=w.wireframeLinewidth,E.linewidth=w.linewidth,U.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const k=n.properties.get(E);k.light=U}return E}function S(R,w,U,v,E){if(R.visible===!1)return;if(R.layers.test(w.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&E===Fa)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,R.matrixWorld);const H=e.update(R),$=R.material;if(Array.isArray($)){const Q=H.groups;for(let W=0,V=Q.length;W<V;W++){const Y=Q[W],he=$[Y.materialIndex];if(he&&he.visible){const L=y(R,he,v,E);R.onBeforeShadow(n,R,w,U,H,L,Y),n.renderBufferDirect(U,null,H,L,R,Y),R.onAfterShadow(n,R,w,U,H,L,Y)}}}else if($.visible){const Q=y(R,$,v,E);R.onBeforeShadow(n,R,w,U,H,Q,null),n.renderBufferDirect(U,null,H,Q,R,null),R.onAfterShadow(n,R,w,U,H,Q,null)}}const k=R.children;for(let H=0,$=k.length;H<$;H++)S(k[H],w,U,v,E)}function b(R){R.target.removeEventListener("dispose",b);for(const U in c){const v=c[U],E=R.target.uuid;E in v&&(v[E].dispose(),delete v[E])}}}const DR={[Eh]:bh,[Th]:Rh,[Ah]:Ch,[sa]:wh,[bh]:Eh,[Rh]:Th,[Ch]:Ah,[wh]:sa};function IR(n,e){function t(){let B=!1;const Te=new Yt;let ge=null;const Ae=new Yt(0,0,0,0);return{setMask:function(pe){ge!==pe&&!B&&(n.colorMask(pe,pe,pe,pe),ge=pe)},setLocked:function(pe){B=pe},setClear:function(pe,ue,ye,Ge,ht){ht===!0&&(pe*=Ge,ue*=Ge,ye*=Ge),Te.set(pe,ue,ye,Ge),Ae.equals(Te)===!1&&(n.clearColor(pe,ue,ye,Ge),Ae.copy(Te))},reset:function(){B=!1,ge=null,Ae.set(-1,0,0,0)}}}function i(){let B=!1,Te=!1,ge=null,Ae=null,pe=null;return{setReversed:function(ue){if(Te!==ue){const ye=e.get("EXT_clip_control");ue?ye.clipControlEXT(ye.LOWER_LEFT_EXT,ye.ZERO_TO_ONE_EXT):ye.clipControlEXT(ye.LOWER_LEFT_EXT,ye.NEGATIVE_ONE_TO_ONE_EXT),Te=ue;const Ge=pe;pe=null,this.setClear(Ge)}},getReversed:function(){return Te},setTest:function(ue){ue?O(n.DEPTH_TEST):ie(n.DEPTH_TEST)},setMask:function(ue){ge!==ue&&!B&&(n.depthMask(ue),ge=ue)},setFunc:function(ue){if(Te&&(ue=DR[ue]),Ae!==ue){switch(ue){case Eh:n.depthFunc(n.NEVER);break;case bh:n.depthFunc(n.ALWAYS);break;case Th:n.depthFunc(n.LESS);break;case sa:n.depthFunc(n.LEQUAL);break;case Ah:n.depthFunc(n.EQUAL);break;case wh:n.depthFunc(n.GEQUAL);break;case Rh:n.depthFunc(n.GREATER);break;case Ch:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Ae=ue}},setLocked:function(ue){B=ue},setClear:function(ue){pe!==ue&&(Te&&(ue=1-ue),n.clearDepth(ue),pe=ue)},reset:function(){B=!1,ge=null,Ae=null,pe=null,Te=!1}}}function r(){let B=!1,Te=null,ge=null,Ae=null,pe=null,ue=null,ye=null,Ge=null,ht=null;return{setTest:function(Le){B||(Le?O(n.STENCIL_TEST):ie(n.STENCIL_TEST))},setMask:function(Le){Te!==Le&&!B&&(n.stencilMask(Le),Te=Le)},setFunc:function(Le,Be,Qe){(ge!==Le||Ae!==Be||pe!==Qe)&&(n.stencilFunc(Le,Be,Qe),ge=Le,Ae=Be,pe=Qe)},setOp:function(Le,Be,Qe){(ue!==Le||ye!==Be||Ge!==Qe)&&(n.stencilOp(Le,Be,Qe),ue=Le,ye=Be,Ge=Qe)},setLocked:function(Le){B=Le},setClear:function(Le){ht!==Le&&(n.clearStencil(Le),ht=Le)},reset:function(){B=!1,Te=null,ge=null,Ae=null,pe=null,ue=null,ye=null,Ge=null,ht=null}}}const s=new t,o=new i,a=new r,l=new WeakMap,c=new WeakMap;let u={},f={},h=new WeakMap,d=[],g=null,_=!1,m=null,p=null,M=null,y=null,S=null,b=null,R=null,w=new St(0,0,0),U=0,v=!1,E=null,F=null,k=null,H=null,$=null;const Q=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,V=0;const Y=n.getParameter(n.VERSION);Y.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(Y)[1]),W=V>=1):Y.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),W=V>=2);let he=null,L={};const de=n.getParameter(n.SCISSOR_BOX),Fe=n.getParameter(n.VIEWPORT),ze=new Yt().fromArray(de),He=new Yt().fromArray(Fe);function qe(B,Te,ge,Ae){const pe=new Uint8Array(4),ue=n.createTexture();n.bindTexture(B,ue),n.texParameteri(B,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(B,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let ye=0;ye<ge;ye++)B===n.TEXTURE_3D||B===n.TEXTURE_2D_ARRAY?n.texImage3D(Te,0,n.RGBA,1,1,Ae,0,n.RGBA,n.UNSIGNED_BYTE,pe):n.texImage2D(Te+ye,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,pe);return ue}const se={};se[n.TEXTURE_2D]=qe(n.TEXTURE_2D,n.TEXTURE_2D,1),se[n.TEXTURE_CUBE_MAP]=qe(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),se[n.TEXTURE_2D_ARRAY]=qe(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),se[n.TEXTURE_3D]=qe(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),O(n.DEPTH_TEST),o.setFunc(sa),j(!1),I(Fm),O(n.CULL_FACE),z(Lr);function O(B){u[B]!==!0&&(n.enable(B),u[B]=!0)}function ie(B){u[B]!==!1&&(n.disable(B),u[B]=!1)}function oe(B,Te){return f[B]!==Te?(n.bindFramebuffer(B,Te),f[B]=Te,B===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=Te),B===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=Te),!0):!1}function ae(B,Te){let ge=d,Ae=!1;if(B){ge=h.get(Te),ge===void 0&&(ge=[],h.set(Te,ge));const pe=B.textures;if(ge.length!==pe.length||ge[0]!==n.COLOR_ATTACHMENT0){for(let ue=0,ye=pe.length;ue<ye;ue++)ge[ue]=n.COLOR_ATTACHMENT0+ue;ge.length=pe.length,Ae=!0}}else ge[0]!==n.BACK&&(ge[0]=n.BACK,Ae=!0);Ae&&n.drawBuffers(ge)}function Ee(B){return g!==B?(n.useProgram(B),g=B,!0):!1}const D={[Vs]:n.FUNC_ADD,[FE]:n.FUNC_SUBTRACT,[OE]:n.FUNC_REVERSE_SUBTRACT};D[BE]=n.MIN,D[zE]=n.MAX;const P={[kE]:n.ZERO,[VE]:n.ONE,[GE]:n.SRC_COLOR,[Mh]:n.SRC_ALPHA,[$E]:n.SRC_ALPHA_SATURATE,[qE]:n.DST_COLOR,[WE]:n.DST_ALPHA,[HE]:n.ONE_MINUS_SRC_COLOR,[yh]:n.ONE_MINUS_SRC_ALPHA,[YE]:n.ONE_MINUS_DST_COLOR,[XE]:n.ONE_MINUS_DST_ALPHA,[KE]:n.CONSTANT_COLOR,[jE]:n.ONE_MINUS_CONSTANT_COLOR,[ZE]:n.CONSTANT_ALPHA,[JE]:n.ONE_MINUS_CONSTANT_ALPHA};function z(B,Te,ge,Ae,pe,ue,ye,Ge,ht,Le){if(B===Lr){_===!0&&(ie(n.BLEND),_=!1);return}if(_===!1&&(O(n.BLEND),_=!0),B!==UE){if(B!==m||Le!==v){if((p!==Vs||S!==Vs)&&(n.blendEquation(n.FUNC_ADD),p=Vs,S=Vs),Le)switch(B){case $o:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Om:n.blendFunc(n.ONE,n.ONE);break;case Bm:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case zm:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:mt("WebGLState: Invalid blending: ",B);break}else switch(B){case $o:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Om:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Bm:mt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case zm:mt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:mt("WebGLState: Invalid blending: ",B);break}M=null,y=null,b=null,R=null,w.set(0,0,0),U=0,m=B,v=Le}return}pe=pe||Te,ue=ue||ge,ye=ye||Ae,(Te!==p||pe!==S)&&(n.blendEquationSeparate(D[Te],D[pe]),p=Te,S=pe),(ge!==M||Ae!==y||ue!==b||ye!==R)&&(n.blendFuncSeparate(P[ge],P[Ae],P[ue],P[ye]),M=ge,y=Ae,b=ue,R=ye),(Ge.equals(w)===!1||ht!==U)&&(n.blendColor(Ge.r,Ge.g,Ge.b,ht),w.copy(Ge),U=ht),m=B,v=!1}function Z(B,Te){B.side===Rr?ie(n.CULL_FACE):O(n.CULL_FACE);let ge=B.side===ti;Te&&(ge=!ge),j(ge),B.blending===$o&&B.transparent===!1?z(Lr):z(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),o.setFunc(B.depthFunc),o.setTest(B.depthTest),o.setMask(B.depthWrite),s.setMask(B.colorWrite);const Ae=B.stencilWrite;a.setTest(Ae),Ae&&(a.setMask(B.stencilWriteMask),a.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),a.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),fe(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?O(n.SAMPLE_ALPHA_TO_COVERAGE):ie(n.SAMPLE_ALPHA_TO_COVERAGE)}function j(B){E!==B&&(B?n.frontFace(n.CW):n.frontFace(n.CCW),E=B)}function I(B){B!==IE?(O(n.CULL_FACE),B!==F&&(B===Fm?n.cullFace(n.BACK):B===LE?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ie(n.CULL_FACE),F=B}function C(B){B!==k&&(W&&n.lineWidth(B),k=B)}function fe(B,Te,ge){B?(O(n.POLYGON_OFFSET_FILL),(H!==Te||$!==ge)&&(n.polygonOffset(Te,ge),H=Te,$=ge)):ie(n.POLYGON_OFFSET_FILL)}function le(B){B?O(n.SCISSOR_TEST):ie(n.SCISSOR_TEST)}function ee(B){B===void 0&&(B=n.TEXTURE0+Q-1),he!==B&&(n.activeTexture(B),he=B)}function ce(B,Te,ge){ge===void 0&&(he===null?ge=n.TEXTURE0+Q-1:ge=he);let Ae=L[ge];Ae===void 0&&(Ae={type:void 0,texture:void 0},L[ge]=Ae),(Ae.type!==B||Ae.texture!==Te)&&(he!==ge&&(n.activeTexture(ge),he=ge),n.bindTexture(B,Te||se[B]),Ae.type=B,Ae.texture=Te)}function A(){const B=L[he];B!==void 0&&B.type!==void 0&&(n.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function x(){try{n.compressedTexImage2D(...arguments)}catch(B){mt("WebGLState:",B)}}function N(){try{n.compressedTexImage3D(...arguments)}catch(B){mt("WebGLState:",B)}}function K(){try{n.texSubImage2D(...arguments)}catch(B){mt("WebGLState:",B)}}function J(){try{n.texSubImage3D(...arguments)}catch(B){mt("WebGLState:",B)}}function X(){try{n.compressedTexSubImage2D(...arguments)}catch(B){mt("WebGLState:",B)}}function Me(){try{n.compressedTexSubImage3D(...arguments)}catch(B){mt("WebGLState:",B)}}function me(){try{n.texStorage2D(...arguments)}catch(B){mt("WebGLState:",B)}}function Ce(){try{n.texStorage3D(...arguments)}catch(B){mt("WebGLState:",B)}}function we(){try{n.texImage2D(...arguments)}catch(B){mt("WebGLState:",B)}}function _e(){try{n.texImage3D(...arguments)}catch(B){mt("WebGLState:",B)}}function xe(B){ze.equals(B)===!1&&(n.scissor(B.x,B.y,B.z,B.w),ze.copy(B))}function be(B){He.equals(B)===!1&&(n.viewport(B.x,B.y,B.z,B.w),He.copy(B))}function Pe(B,Te){let ge=c.get(Te);ge===void 0&&(ge=new WeakMap,c.set(Te,ge));let Ae=ge.get(B);Ae===void 0&&(Ae=n.getUniformBlockIndex(Te,B.name),ge.set(B,Ae))}function ve(B,Te){const Ae=c.get(Te).get(B);l.get(Te)!==Ae&&(n.uniformBlockBinding(Te,Ae,B.__bindingPointIndex),l.set(Te,Ae))}function Ye(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},he=null,L={},f={},h=new WeakMap,d=[],g=null,_=!1,m=null,p=null,M=null,y=null,S=null,b=null,R=null,w=new St(0,0,0),U=0,v=!1,E=null,F=null,k=null,H=null,$=null,ze.set(0,0,n.canvas.width,n.canvas.height),He.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:O,disable:ie,bindFramebuffer:oe,drawBuffers:ae,useProgram:Ee,setBlending:z,setMaterial:Z,setFlipSided:j,setCullFace:I,setLineWidth:C,setPolygonOffset:fe,setScissorTest:le,activeTexture:ee,bindTexture:ce,unbindTexture:A,compressedTexImage2D:x,compressedTexImage3D:N,texImage2D:we,texImage3D:_e,updateUBOMapping:Pe,uniformBlockBinding:ve,texStorage2D:me,texStorage3D:Ce,texSubImage2D:K,texSubImage3D:J,compressedTexSubImage2D:X,compressedTexSubImage3D:Me,scissor:xe,viewport:be,reset:Ye}}function LR(n,e,t,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new At,u=new WeakMap;let f;const h=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,x){return d?new OffscreenCanvas(A,x):au("canvas")}function _(A,x,N){let K=1;const J=ce(A);if((J.width>N||J.height>N)&&(K=N/Math.max(J.width,J.height)),K<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const X=Math.floor(K*J.width),Me=Math.floor(K*J.height);f===void 0&&(f=g(X,Me));const me=x?g(X,Me):f;return me.width=X,me.height=Me,me.getContext("2d").drawImage(A,0,0,X,Me),Ze("WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+X+"x"+Me+")."),me}else return"data"in A&&Ze("WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),A;return A}function m(A){return A.generateMipmaps}function p(A){n.generateMipmap(A)}function M(A){return A.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?n.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function y(A,x,N,K,J=!1){if(A!==null){if(n[A]!==void 0)return n[A];Ze("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let X=x;if(x===n.RED&&(N===n.FLOAT&&(X=n.R32F),N===n.HALF_FLOAT&&(X=n.R16F),N===n.UNSIGNED_BYTE&&(X=n.R8)),x===n.RED_INTEGER&&(N===n.UNSIGNED_BYTE&&(X=n.R8UI),N===n.UNSIGNED_SHORT&&(X=n.R16UI),N===n.UNSIGNED_INT&&(X=n.R32UI),N===n.BYTE&&(X=n.R8I),N===n.SHORT&&(X=n.R16I),N===n.INT&&(X=n.R32I)),x===n.RG&&(N===n.FLOAT&&(X=n.RG32F),N===n.HALF_FLOAT&&(X=n.RG16F),N===n.UNSIGNED_BYTE&&(X=n.RG8)),x===n.RG_INTEGER&&(N===n.UNSIGNED_BYTE&&(X=n.RG8UI),N===n.UNSIGNED_SHORT&&(X=n.RG16UI),N===n.UNSIGNED_INT&&(X=n.RG32UI),N===n.BYTE&&(X=n.RG8I),N===n.SHORT&&(X=n.RG16I),N===n.INT&&(X=n.RG32I)),x===n.RGB_INTEGER&&(N===n.UNSIGNED_BYTE&&(X=n.RGB8UI),N===n.UNSIGNED_SHORT&&(X=n.RGB16UI),N===n.UNSIGNED_INT&&(X=n.RGB32UI),N===n.BYTE&&(X=n.RGB8I),N===n.SHORT&&(X=n.RGB16I),N===n.INT&&(X=n.RGB32I)),x===n.RGBA_INTEGER&&(N===n.UNSIGNED_BYTE&&(X=n.RGBA8UI),N===n.UNSIGNED_SHORT&&(X=n.RGBA16UI),N===n.UNSIGNED_INT&&(X=n.RGBA32UI),N===n.BYTE&&(X=n.RGBA8I),N===n.SHORT&&(X=n.RGBA16I),N===n.INT&&(X=n.RGBA32I)),x===n.RGB&&(N===n.UNSIGNED_INT_5_9_9_9_REV&&(X=n.RGB9_E5),N===n.UNSIGNED_INT_10F_11F_11F_REV&&(X=n.R11F_G11F_B10F)),x===n.RGBA){const Me=J?su:ft.getTransfer(K);N===n.FLOAT&&(X=n.RGBA32F),N===n.HALF_FLOAT&&(X=n.RGBA16F),N===n.UNSIGNED_BYTE&&(X=Me===Et?n.SRGB8_ALPHA8:n.RGBA8),N===n.UNSIGNED_SHORT_4_4_4_4&&(X=n.RGBA4),N===n.UNSIGNED_SHORT_5_5_5_1&&(X=n.RGB5_A1)}return(X===n.R16F||X===n.R32F||X===n.RG16F||X===n.RG32F||X===n.RGBA16F||X===n.RGBA32F)&&e.get("EXT_color_buffer_float"),X}function S(A,x){let N;return A?x===null||x===hr||x===yl?N=n.DEPTH24_STENCIL8:x===rr?N=n.DEPTH32F_STENCIL8:x===Ml&&(N=n.DEPTH24_STENCIL8,Ze("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===hr||x===yl?N=n.DEPTH_COMPONENT24:x===rr?N=n.DEPTH_COMPONENT32F:x===Ml&&(N=n.DEPTH_COMPONENT16),N}function b(A,x){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==gn&&A.minFilter!==wn?Math.log2(Math.max(x.width,x.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?x.mipmaps.length:1}function R(A){const x=A.target;x.removeEventListener("dispose",R),U(x),x.isVideoTexture&&u.delete(x)}function w(A){const x=A.target;x.removeEventListener("dispose",w),E(x)}function U(A){const x=i.get(A);if(x.__webglInit===void 0)return;const N=A.source,K=h.get(N);if(K){const J=K[x.__cacheKey];J.usedTimes--,J.usedTimes===0&&v(A),Object.keys(K).length===0&&h.delete(N)}i.remove(A)}function v(A){const x=i.get(A);n.deleteTexture(x.__webglTexture);const N=A.source,K=h.get(N);delete K[x.__cacheKey],o.memory.textures--}function E(A){const x=i.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),i.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(x.__webglFramebuffer[K]))for(let J=0;J<x.__webglFramebuffer[K].length;J++)n.deleteFramebuffer(x.__webglFramebuffer[K][J]);else n.deleteFramebuffer(x.__webglFramebuffer[K]);x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer[K])}else{if(Array.isArray(x.__webglFramebuffer))for(let K=0;K<x.__webglFramebuffer.length;K++)n.deleteFramebuffer(x.__webglFramebuffer[K]);else n.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&n.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let K=0;K<x.__webglColorRenderbuffer.length;K++)x.__webglColorRenderbuffer[K]&&n.deleteRenderbuffer(x.__webglColorRenderbuffer[K]);x.__webglDepthRenderbuffer&&n.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const N=A.textures;for(let K=0,J=N.length;K<J;K++){const X=i.get(N[K]);X.__webglTexture&&(n.deleteTexture(X.__webglTexture),o.memory.textures--),i.remove(N[K])}i.remove(A)}let F=0;function k(){F=0}function H(){const A=F;return A>=r.maxTextures&&Ze("WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+r.maxTextures),F+=1,A}function $(A){const x=[];return x.push(A.wrapS),x.push(A.wrapT),x.push(A.wrapR||0),x.push(A.magFilter),x.push(A.minFilter),x.push(A.anisotropy),x.push(A.internalFormat),x.push(A.format),x.push(A.type),x.push(A.generateMipmaps),x.push(A.premultiplyAlpha),x.push(A.flipY),x.push(A.unpackAlignment),x.push(A.colorSpace),x.join()}function Q(A,x){const N=i.get(A);if(A.isVideoTexture&&le(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&N.__version!==A.version){const K=A.image;if(K===null)Ze("WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)Ze("WebGLRenderer: Texture marked for update but image is incomplete");else{se(N,A,x);return}}else A.isExternalTexture&&(N.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,N.__webglTexture,n.TEXTURE0+x)}function W(A,x){const N=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&N.__version!==A.version){se(N,A,x);return}else A.isExternalTexture&&(N.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,N.__webglTexture,n.TEXTURE0+x)}function V(A,x){const N=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&N.__version!==A.version){se(N,A,x);return}t.bindTexture(n.TEXTURE_3D,N.__webglTexture,n.TEXTURE0+x)}function Y(A,x){const N=i.get(A);if(A.isCubeDepthTexture!==!0&&A.version>0&&N.__version!==A.version){O(N,A,x);return}t.bindTexture(n.TEXTURE_CUBE_MAP,N.__webglTexture,n.TEXTURE0+x)}const he={[Ih]:n.REPEAT,[Pr]:n.CLAMP_TO_EDGE,[Lh]:n.MIRRORED_REPEAT},L={[gn]:n.NEAREST,[tb]:n.NEAREST_MIPMAP_NEAREST,[Jl]:n.NEAREST_MIPMAP_LINEAR,[wn]:n.LINEAR,[nf]:n.LINEAR_MIPMAP_NEAREST,[Xs]:n.LINEAR_MIPMAP_LINEAR},de={[sb]:n.NEVER,[ub]:n.ALWAYS,[ob]:n.LESS,[vp]:n.LEQUAL,[ab]:n.EQUAL,[Sp]:n.GEQUAL,[lb]:n.GREATER,[cb]:n.NOTEQUAL};function Fe(A,x){if(x.type===rr&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===wn||x.magFilter===nf||x.magFilter===Jl||x.magFilter===Xs||x.minFilter===wn||x.minFilter===nf||x.minFilter===Jl||x.minFilter===Xs)&&Ze("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(A,n.TEXTURE_WRAP_S,he[x.wrapS]),n.texParameteri(A,n.TEXTURE_WRAP_T,he[x.wrapT]),(A===n.TEXTURE_3D||A===n.TEXTURE_2D_ARRAY)&&n.texParameteri(A,n.TEXTURE_WRAP_R,he[x.wrapR]),n.texParameteri(A,n.TEXTURE_MAG_FILTER,L[x.magFilter]),n.texParameteri(A,n.TEXTURE_MIN_FILTER,L[x.minFilter]),x.compareFunction&&(n.texParameteri(A,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(A,n.TEXTURE_COMPARE_FUNC,de[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===gn||x.minFilter!==Jl&&x.minFilter!==Xs||x.type===rr&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){const N=e.get("EXT_texture_filter_anisotropic");n.texParameterf(A,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,r.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function ze(A,x){let N=!1;A.__webglInit===void 0&&(A.__webglInit=!0,x.addEventListener("dispose",R));const K=x.source;let J=h.get(K);J===void 0&&(J={},h.set(K,J));const X=$(x);if(X!==A.__cacheKey){J[X]===void 0&&(J[X]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,N=!0),J[X].usedTimes++;const Me=J[A.__cacheKey];Me!==void 0&&(J[A.__cacheKey].usedTimes--,Me.usedTimes===0&&v(x)),A.__cacheKey=X,A.__webglTexture=J[X].texture}return N}function He(A,x,N){return Math.floor(Math.floor(A/N)/x)}function qe(A,x,N,K){const X=A.updateRanges;if(X.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,x.width,x.height,N,K,x.data);else{X.sort((_e,xe)=>_e.start-xe.start);let Me=0;for(let _e=1;_e<X.length;_e++){const xe=X[Me],be=X[_e],Pe=xe.start+xe.count,ve=He(be.start,x.width,4),Ye=He(xe.start,x.width,4);be.start<=Pe+1&&ve===Ye&&He(be.start+be.count-1,x.width,4)===ve?xe.count=Math.max(xe.count,be.start+be.count-xe.start):(++Me,X[Me]=be)}X.length=Me+1;const me=n.getParameter(n.UNPACK_ROW_LENGTH),Ce=n.getParameter(n.UNPACK_SKIP_PIXELS),we=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,x.width);for(let _e=0,xe=X.length;_e<xe;_e++){const be=X[_e],Pe=Math.floor(be.start/4),ve=Math.ceil(be.count/4),Ye=Pe%x.width,B=Math.floor(Pe/x.width),Te=ve,ge=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,Ye),n.pixelStorei(n.UNPACK_SKIP_ROWS,B),t.texSubImage2D(n.TEXTURE_2D,0,Ye,B,Te,ge,N,K,x.data)}A.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,me),n.pixelStorei(n.UNPACK_SKIP_PIXELS,Ce),n.pixelStorei(n.UNPACK_SKIP_ROWS,we)}}function se(A,x,N){let K=n.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(K=n.TEXTURE_2D_ARRAY),x.isData3DTexture&&(K=n.TEXTURE_3D);const J=ze(A,x),X=x.source;t.bindTexture(K,A.__webglTexture,n.TEXTURE0+N);const Me=i.get(X);if(X.version!==Me.__version||J===!0){t.activeTexture(n.TEXTURE0+N);const me=ft.getPrimaries(ft.workingColorSpace),Ce=x.colorSpace===ss?null:ft.getPrimaries(x.colorSpace),we=x.colorSpace===ss||me===Ce?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,we);let _e=_(x.image,!1,r.maxTextureSize);_e=ee(x,_e);const xe=s.convert(x.format,x.colorSpace),be=s.convert(x.type);let Pe=y(x.internalFormat,xe,be,x.colorSpace,x.isVideoTexture);Fe(K,x);let ve;const Ye=x.mipmaps,B=x.isVideoTexture!==!0,Te=Me.__version===void 0||J===!0,ge=X.dataReady,Ae=b(x,_e);if(x.isDepthTexture)Pe=S(x.format===qs,x.type),Te&&(B?t.texStorage2D(n.TEXTURE_2D,1,Pe,_e.width,_e.height):t.texImage2D(n.TEXTURE_2D,0,Pe,_e.width,_e.height,0,xe,be,null));else if(x.isDataTexture)if(Ye.length>0){B&&Te&&t.texStorage2D(n.TEXTURE_2D,Ae,Pe,Ye[0].width,Ye[0].height);for(let pe=0,ue=Ye.length;pe<ue;pe++)ve=Ye[pe],B?ge&&t.texSubImage2D(n.TEXTURE_2D,pe,0,0,ve.width,ve.height,xe,be,ve.data):t.texImage2D(n.TEXTURE_2D,pe,Pe,ve.width,ve.height,0,xe,be,ve.data);x.generateMipmaps=!1}else B?(Te&&t.texStorage2D(n.TEXTURE_2D,Ae,Pe,_e.width,_e.height),ge&&qe(x,_e,xe,be)):t.texImage2D(n.TEXTURE_2D,0,Pe,_e.width,_e.height,0,xe,be,_e.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){B&&Te&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ae,Pe,Ye[0].width,Ye[0].height,_e.depth);for(let pe=0,ue=Ye.length;pe<ue;pe++)if(ve=Ye[pe],x.format!==ki)if(xe!==null)if(B){if(ge)if(x.layerUpdates.size>0){const ye=c_(ve.width,ve.height,x.format,x.type);for(const Ge of x.layerUpdates){const ht=ve.data.subarray(Ge*ye/ve.data.BYTES_PER_ELEMENT,(Ge+1)*ye/ve.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,pe,0,0,Ge,ve.width,ve.height,1,xe,ht)}x.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,pe,0,0,0,ve.width,ve.height,_e.depth,xe,ve.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,pe,Pe,ve.width,ve.height,_e.depth,0,ve.data,0,0);else Ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else B?ge&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,pe,0,0,0,ve.width,ve.height,_e.depth,xe,be,ve.data):t.texImage3D(n.TEXTURE_2D_ARRAY,pe,Pe,ve.width,ve.height,_e.depth,0,xe,be,ve.data)}else{B&&Te&&t.texStorage2D(n.TEXTURE_2D,Ae,Pe,Ye[0].width,Ye[0].height);for(let pe=0,ue=Ye.length;pe<ue;pe++)ve=Ye[pe],x.format!==ki?xe!==null?B?ge&&t.compressedTexSubImage2D(n.TEXTURE_2D,pe,0,0,ve.width,ve.height,xe,ve.data):t.compressedTexImage2D(n.TEXTURE_2D,pe,Pe,ve.width,ve.height,0,ve.data):Ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):B?ge&&t.texSubImage2D(n.TEXTURE_2D,pe,0,0,ve.width,ve.height,xe,be,ve.data):t.texImage2D(n.TEXTURE_2D,pe,Pe,ve.width,ve.height,0,xe,be,ve.data)}else if(x.isDataArrayTexture)if(B){if(Te&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ae,Pe,_e.width,_e.height,_e.depth),ge)if(x.layerUpdates.size>0){const pe=c_(_e.width,_e.height,x.format,x.type);for(const ue of x.layerUpdates){const ye=_e.data.subarray(ue*pe/_e.data.BYTES_PER_ELEMENT,(ue+1)*pe/_e.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ue,_e.width,_e.height,1,xe,be,ye)}x.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,_e.width,_e.height,_e.depth,xe,be,_e.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Pe,_e.width,_e.height,_e.depth,0,xe,be,_e.data);else if(x.isData3DTexture)B?(Te&&t.texStorage3D(n.TEXTURE_3D,Ae,Pe,_e.width,_e.height,_e.depth),ge&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,_e.width,_e.height,_e.depth,xe,be,_e.data)):t.texImage3D(n.TEXTURE_3D,0,Pe,_e.width,_e.height,_e.depth,0,xe,be,_e.data);else if(x.isFramebufferTexture){if(Te)if(B)t.texStorage2D(n.TEXTURE_2D,Ae,Pe,_e.width,_e.height);else{let pe=_e.width,ue=_e.height;for(let ye=0;ye<Ae;ye++)t.texImage2D(n.TEXTURE_2D,ye,Pe,pe,ue,0,xe,be,null),pe>>=1,ue>>=1}}else if(Ye.length>0){if(B&&Te){const pe=ce(Ye[0]);t.texStorage2D(n.TEXTURE_2D,Ae,Pe,pe.width,pe.height)}for(let pe=0,ue=Ye.length;pe<ue;pe++)ve=Ye[pe],B?ge&&t.texSubImage2D(n.TEXTURE_2D,pe,0,0,xe,be,ve):t.texImage2D(n.TEXTURE_2D,pe,Pe,xe,be,ve);x.generateMipmaps=!1}else if(B){if(Te){const pe=ce(_e);t.texStorage2D(n.TEXTURE_2D,Ae,Pe,pe.width,pe.height)}ge&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,xe,be,_e)}else t.texImage2D(n.TEXTURE_2D,0,Pe,xe,be,_e);m(x)&&p(K),Me.__version=X.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function O(A,x,N){if(x.image.length!==6)return;const K=ze(A,x),J=x.source;t.bindTexture(n.TEXTURE_CUBE_MAP,A.__webglTexture,n.TEXTURE0+N);const X=i.get(J);if(J.version!==X.__version||K===!0){t.activeTexture(n.TEXTURE0+N);const Me=ft.getPrimaries(ft.workingColorSpace),me=x.colorSpace===ss?null:ft.getPrimaries(x.colorSpace),Ce=x.colorSpace===ss||Me===me?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ce);const we=x.isCompressedTexture||x.image[0].isCompressedTexture,_e=x.image[0]&&x.image[0].isDataTexture,xe=[];for(let ue=0;ue<6;ue++)!we&&!_e?xe[ue]=_(x.image[ue],!0,r.maxCubemapSize):xe[ue]=_e?x.image[ue].image:x.image[ue],xe[ue]=ee(x,xe[ue]);const be=xe[0],Pe=s.convert(x.format,x.colorSpace),ve=s.convert(x.type),Ye=y(x.internalFormat,Pe,ve,x.colorSpace),B=x.isVideoTexture!==!0,Te=X.__version===void 0||K===!0,ge=J.dataReady;let Ae=b(x,be);Fe(n.TEXTURE_CUBE_MAP,x);let pe;if(we){B&&Te&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Ae,Ye,be.width,be.height);for(let ue=0;ue<6;ue++){pe=xe[ue].mipmaps;for(let ye=0;ye<pe.length;ye++){const Ge=pe[ye];x.format!==ki?Pe!==null?B?ge&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,ye,0,0,Ge.width,Ge.height,Pe,Ge.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,ye,Ye,Ge.width,Ge.height,0,Ge.data):Ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):B?ge&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,ye,0,0,Ge.width,Ge.height,Pe,ve,Ge.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,ye,Ye,Ge.width,Ge.height,0,Pe,ve,Ge.data)}}}else{if(pe=x.mipmaps,B&&Te){pe.length>0&&Ae++;const ue=ce(xe[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Ae,Ye,ue.width,ue.height)}for(let ue=0;ue<6;ue++)if(_e){B?ge&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,0,0,xe[ue].width,xe[ue].height,Pe,ve,xe[ue].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,Ye,xe[ue].width,xe[ue].height,0,Pe,ve,xe[ue].data);for(let ye=0;ye<pe.length;ye++){const ht=pe[ye].image[ue].image;B?ge&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,ye+1,0,0,ht.width,ht.height,Pe,ve,ht.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,ye+1,Ye,ht.width,ht.height,0,Pe,ve,ht.data)}}else{B?ge&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,0,0,Pe,ve,xe[ue]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,Ye,Pe,ve,xe[ue]);for(let ye=0;ye<pe.length;ye++){const Ge=pe[ye];B?ge&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,ye+1,0,0,Pe,ve,Ge.image[ue]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,ye+1,Ye,Pe,ve,Ge.image[ue])}}}m(x)&&p(n.TEXTURE_CUBE_MAP),X.__version=J.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function ie(A,x,N,K,J,X){const Me=s.convert(N.format,N.colorSpace),me=s.convert(N.type),Ce=y(N.internalFormat,Me,me,N.colorSpace),we=i.get(x),_e=i.get(N);if(_e.__renderTarget=x,!we.__hasExternalTextures){const xe=Math.max(1,x.width>>X),be=Math.max(1,x.height>>X);J===n.TEXTURE_3D||J===n.TEXTURE_2D_ARRAY?t.texImage3D(J,X,Ce,xe,be,x.depth,0,Me,me,null):t.texImage2D(J,X,Ce,xe,be,0,Me,me,null)}t.bindFramebuffer(n.FRAMEBUFFER,A),fe(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,K,J,_e.__webglTexture,0,C(x)):(J===n.TEXTURE_2D||J>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,K,J,_e.__webglTexture,X),t.bindFramebuffer(n.FRAMEBUFFER,null)}function oe(A,x,N){if(n.bindRenderbuffer(n.RENDERBUFFER,A),x.depthBuffer){const K=x.depthTexture,J=K&&K.isDepthTexture?K.type:null,X=S(x.stencilBuffer,J),Me=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;fe(x)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,C(x),X,x.width,x.height):N?n.renderbufferStorageMultisample(n.RENDERBUFFER,C(x),X,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,X,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Me,n.RENDERBUFFER,A)}else{const K=x.textures;for(let J=0;J<K.length;J++){const X=K[J],Me=s.convert(X.format,X.colorSpace),me=s.convert(X.type),Ce=y(X.internalFormat,Me,me,X.colorSpace);fe(x)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,C(x),Ce,x.width,x.height):N?n.renderbufferStorageMultisample(n.RENDERBUFFER,C(x),Ce,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,Ce,x.width,x.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ae(A,x,N){const K=x.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,A),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const J=i.get(x.depthTexture);if(J.__renderTarget=x,(!J.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),K){if(J.__webglInit===void 0&&(J.__webglInit=!0,x.depthTexture.addEventListener("dispose",R)),J.__webglTexture===void 0){J.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,J.__webglTexture),Fe(n.TEXTURE_CUBE_MAP,x.depthTexture);const we=s.convert(x.depthTexture.format),_e=s.convert(x.depthTexture.type);let xe;x.depthTexture.format===Gr?xe=n.DEPTH_COMPONENT24:x.depthTexture.format===qs&&(xe=n.DEPTH24_STENCIL8);for(let be=0;be<6;be++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,xe,x.width,x.height,0,we,_e,null)}}else Q(x.depthTexture,0);const X=J.__webglTexture,Me=C(x),me=K?n.TEXTURE_CUBE_MAP_POSITIVE_X+N:n.TEXTURE_2D,Ce=x.depthTexture.format===qs?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(x.depthTexture.format===Gr)fe(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Ce,me,X,0,Me):n.framebufferTexture2D(n.FRAMEBUFFER,Ce,me,X,0);else if(x.depthTexture.format===qs)fe(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Ce,me,X,0,Me):n.framebufferTexture2D(n.FRAMEBUFFER,Ce,me,X,0);else throw new Error("Unknown depthTexture format")}function Ee(A){const x=i.get(A),N=A.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==A.depthTexture){const K=A.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),K){const J=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,K.removeEventListener("dispose",J)};K.addEventListener("dispose",J),x.__depthDisposeCallback=J}x.__boundDepthTexture=K}if(A.depthTexture&&!x.__autoAllocateDepthBuffer)if(N)for(let K=0;K<6;K++)ae(x.__webglFramebuffer[K],A,K);else{const K=A.texture.mipmaps;K&&K.length>0?ae(x.__webglFramebuffer[0],A,0):ae(x.__webglFramebuffer,A,0)}else if(N){x.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[K]),x.__webglDepthbuffer[K]===void 0)x.__webglDepthbuffer[K]=n.createRenderbuffer(),oe(x.__webglDepthbuffer[K],A,!1);else{const J=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,X=x.__webglDepthbuffer[K];n.bindRenderbuffer(n.RENDERBUFFER,X),n.framebufferRenderbuffer(n.FRAMEBUFFER,J,n.RENDERBUFFER,X)}}else{const K=A.texture.mipmaps;if(K&&K.length>0?t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=n.createRenderbuffer(),oe(x.__webglDepthbuffer,A,!1);else{const J=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,X=x.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,X),n.framebufferRenderbuffer(n.FRAMEBUFFER,J,n.RENDERBUFFER,X)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function D(A,x,N){const K=i.get(A);x!==void 0&&ie(K.__webglFramebuffer,A,A.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),N!==void 0&&Ee(A)}function P(A){const x=A.texture,N=i.get(A),K=i.get(x);A.addEventListener("dispose",w);const J=A.textures,X=A.isWebGLCubeRenderTarget===!0,Me=J.length>1;if(Me||(K.__webglTexture===void 0&&(K.__webglTexture=n.createTexture()),K.__version=x.version,o.memory.textures++),X){N.__webglFramebuffer=[];for(let me=0;me<6;me++)if(x.mipmaps&&x.mipmaps.length>0){N.__webglFramebuffer[me]=[];for(let Ce=0;Ce<x.mipmaps.length;Ce++)N.__webglFramebuffer[me][Ce]=n.createFramebuffer()}else N.__webglFramebuffer[me]=n.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){N.__webglFramebuffer=[];for(let me=0;me<x.mipmaps.length;me++)N.__webglFramebuffer[me]=n.createFramebuffer()}else N.__webglFramebuffer=n.createFramebuffer();if(Me)for(let me=0,Ce=J.length;me<Ce;me++){const we=i.get(J[me]);we.__webglTexture===void 0&&(we.__webglTexture=n.createTexture(),o.memory.textures++)}if(A.samples>0&&fe(A)===!1){N.__webglMultisampledFramebuffer=n.createFramebuffer(),N.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let me=0;me<J.length;me++){const Ce=J[me];N.__webglColorRenderbuffer[me]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,N.__webglColorRenderbuffer[me]);const we=s.convert(Ce.format,Ce.colorSpace),_e=s.convert(Ce.type),xe=y(Ce.internalFormat,we,_e,Ce.colorSpace,A.isXRRenderTarget===!0),be=C(A);n.renderbufferStorageMultisample(n.RENDERBUFFER,be,xe,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.RENDERBUFFER,N.__webglColorRenderbuffer[me])}n.bindRenderbuffer(n.RENDERBUFFER,null),A.depthBuffer&&(N.__webglDepthRenderbuffer=n.createRenderbuffer(),oe(N.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(X){t.bindTexture(n.TEXTURE_CUBE_MAP,K.__webglTexture),Fe(n.TEXTURE_CUBE_MAP,x);for(let me=0;me<6;me++)if(x.mipmaps&&x.mipmaps.length>0)for(let Ce=0;Ce<x.mipmaps.length;Ce++)ie(N.__webglFramebuffer[me][Ce],A,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ce);else ie(N.__webglFramebuffer[me],A,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+me,0);m(x)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Me){for(let me=0,Ce=J.length;me<Ce;me++){const we=J[me],_e=i.get(we);let xe=n.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(xe=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(xe,_e.__webglTexture),Fe(xe,we),ie(N.__webglFramebuffer,A,we,n.COLOR_ATTACHMENT0+me,xe,0),m(we)&&p(xe)}t.unbindTexture()}else{let me=n.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(me=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(me,K.__webglTexture),Fe(me,x),x.mipmaps&&x.mipmaps.length>0)for(let Ce=0;Ce<x.mipmaps.length;Ce++)ie(N.__webglFramebuffer[Ce],A,x,n.COLOR_ATTACHMENT0,me,Ce);else ie(N.__webglFramebuffer,A,x,n.COLOR_ATTACHMENT0,me,0);m(x)&&p(me),t.unbindTexture()}A.depthBuffer&&Ee(A)}function z(A){const x=A.textures;for(let N=0,K=x.length;N<K;N++){const J=x[N];if(m(J)){const X=M(A),Me=i.get(J).__webglTexture;t.bindTexture(X,Me),p(X),t.unbindTexture()}}}const Z=[],j=[];function I(A){if(A.samples>0){if(fe(A)===!1){const x=A.textures,N=A.width,K=A.height;let J=n.COLOR_BUFFER_BIT;const X=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Me=i.get(A),me=x.length>1;if(me)for(let we=0;we<x.length;we++)t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+we,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+we,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Me.__webglMultisampledFramebuffer);const Ce=A.texture.mipmaps;Ce&&Ce.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Me.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Me.__webglFramebuffer);for(let we=0;we<x.length;we++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(J|=n.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(J|=n.STENCIL_BUFFER_BIT)),me){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Me.__webglColorRenderbuffer[we]);const _e=i.get(x[we]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,_e,0)}n.blitFramebuffer(0,0,N,K,0,0,N,K,J,n.NEAREST),l===!0&&(Z.length=0,j.length=0,Z.push(n.COLOR_ATTACHMENT0+we),A.depthBuffer&&A.resolveDepthBuffer===!1&&(Z.push(X),j.push(X),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,j)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Z))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),me)for(let we=0;we<x.length;we++){t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+we,n.RENDERBUFFER,Me.__webglColorRenderbuffer[we]);const _e=i.get(x[we]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+we,n.TEXTURE_2D,_e,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Me.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){const x=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[x])}}}function C(A){return Math.min(r.maxSamples,A.samples)}function fe(A){const x=i.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function le(A){const x=o.render.frame;u.get(A)!==x&&(u.set(A,x),A.update())}function ee(A,x){const N=A.colorSpace,K=A.format,J=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||N!==la&&N!==ss&&(ft.getTransfer(N)===Et?(K!==ki||J!==Pi)&&Ze("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):mt("WebGLTextures: Unsupported texture color space:",N)),x}function ce(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=H,this.resetTextureUnits=k,this.setTexture2D=Q,this.setTexture2DArray=W,this.setTexture3D=V,this.setTextureCube=Y,this.rebindTextures=D,this.setupRenderTarget=P,this.updateRenderTargetMipmap=z,this.updateMultisampleRenderTarget=I,this.setupDepthRenderbuffer=Ee,this.setupFrameBufferTexture=ie,this.useMultisampledRTT=fe,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function NR(n,e){function t(i,r=ss){let s;const o=ft.getTransfer(r);if(i===Pi)return n.UNSIGNED_BYTE;if(i===pp)return n.UNSIGNED_SHORT_4_4_4_4;if(i===mp)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Xx)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===qx)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Hx)return n.BYTE;if(i===Wx)return n.SHORT;if(i===Ml)return n.UNSIGNED_SHORT;if(i===dp)return n.INT;if(i===hr)return n.UNSIGNED_INT;if(i===rr)return n.FLOAT;if(i===Vr)return n.HALF_FLOAT;if(i===Yx)return n.ALPHA;if(i===$x)return n.RGB;if(i===ki)return n.RGBA;if(i===Gr)return n.DEPTH_COMPONENT;if(i===qs)return n.DEPTH_STENCIL;if(i===Kx)return n.RED;if(i===_p)return n.RED_INTEGER;if(i===aa)return n.RG;if(i===gp)return n.RG_INTEGER;if(i===xp)return n.RGBA_INTEGER;if(i===Uc||i===Fc||i===Oc||i===Bc)if(o===Et)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Uc)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Fc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Oc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Bc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Uc)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Fc)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Oc)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Bc)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Nh||i===Uh||i===Fh||i===Oh)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Nh)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Uh)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Fh)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Oh)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Bh||i===zh||i===kh||i===Vh||i===Gh||i===Hh||i===Wh)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Bh||i===zh)return o===Et?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===kh)return o===Et?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===Vh)return s.COMPRESSED_R11_EAC;if(i===Gh)return s.COMPRESSED_SIGNED_R11_EAC;if(i===Hh)return s.COMPRESSED_RG11_EAC;if(i===Wh)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Xh||i===qh||i===Yh||i===$h||i===Kh||i===jh||i===Zh||i===Jh||i===Qh||i===ed||i===td||i===nd||i===id||i===rd)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Xh)return o===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===qh)return o===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Yh)return o===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===$h)return o===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Kh)return o===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===jh)return o===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Zh)return o===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Jh)return o===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Qh)return o===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===ed)return o===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===td)return o===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===nd)return o===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===id)return o===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===rd)return o===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===sd||i===od||i===ad)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===sd)return o===Et?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===od)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===ad)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===ld||i===cd||i===ud||i===fd)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===ld)return s.COMPRESSED_RED_RGTC1_EXT;if(i===cd)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ud)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===fd)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===yl?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const UR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,FR=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class OR{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new uv(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new dr({vertexShader:UR,fragmentShader:FR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Wr(new Tu(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class BR extends ha{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,h=null,d=null,g=null;const _=typeof XRWebGLBinding<"u",m=new OR,p={},M=t.getContextAttributes();let y=null,S=null;const b=[],R=[],w=new At;let U=null;const v=new Ci;v.viewport=new Yt;const E=new Ci;E.viewport=new Yt;const F=[v,E],k=new $b;let H=null,$=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(se){let O=b[se];return O===void 0&&(O=new Af,b[se]=O),O.getTargetRaySpace()},this.getControllerGrip=function(se){let O=b[se];return O===void 0&&(O=new Af,b[se]=O),O.getGripSpace()},this.getHand=function(se){let O=b[se];return O===void 0&&(O=new Af,b[se]=O),O.getHandSpace()};function Q(se){const O=R.indexOf(se.inputSource);if(O===-1)return;const ie=b[O];ie!==void 0&&(ie.update(se.inputSource,se.frame,c||o),ie.dispatchEvent({type:se.type,data:se.inputSource}))}function W(){r.removeEventListener("select",Q),r.removeEventListener("selectstart",Q),r.removeEventListener("selectend",Q),r.removeEventListener("squeeze",Q),r.removeEventListener("squeezestart",Q),r.removeEventListener("squeezeend",Q),r.removeEventListener("end",W),r.removeEventListener("inputsourceschange",V);for(let se=0;se<b.length;se++){const O=R[se];O!==null&&(R[se]=null,b[se].disconnect(O))}H=null,$=null,m.reset();for(const se in p)delete p[se];e.setRenderTarget(y),d=null,h=null,f=null,r=null,S=null,qe.stop(),i.isPresenting=!1,e.setPixelRatio(U),e.setSize(w.width,w.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(se){s=se,i.isPresenting===!0&&Ze("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(se){a=se,i.isPresenting===!0&&Ze("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(se){c=se},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f===null&&_&&(f=new XRWebGLBinding(r,t)),f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(se){if(r=se,r!==null){if(y=e.getRenderTarget(),r.addEventListener("select",Q),r.addEventListener("selectstart",Q),r.addEventListener("selectend",Q),r.addEventListener("squeeze",Q),r.addEventListener("squeezestart",Q),r.addEventListener("squeezeend",Q),r.addEventListener("end",W),r.addEventListener("inputsourceschange",V),M.xrCompatible!==!0&&await t.makeXRCompatible(),U=e.getPixelRatio(),e.getSize(w),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let ie=null,oe=null,ae=null;M.depth&&(ae=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ie=M.stencil?qs:Gr,oe=M.stencil?yl:hr);const Ee={colorFormat:t.RGBA8,depthFormat:ae,scaleFactor:s};f=this.getBinding(),h=f.createProjectionLayer(Ee),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),S=new cr(h.textureWidth,h.textureHeight,{format:ki,type:Pi,depthTexture:new bl(h.textureWidth,h.textureHeight,oe,void 0,void 0,void 0,void 0,void 0,void 0,ie),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const ie={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,t,ie),r.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),S=new cr(d.framebufferWidth,d.framebufferHeight,{format:ki,type:Pi,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),qe.setContext(r),qe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function V(se){for(let O=0;O<se.removed.length;O++){const ie=se.removed[O],oe=R.indexOf(ie);oe>=0&&(R[oe]=null,b[oe].disconnect(ie))}for(let O=0;O<se.added.length;O++){const ie=se.added[O];let oe=R.indexOf(ie);if(oe===-1){for(let Ee=0;Ee<b.length;Ee++)if(Ee>=R.length){R.push(ie),oe=Ee;break}else if(R[Ee]===null){R[Ee]=ie,oe=Ee;break}if(oe===-1)break}const ae=b[oe];ae&&ae.connect(ie)}}const Y=new ne,he=new ne;function L(se,O,ie){Y.setFromMatrixPosition(O.matrixWorld),he.setFromMatrixPosition(ie.matrixWorld);const oe=Y.distanceTo(he),ae=O.projectionMatrix.elements,Ee=ie.projectionMatrix.elements,D=ae[14]/(ae[10]-1),P=ae[14]/(ae[10]+1),z=(ae[9]+1)/ae[5],Z=(ae[9]-1)/ae[5],j=(ae[8]-1)/ae[0],I=(Ee[8]+1)/Ee[0],C=D*j,fe=D*I,le=oe/(-j+I),ee=le*-j;if(O.matrixWorld.decompose(se.position,se.quaternion,se.scale),se.translateX(ee),se.translateZ(le),se.matrixWorld.compose(se.position,se.quaternion,se.scale),se.matrixWorldInverse.copy(se.matrixWorld).invert(),ae[10]===-1)se.projectionMatrix.copy(O.projectionMatrix),se.projectionMatrixInverse.copy(O.projectionMatrixInverse);else{const ce=D+le,A=P+le,x=C-ee,N=fe+(oe-ee),K=z*P/A*ce,J=Z*P/A*ce;se.projectionMatrix.makePerspective(x,N,K,J,ce,A),se.projectionMatrixInverse.copy(se.projectionMatrix).invert()}}function de(se,O){O===null?se.matrixWorld.copy(se.matrix):se.matrixWorld.multiplyMatrices(O.matrixWorld,se.matrix),se.matrixWorldInverse.copy(se.matrixWorld).invert()}this.updateCamera=function(se){if(r===null)return;let O=se.near,ie=se.far;m.texture!==null&&(m.depthNear>0&&(O=m.depthNear),m.depthFar>0&&(ie=m.depthFar)),k.near=E.near=v.near=O,k.far=E.far=v.far=ie,(H!==k.near||$!==k.far)&&(r.updateRenderState({depthNear:k.near,depthFar:k.far}),H=k.near,$=k.far),k.layers.mask=se.layers.mask|6,v.layers.mask=k.layers.mask&3,E.layers.mask=k.layers.mask&5;const oe=se.parent,ae=k.cameras;de(k,oe);for(let Ee=0;Ee<ae.length;Ee++)de(ae[Ee],oe);ae.length===2?L(k,v,E):k.projectionMatrix.copy(v.projectionMatrix),Fe(se,k,oe)};function Fe(se,O,ie){ie===null?se.matrix.copy(O.matrixWorld):(se.matrix.copy(ie.matrixWorld),se.matrix.invert(),se.matrix.multiply(O.matrixWorld)),se.matrix.decompose(se.position,se.quaternion,se.scale),se.updateMatrixWorld(!0),se.projectionMatrix.copy(O.projectionMatrix),se.projectionMatrixInverse.copy(O.projectionMatrixInverse),se.isPerspectiveCamera&&(se.fov=hd*2*Math.atan(1/se.projectionMatrix.elements[5]),se.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(!(h===null&&d===null))return l},this.setFoveation=function(se){l=se,h!==null&&(h.fixedFoveation=se),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=se)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(k)},this.getCameraTexture=function(se){return p[se]};let ze=null;function He(se,O){if(u=O.getViewerPose(c||o),g=O,u!==null){const ie=u.views;d!==null&&(e.setRenderTargetFramebuffer(S,d.framebuffer),e.setRenderTarget(S));let oe=!1;ie.length!==k.cameras.length&&(k.cameras.length=0,oe=!0);for(let P=0;P<ie.length;P++){const z=ie[P];let Z=null;if(d!==null)Z=d.getViewport(z);else{const I=f.getViewSubImage(h,z);Z=I.viewport,P===0&&(e.setRenderTargetTextures(S,I.colorTexture,I.depthStencilTexture),e.setRenderTarget(S))}let j=F[P];j===void 0&&(j=new Ci,j.layers.enable(P),j.viewport=new Yt,F[P]=j),j.matrix.fromArray(z.transform.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale),j.projectionMatrix.fromArray(z.projectionMatrix),j.projectionMatrixInverse.copy(j.projectionMatrix).invert(),j.viewport.set(Z.x,Z.y,Z.width,Z.height),P===0&&(k.matrix.copy(j.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),oe===!0&&k.cameras.push(j)}const ae=r.enabledFeatures;if(ae&&ae.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&_){f=i.getBinding();const P=f.getDepthInformation(ie[0]);P&&P.isValid&&P.texture&&m.init(P,r.renderState)}if(ae&&ae.includes("camera-access")&&_){e.state.unbindTexture(),f=i.getBinding();for(let P=0;P<ie.length;P++){const z=ie[P].camera;if(z){let Z=p[z];Z||(Z=new uv,p[z]=Z);const j=f.getCameraImage(z);Z.sourceTexture=j}}}}for(let ie=0;ie<b.length;ie++){const oe=R[ie],ae=b[ie];oe!==null&&ae!==void 0&&ae.update(oe,O,c||o)}ze&&ze(se,O),O.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:O}),g=null}const qe=new hv;qe.setAnimationLoop(He),this.setAnimationLoop=function(se){ze=se},this.dispose=function(){}}}const Us=new Hr,zR=new Kt;function kR(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,rv(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,M,y,S){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),f(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),h(m,p),p.isMeshPhysicalMaterial&&d(m,p,S)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),_(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,M,y):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===ti&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===ti&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const M=e.get(p),y=M.envMap,S=M.envMapRotation;y&&(m.envMap.value=y,Us.copy(S),Us.x*=-1,Us.y*=-1,Us.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Us.y*=-1,Us.z*=-1),m.envMapRotation.value.setFromMatrix4(zR.makeRotationFromEuler(Us)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,M,y){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*M,m.scale.value=y*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,M){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===ti&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const M=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function VR(n,e,t,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,y){const S=y.program;i.uniformBlockBinding(M,S)}function c(M,y){let S=r[M.id];S===void 0&&(g(M),S=u(M),r[M.id]=S,M.addEventListener("dispose",m));const b=y.program;i.updateUBOMapping(M,b);const R=e.render.frame;s[M.id]!==R&&(h(M),s[M.id]=R)}function u(M){const y=f();M.__bindingPointIndex=y;const S=n.createBuffer(),b=M.__size,R=M.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,b,R),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,y,S),S}function f(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return mt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(M){const y=r[M.id],S=M.uniforms,b=M.__cache;n.bindBuffer(n.UNIFORM_BUFFER,y);for(let R=0,w=S.length;R<w;R++){const U=Array.isArray(S[R])?S[R]:[S[R]];for(let v=0,E=U.length;v<E;v++){const F=U[v];if(d(F,R,v,b)===!0){const k=F.__offset,H=Array.isArray(F.value)?F.value:[F.value];let $=0;for(let Q=0;Q<H.length;Q++){const W=H[Q],V=_(W);typeof W=="number"||typeof W=="boolean"?(F.__data[0]=W,n.bufferSubData(n.UNIFORM_BUFFER,k+$,F.__data)):W.isMatrix3?(F.__data[0]=W.elements[0],F.__data[1]=W.elements[1],F.__data[2]=W.elements[2],F.__data[3]=0,F.__data[4]=W.elements[3],F.__data[5]=W.elements[4],F.__data[6]=W.elements[5],F.__data[7]=0,F.__data[8]=W.elements[6],F.__data[9]=W.elements[7],F.__data[10]=W.elements[8],F.__data[11]=0):(W.toArray(F.__data,$),$+=V.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,k,F.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(M,y,S,b){const R=M.value,w=y+"_"+S;if(b[w]===void 0)return typeof R=="number"||typeof R=="boolean"?b[w]=R:b[w]=R.clone(),!0;{const U=b[w];if(typeof R=="number"||typeof R=="boolean"){if(U!==R)return b[w]=R,!0}else if(U.equals(R)===!1)return U.copy(R),!0}return!1}function g(M){const y=M.uniforms;let S=0;const b=16;for(let w=0,U=y.length;w<U;w++){const v=Array.isArray(y[w])?y[w]:[y[w]];for(let E=0,F=v.length;E<F;E++){const k=v[E],H=Array.isArray(k.value)?k.value:[k.value];for(let $=0,Q=H.length;$<Q;$++){const W=H[$],V=_(W),Y=S%b,he=Y%V.boundary,L=Y+he;S+=he,L!==0&&b-L<V.storage&&(S+=b-L),k.__data=new Float32Array(V.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=S,S+=V.storage}}}const R=S%b;return R>0&&(S+=b-R),M.__size=S,M.__cache={},this}function _(M){const y={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(y.boundary=4,y.storage=4):M.isVector2?(y.boundary=8,y.storage=8):M.isVector3||M.isColor?(y.boundary=16,y.storage=12):M.isVector4?(y.boundary=16,y.storage=16):M.isMatrix3?(y.boundary=48,y.storage=48):M.isMatrix4?(y.boundary=64,y.storage=64):M.isTexture?Ze("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Ze("WebGLRenderer: Unsupported uniform value type.",M),y}function m(M){const y=M.target;y.removeEventListener("dispose",m);const S=o.indexOf(y.__bindingPointIndex);o.splice(S,1),n.deleteBuffer(r[y.id]),delete r[y.id],delete s[y.id]}function p(){for(const M in r)n.deleteBuffer(r[M]);o=[],r={},s={}}return{bind:l,update:c,dispose:p}}const GR=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Yi=null;function HR(){return Yi===null&&(Yi=new Bb(GR,16,16,aa,Vr),Yi.name="DFG_LUT",Yi.minFilter=wn,Yi.magFilter=wn,Yi.wrapS=Pr,Yi.wrapT=Pr,Yi.generateMipmaps=!1,Yi.needsUpdate=!0),Yi}class WR{constructor(e={}){const{canvas:t=fb(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:h=!1,outputBufferType:d=Pi}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=o;const _=d,m=new Set([xp,gp,_p]),p=new Set([Pi,hr,Ml,yl,pp,mp]),M=new Uint32Array(4),y=new Int32Array(4);let S=null,b=null;const R=[],w=[];let U=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=lr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const v=this;let E=!1;this._outputColorSpace=Ai;let F=0,k=0,H=null,$=-1,Q=null;const W=new Yt,V=new Yt;let Y=null;const he=new St(0);let L=0,de=t.width,Fe=t.height,ze=1,He=null,qe=null;const se=new Yt(0,0,de,Fe),O=new Yt(0,0,de,Fe);let ie=!1;const oe=new lv;let ae=!1,Ee=!1;const D=new Kt,P=new ne,z=new Yt,Z={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let j=!1;function I(){return H===null?ze:1}let C=i;function fe(T,G){return t.getContext(T,G)}try{const T={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${hp}`),t.addEventListener("webglcontextlost",Ge,!1),t.addEventListener("webglcontextrestored",ht,!1),t.addEventListener("webglcontextcreationerror",Le,!1),C===null){const G="webgl2";if(C=fe(G,T),C===null)throw fe(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw mt("WebGLRenderer: "+T.message),T}let le,ee,ce,A,x,N,K,J,X,Me,me,Ce,we,_e,xe,be,Pe,ve,Ye,B,Te,ge,Ae,pe;function ue(){le=new H1(C),le.init(),ge=new NR(C,le),ee=new N1(C,le,e,ge),ce=new IR(C,le),ee.reversedDepthBuffer&&h&&ce.buffers.depth.setReversed(!0),A=new q1(C),x=new gR,N=new LR(C,le,ce,x,ee,ge,A),K=new F1(v),J=new G1(v),X=new jb(C),Ae=new I1(C,X),Me=new W1(C,X,A,Ae),me=new $1(C,Me,X,A),Ye=new Y1(C,ee,N),be=new U1(x),Ce=new _R(v,K,J,le,ee,Ae,be),we=new kR(v,x),_e=new vR,xe=new TR(le),ve=new D1(v,K,J,ce,me,g,l),Pe=new PR(v,me,ee),pe=new VR(C,A,ee,ce),B=new L1(C,le,A),Te=new X1(C,le,A),A.programs=Ce.programs,v.capabilities=ee,v.extensions=le,v.properties=x,v.renderLists=_e,v.shadowMap=Pe,v.state=ce,v.info=A}ue(),_!==Pi&&(U=new j1(_,t.width,t.height,r,s));const ye=new BR(v,C);this.xr=ye,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){const T=le.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=le.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return ze},this.setPixelRatio=function(T){T!==void 0&&(ze=T,this.setSize(de,Fe,!1))},this.getSize=function(T){return T.set(de,Fe)},this.setSize=function(T,G,re=!0){if(ye.isPresenting){Ze("WebGLRenderer: Can't change size while VR device is presenting.");return}de=T,Fe=G,t.width=Math.floor(T*ze),t.height=Math.floor(G*ze),re===!0&&(t.style.width=T+"px",t.style.height=G+"px"),U!==null&&U.setSize(t.width,t.height),this.setViewport(0,0,T,G)},this.getDrawingBufferSize=function(T){return T.set(de*ze,Fe*ze).floor()},this.setDrawingBufferSize=function(T,G,re){de=T,Fe=G,ze=re,t.width=Math.floor(T*re),t.height=Math.floor(G*re),this.setViewport(0,0,T,G)},this.setEffects=function(T){if(_===Pi){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let G=0;G<T.length;G++)if(T[G].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}U.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(W)},this.getViewport=function(T){return T.copy(se)},this.setViewport=function(T,G,re,te){T.isVector4?se.set(T.x,T.y,T.z,T.w):se.set(T,G,re,te),ce.viewport(W.copy(se).multiplyScalar(ze).round())},this.getScissor=function(T){return T.copy(O)},this.setScissor=function(T,G,re,te){T.isVector4?O.set(T.x,T.y,T.z,T.w):O.set(T,G,re,te),ce.scissor(V.copy(O).multiplyScalar(ze).round())},this.getScissorTest=function(){return ie},this.setScissorTest=function(T){ce.setScissorTest(ie=T)},this.setOpaqueSort=function(T){He=T},this.setTransparentSort=function(T){qe=T},this.getClearColor=function(T){return T.copy(ve.getClearColor())},this.setClearColor=function(){ve.setClearColor(...arguments)},this.getClearAlpha=function(){return ve.getClearAlpha()},this.setClearAlpha=function(){ve.setClearAlpha(...arguments)},this.clear=function(T=!0,G=!0,re=!0){let te=0;if(T){let q=!1;if(H!==null){const Se=H.texture.format;q=m.has(Se)}if(q){const Se=H.texture.type,Ne=p.has(Se),Re=ve.getClearColor(),Ue=ve.getClearAlpha(),ke=Re.r,$e=Re.g,We=Re.b;Ne?(M[0]=ke,M[1]=$e,M[2]=We,M[3]=Ue,C.clearBufferuiv(C.COLOR,0,M)):(y[0]=ke,y[1]=$e,y[2]=We,y[3]=Ue,C.clearBufferiv(C.COLOR,0,y))}else te|=C.COLOR_BUFFER_BIT}G&&(te|=C.DEPTH_BUFFER_BIT),re&&(te|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear(te)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ge,!1),t.removeEventListener("webglcontextrestored",ht,!1),t.removeEventListener("webglcontextcreationerror",Le,!1),ve.dispose(),_e.dispose(),xe.dispose(),x.dispose(),K.dispose(),J.dispose(),me.dispose(),Ae.dispose(),pe.dispose(),Ce.dispose(),ye.dispose(),ye.removeEventListener("sessionstart",Xt),ye.removeEventListener("sessionend",rt),Mt.stop()};function Ge(T){T.preventDefault(),Wm("WebGLRenderer: Context Lost."),E=!0}function ht(){Wm("WebGLRenderer: Context Restored."),E=!1;const T=A.autoReset,G=Pe.enabled,re=Pe.autoUpdate,te=Pe.needsUpdate,q=Pe.type;ue(),A.autoReset=T,Pe.enabled=G,Pe.autoUpdate=re,Pe.needsUpdate=te,Pe.type=q}function Le(T){mt("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Be(T){const G=T.target;G.removeEventListener("dispose",Be),Qe(G)}function Qe(T){De(T),x.remove(T)}function De(T){const G=x.get(T).programs;G!==void 0&&(G.forEach(function(re){Ce.releaseProgram(re)}),T.isShaderMaterial&&Ce.releaseShaderCache(T))}this.renderBufferDirect=function(T,G,re,te,q,Se){G===null&&(G=Z);const Ne=q.isMesh&&q.matrixWorld.determinant()<0,Re=en(T,G,re,te,q);ce.setMaterial(te,Ne);let Ue=re.index,ke=1;if(te.wireframe===!0){if(Ue=Me.getWireframeAttribute(re),Ue===void 0)return;ke=2}const $e=re.drawRange,We=re.attributes.position;let st=$e.start*ke,Tt=($e.start+$e.count)*ke;Se!==null&&(st=Math.max(st,Se.start*ke),Tt=Math.min(Tt,(Se.start+Se.count)*ke)),Ue!==null?(st=Math.max(st,0),Tt=Math.min(Tt,Ue.count)):We!=null&&(st=Math.max(st,0),Tt=Math.min(Tt,We.count));const Vt=Tt-st;if(Vt<0||Vt===1/0)return;Ae.setup(q,te,Re,re,Ue);let Gt,Rt=B;if(Ue!==null&&(Gt=X.get(Ue),Rt=Te,Rt.setIndex(Gt)),q.isMesh)te.wireframe===!0?(ce.setLineWidth(te.wireframeLinewidth*I()),Rt.setMode(C.LINES)):Rt.setMode(C.TRIANGLES);else if(q.isLine){let Xe=te.linewidth;Xe===void 0&&(Xe=1),ce.setLineWidth(Xe*I()),q.isLineSegments?Rt.setMode(C.LINES):q.isLineLoop?Rt.setMode(C.LINE_LOOP):Rt.setMode(C.LINE_STRIP)}else q.isPoints?Rt.setMode(C.POINTS):q.isSprite&&Rt.setMode(C.TRIANGLES);if(q.isBatchedMesh)if(q._multiDrawInstances!==null)El("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Rt.renderMultiDrawInstances(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount,q._multiDrawInstances);else if(le.get("WEBGL_multi_draw"))Rt.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{const Xe=q._multiDrawStarts,yt=q._multiDrawCounts,pt=q._multiDrawCount,si=Ue?X.get(Ue).bytesPerElement:1,co=x.get(te).currentProgram.getUniforms();for(let oi=0;oi<pt;oi++)co.setValue(C,"_gl_DrawID",oi),Rt.render(Xe[oi]/si,yt[oi])}else if(q.isInstancedMesh)Rt.renderInstances(st,Vt,q.count);else if(re.isInstancedBufferGeometry){const Xe=re._maxInstanceCount!==void 0?re._maxInstanceCount:1/0,yt=Math.min(re.instanceCount,Xe);Rt.renderInstances(st,Vt,yt)}else Rt.render(st,Vt)};function Ke(T,G,re){T.transparent===!0&&T.side===Rr&&T.forceSinglePass===!1?(T.side=ti,T.needsUpdate=!0,bt(T,G,re),T.side=ys,T.needsUpdate=!0,bt(T,G,re),T.side=Rr):bt(T,G,re)}this.compile=function(T,G,re=null){re===null&&(re=T),b=xe.get(re),b.init(G),w.push(b),re.traverseVisible(function(q){q.isLight&&q.layers.test(G.layers)&&(b.pushLight(q),q.castShadow&&b.pushShadow(q))}),T!==re&&T.traverseVisible(function(q){q.isLight&&q.layers.test(G.layers)&&(b.pushLight(q),q.castShadow&&b.pushShadow(q))}),b.setupLights();const te=new Set;return T.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;const Se=q.material;if(Se)if(Array.isArray(Se))for(let Ne=0;Ne<Se.length;Ne++){const Re=Se[Ne];Ke(Re,re,q),te.add(Re)}else Ke(Se,re,q),te.add(Se)}),b=w.pop(),te},this.compileAsync=function(T,G,re=null){const te=this.compile(T,G,re);return new Promise(q=>{function Se(){if(te.forEach(function(Ne){x.get(Ne).currentProgram.isReady()&&te.delete(Ne)}),te.size===0){q(T);return}setTimeout(Se,10)}le.get("KHR_parallel_shader_compile")!==null?Se():setTimeout(Se,10)})};let Ve=null;function je(T){Ve&&Ve(T)}function Xt(){Mt.stop()}function rt(){Mt.start()}const Mt=new hv;Mt.setAnimationLoop(je),typeof self<"u"&&Mt.setContext(self),this.setAnimationLoop=function(T){Ve=T,ye.setAnimationLoop(T),T===null?Mt.stop():Mt.start()},ye.addEventListener("sessionstart",Xt),ye.addEventListener("sessionend",rt),this.render=function(T,G){if(G!==void 0&&G.isCamera!==!0){mt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;const re=ye.enabled===!0&&ye.isPresenting===!0,te=U!==null&&(H===null||re)&&U.begin(v,H);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),ye.enabled===!0&&ye.isPresenting===!0&&(U===null||U.isCompositing()===!1)&&(ye.cameraAutoUpdate===!0&&ye.updateCamera(G),G=ye.getCamera()),T.isScene===!0&&T.onBeforeRender(v,T,G,H),b=xe.get(T,w.length),b.init(G),w.push(b),D.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),oe.setFromProjectionMatrix(D,sr,G.reversedDepth),Ee=this.localClippingEnabled,ae=be.init(this.clippingPlanes,Ee),S=_e.get(T,R.length),S.init(),R.push(S),ye.enabled===!0&&ye.isPresenting===!0){const Ne=v.xr.getDepthSensingMesh();Ne!==null&&jt(Ne,G,-1/0,v.sortObjects)}jt(T,G,0,v.sortObjects),S.finish(),v.sortObjects===!0&&S.sort(He,qe),j=ye.enabled===!1||ye.isPresenting===!1||ye.hasDepthSensing()===!1,j&&ve.addToRenderList(S,T),this.info.render.frame++,ae===!0&&be.beginShadows();const q=b.state.shadowsArray;if(Pe.render(q,T,G),ae===!0&&be.endShadows(),this.info.autoReset===!0&&this.info.reset(),(te&&U.hasRenderPass())===!1){const Ne=S.opaque,Re=S.transmissive;if(b.setupLights(),G.isArrayCamera){const Ue=G.cameras;if(Re.length>0)for(let ke=0,$e=Ue.length;ke<$e;ke++){const We=Ue[ke];wt(Ne,Re,T,We)}j&&ve.render(T);for(let ke=0,$e=Ue.length;ke<$e;ke++){const We=Ue[ke];Ut(S,T,We,We.viewport)}}else Re.length>0&&wt(Ne,Re,T,G),j&&ve.render(T),Ut(S,T,G)}H!==null&&k===0&&(N.updateMultisampleRenderTarget(H),N.updateRenderTargetMipmap(H)),te&&U.end(v),T.isScene===!0&&T.onAfterRender(v,T,G),Ae.resetDefaultState(),$=-1,Q=null,w.pop(),w.length>0?(b=w[w.length-1],ae===!0&&be.setGlobalState(v.clippingPlanes,b.state.camera)):b=null,R.pop(),R.length>0?S=R[R.length-1]:S=null};function jt(T,G,re,te){if(T.visible===!1)return;if(T.layers.test(G.layers)){if(T.isGroup)re=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(G);else if(T.isLight)b.pushLight(T),T.castShadow&&b.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||oe.intersectsSprite(T)){te&&z.setFromMatrixPosition(T.matrixWorld).applyMatrix4(D);const Ne=me.update(T),Re=T.material;Re.visible&&S.push(T,Ne,Re,re,z.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||oe.intersectsObject(T))){const Ne=me.update(T),Re=T.material;if(te&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),z.copy(T.boundingSphere.center)):(Ne.boundingSphere===null&&Ne.computeBoundingSphere(),z.copy(Ne.boundingSphere.center)),z.applyMatrix4(T.matrixWorld).applyMatrix4(D)),Array.isArray(Re)){const Ue=Ne.groups;for(let ke=0,$e=Ue.length;ke<$e;ke++){const We=Ue[ke],st=Re[We.materialIndex];st&&st.visible&&S.push(T,Ne,st,re,z.z,We)}}else Re.visible&&S.push(T,Ne,Re,re,z.z,null)}}const Se=T.children;for(let Ne=0,Re=Se.length;Ne<Re;Ne++)jt(Se[Ne],G,re,te)}function Ut(T,G,re,te){const{opaque:q,transmissive:Se,transparent:Ne}=T;b.setupLightsView(re),ae===!0&&be.setGlobalState(v.clippingPlanes,re),te&&ce.viewport(W.copy(te)),q.length>0&&dt(q,G,re),Se.length>0&&dt(Se,G,re),Ne.length>0&&dt(Ne,G,re),ce.buffers.depth.setTest(!0),ce.buffers.depth.setMask(!0),ce.buffers.color.setMask(!0),ce.setPolygonOffset(!1)}function wt(T,G,re,te){if((re.isScene===!0?re.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[te.id]===void 0){const st=le.has("EXT_color_buffer_half_float")||le.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[te.id]=new cr(1,1,{generateMipmaps:!0,type:st?Vr:Pi,minFilter:Xs,samples:ee.samples,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ft.workingColorSpace})}const Se=b.state.transmissionRenderTarget[te.id],Ne=te.viewport||W;Se.setSize(Ne.z*v.transmissionResolutionScale,Ne.w*v.transmissionResolutionScale);const Re=v.getRenderTarget(),Ue=v.getActiveCubeFace(),ke=v.getActiveMipmapLevel();v.setRenderTarget(Se),v.getClearColor(he),L=v.getClearAlpha(),L<1&&v.setClearColor(16777215,.5),v.clear(),j&&ve.render(re);const $e=v.toneMapping;v.toneMapping=lr;const We=te.viewport;if(te.viewport!==void 0&&(te.viewport=void 0),b.setupLightsView(te),ae===!0&&be.setGlobalState(v.clippingPlanes,te),dt(T,re,te),N.updateMultisampleRenderTarget(Se),N.updateRenderTargetMipmap(Se),le.has("WEBGL_multisampled_render_to_texture")===!1){let st=!1;for(let Tt=0,Vt=G.length;Tt<Vt;Tt++){const Gt=G[Tt],{object:Rt,geometry:Xe,material:yt,group:pt}=Gt;if(yt.side===Rr&&Rt.layers.test(te.layers)){const si=yt.side;yt.side=ti,yt.needsUpdate=!0,Xn(Rt,re,te,Xe,yt,pt),yt.side=si,yt.needsUpdate=!0,st=!0}}st===!0&&(N.updateMultisampleRenderTarget(Se),N.updateRenderTargetMipmap(Se))}v.setRenderTarget(Re,Ue,ke),v.setClearColor(he,L),We!==void 0&&(te.viewport=We),v.toneMapping=$e}function dt(T,G,re){const te=G.isScene===!0?G.overrideMaterial:null;for(let q=0,Se=T.length;q<Se;q++){const Ne=T[q],{object:Re,geometry:Ue,group:ke}=Ne;let $e=Ne.material;$e.allowOverride===!0&&te!==null&&($e=te),Re.layers.test(re.layers)&&Xn(Re,G,re,Ue,$e,ke)}}function Xn(T,G,re,te,q,Se){T.onBeforeRender(v,G,re,te,q,Se),T.modelViewMatrix.multiplyMatrices(re.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),q.onBeforeRender(v,G,re,te,T,Se),q.transparent===!0&&q.side===Rr&&q.forceSinglePass===!1?(q.side=ti,q.needsUpdate=!0,v.renderBufferDirect(re,G,te,q,T,Se),q.side=ys,q.needsUpdate=!0,v.renderBufferDirect(re,G,te,q,T,Se),q.side=Rr):v.renderBufferDirect(re,G,te,q,T,Se),T.onAfterRender(v,G,re,te,q,Se)}function bt(T,G,re){G.isScene!==!0&&(G=Z);const te=x.get(T),q=b.state.lights,Se=b.state.shadowsArray,Ne=q.state.version,Re=Ce.getParameters(T,q.state,Se,G,re),Ue=Ce.getProgramCacheKey(Re);let ke=te.programs;te.environment=T.isMeshStandardMaterial?G.environment:null,te.fog=G.fog,te.envMap=(T.isMeshStandardMaterial?J:K).get(T.envMap||te.environment),te.envMapRotation=te.environment!==null&&T.envMap===null?G.environmentRotation:T.envMapRotation,ke===void 0&&(T.addEventListener("dispose",Be),ke=new Map,te.programs=ke);let $e=ke.get(Ue);if($e!==void 0){if(te.currentProgram===$e&&te.lightsStateVersion===Ne)return ri(T,Re),$e}else Re.uniforms=Ce.getUniforms(T),T.onBeforeCompile(Re,v),$e=Ce.acquireProgram(Re,Ue),ke.set(Ue,$e),te.uniforms=Re.uniforms;const We=te.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(We.clippingPlanes=be.uniform),ri(T,Re),te.needsLights=cn(T),te.lightsStateVersion=Ne,te.needsLights&&(We.ambientLightColor.value=q.state.ambient,We.lightProbe.value=q.state.probe,We.directionalLights.value=q.state.directional,We.directionalLightShadows.value=q.state.directionalShadow,We.spotLights.value=q.state.spot,We.spotLightShadows.value=q.state.spotShadow,We.rectAreaLights.value=q.state.rectArea,We.ltc_1.value=q.state.rectAreaLTC1,We.ltc_2.value=q.state.rectAreaLTC2,We.pointLights.value=q.state.point,We.pointLightShadows.value=q.state.pointShadow,We.hemisphereLights.value=q.state.hemi,We.directionalShadowMap.value=q.state.directionalShadowMap,We.directionalShadowMatrix.value=q.state.directionalShadowMatrix,We.spotShadowMap.value=q.state.spotShadowMap,We.spotLightMatrix.value=q.state.spotLightMatrix,We.spotLightMap.value=q.state.spotLightMap,We.pointShadowMap.value=q.state.pointShadowMap,We.pointShadowMatrix.value=q.state.pointShadowMatrix),te.currentProgram=$e,te.uniformsList=null,$e}function vn(T){if(T.uniformsList===null){const G=T.currentProgram.getUniforms();T.uniformsList=zc.seqWithValue(G.seq,T.uniforms)}return T.uniformsList}function ri(T,G){const re=x.get(T);re.outputColorSpace=G.outputColorSpace,re.batching=G.batching,re.batchingColor=G.batchingColor,re.instancing=G.instancing,re.instancingColor=G.instancingColor,re.instancingMorph=G.instancingMorph,re.skinning=G.skinning,re.morphTargets=G.morphTargets,re.morphNormals=G.morphNormals,re.morphColors=G.morphColors,re.morphTargetsCount=G.morphTargetsCount,re.numClippingPlanes=G.numClippingPlanes,re.numIntersection=G.numClipIntersection,re.vertexAlphas=G.vertexAlphas,re.vertexTangents=G.vertexTangents,re.toneMapping=G.toneMapping}function en(T,G,re,te,q){G.isScene!==!0&&(G=Z),N.resetTextureUnits();const Se=G.fog,Ne=te.isMeshStandardMaterial?G.environment:null,Re=H===null?v.outputColorSpace:H.isXRRenderTarget===!0?H.texture.colorSpace:la,Ue=(te.isMeshStandardMaterial?J:K).get(te.envMap||Ne),ke=te.vertexColors===!0&&!!re.attributes.color&&re.attributes.color.itemSize===4,$e=!!re.attributes.tangent&&(!!te.normalMap||te.anisotropy>0),We=!!re.morphAttributes.position,st=!!re.morphAttributes.normal,Tt=!!re.morphAttributes.color;let Vt=lr;te.toneMapped&&(H===null||H.isXRRenderTarget===!0)&&(Vt=v.toneMapping);const Gt=re.morphAttributes.position||re.morphAttributes.normal||re.morphAttributes.color,Rt=Gt!==void 0?Gt.length:0,Xe=x.get(te),yt=b.state.lights;if(ae===!0&&(Ee===!0||T!==Q)){const In=T===Q&&te.id===$;be.setState(te,T,In)}let pt=!1;te.version===Xe.__version?(Xe.needsLights&&Xe.lightsStateVersion!==yt.state.version||Xe.outputColorSpace!==Re||q.isBatchedMesh&&Xe.batching===!1||!q.isBatchedMesh&&Xe.batching===!0||q.isBatchedMesh&&Xe.batchingColor===!0&&q.colorTexture===null||q.isBatchedMesh&&Xe.batchingColor===!1&&q.colorTexture!==null||q.isInstancedMesh&&Xe.instancing===!1||!q.isInstancedMesh&&Xe.instancing===!0||q.isSkinnedMesh&&Xe.skinning===!1||!q.isSkinnedMesh&&Xe.skinning===!0||q.isInstancedMesh&&Xe.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&Xe.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&Xe.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&Xe.instancingMorph===!1&&q.morphTexture!==null||Xe.envMap!==Ue||te.fog===!0&&Xe.fog!==Se||Xe.numClippingPlanes!==void 0&&(Xe.numClippingPlanes!==be.numPlanes||Xe.numIntersection!==be.numIntersection)||Xe.vertexAlphas!==ke||Xe.vertexTangents!==$e||Xe.morphTargets!==We||Xe.morphNormals!==st||Xe.morphColors!==Tt||Xe.toneMapping!==Vt||Xe.morphTargetsCount!==Rt)&&(pt=!0):(pt=!0,Xe.__version=te.version);let si=Xe.currentProgram;pt===!0&&(si=bt(te,G,q));let co=!1,oi=!1,pa=!1;const Dt=si.getUniforms(),qn=Xe.uniforms;if(ce.useProgram(si.program)&&(co=!0,oi=!0,pa=!0),te.id!==$&&($=te.id,oi=!0),co||Q!==T){ce.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),Dt.setValue(C,"projectionMatrix",T.projectionMatrix),Dt.setValue(C,"viewMatrix",T.matrixWorldInverse);const Yn=Dt.map.cameraPosition;Yn!==void 0&&Yn.setValue(C,P.setFromMatrixPosition(T.matrixWorld)),ee.logarithmicDepthBuffer&&Dt.setValue(C,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(te.isMeshPhongMaterial||te.isMeshToonMaterial||te.isMeshLambertMaterial||te.isMeshBasicMaterial||te.isMeshStandardMaterial||te.isShaderMaterial)&&Dt.setValue(C,"isOrthographic",T.isOrthographicCamera===!0),Q!==T&&(Q=T,oi=!0,pa=!0)}if(Xe.needsLights&&(yt.state.directionalShadowMap.length>0&&Dt.setValue(C,"directionalShadowMap",yt.state.directionalShadowMap,N),yt.state.spotShadowMap.length>0&&Dt.setValue(C,"spotShadowMap",yt.state.spotShadowMap,N),yt.state.pointShadowMap.length>0&&Dt.setValue(C,"pointShadowMap",yt.state.pointShadowMap,N)),q.isSkinnedMesh){Dt.setOptional(C,q,"bindMatrix"),Dt.setOptional(C,q,"bindMatrixInverse");const In=q.skeleton;In&&(In.boneTexture===null&&In.computeBoneTexture(),Dt.setValue(C,"boneTexture",In.boneTexture,N))}q.isBatchedMesh&&(Dt.setOptional(C,q,"batchingTexture"),Dt.setValue(C,"batchingTexture",q._matricesTexture,N),Dt.setOptional(C,q,"batchingIdTexture"),Dt.setValue(C,"batchingIdTexture",q._indirectTexture,N),Dt.setOptional(C,q,"batchingColorTexture"),q._colorsTexture!==null&&Dt.setValue(C,"batchingColorTexture",q._colorsTexture,N));const Ei=re.morphAttributes;if((Ei.position!==void 0||Ei.normal!==void 0||Ei.color!==void 0)&&Ye.update(q,re,si),(oi||Xe.receiveShadow!==q.receiveShadow)&&(Xe.receiveShadow=q.receiveShadow,Dt.setValue(C,"receiveShadow",q.receiveShadow)),te.isMeshGouraudMaterial&&te.envMap!==null&&(qn.envMap.value=Ue,qn.flipEnvMap.value=Ue.isCubeTexture&&Ue.isRenderTargetTexture===!1?-1:1),te.isMeshStandardMaterial&&te.envMap===null&&G.environment!==null&&(qn.envMapIntensity.value=G.environmentIntensity),qn.dfgLUT!==void 0&&(qn.dfgLUT.value=HR()),oi&&(Dt.setValue(C,"toneMappingExposure",v.toneMappingExposure),Xe.needsLights&&tn(qn,pa),Se&&te.fog===!0&&we.refreshFogUniforms(qn,Se),we.refreshMaterialUniforms(qn,te,ze,Fe,b.state.transmissionRenderTarget[T.id]),zc.upload(C,vn(Xe),qn,N)),te.isShaderMaterial&&te.uniformsNeedUpdate===!0&&(zc.upload(C,vn(Xe),qn,N),te.uniformsNeedUpdate=!1),te.isSpriteMaterial&&Dt.setValue(C,"center",q.center),Dt.setValue(C,"modelViewMatrix",q.modelViewMatrix),Dt.setValue(C,"normalMatrix",q.normalMatrix),Dt.setValue(C,"modelMatrix",q.matrixWorld),te.isShaderMaterial||te.isRawShaderMaterial){const In=te.uniformsGroups;for(let Yn=0,Pu=In.length;Yn<Pu;Yn++){const Ts=In[Yn];pe.update(Ts,si),pe.bind(Ts,si)}}return si}function tn(T,G){T.ambientLightColor.needsUpdate=G,T.lightProbe.needsUpdate=G,T.directionalLights.needsUpdate=G,T.directionalLightShadows.needsUpdate=G,T.pointLights.needsUpdate=G,T.pointLightShadows.needsUpdate=G,T.spotLights.needsUpdate=G,T.spotLightShadows.needsUpdate=G,T.rectAreaLights.needsUpdate=G,T.hemisphereLights.needsUpdate=G}function cn(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return k},this.getRenderTarget=function(){return H},this.setRenderTargetTextures=function(T,G,re){const te=x.get(T);te.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,te.__autoAllocateDepthBuffer===!1&&(te.__useRenderToTexture=!1),x.get(T.texture).__webglTexture=G,x.get(T.depthTexture).__webglTexture=te.__autoAllocateDepthBuffer?void 0:re,te.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,G){const re=x.get(T);re.__webglFramebuffer=G,re.__useDefaultFramebuffer=G===void 0};const pr=C.createFramebuffer();this.setRenderTarget=function(T,G=0,re=0){H=T,F=G,k=re;let te=null,q=!1,Se=!1;if(T){const Re=x.get(T);if(Re.__useDefaultFramebuffer!==void 0){ce.bindFramebuffer(C.FRAMEBUFFER,Re.__webglFramebuffer),W.copy(T.viewport),V.copy(T.scissor),Y=T.scissorTest,ce.viewport(W),ce.scissor(V),ce.setScissorTest(Y),$=-1;return}else if(Re.__webglFramebuffer===void 0)N.setupRenderTarget(T);else if(Re.__hasExternalTextures)N.rebindTextures(T,x.get(T.texture).__webglTexture,x.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const $e=T.depthTexture;if(Re.__boundDepthTexture!==$e){if($e!==null&&x.has($e)&&(T.width!==$e.image.width||T.height!==$e.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");N.setupDepthRenderbuffer(T)}}const Ue=T.texture;(Ue.isData3DTexture||Ue.isDataArrayTexture||Ue.isCompressedArrayTexture)&&(Se=!0);const ke=x.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(ke[G])?te=ke[G][re]:te=ke[G],q=!0):T.samples>0&&N.useMultisampledRTT(T)===!1?te=x.get(T).__webglMultisampledFramebuffer:Array.isArray(ke)?te=ke[re]:te=ke,W.copy(T.viewport),V.copy(T.scissor),Y=T.scissorTest}else W.copy(se).multiplyScalar(ze).floor(),V.copy(O).multiplyScalar(ze).floor(),Y=ie;if(re!==0&&(te=pr),ce.bindFramebuffer(C.FRAMEBUFFER,te)&&ce.drawBuffers(T,te),ce.viewport(W),ce.scissor(V),ce.setScissorTest(Y),q){const Re=x.get(T.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+G,Re.__webglTexture,re)}else if(Se){const Re=G;for(let Ue=0;Ue<T.textures.length;Ue++){const ke=x.get(T.textures[Ue]);C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0+Ue,ke.__webglTexture,re,Re)}}else if(T!==null&&re!==0){const Re=x.get(T.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Re.__webglTexture,re)}$=-1},this.readRenderTargetPixels=function(T,G,re,te,q,Se,Ne,Re=0){if(!(T&&T.isWebGLRenderTarget)){mt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ue=x.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ne!==void 0&&(Ue=Ue[Ne]),Ue){ce.bindFramebuffer(C.FRAMEBUFFER,Ue);try{const ke=T.textures[Re],$e=ke.format,We=ke.type;if(!ee.textureFormatReadable($e)){mt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ee.textureTypeReadable(We)){mt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=T.width-te&&re>=0&&re<=T.height-q&&(T.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+Re),C.readPixels(G,re,te,q,ge.convert($e),ge.convert(We),Se))}finally{const ke=H!==null?x.get(H).__webglFramebuffer:null;ce.bindFramebuffer(C.FRAMEBUFFER,ke)}}},this.readRenderTargetPixelsAsync=async function(T,G,re,te,q,Se,Ne,Re=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ue=x.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ne!==void 0&&(Ue=Ue[Ne]),Ue)if(G>=0&&G<=T.width-te&&re>=0&&re<=T.height-q){ce.bindFramebuffer(C.FRAMEBUFFER,Ue);const ke=T.textures[Re],$e=ke.format,We=ke.type;if(!ee.textureFormatReadable($e))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ee.textureTypeReadable(We))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const st=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,st),C.bufferData(C.PIXEL_PACK_BUFFER,Se.byteLength,C.STREAM_READ),T.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+Re),C.readPixels(G,re,te,q,ge.convert($e),ge.convert(We),0);const Tt=H!==null?x.get(H).__webglFramebuffer:null;ce.bindFramebuffer(C.FRAMEBUFFER,Tt);const Vt=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await hb(C,Vt,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,st),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,Se),C.deleteBuffer(st),C.deleteSync(Vt),Se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,G=null,re=0){const te=Math.pow(2,-re),q=Math.floor(T.image.width*te),Se=Math.floor(T.image.height*te),Ne=G!==null?G.x:0,Re=G!==null?G.y:0;N.setTexture2D(T,0),C.copyTexSubImage2D(C.TEXTURE_2D,re,0,0,Ne,Re,q,Se),ce.unbindTexture()};const lo=C.createFramebuffer(),un=C.createFramebuffer();this.copyTextureToTexture=function(T,G,re=null,te=null,q=0,Se=null){Se===null&&(q!==0?(El("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Se=q,q=0):Se=0);let Ne,Re,Ue,ke,$e,We,st,Tt,Vt;const Gt=T.isCompressedTexture?T.mipmaps[Se]:T.image;if(re!==null)Ne=re.max.x-re.min.x,Re=re.max.y-re.min.y,Ue=re.isBox3?re.max.z-re.min.z:1,ke=re.min.x,$e=re.min.y,We=re.isBox3?re.min.z:0;else{const Ei=Math.pow(2,-q);Ne=Math.floor(Gt.width*Ei),Re=Math.floor(Gt.height*Ei),T.isDataArrayTexture?Ue=Gt.depth:T.isData3DTexture?Ue=Math.floor(Gt.depth*Ei):Ue=1,ke=0,$e=0,We=0}te!==null?(st=te.x,Tt=te.y,Vt=te.z):(st=0,Tt=0,Vt=0);const Rt=ge.convert(G.format),Xe=ge.convert(G.type);let yt;G.isData3DTexture?(N.setTexture3D(G,0),yt=C.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(N.setTexture2DArray(G,0),yt=C.TEXTURE_2D_ARRAY):(N.setTexture2D(G,0),yt=C.TEXTURE_2D),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,G.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,G.unpackAlignment);const pt=C.getParameter(C.UNPACK_ROW_LENGTH),si=C.getParameter(C.UNPACK_IMAGE_HEIGHT),co=C.getParameter(C.UNPACK_SKIP_PIXELS),oi=C.getParameter(C.UNPACK_SKIP_ROWS),pa=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,Gt.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,Gt.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,ke),C.pixelStorei(C.UNPACK_SKIP_ROWS,$e),C.pixelStorei(C.UNPACK_SKIP_IMAGES,We);const Dt=T.isDataArrayTexture||T.isData3DTexture,qn=G.isDataArrayTexture||G.isData3DTexture;if(T.isDepthTexture){const Ei=x.get(T),In=x.get(G),Yn=x.get(Ei.__renderTarget),Pu=x.get(In.__renderTarget);ce.bindFramebuffer(C.READ_FRAMEBUFFER,Yn.__webglFramebuffer),ce.bindFramebuffer(C.DRAW_FRAMEBUFFER,Pu.__webglFramebuffer);for(let Ts=0;Ts<Ue;Ts++)Dt&&(C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,x.get(T).__webglTexture,q,We+Ts),C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,x.get(G).__webglTexture,Se,Vt+Ts)),C.blitFramebuffer(ke,$e,Ne,Re,st,Tt,Ne,Re,C.DEPTH_BUFFER_BIT,C.NEAREST);ce.bindFramebuffer(C.READ_FRAMEBUFFER,null),ce.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else if(q!==0||T.isRenderTargetTexture||x.has(T)){const Ei=x.get(T),In=x.get(G);ce.bindFramebuffer(C.READ_FRAMEBUFFER,lo),ce.bindFramebuffer(C.DRAW_FRAMEBUFFER,un);for(let Yn=0;Yn<Ue;Yn++)Dt?C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Ei.__webglTexture,q,We+Yn):C.framebufferTexture2D(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Ei.__webglTexture,q),qn?C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,In.__webglTexture,Se,Vt+Yn):C.framebufferTexture2D(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,In.__webglTexture,Se),q!==0?C.blitFramebuffer(ke,$e,Ne,Re,st,Tt,Ne,Re,C.COLOR_BUFFER_BIT,C.NEAREST):qn?C.copyTexSubImage3D(yt,Se,st,Tt,Vt+Yn,ke,$e,Ne,Re):C.copyTexSubImage2D(yt,Se,st,Tt,ke,$e,Ne,Re);ce.bindFramebuffer(C.READ_FRAMEBUFFER,null),ce.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else qn?T.isDataTexture||T.isData3DTexture?C.texSubImage3D(yt,Se,st,Tt,Vt,Ne,Re,Ue,Rt,Xe,Gt.data):G.isCompressedArrayTexture?C.compressedTexSubImage3D(yt,Se,st,Tt,Vt,Ne,Re,Ue,Rt,Gt.data):C.texSubImage3D(yt,Se,st,Tt,Vt,Ne,Re,Ue,Rt,Xe,Gt):T.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,Se,st,Tt,Ne,Re,Rt,Xe,Gt.data):T.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,Se,st,Tt,Gt.width,Gt.height,Rt,Gt.data):C.texSubImage2D(C.TEXTURE_2D,Se,st,Tt,Ne,Re,Rt,Xe,Gt);C.pixelStorei(C.UNPACK_ROW_LENGTH,pt),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,si),C.pixelStorei(C.UNPACK_SKIP_PIXELS,co),C.pixelStorei(C.UNPACK_SKIP_ROWS,oi),C.pixelStorei(C.UNPACK_SKIP_IMAGES,pa),Se===0&&G.generateMipmaps&&C.generateMipmap(yt),ce.unbindTexture()},this.initRenderTarget=function(T){x.get(T).__webglFramebuffer===void 0&&N.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?N.setTextureCube(T,0):T.isData3DTexture?N.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?N.setTexture2DArray(T,0):N.setTexture2D(T,0),ce.unbindTexture()},this.resetState=function(){F=0,k=0,H=null,ce.reset(),Ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return sr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=ft._getDrawingBufferColorSpace(e),t.unpackColorSpace=ft._getUnpackColorSpace()}}const Ru=(n,e)=>{const t=n.__vccOpts||n;for(const[i,r]of e)t[i]=r;return t},XR={__name:"CosmicBackground",setup(n){const e=du(null);let t,i,r,s,o;const a=()=>{t=new Ob,t.fog=new yp(16119287,.0015),i=new Ci(60,window.innerWidth/window.innerHeight,.1,1e3),i.position.z=1,i.rotation.x=Math.PI/2,r=new WR({antialias:!0,alpha:!0}),r.setSize(window.innerWidth,window.innerHeight),r.setPixelRatio(window.devicePixelRatio),r.setClearColor(16119287,1),e.value.appendChild(r.domElement),o=new Xi;const u=4e3,f=new Float32Array(u*3);for(let m=0;m<u*3;m+=3)f[m]=(Math.random()-.5)*800,f[m+1]=(Math.random()-.5)*800,f[m+2]=(Math.random()-.5)*800;o.setAttribute("position",new Hi(f,3));const h=document.createElement("canvas");h.width=32,h.height=32;const d=h.getContext("2d");d.fillStyle="#8c8c8c",d.fillRect(8,8,16,16);const g=new Hb(h),_=new cv({color:4473924,size:.8,transparent:!0,opacity:.6,map:g,sizeAttenuation:!0});s=new Gb(o,_),t.add(s),window.addEventListener("resize",l),c()},l=()=>{i.aspect=window.innerWidth/window.innerHeight,i.updateProjectionMatrix(),r.setSize(window.innerWidth,window.innerHeight)},c=()=>{o.attributes.position.needsUpdate=!0,s.rotation.y+=2e-4,s.rotation.x+=1e-4,i.position.z=1+Math.sin(Date.now()*1e-4)*5,r.render(t,i),requestAnimationFrame(c)};return wl(()=>{a(),Ar.from(i.position,{z:50,duration:3,ease:"power3.out"})}),zg(()=>{window.removeEventListener("resize",l),e.value&&r.domElement&&e.value.removeChild(r.domElement)}),(u,f)=>(Rl(),xu("div",{ref_key:"container",ref:e,class:"tech-background"},null,512))}},qR=Ru(XR,[["__scopeId","data-v-00dfa001"]]),YR={class:"scramble-text"},L_="!<>-_\\/[]{}—=+*^?#________",$R={__name:"TextScramble",props:{text:{type:String,required:!0},duration:{type:Number,default:1.5},trigger:{type:Boolean,default:!0}},setup(n){const e=n,t=du(""),i=()=>{const r=e.text,s=r.length;let o=0;const a=e.duration*30,l=setInterval(()=>{let c="";for(let u=0;u<s;u++){const f=o/a;u/s<f?c+=r[u]:c+=L_[Math.floor(Math.random()*L_.length)]}t.value=c,o++,o>a&&(clearInterval(l),t.value=r)},30)};return wl(()=>{e.trigger&&i()}),Va(()=>e.trigger,r=>{r&&i()}),(r,s)=>(Rl(),xu("span",YR,og(t.value),1))}},N_=Ru($R,[["__scopeId","data-v-731392b2"]]),KR=""+new URL("../images/class-yoga.png",import.meta.url).href,jR=""+new URL("../images/class-cardio.png",import.meta.url).href,ZR={class:"gallery-section"},JR={__name:"GallerySection",setup(n){return Ar.registerPlugin(lt),wl(()=>{document.querySelectorAll(".gallery-item img").forEach(t=>{Ar.to(t,{scrollTrigger:{trigger:t,start:"top bottom",end:"bottom top",scrub:1},y:-30,ease:"none"})})}),(e,t)=>(Rl(),xu("div",ZR,[...t[0]||(t[0]=[Yf('<div class="gallery-grid" data-v-3687e746><div class="gallery-item large" data-v-3687e746><img src="'+u0+'" alt="Industrial Power" data-v-3687e746><div class="overlay" data-v-3687e746><h4 data-v-3687e746>POWER</h4></div></div><div class="gallery-item" data-v-3687e746><img src="'+KR+'" alt="Focus" class="filtered" data-v-3687e746><div class="overlay" data-v-3687e746><h4 data-v-3687e746>FOCUS</h4></div></div><div class="gallery-item" data-v-3687e746><img src="'+jR+'" alt="Speed" class="filtered" data-v-3687e746><div class="overlay" data-v-3687e746><h4 data-v-3687e746>SPEED</h4></div></div><div class="gallery-item large" data-v-3687e746><img src="'+jf+'" alt="Environment" data-v-3687e746><div class="overlay" data-v-3687e746><h4 data-v-3687e746>SPACE</h4></div></div></div>',1)])]))}},QR=Ru(JR,[["__scopeId","data-v-3687e746"]]),eC={class:"landing-page"},tC={class:"hero"},nC={class:"hero-content"},iC={class:"highlight"},rC={__name:"LandingPage",setup(n){return Ar.registerPlugin(lt),wl(()=>{Ar.from(".hero-content",{y:50,opacity:0,duration:1.5,delay:.5,ease:"power4.out"}),document.querySelectorAll(".scroll-reveal").forEach(i=>{Ar.from(i,{scrollTrigger:{trigger:i,start:"top 80%",toggleActions:"play none none reverse"},y:50,opacity:0,duration:1,ease:"power3.out"})}),document.querySelectorAll(".magnetic-btn").forEach(i=>{i.addEventListener("mousemove",r=>{const s=i.getBoundingClientRect(),o=r.clientX-s.left-s.width/2,a=r.clientY-s.top-s.height/2;Ar.to(i,{x:o*.3,y:a*.3,duration:.3})}),i.addEventListener("mouseleave",()=>{Ar.to(i,{x:0,y:0,duration:.5,ease:"elastic.out(1, 0.3)"})})})}),(e,t)=>(Rl(),xu("div",eC,[mn(qR),t[4]||(t[4]=Yf('<nav class="navbar" data-v-b75ea8e3><div class="logo" data-v-b75ea8e3>BENZ<span data-v-b75ea8e3>DINH</span>GYM</div><div class="links" data-v-b75ea8e3><a href="#about" data-v-b75ea8e3>About</a><a href="#classes" data-v-b75ea8e3>Classes</a><a href="#tech" data-v-b75ea8e3>Tech</a><a href="#contact" class="btn-glow" data-v-b75ea8e3>Join Now</a></div></nav>',1)),ui("section",tC,[t[3]||(t[3]=ui("div",{class:"hero-overlay"},null,-1)),ui("div",nC,[ui("h1",null,[mn(N_,{text:"ENGINEER YOUR"}),t[0]||(t[0]=s0()),ui("span",iC,[mn(N_,{text:"PHYSIQUE"})])]),t[1]||(t[1]=ui("p",null,"Premium Industrial Fitness & Biomechanics",-1)),t[2]||(t[2]=ui("button",{class:"cta-button magnetic-btn"},"START TRAINING",-1))])]),t[5]||(t[5]=ui("section",{class:"content-section",id:"about"},[ui("div",{class:"glass-card scroll-reveal"},[ui("h2",null,"THE FACILITY"),ui("p",null,"Precision-engineered training environments. We utilize industrial-grade equipment and data-driven protocols to sculpt the ultimate human form.")])],-1)),mn(QR),t[6]||(t[6]=Yf('<section class="content-section" id="classes" data-v-b75ea8e3><div class="scroll-reveal" data-v-b75ea8e3><h2 data-v-b75ea8e3>CORE PROGRAMS</h2></div><div class="cards-container" data-v-b75ea8e3><div class="class-card scroll-reveal" data-v-b75ea8e3><div class="card-image" data-v-b75ea8e3><img src="'+u0+'" alt="Heavy Metal Lifting" data-v-b75ea8e3></div><h3 data-v-b75ea8e3>Heavy Metal Lifting</h3><p data-v-b75ea8e3>High-intensity resistance training with calibrated steel.</p></div><div class="class-card scroll-reveal" data-v-b75ea8e3><div class="card-image" data-v-b75ea8e3><img src="'+jf+'" alt="Precision Yoga" style="object-position:center;" data-v-b75ea8e3></div><h3 data-v-b75ea8e3>Precision Yoga</h3><p data-v-b75ea8e3>Biomechanically aligned flexibility and core stability.</p></div><div class="class-card scroll-reveal" data-v-b75ea8e3><div class="card-image" data-v-b75ea8e3><img src="'+jf+'" alt="Kinetic Cardio" style="object-position:right;" data-v-b75ea8e3></div><h3 data-v-b75ea8e3>Kinetic Cardio</h3><p data-v-b75ea8e3>Endurance engineering on advanced tread systems.</p></div></div></section><footer class="footer" id="contact" data-v-b75ea8e3><div class="footer-content" data-v-b75ea8e3><h3 data-v-b75ea8e3>BENZ<span data-v-b75ea8e3>DINH</span>GYM</h3><p data-v-b75ea8e3>Industrial Sector 7, Neo-Hanoi.</p><p data-v-b75ea8e3>© 2077 BenzDinh Corp. Engineered for Excellence.</p></div></footer>',2))]))}},sC=Ru(rC,[["__scopeId","data-v-b75ea8e3"]]),oC={__name:"App",setup(n){return(e,t)=>(Rl(),lM(sC))}};const Io=typeof document<"u";function gv(n){return typeof n=="object"||"displayName"in n||"props"in n||"__vccOpts"in n}function aC(n){return n.__esModule||n[Symbol.toStringTag]==="Module"||n.default&&gv(n.default)}const gt=Object.assign;function Nf(n,e){const t={};for(const i in e){const r=e[i];t[i]=Wi(r)?r.map(n):n(r)}return t}const sl=()=>{},Wi=Array.isArray;function U_(n,e){const t={};for(const i in n)t[i]=i in e?e[i]:n[i];return t}const xv=/#/g,lC=/&/g,cC=/\//g,uC=/=/g,fC=/\?/g,vv=/\+/g,hC=/%5B/g,dC=/%5D/g,Sv=/%5E/g,pC=/%60/g,Mv=/%7B/g,mC=/%7C/g,yv=/%7D/g,_C=/%20/g;function Ep(n){return n==null?"":encodeURI(""+n).replace(mC,"|").replace(hC,"[").replace(dC,"]")}function gC(n){return Ep(n).replace(Mv,"{").replace(yv,"}").replace(Sv,"^")}function _d(n){return Ep(n).replace(vv,"%2B").replace(_C,"+").replace(xv,"%23").replace(lC,"%26").replace(pC,"`").replace(Mv,"{").replace(yv,"}").replace(Sv,"^")}function xC(n){return _d(n).replace(uC,"%3D")}function vC(n){return Ep(n).replace(xv,"%23").replace(fC,"%3F")}function SC(n){return vC(n).replace(cC,"%2F")}function Tl(n){if(n==null)return null;try{return decodeURIComponent(""+n)}catch{}return""+n}const MC=/\/$/,yC=n=>n.replace(MC,"");function Uf(n,e,t="/"){let i,r={},s="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return l=a>=0&&l>a?-1:l,l>=0&&(i=e.slice(0,l),s=e.slice(l,a>0?a:e.length),r=n(s.slice(1))),a>=0&&(i=i||e.slice(0,a),o=e.slice(a,e.length)),i=AC(i??e,t),{fullPath:i+s+o,path:i,query:r,hash:Tl(o)}}function EC(n,e){const t=e.query?n(e.query):"";return e.path+(t&&"?")+t+(e.hash||"")}function F_(n,e){return!e||!n.toLowerCase().startsWith(e.toLowerCase())?n:n.slice(e.length)||"/"}function bC(n,e,t){const i=e.matched.length-1,r=t.matched.length-1;return i>-1&&i===r&&ua(e.matched[i],t.matched[r])&&Ev(e.params,t.params)&&n(e.query)===n(t.query)&&e.hash===t.hash}function ua(n,e){return(n.aliasOf||n)===(e.aliasOf||e)}function Ev(n,e){if(Object.keys(n).length!==Object.keys(e).length)return!1;for(var t in n)if(!TC(n[t],e[t]))return!1;return!0}function TC(n,e){return Wi(n)?O_(n,e):Wi(e)?O_(e,n):n?.valueOf()===e?.valueOf()}function O_(n,e){return Wi(e)?n.length===e.length&&n.every((t,i)=>t===e[i]):n.length===1&&n[0]===e}function AC(n,e){if(n.startsWith("/"))return n;if(!n)return e;const t=e.split("/"),i=n.split("/"),r=i[i.length-1];(r===".."||r===".")&&i.push("");let s=t.length-1,o,a;for(o=0;o<i.length;o++)if(a=i[o],a!==".")if(a==="..")s>1&&s--;else break;return t.slice(0,s).join("/")+"/"+i.slice(o).join("/")}const Jr={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let gd=(function(n){return n.pop="pop",n.push="push",n})({}),Ff=(function(n){return n.back="back",n.forward="forward",n.unknown="",n})({});function wC(n){if(!n)if(Io){const e=document.querySelector("base");n=e&&e.getAttribute("href")||"/",n=n.replace(/^\w+:\/\/[^\/]+/,"")}else n="/";return n[0]!=="/"&&n[0]!=="#"&&(n="/"+n),yC(n)}const RC=/^[^#]+#/;function CC(n,e){return n.replace(RC,"#")+e}function PC(n,e){const t=document.documentElement.getBoundingClientRect(),i=n.getBoundingClientRect();return{behavior:e.behavior,left:i.left-t.left-(e.left||0),top:i.top-t.top-(e.top||0)}}const Cu=()=>({left:window.scrollX,top:window.scrollY});function DC(n){let e;if("el"in n){const t=n.el,i=typeof t=="string"&&t.startsWith("#"),r=typeof t=="string"?i?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!r)return;e=PC(r,n)}else e=n;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function B_(n,e){return(history.state?history.state.position-e:-1)+n}const xd=new Map;function IC(n,e){xd.set(n,e)}function LC(n){const e=xd.get(n);return xd.delete(n),e}function NC(n){return typeof n=="string"||n&&typeof n=="object"}function bv(n){return typeof n=="string"||typeof n=="symbol"}let Ht=(function(n){return n[n.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",n[n.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",n[n.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",n[n.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",n[n.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",n})({});const Tv=Symbol("");Ht.MATCHER_NOT_FOUND+"",Ht.NAVIGATION_GUARD_REDIRECT+"",Ht.NAVIGATION_ABORTED+"",Ht.NAVIGATION_CANCELLED+"",Ht.NAVIGATION_DUPLICATED+"";function fa(n,e){return gt(new Error,{type:n,[Tv]:!0},e)}function Mr(n,e){return n instanceof Error&&Tv in n&&(e==null||!!(n.type&e))}const UC=["params","query","hash"];function FC(n){if(typeof n=="string")return n;if(n.path!=null)return n.path;const e={};for(const t of UC)t in n&&(e[t]=n[t]);return JSON.stringify(e,null,2)}function OC(n){const e={};if(n===""||n==="?")return e;const t=(n[0]==="?"?n.slice(1):n).split("&");for(let i=0;i<t.length;++i){const r=t[i].replace(vv," "),s=r.indexOf("="),o=Tl(s<0?r:r.slice(0,s)),a=s<0?null:Tl(r.slice(s+1));if(o in e){let l=e[o];Wi(l)||(l=e[o]=[l]),l.push(a)}else e[o]=a}return e}function z_(n){let e="";for(let t in n){const i=n[t];if(t=xC(t),i==null){i!==void 0&&(e+=(e.length?"&":"")+t);continue}(Wi(i)?i.map(r=>r&&_d(r)):[i&&_d(i)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+t,r!=null&&(e+="="+r))})}return e}function BC(n){const e={};for(const t in n){const i=n[t];i!==void 0&&(e[t]=Wi(i)?i.map(r=>r==null?null:""+r):i==null?i:""+i)}return e}const zC=Symbol(""),k_=Symbol(""),bp=Symbol(""),Av=Symbol(""),vd=Symbol("");function wa(){let n=[];function e(i){return n.push(i),()=>{const r=n.indexOf(i);r>-1&&n.splice(r,1)}}function t(){n=[]}return{add:e,list:()=>n.slice(),reset:t}}function is(n,e,t,i,r,s=o=>o()){const o=i&&(i.enterCallbacks[r]=i.enterCallbacks[r]||[]);return()=>new Promise((a,l)=>{const c=h=>{h===!1?l(fa(Ht.NAVIGATION_ABORTED,{from:t,to:e})):h instanceof Error?l(h):NC(h)?l(fa(Ht.NAVIGATION_GUARD_REDIRECT,{from:e,to:h})):(o&&i.enterCallbacks[r]===o&&typeof h=="function"&&o.push(h),a())},u=s(()=>n.call(i&&i.instances[r],e,t,c));let f=Promise.resolve(u);n.length<3&&(f=f.then(c)),f.catch(h=>l(h))})}function Of(n,e,t,i,r=s=>s()){const s=[];for(const o of n)for(const a in o.components){let l=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(gv(l)){const c=(l.__vccOpts||l)[e];c&&s.push(is(c,t,i,o,a,r))}else{let c=l();s.push(()=>c.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const f=aC(u)?u.default:u;o.mods[a]=u,o.components[a]=f;const h=(f.__vccOpts||f)[e];return h&&is(h,t,i,o,a,r)()}))}}return s}function kC(n,e){const t=[],i=[],r=[],s=Math.max(e.matched.length,n.matched.length);for(let o=0;o<s;o++){const a=e.matched[o];a&&(n.matched.find(c=>ua(c,a))?i.push(a):t.push(a));const l=n.matched[o];l&&(e.matched.find(c=>ua(c,l))||r.push(l))}return[t,i,r]}let VC=()=>location.protocol+"//"+location.host;function wv(n,e){const{pathname:t,search:i,hash:r}=e,s=n.indexOf("#");if(s>-1){let o=r.includes(n.slice(s))?n.slice(s).length:1,a=r.slice(o);return a[0]!=="/"&&(a="/"+a),F_(a,"")}return F_(t,n)+i+r}function GC(n,e,t,i){let r=[],s=[],o=null;const a=({state:h})=>{const d=wv(n,location),g=t.value,_=e.value;let m=0;if(h){if(t.value=d,e.value=h,o&&o===g){o=null;return}m=_?h.position-_.position:0}else i(d);r.forEach(p=>{p(t.value,g,{delta:m,type:gd.pop,direction:m?m>0?Ff.forward:Ff.back:Ff.unknown})})};function l(){o=t.value}function c(h){r.push(h);const d=()=>{const g=r.indexOf(h);g>-1&&r.splice(g,1)};return s.push(d),d}function u(){if(document.visibilityState==="hidden"){const{history:h}=window;if(!h.state)return;h.replaceState(gt({},h.state,{scroll:Cu()}),"")}}function f(){for(const h of s)h();s=[],window.removeEventListener("popstate",a),window.removeEventListener("pagehide",u),document.removeEventListener("visibilitychange",u)}return window.addEventListener("popstate",a),window.addEventListener("pagehide",u),document.addEventListener("visibilitychange",u),{pauseListeners:l,listen:c,destroy:f}}function V_(n,e,t,i=!1,r=!1){return{back:n,current:e,forward:t,replaced:i,position:window.history.length,scroll:r?Cu():null}}function HC(n){const{history:e,location:t}=window,i={value:wv(n,t)},r={value:e.state};r.value||s(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(l,c,u){const f=n.indexOf("#"),h=f>-1?(t.host&&document.querySelector("base")?n:n.slice(f))+l:VC()+n+l;try{e[u?"replaceState":"pushState"](c,"",h),r.value=c}catch(d){console.error(d),t[u?"replace":"assign"](h)}}function o(l,c){s(l,gt({},e.state,V_(r.value.back,l,r.value.forward,!0),c,{position:r.value.position}),!0),i.value=l}function a(l,c){const u=gt({},r.value,e.state,{forward:l,scroll:Cu()});s(u.current,u,!0),s(l,gt({},V_(i.value,l,null),{position:u.position+1},c),!1),i.value=l}return{location:i,state:r,push:a,replace:o}}function WC(n){n=wC(n);const e=HC(n),t=GC(n,e.state,e.location,e.replace);function i(s,o=!0){o||t.pauseListeners(),history.go(s)}const r=gt({location:"",base:n,go:i,createHref:CC.bind(null,n)},e,t);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}let Ys=(function(n){return n[n.Static=0]="Static",n[n.Param=1]="Param",n[n.Group=2]="Group",n})({});var nn=(function(n){return n[n.Static=0]="Static",n[n.Param=1]="Param",n[n.ParamRegExp=2]="ParamRegExp",n[n.ParamRegExpEnd=3]="ParamRegExpEnd",n[n.EscapeNext=4]="EscapeNext",n})(nn||{});const XC={type:Ys.Static,value:""},qC=/[a-zA-Z0-9_]/;function YC(n){if(!n)return[[]];if(n==="/")return[[XC]];if(!n.startsWith("/"))throw new Error(`Invalid path "${n}"`);function e(d){throw new Error(`ERR (${t})/"${c}": ${d}`)}let t=nn.Static,i=t;const r=[];let s;function o(){s&&r.push(s),s=[]}let a=0,l,c="",u="";function f(){c&&(t===nn.Static?s.push({type:Ys.Static,value:c}):t===nn.Param||t===nn.ParamRegExp||t===nn.ParamRegExpEnd?(s.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),s.push({type:Ys.Param,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function h(){c+=l}for(;a<n.length;){if(l=n[a++],l==="\\"&&t!==nn.ParamRegExp){i=t,t=nn.EscapeNext;continue}switch(t){case nn.Static:l==="/"?(c&&f(),o()):l===":"?(f(),t=nn.Param):h();break;case nn.EscapeNext:h(),t=i;break;case nn.Param:l==="("?t=nn.ParamRegExp:qC.test(l)?h():(f(),t=nn.Static,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case nn.ParamRegExp:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:t=nn.ParamRegExpEnd:u+=l;break;case nn.ParamRegExpEnd:f(),t=nn.Static,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return t===nn.ParamRegExp&&e(`Unfinished custom RegExp for param "${c}"`),f(),o(),r}const G_="[^/]+?",$C={sensitive:!1,strict:!1,start:!0,end:!0};var Bn=(function(n){return n[n._multiplier=10]="_multiplier",n[n.Root=90]="Root",n[n.Segment=40]="Segment",n[n.SubSegment=30]="SubSegment",n[n.Static=40]="Static",n[n.Dynamic=20]="Dynamic",n[n.BonusCustomRegExp=10]="BonusCustomRegExp",n[n.BonusWildcard=-50]="BonusWildcard",n[n.BonusRepeatable=-20]="BonusRepeatable",n[n.BonusOptional=-8]="BonusOptional",n[n.BonusStrict=.7000000000000001]="BonusStrict",n[n.BonusCaseSensitive=.25]="BonusCaseSensitive",n})(Bn||{});const KC=/[.+*?^${}()[\]/\\]/g;function jC(n,e){const t=gt({},$C,e),i=[];let r=t.start?"^":"";const s=[];for(const c of n){const u=c.length?[]:[Bn.Root];t.strict&&!c.length&&(r+="/");for(let f=0;f<c.length;f++){const h=c[f];let d=Bn.Segment+(t.sensitive?Bn.BonusCaseSensitive:0);if(h.type===Ys.Static)f||(r+="/"),r+=h.value.replace(KC,"\\$&"),d+=Bn.Static;else if(h.type===Ys.Param){const{value:g,repeatable:_,optional:m,regexp:p}=h;s.push({name:g,repeatable:_,optional:m});const M=p||G_;if(M!==G_){d+=Bn.BonusCustomRegExp;try{`${M}`}catch(S){throw new Error(`Invalid custom RegExp for param "${g}" (${M}): `+S.message)}}let y=_?`((?:${M})(?:/(?:${M}))*)`:`(${M})`;f||(y=m&&c.length<2?`(?:/${y})`:"/"+y),m&&(y+="?"),r+=y,d+=Bn.Dynamic,m&&(d+=Bn.BonusOptional),_&&(d+=Bn.BonusRepeatable),M===".*"&&(d+=Bn.BonusWildcard)}u.push(d)}i.push(u)}if(t.strict&&t.end){const c=i.length-1;i[c][i[c].length-1]+=Bn.BonusStrict}t.strict||(r+="/?"),t.end?r+="$":t.strict&&!r.endsWith("/")&&(r+="(?:/|$)");const o=new RegExp(r,t.sensitive?"":"i");function a(c){const u=c.match(o),f={};if(!u)return null;for(let h=1;h<u.length;h++){const d=u[h]||"",g=s[h-1];f[g.name]=d&&g.repeatable?d.split("/"):d}return f}function l(c){let u="",f=!1;for(const h of n){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const d of h)if(d.type===Ys.Static)u+=d.value;else if(d.type===Ys.Param){const{value:g,repeatable:_,optional:m}=d,p=g in c?c[g]:"";if(Wi(p)&&!_)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const M=Wi(p)?p.join("/"):p;if(!M)if(m)h.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${g}"`);u+=M}}return u||"/"}return{re:o,score:i,keys:s,parse:a,stringify:l}}function ZC(n,e){let t=0;for(;t<n.length&&t<e.length;){const i=e[t]-n[t];if(i)return i;t++}return n.length<e.length?n.length===1&&n[0]===Bn.Static+Bn.Segment?-1:1:n.length>e.length?e.length===1&&e[0]===Bn.Static+Bn.Segment?1:-1:0}function Rv(n,e){let t=0;const i=n.score,r=e.score;for(;t<i.length&&t<r.length;){const s=ZC(i[t],r[t]);if(s)return s;t++}if(Math.abs(r.length-i.length)===1){if(H_(i))return 1;if(H_(r))return-1}return r.length-i.length}function H_(n){const e=n[n.length-1];return n.length>0&&e[e.length-1]<0}const JC={strict:!1,end:!0,sensitive:!1};function QC(n,e,t){const i=jC(YC(n.path),t),r=gt(i,{record:n,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function eP(n,e){const t=[],i=new Map;e=U_(JC,e);function r(f){return i.get(f)}function s(f,h,d){const g=!d,_=X_(f);_.aliasOf=d&&d.record;const m=U_(e,f),p=[_];if("alias"in f){const S=typeof f.alias=="string"?[f.alias]:f.alias;for(const b of S)p.push(X_(gt({},_,{components:d?d.record.components:_.components,path:b,aliasOf:d?d.record:_})))}let M,y;for(const S of p){const{path:b}=S;if(h&&b[0]!=="/"){const R=h.record.path,w=R[R.length-1]==="/"?"":"/";S.path=h.record.path+(b&&w+b)}if(M=QC(S,h,m),d?d.alias.push(M):(y=y||M,y!==M&&y.alias.push(M),g&&f.name&&!q_(M)&&o(f.name)),Cv(M)&&l(M),_.children){const R=_.children;for(let w=0;w<R.length;w++)s(R[w],M,d&&d.children[w])}d=d||M}return y?()=>{o(y)}:sl}function o(f){if(bv(f)){const h=i.get(f);h&&(i.delete(f),t.splice(t.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=t.indexOf(f);h>-1&&(t.splice(h,1),f.record.name&&i.delete(f.record.name),f.children.forEach(o),f.alias.forEach(o))}}function a(){return t}function l(f){const h=iP(f,t);t.splice(h,0,f),f.record.name&&!q_(f)&&i.set(f.record.name,f)}function c(f,h){let d,g={},_,m;if("name"in f&&f.name){if(d=i.get(f.name),!d)throw fa(Ht.MATCHER_NOT_FOUND,{location:f});m=d.record.name,g=gt(W_(h.params,d.keys.filter(y=>!y.optional).concat(d.parent?d.parent.keys.filter(y=>y.optional):[]).map(y=>y.name)),f.params&&W_(f.params,d.keys.map(y=>y.name))),_=d.stringify(g)}else if(f.path!=null)_=f.path,d=t.find(y=>y.re.test(_)),d&&(g=d.parse(_),m=d.record.name);else{if(d=h.name?i.get(h.name):t.find(y=>y.re.test(h.path)),!d)throw fa(Ht.MATCHER_NOT_FOUND,{location:f,currentLocation:h});m=d.record.name,g=gt({},h.params,f.params),_=d.stringify(g)}const p=[];let M=d;for(;M;)p.unshift(M.record),M=M.parent;return{name:m,path:_,params:g,matched:p,meta:nP(p)}}n.forEach(f=>s(f));function u(){t.length=0,i.clear()}return{addRoute:s,resolve:c,removeRoute:o,clearRoutes:u,getRoutes:a,getRecordMatcher:r}}function W_(n,e){const t={};for(const i of e)i in n&&(t[i]=n[i]);return t}function X_(n){const e={path:n.path,redirect:n.redirect,name:n.name,meta:n.meta||{},aliasOf:n.aliasOf,beforeEnter:n.beforeEnter,props:tP(n),children:n.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in n?n.components||null:n.component&&{default:n.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function tP(n){const e={},t=n.props||!1;if("component"in n)e.default=t;else for(const i in n.components)e[i]=typeof t=="object"?t[i]:t;return e}function q_(n){for(;n;){if(n.record.aliasOf)return!0;n=n.parent}return!1}function nP(n){return n.reduce((e,t)=>gt(e,t.meta),{})}function iP(n,e){let t=0,i=e.length;for(;t!==i;){const s=t+i>>1;Rv(n,e[s])<0?i=s:t=s+1}const r=rP(n);return r&&(i=e.lastIndexOf(r,i-1)),i}function rP(n){let e=n;for(;e=e.parent;)if(Cv(e)&&Rv(n,e)===0)return e}function Cv({record:n}){return!!(n.name||n.components&&Object.keys(n.components).length||n.redirect)}function Y_(n){const e=Dr(bp),t=Dr(Av),i=Bi(()=>{const l=zo(n.to);return e.resolve(l)}),r=Bi(()=>{const{matched:l}=i.value,{length:c}=l,u=l[c-1],f=t.matched;if(!u||!f.length)return-1;const h=f.findIndex(ua.bind(null,u));if(h>-1)return h;const d=$_(l[c-2]);return c>1&&$_(u)===d&&f[f.length-1].path!==d?f.findIndex(ua.bind(null,l[c-2])):h}),s=Bi(()=>r.value>-1&&cP(t.params,i.value.params)),o=Bi(()=>r.value>-1&&r.value===t.matched.length-1&&Ev(t.params,i.value.params));function a(l={}){if(lP(l)){const c=e[zo(n.replace)?"replace":"push"](zo(n.to)).catch(sl);return n.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>c),c}return Promise.resolve()}return{route:i,href:Bi(()=>i.value.href),isActive:s,isExactActive:o,navigate:a}}function sP(n){return n.length===1?n[0]:n}const oP=Ug({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:Y_,setup(n,{slots:e}){const t=hu(Y_(n)),{options:i}=Dr(bp),r=Bi(()=>({[K_(n.activeClass,i.linkActiveClass,"router-link-active")]:t.isActive,[K_(n.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const s=e.default&&sP(e.default(t));return n.custom?s:l0("a",{"aria-current":t.isExactActive?n.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:r.value},s)}}}),aP=oP;function lP(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){const e=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return n.preventDefault&&n.preventDefault(),!0}}function cP(n,e){for(const t in e){const i=e[t],r=n[t];if(typeof i=="string"){if(i!==r)return!1}else if(!Wi(r)||r.length!==i.length||i.some((s,o)=>s.valueOf()!==r[o].valueOf()))return!1}return!0}function $_(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}const K_=(n,e,t)=>n??e??t,uP=Ug({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(n,{attrs:e,slots:t}){const i=Dr(vd),r=Bi(()=>n.route||i.value),s=Dr(k_,0),o=Bi(()=>{let c=zo(s);const{matched:u}=r.value;let f;for(;(f=u[c])&&!f.components;)c++;return c}),a=Bi(()=>r.value.matched[o.value]);Mc(k_,Bi(()=>o.value+1)),Mc(zC,a),Mc(vd,r);const l=du();return Va(()=>[l.value,a.value,n.name],([c,u,f],[h,d,g])=>{u&&(u.instances[f]=c,d&&d!==u&&c&&c===h&&(u.leaveGuards.size||(u.leaveGuards=d.leaveGuards),u.updateGuards.size||(u.updateGuards=d.updateGuards))),c&&u&&(!d||!ua(u,d)||!h)&&(u.enterCallbacks[f]||[]).forEach(_=>_(c))},{flush:"post"}),()=>{const c=r.value,u=n.name,f=a.value,h=f&&f.components[u];if(!h)return j_(t.default,{Component:h,route:c});const d=f.props[u],g=d?d===!0?c.params:typeof d=="function"?d(c):d:null,m=l0(h,gt({},g,e,{onVnodeUnmounted:p=>{p.component.isUnmounted&&(f.instances[u]=null)},ref:l}));return j_(t.default,{Component:m,route:c})||m}}});function j_(n,e){if(!n)return null;const t=n(e);return t.length===1?t[0]:t}const fP=uP;function hP(n){const e=eP(n.routes,n),t=n.parseQuery||OC,i=n.stringifyQuery||z_,r=n.history,s=wa(),o=wa(),a=wa(),l=aS(Jr);let c=Jr;Io&&n.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Nf.bind(null,O=>""+O),f=Nf.bind(null,SC),h=Nf.bind(null,Tl);function d(O,ie){let oe,ae;return bv(O)?(oe=e.getRecordMatcher(O),ae=ie):ae=O,e.addRoute(ae,oe)}function g(O){const ie=e.getRecordMatcher(O);ie&&e.removeRoute(ie)}function _(){return e.getRoutes().map(O=>O.record)}function m(O){return!!e.getRecordMatcher(O)}function p(O,ie){if(ie=gt({},ie||l.value),typeof O=="string"){const z=Uf(t,O,ie.path),Z=e.resolve({path:z.path},ie),j=r.createHref(z.fullPath);return gt(z,Z,{params:h(Z.params),hash:Tl(z.hash),redirectedFrom:void 0,href:j})}let oe;if(O.path!=null)oe=gt({},O,{path:Uf(t,O.path,ie.path).path});else{const z=gt({},O.params);for(const Z in z)z[Z]==null&&delete z[Z];oe=gt({},O,{params:f(z)}),ie.params=f(ie.params)}const ae=e.resolve(oe,ie),Ee=O.hash||"";ae.params=u(h(ae.params));const D=EC(i,gt({},O,{hash:gC(Ee),path:ae.path})),P=r.createHref(D);return gt({fullPath:D,hash:Ee,query:i===z_?BC(O.query):O.query||{}},ae,{redirectedFrom:void 0,href:P})}function M(O){return typeof O=="string"?Uf(t,O,l.value.path):gt({},O)}function y(O,ie){if(c!==O)return fa(Ht.NAVIGATION_CANCELLED,{from:ie,to:O})}function S(O){return w(O)}function b(O){return S(gt(M(O),{replace:!0}))}function R(O,ie){const oe=O.matched[O.matched.length-1];if(oe&&oe.redirect){const{redirect:ae}=oe;let Ee=typeof ae=="function"?ae(O,ie):ae;return typeof Ee=="string"&&(Ee=Ee.includes("?")||Ee.includes("#")?Ee=M(Ee):{path:Ee},Ee.params={}),gt({query:O.query,hash:O.hash,params:Ee.path!=null?{}:O.params},Ee)}}function w(O,ie){const oe=c=p(O),ae=l.value,Ee=O.state,D=O.force,P=O.replace===!0,z=R(oe,ae);if(z)return w(gt(M(z),{state:typeof z=="object"?gt({},Ee,z.state):Ee,force:D,replace:P}),ie||oe);const Z=oe;Z.redirectedFrom=ie;let j;return!D&&bC(i,ae,oe)&&(j=fa(Ht.NAVIGATION_DUPLICATED,{to:Z,from:ae}),de(ae,ae,!0,!1)),(j?Promise.resolve(j):E(Z,ae)).catch(I=>Mr(I)?Mr(I,Ht.NAVIGATION_GUARD_REDIRECT)?I:L(I):Y(I,Z,ae)).then(I=>{if(I){if(Mr(I,Ht.NAVIGATION_GUARD_REDIRECT))return w(gt({replace:P},M(I.to),{state:typeof I.to=="object"?gt({},Ee,I.to.state):Ee,force:D}),ie||Z)}else I=k(Z,ae,!0,P,Ee);return F(Z,ae,I),I})}function U(O,ie){const oe=y(O,ie);return oe?Promise.reject(oe):Promise.resolve()}function v(O){const ie=He.values().next().value;return ie&&typeof ie.runWithContext=="function"?ie.runWithContext(O):O()}function E(O,ie){let oe;const[ae,Ee,D]=kC(O,ie);oe=Of(ae.reverse(),"beforeRouteLeave",O,ie);for(const z of ae)z.leaveGuards.forEach(Z=>{oe.push(is(Z,O,ie))});const P=U.bind(null,O,ie);return oe.push(P),se(oe).then(()=>{oe=[];for(const z of s.list())oe.push(is(z,O,ie));return oe.push(P),se(oe)}).then(()=>{oe=Of(Ee,"beforeRouteUpdate",O,ie);for(const z of Ee)z.updateGuards.forEach(Z=>{oe.push(is(Z,O,ie))});return oe.push(P),se(oe)}).then(()=>{oe=[];for(const z of D)if(z.beforeEnter)if(Wi(z.beforeEnter))for(const Z of z.beforeEnter)oe.push(is(Z,O,ie));else oe.push(is(z.beforeEnter,O,ie));return oe.push(P),se(oe)}).then(()=>(O.matched.forEach(z=>z.enterCallbacks={}),oe=Of(D,"beforeRouteEnter",O,ie,v),oe.push(P),se(oe))).then(()=>{oe=[];for(const z of o.list())oe.push(is(z,O,ie));return oe.push(P),se(oe)}).catch(z=>Mr(z,Ht.NAVIGATION_CANCELLED)?z:Promise.reject(z))}function F(O,ie,oe){a.list().forEach(ae=>v(()=>ae(O,ie,oe)))}function k(O,ie,oe,ae,Ee){const D=y(O,ie);if(D)return D;const P=ie===Jr,z=Io?history.state:{};oe&&(ae||P?r.replace(O.fullPath,gt({scroll:P&&z&&z.scroll},Ee)):r.push(O.fullPath,Ee)),l.value=O,de(O,ie,oe,P),L()}let H;function $(){H||(H=r.listen((O,ie,oe)=>{if(!qe.listening)return;const ae=p(O),Ee=R(ae,qe.currentRoute.value);if(Ee){w(gt(Ee,{replace:!0,force:!0}),ae).catch(sl);return}c=ae;const D=l.value;Io&&IC(B_(D.fullPath,oe.delta),Cu()),E(ae,D).catch(P=>Mr(P,Ht.NAVIGATION_ABORTED|Ht.NAVIGATION_CANCELLED)?P:Mr(P,Ht.NAVIGATION_GUARD_REDIRECT)?(w(gt(M(P.to),{force:!0}),ae).then(z=>{Mr(z,Ht.NAVIGATION_ABORTED|Ht.NAVIGATION_DUPLICATED)&&!oe.delta&&oe.type===gd.pop&&r.go(-1,!1)}).catch(sl),Promise.reject()):(oe.delta&&r.go(-oe.delta,!1),Y(P,ae,D))).then(P=>{P=P||k(ae,D,!1),P&&(oe.delta&&!Mr(P,Ht.NAVIGATION_CANCELLED)?r.go(-oe.delta,!1):oe.type===gd.pop&&Mr(P,Ht.NAVIGATION_ABORTED|Ht.NAVIGATION_DUPLICATED)&&r.go(-1,!1)),F(ae,D,P)}).catch(sl)}))}let Q=wa(),W=wa(),V;function Y(O,ie,oe){L(O);const ae=W.list();return ae.length?ae.forEach(Ee=>Ee(O,ie,oe)):console.error(O),Promise.reject(O)}function he(){return V&&l.value!==Jr?Promise.resolve():new Promise((O,ie)=>{Q.add([O,ie])})}function L(O){return V||(V=!O,$(),Q.list().forEach(([ie,oe])=>O?oe(O):ie()),Q.reset()),O}function de(O,ie,oe,ae){const{scrollBehavior:Ee}=n;if(!Io||!Ee)return Promise.resolve();const D=!oe&&LC(B_(O.fullPath,0))||(ae||!oe)&&history.state&&history.state.scroll||null;return Rg().then(()=>Ee(O,ie,D)).then(P=>P&&DC(P)).catch(P=>Y(P,O,ie))}const Fe=O=>r.go(O);let ze;const He=new Set,qe={currentRoute:l,listening:!0,addRoute:d,removeRoute:g,clearRoutes:e.clearRoutes,hasRoute:m,getRoutes:_,resolve:p,options:n,push:S,replace:b,go:Fe,back:()=>Fe(-1),forward:()=>Fe(1),beforeEach:s.add,beforeResolve:o.add,afterEach:a.add,onError:W.add,isReady:he,install(O){O.component("RouterLink",aP),O.component("RouterView",fP),O.config.globalProperties.$router=qe,Object.defineProperty(O.config.globalProperties,"$route",{enumerable:!0,get:()=>zo(l)}),Io&&!ze&&l.value===Jr&&(ze=!0,S(r.location).catch(ae=>{}));const ie={};for(const ae in Jr)Object.defineProperty(ie,ae,{get:()=>l.value[ae],enumerable:!0});O.provide(bp,qe),O.provide(Av,Eg(ie)),O.provide(vd,l);const oe=O.unmount;He.add(O),O.unmount=function(){He.delete(O),He.size<1&&(c=Jr,H&&H(),H=null,l.value=Jr,ze=!1,V=!1),oe()}}};function se(O){return O.reduce((ie,oe)=>ie.then(()=>v(oe)),Promise.resolve())}return qe}const dP=hP({history:WC("./"),routes:[]}),Tp=WM(oC);Tp.use($M());Tp.use(dP);Tp.mount("#app");
