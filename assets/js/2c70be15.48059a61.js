"use strict";(self.webpackChunksys_docs=self.webpackChunksys_docs||[]).push([[8596],{98338:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>A});var r=n(76687);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,o=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=l(n),f=s,A=p["".concat(u,".").concat(f)]||p[f]||d[f]||o;return n?r.createElement(A,a(a({ref:t},c),{},{components:n})):r.createElement(A,a({ref:t},c))}));function A(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=n.length,a=new Array(o);a[0]=f;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[p]="string"==typeof e?e:s,a[1]=i;for(var l=2;l<o;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},53855:(e,t,n)=>{n.r(t),n.d(t,{default:()=>c,frontMatter:()=>o,metadata:()=>a,toc:()=>i});var r=n(87250),s=(n(76687),n(98338));const o={},a={unversionedId:"dev-resources/sys/testnet",id:"dev-resources/sys/testnet",isDocsHomePage:!1,title:"Testnet Setup",description:"Syscoin 4.3 Testnet Setup Guide",source:"@site/docs/dev-resources/sys/testnet.mdx",sourceDirName:"dev-resources/sys",slug:"/dev-resources/sys/testnet",permalink:"/docs/dev-resources/sys/testnet",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"SPT Exchange Integration",permalink:"/docs/dev-resources/sys/exchange-integration"},next:{title:"Testnet Sentry Node Setup Guide",permalink:"/docs/dev-resources/sys/testnet_sentrynode"}},i=[{value:"Syscoin 4.3 Testnet Setup Guide",id:"syscoin-43-testnet-setup-guide",children:[{value:"Below are the minimum requirements for your VPS. Please do not try to compile without the minimum.",id:"below-are-the-minimum-requirements-for-your-vps-please-do-not-try-to-compile-without-the-minimum",children:[]},{value:"Setup QT for Testnet",id:"setup-qt-for-testnet",children:[]}]}],u={toc:i},l="wrapper";function c(e){let{components:t,...o}=e;return(0,s.kt)(l,(0,r.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"syscoin-43-testnet-setup-guide"},"Syscoin 4.3 Testnet Setup Guide"),(0,s.kt)("h3",{id:"below-are-the-minimum-requirements-for-your-vps-please-do-not-try-to-compile-without-the-minimum"},"Below are the minimum requirements for your VPS. Please do not try to compile without the minimum."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"64-bit CPU \u2014 2 Cores (4 preferred)")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"4gb RAM (real) minimum (8gb RAM preferred)")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"4gb swap (if less than 8gb real RAM) Will need to use SSD if using Swap")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"KVM or OpenVZ (KVM preferred)")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Linux OS \u2014 Minimum Ubuntu 18.04, LTS Ubuntu 20.04 LTS (Focal Fossa) preferred.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"80gb Disk Space (100gb+ SSD preferred).")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Port open for Syscoin (default: 18369) and Geth (default: 30303)"))),(0,s.kt)("h3",{id:"setup-qt-for-testnet"},"Setup QT for Testnet"),(0,s.kt)("p",null,"You will need to setup a separate datadir for use on Testnet."),(0,s.kt)("p",null,"Replace 4.2 with 4.3 if necessary"),(0,s.kt)("p",null,"Choose a location for the Testnet data and create a folder, I use"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"D:\\Users\\john\\AppData\\Roaming\\Syscoin4.3TestNet\n")),(0,s.kt)("p",null,"Open this folder and create a syscoin.conf file with the following and save it as syscoin.conf."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"#rpc config\ntestnet=1\n[test]\nzmqpubnevm=\nrpcuser=user\nrpcpassword=password\nlisten=1\ndaemon=1\nserver=1\nassetindex=1\nport=18369\nrpcport=18370\nrpcallowip=127.0.0.1\ngethtestnet=1\naddnode=54.203.169.179\naddnode=54.190.239.153\n")),(0,s.kt)("p",null,"Close and save this file as syscoin.conf before running QT."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Now we need to tell QT to use this directory for Testnet")),(0,s.kt)("p",null,"Use latest RC release and for windows use the win64.zip unzip and run from the download folder. (If you use the installer it will overwrite any existing installation)"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/syscoin/syscoin/releases"},"https://github.com/syscoin/syscoin/releases")),(0,s.kt)("p",null,"Locate your syscoin-qt.exe, Use 4.3rc x"),(0,s.kt)("p",null,"Right click on it and create a shortcut"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"img",src:n(88516).Z})),(0,s.kt)("p",null,"You might have to save it to your desktop"),(0,s.kt)("p",null,"Rename the shortcut to something like"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"syscoin-qt.exe \u2014 TestNet\n")),(0,s.kt)("p",null,"Right click on the shortcut and choose properties"),(0,s.kt)("p",null,"In the target field add -datadir and the location (created above)after syscoin-qt.exe so it looks like this (note the space before -datadir)"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"\u201cC:\\Program Files\\Syscoin\\syscoin-qt.exe\u201d \n-datadir=D:\\Users\\john\\AppData\\Roaming\\Syscoin4.3TestNet\n")),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"img",src:n(16397).Z})),(0,s.kt)("p",null,"If you want you can change the icon to distinguish it from Live"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"img",src:n(67805).Z})),(0,s.kt)("p",null,"Press OK to save changes"),(0,s.kt)("p",null,"Now run QT from this shortcut and it will run QT on Testnet"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"img",src:n(86826).Z})),(0,s.kt)("p",null,"Once synced you can follow this guide to request tSYS for testing:"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"../tsys"},"TSYS Faucets")),(0,s.kt)("p",null,"You can also follow the testnet Sentry Node setup guide here:"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"testnet_sentrynode"},"Testnet Sentry Node Setup Guide")))}c.isMDXComponent=!0},67805:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/change_icon-ae371d83fe2ca8b4c7f85a58b50cad24.png"},88516:(e,t,n)=>{n.d(t,{Z:()=>r});const r="data:image/png;base64,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"},16397:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/shortcut_props-3fa7b5eb06466c07e951a58e328db814.png"},86826:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/sys_core-ff03fc2406b1d6b36b8bd69330b57c30.png"}}]);