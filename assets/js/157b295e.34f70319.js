"use strict";(self.webpackChunksys_docs=self.webpackChunksys_docs||[]).push([[9272],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(n),h=r,m=p["".concat(l,".").concat(h)]||p[h]||u[h]||o;return n?a.createElement(m,i(i({ref:t},d),{},{components:n})):a.createElement(m,i({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},42620:(e,t,n)=>{n.r(t),n.d(t,{default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const o={},i={unversionedId:"dev-resources/sys/z-dag",id:"dev-resources/sys/z-dag",isDocsHomePage:!1,title:"Z-DAG Developer Guide",description:"Z-DAG is a patent-pending transaction technology implemented on the Syscoin blockchain that enables near-instant, low-cost transactions that are highly scalable. Z-DAGs transactional throughput has been audited by third party blockchain auditing firm Whiteblock, you can view their report here. For more technical information on Z-DAG refer to the Z-DAG Syscoin Community page or the Syscoin Z-DAG Whitepaper.",source:"@site/docs/dev-resources/sys/z-dag.mdx",sourceDirName:"dev-resources/sys",slug:"/dev-resources/sys/z-dag",permalink:"/docs/dev-resources/sys/z-dag",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Testnet Masternode Setup Guide",permalink:"/docs/dev-resources/sys/testnet_mn"},next:{title:"Overview",permalink:"/docs/dev-resources/documentation/javascript-sdk-ref/overview"}},s=[{value:"Z-DAG Basics",id:"z-dag-basics",children:[]},{value:"Understanding Z-DAG Statuses",id:"understanding-z-dag-statuses",children:[]},{value:"Using Z-DAG Balances",id:"using-z-dag-balances",children:[]}],l={toc:s},c="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Z-DAG is a patent-pending transaction technology implemented on the Syscoin blockchain that enables near-instant, low-cost transactions that are highly scalable. Z-DAGs transactional throughput has been audited by third party blockchain auditing firm ",(0,r.kt)("a",{parentName:"p",href:"https://whiteblock.io/"},"Whiteblock"),", you can ",(0,r.kt)("a",{parentName:"p",href:"https://syscoin.org/whitepaper#tps"},"view their report here"),". For more technical information on Z-DAG refer to the ",(0,r.kt)("a",{parentName:"p",href:"https://syscoin.community/features/z-dag"},"Z-DAG Syscoin Community page")," or the ",(0,r.kt)("a",{parentName:"p",href:"https://syscoin.org/zdag_syscoin_whitepaper.pdf"},"Syscoin Z-DAG Whitepaper"),"."),(0,r.kt)("h2",{id:"z-dag-basics"},"Z-DAG Basics"),(0,r.kt)("p",null,"Z-DAG is an interactive protocol, meaning you can continue to check the Z-DAG status all the way up to the point of blockchain confirmation. In today's network conditions a minimum Z-DAG threshold of 10 seconds or later are typically secure (99.9999%). Within certain enterprise deployments lower Z-DAG thresholds can be considered secure dependent on network conditions."),(0,r.kt)("p",null,"A typical transaction workflow has 2 stages:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"The transaction enters the mempool (unconfirmed)."),(0,r.kt)("li",{parentName:"ol"},"The transaction is mined into a block (confirmed).")),(0,r.kt)("p",null,"When using Z-DAG, there are 3 stages:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"The transaction enters the mempool (unconfirmed)."),(0,r.kt)("li",{parentName:"ol"},"After a predefined Z-DAG threshold time the interactive protocol is called and returns a Z-DAG status."),(0,r.kt)("li",{parentName:"ol"},"The transaction is mined into a block (confirmed).")),(0,r.kt)("p",null,"When step 2 returns a Z-DAG status of 0 (after the Z-DAG threshold) that means the SPT can be re-spent without the risk of double-spends. Longer Z-DAG thresholds provide a higher level of security. When transactions are in a Z-DAG state available balance for re-spending should be determined using the Z-DAG balance."),(0,r.kt)("h2",{id:"understanding-z-dag-statuses"},"Understanding Z-DAG Statuses"),(0,r.kt)("p",null,"Z-DAG status is retrieved by the command ",(0,r.kt)("inlineCode",{parentName:"p"},"assetallocationverifyzdag"),". The output will reflect one of the following status levels:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Status"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"-1"),(0,r.kt)("td",{parentName:"tr",align:"left"},"NOT FOUND (transaction is already confirmed on-chain, or is not a Z-DAG transaction)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"0"),(0,r.kt)("td",{parentName:"tr",align:"left"},"OK")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"1"),(0,r.kt)("td",{parentName:"tr",align:"left"},"WARNING (there are more spending balances than the current POW sender balance in the mempool. An active stance should be taken and perhaps a deeper analysis as to potential conflicts related to the sender.)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"2"),(0,r.kt)("td",{parentName:"tr",align:"left"},"CRITICAL (an active double spend was detected. Any descendant asset allocations are flagged as dangerous and should wait for POW confirmation before proceeding.)")))),(0,r.kt)("h2",{id:"using-z-dag-balances"},"Using Z-DAG Balances"),(0,r.kt)("p",null,"The available balance while use Z-DAG can be determined by calling ",(0,r.kt)("inlineCode",{parentName:"p"},"assetallocationbalance"),". If ",(0,r.kt)("inlineCode",{parentName:"p"},"balance")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"zdag_balance")," are the same, then display ",(0,r.kt)("inlineCode",{parentName:"p"},"balance"),". If the balances differ that is an indication that Z-DAG is active for this transaction and it has not yet been confirmed by Proof of Work. In this scenario the ",(0,r.kt)("inlineCode",{parentName:"p"},"zdag_balance")," should be used to indicate to the user their available balance."))}d.isMDXComponent=!0}}]);