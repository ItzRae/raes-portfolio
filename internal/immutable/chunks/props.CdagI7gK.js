import{S as D,o as K,n as j,q as o,v as z,w as g,x as L,U as v,g as b,y as B,z as H,A as Z,B as $,L as J,C as V,R as Q,D as F,l as W,P as X,E as k,F as p,G as ee,f as M,H as re,I as ne,J as te,a as U,K as ae,M as ie,N as fe}from"./runtime.dLIlgSPi.js";function E(a,u=null,y){if(typeof a!="object"||a===null||D in a)return a;const P=Z(a);if(P!==K&&P!==j)return a;var f=new Map,c=$(a),w=o(0);c&&f.set("length",o(a.length));var I;return new Proxy(a,{defineProperty(i,e,r){(!("value"in r)||r.configurable===!1||r.enumerable===!1||r.writable===!1)&&z();var t=f.get(e);return t===void 0?(t=o(r.value),f.set(e,t)):g(t,E(r.value,I)),!0},deleteProperty(i,e){var r=f.get(e);if(r===void 0)e in i&&f.set(e,o(v));else{if(c&&typeof e=="string"){var t=f.get("length"),n=Number(e);Number.isInteger(n)&&n<t.v&&g(t,n)}g(r,v),Y(w)}return!0},get(i,e,r){var _;if(e===D)return a;var t=f.get(e),n=e in i;if(t===void 0&&(!n||(_=L(i,e))!=null&&_.writable)&&(t=o(E(n?i[e]:v,I)),f.set(e,t)),t!==void 0){var s=b(t);return s===v?void 0:s}return Reflect.get(i,e,r)},getOwnPropertyDescriptor(i,e){var r=Reflect.getOwnPropertyDescriptor(i,e);if(r&&"value"in r){var t=f.get(e);t&&(r.value=b(t))}else if(r===void 0){var n=f.get(e),s=n==null?void 0:n.v;if(n!==void 0&&s!==v)return{enumerable:!0,configurable:!0,value:s,writable:!0}}return r},has(i,e){var s;if(e===D)return!0;var r=f.get(e),t=r!==void 0&&r.v!==v||Reflect.has(i,e);if(r!==void 0||B!==null&&(!t||(s=L(i,e))!=null&&s.writable)){r===void 0&&(r=o(t?E(i[e],I):v),f.set(e,r));var n=b(r);if(n===v)return!1}return t},set(i,e,r,t){var m;var n=f.get(e),s=e in i;if(c&&e==="length")for(var _=r;_<n.v;_+=1){var R=f.get(_+"");R!==void 0?g(R,v):_ in i&&(R=o(v),f.set(_+"",R))}n===void 0?(!s||(m=L(i,e))!=null&&m.writable)&&(n=o(void 0),g(n,E(r,I)),f.set(e,n)):(s=n.v!==v,g(n,E(r,I)));var d=Reflect.getOwnPropertyDescriptor(i,e);if(d!=null&&d.set&&d.set.call(t,r),!s){if(c&&typeof e=="string"){var S=f.get("length"),O=Number(e);Number.isInteger(O)&&O>=S.v&&g(S,O+1)}Y(w)}return!0},ownKeys(i){b(w);var e=Reflect.ownKeys(i).filter(n=>{var s=f.get(n);return s===void 0||s.v!==v});for(var[r,t]of f)t.v!==v&&!(r in i)&&e.push(r);return e},setPrototypeOf(){H()}})}function Y(a,u=1){g(a,a.v+u)}let N=!1;function se(a){var u=N;try{return N=!1,[a(),N]}finally{N=u}}function G(a){for(var u=B,y=B;u!==null&&!(u.f&(V|Q));)u=u.parent;try{return F(u),a()}finally{F(y)}}function le(a,u,y,P){var q;var f=(y&ae)!==0,c=!W||(y&X)!==0,w=(y&k)!==0,I=(y&fe)!==0,i=!1,e;w?[e,i]=se(()=>a[u]):e=a[u];var r=D in a||p in a,t=((q=L(a,u))==null?void 0:q.set)??(r&&w&&u in a?l=>a[u]=l:void 0),n=P,s=!0,_=!1,R=()=>(_=!0,s&&(s=!1,I?n=U(P):n=P),n);e===void 0&&P!==void 0&&(t&&c&&ee(),e=R(),t&&t(e));var d;if(c)d=()=>{var l=a[u];return l===void 0?R():(s=!0,_=!1,l)};else{var S=G(()=>(f?M:re)(()=>a[u]));S.f|=J,d=()=>{var l=b(S);return l!==void 0&&(n=void 0),l===void 0?n:l}}if(!(y&ne))return d;if(t){var O=a.$$legacy;return function(l,h){return arguments.length>0?((!c||!h||O||i)&&t(h?d():l),l):d()}}var m=!1,C=!1,T=ie(e),A=G(()=>M(()=>{var l=d(),h=b(T);return m?(m=!1,C=!0,h):(C=!1,T.v=l)}));return f||(A.equals=te),function(l,h){if(arguments.length>0){const x=h?b(A):c&&w?E(l):l;return A.equals(x)||(m=!0,g(T,x),_&&n!==void 0&&(n=x),U(()=>b(A))),l}return b(A)}}export{E as a,le as p};
