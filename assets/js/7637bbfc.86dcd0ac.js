(self.webpackChunksys_docs=self.webpackChunksys_docs||[]).push([[7283],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),h=l(n),m=a,y=h["".concat(s,".").concat(m)]||h[m]||u[m]||o;return n?r.createElement(y,i(i({ref:t},p),{},{components:n})):r.createElement(y,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=h;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},31072:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return c},toc:function(){return s},default:function(){return p}});var r=n(22122),a=n(19756),o=(n(67294),n(3905)),i={sidebar_position:1},c={unversionedId:"intro/syscoin-what",id:"intro/syscoin-what",isDocsHomePage:!1,title:"About Syscoin",description:"What is Syscoin?",source:"@site/docs/intro/syscoin-what.mdx",sourceDirName:"intro",slug:"/intro/syscoin-what",permalink:"/docs/intro/syscoin-what",version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Welcome",permalink:"/docs/"},next:{title:"Why use Syscoin?",permalink:"/docs/intro/syscoin-why"}},s=[{value:"What is Syscoin?",id:"what-is-syscoin",children:[]},{value:"Why use Syscoin?",id:"why-use-syscoin",children:[]}],l={toc:s};function p(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"what-is-syscoin"},"What is Syscoin?"),(0,o.kt)("p",null,"Syscoin is a Proof of Work blockchain, merge-mined with Bitcoin. At its base it is a dual-layered blockchain: the core is the Syscoin blockchain itself, and running in tandem with it is an Ethereum Virtual Machine (EVM) layer called ",(0,o.kt)("a",{parentName:"p",href:"../tech/nevm"},(0,o.kt)("em",{parentName:"a"},"NEVM"))," (Network-Enhanced Virtual Machine), which provides smart contract functionality."),(0,o.kt)("p",null,"Notable features of Syscoin include:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"../tech/nevm"},(0,o.kt)("em",{parentName:"a"},"NEVM"))," - the Network-Enhanced Virtual Machine that powers Syscoin's smart contract layer.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"../tech/z-dag"},(0,o.kt)("em",{parentName:"a"},"Z-DAG"))," - an instant settlement protocol used to enable blisteringly fast Syscoin Platform Token (SPT) transfers.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"../tech/masternodes"},(0,o.kt)("em",{parentName:"a"},"Masternodes"))," - incentivized full nodes which utilize ",(0,o.kt)("a",{parentName:"p",href:"../tech/chainlocks"},(0,o.kt)("em",{parentName:"a"},"chainlock"))," technology to come to a consensus on the next block mined in the blockchain and are paid to provide services to the network such as facilitating Z-DAG transactions.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"../tech/notary"},(0,o.kt)("em",{parentName:"a"},"Notary rulesets"))," - in a nutshell these allow ",(0,o.kt)("a",{parentName:"p",href:"../tech/tokens"},(0,o.kt)("em",{parentName:"a"},"Syscoin Platform Token (SPT)"))," creators to apply their own rulesets on transfers of their SPT and then accept or deny the transfers by signing or not signing the transactions. These off-chain rulesets enable SPT creators to maintain regulatory compliance even when regulations change."))),(0,o.kt)("h2",{id:"why-use-syscoin"},"Why use Syscoin?"))}p.isMDXComponent=!0}}]);