(function(e){function t(t){for(var a,c,s=t[0],l=t[1],i=t[2],d=0,u=[];d<s.length;d++)c=s[d],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&u.push(o[c][0]),o[c]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);h&&h(t);while(u.length)u.shift()();return r.push.apply(r,i||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],a=!0,c=1;c<n.length;c++){var s=n[c];0!==o[s]&&(a=!1)}a&&(r.splice(t--,1),e=l(l.s=n[0]))}return e}var a={},c={app:0},o={app:0},r=[];function s(e){return l.p+"js/"+({}[e]||e)+"."+{"chunk-62b22706":"2c713333","chunk-060efea4":"5c2f295b","chunk-10a82be6":"bafc238b","chunk-42536ea2":"3e835806","chunk-46f2a456":"748181d7","chunk-4dfaf42a":"73e71176","chunk-8154aa2c":"cdcec0b0","chunk-fd45f9fa":"a3782933"}[e]+".js"}function l(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(e){var t=[],n={"chunk-060efea4":1,"chunk-10a82be6":1,"chunk-42536ea2":1,"chunk-46f2a456":1,"chunk-4dfaf42a":1,"chunk-8154aa2c":1,"chunk-fd45f9fa":1};c[e]?t.push(c[e]):0!==c[e]&&n[e]&&t.push(c[e]=new Promise((function(t,n){for(var a="css/"+({}[e]||e)+"."+{"chunk-62b22706":"31d6cfe0","chunk-060efea4":"f93b6ed9","chunk-10a82be6":"de12e77d","chunk-42536ea2":"562d4c40","chunk-46f2a456":"52357d2f","chunk-4dfaf42a":"9028a0b6","chunk-8154aa2c":"0c89c901","chunk-fd45f9fa":"cde9d103"}[e]+".css",o=l.p+a,r=document.getElementsByTagName("link"),s=0;s<r.length;s++){var i=r[s],d=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(d===a||d===o))return t()}var u=document.getElementsByTagName("style");for(s=0;s<u.length;s++){i=u[s],d=i.getAttribute("data-href");if(d===a||d===o)return t()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=t,h.onerror=function(t){var a=t&&t.target&&t.target.src||o,r=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=a,delete c[e],h.parentNode.removeChild(h),n(r)},h.href=o;var b=document.getElementsByTagName("head")[0];b.appendChild(h)})).then((function(){c[e]=0})));var a=o[e];if(0!==a)if(a)t.push(a[2]);else{var r=new Promise((function(t,n){a=o[e]=[t,n]}));t.push(a[2]=r);var i,d=document.createElement("script");d.charset="utf-8",d.timeout=120,l.nc&&d.setAttribute("nonce",l.nc),d.src=s(e);var u=new Error;i=function(t){d.onerror=d.onload=null,clearTimeout(h);var n=o[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),c=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+a+": "+c+")",u.name="ChunkLoadError",u.type=a,u.request=c,n[1](u)}o[e]=void 0}};var h=setTimeout((function(){i({type:"timeout",target:d})}),12e4);d.onerror=d.onload=i,document.head.appendChild(d)}return Promise.all(t)},l.m=e,l.c=a,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)l.d(n,a,function(t){return e[t]}.bind(null,a));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="",l.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],d=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var h=d;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);var a=n("7a23");const c={class:"lg:grid lg:grid-cols-6"};function o(e,t,n,o,r,s){const l=Object(a["x"])("Sidebar"),i=Object(a["x"])("router-view");return Object(a["q"])(),Object(a["d"])("div",c,[Object(a["h"])(l,{class:"h-full"}),Object(a["h"])(i,{class:"col-span-5"})])}const r=e=>(Object(a["t"])("data-v-e294e518"),e=e(),Object(a["r"])(),e),s={class:"sidebar md:inline-block hidden pt-10 px-12"},l={class:"brand flex py-4"},i={class:"text-3xl font-bold"},d=Object(a["g"])(" Go"),u=r(()=>Object(a["e"])("span",{class:"text-red-600"},"Flix",-1)),h=r(()=>Object(a["e"])("div",{class:"w-full h-0.5 mt-5 hr"},null,-1)),b={class:"links py-8"},f=r(()=>Object(a["e"])("h2",{class:"font-semibold text-lg pb-3"},"Movies",-1)),p={class:"link py-2"},v=Object(a["g"])(" Trending Movie "),m={class:"link py-2"},j=Object(a["g"])(" Top Rated Movie "),O={class:"link py-2"},g=Object(a["g"])(" Upcoming Movie "),x=r(()=>Object(a["e"])("div",{class:"w-full h-0.5 mt-2 hr"},null,-1)),y={class:"search"},k=r(()=>Object(a["e"])("h2",{class:"font-semibold text-lg pb-3 mt-5"},"Menu",-1)),w={class:"link py-1"},M=Object(a["g"])(" Search Movie "),_={class:"link py-2"},P=Object(a["g"])(" Category "),S={class:"fixed top-0 z-50 min-h-screen w-full md:hidden","data-dev-hint":"container"},T=r(()=>Object(a["e"])("input",{type:"checkbox",id:"menu-open",class:"hidden"},null,-1)),C={class:"bg-secondary text-gray-100 flex justify-between md:hidden","data-dev-hint":"mobile menu bar"},D={class:"brand flex"},E={class:"text-3xl font-bold py-4 px-2"},A=Object(a["g"])(" Go"),L=r(()=>Object(a["e"])("span",{class:"text-red-600"},"Flix",-1)),B=Object(a["f"])('<label for="menu-open" id="mobile-menu-button" class="m-2 p-2 focus:outline-none hover:text-white hover:bg-gray-700 rounded-md" data-v-e294e518><svg id="menu-open-icon" class="h-6 w-6 transition duration-200 ease-in-out" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-v-e294e518><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" data-v-e294e518></path></svg><svg id="menu-close-icon" class="h-6 w-6 transition duration-200 ease-in-out" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-v-e294e518><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" data-v-e294e518></path></svg></label>',1),N={id:"sidebar",class:"bg-secondary text-gray-100 md:w-64 w-3/4 space-y-6 pt-6 px-0 absolute inset-y-0 left-0 transform md:relative md:translate-x-0 transition duration-200 ease-in-out md:flex md:flex-col md:justify-between overflow-y-auto","data-dev-hint":"sidebar; px-0 for frameless; px-2 for visually inset the navigation"},q={class:"flex flex-col space-y-6 py-4 px-5","data-dev-hint":"optional div for having an extra footer navigation"},F={class:"brand flex"},U={class:"text-3xl font-bold"},G=Object(a["g"])(" Go"),R=r(()=>Object(a["e"])("span",{class:"text-red-600"},"Flix",-1)),I=r(()=>Object(a["e"])("div",{class:"w-full h-0.5 mt-2 hr"},null,-1)),J={class:"links py-8"},z=r(()=>Object(a["e"])("h2",{class:"font-semibold text-lg pb-3"},"Movies",-1)),H={class:"link py-2"},K=Object(a["g"])(" Trending Movie "),Q={class:"link py-2"},V=Object(a["g"])(" Top Rated Movie "),W={class:"link py-2"},X=Object(a["g"])(" Upcoming Movie "),Y=r(()=>Object(a["e"])("div",{class:"w-full h-0.5 mt-2 hr"},null,-1)),Z={class:"search"},$=r(()=>Object(a["e"])("h2",{class:"font-semibold text-lg pb-3 mt-1"},"Menu",-1)),ee={class:"link py-1"},te=Object(a["g"])(" Search Movie "),ne={class:"link py-2"},ae=Object(a["g"])(" Category ");function ce(e,t){const n=Object(a["x"])("font-awesome-icon"),c=Object(a["x"])("router-link");return Object(a["q"])(),Object(a["d"])(a["a"],null,[Object(a["e"])("div",s,[Object(a["e"])("div",l,[Object(a["e"])("h1",i,[Object(a["h"])(n,{class:"text-lg pr-1",icon:"fa-solid fa-clapperboard"}),d,u])]),h,Object(a["e"])("div",b,[f,Object(a["e"])("div",p,[Object(a["h"])(c,{to:"/",class:"text-lg text-gray-300 hover:text-white"},{default:Object(a["D"])(()=>[Object(a["h"])(n,{icon:"fa-solid fa-film",class:"text-xs mr-1"}),v]),_:1})]),Object(a["e"])("div",m,[Object(a["h"])(c,{to:"/top-rated",class:"text-sm text-gray-300 hover:text-white"},{default:Object(a["D"])(()=>[Object(a["h"])(n,{icon:"fa-solid fa-arrow-trend-up",class:"text-xs mr-1"}),j]),_:1})]),Object(a["e"])("div",O,[Object(a["h"])(c,{to:"/upcoming",class:"text-sm text-gray-300 hover:text-white"},{default:Object(a["D"])(()=>[Object(a["h"])(n,{icon:"fa-solid fa-ticket",class:"text-xs mr-1"}),g]),_:1})])]),x,Object(a["e"])("div",y,[k,Object(a["e"])("div",w,[Object(a["h"])(c,{to:"/search",class:"text-sm text-gray-300 hover:text-white"},{default:Object(a["D"])(()=>[Object(a["h"])(n,{icon:"fa-solid fa-search",class:"text-xs mr-1"}),M]),_:1})]),Object(a["e"])("div",_,[Object(a["h"])(c,{to:"/category",class:"text-sm text-gray-300 hover:text-white"},{default:Object(a["D"])(()=>[Object(a["h"])(n,{icon:"fa-solid fa-list",class:"text-xs mr-1"}),P]),_:1})])])]),Object(a["e"])("div",S,[T,Object(a["e"])("header",C,[Object(a["e"])("div",D,[Object(a["e"])("h1",E,[Object(a["h"])(n,{class:"text-lg pr-1",icon:"fa-solid fa-clapperboard"}),A,L])]),B]),Object(a["e"])("aside",N,[Object(a["e"])("div",q,[Object(a["e"])("div",F,[Object(a["e"])("h1",U,[Object(a["h"])(n,{class:"text-lg pr-1",icon:"fa-solid fa-clapperboard"}),G,R])]),I,Object(a["e"])("div",J,[z,Object(a["e"])("div",H,[Object(a["h"])(c,{to:"/",class:"text-lg text-gray-300 hover:text-white"},{default:Object(a["D"])(()=>[Object(a["h"])(n,{icon:"fa-solid fa-film",class:"text-sm mr-1"}),K]),_:1})]),Object(a["e"])("div",Q,[Object(a["h"])(c,{to:"/top-rated",class:"text-lg text-gray-300 hover:text-white"},{default:Object(a["D"])(()=>[Object(a["h"])(n,{icon:"fa-solid fa-arrow-trend-up",class:"text-sm mr-1"}),V]),_:1})]),Object(a["e"])("div",W,[Object(a["h"])(c,{to:"/upcoming",class:"text-lg text-gray-300 hover:text-white"},{default:Object(a["D"])(()=>[Object(a["h"])(n,{icon:"fa-solid fa-ticket",class:"text-sm mr-1"}),X]),_:1})])]),Y,Object(a["e"])("div",Z,[$,Object(a["e"])("div",ee,[Object(a["h"])(c,{to:"/search",class:"text-lg text-gray-300 hover:text-white"},{default:Object(a["D"])(()=>[Object(a["h"])(n,{icon:"fa-solid fa-search",class:"text-xs mr-1"}),te]),_:1})]),Object(a["e"])("div",ne,[Object(a["h"])(c,{to:"/category",class:"text-lg text-gray-300 hover:text-white"},{default:Object(a["D"])(()=>[Object(a["h"])(n,{icon:"fa-solid fa-list",class:"text-xs mr-1"}),ae]),_:1})])])])])])],64)}n("8204");var oe=n("6b0d"),re=n.n(oe);const se={},le=re()(se,[["render",ce],["__scopeId","data-v-e294e518"]]);var ie=le,de={components:{Sidebar:ie}};const ue=re()(de,[["render",o]]);var he=ue,be=n("6c02");const fe=[{path:"/",name:"Trending Movie",component:()=>Promise.all([n.e("chunk-62b22706"),n.e("chunk-060efea4")]).then(n.bind(null,"5041"))},{path:"/top-rated",name:"Top Rated Movie",component:()=>Promise.all([n.e("chunk-62b22706"),n.e("chunk-46f2a456")]).then(n.bind(null,"3642"))},{path:"/upcoming",name:"Upcoming Movie",component:()=>Promise.all([n.e("chunk-62b22706"),n.e("chunk-10a82be6")]).then(n.bind(null,"1437"))},{path:"/search",name:"Search Movie",component:()=>Promise.all([n.e("chunk-62b22706"),n.e("chunk-8154aa2c")]).then(n.bind(null,"8fd0"))},{path:"/category",name:"Category Movie",component:()=>Promise.all([n.e("chunk-62b22706"),n.e("chunk-fd45f9fa")]).then(n.bind(null,"fb45"))},{path:"/hasil-genre/:id",name:"genres",component:()=>Promise.all([n.e("chunk-62b22706"),n.e("chunk-42536ea2")]).then(n.bind(null,"e6ed"))},{path:"/movie/:id",name:"Movie",component:()=>Promise.all([n.e("chunk-62b22706"),n.e("chunk-4dfaf42a")]).then(n.bind(null,"ef84"))}],pe=Object(be["a"])({history:Object(be["b"])(""),routes:fe});var ve=pe,me=(n("a766"),n("ecee")),je=n("ad3d"),Oe=n("c074");me["c"].add(Oe["c"],Oe["d"],Oe["a"],Oe["h"],Oe["g"],Oe["b"],Oe["f"],Oe["e"]),Object(a["c"])(he).component("font-awesome-icon",je["a"]).use(ve).mount("#app")},8204:function(e,t,n){"use strict";n("ef21")},a766:function(e,t,n){},ef21:function(e,t,n){}});
//# sourceMappingURL=app.089967b3.js.map