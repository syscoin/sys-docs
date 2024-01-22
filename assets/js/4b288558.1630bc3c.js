"use strict";(self.webpackChunksys_docs=self.webpackChunksys_docs||[]).push([[8249],{98338:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>v});var n=r(76687);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),d=u(r),m=i,v=d["".concat(c,".").concat(m)]||d[m]||p[m]||o;return r?n.createElement(v,s(s({ref:t},l),{},{components:r})):n.createElement(v,s({ref:t},l))}));function v(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,s=new Array(o);s[0]=m;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a[d]="string"==typeof e?e:i,s[1]=a;for(var u=2;u<o;u++)s[u]=r[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},57125:(e,t,r)=>{r.r(t),r.d(t,{default:()=>l,frontMatter:()=>o,metadata:()=>s,toc:()=>a});var n=r(87250),i=(r(76687),r(98338));const o={sidebar_position:1},s={unversionedId:"dev-resources/documentation/javascript-sdk-ref/overview",id:"dev-resources/documentation/javascript-sdk-ref/overview",isDocsHomePage:!1,title:"Overview",description:"This reference documentation is a community effort and is currently still a WIP, as such there will still be some information missing. Please let us know in the Discord if you find mistakes or things that should be added.",source:"@site/docs/dev-resources/documentation/javascript-sdk-ref/overview.mdx",sourceDirName:"dev-resources/documentation/javascript-sdk-ref",slug:"/dev-resources/documentation/javascript-sdk-ref/overview",permalink:"/docs/dev-resources/documentation/javascript-sdk-ref/overview",version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Z-DAG Developer Guide",permalink:"/docs/dev-resources/sys/z-dag"},next:{title:"Syscoinjs-lib",permalink:"/docs/dev-resources/documentation/javascript-sdk-ref/syscoinjs"}},a=[],c={toc:a},u="wrapper";function l(e){let{components:t,...o}=e;return(0,i.kt)(u,(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This reference documentation is a community effort and is currently still a WIP, as such there will still be some information missing. Please let us know in the ",(0,i.kt)("a",{parentName:"p",href:"https://discord.gg/syscoin"},"Discord")," if you find mistakes or things that should be added."),(0,i.kt)("p",null,"The diagram below shows the layout of the syscoinjs-lib module."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Syscoinjs-lib provides general functions for signing and sending transactions, as well as creating/issuing/sending tokens."),(0,i.kt)("li",{parentName:"ul"},"Utils.js provides utility functions that return information related to user accounts, addresses, tokens as well as many others."),(0,i.kt)("li",{parentName:"ul"},"HDSigner and TrezorSigner are used to sign transactions using software or using a Trezor hardware wallet respectively.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image-20211205153306662",src:r(66271).Z})))}l.isMDXComponent=!0},66271:(e,t,r)=>{r.d(t,{Z:()=>n});const n="data:image/png;base64,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"}}]);