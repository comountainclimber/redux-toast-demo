(this["webpackJsonptoast-demo"]=this["webpackJsonptoast-demo"]||[]).push([[0],{26:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},30:function(e,t,n){e.exports=n(43)},39:function(e,t,n){},40:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),c=n(8),o=n.n(c),r=n(7),l=(n(39),n(14)),u=n(2),s=n(26),m=n.n(s),f=(n(40),n(27)),E=n(22),O=(n(41),function(e){return function(t){t({type:"SHOW_NOTIFICATION",notification:e})}}),b=function(e){return function(t){t({type:"REMOVE_NOTIFICATION",id:e})}},d=function(){var e=Object(r.b)(),t=Object(r.c)((function(e){return e.notification})).notifications;return function(){if(t.length){var n,a=Object(f.a)(t);try{for(a.s();!(n=a.n()).done;){var i=n.value;Object(E.b)(i.message),e(b(i.id))}}catch(c){a.e(c)}finally{a.f()}}}(),i.a.createElement(E.a,null)},h=function(){var e=Object(r.b)();return i.a.createElement("div",null,i.a.createElement("h1",null,"HELLO ABOUT PAGE"),i.a.createElement("button",{onClick:function(){e(O({message:"This is a test notification for the ABOUT page!",id:Date.now()}))}},"Click me!"))},v=function(){var e=Object(r.b)();return i.a.createElement("div",null,i.a.createElement("h1",null,"HELLO HOME PAGE"),i.a.createElement("button",{onClick:function(){e(O({message:"This is a test notification for the HOME page!",id:Date.now()}))}},"Click me!"))},p=function(){var e=Object(r.b)();return i.a.createElement("div",null,i.a.createElement("h1",null,"HELLO USERS PAGE"),i.a.createElement("button",{onClick:function(){e(O({message:"This is a test notification for the USERS page!",id:Date.now()}))}},"Click me!"))};var g=function(){return i.a.createElement("div",{className:"App"},i.a.createElement("img",{className:"App-logo",src:m.a,alt:"poopies"}),i.a.createElement(d,null),i.a.createElement(l.a,null,i.a.createElement("div",{className:"App-router-container"},i.a.createElement("nav",null,i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement(l.b,{to:"/"},"Home")),i.a.createElement("li",null,i.a.createElement(l.b,{to:"/about"},"About")),i.a.createElement("li",null,i.a.createElement(l.b,{to:"/users"},"Users")))),i.a.createElement(u.c,null,i.a.createElement(u.a,{path:"/about"},i.a.createElement(h,null)),i.a.createElement(u.a,{path:"/users"},i.a.createElement(p,null)),i.a.createElement(u.a,{path:"/"},i.a.createElement(v,null))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var j=n(10),A=n(28),I=n(29),T=n(23),w=Object(j.c)({notification:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{notifications:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SHOW_NOTIFICATION":return Object.assign({},e,{notifications:[].concat(Object(T.a)(e.notifications),[t.notification])});case"REMOVE_NOTIFICATION":return Object.assign({},e,{notifications:Object(T.a)(e.notifications.filter((function(e){return e.id!==t.id})))});default:return e}}}),N={notification:{notifications:[]}};Object(A.createLogger)();o.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(r.a,{store:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N;return Object(j.d)(w,e,Object(j.a)(I.a))}()},i.a.createElement(g,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[30,1,2]]]);
//# sourceMappingURL=main.b8b8de1b.chunk.js.map