(self.webpackChunksys_docs=self.webpackChunksys_docs||[]).push([[8478],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return l},kt:function(){return d}});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),m=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},l=function(e){var n=m(e.components);return r.createElement(s.Provider,{value:n},e.children)},h={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=m(t),d=i,p=u["".concat(s,".").concat(d)]||u[d]||h[d]||o;return t?r.createElement(p,a(a({ref:n},l),{},{components:t})):r.createElement(p,a({ref:n},l))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=u;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var m=2;m<o;m++)a[m]=t[m];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},75648:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return a},metadata:function(){return c},toc:function(){return s},default:function(){return l}});var r=t(22122),i=t(19756),o=(t(67294),t(3905)),a={},c={unversionedId:"tech/merged-mining",id:"tech/merged-mining",isDocsHomePage:!1,title:"Merged-Mining",description:"Merged-mining, also known as Auxiliary Proof-of-Work, is a means by which Proof-of-Work blockchain miners can mine multiple blockchains at the same time. In Syscoin's example, around 20% of the hashpower mining Bitcoin is also used to mine Syscoin at no extra cost. As a nice analogy, it could be seen as someone (the miner) entering the lottery again and again in order to win (mine a block and be rewarded for it), with merged-mining the miner can submit the same lottery numbers to two different lotteries (blockchains). This means that they can increase their profits without having to spend extra energy towards mining the second chain, and the second chain that is being mined benefits from the increased security provided by the miners.",source:"@site/docs/tech/merged-mining.mdx",sourceDirName:"tech",slug:"/tech/merged-mining",permalink:"/docs/tech/merged-mining",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Masternodes",permalink:"/docs/tech/masternodes"},next:{title:"NEVM",permalink:"/docs/tech/nevm"}},s=[],m={toc:s};function l(e){var n=e.components,t=(0,i.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Merged-mining, also known as Auxiliary Proof-of-Work, is a means by which Proof-of-Work blockchain miners can mine multiple blockchains at the same time. In Syscoin's example, around 20% of the hashpower mining Bitcoin is also used to mine Syscoin at no extra cost. As a nice analogy, it could be seen as someone (the miner) entering the lottery again and again in order to win (mine a block and be rewarded for it), with merged-mining the miner can submit the same lottery numbers to two different lotteries (blockchains). This means that they can increase their profits without having to spend extra energy towards mining the second chain, and the second chain that is being mined benefits from the increased security provided by the miners."),(0,o.kt)("p",null,"With Proof-of-Work blockchains, there is the risk of 51% attacks. These are attacks where malicious miners can mine using more hashpower than honest miners, at which point the malicious miners can re-organize the blockchain and commit double-spends (spending the same money twice). Merged-mining is a very beneficial way to mitigate against the risk of 51% attack, especially when the parent blockchain is Bitcoin with the massive amount of hashpower that goes into mining it. On top of this Syscoin also utilizes ",(0,o.kt)("a",{parentName:"p",href:"/docs/tech/chainlocks"},"ChainLock technology")," to practically eliminate the possibility of 51% attacks enacted by malicious miners."))}l.isMDXComponent=!0}}]);