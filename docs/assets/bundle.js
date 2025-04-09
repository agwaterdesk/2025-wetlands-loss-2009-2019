var Rn=Object.defineProperty;var St=e=>{throw TypeError(e)};var Wn=(e,t,n)=>t in e?Rn(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var Nt=(e,t,n)=>Wn(e,typeof t!="symbol"?t+"":t,n),at=(e,t,n)=>t.has(e)||St("Cannot "+n);var U=(e,t,n)=>(at(e,t,"read from private field"),n?n.call(e):t.get(e)),_e=(e,t,n)=>t.has(e)?St("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,n),lt=(e,t,n,r)=>(at(e,t,"write to private field"),r?r.call(e,n):t.set(e,n),n),Pt=(e,t,n)=>(at(e,t,"access private method"),n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();const Ln="5";var Xt;typeof window<"u"&&((Xt=window.__svelte??(window.__svelte={})).v??(Xt.v=new Set)).add(Ln);let Te=!1,Hn=!1;function Dn(){Te=!0}Dn();const Fn=1,Bn=2,$n=16,zn=1,jn=2,N=Symbol(),Ot=!1,z=2,Jt=4,Ve=8,wt=16,X=32,ve=64,Re=128,W=256,We=512,O=1024,J=2048,he=4096,G=8192,Ye=16384,qn=32768,bt=65536,Un=1<<19,Zt=1<<20,ct=1<<21,we=Symbol("$state");var yt=Array.isArray,Vn=Array.prototype.indexOf,Et=Array.from,Qt=Object.defineProperty,be=Object.getOwnPropertyDescriptor,Yn=Object.getOwnPropertyDescriptors,Gn=Object.prototype,Kn=Array.prototype,en=Object.getPrototypeOf,Rt=Object.isExtensible;const K=()=>{};function Xn(e){return e()}function Le(e){for(var t=0;t<e.length;t++)e[t]()}let He=[];function Jn(){var e=He;He=[],Le(e)}function Zn(e){He.length===0&&queueMicrotask(Jn),He.push(e)}function tn(e){return e===this.v}function nn(e,t){return e!=e?t==t:e!==t||e!==null&&typeof e=="object"||typeof e=="function"}function rn(e){return!nn(e,this.v)}function Qn(e){throw new Error("https://svelte.dev/e/effect_in_teardown")}function er(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function tr(e){throw new Error("https://svelte.dev/e/effect_orphan")}function nr(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function rr(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function ir(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function sr(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function fe(e,t){if(typeof e!="object"||e===null||we in e)return e;const n=en(e);if(n!==Gn&&n!==Kn)return e;var r=new Map,s=yt(e),i=F(0),o=y,c=u=>{var l=y;j(o);var v;return v=u(),j(l),v};return s&&r.set("length",F(e.length)),new Proxy(e,{defineProperty(u,l,v){(!("value"in v)||v.configurable===!1||v.enumerable===!1||v.writable===!1)&&rr();var h=r.get(l);return h===void 0?(h=c(()=>F(v.value)),r.set(l,h)):H(h,c(()=>fe(v.value))),!0},deleteProperty(u,l){var v=r.get(l);if(v===void 0)l in u&&r.set(l,c(()=>F(N)));else{if(s&&typeof l=="string"){var h=r.get("length"),a=Number(l);Number.isInteger(a)&&a<h.v&&H(h,a)}H(v,N),Wt(i)}return!0},get(u,l,v){var p;if(l===we)return e;var h=r.get(l),a=l in u;if(h===void 0&&(!a||(p=be(u,l))!=null&&p.writable)&&(h=c(()=>F(fe(a?u[l]:N))),r.set(l,h)),h!==void 0){var f=A(h);return f===N?void 0:f}return Reflect.get(u,l,v)},getOwnPropertyDescriptor(u,l){var v=Reflect.getOwnPropertyDescriptor(u,l);if(v&&"value"in v){var h=r.get(l);h&&(v.value=A(h))}else if(v===void 0){var a=r.get(l),f=a==null?void 0:a.v;if(a!==void 0&&f!==N)return{enumerable:!0,configurable:!0,value:f,writable:!0}}return v},has(u,l){var f;if(l===we)return!0;var v=r.get(l),h=v!==void 0&&v.v!==N||Reflect.has(u,l);if(v!==void 0||k!==null&&(!h||(f=be(u,l))!=null&&f.writable)){v===void 0&&(v=c(()=>F(h?fe(u[l]):N)),r.set(l,v));var a=A(v);if(a===N)return!1}return h},set(u,l,v,h){var w;var a=r.get(l),f=l in u;if(s&&l==="length")for(var p=v;p<a.v;p+=1){var m=r.get(p+"");m!==void 0?H(m,N):p in u&&(m=c(()=>F(N)),r.set(p+"",m))}a===void 0?(!f||(w=be(u,l))!=null&&w.writable)&&(a=c(()=>F(void 0)),H(a,c(()=>fe(v))),r.set(l,a)):(f=a.v!==N,H(a,c(()=>fe(v))));var d=Reflect.getOwnPropertyDescriptor(u,l);if(d!=null&&d.set&&d.set.call(h,v),!f){if(s&&typeof l=="string"){var g=r.get("length"),_=Number(l);Number.isInteger(_)&&_>=g.v&&H(g,_+1)}Wt(i)}return!0},ownKeys(u){A(i);var l=Reflect.ownKeys(u).filter(a=>{var f=r.get(a);return f===void 0||f.v!==N});for(var[v,h]of r)h.v!==N&&!(v in u)&&l.push(v);return l},setPrototypeOf(){ir()}})}function Wt(e,t=1){H(e,e.v+t)}const ye=new Map;function Ee(e,t){var n={f:0,v:e,reactions:null,equals:tn,rv:0,wv:0};return n}function F(e,t){const n=Ee(e);return gn(n),n}function sn(e,t=!1){var r;const n=Ee(e);return t||(n.equals=rn),Te&&x!==null&&x.l!==null&&((r=x.l).s??(r.s=[])).push(n),n}function H(e,t,n=!1){y!==null&&!$&&tt()&&y.f&(z|wt)&&!(C!=null&&C.includes(e))&&sr();let r=n?fe(t):t;return an(e,r)}function an(e,t){if(!e.equals(t)){var n=e.v;Ie?ye.set(e,t):ye.set(e,n),e.v=t,e.wv=_n(),ln(e,J),tt()&&k!==null&&k.f&O&&!(k.f&(X|ve))&&(R===null?vr([e]):R.push(e))}return t}function ln(e,t){var n=e.reactions;if(n!==null)for(var r=tt(),s=n.length,i=0;i<s;i++){var o=n[i],c=o.f;c&J||!r&&o===k||(q(o,t),c&(O|W)&&(c&z?ln(o,he):Je(o)))}}function Ge(e){var t=z|J,n=y!==null&&y.f&z?y:null;return k===null||n!==null&&n.f&W?t|=W:k.f|=Zt,{ctx:x,deps:null,effects:null,equals:tn,f:t,fn:e,reactions:null,rv:0,v:null,wv:0,parent:n??k}}function on(e){const t=Ge(e);return gn(t),t}function ar(e){const t=Ge(e);return t.equals=rn,t}function un(e){var t=e.effects;if(t!==null){e.effects=null;for(var n=0;n<t.length;n+=1)ie(t[n])}}function lr(e){for(var t=e.parent;t!==null;){if(!(t.f&z))return t;t=t.parent}return null}function or(e){var t,n=k;re(lr(e));try{un(e),t=wn(e)}finally{re(n)}return t}function fn(e){var t=or(e),n=(ne||e.f&W)&&e.deps!==null?he:O;q(e,n),e.equals(t)||(e.v=t,e.wv=_n())}let ur=!1;var dt,cn,dn,vn;function fr(){if(dt===void 0){dt=window,cn=/Firefox/.test(navigator.userAgent);var e=Element.prototype,t=Node.prototype,n=Text.prototype;dn=be(t,"firstChild").get,vn=be(t,"nextSibling").get,Rt(e)&&(e.__click=void 0,e.__className=void 0,e.__attributes=null,e.__style=void 0,e.__e=void 0),Rt(n)&&(n.__t=void 0)}}function hn(e=""){return document.createTextNode(e)}function De(e){return dn.call(e)}function Ke(e){return vn.call(e)}function V(e,t){return De(e)}function Ne(e,t){{var n=De(e);return n instanceof Comment&&n.data===""?Ke(n):n}}function B(e,t=1,n=!1){let r=e;for(;t--;)r=Ke(r);return r}function cr(e){e.textContent=""}let Pe=!1,vt=!1,Fe=null,ae=!1,Ie=!1;function Lt(e){Ie=e}let Oe=[];let y=null,$=!1;function j(e){y=e}let k=null;function re(e){k=e}let C=null;function dr(e){C=e}function gn(e){y!==null&&y.f&ct&&(C===null?dr([e]):C.push(e))}let M=null,P=0,R=null;function vr(e){R=e}let pn=1,Be=0,ne=!1;function _n(){return++pn}function Me(e){var h;var t=e.f;if(t&J)return!0;if(t&he){var n=e.deps,r=(t&W)!==0;if(n!==null){var s,i,o=(t&We)!==0,c=r&&k!==null&&!ne,u=n.length;if(o||c){var l=e,v=l.parent;for(s=0;s<u;s++)i=n[s],(o||!((h=i==null?void 0:i.reactions)!=null&&h.includes(l)))&&(i.reactions??(i.reactions=[])).push(l);o&&(l.f^=We),c&&v!==null&&!(v.f&W)&&(l.f^=W)}for(s=0;s<u;s++)if(i=n[s],Me(i)&&fn(i),i.wv>e.wv)return!0}(!r||k!==null&&!ne)&&q(e,O)}return!1}function hr(e,t){for(var n=t;n!==null;){if(n.f&Re)try{n.fn(e);return}catch{n.f^=Re}n=n.parent}throw Pe=!1,e}function gr(e){return(e.f&Ye)===0&&(e.parent===null||(e.parent.f&Re)===0)}function Xe(e,t,n,r){if(Pe){if(n===null&&(Pe=!1),gr(t))throw e;return}n!==null&&(Pe=!0);{hr(e,t);return}}function mn(e,t,n=!0){var r=e.reactions;if(r!==null)for(var s=0;s<r.length;s++){var i=r[s];C!=null&&C.includes(e)||(i.f&z?mn(i,t,!1):t===i&&(n?q(i,J):i.f&O&&q(i,he),Je(i)))}}function wn(e){var f;var t=M,n=P,r=R,s=y,i=ne,o=C,c=x,u=$,l=e.f;M=null,P=0,R=null,ne=(l&W)!==0&&($||!ae||y===null),y=l&(X|ve)?null:e,C=null,Ht(e.ctx),$=!1,Be++,e.f|=ct;try{var v=(0,e.fn)(),h=e.deps;if(M!==null){var a;if($e(e,P),h!==null&&P>0)for(h.length=P+M.length,a=0;a<M.length;a++)h[P+a]=M[a];else e.deps=h=M;if(!ne)for(a=P;a<h.length;a++)((f=h[a]).reactions??(f.reactions=[])).push(e)}else h!==null&&P<h.length&&($e(e,P),h.length=P);if(tt()&&R!==null&&!$&&h!==null&&!(e.f&(z|he|J)))for(a=0;a<R.length;a++)mn(R[a],e);return s!==e&&(Be++,R!==null&&(r===null?r=R:r.push(...R))),v}finally{M=t,P=n,R=r,y=s,ne=i,C=o,Ht(c),$=u,e.f^=ct}}function pr(e,t){let n=t.reactions;if(n!==null){var r=Vn.call(n,e);if(r!==-1){var s=n.length-1;s===0?n=t.reactions=null:(n[r]=n[s],n.pop())}}n===null&&t.f&z&&(M===null||!M.includes(t))&&(q(t,he),t.f&(W|We)||(t.f^=We),un(t),$e(t,0))}function $e(e,t){var n=e.deps;if(n!==null)for(var r=t;r<n.length;r++)pr(e,n[r])}function kt(e){var t=e.f;if(!(t&Ye)){q(e,O);var n=k,r=x,s=ae;k=e,ae=!0;try{t&wt?Mr(e):En(e),yn(e);var i=wn(e);e.teardown=typeof i=="function"?i:null,e.wv=pn;var o=e.deps,c;Ot&&Hn&&e.f&J}catch(u){Xe(u,e,n,r||e.ctx)}finally{ae=s,k=n}}}function _r(){try{nr()}catch(e){if(Fe!==null)Xe(e,Fe,null);else throw e}}function mr(){var e=ae;try{var t=0;for(ae=!0;Oe.length>0;){t++>1e3&&_r();var n=Oe,r=n.length;Oe=[];for(var s=0;s<r;s++){var i=br(n[s]);wr(i)}ye.clear()}}finally{vt=!1,ae=e,Fe=null}}function wr(e){var t=e.length;if(t!==0)for(var n=0;n<t;n++){var r=e[n];if(!(r.f&(Ye|G)))try{Me(r)&&(kt(r),r.deps===null&&r.first===null&&r.nodes_start===null&&(r.teardown===null?kn(r):r.fn=null))}catch(s){Xe(s,r,null,r.ctx)}}}function Je(e){vt||(vt=!0,queueMicrotask(mr));for(var t=Fe=e;t.parent!==null;){t=t.parent;var n=t.f;if(n&(ve|X)){if(!(n&O))return;t.f^=O}}Oe.push(t)}function br(e){for(var t=[],n=e;n!==null;){var r=n.f,s=(r&(X|ve))!==0,i=s&&(r&O)!==0;if(!i&&!(r&G)){if(r&Jt)t.push(n);else if(s)n.f^=O;else{var o=y;try{y=n,Me(n)&&kt(n)}catch(l){Xe(l,n,null,n.ctx)}finally{y=o}}var c=n.first;if(c!==null){n=c;continue}}var u=n.parent;for(n=n.next;n===null&&u!==null;)n=u.next,u=u.parent}return t}function A(e){var t=e.f,n=(t&z)!==0;if(y!==null&&!$){if(!(C!=null&&C.includes(e))){var r=y.deps;e.rv<Be&&(e.rv=Be,M===null&&r!==null&&r[P]===e?P++:M===null?M=[e]:(!ne||!M.includes(e))&&M.push(e))}}else if(n&&e.deps===null&&e.effects===null){var s=e,i=s.parent;i!==null&&!(i.f&W)&&(s.f^=W)}return n&&(s=e,Me(s)&&fn(s)),Ie&&ye.has(e)?ye.get(e):e.v}function Ze(e){var t=$;try{return $=!0,e()}finally{$=t}}const yr=-7169;function q(e,t){e.f=e.f&yr|t}function Er(e){if(!(typeof e!="object"||!e||e instanceof EventTarget)){if(we in e)ht(e);else if(!Array.isArray(e))for(let t in e){const n=e[t];typeof n=="object"&&n&&we in n&&ht(n)}}}function ht(e,t=new Set){if(typeof e=="object"&&e!==null&&!(e instanceof EventTarget)&&!t.has(e)){t.add(e),e instanceof Date&&e.getTime();for(let r in e)try{ht(e[r],t)}catch{}const n=en(e);if(n!==Object.prototype&&n!==Array.prototype&&n!==Map.prototype&&n!==Set.prototype&&n!==Date.prototype){const r=Yn(n);for(let s in r){const i=r[s].get;if(i)try{i.call(e)}catch{}}}}}function bn(e){k===null&&y===null&&tr(),y!==null&&y.f&W&&k===null&&er(),Ie&&Qn()}function kr(e,t){var n=t.last;n===null?t.last=t.first=e:(n.next=e,e.prev=n,t.last=e)}function ge(e,t,n,r=!0){var s=k,i={ctx:x,deps:null,nodes_start:null,nodes_end:null,f:e|J,first:null,fn:t,last:null,next:null,parent:s,prev:null,teardown:null,transitions:null,wv:0};if(n)try{kt(i),i.f|=qn}catch(u){throw ie(i),u}else t!==null&&Je(i);var o=n&&i.deps===null&&i.first===null&&i.nodes_start===null&&i.teardown===null&&(i.f&(Zt|Re))===0;if(!o&&r&&(s!==null&&kr(i,s),y!==null&&y.f&z)){var c=y;(c.effects??(c.effects=[])).push(i)}return i}function xt(e){const t=ge(Ve,null,!1);return q(t,O),t.teardown=e,t}function gt(e){bn();var t=k!==null&&(k.f&X)!==0&&x!==null&&!x.m;if(t){var n=x;(n.e??(n.e=[])).push({fn:e,effect:k,reaction:y})}else{var r=Tt(e);return r}}function xr(e){return bn(),Ir(e)}function Tr(e){const t=ge(ve,e,!0);return(n={})=>new Promise(r=>{n.outro?ze(t,()=>{ie(t),r(void 0)}):(ie(t),r(void 0))})}function Tt(e){return ge(Jt,e,!1)}function Ir(e){return ge(Ve,e,!0)}function Ce(e,t=[],n=Ge){const r=t.map(n);return It(()=>e(...r.map(A)))}function It(e,t=0){return ge(Ve|wt|t,e,!0)}function ke(e,t=!0){return ge(Ve|X,e,!0,t)}function yn(e){var t=e.teardown;if(t!==null){const n=Ie,r=y;Lt(!0),j(null);try{t.call(null)}finally{Lt(n),j(r)}}}function En(e,t=!1){var n=e.first;for(e.first=e.last=null;n!==null;){var r=n.next;n.f&ve?n.parent=null:ie(n,t),n=r}}function Mr(e){for(var t=e.first;t!==null;){var n=t.next;t.f&X||ie(t),t=n}}function ie(e,t=!0){var n=!1;if((t||e.f&Un)&&e.nodes_start!==null){for(var r=e.nodes_start,s=e.nodes_end;r!==null;){var i=r===s?null:Ke(r);r.remove(),r=i}n=!0}En(e,t&&!n),$e(e,0),q(e,Ye);var o=e.transitions;if(o!==null)for(const u of o)u.stop();yn(e);var c=e.parent;c!==null&&c.first!==null&&kn(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes_start=e.nodes_end=null}function kn(e){var t=e.parent,n=e.prev,r=e.next;n!==null&&(n.next=r),r!==null&&(r.prev=n),t!==null&&(t.first===e&&(t.first=r),t.last===e&&(t.last=n))}function ze(e,t){var n=[];Mt(e,n,!0),xn(n,()=>{ie(e),t&&t()})}function xn(e,t){var n=e.length;if(n>0){var r=()=>--n||t();for(var s of e)s.out(r)}else t()}function Mt(e,t,n){if(!(e.f&G)){if(e.f^=G,e.transitions!==null)for(const o of e.transitions)(o.is_global||n)&&t.push(o);for(var r=e.first;r!==null;){var s=r.next,i=(r.f&bt)!==0||(r.f&X)!==0;Mt(r,t,i?n:!1),r=s}}}function je(e){Tn(e,!0)}function Tn(e,t){if(e.f&G){e.f^=G,e.f&O||(e.f^=O),Me(e)&&(q(e,J),Je(e));for(var n=e.first;n!==null;){var r=n.next,s=(n.f&bt)!==0||(n.f&X)!==0;Tn(n,s?t:!1),n=r}if(e.transitions!==null)for(const i of e.transitions)(i.is_global||t)&&i.in()}}function Ar(e){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}let x=null;function Ht(e){x=e}function Qe(e,t=!1,n){var r=x={p:x,c:null,d:!1,e:null,m:!1,s:e,x:null,l:null};Te&&!t&&(x.l={s:null,u:null,r1:[],r2:Ee(!1)}),xt(()=>{r.d=!0})}function et(e){const t=x;if(t!==null){const o=t.e;if(o!==null){var n=k,r=y;t.e=null;try{for(var s=0;s<o.length;s++){var i=o[s];re(i.effect),j(i.reaction),Tt(i.fn)}}finally{re(n),j(r)}}x=t.p,t.m=!0}return{}}function tt(){return!Te||x!==null&&x.l===null}const Cr=["touchstart","touchmove"];function Sr(e){return Cr.includes(e)}function Nr(e){var t=y,n=k;j(null),re(null);try{return e()}finally{j(t),re(n)}}const Pr=new Set,Dt=new Set;function Or(e,t,n,r={}){function s(i){if(r.capture||me.call(t,i),!i.cancelBubble)return Nr(()=>n==null?void 0:n.call(this,i))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?Zn(()=>{t.addEventListener(e,s,r)}):t.addEventListener(e,s,r),s}function Rr(e,t,n,r,s){var i={capture:r,passive:s},o=Or(e,t,n,i);(t===document.body||t===window||t===document)&&xt(()=>{t.removeEventListener(e,o,i)})}function me(e){var _;var t=this,n=t.ownerDocument,r=e.type,s=((_=e.composedPath)==null?void 0:_.call(e))||[],i=s[0]||e.target,o=0,c=e.__root;if(c){var u=s.indexOf(c);if(u!==-1&&(t===document||t===window)){e.__root=t;return}var l=s.indexOf(t);if(l===-1)return;u<=l&&(o=u)}if(i=s[o]||e.target,i!==t){Qt(e,"currentTarget",{configurable:!0,get(){return i||n}});var v=y,h=k;j(null),re(null);try{for(var a,f=[];i!==null;){var p=i.assignedSlot||i.parentNode||i.host||null;try{var m=i["__"+r];if(m!=null&&(!i.disabled||e.target===i))if(yt(m)){var[d,...g]=m;d.apply(i,[e,...g])}else m.call(i,e)}catch(w){a?f.push(w):a=w}if(e.cancelBubble||p===t||p===null)break;i=p}if(a){for(let w of f)queueMicrotask(()=>{throw w});throw a}}finally{e.__root=t,delete e.currentTarget,j(v),re(h)}}}function Wr(e){var t=document.createElement("template");return t.innerHTML=e,t.content}function Ft(e,t){var n=k;n.nodes_start===null&&(n.nodes_start=e,n.nodes_end=t)}function Z(e,t){var n=(t&zn)!==0,r=(t&jn)!==0,s,i=!e.startsWith("<!>");return()=>{s===void 0&&(s=Wr(i?e:"<!>"+e),n||(s=De(s)));var o=r||cn?document.importNode(s,!0):s.cloneNode(!0);if(n){var c=De(o),u=o.lastChild;Ft(c,u)}else Ft(o,o);return o}}function Y(e,t){e!==null&&e.before(t)}function Bt(e,t){var n=t==null?"":typeof t=="object"?t+"":t;n!==(e.__t??(e.__t=e.nodeValue))&&(e.__t=n,e.nodeValue=n+"")}function Lr(e,t){return Hr(e,t)}const oe=new Map;function Hr(e,{target:t,anchor:n,props:r={},events:s,context:i,intro:o=!0}){fr();var c=new Set,u=h=>{for(var a=0;a<h.length;a++){var f=h[a];if(!c.has(f)){c.add(f);var p=Sr(f);t.addEventListener(f,me,{passive:p});var m=oe.get(f);m===void 0?(document.addEventListener(f,me,{passive:p}),oe.set(f,1)):oe.set(f,m+1)}}};u(Et(Pr)),Dt.add(u);var l=void 0,v=Tr(()=>{var h=n??t.appendChild(hn());return ke(()=>{if(i){Qe({});var a=x;a.c=i}s&&(r.$$events=s),l=e(h,r)||{},i&&et()}),()=>{var p;for(var a of c){t.removeEventListener(a,me);var f=oe.get(a);--f===0?(document.removeEventListener(a,me),oe.delete(a)):oe.set(a,f)}Dt.delete(u),h!==n&&((p=h.parentNode)==null||p.removeChild(h))}});return Dr.set(l,v),l}let Dr=new WeakMap;function ce(e,t,[n,r]=[0,0]){var s=e,i=null,o=null,c=N,u=n>0?bt:0,l=!1;const v=(a,f=!0)=>{l=!0,h(f,a)},h=(a,f)=>{c!==(c=a)&&(c?(i?je(i):f&&(i=ke(()=>f(s))),o&&ze(o,()=>{o=null})):(o?je(o):f&&(o=ke(()=>f(s,[n+1,r]))),i&&ze(i,()=>{i=null})))};It(()=>{l=!1,t(v),l||h(null,null)},u)}function $t(e,t){return t}function Fr(e,t,n,r){for(var s=[],i=t.length,o=0;o<i;o++)Mt(t[o].e,s,!0);var c=i>0&&s.length===0&&n!==null;if(c){var u=n.parentNode;cr(u),u.append(n),r.clear(),ee(e,t[0].prev,t[i-1].next)}xn(s,()=>{for(var l=0;l<i;l++){var v=t[l];c||(r.delete(v.k),ee(e,v.prev,v.next)),ie(v.e,!c)}})}function zt(e,t,n,r,s,i=null){var o=e,c={flags:t,items:new Map,first:null};{var u=e;o=u.appendChild(hn())}var l=null,v=!1,h=ar(()=>{var a=n();return yt(a)?a:a==null?[]:Et(a)});It(()=>{var a=A(h),f=a.length;v&&f===0||(v=f===0,Br(a,c,o,s,t,r,n),i!==null&&(f===0?l?je(l):l=ke(()=>i(o)):l!==null&&ze(l,()=>{l=null})),A(h))})}function Br(e,t,n,r,s,i,o){var c=e.length,u=t.items,l=t.first,v=l,h,a=null,f=[],p=[],m,d,g,_;for(_=0;_<c;_+=1){if(m=e[_],d=i(m,_),g=u.get(d),g===void 0){var w=v?v.e.nodes_start:n;a=zr(w,t,a,a===null?t.first:a.next,m,d,_,r,s,o),u.set(d,a),f=[],p=[],v=a.next;continue}if($r(g,m,_),g.e.f&G&&je(g.e),g!==v){if(h!==void 0&&h.has(g)){if(f.length<p.length){var T=p[0],I;a=T.prev;var b=f[0],S=f[f.length-1];for(I=0;I<f.length;I+=1)jt(f[I],T,n);for(I=0;I<p.length;I+=1)h.delete(p[I]);ee(t,b.prev,S.next),ee(t,a,b),ee(t,S,T),v=T,a=S,_-=1,f=[],p=[]}else h.delete(g),jt(g,v,n),ee(t,g.prev,g.next),ee(t,g,a===null?t.first:a.next),ee(t,a,g),a=g;continue}for(f=[],p=[];v!==null&&v.k!==d;)v.e.f&G||(h??(h=new Set)).add(v),p.push(v),v=v.next;if(v===null)continue;g=v}f.push(g),a=g,v=g.next}if(v!==null||h!==void 0){for(var L=h===void 0?[]:Et(h);v!==null;)v.e.f&G||L.push(v),v=v.next;var le=L.length;if(le>0){var E=c===0?n:null;Fr(t,L,E,u)}}k.first=t.first&&t.first.e,k.last=a&&a.e}function $r(e,t,n,r){an(e.v,t),e.i=n}function zr(e,t,n,r,s,i,o,c,u,l){var v=(u&Fn)!==0,h=(u&$n)===0,a=v?h?sn(s):Ee(s):s,f=u&Bn?Ee(o):o,p={i:f,v:a,k:i,a:null,e:null,prev:n,next:r};try{return p.e=ke(()=>c(e,a,f,l),ur),p.e.prev=n&&n.e,p.e.next=r&&r.e,n===null?t.first=p:(n.next=p,n.e.next=p.e),r!==null&&(r.prev=p,r.e.prev=p.e),p}finally{}}function jt(e,t,n){for(var r=e.next?e.next.e.nodes_start:n,s=t?t.e.nodes_start:n,i=e.e.nodes_start;i!==r;){var o=Ke(i);s.before(i),i=o}}function ee(e,t,n){t===null?e.first=n:(t.next=n,t.e.next=n&&n.e),n!==null&&(n.prev=t,n.e.prev=t&&t.e)}function jr(e,t,n){var r=e==null?"":""+e;return r=r?r+" "+t:t,r===""?null:r}function qt(e,t=!1){var n=t?" !important;":";",r="";for(var s in e){var i=e[s];i!=null&&i!==""&&(r+=" "+s+": "+i+n)}return r}function qr(e,t){if(t){var n="",r,s;return Array.isArray(t)?(r=t[0],s=t[1]):r=t,r&&(n+=qt(r)),s&&(n+=qt(s,!0)),n=n.trim(),n===""?null:n}return String(e)}function Ur(e,t,n,r,s,i){var o=e.__className;if(o!==n||o===void 0){var c=jr(n,r);c==null?e.removeAttribute("class"):e.className=c,e.__className=n}return i}function ot(e,t={},n,r){for(var s in n){var i=n[s];t[s]!==i&&(n[s]==null?e.style.removeProperty(s):e.style.setProperty(s,i,r))}}function Vr(e,t,n,r){var s=e.__style;if(s!==t){var i=qr(t,r);i==null?e.removeAttribute("style"):e.style.cssText=i,e.__style=t}else r&&(Array.isArray(r)?(ot(e,n==null?void 0:n[0],r[0]),ot(e,n==null?void 0:n[1],r[1],"important")):ot(e,n,r));return r}var te,de,xe,qe,In;const Ue=class Ue{constructor(t){_e(this,qe);_e(this,te,new WeakMap);_e(this,de);_e(this,xe);lt(this,xe,t)}observe(t,n){var r=U(this,te).get(t)||new Set;return r.add(n),U(this,te).set(t,r),Pt(this,qe,In).call(this).observe(t,U(this,xe)),()=>{var s=U(this,te).get(t);s.delete(n),s.size===0&&(U(this,te).delete(t),U(this,de).unobserve(t))}}};te=new WeakMap,de=new WeakMap,xe=new WeakMap,qe=new WeakSet,In=function(){return U(this,de)??lt(this,de,new ResizeObserver(t=>{for(var n of t){Ue.entries.set(n.target,n);for(var r of U(this,te).get(n.target)||[])r(n)}}))},Nt(Ue,"entries",new WeakMap);let pt=Ue;var Yr=new pt({box:"border-box"});function Ut(e,t,n){var r=Yr.observe(e,()=>n(e[t]));Tt(()=>(Ze(()=>n(e[t])),r))}function Gr(e=!1){const t=x,n=t.l.u;if(!n)return;let r=()=>Er(t.s);if(e){let s=0,i={};const o=Ge(()=>{let c=!1;const u=t.s;for(const l in u)u[l]!==i[l]&&(i[l]=u[l],c=!0);return c&&s++,s});r=()=>A(o)}n.b.length&&xr(()=>{Vt(t,r),Le(n.b)}),gt(()=>{const s=Ze(()=>n.m.map(Xn));return()=>{for(const i of s)typeof i=="function"&&i()}}),n.a.length&&gt(()=>{Vt(t,r),Le(n.a)})}function Vt(e,t){if(e.l.s)for(const n of e.l.s)A(n);t()}function Kr(e){x===null&&Ar(),Te&&x.l!==null?Xr(x).m.push(e):gt(()=>{const t=Ze(e);if(typeof t=="function")return t})}function Xr(e){var t=e.l;return t.u??(t.u={a:[],b:[],m:[]})}function At(e,t,n){if(e==null)return t(void 0),n&&n(void 0),K;const r=Ze(()=>e.subscribe(t,n));return r.unsubscribe?()=>r.unsubscribe():r}const ue=[];function Jr(e,t){return{subscribe:Ct(e,t).subscribe}}function Ct(e,t=K){let n=null;const r=new Set;function s(c){if(nn(e,c)&&(e=c,n)){const u=!ue.length;for(const l of r)l[1](),ue.push(l,e);if(u){for(let l=0;l<ue.length;l+=2)ue[l][0](ue[l+1]);ue.length=0}}}function i(c){s(c(e))}function o(c,u=K){const l=[c,u];return r.add(l),r.size===1&&(n=t(s,i)||K),c(e),()=>{r.delete(l),r.size===0&&n&&(n(),n=null)}}return{set:s,update:i,subscribe:o}}function Mn(e,t,n){const r=!Array.isArray(e),s=r?[e]:e;if(!s.every(Boolean))throw new Error("derived() expects stores as input, got a falsy value");const i=t.length<2;return Jr(n,(o,c)=>{let u=!1;const l=[];let v=0,h=K;const a=()=>{if(v)return;h();const p=t(r?l[0]:l,o,c);i?o(p):h=typeof p=="function"?p:K},f=s.map((p,m)=>At(p,d=>{l[m]=d,v&=~(1<<m),u&&a()},()=>{v|=1<<m}));return u=!0,a(),function(){Le(f),h(),u=!1}})}function Zr(e){let t;return At(e,n=>t=n)(),t}let _t=Symbol();function Qr(e,t,n){const r=n[t]??(n[t]={store:null,source:sn(void 0),unsubscribe:K});if(r.store!==e&&!(_t in n))if(r.unsubscribe(),r.store=e??null,e==null)r.source.v=void 0,r.unsubscribe=K;else{var s=!0;r.unsubscribe=At(e,i=>{s?r.source.v=i:H(r.source,i)}),s=!1}return e&&_t in n?Zr(e):A(r.source)}function Yt(e,t){return e.set(t),t}function An(){const e={};function t(){xt(()=>{for(var n in e)e[n].unsubscribe();Qt(e,_t,{enumerable:!1,value:!0})})}return[e,t]}function ei(e,t,n,r){var s;s=e[t];var i=r,o=!0,c=()=>(o&&(o=!1,i=r),i);s===void 0&&r!==void 0&&(s=c());var u;return u=()=>{var l=e[t];return l===void 0?c():(o=!0,l)},u}var Se=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Cn(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var ti="Expected a function",Gt=NaN,ni="[object Symbol]",ri=/^\s+|\s+$/g,ii=/^[-+]0x[0-9a-f]+$/i,si=/^0b[01]+$/i,ai=/^0o[0-7]+$/i,li=parseInt,oi=typeof Se=="object"&&Se&&Se.Object===Object&&Se,ui=typeof self=="object"&&self&&self.Object===Object&&self,fi=oi||ui||Function("return this")(),ci=Object.prototype,di=ci.toString,vi=Math.max,hi=Math.min,ut=function(){return fi.Date.now()};function gi(e,t,n){var r,s,i,o,c,u,l=0,v=!1,h=!1,a=!0;if(typeof e!="function")throw new TypeError(ti);t=Kt(t)||0,mt(n)&&(v=!!n.leading,h="maxWait"in n,i=h?vi(Kt(n.maxWait)||0,t):i,a="trailing"in n?!!n.trailing:a);function f(b){var S=r,L=s;return r=s=void 0,l=b,o=e.apply(L,S),o}function p(b){return l=b,c=setTimeout(g,t),v?f(b):o}function m(b){var S=b-u,L=b-l,le=t-S;return h?hi(le,i-L):le}function d(b){var S=b-u,L=b-l;return u===void 0||S>=t||S<0||h&&L>=i}function g(){var b=ut();if(d(b))return _(b);c=setTimeout(g,m(b))}function _(b){return c=void 0,a&&r?f(b):(r=s=void 0,o)}function w(){c!==void 0&&clearTimeout(c),l=0,r=u=s=c=void 0}function T(){return c===void 0?o:_(ut())}function I(){var b=ut(),S=d(b);if(r=arguments,s=this,u=b,S){if(c===void 0)return p(u);if(h)return c=setTimeout(g,t),f(u)}return c===void 0&&(c=setTimeout(g,t)),o}return I.cancel=w,I.flush=T,I}function mt(e){var t=typeof e;return!!e&&(t=="object"||t=="function")}function pi(e){return!!e&&typeof e=="object"}function _i(e){return typeof e=="symbol"||pi(e)&&di.call(e)==ni}function Kt(e){if(typeof e=="number")return e;if(_i(e))return Gt;if(mt(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=mt(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=e.replace(ri,"");var n=si.test(e);return n||ai.test(e)?li(e.slice(2),n?2:8):ii.test(e)?Gt:+e}var mi=gi;const wi=Cn(mi),nt=Ct(window.innerWidth),bi=Ct(window.innerHeight);Mn(nt,e=>e<=560);Mn(nt,e=>e>1200);function yi(e,t){Qe(t,!0);const[n,r]=An();let s=ei(t,"debounceDur",3,100);const i=()=>{Yt(nt,window.innerWidth),Yt(bi,window.innerHeight)};Kr(()=>{i()});var o=on(()=>wi(i,s()));Rr("resize",dt,function(...c){var u;(u=A(o))==null||u.apply(this,c)}),et(),r()}const ft=[{type:"Vegetated",loss:345e3},{type:"Non-Vegetated",loss:-453e3},{type:"Total",loss:-132e3}];var Ei=Z('<div class="value svelte-nkcaym"> </div> <div class="detail svelte-nkcaym">Open water and artificial ponds increased.</div>',1),ki=Z(`<div class="value svelte-nkcaym"> </div> <div class="detail svelte-nkcaym">Forested and marshy wetlands, home to wildlife and vital for flood
        control and water quality, were lost.</div>`,1),xi=Z("<div><!> <!></div>"),Ti=Z('<div class="unit svelte-nkcaym"></div>'),Ii=Z('<div class="unit svelte-nkcaym"></div>'),Mi=Z('<div class="annotations svelte-nkcaym"><!> <!></div>'),Ai=Z('<!> <div class="chart-container svelte-nkcaym"><div class="chart-grid svelte-nkcaym"><div class="axis svelte-nkcaym"><div class="tick svelte-nkcaym" data-value="300"><span class="svelte-nkcaym">+300k</span></div> <div class="tick svelte-nkcaym" data-value="200"><span class="svelte-nkcaym">+200k</span></div> <div class="tick svelte-nkcaym" data-value="100"><span class="svelte-nkcaym">+100k</span></div> <div class="tick svelte-nkcaym" data-value="0"><span class="svelte-nkcaym">0</span></div> <div class="tick svelte-nkcaym" data-value="-100"><span class="svelte-nkcaym">-100k</span></div> <div class="tick svelte-nkcaym" data-value="-200"><span class="svelte-nkcaym">-200k</span></div> <div class="tick svelte-nkcaym" data-value="-300"><span class="svelte-nkcaym">-300k</span></div> <div class="tick svelte-nkcaym" data-value="-400"><span class="svelte-nkcaym">-400k</span></div></div> <div class="chart svelte-nkcaym"><div class="gain panel svelte-nkcaym"></div> <div class="loss panel svelte-nkcaym"></div></div> <!></div></div> <!>',1);function Ci(e,t){Qe(t,!0);const[n,r]=An(),s=()=>Qr(nt,"$windowWidth",n),i=(E,Q=K)=>{var D=xi(),Ae=V(D);{var Nn=se=>{var pe=Ei(),rt=Ne(pe),it=V(rt);Ce(st=>Bt(it,`+${st??""} acres in non-vegetated wetlands`),[()=>Math.abs(o).toLocaleString()]),Y(se,pe)};ce(Ae,se=>{Q()==="gain"&&se(Nn)})}var Pn=B(Ae,2);{var On=se=>{var pe=ki(),rt=Ne(pe),it=V(rt);Ce(st=>Bt(it,`-${st??""} acres of vegetated wetlands`),[()=>Math.abs(c).toLocaleString()]),Y(se,pe)};ce(Pn,se=>{Q()==="loss"&&se(On)})}Ce(()=>Ur(D,1,`annotation ${Q()??""}`,"svelte-nkcaym")),Y(E,D)};console.log(ft);const o=ft.find(E=>E.type==="Vegetated").loss,c=ft.find(E=>E.type==="Non-Vegetated").loss,u=1e3;let l=F(0),v=F(0),h=on(()=>s()<500);var a=Ai(),f=Ne(a);{var p=E=>{i(E,()=>"gain")};ce(f,E=>{A(h)&&E(p)})}var m=B(f,2),d=V(m),g=V(d);let _;var w=B(g,2),T=V(w);zt(T,21,()=>Array(Math.floor(o/u)),$t,(E,Q)=>{var D=Ti();Y(E,D)});var I=B(T,2);zt(I,21,()=>Array(Math.abs(Math.floor(c/u))),$t,(E,Q)=>{var D=Ii();Y(E,D)});var b=B(w,2);{var S=E=>{var Q=Mi(),D=V(Q);i(D,()=>"gain");var Ae=B(D,2);i(Ae,()=>"loss"),Y(E,Q)};ce(b,E=>{A(h)||E(S)})}var L=B(m,2);{var le=E=>{i(E,()=>"loss")};ce(L,E=>{A(h)&&E(le)})}Ce(()=>_=Vr(g,"",_,{"--axis-height":`${A(v)??""}px`})),Ut(w,"clientWidth",E=>H(l,E)),Ut(w,"clientHeight",E=>H(v,E)),Y(e,a),et(),r()}var Sn={exports:{}};/*! pym.js - v1.3.2 - 2018-02-13 */(function(e){(function(t){e.exports?e.exports=t():window.pym=t.call(this)})(function(){var t="xPYMx",n={},r=function(a){var f=document.createEvent("Event");f.initEvent("pym:"+a,!0,!0),document.dispatchEvent(f)},s=function(a){var f=new RegExp("[\\?&]"+a.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]")+"=([^&#]*)"),p=f.exec(location.search);return p===null?"":decodeURIComponent(p[1].replace(/\+/g," "))},i=function(a,f){if(!(f.xdomain!=="*"&&!a.origin.match(new RegExp(f.xdomain+"$")))&&typeof a.data=="string")return!0},o=function(a){var f=/^(?:(?:https?|mailto|ftp):|[^&:/?#]*(?:[/?#]|$))/gi;if(a.match(f))return!0},c=function(a,f,p){var m=["pym",a,f,p];return m.join(t)},u=function(a){var f=["pym",a,"(\\S+)","(.*)"];return new RegExp("^"+f.join(t)+"$")},l=Date.now||function(){return new Date().getTime()},v=function(a,f,p){var m,d,g,_=null,w=0;p||(p={});var T=function(){w=p.leading===!1?0:l(),_=null,g=a.apply(m,d),_||(m=d=null)};return function(){var I=l();!w&&p.leading===!1&&(w=I);var b=f-(I-w);return m=this,d=arguments,b<=0||b>f?(_&&(clearTimeout(_),_=null),w=I,g=a.apply(m,d),_||(m=d=null)):!_&&p.trailing!==!1&&(_=setTimeout(T,b)),g}},h=function(){for(var a=n.autoInitInstances.length,f=a-1;f>=0;f--){var p=n.autoInitInstances[f];p.el.getElementsByTagName("iframe").length&&p.el.getElementsByTagName("iframe")[0].contentWindow||n.autoInitInstances.splice(f,1)}};return n.autoInitInstances=[],n.autoInit=function(a){var f=document.querySelectorAll("[data-pym-src]:not([data-pym-auto-initialized])"),p=f.length;h();for(var m=0;m<p;++m){var d=f[m];d.setAttribute("data-pym-auto-initialized",""),d.id===""&&(d.id="pym-"+m+"-"+Math.random().toString(36).substr(2,5));var g=d.getAttribute("data-pym-src"),_={xdomain:"string",title:"string",name:"string",id:"string",sandbox:"string",allowfullscreen:"boolean",parenturlparam:"string",parenturlvalue:"string",optionalparams:"boolean",trackscroll:"boolean",scrollwait:"number"},w={};for(var T in _)if(d.getAttribute("data-pym-"+T)!==null)switch(_[T]){case"boolean":w[T]=d.getAttribute("data-pym-"+T)!=="false";break;case"string":w[T]=d.getAttribute("data-pym-"+T);break;case"number":var I=Number(d.getAttribute("data-pym-"+T));isNaN(I)||(w[T]=I);break;default:console.err("unrecognized attribute type")}var b=new n.Parent(d.id,g,w);n.autoInitInstances.push(b)}return a||r("pym-initialized"),n.autoInitInstances},n.Parent=function(a,f,p){this.id=a,this.url=f,this.el=document.getElementById(a),this.iframe=null,this.settings={xdomain:"*",optionalparams:!0,parenturlparam:"parentUrl",parenturlvalue:window.location.href,trackscroll:!1,scrollwait:100},this.messageRegex=u(this.id),this.messageHandlers={},p=p||{},this._constructIframe=function(){var d=this.el.offsetWidth.toString();this.iframe=document.createElement("iframe");var g="",_=this.url.indexOf("#");for(_>-1&&(g=this.url.substring(_,this.url.length),this.url=this.url.substring(0,_)),this.url.indexOf("?")<0?this.url+="?":this.url+="&",this.iframe.src=this.url+"initialWidth="+d+"&childId="+this.id,this.settings.optionalparams&&(this.iframe.src+="&parentTitle="+encodeURIComponent(document.title),this.iframe.src+="&"+this.settings.parenturlparam+"="+encodeURIComponent(this.settings.parenturlvalue)),this.iframe.src+=g,this.iframe.setAttribute("width","100%"),this.iframe.setAttribute("scrolling","no"),this.iframe.setAttribute("marginheight","0"),this.iframe.setAttribute("frameborder","0"),this.settings.title&&this.iframe.setAttribute("title",this.settings.title),this.settings.allowfullscreen!==void 0&&this.settings.allowfullscreen!==!1&&this.iframe.setAttribute("allowfullscreen",""),this.settings.sandbox!==void 0&&typeof this.settings.sandbox=="string"&&this.iframe.setAttribute("sandbox",this.settings.sandbox),this.settings.id&&(document.getElementById(this.settings.id)||this.iframe.setAttribute("id",this.settings.id)),this.settings.name&&this.iframe.setAttribute("name",this.settings.name);this.el.firstChild;)this.el.removeChild(this.el.firstChild);this.el.appendChild(this.iframe),window.addEventListener("resize",this._onResize),this.settings.trackscroll&&window.addEventListener("scroll",this._throttleOnScroll)},this._onResize=(function(){this.sendWidth(),this.settings.trackscroll&&this.sendViewportAndIFramePosition()}).bind(this),this._onScroll=(function(){this.sendViewportAndIFramePosition()}).bind(this),this._fire=function(d,g){if(d in this.messageHandlers)for(var _=0;_<this.messageHandlers[d].length;_++)this.messageHandlers[d][_].call(this,g)},this.remove=function(){window.removeEventListener("message",this._processMessage),window.removeEventListener("resize",this._onResize),this.el.removeChild(this.iframe),h()},this._processMessage=(function(d){if(i(d,this.settings)&&typeof d.data=="string"){var g=d.data.match(this.messageRegex);if(!g||g.length!==3)return!1;var _=g[1],w=g[2];this._fire(_,w)}}).bind(this),this._onHeightMessage=function(d){var g=parseInt(d);this.iframe.setAttribute("height",g+"px")},this._onNavigateToMessage=function(d){o(d)&&(document.location.href=d)},this._onScrollToChildPosMessage=function(d){var g=document.getElementById(this.id).getBoundingClientRect().top+window.pageYOffset,_=g+parseInt(d);window.scrollTo(0,_)},this.onMessage=function(d,g){d in this.messageHandlers||(this.messageHandlers[d]=[]),this.messageHandlers[d].push(g)},this.sendMessage=function(d,g){this.el.getElementsByTagName("iframe").length&&(this.el.getElementsByTagName("iframe")[0].contentWindow?this.el.getElementsByTagName("iframe")[0].contentWindow.postMessage(c(this.id,d,g),"*"):this.remove())},this.sendWidth=function(){var d=this.el.offsetWidth.toString();this.sendMessage("width",d)},this.sendViewportAndIFramePosition=function(){var d=this.iframe.getBoundingClientRect(),g=window.innerWidth||document.documentElement.clientWidth,_=window.innerHeight||document.documentElement.clientHeight,w=g+" "+_;w+=" "+d.top+" "+d.left,w+=" "+d.bottom+" "+d.right,this.sendMessage("viewport-iframe-position",w)};for(var m in p)this.settings[m]=p[m];return this._throttleOnScroll=v(this._onScroll.bind(this),this.settings.scrollwait),this.onMessage("height",this._onHeightMessage),this.onMessage("navigateTo",this._onNavigateToMessage),this.onMessage("scrollToChildPos",this._onScrollToChildPosMessage),this.onMessage("parentPositionInfo",this.sendViewportAndIFramePosition),window.addEventListener("message",this._processMessage,!1),this._constructIframe(),this},n.Child=function(a){this.parentWidth=null,this.id=null,this.parentTitle=null,this.parentUrl=null,this.settings={renderCallback:null,xdomain:"*",polling:0,parenturlparam:"parentUrl"},this.timerId=null,this.messageRegex=null,this.messageHandlers={},a=a||{},this.onMessage=function(d,g){d in this.messageHandlers||(this.messageHandlers[d]=[]),this.messageHandlers[d].push(g)},this._fire=function(d,g){if(d in this.messageHandlers)for(var _=0;_<this.messageHandlers[d].length;_++)this.messageHandlers[d][_].call(this,g)},this._processMessage=(function(d){if(i(d,this.settings)&&typeof d.data=="string"){var g=d.data.match(this.messageRegex);if(!(!g||g.length!==3)){var _=g[1],w=g[2];this._fire(_,w)}}}).bind(this),this._onWidthMessage=function(d){var g=parseInt(d);g!==this.parentWidth&&(this.parentWidth=g,this.settings.renderCallback&&this.settings.renderCallback(g),this.sendHeight())},this.sendMessage=function(d,g){window.parent.postMessage(c(this.id,d,g),"*")},this.sendHeight=(function(){var d=document.getElementsByTagName("body")[0].offsetHeight.toString();return this.sendMessage("height",d),d}).bind(this),this.getParentPositionInfo=function(){this.sendMessage("parentPositionInfo")},this.scrollParentTo=function(d){this.sendMessage("navigateTo","#"+d)},this.navigateParentTo=function(d){this.sendMessage("navigateTo",d)},this.scrollParentToChildEl=function(d){var g=document.getElementById(d).getBoundingClientRect().top+window.pageYOffset;this.scrollParentToChildPos(g)},this.scrollParentToChildPos=function(d){this.sendMessage("scrollToChildPos",d.toString())};var f=function(d){var g=document.getElementsByTagName("html")[0],_,w=g.className;try{window.self!==window.top?_="embedded":_="not-embedded"}catch{_="embedded"}w.indexOf(_)<0&&(g.className=w?w+" "+_:_,d&&d(_),r("marked-embedded"))};this.remove=function(){window.removeEventListener("message",this._processMessage),this.timerId&&clearInterval(this.timerId)};for(var p in a)this.settings[p]=a[p];this.id=s("childId")||a.id,this.messageRegex=new RegExp("^pym"+t+this.id+t+"(\\S+)"+t+"(.*)$");var m=parseInt(s("initialWidth"));return this.parentUrl=s(this.settings.parenturlparam),this.parentTitle=s("parentTitle"),this.onMessage("width",this._onWidthMessage),window.addEventListener("message",this._processMessage,!1),this.settings.renderCallback&&this.settings.renderCallback(m),this.sendHeight(),this.settings.polling&&(this.timerId=window.setInterval(this.sendHeight,this.settings.polling)),f(a.onMarkedEmbeddedStatus),this},typeof document<"u"&&n.autoInit(!0),n})})(Sn);var Si=Sn.exports;const Ni=Cn(Si);var Pi=Z('<div class="credit">Data: U.S. Fish and Wildlife Service; Graphic by Jared Whalen / <a target="_blank" href="https://agwaterdesk.org/">Ag & Water Desk</a></div>'),Oi=Z(`<!> <div class="chart-container svelte-18z9ezx"><h1 class="headline">Mississippi River Basin wetlands are shrinking, changing</h1> <p class="dek">Between 2009 and 2019, the Mississippi River Basin <b>lost</b> 132,000 acres
    of wetlands overall — but that number hides a deeper concern. An <b>additional</b> half a million acres of <span class="vegetated svelte-18z9ezx">vegetated</span> wetlands
    were lost, the forests and marshes that buffer storms, store carbon, and
    shelter wildlife. In their place, less productive <span class="non-vegetated svelte-18z9ezx">non-vegetated</span> wetlands like open water and
    mudflats expanded — a shift that signals ecological decline.</p> <div class="dek legend svelte-18z9ezx"><div class="unit svelte-18z9ezx"></div> = 1,000 acres</div> <p class="sr-only">Chart showing wetland change in the Mississippi River Basin from 2009 to
    2019. A net loss of 132,000 acres hides a deeper shift: 453,000 acres of
    vegetated wetlands were lost, while 345,000 acres of less productive
    non-vegetated wetlands were gained. Each square represents 1,000 acres.</p> <div id="g-viz" class="svelte-18z9ezx"><!></div> <!></div>`,1);function Ri(e,t){Qe(t,!1),new Ni.Child({polling:500});function n(h){return new URLSearchParams(window.location.search).get(h)}let r=n("credit")!="false";Gr();var s=Oi(),i=Ne(s);yi(i,{});var o=B(i,2),c=B(V(o),8),u=V(c);Ci(u,{});var l=B(c,2);{var v=h=>{var a=Pi();Y(h,a)};ce(l,h=>{r&&h(v)})}Y(e,s),et()}Lr(Ri,{target:document.getElementById("app")});
