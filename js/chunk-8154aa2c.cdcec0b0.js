(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8154aa2c"],{"8fd0":function(e,t,c){"use strict";c.r(t);var a=c("7a23");const s=e=>(Object(a["t"])("data-v-58d480b3"),e=e(),Object(a["r"])(),e),o={class:"search pt-20 px-10 lg:px-20"},l=s(()=>Object(a["e"])("h1",{class:"text-3xl font-bold"},"Search Movies",-1)),r={class:"lg:grid lg:grid-cols-5 lg:gap-3 block py-8"},i={class:"img"},d={class:"rating absolute bg-red-500 pt-2 pl-2 pr-3 pb-3 rounded-br-3xl"},n={class:"text-sm font-semibold"},b=["src"],p={class:"pr-12 pt-2 transition"};function u(e,t,c,s,u,h){const v=Object(a["x"])("router-link");return Object(a["q"])(),Object(a["d"])("div",o,[l,Object(a["E"])(Object(a["e"])("input",{class:"w-full mt-8 px-6 py-4 h-16 rounded-full shadow-xl",type:"text",placeholder:"Search Movie...",onKeyup:t[0]||(t[0]=Object(a["F"])((...e)=>h.searchMovie&&h.searchMovie(...e),["prevent"])),"onUpdate:modelValue":t[1]||(t[1]=e=>u.searchInput=e)},null,544),[[a["B"],u.searchInput]]),Object(a["e"])("div",r,[(Object(a["q"])(!0),Object(a["d"])(a["a"],null,Object(a["w"])(u.movies,e=>(Object(a["q"])(),Object(a["d"])("div",{class:"card p-2 mb-6 bg-card",key:e.id},[Object(a["e"])("div",i,[Object(a["e"])("div",d,[Object(a["e"])("h4",n,Object(a["z"])(e.vote_average),1)]),Object(a["e"])("img",{class:"w-full",src:"https://image.tmdb.org/t/p/w500/"+e.poster_path},null,8,b)]),Object(a["e"])("div",p,[Object(a["h"])(v,{class:"hover:text-red-500 text-sm font-medium",to:"/movie/"+e.id},{default:Object(a["D"])(()=>[Object(a["g"])(Object(a["z"])(e.title),1)]),_:2},1032,["to"])])]))),128))])])}var h=c("bc3a"),v=c.n(h),j={data(){return{searchInput:"",searchResult:null,movies:[]}},methods:{async searchMovie(){await v.a.get("https://api.themoviedb.org/3/search/movie?query="+this.searchInput,{params:{api_key:"747ee4812cc4ea97610aaa379219c8e8",adult:"false",certification_country:"US","certification.lte":"PG-13"}}).then(e=>{this.movies=e.data.results,console.log(this.movies)}).catch(e=>{console.log(e)})}}},O=(c("dc51"),c("6b0d")),m=c.n(O);const g=m()(j,[["render",u],["__scopeId","data-v-58d480b3"]]);t["default"]=g},"9bd1":function(e,t,c){},dc51:function(e,t,c){"use strict";c("9bd1")}}]);
//# sourceMappingURL=chunk-8154aa2c.cdcec0b0.js.map