(function(){"use strict";var t={2024:function(t,a,e){var s=e(144),r=e(3726),n=e(3102),l=function(){var t=this,a=t._self._c;return a(r.Z,[a(n.Z,[a("router-view")],1)],1)},o=[],i={name:"App",data:()=>({})},c=i,u=e(1001),m=(0,u.Z)(c,l,o,!1,null,null,null),f=m.exports,d=e(8345),g=e(1819),p=e(2732),h=e(3845),Z=function(){var t=this,a=t._self._c;return a(r.Z,{style:{background:t.$vuetify.theme.themes.dark.background}},[a("SideBar"),a("RightSideBar"),a(g.Z,[a("Navbar"),a("Desserts"),a(p.Z,{staticClass:"mt-n4",attrs:{flat:"",color:"transparent"}},[a(h.qW,{staticClass:"ml-4"},[a("strong",[t._v("Day")]),a("span",{staticClass:"grey--text ml-2"},[t._v("Menu")])])],1),a("Menu"),a(p.Z,{staticClass:"mt-n4",attrs:{flat:"",color:"transparent"}},[a(h.qW,{staticClass:"ml-4"},[a("strong",[t._v("Ingredients")]),a("span",{staticClass:"grey--text ml-2"},[t._v("Food")])])],1),a("Food"),a("Comments")],1)],1)},v=[],x=e(3381),b=e(9088),C=e(7970),_=e(1667),k=e(352),y=e(3560),w=e(2443),j=function(){var t=this,a=t._self._c;return a("nav",[a(w.Z,{attrs:{dark:"",app:"",color:"#ffcb5e",width:"100"}},[a("div",{staticClass:"text-center mt-5"},[a(b.Z,{staticClass:"mt-4",attrs:{color:"#4d2c00",large:""}},[t._v("fas fa-bars")])],1),a(C.Z,{staticClass:"mt-5",attrs:{flat:""}},[a(k.Z,{attrs:{color:"4d2c00"},model:{value:t.selectItem,callback:function(a){t.selectItem=a},expression:"selectItem"}},t._l(t.items,(function(e,s){return a(_.Z,{key:s,staticClass:"ml-2 my-3",attrs:{"active-class":"border",ripple:!1}},[a("b"),a("b"),a(y.Z,[a(b.Z,{attrs:{color:"#4d2c00"},domProps:{textContent:t._s(e.icon)}})],1)],1)})),1)],1),a("div",{staticStyle:{position:"absolute",bottom:"20px","margin-left":"auto","margin-right":"auto",left:"0",right:"0","text-align":"center"}},[a(x.Z,{attrs:{text:""}},[a(b.Z,{attrs:{color:"#4d2c00"}},[t._v("fas fa-sign-out-alt")])],1)],1)],1)],1)},P=[],S={name:"SideBar",data:()=>({selectItem:0,drawer:null,items:[{icon:"fas fa-apple-alt",text:"Discover"},{icon:"fas fa-carrot",text:"Stream"},{icon:"fas fa-leaf",text:"Community"},{icon:"fas fa-lemon",text:"Statistics"},{icon:"fas fa-pepper-hot",text:"Discover"},{icon:"fas fa-seedling",text:"Discover"}]})},O=S,B=(0,u.Z)(O,j,P,!1,null,null,null),D=B.exports,F=e(9396),T=e(1958),A=e(3816),E=e(7024),N=e(1584),V=e(4555),M=e(5928),q=e(7894),I=e(4829),K=e(2515),W=function(){var t=this,a=t._self._c;return a(w.Z,{attrs:{app:"",color:"fff",right:"",width:"290"}},[a(p.Z,{attrs:{color:"transparent",flat:""}},[a("h4",[t._v("Today's menu")]),a(K.Z),a(T.Z,{attrs:{bordered:"",bottom:"",color:"red",dot:"","offset-x":"8","offset-y":"30"}},[a(F.Z,{staticClass:"ml-n3",attrs:{size:"30",title:""}},[a(N.Z,{attrs:{src:"https://cdn.vuetifyjs.com/images/lists/1.jpg"}})],1)],1)],1),a(A.Z,{staticClass:"d-flex align-center rounded-lg mx-2 borderme",attrs:{color:"white",flat:"",dark:"",height:"210"},on:{click:t.toggle}},[a(q.Z,[a(E.Z,{attrs:{cols:"12",sm:"12"}},[a(_.Z,{staticClass:"text-center",attrs:{"three-line":""}},[a(V.km,[a("div",{attrs:{align:"center",justify:"center"}},[a(N.Z,{attrs:{src:"1new.jpg","max-height":"280","max-width":"200"}})],1),a(p.Z,{staticClass:"mt-n4",attrs:{flat:"",color:"transparent"}},[a(M.Z,{attrs:{"background-color":"orange lighten-3",color:"orange","x-small":""},model:{value:t.rating,callback:function(a){t.rating=a},expression:"rating"}}),a(K.Z),a("h6",{staticClass:"black--text"},[t._v("€17")])],1)],1)],1)],1)],1)],1),a("h6",{staticClass:"black--text ml-4 mt-6 mb-4"},[t._v("Person")]),a(q.Z,[a(E.Z,{attrs:{cols:"12",sm:"8"}},[a(I.Z,{staticClass:"mt-10",attrs:{"thumb-color":t.ex3.color,"thumb-label":"always"},model:{value:t.ex3.val,callback:function(a){t.$set(t.ex3,"val",a)},expression:"ex3.val"}})],1),a(E.Z,{attrs:{cols:"12",sm:"4"}},[a(N.Z,{attrs:{src:"2new.jpg"}})],1)],1),a("h4",{staticClass:"ml-4 mt-n6"},[t._v("Summary")]),a(q.Z,{staticClass:"mt-5"},[a(E.Z,{attrs:{cols:"12",sm:"3"}},[a(A.Z,{staticClass:"rounded-xl ml-2",attrs:{flat:""}},[a(N.Z,{attrs:{src:"3new.jpg","max-height":"100%","max-width":"100%",contain:""}})],1)],1),a(E.Z,{attrs:{cols:"12",sm:"7"}},[a("h4",{staticClass:"mt-1"},[t._v("1X Best Chocolate")])]),a(E.Z,{attrs:{cols:"12",sm:"2"}},[a("h6",{staticClass:"mt-2 grey--text"},[t._v("€15")])]),a(E.Z,{attrs:{cols:"12",sm:"3"}},[a(A.Z,{staticClass:"rounded-xl ml-2 borderme d-flex align-center py-1",attrs:{flat:"",color:"white"}},[a(b.Z,{staticClass:"ml-3",attrs:{small:""}},[t._v("fas fa-truck")])],1)],1),a(E.Z,{attrs:{cols:"12",sm:"7"}},[a("h4",{staticClass:"mt-1"},[t._v("Delivery")])]),a(E.Z,{attrs:{cols:"12",sm:"2"}},[a("h6",{staticClass:"mt-2 grey--text"},[t._v("€00")])]),a(E.Z,{attrs:{cols:"12",sm:"3"}}),a(E.Z,{attrs:{cols:"12",sm:"7"}},[a("h4",{staticClass:"mt-1"},[t._v("Total")])]),a(E.Z,{attrs:{cols:"12",sm:"2"}},[a("h6",{staticClass:"mt-2 grey--text ml-n4"},[t._v("€12,99")])])],1),a(p.Z,{staticClass:"mt-2",attrs:{flat:"",color:"transparent"}},[a("h4",{attrs:{color:"black-text"}},[t._v("Person "),a("strong",[t._v("20")])]),a(K.Z),a(x.Z,{attrs:{color:"#ffcb5e"}},[t._v(" Checkout "),a(b.Z,{attrs:{color:"black",right:""}},[t._v("fas fa-arrow-right")])],1)],1)],1)},L=[],R={name:"RightSideBar",data:()=>({rating:4,ex3:{val:20,color:"red"},flags:[{avatar:"3new.jpg",title:"1X Best Chocolate",subtitle:"€15"},{avatar:"1.jpg",title:"United Kingdom",subtitle:"19%"},{avatar:"",title:"Canada",subtitle:"5%"}]})},$=R,z=(0,u.Z)($,W,L,!1,null,null,null),H=z.exports,X=function(){var t=this,a=t._self._c;return a(p.Z,{staticClass:"mt-n4",attrs:{flat:"",color:"transparent"}},[a(h.qW,{staticClass:"ml-4"},[a("strong",[t._v("Dessert")]),a("span",{staticClass:"grey--text ml-2"},[t._v("Area")])]),a(K.Z),a(b.Z,{staticClass:"mr-2",attrs:{color:"grey"}},[t._v("fas fa-search")]),a(T.Z,{staticClass:"mr-3 mt-1",attrs:{color:"#41ab55",overlap:"",content:"2"}},[a(b.Z,{attrs:{color:"grey"}},[t._v("far fa-heart")])],1),a(T.Z,{staticClass:"mr-3 mt-1",attrs:{color:"#41ab55",overlap:"",content:"3"}},[a(b.Z,{attrs:{color:"grey"}},[t._v("fas fa-shopping-cart")])],1)],1)},G=[],U={name:"NavBar"},J=U,Q=(0,u.Z)(J,X,G,!1,null,null,null),Y=Q.exports,tt=e(1689),at=e(7410),et=function(){var t=this,a=t._self._c;return a(at.Z,{staticClass:"mt-n4",attrs:{mandatory:""}},[a(g.Z,[a(q.Z,{staticClass:"space",attrs:{justify:"center"}},t._l(t.categories,(function(e,s){return a(E.Z,{key:s,attrs:{cols:"12",xs:"4",md:"2"}},[a(tt.Z,{scopedSlots:t._u([{key:"default",fn:function({active:t,toggle:s}){return[a(A.Z,{staticClass:"d-flex align-center rounded-lg mx-2",class:t?"borderme":"borderout",attrs:{color:t?"#ffcb5e":"white",dark:"",height:"120",flat:""},on:{click:s}},[a(q.Z,[a(E.Z,{attrs:{cols:"12",sm:"12"}},[a(_.Z,{staticClass:"text-center",attrs:{"three-line":""}},[a(V.km,[a("div",{attrs:{align:"center",justify:"center"}},[a(N.Z,{attrs:{src:e.img,"max-height":"80","max-width":"80",contain:""}})],1)])],1)],1)],1)],1)]}}],null,!0)})],1)})),1)],1)],1)},st=[],rt={name:"dessertsPart",data:()=>({categories:[{img:"f1.png"},{img:"f2.png"},{img:"f3.png"},{img:"f4.png"},{img:"f5.png"}]})},nt=rt,lt=(0,u.Z)(nt,et,st,!1,null,null,null),ot=lt.exports,it=function(){var t=this,a=t._self._c;return a(at.Z,{staticClass:"mt-n4",attrs:{mandatory:""}},[a(g.Z,[a(q.Z,{staticClass:"space",attrs:{justify:"center"}},t._l(t.packages,(function(e,s){return a(E.Z,{key:s,attrs:{cols:"12",xs:"4",md:"2"}},[a(tt.Z,{scopedSlots:t._u([{key:"default",fn:function({active:s,toggle:r}){return[a(A.Z,{staticClass:"d-flex align-center rounded-lg mx-2",class:s?"borderme":"borderout",attrs:{color:s?"#d5f0db":"white",dark:"",height:"180",flat:""},on:{click:r}},[a(q.Z,[a(E.Z,{attrs:{cols:"12",sm:"12"}},[a(_.Z,{staticClass:"text-center",attrs:{"three-line":""}},[a(V.km,[a("div",{attrs:{align:"center",justify:"center"}},[a(N.Z,{attrs:{src:e.img,"max-height":"80","max-width":"80",contain:""}})],1),a(V.oZ,{staticClass:"caption mt-4",class:s?"green--text":"black--text"},[t._v(t._s(e.title))])],1)],1)],1)],1)],1)]}}],null,!0)})],1)})),1)],1)],1)},ct=[],ut={name:"MenuPart",data:()=>({packages:[{img:"p1.png",title:"New Package"},{img:"p2.png",title:"Economic Package"},{img:"p3.png",title:"Great Package"},{img:"p4.png",title:"Free Package"},{img:"p5.gif",title:"Kraft"}]})},mt=ut,ft=(0,u.Z)(mt,it,ct,!1,null,null,null),dt=ft.exports,gt=function(){var t=this,a=t._self._c;return a(q.Z,{staticClass:"mt-n2"},[a(E.Z,{attrs:{cols:"12",sm:"1"}},[a(F.Z,{staticClass:"ml-4",attrs:{size:"30",title:""}},[a(N.Z,{attrs:{src:"https://cdn.vuetifyjs.com/images/lists/4.jpg"}})],1)],1),a(E.Z,{attrs:{cols:"12",sm:"11"}},[a(M.Z,{attrs:{"background-color":"grey",color:"grey","x-small":""},model:{value:t.rating,callback:function(a){t.rating=a},expression:"rating"}}),a("p",[t._v(" Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis recusandae porro repellat in quo magni praesentium nostrum pariatur autem repellendus. ")])],1)],1)},pt=[],ht={name:"CommentsPart"},Zt=ht,vt=(0,u.Z)(Zt,gt,pt,!1,null,null,null),xt=vt.exports,bt=function(){var t=this,a=t._self._c;return a(q.Z,[a(E.Z,{attrs:{cols:"12",sm:"4"}},[a(A.Z,{staticClass:"d-flex align-center rounded-lg mx-2",attrs:{color:"#e8ede2",dark:"",height:"100",flat:""}},[a(q.Z,[a(E.Z,{attrs:{cols:"12",sm:"2"}},[a(N.Z,{attrs:{src:"k.png","max-height":"100%","max-width":"100%"}})],1),a(E.Z,{attrs:{cols:"12",sm:"4"}},[a("h4",{staticClass:"black--text"},[t._v("Kiwi fruit")]),a("br"),a("h6",{staticClass:"black--text mt-n4"},[t._v("Vitamine A Vitamine C")])]),a(E.Z,{attrs:{cols:"12",sm:"3"}},[a("h4",{staticClass:"black--text mt-2"},[t._v("kk61")])])],1)],1)],1),a(E.Z,{attrs:{cols:"12",sm:"4"}},[a(A.Z,{staticClass:"d-flex align-center rounded-lg mx-2",attrs:{color:"#F6ECDD",dark:"",height:"100",flat:""}},[a(q.Z,[a(E.Z,{attrs:{cols:"12",sm:"2"}},[a(N.Z,{staticClass:"mt-4 ml-1",attrs:{src:"o.png","max-height":"120%","max-width":"120%"}})],1),a(E.Z,{attrs:{cols:"12",sm:"7"}},[a("h4",{staticClass:"black--text"},[t._v("Orange")]),a("br"),a("h6",{staticClass:"black--text mt-n4"},[t._v("Vitamine A Vitamine C")])]),a(E.Z,{attrs:{cols:"12",sm:"3"}},[a("h4",{staticClass:"black--text mt-2"},[t._v("Kk 47")])])],1)],1)],1),a(E.Z,{attrs:{cols:"12",sm:"4"}},[a(A.Z,{staticClass:"d-flex align-center rounded-lg mx-2",attrs:{color:"#F4F1E6",dark:"",height:"100",flat:""}},[a(q.Z,[a(E.Z,{attrs:{cols:"12",sm:"2"}},[a(N.Z,{staticClass:"",attrs:{src:"c.png","max-height":"100%","max-width":"100%"}})],1),a(E.Z,{attrs:{cols:"12",sm:"4"}},[a("h4",{staticClass:"black--text mt-2"},[t._v("Banane")]),a("br"),a("h6",{staticClass:"black--text mt-n4"},[t._v("Vitamine A Vitamine C")])]),a(E.Z,{attrs:{cols:"12",sm:"4"}},[a("h4",{staticClass:"black--text mt-4 ml-n8"},[t._v("Kk 30")])])],1)],1)],1)],1)},Ct=[],_t={name:"foodPart"},kt=_t,yt=(0,u.Z)(kt,bt,Ct,!1,null,null,null),wt=yt.exports,jt={name:"HomeView",components:{SideBar:D,RightSideBar:H,Navbar:Y,Desserts:ot,Menu:dt,Comments:xt,Food:wt}},Pt=jt,St=(0,u.Z)(Pt,Z,v,!1,null,null,null),Ot=St.exports;s.ZP.use(d.ZP);const Bt=[{path:"/",name:"home",component:Ot},{path:"/about",name:"about",component:()=>e.e(443).then(e.bind(e,1272))}],Dt=new d.ZP({mode:"history",history:(0,d.createWebHistory)("/dessert-app-vue/"),routes:Bt});var Ft=Dt,Tt=e(629);s.ZP.use(Tt.ZP);var At=new Tt.ZP.Store({state:{},getters:{},mutations:{},actions:{},modules:{}}),Et=e(154);s.ZP.use(Et.Z);var Nt=new Et.Z({icons:{icontfont:"fa"},theme:{themes:{background:"#f4f5f9"}}});s.ZP.config.productionTip=!1,new s.ZP({router:Ft,store:At,vuetify:Nt,render:t=>t(f)}).$mount("#app")}},a={};function e(s){var r=a[s];if(void 0!==r)return r.exports;var n=a[s]={exports:{}};return t[s](n,n.exports,e),n.exports}e.m=t,function(){var t=[];e.O=function(a,s,r,n){if(!s){var l=1/0;for(u=0;u<t.length;u++){s=t[u][0],r=t[u][1],n=t[u][2];for(var o=!0,i=0;i<s.length;i++)(!1&n||l>=n)&&Object.keys(e.O).every((function(t){return e.O[t](s[i])}))?s.splice(i--,1):(o=!1,n<l&&(l=n));if(o){t.splice(u--,1);var c=r();void 0!==c&&(a=c)}}return a}n=n||0;for(var u=t.length;u>0&&t[u-1][2]>n;u--)t[u]=t[u-1];t[u]=[s,r,n]}}(),function(){e.d=function(t,a){for(var s in a)e.o(a,s)&&!e.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:a[s]})}}(),function(){e.f={},e.e=function(t){return Promise.all(Object.keys(e.f).reduce((function(a,s){return e.f[s](t,a),a}),[]))}}(),function(){e.u=function(t){return"js/about.6d5196c3.js"}}(),function(){e.miniCssF=function(t){}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)}}(),function(){var t={},a="dessert-app-vue:";e.l=function(s,r,n,l){if(t[s])t[s].push(r);else{var o,i;if(void 0!==n)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var m=c[u];if(m.getAttribute("src")==s||m.getAttribute("data-webpack")==a+n){o=m;break}}o||(i=!0,o=document.createElement("script"),o.charset="utf-8",o.timeout=120,e.nc&&o.setAttribute("nonce",e.nc),o.setAttribute("data-webpack",a+n),o.src=s),t[s]=[r];var f=function(a,e){o.onerror=o.onload=null,clearTimeout(d);var r=t[s];if(delete t[s],o.parentNode&&o.parentNode.removeChild(o),r&&r.forEach((function(t){return t(e)})),a)return a(e)},d=setTimeout(f.bind(null,void 0,{type:"timeout",target:o}),12e4);o.onerror=f.bind(null,o.onerror),o.onload=f.bind(null,o.onload),i&&document.head.appendChild(o)}}}(),function(){e.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){e.p="/dessert-app-vue/"}(),function(){var t={143:0};e.f.j=function(a,s){var r=e.o(t,a)?t[a]:void 0;if(0!==r)if(r)s.push(r[2]);else{var n=new Promise((function(e,s){r=t[a]=[e,s]}));s.push(r[2]=n);var l=e.p+e.u(a),o=new Error,i=function(s){if(e.o(t,a)&&(r=t[a],0!==r&&(t[a]=void 0),r)){var n=s&&("load"===s.type?"missing":s.type),l=s&&s.target&&s.target.src;o.message="Loading chunk "+a+" failed.\n("+n+": "+l+")",o.name="ChunkLoadError",o.type=n,o.request=l,r[1](o)}};e.l(l,i,"chunk-"+a,a)}},e.O.j=function(a){return 0===t[a]};var a=function(a,s){var r,n,l=s[0],o=s[1],i=s[2],c=0;if(l.some((function(a){return 0!==t[a]}))){for(r in o)e.o(o,r)&&(e.m[r]=o[r]);if(i)var u=i(e)}for(a&&a(s);c<l.length;c++)n=l[c],e.o(t,n)&&t[n]&&t[n][0](),t[n]=0;return e.O(u)},s=self["webpackChunkdessert_app_vue"]=self["webpackChunkdessert_app_vue"]||[];s.forEach(a.bind(null,0)),s.push=a.bind(null,s.push.bind(s))}();var s=e.O(void 0,[998],(function(){return e(2024)}));s=e.O(s)})();
//# sourceMappingURL=app.35f7776f.js.map