"use strict";(self.webpackChunksys_docs=self.webpackChunksys_docs||[]).push([[540],{98338:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>u});var n=a(76687);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},h="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),h=c(a),m=o,u=h["".concat(l,".").concat(m)]||h[m]||p[m]||i;return a?n.createElement(u,r(r({ref:t},d),{},{components:a})):n.createElement(u,r({ref:t},d))}));function u(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,r=new Array(i);r[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[h]="string"==typeof e?e:o,r[1]=s;for(var c=2;c<i;c++)r[c]=a[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},53041:(e,t,a)=>{a.r(t),a.d(t,{default:()=>d,frontMatter:()=>i,metadata:()=>r,toc:()=>s});var n=a(87250),o=(a(76687),a(98338));const i={},r={unversionedId:"tech/poda",id:"tech/poda",isDocsHomePage:!1,title:"PoDA (Data Availability on Layer 1)",description:"Data availability is required to exist within the security domain of Layer 1 in order for rollups to properly serve critical financial applications by securing users\u2019 ability to exit to L1. Syscoin\u2019s L1 DA solution is called PoDA (Proof of Data Availability). Syscoin\u2019s PoDA differs from Ethereum\u2019s danksharding in how data is stored, presented, pruned, and how fees are calculated. PoDA has characteristics that make it a valuable alternative to Ethereum\u2019s work-in-progress data availability solution, Proto-Danksharding.",source:"@site/docs/tech/poda.mdx",sourceDirName:"tech",slug:"/tech/poda",permalink:"/docs/tech/poda",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Notary and Business Rulesets",permalink:"/docs/tech/notary"},next:{title:"Rollux",permalink:"/docs/tech/rollux"}},s=[{value:"Sample PoDA transaction",id:"sample-poda-transaction",children:[]},{value:"How to interact with PoDA",id:"how-to-interact-with-poda",children:[{value:"<code>syscoincreatenevmblob</code>",id:"syscoincreatenevmblob",children:[]},{value:"<code>syscoincreaterawnevmblob</code>",id:"syscoincreaterawnevmblob",children:[]},{value:"<code>listnevmblobdata</code>",id:"listnevmblobdata",children:[]},{value:"<code>getnevmblobdata</code>",id:"getnevmblobdata",children:[]}]},{value:"How to run a PoDA archive service",id:"how-to-run-a-poda-archive-service",children:[]}],l={toc:s},c="wrapper";function d(e){let{components:t,...a}=e;return(0,o.kt)(c,(0,n.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Data availability is required to exist within the security domain of Layer 1 in order for rollups to properly serve critical financial applications by securing users\u2019 ability to exit to L1. Syscoin\u2019s L1 DA solution is called PoDA (Proof of Data Availability). Syscoin\u2019s PoDA differs from Ethereum\u2019s danksharding in how data is stored, presented, pruned, and how fees are calculated. PoDA has characteristics that make it a valuable alternative to Ethereum\u2019s work-in-progress data availability solution, Proto-Danksharding."),(0,o.kt)("p",null,"PoDA\u2019s advantages can be summarized as:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Cheaper transactions"),(0,o.kt)("li",{parentName:"ul"},"No data sharding required"),(0,o.kt)("li",{parentName:"ul"},"Greater data throughput with efficient Keccak data blobs"),(0,o.kt)("li",{parentName:"ul"},"Secured by Bitcoin\u2019s own PoW plus Syscoin's finality"),(0,o.kt)("li",{parentName:"ul"},"More resilient to network-based outages/censorship"),(0,o.kt)("li",{parentName:"ul"},"Simpler data fee market based on Syscoin\u2019s UTXO fee market"),(0,o.kt)("li",{parentName:"ul"},"Nakamoto Assumption: Only one honest node is needed to guarantee data")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"PoDA's design is based on a separation of concerns between data availability and data archiving, with the protocol's purpose being the former.")),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The general purpose of PoDA  "),(0,o.kt)("ul",{parentName:"div"},(0,o.kt)("li",{parentName:"ul"},"Deterministically ensure and prove that raw data has been placed within the commons and that the public was given a sufficient and defined opportunity to archive it."),(0,o.kt)("li",{parentName:"ul"},"Permanently provide an on-chain hash necessary to verify the integrity of any archived data at a later time, and the option of custom hashes for other purposes a user might implement on top.")))),(0,o.kt)("p",null,"With PoDA, by default, a Keccak256 hash of the full data blob is stored on Layer 1, while an assumption is made that at least one honest party in the world will archive the blob within at least a six-hour window of time - similar to the honesty assumption made when syncing a Bitcoin node (at least one honest node). After this window of time, the blob is pruned from the network's cache while its hash remains on-chain."),(0,o.kt)("p",null,"Validium (fully offchain DA) is also available as an alternative to PoDA for less-critical applications where the focus might be on even lower cost and higher throughput by trading-off Layer 1 data security. However, in the case of Syscoin PoDA, Layer 1 data security is quite affordable; archivers store full data off-chain while you gain the security of an on-chain hash."),(0,o.kt)("h2",{id:"sample-poda-transaction"},"Sample PoDA transaction"),(0,o.kt)("p",null,"This PoDA transaction was submitted by Rollux L2 to the Syscoin Native (UTXO) Mainnet.",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://blockbook.syscoin.org/tx/8de8bf84a1c55a06ad2d10ee10e036e51d122d02ded0a57ebddfd1da640aebc6"},"https://blockbook.syscoin.org/tx/8de8bf84a1c55a06ad2d10ee10e036e51d122d02ded0a57ebddfd1da640aebc6")),"  "),(0,o.kt)("p",null,"Note: The version hash is visible in the raw transaction data as scriptPubKey.asm: \u201cOP_RETURN 20",(0,o.kt)("strong",{parentName:"p"},"e76700ef2ceab4e1f71af30a1fcf0662eedbb932aa66285ac30dbca46256e7d4"),"\u201d"),(0,o.kt)("p",null,"The hash of the data blob is stored on-chain as seen above in boldened portion of the sample's OP_RETURN. This should be used to prove the integrity of archived data at any future time."),(0,o.kt)("h2",{id:"how-to-interact-with-poda"},"How to interact with PoDA"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Syscoin Core (>=v4.4) provides an RPC interface that enables use of the PoDA protocol")),(0,o.kt)("p",null,"Once submitted, the transaction with version hash is stored onchain in the next available block, while the full data blob is made publicly available within the native chain\u2019s cache for a period of six hours of finality before being pruned.  As long as the blob is cached, archiving services can access and store it.  In the event that sufficient finality is absent, PoDA will retain blobs in the cache until aforementioned finality threshold is met.  This helps ensure published data is given proper guarantees to solve fisherman's dilemma even during adverse network conditions. "),(0,o.kt)("h3",{id:"syscoincreatenevmblob"},(0,o.kt)("inlineCode",{parentName:"h3"},"syscoincreatenevmblob")),(0,o.kt)("p",null,"Submit data blob with auto-generated Keccak256 versionHash (recommended)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},'syscoincreatenevmblob "data" ( overwrite_existing conf_target "estimate_mode" fee_rate )\n\nArguments:\n1. data                  (string, required) blob in hex\n2. overwrite_existing    (boolean, optional, default=true) true to overwrite an existing blob if it exists, false to return versionhash of data on duplicate.\n3. conf_target           (numeric, optional, default=wallet -txconfirmtarget) Confirmation target in blocks\n4. estimate_mode         (string, optional, default="unset") The fee estimate mode, must be one of (case insensitive):\n                         "unset"\n                         "economical"\n                         "conservative"\n5. fee_rate              (numeric or string, optional, default=not set, fall back to wallet fee estimation) Specify a fee rate in sat/vB.\n\nExamples:\n> syscoin-cli syscoincreatenevmblob "data"\n> curl --user myusername --data-binary \'{"jsonrpc": "1.0", "id": "curltest", "method": "syscoincreatenevmblob", "params": ["data"]}\' -H \'content-type: text/plain;\' http://127.0.0.1:8370/\n')),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"You can extend the TTL (time-to-live) of a PoDA blob for another six hours by resubmitting the same exact blob with the ",(0,o.kt)("inlineCode",{parentName:"p"},"overwrite_existing")," flag set to TRUE."))),(0,o.kt)("h3",{id:"syscoincreaterawnevmblob"},(0,o.kt)("inlineCode",{parentName:"h3"},"syscoincreaterawnevmblob")),(0,o.kt)("p",null,"Submit data blob with custom (user-specified) versionHash. This might be useful if you wish to use a different hash algorithm or implement some custom commitment scheme as a layer on top of PoDA. Otherwise, it is best to stick with the ",(0,o.kt)("inlineCode",{parentName:"p"},"syscoincreatenevmblob")," standard."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},'syscoincreaterawnevmblob "versionhash" "data" ( conf_target "estimate_mode" fee_rate )\n\nArguments:\n1. versionhash      (string, required) Version hash of the blob\n2. data             (string, required) data in hex\n3. conf_target      (numeric, optional, default=wallet -txconfirmtarget) Confirmation target in blocks\n4. estimate_mode    (string, optional, default="unset") The fee estimate mode, must be one of (case insensitive):\n                    "unset"\n                    "economical"\n                    "conservative"\n5. fee_rate         (numeric or string, optional, default=not set, fall back to wallet fee estimation) Specify a fee rate in sat/vB.\n\nExamples:\n> syscoin-cli syscoincreaterawnevmblob "versionhash" "data" 6 economical 25\n> curl --user myusername --data-binary \'{"jsonrpc": "1.0", "id": "curltest", "method": "syscoincreaterawnevmblob", "params": ["versionhash" "data" 6 economical 25]}\' -H \'content-type: text/plain;\' http://127.0.0.1:8370/\n')),(0,o.kt)("h3",{id:"listnevmblobdata"},(0,o.kt)("inlineCode",{parentName:"h3"},"listnevmblobdata")),(0,o.kt)("p",null,"Retrieve a list of blobs from the UTXO cache."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},'listnevmblobdata ( count from {"getdata":bool} )\n\nArguments:\n1. count                   (numeric, optional, default=10) The number of results to return.\n2. from                    (numeric, optional, default=0) The number of results to skip.\n3. options                 (json object, optional) A json object with options to filter results.\n     {\n       "getdata": bool,    (boolean, optional) Return data from blob\n     }\n\nResult:\n[                             (json array)\n  {                           (json object)\n    "versionhash" : "hex",    (string) The version hash of the NEVM blob\n    "datasize" : n,           (numeric) Size of data blob in bytes\n    "data" : "hex"            (string) Blob data if getdata is true\n  },\n  ...\n]\n\nExamples:\n> syscoin-cli listnevmblobdata 0\n> syscoin-cli listnevmblobdata 10 10\n> syscoin-cli listnevmblobdata 0 0 \'{"getdata":true}\'\n> curl --user myusername --data-binary \'{"jsonrpc": "1.0", "id": "curltest", "method": "listnevmblobdata", "params": [0, 0, \'{"getdata":false}\']}\' -H \'content-type: text/plain;\' http://127.0.0.1:8370/\n')),(0,o.kt)("h3",{id:"getnevmblobdata"},(0,o.kt)("inlineCode",{parentName:"h3"},"getnevmblobdata")),(0,o.kt)("p",null,"Retrieve a specific blob from the cache by version hash or transaction id"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},'getnevmblobdata "versionhash_or_txid" ( getdata )\n\nArguments:\n1. versionhash_or_txid    (string, required) The version hash or txid of the NEVM blob\n2. getdata                (boolean, optional) Optional, retrieve the blob data\n\nExamples:\n> syscoin-cli getnevmblobdata \n> curl --user myusername --data-binary \'{"jsonrpc": "1.0", "id": "curltest", "method": "getnevmblobdata", "params": []}\' -H \'content-type: text/plain;\' http://127.0.0.1:8370/\n')),(0,o.kt)("h2",{id:"how-to-run-a-poda-archive-service"},"How to run a PoDA archive service"),(0,o.kt)("p",null,"With PoDA, the focus is DA, and archiving is left non-determined. However, tools are available."),(0,o.kt)("p",null,"Syscoin's Sentinel implementation provides the means to both store and retrieve PoDA data blobs. Archivers may also employ other means at their discretion. If decentralized archiving is a priority, there are networks that can be custom-integrated with PoDA, such a KYVE."),(0,o.kt)("p",null,"Syscoin ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://github.com/syscoin/sentinel"},"Sentinel"))," includes a PoDA archive client/server with out-of-the-box support for Filecoin/Lighthouse and Cloudflare R2 (supply your API keys)",(0,o.kt)("br",{parentName:"p"}),"\n","This is relatively easy to set up. Refer to the ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://github.com/syscoin/sentinel#poda"},"instructions"))," on GitHub."))}d.isMDXComponent=!0}}]);