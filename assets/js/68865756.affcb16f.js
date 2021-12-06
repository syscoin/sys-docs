(self.webpackChunksys_docs=self.webpackChunksys_docs||[]).push([[8692],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return h}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=d(n),h=r,m=u["".concat(l,".").concat(h)]||u[h]||p[h]||o;return n?a.createElement(m,s(s({ref:t},c),{},{components:n})):a.createElement(m,s({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var d=2;d<o;d++)s[d]=n[d];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},40704:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},metadata:function(){return i},toc:function(){return l},default:function(){return c}});var a=n(22122),r=n(19756),o=(n(67294),n(3905)),s={},i={unversionedId:"guides/mn_setup",id:"guides/mn_setup",isDocsHomePage:!1,title:"Masternode Setup Guide",description:"EACH MASTERNODE MUST HAVE THE FOLLOWING",source:"@site/docs/guides/mn_setup.mdx",sourceDirName:"guides",slug:"/guides/mn_setup",permalink:"/docs/guides/mn_setup",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Use Syscoin 4.2 Tokens",permalink:"/docs/guides/spts/use-tokens"},next:{title:"FAQ",permalink:"/docs/faq"}},l=[{value:"EACH MASTERNODE MUST HAVE THE FOLLOWING",id:"each-masternode-must-have-the-following",children:[]},{value:"Below are the minimum requirements for your VPS. Please do not try to compile without the minimum. You must install on a fresh new VPS.",id:"below-are-the-minimum-requirements-for-your-vps-please-do-not-try-to-compile-without-the-minimum-you-must-install-on-a-fresh-new-vps",children:[]},{value:"Video Walkthrough",id:"video-walkthrough",children:[]},{value:"VPS Providers",id:"vps-providers",children:[]},{value:"MASTERNODE HELP",id:"masternode-help",children:[]},{value:"Prepare QT and Send 100k Syscoin",id:"prepare-qt-and-send-100k-syscoin",children:[]},{value:"Identify 100k Syscoin Transaction",id:"identify-100k-syscoin-transaction",children:[]},{value:"Generate BLS Key Pair",id:"generate-bls-key-pair",children:[]},{value:"Configure Masternode on VPS",id:"configure-masternode-on-vps",children:[]},{value:"Prepare a ProRegTx transaction",id:"prepare-a-proregtx-transaction",children:[]},{value:"Donate to the Syscoin Foundation",id:"donate-to-the-syscoin-foundation",children:[]},{value:"Register ProTx",id:"register-protx",children:[]},{value:"Sign the ProRegTx transaction",id:"sign-the-proregtx-transaction",children:[]},{value:"Submit the signed message",id:"submit-the-signed-message",children:[]},{value:"Specifying donation address for operatorReward (optional)",id:"specifying-donation-address-for-operatorreward-optional",children:[]},{value:"MASTERNODE COMMANDS",id:"masternode-commands",children:[]}],d={toc:l};function c(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"each-masternode-must-have-the-following"},"EACH MASTERNODE MUST HAVE THE FOLLOWING"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"1. A brand new VPS to install"),"\n",(0,o.kt)("strong",{parentName:"p"},"2. A Seperate BLS Key per node."),"\n",(0,o.kt)("strong",{parentName:"p"},"3. An Owner and Voting Key")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"You can not use the same BLS Key or Owner, Voting Keys for multiple nodes!")),(0,o.kt)("h3",{id:"below-are-the-minimum-requirements-for-your-vps-please-do-not-try-to-compile-without-the-minimum-you-must-install-on-a-fresh-new-vps"},"Below are the minimum requirements for your VPS. Please do not try to compile without the minimum. You must install on a fresh new VPS."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"64-bit CPU \u2014 2 Cores (4 preferred)"),(0,o.kt)("li",{parentName:"ul"},"4gb RAM (real) minimum (8gb RAM preferred)"),(0,o.kt)("li",{parentName:"ul"},"4gb swap (if less than 8gb real RAM) Will need to use SSD if using Swap"),(0,o.kt)("li",{parentName:"ul"},"KVM or OpenVZ (KVM preferred)"),(0,o.kt)("li",{parentName:"ul"},"Linux OS \u2014 Minimum Ubuntu 18.04, LTS Ubuntu 20.04 LTS (Focal Fossa) preferred."),(0,o.kt)("li",{parentName:"ul"},"80gb Disk Space (100gb+ SSD preferred).")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"If using an existing address with seniority you will have to manually \u2018lock\u2019 the collateral. Do this via Coin Control - right click your 100k tx and click \u201cLock Unspent\u201d. You do not need to make a new transaction. Doing so will lose your Seniority. If setting up a Masternode with a seniority address you can skip to generating your BLS KEYS."))),(0,o.kt)("h2",{id:"video-walkthrough"},"Video Walkthrough"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=pOwcFMP92hY"},"Masternode Install Guide")),(0,o.kt)("h2",{id:"vps-providers"},"VPS Providers"),(0,o.kt)("p",null,"There are many VPS service providers that offer and exceed the hardware requirements, as such it is recommended that you shop around and do your own homework on various potential providers. Note the following is a list of just some examples and should not be interpreted as recommendations or endorsement."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://uk2.net/"},"UK2.net")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://ionos.co.uk/"},"IONOS.co.uk")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://interserver.net/"},"InterServer.net")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://ovh.co.uk/"},"OVH.co.uk")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://kimsufi.com/"},"KimSufi.com")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://mvps.net/"},"mVPS.net")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://vps-mart.com/"},"VPS-Mart.com")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://hostinger.com/"},"Hostinger.com")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://budgetvm.com/"},"BudgetVM.com")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://virtono.com/"},"Virtono.com")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://leaseweb.com/"},"LeaseWeb.com")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://homeatcloud.com/"},"HomeAtCloud.com")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://ideastack.com/"},"IdeaStack.com")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://ssdnodes.com/"},"SSDNodes.com")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://simplyhosting.com/"},"SimplyHosting.com")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://ramnode.com/"},"RAMNode.com")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://time4vps.com/"},"Time4VPS.com"))),(0,o.kt)("h2",{id:"masternode-help"},"MASTERNODE HELP"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://discord.gg/RkK2AXD"},"Syscoin Discord"),": If you require more help, jump into the Syscoin Discord and our community will be more than happy to help you out!"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://sysnode.info/"},"Sysnode.info"),": This website has an array of tools such as Masternode Stats, Monitoring and keeping up to date with current news with Syscoin."),(0,o.kt)("h2",{id:"prepare-qt-and-send-100k-syscoin"},"Prepare QT and Send 100k Syscoin"),(0,o.kt)("p",null,"To stake your Masternode you will need to provide exactly ",(0,o.kt)("strong",{parentName:"p"},"100,000 SYS")," in your Masternode address. Use Syscoin Core Qt for your system to process this transaction."),(0,o.kt)("p",null,"Create a new address for collateral this does not need to be a legacy address anymore, or you can use an existing seniority address. If you are using an existing Seniority Address you do not have to make a new transaction or create a new address."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"getnewaddress mn1\n")),(0,o.kt)("p",null,"Send exactly ",(0,o.kt)("strong",{parentName:"p"},"100,000 Syscoin")," to this address."),(0,o.kt)("h2",{id:"identify-100k-syscoin-transaction"},"Identify 100k Syscoin Transaction"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Click Window>Console and enter the following command: Note some commands now require an underscore")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"masternode_outputs\n")),(0,o.kt)("p",null,"This should return a string of characters similar to the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n  "3304a4920f20e1e5cd1f34e5396556ded1e603296f7c5dd66c7ec4fe63cb008d": "0"\n}\n')),(0,o.kt)("p",null,"The first long string is your collateralHash, while the last number is the collateralIndex."),(0,o.kt)("h2",{id:"generate-bls-key-pair"},"Generate BLS Key Pair"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"NOTE: YOU MUST CREATE A BLS KEY PAIR FOR EVERY NODE"))),(0,o.kt)("p",null,"A public/secret BLS key pair is required to operate a masternode. The secret key is specified on the masternode itself, and allows it to be included in the deterministic masternode list once a provider registration transaction with the corresponding public key has been created."),(0,o.kt)("p",null,"If you are using a hosting service, they may provide you with their public key, and you can skip this step. If you are hosting your own masternode or have agreed to provide your host with the BLS secret key, generate a BLS public/secret keypair in the Console and entering the following command:"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"These keys are NOT stored by the wallet and must be kept secure, similar to the value provided in the past by the masternode genkey command.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'bls_generate\n{\n  "secret": "1a8f477d2b02650b7d159efe315940f05252334eb292376309386cc99b0c4ec7",\n  "public": "05afc5f75d0a215951677703e41a108a67f2efb31110e392d988dbd4f9e8446a3336d59de1ff886ec0d3c65c822af2de"\n}\n')),(0,o.kt)("h2",{id:"configure-masternode-on-vps"},"Configure Masternode on VPS"),(0,o.kt)("p",null,"Finally we are ready to work on your server. Connect to your VPS as root via SSH (Putty) and enter the following command to start the automated install:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"bash <(curl -sL https://raw.githubusercontent.com/Syscoin/Masternode-install-script/master/script.sh)\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Please also check the latest releases - if it is not 4.3.0, you will need to enter in the latest release tag for for Syscoin Core Github Branch. So if the latest release is 4.3.1, you would enter 4.3.1 and then press enter. You can check that here; ",(0,o.kt)("a",{parentName:"strong",href:"https://github.com/syscoin/syscoin/releases"},"Releases \xb7 syscoin/syscoin \xb7 GitHub")))),(0,o.kt)("p",null,"Default values are found in brackets and pressing enter will selected the ","[default]"," value. For entries with a ","[Y/n]"," the capital letter is the default. Enter ","[Y]"," to choose \u201cyes\u201d or ","[N]"," to choose \u201cno\u201d. Likely the only value you will need to enter is the latest release tag and Masternode BLS Secret key."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Syscoin Core Github Branch [master]: enter latest release tag here. For eg. 4.3.0\nExternal IP Address [123.123.123.123]: \nMasternode Port [8369]: \nMasternode BLS Secret Key []: 1a8f477d2b02650b7d159efe315940f05252334eb292376309386cc99b0c4ec7\nConfigure for mainnet? [Y/n]: \n \nPress any key to continue or Ctrl+C to exit...\n")),(0,o.kt)("p",null,"Once the build process and configuration have completed, to access the syscoind and syscoin-cli executables via the new syscoin user type the below into cmd; ",(0,o.kt)("inlineCode",{parentName:"p"},"source ~/.bashrc")),(0,o.kt)("p",null,"To check on sync status type; ",(0,o.kt)("inlineCode",{parentName:"p"},"syscli mnsync status")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Now head to your Syscoin QT to Register your masternode")),(0,o.kt)("h2",{id:"prepare-a-proregtx-transaction"},"Prepare a ProRegTx transaction"),(0,o.kt)("p",null,"A pair of BLS keys for the operator were already generated above, and the secret key was entered on the masternode. The public key is used in this transaction as the operatorPubKey"),(0,o.kt)("p",null,"First, we need to get a new, unused address from the wallet to serve as the owner key address ownerKeyAddr. This is not the same as the collateral address holding 100,000 Syscoin. This address must be different for each MN."),(0,o.kt)("p",null,"Generate a new address as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"getnewaddress mn1-owner\n")),(0,o.kt)("p",null,"This address can also be used as the voting key address ",(0,o.kt)("strong",{parentName:"p"},"votingKeyAddr"),". Alternatively, you can specify an address provided to you by your chosen voting delegate, or simply generate a new voting key address as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"getnewaddress mn1-voting\n")),(0,o.kt)("p",null,"Then either generate or choose an existing address to receive the owner\u2019s masternode payouts ",(0,o.kt)("strong",{parentName:"p"},"payoutAddress"),". This address cannot be the same as your owner or voting address, it is also possible to use an address external to the wallet:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"getnewaddress payouts\n")),(0,o.kt)("p",null,"You can also optionally generate and fund another address as the transaction fee source ",(0,o.kt)("strong",{parentName:"p"},"feeSourceAddress"),". If you selected an external payout address, you must specify a fee source address."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Either the payout address or fee source address must have enough balance to pay the transaction fee, or the register_prepare transaction will fail.")),(0,o.kt)("p",null,"The private keys to the owner and fee source addresses must exist in the wallet submitting the transaction to the network. If your wallet is protected by a password, it must now be unlocked to perform the following commands. Unlock your wallet for 5 minutes:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"walletpassphrase yourSecretPassword 300\n")),(0,o.kt)("h2",{id:"donate-to-the-syscoin-foundation"},"Donate to the Syscoin Foundation"),(0,o.kt)("p",null,"When Registering your Syscoin Masternode in the next step you have the option to donate a percentage of your rewards to someone else via the ",(0,o.kt)("strong",{parentName:"p"},"operatorReward")," argument. Please help support the team and choose an amount that you are happy to donate such as 5% to 10%. By doing this you help the efforts of the Foundation on creating a solid network and the continued development of Syscoin. If you do select an amount, there will be an extra step at the end of the tutorial that you will need to complete via Syscoin QT console. ",(0,o.kt)("strong",{parentName:"p"},"The team thanks you in advance for your continued support.")),(0,o.kt)("h2",{id:"register-protx"},"Register ProTx"),(0,o.kt)("p",null,"We will now prepare an unsigned ProRegTx special transaction using the protx_register_prepare command."),(0,o.kt)("p",null,"This command has the following syntax:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"protx_register_prepare collateralHash collateralIndex ipAndPort ownerKeyAddr operatorPubKey votingKeyAddr operatorReward payoutAddress (feeSourceAddress)\n")),(0,o.kt)("p",null,"Open a text editor such as notepad ++ to prepare this command or head to ",(0,o.kt)("a",{parentName:"p",href:"https://syshub-dev.web.app/masternodes/masternode-registration"},"SysHub Masternode Registration"),"."),(0,o.kt)("p",null,"Replace each argument to the command as follows:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"collateralHash: The txid of the 100000 Syscoin collateral funding transaction"),(0,o.kt)("li",{parentName:"ul"},"collateralIndex: The output index of the 100000 Syscoin funding transaction"),(0,o.kt)("li",{parentName:"ul"},"ipAndPort: Masternode IP address and port, in the format x.x.x.x:yyyy"),(0,o.kt)("li",{parentName:"ul"},"ownerKeyAddr: The Syscoin address generated above for the owner address"),(0,o.kt)("li",{parentName:"ul"},"operatorPubKey: The BLS public key generated above (or provided by your hosting service)"),(0,o.kt)("li",{parentName:"ul"},"votingKeyAddr: The Syscoin address generated above, or the address of a delegate, used for proposal voting"),(0,o.kt)("li",{parentName:"ul"},"operatorReward: The percentage of the block reward allocated to the operator as payment, 0 for no reward - this is if you want to pay someone else a % of your rewards. ",(0,o.kt)("strong",{parentName:"li"},"This is the part where if you would like to donate to the Syscoin Foundation.")),(0,o.kt)("li",{parentName:"ul"},"payoutAddress: A Syscoin address to receive the owner\u2019s masternode rewards."),(0,o.kt)("li",{parentName:"ul"},"feeSourceAddress: An (optional) address used to fund ProTx fee. payoutAddress will be used if not specified.")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Note that the operator is responsible for specifying their own reward address in a separate update_service transaction if you specify a non-zero operatorReward. The owner of the masternode collateral does not specify the operator\u2019s payout address.")),(0,o.kt)("p",null,"Either the ",(0,o.kt)("strong",{parentName:"p"},"feeSourceAddress")," or ",(0,o.kt)("strong",{parentName:"p"},"payoutAddress")," must hold a small balance since a standard transaction fee is involved. Example (remove line breaks if copying):"),(0,o.kt)("p",null,"Note in this example I will use the same address for owner and voting and i will have sent a small amount of Sys to the payoutAddress for fees as i am not using feeSourceAddress."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"(Remember to lock your collateral if using a seniority address)")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'Output:\n{\n  "tx": "5000000000010163dc2d9a36a7a620386a23002ab6b8a2aba0956e7e047b73a6cf27d9d51571e80100000000feffffff020000000000000000d16a4cce0100000000008d00cb63fec47e6cd65d7c6f2903e6d1de566539e5341fcde5e1200f92a404330000000000000000000000000000ffffa1618f4447c12f73258d961fe6082720ecc7415d4ebebdadb37905afc5f75d0a215951677703e41a108a67f2efb31110e392d988dbd4f9e8446a3336d59de1ff886ec0d3c65c822af2de2f73258d961fe6082720ecc7415d4ebebdadb3790000160014e7395ee2f4986418b03bee442c2f051c6357d0318e95079d496ed43baba5101dab0ab5ace776ac1b0b7fcba7711a2504c9ea36610074c89a3b00000000160014279a7a94c83130b3eee07f2c66b2faa94b6cfe990247304402201f1e01ab33d4f388386ca5df94818674cf4b1909806c3a92ffc11ded88d84dfb02206d289cca1fbd19bc5154c85ec4f1eb3748f77071d863ae4f6aa18f56807f76e801210298a88bd8293e4d0248eb89f276cb54c26b3686ea4e17df155a22bfed2426862800000000",\n  "collateralAddress": "TB59KQk6WsMaJxkc8UB3hudjtGMqfeQWSG",\n  "signMessage": "sys1quuu4ach5npjp3vpmaezzctc9r33405p39khz67|0|tsys1q9aejtrvkrlnqsfeqanr5zh2wh676mvmekj4hj0|tsys1q9aejtrvkrlnqsfeqanr5zh2wh676mvmekj4hj0|00def144051468bdb1a855f01bf9f022091c4c0ebc745d1ecc28ac418c9af2e0"\n}\n')),(0,o.kt)("p",null,"Next we will use the collateralAddress and signMessage fields to sign the transaction, and the output of the tx field to submit the transaction."),(0,o.kt)("h2",{id:"sign-the-proregtx-transaction"},"Sign the ProRegTx transaction"),(0,o.kt)("p",null,"We will now sign the content of the signMessage (returned above) field using the public key for the collateral address as specified in collateralAddress. The wallet used to sign must hold the private key to the collateral address and note that no internet connection is required for this step, meaning that the wallet can remain disconnected from the internet in cold storage to sign the message."),(0,o.kt)("p",null,"The command takes the following syntax:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"signmessagebech32 collateralAddress signMessage\n")),(0,o.kt)("p",null,"Example: (excluding \u201c \u201d)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"signmessagebech32 TB59KQk6WsMaJxkc8UB3hudjtGMqfeQWSG tsys1quuu4ach5npjp3vpmaezzctc9r33405p39khz67|0|tsys1q9aejtrvkrlnqsfeqanr5zh2wh676mvmekj4hj0|tsys1q9aejtrvkrlnqsfeqanr5zh2wh676mvmekj4hj0|00def144051468bdb1a855f01bf9f022091c4c0ebc745d1ecc28ac418c9af2e0\n")),(0,o.kt)("p",null,"Output: ",(0,o.kt)("inlineCode",{parentName:"p"},"IGj1ORdk3yv/uAMKG+DZrBA/GTHX4dW8zn/rmMfGzOzCIaxqmyUbNveYtnqh9wLVECENMjyuyeR2VmB3ccNlRLw=")),(0,o.kt)("h2",{id:"submit-the-signed-message"},"Submit the signed message"),(0,o.kt)("p",null,"We will now submit the ProRegTx special transaction to the blockchain to register the masternode. This command must be sent from the wallet holding a balance on either the feeSourceAddress or payoutAddress, since a standard transaction fee is involved."),(0,o.kt)("p",null,"The command takes the following syntax:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"protx_register_submit tx sig\n")),(0,o.kt)("p",null,"Where: tx: The serialized transaction previously returned in the tx output field from the protx_register_prepare command sig: The message returned from the signmessagebech32 command."),(0,o.kt)("p",null,"Example: (excluding \u201c \u201d)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"protx_register_submit 5000000000010163dc2d9a36a7a620386a23002ab6b8a2aba0956e7e047b73a6cf27d9d51571e80100000000feffffff020000000000000000d16a4cce0100000000008d00cb63fec47e6cd65d7c6f2903e6d1de566539e5341fcde5e1200f92a404330000000000000000000000000000ffffa1618f4447c12f73258d961fe6082720ecc7415d4ebebdadb37905afc5f75d0a215951677703e41a108a67f2efb31110e392d988dbd4f9e8446a3336d59de1ff886ec0d3c65c822af2de2f73258d961fe6082720ecc7415d4ebebdadb3790000160014e7395ee2f4986418b03bee442c2f051c6357d0318e95079d496ed43baba5101dab0ab5ace776ac1b0b7fcba7711a2504c9ea36610074c89a3b00000000160014279a7a94c83130b3eee07f2c66b2faa94b6cfe990247304402201f1e01ab33d4f388386ca5df94818674cf4b1909806c3a92ffc11ded88d84dfb02206d289cca1fbd19bc5154c85ec4f1eb3748f77071d863ae4f6aa18f56807f76e801210298a88bd8293e4d0248eb89f276cb54c26b3686ea4e17df155a22bfed2426862800000000 IGj1ORdk3yv/uAMKG+DZrBA/GTHX4dW8zn/rmMfGzOzCIaxqmyUbNveYtnqh9wLVECENMjyuyeR2VmB3ccNlRLw=\n")),(0,o.kt)("p",null,"Output:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"285fba6277586401f8efaf55d4eef7acfa6d690a30c0db7f213a0bb2c6194bd1\n")),(0,o.kt)("p",null,"Your masternode is now registered and will appear on the Deterministic Masternode List after the transaction is mined to a block."),(0,o.kt)("p",null,"You can view this list on the Masternodes tab in QT, or in the console using the command protx_list valid, where the txid of the final protx_register_submit transaction identifies your masternode."),(0,o.kt)("h2",{id:"specifying-donation-address-for-operatorreward-optional"},"Specifying donation address for operatorReward (optional)"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Syscoin Foundation Address:")," ",(0,o.kt)("inlineCode",{parentName:"p"},"sys1q6u9ey7qjh3fmnz5gsghcmpnjlh2akem4xm38sw")),(0,o.kt)("p",null,"You only need to do this if you input a value greater than 0 when completing the ProRegTx for operatorReward."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"protx_update_service proTxHash ipAndPort operatorKey (operatorPayoutAddress feeSourceAddress)\n")),(0,o.kt)("p",null,"Where:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"proTxHash: The hash of the initial ProRegTx"),(0,o.kt)("li",{parentName:"ul"},"ipAndPort: IP and port in the form \u201cip:port\u201d"),(0,o.kt)("li",{parentName:"ul"},"operatorKey: The operator BLS private key associated with the registered operator public key"),(0,o.kt)("li",{parentName:"ul"},"operatorPayoutAddress: The address used for operator reward payments."),(0,o.kt)("li",{parentName:"ul"},"feeSourceAddress (optional): An address used to fund ProTx fee. operatorPayoutAddress will be used if not specified.")),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"protx update_service 285fba6277586401f8efaf55d4eef7acfa6d690a30c0db7f213a0bb2c6194bd1 161.97.140.65:8369 1a8f477d2b02650b7d159efe315940f05252334eb292376309386cc99b0c4ec7 sys1q6u9ey7qjh3fmnz5gsghcmpnjlh2akem4xm38sw\n")),(0,o.kt)("h2",{id:"masternode-commands"},"MASTERNODE COMMANDS"),(0,o.kt)("h6",{id:"view-your-syscoinconf"},"view your syscoin.conf"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"sudo cat /home/syscoin/.syscoin/syscoin.conf\n")),(0,o.kt)("h6",{id:"view-your-sentinelconf"},"view your sentinel.conf"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"sudo cat /home/syscoin/sentinel/sentinel.conf\n")),(0,o.kt)("h6",{id:"view-the-syscoin-user-crontab-which-should-contain"},"view the syscoin user crontab which should contain:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"sudo crontab -u syscoin -l\n")),(0,o.kt)("h6",{id:"run-a-sentinel-ping-to-speed-up-qt-syncing-why-not"},"run a sentinel ping to speed up Qt syncing? why not!"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'sudo su -c "sentinel-ping" syscoin\n')),(0,o.kt)("h6",{id:"view-the-sentinel-ping-cron-log-look-for-errors"},"view the sentinel-ping cron log, look for errors"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"sudo less /home/syscoin/sentinel/sentinel-cron.log\n")),(0,o.kt)("h6",{id:"view-the-syscoind-debug-log-look-for-errors"},"view the syscoind debug log, look for errors"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"sudo less /home/syscoin/.syscoin/debug.log\n")),(0,o.kt)("h6",{id:"start-and-stop-the-syscoind-systemd-service"},"start and stop the syscoind systemd service"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"sudo service syscoind stop\nsudo service syscoind start\nsudo service syscoind restart\n")),(0,o.kt)("h6",{id:"check-that-the-syscoind-process-is-running-at-the-proper-user"},"check that the syscoind process is running at the proper user"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"ps aux | grep [s]yscoind\n")),(0,o.kt)("h6",{id:"log-out-and-back-in-or-run-the-following-to-alias-syscoind-and-syscoin-cli"},"log out and back in or run the following to alias syscoind and syscoin-cli"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"source ~/.bashrc\n")),(0,o.kt)("h6",{id:"now-the-commands-run-as-the-syscoin-user"},"now the commands run as the syscoin user"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"syscoin-cli getblockchaininfo\nsyscoin-cli mnsync status\nsyscoin-cli masternode_status\n")),(0,o.kt)("h6",{id:"it-is-aliased-to-this-shorter-function"},"it is aliased to this shorter function"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"syscli getblockchaininfo\nsyscli mnsync status\nsyscli masternode_status\n")),(0,o.kt)("h6",{id:"if-you-really-want-to-log-in-as-the-syscoin-user"},"if you really want to log in as the syscoin user"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"sudo su - syscoin\n")))}c.isMDXComponent=!0}}]);