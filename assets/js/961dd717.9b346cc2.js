(self.webpackChunksys_docs=self.webpackChunksys_docs||[]).push([[1636],{74002:(t,e,n)=>{"use strict";n.d(e,{Z:()=>o});var a=n(67294);n(68903);class s extends a.Component{constructor(t){super(t),this.state={address:null,added:!1,network:this.props.network,window:null},this.connectWallet=this.connectWallet.bind(this)}componentDidMount(){window.ethereum&&this.setState({address:window.ethereum.selectedAddress})}async connectWallet(){const t={chainId:"0x"+57..toString(16),chainName:"Syscoin",iconUrls:["https://syscoin.org/images/syscoin-blue-flat-logo.svg"],nativeCurrency:{name:"Syscoin",symbol:"SYS",decimals:18},rpcUrls:["https://rpc.ankr.com/syscoin","wss://rpc.syscoin.org/wss"],blockExplorerUrls:["https://explorer.syscoin.org"]},e={chainId:"0x"+5700..toString(16),chainName:"Syscoin Tanenbaum",iconUrls:["https://syscoin.org/images/syscoin-blue-flat-logo.svg"],nativeCurrency:{name:"Testnet Syscoin",symbol:"TSYS",decimals:18},rpcUrls:["https://rpc.tanenbaum.io/"],blockExplorerUrls:["https://tanenbaum.io/"]},n={chainId:"0x"+57e3.toString(16),chainName:"Rollux Testnet",iconUrls:[""],nativeCurrency:{name:"Testnet Syscoin",symbol:"TSYS",decimals:18},rpcUrls:["https://rpc-tanenbaum.rollux.com"],blockExplorerUrls:["https://rollux.tanenbaum.io/"]};if(window.ethereum){var a;switch(await window.ethereum.send("eth_requestAccounts"),this.state.network){case"Mainnet":a={method:"wallet_addEthereumChain",params:[t,this.state.selectedAddress]};break;case"Tanenbaum Testnet":a={method:"wallet_addEthereumChain",params:[e,this.state.selectedAddress]};break;case"Rollux Optimistic Testnet":a={method:"wallet_addEthereumChain",params:[n,this.state.selectedAddress]}}try{await window.ethereum.request(a)}catch(s){return console.log(s),!1}return this.setState({added:!0}),!0}}render(){return this.state.added?a.createElement("section",{className:"section"},a.createElement("button",{className:"addButton"},"Added")):a.createElement("section",{className:"section"},a.createElement("button",{onClick:this.connectWallet,className:"addButton"},"Add to MetaMask"))}}const o=s},80253:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>m,frontMatter:()=>i,metadata:()=>r,toc:()=>l});var a=n(87462),s=(n(67294),n(3905)),o=n(74002);const i={},r={unversionedId:"guides/nevm/metamask",id:"guides/nevm/metamask",isDocsHomePage:!1,title:"Add to MetaMask",description:"You can add the Syscoin networks to MetaMask using the table below. If this doesn't work for any reason you can either follow the first guide to use chainlist.org, or you can enter the information manually further down the page. Welcome to Syscoin!",source:"@site/docs/guides/nevm/metamask.mdx",sourceDirName:"guides/nevm",slug:"/guides/nevm/metamask",permalink:"/docs/guides/nevm/metamask",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/docs/guides/overview"},next:{title:"Syscoin Geth (sysgeth)",permalink:"/docs/guides/nevm/sysgeth"}},l=[{value:"Install the MetaMask Extension from the Store",id:"install-the-metamask-extension-from-the-store",children:[]},{value:"Create a MetaMask Wallet or Import One",id:"create-a-metamask-wallet-or-import-one",children:[]},{value:"<strong>Quick Auto Setup</strong> to connect to Syscoin Network",id:"quick-auto-setup-to-connect-to-syscoin-network",children:[]},{value:"Manual Setup to connect to Syscoin Network",id:"manual-setup-to-connect-to-syscoin-network",children:[{value:"Mainnet",id:"mainnet",children:[]},{value:"Testnet",id:"testnet",children:[]}]}],c={toc:l};function m(t){let{components:e,...i}=t;return(0,s.kt)("wrapper",(0,a.Z)({},c,i,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"You can add the Syscoin networks to MetaMask using the table below. If this doesn't work for any reason you can either follow the first guide to use ",(0,s.kt)("a",{parentName:"p",href:"https://chainlist.org/"},"chainlist.org"),", or you can enter the information manually further down the page. Welcome to Syscoin!"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"left"},"Network"),(0,s.kt)("th",{parentName:"tr",align:null}))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},"Syscoin NEVM Mainnet"),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)(o.Z,{network:"Mainnet",mdxType:"AddNetworkComponent"}))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},"Syscoin NEVM Tanenbaum (Testnet)"),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)(o.Z,{network:"Tanenbaum Testnet",mdxType:"AddNetworkComponent"}))))),(0,s.kt)("hr",null),(0,s.kt)("h2",{id:"install-the-metamask-extension-from-the-store"},"Install the MetaMask Extension from the Store"),(0,s.kt)("p",null,"Visit the ",(0,s.kt)("a",{parentName:"p",href:"https://chrome.google.com/webstore/detail/nkbihfbeogaeaoehlefnkodbefgpgknn"},"browser extension marketplace")," and download the MetaMask extension."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"img",src:n(13241).Z})),(0,s.kt)("h2",{id:"create-a-metamask-wallet-or-import-one"},"Create a MetaMask Wallet or Import One"),(0,s.kt)("p",null,"We would suggest creating a new one if you haven\u2019t done so."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"img",src:n(37613).Z})),(0,s.kt)("p",null,"Click import wallet if you have an existing wallet."),(0,s.kt)("p",null,"Set up your password and secret recovery phrase somewhere safe."),(0,s.kt)("h2",{id:"quick-auto-setup-to-connect-to-syscoin-network"},(0,s.kt)("strong",{parentName:"h2"},"Quick Auto Setup")," to connect to Syscoin Network"),(0,s.kt)("p",null,"Head to ",(0,s.kt)("a",{parentName:"p",href:"https://chainlist.org/"},"https://chainlist.org/")," and click Connect Wallet."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"img",src:n(68936).Z})),(0,s.kt)("p",null,"Once Connected, search for Syscoin in the search bar."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"img",src:n(71639).Z})),(0,s.kt)("p",null,"Click Add to MetaMask on the relevant network. This should be ",(0,s.kt)("strong",{parentName:"p"},"Syscoin Mainnet"),", unless you would like to test things out on the Syscoin testnet first."),(0,s.kt)("p",null,"You have now connected to the Syscoin Mainnet with your Metamask Wallet! You can now interact with dApps on Syscoin NEVM."),(0,s.kt)("h2",{id:"manual-setup-to-connect-to-syscoin-network"},"Manual Setup to connect to Syscoin Network"),(0,s.kt)("p",null,"Switch the connected blockchain by clicking on the tab saying Main Ethereum Network, we need to add the Syscoin network."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"img",src:n(36252).Z})),(0,s.kt)("p",null,"Scroll down until you find Custom RPC."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"img",src:n(36330).Z})),(0,s.kt)("p",null,"Enter in the Syscoin NEVM Mainnet or Testnet settings as follows:"),(0,s.kt)("h3",{id:"mainnet"},"Mainnet"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Network Name:")," Syscoin Mainnet"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"New RPC URL:")," ",(0,s.kt)("a",{parentName:"li",href:"https://rpc.syscoin.org"},"https://rpc.syscoin.org")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Chain ID:")," 57"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Currency Symbol:")," SYS"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Block Explorer URL:")," ",(0,s.kt)("a",{parentName:"li",href:"https://explorer.syscoin.org/"},"https://explorer.syscoin.org/"))),(0,s.kt)("h3",{id:"testnet"},"Testnet"),(0,s.kt)("p",null,"The testnet uses test SYS (tSYS), which has no value and is used for testing code before deploying it on mainnet. There is no need to add this network if you don't want to test anything."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Network Name:")," Syscoin Tanenbaum Testnet"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"New RPC URL:")," ",(0,s.kt)("a",{parentName:"li",href:"https://rpc.tanenbaum.io/"},"https://rpc.tanenbaum.io")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Chain ID:")," 5700"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Currency Symbol:")," tSYS"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Block Explorer URL:")," ",(0,s.kt)("a",{parentName:"li",href:"https://tanenbaum.io/"},"https://tanenbaum.io"))),(0,s.kt)("p",null,"Once this information has been entered click ",(0,s.kt)("strong",{parentName:"p"},"Save"),"."),(0,s.kt)("p",null,"You have now connected to the Syscoin Mainnet with your Metamask Wallet! You can now interact with dApps on Syscoin NEVM."),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},(0,s.kt)("strong",{parentName:"p"},"Transactions on the Syscoin Mainnet require SYS which will be used as a gas fee.")),(0,s.kt)("p",{parentName:"blockquote"},(0,s.kt)("strong",{parentName:"p"},"Likewise, transactions on the testnet use tSYS for gas fees."))),(0,s.kt)("p",null,"Get some tokens from the following faucets to use as gas for transactions:"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Mainnet (SYS)")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://faucet.syscoin.org"},"https://faucet.syscoin.org"))),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Testnet (tSYS)")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://ethstats.tanenbaum.io/#faucet"},"https://ethstats.tanenbaum.io/#faucet"))))}m.isMDXComponent=!0},13241:(t,e,n)=>{"use strict";n.d(e,{Z:()=>a});const a=n.p+"assets/images/mm-236bc33f156332fbcb28922ae6f1f740.png"},68936:(t,e,n)=>{"use strict";n.d(e,{Z:()=>a});const a=n.p+"assets/images/mm_chainlist-ffc6a162931b6feccf696bdc098ebb4a.png"},71639:(t,e,n)=>{"use strict";n.d(e,{Z:()=>a});const a=n.p+"assets/images/mm_chainlist_testnet-b63ecde4d48cec31e92729b31124c78a.png"},36252:(t,e,n)=>{"use strict";n.d(e,{Z:()=>a});const a="data:image/png;base64,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"},36330:(t,e,n)=>{"use strict";n.d(e,{Z:()=>a});const a="data:image/png;base64,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"},37613:(t,e,n)=>{"use strict";n.d(e,{Z:()=>a});const a=n.p+"assets/images/mm_new_wallet-a53c3129bf5bc7891ef1b31b7c53e0d7.png"},46601:()=>{}}]);