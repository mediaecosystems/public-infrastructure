(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"A2+M":function(t,e,n){var r=n("X8hv");t.exports={MDXRenderer:r}},Bnag:function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(t,e){t.exports=function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}},Ijbi:function(t,e,n){var r=n("WkPL");t.exports=function(t){if(Array.isArray(t))return r(t)}},RIqP:function(t,e,n){var r=n("Ijbi"),o=n("EbDI"),a=n("ZhPi"),c=n("Bnag");t.exports=function(t){return r(t)||o(t)||a(t)||c()}},SksO:function(t,e){function n(e,r){return t.exports=n=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},n(e,r)}t.exports=n},WkPL:function(t,e){t.exports=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}},X8hv:function(t,e,n){var r=n("sXyB"),o=n("RIqP"),a=n("lSNA"),c=n("8OQS");function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var l=n("q1tI"),f=n("7ljp").mdx,s=n("BfwJ").useMDXScope;t.exports=function(t){var e=t.scope,n=t.children,a=c(t,["scope","children"]),i=s(e),p=l.useMemo((function(){if(!n)return null;var t=u({React:l,mdx:f},i),e=Object.keys(t),a=e.map((function(e){return t[e]}));return r(Function,["_fn"].concat(o(e),[""+n])).apply(void 0,[{}].concat(o(a)))}),[n,e]);return l.createElement(p,u({},a))}},ZhPi:function(t,e,n){var r=n("WkPL");t.exports=function(t,e){if(t){if("string"==typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(t,e):void 0}}},b48C:function(t,e){t.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}},sXyB:function(t,e,n){var r=n("SksO"),o=n("b48C");function a(e,n,c){return o()?t.exports=a=Reflect.construct:t.exports=a=function(t,e,n){var o=[null];o.push.apply(o,e);var a=new(Function.bind.apply(t,o));return n&&r(a,n.prototype),a},a.apply(null,arguments)}t.exports=a},tBDR:function(t,e,n){"use strict";n("q1tI"),n("Wbzz"),n("9eSz")},uQrM:function(t,e,n){"use strict";n.r(e),n.d(e,"blogListQuery",(function(){return P}));var r=n("MUpH"),o=n("q1tI"),a=n.n(o),c=n("Wbzz"),i=n("5D9J"),u=n("A2+M"),l=(n("5dHu"),n("Wbvq"),n("Bl7J")),f=(n("tBDR"),n("vrFN"));function s(){var t=Object(r.a)(["\n  font-family: Clear Sans;\n"]);return s=function(){return t},t}function p(){var t=Object(r.a)(["\n  font-family: Lusitana;\n"]);return p=function(){return t},t}function b(){var t=Object(r.a)(["\n    width: 75%;\n"]);return b=function(){return t},t}function m(){var t=Object(r.a)(["\n  width: 70vw;\n  border-bottom: 1px solid;\n  margin: 5vh auto;\n"]);return m=function(){return t},t}function v(){var t=Object(r.a)(["\n  margin: 10vh 10vw;\n"]);return v=function(){return t},t}function y(){var t=Object(r.a)(["\n  font-style: italic;\n"]);return y=function(){return t},t}function d(){var t=Object(r.a)(["\n  font-family: Lusitana;\n"]);return d=function(){return t},t}var h=i.a.h1(d()),O=i.a.p(y()),g=i.a.div(v()),j=i.a.div(m()),w=i.a.div(b()),x=i.a.h2(p()),E=i.a.body(s());e.default=function(t){var e=t.data.allMdx.edges;return a.a.createElement(a.a.Fragment,null,a.a.createElement(f.a,{title:"Reimagine the Internet"}),a.a.createElement(l.a,null,a.a.createElement(g,null,a.a.createElement(h,null,"Reimagining the Internet"),a.a.createElement(O,null,"We're talking to some of the most exciting scholars, activists, journalists, and entrepreneurs in our field about what's wrong with social media and how to fix it.",a.a.createElement("br",null),a.a.createElement("br",null),'Select an episode below to watch the interview. Be sure to subscribe to "Reimagine the Internet" on your favorite podcast app.'),e.map((function(t){var e=t.node,n=e.body,r=(e.excerpt,e.frontmatter),o=(r.publicationDate,r.title),i=r.slug;return a.a.createElement(j,null,a.a.createElement(w,null,a.a.createElement(c.Link,{to:i},a.a.createElement(x,null,o)),a.a.createElement(E,null,a.a.createElement(u.MDXRenderer,null,n))))})))))};var P="2381060475"}}]);
//# sourceMappingURL=component---src-pages-podcast-js-2589941d09d9e349ddf8.js.map