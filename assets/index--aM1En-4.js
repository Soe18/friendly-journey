var fe=Object.defineProperty;var ue=(t,e,n)=>e in t?fe(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var V=(t,e,n)=>ue(t,typeof e!="symbol"?e+"":e,n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))l(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&l(r)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function g(){}function oe(t){return t()}function te(){return Object.create(null)}function R(t){t.forEach(oe)}function ce(t){return typeof t=="function"}function ae(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function de(t){return Object.keys(t).length===0}function b(t,e){t.appendChild(e)}function _(t,e,n){t.insertBefore(e,n||null)}function d(t){t.parentNode&&t.parentNode.removeChild(t)}function f(t){return document.createElement(t)}function W(t){return document.createTextNode(t)}function x(){return W(" ")}function M(t,e,n,l){return t.addEventListener(e,n,l),()=>t.removeEventListener(e,n,l)}function a(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function _e(t){return Array.from(t.childNodes)}function j(t,e,n){t.classList.toggle(e,!!n)}let X;function I(t){X=t}const S=[],ne=[];let N=[];const le=[],pe=Promise.resolve();let G=!1;function me(){G||(G=!0,pe.then(se))}function Q(t){N.push(t)}const D=new Set;let A=0;function se(){if(A!==0)return;const t=X;do{try{for(;A<S.length;){const e=S[A];A++,I(e),be(e.$$)}}catch(e){throw S.length=0,A=0,e}for(I(null),S.length=0,A=0;ne.length;)ne.pop()();for(let e=0;e<N.length;e+=1){const n=N[e];D.has(n)||(D.add(n),n())}N.length=0}while(S.length);for(;le.length;)le.pop()();G=!1,D.clear(),I(t)}function be(t){if(t.fragment!==null){t.update(),R(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(Q)}}function ye(t){const e=[],n=[];N.forEach(l=>t.indexOf(l)===-1?e.push(l):n.push(l)),n.forEach(l=>l()),N=e}const he=new Set;function ge(t,e){t&&t.i&&(he.delete(t),t.i(e))}function ke(t,e,n){const{fragment:l,after_update:i}=t.$$;l&&l.m(e,n),Q(()=>{const o=t.$$.on_mount.map(oe).filter(ce);t.$$.on_destroy?t.$$.on_destroy.push(...o):R(o),t.$$.on_mount=[]}),i.forEach(Q)}function ve(t,e){const n=t.$$;n.fragment!==null&&(ye(n.after_update),R(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function xe(t,e){t.$$.dirty[0]===-1&&(S.push(t),me(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function we(t,e,n,l,i,o,r=null,s=[-1]){const w=X;I(t);const u=t.$$={fragment:null,ctx:[],props:o,update:g,not_equal:i,bound:te(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(w?w.$$.context:[])),callbacks:te(),dirty:s,skip_bound:!1,root:e.target||w.$$.root};r&&r(u.root);let L=!1;if(u.ctx=n?n(t,e.props||{},(y,$,...T)=>{const h=T.length?T[0]:$;return u.ctx&&i(u.ctx[y],u.ctx[y]=h)&&(!u.skip_bound&&u.bound[y]&&u.bound[y](h),L&&xe(t,y)),$}):[],u.update(),L=!0,R(u.before_update),u.fragment=l?l(u.ctx):!1,e.target){if(e.hydrate){const y=_e(e.target);u.fragment&&u.fragment.l(y),y.forEach(d)}else u.fragment&&u.fragment.c();e.intro&&ge(t.$$.fragment),ke(t,e.target,e.anchor),se()}I(w)}class $e{constructor(){V(this,"$$");V(this,"$$set")}$destroy(){ve(this,1),this.$destroy=g}$on(e,n){if(!ce(n))return g;const l=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return l.push(n),()=>{const i=l.indexOf(n);i!==-1&&l.splice(i,1)}}$set(e){this.$$set&&!de(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const Ce="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Ce);function Ee(t){let e;return{c(){e=f("li"),e.textContent="Tipologia",a(e,"class","step")},m(n,l){_(n,e,l)},d(n){n&&d(e)}}}function Oe(t){let e;return{c(){e=f("li"),e.textContent="Tipologia",a(e,"class","step step-primary")},m(n,l){_(n,e,l)},d(n){n&&d(e)}}}function Le(t){let e;return{c(){e=f("li"),e.textContent="Piatti",a(e,"class","step")},m(n,l){_(n,e,l)},d(n){n&&d(e)}}}function Pe(t){let e;return{c(){e=f("li"),e.textContent="Piatti",a(e,"class","step step-primary")},m(n,l){_(n,e,l)},d(n){n&&d(e)}}}function Ae(t){let e;return{c(){e=f("li"),e.textContent="Riepilogo",a(e,"class","step")},m(n,l){_(n,e,l)},d(n){n&&d(e)}}}function Se(t){let e;return{c(){e=f("li"),e.textContent="Riepilogo",a(e,"class","step step-primary")},m(n,l){_(n,e,l)},d(n){n&&d(e)}}}function Ne(t){let e;return{c(){e=W("Riepilogo")},m(n,l){_(n,e,l)},p:g,d(n){n&&d(e)}}}function Te(t){let e;return{c(){e=W("Piatti")},m(n,l){_(n,e,l)},p:g,d(n){n&&d(e)}}}function je(t){let e,n,l,i,o;return{c(){e=f("button"),e.textContent="Asporto",n=x(),l=f("button"),l.textContent="Coperto",a(e,"class","btn btn-outline h-1/3 text-5xl font-bold m-2"),j(e,"btn-active",t[1]),a(l,"class","btn btn-outline h-1/3 text-5xl font-bold m-2"),j(l,"btn-active",t[2])},m(r,s){_(r,e,s),_(r,n,s),_(r,l,s),i||(o=[M(e,"click",t[5]),M(l,"click",t[6])],i=!0)},p(r,s){s&2&&j(e,"btn-active",r[1]),s&4&&j(l,"btn-active",r[2])},d(r){r&&(d(e),d(n),d(l)),i=!1,R(o)}}}function Ie(t){let e,n,l,i,o;return{c(){e=f("h1"),e.textContent="Welcome GFVB…",n=x(),l=f("label"),l.innerHTML=`Nome
        <input type="text" class="grow" placeholder="Mario"/>`,i=x(),o=f("label"),o.innerHTML=`Cognome
        <input type="text" class="grow" placeholder="Rossi"/>`,a(e,"class","text-4xl font-bold mb-6"),a(l,"class","input input-bordered flex items-center gap-2 my-2"),a(o,"class","input input-bordered flex items-center gap-2 my-2")},m(r,s){_(r,e,s),_(r,n,s),_(r,l,s),_(r,i,s),_(r,o,s)},p:g,d(r){r&&(d(e),d(n),d(l),d(i),d(o))}}}function Me(t){let e,n,l;return{c(){e=f("div"),e.textContent="Avanti",a(e,"class","btn btn-primary"),j(e,"btn-disabled",qe)},m(i,o){_(i,e,o),n||(l=M(e,"click",t[3]),n=!0)},p:g,d(i){i&&d(e),n=!1,l()}}}function Re(t){let e,n,l;return{c(){e=f("div"),e.textContent="Invia",a(e,"class","btn btn-info")},m(i,o){_(i,e,o),n||(l=M(e,"click",t[7]),n=!0)},p:g,d(i){i&&d(e),n=!1,l()}}}function ie(t){let e,n,l;return{c(){e=f("div"),e.textContent="Indietro",a(e,"class","btn btn-primary")},m(i,o){_(i,e,o),n||(l=M(e,"click",t[4]),n=!0)},p:g,d(i){i&&d(e),n=!1,l()}}}function Be(t){let e,n,l,i,o,r,s,w,u,L,y,$,T,h,K;function z(c,v){return c[0]>1?Oe:Ee}let B=z(t),C=B(t);function J(c,v){return c[0]>2?Pe:Le}let q=J(t),E=q(t);function Y(c,v){return c[0]>3?Se:Ae}let F=Y(t),O=F(t);function Z(c,v){if(c[0]==1)return Ie;if(c[0]==2)return je;if(c[0]==3)return Te;if(c[0]==4)return Ne}let P=Z(t),p=P&&P(t);function ee(c,v){return c[0]==U?Re:Me}let H=ee(t),k=H(t),m=t[0]!=1&&ie(t);return{c(){e=f("main"),n=f("div"),l=f("div"),i=f("h1"),i.textContent="Stato ordine",o=x(),r=f("ul"),s=f("li"),s.textContent="Dettaglio",w=x(),C.c(),u=x(),E.c(),L=x(),O.c(),y=x(),$=f("div"),p&&p.c(),T=x(),h=f("div"),k.c(),K=x(),m&&m.c(),a(i,"class","text-center text-2xl font-bold"),a(s,"class","step step-primary"),a(r,"class","steps w-full"),a(l,"class","flex-none bg-base-200 p-3"),a($,"class","grow p-4 flex flex-col justify-center"),a(h,"class","bg-base-300 flex-none inset-x-0 bottom-0 p-3 flex flex-row-reverse justify-between"),a(n,"class","h-dvh flex flex-col")},m(c,v){_(c,e,v),b(e,n),b(n,l),b(l,i),b(l,o),b(l,r),b(r,s),b(r,w),C.m(r,null),b(r,u),E.m(r,null),b(r,L),O.m(r,null),b(n,y),b(n,$),p&&p.m($,null),b(n,T),b(n,h),k.m(h,null),b(h,K),m&&m.m(h,null)},p(c,[v]){B!==(B=z(c))&&(C.d(1),C=B(c),C&&(C.c(),C.m(r,u))),q!==(q=J(c))&&(E.d(1),E=q(c),E&&(E.c(),E.m(r,L))),F!==(F=Y(c))&&(O.d(1),O=F(c),O&&(O.c(),O.m(r,null))),P===(P=Z(c))&&p?p.p(c,v):(p&&p.d(1),p=P&&P(c),p&&(p.c(),p.m($,null))),H===(H=ee(c))&&k?k.p(c,v):(k.d(1),k=H(c),k&&(k.c(),k.m(h,K))),c[0]!=1?m?m.p(c,v):(m=ie(c),m.c(),m.m(h,null)):m&&(m.d(1),m=null)},i:g,o:g,d(c){c&&d(e),C.d(),E.d(),O.d(),p&&p.d(),k.d(),m&&m.d()}}}const re=1,U=4;let qe=!1;function Fe(t,e,n){let l=1;const i=()=>{n(0,l+=1),l>U&&n(0,l=U)},o=()=>{n(0,l-=1),l<re&&n(0,l=re)};let r=!1,s=!1;return[l,r,s,i,o,()=>{n(1,r=!0),n(2,s=!1)},()=>{n(2,s=!0),n(1,r=!1)},()=>{alert('Qui sarà un modal e quando utente preme "OK" uscirà codice')}]}class He extends $e{constructor(e){super(),we(this,e,Fe,Be,ae,{})}}new He({target:document.getElementById("app")});
