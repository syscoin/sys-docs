"use strict";(self.webpackChunksys_docs=self.webpackChunksys_docs||[]).push([[9160],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>h});var a=t(67294);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,a,s=function(e,n){if(null==e)return{};var t,a,s={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var l=a.createContext({}),u=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=u(e.components);return a.createElement(l.Provider,{value:n},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},f=a.forwardRef((function(e,n){var t=e.components,s=e.mdxType,o=e.originalType,l=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),c=u(t),f=s,h=c["".concat(l,".").concat(f)]||c[f]||p[f]||o;return t?a.createElement(h,i(i({ref:n},d),{},{components:t})):a.createElement(h,i({ref:n},d))}));function h(e,n){var t=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var o=t.length,i=new Array(o);i[0]=f;var r={};for(var l in n)hasOwnProperty.call(n,l)&&(r[l]=n[l]);r.originalType=e,r[c]="string"==typeof e?e:s,i[1]=r;for(var u=2;u<o;u++)i[u]=t[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},50218:(e,n,t)=>{t.r(n),t.d(n,{default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>r});var a=t(87462),s=(t(67294),t(3905));const o={},i={unversionedId:"guides/spts/create-issue-tokens",id:"guides/spts/create-issue-tokens",isDocsHomePage:!1,title:"Create/Issue Tokens",description:"UPDATE: The Syscoin Core RPCs used in the example below, and other SPT-oriented RPCs, have been deprecated and removed as of Syscoin Core 4.4.",source:"@site/docs/guides/spts/create-issue-tokens.mdx",sourceDirName:"guides/spts",slug:"/guides/spts/create-issue-tokens",permalink:"/docs/guides/spts/create-issue-tokens",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Auxiliary Fees",permalink:"/docs/guides/spts/aux-fees"},next:{title:"Notary and Business Rulesets",permalink:"/docs/guides/spts/notary-business-rulesets"}},r=[{value:"1. Ensure your wallet has over 1 SYS to fund asset creation and other operations",id:"1-ensure-your-wallet-has-over-1-sys-to-fund-asset-creation-and-other-operations",children:[]},{value:"2. Define and create your token",id:"2-define-and-create-your-token",children:[]},{value:"3. Check the token specification",id:"3-check-the-token-specification",children:[]},{value:"4. Issue Fungible Tokens",id:"4-issue-fungible-tokens",children:[]},{value:"4b. Issue Non-Fungible Tokens",id:"4b-issue-non-fungible-tokens",children:[]},{value:"4b(i). How to Issue and Transfer a Fractional (Divisible) Non-Fungible Token",id:"4bi-how-to-issue-and-transfer-a-fractional-divisible-non-fungible-token",children:[]},{value:"4b(ii). How to Issue and Transfer a Non-Fractional Non-Fungible Token",id:"4bii-how-to-issue-and-transfer-a-non-fractional-non-fungible-token",children:[]}],l={toc:r},u="wrapper";function d(e){let{components:n,...t}=e;return(0,s.kt)(u,(0,a.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},(0,s.kt)("strong",{parentName:"p"},"UPDATE:")," The Syscoin Core RPCs used in the example below, and other SPT-oriented RPCs, have been deprecated and removed as of Syscoin Core 4.4.",(0,s.kt)("br",{parentName:"p"}),"\n","Now ",(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("a",{parentName:"strong",href:"https://github.com/syscoin/syscoinjs-lib"},"syscoinjs-lib"))," and ",(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("a",{parentName:"strong",href:"https://github.com/syscoin/syscointx-js"},"syscointx-js"))," are used to create/manage digital assets, auxfees, and notaries on the UTXO chain."),(0,s.kt)("p",{parentName:"div"},"Examples are available at ",(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("a",{parentName:"strong",href:"https://github.com/syscoin/syscoinjs-lib-examples"},"https://github.com/syscoin/syscoinjs-lib-examples")),"."),(0,s.kt)("p",{parentName:"div"},"For a complete list of these deprecated RPCs, review the ",(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("a",{parentName:"strong",href:"https://github.com/syscoin/syscoin/blob/master/doc/release-notes/release-notes-4.4.0.md"},"Syscoin Core 4.4 release notes")),"."))),(0,s.kt)("p",null,"This guide helps you create and issue a Syscoin Platform Token (SPT) using Syscoin Core 4.3."),(0,s.kt)("blockquote",null,(0,s.kt)("h3",{parentName:"blockquote",id:"changes-to-the-syscoin-token-platform-since-syscoin-core-3"},"\ud83d\udea7Changes to the Syscoin Token Platform since Syscoin Core 3")),(0,s.kt)("blockquote",null,(0,s.kt)("ul",{parentName:"blockquote"},(0,s.kt)("li",{parentName:"ul"},"Non-Fungible Tokens (NFT), both fractional and non-fractional, are now supported"),(0,s.kt)("li",{parentName:"ul"},"All tokens are now UTXO-based (like Bitcoin) for greater efficiency instead of Account-based (like Ethereum)"),(0,s.kt)("li",{parentName:"ul"},"Tokens can now be used with Syscoin Bridge when Agent nodes are active"),(0,s.kt)("li",{parentName:"ul"},"Token creation fee is 1 SYS instead of 500 SYS"),(0,s.kt)("li",{parentName:"ul"},"New option: notary_address, notary_details (",(0,s.kt)("a",{parentName:"li",href:"notary-business-rulesets"},"learn more"),")"),(0,s.kt)("li",{parentName:"ul"},"New option: auxfee_details (",(0,s.kt)("a",{parentName:"li",href:"aux-fees"},"learn more"),")"),(0,s.kt)("li",{parentName:"ul"},"New option: contract (the contract of the token on the NEVM chain)"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"asset_guid")," is the unique identifier of a token"),(0,s.kt)("li",{parentName:"ul"},"Tokens are now address-only. On-chain aliases have been removed for greater scalability."),(0,s.kt)("li",{parentName:"ul"},"P2PWKH and P2WSH are the current supported witness programs. Future witness programs may be included in Bitcoin Core and Syscoin Core enhancements to extend functionality."))),(0,s.kt)("h2",{id:"1-ensure-your-wallet-has-over-1-sys-to-fund-asset-creation-and-other-operations"},"1. Ensure your wallet has over 1 SYS to fund asset creation and other operations"),(0,s.kt)("p",null,"The token creation fee is currently 1 SYS. You'll also need extra to serve as a gas fund for the token, and for future transactions such as updating your token spec."),(0,s.kt)("p",null,"If you need to send 1 or more SYS to your wallet, wait until your transaction has at least one confirmation, then proceed."),(0,s.kt)("h2",{id:"2-define-and-create-your-token"},"2. Define and create your token"),(0,s.kt)("p",null,"We will now define then create the SPT using the ",(0,s.kt)("inlineCode",{parentName:"p"},"assetnew")," command. This command will sign and broadcast the transaction to the network, and return the transaction ID."),(0,s.kt)("p",null,"In this example we will create a very basic SPT without using the ",(0,s.kt)("inlineCode",{parentName:"p"},"contract"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"aux_fees")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"notary")," options."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-text"},'$ syscoin-cli help assetnew\n\nassetnew funding_amount "symbol" "description" "contract" precision max_supply ( updatecapability_flags "notary_address" {"endpoint":"str","instant_transfers":bool,"hd_required":bool} {"auxfee_address":"str","fee_struct":[,,...]} )\n\nCreate a new asset\n\nArguments:\n1. funding_amount                    (numeric or string, required) Fund resulting UTXO owning the asset by this much SYS for gas.\n2. symbol                            (string, required) Asset symbol (1-8 characters)\n3. description                       (string, required) Public description of the token.\n4. contract                          (string, required) Ethereum token contract for SyscoinX bridge. Must be in hex and not include the \'0x\' format tag. For example contract \'0xb060ddb93707d2bc2f8bcc39451a5a28852f8d1d\' should be set as \'b060ddb93707d2bc2f8bcc39451a5a28852f8d1d\'. Leave empty for no smart contract bridge.\n5. precision                         (numeric, required) Precision of balances. Must be between 0 and 8. The lower it is the higher possible max_supply is available since the supply is represented as a 64 bit integer. With a precision of 8 the max supply is 10 billion.\n6. max_supply                        (numeric or string, required) Maximum supply of this asset. Depends on the precision value that is set, the lower the precision the higher max_supply can be.\n7. updatecapability_flags            (numeric) Ability to update certain fields. Must be decimal value which is a bitmask for certain rights to update. The bitmask 1 represents the ability to update public data field, 2 for updating the smart contract field, 4 for updating supply, 8 for updating notary address, 16 for updating notary details, 32 for updating auxfee details, 64 for ability to update the capability flags (this field). 127 for all. 0 for none (not updatable).\n8. notary_address                    (string) Notary address\n9. notary_details                    (json object) Notary details structure (if notary_address is set)\n     {\n       "endpoint": "str",            (string, required) Notary API endpoint (if applicable)\n       "instant_transfers": bool,    (boolean, required) Enforced double-spend prevention on Notary for Instant Transfers\n       "hd_required": bool,          (boolean, required) If Notary requires HD Wallet approval (for sender approval specifically applicable to change address schemes), usually in the form of account XPUB or Verifiable Credential of account XPUB using DID\n     }\n10. auxfee_details                   (json object) Auxiliary fee structure (may be enforced if notary is set)\n     {\n       "auxfee_address": "str",      (string, required) AuxFee address\n       "fee_struct": [               (json array, required) Auxiliary fee structure\n         ,                           (numeric or string, required) Bound (in amount) for for the fee level based on total transaction amount\n         ,                           (numeric, required) The percentage in %% to share with the operator. The value must be\n                                     between 0.00(0%%) and 0.65535(65.535%%).\n         ...\n       ],\n     }\n\nResult:\n{                      (json object)\n  "txid" : "hex",      (string) The transaction id\n  "asset_guid" : n     (numeric) The unique identifier of the new asset\n}\n\nExamples:\n> syscoin-cli assetnew 1 "CAT" "publicvalue" "contractaddr" 8 1000 127 "notary_address" {} {}\n> curl --user myusername --data-binary \'{"jsonrpc": "1.0", "id": "curltest", "method": "assetnew", "params": [1, "CAT", "publicvalue", "contractaddr", 8, 1000, 127, "notary_address", {}, {}]}\' -H \'content-type: text/plain;\' http://127.0.0.1:8370/\n')),(0,s.kt)("blockquote",null,(0,s.kt)("h3",{parentName:"blockquote",id:"aux_fees"},"\ud83d\udcd8aux_fees"),(0,s.kt)("p",{parentName:"blockquote"},"The aux_fees parameter is used to specify a custom fee structure for your token. ",(0,s.kt)("a",{parentName:"p",href:"aux-fees"},"Learn about aux_fees and how to use them"),".")),(0,s.kt)("p",null,"Summary of ",(0,s.kt)("inlineCode",{parentName:"p"},"assetnew")," arguments:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'assetnew <gasFundAmount> "<tokenSymbol>" "<tokenDescription>" "<contractERC20>" <precision> <maxSupply> <updateCapabilityFlags> "<notaryAddress>" {<notaryDetailsJSON>} {<auxFeesJSON>}\n')),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"A standard fungible token")," looks as follows:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-text"},'$ syscoin-cli assetnew 100 "MYASSET" "This is my asset, a very good asset" "" 8 10000 127 "" {} {}\n\n{\n  "txid": "67bbbeb8635bf6894c460bfda4cda0ced2a69e3e9ebe01dd9bba54e878d043ad",\n  "asset_guid": 3942786440\n}\n')),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"A non-fractional (indivisible), non-fungible token")," can be created as follows with precision set to zero and max supply 1.0:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-text"},'$ syscoin-cli assetnew 100 "ANDYSELF" "Self-Portrait, Andy Warhol, Original (1963)" "" 0 1.0 127 "" {} {}\n')),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"A fractional (divisible) non-fungible token")," is created when a token is issued via ",(0,s.kt)("inlineCode",{parentName:"p"},"assetsend")," with a NFTID specified. See section 4b(i) below."),(0,s.kt)("p",null,"Record the assigned asset GUID for future use."),(0,s.kt)("p",null,"Wait for this transaction to receive at least one confirmation, then proceed."),(0,s.kt)("h2",{id:"3-check-the-token-specification"},"3. Check the token specification"),(0,s.kt)("p",null,"Review your token specification as it exists on the Syscoin blockchain by executing this command: ",(0,s.kt)("inlineCode",{parentName:"p"},"assetinfo <assetGUID>")),(0,s.kt)("p",null,"It should look similar to this and reflect the attributes you have most recently set:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-text"},'$ syscoin-cli assetinfo 3942786440\n\n{\n  "asset_guid": 3942786440,\n  "symbol": "MYASSET",\n  "public_value": {\n    "desc": "This is my asset, a very good asset"\n  },\n  "contract": "",\n  "notary_address": "",\n  "total_supply": 0.00000000,\n  "max_supply": 10000.00000000,\n  "updatecapability_flags": 127,\n  "precision": 8\n}\n')),(0,s.kt)("p",null,'The total supply will remain "0" until you use ',(0,s.kt)("inlineCode",{parentName:"p"},"assetsend")," to issue some of the tokens."),(0,s.kt)("blockquote",null,(0,s.kt)("h3",{parentName:"blockquote",id:"a-note-on-issuance-the-difference-between-assetsend-and-assetallocationsend"},"\ud83d\udcd8A note on issuance: The difference between ",(0,s.kt)("inlineCode",{parentName:"h3"},"assetsend")," and ",(0,s.kt)("inlineCode",{parentName:"h3"},"assetallocationsend")),(0,s.kt)("p",{parentName:"blockquote"},(0,s.kt)("inlineCode",{parentName:"p"},"assetsend")," is not for sending existing tokens from one address to another (asset allocation), it is strictly for issuance of tokens by the owner of the token specification."),(0,s.kt)("p",{parentName:"blockquote"},"Token users can learn how to perform basic asset allocations with ",(0,s.kt)("inlineCode",{parentName:"p"},"assetallocationsend")," ",(0,s.kt)("a",{parentName:"p",href:"use-tokens"},"here"),".")),(0,s.kt)("h2",{id:"4-issue-fungible-tokens"},"4. Issue Fungible Tokens"),(0,s.kt)("p",null,"This step covers how to issue a quantity of fungible tokens into circulation."),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"assetsend")," will issue and allocate a designated quantity of tokens to an address. It also signs and broadcasts the transaction to the network, and returns the transaction ID."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-text"},'$ help assetsend\n\nassetsend asset_guid "address" amount ( sys_amount NFTID )\n\nSend an asset you own to another address.\n\nArguments:\n1. asset_guid    (numeric, required) The asset guid.\n2. address       (string, required) The address to send the asset to (creates an asset allocation).\n3. amount        (numeric or string, required) Amount of asset to send.\n4. sys_amount    (numeric or string) Amount of syscoin to send.\n5. NFTID         (numeric) Optional NFT ID to send\n\nResult:\n{                    (json object)\n  "txid" : "hex"     (string) The transaction id\n}\n\nExamples:\n> syscoin-cli assetsend "asset_guid" "address" "amount" "sys_amount" "NFTID"\n> curl --user myusername --data-binary \'{"jsonrpc": "1.0", "id": "curltest", "method": "assetsend", "params": ["asset_guid", "address", "amount",  "sys_amount", "NFTID"]}\' -H \'content-type: text/plain;\' http://127.0.0.1:8370/\n')),(0,s.kt)("p",null,"Summary of ",(0,s.kt)("inlineCode",{parentName:"p"},"assetsend")," arguments:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'assetsend <assetGUID> "<recipientAddress>" <assetAmount> <sysAmount> <NFTID>\n')),(0,s.kt)("p",null,"In this simple example we will not specify an NFTID - leave this blank. The issuance is handled as fungible when NFTID ",(0,s.kt)("strong",{parentName:"p"},"is not")," used. We will include a small amount of SYS for gas."),(0,s.kt)("p",null,"Our command for issuing a fungible portion of 425 tokens is as follows:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-text"},'$ syscoin-cli assetsend 3942786440 "tsys1q7mn0aymk3cwv0uf3udegn68l3u5equz0x02jev" 425 0.0000098\n\n{\n  "txid": "fcdb5d1793cc40c7f266e3f8fd8f8b74ffdf8f8f1e9c5e8b2c1c3aea9e36a4e9",\n  "assets_issued_count": 1,\n  "assets_issued": [\n    {\n      "asset_guid": 3942786440,\n      "amount": 425.00000000,\n      "sys_amount": 0.00000980\n    }\n  ]\n}\n')),(0,s.kt)("h2",{id:"4b-issue-non-fungible-tokens"},"4b. Issue Non-Fungible Tokens"),(0,s.kt)("p",null,"This step covers how to issue and transfer a non-fungible token to its first owner. ",(0,s.kt)("strong",{parentName:"p"},"To issue fungible tokens, go to subsection 4a.")),(0,s.kt)("p",null,"Syscoin 4.2 enables issuers to ",(0,s.kt)("strong",{parentName:"p"},"optionally")," assign a unique identifier to an issuance, which effectively makes it an NFT. Using ",(0,s.kt)("inlineCode",{parentName:"p"},"assetsend")," with NFTID will issue and allocate a non-fungible token to an address. It also signs and broadcasts the transaction to the network, and returns the transaction ID."),(0,s.kt)("p",null,"Further, ",(0,s.kt)("strong",{parentName:"p"},"Divisible and Non-Divisible NFTs can be issued.")," This article covers how to do both."),(0,s.kt)("blockquote",null,(0,s.kt)("h3",{parentName:"blockquote",id:"nft-data"},"\ud83d\udcd8NFT Data"),(0,s.kt)("p",{parentName:"blockquote"},"The issuer-assigned ID of an NFT is stored on the Syscoin blockchain (NFTID). Beyond the unique identifier, storage of any detailed-oriented data associated with the asset is the responsibility of the issuer, and isn't stored on the Syscoin blockchain. This is part of what keeps the Syscoin blockchain and its NFT functionality efficient and scalable."),(0,s.kt)("p",{parentName:"blockquote"},"The issuer-assigned NFTID is a 4 byte unsigned integer with a max value of 4294967295. Syscoin Core also assigns a unique identifier of the same byte-length and type to ensure global uniqueness on the blockchain. The total footprint of an NFT is only 8 bytes greater than a standard fungible token.")),(0,s.kt)("h2",{id:"4bi-how-to-issue-and-transfer-a-fractional-divisible-non-fungible-token"},"4b(i). How to Issue and Transfer a Fractional (Divisible) Non-Fungible Token"),(0,s.kt)("p",null,"In this example we will work with a testnet asset representing an inventory of up to 1,000 serialized 100oz gold bars, 6 of which have already been issued to owners."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-text"},'$ syscoin-cli assetinfo 2433418946\n\n{\n  "asset_guid": 2433418946,\n  "symbol": "AU100",\n  "public_value": {\n    "desc": "XYZ Vaulting Co. - 100oz AU bar - Royal Canadian Mint - Serialized"\n  },\n  "contract": "",\n  "notary_address": "",\n  "total_supply": 6.000000,\n  "max_supply": 1000.000000,\n  "updatecapability_flags": 127,\n  "precision": 6\n}\n')),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"1.")," issue another entire bar (1 new token) and identify it with the serial number stamped on the physical asset by the Royal Canadian Mint (13077), and send to a designated recipient address - in this case an address for which you hold the key. Send a small amount of SYS for gas to be used in the future, too."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-text"},'$ syscoin-cli assetsend 2433418946 "tsys1qs5wd5gftn22dtf7d00gvfkhjvdkdvlufpk86wj" 1 0.0000098 13077\n\n{\n  "txid": "4946da4260cb5b8eed4f6be95673fd2aa48d349df2ed81921faed04eef4fb01b",\n  "assets_issued_count": 1,\n  "assets_issued": [\n    {\n      "asset_guid": 56167720748738,\n      "base_asset_guid": 2433418946,\n      "NFTID": 13077,\n      "amount": 1.00000000,\n      "sys_amount": 0.00000980\n    }\n  ]\n}\n')),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"2.")," Transfer 12.7251% ownership of the bar (56167720748738) to another address by using ",(0,s.kt)("inlineCode",{parentName:"p"},"assetallocationsend"),". We will also send the address a small amount of SYS for gas to be used in the future. We'll make the transaction use Z-DAG by specifying to be ",(0,s.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-text"},'$ syscoin-cli assetallocationsend 56167720748738 tsys1qcycfg3uhw4x706nvqtaz0e6lu74zwsc2qvy4vs 0.127251 0.0000098 false\n\n{\n  "txid": "737abcbfa2d42e2188966343b169442c8067c82d133a39d27ad56015076376cf",\n  "assetallocations_sent_count": 1,\n  "assetallocations_sent": [\n    {\n      "asset_guid": 56167720748738,\n      "base_asset_guid": 2433418946,\n      "NFTID": 13077,\n      "amount": 0.12725100,\n      "sys_amount": 0.00000980\n    }\n  ]\n}\n')),(0,s.kt)("h2",{id:"4bii-how-to-issue-and-transfer-a-non-fractional-non-fungible-token"},"4b(ii). How to Issue and Transfer a Non-Fractional Non-Fungible Token"),(0,s.kt)("p",null,"In this example we will start with a testnet asset representing the inventory of an art vault."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-text"},'$ syscoin-cli assetinfo 389115219\n\n{\n  "asset_guid": 389115219,\n  "symbol": "VAULT9",\n  "public_value": {\n    "desc": "Fitzstephen Co. Art Vault #9"\n  },\n  "contract": "",\n  "notary_address": "",\n  "total_supply": 0.00000000,\n  "max_supply": 288.0,\n  "updatecapability_flags": 127,\n  "precision": 0\n}\n')),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"This asset was defined with a precision of 0 and a max supply of 288, because there are 288 art pieces held in the vault, and ownership of each of these will be transferred to one owner as a non-divisible token representing the entirety of the piece")),(0,s.kt)("blockquote",null,(0,s.kt)("h3",{parentName:"blockquote",id:"note"},"\ud83d\udcd8Note"),(0,s.kt)("p",{parentName:"blockquote"},"You can also create an asset with precision 0 and max supply 1, effectively making the primary asset itself a non-divisble NFT. However, it's often more intuitive to issue multiple unique non-divisible tokens from a single parent asset (the inventory). This is more cost effective as you pay the asset creation fee only once (1 SYS) and are able to issue a quantity of unique child NFT's up to the max supply of the parent asset, only paying the comparatively small fee associated with ",(0,s.kt)("inlineCode",{parentName:"p"},"assetsend")," for each new NFT."),(0,s.kt)("p",{parentName:"blockquote"},"Children assets inherit the attributes of the parent and are unique only by their NFTID and deterministic child assetGUID. If you want each NFT you issue to use a different Notary API, on-chain description, etc, you would use ",(0,s.kt)("inlineCode",{parentName:"p"},"assetnew")," and pay the asset creation fee for each of them.")),(0,s.kt)("p",null,"Issue one of the art pieces into the new owner's possession with ",(0,s.kt)("inlineCode",{parentName:"p"},"assetsend")," in the amount of 1 token, and assign the NFTID (your own numeric identifier representing the art piece), in this case 14, your inventory number for Andy Warhol's original Self Portrait. We'll also send the new owner a small amount of SYS for gas to be used in the future (0.000098)."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-text"},'$ syscoin-cli assetsend 389115219 "tsys1qktelej8knjvc5nfpka2evnwyfsw6ltqnhd9k2f" 1.0 0.0000098 14\n\n{\n  "txid": "4ef2b4f0a807f2542567cc79201ddf8b22aadb0156ac54313cd0e186ef210296",\n  "assets_issued_count": 1,\n  "assets_issued": [\n    {\n      "asset_guid": 4684082515,\n      "base_asset_guid": 389115219,\n      "NFTID": 14,\n      "amount": 1.0,\n      "sys_amount": 0.00000980\n    }\n  ]\n}\n')),(0,s.kt)("p",null,"The new owner can now transfer ownership using ",(0,s.kt)("inlineCode",{parentName:"p"},"assetallocationsend")," with <asset_guid> 4684082515"))}d.isMDXComponent=!0}}]);