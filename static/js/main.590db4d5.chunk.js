(this.webpackJsonpsaveur_monde_app=this.webpackJsonpsaveur_monde_app||[]).push([[0],{101:function(e,a,t){e.exports=t(120)},106:function(e,a,t){},111:function(e,a,t){},116:function(e,a,t){},117:function(e,a,t){},120:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(9),c=t.n(l),i=(t(106),t(186)),o=t(171),m=t(169),u=t(183),s=t(173),d=t(172),E=t(82),p=t.n(E),h=t(44),f=t(167),g=t(164),v=Object(g.a)((function(e){return{root:{height:"auto",minHeight:"100vh",paddingTop:20},image:{backgroundImage:"url(https://source.unsplash.com/random)",backgroundRepeat:"no-repeat",backgroundColor:"light"===e.palette.type?e.palette.grey[50]:e.palette.grey[900],backgroundSize:"cover",backgroundPosition:"center"},paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center",boxShadow:"0.2px 0.2px 2px 2px #9999",padding:"30px 50px 50px 50px ",borderRadius:10,backgroundColor:"#FFF"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}})),b=function(){var e=v();return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:e.image},r.a.createElement("div",{className:e.root},r.a.createElement(f.a,{component:"main",maxWidth:"xs"},r.a.createElement(m.a,null),r.a.createElement("div",{className:e.paper},r.a.createElement(i.a,{className:e.avatar},r.a.createElement(p.a,null)),r.a.createElement(h.a,{component:"h1",variant:"h5"},"Connexion"),r.a.createElement("form",{className:e.form},r.a.createElement(u.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Nom d'utilisateur",name:"username",autoComplete:"off",autoFocus:!0}),r.a.createElement(u.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Mot de passe",type:"password",id:"password",autoComplete:"current-password"}),r.a.createElement(o.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit},"Connecter"),r.a.createElement(d.a,{container:!0},r.a.createElement(d.a,{item:!0,xs:!0},r.a.createElement(s.a,{href:"#",variant:"body2"},"Mot de passe oubli\xe9 ?")))))))))},x=(t(111),t(121)),y=t(21),N=t(50),C=t(174),w=t(175),k=t(176),O=t(64),S=t.n(O),R=t(83),W=t.n(R),A=t(187),I=t(178),j=t(177),T=t(179),D=t(91),L=t(11),B=Object(g.a)((function(e){return{root:{flexGrow:1,position:"absolute",top:0,width:"100%",zIndex:e.zIndex.drawer+1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}})),F=function(){var e=B(),a=r.a.useState(!0),t=Object(N.a)(a,2),l=t[0],c=t[1],i=r.a.useState(null),o=Object(N.a)(i,2),m=o[0],u=o[1],s=Boolean(m),d=Object(L.f)();Object(n.useEffect)((function(){switch(l){case!1:d.push("/login");break;case!0:default:d.push("/")}}),[l,d]);var E=function(){u(null)};return r.a.createElement("div",{className:e.root},r.a.createElement(C.a,{position:"static"},r.a.createElement(w.a,null,r.a.createElement(k.a,{edge:"start",className:e.menuButton,color:"inherit","aria-label":"menu"},r.a.createElement(S.a,null)),r.a.createElement(h.a,{variant:"h6",className:e.title},"Saveur Du Monde"),r.a.createElement(j.a,null,r.a.createElement(I.a,{control:r.a.createElement(A.a,{checked:l,onChange:function(e){c(e.target.checked)},"aria-label":"login switch"}),label:l?"Deconnexion":"Connexion"})),l&&r.a.createElement("div",null,r.a.createElement(k.a,{"aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:function(e){u(e.currentTarget)},color:"inherit"},r.a.createElement(W.a,null)),r.a.createElement(D.a,{id:"menu-appbar",anchorEl:m,anchorOrigin:{vertical:"top",horizontal:"right"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:s,onClose:E},r.a.createElement(T.a,{onClick:E},"Profile"),r.a.createElement(T.a,{onClick:E},"My account"))))))},M=Object(g.a)((function(e){return{root:{flexGrow:1,margin:"0 auto",padding:0},paper:{padding:e.spacing(0),textAlign:"center",color:e.palette.text.primary,width:"200px",height:"100px"}}}));function P(){var e=M();function a(a){var t=a.item1,n=a.item2,l=a.item3,c=a.root1,i=a.root2,m=a.root3;return r.a.createElement(r.a.Fragment,null,r.a.createElement(d.a,{container:!0,className:e.root,spacing:2,style:{marginLeft:"50px",marginBottom:"30px"}},r.a.createElement(d.a,{item:!0,xs:12},r.a.createElement(d.a,{container:!0,justify:"center",spacing:2},r.a.createElement(d.a,{item:!0},r.a.createElement(x.a,{className:e.paper},r.a.createElement(y.b,{to:{pathname:"/dashbord/".concat(i)}},r.a.createElement(o.a,{style:{height:"100%",fontFamily:"ALGERtlIAN"},fullWidth:!0,variant:"contained",color:"primary"},n)))),r.a.createElement(d.a,{item:!0},r.a.createElement(x.a,{className:e.paper},r.a.createElement(y.b,{to:{pathname:"/dashbord/".concat(c)}},r.a.createElement(o.a,{style:{height:"100%",fontFamily:"ALGERtlIAN"},fullWidth:!0,variant:"contained",color:"primary"},t)))),r.a.createElement(d.a,{item:!0},r.a.createElement(x.a,{className:e.paper},r.a.createElement(y.b,{to:{pathname:"/dashbord/".concat(m)}},r.a.createElement(o.a,{style:{height:"100%",fontFamily:"ALGERtlIAN"},fullWidth:!0,variant:"contained",color:"primary"},l))))))))}return r.a.createElement(r.a.Fragment,null,r.a.createElement(F,null),r.a.createElement("div",{className:e.root,id:"homeContainerId"},r.a.createElement(d.a,{container:!0,spacing:1},r.a.createElement(d.a,{container:!0,item:!0,xs:12,spacing:5},r.a.createElement(a,{item1:"GESTION",root1:"gestion",item2:"CAISSE",root2:"caisse",item3:"COMMANDE",root3:"commande"})),r.a.createElement(d.a,{container:!0,item:!0,xs:12,spacing:5},r.a.createElement(a,{item1:" PERSONNALISER ",item2:"GENERER DES RAPPORTS",item3:"STATISTIQUES"})),r.a.createElement(d.a,{container:!0,item:!0,xs:12,spacing:5},r.a.createElement(a,{item1:"JOURNAL DES ACTIVITES",item2:"AJOUTER UN PRODUIT",item3:"CREER UNE FORMULE"})))))}var G=t(185),U=t(170),z=t(180),J=t(122),_=t(181),q=t(182),V=t(65),H=t.n(V),Q=t(87),$=t.n(Q),K=Object(g.a)((function(e){return{root:{width:"100%",height:"Auto"},rigthDiv:{width:"35%",height:"100%",float:"right",padding:5},leftDiv:{width:"65%",height:"100%"},topLeft:{width:"100%",height:"120px",backgroundColor:"#C29459",paddingTop:"30px"},downLeft:{width:"100%",height:"100%"}}})),X=(t(116),t(84)),Y=t.n(X),Z=function(){var e=Object(n.useState)("0"),a=Object(N.a)(e,2),t=a[0],l=a[1],c=function(e){l("0"===t?e:t+""+e)};return r.a.createElement("div",null,r.a.createElement("div",{id:"calculateScreen"},t),r.a.createElement("div",{id:"calculateBtns"},r.a.createElement(d.a,{container:!0,spacing:2},r.a.createElement(d.a,{item:!0,xs:!0},r.a.createElement(o.a,{onClick:function(){return c(1)},fullWidth:!0,variant:"contained",color:"primary"},"1")),r.a.createElement(d.a,{item:!0,xs:!0},r.a.createElement(o.a,{onClick:function(){return c(2)},fullWidth:!0,variant:"contained",color:"primary"},"2")),r.a.createElement(d.a,{item:!0,xs:!0},r.a.createElement(o.a,{onClick:function(){return c(3)},fullWidth:!0,variant:"contained",color:"primary"},"3"))),r.a.createElement(d.a,{container:!0,spacing:2},r.a.createElement(d.a,{item:!0,xs:!0},r.a.createElement(o.a,{onClick:function(){return c(4)},fullWidth:!0,variant:"contained",color:"primary"},"4")),r.a.createElement(d.a,{item:!0,xs:!0},r.a.createElement(o.a,{onClick:function(){return c(5)},fullWidth:!0,variant:"contained",color:"primary"},"5")),r.a.createElement(d.a,{item:!0,xs:!0},r.a.createElement(o.a,{onClick:function(){return c(6)},fullWidth:!0,variant:"contained",color:"primary"},"6"))),r.a.createElement(d.a,{container:!0,spacing:2},r.a.createElement(d.a,{item:!0,xs:!0},r.a.createElement(o.a,{onClick:function(){return c(7)},fullWidth:!0,variant:"contained",color:"primary"},"7")),r.a.createElement(d.a,{item:!0,xs:!0},r.a.createElement(o.a,{onClick:function(){return c(8)},fullWidth:!0,variant:"contained",color:"primary"},"8")),r.a.createElement(d.a,{item:!0,xs:!0},r.a.createElement(o.a,{onClick:function(){return c(9)},fullWidth:!0,variant:"contained",color:"primary"},"9"))),r.a.createElement(d.a,{container:!0,spacing:2},r.a.createElement(d.a,{item:!0,xs:!0},r.a.createElement(o.a,{onClick:function(){return c(",")},fullWidth:!0,variant:"contained",color:"primary"},".")),r.a.createElement(d.a,{item:!0,xs:!0},r.a.createElement(o.a,{onClick:function(){return c(0)},fullWidth:!0,variant:"contained",color:"primary"},"0")),r.a.createElement(d.a,{item:!0,xs:!0},r.a.createElement(o.a,{onClick:function(){l("0")},fullWidth:!0,variant:"contained",color:"primary"},"C"))),r.a.createElement(d.a,{container:!0,spacing:2},r.a.createElement(d.a,{item:!0,xs:!0}," "),r.a.createElement(d.a,{item:!0,xs:!0}," "),r.a.createElement(d.a,{item:!0,xs:!0},r.a.createElement(o.a,{onClick:function(){1===t.length?l("0"):l(t.slice(0,-1))},fullWidth:!0,variant:"contained",color:"primary"},r.a.createElement(Y.a,null))))))},ee=t(188),ae=t(85),te=t.n(ae),ne=t(86),re=t.n(ne),le=Object(g.a)((function(e){return{root:{margin:"0 auto",padding:"2px 4px",display:"flex",alignItems:"center",width:"80%"},input:{marginLeft:e.spacing(1),flex:1},iconButton:{padding:10},divider:{height:28,margin:4}}})),ce=function(){var e=le();return r.a.createElement(x.a,{component:"form",className:e.root},r.a.createElement(k.a,{className:e.iconButton,"aria-label":"menu"},r.a.createElement(S.a,null)),r.a.createElement(ee.a,{className:e.input,placeholder:"Reachercher un produit",inputProps:{"aria-label":"Reachercher un produit"}}),r.a.createElement(k.a,{type:"submit",className:e.iconButton,"aria-label":"search"},r.a.createElement(te.a,null)),r.a.createElement(z.a,{className:e.divider,orientation:"vertical"}),r.a.createElement(k.a,{color:"primary",className:e.iconButton,"aria-label":"directions"},r.a.createElement(re.a,null)))},ie=(t(117),function(){return r.a.createElement("div",{id:"CaisseCreenId"},"Aucun Produit")}),oe=function(){var e=K();return r.a.createElement("div",{className:e.root},r.a.createElement("div",{className:e.rigthDiv},r.a.createElement(Z,null),r.a.createElement(ie,null)),r.a.createElement("div",{className:e.leftDiv},r.a.createElement("div",{className:e.topLeft},r.a.createElement(ce,null)),r.a.createElement("div",{className:e.downLeft},"product List")))},me=function(){return r.a.createElement("div",null,"Commande page")},ue=Object(g.a)((function(e){return{root:{display:"flex"},appBar:{width:"calc(100% - ".concat(240,"px)"),marginRight:240},drawer:{width:240,flexShrink:0},drawerPaper:{width:240},toolbar:e.mixins.toolbar,content:{flexGrow:1,backgroundColor:e.palette.background.default,padding:e.spacing(0)}}})),se=function(){var e=ue();return r.a.createElement("div",{className:e.root},r.a.createElement("main",{className:e.content},r.a.createElement(L.c,null,r.a.createElement(L.a,{path:"/dashbord/caisse"},r.a.createElement(oe,null)),r.a.createElement(L.a,{path:"/dashbord/commande"},r.a.createElement(me,null)))),r.a.createElement(G.a,{className:e.drawer,variant:"permanent",classes:{paper:e.drawerPaper},anchor:"right"},r.a.createElement("div",{className:e.toolbar}),r.a.createElement(z.a,null),r.a.createElement("div",{className:e.toolbar},r.a.createElement("div",{style:{margin:"30px"}},r.a.createElement(y.b,{to:{pathname:"/"}},"SAVEUR DU MONDE"))),r.a.createElement(z.a,null),r.a.createElement(U.a,null,r.a.createElement(y.b,{to:{pathname:"/dashbord/caisse"}},r.a.createElement(J.a,null,r.a.createElement(_.a,null,r.a.createElement(H.a,null)),r.a.createElement(q.a,{primary:"Caisse"}))),r.a.createElement(y.b,{to:{pathname:"/dashbord/commande"}},r.a.createElement(J.a,null,r.a.createElement(_.a,null,r.a.createElement(H.a,null)),r.a.createElement(q.a,{primary:"Commande"})))),r.a.createElement(z.a,null),r.a.createElement(U.a,null,["All mail","Trash","Spam"].map((function(e,a){return r.a.createElement(J.a,{button:!0,key:e},r.a.createElement(_.a,null,a%2===0?r.a.createElement(H.a,null):r.a.createElement($.a,null)),r.a.createElement(q.a,{primary:e}))})))))};var de=function(){return r.a.createElement("div",null,r.a.createElement(L.c,null,r.a.createElement(L.a,{exact:!0,path:"/"},r.a.createElement(P,null)),r.a.createElement(L.a,{exact:!0,path:"/deploy-sdm"},r.a.createElement(P,null)),r.a.createElement(L.a,{path:"/login"},r.a.createElement(b,null)),r.a.createElement(L.a,{path:"/dashbord"},r.a.createElement(se,null)),r.a.createElement(L.a,{path:"*"},r.a.createElement(Ee,null))))};function Ee(){var e=Object(L.g)();return r.a.createElement("div",null,r.a.createElement("h3",null,"No match for ",r.a.createElement("code",null,e.pathname)))}t(118),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var pe=t(90),he=t(43),fe=t(89),ge=Object(he.c)({}),ve=Object(he.d)(ge,Object(he.a)(fe.a));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(pe.a,{store:ve},r.a.createElement(y.a,null,r.a.createElement(de,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[101,1,2]]]);
//# sourceMappingURL=main.590db4d5.chunk.js.map