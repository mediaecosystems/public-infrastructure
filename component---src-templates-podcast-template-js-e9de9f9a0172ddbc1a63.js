(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"A2+M":function(t,e,n){var r=n("X8hv");t.exports={MDXRenderer:r}},Bnag:function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(t,e){t.exports=function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}},Ijbi:function(t,e,n){var r=n("WkPL");t.exports=function(t){if(Array.isArray(t))return r(t)}},Pkdo:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return S})),n.d(e,"pageQuery",(function(){return I}));var r=n("MUpH"),o=n("q1tI"),a=n.n(o),c=n("Wbzz"),u=(n("9eSz"),n("A2+M")),i=n("5D9J"),l=n("Bl7J"),f=n("vrFN");function p(){var t=Object(r.a)(["\n  margin-bottom: -5vw;\n"]);return p=function(){return t},t}function s(){var t=Object(r.a)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  width: 100%;\n  height: 100%;\n  border: none;\n"]);return s=function(){return t},t}function m(){var t=Object(r.a)(["\n  position: relative;\n  overflow: hidden;\n  width: 100%;\n  padding-top: 56.25%;\n"]);return m=function(){return t},t}function b(){var t=Object(r.a)(["\n  font-family: Clear Sans;\n  margin: 10vh auto;\n"]);return b=function(){return t},t}function d(){var t=Object(r.a)(["\n  margin: 0 auto;\n  width: 50vw;\n"]);return d=function(){return t},t}function y(){var t=Object(r.a)(["\n  font-family: Lusitana;\n  line-height: 0;\n  margin-bottom: 10vh;\n"]);return y=function(){return t},t}function v(){var t=Object(r.a)(["\n  font-family: Lusitana;\n"]);return v=function(){return t},t}function h(){var t=Object(r.a)(["\n  margin: 0 10vw;\n"]);return h=function(){return t},t}var O=i.a.div(h()),g=i.a.h1(v()),w=i.a.h4(y()),j=(i.a.div(d()),i.a.body(b())),x=i.a.div(m()),E=i.a.iframe(s()),P=i.a.div(p());function S(t){var e=t.data.mdx,n=e.frontmatter,r=e.body,o=(e.id,n.publicationDate),i=(n.slug,n.title),p=n.embed,s=n.youtubeEmbedURL,m=(n.featuredImage,n.excerpt,n.title.concat(" | iDPI"),n.featuredImage.childImageSharp.fluid);return a.a.createElement(l.a,null,a.a.createElement(f.a,{title:n.title,image:m,description:n.excerpt}),a.a.createElement(O,null,a.a.createElement(g,null,a.a.createElement(c.Link,{to:"/podcast"},"Reimagining the Internet")),a.a.createElement(g,null,i),a.a.createElement(w,null,o),a.a.createElement(P,null,a.a.createElement("iframe",{src:p,frameborder:"0",webkitallowfullscreen:"true",mozallowfullscreen:"true",allowfullscreen:!0})),a.a.createElement(x,null,a.a.createElement(E,{src:s,title:i,frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",webkitallowfullscreen:"true",mozallowfullscreen:"true",allowFullScreen:!0})),a.a.createElement(j,null,a.a.createElement(u.MDXRenderer,null,r))))}var I="2923681965"},RIqP:function(t,e,n){var r=n("Ijbi"),o=n("EbDI"),a=n("ZhPi"),c=n("Bnag");t.exports=function(t){return r(t)||o(t)||a(t)||c()}},SksO:function(t,e){function n(e,r){return t.exports=n=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},n(e,r)}t.exports=n},WkPL:function(t,e){t.exports=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}},X8hv:function(t,e,n){var r=n("sXyB"),o=n("RIqP"),a=n("lSNA"),c=n("8OQS");function u(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?u(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var l=n("q1tI"),f=n("7ljp").mdx,p=n("BfwJ").useMDXScope;t.exports=function(t){var e=t.scope,n=t.children,a=c(t,["scope","children"]),u=p(e),s=l.useMemo((function(){if(!n)return null;var t=i({React:l,mdx:f},u),e=Object.keys(t),a=e.map((function(e){return t[e]}));return r(Function,["_fn"].concat(o(e),[""+n])).apply(void 0,[{}].concat(o(a)))}),[n,e]);return l.createElement(s,i({},a))}},ZhPi:function(t,e,n){var r=n("WkPL");t.exports=function(t,e){if(t){if("string"==typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(t,e):void 0}}},b48C:function(t,e){t.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}},sXyB:function(t,e,n){var r=n("SksO"),o=n("b48C");function a(e,n,c){return o()?t.exports=a=Reflect.construct:t.exports=a=function(t,e,n){var o=[null];o.push.apply(o,e);var a=new(Function.bind.apply(t,o));return n&&r(a,n.prototype),a},a.apply(null,arguments)}t.exports=a}}]);
//# sourceMappingURL=component---src-templates-podcast-template-js-e9de9f9a0172ddbc1a63.js.map