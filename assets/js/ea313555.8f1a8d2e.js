(self.webpackChunksys_docs=self.webpackChunksys_docs||[]).push([[7937],{78159:(e,t,o)=>{"use strict";o.d(t,{Z:()=>a});var n=o(76687);o(35618);class i extends n.Component{constructor(e){super(e),this.state={address:null,added:!1,network:this.props.network,window:null},this.connectWallet=this.connectWallet.bind(this)}componentDidMount(){window.ethereum&&this.setState({address:window.ethereum.selectedAddress})}async connectWallet(){const e={chainId:"0x"+57..toString(16),chainName:"Syscoin",iconUrls:["https://syscoin.org/images/syscoin-blue-flat-logo.svg"],nativeCurrency:{name:"Syscoin",symbol:"SYS",decimals:18},rpcUrls:["https://rpc.ankr.com/syscoin","wss://rpc.syscoin.org/wss"],blockExplorerUrls:["https://explorer.syscoin.org"]},t={chainId:"0x"+5700..toString(16),chainName:"Syscoin Tanenbaum",iconUrls:["https://syscoin.org/images/syscoin-blue-flat-logo.svg"],nativeCurrency:{name:"Testnet Syscoin",symbol:"TSYS",decimals:18},rpcUrls:["https://rpc.tanenbaum.io/"],blockExplorerUrls:["https://tanenbaum.io/"]},o={chainId:"0x"+57e3.toString(16),chainName:"Rollux Testnet",iconUrls:[""],nativeCurrency:{name:"Testnet Syscoin",symbol:"TSYS",decimals:18},rpcUrls:["https://rpc-tanenbaum.rollux.com"],blockExplorerUrls:["https://rollux.tanenbaum.io"]},n={chainId:"0x"+570..toString(16),chainName:"Rollux Mainnet",iconUrls:[""],nativeCurrency:{name:"Syscoin",symbol:"SYS",decimals:18},rpcUrls:["https://rpc.rollux.com","wss://rpc.rollux.com/wss"],blockExplorerUrls:["https://explorer.rollux.com"]};if(window.ethereum){var i;switch(await window.ethereum.send("eth_requestAccounts"),this.state.network){case"Mainnet":i={method:"wallet_addEthereumChain",params:[e,this.state.selectedAddress]};break;case"Tanenbaum Testnet":i={method:"wallet_addEthereumChain",params:[t,this.state.selectedAddress]};break;case"Rollux Optimistic Testnet":i={method:"wallet_addEthereumChain",params:[o,this.state.selectedAddress]};break;case"Rollux Optimistic Mainnet":i={method:"wallet_addEthereumChain",params:[n,this.state.selectedAddress]}}try{await window.ethereum.request(i)}catch(a){return console.log(a),!1}return this.setState({added:!0}),!0}}render(){return this.state.added?n.createElement("section",{className:"section"},n.createElement("button",{className:"addButton"},"Added")):n.createElement("section",{className:"section"},n.createElement("button",{onClick:this.connectWallet,className:"addButton"},"Add to MetaMask"))}}const a=i},41241:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>c});var n=o(87250),i=(o(76687),o(98338)),a=o(78159);const s={},r={unversionedId:"faq",id:"faq",isDocsHomePage:!1,title:"FAQ",description:"How do I add Syscoin to MetaMask?",source:"@site/docs/faq.mdx",sourceDirName:".",slug:"/faq",permalink:"/docs/faq",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Decentralized Governance",permalink:"/docs/guides/governance"}},c=[{value:"How do I add Syscoin to MetaMask?",id:"how-do-i-add-syscoin-to-metamask",children:[]},{value:"What is NEVM?",id:"what-is-nevm",children:[]},{value:"Is Syscoin Proof of Work (PoW) or Proof of Stake (PoS)?",id:"is-syscoin-proof-of-work-pow-or-proof-of-stake-pos",children:[]},{value:"What is Syscoin&#39;s max supply?",id:"what-is-syscoins-max-supply",children:[]},{value:"How do I transfer SYS to the NEVM chain for using smart contracts?",id:"how-do-i-transfer-sys-to-the-nevm-chain-for-using-smart-contracts",children:[]},{value:"What is Syscoin&#39;s block time?",id:"what-is-syscoins-block-time",children:[]},{value:"How secure is Syscoin?",id:"how-secure-is-syscoin",children:[]},{value:"Where can I buy Syscoin?",id:"where-can-i-buy-syscoin",children:[]}],l={toc:c},d="wrapper";function h(e){let{components:t,...o}=e;return(0,i.kt)(d,(0,n.Z)({},l,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"how-do-i-add-syscoin-to-metamask"},"How do I add Syscoin to MetaMask?"),(0,i.kt)("p",null,"You can add Syscoin to MetaMask using the table below. If this fails for any reason then please follow the guide ",(0,i.kt)("a",{parentName:"p",href:"/docs/guides/nevm/metamask"},"here"),". Welcome to Syscoin!"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Network"),(0,i.kt)("th",{parentName:"tr",align:null}))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Rollux L2 Mainnet"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)(a.Z,{network:"Rollux Optimistic Mainnet",mdxType:"AddNetworkComponent"}))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Rollux L2 Testnet"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)(a.Z,{network:"Rollux Optimistic Testnet",mdxType:"AddNetworkComponent"}))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Syscoin NEVM Mainnet"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)(a.Z,{network:"Mainnet",mdxType:"AddNetworkComponent"}))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Syscoin NEVM Tanenbaum (Testnet)"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)(a.Z,{network:"Tanenbaum Testnet",mdxType:"AddNetworkComponent"}))))),(0,i.kt)("p",null,"Learn about ",(0,i.kt)("a",{parentName:"p",href:"/docs/tech/rollux"},"Syscoin Rollux"),"."),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"what-is-nevm"},"What is NEVM?"),(0,i.kt)("p",null,"NEVM stands for Network-Enhanced Virtual Machine. NEVM is an infrastructure-focused EVM chain that enables EVM Rollups (such as Rollux) to be built on top of the Syscoin/Bitcoin stack. It is a version of ",(0,i.kt)("a",{parentName:"p",href:"https://ethereum.org/en/developers/docs/evm/"},"Ethereum's EVM")," but modified to operate in tandem with the Syscoin main chain in order to tie-in with data availability, finality, and Bitcoin merged mining. NEVM is background infrastructure that ties Rollups to the security of Syscoin and ultimately Bitcoin. For optimal user experience, end-users and applications are encouraged to utilize the Rollups which NEVM supports rather than use NEVM directly, due to its nature as supportive infrastructure. You can read more about NEVM ",(0,i.kt)("a",{parentName:"p",href:"/docs/tech/nevm"},"here"),"."),(0,i.kt)("h2",{id:"is-syscoin-proof-of-work-pow-or-proof-of-stake-pos"},"Is Syscoin Proof of Work (PoW) or Proof of Stake (PoS)?"),(0,i.kt)("p",null,"Syscoin is Proof of Work and is merged-mined with Bitcoin, meaning that Bitcoin miners who also decide to mine Syscoin don't have to expend any extra energy to mine the Syscoin blockchain; the energy that goes into mining Bitcoin can be used to mine Syscoin at no extra cost. On top of this Proof of Work model, Syscoin provides a network of Sentry Nodes that provide additive security in the form of multi-quorums that generate chainlocks as an efficient and effective source of decentralized finality. Syscoin's network of Sentry Nodes is on the decentralized side of the spectrum with typically well over two-thousand Sentry Nodes being independently owned and operated at any time. In this sense, Syscoin could be considered a hybrid of Proof of Work and Proof of Service."),(0,i.kt)("h2",{id:"what-is-syscoins-max-supply"},"What is Syscoin's max supply?"),(0,i.kt)("p",null,"SYS coinomics are very similar to Ethereum's ",(0,i.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-1559"},"EIP-1559"),". With the release of NEVM, Syscoin Protocol balances inflation/deflation dynamically and no longer has a maximum supply. Gas fees are burned and/or used to further subsidize miners, depending how a transaction is configured. The purpose is to provide an ideal utility-focused economy for a global user base, now and into the future."),(0,i.kt)("h2",{id:"how-do-i-transfer-sys-to-the-nevm-chain-for-using-smart-contracts"},"How do I transfer SYS to the NEVM chain for using smart contracts?"),(0,i.kt)("p",null,"To transfer your SYS from the base chain to the NEVM chain you can use the ",(0,i.kt)("a",{parentName:"p",href:"https://bridge.syscoin.org/"},"Bridge dApp"),", created by the Syscoin developers."),(0,i.kt)("h2",{id:"what-is-syscoins-block-time"},"What is Syscoin's block time?"),(0,i.kt)("p",null,"Syscoin's L1 block time is 2.5 minutes. Syscoin's Rollux L2 blocktime is nearly instant. This serves several purposes. For one, this disincentivizes direct use of the L1 by end users who actually belong on L2. Additionally, it is a sufficient window of time to ensure a very high probability of achieving a multi-quorum chainlock. Syscoin uses ",(0,i.kt)("a",{parentName:"p",href:"/docs/tech/finality"},"chainlocks")," to further secure its blockchain with finality in addition to Bitcoin ",(0,i.kt)("a",{parentName:"p",href:"/docs/tech/merged-mining"},"merge-mining"),". Syscoin's L1 is designed to serve as a secure settlement layer for Optimistic Rollups and ZK-Rollups where the vast majority of dApps are destined to operate. As such, end users will never experience the 2.5 minute block time while using rollups. Their blockchain interactions, whether DeFi, GameFi or other uses, will be near-instant and extremely low cost while being secured by Syscoin's L1 in the background."),(0,i.kt)("h2",{id:"how-secure-is-syscoin"},"How secure is Syscoin?"),(0,i.kt)("p",null,"Syscoin combines its multi-quorum ",(0,i.kt)("a",{parentName:"p",href:"/docs/tech/finality"},"finality")," (at high Nakamoto coefficient) with ",(0,i.kt)("a",{parentName:"p",href:"/docs/tech/merged-mining"},"Bitcoin merged mining"),", creating a PoW model that is highly resistant to 51% attacks and selfish mining, no matter how many Bitcoin miners participate or how much hashrate they contribute. At time of writing Syscoin inherits between 50 and 60 percent of Bitcoin's own hashrate, with several larger Bitcoin pools applying hash receipts to Syscoin. The Syscoin hashrate can be seen ",(0,i.kt)("a",{parentName:"p",href:"https://minerstat.com/coin/SYS/network-hashrate"},"here"),". In essence, Syscoin adds an additional layer of decentralized security on top of Bitcoin's own mining network. Uniquely, the additive finality is designed in such a way that Bitcoin's Proof-of-Work is kept at the base of the stack rather than resolving everything to Proof-of-Stake."),(0,i.kt)("p",null,"Compromising the security of the Syscoin network would require accomplishing both of these very expensive tasks:  1.) Obtain over 50% of all Bitcoin miners' total hashrate being applied to Syscoin, 2.) Obtain supermajority ownership of Syscoin Sentry Nodes for any chance to game randomized multi-quorums (4 quorums, each with 400 Sentry Nodes in randomized rotation).  Each Sentry Node requires 100k SYS collateral.  SYS has been in circulation since 2014 and is highly distributed.  At time of writing the quantity of Sentry Nodes is around 2,700."),(0,i.kt)("p",null,"This method finally makes merged mining a secure source of hashrate.  Even if a merge-miner obtains over 50% of the total hashrate applied, the expense and effort to game the multi-quorums makes the proposition of a majority attack unreasonable. The reverse can also be said.  If one managed to gain control of a supermajority of Sentry Nodes, they would also need over 50% of the total hashrate in order to dominate. "),(0,i.kt)("p",null,"We are always looking to onboard more Bitcoin mining pools to help their communities take advantage of our modular ecosystem, and provide them with Bitcoin-secured DeFi!"),(0,i.kt)("h2",{id:"where-can-i-buy-syscoin"},"Where can I buy Syscoin?"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.coingecko.com/en/coins/syscoin#markets"},"Here")," is a list of some exchanges where you can buy Syscoin."))}h.isMDXComponent=!0},13358:()=>{}}]);