"use strict";(self.webpackChunksys_docs=self.webpackChunksys_docs||[]).push([[7850],{98338:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>g});var n=r(76687);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},d=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,s=e.originalType,u=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=l(r),m=i,g=c["".concat(u,".").concat(m)]||c[m]||p[m]||s;return r?n.createElement(g,a(a({ref:t},d),{},{components:r})):n.createElement(g,a({ref:t},d))}));function g(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=r.length,a=new Array(s);a[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[c]="string"==typeof e?e:i,a[1]=o;for(var l=2;l<s;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4373:(e,t,r)=>{r.r(t),r.d(t,{default:()=>d,frontMatter:()=>s,metadata:()=>a,toc:()=>o});var n=r(87250),i=(r(76687),r(98338));const s={sidebar_position:1},a={unversionedId:"guides/overview",id:"guides/overview",isDocsHomePage:!1,title:"Overview",description:"There are a number of guides available for users of Syscoin. Check the list below to find what you need. If there is something missing that you would like added please let us know in the Syscoin Discord!",source:"@site/docs/guides/overview.mdx",sourceDirName:"guides",slug:"/guides/overview",permalink:"/docs/guides/overview",version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"SYS/TSYS Faucets",permalink:"/docs/dev-resources/tsys"},next:{title:"Add to MetaMask",permalink:"/docs/guides/nevm/metamask"}},o=[{value:"NEVM Guides",id:"nevm-guides",children:[]},{value:"Rollux Guides",id:"rollux-guides",children:[]},{value:"Syscoin Platform Token (SPT) Guides",id:"syscoin-platform-token-spt-guides",children:[]},{value:"Sentry Nodes Guides",id:"sentry-nodes-guides",children:[]},{value:"Merged-mining Guides",id:"merged-mining-guides",children:[]}],u={toc:o},l="wrapper";function d(e){let{components:t,...r}=e;return(0,i.kt)(l,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"There are a number of guides available for users of Syscoin. Check the list below to find what you need. If there is something missing that you would like added please let us know in the ",(0,i.kt)("a",{parentName:"p",href:"https://discord.gg/syscoin"},"Syscoin Discord"),"!"),(0,i.kt)("h2",{id:"nevm-guides"},"NEVM Guides"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/guides/nevm/metamask"},"Setting up MetaMask to use the NEVM blockchain")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/dev-resources/tsys"},"Requesting funds from the Mainnet/Testnet faucets")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/guides/nevm/sysgeth"},"Setting up and interacting with sysgeth"))),(0,i.kt)("h2",{id:"rollux-guides"},"Rollux Guides"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/guides/rollux/metamask"},"Setting up MetaMask to use Rollux")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/tech/rollux"},"About Rollux"))),(0,i.kt)("h2",{id:"syscoin-platform-token-spt-guides"},"Syscoin Platform Token (SPT) Guides"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/guides/spts/create-issue-tokens"},"Creating and issuing SPTs")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/guides/spts/notary-business-rulesets"},"Utilizing notary and business rulesets for SPTs")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/guides/spts/use-tokens"},"Using SPTs with the QT wallet"))),(0,i.kt)("h2",{id:"sentry-nodes-guides"},"Sentry Nodes Guides"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/guides/sentrynode_setup"},"Setting up a Sentry Node"))),(0,i.kt)("h2",{id:"merged-mining-guides"},"Merged-mining Guides"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/guides/mining_setup"},"Getting started with merged-mining Syscoin"))))}d.isMDXComponent=!0}}]);