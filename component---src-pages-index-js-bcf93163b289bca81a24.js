(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"A2+M":function(t,e,n){var r=n("X8hv");t.exports={MDXRenderer:r}},Bnag:function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(t,e){t.exports=function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}},Ijbi:function(t,e,n){var r=n("WkPL");t.exports=function(t){if(Array.isArray(t))return r(t)}},RIqP:function(t,e,n){var r=n("Ijbi"),o=n("EbDI"),c=n("ZhPi"),u=n("Bnag");t.exports=function(t){return r(t)||o(t)||c(t)||u()}},RXBc:function(t,e,n){"use strict";n.r(e),n.d(e,"indexQuery",(function(){return d}));var r=n("MUpH"),o=n("q1tI"),c=n.n(o),u=n("5D9J"),i=n("A2+M"),a=(n("5dHu"),n("Wbvq"),n("Bl7J")),f=n("vrFN");function l(){var t=Object(r.a)(["\n  grid-column: 1/13;\n  font-family: Clear Sans;\n  "," {\n    grid-column: 1/7;\n  }\n"]);return l=function(){return t},t}function p(){var t=Object(r.a)(["\n  display: grid;\n  grid-template-columns: repeat(12, 1fr);\n"]);return p=function(){return t},t}var s=[600].map((function(t){return"@media (min-width: "+t+"px)"})),y=u.a.div(p()),b=u.a.main(l(),s[0]);e.default=function(t){var e=t.data,n=e.aboutText,r=e.defaultImage?e.defaultImage.childImageSharp.fluid:null;return c.a.createElement(a.a,null,c.a.createElement(f.a,{title:"The Institute for Digital Public Infrastructure",image:r}),c.a.createElement(y,null,c.a.createElement(b,null,c.a.createElement(i.MDXRenderer,null,n.body))))};var d="1115974295"},SksO:function(t,e){function n(e,r){return t.exports=n=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},n(e,r)}t.exports=n},WkPL:function(t,e){t.exports=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}},X8hv:function(t,e,n){var r=n("sXyB"),o=n("RIqP"),c=n("lSNA"),u=n("8OQS");function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){c(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var f=n("q1tI"),l=n("7ljp").mdx,p=n("BfwJ").useMDXScope;t.exports=function(t){var e=t.scope,n=t.children,c=u(t,["scope","children"]),i=p(e),s=f.useMemo((function(){if(!n)return null;var t=a({React:f,mdx:l},i),e=Object.keys(t),c=e.map((function(e){return t[e]}));return r(Function,["_fn"].concat(o(e),[""+n])).apply(void 0,[{}].concat(o(c)))}),[n,e]);return f.createElement(s,a({},c))}},ZhPi:function(t,e,n){var r=n("WkPL");t.exports=function(t,e){if(t){if("string"==typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(t,e):void 0}}},b48C:function(t,e){t.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}},sXyB:function(t,e,n){var r=n("SksO"),o=n("b48C");function c(e,n,u){return o()?t.exports=c=Reflect.construct:t.exports=c=function(t,e,n){var o=[null];o.push.apply(o,e);var c=new(Function.bind.apply(t,o));return n&&r(c,n.prototype),c},c.apply(null,arguments)}t.exports=c}}]);
//# sourceMappingURL=component---src-pages-index-js-bcf93163b289bca81a24.js.map