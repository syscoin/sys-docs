"use strict";(self.webpackChunksys_docs=self.webpackChunksys_docs||[]).push([[9526],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var i=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),h=c(n),u=o,m=h["".concat(l,".").concat(u)]||h[u]||d[u]||r;return n?i.createElement(m,a(a({ref:t},p),{},{components:n})):i.createElement(m,a({ref:t},p))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,a=new Array(r);a[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<r;c++)a[c]=n[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}h.displayName="MDXCreateElement"},98298:(e,t,n)=>{n.r(t),n.d(t,{default:()=>c,frontMatter:()=>r,metadata:()=>a,toc:()=>s});var i=n(87462),o=(n(67294),n(3905));const r={sidebar_position:6},a={unversionedId:"guides/mining_setup",id:"guides/mining_setup",isDocsHomePage:!1,title:"Merged Mining Setup Guide",description:"Authors: Fernando Paredes aka @DevelCuy (Devcoin Core Developer, Syscoin contributor) and Bradley Stephenson of Syscoin Foundation",source:"@site/docs/guides/mining_setup.mdx",sourceDirName:"guides",slug:"/guides/mining_setup",permalink:"/docs/guides/mining_setup",version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Masternode Setup Guide",permalink:"/docs/guides/mn_setup"},next:{title:"FAQ",permalink:"/docs/faq"}},s=[{value:"What is Merged Mining",id:"what-is-merged-mining",children:[]},{value:"Why it\u2019s Important",id:"why-its-important",children:[]},{value:"Opportunity",id:"opportunity",children:[]},{value:"Mining Solo vs. Pool",id:"mining-solo-vs-pool",children:[]},{value:"AuxPoW by Example",id:"auxpow-by-example",children:[{value:"Recommended Parameters for <strong>syscoin.conf</strong>",id:"recommended-parameters-for-syscoinconf",children:[]}]},{value:"Cloud Mining",id:"cloud-mining",children:[{value:"Getting Started with Mining-Dutch",id:"getting-started-with-mining-dutch",children:[]},{value:"Cloud Merged Mining with Mining Rig Rentals (MRR)",id:"cloud-merged-mining-with-mining-rig-rentals-mrr",children:[]},{value:"Earnings",id:"earnings",children:[]},{value:"Other Cloud mining providers",id:"other-cloud-mining-providers",children:[]}]}],l={toc:s};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,i.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Authors: Fernando Paredes aka @DevelCuy (Devcoin Core Developer, Syscoin contributor) and Bradley Stephenson of Syscoin Foundation")),(0,o.kt)("h2",{id:"what-is-merged-mining"},"What is ",(0,o.kt)("a",{parentName:"h2",href:"/docs/tech/merged-mining"},"Merged Mining")),(0,o.kt)("p",null,"Also known as Auxiliary Proof-of-Work or simply AuxPoW, merged mining enables you to mine multiple blockchains at the same time without spending additional energy on mining. It is carbon-neutral as it re-uses the proof from work already performed. It could be seen as someone (the miner) entering a lottery of sorts. With merged-mining the miner can submit the same lottery ticket and numbers to different lotteries (merge-mined blockchains), increasing their rewards."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://en.bitcoin.it/wiki/Merged_mining_specification"},"Merged Mining Specification")),(0,o.kt)("h2",{id:"why-its-important"},"Why it\u2019s Important"),(0,o.kt)("p",null,"Merged mining was first presented by Satoshi Nakamoto in 2010. It can be considered a Bitcoin primitive. From our perspective, it will be proven over time to be a critical component for incentivizing a robust Bitcoin network as BTC block rewards continue to diminish. Without merged-mining, revenue from mining Bitcoin would eventually be limited to Bitcoin\u2019s flat network fees."),(0,o.kt)("p",null,"Furthermore, merged mining enables Bitcoin\u2019s miners to support blockchains that offer important utility beyond the scope and best-purpose of the Bitcoin protocol itself."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Note: Blockchains that naively use merge-mined settlement are subject to the same vectors of PoW in general. A solution now exists to solve those challenges, and it comes in the form of a hybrid consensus system that provides decentralized Finality on top of merged-mining. Such a solution is present in Syscoin. Read up on Syscoin's ",(0,o.kt)("a",{parentName:"em",href:"/docs/tech/finality"},"finality")," via chainlocks for more information.")),(0,o.kt)("h2",{id:"opportunity"},"Opportunity"),(0,o.kt)("p",null,"At the time of writing, between 20 to 30 percent of Bitcoin\u2019s hashpower is also being applied to Syscoin. This means there is ample opportunity for more miners and pools to participate in merged-mining Syscoin to get their piece of the pie. This opportunity is not exclusive to Bitcoin miners - it is also available to any miners working any chain that uses the SHA-256 algorithm, such as Bitcoin Cash."),(0,o.kt)("p",null,"You can compare the Bitcoin and Syscoin hashrates to calculate the live percentage of hashrate shared with Syscoin:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://minerstat.com/coin/SYS/network-hashrate"},"Syscoin Hashrate")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://minerstat.com/coin/BTC/network-hashrate"},"Bitcoin Hashrate"))),(0,o.kt)("p",null,"There is generally very little overhead involved in merge-mining Syscoin. With no additional energy spent on mining, the only costs are to setup, run and maintain a properly configured Syscoin Core node."),(0,o.kt)("p",null,"Below is a calculation you can use to find the sum total revenue Syscoin provides to merge-miners collectively."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"18.56 SYS")," (UTXO block reward) + ",(0,o.kt)("strong",{parentName:"p"},"10.55 SYS")," (NEVM block reward) = ",(0,o.kt)("strong",{parentName:"p"},"29.11 SYS")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"29.11 SYS")," ","*"," 576 avg blocks daily (2.5 minute block target) = ",(0,o.kt)("strong",{parentName:"p"},"16,767.36 SYS")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"16,767.36 SYS")," ","*"," 365 days = ",(0,o.kt)("strong",{parentName:"p"},"6,120,086 SYS")," annual value"),(0,o.kt)("h4",{id:"two-blocks-for-the-price-of-one"},"Two Blocks for the Price of One"),(0,o.kt)("p",null,"The Syscoin network operates with a dual-chain architecture, two blockchains running in parallel that are merge-mined simultaneously in Syscoin Core:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u200b\t",(0,o.kt)("a",{parentName:"li",href:"/docs/tech/bitcoin-tech"},"Syscoin UTXO (Bitcoin standard)")),(0,o.kt)("li",{parentName:"ol"},"\u200b\t",(0,o.kt)("a",{parentName:"li",href:"/docs/tech/nevm"},"Syscoin NEVM (Ethereum standard)"))),(0,o.kt)("p",null,"When finding a valid AuxPoW, the generated NEVM block produces a static reward of 10.55 SYS, and the rest comes from the UTXO block (18.56 SYS at present). Make sure your syscoin.conf is configured appropriately to also mine NEVM and receive that reward! Simple instructions are in section ",(0,o.kt)("a",{parentName:"p",href:"#recommended-parameters-for-syscoinconf"},"[Recommended Parameters for syscoin.conf]"),"."),(0,o.kt)("h2",{id:"mining-solo-vs-pool"},"Mining Solo vs. Pool"),(0,o.kt)("p",null,"Finding a Bitcoin or Syscoin block is harder when mining solo (on your own). Using a mining pool is the best option for receiving partial rewards but with more consistency/predictability. The following mining pools support Syscoin. They are managed independently (not controlled by Syscoin Foundation):"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"https://www.mining-dutch.nl/pools/syscoin.php?page=dashboard"},"Mining-Dutch"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"https://support.viabtc.com/hc/en-us/articles/900001530543"},"ViaBTC"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"https://www.f2pool.com/"},"F2Pool"))," (merged mining internally, they keep the altcoins)")),(0,o.kt)("h2",{id:"auxpow-by-example"},"AuxPoW by Example"),(0,o.kt)("p",null,"This is useful for pools or solo miners that wish to setup merge-mining Syscoin for the first time, or simply to help you understand the raw process. If you are a miner that wishes to participate in a pool that already mines Syscoin, go to section ","[Cloud Mining]","."),(0,o.kt)("p",null,"Here is a step-by-step example of the low-level merged mining process. We recommend that you create a script or use an application that automates this."),(0,o.kt)("p",null,"(1) ",(0,o.kt)("strong",{parentName:"p"},"Get new block parameters")),(0,o.kt)("p",null,"By calling syscoin-cli createauxblock ADDRESS or syscoin-cli getauxblock (legacy), it should return a JSON object:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n\n "hash": "3cdf4a939e94e38d479118c754e1885c511d8582254830a288b2ebdb96606da9",\n\n "chainid": 16,\n\n ...\n\n "bits": "207fffff",\n\n "_target": "0000000000000000000000000000000000000000000000000000000000ffff7f"\n\n}\n')),(0,o.kt)("p",null,"Relevant here are the block hash, the chainid (16 for Syscoin) and the _target (difficulty bits, in reverse byte order due to legacy usage)"),(0,o.kt)("p",null,"(2) ",(0,o.kt)("strong",{parentName:"p"},"Mine the Bitcoin block with a special data string")),(0,o.kt)("p",null,"Since the coinbase input should include a special data string, every now and then (especially if a new Syscoin block arrives!) the AuxPoW miner should repeat step 1, in order to update the Syscoin block being mined, which implies updating the corresponding coinbase input of the Bitcoin block as well."),(0,o.kt)("p",null,"Eventually, a Bitcoin block header that matches Syscoin difficulty is found (regardless of matching Bitcoin's difficulty) so it is an AuxPoW!"),(0,o.kt)("p",null,"(3) ",(0,o.kt)("strong",{parentName:"p"},"Call ",(0,o.kt)("inlineCode",{parentName:"strong"},"syscoind submitauxblock HASH AUXPOW")," or ",(0,o.kt)("inlineCode",{parentName:"strong"},"syscoind getauxblock HASH AUXPOW")," (legacy)")),(0,o.kt)("p",null,"It will submit new block data to the Syscoin network. HASH is the one returned by getauxblock in step 1 and AUXPOW is a hexadecimal string that encodes the AuxPoW block (step 3)."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"NOTE: Data contains both UTXO and NEVM transactions.")),(0,o.kt)("p",null,"(4) ",(0,o.kt)("strong",{parentName:"p"},"Construct the Bitcoin coinbase")),(0,o.kt)("p",null,"For example, Syscoin block"),(0,o.kt)("p",null,"bfdb0b29bd1d544227a3cf89187f56d6fecdb1e2b1379e4f39d2f4607427bd03 was merge-mined with Bitcoin's 00000000000000000025b847ba7c07a1e9491468c17c98ced7d74015bd68295e."),(0,o.kt)("p",null,"Looking into the Bitcoin block's coinbase input, we can find (with added line breaks):"),(0,o.kt)("p",null,"036c580b122f5669614254432f5472757374706f6f6c2f2cfabe6d6dbfe3\n",(0,o.kt)("strong",{parentName:"p"},"c1b7320b"),"e5e8f291667bf83a417fcd6d2d35ad4d41c7c279b2047b78ffa1000000000000\n",(0,o.kt)("strong",{parentName:"p"},"0001"),"0a9fc8d13e74fe533da9ad820fedf0\n10000000000"),(0,o.kt)("p",null,'The second line contains the so-called "',(0,o.kt)("em",{parentName:"p"},"merge-mining header"),'" c1b7320b followed by the Syscoin block hash. The next eight bytes are also required (in particular the 4-byte integer 1 is relevant). Look at ',(0,o.kt)("a",{parentName:"p",href:"https://github.com/syscoin/syscoin/blob/v4.3.0/src/auxpow.cpp"},"auxpow.cpp")," for the code that validates this."),(0,o.kt)("p",null,"(5) ",(0,o.kt)("strong",{parentName:"p"},"Construct the AuxPoW hex string")),(0,o.kt)("p",null,"Code at ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/syscoin/syscoin/blob/v4.3.0/src/auxpow.h"},"auxpow.h")," has a rough process on CAuxPow object serialization. The AuxPoW miner should construct such a serialization in hex. The parent block is the 80-byte block header of the mined Bitcoin block. The initial part of the AuxPoW is a serialization of the Bitcoin coinbase transaction including its Merkle branch."),(0,o.kt)("p",null,"You can also take a look at ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/syscoin/syscoin/blob/v4.3.0/src/tests/auxpow_tests.cpp"},"src/tests/auxpow_tests.cpp"),". Take a look at ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/syscoin/syscoin/blob/v4.3.0/test/functional/auxpow_mining.py"},"test/functional/auxpow_mining.py")," for example code that constructs and mines (with regtest difficulty) an AuxPoW block."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"NOTE: The commands above can be reproduced quickly by running syscoind in regtest mode. For testnet and mainnet it is required to fully sync the Syscoin node.")),(0,o.kt)("h3",{id:"recommended-parameters-for-syscoinconf"},"Recommended Parameters for ",(0,o.kt)("strong",{parentName:"h3"},"syscoin.conf")),(0,o.kt)("p",null,"The conf file should have parameter server=1 to allow RPC calls from syscoin-cli or the pool miner software. Also, gethcommandline=--miner.etherbase=0xADDR specifies the NEVM account receiving the corresponding rewards. Please use the following example for reference only:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ cat ~/.syscoin/syscoin.conf\n\ntestnet=1\n\n[test]\n\nserver=1\n\ngethcommandline=--miner.etherbase=0xADDR\n\ndaemon=1\n\nrpcuser=user\n\nrpcpassword=pass\n\nrpcallowip=127.0.0.1\n")),(0,o.kt)("p",null,"For mainnet, set parameter ",(0,o.kt)("inlineCode",{parentName:"p"},"testnet=0")," and comment out or omit ",(0,o.kt)("inlineCode",{parentName:"p"},"[test]"),"."),(0,o.kt)("p",null,"There are additional gethcommandline settings to explore ",(0,o.kt)("a",{parentName:"p",href:"/docs/guides/nevm/sysgeth/"},"here"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Pools that have questions or need assistance with setting-up merged-mining Syscoin should reach out to us via our ",(0,o.kt)("a",{parentName:"strong",href:"https://discord.gg/syscoin/"},"official Discord server")),"."),(0,o.kt)("h2",{id:"cloud-mining"},"Cloud Mining"),(0,o.kt)("p",null,"You can bring your own hash power or rent it from a third-party. By renting, miners don\u2019t have to worry about equipment setup or maintenance - they only need to configure the target mining pool and voil\xe1!"),(0,o.kt)("h3",{id:"getting-started-with-mining-dutch"},"Getting Started with Mining-Dutch"),(0,o.kt)("p",null,"Every mining pool has very specific parameters. We are using Mining-Dutch (third-party) for the purpose of this guide. Please follow the ",(0,o.kt)("a",{parentName:"p",href:"https://www.mining-dutch.nl/index.php?page=gettingstarted"},"getting started instructions")," before continuing."),(0,o.kt)("h3",{id:"cloud-merged-mining-with-mining-rig-rentals-mrr"},"Cloud Merged Mining with ",(0,o.kt)("a",{parentName:"h3",href:"https://www.miningrigrentals.com/"},"Mining Rig Rentals")," (MRR)"),(0,o.kt)("p",null,"First, ",(0,o.kt)("a",{parentName:"p",href:"https://www.miningrigrentals.com/account/balance/"},"add funds to your account"),"."),(0,o.kt)("p",null,"Then, navigate to \u201c",(0,o.kt)("a",{parentName:"p",href:"https://www.miningrigrentals.com/account/pools"},"Favorite Pools"),'\u201d, click "Add Pool", and fill as follows:'),(0,o.kt)("p",null,"-"," Name: Mining-Dutch 256"),(0,o.kt)("p",null,"-"," Type: Sha256 or Sha256 Asicboost (experimental)"),(0,o.kt)("p",null,"Hit \u201cSave\u201d. It will complain about incomplete info, confirm saving for now."),(0,o.kt)("p",null,"Go to the ",(0,o.kt)("a",{parentName:"p",href:"https://www.miningrigrentals.com/rigs/sha256"},"SHA-256 section")," and select a rig of your choice. Click \u201cRent Now!\u201d then click \u201cNext\u201d and it will render a new Profile form. Select the existing pool from the dropdown and open a new tab or window for Mining-Dutch ",(0,o.kt)("a",{parentName:"p",href:"https://www.mining-dutch.nl/index.php?page=gettingstarted"},"getting started page"),". Scroll down to \u201cMiner settings generator\u201d. Pick the closest location to the rig you are renting and enter the matching hash power. Then, scroll down to \u201cMiner configuration settings\u201d. Go back to the MRR tab or window and complete the remaining fields. For example:"),(0,o.kt)("p",null,"-"," Pool Host:Port: sha256.mining-dutch.nl:9996"),(0,o.kt)("p",null,"-"," Workername: myuser.worker1"),(0,o.kt)("p",null,"-"," Password: p=2428"),(0,o.kt)("p",null,"-"," Notes: (optional)"),(0,o.kt)("p",null,"Hit \u201cAdd pool\u201d, click \u201cNext\u201d and review the contract. It will show like this:"),(0,o.kt)("div",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://lh4.googleusercontent.com/eI9m3n2V2LebkdClRx0z8qBcyCPiLWu6VC5aX6Jw9gopCJjGlqNzpnyhhWj6rA84VJryQma5KvSwVfcF13fWNdF-J8RSZWcslpVRrYOnIHKupV7XmhCdl7xNMUMlkyR7P142aSifTvlfi1FnCvy2Q0tlthAnm_1W68fRs6v2Pchyn55liCsddA"})),(0,o.kt)("p",null,"Click \u201cPay and Start\u201d when you are ready. It should start mining immediately. To double go to \u201c",(0,o.kt)("a",{parentName:"p",href:"https://www.miningrigrentals.com/account/myrentals"},"My Rentals"),"\u201d from MRR main menu. Also, go to Mining-Dutch ",(0,o.kt)("a",{parentName:"p",href:"https://www.mining-dutch.nl/index.php?page=workers"},"workers page")," for monitoring mining details. You will notice that Mining-Dutch does merged mining of many other altcoins along with Syscoin and might even switch across different blockchains for optimizing earnings (Multiport mode)."),(0,o.kt)("h3",{id:"earnings"},"Earnings"),(0,o.kt)("p",null,"Enter the \u201c",(0,o.kt)("a",{parentName:"p",href:"https://www.mining-dutch.nl/index.php?page=earnings"},"Earnings"),"\u201d page from Mining-Dutch, balances for every coin you are mining will be updated automagically as new blocks are found. For example:"),(0,o.kt)("div",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://lh4.googleusercontent.com/J6zo6Z1uhHYRkJYrYlNByIQKBSM5ZM0K80Iivq_75OLQ994d7C5KMI_C77dZFgONDwiWwKoMXkUF2yhMISmDSAplviO_iQ4TjSSWw2lx_LMs-zbIG6gSlLsgftaM_hyW-UEuaxktp33aaElfMwQV8n2oXSRsIzzNFTH3RhWgUqYN1g9G2qf1jQ"})),(0,o.kt)("h3",{id:"other-cloud-mining-providers"},"Other Cloud mining providers"),(0,o.kt)("p",null,"Some entry-level providers like MMR allow short term and low hash power rentals for about US$5.00. ",(0,o.kt)("a",{parentName:"p",href:"https://www.nicehash.com/"},"NiceHash")," rentals start at about US$100.00 at the time of writing. We highly recommend you to perform your own due-diligence and market research."))}c.isMDXComponent=!0}}]);