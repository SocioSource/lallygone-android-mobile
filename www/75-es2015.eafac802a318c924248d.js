(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{F6zI:function(e,t,o){"use strict";o.r(t),o.d(t,"startTapClick",(function(){return i}));var n=o("OMvp");const i=e=>{let t,o,i,v,p=10*-u,f=0;const m=e.getBoolean("animated",!0)&&e.getBoolean("rippleEffect",!0),L=new WeakMap,w=e=>{p=Object(n.l)(e),b(e)},h=()=>{clearTimeout(v),v=void 0,o&&(j(!1),o=void 0)},E=e=>{o||void 0!==t&&null!==t.parentElement||(t=void 0,g(s(e),e))},b=e=>{g(void 0,e)},g=(e,t)=>{if(e&&e===o)return;clearTimeout(v),v=void 0;const{x:i,y:s}=Object(n.m)(t);if(o){if(L.has(o))throw new Error("internal error");o.classList.contains(r)||O(o,i,s),j(!0)}if(e){const t=L.get(e);t&&(clearTimeout(t),L.delete(e));const o=a(e)?0:d;e.classList.remove(r),v=setTimeout(()=>{O(e,i,s),v=void 0},o)}o=e},O=(e,t,o)=>{f=Date.now(),e.classList.add(r);const n=m&&c(e);n&&n.addRipple&&(T(),i=n.addRipple(t,o))},T=()=>{void 0!==i&&(i.then(e=>e()),i=void 0)},j=e=>{T();const t=o;if(!t)return;const n=l-Date.now()+f;if(e&&n>0&&!a(t)){const e=setTimeout(()=>{t.classList.remove(r),L.delete(t)},l);L.set(t,e)}else t.classList.remove(r)},S=document;S.addEventListener("ionScrollStart",e=>{t=e.target,h()}),S.addEventListener("ionScrollEnd",()=>{t=void 0}),S.addEventListener("ionGestureCaptured",h),S.addEventListener("touchstart",e=>{p=Object(n.l)(e),E(e)},!0),S.addEventListener("touchcancel",w,!0),S.addEventListener("touchend",w,!0),S.addEventListener("mousedown",e=>{const t=Object(n.l)(e)-u;p<t&&E(e)},!0),S.addEventListener("mouseup",e=>{const t=Object(n.l)(e)-u;p<t&&b(e)},!0)},s=e=>{if(!e.composedPath)return e.target.closest(".ion-activatable");{const t=e.composedPath();for(let e=0;e<t.length-2;e++){const o=t[e];if(o.classList&&o.classList.contains("ion-activatable"))return o}}},a=e=>e.classList.contains("ion-activatable-instant"),c=e=>{if(e.shadowRoot){const t=e.shadowRoot.querySelector("ion-ripple-effect");if(t)return t}return e.querySelector("ion-ripple-effect")},r="ion-activated",d=200,l=200,u=2500}}]);