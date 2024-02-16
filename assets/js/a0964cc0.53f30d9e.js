"use strict";(self.webpackChunksys_docs=self.webpackChunksys_docs||[]).push([[3640],{98338:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var a=n(76687);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||s;return n?a.createElement(f,o(o({ref:t},c),{},{components:n})):a.createElement(f,o({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:r,o[1]=i;for(var p=2;p<s;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},70849:(e,t,n)=>{n.r(t),n.d(t,{default:()=>c,frontMatter:()=>s,metadata:()=>o,toc:()=>i});var a=n(87250),r=(n(76687),n(98338));const s={},o={unversionedId:"guides/spts/aux-fees",id:"guides/spts/aux-fees",isDocsHomePage:!1,title:"Auxiliary Fees",description:"UPDATE: The Syscoin Core RPCs used in the example below, and other SPT-oriented RPCs, have been deprecated and removed as of Syscoin Core 4.4.",source:"@site/docs/guides/spts/aux-fees.mdx",sourceDirName:"guides/spts",slug:"/guides/spts/aux-fees",permalink:"/docs/guides/spts/aux-fees",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Add to MetaMask or install Pali Wallet",permalink:"/docs/guides/rollux/metamask"},next:{title:"Create/Issue Tokens",permalink:"/docs/guides/spts/create-issue-tokens"}},i=[{value:"Understanding auxfee_details",id:"understanding-auxfee_details",children:[]},{value:"Implementation",id:"implementation",children:[]}],l={toc:i},p="wrapper";function c(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("strong",{parentName:"p"},"UPDATE:")," The Syscoin Core RPCs used in the example below, and other SPT-oriented RPCs, have been deprecated and removed as of Syscoin Core 4.4.",(0,r.kt)("br",{parentName:"p"}),"\n","Now ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://github.com/syscoin/syscoinjs-lib"},"syscoinjs-lib"))," and ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://github.com/syscoin/syscointx-js"},"syscointx-js"))," are used to create/manage digital assets, auxfees, and notaries on the UTXO chain."),(0,r.kt)("p",{parentName:"div"},"Examples are available at ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://github.com/syscoin/syscoinjs-lib-examples"},"https://github.com/syscoin/syscoinjs-lib-examples")),"."),(0,r.kt)("p",{parentName:"div"},"For a complete list of these deprecated RPCs, review the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://github.com/syscoin/syscoin/blob/master/doc/release-notes/release-notes-4.4.0.md"},"Syscoin Core 4.4 release notes")),"."))),(0,r.kt)("p",null,"Auxiliary Fees lets you define a custom fee structure for your token. These transaction fees are calculated according to the specified structure and paid to the designated Syscoin address in the form of the transacted Syscoin Platform Token (SPT). Standard network fees paid in SYS still apply."),(0,r.kt)("h2",{id:"understanding-auxfee_details"},"Understanding auxfee_details"),(0,r.kt)("p",null,"Example auxfee_details:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},'\'{"auxfee_address": "tsys1qgklj8wcyss87q2wgr84ypfj0fxtahe60788tad", "fee_struct": [[0,0.01],[10,0.004],[250,0.002],[2500,0.0007],[25000,0.00007],[250000,0.000007]]}\'\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"auxfee_address")),": where transaction fees will be sent.\n",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"fee_struct")),": the first integer represents a range boundary pertaining to amount. The second is the fee percentage multiplier for that range. Multiple ranges can be defined in order from least to greatest boundary integer."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Calculation")," is cumulative across the amount boundaries."),(0,r.kt)("p",null,"For example, the auxiliary fee for a transaction of 251 tokens with the above fee structure would be calculated as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"(10 * 0.01) + (240 * 0.004) + (1 * 0.002) = 1.062 total tokens\n")),(0,r.kt)("h2",{id:"implementation"},"Implementation"),(0,r.kt)("p",null,"The auxfee_details structure can be defined within the RPC parameters of ",(0,r.kt)("inlineCode",{parentName:"p"},"assetnew")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"assetupdate"),"."),(0,r.kt)("p",null,"Auxfee_details defined in assetnew parameter:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},'$syscoin-cli assetnew 100 "AUXF" "auxFee Test Token" "" 8 1000000 127 "" {} \'{"auxfee_address": "tsys1qgklj8wcyss87q2wgr84ypfj0fxtahe60788tad", "fee_struct": [[0,0.01],[10,0.004],[250,0.002],[2500,0.0007],[25000,0.00007],[250000,0.000007]]}\'\n')),(0,r.kt)("blockquote",null,(0,r.kt)("h3",{parentName:"blockquote",id:"auxfee_details-structure-is-stored-in-the-auxfee-field"},"\ud83d\udcd8auxfee_details structure is stored in the ",(0,r.kt)("inlineCode",{parentName:"h3"},"auxfee")," field"),(0,r.kt)("p",{parentName:"blockquote"},"and corresponds to updatecapability_flags bitmask value 32")))}c.isMDXComponent=!0}}]);