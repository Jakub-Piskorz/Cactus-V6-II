!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);const r=(e,t)=>e||t?!!(e&&window.innerWidth<e||t&&window.innerHeight<t):null,o=(e,t,n,r)=>{for(let t of e)t.style.color=n;e[t].style.color=r},l=(e,t)=>t===r(900,810)?t:(document.querySelector("#container").style.marginTop=0,document.querySelector("#main").scrollTo(0,0),o(e,0,"black","#d7000f"),!t),c=(()=>{let e=!1;return(t,n,r=900)=>{if(e)return 0;e=!0,t.style.marginTop=`-${n}px`,setTimeout(()=>(e=!1,1),r)}})(),i=(e,t)=>{if(void 0===e[t]||"number"!=typeof t)return"error";let n=0;for(let r=0;r<t;r++)n+=e[r].clientHeight;return n},d=document.querySelectorAll(".section"),u=(document.querySelector("#main"),document.querySelector("#container")),a=document.querySelectorAll("nav span a");let f=0,s=!1;o(a,0,"black","#d7000f"),s=l(a,s),a[0].addEventListener("click",()=>{c(u,i(d,0)),o(a,0,"black","#d7000f"),f=0}),a[1].addEventListener("click",()=>{c(u,i(d,1)),o(a,1,"black","#d7000f"),f=1}),a[2].addEventListener("click",()=>{c(u,i(d,2)),o(a,2,"black","#d7000f"),f=2}),a[3].addEventListener("click",()=>{c(u,i(d,3)),o(a,3,"black","#d7000f"),f=3}),a[4].addEventListener("click",()=>{c(u,i(d,4)),o(a,4,"black","#d7000f"),f=4}),window.addEventListener("resize",()=>{s=l(a,s),f=0}),u.addEventListener("wheel",e=>{f=((e,t,n,o,l=900)=>r(900,810)?o:e.deltaY>=2&&o<n.length-1?0===c(t,i(n,o+1),l)?(console.log("on cooldown?"),o):(console.log(`currentSection: ${o+1}, event.deltaY: ${e.deltaY}, sections: ${n}`),o+1):e.deltaY<=-2&&o>0?0===c(t,i(n,o-1),l)?(console.log("on cooldown?"),o):(console.log(`currentSection: ${o-1}, event.deltaY: ${e.deltaY}, sections: ${n}`),o-1):o)(e,u,d,f),o(a,f,"black","#d7000f")})}]);