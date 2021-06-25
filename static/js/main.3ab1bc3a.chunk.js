(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{73:function(n,e,t){"use strict";t.r(e);var r,i,a,o,c,s,u,b=t(0),d=t.n(b),l=t(27),j=t.n(l),h=t(3),p=t(4),f=Object(p.a)(r||(r=Object(h.a)(["\n    :root {\n        --BACKGROUND: #F4F4F4;\n        --CARD: #FFFFFF;\n        --BACKGROUND-MAIN: #1B284C;\n        --TEXT: #F4F4F4;\n        --BORDER: #FAC747;\n    }\n    \n    * {\n        padding: 0;\n        margin: 0;\n        box-sizing: 0;\n        text-decoration: none;\n        list-style: none;\n    }\n    html {\n        font-size: 62.5%;\n    }\n    html, body {\n        text-rendering: optimizeLegibility;\n        -webkit-font-smoothing: antialiased;\n    }\n    body {\n        font-size: 1.6rem;\n        font-family: 'Barlow', sans-serif;\n        font-style: normal;\n        font-weight: normal;\n        color: var(--TEXT);\n        background: var(--BACKGROUND);\n    }\n"]))),m=p.b.div(i||(i=Object(h.a)(["\n    width: 100%;\n    height: 100vh;\n\n    background: var(--BACKGROUND) ;\n\n    display: flex;\n    align-items: center;\n    justify-content: center;\n"]))),O=t(6),x=t.n(O),g=t(31),v=t(15),w=t(12),y=t(13),k=p.b.div(a||(a=Object(h.a)(["\n    width: 90rem;\n    height: 50rem;\n\n    background: var(--BACKGROUND-MAIN);\n\n    border-radius: 8px;\n\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: flex-start;\n\n    form {\n        display: flex;\n        flex-direction: row;\n        margin-top: 2rem;\n\n\n        input {\n            outline: none;\n            border: none;\n            width: 83%;\n            background: var(--BACKGROUND-MAIN);\n            border-bottom: 2px solid var(--BORDER);\n\n            :focus {\n                color: var(--TEXT);\n            }\n\n            ::placeholder {\n                color: var(--TEXT);\n            }\n        }\n\n    \n\n        button {\n            margin-left: 2rem;\n            padding: 1rem;\n            color: var(--BACKGROUND-MAIN);\n            background: var(--BORDER);\n            font-weight: bold;\n            border-radius: 4px;\n            outline: none;\n            border: none;\n\n            :hover {\n                background: var(--BACKGROUND);\n            }\n        }\n    }\n"]))),R=p.b.div(o||(o=Object(h.a)(["\n    width: 20%;\n    height: 50%;\n    margin-top: 2rem; \n"]))),B=t(32),C=t.n(B),A=t(33),D=t.n(A).a.create({baseURL:"https://api.github.com/users"}),F=p.b.div(c||(c=Object(h.a)(["\n    width: 18rem;\n    height: 40rem;\n"]))),N=p.b.div(s||(s=Object(h.a)(["\n    height: 30rem;\n    width: 18rem;\n\n    margin-top: 2rem;\n\n    p {\n        font-size: 1.4rem;\n    }\n"]))),E=p.b.div(u||(u=Object(h.a)(["\n    width: 18rem;\n    height: 18rem;\n\n    background-image: ",";\n    background-size: cover;\n    background-position: center;\n\n"])),(function(n){var e=n.user;return"url(".concat(e.avatar_url,")")})),G=t(1);function T(n){var e=n.user;return Object(G.jsx)(E,{user:e})}function U(n){var e=n.user;return Object(G.jsxs)(F,{children:[Object(G.jsx)(T,{user:e}),Object(G.jsxs)(N,{children:[Object(G.jsxs)("p",{children:["Nome: ",e.name]}),Object(G.jsxs)("p",{children:["Empresa: ",e.company]}),Object(G.jsxs)("p",{children:["Repo: ",e.public_repos]}),Object(G.jsxs)("p",{children:["Bio: ",e.bio]}),Object(G.jsxs)("p",{children:["Localidade: ",e.location]})]})]})}function z(){var n=Object(b.useState)(""),e=Object(y.a)(n,2),t=e[0],r=e[1],i=["apfdamascena","phsb5321","joaovictorbelo","gabrielgomesml","Sofiamdl","GeozedequeGuimaraes","CaiolBarreto","IgrPhillipe","sofiadinizms"],a=Object(b.useState)([]),o=Object(y.a)(a,2),c=o[0],s=o[1];function u(n){return d.apply(this,arguments)}function d(){return(d=Object(w.a)(x.a.mark((function n(e){var t,r,i,a;return x.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:t=[],r=Object(g.a)(e),n.prev=2,r.s();case 4:if((i=r.n()).done){n.next=10;break}return a=i.value,n.next=8,D.get("/".concat(a)).then((function(n){t.push(n.data)})).catch((function(n){console.log(n)}));case 8:n.next=4;break;case 10:n.next=15;break;case 12:n.prev=12,n.t0=n.catch(2),r.e(n.t0);case 15:return n.prev=15,r.f(),n.finish(15);case 18:s(t);case 19:case"end":return n.stop()}}),n,null,[[2,12,15,18]])})))).apply(this,arguments)}function l(){return(l=Object(w.a)(x.a.mark((function n(e){var r;return x.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:e.preventDefault(),r=[],i.forEach((function(n){-1!==(n=n.toLowerCase()).indexOf(t.toLowerCase())&&r.push(n)})),u(r);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}return Object(G.jsxs)(k,{children:[Object(G.jsxs)("form",{onSubmit:function(n){return l.apply(this,arguments)},children:[Object(G.jsx)("input",{type:"text",required:!0,onChange:function(n){r(n.target.value)},value:t,placeholder:"Digite o username"}),Object(G.jsx)("button",{type:"submit",children:"Pesquisar"})]}),Object(G.jsx)(R,{children:Object(G.jsx)(C.a,Object(v.a)(Object(v.a)({},{dots:!0,inifite:!0,speed:500,slidesToShow:1,slidesToScroll:1}),{},{children:c.map((function(n,e){return Object(G.jsx)(U,{user:n},e)}))}))})]})}function K(){return Object(G.jsx)(m,{children:Object(G.jsx)(z,{})})}function S(){return Object(G.jsxs)(G.Fragment,{children:[Object(G.jsx)(f,{}),Object(G.jsx)(K,{})]})}j.a.render(Object(G.jsx)(d.a.StrictMode,{children:Object(G.jsx)(S,{})}),document.getElementById("root"))}},[[73,1,2]]]);
//# sourceMappingURL=main.3ab1bc3a.chunk.js.map