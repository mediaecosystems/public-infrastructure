(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{"A2+M":function(t,e,r){var n=r("X8hv");t.exports={MDXRenderer:n}},Bnag:function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(t,e){t.exports=function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}},Ijbi:function(t,e,r){var n=r("WkPL");t.exports=function(t){if(Array.isArray(t))return n(t)}},Pkdo:function(t,e,r){"use strict";r.r(e),r.d(e,"default",(function(){return d})),r.d(e,"pageQuery",(function(){return O}));var n=r("wTIg"),o=(r("q1tI"),r("Wbzz")),c=(r("9eSz"),r("A2+M")),a=r("Bl7J"),i=r("qKvR"),u=r("vrFN");var l=Object(n.a)("div",{target:"e1tpc3q90"})({name:"kdwm1r",styles:"margin:0 10vw;"}),p=Object(n.a)("h1",{target:"e1tpc3q91"})({name:"ma5riu",styles:"font-family:Lusitana;"}),f=Object(n.a)("h4",{target:"e1tpc3q92"})({name:"1jnyqkm",styles:"font-family:Lusitana;line-height:0;margin-bottom:10vh;"}),s=(Object(n.a)("div",{target:"e1tpc3q93"})({name:"1jwd6wo",styles:"margin:0 auto;width:50vw;"}),Object(n.a)("body",{target:"e1tpc3q94"})({name:"w0ce0t",styles:"font-family:Clear Sans;margin:10vh auto;"})),b=Object(n.a)("div",{target:"e1tpc3q95"})({name:"hpu0v7",styles:"position:relative;overflow:hidden;width:100%;padding-top:56.25%;"}),m=Object(n.a)("iframe",{target:"e1tpc3q96"})({name:"bu0mg9",styles:"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none;"}),y=Object(n.a)("div",{target:"e1tpc3q97"})({name:"1p894xu",styles:"margin-bottom:-5vw;"});function d(t){var e=t.data.mdx,r=e.frontmatter,n=e.body,d=(e.id,r.publicationDate),O=(r.slug,r.title),g=r.embed,j=r.youtubeEmbedURL,v=(r.featuredImage,r.excerpt,r.title.concat(" | iDPI"),r.featuredImage.childImageSharp.fluid);return Object(i.b)(a.a,null,Object(i.b)(u.a,{title:r.title,image:v,description:r.excerpt}),Object(i.b)(l,null,Object(i.b)(p,null,Object(i.b)(o.Link,{to:"/podcast"},"Reimagining the Internet")),Object(i.b)(p,null,O),Object(i.b)(f,null,d),Object(i.b)(y,null,Object(i.b)("iframe",{src:g,frameborder:"0",webkitallowfullscreen:"true",mozallowfullscreen:"true",allowfullscreen:!0})),Object(i.b)(b,null,Object(i.b)(m,{src:j,title:O,frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",webkitallowfullscreen:"true",mozallowfullscreen:"true",allowFullScreen:!0})),Object(i.b)(s,null,Object(i.b)(c.MDXRenderer,null,n))))}var O="2923681965"},RIqP:function(t,e,r){var n=r("Ijbi"),o=r("EbDI"),c=r("ZhPi"),a=r("Bnag");t.exports=function(t){return n(t)||o(t)||c(t)||a()}},SksO:function(t,e){function r(e,n){return t.exports=r=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},r(e,n)}t.exports=r},WkPL:function(t,e){t.exports=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}},X8hv:function(t,e,r){var n=r("sXyB"),o=r("RIqP"),c=r("lSNA"),a=r("8OQS");function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function u(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){c(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var l=r("q1tI"),p=r("7ljp").mdx,f=r("BfwJ").useMDXScope;t.exports=function(t){var e=t.scope,r=t.children,c=a(t,["scope","children"]),i=f(e),s=l.useMemo((function(){if(!r)return null;var t=u({React:l,mdx:p},i),e=Object.keys(t),c=e.map((function(e){return t[e]}));return n(Function,["_fn"].concat(o(e),[""+r])).apply(void 0,[{}].concat(o(c)))}),[r,e]);return l.createElement(s,u({},c))}},ZhPi:function(t,e,r){var n=r("WkPL");t.exports=function(t,e){if(t){if("string"==typeof t)return n(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(t,e):void 0}}},b48C:function(t,e){t.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}},sXyB:function(t,e,r){var n=r("SksO"),o=r("b48C");function c(e,r,a){return o()?t.exports=c=Reflect.construct:t.exports=c=function(t,e,r){var o=[null];o.push.apply(o,e);var c=new(Function.bind.apply(t,o));return r&&n(c,r.prototype),c},c.apply(null,arguments)}t.exports=c}}]);
//# sourceMappingURL=component---src-templates-podcast-template-js-f73647738c78adefac23.js.map