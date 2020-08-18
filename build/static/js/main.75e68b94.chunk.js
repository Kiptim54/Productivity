(this.webpackJsonpproductivity=this.webpackJsonpproductivity||[]).push([[0],{27:function(e,t,n){e.exports=n(39)},38:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n.n(a),c=n(20),r=n.n(c),l=n(11),i=n(7),u=n(22),s=n(5),d=function(e,t){var n=window.localStorage;t=JSON.stringify(t);var o=Object(a.useState)((function(){return JSON.parse(n.getItem(e)||t)})),c=Object(s.a)(o,2),r=c[0],l=c[1];return Object(a.useEffect)((function(){!function(e,t){n.setItem(e,JSON.stringify(t))}(e,r)}),[r]),[r,l]},m=Object(a.createContext)(),f=function(e){var t=d("LightTheme",!0),n=Object(s.a)(t,2),a=n[0],c=n[1];return o.a.createElement(m.Provider,{value:{LightTheme:a,changeTheme:function(){c(!a)}}},o.a.createElement(z,null))};var v=function(){var e=Object(a.useContext)(m),t=e.LightTheme,n=e.changeTheme;return o.a.createElement("div",{className:"Nav"},o.a.createElement("nav",null,o.a.createElement("ul",null,o.a.createElement(l.b,{to:"/",className:"nav-title"},"Productivity"),o.a.createElement(l.b,{to:"/about"},"About"),!1===t?o.a.createElement(i.c,{size:"25",color:"orange",onClick:function(){return n()}}):o.a.createElement(u.a,{size:"25",color:"black",fill:"black",onClick:function(){return n()}}),o.a.createElement("a",null))))},p=n(6),E=n(9);var b=function(e){var t=e.todos,n=e.deleteTodo,a=e.addCompleteTodo,c=e.pauseTodos,r=e.unpauseTodos,l=e.updateTodo;return o.a.createElement("div",{className:"Todos"},t.length>=1?o.a.createElement("ul",{className:"todosList"},t.map((function(e){return o.a.createElement("div",{key:e.id,className:"todoItem ".concat(e.status)},o.a.createElement("input",{type:"text",value:e.name,onChange:function(t){return l(t,e.id)}}),o.a.createElement("span",{className:"control-icons"},o.a.createElement(i.b,{onClick:function(){return a(e.id)},className:"paused"===e.status?"hide complete-icon":"complete-icon",color:"#4bb543",size:"25"}),"paused"===e.status?o.a.createElement(E.b,{onClick:function(){return r(e.id)},className:"replay-icon",size:"20"}):o.a.createElement(E.a,{onClick:function(){return c(e.id)},className:"pause-icon",color:"#F99245",size:"25"}),o.a.createElement(i.a,{onClick:function(){return n(e.id)},className:"delete-icon",color:"#BD1919",size:"25"})))}))):o.a.createElement("h5",{style:{color:"#eb5e28",textAlign:"center",padding:"2%"}},"No active todos..."))},g=n(41),h=n(8),O=n.n(h);function N(e){var t=e.completedTodos,n=e.deleteCompleteTodo,a=e.redoCompletedTodo;return o.a.createElement("div",{className:"CompleteTodos"},o.a.createElement("ul",{className:"completedList"},t.map((function(e){var t=e.id,c=e.name,r=e.status;return o.a.createElement("div",{key:t,className:"todoItem ".concat(r)},o.a.createElement("li",null,c),o.a.createElement("span",{className:"control-icons"},o.a.createElement(i.d,{onClick:function(){return a(t)},className:"redo-icon",color:"#FFFFFF",size:"25"}),o.a.createElement(i.a,{onClick:function(){return n(t)},className:"delete-icon",color:"#BD1919",size:"25"})))}))))}N.propType={CompleteTodos:O.a.array};var T=N,j=n(13);var C=function(){var e=Object(a.useState)(""),t=Object(s.a)(e,2),n=t[0],c=t[1],r=d("todos",[]),l=Object(s.a)(r,2),i=l[0],u=l[1],m=d("completedTodos",[]),f=Object(s.a)(m,2),v=f[0],E=f[1],h=Object(a.useState)(0),O=Object(s.a)(h,2),N=O[0],C=O[1],k=Object(a.useState)(0),y=Object(s.a)(k,2),w=y[0],x=y[1];function F(){var e=i.length+v.length,t=i.filter((function(e){return"paused"===e.status})).length,n=v.length,a=100*t/e;C(100*n/e),x(a)}function S(e){var t=Object(p.a)(i).filter((function(t){return t.id!==e}));u(t)}function z(e){var t=Object(p.a)(v).filter((function(t){return t.id!==e}));E(t)}return Object(a.useEffect)((function(){F()}),[]),Object(a.useEffect)((function(){F()}),[i,v]),o.a.createElement("div",{className:"Productivity"},o.a.createElement("form",{onSubmit:function(e){return function(e){e.preventDefault();var t={id:Object(g.a)(),name:n,status:"new"},a=[].concat(Object(p.a)(i),[t]);c(""),u(a)}(e)}},o.a.createElement("input",{type:"text",placeholder:"Add Item...",value:n,onChange:function(e){return t=e.target.value,void c(t);var t},required:!0,className:"form-control"}),o.a.createElement("button",{className:"btn"},"Enter")),o.a.createElement(j.a,{now:100,className:0===v.length&&0===i.length?"progressBar hide":"progressBar"},o.a.createElement(j.a,{variant:"warning",now:w,key:2}),o.a.createElement(j.a,{variant:"success",now:N,key:1})),o.a.createElement(b,{todos:i,deleteTodo:S,addCompleteTodo:function(e){var t=i.find((function(t){return t.id===e}));t.status="complete";var n=[].concat(Object(p.a)(v),[t]);E(n),S(e)},pauseTodos:function(e){var t=i.find((function(t){return t.id==e}));t.status="paused";var n=i.filter((function(t){return t.id!==e}));u([].concat(Object(p.a)(n),[t]))},unpauseTodos:function(e){var t=i.find((function(t){return t.id==e}));t.status="new";var n=i.filter((function(t){return t.id!==e}));u([].concat(Object(p.a)(n),[t]))},updateTodo:function(e,t){var n=Object(p.a)(i),a=[];n.map((function(n){return n.id===t&&(n.name=e.target.value),a.push(n)})),u(a)}}),o.a.createElement(T,{completedTodos:v,deleteCompleteTodo:z,redoCompletedTodo:function(e){var t=v.find((function(t){return t.id===e}));t.status="new",u([].concat(Object(p.a)(i),[t])),z(e)}}))};var k=function(){var e=new Date;return o.a.createElement("div",{className:"Footer"},o.a.createElement("p",null,"Productivity Inc"),o.a.createElement("sub",null,e.getFullYear()))},y=n(23),w=n(24),x=n(26),F=n(25),S=(o.a.Component,{darkMode:{textColor:"#fffcf2",background:"#252422"},lightMode:{textColor:"#fffcf2",background:"#F5DEB3"}});var z=function(){var e=Object(a.useContext)(m).LightTheme,t=S.lightMode;return t=e?S.lightMode:S.darkMode,o.a.createElement("div",{className:"App",style:{background:t.background,color:t.textColor}},o.a.createElement(v,null),o.a.createElement(C,null),o.a.createElement(k,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(37),n(38);r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(l.a,null,o.a.createElement(f,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[27,1,2]]]);
//# sourceMappingURL=main.75e68b94.chunk.js.map