"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[46048],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return f}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),m=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=m(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=m(r),f=a,g=d["".concat(c,".").concat(f)]||d[f]||u[f]||l;return r?n.createElement(g,o(o({ref:t},s),{},{components:r})):n.createElement(g,o({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var m=2;m<l;m++)o[m]=r[m];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},39058:function(e,t,r){r.d(t,{Z:function(){return y}});var n=r(80102),a=r(67294),l=r(86010),o=r(31669),i=r(87524),c=r(39960),m=r(95999),s="sidebar_re4s",u="sidebarItemTitle_pO2u",d="sidebarItemList_Yudw",f="sidebarItem__DBe",g="sidebarItemLink_mo7H",p="sidebarItemLinkActive_I1ZP";function v(e){var t=e.sidebar;return a.createElement("aside",{className:"col col--3"},a.createElement("nav",{className:(0,l.Z)(s,"thin-scrollbar"),"aria-label":(0,m.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},a.createElement("div",{className:(0,l.Z)(u,"margin-bottom--md")},t.title),a.createElement("ul",{className:(0,l.Z)(d,"clean-list")},t.items.map((function(e){return a.createElement("li",{key:e.permalink,className:f},a.createElement(c.default,{isNavLink:!0,to:e.permalink,className:g,activeClassName:p},e.title))})))))}var h=r(13102);function E(e){var t=e.sidebar;return a.createElement("ul",{className:"menu__list"},t.items.map((function(e){return a.createElement("li",{key:e.permalink,className:"menu__list-item"},a.createElement(c.default,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active"},e.title))})))}function b(e){return a.createElement(h.Zo,{component:E,props:e})}function P(e){var t=e.sidebar,r=(0,i.i)();return null!=t&&t.items.length?"mobile"===r?a.createElement(b,{sidebar:t}):a.createElement(v,{sidebar:t}):null}var N=["sidebar","toc","children"];function y(e){var t=e.sidebar,r=e.toc,i=e.children,c=(0,n.Z)(e,N),m=t&&t.items.length>0;return a.createElement(o.Z,c,a.createElement("div",{className:"container margin-vert--lg"},a.createElement("div",{className:"row"},a.createElement(P,{sidebar:t}),a.createElement("main",{className:(0,l.Z)("col",{"col--7":m,"col--9 col--offset-1":!m}),itemScope:!0,itemType:"http://schema.org/Blog"},i),r&&a.createElement("div",{className:"col col--2"},r))))}},30390:function(e,t,r){r.d(t,{Z:function(){return R}});var n=r(67294),a=r(86010),l=r(9460),o=r(44996);function i(e){var t,r=e.children,a=e.className,i=(0,l.C)(),c=i.frontMatter,m=i.assets,s=(0,o.C)().withBaseUrl,u=null!=(t=m.image)?t:c.image;return n.createElement("article",{className:a,itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},u&&n.createElement("meta",{itemProp:"image",content:s(u,{absolute:!0})}),r)}var c=r(39960),m="title_f1Hy";function s(e){var t=e.className,r=(0,l.C)(),o=r.metadata,i=r.isBlogPostPage,s=o.permalink,u=o.title,d=i?"h1":"h2";return n.createElement(d,{className:(0,a.Z)(m,t),itemProp:"headline"},i?u:n.createElement(c.default,{itemProp:"url",to:s},u))}var u=r(95999),d=r(88824),f="container_mt6G";function g(e){var t,r=e.readingTime,a=(t=(0,d.c)().selectMessage,function(e){var r=Math.ceil(e);return t(r,(0,u.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:r}))});return n.createElement(n.Fragment,null,a(r))}function p(e){var t=e.date,r=e.formattedDate;return n.createElement("time",{dateTime:t,itemProp:"datePublished"},r)}function v(){return n.createElement(n.Fragment,null," \xb7 ")}function h(e){var t=e.className,r=(0,l.C)().metadata,o=r.date,i=r.formattedDate,c=r.readingTime;return n.createElement("div",{className:(0,a.Z)(f,"margin-vert--md",t)},n.createElement(p,{date:o,formattedDate:i}),void 0!==c&&n.createElement(n.Fragment,null,n.createElement(v,null),n.createElement(g,{readingTime:c})))}function E(e){return e.href?n.createElement(c.default,e):n.createElement(n.Fragment,null,e.children)}function b(e){var t=e.author,r=e.className,l=t.name,o=t.title,i=t.url,c=t.imageURL,m=t.email,s=i||m&&"mailto:"+m||void 0;return n.createElement("div",{className:(0,a.Z)("avatar margin-bottom--sm",r)},c&&n.createElement(E,{href:s,className:"avatar__photo-link"},n.createElement("img",{className:"avatar__photo",src:c,alt:l})),l&&n.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},n.createElement("div",{className:"avatar__name"},n.createElement(E,{href:s,itemProp:"url"},n.createElement("span",{itemProp:"name"},l))),o&&n.createElement("small",{className:"avatar__subtitle",itemProp:"description"},o)))}var P="authorCol_Hf19",N="imageOnlyAuthorRow_pa_O",y="imageOnlyAuthorCol_G86a";function Z(e){var t=e.className,r=(0,l.C)(),o=r.metadata.authors,i=r.assets;if(0===o.length)return null;var c=o.every((function(e){return!e.name}));return n.createElement("div",{className:(0,a.Z)("margin-top--md margin-bottom--sm",c?N:"row",t)},o.map((function(e,t){var r;return n.createElement("div",{className:(0,a.Z)(!c&&"col col--6",c?y:P),key:t},n.createElement(b,{author:Object.assign({},e,{imageURL:null!=(r=i.authorsImageUrls[t])?r:e.imageURL})}))})))}function _(){return n.createElement("header",null,n.createElement(s,null),n.createElement(h,null),n.createElement(Z,null))}var k=r(18780),O=r(45042);function w(e){var t=e.children,r=e.className,o=(0,l.C)().isBlogPostPage;return n.createElement("div",{id:o?k.blogPostContainerID:void 0,className:(0,a.Z)("markdown",r),itemProp:"articleBody"},n.createElement(O.Z,null,t))}var T=r(84881),C=r(71526),j=r(83117),x=r(80102),F=["blogPostTitle"];function B(){return n.createElement("b",null,n.createElement(u.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))}function I(e){var t=e.blogPostTitle,r=(0,x.Z)(e,F);return n.createElement(c.default,(0,j.Z)({"aria-label":(0,u.I)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:t})},r),n.createElement(B,null))}var M="blogPostFooterDetailsFull_mRVl";function L(){var e=(0,l.C)(),t=e.metadata,r=e.isBlogPostPage,o=t.tags,i=t.title,c=t.editUrl,m=t.hasTruncateMarker,s=!r&&m,u=o.length>0;return u||s||c?n.createElement("footer",{className:(0,a.Z)("row docusaurus-mt-lg",r&&M)},u&&n.createElement("div",{className:(0,a.Z)("col",{"col--9":s})},n.createElement(C.Z,{tags:o})),r&&c&&n.createElement("div",{className:"col margin-top--sm"},n.createElement(T.Z,{editUrl:c})),s&&n.createElement("div",{className:(0,a.Z)("col text--right",{"col--3":u})},n.createElement(I,{blogPostTitle:i,to:t.permalink}))):null}function R(e){var t=e.children,r=e.className,o=(0,l.C)().isBlogPostPage?void 0:"margin-bottom--xl";return n.createElement(i,{className:(0,a.Z)(o,r)},n.createElement(_,null),n.createElement(w,null,t),n.createElement(L,null))}},84881:function(e,t,r){r.d(t,{Z:function(){return d}});var n=r(67294),a=r(95999),l=r(35281),o=r(83117),i=r(80102),c=r(86010),m="iconEdit_Z9Sw",s=["className"];function u(e){var t=e.className,r=(0,i.Z)(e,s);return n.createElement("svg",(0,o.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,c.Z)(m,t),"aria-hidden":"true"},r),n.createElement("g",null,n.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}function d(e){var t=e.editUrl;return n.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:l.k.common.editThisPage},n.createElement(u,null),n.createElement(a.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},45042:function(e,t,r){r.d(t,{Z:function(){return o}});var n=r(67294),a=r(3905),l=r(86026);function o(e){var t=e.children;return n.createElement(a.Zo,{components:l.default},t)}},13008:function(e,t,r){r.d(t,{Z:function(){return m}});var n=r(67294),a=r(86010),l=r(39960),o="tag_zVej",i="tagRegular_sFm0",c="tagWithCount_h2kH";function m(e){var t=e.permalink,r=e.label,m=e.count;return n.createElement(l.default,{href:t,className:(0,a.Z)(o,m?c:i)},r,m&&n.createElement("span",null,m))}},71526:function(e,t,r){r.d(t,{Z:function(){return m}});var n=r(67294),a=r(86010),l=r(95999),o=r(13008),i="tags_jXut",c="tag_QGVx";function m(e){var t=e.tags;return n.createElement(n.Fragment,null,n.createElement("b",null,n.createElement(l.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),n.createElement("ul",{className:(0,a.Z)(i,"padding--none","margin-left--sm")},t.map((function(e){var t=e.label,r=e.permalink;return n.createElement("li",{key:r,className:c},n.createElement(o.Z,{label:t,permalink:r}))}))))}},9460:function(e,t,r){r.d(t,{C:function(){return i},n:function(){return o}});var n=r(67294),a=r(44700),l=n.createContext(null);function o(e){var t=e.children,r=e.content,a=e.isBlogPostPage,o=function(e){var t=e.content,r=e.isBlogPostPage;return(0,n.useMemo)((function(){return{metadata:t.metadata,frontMatter:t.frontMatter,assets:t.assets,toc:t.toc,isBlogPostPage:r}}),[t,r])}({content:r,isBlogPostPage:void 0!==a&&a});return n.createElement(l.Provider,{value:o},t)}function i(){var e=(0,n.useContext)(l);if(null===e)throw new a.i6("BlogPostProvider");return e}},88824:function(e,t,r){r.d(t,{c:function(){return m}});var n=r(67294),a=r(52263),l=["zero","one","two","few","many","other"];function o(e){return l.filter((function(t){return e.includes(t)}))}var i={locale:"en",pluralForms:o(["one","other"]),select:function(e){return 1===e?"one":"other"}};function c(){var e=(0,a.default)().i18n.currentLocale;return(0,n.useMemo)((function(){try{return t=e,r=new Intl.PluralRules(t),{locale:t,pluralForms:o(r.resolvedOptions().pluralCategories),select:function(e){return r.select(e)}}}catch(n){return console.error('Failed to use Intl.PluralRules for locale "'+e+'".\nDocusaurus will fallback to the default (English) implementation.\nError: '+n.message+"\n"),i}var t,r}),[e])}function m(){var e=c();return{selectMessage:function(t,r){return function(e,t,r){var n=e.split("|");if(1===n.length)return n[0];n.length>r.pluralForms.length&&console.error("For locale="+r.locale+", a maximum of "+r.pluralForms.length+" plural forms are expected ("+r.pluralForms.join(",")+"), but the message contains "+n.length+": "+e);var a=r.select(t),l=r.pluralForms.indexOf(a);return n[Math.min(l,n.length-1)]}(r,t,e)}}}}}]);