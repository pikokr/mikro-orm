(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[59030],{31986:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return h}});var n=a(83117),r=a(67294),l=a(86010),c=a(35281),i=a(24575),s=a(48596),o=a(39960),u=a(44996),m=a(95999);function d(e){return r.createElement("svg",(0,n.Z)({viewBox:"0 0 24 24"},e),r.createElement("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"}))}var f={breadcrumbsContainer:"breadcrumbsContainer_Z_bl",breadcrumbHomeIcon:"breadcrumbHomeIcon_OVgt"};function v(e){var t=e.children,a=e.href,n="breadcrumbs__link";return e.isLast?r.createElement("span",{className:n,itemProp:"name"},t):a?r.createElement(o.default,{className:n,href:a,itemProp:"item"},r.createElement("span",{itemProp:"name"},t)):r.createElement("span",{className:n},t)}function b(e){var t=e.children,a=e.active,c=e.index,i=e.addMicrodata;return r.createElement("li",(0,n.Z)({},i&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},{className:(0,l.Z)("breadcrumbs__item",{"breadcrumbs__item--active":a})}),t,r.createElement("meta",{itemProp:"position",content:String(c+1)}))}function p(){var e=(0,u.Z)("/");return r.createElement("li",{className:"breadcrumbs__item"},r.createElement(o.default,{"aria-label":(0,m.I)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:(0,l.Z)("breadcrumbs__link",f.breadcrumbsItemLink),href:e},r.createElement(d,{className:f.breadcrumbHomeIcon})))}function h(){var e=(0,i.s1)(),t=(0,s.Ns)();return e?r.createElement("nav",{className:(0,l.Z)(c.k.docs.docBreadcrumbs,f.breadcrumbsContainer),"aria-label":(0,m.I)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"})},r.createElement("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList"},t&&r.createElement(p,null),e.map((function(t,a){var n=a===e.length-1;return r.createElement(b,{key:a,active:n,index:a,addMicrodata:!!t.href},r.createElement(v,{href:t.href,isLast:n},t.label))})))):null}},80049:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return i}});var n=a(83117),r=a(67294),l=a(95999),c=a(32244);function i(e){var t=e.previous,a=e.next;return r.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,l.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},t&&r.createElement(c.Z,(0,n.Z)({},t,{subLabel:r.createElement(l.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")})),a&&r.createElement(c.Z,(0,n.Z)({},a,{subLabel:r.createElement(l.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next"),isNext:!0})))}},44364:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return s}});var n=a(67294),r=a(86010),l=a(95999),c=a(35281),i=a(74477);function s(e){var t=e.className,a=(0,i.E)();return a.badge?n.createElement("span",{className:(0,r.Z)(t,c.k.docs.docVersionBadge,"badge badge--secondary")},n.createElement(l.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:a.label}},"Version: {versionLabel}")):null}},92503:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return d}});var n=a(83117),r=a(80102),l=a(67294),c=a(86010),i=a(95999),s=a(86668),o="anchorWithStickyNavbar_LWe7",u="anchorWithHideOnScrollNavbar_WYt5",m=["as","id"];function d(e){var t=e.as,a=e.id,d=(0,r.Z)(e,m),f=(0,s.L)().navbar.hideOnScroll;return"h1"!==t&&a?l.createElement(t,(0,n.Z)({},d,{className:(0,c.Z)("anchor",f?u:o),id:a}),d.children,l.createElement("a",{className:"hash-link",href:"#"+a,title:(0,i.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"\u200b")):l.createElement(t,(0,n.Z)({},d,{id:void 0}))}},32244:function(e,t,a){"use strict";a.d(t,{Z:function(){return c}});var n=a(67294),r=a(86010),l=a(39960);function c(e){var t=e.permalink,a=e.title,c=e.subLabel,i=e.isNext;return n.createElement(l.default,{className:(0,r.Z)("pagination-nav__link",i?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t},c&&n.createElement("div",{className:"pagination-nav__sublabel"},c),n.createElement("div",{className:"pagination-nav__label"},a))}},39407:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return u}});var n=a(83117),r=a(80102),l=a(67294),c=a(86010),i=a(38011),s="tableOfContents_bqdL",o=["className"];function u(e){var t=e.className,a=(0,r.Z)(e,o);return l.createElement("div",{className:(0,c.Z)(s,"thin-scrollbar",t)},l.createElement(i.Z,(0,n.Z)({},a,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}},69286:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return h}});var n=a(67294),r=a(86010),l=a(86043),c=a(38011),i=a(83117),s=a(80102),o=a(95999),u="tocCollapsibleButton_TO0P",m="tocCollapsibleButtonExpanded_MG3E",d=["collapsed"];function f(e){var t=e.collapsed,a=(0,s.Z)(e,d);return n.createElement("button",(0,i.Z)({type:"button"},a,{className:(0,r.Z)("clean-btn",u,!t&&m,a.className)}),n.createElement(o.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page"))}var v="tocCollapsible_ETCw",b="tocCollapsibleContent_vkbj",p="tocCollapsibleExpanded_sAul";function h(e){var t=e.toc,a=e.className,i=e.minHeadingLevel,s=e.maxHeadingLevel,o=(0,l.u)({initialState:!0}),u=o.collapsed,m=o.toggleCollapsed;return n.createElement("div",{className:(0,r.Z)(v,!u&&p,a)},n.createElement(f,{collapsed:u,onClick:m}),n.createElement(l.z,{lazy:!0,className:b,collapsed:u},n.createElement(c.Z,{toc:t,minHeadingLevel:i,maxHeadingLevel:s})))}},38011:function(e,t,a){"use strict";a.d(t,{Z:function(){return d}});var n=a(83117),r=a(80102),l=a(67294),c=a(86668),i=a(39665),s=a(96841);function o(e){var t=e.toc,a=e.className,n=e.linkClassName,r=e.isChild;return t.length?l.createElement("ul",{className:r?void 0:a},t.map((function(e){return l.createElement("li",{key:e.id},l.createElement("a",{href:"#"+e.id,className:null!=n?n:void 0,dangerouslySetInnerHTML:{__html:e.value}}),l.createElement(o,{isChild:!0,toc:e.children,className:a,linkClassName:n}))}))):null}var u=l.memo(o),m=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function d(e){var t=e.toc,a=e.className,o=void 0===a?"table-of-contents table-of-contents__left-border":a,d=e.linkClassName,f=void 0===d?"table-of-contents__link":d,v=e.linkActiveClassName,b=void 0===v?void 0:v,p=e.minHeadingLevel,h=e.maxHeadingLevel,g=(0,r.Z)(e,m),E=(0,c.L)(),N=null!=p?p:E.tableOfContents.minHeadingLevel,k=null!=h?h:E.tableOfContents.maxHeadingLevel,C=(0,i.b)({toc:t,minHeadingLevel:N,maxHeadingLevel:k}),_=(0,l.useMemo)((function(){if(f&&b)return{linkClassName:f,linkActiveClassName:b,minHeadingLevel:N,maxHeadingLevel:k}}),[f,b,N,k]);return(0,s.S)(_),l.createElement(u,(0,n.Z)({toc:C,className:o,linkClassName:f},g))}},85448:function(e,t,a){"use strict";a.d(t,{F:function(){return i}});var n=a(67294),r=a(44700),l={attributes:!0,characterData:!0,childList:!0,subtree:!0};function c(e,t){var a=(0,n.useState)(),c=a[0],i=a[1],s=(0,n.useCallback)((function(){var t;i(null==(t=e.current)?void 0:t.closest("[role=tabpanel][hidden]"))}),[e,i]);(0,n.useEffect)((function(){s()}),[s]),function(e,t,a){void 0===a&&(a=l);var c=(0,r.zX)(t),i=(0,r.Ql)(a);(0,n.useEffect)((function(){var t=new MutationObserver(c);return e&&t.observe(e,i),function(){return t.disconnect()}}),[e,c,i])}(c,(function(e){e.forEach((function(e){"attributes"===e.type&&"hidden"===e.attributeName&&(t(),s())}))}),{attributes:!0,characterData:!1,childList:!1,subtree:!1})}function i(){var e=(0,n.useState)(!1),t=e[0],a=e[1],r=(0,n.useState)(!1),l=r[0],i=r[1],s=(0,n.useRef)(null),o=(0,n.useCallback)((function(){var e=s.current.querySelector("code");t?e.removeAttribute("style"):(e.style.whiteSpace="pre-wrap",e.style.overflowWrap="anywhere"),a((function(e){return!e}))}),[s,t]),u=(0,n.useCallback)((function(){var e=s.current,t=e.scrollWidth>e.clientWidth||s.current.querySelector("code").hasAttribute("style");i(t)}),[s]);return c(s,u),(0,n.useEffect)((function(){u()}),[t,u]),(0,n.useEffect)((function(){return window.addEventListener("resize",u,{passive:!0}),function(){window.removeEventListener("resize",u)}}),[u]),{codeBlockRef:s,isEnabled:t,isCodeScrollable:l,toggle:o}}},66412:function(e,t,a){"use strict";a.d(t,{p:function(){return l}});var n=a(92949),r=a(86668);function l(){var e=(0,r.L)().prism,t=(0,n.I)().colorMode,a=e.theme,l=e.darkTheme||a;return"dark"===t?l:a}},37016:function(e,t,a){"use strict";a.d(t,{QC:function(){return v},Vo:function(){return d},bc:function(){return u},nZ:function(){return f},nt:function(){return m}});var n=a(28900),r=a(87594),l=a.n(r),c=(0,n.Z)(/title=(["'])(.*?)\1/,{quote:1,title:2}),i=(0,n.Z)(/\{([\d,-]+)\}/,{range:1}),s={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},bash:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}};function o(e,t){var a=e.map((function(e){var a=s[e],n=a.start,r=a.end;return"(?:"+n+"\\s*("+t.flatMap((function(e){var t,a;return[e.line,null==(t=e.block)?void 0:t.start,null==(a=e.block)?void 0:a.end].filter(Boolean)})).join("|")+")\\s*"+r+")"})).join("|");return new RegExp("^\\s*(?:"+a+")\\s*$")}function u(e){var t,a;return null!=(t=null==e||null==(a=e.match(c))?void 0:a.groups.title)?t:""}function m(e){return Boolean(null==e?void 0:e.includes("showLineNumbers"))}function d(e){var t=e.split(" ").find((function(e){return e.startsWith("language-")}));return null==t?void 0:t.replace(/language-/,"")}function f(e,t){var a=e.replace(/\n$/,""),n=t.language,r=t.magicComments,c=t.metastring;if(c&&i.test(c)){var u=c.match(i).groups.range;if(0===r.length)throw new Error("A highlight range has been given in code block's metastring (``` "+c+"), but no magic comment config is available. Docusaurus applies the first magic comment entry's className for metastring ranges.");var m=r[0].className,d=l()(u).filter((function(e){return e>0})).map((function(e){return[e-1,[m]]}));return{lineClassNames:Object.fromEntries(d),code:a}}if(void 0===n)return{lineClassNames:{},code:a};for(var f=function(e,t){switch(e){case"js":case"javascript":case"ts":case"typescript":return o(["js","jsBlock"],t);case"jsx":case"tsx":return o(["js","jsBlock","jsx"],t);case"html":return o(["js","jsBlock","html"],t);case"python":case"py":case"bash":return o(["bash"],t);case"markdown":case"md":return o(["html","jsx","bash"],t);default:return o(Object.keys(s),t)}}(n,r),v=a.split("\n"),b=Object.fromEntries(r.map((function(e){return[e.className,{start:0,range:""}]}))),p=Object.fromEntries(r.filter((function(e){return e.line})).map((function(e){var t=e.className;return[e.line,t]}))),h=Object.fromEntries(r.filter((function(e){return e.block})).map((function(e){var t=e.className;return[e.block.start,t]}))),g=Object.fromEntries(r.filter((function(e){return e.block})).map((function(e){var t=e.className;return[e.block.end,t]}))),E=0;E<v.length;){var N=v[E].match(f);if(N){var k=N.slice(1).find((function(e){return void 0!==e}));p[k]?b[p[k]].range+=E+",":h[k]?b[h[k]].start=E:g[k]&&(b[g[k]].range+=b[g[k]].start+"-"+(E-1)+","),v.splice(E,1)}else E+=1}a=v.join("\n");var C={};return Object.entries(b).forEach((function(e){var t=e[0],a=e[1].range;l()(a).forEach((function(e){null!=C[e]||(C[e]=[]),C[e].push(t)}))})),{lineClassNames:C,code:a}}function v(e){var t={color:"--prism-color",backgroundColor:"--prism-background-color"},a={};return Object.entries(e.plain).forEach((function(e){var n=e[0],r=e[1],l=t[n];l&&"string"==typeof r&&(a[l]=r)})),a}},35150:function(e,t,a){"use strict";var n=a(67294),r=a(6497),l=a(74091),c=function(e){return e&&e.__esModule?e:{default:e}}(n),i=[];e.exports=function(e){var t,a=e.changelog,n=e.route;return c.default.createElement(l,{heading:"Changelog",pageMetadata:c.default.createElement(r.PageMetadata,{description:a.contentTitle,title:"Changelog | API"}),route:n,toc:null!=(t=a.toc)?t:i},c.default.createElement("section",{className:"tsd-readme"},c.default.createElement(a,null)))}},3660:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(67294).createContext({options:{banner:"",breadcrumbs:!0,gitRefName:"master",minimal:!1,pluginId:"default",scopes:[]},reflections:{}});t.ApiDataContext=n},74091:function(e,t,a){"use strict";var n=a(67294),r=a(6497),l=a(31986),c=a(80049),i=a(44364),s=a(92503),o=a(39407),u=a(69286),m=a(96109),d=a(25845),f=a(37850),v=function(e){return e&&e.__esModule?e:{default:e}},b=v(n),p=v(l),h=v(c),g=v(i),E=v(s),N=v(o),k=v(u);e.exports=function(e){var t,a,n=e.children,l=e.heading,c=e.pageMetadata,i=e.pagingMetadata,s=e.toc,o=r.useWindowSize(),u=m.useBreadcrumbs(),v=s.length>0,C=v&&("desktop"===o||"ssr"===o);return b.default.createElement(b.default.Fragment,null,c,b.default.createElement("div",{className:"row"},b.default.createElement("div",{className:"col apiItemCol"},b.default.createElement(f.VersionBanner,null),b.default.createElement("div",{className:"apiItemContainer"},b.default.createElement("article",null,u&&b.default.createElement(p.default,null),b.default.createElement(g.default,null),v&&b.default.createElement(k.default,{className:(null!=(t=r.ThemeClassNames.docs.docTocMobile)?t:"")+" apiTocMobile",maxHeadingLevel:6,minHeadingLevel:1,toc:s}),b.default.createElement("div",{className:(null!=(a=r.ThemeClassNames.docs.docMarkdown)?a:"")+" markdown"},b.default.createElement("header",null,b.default.createElement(E.default,{as:"h1"},l)),n),b.default.createElement(d.Footer,null)),i&&b.default.createElement(h.default,i))),C&&b.default.createElement("div",{className:"col col--3"},b.default.createElement(N.default,{className:r.ThemeClassNames.docs.docTocDesktop,maxHeadingLevel:6,minHeadingLevel:1,toc:s}))))}},96109:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(67294),r=a(3660);t.useBreadcrumbs=function(){return n.useContext(r.ApiDataContext).options.breadcrumbs}},87594:function(e,t){function a(e){let t,a=[];for(let n of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(n))a.push(parseInt(n,10));else if(t=n.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,n,r,l]=t;if(n&&l){n=parseInt(n),l=parseInt(l);const e=n<l?1:-1;"-"!==r&&".."!==r&&"\u2025"!==r||(l+=e);for(let t=n;t!==l;t+=e)a.push(t)}}return a}t.default=a,e.exports=a}}]);