"use strict";(self.webpackChunksys_docs=self.webpackChunksys_docs||[]).push([[7283],{98338:(e,t,a)=>{a.d(t,{Zo:()=>h,kt:()=>y});var n=a(76687);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},h=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),p=c(a),u=i,y=p["".concat(l,".").concat(u)]||p[u]||d[u]||o;return a?n.createElement(y,r(r({ref:t},h),{},{components:a})):n.createElement(y,r({ref:t},h))}));function y(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,r=new Array(o);r[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:i,r[1]=s;for(var c=2;c<o;c++)r[c]=a[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},54287:(e,t,a)=>{a.r(t),a.d(t,{default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>s});var n=a(87250),i=(a(76687),a(98338));const o={sidebar_position:2},r={unversionedId:"intro/syscoin-what",id:"intro/syscoin-what",isDocsHomePage:!1,title:"A More Detailed Overview",description:"What is Syscoin?",source:"@site/docs/intro/syscoin-what.mdx",sourceDirName:"intro",slug:"/intro/syscoin-what",permalink:"/docs/intro/syscoin-what",version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Syscoin in a Nutshell",permalink:"/docs/intro/nutshell"},next:{title:"Bitcoin Technology",permalink:"/docs/tech/bitcoin-tech"}},s=[{value:"What is Syscoin?",id:"what-is-syscoin",children:[]},{value:"What Syscoin Provides",id:"what-syscoin-provides",children:[]},{value:"Why Choose Syscoin?",id:"why-choose-syscoin",children:[]}],l={toc:s},c="wrapper";function h(e){let{components:t,...o}=e;return(0,i.kt)(c,(0,n.Z)({},l,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"what-is-syscoin"},"What is Syscoin?"),(0,i.kt)("p",null,"Syscoin is a Bitcoin L2 that is ",(0,i.kt)("a",{parentName:"p",href:"/docs/tech/merged-mining"},"merge-mined")," with Bitcoin, and a modular Proof-of-Work blockchain solution that brings rollups to Bitcoin's PoW. Syscoin provides to Bitcoin a scalable data availability layer which is necessary for rollups (and other EVM or AltVM layers) to tap into Bitcoin's network in a safe and scalable way. Syscoin's base is comprised of a dual-chain Layer 1: the core is the Syscoin native (UTXO) blockchain providing ",(0,i.kt)("a",{parentName:"p",href:"/docs/tech/poda"},"data availability")," and ",(0,i.kt)("a",{parentName:"p",href:"/docs/tech/finality"},"finality"),". Running in tandem with the UTXO chain is an Ethereum Virtual Machine (EVM) chain called ",(0,i.kt)("a",{parentName:"p",href:"/docs/tech/nevm"},(0,i.kt)("em",{parentName:"a"},"NEVM"))," (Network-Enhanced Virtual Machine), which is merged mined alongside the UTXO chain and also inherits finality."),(0,i.kt)("p",null,"Originally brought to mainnet in 2014, the Syscoin protocol has been improved iteratively, settling into the robust and useful protocol that it is today. "),(0,i.kt)("p",null,"What percentage of Bitcoin's hashrate is supporting Syscoin? Compare to see:",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("a",{parentName:"p",href:"https://www.coinwarz.com/mining/bitcoin/hashrate-chart"},(0,i.kt)("strong",{parentName:"a"},"Bitcoin hashrate")),(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("a",{parentName:"p",href:"https://www.coinwarz.com/mining/syscoin/hashrate-chart"},(0,i.kt)("strong",{parentName:"a"},"Syscoin hashrate"))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"img",src:a(16400).Z})),(0,i.kt)("h2",{id:"what-syscoin-provides"},"What Syscoin Provides"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/tech/poda"},(0,i.kt)("strong",{parentName:"a"},"PoDA"))," - Proof of Data Availability is an L1 DA protocol for rollups. It is hash-based and built on UTXO. Efficient, general purpose, easy to integrate."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://rollux.com"},(0,i.kt)("strong",{parentName:"a"},"Rollux"))," - An OPStack rollup anchored to Bitcoin through Syscoin's DA protocol. Provides 2-second blocktime, extremely low fees, and supports application layers on top.  "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/tech/nevm"},(0,i.kt)("strong",{parentName:"a"},"NEVM"))," - Network-Enhanced Virtual Machine is the L1 EVM of Syscoin, made specifically for supporting rollups and other scaling layers."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Ordinals support")," - Our native Bitcoin-based UTXO chain remains closely up-to-date with Bitcoin Core and includes support for Taproot/Schnorr. This means there is a great deal of potential here for cross-chain and even cross-architecture (UTXO <-> EVM Rollup) ordinals. Further, our PoDA protocol means ordinal creators can secure data payloads in a new, more efficient way."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/tech/sentrynodes"},(0,i.kt)("strong",{parentName:"a"},"Sentry Nodes and Finality"))," - Incentivized full nodes deterministically provide ",(0,i.kt)("a",{parentName:"li",href:"/docs/tech/finality"},"finality")," through multi-quorum chainlocks (4 x 400) as additive security on top of Bitcoin's PoW. Owners of these collateralized nodes receive rewards, including seniority benefits, for the services they provide to the network."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/tech/z-dag"},(0,i.kt)("strong",{parentName:"a"},"Z-DAG"))," - Based upon Satoshi's \"snack machine\" concept, Z-DAG is a UTXO-based instant settlement protocol with probabilistic security used to enable a very high throughput of UTXO transfers. Works with UTXO-based assets. In a nutshell, it utilizes Bitcoin's mempool design as a DAG by providing double-spend awareness across a mesh topology."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/tech/notary"},(0,i.kt)("strong",{parentName:"a"},"Notary rulesets"))," - This allows ",(0,i.kt)("a",{parentName:"li",href:"/docs/tech/tokens"},(0,i.kt)("em",{parentName:"a"},"Syscoin Platform Token (SPT)"))," creators to apply their own rulesets on transfers of their SPT and then accept or deny the transfers by signing or not signing the transactions. These off-chain rulesets enable SPT asset managers to maintain compliance even when regulations or business rules change.")),(0,i.kt)("h2",{id:"why-choose-syscoin"},"Why Choose Syscoin?"),(0,i.kt)("p",null,"Security: Syscoin provides manifold security as a settlement and data availability layer for rollups and other scaling solutions. First, leveraging merge-mining with Bitcoin, Syscoin is currently powered by around 60% of Bitcoin's own hashrate. This taps you into the world's best Proof-of-Work network for proven antifragility and fault tolerance as well as resilience against economic black swans, at a level which pure Proof-of-stake systems simply cannot match. Additionally, Syscoin's Sentry nodes provide multi-quorum chainlocks for an additive layer of finality which keeps intact the benefits of Proof-of-work while greatly mitigating the risks of 51% attacks and selfish mining. Furthermore, the security of Syscoin's data availability will soon extend to nearly any blockchain ecosystem through zkDA, a new Syscoin innovation in-progress that also brings a new level of cross-chain interoperability. All of this underscores Syscoin's commitment to robust security."),(0,i.kt)("p",null,"Scalability: With a unique and holistically modular design, Syscoin stands out with exceptional support for scalability layers. Providing a live dedicated data availability protocol on Layer 1 means Syscoin is already ideal for natively supporting rollups of all kinds as scaling layers. Rollux, the first rollup built on Syscoin, is a perfect example.  Scalability, in this context, extends beyond transaction volume and speed of settlement; it also encompasses the affordability of transactions. Low cost execution makes Syscoin an attractive option for projects seeking a settlement layer for their rollup, especially those aiming to make frequent state commitments. In comparison to other EVM-based chains, Syscoin is more scalable and cost-effective, but that's not all."),(0,i.kt)("p",null,"Decentralization: The network boasts approximately 2,700 independently owned and operated Sentry nodes which work together deterministically to serve a decentralized finality mechanism. The rewards associated with hosting a Sentry node contribute to their growth and retention, including seniority benefits. Over 75% of these nodes have been active and collateralized for over two and half years. Furthermore, SYS, the native currency of Syscoin, has been in circulation since 2014 and is broadly distributed."),(0,i.kt)("p",null,"In summary, Syscoin is"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"modular"),(0,i.kt)("li",{parentName:"ul"},"exceptionally secure"),(0,i.kt)("li",{parentName:"ul"},"scalable"),(0,i.kt)("li",{parentName:"ul"},"decentralized"),(0,i.kt)("li",{parentName:"ul"},"flexible"),(0,i.kt)("li",{parentName:"ul"},"economical"),(0,i.kt)("li",{parentName:"ul"},"reliable")),(0,i.kt)("p",null,"Projects that are considering Syscoin, or that have questions, can reach out to the community and teams."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Contact us here: ",(0,i.kt)("a",{parentName:"li",href:"https://syscoin.org/contact"},"https://syscoin.org/contact")),(0,i.kt)("li",{parentName:"ul"},"Or you can connect with us on the Syscoin Discord server: ",(0,i.kt)("a",{parentName:"li",href:"https://discord.gg/syscoin"},"https://discord.gg/syscoin"))))}h.isMDXComponent=!0},16400:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/diagram_SyscoinOverallDesign-82b321ac10a146b018bf18b1be2434ab.png"}}]);