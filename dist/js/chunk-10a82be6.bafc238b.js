(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-10a82be6"],{1437:function(t,e,c){"use strict";c.r(e);var s=c("7a23");const a=t=>(Object(s["t"])("data-v-79d2da56"),t=t(),Object(s["r"])(),t),l={class:"home px-10 lg:px-20 mt-10"},i=a(()=>Object(s["e"])("h1",{class:"text-4xl pb-6 font-bold lg:mt-0 mt-20"},"Upcoming Movies",-1)),o={class:"lg:grid lg:grid-cols-5 lg:gap-3 block"},r={class:"img"},b={class:"rating absolute bg-red-500 pt-2 pl-2 pr-3 pb-3 rounded-br-3xl"},d={class:"text-sm font-semibold"},n=["src"],u={class:"pr-12 pt-2 transition"};function p(t,e,c,a,p,g){const j=Object(s["x"])("router-link");return Object(s["q"])(),Object(s["d"])("div",l,[i,Object(s["e"])("div",o,[(Object(s["q"])(!0),Object(s["d"])(s["a"],null,Object(s["w"])(p.results,t=>(Object(s["q"])(),Object(s["d"])("div",{class:"card p-2 mb-6 bg-card",key:t.id},[Object(s["e"])("div",r,[Object(s["e"])("div",b,[Object(s["e"])("h4",d,Object(s["z"])(t.vote_average),1)]),Object(s["e"])("img",{class:"w-full",src:"https://image.tmdb.org/t/p/w500/"+t.poster_path},null,8,n)]),Object(s["e"])("div",u,[Object(s["h"])(j,{class:"hover:text-red-500 text-lg lg:text-sm font-medium",to:"/movie/"+t.id},{default:Object(s["D"])(()=>[Object(s["g"])(Object(s["z"])(t.title),1)]),_:2},1032,["to"])])]))),128))])])}var g=c("bc3a"),j=c.n(g),O={data(){return{results:[]}},mounted(){j.a.get("https://api.themoviedb.org/3/movie/upcoming",{params:{api_key:"747ee4812cc4ea97610aaa379219c8e8",adult:"false",certification_country:"US","certification.lte":"PG-13"}}).then(t=>{this.results=t.data.results}),console.log(this.results)}},m=(c("c060"),c("6b0d")),v=c.n(m);const h=v()(O,[["render",p],["__scopeId","data-v-79d2da56"]]);e["default"]=h},"34b3":function(t,e,c){},c060:function(t,e,c){"use strict";c("34b3")}}]);
//# sourceMappingURL=chunk-10a82be6.bafc238b.js.map