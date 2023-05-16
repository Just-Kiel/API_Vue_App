(function(){"use strict";var e={8445:function(e,a,t){var i=t(9963),l=t(6252);function o(e,a,t,i,o,n){const r=(0,l.up)("HeaderHome"),c=(0,l.up)("SideBar"),s=(0,l.up)("i-layout"),d=(0,l.up)("GalleryWebcams"),u=(0,l.up)("FooterHome");return(0,l.wg)(),(0,l.j4)(s,null,{default:(0,l.w5)((()=>[(0,l.Wm)(s,{vertical:""},{default:(0,l.w5)((()=>[(0,l.Wm)(r,{search:o.searchLocation,"onUpdate:search":a[0]||(a[0]=e=>o.searchLocation=e),"selected-limit":o.searchLimit,"onUpdate:selectedLimit":a[1]||(a[1]=e=>o.searchLimit=e),"checked-time":o.searchTime,"onUpdate:checkedTime":a[2]||(a[2]=e=>o.searchTime=e)},null,8,["search","selected-limit","checked-time"]),(0,l.Wm)(c,{event:o.searchLocation,search:o.searchLocation,"onUpdate:search":a[3]||(a[3]=e=>o.searchLocation=e)},null,8,["event","search"])])),_:1}),(0,l.Wm)(d,{location:o.searchLocation,limit:o.searchLimit,timeSpecific:o.searchTime},null,8,["location","limit","timeSpecific"]),(0,l.Wm)(u)])),_:1})}const n={key:0};function r(e,a,t,i,o,r){const c=(0,l.up)("CardVideo"),s=(0,l.up)("i-row"),d=(0,l.up)("i-container");return(0,l.wg)(),(0,l.j4)(d,null,{default:(0,l.w5)((()=>[(0,l.Wm)(s,{center:""},{default:(0,l.w5)((()=>[0==r.organizedWebcams.length?((0,l.wg)(),(0,l.iD)("p",n,"No webcam found for this location, maybe you set the wrong settings or maybe no data available here.")):(0,l.kq)("",!0),((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(r.organizedWebcams,(e=>((0,l.wg)(),(0,l.j4)(c,{key:e.id,id:e.id,title:e.title,webcamUrl:e.url,latestData:e.updated},null,8,["id","title","webcamUrl","latestData"])))),128))])),_:1})])),_:1})}var c=t(3577);const s=["src"],d={class:"card-title"},u={class:"card-subtitle"};function m(e,a,t,i,o,n){const r=(0,l.up)("i-card");return(0,l.wg)(),(0,l.j4)(r,{class:"card"},{image:(0,l.w5)((()=>[(0,l._)("embed",{controls:"",src:t.webcamUrl},null,8,s)])),default:(0,l.w5)((()=>[(0,l._)("h4",d,(0,c.zw)(t.title),1),(0,l._)("p",u,(0,c.zw)(t.latestData),1)])),_:1})}var p={name:"CardVideo",props:{id:{type:Int16Array},title:{type:String},webcamUrl:{type:String,default:"https://upload.wikimedia.org/wikipedia/commons/d/d1/Image_not_available.png"},latestData:{type:String,default:"No data available"}}},h=t(3744);const b=(0,h.Z)(p,[["render",m],["__scopeId","data-v-6ca7aec6"]]);var f=b,v=t(6154);const y=async function(e,a,t){const i="cCzlu11lXZ8slp53bMbXvfv48AuOy8op";let l="https://api.windy.com/api/webcams/v2/list/",o=l+`orderby=popularity/nearby=${e},${a},10/limit=${t}?show=webcams:player&key=${i}`,n={timeout:6500};try{let e=await v.Z.get(o,n);return e.data}catch(r){return console.log("ERROR",r),null}},g=function(e){return e.forEach((e=>{e.player.live.available?(e.updated="Live",e.url=e.player.live.embed):e.player.day.available?(e.updated="Day",e.url=e.player.day.embed):e.player.month.available?(e.updated="Month",e.url=e.player.month.embed):e.player.year.available?(e.updated="Year",e.url=e.player.year.embed):(e.updated="No data available",e.url="https://upload.wikimedia.org/wikipedia/commons/d/d1/Image_not_available.png")})),e},w=["Live","Day","Month","Year"],_=function(e){return e.sort((function(e,a){return w.indexOf(e.updated)<w.indexOf(a.updated)?-1:w.indexOf(e.updated)>w.indexOf(a.updated)?1:0})),e},k=async function(e){let a="https://api.api-ninjas.com/v1/",t=a+`city?name=${e}`,i={headers:{"X-Api-Key":"nose66C/EJD9WRk/hMJUnQ==XNH9yXIBC0L5o1T7"},timeout:6500};try{let e=await v.Z.get(t,i);return e.data}catch(l){return console.log("ERROR",l),null}};function W(e){let a=e+"=",t=decodeURIComponent(document.cookie),i=t.split(";");for(let l=0;l<i.length;l++){let e=i[l];while(" "==e.charAt(0))e=e.substring(1);if(0==e.indexOf(a))return e.substring(a.length,e.length)}return""}function C(e,a,t){let i=new Date;i.setTime(i.getTime()+24*t*60*60*1e3);let l="expires="+i.toUTCString();document.cookie=e+"="+a+";"+l+";path=/"}var S={name:"GalleryWebcams",components:{CardVideo:f},props:{location:{type:String},limit:{type:Number},timeSpecific:{type:Array}},computed:{organizedWebcams:function(){console.log("Organizing webcams");let e=this.timeSpecific.map((e=>e.toLowerCase()));0==this.timeSpecific.length&&(e=void 0);let a=[];return a=void 0!=e?this.allWebcams.filter((a=>{for(const t in e)if(a.player[e[t]].available)return a.updated=this.timeSpecific[t],a.url=a.player[e[t]].embed,a})):g(this.allWebcams),a=_(a),a}},watch:{location:function(e,a){console.log("Location changed from "+a+" to "+e);let t=W("location"),i=e.split("-")[1];if("GPS coordinates"==i){console.log("GPS coordinates");let a=e.split("-")[0].split(/(?:,| )+/);isNaN(a[0])||isNaN(a[1])?this.allWebcams=[]:(console.log("GPS coordinates are valid"),this.getWebcamsData(a,this.limit),C("location",[t,e],7))}else C("location",[t,e],7),this.getGeolocationFromCity(e.split("-")[0])},limit:function(e,a){console.log("Limit changed from "+a+" to "+e),this.getWebcamsData(this.location_as_gps,this.limit)}},data(){return{webcamsDisplayed:[],allWebcams:[],location_as_gps:[]}},created(){this.getWebcamsData()},methods:{async getWebcamsData(e,a){void 0==e&&(e=[void 0,void 0]),this.allWebcams=await y(e[0],e[1],a),this.allWebcams=this.allWebcams.result.webcams},async getGeolocationFromCity(e){try{let a=await k(e);a=a[0].latitude+","+a[0].longitude,this.location_as_gps=a.split(/(?:,| )+/),this.getWebcamsData(this.location_as_gps,this.limit)}catch(a){console.log(a),this.allWebcams=[]}}}};const O=(0,h.Z)(S,[["render",r],["__scopeId","data-v-24a48f64"]]);var L=O;const D=e=>((0,l.dD)("data-v-2ada393e"),e=e(),(0,l.Cn)(),e),T=D((()=>(0,l._)("h1",null,"Webcams worldwide",-1))),V=D((()=>(0,l._)("p",null,"All webcams of the world available.",-1))),U={id:"inline"},j=D((()=>(0,l._)("span",null,"Search by",-1))),x={id:"inline"};function G(e,a,t,i,o,n){const r=(0,l.up)("i-select"),s=(0,l.up)("i-icon"),d=(0,l.up)("i-button"),u=(0,l.up)("i-input"),m=(0,l.up)("i-checkbox"),p=(0,l.up)("i-checkbox-group"),h=(0,l.up)("i-header");return(0,l.wg)(),(0,l.j4)(h,{id:"cover-header",size:"sm",class:"_text-align:center"},{default:(0,l.w5)((()=>[T,V,(0,l._)("div",U,[(0,l.Wm)(r,{modelValue:o.searchOption,"onUpdate:modelValue":a[0]||(a[0]=e=>o.searchOption=e),options:o.searchOptions,size:"sm"},{prepend:(0,l.w5)((()=>[j])),_:1},8,["modelValue","options"]),"GPS coordinates"==o.searchOption.label?((0,l.wg)(),(0,l.j4)(u,{key:0,modelValue:o.search,"onUpdate:modelValue":a[2]||(a[2]=e=>o.search=e),placeholder:"Type GPS decimal coordinates.."},{append:(0,l.w5)((()=>[(0,l.Wm)(d,{onClick:a[1]||(a[1]=e=>this.$emit("update:search",this.search+"-"+this.searchOption.label)),color:"primary"},{default:(0,l.w5)((()=>[(0,l.Wm)(s,{name:"ink-search"})])),_:1})])),_:1},8,["modelValue"])):"City name"==o.searchOption.label?((0,l.wg)(),(0,l.j4)(u,{key:1,modelValue:o.search,"onUpdate:modelValue":a[4]||(a[4]=e=>o.search=e),placeholder:"Type city name.."},{append:(0,l.w5)((()=>[(0,l.Wm)(d,{onClick:a[3]||(a[3]=e=>this.$emit("update:search",this.search+"-"+this.searchOption.label)),color:"primary"},{default:(0,l.w5)((()=>[(0,l.Wm)(s,{name:"ink-search"})])),_:1})])),_:1},8,["modelValue"])):(0,l.kq)("",!0)]),(0,l._)("div",x,[(0,l.Wm)(r,{id:"selectNbCameras",onClick:a[5]||(a[5]=a=>e.$emit("update:selectedLimit",this.selectedLimit.value)),modelValue:o.selectedLimit,"onUpdate:modelValue":a[6]||(a[6]=e=>o.selectedLimit=e),options:o.optionsNbCameras,label:"label",placeholder:"Choose number of max cameras.."},null,8,["modelValue","options"]),(0,l.Wm)(p,{id:"inline",modelValue:o.checkedTime,"onUpdate:modelValue":a[7]||(a[7]=e=>o.checkedTime=e),onChange:a[8]||(a[8]=a=>e.$emit("update:checkedTime",this.checkedTime))},{default:(0,l.w5)((()=>[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(o.optionsTimeCamera,(e=>((0,l.wg)(),(0,l.j4)(m,{key:e.value,value:e.label},{default:(0,l.w5)((()=>[(0,l.Uk)((0,c.zw)(e.label),1)])),_:2},1032,["value"])))),128))])),_:1},8,["modelValue"])])])),_:1})}var z={name:"HeaderHome",emits:["update:search","update:selectedLimit","update:checkedTime"],data(){return{searchOptions:[{value:"GPS coordinates",label:"GPS coordinates"},{value:"City name",label:"City name"}],searchOption:{value:"GPS coordinates",label:"GPS coordinates"},search:"",selectedLimit:null,optionsNbCameras:[{value:"10",label:"10 cameras"},{value:"20",label:"20 cameras"},{value:"30",label:"30 cameras"},{value:"40",label:"40 cameras"},{value:"50",label:"50 cameras"},{value:"60",label:"60 cameras"},{value:"70",label:"70 cameras"},{value:"80",label:"80 cameras"},{value:"90",label:"90 cameras"},{value:"100",label:"100 cameras"}],optionsTimeCamera:[{value:"day",label:"Live"},{value:1,label:"Day"},{value:2,label:"Month"},{value:3,label:"Year"}],checkedTime:[]}}};const H=(0,h.Z)(z,[["render",G],["__scopeId","data-v-2ada393e"]]);var N=H;const P=e=>((0,l.dD)("data-v-c1cd602a"),e=e(),(0,l.Cn)(),e),I=P((()=>(0,l._)("div",{class:"footer"},[(0,l._)("div",{class:"footer__left"},[(0,l._)("p",null,"© 2023 - Webcams worldwide")]),(0,l._)("div",{class:"footer__right"},[(0,l._)("p",null,[(0,l.Uk)("By "),(0,l._)("a",{href:"https://github.com/Just-Kiel"},"Aurore Lafaurie"),(0,l.Uk)(" - IMAC 2")])])],-1))),$=[I];function A(e,a,t,i,o,n){return(0,l.wg)(),(0,l.iD)("footer",null,$)}var Z={name:"FooterHome"};const F=(0,h.Z)(Z,[["render",A],["__scopeId","data-v-c1cd602a"]]);var M=F;const R=e=>((0,l.dD)("data-v-1c833671"),e=e(),(0,l.Cn)(),e),Y=R((()=>(0,l._)("h5",null,"Last searches made by you",-1)));function B(e,a,t,i,o,n){const r=(0,l.up)("i-nav-item"),s=(0,l.up)("i-nav"),d=(0,l.up)("i-sidebar");return(0,l.wg)(),(0,l.j4)(d,{modelValue:o.open,"onUpdate:modelValue":a[0]||(a[0]=e=>o.open=e),size:"sm"},{default:(0,l.w5)((()=>[Y,(0,l.Wm)(s,{vertical:""},{default:(0,l.w5)((()=>[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(n.lastSearchesFiltered,(e=>((0,l.wg)(),(0,l.j4)(r,{key:e.id,onClick:a=>this.$emit("update:search",e)},{default:(0,l.w5)((()=>[(0,l.Uk)((0,c.zw)(e.split("-")[0])+" - "+(0,c.zw)(e.split("-")[1]),1)])),_:2},1032,["onClick"])))),128))])),_:1})])),_:1},8,["modelValue"])}var E={name:"SideBar",data(){return{open:!0,lastSearches:W("location").split(",")||[]}},props:{event:{default:[]}},watch:{event:function(){console.log("New search made"),this.lastSearches=W("location").split(",")}},computed:{lastSearchesFiltered:function(){let e=this.lastSearches;return e.shift(),e.filter(((a,t)=>e.indexOf(a)===t))}}};const K=(0,h.Z)(E,[["render",B],["__scopeId","data-v-1c833671"]]);var X=K,J={name:"App",components:{GalleryWebcams:L,HeaderHome:N,FooterHome:M,SideBar:X},data(){return{searchLocation:"",searchLimit:10,searchTime:[]}}};const q=(0,h.Z)(J,[["render",o]]);var Q=q,ee=t(730);const ae=(0,i.ri)(Q);ae.use(ee.O$,{components:ee.wx}),ae.mount("#app")}},a={};function t(i){var l=a[i];if(void 0!==l)return l.exports;var o=a[i]={exports:{}};return e[i](o,o.exports,t),o.exports}t.m=e,function(){var e=[];t.O=function(a,i,l,o){if(!i){var n=1/0;for(d=0;d<e.length;d++){i=e[d][0],l=e[d][1],o=e[d][2];for(var r=!0,c=0;c<i.length;c++)(!1&o||n>=o)&&Object.keys(t.O).every((function(e){return t.O[e](i[c])}))?i.splice(c--,1):(r=!1,o<n&&(n=o));if(r){e.splice(d--,1);var s=l();void 0!==s&&(a=s)}}return a}o=o||0;for(var d=e.length;d>0&&e[d-1][2]>o;d--)e[d]=e[d-1];e[d]=[i,l,o]}}(),function(){t.d=function(e,a){for(var i in a)t.o(a,i)&&!t.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:a[i]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={143:0};t.O.j=function(a){return 0===e[a]};var a=function(a,i){var l,o,n=i[0],r=i[1],c=i[2],s=0;if(n.some((function(a){return 0!==e[a]}))){for(l in r)t.o(r,l)&&(t.m[l]=r[l]);if(c)var d=c(t)}for(a&&a(i);s<n.length;s++)o=n[s],t.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return t.O(d)},i=self["webpackChunkCameraWorlwideVue"]=self["webpackChunkCameraWorlwideVue"]||[];i.forEach(a.bind(null,0)),i.push=a.bind(null,i.push.bind(i))}();var i=t.O(void 0,[998],(function(){return t(8445)}));i=t.O(i)})();
//# sourceMappingURL=app.134f2e98.js.map