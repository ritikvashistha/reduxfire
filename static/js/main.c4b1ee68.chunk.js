(this["webpackJsonpfirebase-auth"]=this["webpackJsonpfirebase-auth"]||[]).push([[0],{78:function(e,n,t){e.exports=t(94)},94:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),c=t(7),o=t.n(c),l=t(27),i=t(25),u=t(73),s=t(9),m=t(15),p=t(14),f=t(16);function g(){var e=Object(m.a)(["\n    font-size:20px;\n    font-family:cursive;\n    .heading{\n      color:green\n    }\n    "]);return g=function(){return e},e}function d(){var e=Object(m.a)(["\n  text-align: center;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size:20px;\n  color: white;\n  background-image: url(",") ;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center;\n  width: 100%;\n  height: 100vh;\n  position:relative;\n  \n    "]);return d=function(){return e},e}function h(){var e=Object(a.useState)({}),n=Object(p.a)(e,2),t=n[0],c=n[1];return Object(a.useEffect)((function(){fetch("https://api.nasa.gov/planetary/apod?api_key=Gh5YhaM77Vx1vPhdlxMWOtsQu1OkMjV3X1U8ff9z").then((function(e){return e.json()})).then((function(e){return c(e)}))}),[]),console.log(t),r.a.createElement(r.a.Fragment,null,r.a.createElement(E,{img:t.url},r.a.createElement("h1",null,t.title)),r.a.createElement(b,null,r.a.createElement("h1",{className:"heading"},t.title),r.a.createElement("p",null,t.explanation),r.a.createElement("b",null,"Data Fetched on ",t.date)))}var E=f.a.div(d(),(function(e){return e.img})),b=f.a.div(g());function v(){var e=Object(m.a)(["\nmargin-top:100px;\n.heading{\n font-size:50px;\n color:green; \n}\n.para{\n  font-size:30px;\n color:blue;\n}\n"]);return v=function(){return e},e}var x=Object(l.b)((function(e){return{currentUser:e.auth.currentUser}}))((function(e){var n=e.currentUser;return r.a.createElement("div",{className:"home"},n&&n?r.a.createElement(h,null):r.a.createElement(r.a.Fragment,null,r.a.createElement(j,null,r.a.createElement("h1",{className:"heading"},"Welcome page"),r.a.createElement("p",{className:"para"},"You are logged out, please sign in."))))})),j=f.a.div(v()),O=t(49);t(90);O.initializeApp({apiKey:"AIzaSyDafUY__Er2VaITrleM8VtA7UTNwhVFydA",authDomain:"reduxfire-f5ff2.firebaseapp.com",databaseURL:"https://reduxfire-f5ff2.firebaseio.com",projectId:"reduxfire-f5ff2",storageBucket:"reduxfire-f5ff2.appspot.com",messagingSenderId:"585710269181",appId:"1:585710269181:web:1766c11393b33c31fd8494",measurementId:"G-C5SCT3W6NP"});var N=O.auth(),y=t(129),U=t(132),C=t(134),S=t(136),k=t(97),w=t(69),R=t.n(w),z=t(139),T=t(141),_=t(131),A=t(135);function P(){var e=Object(m.a)(["\ntext-transform:capitalize;\nfont-family:cursive;\n.link{\n  text-transform:capitalize;\n}\n"]);return P=function(){return e},e}var I=Object(y.a)((function(e){return{root:{flexGrow:1},roots:{flexGrow:1,background:"linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)"},menuButton:{marginRight:e.spacing(2)},menu:{margin:32,marginLeft:-23},sidebar:{textTransform:"capitalize",fontFamily:"cursive","&:hover":{backgroundColor:_.a[200]}}}})),F=Object(l.b)((function(e){return{currentUser:e.auth.currentUser}}),null)((function(e){var n=e.currentUser,t=I(),a=r.a.useState(null),c=Object(p.a)(a,2),o=c[0],l=c[1],u=function(){l(null)};return r.a.createElement(M,{className:t.root},r.a.createElement(U.a,{className:t.roots},r.a.createElement(C.a,{variant:"dense",className:"font"},r.a.createElement(k.a,{edge:"start",className:t.menuButton,color:"inherit","aria-label":"menu"},r.a.createElement(R.a,{"aria-controls":"simple-menu","aria-haspopup":"true",onClick:function(e){l(e.currentTarget)}}),r.a.createElement(z.a,{className:t.menu,id:"simple-menu",anchorEl:o,keepMounted:!0,open:Boolean(o),onClose:u}," ",r.a.createElement(T.a,{onClick:u,className:t.sidebar},r.a.createElement(i.b,{className:"link",to:"/homepage"},"Home page")),r.a.createElement(T.a,{onClick:u,className:t.sidebar},r.a.createElement(i.b,{to:"/imagespage"},"Images Page")),r.a.createElement(T.a,{onClick:u,className:t.sidebar},r.a.createElement(i.b,{to:"/postspage"},"Posts Page")),n&&n?r.a.createElement(r.a.Fragment,null,r.a.createElement(T.a,{onClick:u,className:t.sidebar},r.a.createElement(A.a,{variant:"contained",color:"primary",onClick:function(){return N.signOut()}},"Sign out"))):r.a.createElement(r.a.Fragment,null," ",r.a.createElement(T.a,{onClick:u,className:t.sidebar},r.a.createElement(i.b,{to:"/sign-in"},"Sign In")),r.a.createElement(T.a,{onClick:u,className:t.sidebar},r.a.createElement(i.b,{to:"/sign-up"},"Sign Up"))))),r.a.createElement(S.a,{variant:"h6",color:"inherit"},"Photos"))))})),M=f.a.div(P());function B(){var e=Object(m.a)(["\n  margin-top: 100px;\n  .heading {\n    font-size: 50px;\n    color: green;\n  }\n  .space {\n    margin-left: 50px;\n    width: 300px;\n    height: 25px;\n  }\n  .spaceb {\n    margin-left: 50px;\n  }\n"]);return B=function(){return e},e}var W=function(){var e=Object(a.useState)(""),n=Object(p.a)(e,2),t=n[0],c=n[1],o=Object(a.useState)(""),l=Object(p.a)(o,2),i=l[0],u=l[1];return r.a.createElement(D,{className:"sign-in"},r.a.createElement("h1",{className:"heading"},"Sign in page"),r.a.createElement("form",null,r.a.createElement("input",{className:"space",type:"text",placeholder:"Email",value:t,onChange:function(e){return c(e.target.value)}}),r.a.createElement("input",{className:"space",type:"password",placeholder:"Password ",value:i,onChange:function(e){return u(e.target.value)}}),r.a.createElement(A.a,{className:"spaceb",variant:"contained",color:"primary",onClick:function(e){e.preventDefault(),N.signInWithEmailAndPassword(t,i).then((function(e){return console.log(e)})).catch((function(e){return console.error(e)}))}},"Sign in")))},D=f.a.div(B());function L(){var e=Object(m.a)(["\nmargin-top:100px;\n.heading{\n font-size:50px;\n color:green; \n}\n.space{\n  margin-left:50px;\n  width:300px;\n  height:25px;\n}\n.spaceb{\n  margin-left:50px;\n  \n}\n"]);return L=function(){return e},e}var V=function(){var e=Object(a.useState)(""),n=Object(p.a)(e,2),t=n[0],c=n[1],o=Object(a.useState)(""),l=Object(p.a)(o,2),i=l[0],u=l[1],s=Object(a.useState)(""),m=Object(p.a)(s,2),f=m[0],g=m[1];return r.a.createElement(G,{className:"sign-up"},r.a.createElement("h1",{className:"heading"},"Sign Up page"),r.a.createElement("form",null,r.a.createElement("input",{className:"space",type:"text",placeholder:"Email",value:t,onChange:function(e){return c(e.target.value)}}),r.a.createElement("input",{className:"space",type:"password",placeholder:"Password should be of atleast 8 digits",value:i,onChange:function(e){return u(e.target.value)}}),r.a.createElement("input",{className:"space",type:"password",placeholder:"Password Confirmation",value:f,onChange:function(e){return g(e.target.value)}}),r.a.createElement(A.a,{variant:"contained",color:"primary",className:"spaceb",onClick:function(e){e.preventDefault(),i===f?N.createUserWithEmailAndPassword(t,i).then((function(e){return console.log(e)})).catch((function(e){return console.error(e)})):alert("Password do not match")}},"Sign Up")))},G=f.a.div(L()),q={SET_CURRENT_USER:"SET_CURRENT_USER",CLEAR_CURRENT_USER:"CLEAR_CURRENT_USER"};function Y(){var e=Object(m.a)(["\ntext-align: center;\n  \n  align-items: center;\n  justify-content: center;\n  font-size:20px;\n  color: white;\n  background-image: url(",") ;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center;\n  width: 100%;\n  height: 60vh;\n  position:relative;\n  \n"]);return Y=function(){return e},e}function H(){var e=Object(m.a)(["\nmargin-top:48px;\ntext-transform:capitalize;\n.head{\n  text-align: center;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size:20px;\n  color: white;\n  background-image: url(",") ;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center;\n  width: 100%;\n  height: 100vh;\n  position:relative;\n  \n}\n.mydiv{\n  display:flex;\n  justify-content: space-around;\n  margin:10px 7%;\n  box-shadow:1px 1px 5px grey;\n  padding:10px;\n\n  \n \n  \n  }\n  .search{\n    width:60%\n    \n  }\n  .gallery{\n    display:flex;\n    flex-wrap:wrap;\n    justify-content:space-between;\n      }\n  .item{\n    width:33%;\n  margin:5px 0px;\n  }\n"]);return H=function(){return e},e}function J(){var e=Object(a.useState)(""),n=Object(p.a)(e,2),t=n[0],c=n[1],o=Object(a.useState)([]),l=Object(p.a)(o,2),i=l[0],u=l[1],s=Object(a.useState)([]),m=Object(p.a)(s,2),f=m[0],g=m[1];Object(a.useEffect)((function(){fetch("https://source.unsplash.com/random").then((function(e){return g(e.url)}))}),[]);return console.log(f),r.a.createElement(Q,null,r.a.createElement(K,{img:f},r.a.createElement("h1",{img:f},"this is imagepage"),r.a.createElement("div",{className:"mydiv"},r.a.createElement("span",null,"Search"),r.a.createElement("input",{className:"search",type:"text",value:t,onChange:function(e){return c(e.target.value)}}),r.a.createElement(A.a,{variant:"contained",color:"primary",onClick:function(){fetch("https://api.unsplash.com/search/photos/?client_id=FsHq1nTU1zMvQwi9cb5BmxfANog0Me-o3xhSljMkWTI&query=".concat(t,"&orientation=squarish")).then((function(e){return e.json()})).then((function(e){return u(e.results)}))}}," result "))),r.a.createElement("div",{className:"gallery"},i.map((function(e){return r.a.createElement("img",{alt:"images",className:"item",key:e.id,src:e.urls.regular})}))))}var Q=f.a.div(H(),(function(e){return e.img})),K=f.a.div(Y(),(function(e){return e.img})),X=t(140),Z=t(137),$=t(138),ee=t(70),ne=t.n(ee);function te(){var e=Object(m.a)(["\nwidth: 90%;\ntext-transform:capitalize;\n.post:hover{\nbackground-color:lightgreen;\n}\n.title{\n  font-weight:bold;\n  \n}\n.\n"]);return te=function(){return e},e}function ae(){var e=Object(a.useState)([]),n=Object(p.a)(e,2),t=n[0],c=n[1];return Object(a.useEffect)((function(){fetch("https://jsonplaceholder.typicode.com/posts").then((function(e){return e.json()})).then((function(e){return c(e)}))}),[]),r.a.createElement("div",null,t.map((function(e){return r.a.createElement(re,null,r.a.createElement(X.a,{className:"post"},r.a.createElement(Z.a,{expandIcon:r.a.createElement(ne.a,null),"aria-controls":"panel1a-content",id:"panel1a-header"},r.a.createElement(S.a,{className:"title"},e.title)),r.a.createElement($.a,null,r.a.createElement(S.a,null,e.body))))})))}var re=f.a.div(te());function ce(){return r.a.createElement("div",null,r.a.createElement("h1",null,"this is AlbumsPage"))}var oe=Object(l.b)((function(e){return{currentUser:e.auth.currentUser}}),(function(e){return{setCurrentUser:function(n){return e(function(e){return{type:q.SET_CURRENT_USER,payload:e}}(n))},clearCurrentUser:function(){return e({type:q.CLEAR_CURRENT_USER})}}}))((function(e){var n=e.currentUser,t=e.setCurrentUser,c=e.clearCurrentUser;Object(a.useEffect)((function(){var e=null;return e=N.onAuthStateChanged((function(e){e?t(e):c()})),console.log(n),function(){return e()}}),[n,t,c]);var o=function(e){var t=e.component,a=Object(u.a)(e,["component"]);return r.a.createElement(s.b,Object.assign({},a,{render:function(e){return n?r.a.createElement(t,e):r.a.createElement(s.a,{to:{pathname:"/"}})}}))};return r.a.createElement("div",{className:"app"},r.a.createElement(F,null),r.a.createElement(s.d,null,r.a.createElement(s.b,{path:"/",exact:!0,component:x}),r.a.createElement(s.b,{path:"/sign-in",exact:!0,component:W}),r.a.createElement(s.b,{path:"/sign-up",exact:!0,component:V}),r.a.createElement(o,{path:"/homepage",exact:!0,component:h}),r.a.createElement(o,{path:"/imagespage",exact:!0,component:J}),r.a.createElement(o,{path:"/postspage",exact:!0,component:ae}),r.a.createElement(o,{path:"/albumspage",exact:!0,component:ce})))})),le=t(26),ie=t(71),ue=t(72),se=t(42),me={currentUser:null},pe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:me,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case q.SET_CURRENT_USER:return Object(se.a)(Object(se.a)({},e),{},{currentUser:n.payload});case q.CLEAR_CURRENT_USER:return Object(se.a)(Object(se.a)({},e),{},{currentUser:null});default:return e}},fe=Object(le.combineReducers)({auth:pe}),ge=[ue.logger],de=Object(le.createStore)(fe,Object(ie.composeWithDevTools)(le.applyMiddleware.apply(void 0,ge))),he=r.a.createElement(l.a,{store:de},r.a.createElement(i.a,null,r.a.createElement(oe,null)));o.a.render(he,document.getElementById("root"))}},[[78,1,2]]]);
//# sourceMappingURL=main.c4b1ee68.chunk.js.map