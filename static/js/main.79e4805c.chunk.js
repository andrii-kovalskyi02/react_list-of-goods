(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{15:function(t,e,n){},17:function(t,e,n){"use strict";n.r(e);var s,r=n(4),c=n.n(r),i=n(5),o=n(6),a=n(9),l=n(7),u=n(8),b=n(1),h=n.n(b),d=(n(14),n(15),n(2)),j=n.n(d),p=n(0),f=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"];function v(t,e){var n=e.sortType,s=e.isReversed,r=Object(u.a)(t);switch(n){case 1:r.sort();break;case 2:r.sort((function(t,e){return t.length-e.length}))}return s&&r.reverse(),r}!function(t){t[t.NONE=0]="NONE",t[t.ALPHABET=1]="ALPHABET",t[t.LENGTH=2]="LENGTH"}(s||(s={}));var O=function(t){Object(a.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(i.a)(this,n);for(var r=arguments.length,c=new Array(r),o=0;o<r;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={sortType:s.NONE,isReversed:!1},t.handleClick=function(e){t.setState({sortType:e})},t}return Object(o.a)(n,[{key:"render",value:function(){var t=this,e=this.state,n=e.sortType,r=e.isReversed;return Object(p.jsxs)("div",{className:"section content",children:[Object(p.jsxs)("div",{className:"buttons",children:[Object(p.jsx)("button",{type:"button",className:j()("button is-info",{"is-light":1!==n}),onClick:function(){return t.handleClick(s.ALPHABET)},children:"Sort alphabetically"}),Object(p.jsx)("button",{type:"button",className:j()("button is-success",{"is-light":2!==n}),onClick:function(){return t.handleClick(s.LENGTH)},children:"Sort by length"}),Object(p.jsx)("button",{type:"button",className:j()("button is-warning",{"is-light":!r}),onClick:function(){return t.setState((function(t){return{isReversed:!t.isReversed}}))},children:"Reverse"}),(0!==n||r)&&Object(p.jsx)("button",{type:"button",className:"button is-danger is-light",onClick:function(){return t.setState({sortType:s.NONE,isReversed:!1})},children:"Reset"})]}),Object(p.jsx)("ul",{children:v(f,this.state).map((function(t){return Object(p.jsx)("li",{"data-cy":"Good",children:t},t)}))})]})}}]),n}(h.a.Component);c.a.render(Object(p.jsx)(O,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.79e4805c.chunk.js.map