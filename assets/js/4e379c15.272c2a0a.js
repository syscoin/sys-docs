(self.webpackChunksys_docs=self.webpackChunksys_docs||[]).push([[605],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=i,k=u["".concat(l,".").concat(m)]||u[m]||d[m]||r;return n?a.createElement(k,o(o({ref:t},p),{},{components:n})):a.createElement(k,o({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},61150:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return s},toc:function(){return l},default:function(){return p}});var a=n(22122),i=n(19756),r=(n(67294),n(3905)),o={},s={unversionedId:"dev-resources/sys/exchange-integration",id:"dev-resources/sys/exchange-integration",isDocsHomePage:!1,title:"SPT Exchange Integration",description:"This guide is a primer to help exchanges integrate Syscoin Platform Tokens (SPT's).",source:"@site/docs/dev-resources/sys/exchange-integration.mdx",sourceDirName:"dev-resources/sys",slug:"/dev-resources/sys/exchange-integration",permalink:"/docs/dev-resources/sys/exchange-integration",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"SPT Asset Index Technical Description",permalink:"/docs/dev-resources/sys/asset-index"},next:{title:"Testnet Setup",permalink:"/docs/dev-resources/sys/testnet"}},l=[{value:"Set up for Interacting with Syscoin Directly via RPC",id:"set-up-for-interacting-with-syscoin-directly-via-rpc",children:[]},{value:"Commonly Used RPC Functions for Exchange Integration",id:"commonly-used-rpc-functions-for-exchange-integration",children:[]},{value:"Setup for using Blockbook API and syscoinjs-lib",id:"setup-for-using-blockbook-api-and-syscoinjs-lib",children:[]}],c={toc:l};function p(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"This guide is a primer to help exchanges integrate Syscoin Platform Tokens (SPT's).")),(0,r.kt)("p",null,'The Syscoin platform provides a UTXO-based token issuance system embedded in the Syscoin blockchain. Transactions of SPT\'s consume network fees paid in SYS and can provide token recipients an accompanying default "pass-forward" amount of SYS dust to enable them to transact the SPT without having to acquire or own SYS beforehand.'),(0,r.kt)("p",null,"An SPT has several noteworthy properties. Most important is the ",(0,r.kt)("inlineCode",{parentName:"p"},"asset_guid"),', the deterministically-assigned unique identifier of the token on the Syscoin blockchain. Similar to Ethereum, anyone can create a token and make its symbol "AGX" but there can only ever be one official AGX token with the ',(0,r.kt)("inlineCode",{parentName:"p"},"asset_guid")," of 367794646. Several popular SPT's and their associated identifiers can be found in the table below."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"SPT Symbol"),(0,r.kt)("th",{parentName:"tr",align:"left"},"SPT Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"SPT Asset Guid"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Website"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"AGX"),(0,r.kt)("td",{parentName:"tr",align:"left"},"AGX Silver Token"),(0,r.kt)("td",{parentName:"tr",align:"left"},"367794646"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"AUX"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Official Interfix Gold backed Token"),(0,r.kt)("td",{parentName:"tr",align:"left"},"1358717298"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"BTZC"),(0,r.kt)("td",{parentName:"tr",align:"left"},"BeatzCoin SPT"),(0,r.kt)("td",{parentName:"tr",align:"left"},"315501466"),(0,r.kt)("td",{parentName:"tr",align:"left"})))),(0,r.kt)("p",null,"There are two paths for integrating SPT assets."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Interact with a syscoin daemon (syscoind) instance directly via RPC (you can optionally use ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/syscoin/syscoin-js"},"syscoin-js")," for this)"),(0,r.kt)("li",{parentName:"ul"},"Interact with Syscoin via a Web 3.0 approach by using ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/syscoin/syscoinjs-lib"},"syscoinjs-lib")," which interacts with a running ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/syscoin/blockbook"},"Syscoin Blockbook")," instance or a gateway of load-balanced Blockbook instances.")),(0,r.kt)("h2",{id:"set-up-for-interacting-with-syscoin-directly-via-rpc"},"Set up for Interacting with Syscoin Directly via RPC"),(0,r.kt)("p",null,"This walk-through assumes you are using the OS console."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Ensure the following line is in your syscoin.conf (default path ",(0,r.kt)("inlineCode",{parentName:"li"},"~/.syscoin/syscoin.conf"),")")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"assetindex=1\n")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Launch syscoind")),(0,r.kt)("blockquote",null,(0,r.kt)("h3",{parentName:"blockquote",id:"reindexing-to-build-local-asset-index"},"\ud83d\udcd8Reindexing to build local asset index"),(0,r.kt)("p",{parentName:"blockquote"},"If you previously launched syscoind without ",(0,r.kt)("inlineCode",{parentName:"p"},"assetindex=1")," in syscoin.conf, use -reindex, e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"syscoind -reindex"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"$ syscoind\n")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Create a wallet")),(0,r.kt)("blockquote",null,(0,r.kt)("h3",{parentName:"blockquote",id:"note"},"\ud83d\udcd8Note"),(0,r.kt)("p",{parentName:"blockquote"},"We strongly suggest creating two separate wallets, one strictly for SYS, and the other for SPT's with a smaller amount of SYS for transaction fees. This eliminates confusion and headaches related to coin control with SPT's.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},'$ syscoin-cli createwallet "walletname"\n')),(0,r.kt)("p",null,"From here on, all syscoin-cli calls will need to add the ",(0,r.kt)("inlineCode",{parentName:"p"},'-rpcwallet "walletname"')," argument.\nIf using http-rpc, the https url should be in the form of ",(0,r.kt)("inlineCode",{parentName:"p"},"http://[ip]:[port]/wallet/[walletname]")),(0,r.kt)("p",null,"You can also launch syscoind in a way that connects with a specific wallet by using the ",(0,r.kt)("inlineCode",{parentName:"p"},"-wallet")," argument with the path to the directory containing the wallet.dat file."),(0,r.kt)("h2",{id:"commonly-used-rpc-functions-for-exchange-integration"},"Commonly Used RPC Functions for Exchange Integration"),(0,r.kt)("p",null,"For RPC documentation, please see ",(0,r.kt)("a",{parentName:"p",href:"https://syscoincore.org/en/doc/4.2.0/"},"https://syscoincore.org/en/doc/4.2.0/")),(0,r.kt)("p",null,"You can also use use ",(0,r.kt)("inlineCode",{parentName:"p"},"help <command>")," for a full description of the RPC and its options and arguments"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Function"),(0,r.kt)("th",{parentName:"tr",align:"left"},"SYS"),(0,r.kt)("th",{parentName:"tr",align:"left"},"SPT"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Query address balances"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"addressbalance")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"assetallocationbalance"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Obtain the block height or other chain status info"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"getblockchaininfo")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"getblockchaininfo"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Obtain wallet transaction list"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"listtransactions")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"listunspent")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"listtransactions")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"listunspentasset"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Get transaction details"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"gettransaction")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"gettransaction"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Asset transfer"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"sendtoaddress")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"assetallocationsend"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Asset transfer (batch)"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"sendmany")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"assetallocationsendmany"))))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Query asset balances"),"\n",(0,r.kt)("inlineCode",{parentName:"p"},'assetallocationbalance <assetGUID> "[\\"<address>\\"]" <minimum#ofConfirmations (optional)>')),(0,r.kt)("p",null,"You can query the sum balance of multiple addresses by listing more than one address, e.g.:\n",(0,r.kt)("inlineCode",{parentName:"p"},'assetallocationbalance <assetGUID> "[\\"<address>\\",\\"<address>\\"]" <minimum#ofConfirmations (optional)>')),(0,r.kt)("p",null,'Output:\n"amount": SYS gas balance supplied for this asset\n"asset_amount": SPT balance'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},'$ syscoin-cli assetallocationbalance 530240372620954 "[\\"tsys1qedy7ukgnj9e96axgarw79e2au98ff9g4ffh829\\"]" 10\n\n{\n  "amount": 0.00001960,\n  "asset_amount": 3.55000000\n}\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Obtain the blockheight or other chain status info")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},'$ syscoin-cli getblockchaininfo\n\n{\n  "chain": "test",\n  "blocks": 575809,\n  "headers": 575809,\n  "bestblockhash": "0000006727f5114eee02624b08d3f1d0f62ff7850bf85c612400ce668b174908",\n  "difficulty": 0.006962848657727248,\n  "mediantime": 1616709431,\n  "verificationprogress": 0.9999993714602142,\n  "initialblockdownload": false,\n  "chainwork": "0000000000000000000000000000000000000000000000000000064f2f44f6c8",\n  "size_on_disk": 341575106,\n  "pruned": false,\n  "geth_sync_status": "waiting to sync...",\n  "geth_total_blocks": 0,\n  "geth_current_block": 0,\n  "softforks": {\n    "bip34": {\n      "type": "buried",\n      "active": true,\n      "height": 1\n    },\n    "bip66": {\n      "type": "buried",\n      "active": true,\n      "height": 1\n    },\n    "bip65": {\n      "type": "buried",\n      "active": true,\n      "height": 1\n    },\n    "csv": {\n      "type": "buried",\n      "active": true,\n      "height": 1\n    },\n    "segwit": {\n      "type": "buried",\n      "active": true,\n      "height": 0\n    },\n    "testdummy": {\n      "type": "bip9",\n      "bip9": {\n        "status": "active",\n        "start_time": 0,\n        "timeout": 999999999999,\n        "since": 550368\n      },\n      "height": 550368,\n      "active": true\n    },\n    "taproot": {\n      "type": "bip9",\n      "bip9": {\n        "status": "active",\n        "start_time": -1,\n        "timeout": 9223372036854775807,\n        "since": 0\n      },\n      "height": 0,\n      "active": true\n    }\n  },\n  "warnings": ""\n}\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Obtain wallet transaction list for assets"),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"listtransactions")," is general purpose. It covers all transaction types and its output is verbose.\n",(0,r.kt)("inlineCode",{parentName:"p"},"listunspentasset <assetGuid> <minimum#ofConfirmations (optional)>")," is more specific."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},'$ syscoin-cli listunspentasset 530240372620954 10\n[\n  {\n    "txid": "ac74df7b065bf501db991153920db3462780c8d238ef6fc5562ee7e4b2db565d",\n    "vout": 0,\n    "address": "tsys1qqzrxzg8cmyrl8xss353zkvty5qwlfga4r9tq4r",\n    "label": "Another address",\n    "scriptPubKey": "001400866120f8d907f39a108d222b3164a01df4a3b5",\n    "amount": 0.00500000,\n    "asset_guid": "530240372620954",\n    "asset_amount": 0.00000200,\n    "confirmations": 9771,\n    "spendable": true,\n    "solvable": true,\n    "desc": "wpkh([1712892e/0\'/0\'/1\']02aec158d644eb2744479c7a0410e30b91d6278a1091ff7a4cd7caf6c132b1b820)#u0azeyff",\n    "safe": true\n  }\n]\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Get transaction details")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"$ syscoin-cli gettransaction fa4ee19861d5f9c0aa46d20f332458e559921255cf98c0873afc2462849588ba\n")),(0,r.kt)("h2",{id:"setup-for-using-blockbook-api-and-syscoinjs-lib"},"Setup for using Blockbook API and syscoinjs-lib"),(0,r.kt)("p",null,"Syscoin Blockbook uses its own syscoind instance as the backend, and indexes the blockchain data and tracks XPUB-based account balances to serve the API."),(0,r.kt)("p",null,"Please follow the readme in ",(0,r.kt)("a",{parentName:"p",href:"https://www.github.com/syscoin/blockbook"},"https://www.github.com/syscoin/blockbook")," if you want to implement your own Blockbook server instance.\nsyscoinjs-lib is used to communicate with blockbook server and the documentation is located at ",(0,r.kt)("a",{parentName:"p",href:"https://www.github.com/syscoin/syscoinjs-lib"},"https://www.github.com/syscoin/syscoinjs-lib")),(0,r.kt)("p",null,"Examples for using syscoinjs-lib are located at ",(0,r.kt)("a",{parentName:"p",href:"https://www.github.com/syscoin/syscoinjs-lib-examples"},"https://www.github.com/syscoin/syscoinjs-lib-examples")),(0,r.kt)("p",null,"A public Blockbook server instance for Syscoin is located at ",(0,r.kt)("a",{parentName:"p",href:"https://sys1.bcfn.ca/"},"https://sys1.bcfn.ca")))}p.isMDXComponent=!0}}]);