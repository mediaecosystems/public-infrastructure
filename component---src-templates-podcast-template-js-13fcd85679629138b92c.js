(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"A2+M":function(e,t,n){var r=n("X8hv");e.exports={MDXRenderer:r}},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},Ijbi:function(e,t,n){var r=n("WkPL");e.exports=function(e){if(Array.isArray(e))return r(e)}},Pkdo:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return D})),n.d(t,"pageQuery",(function(){return k}));var r=n("MUpH"),o=n("q1tI"),a=n.n(o),c=n("9eSz"),u=n.n(c),i=n("A2+M"),l=n("5D9J"),f=n("Bl7J"),p=n("vrFN");function s(){var e=Object(r.a)(["\n  margin-bottom: -5vw;\n"]);return s=function(){return e},e}function m(){var e=Object(r.a)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  width: 100%;\n  height: 100%;\n  border: none;\n"]);return m=function(){return e},e}function b(){var e=Object(r.a)(["\n  position: relative;\n  overflow: hidden;\n  width: 100%;\n  padding-top: 56.25%;\n"]);return b=function(){return e},e}function d(){var e=Object(r.a)(["\n  font-family: Clear Sans;\n  margin: 10vh auto;\n"]);return d=function(){return e},e}function y(){var e=Object(r.a)(["\n  margin: 0 auto;\n  width: 50vw;\n"]);return y=function(){return e},e}function v(){var e=Object(r.a)(["\n  font-family: Lusitana;\n  line-height: 0;\n  margin-bottom: 10vh;\n"]);return v=function(){return e},e}function h(){var e=Object(r.a)(["\n  font-family: Lusitana;\n"]);return h=function(){return e},e}function O(){var e=Object(r.a)(["\n  margin: 0 10vw;\n"]);return O=function(){return e},e}var g=l.a.div(O()),w=l.a.h1(h()),j=l.a.h4(v()),E=l.a.div(y()),x=l.a.body(d()),P=l.a.div(b()),S=l.a.iframe(m()),I=l.a.div(s());function D(e){var t=e.data.mdx,n=t.frontmatter,r=t.body,o=(t.id,n.publicationDate),c=(n.slug,n.title),l=n.embed,s=n.youtubeEmbedURL,m=(n.featuredImage,n.excerpt,n.title.concat(" | iDPI"),n.SEOimage.childImageSharp.resize);return a.a.createElement(f.a,null,a.a.createElement(p.a,{title:n.title,image:m,description:n.excerpt,pathname:n.slug}),a.a.createElement(g,null,a.a.createElement(w,null,c),a.a.createElement(j,null,o),a.a.createElement(E,null,a.a.createElement(u.a,{fluid:n.featuredImage.childImageSharp.fluid})),a.a.createElement(x,null,a.a.createElement(i.MDXRenderer,null,r)),a.a.createElement(I,null,a.a.createElement("iframe",{src:l,frameborder:"0",webkitallowfullscreen:"true",mozallowfullscreen:"true",allowfullscreen:!0})),a.a.createElement(P,null,a.a.createElement(S,{src:s,title:c,frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",webkitallowfullscreen:"true",mozallowfullscreen:"true",allowFullScreen:!0}))))}var k="4143913503"},RIqP:function(e,t,n){var r=n("Ijbi"),o=n("EbDI"),a=n("ZhPi"),c=n("Bnag");e.exports=function(e){return r(e)||o(e)||a(e)||c()}},SksO:function(e,t){function n(t,r){return e.exports=n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},n(t,r)}e.exports=n},WkPL:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}},X8hv:function(e,t,n){var r=n("sXyB"),o=n("RIqP"),a=n("lSNA"),c=n("8OQS");function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var l=n("q1tI"),f=n("7ljp").mdx,p=n("BfwJ").useMDXScope;e.exports=function(e){var t=e.scope,n=e.children,a=c(e,["scope","children"]),u=p(t),s=l.useMemo((function(){if(!n)return null;var e=i({React:l,mdx:f},u),t=Object.keys(e),a=t.map((function(t){return e[t]}));return r(Function,["_fn"].concat(o(t),[""+n])).apply(void 0,[{}].concat(o(a)))}),[n,t]);return l.createElement(s,i({},a))}},ZhPi:function(e,t,n){var r=n("WkPL");e.exports=function(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}},b48C:function(e,t){e.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}},sXyB:function(e,t,n){var r=n("SksO"),o=n("b48C");function a(t,n,c){return o()?e.exports=a=Reflect.construct:e.exports=a=function(e,t,n){var o=[null];o.push.apply(o,t);var a=new(Function.bind.apply(e,o));return n&&r(a,n.prototype),a},a.apply(null,arguments)}e.exports=a}}]);
//# sourceMappingURL=component---src-templates-podcast-template-js-13fcd85679629138b92c.js.map