(self.webpackChunksys_docs=self.webpackChunksys_docs||[]).push([[3255],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=i,p=d["".concat(c,".").concat(m)]||d[m]||h[m]||r;return n?a.createElement(p,o(o({ref:t},u),{},{components:n})):a.createElement(p,o({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var l=2;l<r;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},30660:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return s},toc:function(){return c},default:function(){return u}});var a=n(22122),i=n(19756),r=(n(67294),n(3905)),o={},s={unversionedId:"tech/nevm",id:"tech/nevm",isDocsHomePage:!1,title:"NEVM",description:"What are Virtual Machines?",source:"@site/docs/tech/nevm.mdx",sourceDirName:"tech",slug:"/tech/nevm",permalink:"/docs/tech/nevm",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Merged-Mining",permalink:"/docs/tech/merged-mining"},next:{title:"Notary and Business Rulesets",permalink:"/docs/tech/notary"}},c=[{value:"What are Virtual Machines?",id:"what-are-virtual-machines",children:[]},{value:"Importance of Virtual Machines",id:"importance-of-virtual-machines",children:[]},{value:"What is Syscoin\u2019s Network-Enhanced Virtual Machine (NEVM)?",id:"what-is-syscoins-network-enhanced-virtual-machine-nevm",children:[]},{value:"Advantages of NEVM",id:"advantages-of-nevm",children:[]}],l={toc:c};function u(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"what-are-virtual-machines"},"What are Virtual Machines?"),(0,r.kt)("p",null,"Ethereum pioneered the virtual machine, which is essentially a processing machine for Ethereum-based smart contracts. A smart contract can range from a basic ERC20 token to a more sophisticated piece of code that underpins a decentralized application in this context."),(0,r.kt)("p",null,"The Ethereum Virtual Machine (EVM) offers a layer of abstraction between the smart contract code and the Ethereum network\u2019s machine that executes it. Most Ethereum smart contracts are written in Solidity, a programming language created by Dr. Gavin Wood, one of Ethereum\u2019s founders. EVM will also provide support for eWasm (Ethereum WebAssembly) which will enable smart contracts to be coded in various languages including C, C++, and more, which can be trans compiled and executed."),(0,r.kt)("p",null,"The EVM does not directly execute code. Instead, the code is compiled into opcodes when a smart contract developer is ready to deploy it. Opcodes are a collection of 141 unique instructions that the EVM employs to carry out activities depending on the coded instructions in the smart contract."),(0,r.kt)("p",null,"Each opcode has a fixed gas cost; however, some may also have a dynamic gas cost. The computational effort required to perform any given transaction on the Ethereum network is measured in gas, which in turn is used to calculate transaction fees in combination with the current demands, i.e. \u201ctraffic\u201d, on the Ethereum network."),(0,r.kt)("p",null,"Turing-completeness refers to a computer\u2019s capacity to tackle every solvable issue. The EVM\u2019s 141 opcodes, meant to calculate every situation, was meant to be Turing-complete in theory. On a practical level, however, the EVM isn\u2019t truly Turing-complete since the amount of gas available limits every computation."),(0,r.kt)("h2",{id:"importance-of-virtual-machines"},"Importance of Virtual Machines"),(0,r.kt)("p",null,"EVM introduced the world to the concept of decentralized smart contracts and conditional transactions which Bitcoin was unable to provide. The conditions for these transactions (the smart contracts), and execution of them by EVM, elevated blockchain tech beyond the very limited use of monetary transactionality, or simple value transfer, to serve as a decentralized computer."),(0,r.kt)("p",null,"The EVM is not without flaws. The most glaring example of this for the Ethereum network is that, due to design, it is not scalable. This means that as demand grows the network is unable to consistently provide reasonable transaction costs and fulfilment time. Ethereum is pursuing a proof-of-stake security system with the aim of addressing this, but it comes at a great cost; proof-of-stake is inherently less secure, and less proven (academically and in the real world) than proof-of-work."),(0,r.kt)("h2",{id:"what-is-syscoins-network-enhanced-virtual-machine-nevm"},"What is Syscoin\u2019s Network-Enhanced Virtual Machine (NEVM)?"),(0,r.kt)("p",null,"Syscoin NEVM is designed to provide smart contracts and interoperability that can scale to smart cities and beyond, while remaining low-cost and performant, and providing robust decentralized settlements that are secured by Bitcoin\u2019s own proof-of-work security model via merged-mining. Blockchain users and market participants will increasingly realize the importance of proven security, especially as the risks of sundry experimental security models \u201ccome home to roost\u201d. Furthermore, once Ethereum shifts to proof-of-stake, other proof-of-stake computation platforms will move closer to becoming superfluous, while Syscoin\u2019s security will continue to be relevant."),(0,r.kt)("p",null,"With NEVM, Syscoin will essentially combine the strongest elements of Bitcoin (security model, merge-mined hashrate potential, UTXO efficiency and compatibility with future UTXO advancements) with Ethereum (broad usefulness of generalized computation), into a single decentralized coordinated financial computation platform. Syscoin will also improve upon both aspects. For example, on the UTXO side, chainlocks will address Bitcoin\u2019s long-standing \u201cselfish mining\u201d vulnerability and harden the network against reorg impact after a chain lock is established which usually takes up to a minute after each block. On the NEVM side, we will implement zero-knowledge proofs to offer scalability and trustless interoperability for Turing-complete smart contracts. The chainlock\u2019s mechanism gives a finality guarantee which is the desired effect of sharding and proof-of-stake on Ethereum 2.0. With finality, we can achieve better constraints for usable roll-up designs such as optimistic roll-ups, which require a waiting period of two weeks on Ethereum mainnet and can be much less on Syscoin due to new finality guarantees that chainlocks provide. On Syscoin the contracts would only have to wait hours on such designs and with the use of zero-knowledge proofs in zkRollups these withdrawal delays can be eliminated entirely."),(0,r.kt)("h2",{id:"advantages-of-nevm"},"Advantages of NEVM"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Smart contracts can scale to an arbitrary number of transactions using a blockchain that provides concise proofs of one-time executions which can be validated in parallel, instead of re-executing them."),(0,r.kt)("li",{parentName:"ul"},"A decentralized cost model that leads to a significantly more efficient market for gas fees"),(0,r.kt)("li",{parentName:"ul"},"Sublinear, reliable, fault-tolerant blockchain with interactive data availability"),(0,r.kt)("li",{parentName:"ul"},"Trustless cross-chain interoperability is generalized for easy integration with various blockchains, in a way that provides far less cost and technical overhead compared to SysEthereum v1."),(0,r.kt)("li",{parentName:"ul"},"A coordinated platform with optimal features for easy value transfer, store-of-value, and generalized computing, while retaining concern separation and scalability"),(0,r.kt)("li",{parentName:"ul"},"The security of merged-mining the most reliable PoW network, tapping into most significant hashrate resource available: Bitcoin"),(0,r.kt)("li",{parentName:"ul"},"Finality guarantee through chainlocks, which is based on the security of validators holding some amount of coins mined via PoW and participating in a supermajority of consensus on the current chain tip. This is free from the shortcomings of Proof-Of-Stake and especially the \u201cnothing-at-stake\u201d, which involves validators that are providing consensus without the backing of real sunk costs (energy, infrastructure). In the event a supermajority is not established, the chainlock mechanism resolves back down to a regular bitcoin-type policy.")))}u.isMDXComponent=!0}}]);