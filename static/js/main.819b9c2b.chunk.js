(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{169:function(e,t,n){},170:function(e,t,n){},179:function(e,t,n){},180:function(e,t,n){},181:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(77),o=n.n(r),l=(n(86),n(87),n(19)),i=n(20),s=n(29),u=n(21),m=(n(88),n(89),n(80)),d=function(e,t,n){var a=Object(s.a)(t),c=a.indexOf(a.find(function(t){return t.id===e})),r=Object(m.a)({},a[c]);return r.cantidad+=n?1:-1,a[c]=r,a},f=n(57),E=n.n(f);E.a.initializeApp({apiKey:"AIzaSyA0_09VnrA-EZjEyMCIFlmsDqeKYIhiXlQ",authDomain:"burguer-queen-grm.firebaseapp.com",databaseURL:"https://burguer-queen-grm.firebaseio.com",projectId:"burguer-queen-grm",storageBucket:"burguer-queen-grm.appspot.com",messagingSenderId:"1033408267444"});var p=E.a,b=p.firestore(),v=function(e){var t=Object(a.useState)([]),n=Object(u.a)(t,2),c=n[0],r=n[1];return Object(a.useEffect)(function(){b.collection(e).get().then(function(e){var t=[];e.forEach(function(e){t.push(e.data())}),r(t)})},[]),c},g=function(e){var t,n,a=e.sendProduct,r=e.pedido,o=e.stat,l=(t=v("menu"),n=o,t.filter(function(e){return e.categoria===n}));return c.a.createElement("div",{className:"blocks"},l.map(function(e){return c.a.createElement("button",{"data-testid":"".concat(e.id,"-button"),type:"button",className:"product back-dos",key:e.id,onClick:function(){return a(e,r)}},c.a.createElement("img",{src:"".concat(e.img),alt:"",className:"img-menu"}),c.a.createElement("p",{"data-testid":"".concat(e.id,"-nombre")},e.nombre),c.a.createElement("p",null,"$ ",e.precio,".00"))}))},h=(n(169),function(e){var t=e.menu,n=e.setMenu,r=Object(a.useState)(""),o=Object(u.a)(r,2),l=o[0],i=o[1],s=t.map(function(e){return e.cantidad*e.precio}).reduce(function(e,t){return e+t},0);return c.a.createElement("form",{onSubmit:function(e){e.preventDefault(),function(e,t,n,a,c){a([]),c(""),p.firestore().collection("pedidos").add({Cliente:n,Fecha:Date(),Hora:"".concat((new Date).getHours(),":").concat((new Date).getMinutes()),Productos:e,Total:t,id:n+t})}(t,s,l,n,i)}},c.a.createElement("h5",null,"Ingrese nombre del cliente:"),c.a.createElement("input",{type:"text",onChange:function(e){return i(e.currentTarget.value)}}),c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row head"},c.a.createElement("span",{className:"col-4"},"PRODUCTO"),c.a.createElement("span",{className:"col-4"},"CANTIDAD"),c.a.createElement("span",{className:"col-2"},"TOTAL($)"),c.a.createElement("span",{className:"col-2"},"ELIM")),t.map(function(e){return c.a.createElement("div",{className:"row prod",key:e.id},c.a.createElement("span",{className:"col-4"},e.nombre),c.a.createElement("span",{className:"col-4"},c.a.createElement("button",{type:"button",className:"sign i",onClick:function(){return n(d(e.id,t))}},c.a.createElement("i",{className:"fas fa-minus"})),c.a.createElement("span",null,e.cantidad),c.a.createElement("button",{type:"button",className:"sign i",onClick:function(){return n(d(e.id,t,"+1"))}},c.a.createElement("i",{className:"fas fa-plus"}))),c.a.createElement("span",{className:"col-2"},e.cantidad*e.precio),c.a.createElement("span",{className:"col-2"},c.a.createElement("button",{type:"button",className:"sign i",onClick:function(){return n((a=e.id,(c=t).filter(function(e){return e!==c.find(function(e){return e.id===a})})));var a,c}},c.a.createElement("i",{className:"fas fa-times"}))))}),c.a.createElement("div",{className:"col-6 total-price"},c.a.createElement("span",null,"TOTAL  $ ",s,".00"))),c.a.createElement("button",{type:"button",onClick:function(){return n([])}},"Cancelar pedido"),c.a.createElement("button",{type:"submit"},"Enviar pedido"))}),N=(n(170),function(){return c.a.createElement("header",null,c.a.createElement("span",{className:"name-header"},"< COFFEE & BURGUER >"),c.a.createElement("span",{className:"link-router"},c.a.createElement(l.b,{className:"link",to:"/"},c.a.createElement("i",{className:"fas fa-sign-out-alt"}))))}),w=function(){var e=Object(a.useState)("Desayuno"),t=Object(u.a)(e,2),n=t[0],r=t[1],o=Object(a.useState)([]),l=Object(u.a)(o,2),i=l[0],m=l[1];return c.a.createElement("div",null,c.a.createElement(N,null),c.a.createElement("div",{className:"bodrow"},c.a.createElement("div",{className:"col back-uno"},c.a.createElement("h3",null,"MEN\xda"),c.a.createElement("button",{type:"button",onClick:function(){return r("Desayuno")}},"Desayuno"),c.a.createElement("button",{type:"button",onClick:function(){return r("allDay")}},"Resto del d\xeda"),c.a.createElement("div",null,c.a.createElement(g,{sendProduct:function(e,t){var n=t.find(function(t){return t.id===e.id})?Object(s.a)(t):[].concat(Object(s.a)(t),[e]);m(n)},pedido:i,stat:n}))),c.a.createElement("div",{className:"col back-uno"},c.a.createElement("h3",null,"PEDIDOS"),c.a.createElement(h,{menu:i,setMenu:m}))))},k=(n(179),function(e){var t=(0,e.callback)("pedidos");return c.a.createElement("div",{className:"blocks"},t.map(function(e){return c.a.createElement("div",{className:"ped",key:e.id},c.a.createElement("p",{className:"title"},"Cliente: ",e.Cliente),c.a.createElement("p",{className:"hora-pedido"},"Hora Pedido: ",e.Hora),c.a.createElement("hr",null),c.a.createElement("div",{className:"col pedidos-fire"},c.a.createElement("div",{className:"row"},c.a.createElement("span",{className:"col-8 head-pedidos"},"PRODUCTO"),c.a.createElement("span",{className:"col-4 head-pedidos"},"CANT.")),e.Productos.map(function(e){return c.a.createElement("div",{className:"row",key:e.id},c.a.createElement("span",{className:"col-8"},e.nombre),c.a.createElement("span",{className:"col-4"},e.cantidad))})),c.a.createElement("hr",null),c.a.createElement("button",{type:"button"},"PEDIDO LISTO"))}))}),y=function(){return c.a.createElement("div",null,c.a.createElement(N,null),c.a.createElement("div",{className:"bodrow"},c.a.createElement(k,{callback:v})))},O=(n(180),function(){return c.a.createElement("div",null,c.a.createElement("header",null,c.a.createElement("h1",null,"< COFFEE & BURGUER >")),c.a.createElement("div",{className:"inicio"},c.a.createElement("button",{type:"button",className:"boton-router"},c.a.createElement(l.b,{to:"/Mesero"},"Mesero")),c.a.createElement("button",{type:"button",className:"boton-router"},c.a.createElement(l.b,{to:"/Cocinero"},"Cocinero"))))}),C=function(){return c.a.createElement(l.a,null,c.a.createElement("div",null,c.a.createElement(i.a,{exact:!0,path:"/",component:O}),c.a.createElement(i.a,{path:"/Cocinero",component:y}),c.a.createElement(i.a,{path:"/Mesero",component:w})))},D=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function j(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}o.a.render(c.a.createElement(C,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/LIM008-fe-burger-queen",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/LIM008-fe-burger-queen","/sw.js");D?(function(e,t){fetch(e).then(function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):j(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):j(t,e)})}}()},81:function(e,t,n){e.exports=n(181)},86:function(e,t,n){},87:function(e,t,n){},88:function(e,t,n){},89:function(e,t,n){}},[[81,1,2]]]);
//# sourceMappingURL=main.819b9c2b.chunk.js.map