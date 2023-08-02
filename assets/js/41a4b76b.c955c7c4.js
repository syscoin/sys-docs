"use strict";(self.webpackChunksys_docs=self.webpackChunksys_docs||[]).push([[4934],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(a),h=o,m=u["".concat(l,".").concat(h)]||u[h]||d[h]||r;return a?n.createElement(m,i(i({ref:t},p),{},{components:a})):n.createElement(m,i({ref:t},p))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},87637:(e,t,a)=>{a.r(t),a.d(t,{default:()=>p,frontMatter:()=>r,metadata:()=>i,toc:()=>s});var n=a(87462),o=(a(67294),a(3905));const r={},i={unversionedId:"tech/rollux",id:"tech/rollux",isDocsHomePage:!1,title:"Rollux",description:'Rollux is a suite of rollup-based Layer 2 solutions designed to enable EVM users with near-instant low-cost transfers, executions, and contract deployments. Rollux utilizes Syscoin\'s Layer 1 for best-of-breed secure decentralized settlement and Syscoin PoDA for Layer 1 data availability, offering more efficiency, lower costs and higher throughput than other L1 DA alternatives.  Rollups just work better on Syscoin. The reasons why are available in "Revealing the Method in the Madness".',source:"@site/docs/tech/rollux.mdx",sourceDirName:"tech",slug:"/tech/rollux",permalink:"/docs/tech/rollux",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"PoDA (Data Availability on Layer 1)",permalink:"/docs/tech/poda"},next:{title:"Syscoin Platform Tokens (SPTs)",permalink:"/docs/tech/tokens"}},s=[{value:"Rollux Optimistic Rollups",id:"rollux-optimistic-rollups",children:[]},{value:"How does Syscoin help rollups work optimally?",id:"how-does-syscoin-help-rollups-work-optimally",children:[{value:"Bitcoin Merge-Mined PoW",id:"bitcoin-merge-mined-pow",children:[]},{value:"Finality that is Decentralized and Fault Tolerant",id:"finality-that-is-decentralized-and-fault-tolerant",children:[]},{value:"Efficient Data Availability at Layer 1 with PoDA",id:"efficient-data-availability-at-layer-1-with-poda",children:[]}]},{value:"FAQ",id:"faq",children:[]}],l={toc:s},c="wrapper";function p(e){let{components:t,...a}=e;return(0,o.kt)(c,(0,n.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Rollux is a suite of rollup-based Layer 2 solutions designed to enable EVM users with near-instant low-cost transfers, executions, and contract deployments. Rollux utilizes Syscoin's Layer 1 for best-of-breed secure decentralized ",(0,o.kt)("a",{parentName:"p",href:"/docs/intro/syscoin-what#settlement-layer"},"settlement")," and Syscoin PoDA for Layer 1 data availability, offering more efficiency, lower costs and higher throughput than other L1 DA alternatives.  Rollups just work better on Syscoin. The reasons why are available in ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://syscoin.org/news/revealing-the-method-in-the-madness"},'"Revealing the Method in the Madness"')),"."),(0,o.kt)("p",null,"As a suite, Rollux is set to encompass both Optimistic and ZK (zero-knowledge) based approaches, enabling users and projects to choose a network or solution that fits them best. Where appropriate and as tech evolves, Syscoin can hybridize between these in the future."),(0,o.kt)("p",null,"Check out ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://jsidhu.medium.com/the-ultimate-guide-to-rollups-f8c075571770"},"The Ultimate Guide to Rollups"))," for a technical overview of rollups and the differences between Optimistic and ZK rollups."),(0,o.kt)("h2",{id:"rollux-optimistic-rollups"},"Rollux Optimistic Rollups"),(0,o.kt)("p",null,"Syscoin's first Rollux implementation is based upon Optimism Bedrock and utilizes Syscoin PoDA for Layer 1 data availability."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"/docs/guides/rollux/metamask"},"Connect to Rollux Testnet"))),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Gas Cost Samples (rounded)"),(0,o.kt)("th",{parentName:"tr",align:null},"Rollux on Syscoin"),(0,o.kt)("th",{parentName:"tr",align:null},"Optimism on Ethereum"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"Approve spend (ERC-20)"),(0,o.kt)("td",{parentName:"tr",align:null},"0.00007 SYS"),(0,o.kt)("td",{parentName:"tr",align:null},"0.00017 ETH")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"Value transfer (ERC-20)"),(0,o.kt)("td",{parentName:"tr",align:null},"0.00025 SYS"),(0,o.kt)("td",{parentName:"tr",align:null},"0.00046 ETH")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"Value transfer (native coin)"),(0,o.kt)("td",{parentName:"tr",align:null},"0.00004 SYS"),(0,o.kt)("td",{parentName:"tr",align:null},"0.00010 ETH")))),(0,o.kt)("h2",{id:"how-does-syscoin-help-rollups-work-optimally"},"How does Syscoin help rollups work optimally?"),(0,o.kt)("p",null,"Rollups are the first technology to viably help scale EVM computation to massive user demand. Rollups are also key to achieving a near-optimal scenario in the blockchain trilemma. Syscoin asserts such a near-optimal scenario can only be achieved by supporting rollups with a holistically modular Layer 1 that offers proven security and decentralization."),(0,o.kt)("p",null,"Syscoin is designed holistically with this in mind. All near-instant activity on Rollux inherits the full security of Syscoin\u2019s L1 in the background, including finality."),(0,o.kt)("p",null,"Here are some ways Syscoin shines for rollups."),(0,o.kt)("h3",{id:"bitcoin-merge-mined-pow"},"Bitcoin Merge-Mined PoW"),(0,o.kt)("p",null,"Syscoin is ",(0,o.kt)("a",{parentName:"p",href:"/docs/tech/merged-mining"},"merge-mined")," by Bitcoin's own network of miners and inherits a significant portion of Bitcoin's hashrate (recently 20-30%) without imposing additional energy costs on miners and while incentivizing them with SYS. Syscoin asserts that Layer 1 security is fulfilled better by PoW than PoS for multiple reasons."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Resilient to quantum stealth attacks"),(0,o.kt)("li",{parentName:"ul"},"Consensus resilient to more black swan risks (fiat hyper-inflation, internet censorship)"),(0,o.kt)("li",{parentName:"ul"},"Decentralized finality achievable without fault concerns"),(0,o.kt)("li",{parentName:"ul"},"Better survivability against irrationality")),(0,o.kt)("p",null,"However, Syscoin does not mirror Bitcoin's economics and consensus rules. Syscoin's economy is utility-focused and based upon ",(0,o.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-1559"},"EIP-1559"),". We source Bitcoin\u2019s network for the hardness it provides. "),(0,o.kt)("h3",{id:"finality-that-is-decentralized-and-fault-tolerant"},"Finality that is Decentralized and Fault Tolerant"),(0,o.kt)("p",null,"Syscoin\u2019s finality is sourced from a multi-quorum consisting of 4 groups of 400 masternodes (1,600) which are randomly selected among the entirety of the network (currently ~2,500 MNs). Each quorum is reformed every few hours. 3 out of 4 quorums must agree on a block in order to establish a ",(0,o.kt)("a",{parentName:"p",href:"/docs/tech/finality"},"chainlock")," (finality)."),(0,o.kt)("p",null,"This mechanism provides a high probability of finality. In the rare event that finality cannot be achieved on a block, the network falls back to the longest chain rule of Nakamoto consensus - a seamless and non-breaking event."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"}),(0,o.kt)("th",{parentName:"tr",align:null},"Time to finality after block"),(0,o.kt)("th",{parentName:"tr",align:null},"Blocktime"),(0,o.kt)("th",{parentName:"tr",align:null},"Resilience absent finality"),(0,o.kt)("th",{parentName:"tr",align:null},"Mechanism"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"td"},"Syscoin")),(0,o.kt)("td",{parentName:"tr",align:null},"~12.5 minutes"),(0,o.kt)("td",{parentName:"tr",align:null},"2.5 minutes"),(0,o.kt)("td",{parentName:"tr",align:null},"Nakamoto longest chain rule"),(0,o.kt)("td",{parentName:"tr",align:null},"PoW + Quorums")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"td"},"Ethereum")),(0,o.kt)("td",{parentName:"tr",align:null},"~14 minutes (~3 epochs)"),(0,o.kt)("td",{parentName:"tr",align:null},"10 seconds"),(0,o.kt)("td",{parentName:"tr",align:null},"None. No finality = breaking event"),(0,o.kt)("td",{parentName:"tr",align:null},"PoS + Casper")))),(0,o.kt)("p",null,"Every five blocks (total of 12.5 minutes based on average blocktime), a chainlock checkpoints the chain."),(0,o.kt)("p",null,"Syscoin\u2019s finality provides effective resistance to 51%, malicious long-range MEV, and selfish mining attacks, while retaining PoW as the underlying consensus mechanism. Attackers must accomplish two expensive and challenging tasks to achieve a successful 51% attack: 1) Control greater than 50% of Bitcoin's hash power supplied to Syscoin, plus 2) Control a super-majority of Syscoin masternodes."),(0,o.kt)("h3",{id:"efficient-data-availability-at-layer-1-with-poda"},"Efficient Data Availability at Layer 1 with PoDA"),(0,o.kt)("p",null,"Data availability is required to exist within the security domain of Layer 1 in order for rollups to properly serve critical financial applications by securing users\u2019 ability to exit to L1. Syscoin\u2019s L1 DA solution is called PoDA (Proof of Data Availability). Syscoin\u2019s PoDA differs from Ethereum\u2019s danksharding in how data is stored, presented, pruned, and how fees are calculated. PoDA has characteristics that make it a valuable alternative to Ethereum\u2019s work-in-progress data availability solution, Proto-Danksharding."),(0,o.kt)("p",null,"PoDA\u2019s advantages can be summarized as:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Cheaper transactions"),(0,o.kt)("li",{parentName:"ul"},"No data sharding required"),(0,o.kt)("li",{parentName:"ul"},"Greater data throughput with efficient Keccak data blobs"),(0,o.kt)("li",{parentName:"ul"},"Secured by Bitcoin\u2019s own PoW plus Syscoin's finality"),(0,o.kt)("li",{parentName:"ul"},"More resilient to network-based outages/censorship"),(0,o.kt)("li",{parentName:"ul"},"Simpler data fee market based on Syscoin\u2019s UTXO fee market"),(0,o.kt)("li",{parentName:"ul"},"Nakamoto Assumption: Only one honest node is needed to guarantee data")),(0,o.kt)("p",null,"PoDA\u2019s design considers proving and archiving as separate concerns. With PoDA, the succinct proof of data is stored on Layer 1, while an assumption is made that at least one honest party in the world will archive the raw data within a 6-hour window of time - similar to the honesty assumption made when syncing a Bitcoin node (at least one honest node). If desired, the raw data itself can be secured by Syscoin\u2019s L1 network by reposting the data every 6 hours."),(0,o.kt)("p",null,"Validium (fully offchain DA) is also available as an alternative to PoDA for less-critical applications where the focus might be on even lower cost and higher throughput by trading-off Layer 1 data security. However, in the case of Syscoin PoDA, Layer 1 data security is quite affordable and PoDA nodes can store raw data offchain if they wish while still gaining the security of onchain state and proving."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"/docs/tech/poda"},"PoDA documentation")),"   "),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Find out more about how Syscoin provides ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://jsidhu.medium.com/why-syscoin-is-the-ideal-layer-1-3ff690a7ef5f"},"the most ideal L1 settlement for L2 solutions")),"."),(0,o.kt)("h2",{id:"faq"},"FAQ"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},'Q."Does Syscoin Rollux require a separate gas token?"'),(0,o.kt)("br",{parentName:"p"}),"\n","A. No. It uses the native coin of Syscoin for gas - SYS, or TSYS in the case of testnet."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},'Q."How do I get TSYS and/or move TSYS to the Rollux testnet?"'),(0,o.kt)("br",{parentName:"p"}),"\n","A. A bridge contract is available. You simply send TSYS to a contract address on the Tanenbaum L1, then it arrives at your address on Rollux. ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"/docs/guides/rollux/metamask#how-to-get-tsys"},"Refer to instructions")),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Q.\u201cWhat is the blocktime of the Rollux optimistic rollup?\u201d"),(0,o.kt)("br",{parentName:"p"}),"\n","A. 2 seconds"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Q. \u201cAt what frequency does the L2 settle bundled transactions on L1? What is the threshold that triggers settlement?\u201d"),(0,o.kt)("br",{parentName:"p"}),"\n","A. The timing of settlement depends on the volume of network activity.",(0,o.kt)("br",{parentName:"p"}),"\n","Either of the following conditions can trigger settlement to L1:  "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The data footprint of the batch of transactions on L2 amounts to at least 2MB  "),(0,o.kt)("li",{parentName:"ul"},"At least 24 new blocks have been created on the L1 since the last L2 settlement  ")),(0,o.kt)("p",null,"More activity on the rollup brings faster settlement, to a max rate of once every L1 block."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},'Q. "How do I set up a Rollux P2P replica node?"'),(0,o.kt)("br",{parentName:"p"}),"\n","A. ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://github.com/sidhujag/optimism/blob/develop/ops-bedrock/P2P.md"},"Guide"))," is available. Based on Optimism Bedrock requirements, the recommended hardware is a minimum of 16GB RAM and at least 100GB of free SSD space. In order to be accepted by the network you will need a P2P key, Peer IDs and their IPs. Reach out to Syscoin Foundation for this information."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},'Q. "What RPC/WSS Methods/Subscriptions are available?'),(0,o.kt)("br",{parentName:"p"}),"\n","A. Same as Optimism Bedrock (Until we have completed our own Rollux doc portal, refer to: ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://community.optimism.io/docs/developers/build/json-rpc/#"},"https://community.optimism.io/docs/developers/build/json-rpc/#")),")"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Q. Can you provide sample transactions of Rollux settling a batch on Syscoin NEVM and using PoDA on Syscoin Native (UTXO), and further info?"),(0,o.kt)("br",{parentName:"p"}),"\n","A. Yes. These are testnet transactions.",(0,o.kt)("br",{parentName:"p"}),"\n","NEVM: ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://tanenbaum.io/tx/0xbdb2618d09e47789f0318900d9cacc904d96369bee2baf44400721ef8b245d8e"},"https://tanenbaum.io/tx/0xbdb2618d09e47789f0318900d9cacc904d96369bee2baf44400721ef8b245d8e")),(0,o.kt)("br",{parentName:"p"}),"\n","PoDA: ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://blockbook-dev.elint.services/tx/bae30de7850c370c77eb3590f631070d95c1a175323771fac5ab867fb1342136"},"https://blockbook-dev.elint.services/tx/bae30de7850c370c77eb3590f631070d95c1a175323771fac5ab867fb1342136")),"  "),(0,o.kt)("p",null,"Note: The Blockbook explorer does not currently parse the PoDA hash, but it is visible in the raw transaction data as scriptPubKey.asm: \u201cOP_RETURN 20",(0,o.kt)("strong",{parentName:"p"},"7f262f3352669030f480dd881bc6b3fad68abfcffe81d8e98c7f3e88871ed3a4"),"\u201d"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Q. How can I see/retrieve the full raw data blobs the L1 receives from the L2?"),(0,o.kt)("br",{parentName:"p"}),"\n","A. The hash of the raw data blob is always stored on-chain for the purpose of proving data integrity, as seen above in OP_RETURN. As for the full raw data blobs, they are available within the native chain\u2019s mempool for a period of six hours before being pruned. During this window of time, archiving services can access and store the raw data. The data can be retrieved a couple of ways:  "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Syscoin Core RPCs: ",(0,o.kt)("inlineCode",{parentName:"li"},"listnevmblobdata"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"getnevmblobdata")),(0,o.kt)("li",{parentName:"ul"},"syscointx-js")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Q. Are there any established processes for archiving Rollux raw data committed to PoDA?"),(0,o.kt)("br",{parentName:"p"}),"\n","A. Yes. Syscoin Sentinel provides a PoDA client and server that enables a Cloudflare R2 archive process to be activated relatively easily. This means any Syscoin Core node can provide data archive service that rollup solutions like Rollux can use. Refer to: ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://github.com/syscoin/sentinel/blob/master/README.md"},"https://github.com/syscoin/sentinel/blob/master/README.md"))))}p.isMDXComponent=!0}}]);