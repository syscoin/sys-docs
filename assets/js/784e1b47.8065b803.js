"use strict";(self.webpackChunksys_docs=self.webpackChunksys_docs||[]).push([[9804],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>y});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=l(r),m=a,y=p["".concat(c,".").concat(m)]||p[m]||u[m]||o;return r?n.createElement(y,i(i({ref:t},d),{},{components:r})):n.createElement(y,i({ref:t},d))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4244:(e,t,r)=>{r.r(t),r.d(t,{default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const o={},i={unversionedId:"tech/masternodes",id:"tech/masternodes",isDocsHomePage:!1,title:"Masternodes",description:"Syscoin masternodes are essentially full nodes that are incentivized to keep resources online and operate 24/7. These nodes increase the decentralization of Syscoin, contribute computing resources, and enable the operator to perform specific services for the network. The primary service they provided is Finality, which increases the security of the chain beyond that of typical Proof-of-Work blockchains.",source:"@site/docs/tech/masternodes.mdx",sourceDirName:"tech",slug:"/tech/masternodes",permalink:"/docs/tech/masternodes",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Finality",permalink:"/docs/tech/finality"},next:{title:"Merged Mining",permalink:"/docs/tech/merged-mining"}},s=[],c={toc:s},l="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(l,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Syscoin masternodes are essentially full nodes that are incentivized to keep resources online and operate 24/7. These nodes increase the decentralization of Syscoin, contribute computing resources, and enable the operator to perform specific services for the network. The primary service they provided is ",(0,a.kt)("a",{parentName:"p",href:"/docs/tech/finality"},"Finality"),", which increases the security of the chain beyond that of typical Proof-of-Work blockchains."),(0,a.kt)("p",null,"Owning a Syscoin masternode and providing this service to earn income requires you to hold 100,000 SYS as collateral. While the masternode is active it will be paid regularly for its service. The beginning of payments is determined by when the masternode goes online. The (deterministic) qualification period following a masternode activation typically lasts around a week depending on how many masternodes are currently on the network. A newly activated masternode is added to queue of those waiting to be paid each block and this position will be kept as long as it is live. Fewer masternodes on the network translates to more frequent payments. With 2500~ online, a masternode receives income roughly once every three days."),(0,a.kt)("p",null,"The base income payment to a masternode is 55.70 SYS as of March 2023. There are two further seniority levels based on when the 100,000 SYS collateral transaction was settled, as can be seen below."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Payouts as of March 2023")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"Seniority Level"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Payout"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"Basic"),(0,a.kt)("td",{parentName:"tr",align:"center"},"55.70 sys")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"1 year"),(0,a.kt)("td",{parentName:"tr",align:"center"},"75.19 sys")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"2.5 years"),(0,a.kt)("td",{parentName:"tr",align:"center"},"111.40 sys")))),(0,a.kt)("p",null,"There is a 5% reduction in these payouts each year. This reduction will cease in the distant future at a minimum of 5.275 sys per payout for basic-seniority level nodes, and 10.55 sys for full-seniority nodes. This floor, combined with SYS EIP-1559 coinomics, serves to keep masternodes incentivized indefinitely into the future."),(0,a.kt)("p",null,"If you have 100,000 SYS and are interested in setting up a new masternode, use this ",(0,a.kt)("a",{parentName:"p",href:"/docs/guides/mn_setup"},"setup guide"),"."),(0,a.kt)("p",null,"If you already have a masternode and are looking to upgrade Syscoin Core to the current latest version (4.4), use this ",(0,a.kt)("a",{parentName:"p",href:"https://syscoin.medium.com/masternode-mandatory-upgrade-to-syscoin-4-4-56c9421f9ca2"},"upgrade guide"),"."))}d.isMDXComponent=!0}}]);