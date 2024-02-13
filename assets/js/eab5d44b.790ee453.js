"use strict";(self.webpackChunksys_docs=self.webpackChunksys_docs||[]).push([[8478],{98338:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>f});var r=n(76687);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},m=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=l(n),d=i,f=u["".concat(c,".").concat(d)]||u[d]||p[d]||o;return n?r.createElement(f,a(a({ref:t},m),{},{components:n})):r.createElement(f,a({ref:t},m))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:i,a[1]=s;for(var l=2;l<o;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},78352:(e,t,n)=>{n.r(t),n.d(t,{default:()=>m,frontMatter:()=>o,metadata:()=>a,toc:()=>s});var r=n(87250),i=(n(76687),n(98338));const o={},a={unversionedId:"tech/merged-mining",id:"tech/merged-mining",isDocsHomePage:!1,title:"Merged Mining",description:"Also known as Auxiliary Proof-of-Work or simply AuxPoW, merged mining enables you to mine multiple blockchains at the same time without spending additional energy on mining. It is carbon-neutral as it re-uses the proof from work already performed. It could be seen as someone (the miner) entering a lottery of sorts. With merged-mining the miner can submit the same lottery ticket and numbers to different lotteries (merge-mined blockchains), increasing their rewards.",source:"@site/docs/tech/merged-mining.mdx",sourceDirName:"tech",slug:"/tech/merged-mining",permalink:"/docs/tech/merged-mining",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Finality",permalink:"/docs/tech/finality"},next:{title:"NEVM Chain (EVM)",permalink:"/docs/tech/nevm"}},s=[],c={toc:s},l="wrapper";function m(e){let{components:t,...n}=e;return(0,i.kt)(l,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Also known as Auxiliary Proof-of-Work or simply AuxPoW, merged mining enables you to mine multiple blockchains at the same time without spending additional energy on mining. It is carbon-neutral as it re-uses the proof from work already performed. It could be seen as someone (the miner) entering a lottery of sorts. With merged-mining the miner can submit the same lottery ticket and numbers to different lotteries (merge-mined blockchains), increasing their rewards."),(0,i.kt)("p",null,"Merged mining was first presented by Satoshi Nakamoto in 2010, and was subsequently introduced to Bitcoin Core. It can be considered a Bitcoin primitive. See Bitcoin's ",(0,i.kt)("a",{parentName:"p",href:"https://en.bitcoin.it/wiki/Merged_mining_specification"},"Merged Mining Specification"),"."),(0,i.kt)("p",null,"From our perspective, it will be proven over time to be a critical component for incentivizing a robust and decentralized Bitcoin network as BTC block rewards will continue to diminish. Without merged-mining, revenue from mining Bitcoin would eventually be limited to Bitcoin\u2019s flat network fees."),(0,i.kt)("p",null,"Furthermore, merged mining enables Bitcoin\u2019s hashrate to be extensible and support blockchains that offer important utility beyond the scope and best-purpose of the Bitcoin protocol itself."),(0,i.kt)("p",null,"Note: Blockchains that naively use merge-mined settlement are subject to the same vectors of PoW in general. A solution now exists to solve those challenges, and it comes in the form of a hybrid consensus system that provides decentralized Finality on top of merged-mining. Such a solution is present in Syscoin. Dig into Syscoin's ",(0,i.kt)("a",{parentName:"p",href:"/docs/tech/finality"},"Finality"),"."),(0,i.kt)("p",null,"For more information or to set up your miner(s) to merge-mine Syscoin, refer to the ",(0,i.kt)("a",{parentName:"p",href:"/docs/guides/mining_setup"},"Merged Mining Setup Guide"),"."))}m.isMDXComponent=!0}}]);