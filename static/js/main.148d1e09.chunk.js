(this["webpackJsonpreact_list-of-goods-hooks"]=this["webpackJsonpreact_list-of-goods-hooks"]||[]).push([[0],{14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var c,s=n(7),a=n.n(s),o=n(6),l=n(8),i=n(1),r=(n(13),n(14),n(4)),u=n.n(r),h=n(0),b=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"];!function(t){t.alpha="alpha",t.length="length",t[t.default=0]="default"}(c||(c={}));var d=function(){var t=Object(i.useState)(""),e=Object(o.a)(t,2),n=e[0],s=e[1],a=Object(i.useState)(!1),r=Object(o.a)(a,2),d=r[0],j=r[1],g=function(t,e,n){var s=Object(l.a)(t);return e&&s.sort((function(t,n){switch(e){case c.alpha:return t.localeCompare(n);case c.length:return t.length-n.length;default:return c.default}})),n&&s.reverse(),s}(b,n,d);return Object(h.jsxs)("div",{className:"section content",children:[Object(h.jsxs)("div",{className:"buttons",children:[Object(h.jsx)("button",{type:"button",onClick:function(){return s(c.alpha)},className:u()("button","is-info",{"is-light":n!==c.alpha}),children:"Sort alphabetically"}),Object(h.jsx)("button",{onClick:function(){return s(c.length)},type:"button",className:u()("button","is-success",{"is-light":n!==c.length}),children:"Sort by length"}),Object(h.jsx)("button",{onClick:function(){return j(!1===d)},type:"button",className:u()("button","is-warning",{"is-light":!d}),children:"Reverse"}),(n||!0===d)&&Object(h.jsx)("button",{onClick:function(){s(""),j(!1)},className:"button is-danger is-light",type:"button",children:"Reset"})]}),Object(h.jsx)("ul",{children:g.map((function(t){return Object(h.jsx)("li",{"data-cy":"Good",children:t},t)}))})]})};a.a.render(Object(h.jsx)(d,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.148d1e09.chunk.js.map